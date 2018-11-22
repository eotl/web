const DESCRIPTION_CHILDREN = 8;

export function getSubcategories(markdown, category) {
  category = category.replace(/\//g, "\\/");
  return Object.keys(markdown)
    .filter((path) => {
      return path.match("^" + category + "[^/]+\\/$");
    })
    .map((path) => markdown[path])
    .sort((a,b) => a.path > b.path);
}

export function getArticles(markdown, category) {
  category = category.replace(/\//g, "\\/");
  return Object.keys(markdown)
    .filter((path) => {
      return (path.slice(-6) !== "/index") 
        && path.match("^" + category + "[^/]+$");
    })
    .map((path) => markdown[path])
    .sort((a,b) => a.path > b.path);
}

export function getArticlesByName(markdown, names) {
  return names
    .map(name => {
      name = name.replace(/\s+/g, '_').toLowerCase();
      name = name.replace(/\//g, "\\/");
      return Object.keys(markdown).filter(path => {
        return path.match("/" + name + "/?$");
      });
    })
    .flat()
    .map(path => markdown[path]);
}

export function getTitle(markdown, path) {
  let title = null;
  console.log('fart', path);
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
  getSubcategories,
  getArticles,
  getTitle,
  getDescription
};