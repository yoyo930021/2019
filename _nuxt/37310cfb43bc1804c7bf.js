(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{323:function(t,e,n){var content=n(332);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("77ea598c",content,!0,{sourceMap:!1})},324:function(t,e,n){var content=n(334);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("6e0cb133",content,!0,{sourceMap:!1})},325:function(t,e,n){var content=n(336);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("dcc9524a",content,!0,{sourceMap:!1})},326:function(t,e,n){"use strict";n(113);var r,o=n(44),c=(r=function(t,b){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])})(t,b)},function(t,b){function e(){this.constructor=t}r(t,b),t.prototype=null===b?Object.create(b):(e.prototype=b.prototype,new e)}),f=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return c(e,t),e}(o.Vue),l=(n(331),n(8)),component=Object(l.a)(f,function(){var t=this.$createElement;return(this._self._c||t)("section",{staticClass:"card"},[this._t("default")],2)},[],!1,null,"b006d4d6",null);e.a=component.exports},327:function(t,e,n){var r=n(12),o=n(46),c=n(24),f=n(328),l="["+f+"]",d=RegExp("^"+l+l+"*"),h=RegExp(l+l+"*$"),y=function(t,e,n){var o={},l=c(function(){return!!f[t]()||"​"!="​"[t]()}),d=o[t]=l?e(m):f[t];n&&(o[n]=d),r(r.P+r.F*l,"String",o)},m=y.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(d,"")),2&e&&(t=t.replace(h,"")),t};t.exports=y},328:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},329:function(t,e,n){"use strict";var r=n(11),o=n(39),c=n(47),f=n(167),l=n(92),d=n(24),h=n(66).f,y=n(93).f,m=n(20).f,v=n(327).trim,_=r.Number,x=_,w=_.prototype,O="Number"==c(n(114)(w)),j="trim"in String.prototype,C=function(t){var e=l(t,!1);if("string"==typeof e&&e.length>2){var n,r,o,c=(e=j?e.trim():v(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var code,f=e.slice(2),i=0,d=f.length;i<d;i++)if((code=f.charCodeAt(i))<48||code>o)return NaN;return parseInt(f,r)}}return+e};if(!_(" 0o1")||!_("0b1")||_("+0x1")){_=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof _&&(O?d(function(){w.valueOf.call(n)}):"Number"!=c(n))?f(new x(C(e)),n,_):C(e)};for(var k,N=n(18)?h(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),P=0;N.length>P;P++)o(x,k=N[P])&&!o(_,k)&&m(_,k,y(x,k));_.prototype=w,w.constructor=_,n(26)(r,"Number",_)}},330:function(t,e,n){"use strict";n(329),n(45),n(17),n(10);var r,o=n(25),c=(n(113),n(44)),f=(r=function(t,b){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])})(t,b)},function(t,b){function e(){this.constructor=t}r(t,b),t.prototype=null===b?Object.create(b):(e.prototype=b.prototype,new e)}),l=function(t,e,n,desc){var r,c=arguments.length,f=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(o.a)(Reflect))&&"function"==typeof Reflect.decorate)f=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(f=(c<3?r(f):c>3?r(e,n,f):r(e,n))||f);return c>3&&f&&Object.defineProperty(e,n,f),f},d=function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,i=n.call(t),c=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)c.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return c},h=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return f(e,t),Object.defineProperty(e.prototype,"cssRatio",{get:function(){var t=this.$props.ratio,e=d(t.split(":"),2),n=e[0],r=e[1];return 100*Number(void 0===r?1:r)/Number(n)+"%"},enumerable:!0,configurable:!0}),e=l([Object(c.Component)({inheritAttrs:!1,props:{ratio:{type:String,required:!0}}})],e)}(c.Vue),y=(n(333),n(8)),component=Object(y.a)(h,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ratio-box",style:{"--ratio":this.cssRatio}},[e("div",this._b({staticClass:"content"},"div",this.$attrs,!1),[this._t("default")],2)])},[],!1,null,"aea6bdd8",null);e.a=component.exports},331:function(t,e,n){"use strict";var r=n(323);n.n(r).a},332:function(t,e,n){(t.exports=n(22)(!1)).push([t.i,".card[data-v-b006d4d6]{background-color:hsla(0,0%,100%,.9);box-shadow:0 4px 48px rgba(0,0,0,.1);margin:0 1em 2em;padding:2em}",""])},333:function(t,e,n){"use strict";var r=n(324);n.n(r).a},334:function(t,e,n){(t.exports=n(22)(!1)).push([t.i,'.ratio-box[data-v-aea6bdd8]{width:100%;position:relative}.ratio-box[data-v-aea6bdd8]:before{content:"";display:block;padding-top:100%;padding-top:var(--ratio)}.ratio-box>.content[data-v-aea6bdd8]{position:absolute;top:0;left:0;bottom:0;right:0}',""])},335:function(t,e,n){"use strict";var r=n(325);n.n(r).a},336:function(t,e,n){(t.exports=n(22)(!1)).push([t.i,"section.sponsors[data-v-26179b6f]{display:grid;padding-top:2em;grid-template-columns:1fr;grid-gap:2em;font-size:.8em}.sponsors .level[data-v-26179b6f]{width:100%;grid-column:1/span 2;margin:0}section.sponsors div.sponsors[data-v-26179b6f]{display:grid;grid-template-columns:1fr 1fr 1fr}.sponsors .sponsor[data-v-26179b6f]{display:flex;flex-direction:column;align-items:center;padding:.5em}.sponsors .sponsor img[data-v-26179b6f]{max-height:100%;max-width:100%;margin:auto;position:absolute;top:0;left:0;bottom:0;right:0}.sponsors .sponsor:hover img[data-v-26179b6f]{-webkit-filter:opacity(.6);filter:opacity(.6)}@media (min-width:840px){section.sponsors[data-v-26179b6f]{grid-template-columns:1fr 1fr;font-size:1em}section.sponsors div.sponsors[data-v-26179b6f]{grid-template-columns:1fr 1fr 1fr 1fr 1fr}}",""])},337:function(t,e,n){"use strict";var r,o=n(25),c=(n(113),n(44)),f=n(65),l=n(67),d=n(326),h=n(330),y=(r=function(t,b){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])})(t,b)},function(t,b){function e(){this.constructor=t}r(t,b),t.prototype=null===b?Object.create(b):(e.prototype=b.prototype,new e)}),m=function(t,e,n,desc){var r,c=arguments.length,f=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(o.a)(Reflect))&&"function"==typeof Reflect.decorate)f=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(f=(c<3?r(f):c>3?r(e,n,f):r(e,n))||f);return c>3&&f&&Object.defineProperty(e,n,f),f},v=Object(f.namespace)(l.name,f.Getter),_=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return y(e,t),m([v("byLevel")],e.prototype,"sponsorsByLevel",void 0),e=m([Object(c.Component)({components:{Card:d.a,RatioBox:h.a}})],e)}(c.Vue),x=(n(335),n(8)),component=Object(x.a)(_,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"sponsors container"},t._l(t.sponsorsByLevel,function(e){return n("Card",{key:e.title,staticClass:"level"},[n("h1",[t._v(t._s(e.title))]),t._v(" "),n("div",{staticClass:"sponsors"},t._l(e.sponsors,function(e){return n("a",{key:e.name,staticClass:"sponsor",attrs:{href:e.link,title:e.name,target:"_blank"}},[n("RatioBox",{attrs:{ratio:"1:1"}},[n("img",{attrs:{src:e.image,alt:""}})]),t._v("\n        "+t._s(e.name)+"\n      ")],1)}),0)])}),1)},[],!1,null,"26179b6f",null);e.a=component.exports},343:function(t,e,n){var content=n(360);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("6164084b",content,!0,{sourceMap:!1})},359:function(t,e,n){"use strict";var r=n(343);n.n(r).a},360:function(t,e,n){(t.exports=n(22)(!1)).push([t.i,"main.staffs[data-v-180681af]{width:100%;display:flex;flex-direction:column;align-items:center;padding-top:2em}main.staffs ul[data-v-180681af]{display:flex;flex-wrap:wrap;padding:0}main.staffs li[data-v-180681af]{margin:1em 1em 0 0;position:relative;max-width:100px;max-height:100px;line-height:0}main.staffs li .name[data-v-180681af]{position:absolute;top:0;right:0;bottom:0;left:0;padding-bottom:.8em;display:flex;-webkit-filter:opacity(0);filter:opacity(0);opacity:0;color:#fff;background:hsla(0,0%,50.2%,.6);background:linear-gradient(180deg,transparent 0,rgba(0,0,0,.6));font-size:.8em;text-align:center;line-height:1em;justify-content:center;align-items:flex-end;transition:opacity .2s cubic-bezier(.4,0,.2,1),-webkit-filter .2s cubic-bezier(.4,0,.2,1);transition:filter .2s cubic-bezier(.4,0,.2,1),opacity .2s cubic-bezier(.4,0,.2,1);transition:filter .2s cubic-bezier(.4,0,.2,1),opacity .2s cubic-bezier(.4,0,.2,1),-webkit-filter .2s cubic-bezier(.4,0,.2,1)}main.staffs li:hover .name[data-v-180681af]{-webkit-filter:opacity(1);filter:opacity(1);opacity:1}main.staffs li img[data-v-180681af]{max-width:100%}",""])},375:function(t,e,n){"use strict";n.r(e);n(17),n(10),n(7);var r,o=n(25),c=(n(113),n(44)),f=n(65),l=n(118),d=n(326),h=n(337),y=(r=function(t,b){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])})(t,b)},function(t,b){function e(){this.constructor=t}r(t,b),t.prototype=null===b?Object.create(b):(e.prototype=b.prototype,new e)}),m=function(t,e,n,desc){var r,c=arguments.length,f=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(o.a)(Reflect))&&"function"==typeof Reflect.decorate)f=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(f=(c<3?r(f):c>3?r(e,n,f):r(e,n))||f);return c>3&&f&&Object.defineProperty(e,n,f),f},v=function(t,e,n,r){return new(n||(n=Promise))(function(o,c){function f(t){try{d(r.next(t))}catch(t){c(t)}}function l(t){try{d(r.throw(t))}catch(t){c(t)}}function d(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(f,l)}d((r=r.apply(t,e||[])).next())})},_=function(t,body){var e,n,r,g,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return g={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function c(c){return function(f){return function(c){if(e)throw new TypeError("Generator is already executing.");for(;o;)try{if(e=1,n&&(r=2&c[0]?n.return:c[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,c[1])).done)return r;switch(n=0,r&&(c=[2&c[0],r.value]),c[0]){case 0:case 1:r=c;break;case 4:return o.label++,{value:c[1],done:!1};case 5:o.label++,n=c[1],c=[0];continue;case 7:c=o.ops.pop(),o.trys.pop();continue;default:if(!(r=(r=o.trys).length>0&&r[r.length-1])&&(6===c[0]||2===c[0])){o=0;continue}if(3===c[0]&&(!r||c[1]>r[0]&&c[1]<r[3])){o.label=c[1];break}if(6===c[0]&&o.label<r[1]){o.label=r[1],r=c;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(c);break}r[2]&&o.ops.pop(),o.trys.pop();continue}c=body.call(t,o)}catch(t){c=[6,t],n=0}finally{e=r=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,f])}}},x=Object(f.namespace)(l.name,f.State),w=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return y(e,t),e.prototype.mounted=function(){this.$store.dispatch("clientsFirstFetch",this.$options.fetch)},Object.defineProperty(e.prototype,"title",{get:function(){return this.$t("pages.staffs")+" | COSCUP 2019 | Conference for Open Source Coders, Users, and Promoters"},enumerable:!0,configurable:!0}),e.prototype.head=function(){return{title:this.title,meta:[{hid:"og:description",property:"og:description",content:this.title},{hid:"og:title",property:"og:title",content:this.title},{hid:"og:type",property:"og:type",content:"article"},{hid:"og:url",property:"og:url",content:"https://coscup.org/2019"+this.$route.path}]}},e.prototype.fetch=function(t){var e=t.store.dispatch;return v(this,void 0,void 0,function(){return _(this,function(t){switch(t.label){case 0:return[4,e(l.name+"/fetchData")];case 1:return t.sent(),[2]}})})},m([x("teams")],e.prototype,"teams",void 0),e=m([Object(c.Component)({components:{Card:d.a,SponsorFooter:h.a}})],e)}(c.Vue),O=(n(359),n(8)),component=Object(O.a)(w,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"staffs"},[t._l(t.teams,function(e){return n("Card",{key:e.key,staticClass:"container"},[n("h1",[t._v(t._s(e.title))]),t._v(" "),n("ul",t._l(e.members,function(e){return n("li",{key:e.name,attrs:{title:e.name}},[n("img",{attrs:{src:e.image,alt:""}}),t._v(" "),n("div",{staticClass:"name"},[t._v(t._s(e.name))])])}),0)])}),t._v(" "),n("SponsorFooter")],2)},[],!1,null,"180681af",null);e.default=component.exports}}]);