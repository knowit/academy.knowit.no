"use strict";(self.webpackChunkacademy_knowit_no=self.webpackChunkacademy_knowit_no||[]).push([[698],{1052:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(7294),a=n(5474),o=n(2664),i=n(5765),l=n(9211),c=n(9308),d=function(e){var t=e.courses,n=e.title;return r.createElement(l.Z,null,r.createElement(c.Z,{variant:"h3"},n),t.map((function(e){return r.createElement(i.Z,{data:e.node,key:e.node.frontmatter.path,showDescription:!0})})))},u=n(845),m=n(339),f=n(2470),s=n(275),p=function(e){var t=e.year,n=e.program,i=(0,u.useStaticQuery)("1122712395"),p=new RegExp("^/"+(void 0===t?"":"".concat(t,"/"))+"courses/about-"+n),h=new RegExp("^/courses/"+n),g={};try{g=i.allMarkdownRemark.edges.find((function(e){return e.node.frontmatter.path.match(p)})).node}catch(Z){console.error("Did not find about node",Z,g),g.frontmatter={},g.html="<p>informasjon mangler</p>"}var E=i.allMarkdownRemark.edges.filter((function(e){return!e.node.fileAbsolutePath.match(/pages\/20\d\d/)})).filter((function(e){return e.node.frontmatter.path.match(h)})).map((function(e){return e.node.frontmatter.date=function(e){if(void 0===e.date)return null;if(e.date instanceof Date)return e.date;if("string"!=typeof e.date)return null;if(10===e.date.length)return new Date(e.date);if(16===e.date.length)return new Date(e.date.split(/[T\s]/i).join("T"));throw new TypeError("date field in frontmatter was wrong datestring format. Needs to be YYYY-MM-DDTHH:mm")}(e.node.frontmatter),e})).sort((function(e,t){return null===e.node.frontmatter.date?1:null===t.node.frontmatter.date?-1:e.node.frontmatter.date>t.node.frontmatter.date?1:-1}));return g.frontmatter.siteUrl="https://academy.knowit.no/courses/"+n+"/",r.createElement(a.Z,null,r.createElement(m.Z,{maxWidth:"tablet"},r.createElement(l.Z,{paddingTop:4},r.createElement(o.Z,{data:g}),r.createElement(c.Z,{variant:"body1",dangerouslySetInnerHTML:{__html:g.html}})),g.frontmatter.application?r.createElement(l.Z,{sx:{textAlign:"right"}},r.createElement(f.Z,{target:"_blank",sx:{color:"#333",paddingBottom:"4px",borderBottom:"2px solid #f0f",textDecoration:"none"},href:g.frontmatter.application},"Søk om plass")):"",r.createElement(l.Z,{pt:2,pb:8},r.createElement(d,{courses:E,title:"Kursoversikt"}))),r.createElement(s.Z,null),r.createElement(m.Z,null,r.createElement(l.Z,{pb:12})))}},275:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(7294),a=n(6449),o=n(2840),i=function(){(0,a.Z)(),(0,o.Z)("(max-width:480px");return r.createElement("section",{id:"signup",className:"SignupSection-module--signupSection--AyUx5"})}},5291:function(e,t,n){n.r(t);var r=n(7294),a=n(1052);t.default=function(){return r.createElement(a.Z,{program:"personalledelse"})}}}]);
//# sourceMappingURL=component---src-pages-courses-personalledelse-index-js-4429ecc37e97158516bf.js.map