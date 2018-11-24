var fs = require('fs');
var resolve = require('path').resolve;

const wikiRoot = resolve('./src/md/wiki');
const wikiRootPattern = new RegExp(wikiRoot.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
var pages = walkDir(wikiRoot);
pages = pages.map((path) => {return path.replace(wikiRootPattern, "/wiki")});
pages = pages.map((path) => {return path.replace(/\.md$/, "")});
pages = pages.reverse();

function walkDir(dir) {
  var results = [];
  fs.readdirSync(dir).forEach(function(file) {
    file = dir + '/' + file;
    var stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results.push(file);
      results = results.concat(walkDir(file));
    } else { 
      if (!file.match(/\/index\.md$/)) {
        results.push(file);
      }
    }
  });
  return results;
}

function resolvePage(page) {
  page = page.replace(/\s+/g, '_').toLowerCase();
  const pagePattern = new RegExp(page.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + "$");
  return pages.filter(path => path.match(pagePattern));
}

function  getPermalinks() {
  return pages;
}

function hrefTemplate(permalink) {
  return permalink;
}

exports.resolvePage = resolvePage;
exports.getPermalinks = getPermalinks;
exports.hrefTemplate = hrefTemplate;
