"use strict";(self.webpackChunkacademy_knowit_no=self.webpackChunkacademy_knowit_no||[]).push([[324],{7822:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(7294),a=n(3112),o=n(2664),l=n(5765),d=n(9211),u=n(9308),c=function(e){var t=e.courses,n=e.title;return r.createElement(d.Z,null,r.createElement(u.Z,{variant:"h3"},n),t.map((function(e){return r.createElement(l.Z,{data:e.node,key:e.node.frontmatter.path,showDescription:!0})})))},i=n(845),s=n(339),m=function(e){var t=e.year,n=e.program,l=(0,i.useStaticQuery)("515621172"),m=new RegExp("^/"+(void 0===t?"":"".concat(t,"/"))+"courses/about-"+n),f=new RegExp("^/courses/"+n);console.log("aboutre:",m),console.log("courseRe:",f);var p=l.allMarkdownRemark.edges.find((function(e){return e.node.frontmatter.path.match(m)})).node;console.log(p);var h=l.allMarkdownRemark.edges.filter((function(e){return!e.node.fileAbsolutePath.match(/pages\/20\d\d/)})).filter((function(e){return e.node.frontmatter.path.match(f)})).map((function(e){return e.node.frontmatter.date=function(e){if(void 0===e.date)return null;if(e.date instanceof Date)return e.date;if("string"!=typeof e.date)return null;if(10===e.date.length)return new Date(e.date);if(16===e.date.length)return new Date(e.date.split(/[T\s]/i).join("T"));throw new TypeError("date field in frontmatter was wrong datestring format. Needs to be YYYY-MM-DDTHH:mm")}(e.node.frontmatter),e})).sort((function(e,t){return null===e.node.frontmatter.date?1:null===t.node.frontmatter.date?-1:e.node.frontmatter.date>t.node.frontmatter.date?1:-1}));return p.frontmatter.siteUrl="https://academy.knowit.no/courses/"+n+"/",p.frontmatter.path="/courses/"+n,r.createElement(a.Z,null,r.createElement(s.Z,{maxWidth:"tablet"},r.createElement(d.Z,{paddingTop:4},r.createElement(o.Z,{data:p}),r.createElement(u.Z,{variant:"body1",dangerouslySetInnerHTML:{__html:p.html}})),r.createElement(d.Z,{paddingBottom:8},r.createElement(c,{courses:h,title:"Kursoversikt"}))))}},1320:function(e,t,n){n.r(t);var r=n(7294),a=n(7822);t.default=function(){return r.createElement(a.Z,{year:"2021",program:"personalledelse"})}}}]);
//# sourceMappingURL=component---src-pages-2021-courses-personalledelse-index-js-e18afe04cc8d5d919d11.js.map