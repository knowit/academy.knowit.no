"use strict";(self.webpackChunkacademy_knowit_no=self.webpackChunkacademy_knowit_no||[]).push([[698],{7822:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(7294),a=n(3112),o=n(2664),l=n(5765),d=n(9211),u=n(9308),c=function(e){var t=e.courses,n=e.title;return r.createElement(d.Z,null,r.createElement(u.Z,{variant:"h3"},n),t.map((function(e){return r.createElement(l.Z,{data:e.node,key:e.node.frontmatter.path,showDescription:!0})})))},i=n(845),m=n(339),s=function(e){var t=e.year,n=e.program,l=(0,i.useStaticQuery)("515621172"),s=new RegExp("^/"+(void 0===t?"":"".concat(t,"/"))+"courses/about-"+n),f=new RegExp("^/courses/"+n);console.log("aboutre:",s),console.log("courseRe:",f);var p={};try{p=l.allMarkdownRemark.edges.find((function(e){return e.node.frontmatter.path.match(s)})).node}catch(g){console.error("Did not find about node",g,p),p.frontmatter={},p.html="<p>informasjon mangler</p>"}console.log(p);var h=l.allMarkdownRemark.edges.filter((function(e){return!e.node.fileAbsolutePath.match(/pages\/20\d\d/)})).filter((function(e){return e.node.frontmatter.path.match(f)})).map((function(e){return console.log("node:",e.node),e.node.frontmatter.date=function(e){if(void 0===e.date)return null;if(e.date instanceof Date)return e.date;if("string"!=typeof e.date)return null;if(10===e.date.length)return new Date(e.date);if(16===e.date.length)return new Date(e.date.split(/[T\s]/i).join("T"));throw new TypeError("date field in frontmatter was wrong datestring format. Needs to be YYYY-MM-DDTHH:mm")}(e.node.frontmatter),e})).sort((function(e,t){return null===e.node.frontmatter.date?1:null===t.node.frontmatter.date?-1:e.node.frontmatter.date>t.node.frontmatter.date?1:-1}));return p.frontmatter.siteUrl="https://academy.knowit.no/courses/"+n+"/",p.frontmatter.path="/courses/"+n,r.createElement(a.Z,null,r.createElement(m.Z,{maxWidth:"tablet"},r.createElement(d.Z,{paddingTop:4},r.createElement(o.Z,{data:p}),r.createElement(u.Z,{variant:"body1",dangerouslySetInnerHTML:{__html:p.html}})),r.createElement(d.Z,{paddingBottom:8},r.createElement(c,{courses:h,title:"Kursoversikt"}))))}},5291:function(e,t,n){n.r(t);var r=n(7294),a=n(7822);t.default=function(){return r.createElement(a.Z,{program:"personalledelse"})}}}]);
//# sourceMappingURL=component---src-pages-courses-personalledelse-index-js-49f87fe127c15c335188.js.map