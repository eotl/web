(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{362:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return d}),t.d(a,"frontMatter",function(){return h}),t.d(a,"jsx",function(){return m});var l=t(9),n=t(10),s=t(12),i=t(11),o=t(13),r=t(0),c=t.n(r),u=t(578),h={path:void 0},m=c.a.createElement("div",null,c.a.createElement("p",null,"Command: Alias. Format:  alias <command> <command list> alias <option> <arg> Example: alias km kill monster alias kp kill $n"),c.a.createElement("p",null,"     An alias is a shortened verson of a command, usually one you use often.  When you type the alias and press return, the longer command is executed.  An alias consists of two parts, as in the format above: the command, and the command list that the alias is associated with."),c.a.createElement("p",null,"     EotL defines some aliases for you when you create a new character. Typing <alias> by itself will show you these, plus any other aliases you have defined yourself.  Pre-defined aliases are marked with a plus (+)."),c.a.createElement("p",null,"-- Adding an alias:"),c.a.createElement("p",null,"     To set your own aliases, follow the format shown above.  Aliases can only execute one command each."),c.a.createElement("p",null,"     In the second example above, a $n is used.  These command line arguments are denoted by '$n' where 'n' is the numbers 1 through 9, or an asterix (",c.a.createElement("em",null,").  They represent the following: $1   -   the first argument. $2   -   the second argument, etc. $"),"   -   the remaining arguments not used by the '$n' format. $0   -   all off the arguments, regardless of previous use."),c.a.createElement("p",null,"     Example : alias kp kill $1 command : kp guest Thus    : kill guest"),c.a.createElement("p",null,"The following two examples show the difference between $* and $0 :"),c.a.createElement("p",null,"     Example : alias talk say $1 $2 $3 $* Command : talk a b c d e f g Thus    : say a b c d e f g"),c.a.createElement("p",null,"     Example: alias talk say $1 $2 $3 $0 Command: talk a b c d e f g Thus    : say a b c a b c d e f g"),c.a.createElement("p",null,"-- Checking an alias."),c.a.createElement("p",null,"     You can check what an alias is defined to be by typing alias <command>."),c.a.createElement("p",null,"     For example: If you had 'hi' aliased to 'say hi', typing 'alias hi' would result in the message: 'hi' aliased to: say hi"),c.a.createElement("p",null,"     You can also list all the aliases with an expression in them. Typing 'alias -a hi' would list all the aliases with hi in them.",c.a.createElement("br",null),"-- Checking an alias for an expression",c.a.createElement("br",null),"There are two ways that you can check your list of aliases for the occurrence of a certain expression.  The -a option will check the names of your aliases for a certain expression, while alias -k will check the actual alias itself."),c.a.createElement("p",null,"     For example:"),c.a.createElement("p",null,"          If you have the following aliases defined: alias cha channel auction alias chg channel gossip alias kch kill chester alias kc  kill copland",c.a.createElement("br",null),"alias -a ch would return the first three while alias -k kill would only return the last two.",c.a.createElement("br",null),"See also: unalias, clearaliases, expand.")),d=function(e){function a(){return Object(l.a)(this,a),Object(s.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){var e=this.props;return c.a.createElement(u.a,Object.assign({},e,{frontMatter:h}),c.a.createElement("div",null,c.a.createElement("p",null,"Command: Alias. Format:  alias <command> <command list> alias <option> <arg> Example: alias km kill monster alias kp kill $n"),c.a.createElement("p",null,"     An alias is a shortened verson of a command, usually one you use often.  When you type the alias and press return, the longer command is executed.  An alias consists of two parts, as in the format above: the command, and the command list that the alias is associated with."),c.a.createElement("p",null,"     EotL defines some aliases for you when you create a new character. Typing <alias> by itself will show you these, plus any other aliases you have defined yourself.  Pre-defined aliases are marked with a plus (+)."),c.a.createElement("p",null,"-- Adding an alias:"),c.a.createElement("p",null,"     To set your own aliases, follow the format shown above.  Aliases can only execute one command each."),c.a.createElement("p",null,"     In the second example above, a $n is used.  These command line arguments are denoted by '$n' where 'n' is the numbers 1 through 9, or an asterix (",c.a.createElement("em",null,").  They represent the following: $1   -   the first argument. $2   -   the second argument, etc. $"),"   -   the remaining arguments not used by the '$n' format. $0   -   all off the arguments, regardless of previous use."),c.a.createElement("p",null,"     Example : alias kp kill $1 command : kp guest Thus    : kill guest"),c.a.createElement("p",null,"The following two examples show the difference between $* and $0 :"),c.a.createElement("p",null,"     Example : alias talk say $1 $2 $3 $* Command : talk a b c d e f g Thus    : say a b c d e f g"),c.a.createElement("p",null,"     Example: alias talk say $1 $2 $3 $0 Command: talk a b c d e f g Thus    : say a b c a b c d e f g"),c.a.createElement("p",null,"-- Checking an alias."),c.a.createElement("p",null,"     You can check what an alias is defined to be by typing alias <command>."),c.a.createElement("p",null,"     For example: If you had 'hi' aliased to 'say hi', typing 'alias hi' would result in the message: 'hi' aliased to: say hi"),c.a.createElement("p",null,"     You can also list all the aliases with an expression in them. Typing 'alias -a hi' would list all the aliases with hi in them.",c.a.createElement("br",null),"-- Checking an alias for an expression",c.a.createElement("br",null),"There are two ways that you can check your list of aliases for the occurrence of a certain expression.  The -a option will check the names of your aliases for a certain expression, while alias -k will check the actual alias itself."),c.a.createElement("p",null,"     For example:"),c.a.createElement("p",null,"          If you have the following aliases defined: alias cha channel auction alias chg channel gossip alias kch kill chester alias kc  kill copland",c.a.createElement("br",null),"alias -a ch would return the first three while alias -k kill would only return the last two.",c.a.createElement("br",null),"See also: unalias, clearaliases, expand.")))}}]),a}(c.a.PureComponent)},576:function(e,a,t){"use strict";var l=t(27);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=l(t(0)),s=(0,l(t(29)).default)(n.default.createElement(n.default.Fragment,null,n.default.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),n.default.createElement("path",{d:"M5 18.08V19h.92l9.06-9.06-.92-.92z",opacity:".3"}),n.default.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z"})),"CreateTwoTone");a.default=s},578:function(e,a,t){"use strict";var l,n=t(9),s=t(10),i=t(12),o=t(11),r=t(13),c=t(0),u=t.n(c),h=t(579),m=t(20),d=t.n(m),p=t(44),f=t.n(p),w=t(34),y=t.n(w),E=t(33),g=t.n(E),k=t(576),b=t.n(k),$=t(8),x=t(99),v=t(30),T=Object($.withStyles)(v.a,{withTheme:!0})(l=function(e){function a(){return Object(n.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(r.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props,a=e.path,t=e.toggleWikiDrawer,l=e.wikiDrawerOpen,n=e.markdown,s=e.classes;return u.a.createElement("div",null,u.a.createElement(x.a,{path:a,markdown:n,toggle:t,open:l}),u.a.createElement(g.a,{className:s.sectionDivider}),u.a.createElement(d.a,{variant:"body1",component:"section"},u.a.createElement("pre",{className:s.textSection},this.props.children)),u.a.createElement("br",null),u.a.createElement(y.a,null,u.a.createElement(f.a,{container:!0,spacing:16},u.a.createElement(f.a,{item:!0},u.a.createElement(b.a,{className:s.createIcon})),u.a.createElement(f.a,{item:!0,xs:12,sm:!0},u.a.createElement(d.a,{variant:"subtitle1"},"This article was written in plain text, most likely copied from the MUD. You can help EotL by ",u.a.createElement(h.a,{to:"/wiki/"},"converting it")," to Markdown.")))))}}]),a}(c.Component))||l;a.a=T}}]);
//# sourceMappingURL=1.31f936a8.chunk.js.map