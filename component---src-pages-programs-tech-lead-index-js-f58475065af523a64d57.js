(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{158:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return l});n(93);var a=n(0),r=n.n(a),o=n(163);n(159);t.default=function(e){var t=e.data,n=t.allMarkdownRemark.edges.filter(function(e){return e.node.frontmatter.path.match(/^\/courses\/tech-lead/)}).map(function(e){return e.node.frontmatter.date=new Date(e.node.frontmatter.date),e}).map(function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.node.frontmatter.title),r.a.createElement("td",null,e.node.frontmatter.teacher),r.a.createElement("td",null,e.node.frontmatter.date.toLocaleDateString("no")))});return console.log("courses",n),r.a.createElement(o.a,{data:t.site},r.a.createElement("h1",null,"Tech Lead programmet 2019/2020"),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Tema"),r.a.createElement("td",null,"Foredragsholder"),r.a.createElement("td",null,"Dato"))),r.a.createElement("tbody",null,n)))};var l="2099225012"},162:function(e,t,n){"use strict";t.a={knowit:{green:["rgb(0, 89, 79)","rgb(0, 150, 130)","rgb(160, 209, 202)","rgb(201, 226, 224)"],purple:["rgb(97, 75, 121)","rgb(142, 127, 174)","rgb(182, 184, 220)","rgb(222, 225, 236)"],blue:["rgb(40, 51, 74)","rgb(87, 114, 139)","rgb(158, 181, 203)","rgb(214, 225, 236)"],yellow:["rgb(207, 176, 35)","rgb(249, 226, 103)","rgb(242, 240, 161)","rgb(238, 238, 200)"],red:["rgb(194, 110, 96)","rgb(234, 167, 148)","rgb(236, 195, 178)","rgb(243, 233, 226)"],gray:["rgb(117, 120, 123)","rgb(177, 179, 179)","rgb(208, 208, 206)","rgb(228, 226, 219)"]}}},163:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(161),l=n(164),i=n.n(l),c=function(e){var t=e.metadata;return r.a.createElement(i.a,null,r.a.createElement("title",null,t.title),r.a.createElement("meta",{name:"description",content:t.description}),r.a.createElement("meta",{name:"keywords",content:"Knowit, Knowit Academy, Knowit Academy Norway, Recruitment, Personal Development, Career Path"}),r.a.createElement("meta",{property:"og:title",content:t.title}),r.a.createElement("meta",{property:"og:description",content:t.description}),r.a.createElement("meta",{property:"og:url",content:t.siteUrl}),r.a.createElement("meta",{property:"og:image",content:t.ogImage}),r.a.createElement("link",{rel:"canonical",href:"https://academy.knowit.no/"}),r.a.createElement("html",{lang:"nb"}))},m=n(162),d=n(8),g=n.n(d),u=o.a.img.withConfig({displayName:"AcademyLogo__StyledLogo",componentId:"sc-1acwjxy-0"})(["width:90%;height:auto;max-width:800px;display:flex;object-fit:scale-down;margin:1.4em auto;@media (max-height:480px){height:auto;width:calc(60 * 2.8px);margin:4px 20px 4px auto;}"]),p=function(e){function t(){return e.apply(this,arguments)||this}return g()(t,e),t.prototype.render=function(){return r.a.createElement(u,{alt:"Knowit Academy Logo",src:"/assets/knowit_academy_logo.png"})},t}(r.a.Component),s=o.a.a.withConfig({displayName:"AcademyLogoBanner__LogoBanner",componentId:"ia4l3o-0"})(["width:100%;background-color:",";max-height:50vh;display:flex;flex-direction:column;align-items:center;justify-items:center;margin:auto;@media (max-height:480px){background-color:",";height:72px;min-height:72px;width:100%;margin:0px;flex-direction:row;justify-content:flex-end;}"],m.a.knowit.green[1],m.a.knowit.green[1]),h=function(e){function t(){return e.apply(this,arguments)||this}return g()(t,e),t.prototype.render=function(){return r.a.createElement(s,{href:"/"},r.a.createElement(p,null))},t}(r.a.Component),f=o.a.header.withConfig({displayName:"AcademyFrontHeader__FrontHeader",componentId:"cew7tx-0"})(["width:100%;background-color:",";margin:0;padding:0;display:block;"],m.a.knowit.green[0]),w=o.a.nav.withConfig({displayName:"AcademyFrontHeader__AcademyFrontMenu",componentId:"cew7tx-1"})(["max-width:960px;padding:0 1.4rem;margin:auto;ul{padding:0;margin:0;display:flex;flex-direction:row;align-items:center;justify-content:flex-start;overflow:hidden;}li{list-style:none;padding:0.6rem 0.2rem;margin:0 3rem 0 0rem;font-weight:600;color:white;display:inline-block;white-space:nowrap;border-top:0.4rem solid ",";border-bottom:0.4rem solid ",";}li:hover{border-bottom:0.4rem solid ",";}li a{text-decoration:inherit;color:inherit;}"],m.a.knowit.green[0],m.a.knowit.green[0],m.a.knowit.green[2]),y=function(){return r.a.createElement(f,null,r.a.createElement(h,null),r.a.createElement(w,null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/#about"},"Om Knowit Academy")),r.a.createElement("li",null,r.a.createElement("a",{href:"/#theprograms"},"Programmene")),r.a.createElement("li",null,r.a.createElement("a",{href:"/how-to-apply"},"Påmelding")))))},b=o.a.div.withConfig({displayName:"AcademyFooter__Wrapper",componentId:"vya30l-0"})(["display:flex;flex-grow:1;justify-content:center;width:100%;padding:0;margin:0 auto;background-color:",";border-top:1px solid ",";"],m.a.knowit.green[3],m.a.knowit.green[1]),E=o.a.footer.withConfig({displayName:"AcademyFooter__Footer",componentId:"vya30l-1"})(["display:flex;padding:12px 1.4rem;align-items:center;max-width:960px;width:960px;& > *:not(:first-child){margin-left:0.8rem;}div{display:inline-block;font-size:calc(0.2em + 0.6em);font-weight:200;color:black;}img{width:auto;height:56px;}a{color:",";font-weight:600;text-decoration:none;}a:hover{text-decoration:underline;}"],m.a.knowit.green[0]),x=function(){return r.a.createElement(b,null,r.a.createElement(E,null,r.a.createElement("a",{href:"/"},r.a.createElement("img",{src:"/assets/knowit_academy_box_logo.png",alt:"Knowit Academy Logo"})),r.a.createElement("div",null,"Har du spørsmål om Knowit Academy? Send en epost til"," ",r.a.createElement("a",{href:"mailto:academy@knowit.no"},"academy@knowit.no")," så svarer vi så snart vi rekker.")))},k=o.a.div.withConfig({displayName:"FrontLayout__FrontPage",componentId:"sc-10ptwgi-0"})(["height:100%;background-color:white;display:flex;flex-direction:column;align-items:center;justify-items:center;margin:auto;main{flex-grow:1;display:flex;justify-content:flex-start;flex-direction:column;margin:0;}"]);t.a=function(e){var t=e.children,n=e.data;return r.a.createElement(k,null,r.a.createElement(c,{metadata:n}),r.a.createElement(y,null),r.a.createElement("main",null,t),r.a.createElement(x,null))}}}]);
//# sourceMappingURL=component---src-pages-programs-tech-lead-index-js-f58475065af523a64d57.js.map