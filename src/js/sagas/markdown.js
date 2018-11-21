import { put, takeEvery } from 'redux-saga/effects';
import markdownIndex from '../../markdown.json';

function* loadMarkdown(action) {
  for (let path in markdownIndex) {
    if (path !== "" && path !== "/" && path.slice(-1) !== "/") {
      try {
        const page = yield import('../../md' + path + '.md');
        yield put({ 
          type: "MARKDOWN_LOADED", 
          payload: { 
            path: path,
            component: page.default,
            frontMatter: page.frontMatter,
          } 
        });
      } catch (e) {
        console.log("Error loading markdown: " + path, e);
      }
    }
  }
}

function* markdownSaga() {
  yield takeEvery("LOAD_MARKDOWN", loadMarkdown);
}

export default markdownSaga;