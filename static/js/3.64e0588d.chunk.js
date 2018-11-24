(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{287:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return p}),a.d(t,"frontMatter",function(){return d});var n=a(9),r=a(10),i=a(13),l=a(11),o=a(12),s=a(0),c=a.n(s),h=a(295),u=a(112),d={title:"EotL Wiki",description:"EotL wiki overview.",see:["MUDs","Getting Started","History"]},p=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props;return c.a.createElement(u.a,Object.assign({},e,{frontMatter:d}),c.a.createElement("div",null,c.a.createElement("p",null,"It's a cruel world out there, but this wiki should supply you all the critical information you need to survive your adventure on EotL. To contribute, you can mudmail Devo with your content suggestions, or go right to the source by requesting access to the ",c.a.createElement("a",{href:"https://github.com/eotl/wiki",target:"_blank",rel:"nofollow noopener noreferrer"},"Github repository"),". "),c.a.createElement("h3",null,"Markdown"),c.a.createElement("p",null,"The wiki is written in Markdown with additional support for harnessing content from the wiki component library. If you need help getting started with Markdown syntax, check out this ",c.a.createElement("a",{href:"https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet",target:"_blank",rel:"nofollow noopener noreferrer"},"cheatsheet"),". The rest of this document will assume you're familiar with the basics. The source code for this document can be viewed on ",c.a.createElement("a",{href:"https://raw.githubusercontent.com/eotl/wiki/master/index.md",target:"_blank",rel:"nofollow noopener noreferrer"},"Github"),"."),c.a.createElement("h3",null,"Front Matter"),c.a.createElement("p",null,"Front matter is a special data section at the top of your wiki article specified in ",c.a.createElement("a",{href:"http://yaml.org/start.html",target:"_blank",rel:"nofollow noopener noreferrer"},"YAML syntax")," which you can include to specify how you want your page to be rendered."),c.a.createElement("h4",null,"wrapper"),c.a.createElement("p",null,"The wrapper value is a path to a JavaScript component which will enclose your page content. Depending on which wrapper you specify, your page may automatically get special content like navigational elements or dynamically generated subsections. If you don't specify a wrapper, your document will be displayed as-is."),c.a.createElement("h4",null,"prependJs"),c.a.createElement("p",null,"The prependJs value is a special directive which consists of a list of lines of JavaScript code to run when the article is composed. This is usually used to import JavaScript components you want to use in your article body. By default, the <Link/> component will be imported on all wiki pages."),c.a.createElement("h4",null,"title"),c.a.createElement("p",null,"The title value specifies the page title to be displayed in headers and in navigational elements like links and buttons. If you don't set a title, one will be calculated based on the article's file name."),c.a.createElement("h4",null,"description"),c.a.createElement("p",null,"The description value is a short phrase or sentence which describes the article content, and often appears with the title as a caption or subtitle. If no description is provided, the default behavior is to display nothing where a description would normally appear. However, based on the page type, a default description may be generated. For instance, category indexes will get a default description which consists of their subcategories and articles."),c.a.createElement("h4",null,"see"),c.a.createElement("p",null,"The see value lists which articles to link to in this article's \"See also\" section. The list values will be matched against an article's ",c.a.createElement("em",null,"filename"),", not its title, with the value lowercased and spaces its spaces converted to underscores."),c.a.createElement("h3",null,"Links"),c.a.createElement("p",null,"There are a few different ways to specify links in your article content. For external links such as the ones displayed above, the standard Markdown link syntax is sufficient. "),c.a.createElement("p",null,"For internal links, you will want to use the <Link/> tag instead of the standard Markdown links to render the new content internally instead of performing a full page refresh. This method uses the special JSX interpolation syntax with the tag enclosed in double braces, such as ",c.a.createElement(h.a,{to:"/"},"this home page link"),"."),c.a.createElement("p",null,"You can also link directly to other wiki articles by using the double bracket syntax, such as this link to ",c.a.createElement(h.a,{className:"internal",to:"/wiki/areas/eternal_city"},"Eternal City"),", or this other one with ",c.a.createElement(h.a,{className:"internal",to:"/wiki/areas/eternal_city"},"alternate link text"),". The target inside the double brackets will be matched against the article's ",c.a.createElement("em",null,"filename"),", not its title, with the value lowercased and its spaces converted to underscores."),c.a.createElement("h3",null,"Wrappers"),c.a.createElement("p",null,"Different wrapper components can be used for different types of articles to automatically generate surrounding content, such as headers, footers, and sidebars. While you can entirely forgo specifying a wrapper and format the entire article yourself, it's recommended to share wrappers across articles that have the same format for the sake of uniformity and ease of maintenance. "),c.a.createElement("h4",null,"BasicArticle"),c.a.createElement("p",null,"The basic article wrapper contains the standard header and a \"See also\" section for any articles specified in the 'see' front matter. It also supplies breadcrumbs and a sidebar for browsing the article tree."),c.a.createElement("h4",null,"IndexArticle"),c.a.createElement("p",null,"Used for category indexes, index articles are like basic articles but also contain sections for subcategory and member article lists.")))}}]),t}(c.a.PureComponent)}}]);
//# sourceMappingURL=3.64e0588d.chunk.js.map