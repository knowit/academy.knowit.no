"use strict";(self.webpackChunkacademy_knowit_no=self.webpackChunkacademy_knowit_no||[]).push([[906],{9875:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(9611);function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function o(e,t,n){return(o=a()?Reflect.construct:function(e,t,n){var a=[null];a.push.apply(a,t);var o=new(Function.bind.apply(e,a));return n&&(0,r.Z)(o,n.prototype),o}).apply(null,arguments)}var c=n(4145),u=n(7294),l=n(6938),i=n(1675),m=n(6314),s=n(1100),f=function(e){var t=e.courses,n=e.title,r=t.map((function(e){var t=e.node,n=e.node.frontmatter;return u.createElement(s.Z,{data:t,key:n.path,showDescription:!0})}));return u.createElement("div",{className:"ProgramOverview-module--programOverview--ct9QH"},u.createElement("h2",null,n),r)},d=n(5444),p=function(){return(0,d.K2)("3392641262")};var g=function(e){var t=e.program,n=p(),r=new RegExp("^/programs/about-"+t),a=new RegExp("^/courses/"+t),s=n.allMarkdownRemark.edges.find((function(e){return e.node.frontmatter.path.match(r)})).node,d=n.allMarkdownRemark.edges.filter((function(e){return e.node.frontmatter.path.match(a)})).map((function(e){var t,n;return e.node.frontmatter.date=(t=e.node.frontmatter.date,n=t.split(/\D+/),o(Date,(0,c.Z)(n))),e})).sort((function(e,t){return e.node.frontmatter.date>t.node.frontmatter.date?1:-1}));return s.frontmatter.siteUrl="https://academy.knowit.no/programs/"+t+"/",s.frontmatter.path="/programs/"+t,u.createElement(l.Z,{data:n.site.siteMetadata},u.createElement("section",{id:"main",className:"programpage-module--courseInfoSection--1okuC"},u.createElement(i.Z,{data:s}),u.createElement("div",{className:"programpage-module--aboutProgram--22cJP",dangerouslySetInnerHTML:{__html:s.html}}),u.createElement(f,{courses:d,title:"Kursoversikt"}),u.createElement(m.Z,null)))}},6314:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(7294),a=function(){return r.createElement("section",{className:"SignupSection-module--signupSection--2qImi",id:"signup"},r.createElement("h2",{className:"SignupSection-module--signupTitle--33qPq"},"Påmelding"),r.createElement("p",null,"Påmeldingen har ikke startet. "),r.createElement("a",{class:"link",href:"/how-to-apply"},"Les mer om søknadsprosessen"))}},2921:function(e,t,n){n.r(t);var r=n(7294),a=n(9875);t.default=function(){return r.createElement(a.Z,{program:"design-lead"})}}}]);
//# sourceMappingURL=component---src-pages-programs-design-lead-index-js-cd42dfbb95bec34e63cb.js.map