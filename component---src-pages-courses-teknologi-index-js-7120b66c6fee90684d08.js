"use strict";(self.webpackChunkacademy_knowit_no=self.webpackChunkacademy_knowit_no||[]).push([[666],{7822:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(7294),a=n(3112),o=n(2664),d=n(5765),l=n(9211),u=n(9308),i=function(e){var t=e.courses,n=e.title;return r.createElement(l.Z,null,r.createElement(u.Z,{variant:"h3"},n),t.map((function(e){return r.createElement(d.Z,{data:e.node,key:e.node.frontmatter.path,showDescription:!0})})))},c=n(845),m=n(339),f=function(e){var t=e.year,n=e.program,d=(0,c.useStaticQuery)("515621172"),f=new RegExp("^/"+(void 0===t?"":"".concat(t,"/"))+"courses/about-"+n),s=new RegExp("^/courses/"+n);console.log("aboutre:",f),console.log("courseRe:",s);var p={};try{p=d.allMarkdownRemark.edges.find((function(e){return e.node.frontmatter.path.match(f)})).node}catch(g){console.error("Did not find about node",g,p),p.frontmatter={},p.html="<p>informasjon mangler</p>"}console.log(p);var h=d.allMarkdownRemark.edges.filter((function(e){return!e.node.fileAbsolutePath.match(/pages\/20\d\d/)})).filter((function(e){return e.node.frontmatter.path.match(s)})).map((function(e){return e.node.frontmatter.date=function(e){if(void 0===e.date)return null;if(e.date instanceof Date)return e.date;if("string"!=typeof e.date)return null;if(10===e.date.length)return new Date(e.date);if(16===e.date.length)return new Date(e.date.split(/[T\s]/i).join("T"));throw new TypeError("date field in frontmatter was wrong datestring format. Needs to be YYYY-MM-DDTHH:mm")}(e.node.frontmatter),e})).sort((function(e,t){return null===e.node.frontmatter.date?1:null===t.node.frontmatter.date?-1:e.node.frontmatter.date>t.node.frontmatter.date?1:-1}));return p.frontmatter.siteUrl="https://academy.knowit.no/courses/"+n+"/",r.createElement(a.Z,null,r.createElement(m.Z,{maxWidth:"tablet"},r.createElement(l.Z,{paddingTop:4},r.createElement(o.Z,{data:p}),r.createElement(u.Z,{variant:"body1",dangerouslySetInnerHTML:{__html:p.html}})),r.createElement(l.Z,{paddingBottom:8},r.createElement(i,{courses:h,title:"Kursoversikt"}))))}},35:function(e,t,n){n.r(t);var r=n(7294),a=n(7822);t.default=function(){return r.createElement(a.Z,{program:"teknologi"})}}}]);
//# sourceMappingURL=component---src-pages-courses-teknologi-index-js-7120b66c6fee90684d08.js.map