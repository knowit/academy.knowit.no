"use strict";(self.webpackChunkacademy_knowit_no=self.webpackChunkacademy_knowit_no||[]).push([[476],{5091:function(e,t,r){r.d(t,{Z:function(){return l}});var n=r(7294),a=r(7279),o=r(5263),m=r(2010),d=function(e){var t=e.courses,r=e.title,a=t.map((function(e){var t=e.node,r=e.node.frontmatter;return n.createElement(m.Z,{data:t,key:r.path,showDescription:!0})}));return n.createElement("div",{className:"ProgramOverview-module--programOverview--j2wAZ"},n.createElement("h2",null,r),a)},i=r(1597),l=function(e){var t=e.program,r=(0,i.K2)("515621172"),m=new RegExp("^/programs/about-"+t),l=new RegExp("^/courses/"+t),u=r.allMarkdownRemark.edges.find((function(e){return e.node.frontmatter.path.match(m)})).node,s=r.allMarkdownRemark.edges.filter((function(e){return!e.node.fileAbsolutePath.match(/pages\/20\d\d/)})).filter((function(e){return e.node.frontmatter.path.match(l)})).map((function(e){return e.node.frontmatter.date=function(e){if(void 0===e.date)return null;if(e.date instanceof Date)return e.date;if("string"!=typeof e.date)return null;if(10===e.date.length)return new Date(e.date);if(16===e.date.length)return new Date(e.date.split(/[T\s]/i).join("T"));throw new TypeError("date field in frontmatter was wrong datestring format. Needs to be YYYY-MM-DDTHH:mm")}(e.node.frontmatter),e})).sort((function(e,t){return null===e.node.frontmatter.date?1:null===t.node.frontmatter.date?-1:e.node.frontmatter.date>t.node.frontmatter.date?1:-1}));return u.frontmatter.siteUrl="https://academy.knowit.no/programs/"+t+"/",u.frontmatter.path="/programs/"+t,n.createElement(a.Z,{data:u,sitemeta:r.site.siteMetadata},n.createElement("section",{id:"main",className:"programpage-module--gridContainer--UyKc3"},n.createElement("div",{className:"programpage-module--blogArticle--SXbq-"},n.createElement(o.Z,{data:u}),n.createElement("div",{className:"programpage-module--aboutProgram--o7BzY",dangerouslySetInnerHTML:{__html:u.html}}),n.createElement(d,{courses:s,title:"Kursoversikt"}))))}},8335:function(e,t,r){r.r(t);var n=r(7294),a=r(5091);t.default=function(){return n.createElement(a.Z,{program:"personalledelse"})}}}]);
//# sourceMappingURL=component---src-pages-programs-personalledelse-index-js-0c5654a4267d27e2302a.js.map