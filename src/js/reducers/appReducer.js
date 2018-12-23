
const appReducer = (state={
  appDrawerOpen: false,
  wikiDrawerOpen: true,
  spoilerLevel: 'none'
}, action) => {
  switch (action.type) {
    case "TOGGLE_APP_DRAWER":
      state = { ...state, appDrawerOpen: !state.appDrawerOpen };
      break;
    case "TOGGLE_WIKI_DRAWER":
      state = { ...state, wikiDrawerOpen: !state.wikiDrawerOpen };
      break;
    case "SET_SPOILER_LEVEL":
      state = { ...state, spoilerLevel: action.payload.level };
      break;
    default:
      break;
  }
  return state;
}

export default appReducer;