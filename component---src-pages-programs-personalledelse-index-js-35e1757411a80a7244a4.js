"use strict";(self.webpackChunkacademy_knowit_no=self.webpackChunkacademy_knowit_no||[]).push([[476],{7822:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(7294),a=n(551),o=n(476),d=n(9726),l=n(9211),i=n(9308),u=function(e){var t=e.courses,n=e.title;return r.createElement(l.Z,null,r.createElement(i.Z,{variant:"h3"},n),t.map((function(e){return r.createElement(d.Z,{data:e.node,key:e.node.frontmatter.path,showDescription:!0})})))},m=n(845),f=n(339),c=function(e){var t=e.program,n=(0,m.K2)("515621172"),d=new RegExp("^/programs/about-"+t),c=new RegExp("^/courses/"+t),s=n.allMarkdownRemark.edges.find((function(e){return e.node.frontmatter.path.match(d)})).node,p=n.allMarkdownRemark.edges.filter((function(e){return!e.node.fileAbsolutePath.match(/pages\/20\d\d/)})).filter((function(e){return e.node.frontmatter.path.match(c)})).map((function(e){return e.node.frontmatter.date=function(e){if(void 0===e.date)return null;if(e.date instanceof Date)return e.date;if("string"!=typeof e.date)return null;if(10===e.date.length)return new Date(e.date);if(16===e.date.length)return new Date(e.date.split(/[T\s]/i).join("T"));throw new TypeError("date field in frontmatter was wrong datestring format. Needs to be YYYY-MM-DDTHH:mm")}(e.node.frontmatter),e})).sort((function(e,t){return null===e.node.frontmatter.date?1:null===t.node.frontmatter.date?-1:e.node.frontmatter.date>t.node.frontmatter.date?1:-1}));return s.frontmatter.siteUrl="https://academy.knowit.no/programs/"+t+"/",s.frontmatter.path="/programs/"+t,r.createElement(a.Z,null,r.createElement(f.Z,{maxWidth:"tablet"},r.createElement(l.Z,{paddingTop:4},r.createElement(o.Z,{data:s}),r.createElement(i.Z,{variant:"body1",dangerouslySetInnerHTML:{__html:s.html}})),r.createElement(l.Z,{paddingBottom:8},r.createElement(u,{courses:p,title:"Kursoversikt"}))))}},5403:function(e,t,n){n.r(t);var r=n(7294),a=n(7822);t.default=function(){return r.createElement(a.Z,{program:"personalledelse"})}}}]);
//# sourceMappingURL=component---src-pages-programs-personalledelse-index-js-35e1757411a80a7244a4.js.map