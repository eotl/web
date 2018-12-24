import * as GithubSlugger from 'github-slugger';

const DESCRIPTION_CHILDREN = 8;

export function escapePath(path) {
  return path.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function parentPath(path) {
  if (path.slice(-6) === "/index") {
    path = path.slice(0, -6);
  } else if (path.slice(-1) === "/") {
    path = path.slice(0, -1);
  }
  return path.replace(/\/[^/]*$/, '');
}

export function resolvePath(markdown, path) {
  if (path in markdown) {
    return path;
  }
  if (path + '/' in markdown) {
    return path + '/';
  } 
  return path;
}

export function mungeCategory(markdown, category) {
  if (category + "/" in markdown) {
    category += "/";
  }
  if (category.slice(0, -6) === "/index") {
    category = category.slice(0, -5);
  }
  return category;
}

export function getBreadcrumbs(markdown, path) {
  path = resolvePath(markdown, path);
  let breadcrumbs = parentPath(path).split('/').slice(1);
  for (let i = 0; i < breadcrumbs.length; i++) {
    let parent = '/';
    if (i !== 0) {
      parent = breadcrumbs[i-1];
    }
    breadcrumbs[i] = parent + breadcrumbs[i] + '/';
  }
  return breadcrumbs;
}

export function getSubcategories(markdown, category) {
  category = escapePath(category);
  return Object.keys(markdown)
    .filter((path) => {
      return path.match("^" + category + "[^/]+\\/$");
    })
    .map((path) => markdown[path])
    .sort((a,b) => a.path > b.path);
}

export function getArticles(markdown, category) {
  category = escapePath(category);
  return Object.keys(markdown)
    .filter((path) => {
      return (path.slice(-6) !== "/index") 
        && path.match("^" + category + "[^/]+$");
    })
    .map((path) => markdown[path])
    .sort((a,b) => a.path > b.path);
}

export function getChildren(markdown, category) {
  return getSubcategories(markdown, category).concat(getArticles(markdown, category));
}

export function getArticlesByName(markdown, names) {
  return names
    .map(name => {
      name = name
        .replace(/\s+/g, '_')
        .toLowerCase()
        .replace(/\//g, "\\/");
      return Object.keys(markdown).filter(path => {
        return path.match("/" + name + "/?$");
      });
    })
    .flat()
    .map(path => markdown[path]);
}

export function getTitle(markdown, path) {
  let title = undefined;
  path = resolvePath(markdown, path);
  if (path in markdown) {
    title = markdown[path].frontMatter.title;
  }
  if (!title) {
    let match = path.match(/([^/]+)\/?$/);
    if (match) {
      title = match[1].replace(/_+/g, ' ');
      title = title[0].toUpperCase() + title.slice(1);
    }
  }
  return title;
}

export function getDescription(markdown, path) {
  let description = undefined;
  path = resolvePath(markdown, path);
  if (path in markdown) {
    description = markdown[path].frontMatter.description;
  }
  if (!description && markdown[path].isCategory) {
    const subcategories = getSubcategories(markdown, path);
    const articles = getArticles(markdown, path);
    description = "";
    for (let i = 0; i < DESCRIPTION_CHILDREN; i++) {
      if (subcategories.length > i) {
        if (i !== 0) {
          description += ", ";
        }
        description += getTitle(markdown, subcategories[i].path);
      } else if (articles.length > i - subcategories.length) {
        if (i !== 0) {
          description += ", ";
        }
        description += getTitle(markdown, articles[i - subcategories.length].path);
      } else {
        break;
      }
    }
  }
  return description;
}

export function getSpoilerLevel(markdown, path) {
  let spoilerLevel = undefined;
  path = resolvePath(markdown, path);
  if (path in markdown) {
    spoilerLevel = markdown[path].frontMatter.spoilerLevel;
  }
  if (!spoilerLevel) {
    spoilerLevel = 'none';
  }
  return spoilerLevel;
}

export function getHeaders(markdown, path, depth=0) {
  const levels = {
    '_root': 0,
    'h1': 1,
    'h2': 2, 
    'h3': 3,
    'h4': 4,
    'h5': 5,
    'h6': 6,
  };

  const findHeaders = (jsx) => { 
    if (jsx.props.children instanceof Array) {
      for (let i = 0; i < jsx.props.children.length; i++) {
        if (typeof jsx.props.children[i] !== 'string') {
          if (jsx.props.children[i].type in levels) {
            return jsx.props.children;
          } else {
            const headers = findHeaders(jsx.props.children[i]);
            if (headers.length > 0) {
              return headers;
            }
          }
        }
      }
    }
    return [];
  };
  const headers = findHeaders(markdown[path].jsx);

  let stack = [ ];
  const slugger = new GithubSlugger()
  for (let i = 0; i < headers.length; i++) {
    const header = headers[i];
    if (!(header.type in levels)) {
      continue;
    }
    if (typeof header.props.children !== 'string') {
      continue;
    } 
    const level = levels[header.type];
    if (stack.length === 0) {
      stack.push({
        type: '_root',
        children: [ ],
        parent: undefined
      })
    }
    const top = stack.slice(-1)[0];
    const topLevel = levels[top.type];
    const info = {
        type: header.type,
        text: header.props.children,
        slug: slugger.slug(header.props.children),
        children: [ ],            
    }
    if (level > topLevel) {
      if (depth === 0 || stack.length <= depth) {
        top.children.push({ ...info,  
          parent: top
        });
        stack.push(top.children.slice(-1)[0]);
      }
    } else if (level === topLevel) {
      top.parent.children.push({ ...info,
        parent: top.parent
      });
      stack.splice(-1, 1, top.parent.children.slice(-1)[0]);
    } else if (level < topLevel) {
      for (let j = stack.length - 1; j >= 0; j--) {
        if (level === levels[stack[j].type]) {
          stack[j].parent.children.push({ ...info,
            parent: stack[j].parent
          });
          stack.splice(j, stack.length, stack[j].parent.children.slice(-1)[0]);
        } 
      }
    }
  }

  return stack[0].children;
}

export default {
  escapePath,
  resolvePath,
  mungeCategory,
  getBreadcrumbs,
  getSubcategories,
  getArticles,
  getChildren, 
  getArticlesByName,
  getTitle,
  getDescription,
  getSpoilerLevel,
  getHeaders,
};