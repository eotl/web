
const appReducer = (state={
  appDrawerOpen: false,
  wikiDrawerOpen: true,
}, action) => {
  switch (action.type) {
    case "TOGGLE_APP_DRAWER":
      state = { ...state, appDrawerOpen: !state.appDrawerOpen };
      break;
    default:
      break;
  }
  switch (action.type) {
    case "TOGGLE_WIKI_DRAWER":
      state = { ...state, wikiDrawerOpen: !state.wikiDrawerOpen };
      break;
    default:
      break;
  }
  return state;
}

export default appReducer;