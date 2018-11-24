import { put, all, takeEvery } from 'redux-saga/effects';
import markdownIndex from '../../markdown.json';

function* loadMarkdown(action) {
  let imports = [ ];
  for (let path in markdownIndex) {
    if (path !== "" && path !== "/" && path.slice(-1) !== "/") {
      imports = imports.push(import('../../md' + path + '.md'));
    }
  }
  try {
    const markdown = yield all(imports);
    yield put({ 
      type: "MARKDOWN_LOADED", 
      payload: { markdown } 
    });
  } catch (e) {
    console.log("Error loading markdown", e);
  }  
}

function* markdownSaga() {
  yield takeEvery("LOAD_MARKDOWN", loadMarkdown);
}

export default markdownSaga;