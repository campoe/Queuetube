(function(t){function e(e){for(var o,r,c=e[0],u=e[1],l=e[2],s=0,d=[];s<c.length;s++)r=c[s],a[r]&&d.push(a[r][0]),a[r]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(o=!1)}o&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var o={},r={app:0},a={app:0},i=[];function c(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-2d22cdfc":"9e5abab2","chunk-323e955e":"cfdf0a6a","chunk-4d22f83c":"59216515","chunk-b1a63524":"649ed300"}[t]+".js"}function u(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-323e955e":1,"chunk-4d22f83c":1,"chunk-b1a63524":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise(function(e,n){for(var o="css/"+({}[t]||t)+"."+{"chunk-2d22cdfc":"31d6cfe0","chunk-323e955e":"5214a25d","chunk-4d22f83c":"b2269043","chunk-b1a63524":"8111e00c"}[t]+".css",a=u.p+o,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var l=i[c],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===o||s===a))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],s=l.getAttribute("data-href");if(s===o||s===a)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var o=e&&e.target&&e.target.src||a,i=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");i.request=o,delete r[t],f.parentNode.removeChild(f),n(i)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){r[t]=0}));var o=a[t];if(0!==o)if(o)e.push(o[2]);else{var i=new Promise(function(e,n){o=a[t]=[e,n]});e.push(o[2]=i);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=c(t),l=function(e){s.onerror=s.onload=null,clearTimeout(d);var n=a[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+o+": "+r+")");i.type=o,i.request=r,n[1](i)}a[t]=void 0}};var d=setTimeout(function(){l({type:"timeout",target:s})},12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(e)},u.m=t,u.c=o,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)u.d(n,o,function(e){return t[e]}.bind(null,o));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/Queuetube/",u.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var f=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0ae2":function(t,e,n){"use strict";var o=n("80bf"),r=n.n(o);r.a},"0bdf":function(t,e,n){},"3ece":function(t,e,n){"use strict";var o=n("550b"),r=n.n(o);r.a},"550b":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),r=n("9f7b");n("8a7a"),n("2dd8");o["a"].use(r["a"]);n("d06d");var a=n("0874");o["a"].component("v-icon",a["a"]);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("navbar"),n("b-container",{staticClass:"p-4"},[t.isLoading?n("loader"):t._e(),n("router-view")],1),n("scroll-to-top",{attrs:{threshold:100}})],1)},c=[],u=n("cebc"),l=n("2f62"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-navbar",{attrs:{sticky:"",type:"light",variant:"light",toggleable:"md"}},[n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-navbar-brand",{attrs:{to:{name:"home"}}},[t._v("Queuetube")]),n("b-collapse",{attrs:{"is-nav":"",id:"nav-collapse"}},[n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-text",[t._v("\n                Night Mode\n            ")]),n("b-nav-text",{staticClass:"mx-3",attrs:{right:""}},[n("night-switch")],1)],1)],1)],1)},d=[],f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"switch"},[n("input",{attrs:{id:"nightSwitchOption",name:"nightSwitchOption",type:"checkbox"},on:{click:t.toggleNightMode}}),n("label",{staticClass:"label-primary",attrs:{for:"nightSwitchOption"}})])},p=[],m=(n("5df3"),n("7514"),n("a4bb")),h=n.n(m),b=(n("ac6a"),n("7f7f"),n("795b")),v=n.n(b),g=function(){var t=function(t){var e=document.createElement("link");return e.rel="stylesheet",e.href=t,document.head.appendChild(e),new v.a(function(t,n){e.onload=function(e){var n=e.target.sheet;n.disabled=!0,t(n)},e.onerror=n})},e=function(t,e){if(e&&!t[e])throw new Error('"'.concat(e,'" has not been defined as a theme.'));h()(t).forEach(function(n){return t[n].disabled=n!==e})},n={};return{add:function(e,o){return t(o).then(function(t){return n[e]=t})},set theme(t){e(n,t)},get theme(){return h()(n).find(function(t){return!n[t].disabled})}}},y={flatly:"https://bootswatch.com/4/flatly/bootstrap.min.css",darkly:"https://bootswatch.com/4/darkly/bootstrap.min.css"},w=new g,j=h()(y).map(function(t){return w.add(t,y[t])});v.a.all(j).then(function(t){w.theme="flatly"});var O={name:"NightSwitch",data:function(){return{nightModeOn:!1}},methods:{toggleNightMode:function(){this.nightModeOn=!this.nightModeOn,this.nightModeOn?w.theme="darkly":w.theme="flatly"}}},k=O,x=(n("0ae2"),n("2877")),T=Object(x["a"])(k,f,p,!1,null,"40265150",null);T.options.__file="NightSwitch.vue";var E=T.exports,N={name:"Navbar",components:{NightSwitch:E}},V=N,_=Object(x["a"])(V,s,d,!1,null,"61908c3a",null);_.options.__file="Navbar.vue";var S=_.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-button",{staticClass:"to-top-btn",on:{click:t.backToTop}},[n("v-icon",{attrs:{name:"angle-up","aria-hidden":"true"}})],1)},C=[],I=(n("c5f6"),{name:"ScrollToTop",props:{threshold:{type:Number,default:0,validator:function(t){return t>=0}}},methods:{backToTop:function(){window.scrollTo({top:0,behavior:"smooth"})},showToTopBtn:function(){if(document.body.scrollTop>this.threshold||document.documentElement.scrollTop>this.threshold){var t=document.getElementsByClassName("to-top-btn").item(0);t.style.display="block"}else{var e=document.getElementsByClassName("to-top-btn").item(0);e.style.display="none"}}},mounted:function(){var t=this;window.onscroll=function(){t.showToTopBtn()}}}),U=I,L=(n("3ece"),Object(x["a"])(U,P,C,!1,null,"289d9dd0",null));L.options.__file="ScrollToTop.vue";var q=L.exports,B=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},A=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loader"},[n("span"),n("span"),n("span")])}],M={name:"Loader"},Q=M,$=(n("8fb5"),Object(x["a"])(Q,B,A,!1,null,"57e13070",null));$.options.__file="Loader.vue";var F=$.exports,R={components:{Navbar:S,ScrollToTop:q,Loader:F},computed:Object(u["a"])({},Object(l["c"])({isLoading:function(t){return t.loader.isLoading}}))},D=R,H=(n("5c0b"),Object(x["a"])(D,i,c,!1,null,null,null));H.options.__file="App.vue";var z=H.exports,J=n("8c4f");o["a"].use(J["a"]);var K,X,Z,G,W,Y,tt=new J["a"]({base:"/Queuetube/",scrollBehavior:function(t,e,n){return n||{x:0,y:0}},routes:[{path:"*",redirect:"/"},{path:"/",name:"home",component:function(){return n.e("chunk-2d22cdfc").then(n.bind(null,"f4a9"))}},{path:"/remote",name:"remote",component:function(){return Promise.all([n.e("chunk-323e955e"),n.e("chunk-b1a63524")]).then(n.bind(null,"90eb"))}},{path:"/local",name:"local",component:function(){return Promise.all([n.e("chunk-323e955e"),n.e("chunk-4d22f83c")]).then(n.bind(null,"90bb"))}}]}),et=tt,nt=n("bfa9"),ot=n("bd86"),rt=n("90d2"),at={isUpdating:!1,isLoading:!1},it={isLoading:function(t){return t.isLoading},isUpdating:function(t){return t.isUpdating}},ct={},ut=(K={},Object(ot["a"])(K,rt["d"],function(t){t.isLoading=!0}),Object(ot["a"])(K,rt["c"],function(t){t.isLoading=!1}),Object(ot["a"])(K,rt["g"],function(t){t.isUpdating=!0}),Object(ot["a"])(K,rt["f"],function(t){t.isUpdating=!1}),K),lt={state:at,getters:it,actions:ct,mutations:ut,namespaced:!0},st=n("bc3a"),dt=n.n(st),ft=n("a7fe"),pt=n.n(ft),mt="id_token",ht=function(){return window.localStorage.getItem(mt)},bt=function(t){window.localStorage.setItem(mt,t)},vt=function(){window.localStorage.removeItem(mt)},gt={getToken:ht,saveToken:bt,destroyToken:vt},yt="http://localhost:3000",wt={init:function(){o["a"].use(pt.a,dt.a),o["a"].axios.defaults.baseURL=yt,o["a"].axios.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded"},setHeader:function(){o["a"].axios.defaults.headers.common["Authorization"]="Token ".concat(gt.getToken())},query:function(t,e){return o["a"].axios.get(t,e).catch(function(t){throw new Error("[QUEUETUBE] ApiService ".concat(t))})},get:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return o["a"].axios.get("".concat(t,"/").concat(e)).catch(function(t){throw new Error("[QUEUETUBE] ApiService ".concat(t))})},post:function(t,e){return o["a"].axios.post("".concat(t),e)},update:function(t,e,n){return o["a"].axios.put("".concat(t,"/").concat(e),n)},put:function(t,e){return o["a"].axios.put("".concat(t),e)},delete:function(t){return o["a"].axios.delete(t).catch(function(t){throw new Error("[QUEUETUBE] ApiService ".concat(t))})}},jt=wt,Ot=n("6c33"),kt={playlist:[],currentVideo:null,roomName:null},xt={playlist:function(t){return t.playlist},currentVideo:function(t){return t.currentVideo},roomName:function(t){return t.roomName}},Tt=(X={},Object(ot["a"])(X,Ot["e"],function(t,e){var n=e.roomName;jt.get("queuetube/".concat(n,"/playlist")).then(function(e){t.commit(rt["m"],{playlist:e.data.playlist})}).catch(function(e){t.commit("error/".concat(rt["k"]),{error:e})})}),Object(ot["a"])(X,Ot["c"],function(t,e){var n=e.roomName;jt.get("queuetube/".concat(n,"/currentVideo")).then(function(e){t.commit(rt["j"],{currentVideo:e.data.currentVideo})}).catch(function(e){t.commit("error/".concat(rt["k"]),{error:e})})}),Object(ot["a"])(X,Ot["d"],function(t,e){var n=e.roomName,o=e.oldStartTime;jt.get("queuetube/".concat(n,"/nextVideo/").concat(o)).then(function(e){t.commit(rt["m"],{playlist:e.data.playlist}),t.commit(rt["j"],{currentVideo:e.data.currentVideo})}).catch(function(e){t.commit("error/".concat(rt["k"]),{error:e})})}),Object(ot["a"])(X,Ot["g"],function(t,e){var n=e.roomName,o=e.video;jt.put("queuetube/".concat(n,"/playlist"),{video:o}).then(function(e){t.commit(rt["m"],{playlist:e.data.playlist}),t.commit(rt["j"],{currentVideo:e.data.currentVideo})}).catch(function(e){t.commit("error/".concat(rt["k"]),{error:e})})}),Object(ot["a"])(X,Ot["f"],function(t,e){var n=e.roomName,o=e.index;jt.delete("queuetube/".concat(n,"/playlist/").concat(o)).then(function(e){t.commit(rt["m"],{playlist:e.data.playlist})}).catch(function(e){t.commit("error/".concat(rt["k"]),{error:e})})}),Object(ot["a"])(X,Ot["h"],function(t,e){var n=e.roomName,o=e.oldIndex,r=e.newIndex;jt.put("queuetube/".concat(n,"/playlist/").concat(o),{newIndex:r}).then(function(e){t.commit(rt["m"],{playlist:e.data.playlist})}).catch(function(e){t.commit("error/".concat(rt["k"]),{error:e})})}),Object(ot["a"])(X,Ot["b"],function(t,e){var n=e.roomName;jt.delete("queuetube/".concat(n,"/currentVideo")).then(function(e){t.commit(rt["j"],{currentVideo:e.data.currentVideo})}).catch(function(e){t.commit("error/".concat(rt["k"]),{error:e})})}),Object(ot["a"])(X,Ot["a"],function(t,e){var n=e.roomName,o=e.hosting;jt.put("queuetube",{roomName:n,hosting:o}).then(function(e){t.commit(rt["n"],{roomName:n}),t.commit("error/".concat(rt["b"]))}).catch(function(e){t.commit("error/".concat(rt["k"]),{error:e})})}),X),Et=(Z={},Object(ot["a"])(Z,rt["a"],function(t,e){var n=e.video;t.playlist.push({video:n})}),Object(ot["a"])(Z,rt["m"],function(t,e){var n=e.playlist;t.playlist=n}),Object(ot["a"])(Z,rt["j"],function(t,e){var n=e.currentVideo;t.currentVideo=n}),Object(ot["a"])(Z,rt["h"],function(t,e){var n=e.index;t.playlist.splice(n,1)}),Object(ot["a"])(Z,rt["i"],function(t,e){var n=e.video,o=e.index;t.playlist=t.playlist.filter(function(t){return t.id.videoId!==n.id.videoId}),t.playlist.splice(o,0,n)}),Object(ot["a"])(Z,rt["n"],function(t,e){var n=e.roomName;t.roomName=n}),Z),Nt={state:kt,getters:xt,actions:Tt,mutations:Et},Vt={error:null},_t={error:function(t){return t.error}},St={},Pt=(G={},Object(ot["a"])(G,rt["k"],function(t,e){t.error=e}),Object(ot["a"])(G,rt["b"],function(t){t.error=null}),G),Ct={state:Vt,getters:_t,actions:St,mutations:Pt,namespaced:!0},It=n("e814"),Ut=n.n(It),Lt=(n("a481"),n("bc3a")),qt="https://www.googleapis.com/youtube/v3/videos";function Bt(t){if(!t.playlist)return new Error("Playlist is undefined!");if(0===t.playlist.length)return new Error("No videos in playlist!");var e=t.playlist.splice(0,1)[0].video,n={id:e.id.videoId,part:"contentDetails",key:"AIzaSyBZ0uBMQFCKEwTjXCbTtxl8Xk6_gNRESKI"};Lt.get(qt,{params:n}).then(function(n){var o=n.data.items[0].contentDetails.duration;o=o.replace("PT","");var r=o.indexOf("H"),a=Ut()(o.substr(0,r));o=o.substr(r+1);var i=o.indexOf("M"),c=Ut()(o.substr(0,i));o=o.substr(i+1);var u=o.indexOf("S"),l=Ut()(o.substr(0,u)),s=0;return l&&(s+=1e3*l),c&&(s+=6e4*c),a&&(s+=36e5*a),t.currentVideo={video:e,startTime:(new Date).getTime(),duration:s},{queuetube:{playlist:t.playlist,currentVideo:t.currentVideo}}}).catch(function(t){return t})}var At={playlist:[],currentVideo:null},Mt={playlist:function(t){return t.playlist},currentVideo:function(t){return t.currentVideo}},Qt=(W={},Object(ot["a"])(W,Ot["e"],function(t){}),Object(ot["a"])(W,Ot["c"],function(t){}),Object(ot["a"])(W,Ot["d"],function(t,e){var n=e.oldStartTime;t.commit(rt["e"],{oldStartTime:n})}),Object(ot["a"])(W,Ot["g"],function(t,e){var n=e.video;t.commit(rt["a"],{video:n})}),Object(ot["a"])(W,Ot["f"],function(t,e){var n=e.index;t.commit(rt["h"],{index:n})}),Object(ot["a"])(W,Ot["h"],function(t,e){var n=e.oldIndex,o=e.newIndex;t.commit(rt["i"],{oldIndex:n,newIndex:o})}),Object(ot["a"])(W,Ot["b"],function(t){t.commit(rt["j"],{currentVideo:null})}),W),$t=(Y={},Object(ot["a"])(Y,rt["a"],function(t,e){var n=e.video;t.playlist.push({video:n}),1!==t.playlist.length||t.currentVideo||Bt(t)}),Object(ot["a"])(Y,rt["m"],function(t,e){var n=e.playlist;t.playlist=n}),Object(ot["a"])(Y,rt["j"],function(t,e){var n=e.currentVideo;t.currentVideo=n}),Object(ot["a"])(Y,rt["h"],function(t,e){var n=e.index;t.playlist.splice(n,1)}),Object(ot["a"])(Y,rt["i"],function(t,e){var n=e.oldIndex,o=e.newIndex,r=t.playlist[n];t.playlist=t.playlist.filter(function(t){return t.video.id.videoId!==r.video.id.videoId}),t.playlist.splice(o,0,r)}),Object(ot["a"])(Y,rt["l"],function(t,e){var n=e.pauseTime;t.currentVideo&&(t.currentVideo.pauseTime=n)}),Object(ot["a"])(Y,rt["e"],function(t,e){e.oldStartTime;t.currentVideo=null,Bt(t)}),Y),Ft={state:At,getters:Mt,actions:Qt,mutations:$t,namespaced:!0};o["a"].use(l["a"]);var Rt=new nt["a"]({key:"queuetube",storage:window.localStorage,reducer:function(t){return{local:t.local,remote:t.remote}}}),Dt=new l["a"].Store({modules:{loader:lt,remote:Nt,local:Ft,error:Ct},plugins:[Rt.plugin]}),Ht=n("9483");Object(Ht["a"])("".concat("/Queuetube/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration: ",t)}});var zt=n("e0ec"),Jt=n.n(zt),Kt=function(t){return"".concat(t[0])};o["a"].prototype.$http=dt.a,o["a"].config.productionTip=!1,o["a"].use(Jt.a),o["a"].filter("error",Kt),jt.init(),new o["a"]({router:et,store:Dt,render:function(t){return t(z)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var o=n("5e27"),r=n.n(o);r.a},"5e27":function(t,e,n){},"6c33":function(t,e,n){"use strict";n.d(e,"e",function(){return o}),n.d(e,"g",function(){return r}),n.d(e,"f",function(){return a}),n.d(e,"h",function(){return i}),n.d(e,"c",function(){return c}),n.d(e,"d",function(){return u}),n.d(e,"b",function(){return l}),n.d(e,"a",function(){return s});var o="fetchPlaylist",r="pushPlaylist",a="popPlaylist",i="reorderPlaylist",c="fetchCurrentVideo",u="fetchNextVideo",l="clearCurrentVideo",s="addRoomIfHosted"},"80bf":function(t,e,n){},"8a7a":function(t,e,n){},"8fb5":function(t,e,n){"use strict";var o=n("0bdf"),r=n.n(o);r.a},"90d2":function(t,e,n){"use strict";n.d(e,"c",function(){return o}),n.d(e,"d",function(){return r}),n.d(e,"g",function(){return a}),n.d(e,"f",function(){return i}),n.d(e,"k",function(){return c}),n.d(e,"b",function(){return u}),n.d(e,"a",function(){return l}),n.d(e,"m",function(){return s}),n.d(e,"h",function(){return d}),n.d(e,"i",function(){return f}),n.d(e,"j",function(){return p}),n.d(e,"n",function(){return m}),n.d(e,"l",function(){return h}),n.d(e,"e",function(){return b});var o="doneLoading",r="setLoading",a="setUpdating",i="doneUpdating",c="setError",u="clearError",l="addToPlaylist",s="setPlaylist",d="removeFromPlaylist",f="reorderPlaylistItem",p="setCurrentVideo",m="setRoomName",h="setPauseTime",b="getNextVideo"}});
//# sourceMappingURL=app.9ab1314e.js.map