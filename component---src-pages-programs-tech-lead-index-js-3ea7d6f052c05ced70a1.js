(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{170:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return i});a(94),a(178);var n=a(0),r=a.n(n),l=a(176),o=a(183),c=a(162),m=a.n(c);t.default=function(e){var t=e.data,a=t.allMarkdownRemark.edges.filter(function(e){return e.node.frontmatter.path.match(/^\/courses\/tech-lead/)}).map(function(e){return e.node.frontmatter.date=new Date(e.node.frontmatter.date),e}).sort(function(e,t){return e.node.frontmatter.date>t.node.frontmatter.date?1:-1}).map(function(e){return r.a.createElement("tr",{key:e.node.frontmatter.path},r.a.createElement("td",{className:"title"},e.node.frontmatter.title),r.a.createElement("td",{className:"teacher"},e.node.frontmatter.teacher),r.a.createElement("td",{className:"date"},e.node.frontmatter.date.toLocaleDateString("no")),r.a.createElement("td",{className:m.a.info},r.a.createElement("a",{href:e.node.frontmatter.path},"info")))}),n=t.site.siteMetadata;return n.title="Tech-Lead programmet 2019/2020",n.description="\n    Tech-Lead programmet i Knowit Academy starter i september 2019 og varer \n    fram til sommeren 2020. Her finner du mer informasjon om programmet, \n    hvilke kurs og workshops som er med, og informasjons om hvordan du søker\n  ",n.siteUrl="https://academy.knowit.no/programs/tech-lead/",n.path="/programs/tech-lead",n.updated="2019-06-27",n.author="Thomas Malt",console.log("data",t),console.log("courses",a),r.a.createElement(l.a,{data:t.site.siteMetadata},r.a.createElement(o.a,{data:{frontmatter:n}}),r.a.createElement("section",{id:"main"},r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Tema"),r.a.createElement("td",null,"Foredragsholder"),r.a.createElement("td",null,"Dato"),r.a.createElement("td",null,"Om kurset"))),r.a.createElement("tbody",null,a))))};var i="2099225012"},173:function(e,t,a){"use strict";t.a={knowit:{green:["rgb(0, 89, 79)","rgb(0, 150, 130)","rgb(160, 209, 202)","rgb(201, 226, 224)"],purple:["rgb(97, 75, 121)","rgb(142, 127, 174)","rgb(182, 184, 220)","rgb(222, 225, 236)"],blue:["rgb(40, 51, 74)","rgb(87, 114, 139)","rgb(158, 181, 203)","rgb(214, 225, 236)"],yellow:["rgb(207, 176, 35)","rgb(249, 226, 103)","rgb(242, 240, 161)","rgb(238, 238, 200)"],red:["rgb(194, 110, 96)","rgb(234, 167, 148)","rgb(236, 195, 178)","rgb(243, 233, 226)"],gray:["rgb(117, 120, 123)","rgb(177, 179, 179)","rgb(208, 208, 206)","rgb(228, 226, 219)"]}}},175:function(e){e.exports={a:"0.6.2"}},176:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(174),o=a(177),c=a.n(o),m=function(e){var t=e.metadata;return r.a.createElement(c.a,null,r.a.createElement("title",null,t.title),r.a.createElement("meta",{name:"description",content:t.description}),r.a.createElement("meta",{name:"keywords",content:"Knowit, Knowit Academy, Knowit Academy Norway, Recruitment, Personal Development, Career Path"}),r.a.createElement("meta",{property:"og:title",content:t.title}),r.a.createElement("meta",{property:"og:description",content:t.description}),r.a.createElement("meta",{property:"og:url",content:t.siteUrl}),r.a.createElement("meta",{property:"og:image",content:t.ogImage}),r.a.createElement("link",{rel:"canonical",href:"https://academy.knowit.no/"}),r.a.createElement("html",{lang:"nb"}))},i=a(8),s=a.n(i),d=a(159),u=a.n(d),f=function(e){function t(){return e.apply(this,arguments)||this}return s()(t,e),t.prototype.render=function(){return r.a.createElement("a",{className:u.a.logoWrapper,href:"/"},r.a.createElement("img",{className:u.a.logoStyle,alt:"Knowit Academy Logo",src:"/assets/knowit_academy_logo.png"}))},t}(n.Component),g=a(160),p=a.n(g),h=function(){return r.a.createElement("header",{className:p.a.academyFrontHeader},r.a.createElement(f,null),r.a.createElement("nav",{className:p.a.academyHeaderMenu},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/#about"},"Om Knowit Academy")),r.a.createElement("li",null,r.a.createElement("a",{href:"/#theprograms"},"Programmene")),r.a.createElement("li",null,r.a.createElement("a",{href:"/how-to-apply"},"Påmelding")))))},E=a(173),y=a(175),b=a(161),v=a.n(b),w=function(){return r.a.createElement(r.a.Fragment,null," ",r.a.createElement("span",{className:v.a.version},"v",y.a))},k=l.a.div.withConfig({displayName:"AcademyFooter__Wrapper",componentId:"vya30l-0"})(["display:flex;flex-grow:1;justify-content:center;width:100%;padding:0;margin:0 auto;background-color:",";border-top:1px solid ",";"],E.a.knowit.green[3],E.a.knowit.green[1]),x=l.a.footer.withConfig({displayName:"AcademyFooter__Footer",componentId:"vya30l-1"})(["display:flex;padding:12px 1.4rem;align-items:center;max-width:960px;width:960px;& > *:not(:first-child){margin-left:0.8rem;}div{display:inline-block;font-size:calc(0.2em + 0.6em);font-weight:200;color:black;}img{width:auto;height:56px;}a{color:",";font-weight:600;text-decoration:none;}a:hover{text-decoration:underline;}"],E.a.knowit.green[0]),N=function(){return r.a.createElement(k,null,r.a.createElement(x,null,r.a.createElement("a",{href:"/"},r.a.createElement("img",{src:"/assets/knowit_academy_box_logo.png",alt:"Knowit Academy Logo"})),r.a.createElement("div",null,"Har du spørsmål om Knowit Academy? Send en epost til"," ",r.a.createElement("a",{href:"mailto:academy@knowit.no"},"academy@knowit.no")," så svarer vi så snart vi rekker.",r.a.createElement(w,null))))},M=l.a.div.withConfig({displayName:"FrontLayout__FrontPage",componentId:"sc-10ptwgi-0"})(["height:100%;background-color:white;display:flex;flex-direction:column;align-items:center;justify-items:center;margin:auto;main{flex-grow:1;display:flex;justify-content:flex-start;flex-direction:column;margin:0;}"]);t.a=function(e){var t=e.children,a=e.data;return r.a.createElement(M,null,r.a.createElement(m,{metadata:a}),r.a.createElement(h,{data:a}),r.a.createElement("main",null,t),r.a.createElement(N,null))}},178:function(e,t,a){"use strict";var n=a(9),r=a(32),l=a(31),o=a(12),c=[].sort,m=[1,2,3];n(n.P+n.F*(o(function(){m.sort(void 0)})||!o(function(){m.sort(null)})||!a(179)(c)),"Array",{sort:function(e){return void 0===e?c.call(l(this)):c.call(l(this),r(e))}})},179:function(e,t,a){"use strict";var n=a(12);e.exports=function(e,t){return!!e&&n(function(){t?e.call(null,function(){},1):e.call(null)})}},181:function(e,t,a){"use strict";a(180);var n=a(0),r=a.n(n),l=a(163),o=a.n(l);t.a=function(e){var t=e.name,a=e.style;return r.a.createElement("span",{alt:t,title:t,style:a,className:o.a.iconStyle},t)}},183:function(e,t,a){"use strict";a(94),a(180);var n=a(0),r=a.n(n),l=a(181),o=a(173),c=a(182),m=a.n(c),i=(a(185),a(164)),s=a.n(i),d=function(e){var t=e.startDate,a=e.endDate,n=e.confirmed,c=n?{color:o.a.knowit.green[0]}:{color:o.a.knowit.red[0]};return r.a.createElement("div",null,r.a.createElement(l.a,{style:c,name:"date_range"}),r.a.createElement("span",{style:c,className:s.a.labels},function(e,t,a){void 0===a&&(a=!1);var n=m()(e),r=m()(t);if(!1===m()(n).isValid)return"TBD";if(!1===a)return n.format("D MMM")+" (ubekreftet)";var l=n.format("D MMM");return r.isValid()&&(l+=" - "+r.format("D MMM")),l+=" "+n.format("YYYY")}(t,a,n)))},u=function(e){var t=e.name;return r.a.createElement("div",null,r.a.createElement(l.a,{name:"face"}),r.a.createElement("span",{className:s.a.labels},t))},f=function(e){var t=e.author,a=e.email;return a||(a="academy.knowit.no"),r.a.createElement(r.a.Fragment,null,"av ",r.a.createElement("a",{href:"mailto:"+a},t))},g=function(e){var t=e.date,a=e.path,n=e.author,o=e.email,c=a.match(/\/courses/)?"":r.a.createElement(f,{author:n,email:o});return r.a.createElement("div",null,r.a.createElement(l.a,{name:"access_time"}),r.a.createElement("span",{className:s.a.labels},"Oppdatert ",m()(t).format("LL")," ",c))},p=function(e){var t=e.url;return r.a.createElement("div",{className:s.a.pictureWrapper,style:{backgroundImage:"url("+t+")",backgroundClip:"padding-box",backgroundPosition:"50% 30%",backgroundSize:"cover",backgroundRepeat:"no-repeat"}})};t.a=function(e){var t=e.data.frontmatter,a=!!t.confirmed,n=t.path.match(/\/courses/)?r.a.createElement(d,{confirmed:a,startDate:t.date,endDate:t.endDate}):"",l=t.path.match(/\/courses/)?r.a.createElement(u,{name:t.teacher}):"",o=t.path.match(/\/courses/)?r.a.createElement(p,{url:t.image,teacher:t.teacher}):"";return r.a.createElement("div",{className:s.a.infoHeader},r.a.createElement("div",{className:s.a.infoBox},r.a.createElement("h1",null,t.title),r.a.createElement("div",{className:s.a.byline},n,l,r.a.createElement(g,{date:t.updated,path:t.path,author:t.author,email:t.email}))),o)}}}]);
//# sourceMappingURL=component---src-pages-programs-tech-lead-index-js-3ea7d6f052c05ced70a1.js.map