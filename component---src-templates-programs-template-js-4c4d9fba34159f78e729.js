(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{171:function(e,t,a){"use strict";a.r(t);a(94);var n=a(0),r=a.n(n),l=a(176),o=(a(177),a(197),a(164)),c=a.n(o),i=function(e){var t=e.name;return r.a.createElement("span",{alt:t,title:t,className:c.a.iconStyle},t)},m=a(179),s=a.n(m),d=(a(180),a(165)),u=a.n(d),p=function(e){var t=e.data;console.log("data infoheader",t);var a=t.frontmatter;return r.a.createElement("div",{className:u.a.infoHeader},r.a.createElement("div",{className:u.a.infoBox},r.a.createElement("h1",null,a.title),r.a.createElement("div",{className:u.a.byline},r.a.createElement("div",null,r.a.createElement(i,{name:"date_range"}),r.a.createElement("span",{className:u.a.labels},function(e,t){var a=s()(e),n=s()(t);if(!1===s()(a).isValid)return"TBD";var r=a.format("D MMM");return n.isValid()&&(r+=" - "+n.format("D MMM")),r+=" "+a.format("YYYY")}(a.date,a.endDate))),r.a.createElement("div",null,r.a.createElement(i,{name:"face"}),r.a.createElement("span",{className:u.a.labels},a.teacher)),r.a.createElement("div",null,r.a.createElement(i,{name:"access_time"}),r.a.createElement("span",{className:u.a.labels},"Oppdatert ",s()(a.updated).format("LL"))))),r.a.createElement("div",{className:u.a.pictureWrapper},r.a.createElement("img",{src:a.image,alt:"Lecturer is "+a.teacher,className:u.a.picture})))},g=a(178),f=a.n(g),E=a(166),h=a.n(E);a.d(t,"pageQuery",function(){return y});t.default=function(e){var t=e.data,a=t.markdownRemark,n=a.frontmatter,o=a.html;return console.log("should show info header:",n.path,function(){if(n.path.match(/\/courses/))return r.a.createElement(p,{data:a})}),r.a.createElement(l.a,{data:t},r.a.createElement(f.a,null,r.a.createElement("title",null,n.title),r.a.createElement("meta",{name:"description",content:n.description}),r.a.createElement("meta",{property:"og:title",content:n.title}),r.a.createElement("meta",{property:"og:description",content:n.description})),r.a.createElement("section",null,r.a.createElement("div",{className:h.a.content},r.a.createElement(p,{data:a}),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:o}}))))};var y="3424177549"},174:function(e,t,a){"use strict";t.a={knowit:{green:["rgb(0, 89, 79)","rgb(0, 150, 130)","rgb(160, 209, 202)","rgb(201, 226, 224)"],purple:["rgb(97, 75, 121)","rgb(142, 127, 174)","rgb(182, 184, 220)","rgb(222, 225, 236)"],blue:["rgb(40, 51, 74)","rgb(87, 114, 139)","rgb(158, 181, 203)","rgb(214, 225, 236)"],yellow:["rgb(207, 176, 35)","rgb(249, 226, 103)","rgb(242, 240, 161)","rgb(238, 238, 200)"],red:["rgb(194, 110, 96)","rgb(234, 167, 148)","rgb(236, 195, 178)","rgb(243, 233, 226)"],gray:["rgb(117, 120, 123)","rgb(177, 179, 179)","rgb(208, 208, 206)","rgb(228, 226, 219)"]}}},175:function(e){e.exports={a:"0.6.0"}},176:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(173),o=a(178),c=a.n(o),i=function(e){var t=e.metadata;return r.a.createElement(c.a,null,r.a.createElement("title",null,t.title),r.a.createElement("meta",{name:"description",content:t.description}),r.a.createElement("meta",{name:"keywords",content:"Knowit, Knowit Academy, Knowit Academy Norway, Recruitment, Personal Development, Career Path"}),r.a.createElement("meta",{property:"og:title",content:t.title}),r.a.createElement("meta",{property:"og:description",content:t.description}),r.a.createElement("meta",{property:"og:url",content:t.siteUrl}),r.a.createElement("meta",{property:"og:image",content:t.ogImage}),r.a.createElement("link",{rel:"canonical",href:"https://academy.knowit.no/"}),r.a.createElement("html",{lang:"nb"}))},m=a(8),s=a.n(m),d=a(159),u=a.n(d),p=function(e){function t(){return e.apply(this,arguments)||this}return s()(t,e),t.prototype.render=function(){return r.a.createElement("a",{className:u.a.logoWrapper,href:"/"},r.a.createElement("img",{className:u.a.logoStyle,alt:"Knowit Academy Logo",src:"/assets/knowit_academy_logo.png"}))},t}(n.Component),g=a(160),f=a.n(g),E=function(){return r.a.createElement("header",{className:f.a.academyFrontHeader},r.a.createElement(p,null),r.a.createElement("nav",{className:f.a.academyHeaderMenu},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/#about"},"Om Knowit Academy")),r.a.createElement("li",null,r.a.createElement("a",{href:"/#theprograms"},"Programmene")),r.a.createElement("li",null,r.a.createElement("a",{href:"/how-to-apply"},"Påmelding")))))},h=a(174),y=a(175),b=a(161),w=a.n(b),v=function(){return r.a.createElement(r.a.Fragment,null," ",r.a.createElement("span",{className:w.a.version},"v",y.a))},k=l.a.div.withConfig({displayName:"AcademyFooter__Wrapper",componentId:"vya30l-0"})(["display:flex;flex-grow:1;justify-content:center;width:100%;padding:0;margin:0 auto;background-color:",";border-top:1px solid ",";"],h.a.knowit.green[3],h.a.knowit.green[1]),x=l.a.footer.withConfig({displayName:"AcademyFooter__Footer",componentId:"vya30l-1"})(["display:flex;padding:12px 1.4rem;align-items:center;max-width:960px;width:960px;& > *:not(:first-child){margin-left:0.8rem;}div{display:inline-block;font-size:calc(0.2em + 0.6em);font-weight:200;color:black;}img{width:auto;height:56px;}a{color:",";font-weight:600;text-decoration:none;}a:hover{text-decoration:underline;}"],h.a.knowit.green[0]),N=function(){return r.a.createElement(k,null,r.a.createElement(x,null,r.a.createElement("a",{href:"/"},r.a.createElement("img",{src:"/assets/knowit_academy_box_logo.png",alt:"Knowit Academy Logo"})),r.a.createElement("div",null,"Har du spørsmål om Knowit Academy? Send en epost til"," ",r.a.createElement("a",{href:"mailto:academy@knowit.no"},"academy@knowit.no")," så svarer vi så snart vi rekker.",r.a.createElement(v,null))))},_=l.a.div.withConfig({displayName:"FrontLayout__FrontPage",componentId:"sc-10ptwgi-0"})(["height:100%;background-color:white;display:flex;flex-direction:column;align-items:center;justify-items:center;margin:auto;main{flex-grow:1;display:flex;justify-content:flex-start;flex-direction:column;margin:0;}"]);t.a=function(e){var t=e.children,a=e.data;return r.a.createElement(_,null,r.a.createElement(i,{metadata:a}),r.a.createElement(E,{data:a}),r.a.createElement("main",null,t),r.a.createElement(N,null))}},177:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(162),o=a.n(l),c=a(179),i=a.n(c);a(180);i.a.locale("nb");t.a=function(e){var t=e.title,a=e.author,n=e.email,l=e.updated,c=function(e){return null===e?"mailto:academy@knowit.no":"mailto:"+e}(n),m=i()(l);return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,t),r.a.createElement("div",{className:o.a.byline},"Sist oppdatert ",m.format("LL")," av ",r.a.createElement("a",{href:c},a)))}},197:function(e,t,a){var n=a(13).f,r=Function.prototype,l=/^\s*function ([^ (]*)/;"name"in r||a(10)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(l)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=component---src-templates-programs-template-js-4c4d9fba34159f78e729.js.map