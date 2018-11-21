import markdownIndex from '../../markdown.json';

const markdownReducer = (state={}, action) => {
  switch (action.type) {
    case "LOAD_MARKDOWN":
      state = { ...state };
      Object.keys(markdownIndex).forEach((path) => {
        if (path !== "/" && path.slice(-1) === "/") {
          state[path] = { ...state[path], path };
        }
      });
      break;
    case "MARKDOWN_LOADED":
      const { path, component, frontMatter } = action.payload;
      state = { ...state }
      state[path] = { path, component, frontMatter };
      if (path.slice(-6) === "/index") {
        state[path.slice(0, -5)] = { ...state[path], path: path.slice(0, -5) };
      }
      break;
    default:
      break;
  }
  return state;
}

export default markdownReducer;