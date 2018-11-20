export function loadMarkdown() {
  return {
    type: "LOAD_MARKDOWN"
  }
};

export function storeMarkdown(path, page) {
  return {
    type: "PRELOAD_MARKDOWN",
    payload: { 
      path: path,
      page: page,
    }
  }
};
