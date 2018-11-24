import { put, all, takeEvery } from 'redux-saga/effects';
import markdownIndex from '../../markdown.json';

function* loadMarkdown(action) {
  let imports = [ ];
  let paths = [ ];
  for (let path in markdownIndex) {
    if (path !== "" && path !== "/" && path.slice(-1) !== "/") {
      imports.push(import('../../md' + path + '.md'));
      paths.push(path);
    }
  }
  try {
    const markdown = yield all(imports);
    yield put({ 
      type: "MARKDOWN_LOADED", 
      payload: { markdown, paths } 
    });
  } catch (e) {
    console.log("Error loading markdown", e);
  }  
}

function* markdownSaga() {
  yield takeEvery("LOAD_MARKDOWN", loadMarkdown);
}

export default markdownSaga;