(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{334:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return h}),a.d(t,"frontMatter",function(){return s}),a.d(t,"jsx",function(){return c});var n=a(6),r=a(7),o=a(9),l=a(8),i=a(10),m=a(0),p=a.n(m),u=a(512),s={path:void 0},c=p.a.createElement("div",null,p.a.createElement("p",null,"Command : Group. Format  : group <subcommand> <arguments> Example : group invite Duncan"),p.a.createElement("p",null,"-- Beginning a group: Any player may be in a group, simply by inviting another player to group with them.  The first player becomes the leader of the group."),p.a.createElement("p",null,"     Leader's commands:"),p.a.createElement("p",null,"        group invite <player>   - invite <player> to join the group group leader <member>   - pass leadership of the group onto <member> group name <name>       - (re)name the group <name> Note: if you name your group, other people will will be able to see its membership via the 'who -o' and 'who -G' command.  Typing \"group name\" with no argument will un-name the group. group remove <member>   - remove <member> from the group"),p.a.createElement("p",null,"     Any member of the group may use the following commands :"),p.a.createElement("p",null,"        group accept            - accept an invitation to join a group group hp                - display each member's hp/mana/fatigue group leave             - leave the group you are currently in group status            - display information about the group group say <message>     - send <message> to every member in the group group split             - split your coins with members of the group (who must be present at the time)"),p.a.createElement("p",null,"     All arguments in the above commands are mandatory. "),p.a.createElement("p",null,"     Typing <group> by itself will either display the name of the group you are in, the name of the person / group that last invited you to join them, or nothing."),p.a.createElement("p",null,"See also: groups (for general information on how groups work)")),h=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props;return p.a.createElement(u.a,Object.assign({},e,{frontMatter:s}),p.a.createElement("div",null,p.a.createElement("p",null,"Command : Group. Format  : group <subcommand> <arguments> Example : group invite Duncan"),p.a.createElement("p",null,"-- Beginning a group: Any player may be in a group, simply by inviting another player to group with them.  The first player becomes the leader of the group."),p.a.createElement("p",null,"     Leader's commands:"),p.a.createElement("p",null,"        group invite <player>   - invite <player> to join the group group leader <member>   - pass leadership of the group onto <member> group name <name>       - (re)name the group <name> Note: if you name your group, other people will will be able to see its membership via the 'who -o' and 'who -G' command.  Typing \"group name\" with no argument will un-name the group. group remove <member>   - remove <member> from the group"),p.a.createElement("p",null,"     Any member of the group may use the following commands :"),p.a.createElement("p",null,"        group accept            - accept an invitation to join a group group hp                - display each member's hp/mana/fatigue group leave             - leave the group you are currently in group status            - display information about the group group say <message>     - send <message> to every member in the group group split             - split your coins with members of the group (who must be present at the time)"),p.a.createElement("p",null,"     All arguments in the above commands are mandatory. "),p.a.createElement("p",null,"     Typing <group> by itself will either display the name of the group you are in, the name of the person / group that last invited you to join them, or nothing."),p.a.createElement("p",null,"See also: groups (for general information on how groups work)")))}}]),t}(p.a.PureComponent)},510:function(e,t,a){"use strict";var n=a(27);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),o=(0,n(a(29)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),r.default.createElement("path",{d:"M5 18.08V19h.92l9.06-9.06-.92-.92z",opacity:".3"}),r.default.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z"})),"CreateTwoTone");t.default=o},512:function(e,t,a){"use strict";var n,r=a(6),o=a(7),l=a(9),i=a(8),m=a(10),p=a(0),u=a.n(p),s=a(513),c=a(16),h=a.n(c),g=a(40),d=a.n(g),y=a(36),b=a.n(y),f=a(31),v=a.n(f),w=a(510),E=a.n(w),j=a(5),O=a(90),k=a(30),M=Object(j.withStyles)(k.a,{withTheme:!0})(n=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.path,a=e.toggleWikiDrawer,n=e.wikiDrawerOpen,r=e.markdown,o=e.classes;return u.a.createElement("div",null,u.a.createElement(O.a,{path:t,markdown:r,toggle:a,open:n}),u.a.createElement(v.a,{className:o.sectionDivider}),u.a.createElement(h.a,{variant:"body1",component:"section"},u.a.createElement("pre",{className:o.textSection},this.props.children)),u.a.createElement("br",null),u.a.createElement(b.a,null,u.a.createElement(d.a,{container:!0,spacing:16},u.a.createElement(d.a,{item:!0},u.a.createElement(E.a,{className:o.createIcon})),u.a.createElement(d.a,{item:!0,xs:12,sm:!0},u.a.createElement(h.a,{variant:"subtitle1"},"This article was written in plain text, most likely copied from the MUD. You can help EotL by ",u.a.createElement(s.a,{to:"/wiki/"},"converting it")," to Markdown.")))))}}]),t}(p.Component))||n;t.a=M}}]);
//# sourceMappingURL=39.16437160.chunk.js.map