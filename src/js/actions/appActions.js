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

export function setSpoilerLevel(level) {
  return {
    type: "SET_SPOILER_LEVEL",
    payload: {
      level
    }
  }
}