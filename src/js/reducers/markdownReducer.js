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
      state = { ...state };
      const { markdown, paths } = action.payload;
      for (let i = 0; i < markdown.length; i++) {
        state[paths[i]] = { ...state[paths[i]], 
          component: markdown[i].default,
          frontMatter: markdown[i].frontMatter
        };
        if (paths[i].slice(-6) === "/index") {
          const categoryPath = paths[i].slice(0, -5);
          state[categoryPath] = { ...state[paths[i]], path: categoryPath };
        }
      }
      break;
    default:
      break;
  }
  return state;
}

export default markdownReducer;