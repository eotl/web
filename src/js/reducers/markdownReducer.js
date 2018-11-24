import markdown from '../../markdown.json';

const markdownReducer = (state={}, action) => {
  switch (action.type) {
    case "LOAD_MARKDOWN":
      state = { ...state };
      Object.keys(markdown).forEach((path) => {
        if (path !== "/") {
          let isCategory = false;
          if (path.slice(-1) === "/" || path.slice(-6) === "/index") {
            isCategory = true;
          }
          state[path] = { ...state[path], path, isCategory };
        }
      });
      break;
    case "MARKDOWN_LOADED":
      state = { ...state };
      action.payload.forEach(md => {
        state[md.path] = { ...state[md.path], ...md };
        if (md.path.slice(-6) === "/index") {
          const categoryPath = md.path.slice(0, -5);
          state[categoryPath] = { ...state[md.path], path: categoryPath };
        }
      });
      break;
    default:
      break;
  }
  return state;
}

export default markdownReducer;