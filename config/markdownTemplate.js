'use strict';

const _ = require('lodash');
const stringifyObject = require('stringify-object');

module.exports = data => {
  const frontMatter = data.frontMatter;
  let prepended = "import { Link } from 'react-router-dom';\n";
  // if (data.prependJs !== undefined) {
  //   data.prependJs.forEach(m => {
  //     prepended += `${m}\n`;
  //   });
  // }
  if (frontMatter.wikiComponents !== undefined) {
    frontMatter.wikiComponents.forEach(m => {
      prepended += `import ${m} from 'WikiComponents/${m}';\n`;
    });
  }
  if (frontMatter.muiComponents !== undefined) {
    frontMatter.muiComponents.forEach(m => {
      prepended += `import ${m} from '@material-ui/core/${m}';\n`;
    });
  }
  if (frontMatter.muiIcons !== undefined) {
    frontMatter.muiIcons.forEach(m => {
      prepended += `import ${m} from '@material-ui/icons/${m}';\n`;
    });
  }


  if (frontMatter.wikiWrapper !== undefined) {
    data.wrapper = 'WikiComponents/' + frontMatter.wikiWrapper;
  } else {
    data.wrapper = undefined;
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
      let systemPath = __dirname;
      systemPath = mypath.replace(/\/config\/?$/, '');
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