export function toggleAppDrawer() {
  return {
    type: "TOGGLE_APP_DRAWER"
  }
};

export function toggleWikiDrawer() {
  return {
    type: "TOGGLE_WIKI_DRAWER"
  }
};

export function importComponent(path) {
  return {
    type: "IMPORT_COMPONENT"
  }
}