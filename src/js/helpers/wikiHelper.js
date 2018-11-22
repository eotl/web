const DESCRIPTION_CHILDREN = 8;

export function getSubcategories(markdown, category) {
  return Object.keys(markdown)
    .filter((path) => {
      return path.match(/^${category}[^/]+\/$/);
    })
    .map((path) => markdown[path])
    .sort((a,b) => a.path > b.path);
}

export function getArticles(markdown, category) {
  return Object.keys(markdown)
    .filter((path) => {
      return path.match(/^${category}[^/]+$/);
    })
    .map((path) => markdown[path])
    .sort((a,b) => a.path > b.path);
}

export function getTitle(markdown, path) {
  let title = null;
  if (markdown[path].frontMatter) {
    title = markdown[path].frontMatter.title;
  }
  if (!title) {
    title = path.match(/([^/]+)\/$/)[1].replace(/_+/g, ' ');
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
    const subcategories = getSubcategories(path);
    const articles = getArticles(path);
    description = "";
    for (let i = 0; i < DESCRIPTION_CHILDREN; i++) {
      if (subcategories.length > i) {
        description += getTitle(markdown, subcategories[i].path);
      } else if (articles.length > i - subcategories.length) {
        description += getTitle(markdown, articles[i - subcategories.length].path);
      }
      if (i < DESCRIPTION_CHILDREN - 1) {
        description += ", ";
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