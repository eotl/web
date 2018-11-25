'use strict';

const _ = require('lodash');
const stringifyObject = require('stringify-object');

module.exports = data => {
  let prepended = '';
  if (data.prependJs !== undefined) {
    data.prependJs.forEach(m => {
      prepended += `${m}\n`;
    });
  }
  if (data.wrapper) {
    prepended += `import Wrapper from '${data.wrapper}';\n`;
  }

  let body = data.jsx;
  if (data.wrapper) {
    body = `<Wrapper {...props} frontMatter={frontMatter}>${body}</Wrapper>`;
  }

  data.frontMatter.path = undefined;
  if (data.jsx && data.jsx["_source"]) {
    let path = data.jsx["_source"].fileName;
    if (path) {
      // TODO get this from system
      let systemPath = '/vagrant/eotl-web/config/markdownTemplate.js';
      systemPath = mypath.replace(/\/config\/markdownTemplate\.js$/, '');
      const mdPrefix = '/src/md';
      path = path.replace("^" + systemPath + mdPrefix, "");
      path = path.replace(/\.md$/, "");
      data.frontMatter.path = path;
    }
  }

  const frontMatterComment = data.rawFrontMatter
    ? `/*---\n${data.rawFrontMatter}\n---*/`
    : '';

  const js = `
    ${frontMatterComment}
    import React from 'react';
    ${prepended}
    const frontMatter = ${stringifyObject(
      _.omit(data.frontMatter, ['prependJs', 'wrapper'])
    )};
    const props = { };
    const jsx = ${data.jsx ? data.jsx : null};
    export default class ${data.name} extends React.PureComponent {
      render() {
        const props = this.props;
        return ${body ? body : null};
      }
    };
    export { frontMatter, jsx };
  `;

  return js;
};