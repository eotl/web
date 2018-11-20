import markdownIndex from '../../markdown.json';
import { storeMarkdown } from '../actions/markdownActions';

const markdownReducer = (state={}, action) => {
  switch (action.type) {
    case "LOAD_MARKDOWN":
      Object.keys(markdownIndex).forEach((path) => {
        if (path !== "/" && path.slice(-1) === "/") {
          state = { ...state };
          state[path.slice(0, -1)] = null;
        }
      });
      break;
    case "MARKDOWN_LOADED":
      const { path, page } = action.payload;
      state = { ...state }
      state[path] = page;
      if (path.slice(-6) === "/index") {
        state[path.slice(0, -6)] = page;
      }
      break;
    default:
      break;
  }
  return state;
}

export default markdownReducer;