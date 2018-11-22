import markdownIndex from '../../markdown.json';

const markdownReducer = (state={}, action) => {
  switch (action.type) {
    case "LOAD_MARKDOWN":
      state = { ...state };
      Object.keys(markdownIndex).forEach((path) => {
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
      const { path } = action.payload;
      state = { ...state }
      state[path] = { ...state[path], ...action.payload };
      if (path.slice(-6) === "/index") {
        const categoryPath = path.slice(0, -5);
        state[categoryPath] = { ...state[path], path: categoryPath };
      }
      break;
    default:
      break;
  }
  return state;
}

export default markdownReducer;