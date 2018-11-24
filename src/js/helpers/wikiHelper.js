const DESCRIPTION_CHILDREN = 12;

export function escapePath(path) {
  return path.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function parentPath(path) {
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
  if (markdown[path].isCategory) {
    return breadcrumbs.slice(0, -1);
  } else {
    return breadcrumbs;
  }
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
  let title = null;
  path = resolvePath(markdown, path);
  if (markdown[path].frontMatter) {
    title = markdown[path].frontMatter.title;
  }
  if (!title) {
    title = path.match(/([^/]+)\/?$/)[1].replace(/_+/g, ' ');
    title = title[0].toUpperCase() + title.slice(1);
  }
  return title;
}

export function getDescription(markdown, path) {
  let description = null;
  path = resolvePath(markdown, path);
  if (markdown[path].frontMatter) {
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
  getDescription
};