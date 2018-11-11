

const appReducer = (state={
  leftDrawerOpen: false
}, action) => {
  switch (action.type) {
    case "TOGGLE_LEFT_DRAWER":
      state = { ...state, leftDrawerOpen: !state.leftDrawerOpen };
      break;
  }
  return state;
}

export default appReducer;