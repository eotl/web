var fs = require('fs');
var resolve = require('path').resolve;

const wikiRoot = resolve('./src/md/wiki');
var pages = walkDir(wikiRoot);
pages = pages.map((path) => {return path.replace(new RegExp(wikiRoot.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')), "/wiki")});
pages = pages.map((path) => {return path.replace(/\.md$/, "")});
pages = pages.reverse();

function walkDir(dir) {
    var results = [];
    var list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = dir + '/' + file;
        var stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            /* Recurse into a subdirectory */
            results = results.concat(walkDir(file));
        } else { 
            /* Is a file */
            results.push(file);
        }
    });
    return results;
}

function resolvePage(page) {
  page = page.replace(/ /g, '_').toLowerCase();
  let result =  pages.filter((path) => {return path.match(new RegExp(page.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + "$")) != null});
  return result;  
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
