(function(t){function e(e){for(var n,o,c=e[0],r=e[1],l=e[2],m=0,p=[];m<c.length;m++)o=c[m],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&p.push(s[o][0]),s[o]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,l||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],n=!0,c=1;c<i.length;c++){var r=i[c];0!==s[r]&&(n=!1)}n&&(a.splice(e--,1),t=o(o.s=i[0]))}return t}var n={},s={app:0},a=[];function o(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=n,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=r;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"00d0":function(t,e,i){},"029a":function(t,e,i){"use strict";var n=i("0613"),s=i.n(n);s.a},"034f":function(t,e,i){"use strict";var n=i("85ec"),s=i.n(n);s.a},"0613":function(t,e,i){},"06dd":function(t,e,i){"use strict";var n=i("e210"),s=i.n(n);s.a},1172:function(t,e,i){},"150b":function(t,e,i){},"17e1":function(t,e,i){},"18d2":function(t,e,i){"use strict";var n=i("00d0"),s=i.n(n);s.a},"1ed8":function(t,e,i){"use strict";var n=i("2e40"),s=i.n(n);s.a},2006:function(t,e,i){},2209:function(t,e,i){"use strict";var n=i("ac01"),s=i.n(n);s.a},"2e40":function(t,e,i){},"302e":function(t,e,i){},3751:function(t,e,i){"use strict";var n=i("7514"),s=i.n(n);s.a},"38cc":function(t,e,i){"use strict";var n=i("7cf7"),s=i.n(n);s.a},"3bf6":function(t,e,i){},"48a3":function(t,e,i){"use strict";var n=i("ebf4"),s=i.n(n);s.a},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var n=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},a=[],o=(i("034f"),i("2877")),c={},r=Object(o["a"])(c,s,a,!1,null,null,null),l=r.exports,u=i("8c4f"),m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("landing-page"),i("about",{staticClass:"dark-text"}),i("projects"),i("contact")],1)},p=[],d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"landing-page"},[i("div",{staticClass:"col align-bottom"},[i("div",{staticClass:"text name"},[t._v(" "+t._s(t.name)+" ")])]),i("div",{staticClass:"col vertical align-top"},[i("div",{staticClass:"text profession"},[t._v(" "+t._s(t.profession)+" ")])])])},g=[],h={name:"LandingPage",props:{msg:String},data:function(){return{name:"João Ferreira",profession:"Software Engineer"}}},f=h,v=(i("2209"),Object(o["a"])(f,d,g,!1,null,"1ff32974",null)),b=v.exports,y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"landing-page"},[i("div",{staticClass:"divider"}),i("skills-modal",{ref:"skills"}),i("div",{staticClass:"container dark-text"},[i("container",{attrs:{title:"About Me"}},[i("div",{staticClass:"is-size-5 container2 desktop"},t._l(t.topics,(function(t){return i("topic",{key:t.icon,staticClass:"topic",attrs:{icon:t.icon,text:t.text,action:t.action}})})),1)]),i("container",{staticClass:"interests",attrs:{title:"Interests"}},[i("div",{staticClass:"is-size-5 container2 desktop"},t._l(t.interests,(function(t){return i("topic",{key:t.icon,attrs:{icon:t.icon,text:t.text,action:t.action}})})),1)])],1)],1)},C=[],w=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"section"},[i("h2",{staticClass:"Title is-size-2"},[t._v(" "+t._s(t.title)+" ")]),i("div",{staticClass:"line"})]),i("div",[t._t("default")],2)])},k=[],_={name:"Section",props:{title:String}},x=_,j=(i("ea20"),Object(o["a"])(x,w,k,!1,null,"851b8228",null)),S=j.exports,P=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"topic",class:{clickable:null!=t.action},on:{click:t.execute}},[i("div",{staticClass:"icon"},[i("img",{attrs:{src:t.publicIcon+t.icon}})]),t._v(" "+t._s(t.text)+" ")])},O=[],A={name:"Topic",props:{icon:String,text:String,action:Function},data:function(){return{publicIcon:"/svg/"}},methods:{execute:function(){null!=this.action&&this.action()}}},F=A,D=(i("029a"),Object(o["a"])(F,P,O,!1,null,"50a2aab0",null)),M=D.exports,E=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("modal",{attrs:{visible:t.visible},on:{close:function(e){t.visible=!1}}},[i("div",{staticClass:"content content-y"},[i("span",{staticClass:"exit",on:{click:function(e){t.visible=!1}}},[i("span",{staticClass:"close absolute"})]),i("div",{staticClass:"flex flex-reactive body stretch"},t._l(t.skills,(function(e){return i("div",{key:e.title,staticClass:"skills"},[i("div",{staticClass:"flex stretch skill"},[i("h3",{staticClass:"title"},[t._v(t._s(e.title))]),i("div",{staticClass:"scroll"},[i("ul",{staticClass:"topics"},t._l(e.topics,(function(e){return i("li",{key:e,staticClass:"topic"},[t._v(" "+t._s(e)+" ")])})),0)])])])})),0)])])},T=[],I=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"modal",class:{visible:t.visible},on:{click:function(e){return e.target!==e.currentTarget?null:t.$emit("close")}}},[t._t("default")],2)},G=[],L={name:"Modal",props:{visible:Boolean},watch:{data:function(t){null!=t&&(this.visible=!0)}}},$=L,z=(i("8ca6"),Object(o["a"])($,I,G,!1,null,"9c57d146",null)),B=z.exports,V={name:"SkillsModal",components:{modal:B},data:function(){return{visible:!1,skills:[{title:"Programming",topics:["C# / Java","C / C++","Python / Lua","HTML / CSS","Node.js / PHP","Javascript / VueJS","Cg / HLSL","OpenCV / Keras"]},{title:"Design",topics:["Affinity Photo","Affinity Designer","Blender","Aseprite"]},{title:"Technologies",topics:["Unity","Docker","Git","Android","Linux","Windows"]}]}},watch:{data:function(t,e){null!=t&&(this.visible=!0)}},methods:{open:function(){this.visible=!0}}},R=V,U=(i("85ed"),Object(o["a"])(R,E,T,!1,null,"1a591430",null)),N=U.exports,J={name:"About",components:{container:S,topic:M,SkillsModal:N},data:function(){return{topics:[{icon:"europe.svg",text:"Portugal",action:null},{icon:"gamedevlove.svg",text:"Game Dev at Heart",action:null},{icon:"skills.svg",text:"Skills",action:this.showSkills}],interests:[{icon:"rendering.svg",text:"Realtime Rendering",action:null},{icon:"ai.svg",text:"Artificial Intelligence",action:null},{icon:"design.svg",text:"Digital Design",action:null}]}},methods:{showSkills:function(){this.$refs["skills"].open()}}},W=J,Z=(i("6d90"),Object(o["a"])(W,y,C,!1,null,"da8caacc",null)),H=Z.exports,q=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"landing-page"},[i("modal",{ref:"modal",attrs:{data:t.selected}}),i("div",{staticClass:"divider s2"}),i("div",{staticClass:"container"},[i("container",{staticClass:"dark",attrs:{title:"Projects"}},[i("div",{staticClass:"flex.row topics"},t._l(t.categories,(function(e,n){return i("div",{key:n,on:{click:function(){return t.setCategory(n)}}},[i("img",{staticClass:"category",class:{catselected:n==t.category},attrs:{src:t.publicIcon+n+".svg"}})])})),0),i("div",{staticClass:"columns is-mobile is-multiline padding"},t._l(t.projects,(function(e,n){return i("project",{key:n,staticClass:"column is-12-mobile is-6-tablet is-3-desktop",class:{hidden:null!=t.category&&null!=e["categories"]&&!e.categories.includes(t.category)},attrs:{data:e},on:{open:t.openProject}})})),1)])],1)],1)},Q=[],K=(i("ac4d"),i("8a81"),i("ac6a"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"clickable",on:{click:function(e){return t.$emit("open",t.data)}}},[i("div",{staticClass:"card relative image"},[i("img",{staticClass:"absolute",attrs:{src:t.data.img}}),i("div",{staticClass:"absolute gradient"}),i("div",{staticClass:"absolute gradient2"}),i("span",{staticClass:"text"},[t._v(" "+t._s(t.data.title)+" ")]),t.data["categories"]?i("div",{staticClass:"category absolute text"},t._l(t.data.categories,(function(e){return i("img",{key:e,attrs:{src:t.publicIcon+e+".svg"}})})),0):t._e()])])}),X=[],Y={props:{data:Object},data:function(){return{publicIcon:"/svg/"}},computed:{category:function(){return this.data["category"]?this.data.category:null}}},tt=Y,et=(i("38cc"),Object(o["a"])(tt,K,X,!1,null,"6e116c44",null)),it=et.exports,nt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return null!=t.data?i("modal",{attrs:{visible:t.visible},on:{close:t.close}},[i("div",{staticClass:"content content-y"},[i("span",{staticClass:"exit",on:{click:t.close}},[i("span",{staticClass:"close absolute"})]),i("div",{staticClass:"columns body is-multiline"},[i("div",{staticClass:"column slides is-7-desktop is-12-tablet"},[i("slides",{ref:"slides",staticClass:"media",attrs:{media:t.data.media}})],1),i("div",{staticClass:"column is-5-desktop is-12-tablet"},[i("div",{staticClass:"flex justify content-small-y"},[i("div",{staticClass:"title"},[t._v(" "+t._s(t.data.title))]),i("div",{staticClass:"text-left body-content"},[i("div",{staticClass:"description"},[null!=t.data.body?i("vue-markdown",{staticClass:"markdown force",attrs:{source:t.markdown}},[t._v(" "+t._s(t.markdown)+" ")]):t._e()],1)])])])])])]):t._e()},st=[],at=function(){var t=this,e=t.$createElement,i=t._self._c||e;return null!=t.media?i("div",{staticClass:"flex items"},[i("div",{staticClass:"media absolute"},t._l(t.media,(function(e,n){return i("media",{key:n,ref:"media",refInFor:!0,staticClass:"media-player",attrs:{active:n==t.current,content:e}})})),1),i("div",{staticClass:"buttons stretch absolute"},[i("div",{staticClass:"holder"},[i("div",{staticClass:"btn left",on:{click:function(){return t.increment(-1)}}}),i("div",{staticClass:"btn right",on:{click:function(){return t.increment(1)}}})]),i("div",{staticClass:"current"},[t._v(" "+t._s(t.current+1)+"/"+t._s(t.media.length)+" ")])])]):t._e()},ot=[],ct=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"relative"},["video"==t.getType&&t.active?i("iframe",{staticClass:"fill",attrs:{src:t.content}}):t._e(),"video_imgur"==t.getType&&t.active?i("video",{staticClass:"fill",attrs:{autoplay:"autoplay",muted:"true",loop:"loop"},domProps:{muted:!0}},[i("source",{staticClass:"fill",attrs:{src:t.content}})]):t._e(),"img"==t.getType?i("img",{staticClass:"fill",class:{invisible:!t.active},attrs:{src:t.content}}):t._e()])},rt=[],lt=(i("6762"),i("2fdb"),{props:{content:String,active:Boolean},computed:{getType:function(){return this.content.includes("youtu")?"video":this.content.includes(".mp4")?"video_imgur":"img"}}}),ut=lt,mt=(i("c769"),Object(o["a"])(ut,ct,rt,!1,null,"b4d7349a",null)),pt=mt.exports,dt={props:{media:Array},components:{Media:pt},data:function(){return{current:0}},watch:{media:function(){this.current=0}},methods:{increment:function(t){this.current=(this.current+t)%this.media.length,this.current<0&&(this.current=this.media.length-1)},stop:function(){this.current=-1},start:function(){this.current=0}}},gt=dt,ht=(i("06dd"),Object(o["a"])(gt,at,ot,!1,null,"ff1cc854",null)),ft=ht.exports,vt=i("9ce6"),bt=i.n(vt),yt={name:"ProjectModal",props:{data:Object},components:{modal:B,slides:ft,VueMarkdown:bt.a},data:function(){return{visible:!1,markdown:null}},watch:{data:function(t){null!=t&&(this.visible=!0,this.markdown=this.data.body)}},methods:{open:function(){this.visible=!0,this.$refs["slides"].start()},close:function(){this.visible=!1,this.$refs["slides"].stop()}}},Ct=yt,wt=(i("1ed8"),Object(o["a"])(Ct,nt,st,!1,null,"315237ba",null)),kt=wt.exports,_t=[{title:"Snaliens",categories:["unity"],img:"https://i.imgur.com/FwdVF7C.png",media:["https://www.youtube.com/embed/PZecVaFgOzI?rel=0&amp;autoplay=1&mute=1","https://i.imgur.com/qOKjAxJ.png","https://i.imgur.com/Ahtabv4.gif","https://i.imgur.com/ri7SirF.gif","https://i.imgur.com/4MozHlF.gif","https://i.imgur.com/wQLN2sq.gif"],body:"[Website](./#/snaliens) | [Steam](https://store.steampowered.com/app/1214850/Snaliens/) | [itch.io](https://jferreira.itch.io/snaliens) | [Google Play](https://play.google.com/store/apps/details?id=com.JFerreira.SnaliensDemo)\n\nA group of Snaliens just collapsed on an unexplored planet and now they need your help! Help them to reunite and escape by solving intricate puzzles. \n\n## Features\n- Complete Over 50 Levels\n- Non-Linear World Map\n- Manipulate different devices\n- Pickup and connect different powered parts\n- Play using only one input system mouse/gamepad/keyboard\n"},{title:"WebGen",categories:["python"],img:"https://i.imgur.com/bkhR0vo.png",media:["https://i.imgur.com/nUdGgHp.mp4","https://i.imgur.com/oFGZtu6.mp4","https://i.imgur.com/SNTIOZ7.mp4","https://i.imgur.com/zLPqA8J.png","https://i.imgur.com/so3emh6.png","https://i.imgur.com/dAIzeP0.png","https://i.imgur.com/qErBUfe.png"],body:"[Github](https://github.com/joaocsf/WebGen)\n\nAutomatically Transform Hand-Drawings into Prototypes.\nDeveloped During my Master's Thesis.\n\n## Features\n\n- Support for annotations to control the generated prototype\n- Generic pipeline to extend and experiment\n- Container segmentation approach\n- Hierarchy inference algorithm based on element positioning\n"},{title:"MockGen",categories:["python"],img:"https://i.imgur.com/6AiPmHb.png",media:["https://i.imgur.com/W5BYzA9.png","https://i.imgur.com/eL9Cgub.png","https://i.imgur.com/T836dMq.png","https://i.imgur.com/TG51GdV.png"],body:"[Github](https://github.com/joaocsf/MockGen) | [Website](https://mockgen.herokuapp.com)\n\nA Synthetic Mockup Generation Tool\nDeveloped During my Master's Thesis.\n\n## Features\n\n- Generate large number of mockups\n- Create custom annotations\n- Generate datasets for segmentation and detection porpuses\n\n"},{title:"Shell Search",categories:["unity"],img:"https://i.imgur.com/t0pLIMI.png",media:["https://www.youtube.com/embed/zQ8tWZuB0l8?rel=0&amp;autoplay=1&mute=1","https://i.imgur.com/vaXnSeh.gif","https://i.imgur.com/T1Zu2jl.gif","https://i.imgur.com/Pcm5eB7.gif","https://i.imgur.com/SulVv8P.gif","https://i.imgur.com/t0pLIMI.png","https://i.imgur.com/ZJIc7ca.png"],body:"[Github](https://github.com/joaocsf/FEUP_DJCO_FINAL)\n\nGame Developed During the DJCO class @ FEUP\n## Features\n\n- Custom shaders\n- World transitions based on scale\n- Possession of different objects\n- Custom grid system\n- Custom animation and physics systems\n- Non-linear progression\n- Reactive soundtrack\n- Deformable grass\n- Undo logic\n"},{title:"Library Ascent",categories:["unity"],img:"https://i.imgur.com/sDjWcBa.png",media:["https://www.youtube.com/embed/NrvZG8ZlcPM?rel=0&amp;autoplay=1&mute=1","https://i.imgur.com/5DmcUin.gif","https://i.imgur.com/93Qey7n.gif"],body:"[Github](https://github.com/joaocsf/FEUP-DJCO)\n\nGame Developed During the DJCO class @ FEUP\n## Features\n\n- Procedural level generator\n- Animations\n- Screen shake\n- Explosion warp shader\n- Custom camera transitions\n- Character costumization\n- Different powerups\n"},{title:"Concert App",categories:["android"],img:"https://i.imgur.com/Ii8Uap8.png",media:["https://i.imgur.com/hG7VLkK.png","https://i.imgur.com/s581TqA.png","https://i.imgur.com/E4TocIE.png","https://i.imgur.com/PSQ4O1f.png","https://i.imgur.com/prIMC56.png","https://i.imgur.com/S1b5Oxe.png","https://i.imgur.com/WYC6ZiD.png","https://i.imgur.com/Ii8Uap8.png"],body:"[Github](https://github.com/joaocsf/FEUP-CMOV)\n\nApp to manage tickets and bar discounts\nDeveloped during the CMOV class @ FEUP\n## Features\n\n- Buy tickets for a given concert\n- Receive discounts based on purchases\n- Make orders at the cafeteria or validate tickets using NFC or QR Codes\n- Secure transaction of tickets using public-key encryption\n"},{title:"AR Tower Defense",categories:["unity"],img:"https://i.imgur.com/4iCStF3.jpg",media:["https://www.youtube.com/embed/PhUR-AOZKbA?rel=0&amp;autoplay=1&mute=1","https://i.imgur.com/TEE5ggZ.jpg","https://i.imgur.com/sunhyGy.jpg"],body:"\n\nGame Developed During the RVAU class @ FEUP\n## Features\n\n- Adjust your height\n- Use markers to place towers\n- Interactive slingshot\n- Grab objects\n- Boss stages\n- Real world light affects in-game lighting\n- Animations\n- Custom Artwork\n"},{title:"The Flashlight",categories:["unity"],img:"https://i.imgur.com/z9h8xFn.png",media:["https://www.youtube.com/embed/8APfudLeFxw?rel=0&amp;autoplay=1&mute=1","https://i.imgur.com/IkhJvOg.png","https://i.imgur.com/pZof5OR.png","https://i.imgur.com/z9h8xFn.png"],body:"\nPrototype based on the game [Perspective](https://arcade.digipen.edu/games/perspective)\n\n## Features\n\n- Play with perspective\n- FPS meets 2D platform\n- Play with shadows\n- Different levels to reflect the game mechanics\n"},{title:"Experiments",categories:["unity"],img:"https://i.imgur.com/He6RNs1.png",media:["https://www.youtube.com/embed/rHMQi44TNp0?rel=0&amp;autoplay=1&mute=1","https://i.imgur.com/uaoPJt0.png","https://i.imgur.com/oSp9SoA.png","https://i.imgur.com/He6RNs1.png","https://i.imgur.com/G9b6CgW.png","https://i.imgur.com/yaC4Iws.png","https://i.imgur.com/AtzxvYb.png"],body:"\nA Prototype with custom character and logic editor which enables the player to walk on any surface.\n\n## Features\n\n- Custom node-based logic editor with a real-time debugger\n- Custom character movement capable of walking on any surface\n- Custom water shader\n- Footsteps audio based on the surface material\n"},{title:"Space Battlegrounds",categories:["unity"],img:"https://i.imgur.com/LeFi4fH.png",media:["https://i.imgur.com/pLbIEjR.gif","https://i.imgur.com/LWVSkil.gif","https://i.imgur.com/N7Sd14U.png","https://i.imgur.com/LeFi4fH.png","https://i.imgur.com/RV8fOwX.png","https://i.imgur.com/KDjpI8p.png","https://i.imgur.com/zaTT3QV.png"],body:"\nSmall prototype where teams cooperate to control a space ship to battle each other\n\n## Features\n\n- Custom network code built upon Unity's LLAPI\n- Movement replication\n- Radial menu\n- Custom player shading\n- Mountable turrets\n"},{title:"Dungeon Generator",categories:["unity"],img:"https://i.imgur.com/BmCUz47.png",media:["https://i.imgur.com/TlixqjD.png","https://i.imgur.com/BxqCsBY.png","https://i.imgur.com/iuBXQGc.png","https://i.imgur.com/kBhgzLt.png","https://i.imgur.com/oprD4di.png","https://i.imgur.com/eufOvY8.png","https://i.imgur.com/yqkQ9T8.png","https://i.imgur.com/TWeDq7K.png","https://i.imgur.com/6rpbO1n.png","https://i.imgur.com/BmCUz47.png"],body:"\nDungeon procedural generator\n\n## Features\n\n- Randomly locked rooms with respective keys\n- Custom navmesh generation and navigation solution\n- Room decoration using custom meshes\n"},{title:"Top-down Survival",categories:["unity"],img:"https://i.imgur.com/dnrmCvV.png",media:["https://i.imgur.com/11br9WI.gif","https://i.imgur.com/fT089PU.gif","https://i.imgur.com/e5p1BIc.png","https://i.imgur.com/Ibfbtiq.png","https://i.imgur.com/RDA219b.gif","https://i.imgur.com/6roFiFb.gif","https://i.imgur.com/o9fvlN9.gif","https://i.imgur.com/EnMqVVC.png"],body:"\nPrototype with modding support based on components\n\n## Features\n\n- Creation of new items based on existing components\n- Creation of blocks and biomes taking temperature and height maps into account\n- Screen-space shadows\n- Texture atlas packing\n"},{title:"2D Voxel Shooter",categories:["unity"],img:"https://i.imgur.com/d7Piiac.png",media:["https://i.imgur.com/rISAEbk.gif","https://i.imgur.com/Xkximr6.gif","https://i.imgur.com/RBqNYX0.gif","https://i.imgur.com/eVZTlB0.gif","https://i.imgur.com/IXfGZAa.gif","https://i.imgur.com/d7Piiac.png"],body:"\nVoxel shooter with a custom level editor\n\n## Features\n\n- Level editor exposing attributes through reflection\n- Custom inverse kinematics for the arms and legs of the character\n- Destructible terrain\n- Dig your battlefield\n"},{title:"3D Voxel Generator",categories:["unity"],img:"https://i.imgur.com/DW7Fgn5.gif",media:["https://i.imgur.com/ekTv9yU.mp4","https://i.imgur.com/J2l8p3e.mp4","https://i.imgur.com/xOBa8Z1.png","https://i.imgur.com/RNOZh8V.mp4","https://i.imgur.com/LglnFDy.mp4"],body:"\nMultiple experiments compiled related to a 3D custom voxel editor\n\n## Features\n\n- Multithreaded\n- Usage of memory pools\n- Support for custom meshes\n- Custom shaders for wind animation\n"},{title:"Minix Shooter",categories:["c"],img:"https://i.imgur.com/88sI8hC.png",media:["https://i.imgur.com/F5wvbn9.mp4","https://i.imgur.com/DbvFA4h.mp4","https://i.imgur.com/88sI8hC.png","https://i.imgur.com/JfmepMs.png","https://i.imgur.com/q3bcIAr.png"],body:"[Github](https://github.com/joaocsf/LCOM)\n\nTop-down shooter programmed in C for the Minix OS\n\n## Features\n\n- Destructible terrain\n- Buffer to store dead enemy sprites\n- Parsing of timer/keyboard/mouse interrupt signals\n- Multiplayer support through UART\n- A* Pathfinding\n- Custom BMP reader\n"}],xt={name:"About",components:{container:S,project:it,Modal:kt},data:function(){return{projects:_t,selected:{},category:null,publicIcon:"/svg/"}},methods:{openProject:function(t){this.selected=null,this.selected=t,this.$refs["modal"].open()},setCategory:function(t){this.category=this.category==t?null:t}},computed:{categories:function(){var t={},e=!0,i=!1,n=void 0;try{for(var s,a=this.projects[Symbol.iterator]();!(e=(s=a.next()).done);e=!0){var o=s.value;if(o["categories"]){var c=!0,r=!1,l=void 0;try{for(var u,m=o.categories[Symbol.iterator]();!(c=(u=m.next()).done);c=!0){var p=u.value;t[p]=!0}}catch(d){r=!0,l=d}finally{try{c||null==m.return||m.return()}finally{if(r)throw l}}}}}catch(d){i=!0,n=d}finally{try{e||null==a.return||a.return()}finally{if(i)throw n}}return t}}},jt=xt,St=(i("8ae3"),Object(o["a"])(jt,q,Q,!1,null,"16237d0c",null)),Pt=St.exports,Ot=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"landing-page"},[i("div",{staticClass:"divider s3"}),i("div",{staticClass:"container"},[i("container",{attrs:{title:"Contact"}},[i("div",{staticClass:"is-size-5 container2 desktop"},t._l(t.content,(function(e){return i("topic",{key:e.icon,staticClass:"topic",attrs:{icon:e.icon,text:e.name,action:function(){return t.redirect(e.url)}}})})),1)])],1)])},At=[],Ft={name:"About",components:{container:S,topic:M},data:function(){return{content:[{icon:"linkedin.svg",name:"LinkedIn",url:"https://www.linkedin.com/in/jo%C3%A3o-ferreira-299971136/"},{icon:"git.svg",name:"GitHub",url:"https://github.com/joaocsf"},{icon:"gmail.svg",name:"Gmail",url:"mailto:joaocsf.se@gmail.com"},{icon:"twitter.svg",name:"Twitter",url:"https://twitter.com/JFerreiraDev"}]}},methods:{redirect:function(t){window.location=t}}},Dt=Ft,Mt=(i("e935"),Object(o["a"])(Dt,Ot,At,!1,null,"8472c23a",null)),Et=Mt.exports,Tt={name:"home",components:{LandingPage:b,About:H,Projects:Pt,Contact:Et}},It=Tt,Gt=Object(o["a"])(It,m,p,!1,null,null,null),Lt=Gt.exports,$t=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("intro"),i("buy"),i("about",{staticClass:"container"}),i("contact")],1)},zt=[],Bt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"snaliens landing-page"},[i("div",{staticClass:"artwork"},[i("div",{staticClass:"title"}),i("heads"),i("tree",{staticClass:"tree t1"}),i("tree",{staticClass:"tree t2"})],1),i("div",{staticClass:"bottom"})])},Vt=[],Rt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Ut=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tree"},[i("div",{staticClass:"leaf n3"}),i("div",{staticClass:"leaf n2"}),i("div",{staticClass:"leaf"})])}],Nt={},Jt=Nt,Wt=(i("ce97"),Object(o["a"])(Jt,Rt,Ut,!1,null,"7ebaa4eb",null)),Zt=Wt.exports,Ht=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},qt=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"holder"},[i("div",{staticClass:"heads"},[i("div",{staticClass:"head n2"},[i("div",{staticClass:"eye"},[i("div",{staticClass:"iris"})])]),i("div",{staticClass:"head n3"},[i("div",{staticClass:"eye"},[i("div",{staticClass:"iris"})])]),i("div",{staticClass:"head"},[i("div",{staticClass:"eye"},[i("div",{staticClass:"iris"})])])])])}],Qt={},Kt=Qt,Xt=(i("c084"),Object(o["a"])(Kt,Ht,qt,!1,null,"aeb1af1e",null)),Yt=Xt.exports,te={components:{Tree:Zt,Heads:Yt}},ee=te,ie=(i("d625"),Object(o["a"])(ee,Bt,Vt,!1,null,"0dab07a2",null)),ne=ie.exports,se=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"landing-page snaliens"},[i("div",{staticClass:"container white-text"},[i("container",{staticClass:"white-text",attrs:{title:"About"}},[i("div",{staticClass:"container content columns is-mobile is-multiline padding"},[i("vue-markdown",{staticClass:"markdown force snaliens",attrs:{source:t.about}},[t._v(" "+t._s(t.about)+" ")])],1)]),i("container",{staticClass:"features",attrs:{title:"Features"}},[i("div",{staticClass:"is-size-5 container2 desktop"},t._l(t.topics,(function(t){return i("topic",{key:t.icon,staticClass:"snaliens",attrs:{icon:t.icon,text:t.text,action:t.action}})})),1)]),i("container",{staticClass:"med",attrs:{title:"Media"}},[i("div",{staticClass:"is-size-5 container content desktop"},[i("div",{staticClass:"slides"},[i("div",{staticClass:"slides2"},[i("slides",{ref:"slides",staticClass:"media",attrs:{media:t.media}})],1)])])])],1)])},ae=[],oe={components:{container:S,topic:M,slides:ft,VueMarkdown:bt.a},data:function(){return{about:"A group of Snaliens just collapsed on an unexplored planet and now they need your help!\nHelp them to reunite and escape by solving intricate puzzles.\n      ",topics:[{icon:"Timer.svg",text:"No Timers",action:null},{icon:"levels.svg",text:"80+ Levels",action:null},{icon:"NonLinear.svg",text:"Non Linear",action:null},{icon:"Snake.svg",text:"Snake-Like Behaviour",action:this.showSkills},{icon:"acessible.svg",text:"Keyboard, Gamepad or Mouse",action:this.showSkills}],media:["https://www.youtube.com/embed/PZecVaFgOzI?rel=0&amp;autoplay=1&mute=1","https://i.imgur.com/DCnzusn.png","https://i.imgur.com/PmsLVQJ.png","https://i.imgur.com/fPZ42yG.png","https://i.imgur.com/E4VXZeK.png","https://i.imgur.com/NlL7a2R.png","https://i.imgur.com/sA6PNyw.png","https://i.imgur.com/1kA95SB.png","https://i.imgur.com/0heyw65.png","https://i.imgur.com/fvCQSRp.png"]}}},ce=oe,re=(i("3751"),i("711b"),Object(o["a"])(ce,se,ae,!1,null,"cbd85712",null)),le=re.exports,ue=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"landing-page"},[i("div",{staticClass:"container"},[i("container",{attrs:{title:"More"}},[i("div",{staticClass:"is-size-5 container2 desktop"},t._l(t.content,(function(e){return i("topic",{key:e.icon,staticClass:"topic",attrs:{icon:e.icon,text:e.name,action:function(){return t.redirect(e.url)}}})})),1)])],1)])},me=[],pe={name:"About",components:{container:S,topic:M},data:function(){return{content:[{icon:"rendering.svg",name:"Press Kit",url:"https://drive.google.com/open?id=123ae6_YmN_oKretDTonQ2R6-WqmWxE6W"},{icon:"gmail.svg",name:"Contact",url:"mailto:joaocsf.se@gmail.com"}]}},methods:{redirect:function(t){window.location=t}}},de=pe,ge=(i("48a3"),Object(o["a"])(de,ue,me,!1,null,"7bcea85e",null)),he=ge.exports,fe=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"landing-page"},[i("div",{staticClass:"container"},[i("div",{staticClass:"is-size-5 container2 desktop"},t._l(t.content,(function(e){return i("topic",{key:e.icon,staticClass:"topic",attrs:{icon:e.icon,text:e.name,action:function(){return t.redirect(e.url)}}})})),1)]),i("div",{staticClass:"divider s5"})])},ve=[],be={name:"Buy",components:{topic:M},data:function(){return{content:[{icon:"Steam.svg",name:"Steam",url:"https://store.steampowered.com/app/1214850/Snaliens/"},{icon:"itch.svg",name:"Itch.io",url:"https://jferreira.itch.io/snaliens"}]}},methods:{redirect:function(t){window.location=t}}},ye=be,Ce=(i("18d2"),Object(o["a"])(ye,fe,ve,!1,null,"6c6b7599",null)),we=Ce.exports,ke={name:"SnaliensPage",components:{Intro:ne,About:le,Contact:he,Buy:we},data:function(){return{}}},_e=ke,xe=(i("a4fe"),Object(o["a"])(_e,$t,zt,!1,null,"18ed7b35",null)),je=xe.exports;n["default"].use(u["a"]);var Se=new u["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:[{path:"/",name:"home",component:Lt},{path:"/snaliens",name:"snaliens",component:je}]}),Pe=i("8a03"),Oe=i.n(Pe);i("150b"),i("db39"),i("5abe");n["default"].use(Oe.a),n["default"].config.productionTip=!1,new n["default"]({router:Se,render:function(t){return t(l)}}).$mount("#app")},5747:function(t,e,i){},"67b8":function(t,e,i){},"6aeb":function(t,e,i){},"6d90":function(t,e,i){"use strict";var n=i("cf6c"),s=i.n(n);s.a},"711b":function(t,e,i){"use strict";var n=i("1172"),s=i.n(n);s.a},7514:function(t,e,i){},"7cf7":function(t,e,i){},"85ec":function(t,e,i){},"85ed":function(t,e,i){"use strict";var n=i("6aeb"),s=i.n(n);s.a},"8ae3":function(t,e,i){"use strict";var n=i("3bf6"),s=i.n(n);s.a},"8ca6":function(t,e,i){"use strict";var n=i("5747"),s=i.n(n);s.a},"930a":function(t,e,i){},a4fe:function(t,e,i){"use strict";var n=i("930a"),s=i.n(n);s.a},a9fb:function(t,e,i){},ac01:function(t,e,i){},c084:function(t,e,i){"use strict";var n=i("302e"),s=i.n(n);s.a},c769:function(t,e,i){"use strict";var n=i("e67c"),s=i.n(n);s.a},ce97:function(t,e,i){"use strict";var n=i("67b8"),s=i.n(n);s.a},cf6c:function(t,e,i){},d625:function(t,e,i){"use strict";var n=i("a9fb"),s=i.n(n);s.a},db39:function(t,e,i){},e210:function(t,e,i){},e67c:function(t,e,i){},e935:function(t,e,i){"use strict";var n=i("17e1"),s=i.n(n);s.a},ea20:function(t,e,i){"use strict";var n=i("2006"),s=i.n(n);s.a},ebf4:function(t,e,i){}});
//# sourceMappingURL=app.a76238c4.js.map