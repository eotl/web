let spoilerLevel = localStorage.getItem('eotl.spoilerLevel');
if (!spoilerLevel) {
  spoilerLevel = 'none';
}

const appReducer = (state={
  appDrawerOpen: false,
  wikiDrawerOpen: true,
  spoilerLevel: spoilerLevel,
}, action) => {
  switch (action.type) {
    case "TOGGLE_APP_DRAWER":
      state = { ...state, appDrawerOpen: !state.appDrawerOpen };
      break;
    case "TOGGLE_WIKI_DRAWER":
      state = { ...state, wikiDrawerOpen: !state.wikiDrawerOpen };
      break;
    case "SET_SPOILER_LEVEL":
      localStorage.setItem('eotl.spoilerLevel', action.payload.level);
      state = { ...state, spoilerLevel: action.payload.level };
      break;
    default:
      break;
  }
  return state;
}

export default appReducer;