(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{144:function(e,t,n){"use strict";n.r(t);n(73);var a=n(0),r=n.n(a),o=n(148),i=n(145),l=n(146),m=i.a.section.withConfig({displayName:"AboutAcademy__AboutSection",componentId:"sc-1k7w69o-0"})(["margin-top:0;margin-left:auto;margin-right:auto;background-color:white;hyphens:auto;h2{color:",";}p{line-height:1.4;}p:first-child{margin-top:0;}p:last-child{margin-bottom:0;}"],l.a.knowit.green[0]),c=function(){return r.a.createElement(m,{id:"about"},r.a.createElement("p",null,"Knowit Academy Norway er Knowits norske kompetanseutviklingsprogram. Målgruppen for programmet er ansatte i alle Knowits selskaper i Norge. Vår ambisjon er å lage et kompetanseutviklingsprogram som er bedre enn noe annet du kan finne."),r.a.createElement("p",null,"For 2018-2019 bestod Knowit Academy av følgende program: Team Lead-skolen, Tech Lead-skolen og Prosjektleder-skolen."),r.a.createElement("p",null,"Planlegging av programmet for 2019-2020 er i gang, og mer informasjon vil bli lagt ut så snart det er klart."))},d=i.a.section.withConfig({displayName:"ThePrograms__Section",componentId:"ckzhvk-0"})(["background-color:white;flex-grow:1;h2{margin:0;padding:0;color:",";}h4{margin:0;}nav > ul{display:flex;flex-wrap:wrap;margin:1.4rem 0;padding:0;justify-content:space-evenly;}nav > ul > li{list-style:none;display:block;padding:0;margin:12px;max-width:320px;min-width:240px;border-radius:0.6rem;}nav > ul > li:nth-child(1){background-color:",";}nav > ul > li:nth-child(2){background-color:",";}nav > ul > li div{padding:1rem;text-align:center;color:white;}nav > ul > li > a{text-decoration:inherit;color:inherit;}nav p{font-size:0.9em;line-height:1.4;}nav p:last-child{margin-bottom:0;}"],l.a.knowit.green[0],l.a.knowit.purple[0],l.a.knowit.red[0]),g=function(e){var t=e.pages;console.log("The Programs:",t);var n=t.map(function(e){return r.a.createElement("li",{key:e.path},r.a.createElement("a",{href:e.path},r.a.createElement("div",null,r.a.createElement("h4",null,e.title),r.a.createElement("p",null,e.description))))});return r.a.createElement(d,{id:"theprograms"},r.a.createElement("h2",null,"Programmer for 2019/2020"),r.a.createElement("nav",null,r.a.createElement("ul",null,n)))};n.d(t,"query",function(){return p});t.default=function(e){var t=e.data,n=t.site.siteMetadata,a=t.allMarkdownRemark.edges.filter(function(e){return e.node.frontmatter.path.match(/^\/programs/)}).map(function(e){return e.node.frontmatter});return console.log("the programpages: ",a),r.a.createElement(o.a,{data:n},r.a.createElement(c,null),r.a.createElement(g,{pages:a}))};var p="3591132529"},146:function(e,t,n){"use strict";t.a={knowit:{green:["rgb(0, 89, 79)","rgb(0, 150, 130)","rgb(160, 209, 202)","rgb(201, 226, 224)"],purple:["rgb(97, 75, 121)","rgb(142, 127, 174)","rgb(182, 184, 220)","rgb(222, 225, 236)"],blue:["rgb(40, 51, 74)","rgb(87, 114, 139)","rgb(158, 181, 203)","rgb(214, 225, 236)"],yellow:["rgb(207, 176, 35)","rgb(249, 226, 103)","rgb(242, 240, 161)","rgb(238, 238, 200)"],red:["rgb(194, 110, 96)","rgb(234, 167, 148)","rgb(236, 195, 178)","rgb(243, 233, 226)"],gray:["rgb(117, 120, 123)","rgb(177, 179, 179)","rgb(208, 208, 206)","rgb(228, 226, 219)"]}}},148:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(145),i=n(147),l=n.n(i),m=function(e){var t=e.metadata;return r.a.createElement(l.a,null,r.a.createElement("title",null,t.title),r.a.createElement("meta",{name:"description",content:t.description}),r.a.createElement("meta",{name:"keywords",content:"Knowit, Knowit Academy, Knowit Academy Norway, Recruitment, Personal Development, Career Path"}),r.a.createElement("meta",{property:"og:title",content:t.title}),r.a.createElement("meta",{property:"og:description",content:t.description}),r.a.createElement("meta",{property:"og:url",content:t.siteUrl}),r.a.createElement("meta",{property:"og:image",content:t.ogImage}),r.a.createElement("link",{rel:"canonical",href:"https://academy.knowit.no/"}),r.a.createElement("html",{lang:"nb"}))},c=n(146),d=n(7),g=n.n(d),p=o.a.img.withConfig({displayName:"AcademyLogo__StyledLogo",componentId:"sc-1acwjxy-0"})(["width:90%;height:auto;max-width:800px;display:flex;object-fit:scale-down;margin:1.4em auto;@media (max-height:480px){height:auto;width:calc(60 * 2.8px);margin:4px 20px 4px auto;}"]),s=function(e){function t(){return e.apply(this,arguments)||this}return g()(t,e),t.prototype.render=function(){return r.a.createElement(p,{alt:"Knowit Academy Logo",src:"/assets/knowit_academy_logo.png"})},t}(r.a.Component),u=o.a.a.withConfig({displayName:"AcademyLogoBanner__LogoBanner",componentId:"ia4l3o-0"})(["width:100%;background-color:",";max-height:50vh;display:flex;flex-direction:column;align-items:center;justify-items:center;margin:auto;@media (max-height:480px){background-color:",";height:72px;min-height:72px;width:100%;margin:0px;flex-direction:row;justify-content:flex-end;}"],c.a.knowit.green[1],c.a.knowit.green[1]),h=function(e){function t(){return e.apply(this,arguments)||this}return g()(t,e),t.prototype.render=function(){return r.a.createElement(u,{href:"/"},r.a.createElement(s,null))},t}(r.a.Component),w=o.a.header.withConfig({displayName:"AcademyFrontHeader__FrontHeader",componentId:"cew7tx-0"})(["width:100%;background-color:",";margin:0;padding:0;display:block;"],c.a.knowit.green[0]),f=o.a.nav.withConfig({displayName:"AcademyFrontHeader__AcademyFrontMenu",componentId:"cew7tx-1"})(["max-width:960px;padding:0 1.4rem;margin:auto;ul{padding:0;margin:0;display:flex;flex-direction:row;align-items:center;justify-content:flex-start;overflow:hidden;}li{list-style:none;padding:0.6rem 0.2rem;margin:0 3rem 0 0rem;font-weight:600;color:white;display:inline-block;white-space:nowrap;border-top:0.4rem solid ",";border-bottom:0.4rem solid ",";}li:hover{border-bottom:0.4rem solid ",";}li a{text-decoration:inherit;color:inherit;}"],c.a.knowit.green[0],c.a.knowit.green[0],c.a.knowit.green[2]),y=function(){return r.a.createElement(w,null,r.a.createElement(h,null),r.a.createElement(f,null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"#about"},"Om Knowit Academy")),r.a.createElement("li",null,r.a.createElement("a",{href:"#theprograms"},"Programmene")),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Påmelding")))))},b=o.a.div.withConfig({displayName:"AcademyFooter__Wrapper",componentId:"vya30l-0"})(["display:flex;flex-grow:1;justify-content:center;width:100%;padding:0;margin:0 auto;background-color:",";border-top:1px solid ",";"],c.a.knowit.green[3],c.a.knowit.green[1]),k=o.a.footer.withConfig({displayName:"AcademyFooter__Footer",componentId:"vya30l-1"})(["display:flex;padding:12px 1.4rem;align-items:center;max-width:960px;width:960px;& > *:not(:first-child){margin-left:0.8rem;}div{display:inline-block;font-size:calc(0.2em + 0.6em);font-weight:200;color:black;}img{width:auto;height:56px;}a{color:",";font-weight:600;text-decoration:none;}a:hover{text-decoration:underline;}"],c.a.knowit.green[0]),x=function(){return r.a.createElement(b,null,r.a.createElement(k,null,r.a.createElement("a",{href:"/"},r.a.createElement("img",{src:"/assets/knowit_academy_box_logo.png",alt:"Knowit Academy Logo"})),r.a.createElement("div",null,"Har du spørsmål om Knowit Academy? Send en epost til"," ",r.a.createElement("a",{href:"mailto:academy@knowit.no"},"academy@knowit.no")," så svarer vi så snart vi rekker.")))},E=o.a.div.withConfig({displayName:"FrontLayout__FrontPage",componentId:"sc-10ptwgi-0"})(["height:100%;background-color:white;display:flex;flex-direction:column;align-items:center;justify-items:center;margin:auto;main{flex-grow:1;display:flex;justify-content:flex-start;flex-direction:column;margin:0;}"]);t.a=function(e){var t=e.children,n=e.data;return r.a.createElement(E,null,r.a.createElement(m,{metadata:n}),r.a.createElement(y,null),r.a.createElement("main",null,t),r.a.createElement(x,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-ad7a5edc46a5bd90b91c.js.map