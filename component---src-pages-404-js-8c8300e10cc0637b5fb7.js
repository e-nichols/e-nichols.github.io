(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{227:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(233),i=n(279),l=n(280),c=n.n(l);function s(e){var t=e.description,n=e.lang,a=e.meta,o=e.keywords,l=e.title,s=i.data.site,u=t||s.siteMetadata.description;return r.a.createElement(c.a,{htmlAttributes:{lang:n},title:l,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:l},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:u}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(a)})}s.defaultProps={lang:"en",meta:[],keywords:[],description:""};var u=s;t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(u,{title:"404: Not found"}),r.a.createElement("h1",null,"Not Found "),r.a.createElement("p",null,"This Ain't It, Chief"))}},229:function(e,t,n){"use strict";var a=n(234),r="291, 0%, 18%",o={black:"hsla("+r+",1)",text:"hsla("+r+",0.95)",light:"hsla("+r+",0.4)",calm:"hsla("+r+",0.3)",smoke:"hsla("+r+",0.2)",whiteSmoke:"hsla("+r+",0.08)",white:"#fff",link:"#03a9f4",linkHover:"#ff5252"};t.a={animations:{animationCurveFastOutSlowIn:"cubic-bezier(0.4, 0, 0.2, 1)",animationCurveLinearOutSlowIn:"cubic-bezier(0, 0, 0.2, 1)",animationCurveFastOutLinearIn:"cubic-bezier(0.4, 0, 1, 1)",animationCurveDefault:"cubic-bezier(0.4, 0, 0.2, 1)",animationSpeedDefault:"250ms",animationSpeedFast:"200ms",animationSpeedSlow:"300ms"},colors:o,container:Object(a.style)({maxWidth:"37rem",margin:"0 auto"})}},230:function(e,t,n){"use strict";n.d(t,"a",function(){return m});n(19),n(16),n(17),n(9),n(20);var a=n(235),r=n.n(a),o=n(236),i=n(237),l=n.n(i);function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){s(e,t,n[t])})}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=new r.a({title:"St. Evs",baseFontSize:"16px",headerColor:"hsla(0,0%,0%,1)",bodyColor:"hsla(0,0%,0%,0.8)",baseLineHeight:1.5625,bodyWeight:400,boldWeight:700,headerFontFamily:["Alegreya","serif"],bodyFontFamily:["Alegreya Sans","sans-serif"],googleFonts:[{name:"Alegreya",styles:["400","700"]},{name:"Alegreya Sans",styles:["400","700"]}],overrideStyles:function(e,t){var n,a=e.adjustFontSizeTo,r=e.scale,i=e.rhythm;return(n={a:{color:"#fb251b",textDecoration:"none"},"a:hover,a:active":{color:t.bodyColor},"h1,h2,h3,h4,h5,h6":{marginTop:i(2)},blockquote:c({},r(.2),{color:l()(41),paddingLeft:i(1.125),marginLeft:0,borderLeft:i(.375)+" solid",borderColor:"#fcea0e"}),"blockquote > :last-child":{marginBottom:0},"blockquote cite":c({},a(t.baseFontSize),{color:t.bodyColor,fontWeight:t.bodyWeight}),"blockquote cite:before":{content:'"— "'}})[o.MOBILE_MEDIA_QUERY]={blockquote:{marginLeft:i(-.75),marginRight:0,borderLeft:i(3/16)+" solid",borderColor:"#fcea0e",paddingLeft:i(9/16)}},n}});var m=u.rhythm;u.scale},231:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"etnichols"}}}}')},232:function(e,t,n){"use strict";n(16),n(17),n(9),n(99),n(42);var a=n(0),r=n.n(a),o=n(13),i=n.n(o),l=n(25),c=(n(214),{posts:"/",projects:"/projects",tutorials:"/tutorials",about:"/about"});t.a=function(e){return r.a.createElement(l.Location,null,function(e){var t=e.location.pathname.split("/")[1];return Object.entries(c).map(function(e){var n=e[0],a=e[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{className:"link-style",to:a},(function(e,t){return e===t||""===t&&"posts"===e}(n,t)?">":"")+" "+n),r.a.createElement("br",null))})})}},233:function(e,t,n){"use strict";var a=n(231),r=n(0),o=n.n(r),i=n(98),l=n(13),c=n.n(l),s=n(232),u=(n(215),n(229));n(230);t.a=function(e){var t=e.children;return o.a.createElement(i.StaticQuery,{query:"755544856",render:function(e){var n=e.site.siteMetadata.title;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"container"},o.a.createElement("main",null,o.a.createElement(c.a,{to:"/",css:{display:"inline-block"}},o.a.createElement("h1",{className:"site-title"},n)),o.a.createElement("hr",null),o.a.createElement(s.a,null),t),o.a.createElement("footer",null,o.a.createElement("div",{style:{fontSize:"18px",color:u.a.colors.text,textAlign:"center"}},"© "+(new Date).getFullYear()+" "+n))))},data:a})}},279:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"etnichols","description":"Software Engineer in NYC by way of Kansas City. Reader, runner, writer, slackliner and web development enthusiast.","author":"Evan Nichols"}}}}')}}]);
//# sourceMappingURL=component---src-pages-404-js-8c8300e10cc0637b5fb7.js.map