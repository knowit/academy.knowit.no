"use strict";(self.webpackChunkacademy_knowit_no=self.webpackChunkacademy_knowit_no||[]).push([[307],{1052:function(t,e,n){n.d(e,{Z:function(){return p}});var r=n(7294),a=n(5474),o=n(2664),i=n(5765),l=n(9211),c=n(9308),d=function(t){var e=t.courses,n=t.title;return r.createElement(l.Z,null,r.createElement(c.Z,{variant:"h3"},n),e.map((function(t){return r.createElement(i.Z,{data:t.node,key:t.node.frontmatter.path,showDescription:!0})})))},u=n(845),m=n(339),f=n(2470),s=n(275),p=function(t){var e=t.year,n=t.program,i=(0,u.useStaticQuery)("1122712395"),p=new RegExp("^/"+(void 0===e?"":"".concat(e,"/"))+"courses/about-"+n),h=new RegExp("^/courses/"+n),g={};try{g=i.allMarkdownRemark.edges.find((function(t){return t.node.frontmatter.path.match(p)})).node}catch(Z){console.error("Did not find about node",Z,g),g.frontmatter={},g.html="<p>informasjon mangler</p>"}var E=i.allMarkdownRemark.edges.filter((function(t){return!t.node.fileAbsolutePath.match(/pages\/20\d\d/)})).filter((function(t){return t.node.frontmatter.path.match(h)})).map((function(t){return t.node.frontmatter.date=function(t){if(void 0===t.date)return null;if(t.date instanceof Date)return t.date;if("string"!=typeof t.date)return null;if(10===t.date.length)return new Date(t.date);if(16===t.date.length)return new Date(t.date.split(/[T\s]/i).join("T"));throw new TypeError("date field in frontmatter was wrong datestring format. Needs to be YYYY-MM-DDTHH:mm")}(t.node.frontmatter),t})).sort((function(t,e){return null===t.node.frontmatter.date?1:null===e.node.frontmatter.date?-1:t.node.frontmatter.date>e.node.frontmatter.date?1:-1}));return g.frontmatter.siteUrl="https://academy.knowit.no/courses/"+n+"/",r.createElement(a.Z,null,r.createElement(m.Z,{maxWidth:"tablet"},r.createElement(l.Z,{paddingTop:4},r.createElement(o.Z,{data:g}),r.createElement(c.Z,{variant:"body1",dangerouslySetInnerHTML:{__html:g.html}})),g.frontmatter.application?r.createElement(l.Z,{sx:{textAlign:"right"}},r.createElement(f.Z,{target:"_blank",sx:{color:"#333",paddingBottom:"4px",borderBottom:"2px solid #f0f",textDecoration:"none"},href:g.frontmatter.application},"Søk om plass")):"",r.createElement(l.Z,{pt:2,pb:8},r.createElement(d,{courses:E,title:"Kursoversikt"}))),r.createElement(s.Z,null),r.createElement(m.Z,null,r.createElement(l.Z,{pb:12})))}},275:function(t,e,n){n.d(e,{Z:function(){return i}});var r=n(7294),a=n(6449),o=n(2840),i=function(){(0,a.Z)(),(0,o.Z)("(max-width:480px");return r.createElement("section",{id:"signup",className:"SignupSection-module--signupSection--AyUx5"})}},5500:function(t,e,n){n.r(e);var r=n(7294),a=n(1052);e.default=function(){return r.createElement(a.Z,{program:"design"})}}}]);
//# sourceMappingURL=component---src-pages-courses-design-index-js-854dbd9119ec7f77bda6.js.map