(function(t){function e(e){for(var i,o,c=e[0],r=e[1],l=e[2],u=0,p=[];u<c.length;u++)o=c[u],s[o]&&p.push(s[o][0]),s[o]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);d&&d(e);while(p.length)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,o=1;o<n.length;o++){var r=n[o];0!==s[r]&&(i=!1)}i&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var i={},s={app:0},a=[];function o(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"5921b7b1"}[t]+".js"}function c(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n=s[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise(function(e,i){n=s[t]=[e,i]});e.push(n[2]=i);var a,r=document.createElement("script");r.charset="utf-8",r.timeout=120,c.nc&&r.setAttribute("nonce",c.nc),r.src=o(t),a=function(e){r.onerror=r.onload=null,clearTimeout(l);var n=s[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+i+": "+a+")");o.type=i,o.request=a,n[1](o)}s[t]=void 0}};var l=setTimeout(function(){a({type:"timeout",target:r})},12e4);r.onerror=r.onload=a,document.head.appendChild(r)}return Promise.all(e)},c.m=t,c.c=i,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(n,i,function(e){return t[e]}.bind(null,i));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var d=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"029a":function(t,e,n){"use strict";var i=n("86e4"),s=n.n(i);s.a},"034f":function(t,e,n){"use strict";var i=n("64a9"),s=n.n(i);s.a},"07a1":function(t,e,n){},"0c86":function(t,e,n){},"150b":function(t,e,n){},"1caf":function(t,e,n){},2209:function(t,e,n){"use strict";var i=n("c66e"),s=n.n(i);s.a},3852:function(t,e,n){"use strict";var i=n("ce0d"),s=n.n(i);s.a},"419c":function(t,e,n){"use strict";var i=n("7711"),s=n.n(i);s.a},5502:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],o=(n("034f"),n("2877")),c={},r=Object(o["a"])(c,s,a,!1,null,null,null),l=r.exports,u=n("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("landing-page"),n("about",{staticClass:"dark-text"}),n("projects"),n("contact")],1)},p=[],m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"landing-page"},[n("div",{staticClass:"col align-bottom"},[n("div",{staticClass:"text name"},[t._v(" "+t._s(t.name)+" ")])]),n("div",{staticClass:"col vertical align-top"},[n("div",{staticClass:"text profession"},[t._v(" "+t._s(t.profession)+" ")])])])},f=[],v={name:"LandingPage",props:{msg:String},data:function(){return{name:"João Ferreira",profession:"Software Engineer"}}},h=v,g=(n("2209"),Object(o["a"])(h,m,f,!1,null,"1ff32974",null)),b=g.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"landing-page"},[n("div",{staticClass:"divider"}),n("skills-modal",{ref:"skills"}),n("div",{staticClass:"container"},[n("container",{attrs:{title:"About Me"}},[n("div",{staticClass:"is-size-5 container2 desktop"},t._l(t.topics,function(t){return n("topic",{key:t.icon,staticClass:"topic",attrs:{icon:t.icon,text:t.text,action:t.action}})}),1)]),n("container",{staticClass:"interests",attrs:{title:"Interests"}},[n("div",{staticClass:"is-size-5 container2 desktop"},t._l(t.interests,function(t){return n("topic",{key:t.icon,attrs:{icon:t.icon,text:t.text,action:t.action}})}),1)])],1)],1)},_=[],y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"section"},[n("h2",{staticClass:"Title is-size-2"},[t._v(" "+t._s(t.title)+" ")]),n("div",{staticClass:"line"})]),n("div",[t._t("default")],2)])},k=[],x={name:"Section",props:{title:String}},j=x,P=(n("ea20"),Object(o["a"])(j,y,k,!1,null,"851b8228",null)),w=P.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"topic",class:{clickable:null!=t.action},on:{click:t.execute}},[n("div",{staticClass:"icon"},[n("img",{attrs:{src:t.publicIcon+t.icon}})]),t._v("\n  "+t._s(t.text)+"\n")])},O=[],A={name:"Topic",props:{icon:String,text:String,action:Function},data:function(){return{publicIcon:"/svg/"}},methods:{execute:function(){null!=this.action&&this.action()}}},D=A,E=(n("029a"),Object(o["a"])(D,S,O,!1,null,"50a2aab0",null)),G=E.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("modal",{attrs:{visible:t.visible},on:{close:function(e){t.visible=!1}}},[n("div",{staticClass:"content content-y"},[n("span",{staticClass:"exit",on:{click:function(e){t.visible=!1}}},[n("span",{staticClass:"close absolute"})]),n("div",{staticClass:"flex flex-reactive body stretch"},t._l(t.skills,function(e){return n("div",{key:e.title,staticClass:"skills"},[n("div",{staticClass:"flex stretch skill"},[n("h3",{staticClass:"title"},[t._v(t._s(e.title))]),n("div",{staticClass:"scroll"},[n("ul",{staticClass:"topics"},t._l(e.topics,function(e){return n("li",{key:e,staticClass:"topic"},[t._v(" "+t._s(e)+" ")])}),0)])])])}),0)])])},T=[],$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal",class:{visible:t.visible},on:{click:function(e){return e.target!==e.currentTarget?null:t.$emit("close")}}},[t._t("default")],2)},L=[],I={name:"Modal",props:{visible:Boolean},watch:{data:function(t,e){null!=t&&(this.visible=!0)}}},F=I,J=(n("c03f"),Object(o["a"])(F,$,L,!1,null,"0da2a9c9",null)),W=J.exports,z=n("9ce6"),B=n.n(z),U={name:"SkillsModal",components:{modal:W,VueMarkdown:B.a},data:function(){return{visible:!1,skills:[{title:"Programming",topics:["C# / Java","C / C++","Python / Lua","HTML / CSS","Node.js / PHP","Javascript / VueJS","Cg / HLSL","OpenCV / Keras"]},{title:"Design",topics:["Affinity Photo","Affinity Designer","Blender","Aseprite"]},{title:"Technologies",topics:["Unity","Docker","Git","Android","Linux","Windows"]}]}},watch:{data:function(t,e){null!=t&&(this.visible=!0)}},methods:{open:function(){this.visible=!0}}},H=U,Z=(n("6799"),Object(o["a"])(H,M,T,!1,null,"22217cee",null)),N=Z.exports,V={name:"About",components:{container:w,topic:G,SkillsModal:N},data:function(){return{topics:[{icon:"europe.svg",text:"Portugal",action:null},{icon:"gamedevlove.svg",text:"Game Dev at Heart",action:null},{icon:"skills.svg",text:"Skills",action:this.showSkills}],interests:[{icon:"rendering.svg",text:"Realtime Rendering",action:null},{icon:"ai.svg",text:"Artificial Intelligence",action:null},{icon:"design.svg",text:"Digital Design",action:null}]}},methods:{showSkills:function(){this.$refs["skills"].open()}}},q=V,R=(n("a892"),Object(o["a"])(q,C,_,!1,null,"c20045c2",null)),Q=R.exports,K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"landing-page"},[n("modal",{ref:"modal",attrs:{data:t.selected}}),n("div",{staticClass:"divider s2"}),n("div",{staticClass:"container"},[n("container",{staticClass:"dark",attrs:{title:"Projects"}},[n("div",{staticClass:"columns is-mobile is-multiline padding"},t._l(t.projects,function(e,i){return n("project",{key:i,staticClass:"column is-12-mobile is-6-tablet is-3-desktop",attrs:{data:e},on:{open:t.openProject}})}),1)])],1)],1)},X=[],Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"clickable",on:{click:function(e){return t.$emit("open",t.data)}}},[n("div",{staticClass:"card relative image"},[n("img",{staticClass:"absolute",attrs:{src:t.data.img}}),n("div",{staticClass:"absolute gradient"}),n("span",{staticClass:"text"},[t._v(" "+t._s(t.data.title)+" ")])])])},tt=[],et={props:{data:Object}},nt=et,it=(n("81e5"),Object(o["a"])(nt,Y,tt,!1,null,"0a7f2f40",null)),st=it.exports,at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return null!=t.data?n("modal",{attrs:{visible:t.visible},on:{close:t.close}},[n("div",{staticClass:"content content-y"},[n("span",{staticClass:"exit",on:{click:t.close}},[n("span",{staticClass:"close absolute"})]),n("div",{staticClass:"columns body is-multiline"},[n("div",{staticClass:"column slides is-7-desktop is-12-tablet"},[n("slides",{ref:"slides",staticClass:"media",attrs:{media:t.data.media}})],1),n("div",{staticClass:"column is-5-desktop is-12-tablet"},[n("div",{staticClass:"flex justify content-small-y"},[n("div",{staticClass:"title"},[t._v(" "+t._s(t.data.title))]),n("div",{staticClass:"text-left body-content"},[n("div",{staticClass:"description"},[null!=t.data.body?n("vue-markdown",{staticClass:"markdown force",attrs:{source:t.markdown}},[t._v(" "+t._s(t.markdown)+" ")]):t._e()],1)])])])])])]):t._e()},ot=[],ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return null!=t.media?n("div",{staticClass:"flex items"},[n("div",{staticClass:"media absolute"},t._l(t.media,function(e,i){return n("media",{key:i,ref:"media",refInFor:!0,staticClass:"media-player",attrs:{active:i==t.current,content:e}})}),1),n("div",{staticClass:"buttons stretch absolute"},[n("div",{staticClass:"holder"},[n("div",{staticClass:"btn left",on:{click:function(){return t.increment(-1)}}}),n("div",{staticClass:"btn right",on:{click:function(){return t.increment(1)}}})]),n("div",{staticClass:"current"},[t._v(" "+t._s(t.current+1)+"/"+t._s(t.media.length)+" ")])])]):t._e()},rt=[],lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative"},["video"==t.getType&&t.active?n("iframe",{staticClass:"fill",attrs:{src:t.content}}):t._e(),"video_imgur"==t.getType&&t.active?n("video",{staticClass:"fill",attrs:{autoplay:"autoplay",muted:"true",loop:"loop"},domProps:{muted:!0}},[n("source",{staticClass:"fill",attrs:{src:t.content}})]):t._e(),"img"==t.getType?n("img",{staticClass:"fill",class:{invisible:!t.active},attrs:{src:t.content}}):t._e(),n("div",{staticClass:"bg fill"})])},ut=[],dt=(n("6762"),n("2fdb"),{props:{content:String,active:Boolean},computed:{getType:function(){return this.content.includes("youtu")?"video":this.content.includes(".mp4")?"video_imgur":"img"}}}),pt=dt,mt=(n("3852"),Object(o["a"])(pt,lt,ut,!1,null,"690a1449",null)),ft=mt.exports,vt={props:{media:Array},components:{Media:ft},data:function(){return{current:0}},watch:{media:function(t,e){this.current=0}},methods:{increment:function(t){this.current=(this.current+t)%this.media.length,this.current<0&&(this.current=this.media.length-1)},stop:function(){this.current=-1},start:function(){this.current=0}}},ht=vt,gt=(n("cc22"),Object(o["a"])(ht,ct,rt,!1,null,"9633a8e8",null)),bt=gt.exports,Ct={name:"ProjectModal",props:{data:Object},components:{modal:W,slides:bt,VueMarkdown:B.a},data:function(){return{visible:!1,markdown:null}},watch:{data:function(t,e){null!=t&&(this.visible=!0,this.markdown=this.data.body)}},methods:{open:function(){this.visible=!0,this.$refs["slides"].start()},close:function(){this.visible=!1,this.$refs["slides"].stop()}}},_t=Ct,yt=(n("e0be"),Object(o["a"])(_t,at,ot,!1,null,"5c291bd9",null)),kt=yt.exports,xt=[{title:"WebGen",img:"https://i.imgur.com/bkhR0vo.png",media:["https://i.imgur.com/nUdGgHp.mp4","https://i.imgur.com/oFGZtu6.mp4","https://i.imgur.com/SNTIOZ7.mp4","https://i.imgur.com/zLPqA8J.png","https://i.imgur.com/so3emh6.png","https://i.imgur.com/dAIzeP0.png","https://i.imgur.com/qErBUfe.png"],body:"[Github](https://github.com/joaocsf/WebGen)\n\nAutomatically Transform Hand-Drawings into Prototypes.\nDeveloped During my Master's Thesis.\n\n## Features\n\n- Support for Annotations to Control the Generated Prototype\n- Generic Pipeline to Extend and Experiment\n- Container Segmentation Approach\n- Hierarchy Inference Algorithm Based on Element Positioning\n"},{title:"MockGen",img:"https://i.imgur.com/6AiPmHb.png",media:["https://i.imgur.com/W5BYzA9.png","https://i.imgur.com/eL9Cgub.png","https://i.imgur.com/T836dMq.png","https://i.imgur.com/TG51GdV.png"],body:"[Github](https://github.com/joaocsf/MockGen) | [Website](https://mockgen.herokuapp.com)\n\nA Synthetic Mockup Generation Tool\nDeveloped During my Master's Thesis.\n\n## Features\n\n- Generate Large Number of Mockups\n- Create Custom Annotations\n- Generate Datasets for Segmentation and Detection Porpuses\n\n"},{title:"Shell Search",img:"https://i.imgur.com/t0pLIMI.png",media:["https://www.youtube.com/embed/zQ8tWZuB0l8?rel=0&amp;autoplay=1&mute=1","https://i.imgur.com/vaXnSeh.gif","https://i.imgur.com/T1Zu2jl.gif","https://i.imgur.com/Pcm5eB7.gif","https://i.imgur.com/SulVv8P.gif","https://i.imgur.com/t0pLIMI.png","https://i.imgur.com/ZJIc7ca.png"],body:"[Github](https://github.com/joaocsf/FEUP_DJCO_FINAL)\n\nGame Developed During the DJCO class @ FEUP\n## Features\n\n- Custom Shaders\n- World Transitions based on Scale\n- Possession of Different Objects\n- Custom Grid System\n- Custom Animation and Physics Systems\n- Non-Linear Progression\n- Reactive Soundtrack\n- Deformable Grass\n- Undo Logic\n"},{title:"Library Ascent",img:"https://i.imgur.com/sDjWcBa.png",media:["https://www.youtube.com/embed/NrvZG8ZlcPM?rel=0&amp;autoplay=1&mute=1","https://i.imgur.com/5DmcUin.gif","https://i.imgur.com/93Qey7n.gif"],body:"[Github](https://github.com/joaocsf/FEUP-DJCO)\n\nGame Developed During the DJCO class @ FEUP\n## Features\n\n- Procedural Level Generator\n- Animations\n- Screen Shake\n- Explosion Warp Shader\n- Custom Camera Transitions\n- Character Costumization\n- Different Powerups\n"}],jt={name:"About",components:{container:w,project:st,Modal:kt},data:function(){return{projects:xt,selected:{}}},methods:{openProject:function(t){this.selected=null,this.selected=t,this.$refs["modal"].open()}}},Pt=jt,wt=(n("81c7"),Object(o["a"])(Pt,K,X,!1,null,"69cead22",null)),St=wt.exports,Ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"landing-page"},[n("div",{staticClass:"divider s3"}),n("div",{staticClass:"container"},[n("container",{attrs:{title:"Contact"}},[n("div",{staticClass:"is-size-5"},[t._v(" Work In Progres...\n      ")])])],1)])},At=[],Dt={name:"About",components:{container:w}},Et=Dt,Gt=(n("419c"),Object(o["a"])(Et,Ot,At,!1,null,"5dc36fdd",null)),Mt=Gt.exports,Tt={name:"home",components:{LandingPage:b,About:Q,Projects:St,Contact:Mt}},$t=Tt,Lt=Object(o["a"])($t,d,p,!1,null,null,null),It=Lt.exports;i["default"].use(u["a"]);var Ft=new u["a"]({routes:[{path:"/",name:"home",component:It},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),Jt=n("8a03"),Wt=n.n(Jt);n("150b"),n("db39"),n("5abe");i["default"].use(Wt.a),i["default"].config.productionTip=!1,new i["default"]({router:Ft,render:function(t){return t(l)}}).$mount("#app")},"5f6d":function(t,e,n){},"64a9":function(t,e,n){},"66ca":function(t,e,n){},6799:function(t,e,n){"use strict";var i=n("66ca"),s=n.n(i);s.a},7711:function(t,e,n){},"81c7":function(t,e,n){"use strict";var i=n("5502"),s=n.n(i);s.a},"81e5":function(t,e,n){"use strict";var i=n("b5c1"),s=n.n(i);s.a},"86e4":function(t,e,n){},a892:function(t,e,n){"use strict";var i=n("e21e"),s=n.n(i);s.a},b5c1:function(t,e,n){},c03f:function(t,e,n){"use strict";var i=n("5f6d"),s=n.n(i);s.a},c66e:function(t,e,n){},cc22:function(t,e,n){"use strict";var i=n("0c86"),s=n.n(i);s.a},ce0d:function(t,e,n){},db39:function(t,e,n){},e0be:function(t,e,n){"use strict";var i=n("07a1"),s=n.n(i);s.a},e21e:function(t,e,n){},ea20:function(t,e,n){"use strict";var i=n("1caf"),s=n.n(i);s.a}});
//# sourceMappingURL=app.b6a206a5.js.map