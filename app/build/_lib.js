/*
 AngularJS v1.6.0
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(A){'use strict';function H(a,b){b=b||Error;return function(){var d=arguments[0],c;c="["+(a?a+":":"")+d+"] http://errors.angularjs.org/1.6.0/"+(a?a+"/":"")+d;for(d=1;d<arguments.length;d++){c=c+(1==d?"?":"&")+"p"+(d-1)+"=";var f=encodeURIComponent,e;e=arguments[d];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;c+=f(e)}return new b(c)}}function ta(a){if(null==a||Wa(a))return!1;if(G(a)||y(a)||F&&a instanceof
F)return!0;var b="length"in Object(a)&&a.length;return W(b)&&(0<=b&&(b-1 in a||a instanceof Array)||"function"===typeof a.item)}function q(a,b,d){var c,f;if(a)if(B(a))for(c in a)"prototype"!==c&&"length"!==c&&"name"!==c&&a.hasOwnProperty(c)&&b.call(d,a[c],c,a);else if(G(a)||ta(a)){var e="object"!==typeof a;c=0;for(f=a.length;c<f;c++)(e||c in a)&&b.call(d,a[c],c,a)}else if(a.forEach&&a.forEach!==q)a.forEach(b,d,a);else if(Cc(a))for(c in a)b.call(d,a[c],c,a);else if("function"===typeof a.hasOwnProperty)for(c in a)a.hasOwnProperty(c)&&
b.call(d,a[c],c,a);else for(c in a)va.call(a,c)&&b.call(d,a[c],c,a);return a}function Dc(a,b,d){for(var c=Object.keys(a).sort(),f=0;f<c.length;f++)b.call(d,a[c[f]],c[f]);return c}function Ec(a){return function(b,d){a(d,b)}}function he(){return++qb}function Rb(a,b,d){for(var c=a.$$hashKey,f=0,e=b.length;f<e;++f){var g=b[f];if(E(g)||B(g))for(var h=Object.keys(g),k=0,l=h.length;k<l;k++){var m=h[k],n=g[m];d&&E(n)?ea(n)?a[m]=new Date(n.valueOf()):Xa(n)?a[m]=new RegExp(n):n.nodeName?a[m]=n.cloneNode(!0):
Sb(n)?a[m]=n.clone():(E(a[m])||(a[m]=G(n)?[]:{}),Rb(a[m],[n],!0)):a[m]=n}}c?a.$$hashKey=c:delete a.$$hashKey;return a}function Q(a){return Rb(a,wa.call(arguments,1),!1)}function ie(a){return Rb(a,wa.call(arguments,1),!0)}function X(a){return parseInt(a,10)}function Tb(a,b){return Q(Object.create(a),b)}function v(){}function Ya(a){return a}function fa(a){return function(){return a}}function Ub(a){return B(a.toString)&&a.toString!==la}function x(a){return"undefined"===typeof a}function u(a){return"undefined"!==
typeof a}function E(a){return null!==a&&"object"===typeof a}function Cc(a){return null!==a&&"object"===typeof a&&!Fc(a)}function y(a){return"string"===typeof a}function W(a){return"number"===typeof a}function ea(a){return"[object Date]"===la.call(a)}function B(a){return"function"===typeof a}function Xa(a){return"[object RegExp]"===la.call(a)}function Wa(a){return a&&a.window===a}function Za(a){return a&&a.$evalAsync&&a.$watch}function Ia(a){return"boolean"===typeof a}function je(a){return a&&W(a.length)&&
ke.test(la.call(a))}function Sb(a){return!(!a||!(a.nodeName||a.prop&&a.attr&&a.find))}function le(a){var b={};a=a.split(",");var d;for(d=0;d<a.length;d++)b[a[d]]=!0;return b}function xa(a){return L(a.nodeName||a[0]&&a[0].nodeName)}function $a(a,b){var d=a.indexOf(b);0<=d&&a.splice(d,1);return d}function Fa(a,b){function d(a,b){var d=b.$$hashKey,e;if(G(a)){e=0;for(var f=a.length;e<f;e++)b.push(c(a[e]))}else if(Cc(a))for(e in a)b[e]=c(a[e]);else if(a&&"function"===typeof a.hasOwnProperty)for(e in a)a.hasOwnProperty(e)&&
(b[e]=c(a[e]));else for(e in a)va.call(a,e)&&(b[e]=c(a[e]));d?b.$$hashKey=d:delete b.$$hashKey;return b}function c(a){if(!E(a))return a;var b=e.indexOf(a);if(-1!==b)return g[b];if(Wa(a)||Za(a))throw Ga("cpws");var b=!1,c=f(a);void 0===c&&(c=G(a)?[]:Object.create(Fc(a)),b=!0);e.push(a);g.push(c);return b?d(a,c):c}function f(a){switch(la.call(a)){case "[object Int8Array]":case "[object Int16Array]":case "[object Int32Array]":case "[object Float32Array]":case "[object Float64Array]":case "[object Uint8Array]":case "[object Uint8ClampedArray]":case "[object Uint16Array]":case "[object Uint32Array]":return new a.constructor(c(a.buffer),
a.byteOffset,a.length);case "[object ArrayBuffer]":if(!a.slice){var b=new ArrayBuffer(a.byteLength);(new Uint8Array(b)).set(new Uint8Array(a));return b}return a.slice(0);case "[object Boolean]":case "[object Number]":case "[object String]":case "[object Date]":return new a.constructor(a.valueOf());case "[object RegExp]":return b=new RegExp(a.source,a.toString().match(/[^/]*$/)[0]),b.lastIndex=a.lastIndex,b;case "[object Blob]":return new a.constructor([a],{type:a.type})}if(B(a.cloneNode))return a.cloneNode(!0)}
var e=[],g=[];if(b){if(je(b)||"[object ArrayBuffer]"===la.call(b))throw Ga("cpta");if(a===b)throw Ga("cpi");G(b)?b.length=0:q(b,function(a,d){"$$hashKey"!==d&&delete b[d]});e.push(a);g.push(b);return d(a,b)}return c(a)}function ma(a,b){if(a===b)return!0;if(null===a||null===b)return!1;if(a!==a&&b!==b)return!0;var d=typeof a,c;if(d===typeof b&&"object"===d)if(G(a)){if(!G(b))return!1;if((d=a.length)===b.length){for(c=0;c<d;c++)if(!ma(a[c],b[c]))return!1;return!0}}else{if(ea(a))return ea(b)?ma(a.getTime(),
b.getTime()):!1;if(Xa(a))return Xa(b)?a.toString()===b.toString():!1;if(Za(a)||Za(b)||Wa(a)||Wa(b)||G(b)||ea(b)||Xa(b))return!1;d=T();for(c in a)if("$"!==c.charAt(0)&&!B(a[c])){if(!ma(a[c],b[c]))return!1;d[c]=!0}for(c in b)if(!(c in d)&&"$"!==c.charAt(0)&&u(b[c])&&!B(b[c]))return!1;return!0}return!1}function ab(a,b,d){return a.concat(wa.call(b,d))}function bb(a,b){var d=2<arguments.length?wa.call(arguments,2):[];return!B(b)||b instanceof RegExp?b:d.length?function(){return arguments.length?b.apply(a,
ab(d,arguments,0)):b.apply(a,d)}:function(){return arguments.length?b.apply(a,arguments):b.call(a)}}function Gc(a,b){var d=b;"string"===typeof a&&"$"===a.charAt(0)&&"$"===a.charAt(1)?d=void 0:Wa(b)?d="$WINDOW":b&&A.document===b?d="$DOCUMENT":Za(b)&&(d="$SCOPE");return d}function cb(a,b){if(!x(a))return W(b)||(b=b?2:null),JSON.stringify(a,Gc,b)}function Hc(a){return y(a)?JSON.parse(a):a}function Ic(a,b){a=a.replace(me,"");var d=Date.parse("Jan 01, 1970 00:00:00 "+a)/6E4;return ga(d)?b:d}function Vb(a,
b,d){d=d?-1:1;var c=a.getTimezoneOffset();b=Ic(b,c);d*=b-c;a=new Date(a.getTime());a.setMinutes(a.getMinutes()+d);return a}function ya(a){a=F(a).clone();try{a.empty()}catch(b){}var d=F("<div>").append(a).html();try{return a[0].nodeType===Ja?L(d):d.match(/^(<[^>]+>)/)[1].replace(/^<([\w-]+)/,function(a,b){return"<"+L(b)})}catch(c){return L(d)}}function Jc(a){try{return decodeURIComponent(a)}catch(b){}}function Kc(a){var b={};q((a||"").split("&"),function(a){var c,f,e;a&&(f=a=a.replace(/\+/g,"%20"),
c=a.indexOf("="),-1!==c&&(f=a.substring(0,c),e=a.substring(c+1)),f=Jc(f),u(f)&&(e=u(e)?Jc(e):!0,va.call(b,f)?G(b[f])?b[f].push(e):b[f]=[b[f],e]:b[f]=e))});return b}function Wb(a){var b=[];q(a,function(a,c){G(a)?q(a,function(a){b.push(ia(c,!0)+(!0===a?"":"="+ia(a,!0)))}):b.push(ia(c,!0)+(!0===a?"":"="+ia(a,!0)))});return b.length?b.join("&"):""}function db(a){return ia(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function ia(a,b){return encodeURIComponent(a).replace(/%40/gi,
"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,b?"%20":"+")}function ne(a,b){var d,c,f=Ka.length;for(c=0;c<f;++c)if(d=Ka[c]+b,y(d=a.getAttribute(d)))return d;return null}function oe(a,b){var d,c,f={};q(Ka,function(b){b+="app";!d&&a.hasAttribute&&a.hasAttribute(b)&&(d=a,c=a.getAttribute(b))});q(Ka,function(b){b+="app";var f;!d&&(f=a.querySelector("["+b.replace(":","\\:")+"]"))&&(d=f,c=f.getAttribute(b))});d&&(pe?(f.strictDi=null!==ne(d,"strict-di"),
b(d,c?[c]:[],f)):A.console.error("Angular: disabling automatic bootstrap. <script> protocol indicates an extension, document.location.href does not match."))}function Lc(a,b,d){E(d)||(d={});d=Q({strictDi:!1},d);var c=function(){a=F(a);if(a.injector()){var c=a[0]===A.document?"document":ya(a);throw Ga("btstrpd",c.replace(/</,"&lt;").replace(/>/,"&gt;"));}b=b||[];b.unshift(["$provide",function(b){b.value("$rootElement",a)}]);d.debugInfoEnabled&&b.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);
b.unshift("ng");c=eb(b,d.strictDi);c.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},f=/^NG_ENABLE_DEBUG_INFO!/,e=/^NG_DEFER_BOOTSTRAP!/;A&&f.test(A.name)&&(d.debugInfoEnabled=!0,A.name=A.name.replace(f,""));if(A&&!e.test(A.name))return c();A.name=A.name.replace(e,"");Z.resumeBootstrap=function(a){q(a,function(a){b.push(a)});return c()};B(Z.resumeDeferredBootstrap)&&Z.resumeDeferredBootstrap()}function qe(){A.name=
"NG_ENABLE_DEBUG_INFO!"+A.name;A.location.reload()}function re(a){a=Z.element(a).injector();if(!a)throw Ga("test");return a.get("$$testability")}function Mc(a,b){b=b||"_";return a.replace(se,function(a,c){return(c?b:"")+a.toLowerCase()})}function te(){var a;if(!Nc){var b=rb();(na=x(b)?A.jQuery:b?A[b]:void 0)&&na.fn.on?(F=na,Q(na.fn,{scope:Na.scope,isolateScope:Na.isolateScope,controller:Na.controller,injector:Na.injector,inheritedData:Na.inheritedData}),a=na.cleanData,na.cleanData=function(b){for(var c,
f=0,e;null!=(e=b[f]);f++)(c=na._data(e,"events"))&&c.$destroy&&na(e).triggerHandler("$destroy");a(b)}):F=U;Z.element=F;Nc=!0}}function fb(a,b,d){if(!a)throw Ga("areq",b||"?",d||"required");return a}function sb(a,b,d){d&&G(a)&&(a=a[a.length-1]);fb(B(a),b,"not a function, got "+(a&&"object"===typeof a?a.constructor.name||"Object":typeof a));return a}function Oa(a,b){if("hasOwnProperty"===a)throw Ga("badname",b);}function Oc(a,b,d){if(!b)return a;b=b.split(".");for(var c,f=a,e=b.length,g=0;g<e;g++)c=
b[g],a&&(a=(f=a)[c]);return!d&&B(a)?bb(f,a):a}function tb(a){for(var b=a[0],d=a[a.length-1],c,f=1;b!==d&&(b=b.nextSibling);f++)if(c||a[f]!==b)c||(c=F(wa.call(a,0,f))),c.push(b);return c||a}function T(){return Object.create(null)}function Xb(a){if(null==a)return"";switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=!Ub(a)||G(a)||ea(a)?cb(a):a.toString()}return a}function ue(a){function b(a,b,c){return a[b]||(a[b]=c())}var d=H("$injector"),c=H("ng");a=b(a,"angular",Object);a.$$minErr=
a.$$minErr||H;return b(a,"module",function(){var a={};return function(e,g,h){if("hasOwnProperty"===e)throw c("badname","module");g&&a.hasOwnProperty(e)&&(a[e]=null);return b(a,e,function(){function a(b,d,e,f){f||(f=c);return function(){f[e||"push"]([b,d,arguments]);return C}}function b(a,d,f){f||(f=c);return function(b,c){c&&B(c)&&(c.$$moduleName=e);f.push([a,d,arguments]);return C}}if(!g)throw d("nomod",e);var c=[],f=[],p=[],t=a("$injector","invoke","push",f),C={_invokeQueue:c,_configBlocks:f,_runBlocks:p,
requires:g,name:e,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),decorator:b("$provide","decorator",f),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),component:b("$compileProvider","component"),config:t,run:function(a){p.push(a);return this}};h&&t(h);return C})}})}
function ja(a,b){if(G(a)){b=b||[];for(var d=0,c=a.length;d<c;d++)b[d]=a[d]}else if(E(a))for(d in b=b||{},a)if("$"!==d.charAt(0)||"$"!==d.charAt(1))b[d]=a[d];return b||a}function ve(a){var b=[];return JSON.stringify(a,function(a,c){c=Gc(a,c);if(E(c)){if(0<=b.indexOf(c))return"...";b.push(c)}return c})}function we(a){Q(a,{bootstrap:Lc,copy:Fa,extend:Q,merge:ie,equals:ma,element:F,forEach:q,injector:eb,noop:v,bind:bb,toJson:cb,fromJson:Hc,identity:Ya,isUndefined:x,isDefined:u,isString:y,isFunction:B,
isObject:E,isNumber:W,isElement:Sb,isArray:G,version:xe,isDate:ea,lowercase:L,uppercase:ub,callbacks:{$$counter:0},getTestability:re,reloadWithDebugInfo:qe,$$minErr:H,$$csp:za,$$encodeUriSegment:db,$$encodeUriQuery:ia,$$stringify:Xb});Yb=ue(A);Yb("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:ye});a.provider("$compile",Pc).directive({a:ze,input:Qc,textarea:Qc,form:Ae,script:Be,select:Ce,option:De,ngBind:Ee,ngBindHtml:Fe,ngBindTemplate:Ge,ngClass:He,ngClassEven:Ie,ngClassOdd:Je,
ngCloak:Ke,ngController:Le,ngForm:Me,ngHide:Ne,ngIf:Oe,ngInclude:Pe,ngInit:Qe,ngNonBindable:Re,ngPluralize:Se,ngRepeat:Te,ngShow:Ue,ngStyle:Ve,ngSwitch:We,ngSwitchWhen:Xe,ngSwitchDefault:Ye,ngOptions:Ze,ngTransclude:$e,ngModel:af,ngList:bf,ngChange:cf,pattern:Rc,ngPattern:Rc,required:Sc,ngRequired:Sc,minlength:Tc,ngMinlength:Tc,maxlength:Uc,ngMaxlength:Uc,ngValue:df,ngModelOptions:ef}).directive({ngInclude:ff}).directive(vb).directive(Vc);a.provider({$anchorScroll:gf,$animate:hf,$animateCss:jf,$$animateJs:kf,
$$animateQueue:lf,$$AnimateRunner:mf,$$animateAsyncRun:nf,$browser:of,$cacheFactory:pf,$controller:qf,$document:rf,$$isDocumentHidden:sf,$exceptionHandler:tf,$filter:Wc,$$forceReflow:uf,$interpolate:vf,$interval:wf,$http:xf,$httpParamSerializer:yf,$httpParamSerializerJQLike:zf,$httpBackend:Af,$xhrFactory:Bf,$jsonpCallbacks:Cf,$location:Df,$log:Ef,$parse:Ff,$rootScope:Gf,$q:Hf,$$q:If,$sce:Jf,$sceDelegate:Kf,$sniffer:Lf,$templateCache:Mf,$templateRequest:Nf,$$testability:Of,$timeout:Pf,$window:Qf,$$rAF:Rf,
$$jqLite:Sf,$$HashMap:Tf,$$cookieReader:Uf})}])}function gb(a,b){return b.toUpperCase()}function wb(a){return a.replace(Vf,gb)}function Xc(a){a=a.nodeType;return 1===a||!a||9===a}function Yc(a,b){var d,c,f=b.createDocumentFragment(),e=[];if(Zb.test(a)){d=f.appendChild(b.createElement("div"));c=(Wf.exec(a)||["",""])[1].toLowerCase();c=oa[c]||oa._default;d.innerHTML=c[1]+a.replace(Xf,"<$1></$2>")+c[2];for(c=c[0];c--;)d=d.lastChild;e=ab(e,d.childNodes);d=f.firstChild;d.textContent=""}else e.push(b.createTextNode(a));
f.textContent="";f.innerHTML="";q(e,function(a){f.appendChild(a)});return f}function U(a){if(a instanceof U)return a;var b;y(a)&&(a=R(a),b=!0);if(!(this instanceof U)){if(b&&"<"!==a.charAt(0))throw $b("nosel");return new U(a)}if(b){b=A.document;var d;a=(d=Yf.exec(a))?[b.createElement(d[1])]:(d=Yc(a,b))?d.childNodes:[];ac(this,a)}else B(a)?Zc(a):ac(this,a)}function bc(a){return a.cloneNode(!0)}function xb(a,b){b||hb(a);if(a.querySelectorAll)for(var d=a.querySelectorAll("*"),c=0,f=d.length;c<f;c++)hb(d[c])}
function $c(a,b,d,c){if(u(c))throw $b("offargs");var f=(c=yb(a))&&c.events,e=c&&c.handle;if(e)if(b){var g=function(b){var c=f[b];u(d)&&$a(c||[],d);u(d)&&c&&0<c.length||(a.removeEventListener(b,e),delete f[b])};q(b.split(" "),function(a){g(a);zb[a]&&g(zb[a])})}else for(b in f)"$destroy"!==b&&a.removeEventListener(b,e),delete f[b]}function hb(a,b){var d=a.ng339,c=d&&ib[d];c&&(b?delete c.data[b]:(c.handle&&(c.events.$destroy&&c.handle({},"$destroy"),$c(a)),delete ib[d],a.ng339=void 0))}function yb(a,
b){var d=a.ng339,d=d&&ib[d];b&&!d&&(a.ng339=d=++Zf,d=ib[d]={events:{},data:{},handle:void 0});return d}function cc(a,b,d){if(Xc(a)){var c,f=u(d),e=!f&&b&&!E(b),g=!b;a=(a=yb(a,!e))&&a.data;if(f)a[wb(b)]=d;else{if(g)return a;if(e)return a&&a[wb(b)];for(c in b)a[wb(c)]=b[c]}}}function Ab(a,b){return a.getAttribute?-1<(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+b+" "):!1}function Bb(a,b){b&&a.setAttribute&&q(b.split(" "),function(b){a.setAttribute("class",R((" "+(a.getAttribute("class")||
"")+" ").replace(/[\n\t]/g," ").replace(" "+R(b)+" "," ")))})}function Cb(a,b){if(b&&a.setAttribute){var d=(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");q(b.split(" "),function(a){a=R(a);-1===d.indexOf(" "+a+" ")&&(d+=a+" ")});a.setAttribute("class",R(d))}}function ac(a,b){if(b)if(b.nodeType)a[a.length++]=b;else{var d=b.length;if("number"===typeof d&&b.window!==b){if(d)for(var c=0;c<d;c++)a[a.length++]=b[c]}else a[a.length++]=b}}function ad(a,b){return Db(a,"$"+(b||"ngController")+
"Controller")}function Db(a,b,d){9===a.nodeType&&(a=a.documentElement);for(b=G(b)?b:[b];a;){for(var c=0,f=b.length;c<f;c++)if(u(d=F.data(a,b[c])))return d;a=a.parentNode||11===a.nodeType&&a.host}}function bd(a){for(xb(a,!0);a.firstChild;)a.removeChild(a.firstChild)}function Eb(a,b){b||xb(a);var d=a.parentNode;d&&d.removeChild(a)}function $f(a,b){b=b||A;if("complete"===b.document.readyState)b.setTimeout(a);else F(b).on("load",a)}function Zc(a){function b(){A.document.removeEventListener("DOMContentLoaded",
b);A.removeEventListener("load",b);a()}"complete"===A.document.readyState?A.setTimeout(a):(A.document.addEventListener("DOMContentLoaded",b),A.addEventListener("load",b))}function cd(a,b){var d=Fb[b.toLowerCase()];return d&&dd[xa(a)]&&d}function ag(a,b){var d=function(c,d){c.isDefaultPrevented=function(){return c.defaultPrevented};var e=b[d||c.type],g=e?e.length:0;if(g){if(x(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=
!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};var k=e.specialHandlerWrapper||bg;1<g&&(e=ja(e));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||k(a,c,e[l])}};d.elem=a;return d}function bg(a,b,d){d.call(a,b)}function cg(a,b,d){var c=b.relatedTarget;c&&(c===a||dg.call(a,c))||d.call(a,b)}function Sf(){this.$get=function(){return Q(U,{hasClass:function(a,b){a.attr&&(a=a[0]);return Ab(a,b)},addClass:function(a,
b){a.attr&&(a=a[0]);return Cb(a,b)},removeClass:function(a,b){a.attr&&(a=a[0]);return Bb(a,b)}})}}function ka(a,b){var d=a&&a.$$hashKey;if(d)return"function"===typeof d&&(d=a.$$hashKey()),d;d=typeof a;return d="function"===d||"object"===d&&null!==a?a.$$hashKey=d+":"+(b||he)():d+":"+a}function Pa(a,b){if(b){var d=0;this.nextUid=function(){return++d}}q(a,this.put,this)}function ed(a){a=(Function.prototype.toString.call(a)+" ").replace(eg,"");return a.match(fg)||a.match(gg)}function hg(a){return(a=ed(a))?
"function("+(a[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function eb(a,b){function d(a){return function(b,c){if(E(b))q(b,Ec(a));else return a(b,c)}}function c(a,b){Oa(a,"service");if(B(b)||G(b))b=p.instantiate(b);if(!b.$get)throw ca("pget",a);return n[a+"Provider"]=b}function f(a,b){return function(){var c=J.invoke(b,this);if(x(c))throw ca("undef",a);return c}}function e(a,b,d){return c(a,{$get:!1!==d?f(a,b):b})}function g(a){fb(x(a)||G(a),"modulesToLoad","not an array");var b=[],c;q(a,function(a){function d(a){var b,
c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=p.get(e[0]);f[e[1]].apply(f,e[2])}}if(!m.get(a)){m.put(a,!0);try{y(a)?(c=Yb(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):B(a)?b.push(p.invoke(a)):G(a)?b.push(p.invoke(a)):sb(a,"module")}catch(e){throw G(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1===e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),ca("modulerr",a,e.stack||e.message||e);}}});return b}function h(a,c){function d(b,e){if(a.hasOwnProperty(b)){if(a[b]===
k)throw ca("cdep",b+" <- "+l.join(" <- "));return a[b]}try{return l.unshift(b),a[b]=k,a[b]=c(b,e),a[b]}catch(f){throw a[b]===k&&delete a[b],f;}finally{l.shift()}}function e(a,c,f){var g=[];a=eb.$$annotate(a,b,f);for(var h=0,k=a.length;h<k;h++){var l=a[h];if("string"!==typeof l)throw ca("itkn",l);g.push(c&&c.hasOwnProperty(l)?c[l]:d(l,f))}return g}return{invoke:function(a,b,c,d){"string"===typeof c&&(d=c,c=null);c=e(a,c,d);G(a)&&(a=a[a.length-1]);d=a;if(La||"function"!==typeof d)d=!1;else{var f=d.$$ngIsClass;
Ia(f)||(f=d.$$ngIsClass=/^(?:class\b|constructor\()/.test(Function.prototype.toString.call(d)+" "));d=f}return d?(c.unshift(null),new (Function.prototype.bind.apply(a,c))):a.apply(b,c)},instantiate:function(a,b,c){var d=G(a)?a[a.length-1]:a;a=e(a,b,c);a.unshift(null);return new (Function.prototype.bind.apply(d,a))},get:d,annotate:eb.$$annotate,has:function(b){return n.hasOwnProperty(b+"Provider")||a.hasOwnProperty(b)}}}b=!0===b;var k={},l=[],m=new Pa([],!0),n={$provide:{provider:d(c),factory:d(e),
service:d(function(a,b){return e(a,["$injector",function(a){return a.instantiate(b)}])}),value:d(function(a,b){return e(a,fa(b),!1)}),constant:d(function(a,b){Oa(a,"constant");n[a]=b;t[a]=b}),decorator:function(a,b){var c=p.get(a+"Provider"),d=c.$get;c.$get=function(){var a=J.invoke(d,c);return J.invoke(b,null,{$delegate:a})}}}},p=n.$injector=h(n,function(a,b){Z.isString(b)&&l.push(b);throw ca("unpr",l.join(" <- "));}),t={},C=h(t,function(a,b){var c=p.get(a+"Provider",b);return J.invoke(c.$get,c,
void 0,a)}),J=C;n.$injectorProvider={$get:fa(C)};var s=g(a),J=C.get("$injector");J.strictDi=b;q(s,function(a){a&&J.invoke(a)});return J}function gf(){var a=!0;this.disableAutoScrolling=function(){a=!1};this.$get=["$window","$location","$rootScope",function(b,d,c){function f(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===xa(a))return b=a,!0});return b}function e(a){if(a){a.scrollIntoView();var c;c=g.yOffset;B(c)?c=c():Sb(c)?(c=c[0],c="fixed"!==b.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):
W(c)||(c=0);c&&(a=a.getBoundingClientRect().top,b.scrollBy(0,a-c))}else b.scrollTo(0,0)}function g(a){a=y(a)?a:W(a)?a.toString():d.hash();var b;a?(b=h.getElementById(a))?e(b):(b=f(h.getElementsByName(a)))?e(b):"top"===a&&e(null):e(null)}var h=b.document;a&&c.$watch(function(){return d.hash()},function(a,b){a===b&&""===a||$f(function(){c.$evalAsync(g)})});return g}]}function jb(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;G(a)&&(a=a.join(" "));G(b)&&(b=b.join(" "));return a+" "+b}function ig(a){y(a)&&
(a=a.split(" "));var b=T();q(a,function(a){a.length&&(b[a]=!0)});return b}function Aa(a){return E(a)?a:{}}function jg(a,b,d,c){function f(a){try{a.apply(null,wa.call(arguments,1))}finally{if(C--,0===C)for(;J.length;)try{J.pop()()}catch(b){d.error(b)}}}function e(){r=null;g();h()}function g(){s=D();s=x(s)?null:s;ma(s,O)&&(s=O);O=s}function h(){if(w!==k.url()||M!==s)w=k.url(),M=s,q(K,function(a){a(k.url(),s)})}var k=this,l=a.location,m=a.history,n=a.setTimeout,p=a.clearTimeout,t={};k.isMock=!1;var C=
0,J=[];k.$$completeOutstandingRequest=f;k.$$incOutstandingRequestCount=function(){C++};k.notifyWhenNoOutstandingRequests=function(a){0===C?a():J.push(a)};var s,M,w=l.href,N=b.find("base"),r=null,D=c.history?function(){try{return m.state}catch(a){}}:v;g();M=s;k.url=function(b,d,e){x(e)&&(e=null);l!==a.location&&(l=a.location);m!==a.history&&(m=a.history);if(b){var f=M===e;if(w===b&&(!c.history||f))return k;var h=w&&Ba(w)===Ba(b);w=b;M=e;!c.history||h&&f?(h||(r=b),d?l.replace(b):h?(d=l,e=b.indexOf("#"),
e=-1===e?"":b.substr(e),d.hash=e):l.href=b,l.href!==b&&(r=b)):(m[d?"replaceState":"pushState"](e,"",b),g(),M=s);r&&(r=b);return k}return r||l.href.replace(/%27/g,"'")};k.state=function(){return s};var K=[],pa=!1,O=null;k.onUrlChange=function(b){if(!pa){if(c.history)F(a).on("popstate",e);F(a).on("hashchange",e);pa=!0}K.push(b);return b};k.$$applicationDestroyed=function(){F(a).off("hashchange popstate",e)};k.$$checkUrlChange=h;k.baseHref=function(){var a=N.attr("href");return a?a.replace(/^(https?:)?\/\/[^/]*/,
""):""};k.defer=function(a,b){var c;C++;c=n(function(){delete t[c];f(a)},b||0);t[c]=!0;return c};k.defer.cancel=function(a){return t[a]?(delete t[a],p(a),f(v),!0):!1}}function of(){this.$get=["$window","$log","$sniffer","$document",function(a,b,d,c){return new jg(a,c,b,d)}]}function pf(){this.$get=function(){function a(a,c){function f(a){a!==n&&(p?p===a&&(p=a.n):p=a,e(a.n,a.p),e(a,n),n=a,n.n=null)}function e(a,b){a!==b&&(a&&(a.p=b),b&&(b.n=a))}if(a in b)throw H("$cacheFactory")("iid",a);var g=0,h=
Q({},c,{id:a}),k=T(),l=c&&c.capacity||Number.MAX_VALUE,m=T(),n=null,p=null;return b[a]={put:function(a,b){if(!x(b)){if(l<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});f(c)}a in k||g++;k[a]=b;g>l&&this.remove(p.key);return b}},get:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;f(b)}return k[a]},remove:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;b===n&&(n=b.p);b===p&&(p=b.n);e(b.n,b.p);delete m[a]}a in k&&(delete k[a],g--)},removeAll:function(){k=T();g=0;m=T();n=p=null},destroy:function(){m=
h=k=null;delete b[a]},info:function(){return Q({},h,{size:g})}}}var b={};a.info=function(){var a={};q(b,function(b,f){a[f]=b.info()});return a};a.get=function(a){return b[a]};return a}}function Mf(){this.$get=["$cacheFactory",function(a){return a("templates")}]}function Pc(a,b){function d(a,b,c){var d=/^\s*([@&<]|=(\*?))(\??)\s*(\w*)\s*$/,e=T();q(a,function(a,f){if(a in n)e[f]=n[a];else{var g=a.match(d);if(!g)throw da("iscp",b,f,a,c?"controller bindings definition":"isolate scope definition");e[f]=
{mode:g[1][0],collection:"*"===g[2],optional:"?"===g[3],attrName:g[4]||f};g[4]&&(n[a]=e[f])}});return e}function c(a){var b=a.charAt(0);if(!b||b!==L(b))throw da("baddir",a);if(a!==a.trim())throw da("baddir",a);}function f(a){var b=a.require||a.controller&&a.name;!G(b)&&E(b)&&q(b,function(a,c){var d=a.match(l);a.substring(d[0].length)||(b[c]=d[0]+c)});return b}var e={},g=/^\s*directive:\s*([\w-]+)\s+(.*)$/,h=/(([\w-]+)(?::([^;]+))?;?)/,k=le("ngSrc,ngSrcset,src,srcset"),l=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
m=/^(on[a-z]+|formaction)$/,n=T();this.directive=function w(b,d){fb(b,"name");Oa(b,"directive");y(b)?(c(b),fb(d,"directiveFactory"),e.hasOwnProperty(b)||(e[b]=[],a.factory(b+"Directive",["$injector","$exceptionHandler",function(a,c){var d=[];q(e[b],function(e,g){try{var h=a.invoke(e);B(h)?h={compile:fa(h)}:!h.compile&&h.link&&(h.compile=fa(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||b;h.require=f(h);var k=h,l=h.restrict;if(l&&(!y(l)||!/[EACM]/.test(l)))throw da("badrestrict",l,b);k.restrict=
l||"EA";h.$$moduleName=e.$$moduleName;d.push(h)}catch(m){c(m)}});return d}])),e[b].push(d)):q(b,Ec(w));return this};this.component=function(a,b){function c(a){function e(b){return B(b)||G(b)?function(c,d){return a.invoke(b,this,{$element:c,$attrs:d})}:b}var f=b.template||b.templateUrl?b.template:"",g={controller:d,controllerAs:kg(b.controller)||b.controllerAs||"$ctrl",template:e(f),templateUrl:e(b.templateUrl),transclude:b.transclude,scope:{},bindToController:b.bindings||{},restrict:"E",require:b.require};
q(b,function(a,b){"$"===b.charAt(0)&&(g[b]=a)});return g}var d=b.controller||function(){};q(b,function(a,b){"$"===b.charAt(0)&&(c[b]=a,B(d)&&(d[b]=a))});c.$inject=["$injector"];return this.directive(a,c)};this.aHrefSanitizationWhitelist=function(a){return u(a)?(b.aHrefSanitizationWhitelist(a),this):b.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(a){return u(a)?(b.imgSrcSanitizationWhitelist(a),this):b.imgSrcSanitizationWhitelist()};var p=!0;this.debugInfoEnabled=function(a){return u(a)?
(p=a,this):p};var t=!1;this.preAssignBindingsEnabled=function(a){return u(a)?(t=a,this):t};var C=10;this.onChangesTtl=function(a){return arguments.length?(C=a,this):C};var J=!0;this.commentDirectivesEnabled=function(a){return arguments.length?(J=a,this):J};var s=!0;this.cssClassDirectivesEnabled=function(a){return arguments.length?(s=a,this):s};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$sce","$animate","$$sanitizeUri",function(a,
b,c,f,n,pa,O,z,P,I){function V(){try{if(!--za)throw ca=void 0,da("infchng",C);O.$apply(function(){for(var a=[],b=0,c=ca.length;b<c;++b)try{ca[b]()}catch(d){a.push(d)}ca=void 0;if(a.length)throw a;})}finally{za++}}function r(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a}function Y(a,b,c){ua.innerHTML="<span "+b+">";b=ua.firstChild.attributes;var d=b[0];b.removeNamedItem(d.name);d.value=c;a.attributes.setNamedItem(d)}function ra(a,
b){try{a.addClass(b)}catch(c){}}function aa(a,b,c,d,e){a instanceof F||(a=F(a));var f=Ma(a,b,a,c,d,e);aa.$$addScopeClass(a);var g=null;return function(b,c,d){if(!a)throw da("multilink");fb(b,"scope");e&&e.needsNewScope&&(b=b.$parent.$new());d=d||{};var h=d.parentBoundTranscludeFn,k=d.transcludeControllers;d=d.futureParentElement;h&&h.$$boundTransclude&&(h=h.$$boundTransclude);g||(g=(d=d&&d[0])?"foreignobject"!==xa(d)&&la.call(d).match(/SVG/)?"svg":"html":"html");d="html"!==g?F(fa(g,F("<div>").append(a).html())):
c?Na.clone.call(a):a;if(k)for(var l in k)d.data("$"+l+"Controller",k[l].instance);aa.$$addScopeInfo(d,b);c&&c(d,b);f&&f(b,d,d,h);c||(a=f=null);return d}}function Ma(a,b,c,d,e,f){function g(a,c,d,e){var f,k,l,m,p,n,t;if(K)for(t=Array(c.length),m=0;m<h.length;m+=3)f=h[m],t[f]=c[f];else t=c;m=0;for(p=h.length;m<p;)k=t[h[m++]],c=h[m++],f=h[m++],c?(c.scope?(l=a.$new(),aa.$$addScopeInfo(F(k),l)):l=a,n=c.transcludeOnThisElement?ha(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?ha(a,b):null,c(f,l,
k,d,n)):f&&f(a,k.childNodes,void 0,e)}for(var h=[],k=G(a)||a instanceof F,l,m,p,n,K,t=0;t<a.length;t++){l=new r;11===La&&Gb(a,t,k);m=dc(a[t],[],l,0===t?d:void 0,e);(f=m.length?U(m,a[t],l,b,c,null,[],[],f):null)&&f.scope&&aa.$$addScopeClass(l.$$element);l=f&&f.terminal||!(p=a[t].childNodes)||!p.length?null:Ma(p,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||l)h.push(t,f,l),n=!0,K=K||f;f=null}return n?g:null}function Gb(a,b,c){var d=a[b],e=d.parentNode,f;if(d.nodeType===
Ja)for(;;){f=e?d.nextSibling:a[b+1];if(!f||f.nodeType!==Ja)break;d.nodeValue+=f.nodeValue;f.parentNode&&f.parentNode.removeChild(f);c&&f===a[b+1]&&a.splice(b+1,1)}}function ha(a,b,c){function d(e,f,g,h,k){e||(e=a.$new(!1,k),e.$$transcluded=!0);return b(e,f,{parentBoundTranscludeFn:c,transcludeControllers:g,futureParentElement:h})}var e=d.$$slots=T(),f;for(f in b.$$slots)e[f]=b.$$slots[f]?ha(a,b.$$slots[f],c):null;return d}function dc(a,b,c,d,e){var f=c.$attr,g;switch(a.nodeType){case 1:g=xa(a);W(b,
Ca(g),"E",d,e);for(var k,l,m,p,n=a.attributes,K=0,t=n&&n.length;K<t;K++){var D=!1,s=!1;k=n[K];l=k.name;m=k.value;k=Ca(l);(p=Ha.test(k))&&(l=l.replace(fd,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()}));(k=k.match(Ka))&&X(k[1])&&(D=l,s=l.substr(0,l.length-5)+"end",l=l.substr(0,l.length-6));k=Ca(l.toLowerCase());f[k]=l;if(p||!c.hasOwnProperty(k))c[k]=m,cd(a,k)&&(c[k]=!0);qa(a,b,m,k,p);W(b,k,"A",d,e,D,s)}"input"===g&&"hidden"===a.getAttribute("type")&&a.setAttribute("autocomplete",
"off");if(!Ga)break;f=a.className;E(f)&&(f=f.animVal);if(y(f)&&""!==f)for(;a=h.exec(f);)k=Ca(a[2]),W(b,k,"C",d,e)&&(c[k]=R(a[3])),f=f.substr(a.index+a[0].length);break;case Ja:ja(b,a.nodeValue);break;case 8:if(!Fa)break;H(a,b,c,d,e)}b.sort(ia);return b}function H(a,b,c,d,e){try{var f=g.exec(a.nodeValue);if(f){var h=Ca(f[1]);W(b,h,"M",d,e)&&(c[h]=R(f[2]))}}catch(k){}}function gd(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw da("uterdir",b,c);1===a.nodeType&&(a.hasAttribute(b)&&
e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return F(d)}function hd(a,b,c){return function(d,e,f,g,h){e=gd(e[0],b,c);return a(d,e,f,g,h)}}function fc(a,b,c,d,e,f){var g;return a?aa(b,c,d,e,f):function(){g||(g=aa(b,c,d,e,f),b=c=f=null);return g.apply(this,arguments)}}function U(a,b,d,e,f,g,h,k,l){function m(a,b,c,d){if(a){c&&(a=hd(a,c,d));a.require=z.require;a.directiveName=J;if(s===z||z.$$isolateScope)a=sa(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=hd(b,c,d));b.require=
z.require;b.directiveName=J;if(s===z||z.$$isolateScope)b=sa(b,{isolateScope:!0});k.push(b)}}function p(a,e,f,g,l){function m(a,b,c,d){var e;Za(a)||(d=c,c=b,b=a,a=void 0);pa&&(e=I);c||(c=pa?J.parent():J);if(d){var f=l.$$slots[d];if(f)return f(a,b,e,c,u);if(x(f))throw da("noslot",d,ya(J));}else return l(a,b,e,c,u)}var n,z,C,w,P,I,Qa,J;b===f?(g=d,J=d.$$element):(J=F(f),g=new r(J,d));P=e;s?w=e.$new(!0):K&&(P=e.$parent);l&&(Qa=m,Qa.$$boundTransclude=l,Qa.isSlotFilled=function(a){return!!l.$$slots[a]});
D&&(I=ba(J,g,Qa,D,w,e,s));s&&(aa.$$addScopeInfo(J,w,!0,!(O&&(O===s||O===s.$$originalDirective))),aa.$$addScopeClass(J,!0),w.$$isolateBindings=s.$$isolateBindings,z=na(e,g,w,w.$$isolateBindings,s),z.removeWatches&&w.$on("$destroy",z.removeWatches));for(n in I){z=D[n];C=I[n];var V=z.$$bindings.bindToController;if(t){C.bindingInfo=V?na(P,g,C.instance,V,z):{};var N=C();N!==C.instance&&(C.instance=N,J.data("$"+z.name+"Controller",N),C.bindingInfo.removeWatches&&C.bindingInfo.removeWatches(),C.bindingInfo=
na(P,g,C.instance,V,z))}else C.instance=C(),J.data("$"+z.name+"Controller",C.instance),C.bindingInfo=na(P,g,C.instance,V,z)}q(D,function(a,b){var c=a.require;a.bindToController&&!G(c)&&E(c)&&Q(I[b].instance,S(b,c,J,I))});q(I,function(a){var b=a.instance;if(B(b.$onChanges))try{b.$onChanges(a.bindingInfo.initialChanges)}catch(d){c(d)}if(B(b.$onInit))try{b.$onInit()}catch(e){c(e)}B(b.$doCheck)&&(P.$watch(function(){b.$doCheck()}),b.$doCheck());B(b.$onDestroy)&&P.$on("$destroy",function(){b.$onDestroy()})});
n=0;for(z=h.length;n<z;n++)C=h[n],ta(C,C.isolateScope?w:e,J,g,C.require&&S(C.directiveName,C.require,J,I),Qa);var u=e;s&&(s.template||null===s.templateUrl)&&(u=w);a&&a(u,f.childNodes,void 0,l);for(n=k.length-1;0<=n;n--)C=k[n],ta(C,C.isolateScope?w:e,J,g,C.require&&S(C.directiveName,C.require,J,I),Qa);q(I,function(a){a=a.instance;B(a.$postLink)&&a.$postLink()})}l=l||{};for(var n=-Number.MAX_VALUE,K=l.newScopeDirective,D=l.controllerDirectives,s=l.newIsolateScopeDirective,O=l.templateDirective,C=l.nonTlbTranscludeDirective,
w=!1,P=!1,pa=l.hasElementTranscludeDirective,I=d.$$element=F(b),z,J,V,N=e,u,ra=!1,Y=!1,v,A=0,y=a.length;A<y;A++){z=a[A];var Ma=z.$$start,H=z.$$end;Ma&&(I=gd(b,Ma,H));V=void 0;if(n>z.priority)break;if(v=z.scope)z.templateUrl||(E(v)?(Z("new/isolated scope",s||K,z,I),s=z):Z("new/isolated scope",s,z,I)),K=K||z;J=z.name;if(!ra&&(z.replace&&(z.templateUrl||z.template)||z.transclude&&!z.$$tlb)){for(v=A+1;ra=a[v++];)if(ra.transclude&&!ra.$$tlb||ra.replace&&(ra.templateUrl||ra.template)){Y=!0;break}ra=!0}!z.templateUrl&&
z.controller&&(D=D||T(),Z("'"+J+"' controller",D[J],z,I),D[J]=z);if(v=z.transclude)if(w=!0,z.$$tlb||(Z("transclusion",C,z,I),C=z),"element"===v)pa=!0,n=z.priority,V=I,I=d.$$element=F(aa.$$createComment(J,d[J])),b=I[0],ka(f,wa.call(V,0),b),V[0].$$parentNode=V[0].parentNode,N=fc(Y,V,e,n,g&&g.name,{nonTlbTranscludeDirective:C});else{var ha=T();if(E(v)){V=[];var Gb=T(),L=T();q(v,function(a,b){var c="?"===a.charAt(0);a=c?a.substring(1):a;Gb[a]=b;ha[b]=null;L[b]=c});q(I.contents(),function(a){var b=Gb[Ca(xa(a))];
b?(L[b]=!0,ha[b]=ha[b]||[],ha[b].push(a)):V.push(a)});q(L,function(a,b){if(!a)throw da("reqslot",b);});for(var ec in ha)ha[ec]&&(ha[ec]=fc(Y,ha[ec],e))}else V=F(bc(b)).contents();I.empty();N=fc(Y,V,e,void 0,void 0,{needsNewScope:z.$$isolateScope||z.$$newScope});N.$$slots=ha}if(z.template)if(P=!0,Z("template",O,z,I),O=z,v=B(z.template)?z.template(I,d):z.template,v=Ea(v),z.replace){g=z;V=Zb.test(v)?id(fa(z.templateNamespace,R(v))):[];b=V[0];if(1!==V.length||1!==b.nodeType)throw da("tplrt",J,"");ka(f,
I,b);y={$attr:{}};v=dc(b,[],y);var W=a.splice(A+1,a.length-(A+1));(s||K)&&$(v,s,K);a=a.concat(v).concat(W);ea(d,y);y=a.length}else I.html(v);if(z.templateUrl)P=!0,Z("template",O,z,I),O=z,z.replace&&(g=z),p=ga(a.splice(A,a.length-A),I,d,f,w&&N,h,k,{controllerDirectives:D,newScopeDirective:K!==z&&K,newIsolateScopeDirective:s,templateDirective:O,nonTlbTranscludeDirective:C}),y=a.length;else if(z.compile)try{u=z.compile(I,d,N);var X=z.$$originalDirective||z;B(u)?m(null,bb(X,u),Ma,H):u&&m(bb(X,u.pre),
bb(X,u.post),Ma,H)}catch(ca){c(ca,ya(I))}z.terminal&&(p.terminal=!0,n=Math.max(n,z.priority))}p.scope=K&&!0===K.scope;p.transcludeOnThisElement=w;p.templateOnThisElement=P;p.transclude=N;l.hasElementTranscludeDirective=pa;return p}function S(a,b,c,d){var e;if(y(b)){var f=b.match(l);b=b.substring(f[0].length);var g=f[1]||f[3],f="?"===f[2];"^^"===g?c=c.parent():e=(e=d&&d[b])&&e.instance;if(!e){var h="$"+b+"Controller";e=g?c.inheritedData(h):c.data(h)}if(!e&&!f)throw da("ctreq",b,a);}else if(G(b))for(e=
[],g=0,f=b.length;g<f;g++)e[g]=S(a,b[g],c,d);else E(b)&&(e={},q(b,function(b,f){e[f]=S(a,b,c,d)}));return e||null}function ba(a,b,c,d,e,f,g){var h=T(),k;for(k in d){var l=d[k],m={$scope:l===g||l.$$isolateScope?e:f,$element:a,$attrs:b,$transclude:c},n=l.controller;"@"===n&&(n=b[l.name]);m=pa(n,m,!0,l.controllerAs);h[l.name]=m;a.data("$"+l.name+"Controller",m.instance)}return h}function $(a,b,c){for(var d=0,e=a.length;d<e;d++)a[d]=Tb(a[d],{$$isolateScope:b,$$newScope:c})}function W(b,c,f,g,h,k,l){if(c===
h)return null;var m=null;if(e.hasOwnProperty(c)){h=a.get(c+"Directive");for(var n=0,p=h.length;n<p;n++)if(c=h[n],(x(g)||g>c.priority)&&-1!==c.restrict.indexOf(f)){k&&(c=Tb(c,{$$start:k,$$end:l}));if(!c.$$bindings){var K=m=c,t=c.name,D={isolateScope:null,bindToController:null};E(K.scope)&&(!0===K.bindToController?(D.bindToController=d(K.scope,t,!0),D.isolateScope={}):D.isolateScope=d(K.scope,t,!1));E(K.bindToController)&&(D.bindToController=d(K.bindToController,t,!0));if(D.bindToController&&!K.controller)throw da("noctrl",
t);m=m.$$bindings=D;E(m.isolateScope)&&(c.$$isolateBindings=m.isolateScope)}b.push(c);m=c}}return m}function X(b){if(e.hasOwnProperty(b))for(var c=a.get(b+"Directive"),d=0,f=c.length;d<f;d++)if(b=c[d],b.multiElement)return!0;return!1}function ea(a,b){var c=b.$attr,d=a.$attr;q(a,function(d,e){"$"!==e.charAt(0)&&(b[e]&&b[e]!==d&&(d=d.length?d+(("style"===e?";":" ")+b[e]):b[e]),a.$set(e,d,!0,c[e]))});q(b,function(b,e){a.hasOwnProperty(e)||"$"===e.charAt(0)||(a[e]=b,"class"!==e&&"style"!==e&&(d[e]=c[e]))})}
function ga(a,b,d,e,g,h,k,l){var m=[],n,p,K=b[0],t=a.shift(),s=Tb(t,{templateUrl:null,transclude:null,replace:null,$$originalDirective:t}),z=B(t.templateUrl)?t.templateUrl(b,d):t.templateUrl,C=t.templateNamespace;b.empty();f(z).then(function(c){var f,D;c=Ea(c);if(t.replace){c=Zb.test(c)?id(fa(C,R(c))):[];f=c[0];if(1!==c.length||1!==f.nodeType)throw da("tplrt",t.name,z);c={$attr:{}};ka(e,b,f);var w=dc(f,[],c);E(t.scope)&&$(w,!0);a=w.concat(a);ea(d,c)}else f=K,b.html(c);a.unshift(s);n=U(a,f,d,g,b,t,
h,k,l);q(e,function(a,c){a===f&&(e[c]=b[0])});for(p=Ma(b[0].childNodes,g);m.length;){c=m.shift();D=m.shift();var O=m.shift(),I=m.shift(),w=b[0];if(!c.$$destroyed){if(D!==K){var P=D.className;l.hasElementTranscludeDirective&&t.replace||(w=bc(f));ka(O,F(D),w);ra(F(w),P)}D=n.transcludeOnThisElement?ha(c,n.transclude,I):I;n(p,c,w,e,D)}}m=null}).catch(function(a){a instanceof Error&&c(a)}).catch(v);return function(a,b,c,d,e){a=e;b.$$destroyed||(m?m.push(b,c,d,a):(n.transcludeOnThisElement&&(a=ha(b,n.transclude,
e)),n(p,b,c,d,a)))}}function ia(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function Z(a,b,c,d){function e(a){return a?" (module: "+a+")":""}if(b)throw da("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),a,ya(d));}function ja(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&aa.$$addBindingClass(a);return function(a,c){var e=c.parent();b||aa.$$addBindingClass(e);aa.$$addBindingInfo(e,d.expressions);
a.$watch(d,function(a){c[0].nodeValue=a})}}})}function fa(a,b){a=L(a||"html");switch(a){case "svg":case "math":var c=A.document.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function oa(a,b){if("srcdoc"===b)return z.HTML;var c=xa(a);if("src"===b||"ngSrc"===b){if(-1===["img","video","audio","source","track"].indexOf(c))return z.RESOURCE_URL}else if("xlinkHref"===b||"form"===c&&"action"===b||"link"===c&&"href"===b)return z.RESOURCE_URL}function qa(a,
c,d,e,f){var g=oa(a,e),h=k[e]||f,l=b(d,!f,g,h);if(l){if("multiple"===e&&"select"===xa(a))throw da("selmulti",ya(a));if(m.test(e))throw da("nodomevents");c.push({priority:100,compile:function(){return{pre:function(a,c,f){c=f.$$observers||(f.$$observers=T());var k=f[e];k!==d&&(l=k&&b(k,!0,g,h),d=k);l&&(f[e]=l(a),(c[e]||(c[e]=[])).$$inter=!0,(f.$$observers&&f.$$observers[e].$$scope||a).$watch(l,function(a,b){"class"===e&&a!==b?f.$updateClass(a,b):f.$set(e,a)}))}}}})}}function ka(a,b,c){var d=b[0],e=
b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]===d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=A.document.createDocumentFragment();for(g=0;g<e;g++)a.appendChild(b[g]);F.hasData(d)&&(F.data(c,F.data(d)),F(d).off("$destroy"));F.cleanData(a.querySelectorAll("*"));for(g=1;g<e;g++)delete b[g];b[0]=c;b.length=1}function sa(a,b){return Q(function(){return a.apply(null,arguments)},
a,b)}function ta(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,ya(d))}}function na(a,c,d,e,f){function g(b,c,e){!B(d.$onChanges)||c===e||c!==c&&e!==e||(ca||(a.$$postDigest(V),ca=[]),m||(m={},ca.push(h)),m[b]&&(e=m[b].previousValue),m[b]=new Hb(e,c))}function h(){d.$onChanges(m);m=void 0}var k=[],l={},m;q(e,function(e,h){var m=e.attrName,p=e.optional,t,D,s,z;switch(e.mode){case "@":p||va.call(c,m)||(d[h]=c[m]=void 0);p=c.$observe(m,function(a){if(y(a)||Ia(a))g(h,a,d[h]),d[h]=a});c.$$observers[m].$$scope=
a;t=c[m];y(t)?d[h]=b(t)(a):Ia(t)&&(d[h]=t);l[h]=new Hb(gc,d[h]);k.push(p);break;case "=":if(!va.call(c,m)){if(p)break;c[m]=void 0}if(p&&!c[m])break;D=n(c[m]);z=D.literal?ma:function(a,b){return a===b||a!==a&&b!==b};s=D.assign||function(){t=d[h]=D(a);throw da("nonassign",c[m],m,f.name);};t=d[h]=D(a);p=function(b){z(b,d[h])||(z(b,t)?s(a,b=d[h]):d[h]=b);return t=b};p.$stateful=!0;p=e.collection?a.$watchCollection(c[m],p):a.$watch(n(c[m],p),null,D.literal);k.push(p);break;case "<":if(!va.call(c,m)){if(p)break;
c[m]=void 0}if(p&&!c[m])break;D=n(c[m]);var C=D.literal,w=d[h]=D(a);l[h]=new Hb(gc,d[h]);p=a.$watch(D,function(a,b){if(b===a){if(b===w||C&&ma(b,w))return;b=w}g(h,a,b);d[h]=a},C);k.push(p);break;case "&":D=c.hasOwnProperty(m)?n(c[m]):v;if(D===v&&p)break;d[h]=function(b){return D(a,b)}}});return{initialChanges:l,removeWatches:k.length&&function(){for(var a=0,b=k.length;a<b;++a)k[a]()}}}var Da=/^\w/,ua=A.document.createElement("div"),Fa=J,Ga=s,za=C,ca;r.prototype={$normalize:Ca,$addClass:function(a){a&&
0<a.length&&P.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&P.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=jd(a,b);c&&c.length&&P.addClass(this.$$element,c);(c=jd(b,a))&&c.length&&P.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=cd(this.$$element[0],a),g=kd[a],h=a;f?(this.$$element.prop(a,b),e=f):g&&(this[g]=b,h=g);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=Mc(a,"-"));f=xa(this.$$element);if("a"===f&&("href"===a||"xlinkHref"===
a)||"img"===f&&"src"===a)this[a]=b=I(b,"src"===a);else if("img"===f&&"srcset"===a&&u(b)){for(var f="",g=R(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(g)?k:/(,)/,g=g.split(k),k=Math.floor(g.length/2),l=0;l<k;l++)var m=2*l,f=f+I(R(g[m]),!0),f=f+(" "+R(g[m+1]));g=R(g[2*l]).split(/\s/);f+=I(R(g[0]),!0);2===g.length&&(f+=" "+R(g[1]));this[a]=b=f}!1!==d&&(null===b||x(b)?this.$$element.removeAttr(e):Da.test(e)?this.$$element.attr(e,b):Y(this.$$element[0],e,b));(a=this.$$observers)&&q(a[h],function(a){try{a(b)}catch(d){c(d)}})},
$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=T()),e=d[a]||(d[a]=[]);e.push(b);O.$evalAsync(function(){e.$$inter||!c.hasOwnProperty(a)||x(c[a])||b(c[a])});return function(){$a(e,b)}}};var Aa=b.startSymbol(),Ba=b.endSymbol(),Ea="{{"===Aa&&"}}"===Ba?Ya:function(a){return a.replace(/\{\{/g,Aa).replace(/}}/g,Ba)},Ha=/^ngAttr[A-Z]/,Ka=/^(.+)Start$/;aa.$$addBindingInfo=p?function(a,b){var c=a.data("$binding")||[];G(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:v;aa.$$addBindingClass=
p?function(a){ra(a,"ng-binding")}:v;aa.$$addScopeInfo=p?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:v;aa.$$addScopeClass=p?function(a,b){ra(a,b?"ng-isolate-scope":"ng-scope")}:v;aa.$$createComment=function(a,b){var c="";p&&(c=" "+(a||"")+": ",b&&(c+=b+" "));return A.document.createComment(c)};return aa}]}function Hb(a,b){this.previousValue=a;this.currentValue=b}function Ca(a){return a.replace(fd,"").replace(lg,gb)}function jd(a,b){var d="",c=a.split(/\s+/),
f=b.split(/\s+/),e=0;a:for(;e<c.length;e++){for(var g=c[e],h=0;h<f.length;h++)if(g===f[h])continue a;d+=(0<d.length?" ":"")+g}return d}function id(a){a=F(a);var b=a.length;if(1>=b)return a;for(;b--;){var d=a[b];(8===d.nodeType||d.nodeType===Ja&&""===d.nodeValue.trim())&&mg.call(a,b,1)}return a}function kg(a,b){if(b&&y(b))return b;if(y(a)){var d=ld.exec(a);if(d)return d[3]}}function qf(){var a={},b=!1;this.has=function(b){return a.hasOwnProperty(b)};this.register=function(b,c){Oa(b,"controller");E(b)?
Q(a,b):a[b]=c};this.allowGlobals=function(){b=!0};this.$get=["$injector","$window",function(d,c){function f(a,b,c,d){if(!a||!E(a.$scope))throw H("$controller")("noscp",d,b);a.$scope[b]=c}return function(e,g,h,k){var l,m,n;h=!0===h;k&&y(k)&&(n=k);if(y(e)){k=e.match(ld);if(!k)throw md("ctrlfmt",e);m=k[1];n=n||k[3];e=a.hasOwnProperty(m)?a[m]:Oc(g.$scope,m,!0)||(b?Oc(c,m,!0):void 0);if(!e)throw md("ctrlreg",m);sb(e,m,!0)}if(h)return h=(G(e)?e[e.length-1]:e).prototype,l=Object.create(h||null),n&&f(g,n,
l,m||e.name),Q(function(){var a=d.invoke(e,l,g,m);a!==l&&(E(a)||B(a))&&(l=a,n&&f(g,n,l,m||e.name));return l},{instance:l,identifier:n});l=d.instantiate(e,g,m);n&&f(g,n,l,m||e.name);return l}}]}function rf(){this.$get=["$window",function(a){return F(a.document)}]}function sf(){this.$get=["$document","$rootScope",function(a,b){function d(){f=c.hidden}var c=a[0],f=c&&c.hidden;a.on("visibilitychange",d);b.$on("$destroy",function(){a.off("visibilitychange",d)});return function(){return f}}]}function tf(){this.$get=
["$log",function(a){return function(b,d){a.error.apply(a,arguments)}}]}function hc(a){return E(a)?ea(a)?a.toISOString():cb(a):a}function yf(){this.$get=function(){return function(a){if(!a)return"";var b=[];Dc(a,function(a,c){null===a||x(a)||(G(a)?q(a,function(a){b.push(ia(c)+"="+ia(hc(a)))}):b.push(ia(c)+"="+ia(hc(a))))});return b.join("&")}}}function zf(){this.$get=function(){return function(a){function b(a,f,e){null===a||x(a)||(G(a)?q(a,function(a,c){b(a,f+"["+(E(a)?c:"")+"]")}):E(a)&&!ea(a)?Dc(a,
function(a,c){b(a,f+(e?"":"[")+c+(e?"":"]"))}):d.push(ia(f)+"="+ia(hc(a))))}if(!a)return"";var d=[];b(a,"",!0);return d.join("&")}}}function ic(a,b){if(y(a)){var d=a.replace(ng,"").trim();if(d){var c=b("Content-Type");(c=c&&0===c.indexOf(nd))||(c=(c=d.match(og))&&pg[c[0]].test(d));c&&(a=Hc(d))}}return a}function od(a){var b=T(),d;y(a)?q(a.split("\n"),function(a){d=a.indexOf(":");var f=L(R(a.substr(0,d)));a=R(a.substr(d+1));f&&(b[f]=b[f]?b[f]+", "+a:a)}):E(a)&&q(a,function(a,d){var e=L(d),g=R(a);e&&
(b[e]=b[e]?b[e]+", "+g:g)});return b}function pd(a){var b;return function(d){b||(b=od(a));return d?(d=b[L(d)],void 0===d&&(d=null),d):b}}function qd(a,b,d,c){if(B(c))return c(a,b,d);q(c,function(c){a=c(a,b,d)});return a}function xf(){var a=this.defaults={transformResponse:[ic],transformRequest:[function(a){return E(a)&&"[object File]"!==la.call(a)&&"[object Blob]"!==la.call(a)&&"[object FormData]"!==la.call(a)?cb(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ja(jc),put:ja(jc),
patch:ja(jc)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer",jsonpCallbackParam:"callback"},b=!1;this.useApplyAsync=function(a){return u(a)?(b=!!a,this):b};var d=this.interceptors=[];this.$get=["$browser","$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector","$sce",function(c,f,e,g,h,k,l,m){function n(b){function d(a,b){for(var c=0,e=b.length;c<e;){var f=b[c++],g=b[c++];a=a.then(f,g)}b.length=0;return a}function e(a,b){var c,
d={};q(a,function(a,e){B(a)?(c=a(b),null!=c&&(d[e]=c)):d[e]=a});return d}function f(a){var b=Q({},a);b.data=qd(a.data,a.headers,a.status,g.transformResponse);a=a.status;return 200<=a&&300>a?b:k.reject(b)}if(!E(b))throw H("$http")("badreq",b);if(!y(m.valueOf(b.url)))throw H("$http")("badreq",b.url);var g=Q({method:"get",transformRequest:a.transformRequest,transformResponse:a.transformResponse,paramSerializer:a.paramSerializer,jsonpCallbackParam:a.jsonpCallbackParam},b);g.headers=function(b){var c=
a.headers,d=Q({},b.headers),f,g,h,c=Q({},c.common,c[L(b.method)]);a:for(f in c){g=L(f);for(h in d)if(L(h)===g)continue a;d[f]=c[f]}return e(d,ja(b))}(b);g.method=ub(g.method);g.paramSerializer=y(g.paramSerializer)?l.get(g.paramSerializer):g.paramSerializer;c.$$incOutstandingRequestCount();var h=[],n=[];b=k.resolve(g);q(s,function(a){(a.request||a.requestError)&&h.unshift(a.request,a.requestError);(a.response||a.responseError)&&n.push(a.response,a.responseError)});b=d(b,h);b=b.then(function(b){var c=
b.headers,d=qd(b.data,pd(c),void 0,b.transformRequest);x(d)&&q(c,function(a,b){"content-type"===L(b)&&delete c[b]});x(b.withCredentials)&&!x(a.withCredentials)&&(b.withCredentials=a.withCredentials);return p(b,d).then(f,f)});b=d(b,n);return b=b.finally(function(){c.$$completeOutstandingRequest(v)})}function p(c,d){function g(a){if(a){var c={};q(a,function(a,d){c[d]=function(c){function d(){a(c)}b?h.$applyAsync(d):h.$$phase?d():h.$apply(d)}});return c}}function l(a,c,d,e){function f(){p(c,a,d,e)}P&&
(200<=a&&300>a?P.put(Y,[a,c,od(d),e]):P.remove(Y));b?h.$applyAsync(f):(f(),h.$$phase||h.$apply())}function p(a,b,d,e){b=-1<=b?b:0;(200<=b&&300>b?O.resolve:O.reject)({data:a,status:b,headers:pd(d),config:c,statusText:e})}function K(a){p(a.data,a.status,ja(a.headers()),a.statusText)}function s(){var a=n.pendingRequests.indexOf(c);-1!==a&&n.pendingRequests.splice(a,1)}var O=k.defer(),z=O.promise,P,I,V=c.headers,r="jsonp"===L(c.method),Y=c.url;r?Y=m.getTrustedResourceUrl(Y):y(Y)||(Y=m.valueOf(Y));Y=t(Y,
c.paramSerializer(c.params));r&&(Y=C(Y,c.jsonpCallbackParam));n.pendingRequests.push(c);z.then(s,s);!c.cache&&!a.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(P=E(c.cache)?c.cache:E(a.cache)?a.cache:J);P&&(I=P.get(Y),u(I)?I&&B(I.then)?I.then(K,K):G(I)?p(I[1],I[0],ja(I[2]),I[3]):p(I,200,{},"OK"):P.put(Y,z));x(I)&&((I=rd(c.url)?e()[c.xsrfCookieName||a.xsrfCookieName]:void 0)&&(V[c.xsrfHeaderName||a.xsrfHeaderName]=I),f(c.method,Y,d,l,V,c.timeout,c.withCredentials,c.responseType,g(c.eventHandlers),
g(c.uploadEventHandlers)));return z}function t(a,b){0<b.length&&(a+=(-1===a.indexOf("?")?"?":"&")+b);return a}function C(a,b){if(/[&?][^=]+=JSON_CALLBACK/.test(a))throw sd("badjsonp",a);if((new RegExp("[&?]"+b+"=")).test(a))throw sd("badjsonp",b,a);return a+=(-1===a.indexOf("?")?"?":"&")+b+"=JSON_CALLBACK"}var J=g("$http");a.paramSerializer=y(a.paramSerializer)?l.get(a.paramSerializer):a.paramSerializer;var s=[];q(d,function(a){s.unshift(y(a)?l.get(a):l.invoke(a))});n.pendingRequests=[];(function(a){q(arguments,
function(a){n[a]=function(b,c){return n(Q({},c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){q(arguments,function(a){n[a]=function(b,c,d){return n(Q({},d||{},{method:a,url:b,data:c}))}})})("post","put","patch");n.defaults=a;return n}]}function Bf(){this.$get=function(){return function(){return new A.XMLHttpRequest}}}function Af(){this.$get=["$browser","$jsonpCallbacks","$document","$xhrFactory",function(a,b,d,c){return qg(a,c,a.defer,b,d[0])}]}function qg(a,b,d,c,f){function e(a,
b,d){a=a.replace("JSON_CALLBACK",b);var e=f.createElement("script"),m=null;e.type="text/javascript";e.src=a;e.async=!0;m=function(a){e.removeEventListener("load",m);e.removeEventListener("error",m);f.body.removeChild(e);e=null;var g=-1,t="unknown";a&&("load"!==a.type||c.wasCalled(b)||(a={type:"error"}),t=a.type,g="error"===a.type?404:200);d&&d(g,t)};e.addEventListener("load",m);e.addEventListener("error",m);f.body.appendChild(e);return m}return function(f,h,k,l,m,n,p,t,C,J){function s(){w&&w();N&&
N.abort()}h=h||a.url();if("jsonp"===L(f))var M=c.createCallback(h),w=e(h,M,function(a,b){var e=200===a&&c.getResponse(M);u(D)&&d.cancel(D);w=N=null;l(a,e,"",b);c.removeCallback(M)});else{var N=b(f,h);N.open(f,h,!0);q(m,function(a,b){u(a)&&N.setRequestHeader(b,a)});N.onload=function(){var a=N.statusText||"",b="response"in N?N.response:N.responseText,c=1223===N.status?204:N.status;0===c&&(c=b?200:"file"===Da(h).protocol?404:0);var e=N.getAllResponseHeaders();u(D)&&d.cancel(D);w=N=null;l(c,b,e,a)};f=
function(){u(D)&&d.cancel(D);w=N=null;l(-1,null,null,"")};N.onerror=f;N.onabort=f;N.ontimeout=f;q(C,function(a,b){N.addEventListener(b,a)});q(J,function(a,b){N.upload.addEventListener(b,a)});p&&(N.withCredentials=!0);if(t)try{N.responseType=t}catch(r){if("json"!==t)throw r;}N.send(x(k)?null:k)}if(0<n)var D=d(s,n);else n&&B(n.then)&&n.then(s)}}function vf(){var a="{{",b="}}";this.startSymbol=function(b){return b?(a=b,this):a};this.endSymbol=function(a){return a?(b=a,this):b};this.$get=["$parse","$exceptionHandler",
"$sce",function(d,c,f){function e(a){return"\\\\\\"+a}function g(c){return c.replace(n,a).replace(p,b)}function h(a,b,c,d){var e=a.$watch(function(a){e();return d(a)},b,c);return e}function k(e,k,p,n){function M(a){try{var b=a;a=p?f.getTrusted(p,b):f.valueOf(b);return n&&!u(a)?a:Xb(a)}catch(d){c(Ea.interr(e,d))}}if(!e.length||-1===e.indexOf(a)){var w;k||(k=g(e),w=fa(k),w.exp=e,w.expressions=[],w.$$watchDelegate=h);return w}n=!!n;var q,r,D=0,K=[],pa=[];w=e.length;for(var O=[],z=[];D<w;)if(-1!==(q=
e.indexOf(a,D))&&-1!==(r=e.indexOf(b,q+l)))D!==q&&O.push(g(e.substring(D,q))),D=e.substring(q+l,r),K.push(D),pa.push(d(D,M)),D=r+m,z.push(O.length),O.push("");else{D!==w&&O.push(g(e.substring(D)));break}p&&1<O.length&&Ea.throwNoconcat(e);if(!k||K.length){var P=function(a){for(var b=0,c=K.length;b<c;b++){if(n&&x(a[b]))return;O[z[b]]=a[b]}return O.join("")};return Q(function(a){var b=0,d=K.length,f=Array(d);try{for(;b<d;b++)f[b]=pa[b](a);return P(f)}catch(g){c(Ea.interr(e,g))}},{exp:e,expressions:K,
$$watchDelegate:function(a,b){var c;return a.$watchGroup(pa,function(d,e){var f=P(d);B(b)&&b.call(this,f,d!==e?c:f,a);c=f})}})}}var l=a.length,m=b.length,n=new RegExp(a.replace(/./g,e),"g"),p=new RegExp(b.replace(/./g,e),"g");k.startSymbol=function(){return a};k.endSymbol=function(){return b};return k}]}function wf(){this.$get=["$rootScope","$window","$q","$$q","$browser",function(a,b,d,c,f){function e(e,k,l,m){function n(){p?e.apply(null,t):e(s)}var p=4<arguments.length,t=p?wa.call(arguments,4):
[],C=b.setInterval,q=b.clearInterval,s=0,M=u(m)&&!m,w=(M?c:d).defer(),r=w.promise;l=u(l)?l:0;r.$$intervalId=C(function(){M?f.defer(n):a.$evalAsync(n);w.notify(s++);0<l&&s>=l&&(w.resolve(s),q(r.$$intervalId),delete g[r.$$intervalId]);M||a.$apply()},k);g[r.$$intervalId]=w;return r}var g={};e.cancel=function(a){return a&&a.$$intervalId in g?(g[a.$$intervalId].promise.catch(v),g[a.$$intervalId].reject("canceled"),b.clearInterval(a.$$intervalId),delete g[a.$$intervalId],!0):!1};return e}]}function kc(a){a=
a.split("/");for(var b=a.length;b--;)a[b]=db(a[b]);return a.join("/")}function td(a,b){var d=Da(a);b.$$protocol=d.protocol;b.$$host=d.hostname;b.$$port=X(d.port)||rg[d.protocol]||null}function ud(a,b){if(sg.test(a))throw kb("badpath",a);var d="/"!==a.charAt(0);d&&(a="/"+a);var c=Da(a);b.$$path=decodeURIComponent(d&&"/"===c.pathname.charAt(0)?c.pathname.substring(1):c.pathname);b.$$search=Kc(c.search);b.$$hash=decodeURIComponent(c.hash);b.$$path&&"/"!==b.$$path.charAt(0)&&(b.$$path="/"+b.$$path)}function lc(a,
b){return a.slice(0,b.length)===b}function sa(a,b){if(lc(b,a))return b.substr(a.length)}function Ba(a){var b=a.indexOf("#");return-1===b?a:a.substr(0,b)}function lb(a){return a.replace(/(#.+)|#$/,"$1")}function mc(a,b,d){this.$$html5=!0;d=d||"";td(a,this);this.$$parse=function(a){var d=sa(b,a);if(!y(d))throw kb("ipthprfx",a,b);ud(d,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Wb(this.$$search),d=this.$$hash?"#"+db(this.$$hash):"";this.$$url=kc(this.$$path)+
(a?"?"+a:"")+d;this.$$absUrl=b+this.$$url.substr(1)};this.$$parseLinkUrl=function(c,f){if(f&&"#"===f[0])return this.hash(f.slice(1)),!0;var e,g;u(e=sa(a,c))?(g=e,g=d&&u(e=sa(d,e))?b+(sa("/",e)||e):a+g):u(e=sa(b,c))?g=b+e:b===c+"/"&&(g=b);g&&this.$$parse(g);return!!g}}function nc(a,b,d){td(a,this);this.$$parse=function(c){var f=sa(a,c)||sa(b,c),e;x(f)||"#"!==f.charAt(0)?this.$$html5?e=f:(e="",x(f)&&(a=c,this.replace())):(e=sa(d,f),x(e)&&(e=f));ud(e,this);c=this.$$path;var f=a,g=/^\/[A-Z]:(\/.*)/;lc(e,
f)&&(e=e.replace(f,""));g.exec(e)||(c=(e=g.exec(c))?e[1]:c);this.$$path=c;this.$$compose()};this.$$compose=function(){var b=Wb(this.$$search),f=this.$$hash?"#"+db(this.$$hash):"";this.$$url=kc(this.$$path)+(b?"?"+b:"")+f;this.$$absUrl=a+(this.$$url?d+this.$$url:"")};this.$$parseLinkUrl=function(b,d){return Ba(a)===Ba(b)?(this.$$parse(b),!0):!1}}function vd(a,b,d){this.$$html5=!0;nc.apply(this,arguments);this.$$parseLinkUrl=function(c,f){if(f&&"#"===f[0])return this.hash(f.slice(1)),!0;var e,g;a===
Ba(c)?e=c:(g=sa(b,c))?e=a+d+g:b===c+"/"&&(e=b);e&&this.$$parse(e);return!!e};this.$$compose=function(){var b=Wb(this.$$search),f=this.$$hash?"#"+db(this.$$hash):"";this.$$url=kc(this.$$path)+(b?"?"+b:"")+f;this.$$absUrl=a+d+this.$$url}}function Ib(a){return function(){return this[a]}}function wd(a,b){return function(d){if(x(d))return this[a];this[a]=b(d);this.$$compose();return this}}function Df(){var a="!",b={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(b){return u(b)?(a=b,
this):a};this.html5Mode=function(a){if(Ia(a))return b.enabled=a,this;if(E(a)){Ia(a.enabled)&&(b.enabled=a.enabled);Ia(a.requireBase)&&(b.requireBase=a.requireBase);if(Ia(a.rewriteLinks)||y(a.rewriteLinks))b.rewriteLinks=a.rewriteLinks;return this}return b};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(d,c,f,e,g){function h(a,b,d){var e=l.url(),f=l.$$state;try{c.url(a,b,d),l.$$state=c.state()}catch(g){throw l.url(e),l.$$state=f,g;}}function k(a,b){d.$broadcast("$locationChangeSuccess",
l.absUrl(),a,l.$$state,b)}var l,m;m=c.baseHref();var n=c.url(),p;if(b.enabled){if(!m&&b.requireBase)throw kb("nobase");p=n.substring(0,n.indexOf("/",n.indexOf("//")+2))+(m||"/");m=f.history?mc:vd}else p=Ba(n),m=nc;var t=p.substr(0,Ba(p).lastIndexOf("/")+1);l=new m(p,t,"#"+a);l.$$parseLinkUrl(n,n);l.$$state=c.state();var C=/^\s*(javascript|mailto):/i;e.on("click",function(a){var f=b.rewriteLinks;if(f&&!a.ctrlKey&&!a.metaKey&&!a.shiftKey&&2!==a.which&&2!==a.button){for(var h=F(a.target);"a"!==xa(h[0]);)if(h[0]===
e[0]||!(h=h.parent())[0])return;if(!y(f)||!x(h.attr(f))){var f=h.prop("href"),k=h.attr("href")||h.attr("xlink:href");E(f)&&"[object SVGAnimatedString]"===f.toString()&&(f=Da(f.animVal).href);C.test(f)||!f||h.attr("target")||a.isDefaultPrevented()||!l.$$parseLinkUrl(f,k)||(a.preventDefault(),l.absUrl()!==c.url()&&(d.$apply(),g.angular["ff-684208-preventDefault"]=!0))}}});lb(l.absUrl())!==lb(n)&&c.url(l.absUrl(),!0);var q=!0;c.onUrlChange(function(a,b){lc(a,t)?(d.$evalAsync(function(){var c=l.absUrl(),
e=l.$$state,f;a=lb(a);l.$$parse(a);l.$$state=b;f=d.$broadcast("$locationChangeStart",a,c,b,e).defaultPrevented;l.absUrl()===a&&(f?(l.$$parse(c),l.$$state=e,h(c,!1,e)):(q=!1,k(c,e)))}),d.$$phase||d.$digest()):g.location.href=a});d.$watch(function(){var a=lb(c.url()),b=lb(l.absUrl()),e=c.state(),g=l.$$replace,m=a!==b||l.$$html5&&f.history&&e!==l.$$state;if(q||m)q=!1,d.$evalAsync(function(){var b=l.absUrl(),c=d.$broadcast("$locationChangeStart",b,a,l.$$state,e).defaultPrevented;l.absUrl()===b&&(c?(l.$$parse(a),
l.$$state=e):(m&&h(b,g,e===l.$$state?null:l.$$state),k(a,e)))});l.$$replace=!1});return l}]}function Ef(){var a=!0,b=this;this.debugEnabled=function(b){return u(b)?(a=b,this):a};this.$get=["$window",function(d){function c(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function f(a){var b=d.console||{},f=b[a]||b.log||v;a=!1;try{a=!!f.apply}catch(k){}return a?function(){var a=
[];q(arguments,function(b){a.push(c(b))});return f.apply(b,a)}:function(a,b){f(a,null==b?"":b)}}return{log:f("log"),info:f("info"),warn:f("warn"),error:f("error"),debug:function(){var c=f("debug");return function(){a&&c.apply(b,arguments)}}()}}]}function tg(a){return a+""}function ug(a,b){return"undefined"!==typeof a?a:b}function xd(a,b){return"undefined"===typeof a?b:"undefined"===typeof b?a:a+b}function S(a,b){var d,c,f;switch(a.type){case r.Program:d=!0;q(a.body,function(a){S(a.expression,b);d=
d&&a.expression.constant});a.constant=d;break;case r.Literal:a.constant=!0;a.toWatch=[];break;case r.UnaryExpression:S(a.argument,b);a.constant=a.argument.constant;a.toWatch=a.argument.toWatch;break;case r.BinaryExpression:S(a.left,b);S(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.left.toWatch.concat(a.right.toWatch);break;case r.LogicalExpression:S(a.left,b);S(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.constant?[]:[a];break;case r.ConditionalExpression:S(a.test,
b);S(a.alternate,b);S(a.consequent,b);a.constant=a.test.constant&&a.alternate.constant&&a.consequent.constant;a.toWatch=a.constant?[]:[a];break;case r.Identifier:a.constant=!1;a.toWatch=[a];break;case r.MemberExpression:S(a.object,b);a.computed&&S(a.property,b);a.constant=a.object.constant&&(!a.computed||a.property.constant);a.toWatch=[a];break;case r.CallExpression:d=f=a.filter?!b(a.callee.name).$stateful:!1;c=[];q(a.arguments,function(a){S(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});
a.constant=d;a.toWatch=f?c:[a];break;case r.AssignmentExpression:S(a.left,b);S(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=[a];break;case r.ArrayExpression:d=!0;c=[];q(a.elements,function(a){S(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});a.constant=d;a.toWatch=c;break;case r.ObjectExpression:d=!0;c=[];q(a.properties,function(a){S(a.value,b);d=d&&a.value.constant&&!a.computed;a.value.constant||c.push.apply(c,a.value.toWatch)});a.constant=d;a.toWatch=c;break;case r.ThisExpression:a.constant=
!1;a.toWatch=[];break;case r.LocalsExpression:a.constant=!1,a.toWatch=[]}}function yd(a){if(1===a.length){a=a[0].expression;var b=a.toWatch;return 1!==b.length?b:b[0]!==a?b:void 0}}function zd(a){return a.type===r.Identifier||a.type===r.MemberExpression}function Ad(a){if(1===a.body.length&&zd(a.body[0].expression))return{type:r.AssignmentExpression,left:a.body[0].expression,right:{type:r.NGValueParameter},operator:"="}}function Bd(a){return 0===a.body.length||1===a.body.length&&(a.body[0].expression.type===
r.Literal||a.body[0].expression.type===r.ArrayExpression||a.body[0].expression.type===r.ObjectExpression)}function Cd(a,b){this.astBuilder=a;this.$filter=b}function Dd(a,b){this.astBuilder=a;this.$filter=b}function oc(a){return B(a.valueOf)?a.valueOf():vg.call(a)}function Ff(){var a=T(),b={"true":!0,"false":!1,"null":null,undefined:void 0},d,c;this.addLiteral=function(a,c){b[a]=c};this.setIdentifierFns=function(a,b){d=a;c=b;return this};this.$get=["$filter",function(f){function e(a,b){return null==
a||null==b?a===b:"object"===typeof a&&(a=oc(a),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function g(a,b,c,d,f){var g=d.inputs,h;if(1===g.length){var k=e,g=g[0];return a.$watch(function(a){var b=g(a);e(b,k)||(h=d(a,void 0,void 0,[b]),k=b&&oc(b));return h},b,c,f)}for(var l=[],m=[],n=0,q=g.length;n<q;n++)l[n]=e,m[n]=null;return a.$watch(function(a){for(var b=!1,c=0,f=g.length;c<f;c++){var k=g[c](a);if(b||(b=!e(k,l[c])))m[c]=k,l[c]=k&&oc(k)}b&&(h=d(a,void 0,void 0,m));return h},b,c,f)}function h(a,
b,c,d,e){function f(a){return d(a)}function h(a,c,d){l=a;B(b)&&b(a,c,d);u(a)&&d.$$postDigest(function(){u(l)&&k()})}var k,l;return k=d.inputs?g(a,h,c,d,e):a.$watch(f,h,c)}function k(a,b,c,d){function e(a){var b=!0;q(a,function(a){u(a)||(b=!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,c,d){g=a;B(b)&&b(a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function l(a,b,c,d){var e=a.$watch(function(a){e();return d(a)},b,c);return e}function m(a,b){if(!b)return a;var c=
a.$$watchDelegate,d=!1,c=c!==k&&c!==h?function(c,e,f,g){f=d&&g?g[0]:a(c,e,f,g);return b(f,c,e)}:function(c,d,e,f){e=a(c,d,e,f);c=b(e,c,d);return u(e)?c:e},d=!a.inputs;a.$$watchDelegate&&a.$$watchDelegate!==g?(c.$$watchDelegate=a.$$watchDelegate,c.inputs=a.inputs):b.$stateful||(c.$$watchDelegate=g,c.inputs=a.inputs?a.inputs:[a]);return c}var n={csp:za().noUnsafeEval,literals:Fa(b),isIdentifierStart:B(d)&&d,isIdentifierContinue:B(c)&&c};return function(b,c){var d,e,s;switch(typeof b){case "string":return s=
b=b.trim(),d=a[s],d||(":"===b.charAt(0)&&":"===b.charAt(1)&&(e=!0,b=b.substring(2)),d=new pc(n),d=(new qc(d,f,n)).parse(b),d.constant?d.$$watchDelegate=l:e?d.$$watchDelegate=d.literal?k:h:d.inputs&&(d.$$watchDelegate=g),a[s]=d),m(d,c);case "function":return m(b,c);default:return m(v,c)}}}]}function Hf(){var a=!0;this.$get=["$rootScope","$exceptionHandler",function(b,d){return Ed(function(a){b.$evalAsync(a)},d,a)}];this.errorOnUnhandledRejections=function(b){return u(b)?(a=b,this):a}}function If(){var a=
!0;this.$get=["$browser","$exceptionHandler",function(b,d){return Ed(function(a){b.defer(a)},d,a)}];this.errorOnUnhandledRejections=function(b){return u(b)?(a=b,this):a}}function Ed(a,b,d){function c(){return new f}function f(){var a=this.promise=new e;this.resolve=function(b){k(a,b)};this.reject=function(b){m(a,b)};this.notify=function(b){p(a,b)}}function e(){this.$$state={status:0}}function g(){for(;!w&&u.length;){var a=u.shift();a.pur||(a.pur=!0,a=a.value,a="Possibly unhandled rejection: "+("function"===
typeof a?a.toString().replace(/ \{[\s\S]*$/,""):x(a)?"undefined":"string"!==typeof a?ve(a):a),b(a))}}function h(b){!d||b.pending||2!==b.status||b.pur||(0===w&&0===u.length&&a(g),u.push(b));!b.processScheduled&&b.pending&&(b.processScheduled=!0,++w,a(function(){var c,e,f;f=b.pending;b.processScheduled=!1;b.pending=void 0;try{for(var h=0,l=f.length;h<l;++h){b.pur=!0;e=f[h][0];c=f[h][b.status];try{B(c)?k(e,c(b.value)):1===b.status?k(e,b.value):m(e,b.value)}catch(n){m(e,n)}}}finally{--w,d&&0===w&&a(g)}}))}
function k(a,b){a.$$state.status||(b===a?n(a,M("qcycle",b)):l(a,b))}function l(a,b){function c(b){g||(g=!0,l(a,b))}function d(b){g||(g=!0,n(a,b))}function e(b){p(a,b)}var f,g=!1;try{if(E(b)||B(b))f=b.then;B(f)?(a.$$state.status=-1,f.call(b,c,d,e)):(a.$$state.value=b,a.$$state.status=1,h(a.$$state))}catch(k){d(k)}}function m(a,b){a.$$state.status||n(a,b)}function n(a,b){a.$$state.value=b;a.$$state.status=2;h(a.$$state)}function p(c,d){var e=c.$$state.pending;0>=c.$$state.status&&e&&e.length&&a(function(){for(var a,
c,f=0,g=e.length;f<g;f++){c=e[f][0];a=e[f][3];try{p(c,B(a)?a(d):d)}catch(h){b(h)}}})}function t(a){var b=new e;m(b,a);return b}function C(a,b,c){var d=null;try{B(c)&&(d=c())}catch(e){return t(e)}return d&&B(d.then)?d.then(function(){return b(a)},t):b(a)}function r(a,b,c,d){var f=new e;k(f,a);return f.then(b,c,d)}function s(a){if(!B(a))throw M("norslvr",a);var b=new e;a(function(a){k(b,a)},function(a){m(b,a)});return b}var M=H("$q",TypeError),w=0,u=[];Q(e.prototype,{then:function(a,b,c){if(x(a)&&x(b)&&
x(c))return this;var d=new e;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&h(this.$$state);return d},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return C(b,v,a)},function(b){return C(b,t,a)},b)}});var v=r;s.prototype=e.prototype;s.defer=c;s.reject=t;s.when=r;s.resolve=v;s.all=function(a){var b=new e,c=0,d=G(a)?[]:{};q(a,function(a,e){c++;r(a).then(function(a){d[e]=a;--c||k(b,d)},function(a){m(b,
a)})});0===c&&k(b,d);return b};s.race=function(a){var b=c();q(a,function(a){r(a).then(b.resolve,b.reject)});return b.promise};return s}function Rf(){this.$get=["$window","$timeout",function(a,b){var d=a.requestAnimationFrame||a.webkitRequestAnimationFrame,c=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||a.webkitCancelRequestAnimationFrame,f=!!d,e=f?function(a){var b=d(a);return function(){c(b)}}:function(a){var c=b(a,16.66,!1);return function(){b.cancel(c)}};e.supported=f;return e}]}function Gf(){function a(a){function b(){this.$$watchers=
this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++qb;this.$$ChildScope=null}b.prototype=a;return b}var b=10,d=H("$rootScope"),c=null,f=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$exceptionHandler","$parse","$browser",function(e,g,h){function k(a){a.currentScope.$$destroyed=!0}function l(a){9===La&&(a.$$childHead&&l(a.$$childHead),a.$$nextSibling&&l(a.$$nextSibling));a.$parent=a.$$nextSibling=
a.$$prevSibling=a.$$childHead=a.$$childTail=a.$root=a.$$watchers=null}function m(){this.$id=++qb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$$isolateBindings=null}function n(a){if(M.$$phase)throw d("inprog",M.$$phase);M.$$phase=a}function p(a,b){do a.$$watchersCount+=b;while(a=a.$parent)}function t(a,b,c){do a.$$listenerCount[c]-=
b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function C(){}function r(){for(;A.length;)try{A.shift()()}catch(a){e(a)}f=null}function s(){null===f&&(f=h.defer(function(){M.$apply(r)}))}m.prototype={constructor:m,$new:function(b,c){var d;c=c||this;b?(d=new m,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=a(this)),d=new this.$$ChildScope);d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=
d;(b||c!==this)&&d.$on("$destroy",k);return d},$watch:function(a,b,d,e){var f=g(a);if(f.$$watchDelegate)return f.$$watchDelegate(this,b,d,f,a);var h=this,k=h.$$watchers,l={fn:b,last:C,get:f,exp:e||a,eq:!!d};c=null;B(b)||(l.fn=v);k||(k=h.$$watchers=[]);k.unshift(l);p(this,1);return function(){0<=$a(k,l)&&p(h,-1);c=null}},$watchGroup:function(a,b){function c(){h=!1;k?(k=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=!0;g.$evalAsync(function(){l&&
b(e,e,g)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});q(a,function(a,b){var k=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(k)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!x(e)){if(E(e))if(ta(e))for(f!==n&&(f=n,s=f.length=0,l++),a=e.length,s!==a&&(l++,f.length=s=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==
p&&(f=p={},s=0,l++);a=0;for(b in e)va.call(e,b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(s++,f[b]=g,l++));if(s>a)for(b in l++,f)va.call(e,b)||(s--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$stateful=!0;var d=this,e,f,h,k=1<b.length,l=0,m=g(a,c),n=[],p={},t=!0,s=0;return this.$watch(m,function(){t?(t=!1,b(e,e,d)):b(e,h,d);if(k)if(E(e))if(ta(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h={},e)va.call(e,a)&&(h[a]=e[a]);else h=e})},$digest:function(){var a,
g,k,l,m,p,t,s,q=b,v,x=[],A,y;n("$digest");h.$$checkUrlChange();this===M&&null!==f&&(h.defer.cancel(f),r());c=null;do{s=!1;v=this;for(p=0;p<w.length;p++){try{y=w[p],y.scope.$eval(y.expression,y.locals)}catch(F){e(F)}c=null}w.length=0;a:do{if(p=v.$$watchers)for(t=p.length;t--;)try{if(a=p[t])if(m=a.get,(g=m(v))!==(k=a.last)&&!(a.eq?ma(g,k):ga(g)&&ga(k)))s=!0,c=a,a.last=a.eq?Fa(g,null):g,l=a.fn,l(g,k===C?g:k,v),5>q&&(A=4-q,x[A]||(x[A]=[]),x[A].push({msg:B(a.exp)?"fn: "+(a.exp.name||a.exp.toString()):
a.exp,newVal:g,oldVal:k}));else if(a===c){s=!1;break a}}catch(E){e(E)}if(!(p=v.$$watchersCount&&v.$$childHead||v!==this&&v.$$nextSibling))for(;v!==this&&!(p=v.$$nextSibling);)v=v.$parent}while(v=p);if((s||w.length)&&!q--)throw M.$$phase=null,d("infdig",b,x);}while(s||w.length);for(M.$$phase=null;D<u.length;)try{u[D++]()}catch(G){e(G)}u.length=D=0},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this===M&&h.$$applicationDestroyed();p(this,
-this.$$watchersCount);for(var b in this.$$listenerCount)t(this,this.$$listenerCount[b],b);a&&a.$$childHead===this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail===this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=v;this.$on=this.$watch=this.$watchGroup=function(){return v};this.$$listeners=
{};this.$$nextSibling=null;l(this)}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a,b){M.$$phase||w.length||h.defer(function(){w.length&&M.$digest()});w.push({scope:this,expression:g(a),locals:b})},$$postDigest:function(a){u.push(a)},$apply:function(a){try{n("$apply");try{return this.$eval(a)}finally{M.$$phase=null}}catch(b){e(b)}finally{try{M.$digest()}catch(c){throw e(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&A.push(b);a=g(a);s()},$on:function(a,b){var c=
this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,t(e,1,a))}},$emit:function(a,b){var c=[],d,f=this,g=!1,h={name:a,targetScope:f,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=ab([h],arguments,1),l,m;do{d=f.$$listeners[a]||c;h.currentScope=f;l=0;for(m=d.length;l<
m;l++)if(d[l])try{d[l].apply(null,k)}catch(n){e(n)}else d.splice(l,1),l--,m--;if(g)return h.currentScope=null,h;f=f.$parent}while(f);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,f={name:a,targetScope:this,preventDefault:function(){f.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return f;for(var g=ab([f],arguments,1),h,k;c=d;){f.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){e(l)}else d.splice(h,
1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}f.currentScope=null;return f}};var M=new m,w=M.$$asyncQueue=[],u=M.$$postDigestQueue=[],A=M.$$applyAsyncQueue=[],D=0;return M}]}function ye(){var a=/^\s*(https?|ftp|mailto|tel|file):/,b=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(b){return u(b)?(a=b,this):a};this.imgSrcSanitizationWhitelist=function(a){return u(a)?(b=a,this):b};
this.$get=function(){return function(d,c){var f=c?b:a,e;e=Da(d).href;return""===e||e.match(f)?d:"unsafe:"+e}}}function wg(a){if("self"===a)return a;if(y(a)){if(-1<a.indexOf("***"))throw ua("iwcard",a);a=Fd(a).replace(/\\\*\\\*/g,".*").replace(/\\\*/g,"[^:/.?&;]*");return new RegExp("^"+a+"$")}if(Xa(a))return new RegExp("^"+a.source+"$");throw ua("imatcher");}function Gd(a){var b=[];u(a)&&q(a,function(a){b.push(wg(a))});return b}function Kf(){this.SCE_CONTEXTS=qa;var a=["self"],b=[];this.resourceUrlWhitelist=
function(b){arguments.length&&(a=Gd(b));return a};this.resourceUrlBlacklist=function(a){arguments.length&&(b=Gd(a));return b};this.$get=["$injector",function(d){function c(a,b){return"self"===a?rd(b):!!a.exec(b.href)}function f(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var e=function(a){throw ua("unsafe");
};d.has("$sanitize")&&(e=d.get("$sanitize"));var g=f(),h={};h[qa.HTML]=f(g);h[qa.CSS]=f(g);h[qa.URL]=f(g);h[qa.JS]=f(g);h[qa.RESOURCE_URL]=f(h[qa.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw ua("icontext",a,b);if(null===b||x(b)||""===b)return b;if("string"!==typeof b)throw ua("itype",a);return new c(b)},getTrusted:function(d,f){if(null===f||x(f)||""===f)return f;var g=h.hasOwnProperty(d)?h[d]:null;if(g&&f instanceof g)return f.$$unwrapTrustedValue();if(d===qa.RESOURCE_URL){var g=
Da(f.toString()),n,p,t=!1;n=0;for(p=a.length;n<p;n++)if(c(a[n],g)){t=!0;break}if(t)for(n=0,p=b.length;n<p;n++)if(c(b[n],g)){t=!1;break}if(t)return f;throw ua("insecurl",f.toString());}if(d===qa.HTML)return e(f);throw ua("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function Jf(){var a=!0;this.enabled=function(b){arguments.length&&(a=!!b);return a};this.$get=["$parse","$sceDelegate",function(b,d){if(a&&8>La)throw ua("iequirks");var c=ja(qa);c.isEnabled=function(){return a};
c.trustAs=d.trustAs;c.getTrusted=d.getTrusted;c.valueOf=d.valueOf;a||(c.trustAs=c.getTrusted=function(a,b){return b},c.valueOf=Ya);c.parseAs=function(a,d){var e=b(d);return e.literal&&e.constant?e:b(d,function(b){return c.getTrusted(a,b)})};var f=c.parseAs,e=c.getTrusted,g=c.trustAs;q(qa,function(a,b){var d=L(b);c[("parse_as_"+d).replace(rc,gb)]=function(b){return f(a,b)};c[("get_trusted_"+d).replace(rc,gb)]=function(b){return e(a,b)};c[("trust_as_"+d).replace(rc,gb)]=function(b){return g(a,b)}});
return c}]}function Lf(){this.$get=["$window","$document",function(a,b){var d={},c=!(a.chrome&&(a.chrome.app&&a.chrome.app.runtime||!a.chrome.app&&a.chrome.runtime&&a.chrome.runtime.id))&&a.history&&a.history.pushState,f=X((/android (\d+)/.exec(L((a.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((a.navigator||{}).userAgent),g=b[0]||{},h=g.body&&g.body.style,k=!1,l=!1;h&&(k=!!("transition"in h||"webkitTransition"in h),l=!!("animation"in h||"webkitAnimation"in h));return{history:!(!c||4>f||e),
hasEvent:function(a){if("input"===a&&La)return!1;if(x(d[a])){var b=g.createElement("div");d[a]="on"+a in b}return d[a]},csp:za(),transitions:k,animations:l,android:f}}]}function Nf(){var a;this.httpOptions=function(b){return b?(a=b,this):a};this.$get=["$exceptionHandler","$templateCache","$http","$q","$sce",function(b,d,c,f,e){function g(h,k){g.totalPendingRequests++;if(!y(h)||x(d.get(h)))h=e.getTrustedResourceUrl(h);var l=c.defaults&&c.defaults.transformResponse;G(l)?l=l.filter(function(a){return a!==
ic}):l===ic&&(l=null);return c.get(h,Q({cache:d,transformResponse:l},a)).finally(function(){g.totalPendingRequests--}).then(function(a){d.put(h,a.data);return a.data},function(a){k||(a=xg("tpload",h,a.status,a.statusText),b(a));return f.reject(a)})}g.totalPendingRequests=0;return g}]}function Of(){this.$get=["$rootScope","$browser","$location",function(a,b,d){return{findBindings:function(a,b,d){a=a.getElementsByClassName("ng-binding");var g=[];q(a,function(a){var c=Z.element(a).data("$binding");c&&
q(c,function(c){d?(new RegExp("(^|\\s)"+Fd(b)+"(\\s|\\||$)")).test(c)&&g.push(a):-1!==c.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,d){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var k=a.querySelectorAll("["+g[h]+"model"+(d?"=":"*=")+'"'+b+'"]');if(k.length)return k}},getLocation:function(){return d.url()},setLocation:function(b){b!==d.url()&&(d.url(b),a.$digest())},whenStable:function(a){b.notifyWhenNoOutstandingRequests(a)}}}]}function Pf(){this.$get=["$rootScope","$browser",
"$q","$$q","$exceptionHandler",function(a,b,d,c,f){function e(e,k,l){B(e)||(l=k,k=e,e=v);var m=wa.call(arguments,3),n=u(l)&&!l,p=(n?c:d).defer(),t=p.promise,q;q=b.defer(function(){try{p.resolve(e.apply(null,m))}catch(b){p.reject(b),f(b)}finally{delete g[t.$$timeoutId]}n||a.$apply()},k);t.$$timeoutId=q;g[q]=p;return t}var g={};e.cancel=function(a){return a&&a.$$timeoutId in g?(g[a.$$timeoutId].promise.catch(v),g[a.$$timeoutId].reject("canceled"),delete g[a.$$timeoutId],b.defer.cancel(a.$$timeoutId)):
!1};return e}]}function Da(a){La&&(ba.setAttribute("href",a),a=ba.href);ba.setAttribute("href",a);return{href:ba.href,protocol:ba.protocol?ba.protocol.replace(/:$/,""):"",host:ba.host,search:ba.search?ba.search.replace(/^\?/,""):"",hash:ba.hash?ba.hash.replace(/^#/,""):"",hostname:ba.hostname,port:ba.port,pathname:"/"===ba.pathname.charAt(0)?ba.pathname:"/"+ba.pathname}}function rd(a){a=y(a)?Da(a):a;return a.protocol===Hd.protocol&&a.host===Hd.host}function Qf(){this.$get=fa(A)}function Id(a){function b(a){try{return decodeURIComponent(a)}catch(b){return a}}
var d=a[0]||{},c={},f="";return function(){var a,g,h,k,l;a=d.cookie||"";if(a!==f)for(f=a,a=f.split("; "),c={},h=0;h<a.length;h++)g=a[h],k=g.indexOf("="),0<k&&(l=b(g.substring(0,k)),x(c[l])&&(c[l]=b(g.substring(k+1))));return c}}function Uf(){this.$get=Id}function Wc(a){function b(d,c){if(E(d)){var f={};q(d,function(a,c){f[c]=b(c,a)});return f}return a.factory(d+"Filter",c)}this.register=b;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];b("currency",Jd);b("date",Kd);
b("filter",yg);b("json",zg);b("limitTo",Ag);b("lowercase",Bg);b("number",Ld);b("orderBy",Md);b("uppercase",Cg)}function yg(){return function(a,b,d,c){if(!ta(a)){if(null==a)return a;throw H("filter")("notarray",a);}c=c||"$";var f;switch(sc(b)){case "function":break;case "boolean":case "null":case "number":case "string":f=!0;case "object":b=Dg(b,d,c,f);break;default:return a}return Array.prototype.filter.call(a,b)}}function Dg(a,b,d,c){var f=E(a)&&d in a;!0===b?b=ma:B(b)||(b=function(a,b){if(x(a))return!1;
if(null===a||null===b)return a===b;if(E(b)||E(a)&&!Ub(a))return!1;a=L(""+a);b=L(""+b);return-1!==a.indexOf(b)});return function(e){return f&&!E(e)?Ha(e,a[d],b,d,!1):Ha(e,a,b,d,c)}}function Ha(a,b,d,c,f,e){var g=sc(a),h=sc(b);if("string"===h&&"!"===b.charAt(0))return!Ha(a,b.substring(1),d,c,f);if(G(a))return a.some(function(a){return Ha(a,b,d,c,f)});switch(g){case "object":var k;if(f){for(k in a)if("$"!==k.charAt(0)&&Ha(a[k],b,d,c,!0))return!0;return e?!1:Ha(a,b,d,c,!1)}if("object"===h){for(k in b)if(e=
b[k],!B(e)&&!x(e)&&(g=k===c,!Ha(g?a:a[k],e,d,c,g,g)))return!1;return!0}return d(a,b);case "function":return!1;default:return d(a,b)}}function sc(a){return null===a?"null":typeof a}function Jd(a){var b=a.NUMBER_FORMATS;return function(a,c,f){x(c)&&(c=b.CURRENCY_SYM);x(f)&&(f=b.PATTERNS[1].maxFrac);return null==a?a:Nd(a,b.PATTERNS[1],b.GROUP_SEP,b.DECIMAL_SEP,f).replace(/\u00A4/g,c)}}function Ld(a){var b=a.NUMBER_FORMATS;return function(a,c){return null==a?a:Nd(a,b.PATTERNS[0],b.GROUP_SEP,b.DECIMAL_SEP,
c)}}function Eg(a){var b=0,d,c,f,e,g;-1<(c=a.indexOf(Od))&&(a=a.replace(Od,""));0<(f=a.search(/e/i))?(0>c&&(c=f),c+=+a.slice(f+1),a=a.substring(0,f)):0>c&&(c=a.length);for(f=0;a.charAt(f)===tc;f++);if(f===(g=a.length))d=[0],c=1;else{for(g--;a.charAt(g)===tc;)g--;c-=f;d=[];for(e=0;f<=g;f++,e++)d[e]=+a.charAt(f)}c>Pd&&(d=d.splice(0,Pd-1),b=c-1,c=1);return{d:d,e:b,i:c}}function Fg(a,b,d,c){var f=a.d,e=f.length-a.i;b=x(b)?Math.min(Math.max(d,e),c):+b;d=b+a.i;c=f[d];if(0<d){f.splice(Math.max(a.i,d));for(var g=
d;g<f.length;g++)f[g]=0}else for(e=Math.max(0,e),a.i=1,f.length=Math.max(1,d=b+1),f[0]=0,g=1;g<d;g++)f[g]=0;if(5<=c)if(0>d-1){for(c=0;c>d;c--)f.unshift(0),a.i++;f.unshift(1);a.i++}else f[d-1]++;for(;e<Math.max(0,b);e++)f.push(0);if(b=f.reduceRight(function(a,b,c,d){b+=a;d[c]=b%10;return Math.floor(b/10)},0))f.unshift(b),a.i++}function Nd(a,b,d,c,f){if(!y(a)&&!W(a)||isNaN(a))return"";var e=!isFinite(a),g=!1,h=Math.abs(a)+"",k="";if(e)k="\u221e";else{g=Eg(h);Fg(g,f,b.minFrac,b.maxFrac);k=g.d;h=g.i;
f=g.e;e=[];for(g=k.reduce(function(a,b){return a&&!b},!0);0>h;)k.unshift(0),h++;0<h?e=k.splice(h,k.length):(e=k,k=[0]);h=[];for(k.length>=b.lgSize&&h.unshift(k.splice(-b.lgSize,k.length).join(""));k.length>b.gSize;)h.unshift(k.splice(-b.gSize,k.length).join(""));k.length&&h.unshift(k.join(""));k=h.join(d);e.length&&(k+=c+e.join(""));f&&(k+="e+"+f)}return 0>a&&!g?b.negPre+k+b.negSuf:b.posPre+k+b.posSuf}function Jb(a,b,d,c){var f="";if(0>a||c&&0>=a)c?a=-a+1:(a=-a,f="-");for(a=""+a;a.length<b;)a=tc+
a;d&&(a=a.substr(a.length-b));return f+a}function $(a,b,d,c,f){d=d||0;return function(e){e=e["get"+a]();if(0<d||e>-d)e+=d;0===e&&-12===d&&(e=12);return Jb(e,b,c,f)}}function mb(a,b,d){return function(c,f){var e=c["get"+a](),g=ub((d?"STANDALONE":"")+(b?"SHORT":"")+a);return f[g][e]}}function Qd(a){var b=(new Date(a,0,1)).getDay();return new Date(a,0,(4>=b?5:12)-b)}function Rd(a){return function(b){var d=Qd(b.getFullYear());b=+new Date(b.getFullYear(),b.getMonth(),b.getDate()+(4-b.getDay()))-+d;b=1+
Math.round(b/6048E5);return Jb(b,a)}}function uc(a,b){return 0>=a.getFullYear()?b.ERAS[0]:b.ERAS[1]}function Kd(a){function b(a){var b;if(b=a.match(d)){a=new Date(0);var e=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,k=b[8]?a.setUTCHours:a.setHours;b[9]&&(e=X(b[9]+b[10]),g=X(b[9]+b[11]));h.call(a,X(b[1]),X(b[2])-1,X(b[3]));e=X(b[4]||0)-e;g=X(b[5]||0)-g;h=X(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));k.call(a,e,g,h,b)}return a}var d=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
return function(c,d,e){var g="",h=[],k,l;d=d||"mediumDate";d=a.DATETIME_FORMATS[d]||d;y(c)&&(c=Gg.test(c)?X(c):b(c));W(c)&&(c=new Date(c));if(!ea(c)||!isFinite(c.getTime()))return c;for(;d;)(l=Hg.exec(d))?(h=ab(h,l,1),d=h.pop()):(h.push(d),d=null);var m=c.getTimezoneOffset();e&&(m=Ic(e,m),c=Vb(c,e,!0));q(h,function(b){k=Ig[b];g+=k?k(c,a.DATETIME_FORMATS,m):"''"===b?"'":b.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function zg(){return function(a,b){x(b)&&(b=2);return cb(a,b)}}function Ag(){return function(a,
b,d){b=Infinity===Math.abs(Number(b))?Number(b):X(b);if(ga(b))return a;W(a)&&(a=a.toString());if(!ta(a))return a;d=!d||isNaN(d)?0:X(d);d=0>d?Math.max(0,a.length+d):d;return 0<=b?vc(a,d,d+b):0===d?vc(a,b,a.length):vc(a,Math.max(0,d+b),d)}}function vc(a,b,d){return y(a)?a.slice(b,d):wa.call(a,b,d)}function Md(a){function b(b){return b.map(function(b){var c=1,d=Ya;if(B(b))d=b;else if(y(b)){if("+"===b.charAt(0)||"-"===b.charAt(0))c="-"===b.charAt(0)?-1:1,b=b.substring(1);if(""!==b&&(d=a(b),d.constant))var f=
d(),d=function(a){return a[f]}}return{get:d,descending:c}})}function d(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}function c(a,b){var c=0,d=a.type,k=b.type;if(d===k){var k=a.value,l=b.value;"string"===d?(k=k.toLowerCase(),l=l.toLowerCase()):"object"===d&&(E(k)&&(k=a.index),E(l)&&(l=b.index));k!==l&&(c=k<l?-1:1)}else c=d<k?-1:1;return c}return function(a,e,g,h){if(null==a)return a;if(!ta(a))throw H("orderBy")("notarray",a);G(e)||(e=[e]);0===e.length&&
(e=["+"]);var k=b(e),l=g?-1:1,m=B(h)?h:c;a=Array.prototype.map.call(a,function(a,b){return{value:a,tieBreaker:{value:b,type:"number",index:b},predicateValues:k.map(function(c){var e=c.get(a);c=typeof e;if(null===e)c="string",e="null";else if("object"===c)a:{if(B(e.valueOf)&&(e=e.valueOf(),d(e)))break a;Ub(e)&&(e=e.toString(),d(e))}return{value:e,type:c,index:b}})}});a.sort(function(a,b){for(var c=0,d=k.length;c<d;c++){var e=m(a.predicateValues[c],b.predicateValues[c]);if(e)return e*k[c].descending*
l}return m(a.tieBreaker,b.tieBreaker)*l});return a=a.map(function(a){return a.value})}}function Ra(a){B(a)&&(a={link:a});a.restrict=a.restrict||"AC";return fa(a)}function Kb(a,b,d,c,f){this.$$controls=[];this.$error={};this.$$success={};this.$pending=void 0;this.$name=f(b.name||b.ngForm||"")(d);this.$dirty=!1;this.$valid=this.$pristine=!0;this.$submitted=this.$invalid=!1;this.$$parentForm=Lb;this.$$element=a;this.$$animate=c;Sd(this)}function Sd(a){a.$$classCache={};a.$$classCache[Td]=!(a.$$classCache[nb]=
a.$$element.hasClass(nb))}function Ud(a){function b(a,b,c){c&&!a.$$classCache[b]?(a.$$animate.addClass(a.$$element,b),a.$$classCache[b]=!0):!c&&a.$$classCache[b]&&(a.$$animate.removeClass(a.$$element,b),a.$$classCache[b]=!1)}function d(a,c,d){c=c?"-"+Mc(c,"-"):"";b(a,nb+c,!0===d);b(a,Td+c,!1===d)}var c=a.set,f=a.unset;a.clazz.prototype.$setValidity=function(a,g,h){x(g)?(this.$pending||(this.$pending={}),c(this.$pending,a,h)):(this.$pending&&f(this.$pending,a,h),Vd(this.$pending)&&(this.$pending=void 0));
Ia(g)?g?(f(this.$error,a,h),c(this.$$success,a,h)):(c(this.$error,a,h),f(this.$$success,a,h)):(f(this.$error,a,h),f(this.$$success,a,h));this.$pending?(b(this,"ng-pending",!0),this.$valid=this.$invalid=void 0,d(this,"",null)):(b(this,"ng-pending",!1),this.$valid=Vd(this.$error),this.$invalid=!this.$valid,d(this,"",this.$valid));g=this.$pending&&this.$pending[a]?void 0:this.$error[a]?!1:this.$$success[a]?!0:null;d(this,a,g);this.$$parentForm.$setValidity(a,g,this)}}function Vd(a){if(a)for(var b in a)if(a.hasOwnProperty(b))return!1;
return!0}function wc(a){a.$formatters.push(function(b){return a.$isEmpty(b)?b:b.toString()})}function Sa(a,b,d,c,f,e){var g=L(b[0].type);if(!f.android){var h=!1;b.on("compositionstart",function(){h=!0});b.on("compositionend",function(){h=!1;l()})}var k,l=function(a){k&&(e.defer.cancel(k),k=null);if(!h){var f=b.val();a=a&&a.type;"password"===g||d.ngTrim&&"false"===d.ngTrim||(f=R(f));(c.$viewValue!==f||""===f&&c.$$hasNativeValidators)&&c.$setViewValue(f,a)}};if(f.hasEvent("input"))b.on("input",l);else{var m=
function(a,b,c){k||(k=e.defer(function(){k=null;b&&b.value===c||l(a)}))};b.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||m(a,this,this.value)});if(f.hasEvent("paste"))b.on("paste cut",m)}b.on("change",l);if(Wd[g]&&c.$$hasNativeValidators&&g===d.type)b.on("keydown wheel mousedown",function(a){if(!k){var b=this.validity,c=b.badInput,d=b.typeMismatch;k=e.defer(function(){k=null;b.badInput===c&&b.typeMismatch===d||l(a)})}});c.$render=function(){var a=c.$isEmpty(c.$viewValue)?
"":c.$viewValue;b.val()!==a&&b.val(a)}}function Mb(a,b){return function(d,c){var f,e;if(ea(d))return d;if(y(d)){'"'===d.charAt(0)&&'"'===d.charAt(d.length-1)&&(d=d.substring(1,d.length-1));if(Jg.test(d))return new Date(d);a.lastIndex=0;if(f=a.exec(d))return f.shift(),e=c?{yyyy:c.getFullYear(),MM:c.getMonth()+1,dd:c.getDate(),HH:c.getHours(),mm:c.getMinutes(),ss:c.getSeconds(),sss:c.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},q(f,function(a,c){c<b.length&&(e[b[c]]=+a)}),new Date(e.yyyy,
e.MM-1,e.dd,e.HH,e.mm,e.ss||0,1E3*e.sss||0)}return NaN}}function ob(a,b,d,c){return function(f,e,g,h,k,l,m){function n(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function p(a){return u(a)&&!ea(a)?d(a)||void 0:a}xc(f,e,g,h);Sa(f,e,g,h,k,l);var t=h&&h.$options.getOption("timezone"),q;h.$$parserName=a;h.$parsers.push(function(a){if(h.$isEmpty(a))return null;if(b.test(a))return a=d(a,q),t&&(a=Vb(a,t)),a});h.$formatters.push(function(a){if(a&&!ea(a))throw pb("datefmt",a);if(n(a))return(q=a)&&
t&&(q=Vb(q,t,!0)),m("date")(a,c,t);q=null;return""});if(u(g.min)||g.ngMin){var r;h.$validators.min=function(a){return!n(a)||x(r)||d(a)>=r};g.$observe("min",function(a){r=p(a);h.$validate()})}if(u(g.max)||g.ngMax){var s;h.$validators.max=function(a){return!n(a)||x(s)||d(a)<=s};g.$observe("max",function(a){s=p(a);h.$validate()})}}}function xc(a,b,d,c){(c.$$hasNativeValidators=E(b[0].validity))&&c.$parsers.push(function(a){var c=b.prop("validity")||{};return c.badInput||c.typeMismatch?void 0:a})}function Xd(a){a.$$parserName=
"number";a.$parsers.push(function(b){if(a.$isEmpty(b))return null;if(Kg.test(b))return parseFloat(b)});a.$formatters.push(function(b){if(!a.$isEmpty(b)){if(!W(b))throw pb("numfmt",b);b=b.toString()}return b})}function Ta(a){u(a)&&!W(a)&&(a=parseFloat(a));return ga(a)?void 0:a}function yc(a){var b=a.toString(),d=b.indexOf(".");return-1===d?-1<a&&1>a&&(a=/e-(\d+)$/.exec(b))?Number(a[1]):0:b.length-d-1}function Yd(a,b,d){a=Number(a);if((a|0)!==a||(b|0)!==b||(d|0)!==d){var c=Math.max(yc(a),yc(b),yc(d)),
c=Math.pow(10,c);a*=c;b*=c;d*=c}return 0===(a-b)%d}function Zd(a,b,d,c,f){if(u(c)){a=a(c);if(!a.constant)throw pb("constexpr",d,c);return a(b)}return f}function zc(a,b){a="ngClass"+a;return["$animate",function(d){function c(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var f=a[d],m=0;m<b.length;m++)if(f===b[m])continue a;c.push(f)}return c}function f(a){var b=[];return G(a)?(q(a,function(a){b=b.concat(f(a))}),b):y(a)?a.split(" "):E(a)?(q(a,function(a,c){a&&(b=b.concat(c.split(" ")))}),b):a}return{restrict:"AC",
link:function(e,g,h){function k(a){a=l(a,1);h.$addClass(a)}function l(a,b){var c=g.data("$classCounts")||T(),d=[];q(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function m(a,b){var e=c(b,a),f=c(a,b),e=l(e,1),f=l(f,-1);e&&e.length&&d.addClass(g,e);f&&f.length&&d.removeClass(g,f)}function n(a){if(!0===b||(e.$index&1)===b){var c=f(a||[]);if(!p)k(c);else if(!ma(a,p)){var d=f(p);m(d,c)}}p=G(a)?a.map(function(a){return ja(a)}):ja(a)}
var p;e.$watch(h[a],n,!0);h.$observe("class",function(b){n(e.$eval(h[a]))});"ngClass"!==a&&e.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var m=f(e.$eval(h[a]));g===b?k(m):(g=l(m,-1),h.$removeClass(g))}})}}}]}function Nb(a,b,d,c,f,e,g,h,k){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=void 0;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;
this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=void 0;this.$name=k(d.name||"",!1)(a);this.$$parentForm=Lb;this.$options=Ob;this.$$parsedNgModel=f(d.ngModel);this.$$parsedNgModelAssign=this.$$parsedNgModel.assign;this.$$ngModelGet=this.$$parsedNgModel;this.$$ngModelSet=this.$$parsedNgModelAssign;this.$$pendingDebounce=null;this.$$parserValid=void 0;this.$$currentValidationRunId=0;this.$$scope=a;this.$$attr=d;this.$$element=c;this.$$animate=e;this.$$timeout=g;this.$$parse=
f;this.$$q=h;this.$$exceptionHandler=b;Sd(this);Lg(this)}function Lg(a){a.$$scope.$watch(function(){var b=a.$$ngModelGet(a.$$scope);if(b!==a.$modelValue&&(a.$modelValue===a.$modelValue||b===b)){a.$modelValue=a.$$rawModelValue=b;a.$$parserValid=void 0;for(var d=a.$formatters,c=d.length,f=b;c--;)f=d[c](f);a.$viewValue!==f&&(a.$$updateEmptyClasses(f),a.$viewValue=a.$$lastCommittedViewValue=f,a.$render(),a.$$runValidators(a.$modelValue,a.$viewValue,v))}return b})}function Ac(a){this.$$options=a}function $d(a,
b){q(b,function(b,c){u(a[c])||(a[c]=b)})}var Mg=/^\/(.+)\/([a-z]*)$/,va=Object.prototype.hasOwnProperty,L=function(a){return y(a)?a.toLowerCase():a},ub=function(a){return y(a)?a.toUpperCase():a},La,F,na,wa=[].slice,mg=[].splice,Ng=[].push,la=Object.prototype.toString,Fc=Object.getPrototypeOf,Ga=H("ng"),Z=A.angular||(A.angular={}),Yb,qb=0;La=A.document.documentMode;var ga=Number.isNaN||function(a){return a!==a};v.$inject=[];Ya.$inject=[];var G=Array.isArray,ke=/^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array]$/,
R=function(a){return y(a)?a.trim():a},Fd=function(a){return a.replace(/([-()[\]{}+?*.$^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},za=function(){if(!u(za.rules)){var a=A.document.querySelector("[ng-csp]")||A.document.querySelector("[data-ng-csp]");if(a){var b=a.getAttribute("ng-csp")||a.getAttribute("data-ng-csp");za.rules={noUnsafeEval:!b||-1!==b.indexOf("no-unsafe-eval"),noInlineStyle:!b||-1!==b.indexOf("no-inline-style")}}else{a=za;try{new Function(""),b=!1}catch(d){b=!0}a.rules={noUnsafeEval:b,
noInlineStyle:!1}}}return za.rules},rb=function(){if(u(rb.name_))return rb.name_;var a,b,d=Ka.length,c,f;for(b=0;b<d;++b)if(c=Ka[b],a=A.document.querySelector("["+c.replace(":","\\:")+"jq]")){f=a.getAttribute(c+"jq");break}return rb.name_=f},me=/:/g,Ka=["ng-","data-ng-","ng:","x-ng-"],pe=function(a){if(!a.currentScript)return!0;var b=a.currentScript.getAttribute("src"),d=a.createElement("a");d.href=b;if(a.location.origin===d.origin)return!0;switch(d.protocol){case "http:":case "https:":case "ftp:":case "blob:":case "file:":case "data:":return!0;
default:return!1}}(A.document),se=/[A-Z]/g,Nc=!1,Ja=3,xe={full:"1.6.0",major:1,minor:6,dot:0,codeName:"rainbow-tsunami"};U.expando="ng339";var ib=U.cache={},Zf=1;U._data=function(a){return this.cache[a[this.expando]]||{}};var Vf=/-([a-z])/g,Og=/^-ms-/,zb={mouseleave:"mouseout",mouseenter:"mouseover"},$b=H("jqLite"),Yf=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,Zb=/<|&#?\w+;/,Wf=/<([\w:-]+)/,Xf=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,oa={option:[1,'<select multiple="multiple">',
"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};oa.optgroup=oa.option;oa.tbody=oa.tfoot=oa.colgroup=oa.caption=oa.thead;oa.th=oa.td;var dg=A.Node.prototype.contains||function(a){return!!(this.compareDocumentPosition(a)&16)},Na=U.prototype={ready:Zc,toString:function(){var a=[];q(this,function(b){a.push(""+b)});return"["+a.join(", ")+"]"},
eq:function(a){return 0<=a?F(this[a]):F(this[this.length+a])},length:0,push:Ng,sort:[].sort,splice:[].splice},Fb={};q("multiple selected checked disabled readOnly required open".split(" "),function(a){Fb[L(a)]=a});var dd={};q("input select option textarea button form details".split(" "),function(a){dd[a]=!0});var kd={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern",ngStep:"step"};q({data:cc,removeData:hb,hasData:function(a){for(var b in ib[a.ng339])return!0;
return!1},cleanData:function(a){for(var b=0,d=a.length;b<d;b++)hb(a[b])}},function(a,b){U[b]=a});q({data:cc,inheritedData:Db,scope:function(a){return F.data(a,"$scope")||Db(a.parentNode||a,["$isolateScope","$scope"])},isolateScope:function(a){return F.data(a,"$isolateScope")||F.data(a,"$isolateScopeNoTemplate")},controller:ad,injector:function(a){return Db(a,"$injector")},removeAttr:function(a,b){a.removeAttribute(b)},hasClass:Ab,css:function(a,b,d){b=wb(b.replace(Og,"ms-"));if(u(d))a.style[b]=d;
else return a.style[b]},attr:function(a,b,d){var c=a.nodeType;if(c!==Ja&&2!==c&&8!==c&&a.getAttribute){var c=L(b),f=Fb[c];if(u(d))null===d||!1===d&&f?a.removeAttribute(b):a.setAttribute(b,f?c:d);else return a=a.getAttribute(b),f&&null!==a&&(a=c),null===a?void 0:a}},prop:function(a,b,d){if(u(d))a[b]=d;else return a[b]},text:function(){function a(a,d){if(x(d)){var c=a.nodeType;return 1===c||c===Ja?a.textContent:""}a.textContent=d}a.$dv="";return a}(),val:function(a,b){if(x(b)){if(a.multiple&&"select"===
xa(a)){var d=[];q(a.options,function(a){a.selected&&d.push(a.value||a.text)});return d}return a.value}a.value=b},html:function(a,b){if(x(b))return a.innerHTML;xb(a,!0);a.innerHTML=b},empty:bd},function(a,b){U.prototype[b]=function(b,c){var f,e,g=this.length;if(a!==bd&&x(2===a.length&&a!==Ab&&a!==ad?b:c)){if(E(b)){for(f=0;f<g;f++)if(a===cc)a(this[f],b);else for(e in b)a(this[f],e,b[e]);return this}f=a.$dv;g=x(f)?Math.min(g,1):g;for(e=0;e<g;e++){var h=a(this[e],b,c);f=f?f+h:h}return f}for(f=0;f<g;f++)a(this[f],
b,c);return this}});q({removeData:hb,on:function(a,b,d,c){if(u(c))throw $b("onargs");if(Xc(a)){c=yb(a,!0);var f=c.events,e=c.handle;e||(e=c.handle=ag(a,f));c=0<=b.indexOf(" ")?b.split(" "):[b];for(var g=c.length,h=function(b,c,g){var h=f[b];h||(h=f[b]=[],h.specialHandlerWrapper=c,"$destroy"===b||g||a.addEventListener(b,e));h.push(d)};g--;)b=c[g],zb[b]?(h(zb[b],cg),h(b,void 0,!0)):h(b)}},off:$c,one:function(a,b,d){a=F(a);a.on(b,function f(){a.off(b,d);a.off(b,f)});a.on(b,d)},replaceWith:function(a,
b){var d,c=a.parentNode;xb(a);q(new U(b),function(b){d?c.insertBefore(b,d.nextSibling):c.replaceChild(b,a);d=b})},children:function(a){var b=[];q(a.childNodes,function(a){1===a.nodeType&&b.push(a)});return b},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,b){var d=a.nodeType;if(1===d||11===d){b=new U(b);for(var d=0,c=b.length;d<c;d++)a.appendChild(b[d])}},prepend:function(a,b){if(1===a.nodeType){var d=a.firstChild;q(new U(b),function(b){a.insertBefore(b,d)})}},
wrap:function(a,b){var d=F(b).eq(0).clone()[0],c=a.parentNode;c&&c.replaceChild(d,a);d.appendChild(a)},remove:Eb,detach:function(a){Eb(a,!0)},after:function(a,b){var d=a,c=a.parentNode;b=new U(b);for(var f=0,e=b.length;f<e;f++){var g=b[f];c.insertBefore(g,d.nextSibling);d=g}},addClass:Cb,removeClass:Bb,toggleClass:function(a,b,d){b&&q(b.split(" "),function(b){var f=d;x(f)&&(f=!Ab(a,b));(f?Cb:Bb)(a,b)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},
find:function(a,b){return a.getElementsByTagName?a.getElementsByTagName(b):[]},clone:bc,triggerHandler:function(a,b,d){var c,f,e=b.type||b,g=yb(a);if(g=(g=g&&g.events)&&g[e])c={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:v,type:e,target:a},b.type&&(c=Q(c,
b)),b=ja(g),f=d?[c].concat(d):[c],q(b,function(b){c.isImmediatePropagationStopped()||b.apply(a,f)})}},function(a,b){U.prototype[b]=function(b,c,f){for(var e,g=0,h=this.length;g<h;g++)x(e)?(e=a(this[g],b,c,f),u(e)&&(e=F(e))):ac(e,a(this[g],b,c,f));return u(e)?e:this}});U.prototype.bind=U.prototype.on;U.prototype.unbind=U.prototype.off;Pa.prototype={put:function(a,b){this[ka(a,this.nextUid)]=b},get:function(a){return this[ka(a,this.nextUid)]},remove:function(a){var b=this[a=ka(a,this.nextUid)];delete this[a];
return b}};var Tf=[function(){this.$get=[function(){return Pa}]}],fg=/^([^(]+?)=>/,gg=/^[^(]*\(\s*([^)]*)\)/m,Pg=/,/,Qg=/^\s*(_?)(\S+?)\1\s*$/,eg=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,ca=H("$injector");eb.$$annotate=function(a,b,d){var c;if("function"===typeof a){if(!(c=a.$inject)){c=[];if(a.length){if(b)throw y(d)&&d||(d=a.name||hg(a)),ca("strictdi",d);b=ed(a);q(b[1].split(Pg),function(a){a.replace(Qg,function(a,b,d){c.push(d)})})}a.$inject=c}}else G(a)?(b=a.length-1,sb(a[b],"fn"),c=a.slice(0,b)):sb(a,
"fn",!0);return c};var ae=H("$animate"),kf=function(){this.$get=v},lf=function(){var a=new Pa,b=[];this.$get=["$$AnimateRunner","$rootScope",function(d,c){function f(a,b,c){var d=!1;b&&(b=y(b)?b.split(" "):G(b)?b:[],q(b,function(b){b&&(d=!0,a[b]=c)}));return d}function e(){q(b,function(b){var c=a.get(b);if(c){var d=ig(b.attr("class")),e="",f="";q(c,function(a,b){a!==!!d[b]&&(a?e+=(e.length?" ":"")+b:f+=(f.length?" ":"")+b)});q(b,function(a){e&&Cb(a,e);f&&Bb(a,f)});a.remove(b)}});b.length=0}return{enabled:v,
on:v,off:v,pin:v,push:function(g,h,k,l){l&&l();k=k||{};k.from&&g.css(k.from);k.to&&g.css(k.to);if(k.addClass||k.removeClass)if(h=k.addClass,l=k.removeClass,k=a.get(g)||{},h=f(k,h,!0),l=f(k,l,!1),h||l)a.put(g,k),b.push(g),1===b.length&&c.$$postDigest(e);g=new d;g.complete();return g}}}]},hf=["$provide",function(a){var b=this;this.$$registeredAnimations=Object.create(null);this.register=function(d,c){if(d&&"."!==d.charAt(0))throw ae("notcsel",d);var f=d+"-animation";b.$$registeredAnimations[d.substr(1)]=
f;a.factory(f,c)};this.classNameFilter=function(a){if(1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null)&&/(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString()))throw ae("nongcls","ng-animate");return this.$$classNameFilter};this.$get=["$$animateQueue",function(a){function b(a,c,d){if(d){var h;a:{for(h=0;h<d.length;h++){var k=d[h];if(1===k.nodeType){h=k;break a}}h=void 0}!h||h.parentNode||h.previousElementSibling||(d=null)}d?d.after(a):c.prepend(a)}return{on:a.on,
off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.end&&a.end()},enter:function(f,e,g,h){e=e&&F(e);g=g&&F(g);e=e||g.parent();b(f,e,g);return a.push(f,"enter",Aa(h))},move:function(f,e,g,h){e=e&&F(e);g=g&&F(g);e=e||g.parent();b(f,e,g);return a.push(f,"move",Aa(h))},leave:function(b,c){return a.push(b,"leave",Aa(c),function(){b.remove()})},addClass:function(b,c,g){g=Aa(g);g.addClass=jb(g.addclass,c);return a.push(b,"addClass",g)},removeClass:function(b,c,g){g=Aa(g);g.removeClass=jb(g.removeClass,
c);return a.push(b,"removeClass",g)},setClass:function(b,c,g,h){h=Aa(h);h.addClass=jb(h.addClass,c);h.removeClass=jb(h.removeClass,g);return a.push(b,"setClass",h)},animate:function(b,c,g,h,k){k=Aa(k);k.from=k.from?Q(k.from,c):c;k.to=k.to?Q(k.to,g):g;k.tempClasses=jb(k.tempClasses,h||"ng-inline-animate");return a.push(b,"animate",k)}}}]}],nf=function(){this.$get=["$$rAF",function(a){function b(b){d.push(b);1<d.length||a(function(){for(var a=0;a<d.length;a++)d[a]();d=[]})}var d=[];return function(){var a=
!1;b(function(){a=!0});return function(d){a?d():b(d)}}}]},mf=function(){this.$get=["$q","$sniffer","$$animateAsyncRun","$$isDocumentHidden","$timeout",function(a,b,d,c,f){function e(a){this.setHost(a);var b=d();this._doneCallbacks=[];this._tick=function(a){c()?f(a,0,!1):b(a)};this._state=0}e.chain=function(a,b){function c(){if(d===a.length)b(!0);else a[d](function(a){!1===a?b(!1):(d++,c())})}var d=0;c()};e.all=function(a,b){function c(f){e=e&&f;++d===a.length&&b(e)}var d=0,e=!0;q(a,function(a){a.done(c)})};
e.prototype={setHost:function(a){this.host=a||{}},done:function(a){2===this._state?a():this._doneCallbacks.push(a)},progress:v,getPromise:function(){if(!this.promise){var b=this;this.promise=a(function(a,c){b.done(function(b){!1===b?c():a()})})}return this.promise},then:function(a,b){return this.getPromise().then(a,b)},"catch":function(a){return this.getPromise()["catch"](a)},"finally":function(a){return this.getPromise()["finally"](a)},pause:function(){this.host.pause&&this.host.pause()},resume:function(){this.host.resume&&
this.host.resume()},end:function(){this.host.end&&this.host.end();this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel();this._resolve(!1)},complete:function(a){var b=this;0===b._state&&(b._state=1,b._tick(function(){b._resolve(a)}))},_resolve:function(a){2!==this._state&&(q(this._doneCallbacks,function(b){b(a)}),this._doneCallbacks.length=0,this._state=2)}};return e}]},jf=function(){this.$get=["$$rAF","$q","$$AnimateRunner",function(a,b,d){return function(b,f){function e(){a(function(){g.addClass&&
(b.addClass(g.addClass),g.addClass=null);g.removeClass&&(b.removeClass(g.removeClass),g.removeClass=null);g.to&&(b.css(g.to),g.to=null);h||k.complete();h=!0});return k}var g=f||{};g.$$prepared||(g=Fa(g));g.cleanupStyles&&(g.from=g.to=null);g.from&&(b.css(g.from),g.from=null);var h,k=new d;return{start:e,end:e}}}]},da=H("$compile"),gc=new function(){};Pc.$inject=["$provide","$$sanitizeUriProvider"];Hb.prototype.isFirstChange=function(){return this.previousValue===gc};var fd=/^((?:x|data)[:\-_])/i,
lg=/[:\-_]+(.)/g,md=H("$controller"),ld=/^(\S+)(\s+as\s+([\w$]+))?$/,uf=function(){this.$get=["$document",function(a){return function(b){b?!b.nodeType&&b instanceof F&&(b=b[0]):b=a[0].body;return b.offsetWidth+1}}]},nd="application/json",jc={"Content-Type":nd+";charset=utf-8"},og=/^\[|^\{(?!\{)/,pg={"[":/]$/,"{":/}$/},ng=/^\)]\}',?\n/,sd=H("$http"),Ea=Z.$interpolateMinErr=H("$interpolate");Ea.throwNoconcat=function(a){throw Ea("noconcat",a);};Ea.interr=function(a,b){return Ea("interr",a,b.toString())};
var Cf=function(){this.$get=["$window",function(a){function b(a){var b=function(a){b.data=a;b.called=!0};b.id=a;return b}var d=a.angular.callbacks,c={};return{createCallback:function(a){a="_"+(d.$$counter++).toString(36);var e="angular.callbacks."+a,g=b(a);c[e]=d[a]=g;return e},wasCalled:function(a){return c[a].called},getResponse:function(a){return c[a].data},removeCallback:function(a){delete d[c[a].id];delete c[a]}}}]},Rg=/^([^?#]*)(\?([^#]*))?(#(.*))?$/,rg={http:80,https:443,ftp:21},kb=H("$location"),
sg=/^\s*[\\/]{2,}/,Sg={$$absUrl:"",$$html5:!1,$$replace:!1,absUrl:Ib("$$absUrl"),url:function(a){if(x(a))return this.$$url;var b=Rg.exec(a);(b[1]||""===a)&&this.path(decodeURIComponent(b[1]));(b[2]||b[1]||""===a)&&this.search(b[3]||"");this.hash(b[5]||"");return this},protocol:Ib("$$protocol"),host:Ib("$$host"),port:Ib("$$port"),path:wd("$$path",function(a){a=null!==a?a.toString():"";return"/"===a.charAt(0)?a:"/"+a}),search:function(a,b){switch(arguments.length){case 0:return this.$$search;case 1:if(y(a)||
W(a))a=a.toString(),this.$$search=Kc(a);else if(E(a))a=Fa(a,{}),q(a,function(b,c){null==b&&delete a[c]}),this.$$search=a;else throw kb("isrcharg");break;default:x(b)||null===b?delete this.$$search[a]:this.$$search[a]=b}this.$$compose();return this},hash:wd("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};q([vd,nc,mc],function(a){a.prototype=Object.create(Sg);a.prototype.state=function(b){if(!arguments.length)return this.$$state;if(a!==mc||!this.$$html5)throw kb("nostate");
this.$$state=x(b)?null:b;return this}});var Ua=H("$parse"),vg={}.constructor.prototype.valueOf,Pb=T();q("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Pb[a]=!0});var Tg={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},pc=function(a){this.options=a};pc.prototype={constructor:pc,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();
else if(this.isIdentifierStart(this.peekMultichar()))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var b=a+this.peek(),d=b+this.peek(2),c=Pb[b],f=Pb[d];Pb[a]||c||f?(a=f?d:c?b:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,b){return-1!==b.indexOf(a)},peek:function(a){a=
a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdentifierStart:function(a){return this.options.isIdentifierStart?this.options.isIdentifierStart(a,this.codePointAt(a)):this.isValidIdentifierStart(a)},isValidIdentifierStart:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isIdentifierContinue:function(a){return this.options.isIdentifierContinue?
this.options.isIdentifierContinue(a,this.codePointAt(a)):this.isValidIdentifierContinue(a)},isValidIdentifierContinue:function(a,b){return this.isValidIdentifierStart(a,b)||this.isNumber(a)},codePointAt:function(a){return 1===a.length?a.charCodeAt(0):(a.charCodeAt(0)<<10)+a.charCodeAt(1)-56613888},peekMultichar:function(){var a=this.text.charAt(this.index),b=this.peek();if(!b)return a;var d=a.charCodeAt(0),c=b.charCodeAt(0);return 55296<=d&&56319>=d&&56320<=c&&57343>=c?a+b:a},isExpOperator:function(a){return"-"===
a||"+"===a||this.isNumber(a)},throwError:function(a,b,d){d=d||this.index;b=u(b)?"s "+b+"-"+this.index+" ["+this.text.substring(b,d)+"]":" "+d;throw Ua("lexerr",a,b,this.text);},readNumber:function(){for(var a="",b=this.index;this.index<this.text.length;){var d=L(this.text.charAt(this.index));if("."===d||this.isNumber(d))a+=d;else{var c=this.peek();if("e"===d&&this.isExpOperator(c))a+=d;else if(this.isExpOperator(d)&&c&&this.isNumber(c)&&"e"===a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||
c&&this.isNumber(c)||"e"!==a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:b,text:a,constant:!0,value:Number(a)})},readIdent:function(){var a=this.index;for(this.index+=this.peekMultichar().length;this.index<this.text.length;){var b=this.peekMultichar();if(!this.isIdentifierContinue(b))break;this.index+=b.length}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var b=this.index;this.index++;
for(var d="",c=a,f=!1;this.index<this.text.length;){var e=this.text.charAt(this.index),c=c+e;if(f)"u"===e?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d+=Tg[e]||e,f=!1;else if("\\"===e)f=!0;else{if(e===a){this.index++;this.tokens.push({index:b,text:c,constant:!0,value:d});return}d+=e}this.index++}this.throwError("Unterminated quote",b)}};var r=function(a,b){this.lexer=
a;this.options=b};r.Program="Program";r.ExpressionStatement="ExpressionStatement";r.AssignmentExpression="AssignmentExpression";r.ConditionalExpression="ConditionalExpression";r.LogicalExpression="LogicalExpression";r.BinaryExpression="BinaryExpression";r.UnaryExpression="UnaryExpression";r.CallExpression="CallExpression";r.MemberExpression="MemberExpression";r.Identifier="Identifier";r.Literal="Literal";r.ArrayExpression="ArrayExpression";r.Property="Property";r.ObjectExpression="ObjectExpression";
r.ThisExpression="ThisExpression";r.LocalsExpression="LocalsExpression";r.NGValueParameter="NGValueParameter";r.prototype={ast:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.program();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);return a},program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),!this.expect(";"))return{type:r.Program,body:a}},expressionStatement:function(){return{type:r.ExpressionStatement,
expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary();if(this.expect("=")){if(!zd(a))throw Ua("lval");a={type:r.AssignmentExpression,left:a,right:this.assignment(),operator:"="}}return a},ternary:function(){var a=this.logicalOR(),b,d;return this.expect("?")&&(b=this.expression(),this.consume(":"))?(d=this.expression(),{type:r.ConditionalExpression,
test:a,alternate:b,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:r.LogicalExpression,operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=this.equality();this.expect("&&");)a={type:r.LogicalExpression,operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),b;b=this.expect("==","!=","===","!==");)a={type:r.BinaryExpression,operator:b.text,left:a,right:this.relational()};
return a},relational:function(){for(var a=this.additive(),b;b=this.expect("<",">","<=",">=");)a={type:r.BinaryExpression,operator:b.text,left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),b;b=this.expect("+","-");)a={type:r.BinaryExpression,operator:b.text,left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),b;b=this.expect("*","/","%");)a={type:r.BinaryExpression,operator:b.text,left:a,right:this.unary()};return a},
unary:function(){var a;return(a=this.expect("+","-","!"))?{type:r.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.selfReferential.hasOwnProperty(this.peek().text)?a=Fa(this.selfReferential[this.consume().text]):this.options.literals.hasOwnProperty(this.peek().text)?a={type:r.Literal,value:this.options.literals[this.consume().text]}:
this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var b;b=this.expect("(","[",".");)"("===b.text?(a={type:r.CallExpression,callee:a,arguments:this.parseArguments()},this.consume(")")):"["===b.text?(a={type:r.MemberExpression,object:a,property:this.expression(),computed:!0},this.consume("]")):"."===b.text?a={type:r.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");
return a},filter:function(a){a=[a];for(var b={type:r.CallExpression,callee:this.identifier(),arguments:a,filter:!0};this.expect(":");)a.push(this.expression());return b},parseArguments:function(){var a=[];if(")"!==this.peekToken().text){do a.push(this.filterChain());while(this.expect(","))}return a},identifier:function(){var a=this.consume();a.identifier||this.throwError("is not a valid identifier",a);return{type:r.Identifier,name:a.text}},constant:function(){return{type:r.Literal,value:this.consume().value}},
arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");return{type:r.ArrayExpression,elements:a}},object:function(){var a=[],b;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;b={type:r.Property,kind:"init"};this.peek().constant?(b.key=this.constant(),b.computed=!1,this.consume(":"),b.value=this.expression()):this.peek().identifier?(b.key=this.identifier(),b.computed=!1,this.peek(":")?
(this.consume(":"),b.value=this.expression()):b.value=b.key):this.peek("[")?(this.consume("["),b.key=this.expression(),this.consume("]"),b.computed=!0,this.consume(":"),b.value=this.expression()):this.throwError("invalid key",this.peek());a.push(b)}while(this.expect(","))}this.consume("}");return{type:r.ObjectExpression,properties:a}},throwError:function(a,b){throw Ua("syntax",b.text,a,b.index+1,this.text,this.text.substring(b.index));},consume:function(a){if(0===this.tokens.length)throw Ua("ueoe",
this.text);var b=this.expect(a);b||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return b},peekToken:function(){if(0===this.tokens.length)throw Ua("ueoe",this.text);return this.tokens[0]},peek:function(a,b,d,c){return this.peekAhead(0,a,b,d,c)},peekAhead:function(a,b,d,c,f){if(this.tokens.length>a){a=this.tokens[a];var e=a.text;if(e===b||e===d||e===c||e===f||!(b||d||c||f))return a}return!1},expect:function(a,b,d,c){return(a=this.peek(a,b,d,c))?(this.tokens.shift(),a):!1},selfReferential:{"this":{type:r.ThisExpression},
$locals:{type:r.LocalsExpression}}};Cd.prototype={compile:function(a){var b=this;a=this.astBuilder.ast(a);this.state={nextId:0,filters:{},fn:{vars:[],body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]};S(a,b.$filter);var d="",c;this.stage="assign";if(c=Ad(a))this.state.computing="assign",d=this.nextId(),this.recurse(c,d),this.return_(d),d="fn.assign="+this.generateFunction("assign","s,v,l");c=yd(a.body);b.stage="inputs";q(c,function(a,c){var d="fn"+c;b.state[d]={vars:[],body:[],own:{}};b.state.computing=
d;var h=b.nextId();b.recurse(a,h);b.return_(h);b.state.inputs.push(d);a.watchId=c});this.state.computing="fn";this.stage="main";this.recurse(a);d='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+d+this.watchFns()+"return fn;";d=(new Function("$filter","getStringValue","ifDefined","plus",d))(this.$filter,tg,ug,xd);this.state=this.stage=void 0;d.literal=Bd(a);d.constant=a.constant;return d},USE:"use",STRICT:"strict",watchFns:function(){var a=[],
b=this.state.inputs,d=this;q(b,function(b){a.push("var "+b+"="+d.generateFunction(b,"s"))});b.length&&a.push("fn.inputs=["+b.join(",")+"];");return a.join("")},generateFunction:function(a,b){return"function("+b+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=[],b=this;q(this.state.filters,function(d,c){a.push(d+"=$filter("+b.escape(c)+")")});return a.length?"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+
";":""},body:function(a){return this.state[a].body.join("")},recurse:function(a,b,d,c,f,e){var g,h,k=this,l,m,n;c=c||v;if(!e&&u(a.watchId))b=b||this.nextId(),this.if_("i",this.lazyAssign(b,this.computedMember("i",a.watchId)),this.lazyRecurse(a,b,d,c,f,!0));else switch(a.type){case r.Program:q(a.body,function(b,c){k.recurse(b.expression,void 0,void 0,function(a){h=a});c!==a.body.length-1?k.current().body.push(h,";"):k.return_(h)});break;case r.Literal:m=this.escape(a.value);this.assign(b,m);c(b||m);
break;case r.UnaryExpression:this.recurse(a.argument,void 0,void 0,function(a){h=a});m=a.operator+"("+this.ifDefined(h,0)+")";this.assign(b,m);c(m);break;case r.BinaryExpression:this.recurse(a.left,void 0,void 0,function(a){g=a});this.recurse(a.right,void 0,void 0,function(a){h=a});m="+"===a.operator?this.plus(g,h):"-"===a.operator?this.ifDefined(g,0)+a.operator+this.ifDefined(h,0):"("+g+")"+a.operator+"("+h+")";this.assign(b,m);c(m);break;case r.LogicalExpression:b=b||this.nextId();k.recurse(a.left,
b);k.if_("&&"===a.operator?b:k.not(b),k.lazyRecurse(a.right,b));c(b);break;case r.ConditionalExpression:b=b||this.nextId();k.recurse(a.test,b);k.if_(b,k.lazyRecurse(a.alternate,b),k.lazyRecurse(a.consequent,b));c(b);break;case r.Identifier:b=b||this.nextId();d&&(d.context="inputs"===k.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",a.name)+"?l:s"),d.computed=!1,d.name=a.name);k.if_("inputs"===k.stage||k.not(k.getHasOwnProperty("l",a.name)),function(){k.if_("inputs"===k.stage||"s",function(){f&&
1!==f&&k.if_(k.isNull(k.nonComputedMember("s",a.name)),k.lazyAssign(k.nonComputedMember("s",a.name),"{}"));k.assign(b,k.nonComputedMember("s",a.name))})},b&&k.lazyAssign(b,k.nonComputedMember("l",a.name)));c(b);break;case r.MemberExpression:g=d&&(d.context=this.nextId())||this.nextId();b=b||this.nextId();k.recurse(a.object,g,void 0,function(){k.if_(k.notNull(g),function(){a.computed?(h=k.nextId(),k.recurse(a.property,h),k.getStringValue(h),f&&1!==f&&k.if_(k.not(k.computedMember(g,h)),k.lazyAssign(k.computedMember(g,
h),"{}")),m=k.computedMember(g,h),k.assign(b,m),d&&(d.computed=!0,d.name=h)):(f&&1!==f&&k.if_(k.isNull(k.nonComputedMember(g,a.property.name)),k.lazyAssign(k.nonComputedMember(g,a.property.name),"{}")),m=k.nonComputedMember(g,a.property.name),k.assign(b,m),d&&(d.computed=!1,d.name=a.property.name))},function(){k.assign(b,"undefined")});c(b)},!!f);break;case r.CallExpression:b=b||this.nextId();a.filter?(h=k.filter(a.callee.name),l=[],q(a.arguments,function(a){var b=k.nextId();k.recurse(a,b);l.push(b)}),
m=h+"("+l.join(",")+")",k.assign(b,m),c(b)):(h=k.nextId(),g={},l=[],k.recurse(a.callee,h,g,function(){k.if_(k.notNull(h),function(){q(a.arguments,function(b){k.recurse(b,a.constant?void 0:k.nextId(),void 0,function(a){l.push(a)})});m=g.name?k.member(g.context,g.name,g.computed)+"("+l.join(",")+")":h+"("+l.join(",")+")";k.assign(b,m)},function(){k.assign(b,"undefined")});c(b)}));break;case r.AssignmentExpression:h=this.nextId();g={};this.recurse(a.left,void 0,g,function(){k.if_(k.notNull(g.context),
function(){k.recurse(a.right,h);m=k.member(g.context,g.name,g.computed)+a.operator+h;k.assign(b,m);c(b||m)})},1);break;case r.ArrayExpression:l=[];q(a.elements,function(b){k.recurse(b,a.constant?void 0:k.nextId(),void 0,function(a){l.push(a)})});m="["+l.join(",")+"]";this.assign(b,m);c(b||m);break;case r.ObjectExpression:l=[];n=!1;q(a.properties,function(a){a.computed&&(n=!0)});n?(b=b||this.nextId(),this.assign(b,"{}"),q(a.properties,function(a){a.computed?(g=k.nextId(),k.recurse(a.key,g)):g=a.key.type===
r.Identifier?a.key.name:""+a.key.value;h=k.nextId();k.recurse(a.value,h);k.assign(k.member(b,g,a.computed),h)})):(q(a.properties,function(b){k.recurse(b.value,a.constant?void 0:k.nextId(),void 0,function(a){l.push(k.escape(b.key.type===r.Identifier?b.key.name:""+b.key.value)+":"+a)})}),m="{"+l.join(",")+"}",this.assign(b,m));c(b||m);break;case r.ThisExpression:this.assign(b,"s");c(b||"s");break;case r.LocalsExpression:this.assign(b,"l");c(b||"l");break;case r.NGValueParameter:this.assign(b,"v"),c(b||
"v")}},getHasOwnProperty:function(a,b){var d=a+"."+b,c=this.current().own;c.hasOwnProperty(d)||(c[d]=this.nextId(!1,a+"&&("+this.escape(b)+" in "+a+")"));return c[d]},assign:function(a,b){if(a)return this.current().body.push(a,"=",b,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=this.nextId(!0));return this.state.filters[a]},ifDefined:function(a,b){return"ifDefined("+a+","+this.escape(b)+")"},plus:function(a,b){return"plus("+a+","+b+")"},return_:function(a){this.current().body.push("return ",
a,";")},if_:function(a,b,d){if(!0===a)b();else{var c=this.current().body;c.push("if(",a,"){");b();c.push("}");d&&(c.push("else{"),d(),c.push("}"))}},not:function(a){return"!("+a+")"},isNull:function(a){return a+"==null"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,b){var d=/[^$_a-zA-Z0-9]/g;return/^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(b)?a+"."+b:a+'["'+b.replace(d,this.stringEscapeFn)+'"]'},computedMember:function(a,b){return a+"["+b+"]"},member:function(a,b,d){return d?this.computedMember(a,
b):this.nonComputedMember(a,b)},getStringValue:function(a){this.assign(a,"getStringValue("+a+")")},lazyRecurse:function(a,b,d,c,f,e){var g=this;return function(){g.recurse(a,b,d,c,f,e)}},lazyAssign:function(a,b){var d=this;return function(){d.assign(a,b)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(y(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";if(W(a))return a.toString();
if(!0===a)return"true";if(!1===a)return"false";if(null===a)return"null";if("undefined"===typeof a)return"undefined";throw Ua("esc");},nextId:function(a,b){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(b?"="+b:""));return d},current:function(){return this.state[this.state.computing]}};Dd.prototype={compile:function(a){var b=this;a=this.astBuilder.ast(a);S(a,b.$filter);var d,c;if(d=Ad(a))c=this.recurse(d);d=yd(a.body);var f;d&&(f=[],q(d,function(a,c){var d=b.recurse(a);a.input=d;f.push(d);
a.watchId=c}));var e=[];q(a.body,function(a){e.push(b.recurse(a.expression))});d=0===a.body.length?v:1===a.body.length?e[0]:function(a,b){var c;q(e,function(d){c=d(a,b)});return c};c&&(d.assign=function(a,b,d){return c(a,d,b)});f&&(d.inputs=f);d.literal=Bd(a);d.constant=a.constant;return d},recurse:function(a,b,d){var c,f,e=this,g;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case r.Literal:return this.value(a.value,b);case r.UnaryExpression:return f=this.recurse(a.argument),this["unary"+
a.operator](f,b);case r.BinaryExpression:return c=this.recurse(a.left),f=this.recurse(a.right),this["binary"+a.operator](c,f,b);case r.LogicalExpression:return c=this.recurse(a.left),f=this.recurse(a.right),this["binary"+a.operator](c,f,b);case r.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),b);case r.Identifier:return e.identifier(a.name,b,d);case r.MemberExpression:return c=this.recurse(a.object,!1,!!d),a.computed||(f=a.property.name),
a.computed&&(f=this.recurse(a.property)),a.computed?this.computedMember(c,f,b,d):this.nonComputedMember(c,f,b,d);case r.CallExpression:return g=[],q(a.arguments,function(a){g.push(e.recurse(a))}),a.filter&&(f=this.$filter(a.callee.name)),a.filter||(f=this.recurse(a.callee,!0)),a.filter?function(a,c,d,e){for(var n=[],p=0;p<g.length;++p)n.push(g[p](a,c,d,e));a=f.apply(void 0,n,e);return b?{context:void 0,name:void 0,value:a}:a}:function(a,c,d,e){var n=f(a,c,d,e),p;if(null!=n.value){p=[];for(var q=0;q<
g.length;++q)p.push(g[q](a,c,d,e));p=n.value.apply(n.context,p)}return b?{value:p}:p};case r.AssignmentExpression:return c=this.recurse(a.left,!0,1),f=this.recurse(a.right),function(a,d,e,g){var n=c(a,d,e,g);a=f(a,d,e,g);n.context[n.name]=a;return b?{value:a}:a};case r.ArrayExpression:return g=[],q(a.elements,function(a){g.push(e.recurse(a))}),function(a,c,d,e){for(var f=[],p=0;p<g.length;++p)f.push(g[p](a,c,d,e));return b?{value:f}:f};case r.ObjectExpression:return g=[],q(a.properties,function(a){a.computed?
g.push({key:e.recurse(a.key),computed:!0,value:e.recurse(a.value)}):g.push({key:a.key.type===r.Identifier?a.key.name:""+a.key.value,computed:!1,value:e.recurse(a.value)})}),function(a,c,d,e){for(var f={},p=0;p<g.length;++p)g[p].computed?f[g[p].key(a,c,d,e)]=g[p].value(a,c,d,e):f[g[p].key]=g[p].value(a,c,d,e);return b?{value:f}:f};case r.ThisExpression:return function(a){return b?{value:a}:a};case r.LocalsExpression:return function(a,c){return b?{value:c}:c};case r.NGValueParameter:return function(a,
c,d){return b?{value:d}:d}}},"unary+":function(a,b){return function(d,c,f,e){d=a(d,c,f,e);d=u(d)?+d:0;return b?{value:d}:d}},"unary-":function(a,b){return function(d,c,f,e){d=a(d,c,f,e);d=u(d)?-d:-0;return b?{value:d}:d}},"unary!":function(a,b){return function(d,c,f,e){d=!a(d,c,f,e);return b?{value:d}:d}},"binary+":function(a,b,d){return function(c,f,e,g){var h=a(c,f,e,g);c=b(c,f,e,g);h=xd(h,c);return d?{value:h}:h}},"binary-":function(a,b,d){return function(c,f,e,g){var h=a(c,f,e,g);c=b(c,f,e,g);
h=(u(h)?h:0)-(u(c)?c:0);return d?{value:h}:h}},"binary*":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)*b(c,f,e,g);return d?{value:c}:c}},"binary/":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)/b(c,f,e,g);return d?{value:c}:c}},"binary%":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)%b(c,f,e,g);return d?{value:c}:c}},"binary===":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)===b(c,f,e,g);return d?{value:c}:c}},"binary!==":function(a,b,d){return function(c,f,e,g){c=a(c,
f,e,g)!==b(c,f,e,g);return d?{value:c}:c}},"binary==":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)==b(c,f,e,g);return d?{value:c}:c}},"binary!=":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)!=b(c,f,e,g);return d?{value:c}:c}},"binary<":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)<b(c,f,e,g);return d?{value:c}:c}},"binary>":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)>b(c,f,e,g);return d?{value:c}:c}},"binary<=":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,
g)<=b(c,f,e,g);return d?{value:c}:c}},"binary>=":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)>=b(c,f,e,g);return d?{value:c}:c}},"binary&&":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)&&b(c,f,e,g);return d?{value:c}:c}},"binary||":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)||b(c,f,e,g);return d?{value:c}:c}},"ternary?:":function(a,b,d,c){return function(f,e,g,h){f=a(f,e,g,h)?b(f,e,g,h):d(f,e,g,h);return c?{value:f}:f}},value:function(a,b){return function(){return b?{context:void 0,
name:void 0,value:a}:a}},identifier:function(a,b,d){return function(c,f,e,g){c=f&&a in f?f:c;d&&1!==d&&c&&null==c[a]&&(c[a]={});f=c?c[a]:void 0;return b?{context:c,name:a,value:f}:f}},computedMember:function(a,b,d,c){return function(f,e,g,h){var k=a(f,e,g,h),l,m;null!=k&&(l=b(f,e,g,h),l+="",c&&1!==c&&k&&!k[l]&&(k[l]={}),m=k[l]);return d?{context:k,name:l,value:m}:m}},nonComputedMember:function(a,b,d,c){return function(f,e,g,h){f=a(f,e,g,h);c&&1!==c&&f&&null==f[b]&&(f[b]={});e=null!=f?f[b]:void 0;
return d?{context:f,name:b,value:e}:e}},inputs:function(a,b){return function(d,c,f,e){return e?e[b]:a(d,c,f)}}};var qc=function(a,b,d){this.lexer=a;this.$filter=b;this.options=d;this.ast=new r(a,d);this.astCompiler=d.csp?new Dd(this.ast,b):new Cd(this.ast,b)};qc.prototype={constructor:qc,parse:function(a){return this.astCompiler.compile(a)}};var ua=H("$sce"),qa={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},rc=/_([a-z])/g,xg=H("$compile"),ba=A.document.createElement("a"),Hd=
Da(A.location.href);Id.$inject=["$document"];Wc.$inject=["$provide"];var Pd=22,Od=".",tc="0";Jd.$inject=["$locale"];Ld.$inject=["$locale"];var Ig={yyyy:$("FullYear",4,0,!1,!0),yy:$("FullYear",2,0,!0,!0),y:$("FullYear",1,0,!1,!0),MMMM:mb("Month"),MMM:mb("Month",!0),MM:$("Month",2,1),M:$("Month",1,1),LLLL:mb("Month",!1,!0),dd:$("Date",2),d:$("Date",1),HH:$("Hours",2),H:$("Hours",1),hh:$("Hours",2,-12),h:$("Hours",1,-12),mm:$("Minutes",2),m:$("Minutes",1),ss:$("Seconds",2),s:$("Seconds",1),sss:$("Milliseconds",
3),EEEE:mb("Day"),EEE:mb("Day",!0),a:function(a,b){return 12>a.getHours()?b.AMPMS[0]:b.AMPMS[1]},Z:function(a,b,d){a=-1*d;return a=(0<=a?"+":"")+(Jb(Math[0<a?"floor":"ceil"](a/60),2)+Jb(Math.abs(a%60),2))},ww:Rd(2),w:Rd(1),G:uc,GG:uc,GGG:uc,GGGG:function(a,b){return 0>=a.getFullYear()?b.ERANAMES[0]:b.ERANAMES[1]}},Hg=/((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,Gg=/^-?\d+$/;Kd.$inject=["$locale"];var Bg=fa(L),Cg=fa(ub);Md.$inject=["$parse"];var ze=fa({restrict:"E",
compile:function(a,b){if(!b.href&&!b.xlinkHref)return function(a,b){if("a"===b[0].nodeName.toLowerCase()){var f="[object SVGAnimatedString]"===la.call(b.prop("href"))?"xlink:href":"href";b.on("click",function(a){b.attr(f)||a.preventDefault()})}}}}),vb={};q(Fb,function(a,b){function d(a,d,f){a.$watch(f[c],function(a){f.$set(b,!!a)})}if("multiple"!==a){var c=Ca("ng-"+b),f=d;"checked"===a&&(f=function(a,b,f){f.ngModel!==f[c]&&d(a,b,f)});vb[c]=function(){return{restrict:"A",priority:100,link:f}}}});q(kd,
function(a,b){vb[b]=function(){return{priority:100,link:function(a,c,f){if("ngPattern"===b&&"/"===f.ngPattern.charAt(0)&&(c=f.ngPattern.match(Mg))){f.$set("ngPattern",new RegExp(c[1],c[2]));return}a.$watch(f[b],function(a){f.$set(b,a)})}}}});q(["src","srcset","href"],function(a){var b=Ca("ng-"+a);vb[b]=function(){return{priority:99,link:function(d,c,f){var e=a,g=a;"href"===a&&"[object SVGAnimatedString]"===la.call(c.prop("href"))&&(g="xlinkHref",f.$attr[g]="xlink:href",e=null);f.$observe(b,function(b){b?
(f.$set(g,b),La&&e&&c.prop(e,f[g])):"href"===a&&f.$set(g,null)})}}}});var Lb={$addControl:v,$$renameControl:function(a,b){a.$name=b},$removeControl:v,$setValidity:v,$setDirty:v,$setPristine:v,$setSubmitted:v};Kb.$inject=["$element","$attrs","$scope","$animate","$interpolate"];Kb.prototype={$rollbackViewValue:function(){q(this.$$controls,function(a){a.$rollbackViewValue()})},$commitViewValue:function(){q(this.$$controls,function(a){a.$commitViewValue()})},$addControl:function(a){Oa(a.$name,"input");
this.$$controls.push(a);a.$name&&(this[a.$name]=a);a.$$parentForm=this},$$renameControl:function(a,b){var d=a.$name;this[d]===a&&delete this[d];this[b]=a;a.$name=b},$removeControl:function(a){a.$name&&this[a.$name]===a&&delete this[a.$name];q(this.$pending,function(b,d){this.$setValidity(d,null,a)},this);q(this.$error,function(b,d){this.$setValidity(d,null,a)},this);q(this.$$success,function(b,d){this.$setValidity(d,null,a)},this);$a(this.$$controls,a);a.$$parentForm=Lb},$setDirty:function(){this.$$animate.removeClass(this.$$element,
Va);this.$$animate.addClass(this.$$element,Qb);this.$dirty=!0;this.$pristine=!1;this.$$parentForm.$setDirty()},$setPristine:function(){this.$$animate.setClass(this.$$element,Va,Qb+" ng-submitted");this.$dirty=!1;this.$pristine=!0;this.$submitted=!1;q(this.$$controls,function(a){a.$setPristine()})},$setUntouched:function(){q(this.$$controls,function(a){a.$setUntouched()})},$setSubmitted:function(){this.$$animate.addClass(this.$$element,"ng-submitted");this.$submitted=!0;this.$$parentForm.$setSubmitted()}};
Ud({clazz:Kb,set:function(a,b,d){var c=a[b];c?-1===c.indexOf(d)&&c.push(d):a[b]=[d]},unset:function(a,b,d){var c=a[b];c&&($a(c,d),0===c.length&&delete a[b])}});var be=function(a){return["$timeout","$parse",function(b,d){function c(a){return""===a?d('this[""]').assign:d(a).assign||v}return{name:"form",restrict:a?"EAC":"E",require:["form","^^?form"],controller:Kb,compile:function(d,e){d.addClass(Va).addClass(nb);var g=e.name?"name":a&&e.ngForm?"ngForm":!1;return{pre:function(a,d,e,f){var n=f[0];if(!("action"in
e)){var p=function(b){a.$apply(function(){n.$commitViewValue();n.$setSubmitted()});b.preventDefault()};d[0].addEventListener("submit",p);d.on("$destroy",function(){b(function(){d[0].removeEventListener("submit",p)},0,!1)})}(f[1]||n.$$parentForm).$addControl(n);var q=g?c(n.$name):v;g&&(q(a,n),e.$observe(g,function(b){n.$name!==b&&(q(a,void 0),n.$$parentForm.$$renameControl(n,b),q=c(n.$name),q(a,n))}));d.on("$destroy",function(){n.$$parentForm.$removeControl(n);q(a,void 0);Q(n,Lb)})}}}}}]},Ae=be(),
Me=be(!0),Jg=/^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,Ug=/^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,Vg=/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,Kg=/^\s*(-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,ce=/^(\d{4,})-(\d{2})-(\d{2})$/,de=/^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
Bc=/^(\d{4,})-W(\d\d)$/,ee=/^(\d{4,})-(\d\d)$/,fe=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Wd=T();q(["date","datetime-local","month","time","week"],function(a){Wd[a]=!0});var ge={text:function(a,b,d,c,f,e){Sa(a,b,d,c,f,e);wc(c)},date:ob("date",ce,Mb(ce,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":ob("datetimelocal",de,Mb(de,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:ob("time",fe,Mb(fe,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:ob("week",Bc,function(a,b){if(ea(a))return a;
if(y(a)){Bc.lastIndex=0;var d=Bc.exec(a);if(d){var c=+d[1],f=+d[2],e=d=0,g=0,h=0,k=Qd(c),f=7*(f-1);b&&(d=b.getHours(),e=b.getMinutes(),g=b.getSeconds(),h=b.getMilliseconds());return new Date(c,0,k.getDate()+f,d,e,g,h)}}return NaN},"yyyy-Www"),month:ob("month",ee,Mb(ee,["yyyy","MM"]),"yyyy-MM"),number:function(a,b,d,c,f,e){xc(a,b,d,c);Xd(c);Sa(a,b,d,c,f,e);var g,h;if(u(d.min)||d.ngMin)c.$validators.min=function(a){return c.$isEmpty(a)||x(g)||a>=g},d.$observe("min",function(a){g=Ta(a);c.$validate()});
if(u(d.max)||d.ngMax)c.$validators.max=function(a){return c.$isEmpty(a)||x(h)||a<=h},d.$observe("max",function(a){h=Ta(a);c.$validate()});if(u(d.step)||d.ngStep){var k;c.$validators.step=function(a,b){return c.$isEmpty(b)||x(k)||Yd(b,g||0,k)};d.$observe("step",function(a){k=Ta(a);c.$validate()})}},url:function(a,b,d,c,f,e){Sa(a,b,d,c,f,e);wc(c);c.$$parserName="url";c.$validators.url=function(a,b){var d=a||b;return c.$isEmpty(d)||Ug.test(d)}},email:function(a,b,d,c,f,e){Sa(a,b,d,c,f,e);wc(c);c.$$parserName=
"email";c.$validators.email=function(a,b){var d=a||b;return c.$isEmpty(d)||Vg.test(d)}},radio:function(a,b,d,c){var f=!d.ngTrim||"false"!==R(d.ngTrim);x(d.name)&&b.attr("name",++qb);b.on("click",function(a){var g;b[0].checked&&(g=d.value,f&&(g=R(g)),c.$setViewValue(g,a&&a.type))});c.$render=function(){var a=d.value;f&&(a=R(a));b[0].checked=a===c.$viewValue};d.$observe("value",c.$render)},range:function(a,b,d,c,f,e){function g(a,c){b.attr(a,d[a]);d.$observe(a,c)}function h(a){n=Ta(a);ga(c.$modelValue)||
(m?(a=b.val(),n>a&&(a=n,b.val(a)),c.$setViewValue(a)):c.$validate())}function k(a){p=Ta(a);ga(c.$modelValue)||(m?(a=b.val(),p<a&&(b.val(p),a=p<n?n:p),c.$setViewValue(a)):c.$validate())}function l(a){q=Ta(a);ga(c.$modelValue)||(m&&c.$viewValue!==b.val()?c.$setViewValue(b.val()):c.$validate())}xc(a,b,d,c);Xd(c);Sa(a,b,d,c,f,e);var m=c.$$hasNativeValidators&&"range"===b[0].type,n=m?0:void 0,p=m?100:void 0,q=m?1:void 0,r=b[0].validity;a=u(d.min);f=u(d.max);e=u(d.step);var v=c.$render;c.$render=m&&u(r.rangeUnderflow)&&
u(r.rangeOverflow)?function(){v();c.$setViewValue(b.val())}:v;a&&(c.$validators.min=m?function(){return!0}:function(a,b){return c.$isEmpty(b)||x(n)||b>=n},g("min",h));f&&(c.$validators.max=m?function(){return!0}:function(a,b){return c.$isEmpty(b)||x(p)||b<=p},g("max",k));e&&(c.$validators.step=m?function(){return!r.stepMismatch}:function(a,b){return c.$isEmpty(b)||x(q)||Yd(b,n||0,q)},g("step",l))},checkbox:function(a,b,d,c,f,e,g,h){var k=Zd(h,a,"ngTrueValue",d.ngTrueValue,!0),l=Zd(h,a,"ngFalseValue",
d.ngFalseValue,!1);b.on("click",function(a){c.$setViewValue(b[0].checked,a&&a.type)});c.$render=function(){b[0].checked=c.$viewValue};c.$isEmpty=function(a){return!1===a};c.$formatters.push(function(a){return ma(a,k)});c.$parsers.push(function(a){return a?k:l})},hidden:v,button:v,submit:v,reset:v,file:v},Qc=["$browser","$sniffer","$filter","$parse",function(a,b,d,c){return{restrict:"E",require:["?ngModel"],link:{pre:function(f,e,g,h){h[0]&&(ge[L(g.type)]||ge.text)(f,e,g,h[0],b,a,d,c)}}}}],Wg=/^(true|false|\d+)$/,
df=function(){return{restrict:"A",priority:100,compile:function(a,b){return Wg.test(b.ngValue)?function(a,b,f){a=a.$eval(f.ngValue);b.prop("value",a);f.$set("value",a)}:function(a,b,f){a.$watch(f.ngValue,function(a){b.prop("value",a);f.$set("value",a)})}}}},Ee=["$compile",function(a){return{restrict:"AC",compile:function(b){a.$$addBindingClass(b);return function(b,c,f){a.$$addBindingInfo(c,f.ngBind);c=c[0];b.$watch(f.ngBind,function(a){c.textContent=Xb(a)})}}}}],Ge=["$interpolate","$compile",function(a,
b){return{compile:function(d){b.$$addBindingClass(d);return function(c,d,e){c=a(d.attr(e.$attr.ngBindTemplate));b.$$addBindingInfo(d,c.expressions);d=d[0];e.$observe("ngBindTemplate",function(a){d.textContent=x(a)?"":a})}}}}],Fe=["$sce","$parse","$compile",function(a,b,d){return{restrict:"A",compile:function(c,f){var e=b(f.ngBindHtml),g=b(f.ngBindHtml,function(b){return a.valueOf(b)});d.$$addBindingClass(c);return function(b,c,f){d.$$addBindingInfo(c,f.ngBindHtml);b.$watch(g,function(){var d=e(b);
c.html(a.getTrustedHtml(d)||"")})}}}}],cf=fa({restrict:"A",require:"ngModel",link:function(a,b,d,c){c.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),He=zc("",!0),Je=zc("Odd",0),Ie=zc("Even",1),Ke=Ra({compile:function(a,b){b.$set("ngCloak",void 0);a.removeClass("ng-cloak")}}),Le=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],Vc={},Xg={blur:!0,focus:!0};q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
function(a){var b=Ca("ng-"+a);Vc[b]=["$parse","$rootScope",function(d,c){return{restrict:"A",compile:function(f,e){var g=d(e[b],null,!0);return function(b,d){d.on(a,function(d){var e=function(){g(b,{$event:d})};Xg[a]&&c.$$phase?b.$evalAsync(e):b.$apply(e)})}}}}]});var Oe=["$animate","$compile",function(a,b){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(d,c,f,e,g){var h,k,l;d.$watch(f.ngIf,function(d){d?k||g(function(d,e){k=e;d[d.length++]=
b.$$createComment("end ngIf",f.ngIf);h={clone:d};a.enter(d,c.parent(),c)}):(l&&(l.remove(),l=null),k&&(k.$destroy(),k=null),h&&(l=tb(h.clone),a.leave(l).done(function(a){!1!==a&&(l=null)}),h=null))})}}}],Pe=["$templateRequest","$anchorScroll","$animate",function(a,b,d){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:Z.noop,compile:function(c,f){var e=f.ngInclude||f.src,g=f.onload||"",h=f.autoscroll;return function(c,f,m,n,p){var q=0,r,v,s,x=function(){v&&(v.remove(),
v=null);r&&(r.$destroy(),r=null);s&&(d.leave(s).done(function(a){!1!==a&&(v=null)}),v=s,s=null)};c.$watch(e,function(e){var m=function(a){!1===a||!u(h)||h&&!c.$eval(h)||b()},v=++q;e?(a(e,!0).then(function(a){if(!c.$$destroyed&&v===q){var b=c.$new();n.template=a;a=p(b,function(a){x();d.enter(a,null,f).done(m)});r=b;s=a;r.$emit("$includeContentLoaded",e);c.$eval(g)}},function(){c.$$destroyed||v!==q||(x(),c.$emit("$includeContentError",e))}),c.$emit("$includeContentRequested",e)):(x(),n.template=null)})}}}}],
ff=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(b,d,c,f){la.call(d[0]).match(/SVG/)?(d.empty(),a(Yc(f.template,A.document).childNodes)(b,function(a){d.append(a)},{futureParentElement:d})):(d.html(f.template),a(d.contents())(b))}}}],Qe=Ra({priority:450,compile:function(){return{pre:function(a,b,d){a.$eval(d.ngInit)}}}}),bf=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,b,d,c){var f=d.ngList||", ",e="false"!==d.ngTrim,g=
e?R(f):f;c.$parsers.push(function(a){if(!x(a)){var b=[];a&&q(a.split(g),function(a){a&&b.push(e?R(a):a)});return b}});c.$formatters.push(function(a){if(G(a))return a.join(f)});c.$isEmpty=function(a){return!a||!a.length}}}},nb="ng-valid",Td="ng-invalid",Va="ng-pristine",Qb="ng-dirty",pb=H("ngModel");Nb.$inject="$scope $exceptionHandler $attrs $element $parse $animate $timeout $q $interpolate".split(" ");Nb.prototype={$$initGetterSetters:function(){if(this.$options.getOption("getterSetter")){var a=
this.$$parse(this.$$attr.ngModel+"()"),b=this.$$parse(this.$$attr.ngModel+"($$$p)");this.$$ngModelGet=function(b){var c=this.$$parsedNgModel(b);B(c)&&(c=a(b));return c};this.$$ngModelSet=function(a,c){B(this.$$parsedNgModel(a))?b(a,{$$$p:c}):this.$$parsedNgModelAssign(a,c)}}else if(!this.$$parsedNgModel.assign)throw pb("nonassign",this.$$attr.ngModel,ya(this.$$element));},$render:v,$isEmpty:function(a){return x(a)||""===a||null===a||a!==a},$$updateEmptyClasses:function(a){this.$isEmpty(a)?(this.$$animate.removeClass(this.$$element,
"ng-not-empty"),this.$$animate.addClass(this.$$element,"ng-empty")):(this.$$animate.removeClass(this.$$element,"ng-empty"),this.$$animate.addClass(this.$$element,"ng-not-empty"))},$setPristine:function(){this.$dirty=!1;this.$pristine=!0;this.$$animate.removeClass(this.$$element,Qb);this.$$animate.addClass(this.$$element,Va)},$setDirty:function(){this.$dirty=!0;this.$pristine=!1;this.$$animate.removeClass(this.$$element,Va);this.$$animate.addClass(this.$$element,Qb);this.$$parentForm.$setDirty()},
$setUntouched:function(){this.$touched=!1;this.$untouched=!0;this.$$animate.setClass(this.$$element,"ng-untouched","ng-touched")},$setTouched:function(){this.$touched=!0;this.$untouched=!1;this.$$animate.setClass(this.$$element,"ng-touched","ng-untouched")},$rollbackViewValue:function(){this.$$timeout.cancel(this.$$pendingDebounce);this.$viewValue=this.$$lastCommittedViewValue;this.$render()},$validate:function(){if(!ga(this.$modelValue)){var a=this.$$lastCommittedViewValue,b=this.$$rawModelValue,
d=this.$valid,c=this.$modelValue,f=this.$options.getOption("allowInvalid"),e=this;this.$$runValidators(b,a,function(a){f||d===a||(e.$modelValue=a?b:void 0,e.$modelValue!==c&&e.$$writeModelToScope())})}},$$runValidators:function(a,b,d){function c(){var c=!0;q(k.$validators,function(d,f){var g=Boolean(d(a,b));c=c&&g;e(f,g)});return c?!0:(q(k.$asyncValidators,function(a,b){e(b,null)}),!1)}function f(){var c=[],d=!0;q(k.$asyncValidators,function(f,g){var h=f(a,b);if(!h||!B(h.then))throw pb("nopromise",
h);e(g,void 0);c.push(h.then(function(){e(g,!0)},function(){d=!1;e(g,!1)}))});c.length?k.$$q.all(c).then(function(){g(d)},v):g(!0)}function e(a,b){h===k.$$currentValidationRunId&&k.$setValidity(a,b)}function g(a){h===k.$$currentValidationRunId&&d(a)}this.$$currentValidationRunId++;var h=this.$$currentValidationRunId,k=this;(function(){var a=k.$$parserName||"parse";if(x(k.$$parserValid))e(a,null);else return k.$$parserValid||(q(k.$validators,function(a,b){e(b,null)}),q(k.$asyncValidators,function(a,
b){e(b,null)})),e(a,k.$$parserValid),k.$$parserValid;return!0})()?c()?f():g(!1):g(!1)},$commitViewValue:function(){var a=this.$viewValue;this.$$timeout.cancel(this.$$pendingDebounce);if(this.$$lastCommittedViewValue!==a||""===a&&this.$$hasNativeValidators)this.$$updateEmptyClasses(a),this.$$lastCommittedViewValue=a,this.$pristine&&this.$setDirty(),this.$$parseAndValidate()},$$parseAndValidate:function(){var a=this.$$lastCommittedViewValue,b=this;if(this.$$parserValid=x(a)?void 0:!0)for(var d=0;d<
this.$parsers.length;d++)if(a=this.$parsers[d](a),x(a)){this.$$parserValid=!1;break}ga(this.$modelValue)&&(this.$modelValue=this.$$ngModelGet(this.$$scope));var c=this.$modelValue,f=this.$options.getOption("allowInvalid");this.$$rawModelValue=a;f&&(this.$modelValue=a,b.$modelValue!==c&&b.$$writeModelToScope());this.$$runValidators(a,this.$$lastCommittedViewValue,function(d){f||(b.$modelValue=d?a:void 0,b.$modelValue!==c&&b.$$writeModelToScope())})},$$writeModelToScope:function(){this.$$ngModelSet(this.$$scope,
this.$modelValue);q(this.$viewChangeListeners,function(a){try{a()}catch(b){this.$$exceptionHandler(b)}},this)},$setViewValue:function(a,b){this.$viewValue=a;this.$options.getOption("updateOnDefault")&&this.$$debounceViewValueCommit(b)},$$debounceViewValueCommit:function(a){var b=this.$options.getOption("debounce");W(b[a])?b=b[a]:W(b["default"])&&(b=b["default"]);this.$$timeout.cancel(this.$$pendingDebounce);var d=this;0<b?this.$$pendingDebounce=this.$$timeout(function(){d.$commitViewValue()},b):this.$$scope.$root.$$phase?
this.$commitViewValue():this.$$scope.$apply(function(){d.$commitViewValue()})}};Ud({clazz:Nb,set:function(a,b){a[b]=!0},unset:function(a,b){delete a[b]}});var af=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:Nb,priority:1,compile:function(b){b.addClass(Va).addClass("ng-untouched").addClass(nb);return{pre:function(a,b,f,e){var g=e[0];b=e[1]||g.$$parentForm;if(e=e[2])g.$options=e.$options;g.$$initGetterSetters();b.$addControl(g);f.$observe("name",
function(a){g.$name!==a&&g.$$parentForm.$$renameControl(g,a)});a.$on("$destroy",function(){g.$$parentForm.$removeControl(g)})},post:function(b,c,f,e){function g(){h.$setTouched()}var h=e[0];if(h.$options.getOption("updateOn"))c.on(h.$options.getOption("updateOn"),function(a){h.$$debounceViewValueCommit(a&&a.type)});c.on("blur",function(){h.$touched||(a.$$phase?b.$evalAsync(g):b.$apply(g))})}}}}}],Ob,Yg=/(\s+|^)default(\s+|$)/;Ac.prototype={getOption:function(a){return this.$$options[a]},createChild:function(a){var b=
!1;a=Q({},a);q(a,function(d,c){"$inherit"===d?"*"===c?b=!0:(a[c]=this.$$options[c],"updateOn"===c&&(a.updateOnDefault=this.$$options.updateOnDefault)):"updateOn"===c&&(a.updateOnDefault=!1,a[c]=R(d.replace(Yg,function(){a.updateOnDefault=!0;return" "})))},this);b&&(delete a["*"],$d(a,this.$$options));$d(a,Ob.$$options);return new Ac(a)}};Ob=new Ac({updateOn:"",updateOnDefault:!0,debounce:0,getterSetter:!1,allowInvalid:!1,timezone:null});var ef=function(){return{restrict:"A",priority:10,require:["ngModelOptions",
"?^^ngModelOptions"],controller:function(){},link:{pre:function(a,b,d,c){c[0].$options=(c[1]?c[1].$options:Ob).createChild(a.$eval(d.ngModelOptions))}}}},Re=Ra({terminal:!0,priority:1E3}),Zg=H("ngOptions"),$g=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([$\w][$\w]*)|(?:\(\s*([$\w][$\w]*)\s*,\s*([$\w][$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,Ze=["$compile","$document","$parse",function(a,b,d){function c(a,
b,c){function e(a,b,c,d,f){this.selectValue=a;this.viewValue=b;this.label=c;this.group=d;this.disabled=f}function f(a){var b;if(!q&&ta(a))b=a;else{b=[];for(var c in a)a.hasOwnProperty(c)&&"$"!==c.charAt(0)&&b.push(c)}return b}var n=a.match($g);if(!n)throw Zg("iexp",a,ya(b));var p=n[5]||n[7],q=n[6];a=/ as /.test(n[0])&&n[1];var r=n[9];b=d(n[2]?n[1]:p);var v=a&&d(a)||b,s=r&&d(r),u=r?function(a,b){return s(c,b)}:function(a){return ka(a)},w=function(a,b){return u(a,B(a,b))},x=d(n[2]||n[1]),A=d(n[3]||
""),D=d(n[4]||""),K=d(n[8]),y={},B=q?function(a,b){y[q]=b;y[p]=a;return y}:function(a){y[p]=a;return y};return{trackBy:r,getTrackByValue:w,getWatchables:d(K,function(a){var b=[];a=a||[];for(var d=f(a),e=d.length,g=0;g<e;g++){var h=a===d?g:d[g],l=a[h],h=B(l,h),l=u(l,h);b.push(l);if(n[2]||n[1])l=x(c,h),b.push(l);n[4]&&(h=D(c,h),b.push(h))}return b}),getOptions:function(){for(var a=[],b={},d=K(c)||[],g=f(d),h=g.length,n=0;n<h;n++){var p=d===g?n:g[n],q=B(d[p],p),s=v(c,q),p=u(s,q),t=x(c,q),y=A(c,q),q=
D(c,q),s=new e(p,s,t,y,q);a.push(s);b[p]=s}return{items:a,selectValueMap:b,getOptionFromViewValue:function(a){return b[w(a)]},getViewValueFromOption:function(a){return r?Fa(a.viewValue):a.viewValue}}}}}var f=A.document.createElement("option"),e=A.document.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","ngModel"],link:{pre:function(a,b,c,d){d[0].registerOption=v},post:function(d,h,k,l){function m(a,b){a.element=b;b.disabled=a.disabled;a.label!==b.label&&(b.label=a.label,
b.textContent=a.label);b.value=a.selectValue}function n(){var a=w&&p.readValue();if(w)for(var b=w.items.length-1;0<=b;b--){var c=w.items[b];u(c.group)?Eb(c.element.parentNode):Eb(c.element)}w=y.getOptions();var d={};A&&h.prepend(p.emptyOption);w.items.forEach(function(a){var b;if(u(a.group)){b=d[a.group];b||(b=e.cloneNode(!1),B.appendChild(b),b.label=null===a.group?"null":a.group,d[a.group]=b);var c=f.cloneNode(!1)}else b=B,c=f.cloneNode(!1);b.appendChild(c);m(a,c)});h[0].appendChild(B);r.$render();
r.$isEmpty(a)||(b=p.readValue(),(y.trackBy||v?ma(a,b):a===b)||(r.$setViewValue(b),r.$render()))}var p=l[0],r=l[1],v=k.multiple;l=0;for(var x=h.children(),s=x.length;l<s;l++)if(""===x[l].value){p.hasEmptyOption=!0;p.emptyOption=x.eq(l);break}var A=!!p.emptyOption;F(f.cloneNode(!1)).val("?");var w,y=c(k.ngOptions,h,d),B=b[0].createDocumentFragment();p.generateUnknownOptionValue=function(a){return"?"};v?(p.writeValue=function(a){w.items.forEach(function(a){a.element.selected=!1});a&&a.forEach(function(a){if(a=
w.getOptionFromViewValue(a))a.element.selected=!0})},p.readValue=function(){var a=h.val()||[],b=[];q(a,function(a){(a=w.selectValueMap[a])&&!a.disabled&&b.push(w.getViewValueFromOption(a))});return b},y.trackBy&&d.$watchCollection(function(){if(G(r.$viewValue))return r.$viewValue.map(function(a){return y.getTrackByValue(a)})},function(){r.$render()})):(p.writeValue=function(a){var b=w.selectValueMap[h.val()],c=w.getOptionFromViewValue(a);b&&b.element.removeAttribute("selected");c?(h[0].value!==c.selectValue&&
(p.removeUnknownOption(),p.unselectEmptyOption(),h[0].value=c.selectValue,c.element.selected=!0),c.element.setAttribute("selected","selected")):A?p.selectEmptyOption():p.unknownOption.parent().length?p.updateUnknownOption(a):p.renderUnknownOption(a)},p.readValue=function(){var a=w.selectValueMap[h.val()];return a&&!a.disabled?(p.unselectEmptyOption(),p.removeUnknownOption(),w.getViewValueFromOption(a)):null},y.trackBy&&d.$watch(function(){return y.getTrackByValue(r.$viewValue)},function(){r.$render()}));
A&&(p.emptyOption.remove(),a(p.emptyOption)(d),8===p.emptyOption[0].nodeType?(p.hasEmptyOption=!1,p.registerOption=function(a,b){""===b.val()&&(p.hasEmptyOption=!0,p.emptyOption=b,p.emptyOption.removeClass("ng-scope"),r.$render(),b.on("$destroy",function(){p.hasEmptyOption=!1;p.emptyOption=void 0}))}):p.emptyOption.removeClass("ng-scope"));h.empty();n();d.$watchCollection(y.getWatchables,n)}}}}],Se=["$locale","$interpolate","$log",function(a,b,d){var c=/{}/g,f=/^when(Minus)?(.+)$/;return{link:function(e,
g,h){function k(a){g.text(a||"")}var l=h.count,m=h.$attr.when&&g.attr(h.$attr.when),n=h.offset||0,p=e.$eval(m)||{},r={},u=b.startSymbol(),y=b.endSymbol(),s=u+l+"-"+n+y,A=Z.noop,w;q(h,function(a,b){var c=f.exec(b);c&&(c=(c[1]?"-":"")+L(c[2]),p[c]=g.attr(h.$attr[b]))});q(p,function(a,d){r[d]=b(a.replace(c,s))});e.$watch(l,function(b){var c=parseFloat(b),f=ga(c);f||c in p||(c=a.pluralCat(c-n));c===w||f&&ga(w)||(A(),f=r[c],x(f)?(null!=b&&d.debug("ngPluralize: no rule defined for '"+c+"' in "+m),A=v,k()):
A=e.$watch(f,k),w=c)})}}}],Te=["$parse","$animate","$compile",function(a,b,d){var c=H("ngRepeat"),f=function(a,b,c,d,f,m,n){a[c]=d;f&&(a[f]=m);a.$index=b;a.$first=0===b;a.$last=b===n-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(b&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(e,g){var h=g.ngRepeat,k=d.$$createComment("end ngRepeat",h),l=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
if(!l)throw c("iexp",h);var m=l[1],n=l[2],p=l[3],r=l[4],l=m.match(/^(?:(\s*[$\w]+)|\(\s*([$\w]+)\s*,\s*([$\w]+)\s*\))$/);if(!l)throw c("iidexp",m);var v=l[3]||l[1],u=l[2];if(p&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(p)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(p)))throw c("badident",p);var s,x,w,A,y={$id:ka};r?s=a(r):(w=function(a,b){return ka(b)},A=function(a){return a});return function(a,d,e,g,l){s&&(x=function(b,c,d){u&&(y[u]=b);y[v]=c;y.$index=
d;return s(a,y)});var m=T();a.$watchCollection(n,function(e){var g,n,r=d[0],s,t=T(),y,B,F,E,G,H,L;p&&(a[p]=e);if(ta(e))G=e,n=x||w;else for(L in n=x||A,G=[],e)va.call(e,L)&&"$"!==L.charAt(0)&&G.push(L);y=G.length;L=Array(y);for(g=0;g<y;g++)if(B=e===G?g:G[g],F=e[B],E=n(B,F,g),m[E])H=m[E],delete m[E],t[E]=H,L[g]=H;else{if(t[E])throw q(L,function(a){a&&a.scope&&(m[a.id]=a)}),c("dupes",h,E,F);L[g]={id:E,scope:void 0,clone:void 0};t[E]=!0}for(s in m){H=m[s];E=tb(H.clone);b.leave(E);if(E[0].parentNode)for(g=
0,n=E.length;g<n;g++)E[g].$$NG_REMOVED=!0;H.scope.$destroy()}for(g=0;g<y;g++)if(B=e===G?g:G[g],F=e[B],H=L[g],H.scope){s=r;do s=s.nextSibling;while(s&&s.$$NG_REMOVED);H.clone[0]!==s&&b.move(tb(H.clone),null,r);r=H.clone[H.clone.length-1];f(H.scope,g,v,F,u,B,y)}else l(function(a,c){H.scope=c;var d=k.cloneNode(!1);a[a.length++]=d;b.enter(a,null,r);r=d;H.clone=a;t[H.id]=H;f(H.scope,g,v,F,u,B,y)});m=t})}}}}],Ue=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngShow,
function(b){a[b?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Ne=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngHide,function(b){a[b?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Ve=Ra(function(a,b,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&q(d,function(a,c){b.css(c,"")});a&&b.css(a)},!0)}),We=["$animate","$compile",function(a,b){return{require:"ngSwitch",controller:["$scope",function(){this.cases=
{}}],link:function(d,c,f,e){var g=[],h=[],k=[],l=[],m=function(a,b){return function(c){!1!==c&&a.splice(b,1)}};d.$watch(f.ngSwitch||f.on,function(c){for(var d,f;k.length;)a.cancel(k.pop());d=0;for(f=l.length;d<f;++d){var r=tb(h[d].clone);l[d].$destroy();(k[d]=a.leave(r)).done(m(k,d))}h.length=0;l.length=0;(g=e.cases["!"+c]||e.cases["?"])&&q(g,function(c){c.transclude(function(d,e){l.push(e);var f=c.element;d[d.length++]=b.$$createComment("end ngSwitchWhen");h.push({clone:d});a.enter(d,f.parent(),
f)})})})}}}],Xe=Ra({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,f){a=d.ngSwitchWhen.split(d.ngSwitchWhenSeparator).sort().filter(function(a,b,c){return c[b-1]!==a});q(a,function(a){c.cases["!"+a]=c.cases["!"+a]||[];c.cases["!"+a].push({transclude:f,element:b})})}}),Ye=Ra({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,f){c.cases["?"]=c.cases["?"]||[];c.cases["?"].push({transclude:f,element:b})}}),ah=H("ngTransclude"),
$e=["$compile",function(a){return{restrict:"EAC",terminal:!0,compile:function(b){var d=a(b.contents());b.empty();return function(a,b,e,g,h){function k(){d(a,function(a){b.append(a)})}if(!h)throw ah("orphan",ya(b));e.ngTransclude===e.$attr.ngTransclude&&(e.ngTransclude="");e=e.ngTransclude||e.ngTranscludeSlot;h(function(a,c){var d;if(d=a.length)a:{d=0;for(var e=a.length;d<e;d++){var g=a[d];if(g.nodeType!==Ja||g.nodeValue.trim()){d=!0;break a}}d=void 0}d?b.append(a):(k(),c.$destroy())},null,e);e&&!h.isSlotFilled(e)&&
k()}}}}],Be=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(b,d){"text/ng-template"===d.type&&a.put(d.id,b[0].text)}}}],bh={$setViewValue:v,$render:v},ch=["$element","$scope",function(a,b){function d(){h||(h=!0,b.$$postDigest(function(){h=!1;e.ngModelCtrl.$render()}))}function c(a){k||(k=!0,b.$$postDigest(function(){b.$$destroyed||(k=!1,e.ngModelCtrl.$setViewValue(e.readValue()),a&&e.ngModelCtrl.$render())}))}function f(a){a.prop("selected",!0);a.attr("selected",!0)}
var e=this,g=new Pa;e.selectValueMap={};e.ngModelCtrl=bh;e.multiple=!1;e.unknownOption=F(A.document.createElement("option"));e.hasEmptyOption=!1;e.emptyOption=void 0;e.renderUnknownOption=function(b){b=e.generateUnknownOptionValue(b);e.unknownOption.val(b);a.prepend(e.unknownOption);f(e.unknownOption);a.val(b)};e.updateUnknownOption=function(b){b=e.generateUnknownOptionValue(b);e.unknownOption.val(b);f(e.unknownOption);a.val(b)};e.generateUnknownOptionValue=function(a){return"? "+ka(a)+" ?"};e.removeUnknownOption=
function(){e.unknownOption.parent()&&e.unknownOption.remove()};e.selectEmptyOption=function(){e.emptyOption&&(a.val(""),f(e.emptyOption))};e.unselectEmptyOption=function(){e.hasEmptyOption&&e.emptyOption.removeAttr("selected")};b.$on("$destroy",function(){e.renderUnknownOption=v});e.readValue=function(){var b=a.val(),b=b in e.selectValueMap?e.selectValueMap[b]:b;return e.hasOption(b)?b:null};e.writeValue=function(b){var c=a[0].options[a[0].selectedIndex];c&&c.removeAttribute("selected");e.hasOption(b)?
(e.removeUnknownOption(),c=ka(b),a.val(c in e.selectValueMap?c:b),f(F(a[0].options[a[0].selectedIndex]))):null==b&&e.emptyOption?(e.removeUnknownOption(),e.selectEmptyOption()):e.unknownOption.parent().length?e.updateUnknownOption(b):e.renderUnknownOption(b)};e.addOption=function(a,b){if(8!==b[0].nodeType){Oa(a,'"option value"');""===a&&(e.hasEmptyOption=!0,e.emptyOption=b);var c=g.get(a)||0;g.put(a,c+1);d()}};e.removeOption=function(a){var b=g.get(a);b&&(1===b?(g.remove(a),""===a&&(e.hasEmptyOption=
!1,e.emptyOption=void 0)):g.put(a,b-1))};e.hasOption=function(a){return!!g.get(a)};var h=!1,k=!1;e.registerOption=function(a,b,d,f,g){if(d.$attr.ngValue){var h,k=NaN;d.$observe("value",function(a){var d,f=b.prop("selected");u(k)&&(e.removeOption(h),delete e.selectValueMap[k],d=!0);k=ka(a);h=a;e.selectValueMap[k]=a;e.addOption(a,b);b.attr("value",k);d&&f&&c()})}else f?d.$observe("value",function(a){e.readValue();var d,f=b.prop("selected");u(h)&&(e.removeOption(h),d=!0);h=a;e.addOption(a,b);d&&f&&c()}):
g?a.$watch(g,function(a,f){d.$set("value",a);var g=b.prop("selected");f!==a&&e.removeOption(f);e.addOption(a,b);f&&g&&c()}):e.addOption(d.value,b);d.$observe("disabled",function(a){if("true"===a||a&&b.prop("selected"))e.multiple?c(!0):(e.ngModelCtrl.$setViewValue(null),e.ngModelCtrl.$render())});b.on("$destroy",function(){var a=e.readValue(),b=d.value;e.removeOption(b);e.ngModelCtrl.$render();(e.multiple&&a&&-1!==a.indexOf(b)||a===b)&&c(!0)})}}],Ce=function(){return{restrict:"E",require:["select",
"?ngModel"],controller:ch,priority:1,link:{pre:function(a,b,d,c){var f=c[0],e=c[1];if(e){if(f.ngModelCtrl=e,b.on("change",function(){f.removeUnknownOption();a.$apply(function(){e.$setViewValue(f.readValue())})}),d.multiple){f.multiple=!0;f.readValue=function(){var a=[];q(b.find("option"),function(b){b.selected&&!b.disabled&&(b=b.value,a.push(b in f.selectValueMap?f.selectValueMap[b]:b))});return a};f.writeValue=function(a){var c=new Pa(a);q(b.find("option"),function(a){a.selected=u(c.get(a.value))||
u(c.get(f.selectValueMap[a.value]))})};var g,h=NaN;a.$watch(function(){h!==e.$viewValue||ma(g,e.$viewValue)||(g=ja(e.$viewValue),e.$render());h=e.$viewValue});e.$isEmpty=function(a){return!a||0===a.length}}}else f.registerOption=v},post:function(a,b,d,c){var f=c[1];if(f){var e=c[0];f.$render=function(){e.writeValue(f.$viewValue)}}}}}},De=["$interpolate",function(a){return{restrict:"E",priority:100,compile:function(b,d){var c,f;u(d.ngValue)||(u(d.value)?c=a(d.value,!0):(f=a(b.text(),!0))||d.$set("value",
b.text()));return function(a,b,d){var k=b.parent();(k=k.data("$selectController")||k.parent().data("$selectController"))&&k.registerOption(a,b,d,c,f)}}}}],Sc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){c&&(d.required=!0,c.$validators.required=function(a,b){return!d.required||!c.$isEmpty(b)},d.$observe("required",function(){c.$validate()}))}}},Rc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var f,e=d.ngPattern||d.pattern;d.$observe("pattern",
function(a){y(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw H("ngPattern")("noregexp",e,a,ya(b));f=a||void 0;c.$validate()});c.$validators.pattern=function(a,b){return c.$isEmpty(b)||x(f)||f.test(b)}}}}},Uc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var f=-1;d.$observe("maxlength",function(a){a=X(a);f=ga(a)?-1:a;c.$validate()});c.$validators.maxlength=function(a,b){return 0>f||c.$isEmpty(b)||b.length<=f}}}}},Tc=function(){return{restrict:"A",require:"?ngModel",
link:function(a,b,d,c){if(c){var f=0;d.$observe("minlength",function(a){f=X(a)||0;c.$validate()});c.$validators.minlength=function(a,b){return c.$isEmpty(b)||b.length>=f}}}}};A.angular.bootstrap?A.console&&console.log("WARNING: Tried to load angular more than once."):(te(),we(Z),Z.module("ngLocale",[],["$provide",function(a){function b(a){a+="";var b=a.indexOf(".");return-1==b?0:a.length-b-1}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:"January February March April May June July August September October November December".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),STANDALONEMONTH:"January February March April May June July August September October November December".split(" "),WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",
mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-\u00a4",negSuf:"",posPre:"\u00a4",posSuf:""}]},id:"en-us",localeID:"en_US",pluralCat:function(a,c){var f=a|0,e=c;void 0===e&&(e=Math.min(b(a),3));Math.pow(10,e);return 1==f&&0==
e?"one":"other"}})}]),F(function(){oe(A.document,Lc)}))})(window);!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map

/*
 AngularJS v1.6.0
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(U,C){'use strict';function Ea(a,b,c){if(!a)throw Oa("areq",b||"?",c||"required");return a}function Fa(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;X(a)&&(a=a.join(" "));X(b)&&(b=b.join(" "));return a+" "+b}function Pa(a){var b={};a&&(a.to||a.from)&&(b.to=a.to,b.from=a.from);return b}function Y(a,b,c){var d="";a=X(a)?a:a&&G(a)&&a.length?a.split(/\s+/):[];r(a,function(a,e){a&&0<a.length&&(d+=0<e?" ":"",d+=c?b+a:a+b)});return d}function Qa(a){if(a instanceof w)switch(a.length){case 0:return a;
case 1:if(1===a[0].nodeType)return a;break;default:return w(ua(a))}if(1===a.nodeType)return w(a)}function ua(a){if(!a[0])return a;for(var b=0;b<a.length;b++){var c=a[b];if(1===c.nodeType)return c}}function Ra(a,b,c){r(b,function(b){a.addClass(b,c)})}function Sa(a,b,c){r(b,function(b){a.removeClass(b,c)})}function Z(a){return function(b,c){c.addClass&&(Ra(a,b,c.addClass),c.addClass=null);c.removeClass&&(Sa(a,b,c.removeClass),c.removeClass=null)}}function oa(a){a=a||{};if(!a.$$prepared){var b=a.domOperation||
N;a.domOperation=function(){a.$$domOperationFired=!0;b();b=N};a.$$prepared=!0}return a}function ha(a,b){Ga(a,b);Ha(a,b)}function Ga(a,b){b.from&&(a.css(b.from),b.from=null)}function Ha(a,b){b.to&&(a.css(b.to),b.to=null)}function V(a,b,c){var d=b.options||{};c=c.options||{};var f=(d.addClass||"")+" "+(c.addClass||""),e=(d.removeClass||"")+" "+(c.removeClass||"");a=Ta(a.attr("class"),f,e);c.preparationClasses&&(d.preparationClasses=ea(c.preparationClasses,d.preparationClasses),delete c.preparationClasses);
f=d.domOperation!==N?d.domOperation:null;va(d,c);f&&(d.domOperation=f);d.addClass=a.addClass?a.addClass:null;d.removeClass=a.removeClass?a.removeClass:null;b.addClass=d.addClass;b.removeClass=d.removeClass;return d}function Ta(a,b,c){function d(a){G(a)&&(a=a.split(" "));var b={};r(a,function(a){a.length&&(b[a]=!0)});return b}var f={};a=d(a);b=d(b);r(b,function(a,b){f[b]=1});c=d(c);r(c,function(a,b){f[b]=1===f[b]?null:-1});var e={addClass:"",removeClass:""};r(f,function(b,c){var d,f;1===b?(d="addClass",
f=!a[c]||a[c+"-remove"]):-1===b&&(d="removeClass",f=a[c]||a[c+"-add"]);f&&(e[d].length&&(e[d]+=" "),e[d]+=c)});return e}function z(a){return a instanceof w?a[0]:a}function Ua(a,b,c){var d="";b&&(d=Y(b,"ng-",!0));c.addClass&&(d=ea(d,Y(c.addClass,"-add")));c.removeClass&&(d=ea(d,Y(c.removeClass,"-remove")));d.length&&(c.preparationClasses=d,a.addClass(d))}function pa(a,b){var c=b?"-"+b+"s":"";ka(a,[la,c]);return[la,c]}function wa(a,b){var c=b?"paused":"",d=$+"PlayState";ka(a,[d,c]);return[d,c]}function ka(a,
b){a.style[b[0]]=b[1]}function ea(a,b){return a?b?a+" "+b:a:b}function Ia(a,b,c){var d=Object.create(null),f=a.getComputedStyle(b)||{};r(c,function(a,b){var c=f[a];if(c){var y=c.charAt(0);if("-"===y||"+"===y||0<=y)c=Va(c);0===c&&(c=null);d[b]=c}});return d}function Va(a){var b=0;a=a.split(/\s*,\s*/);r(a,function(a){"s"===a.charAt(a.length-1)&&(a=a.substring(0,a.length-1));a=parseFloat(a)||0;b=b?Math.max(a,b):a});return b}function xa(a){return 0===a||null!=a}function Ja(a,b){var c=R,d=a+"s";b?c+="Duration":
d+=" linear all";return[c,d]}function Ka(){var a=Object.create(null);return{flush:function(){a=Object.create(null)},count:function(b){return(b=a[b])?b.total:0},get:function(b){return(b=a[b])&&b.value},put:function(b,c){a[b]?a[b].total++:a[b]={total:1,value:c}}}}function La(a,b,c){r(c,function(c){a[c]=ya(a[c])?a[c]:b.style.getPropertyValue(c)})}var R,za,$,Aa;void 0===U.ontransitionend&&void 0!==U.onwebkittransitionend?(R="WebkitTransition",za="webkitTransitionEnd transitionend"):(R="transition",za=
"transitionend");void 0===U.onanimationend&&void 0!==U.onwebkitanimationend?($="WebkitAnimation",Aa="webkitAnimationEnd animationend"):($="animation",Aa="animationend");var qa=$+"Delay",Ba=$+"Duration",la=R+"Delay",Ma=R+"Duration",Oa=C.$$minErr("ng"),Wa={transitionDuration:Ma,transitionDelay:la,transitionProperty:R+"Property",animationDuration:Ba,animationDelay:qa,animationIterationCount:$+"IterationCount"},Xa={transitionDuration:Ma,transitionDelay:la,animationDuration:Ba,animationDelay:qa},Ca,va,
r,X,ya,aa,Da,ra,G,K,w,N;C.module("ngAnimate",[],function(){N=C.noop;Ca=C.copy;va=C.extend;w=C.element;r=C.forEach;X=C.isArray;G=C.isString;ra=C.isObject;K=C.isUndefined;ya=C.isDefined;Da=C.isFunction;aa=C.isElement}).directive("ngAnimateSwap",["$animate","$rootScope",function(a,b){return{restrict:"A",transclude:"element",terminal:!0,priority:600,link:function(b,d,f,e,m){var A,y;b.$watchCollection(f.ngAnimateSwap||f["for"],function(f){A&&a.leave(A);y&&(y.$destroy(),y=null);if(f||0===f)y=b.$new(),m(y,
function(b){A=b;a.enter(b,null,d)})})}}}]).directive("ngAnimateChildren",["$interpolate",function(a){return{link:function(b,c,d){function f(a){c.data("$$ngAnimateChildren","on"===a||"true"===a)}var e=d.ngAnimateChildren;G(e)&&0===e.length?c.data("$$ngAnimateChildren",!0):(f(a(e)(b)),d.$observe("ngAnimateChildren",f))}}}]).factory("$$rAFScheduler",["$$rAF",function(a){function b(a){d=d.concat(a);c()}function c(){if(d.length){for(var b=d.shift(),m=0;m<b.length;m++)b[m]();f||a(function(){f||c()})}}var d,
f;d=b.queue=[];b.waitUntilQuiet=function(b){f&&f();f=a(function(){f=null;b();c()})};return b}]).provider("$$animateQueue",["$animateProvider",function(a){function b(a){if(!a)return null;a=a.split(" ");var b=Object.create(null);r(a,function(a){b[a]=!0});return b}function c(a,c){if(a&&c){var d=b(c);return a.split(" ").some(function(a){return d[a]})}}function d(a,b,c,d){return e[a].some(function(a){return a(b,c,d)})}function f(a,b){var c=0<(a.addClass||"").length,d=0<(a.removeClass||"").length;return b?
c&&d:c||d}var e=this.rules={skip:[],cancel:[],join:[]};e.join.push(function(a,b,c){return!b.structural&&f(b)});e.skip.push(function(a,b,c){return!b.structural&&!f(b)});e.skip.push(function(a,b,c){return"leave"===c.event&&b.structural});e.skip.push(function(a,b,c){return c.structural&&2===c.state&&!b.structural});e.cancel.push(function(a,b,c){return c.structural&&b.structural});e.cancel.push(function(a,b,c){return 2===c.state&&b.structural});e.cancel.push(function(a,b,d){if(d.structural)return!1;a=
b.addClass;b=b.removeClass;var f=d.addClass;d=d.removeClass;return K(a)&&K(b)||K(f)&&K(d)?!1:c(a,d)||c(b,f)});this.$get=["$$rAF","$rootScope","$rootElement","$document","$$HashMap","$$animation","$$AnimateRunner","$templateRequest","$$jqLite","$$forceReflow","$$isDocumentHidden",function(b,c,y,e,ba,Ya,O,v,H,S,P){function I(){var a=!1;return function(b){a?b():c.$$postDigest(function(){a=!0;b()})}}function B(a,b,c){var g=z(b),d=z(a),E=[];(a=t[c])&&r(a,function(a){J.call(a.node,g)?E.push(a.callback):
"leave"===c&&J.call(a.node,d)&&E.push(a.callback)});return E}function n(a,b,c){var g=ua(b);return a.filter(function(a){return!(a.node===g&&(!c||a.callback===c))})}function p(a,h,u){function p(c,g,d,h){y(function(){var c=B(S,a,g);c.length?b(function(){r(c,function(b){b(a,d,h)});"close"!==d||a[0].parentNode||sa.off(a)}):"close"!==d||a[0].parentNode||sa.off(a)});c.progress(g,d,h)}function n(b){var c=a,g=k;g.preparationClasses&&(c.removeClass(g.preparationClasses),g.preparationClasses=null);g.activeClasses&&
(c.removeClass(g.activeClasses),g.activeClasses=null);Na(a,k);ha(a,k);k.domOperation();e.complete(!b)}var k=Ca(u),t,S;if(a=Qa(a))t=z(a),S=a.parent();var k=oa(k),e=new O,y=I();X(k.addClass)&&(k.addClass=k.addClass.join(" "));k.addClass&&!G(k.addClass)&&(k.addClass=null);X(k.removeClass)&&(k.removeClass=k.removeClass.join(" "));k.removeClass&&!G(k.removeClass)&&(k.removeClass=null);k.from&&!ra(k.from)&&(k.from=null);k.to&&!ra(k.to)&&(k.to=null);if(!t)return n(),e;u=[t.getAttribute("class"),k.addClass,
k.removeClass].join(" ");if(!F(u))return n(),e;var s=0<=["enter","move","leave"].indexOf(h),x=P(),v=!ma||x||g.get(t);u=!v&&E.get(t)||{};var J=!!u.state;v||J&&1===u.state||(v=!L(a,S,h));if(v)return x&&p(e,h,"start"),n(),x&&p(e,h,"close"),e;s&&ta(a);x={structural:s,element:a,event:h,addClass:k.addClass,removeClass:k.removeClass,close:n,options:k,runner:e};if(J){if(d("skip",a,x,u)){if(2===u.state)return n(),e;V(a,u,x);return u.runner}if(d("cancel",a,x,u))if(2===u.state)u.runner.end();else if(u.structural)u.close();
else return V(a,u,x),u.runner;else if(d("join",a,x,u))if(2===u.state)V(a,x,{});else return Ua(a,s?h:null,k),h=x.event=u.event,k=V(a,u,x),u.runner}else V(a,x,{});(J=x.structural)||(J="animate"===x.event&&0<Object.keys(x.options.to||{}).length||f(x));if(!J)return n(),l(a),e;var H=(u.counter||0)+1;x.counter=H;Q(a,1,x);c.$$postDigest(function(){var b=E.get(t),c=!b,b=b||{},g=0<(a.parent()||[]).length&&("animate"===b.event||b.structural||f(b));if(c||b.counter!==H||!g){c&&(Na(a,k),ha(a,k));if(c||s&&b.event!==
h)k.domOperation(),e.end();g||l(a)}else h=!b.structural&&f(b,!0)?"setClass":b.event,Q(a,2),b=Ya(a,h,b.options),e.setHost(b),p(e,h,"start",{}),b.done(function(b){n(!b);(b=E.get(t))&&b.counter===H&&l(z(a));p(e,h,"close",{})})});return e}function ta(a){a=z(a).querySelectorAll("[data-ng-animate]");r(a,function(a){var b=parseInt(a.getAttribute("data-ng-animate"),10),c=E.get(a);if(c)switch(b){case 2:c.runner.end();case 1:E.remove(a)}})}function l(a){a=z(a);a.removeAttribute("data-ng-animate");E.remove(a)}
function k(a,b){return z(a)===z(b)}function L(a,b,c){c=w(e[0].body);var d=k(a,c)||"HTML"===a[0].nodeName,h=k(a,y),f=!1,B,p=g.get(z(a));(a=w.data(a[0],"$ngAnimatePin"))&&(b=a);for(b=z(b);b;){h||(h=k(b,y));if(1!==b.nodeType)break;a=E.get(b)||{};if(!f){var n=g.get(b);if(!0===n&&!1!==p){p=!0;break}else!1===n&&(p=!1);f=a.structural}if(K(B)||!0===B)a=w.data(b,"$$ngAnimateChildren"),ya(a)&&(B=a);if(f&&!1===B)break;d||(d=k(b,c));if(d&&h)break;if(!h&&(a=w.data(b,"$ngAnimatePin"))){b=z(a);continue}b=b.parentNode}return(!f||
B)&&!0!==p&&h&&d}function Q(a,b,c){c=c||{};c.state=b;a=z(a);a.setAttribute("data-ng-animate",b);c=(b=E.get(a))?va(b,c):c;E.put(a,c)}var E=new ba,g=new ba,ma=null,h=c.$watch(function(){return 0===v.totalPendingRequests},function(a){a&&(h(),c.$$postDigest(function(){c.$$postDigest(function(){null===ma&&(ma=!0)})}))}),t=Object.create(null),x=a.classNameFilter(),F=x?function(a){return x.test(a)}:function(){return!0},Na=Z(H),J=U.Node.prototype.contains||function(a){return this===a||!!(this.compareDocumentPosition(a)&
16)},sa={on:function(a,b,c){var g=ua(b);t[a]=t[a]||[];t[a].push({node:g,callback:c});w(b).on("$destroy",function(){E.get(g)||sa.off(a,b,c)})},off:function(a,b,c){if(1!==arguments.length||G(arguments[0])){var g=t[a];g&&(t[a]=1===arguments.length?null:n(g,b,c))}else for(g in b=arguments[0],t)t[g]=n(t[g],b)},pin:function(a,b){Ea(aa(a),"element","not an element");Ea(aa(b),"parentElement","not an element");a.data("$ngAnimatePin",b)},push:function(a,b,c,g){c=c||{};c.domOperation=g;return p(a,b,c)},enabled:function(a,
b){var c=arguments.length;if(0===c)b=!!ma;else if(aa(a)){var d=z(a);1===c?b=!g.get(d):g.put(d,!b)}else b=ma=!!a;return b}};return sa}]}]).provider("$$animation",["$animateProvider",function(a){var b=this.drivers=[];this.$get=["$$jqLite","$rootScope","$injector","$$AnimateRunner","$$HashMap","$$rAFScheduler",function(a,d,f,e,m,A){function y(a){function b(a){if(a.processed)return a;a.processed=!0;var d=a.domNode,n=d.parentNode;f.put(d,a);for(var p;n;){if(p=f.get(n)){p.processed||(p=b(p));break}n=n.parentNode}(p||
c).children.push(a);return a}var c={children:[]},d,f=new m;for(d=0;d<a.length;d++){var e=a[d];f.put(e.domNode,a[d]={domNode:e.domNode,fn:e.fn,children:[]})}for(d=0;d<a.length;d++)b(a[d]);return function(a){var b=[],c=[],d;for(d=0;d<a.children.length;d++)c.push(a.children[d]);a=c.length;var f=0,e=[];for(d=0;d<c.length;d++){var k=c[d];0>=a&&(a=f,f=0,b.push(e),e=[]);e.push(k.fn);k.children.forEach(function(a){f++;c.push(a)});a--}e.length&&b.push(e);return b}(c)}var s=[],ba=Z(a);return function(m,O,v){function H(a){a=
a.hasAttribute("ng-animate-ref")?[a]:a.querySelectorAll("[ng-animate-ref]");var b=[];r(a,function(a){var c=a.getAttribute("ng-animate-ref");c&&c.length&&b.push(a)});return b}function S(a){var b=[],c={};r(a,function(a,d){var h=z(a.element),k=0<=["enter","move"].indexOf(a.event),h=a.structural?H(h):[];if(h.length){var f=k?"to":"from";r(h,function(a){var b=a.getAttribute("ng-animate-ref");c[b]=c[b]||{};c[b][f]={animationID:d,element:w(a)}})}else b.push(a)});var d={},k={};r(c,function(c,f){var e=c.from,
B=c.to;if(e&&B){var p=a[e.animationID],n=a[B.animationID],l=e.animationID.toString();if(!k[l]){var m=k[l]={structural:!0,beforeStart:function(){p.beforeStart();n.beforeStart()},close:function(){p.close();n.close()},classes:P(p.classes,n.classes),from:p,to:n,anchors:[]};m.classes.length?b.push(m):(b.push(p),b.push(n))}k[l].anchors.push({out:e.element,"in":B.element})}else e=e?e.animationID:B.animationID,B=e.toString(),d[B]||(d[B]=!0,b.push(a[e]))});return b}function P(a,b){a=a.split(" ");b=b.split(" ");
for(var c=[],d=0;d<a.length;d++){var k=a[d];if("ng-"!==k.substring(0,3))for(var f=0;f<b.length;f++)if(k===b[f]){c.push(k);break}}return c.join(" ")}function I(a){for(var c=b.length-1;0<=c;c--){var d=f.get(b[c])(a);if(d)return d}}function B(a,b){function c(a){(a=a.data("$$animationRunner"))&&a.setHost(b)}a.from&&a.to?(c(a.from.element),c(a.to.element)):c(a.element)}function n(){var a=m.data("$$animationRunner");!a||"leave"===O&&v.$$domOperationFired||a.end()}function p(b){m.off("$destroy",n);m.removeData("$$animationRunner");
ba(m,v);ha(m,v);v.domOperation();L&&a.removeClass(m,L);m.removeClass("ng-animate");l.complete(!b)}v=oa(v);var ta=0<=["enter","move","leave"].indexOf(O),l=new e({end:function(){p()},cancel:function(){p(!0)}});if(!b.length)return p(),l;m.data("$$animationRunner",l);var k=Fa(m.attr("class"),Fa(v.addClass,v.removeClass)),L=v.tempClasses;L&&(k+=" "+L,v.tempClasses=null);var Q;ta&&(Q="ng-"+O+"-prepare",a.addClass(m,Q));s.push({element:m,classes:k,event:O,structural:ta,options:v,beforeStart:function(){m.addClass("ng-animate");
L&&a.addClass(m,L);Q&&(a.removeClass(m,Q),Q=null)},close:p});m.on("$destroy",n);if(1<s.length)return l;d.$$postDigest(function(){var a=[];r(s,function(b){b.element.data("$$animationRunner")?a.push(b):b.close()});s.length=0;var b=S(a),c=[];r(b,function(a){c.push({domNode:z(a.from?a.from.element:a.element),fn:function(){a.beforeStart();var b,c=a.close;if((a.anchors?a.from.element||a.to.element:a.element).data("$$animationRunner")){var d=I(a);d&&(b=d.start)}b?(b=b(),b.done(function(a){c(!a)}),B(a,b)):
c()}})});A(y(c))});return l}}]}]).provider("$animateCss",["$animateProvider",function(a){var b=Ka(),c=Ka();this.$get=["$window","$$jqLite","$$AnimateRunner","$timeout","$$forceReflow","$sniffer","$$rAFScheduler","$$animateQueue",function(a,f,e,m,A,y,s,ba){function C(a,b){var c=a.parentNode;return(c.$$ngAnimateParentKey||(c.$$ngAnimateParentKey=++P))+"-"+a.getAttribute("class")+"-"+b}function O(e,n,p,m){var l;0<b.count(p)&&(l=c.get(p),l||(n=Y(n,"-stagger"),f.addClass(e,n),l=Ia(a,e,m),l.animationDuration=
Math.max(l.animationDuration,0),l.transitionDuration=Math.max(l.transitionDuration,0),f.removeClass(e,n),c.put(p,l)));return l||{}}function v(a){I.push(a);s.waitUntilQuiet(function(){b.flush();c.flush();for(var a=A(),d=0;d<I.length;d++)I[d](a);I.length=0})}function H(c,f,e){f=b.get(e);f||(f=Ia(a,c,Wa),"infinite"===f.animationIterationCount&&(f.animationIterationCount=1));b.put(e,f);c=f;e=c.animationDelay;f=c.transitionDelay;c.maxDelay=e&&f?Math.max(e,f):e||f;c.maxDuration=Math.max(c.animationDuration*
c.animationIterationCount,c.transitionDuration);return c}var S=Z(f),P=0,I=[];return function(a,c){function d(){l()}function s(){l(!0)}function l(b){if(!(A||P&&J)){A=!0;J=!1;g.$$skipPreparationClasses||f.removeClass(a,ga);f.removeClass(a,ea);wa(h,!1);pa(h,!1);r(t,function(a){h.style[a[0]]=""});S(a,g);ha(a,g);Object.keys(I).length&&r(I,function(a,b){a?h.style.setProperty(b,a):h.style.removeProperty(b)});if(g.onDone)g.onDone();fa&&fa.length&&a.off(fa.join(" "),Q);var c=a.data("$$animateCss");c&&(m.cancel(c[0].timer),
a.removeData("$$animateCss"));w&&w.complete(!b)}}function k(a){q.blockTransition&&pa(h,a);q.blockKeyframeAnimation&&wa(h,!!a)}function L(){w=new e({end:d,cancel:s});v(N);l();return{$$willAnimate:!1,start:function(){return w},end:d}}function Q(a){a.stopPropagation();var b=a.originalEvent||a;a=b.$manualTimeStamp||Date.now();b=parseFloat(b.elapsedTime.toFixed(3));Math.max(a-V,0)>=K&&b>=M&&(P=!0,l())}function E(){function b(){if(!A){k(!1);r(t,function(a){h.style[a[0]]=a[1]});S(a,g);f.addClass(a,ea);if(q.recalculateTimingStyles){na=
h.getAttribute("class")+" "+ga;ja=C(h,na);D=H(h,na,ja);ca=D.maxDelay;u=Math.max(ca,0);M=D.maxDuration;if(0===M){l();return}q.hasTransitions=0<D.transitionDuration;q.hasAnimations=0<D.animationDuration}q.applyAnimationDelay&&(ca="boolean"!==typeof g.delay&&xa(g.delay)?parseFloat(g.delay):ca,u=Math.max(ca,0),D.animationDelay=ca,da=[qa,ca+"s"],t.push(da),h.style[da[0]]=da[1]);K=1E3*u;U=1E3*M;if(g.easing){var d,e=g.easing;q.hasTransitions&&(d=R+"TimingFunction",t.push([d,e]),h.style[d]=e);q.hasAnimations&&
(d=$+"TimingFunction",t.push([d,e]),h.style[d]=e)}D.transitionDuration&&fa.push(za);D.animationDuration&&fa.push(Aa);V=Date.now();var E=K+1.5*U;d=V+E;var e=a.data("$$animateCss")||[],n=!0;if(e.length){var p=e[0];(n=d>p.expectedEndTime)?m.cancel(p.timer):e.push(l)}n&&(E=m(c,E,!1),e[0]={timer:E,expectedEndTime:d},e.push(l),a.data("$$animateCss",e));if(fa.length)a.on(fa.join(" "),Q);g.to&&(g.cleanupStyles&&La(I,h,Object.keys(g.to)),Ha(a,g))}}function c(){var b=a.data("$$animateCss");if(b){for(var d=
1;d<b.length;d++)b[d]();a.removeData("$$animateCss")}}if(!A)if(h.parentNode){var d=function(a){if(P)J&&a&&(J=!1,l());else if(J=!a,D.animationDuration)if(a=wa(h,J),J)t.push(a);else{var b=t,c=b.indexOf(a);0<=a&&b.splice(c,1)}},e=0<aa&&(D.transitionDuration&&0===W.transitionDuration||D.animationDuration&&0===W.animationDuration)&&Math.max(W.animationDelay,W.transitionDelay);e?m(b,Math.floor(e*aa*1E3),!1):b();G.resume=function(){d(!0)};G.pause=function(){d(!1)}}else l()}var g=c||{};g.$$prepared||(g=oa(Ca(g)));
var I={},h=z(a);if(!h||!h.parentNode||!ba.enabled())return L();var t=[],x=a.attr("class"),F=Pa(g),A,J,P,w,G,u,K,M,U,V,fa=[];if(0===g.duration||!y.animations&&!y.transitions)return L();var ia=g.event&&X(g.event)?g.event.join(" "):g.event,Z="",T="";ia&&g.structural?Z=Y(ia,"ng-",!0):ia&&(Z=ia);g.addClass&&(T+=Y(g.addClass,"-add"));g.removeClass&&(T.length&&(T+=" "),T+=Y(g.removeClass,"-remove"));g.applyClassesEarly&&T.length&&S(a,g);var ga=[Z,T].join(" ").trim(),na=x+" "+ga,ea=Y(ga,"-active"),x=F.to&&
0<Object.keys(F.to).length;if(!(0<(g.keyframeStyle||"").length||x||ga))return L();var ja,W;0<g.stagger?(F=parseFloat(g.stagger),W={transitionDelay:F,animationDelay:F,transitionDuration:0,animationDuration:0}):(ja=C(h,na),W=O(h,ga,ja,Xa));g.$$skipPreparationClasses||f.addClass(a,ga);g.transitionStyle&&(F=[R,g.transitionStyle],ka(h,F),t.push(F));0<=g.duration&&(F=0<h.style[R].length,F=Ja(g.duration,F),ka(h,F),t.push(F));g.keyframeStyle&&(F=[$,g.keyframeStyle],ka(h,F),t.push(F));var aa=W?0<=g.staggerIndex?
g.staggerIndex:b.count(ja):0;(ia=0===aa)&&!g.skipBlocking&&pa(h,9999);var D=H(h,na,ja),ca=D.maxDelay;u=Math.max(ca,0);M=D.maxDuration;var q={};q.hasTransitions=0<D.transitionDuration;q.hasAnimations=0<D.animationDuration;q.hasTransitionAll=q.hasTransitions&&"all"===D.transitionProperty;q.applyTransitionDuration=x&&(q.hasTransitions&&!q.hasTransitionAll||q.hasAnimations&&!q.hasTransitions);q.applyAnimationDuration=g.duration&&q.hasAnimations;q.applyTransitionDelay=xa(g.delay)&&(q.applyTransitionDuration||
q.hasTransitions);q.applyAnimationDelay=xa(g.delay)&&q.hasAnimations;q.recalculateTimingStyles=0<T.length;if(q.applyTransitionDuration||q.applyAnimationDuration)M=g.duration?parseFloat(g.duration):M,q.applyTransitionDuration&&(q.hasTransitions=!0,D.transitionDuration=M,F=0<h.style[R+"Property"].length,t.push(Ja(M,F))),q.applyAnimationDuration&&(q.hasAnimations=!0,D.animationDuration=M,t.push([Ba,M+"s"]));if(0===M&&!q.recalculateTimingStyles)return L();if(null!=g.delay){var da;"boolean"!==typeof g.delay&&
(da=parseFloat(g.delay),u=Math.max(da,0));q.applyTransitionDelay&&t.push([la,da+"s"]);q.applyAnimationDelay&&t.push([qa,da+"s"])}null==g.duration&&0<D.transitionDuration&&(q.recalculateTimingStyles=q.recalculateTimingStyles||ia);K=1E3*u;U=1E3*M;g.skipBlocking||(q.blockTransition=0<D.transitionDuration,q.blockKeyframeAnimation=0<D.animationDuration&&0<W.animationDelay&&0===W.animationDuration);g.from&&(g.cleanupStyles&&La(I,h,Object.keys(g.from)),Ga(a,g));q.blockTransition||q.blockKeyframeAnimation?
k(M):g.skipBlocking||pa(h,!1);return{$$willAnimate:!0,end:d,start:function(){if(!A)return G={end:d,cancel:s,resume:null,pause:null},w=new e(G),v(E),w}}}}]}]).provider("$$animateCssDriver",["$$animationProvider",function(a){a.drivers.push("$$animateCssDriver");this.$get=["$animateCss","$rootScope","$$AnimateRunner","$rootElement","$sniffer","$$jqLite","$document",function(a,c,d,f,e,m,A){function y(a){return a.replace(/\bng-\S+\b/g,"")}function s(a,b){G(a)&&(a=a.split(" "));G(b)&&(b=b.split(" "));return a.filter(function(a){return-1===
b.indexOf(a)}).join(" ")}function ba(c,e,f){function m(a){var b={},c=z(a).getBoundingClientRect();r(["width","height","top","left"],function(a){var d=c[a];switch(a){case "top":d+=v.scrollTop;break;case "left":d+=v.scrollLeft}b[a]=Math.floor(d)+"px"});return b}function n(){var c=y(f.attr("class")||""),d=s(c,l),c=s(l,c),d=a(A,{to:m(f),addClass:"ng-anchor-in "+d,removeClass:"ng-anchor-out "+c,delay:!0});return d.$$willAnimate?d:null}function p(){A.remove();e.removeClass("ng-animate-shim");f.removeClass("ng-animate-shim")}
var A=w(z(e).cloneNode(!0)),l=y(A.attr("class")||"");e.addClass("ng-animate-shim");f.addClass("ng-animate-shim");A.addClass("ng-anchor");H.append(A);var k;c=function(){var c=a(A,{addClass:"ng-anchor-out",delay:!0,from:m(e)});return c.$$willAnimate?c:null}();if(!c&&(k=n(),!k))return p();var L=c||k;return{start:function(){function a(){c&&c.end()}var b,c=L.start();c.done(function(){c=null;if(!k&&(k=n()))return c=k.start(),c.done(function(){c=null;p();b.complete()}),c;p();b.complete()});return b=new d({end:a,
cancel:a})}}}function C(a,b,c,e){var f=O(a,N),m=O(b,N),y=[];r(e,function(a){(a=ba(c,a.out,a["in"]))&&y.push(a)});if(f||m||0!==y.length)return{start:function(){function a(){r(b,function(a){a.end()})}var b=[];f&&b.push(f.start());m&&b.push(m.start());r(y,function(a){b.push(a.start())});var c=new d({end:a,cancel:a});d.all(b,function(a){c.complete(a)});return c}}}function O(c){var d=c.element,e=c.options||{};c.structural&&(e.event=c.event,e.structural=!0,e.applyClassesEarly=!0,"leave"===c.event&&(e.onDone=
e.domOperation));e.preparationClasses&&(e.event=ea(e.event,e.preparationClasses));c=a(d,e);return c.$$willAnimate?c:null}if(!e.animations&&!e.transitions)return N;var v=A[0].body;c=z(f);var H=w(c.parentNode&&11===c.parentNode.nodeType||v.contains(c)?c:v);return function(a){return a.from&&a.to?C(a.from,a.to,a.classes,a.anchors):O(a)}}]}]).provider("$$animateJs",["$animateProvider",function(a){this.$get=["$injector","$$AnimateRunner","$$jqLite",function(b,c,d){function f(c){c=X(c)?c:c.split(" ");for(var d=
[],e={},f=0;f<c.length;f++){var r=c[f],w=a.$$registeredAnimations[r];w&&!e[r]&&(d.push(b.get(w)),e[r]=!0)}return d}var e=Z(d);return function(a,b,d,s){function w(){s.domOperation();e(a,s)}function C(a,b,d,e,f){switch(d){case "animate":b=[b,e.from,e.to,f];break;case "setClass":b=[b,G,P,f];break;case "addClass":b=[b,G,f];break;case "removeClass":b=[b,P,f];break;default:b=[b,f]}b.push(e);if(a=a.apply(a,b))if(Da(a.start)&&(a=a.start()),a instanceof c)a.done(f);else if(Da(a))return a;return N}function z(a,
b,d,e,f){var l=[];r(e,function(e){var m=e[f];m&&l.push(function(){var e,f,g=!1,h=function(a){g||(g=!0,(f||N)(a),e.complete(!a))};e=new c({end:function(){h()},cancel:function(){h(!0)}});f=C(m,a,b,d,function(a){h(!1===a)});return e})});return l}function v(a,b,d,e,f){var l=z(a,b,d,e,f);if(0===l.length){var h,m;"beforeSetClass"===f?(h=z(a,"removeClass",d,e,"beforeRemoveClass"),m=z(a,"addClass",d,e,"beforeAddClass")):"setClass"===f&&(h=z(a,"removeClass",d,e,"removeClass"),m=z(a,"addClass",d,e,"addClass"));
h&&(l=l.concat(h));m&&(l=l.concat(m))}if(0!==l.length)return function(a){var b=[];l.length&&r(l,function(a){b.push(a())});b.length?c.all(b,a):a();return function(a){r(b,function(b){a?b.cancel():b.end()})}}}var H=!1;3===arguments.length&&ra(d)&&(s=d,d=null);s=oa(s);d||(d=a.attr("class")||"",s.addClass&&(d+=" "+s.addClass),s.removeClass&&(d+=" "+s.removeClass));var G=s.addClass,P=s.removeClass,I=f(d),B,n;if(I.length){var p,K;"leave"===b?(K="leave",p="afterLeave"):(K="before"+b.charAt(0).toUpperCase()+
b.substr(1),p=b);"enter"!==b&&"move"!==b&&(B=v(a,b,s,I,K));n=v(a,b,s,I,p)}if(B||n){var l;return{$$willAnimate:!0,end:function(){l?l.end():(H=!0,w(),ha(a,s),l=new c,l.complete(!0));return l},start:function(){function b(c){H=!0;w();ha(a,s);l.complete(c)}if(l)return l;l=new c;var d,e=[];B&&e.push(function(a){d=B(a)});e.length?e.push(function(a){w();a(!0)}):w();n&&e.push(function(a){d=n(a)});l.setHost({end:function(){H||((d||N)(void 0),b(void 0))},cancel:function(){H||((d||N)(!0),b(!0))}});c.chain(e,
b);return l}}}}}]}]).provider("$$animateJsDriver",["$$animationProvider",function(a){a.drivers.push("$$animateJsDriver");this.$get=["$$animateJs","$$AnimateRunner",function(a,c){function d(c){return a(c.element,c.event,c.classes,c.options)}return function(a){if(a.from&&a.to){var b=d(a.from),m=d(a.to);if(b||m)return{start:function(){function a(){return function(){r(d,function(a){a.end()})}}var d=[];b&&d.push(b.start());m&&d.push(m.start());c.all(d,function(a){f.complete(a)});var f=new c({end:a(),cancel:a()});
return f}}}else return d(a)}}]}])})(window,window.angular);
//# sourceMappingURL=angular-animate.min.js.map

/*
 AngularJS v1.6.0
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(s,p){'use strict';var c="BUTTON A INPUT TEXTAREA SELECT DETAILS SUMMARY".split(" "),h=function(a,b){if(-1!==b.indexOf(a[0].nodeName))return!0};p.module("ngAria",["ng"]).provider("$aria",function(){function a(a,c,n,k){return function(d,f,e){var g=e.$normalize(c);!b[g]||h(f,n)||e[g]||d.$watch(e[a],function(a){a=k?!a:!!a;f.attr(c,a)})}}var b={ariaHidden:!0,ariaChecked:!0,ariaReadonly:!0,ariaDisabled:!0,ariaRequired:!0,ariaInvalid:!0,ariaValue:!0,tabindex:!0,bindKeydown:!0,bindRoleForClick:!0};
this.config=function(a){b=p.extend(b,a)};this.$get=function(){return{config:function(a){return b[a]},$$watchExpr:a}}}).directive("ngShow",["$aria",function(a){return a.$$watchExpr("ngShow","aria-hidden",[],!0)}]).directive("ngHide",["$aria",function(a){return a.$$watchExpr("ngHide","aria-hidden",[],!1)}]).directive("ngValue",["$aria",function(a){return a.$$watchExpr("ngValue","aria-checked",c,!1)}]).directive("ngChecked",["$aria",function(a){return a.$$watchExpr("ngChecked","aria-checked",c,!1)}]).directive("ngReadonly",
["$aria",function(a){return a.$$watchExpr("ngReadonly","aria-readonly",c,!1)}]).directive("ngRequired",["$aria",function(a){return a.$$watchExpr("ngRequired","aria-required",c,!1)}]).directive("ngModel",["$aria",function(a){function b(b,k,d,f){return a.config(k)&&!d.attr(b)&&(f||!h(d,c))}function l(a,b){return!b.attr("role")&&b.attr("type")===a&&!h(b,c)}function m(a,b){var d=a.type,f=a.role;return"checkbox"===(d||f)||"menuitemcheckbox"===f?"checkbox":"radio"===(d||f)||"menuitemradio"===f?"radio":
"range"===d||"progressbar"===f||"slider"===f?"range":""}return{restrict:"A",require:"ngModel",priority:200,compile:function(c,k){var d=m(k,c);return{post:function(f,e,g,c){function k(){return c.$modelValue}function h(a){e.attr("aria-checked",g.value==c.$viewValue)}function m(){e.attr("aria-checked",!c.$isEmpty(c.$viewValue))}var n=b("tabindex","tabindex",e,!1);switch(d){case "radio":case "checkbox":l(d,e)&&e.attr("role",d);b("aria-checked","ariaChecked",e,!1)&&f.$watch(k,"radio"===d?h:m);n&&e.attr("tabindex",
0);break;case "range":l(d,e)&&e.attr("role","slider");if(a.config("ariaValue")){var p=!e.attr("aria-valuemin")&&(g.hasOwnProperty("min")||g.hasOwnProperty("ngMin")),q=!e.attr("aria-valuemax")&&(g.hasOwnProperty("max")||g.hasOwnProperty("ngMax")),r=!e.attr("aria-valuenow");p&&g.$observe("min",function(a){e.attr("aria-valuemin",a)});q&&g.$observe("max",function(a){e.attr("aria-valuemax",a)});r&&f.$watch(k,function(a){e.attr("aria-valuenow",a)})}n&&e.attr("tabindex",0)}!g.hasOwnProperty("ngRequired")&&
c.$validators.required&&b("aria-required","ariaRequired",e,!1)&&g.$observe("required",function(){e.attr("aria-required",!!g.required)});b("aria-invalid","ariaInvalid",e,!0)&&f.$watch(function(){return c.$invalid},function(a){e.attr("aria-invalid",!!a)})}}}}}]).directive("ngDisabled",["$aria",function(a){return a.$$watchExpr("ngDisabled","aria-disabled",c,!1)}]).directive("ngMessages",function(){return{restrict:"A",require:"?ngMessages",link:function(a,b,c,h){b.attr("aria-live")||b.attr("aria-live",
"assertive")}}}).directive("ngClick",["$aria","$parse",function(a,b){return{restrict:"A",compile:function(l,m){var n=b(m.ngClick,null,!0);return function(b,d,f){if(!h(d,c)&&(a.config("bindRoleForClick")&&!d.attr("role")&&d.attr("role","button"),a.config("tabindex")&&!d.attr("tabindex")&&d.attr("tabindex",0),a.config("bindKeydown")&&!f.ngKeydown&&!f.ngKeypress&&!f.ngKeyup))d.on("keydown",function(a){function c(){n(b,{$event:a})}var d=a.which||a.keyCode;32!==d&&13!==d||b.$apply(c)})}}}}]).directive("ngDblclick",
["$aria",function(a){return function(b,l,m){!a.config("tabindex")||l.attr("tabindex")||h(l,c)||l.attr("tabindex",0)}}])})(window,window.angular);
//# sourceMappingURL=angular-aria.min.js.map

/*
 AngularJS v1.6.0
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(y,l){'use strict';function w(){return["$animate",function(t){return{restrict:"AE",transclude:"element",priority:1,terminal:!0,require:"^^ngMessages",link:function(u,n,a,c,f){var e=n[0],d,r=a.ngMessage||a.when;a=a.ngMessageExp||a.whenExp;var k=function(a){d=a?p(a)?a:a.split(/[\s,]+/):null;c.reRender()};a?(k(u.$eval(a)),u.$watchCollection(a,k)):k(r);var g,s;c.register(e,s={test:function(a){var m=d;a=m?p(m)?0<=m.indexOf(a):m.hasOwnProperty(a):void 0;return a},attach:function(){g||f(function(a,
m){t.enter(a,null,n);g=a;var d=g.$$attachId=c.getAttachId();g.on("$destroy",function(){g&&g.$$attachId===d&&(c.deregister(e),s.detach());m.$destroy()})})},detach:function(){if(g){var a=g;g=null;t.leave(a)}}})}}}]}var v,p,q,x;l.module("ngMessages",[],function(){v=l.forEach;p=l.isArray;q=l.isString;x=l.element}).directive("ngMessages",["$animate",function(t){function u(a,c){return q(c)&&0===c.length||n(a.$eval(c))}function n(a){return q(a)?a.length:!!a}return{require:"ngMessages",restrict:"AE",controller:["$element",
"$scope","$attrs",function(a,c,f){function e(a,c){for(var b=c,d=[];b&&b!==a;){var h=b.$$ngMessageNode;if(h&&h.length)return g[h];b.childNodes.length&&-1===d.indexOf(b)?(d.push(b),b=b.childNodes[b.childNodes.length-1]):b.previousSibling?b=b.previousSibling:(b=b.parentNode,d.push(b))}}var d=this,r=0,k=0;this.getAttachId=function(){return k++};var g=this.messages={},s,l;this.render=function(m){m=m||{};s=!1;l=m;for(var g=u(c,f.ngMessagesMultiple)||u(c,f.multiple),b=[],e={},h=d.head,r=!1,k=0;null!=h;){k++;
var q=h.message,p=!1;r||v(m,function(a,b){!p&&n(a)&&q.test(b)&&!e[b]&&(p=e[b]=!0,q.attach())});p?r=!g:b.push(q);h=h.next}v(b,function(a){a.detach()});b.length!==k?t.setClass(a,"ng-active","ng-inactive"):t.setClass(a,"ng-inactive","ng-active")};c.$watchCollection(f.ngMessages||f["for"],d.render);a.on("$destroy",function(){v(g,function(a){a.message.detach()})});this.reRender=function(){s||(s=!0,c.$evalAsync(function(){s&&l&&d.render(l)}))};this.register=function(c,f){var b=r.toString();g[b]={message:f};
var k=a[0],h=g[b];d.head?(k=e(k,c))?(h.next=k.next,k.next=h):(h.next=d.head,d.head=h):d.head=h;c.$$ngMessageNode=b;r++;d.reRender()};this.deregister=function(c){var f=c.$$ngMessageNode;delete c.$$ngMessageNode;var b=g[f];(c=e(a[0],c))?c.next=b.next:d.head=b.next;delete g[f];d.reRender()}}]}}]).directive("ngMessagesInclude",["$templateRequest","$document","$compile",function(l,p,n){function a(a,f){var e=n.$$createComment?n.$$createComment("ngMessagesInclude",f):p[0].createComment(" ngMessagesInclude: "+
f+" "),e=x(e);a.after(e);a.remove()}return{restrict:"AE",require:"^^ngMessages",link:function(c,f,e){var d=e.ngMessagesInclude||e.src;l(d).then(function(e){c.$$destroyed||(q(e)&&!e.trim()?a(f,d):n(e)(c,function(c){f.after(c);a(f,d)}))})}}}]).directive("ngMessage",w()).directive("ngMessageExp",w())})(window,window.angular);
//# sourceMappingURL=angular-messages.min.js.map

/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.3
 */
!function(e,t,n){"use strict";!function(){t.module("ngMaterial",["ng","ngAnimate","ngAria","material.core","material.core.gestures","material.core.interaction","material.core.layout","material.core.meta","material.core.theming.palette","material.core.theming","material.core.animate","material.components.autocomplete","material.components.backdrop","material.components.bottomSheet","material.components.button","material.components.card","material.components.checkbox","material.components.chips","material.components.colors","material.components.content","material.components.datepicker","material.components.dialog","material.components.divider","material.components.fabActions","material.components.fabShared","material.components.fabSpeedDial","material.components.fabToolbar","material.components.gridList","material.components.icon","material.components.input","material.components.list","material.components.menu","material.components.menuBar","material.components.panel","material.components.navBar","material.components.progressCircular","material.components.progressLinear","material.components.radioButton","material.components.select","material.components.showHide","material.components.sidenav","material.components.slider","material.components.sticky","material.components.subheader","material.components.swipe","material.components.switch","material.components.toast","material.components.tabs","material.components.toolbar","material.components.tooltip","material.components.truncate","material.components.virtualRepeat","material.components.whiteframe"])}(),function(){function e(e,t){if(t.has("$swipe")){var n="You are using the ngTouch module. \nAngular Material already has mobile click, tap, and swipe support... \nngTouch is not supported with Angular Material!";e.warn(n)}}function n(e,t){e.decorator("$$rAF",["$delegate",o]),e.decorator("$q",["$delegate",i]),t.theme("default").primaryPalette("indigo").accentPalette("pink").warnPalette("deep-orange").backgroundPalette("grey")}function o(e){return e.throttle=function(t){var n,o,i,r;return function(){n=arguments,r=this,i=t,o||(o=!0,e(function(){i.apply(r,Array.prototype.slice.call(n)),o=!1}))}},e}function i(e){return e.resolve||(e.resolve=e.when),e}e.$inject=["$log","$injector"],n.$inject=["$provide","$mdThemingProvider"],o.$inject=["$delegate"],i.$inject=["$delegate"],t.module("material.core",["ngAnimate","material.core.animate","material.core.layout","material.core.interaction","material.core.gestures","material.core.theming"]).config(n).run(e)}(),function(){function e(e){function n(n,o,i){function r(e){t.isUndefined(e)&&(e=!0),o.toggleClass("md-autofocus",!!e)}var a=i.mdAutoFocus||i.mdAutofocus||i.mdSidenavFocus;r(e(a)(n)),a&&n.$watch(a,r)}return{restrict:"A",link:{pre:n}}}e.$inject=["$parse"],t.module("material.core").directive("mdAutofocus",e).directive("mdAutoFocus",e).directive("mdSidenavFocus",e)}(),function(){function e(){function e(e){var t="#"===e[0]?e.substr(1):e,n=t.length/3,o=t.substr(0,n),i=t.substr(n,n),r=t.substr(2*n);return 1===n&&(o+=o,i+=i,r+=r),"rgba("+parseInt(o,16)+","+parseInt(i,16)+","+parseInt(r,16)+",0.1)"}function t(e){e=e.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);var t=e&&4===e.length?"#"+("0"+parseInt(e[1],10).toString(16)).slice(-2)+("0"+parseInt(e[2],10).toString(16)).slice(-2)+("0"+parseInt(e[3],10).toString(16)).slice(-2):"";return t.toUpperCase()}function n(e){return e.replace(")",", 0.1)").replace("(","a(")}function o(e){return e?e.replace("rgba","rgb").replace(/,[^\),]+\)/,")"):"rgb(0,0,0)"}return{rgbaToHex:t,hexToRgba:e,rgbToRgba:n,rgbaToRgb:o}}t.module("material.core").factory("$mdColorUtil",e)}(),function(){function e(){function e(e){var t=a+"-"+e,i=o(t),d=i.charAt(0).toLowerCase()+i.substring(1);return n(r,e)?e:n(r,i)?i:n(r,d)?d:e}function n(e,n){return t.isDefined(e.style[n])}function o(e){return e.replace(s,function(e,t,n,o){return o?n.toUpperCase():n})}function i(e){var t,n,o=/^(Moz|webkit|ms)(?=[A-Z])/;for(t in e.style)if(n=o.exec(t))return n[0]}var r=document.createElement("div"),a=i(r),d=/webkit/i.test(a),s=/([:\-_]+(.))/g,l={isInputKey:function(e){return e.keyCode>=31&&e.keyCode<=90},isNumPadKey:function(e){return 3===e.location&&e.keyCode>=97&&e.keyCode<=105},isNavigationKey:function(e){var t=l.KEY_CODE,n=[t.SPACE,t.ENTER,t.UP_ARROW,t.DOWN_ARROW];return n.indexOf(e.keyCode)!=-1},ELEMENT_MAX_PIXELS:1533917,BEFORE_NG_ARIA:210,KEY_CODE:{COMMA:188,SEMICOLON:186,ENTER:13,ESCAPE:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT_ARROW:37,UP_ARROW:38,RIGHT_ARROW:39,DOWN_ARROW:40,TAB:9,BACKSPACE:8,DELETE:46},CSS:{TRANSITIONEND:"transitionend"+(d?" webkitTransitionEnd":""),ANIMATIONEND:"animationend"+(d?" webkitAnimationEnd":""),TRANSFORM:e("transform"),TRANSFORM_ORIGIN:e("transformOrigin"),TRANSITION:e("transition"),TRANSITION_DURATION:e("transitionDuration"),ANIMATION_PLAY_STATE:e("animationPlayState"),ANIMATION_DURATION:e("animationDuration"),ANIMATION_NAME:e("animationName"),ANIMATION_TIMING:e("animationTimingFunction"),ANIMATION_DIRECTION:e("animationDirection")},MEDIA:{xs:"(max-width: 599px)","gt-xs":"(min-width: 600px)",sm:"(min-width: 600px) and (max-width: 959px)","gt-sm":"(min-width: 960px)",md:"(min-width: 960px) and (max-width: 1279px)","gt-md":"(min-width: 1280px)",lg:"(min-width: 1280px) and (max-width: 1919px)","gt-lg":"(min-width: 1920px)",xl:"(min-width: 1920px)",landscape:"(orientation: landscape)",portrait:"(orientation: portrait)",print:"print"},MEDIA_PRIORITY:["xl","gt-lg","lg","gt-md","md","gt-sm","sm","gt-xs","xs","landscape","portrait","print"]};return l}t.module("material.core").factory("$mdConstant",e)}(),function(){function e(e,n){function o(){return[].concat(v)}function i(){return v.length}function r(e){return v.length&&e>-1&&e<v.length}function a(e){return!!e&&r(u(e)+1)}function d(e){return!!e&&r(u(e)-1)}function s(e){return r(e)?v[e]:null}function l(e,t){return v.filter(function(n){return n[e]===t})}function c(e,n){return e?(t.isNumber(n)||(n=v.length),v.splice(n,0,e),u(e)):-1}function m(e){p(e)&&v.splice(u(e),1)}function u(e){return v.indexOf(e)}function p(e){return e&&u(e)>-1}function h(){return v.length?v[0]:null}function f(){return v.length?v[v.length-1]:null}function g(e,o,i,a){i=i||b;for(var d=u(o);;){if(!r(d))return null;var s=d+(e?-1:1),l=null;if(r(s)?l=v[s]:n&&(l=e?f():h(),s=u(l)),null===l||s===a)return null;if(i(l))return l;t.isUndefined(a)&&(a=s),d=s}}var b=function(){return!0};e&&!t.isArray(e)&&(e=Array.prototype.slice.call(e)),n=!!n;var v=e||[];return{items:o,count:i,inRange:r,contains:p,indexOf:u,itemAt:s,findBy:l,add:c,remove:m,first:h,last:f,next:t.bind(null,g,!1),previous:t.bind(null,g,!0),hasPrevious:d,hasNext:a}}t.module("material.core").config(["$provide",function(t){t.decorator("$mdUtil",["$delegate",function(t){return t.iterator=e,t}])}])}(),function(){function e(e,n,o){function i(e){var n=u[e];t.isUndefined(n)&&(n=u[e]=r(e));var o=h[n];return t.isUndefined(o)&&(o=a(n)),o}function r(t){return e.MEDIA[t]||("("!==t.charAt(0)?"("+t+")":t)}function a(e){var t=p[e];return t||(t=p[e]=o.matchMedia(e)),t.addListener(d),h[t.media]=!!t.matches}function d(e){n.$evalAsync(function(){h[e.media]=!!e.matches})}function s(e){return p[e]}function l(t,n){for(var o=0;o<e.MEDIA_PRIORITY.length;o++){var i=e.MEDIA_PRIORITY[o];if(p[u[i]].matches){var r=m(t,n+"-"+i);if(t[r])return t[r]}}return t[m(t,n)]}function c(n,o,i){var r=[];return n.forEach(function(n){var a=m(o,n);t.isDefined(o[a])&&r.push(o.$observe(a,t.bind(void 0,i,null)));for(var d in e.MEDIA)a=m(o,n+"-"+d),t.isDefined(o[a])&&r.push(o.$observe(a,t.bind(void 0,i,d)))}),function(){r.forEach(function(e){e()})}}function m(e,t){return f[t]||(f[t]=e.$normalize(t))}var u={},p={},h={},f={};return i.getResponsiveAttribute=l,i.getQuery=s,i.watchResponsiveAttributes=c,i}e.$inject=["$mdConstant","$rootScope","$window"],t.module("material.core").factory("$mdMedia",e)}(),function(){function e(e,n){function o(e){return e=t.isArray(e)?e:[e],e.forEach(function(t){s.forEach(function(n){e.push(n+"-"+t)})}),e}function i(e){return e=t.isArray(e)?e:[e],o(e).map(function(e){return"["+e+"]"}).join(",")}function r(e,t){if(e=d(e),!e)return!1;for(var n=o(t),i=0;i<n.length;i++)if(e.hasAttribute(n[i]))return!0;return!1}function a(e,t){e=d(e),e&&o(t).forEach(function(t){e.removeAttribute(t)})}function d(e){if(e=e[0]||e,e.nodeType)return e}var s=["data","x"];return e?n?i(e):o(e):{buildList:o,buildSelector:i,hasAttribute:r,removeAttribute:a}}t.module("material.core").config(["$provide",function(t){t.decorator("$mdUtil",["$delegate",function(t){return t.prefixer=e,t}])}])}(),function(){function o(o,r,a,d,s,l,c,m,u,p){function h(e){return e?f(e)||g(e)?e:e+"px":"0"}function f(e){return String(e).indexOf("px")>-1}function g(e){return String(e).indexOf("%")>-1}function b(e){return e[0]||e}var v=l.startSymbol(),E=l.endSymbol(),$="{{"===v&&"}}"===E,C=function(e,n,o){var i=!1;if(e&&e.length){var r=u.getComputedStyle(e[0]);i=t.isDefined(r[n])&&(!o||r[n]==o)}return i},y={dom:{},now:e.performance&&e.performance.now?t.bind(e.performance,e.performance.now):Date.now||function(){return(new Date).getTime()},getModelOption:function(e,t){if(e.$options){var n=e.$options;return n.getOption?n.getOption(t):n[t]}},bidi:function(e,n,i,r){var a=!("rtl"==o[0].dir||"rtl"==o[0].body.dir);if(0==arguments.length)return a?"ltr":"rtl";var d=t.element(e);a&&t.isDefined(i)?d.css(n,h(i)):!a&&t.isDefined(r)&&d.css(n,h(r))},bidiProperty:function(e,n,i,r){var a=!("rtl"==o[0].dir||"rtl"==o[0].body.dir),d=t.element(e);a&&t.isDefined(n)?(d.css(n,h(r)),d.css(i,"")):!a&&t.isDefined(i)&&(d.css(i,h(r)),d.css(n,""))},clientRect:function(e,t,n){var o=b(e);t=b(t||o.offsetParent||document.body);var i=o.getBoundingClientRect(),r=n?t.getBoundingClientRect():{left:0,top:0,width:0,height:0};return{left:i.left-r.left,top:i.top-r.top,width:i.width,height:i.height}},offsetRect:function(e,t){return y.clientRect(e,t,!0)},nodesToArray:function(e){e=e||[];for(var t=[],n=0;n<e.length;++n)t.push(e.item(n));return t},getViewportTop:function(){return e.scrollY||e.pageYOffset||0},findFocusTarget:function(e,n){function o(e,n){var o,i=e[0].querySelectorAll(n);return i&&i.length&&i.length&&t.forEach(i,function(e){e=t.element(e);var n=e.hasClass("md-autofocus");n&&(o=e)}),o}var i,r=this.prefixer("md-autofocus",!0);return i=o(e,n||r),i||n==r||(i=o(e,this.prefixer("md-auto-focus",!0)),i||(i=o(e,r))),i},disableScrollAround:function(e,n,i){function r(e){function n(e){e.preventDefault()}e=t.element(e||d);var o;return i.disableScrollMask?o=e:(o=t.element('<div class="md-scroll-mask">  <div class="md-scroll-mask-bar"></div></div>'),e.append(o)),o.on("wheel",n),o.on("touchmove",n),function(){o.off("wheel"),o.off("touchmove"),i.disableScrollMask||o[0].parentNode.removeChild(o[0])}}function a(){var e=o[0].documentElement,n=e.style.cssText||"",i=d.style.cssText||"",r=y.getViewportTop(),a=d.clientWidth,s=d.scrollHeight>d.clientHeight+1;return s&&t.element(d).css({position:"fixed",width:"100%",top:-r+"px"}),d.clientWidth<a&&(d.style.overflow="hidden"),s&&(e.style.overflowY="scroll"),function(){d.style.cssText=i,e.style.cssText=n,d.scrollTop=r}}if(i=i||{},y.disableScrollAround._count=Math.max(0,y.disableScrollAround._count||0),y.disableScrollAround._count++,y.disableScrollAround._restoreScroll)return y.disableScrollAround._restoreScroll;var d=o[0].body,s=a(),l=r(n);return y.disableScrollAround._restoreScroll=function(){--y.disableScrollAround._count<=0&&(s(),l(),delete y.disableScrollAround._restoreScroll)}},enableScrolling:function(){var e=this.disableScrollAround._restoreScroll;e&&e()},floatingScrollbars:function(){if(this.floatingScrollbars.cached===n){var e=t.element("<div><div></div></div>").css({width:"100%","z-index":-1,position:"absolute",height:"35px","overflow-y":"scroll"});e.children().css("height","60px"),o[0].body.appendChild(e[0]),this.floatingScrollbars.cached=e[0].offsetWidth==e[0].childNodes[0].offsetWidth,e.remove()}return this.floatingScrollbars.cached},forceFocus:function(t){var n=t[0]||t;document.addEventListener("click",function i(e){e.target===n&&e.$focus&&(n.focus(),e.stopImmediatePropagation(),e.preventDefault(),n.removeEventListener("click",i))},!0);var o=document.createEvent("MouseEvents");o.initMouseEvent("click",!1,!0,e,{},0,0,0,0,!1,!1,!1,!1,0,null),o.$material=!0,o.$focus=!0,n.dispatchEvent(o)},createBackdrop:function(e,t){return a(y.supplant('<md-backdrop class="{0}">',[t]))(e)},supplant:function(e,t,n){return n=n||/\{([^\{\}]*)\}/g,e.replace(n,function(e,n){var o=n.split("."),i=t;try{for(var r in o)o.hasOwnProperty(r)&&(i=i[o[r]])}catch(a){i=e}return"string"==typeof i||"number"==typeof i?i:e})},fakeNgModel:function(){return{$fake:!0,$setTouched:t.noop,$setViewValue:function(e){this.$viewValue=e,this.$render(e),this.$viewChangeListeners.forEach(function(e){e()})},$isEmpty:function(e){return 0===(""+e).length},$parsers:[],$formatters:[],$viewChangeListeners:[],$render:t.noop}},debounce:function(e,t,o,i){var a;return function(){var d=o,s=Array.prototype.slice.call(arguments);r.cancel(a),a=r(function(){a=n,e.apply(d,s)},t||10,i)}},throttle:function(e,t){var n;return function(){var o=this,i=arguments,r=y.now();(!n||r-n>t)&&(e.apply(o,i),n=r)}},time:function(e){var t=y.now();return e(),y.now()-t},valueOnUse:function(e,t,n){var o=null,i=Array.prototype.slice.call(arguments),r=i.length>3?i.slice(3):[];Object.defineProperty(e,t,{get:function(){return null===o&&(o=n.apply(e,r)),o}})},nextUid:function(){return""+i++},disconnectScope:function(e){if(e&&e.$root!==e&&!e.$$destroyed){var t=e.$parent;e.$$disconnected=!0,t.$$childHead===e&&(t.$$childHead=e.$$nextSibling),t.$$childTail===e&&(t.$$childTail=e.$$prevSibling),e.$$prevSibling&&(e.$$prevSibling.$$nextSibling=e.$$nextSibling),e.$$nextSibling&&(e.$$nextSibling.$$prevSibling=e.$$prevSibling),e.$$nextSibling=e.$$prevSibling=null}},reconnectScope:function(e){if(e&&e.$root!==e&&e.$$disconnected){var t=e,n=t.$parent;t.$$disconnected=!1,t.$$prevSibling=n.$$childTail,n.$$childHead?(n.$$childTail.$$nextSibling=t,n.$$childTail=t):n.$$childHead=n.$$childTail=t}},getClosest:function(e,n,o){if(t.isString(n)){var i=n.toUpperCase();n=function(e){return e.nodeName.toUpperCase()===i}}if(e instanceof t.element&&(e=e[0]),o&&(e=e.parentNode),!e)return null;do if(n(e))return e;while(e=e.parentNode);return null},elementContains:function(n,o){var i=e.Node&&e.Node.prototype&&Node.prototype.contains,r=i?t.bind(n,n.contains):t.bind(n,function(e){return n===o||!!(16&this.compareDocumentPosition(e))});return r(o)},extractElementByName:function(e,n,o,i){function r(e){return a(e)||(o?d(e):null)}function a(e){if(e)for(var t=0,o=e.length;t<o;t++)if(e[t].nodeName.toLowerCase()===n)return e[t];return null}function d(e){var t;if(e)for(var n=0,o=e.length;n<o;n++){var i=e[n];if(!t)for(var a=0,d=i.childNodes.length;a<d;a++)t=t||r([i.childNodes[a]])}return t}var s=r(e);return!s&&i&&c.warn(y.supplant("Unable to find node '{0}' in element '{1}'.",[n,e[0].outerHTML])),t.element(s||e)},initOptionalProperties:function(e,n,o){o=o||{},t.forEach(e.$$isolateBindings,function(i,r){if(i.optional&&t.isUndefined(e[r])){var a=t.isDefined(n[i.attrName]);e[r]=t.isDefined(o[r])?o[r]:a}})},nextTick:function(e,t,n){function o(){var e=i.queue,t=i.digest;i.queue=[],i.timeout=null,i.digest=!1,e.forEach(function(e){var t=e.scope&&e.scope.$$destroyed;t||e.callback()}),t&&d.$digest()}var i=y.nextTick,a=i.timeout,s=i.queue||[];return s.push({scope:n,callback:e}),null==t&&(t=!0),i.digest=i.digest||t,i.queue=s,a||(i.timeout=r(o,0,!1))},processTemplate:function(e){return $?e:e&&t.isString(e)?e.replace(/\{\{/g,v).replace(/}}/g,E):e},getParentWithPointerEvents:function(e){for(var t=e.parent();C(t,"pointer-events","none");)t=t.parent();return t},getNearestContentElement:function(e){for(var t=e.parent()[0];t&&t!==m[0]&&t!==document.body&&"MD-CONTENT"!==t.nodeName.toUpperCase();)t=t.parentNode;return t},checkStickySupport:function(){var e,n=t.element("<div>");o[0].body.appendChild(n[0]);for(var i=["sticky","-webkit-sticky"],r=0;r<i.length;++r)if(n.css({position:i[r],top:0,"z-index":2}),n.css("position")==i[r]){e=i[r];break}return n.remove(),e},parseAttributeBoolean:function(e,t){return""===e||!!e&&(t===!1||"false"!==e&&"0"!==e)},hasComputedStyle:C,isParentFormSubmitted:function(e){var n=y.getClosest(e,"form"),o=n?t.element(n).controller("form"):null;return!!o&&o.$submitted},animateScrollTo:function(e,t,n){function o(){var n=i();e.scrollTop=n,(s?n<t:n>t)&&p(o)}function i(){var e=n||1e3,t=y.now()-l;return r(t,a,d,e)}function r(e,t,n,o){if(e>o)return t+n;var i=(e/=o)*e,r=i*e;return t+n*(-2*r+3*i)}var a=e.scrollTop,d=t-a,s=a<t,l=y.now();p(o)},uniq:function(e){if(e)return e.filter(function(e,t,n){return n.indexOf(e)===t})}};return y.dom.animator=s(y),y}o.$inject=["$document","$timeout","$compile","$rootScope","$$mdAnimate","$interpolate","$log","$rootElement","$window","$$rAF"];var i=0;t.module("material.core").factory("$mdUtil",o),t.element.prototype.focus=t.element.prototype.focus||function(){return this.length&&this[0].focus(),this},t.element.prototype.blur=t.element.prototype.blur||function(){return this.length&&this[0].blur(),this}}(),function(){function e(e,t,n,o,i){this.$q=e,this.$templateRequest=t,this.$injector=n,this.$compile=o,this.$controller=i}e.$inject=["$q","$templateRequest","$injector","$compile","$controller"],t.module("material.core").service("$mdCompiler",e),e.prototype.compile=function(e){return e.contentElement?this._prepareContentElement(e):this._compileTemplate(e)},e.prototype._prepareContentElement=function(e){var t=this._fetchContentElement(e);return this.$q.resolve({element:t.element,cleanup:t.restore,locals:{},link:function(){return t.element}})},e.prototype._compileTemplate=function(e){var n=this,o=e.templateUrl,i=e.template||"",r=t.extend({},e.resolve),a=t.extend({},e.locals),d=e.transformTemplate||t.identity;return t.forEach(r,function(e,o){t.isString(e)?r[o]=n.$injector.get(e):r[o]=n.$injector.invoke(e)}),t.extend(r,a),o?r.$$ngTemplate=this.$templateRequest(o):r.$$ngTemplate=this.$q.when(i),this.$q.all(r).then(function(o){var i=d(o.$$ngTemplate,e),r=e.element||t.element("<div>").html(i.trim()).contents();return n._compileElement(o,r,e)})},e.prototype._compileElement=function(e,n,o){function i(i){if(e.$scope=i,o.controller){var s=t.extend(e,{$element:n}),l=r.$controller(o.controller,s,!0,o.controllerAs);o.bindToController&&t.extend(l.instance,e);var c=l();n.data("$ngControllerController",c),n.children().data("$ngControllerController",c),d.controller=c}return a(i)}var r=this,a=this.$compile(n),d={element:n,cleanup:n.remove.bind(n),locals:e,link:i};return d},e.prototype._fetchContentElement=function(e){function n(e){var t=e.parentNode,n=e.nextElementSibling;return function(){n?t.insertBefore(e,n):t.appendChild(e)}}var o=e.contentElement,i=null;return t.isString(o)?(o=document.querySelector(o),i=n(o)):(o=o[0]||o,i=document.contains(o)?n(o):function(){o.parentNode&&o.parentNode.removeChild(o)}),{element:t.element(o),restore:i}}}(),function(){function e(){function e(){t.showWarnings=!1}var t={showWarnings:!0};return{disableWarnings:e,$get:["$$rAF","$log","$window","$interpolate",function(e,o,i,r){return n.apply(t,arguments)}]}}function n(e,n,o,i){function r(e,o,i){var r=t.element(e)[0]||e;!r||r.hasAttribute(o)&&0!==r.getAttribute(o).length||c(r,o)||(i=t.isString(i)?i.trim():"",i.length?e.attr(o,i):m&&n.warn('ARIA: Attribute "',o,'", required for accessibility, is missing on node:',r))}function a(t,n,o){e(function(){r(t,n,o())})}function d(e,t){var n=l(e)||"",o=n.indexOf(i.startSymbol())>-1;o?a(e,t,function(){return l(e)}):r(e,t,n)}function s(e,t){var n=l(e),o=n.indexOf(i.startSymbol())>-1;o||n||r(e,t,n)}function l(e){function t(t){for(;t.parentNode&&(t=t.parentNode)!==e;)if(t.getAttribute&&"true"===t.getAttribute("aria-hidden"))return!0}e=e[0]||e;for(var n,o=document.createTreeWalker(e,NodeFilter.SHOW_TEXT,null,!1),i="";n=o.nextNode();)t(n)||(i+=n.textContent);return i.trim()||""}function c(e,t){function n(e){var t=e.currentStyle?e.currentStyle:o.getComputedStyle(e);return"none"===t.display}var i=e.hasChildNodes(),r=!1;if(i)for(var a=e.childNodes,d=0;d<a.length;d++){var s=a[d];1===s.nodeType&&s.hasAttribute(t)&&(n(s)||(r=!0))}return r}var m=this.showWarnings;return{expect:r,expectAsync:a,expectWithText:d,expectWithoutText:s,getText:l}}n.$inject=["$$rAF","$log","$window","$interpolate"],t.module("material.core").provider("$mdAria",e)}(),function(){function n(){}function o(n,o,i){function r(e){return function(t,n){n.distance<this.state.options.maxDistance&&this.dispatchEvent(t,e,n)}}function a(e,t,n){var o=h[t.replace(/^\$md./,"")];if(!o)throw new Error("Failed to register element with handler "+t+". Available handlers: "+Object.keys(h).join(", "));return o.registerElement(e,n)}function s(e,o){var i=new n(e);return t.extend(i,o),h[e]=i,v}function l(){for(var e=document.createElement("div"),n=["","webkit","Moz","MS","ms","o"],o=0;o<n.length;o++){var i=n[o],r=i?i+"TouchAction":"touchAction";if(t.isDefined(e.style[r]))return r}}var m=navigator.userAgent||navigator.vendor||e.opera,u=m.match(/ipad|iphone|ipod/i),p=m.match(/android/i),g=l(),b="undefined"!=typeof e.jQuery&&t.element===e.jQuery,v={handler:s,register:a,isHijackingClicks:(u||p)&&!b&&!f};if(v.isHijackingClicks){var E=6;v.handler("click",{options:{maxDistance:E},onEnd:r("click")}),v.handler("focus",{options:{maxDistance:E},onEnd:function(e,t){function n(e){var t=["INPUT","SELECT","BUTTON","TEXTAREA","VIDEO","AUDIO"];return"-1"!=e.getAttribute("tabindex")&&!e.hasAttribute("DISABLED")&&(e.hasAttribute("tabindex")||e.hasAttribute("href")||e.isContentEditable||t.indexOf(e.nodeName)!=-1)}t.distance<this.state.options.maxDistance&&n(e.target)&&(this.dispatchEvent(e,"focus",t),e.target.focus())}}),v.handler("mouseup",{options:{maxDistance:E},onEnd:r("mouseup")}),v.handler("mousedown",{onStart:function(e){this.dispatchEvent(e,"mousedown")}})}return v.handler("press",{onStart:function(e,t){this.dispatchEvent(e,"$md.pressdown")},onEnd:function(e,t){this.dispatchEvent(e,"$md.pressup")}}).handler("hold",{options:{maxDistance:6,delay:500},onCancel:function(){i.cancel(this.state.timeout)},onStart:function(e,n){return this.state.registeredParent?(this.state.pos={x:n.x,y:n.y},void(this.state.timeout=i(t.bind(this,function(){this.dispatchEvent(e,"$md.hold"),this.cancel()}),this.state.options.delay,!1))):this.cancel()},onMove:function(e,t){g||"touchmove"!==e.type||e.preventDefault();var n=this.state.pos.x-t.x,o=this.state.pos.y-t.y;Math.sqrt(n*n+o*o)>this.options.maxDistance&&this.cancel()},onEnd:function(){this.onCancel()}}).handler("drag",{options:{minDistance:6,horizontal:!0,cancelMultiplier:1.5},onSetup:function(e,t){g&&(this.oldTouchAction=e[0].style[g],e[0].style[g]=t.horizontal?"pan-y":"pan-x")},onCleanup:function(e){this.oldTouchAction&&(e[0].style[g]=this.oldTouchAction)},onStart:function(e){this.state.registeredParent||this.cancel()},onMove:function(e,t){var n,o;g||"touchmove"!==e.type||e.preventDefault(),this.state.dragPointer?this.dispatchDragMove(e):(this.state.options.horizontal?(n=Math.abs(t.distanceX)>this.state.options.minDistance,o=Math.abs(t.distanceY)>this.state.options.minDistance*this.state.options.cancelMultiplier):(n=Math.abs(t.distanceY)>this.state.options.minDistance,o=Math.abs(t.distanceX)>this.state.options.minDistance*this.state.options.cancelMultiplier),n?(this.state.dragPointer=d(e),c(e,this.state.dragPointer),this.dispatchEvent(e,"$md.dragstart",this.state.dragPointer)):o&&this.cancel())},dispatchDragMove:o.throttle(function(e){this.state.isRunning&&(c(e,this.state.dragPointer),this.dispatchEvent(e,"$md.drag",this.state.dragPointer))}),onEnd:function(e,t){this.state.dragPointer&&(c(e,this.state.dragPointer),this.dispatchEvent(e,"$md.dragend",this.state.dragPointer))}}).handler("swipe",{options:{minVelocity:.65,minDistance:10},onEnd:function(e,t){var n;Math.abs(t.velocityX)>this.state.options.minVelocity&&Math.abs(t.distanceX)>this.state.options.minDistance?(n="left"==t.directionX?"$md.swipeleft":"$md.swiperight",this.dispatchEvent(e,n)):Math.abs(t.velocityY)>this.state.options.minVelocity&&Math.abs(t.distanceY)>this.state.options.minDistance&&(n="up"==t.directionY?"$md.swipeup":"$md.swipedown",this.dispatchEvent(e,n))}})}function i(e){this.name=e,this.state={}}function r(){function n(e,n,o){o=o||u;var i=new t.element.Event(n);i.$material=!0,i.pointer=o,i.srcEvent=e,t.extend(i,{clientX:o.x,clientY:o.y,screenX:o.x,screenY:o.y,pageX:o.x,pageY:o.y,ctrlKey:e.ctrlKey,altKey:e.altKey,shiftKey:e.shiftKey,metaKey:e.metaKey}),t.element(o.target).trigger(i)}function o(t,n,o){o=o||u;var i;"click"===n||"mouseup"==n||"mousedown"==n?(i=document.createEvent("MouseEvents"),i.initMouseEvent(n,!0,!0,e,t.detail,o.x,o.y,o.x,o.y,t.ctrlKey,t.altKey,t.shiftKey,t.metaKey,t.button,t.relatedTarget||null)):(i=document.createEvent("CustomEvent"),i.initCustomEvent(n,!0,!0,{})),i.$material=!0,i.pointer=o,i.srcEvent=t,o.target.dispatchEvent(i)}var r="undefined"!=typeof e.jQuery&&t.element===e.jQuery;return i.prototype={options:{},dispatchEvent:r?n:o,onSetup:t.noop,onCleanup:t.noop,onStart:t.noop,onMove:t.noop,onEnd:t.noop,onCancel:t.noop,start:function(e,n){if(!this.state.isRunning){var o=this.getNearestParent(e.target),i=o&&o.$mdGesture[this.name]||{};this.state={isRunning:!0,options:t.extend({},this.options,i),registeredParent:o},this.onStart(e,n)}},move:function(e,t){this.state.isRunning&&this.onMove(e,t)},end:function(e,t){this.state.isRunning&&(this.onEnd(e,t),this.state.isRunning=!1)},cancel:function(e,t){this.onCancel(e,t),this.state={}},getNearestParent:function(e){for(var t=e;t;){if((t.$mdGesture||{})[this.name])return t;t=t.parentNode}return null},registerElement:function(e,t){function n(){delete e[0].$mdGesture[o.name],e.off("$destroy",n),o.onCleanup(e,t||{})}var o=this;return e[0].$mdGesture=e[0].$mdGesture||{},e[0].$mdGesture[this.name]=t||{},e.on("$destroy",n),o.onSetup(e,t||{}),n}},i}function a(e,n){function o(e){var t=!e.clientX&&!e.clientY;t||e.$material||e.isIonicTap||l(e)||(e.preventDefault(),e.stopPropagation())}function i(e){var t=0===e.clientX&&0===e.clientY;t||e.$material||e.isIonicTap||l(e)?(g=null,"label"==e.target.tagName.toLowerCase()&&(g={x:e.x,y:e.y})):(e.preventDefault(),e.stopPropagation(),g=null)}function r(e,t){var o;for(var i in h)o=h[i],o instanceof n&&("start"===e&&o.cancel(),o[e](t,u))}function a(e){if(!u){var t=+Date.now();p&&!s(e,p)&&t-p.endTime<1500||(u=d(e),r("start",e))}}function m(e){u&&s(e,u)&&(c(e,u),r("move",e))}function f(e){u&&s(e,u)&&(c(e,u),u.endTime=+Date.now(),r("end",e),p=u,u=null)}document.contains||(document.contains=function(e){return document.body.contains(e)}),!b&&e.isHijackingClicks&&(document.addEventListener("click",i,!0),document.addEventListener("mouseup",o,!0),document.addEventListener("mousedown",o,!0),document.addEventListener("focus",o,!0),b=!0);var v="mousedown touchstart pointerdown",E="mousemove touchmove pointermove",$="mouseup mouseleave touchend touchcancel pointerup pointercancel";t.element(document).on(v,a).on(E,m).on($,f).on("$$mdGestureReset",function(){p=u=null})}function d(e){var t=m(e),n={startTime:+Date.now(),target:e.target,type:e.type.charAt(0)};return n.startX=n.x=t.pageX,n.startY=n.y=t.pageY,n}function s(e,t){return e&&t&&e.type.charAt(0)===t.type}function l(e){return g&&g.x==e.x&&g.y==e.y}function c(e,t){var n=m(e),o=t.x=n.pageX,i=t.y=n.pageY;t.distanceX=o-t.startX,t.distanceY=i-t.startY,t.distance=Math.sqrt(t.distanceX*t.distanceX+t.distanceY*t.distanceY),t.directionX=t.distanceX>0?"right":t.distanceX<0?"left":"",t.directionY=t.distanceY>0?"down":t.distanceY<0?"up":"",t.duration=+Date.now()-t.startTime,t.velocityX=t.distanceX/t.duration,t.velocityY=t.distanceY/t.duration}function m(e){return e=e.originalEvent||e,e.touches&&e.touches[0]||e.changedTouches&&e.changedTouches[0]||e}o.$inject=["$$MdGestureHandler","$$rAF","$timeout"],a.$inject=["$mdGesture","$$MdGestureHandler"];var u,p,h={},f=!1,g=null,b=!1;t.module("material.core.gestures",[]).provider("$mdGesture",n).factory("$$MdGestureHandler",r).run(a),n.prototype={skipClickHijack:function(){return f=!0},$get:["$$MdGestureHandler","$$rAF","$timeout",function(e,t,n){return new o(e,t,n)}]}}(),function(){function e(){function e(e){function n(e){return s.optionsFactory=e.options,s.methods=(e.methods||[]).concat(a),l}function o(e,t){return d[e]=t,l}function i(t,n){if(n=n||{},n.methods=n.methods||[],n.options=n.options||function(){return{}},/^cancel|hide|show$/.test(t))throw new Error("Preset '"+t+"' in "+e+" is reserved!");if(n.methods.indexOf("_options")>-1)throw new Error("Method '_options' in "+e+" is reserved!");return s.presets[t]={methods:n.methods.concat(a),optionsFactory:n.options,argOption:n.argOption},l}function r(n,o){function i(e){return e=e||{},e._options&&(e=e._options),m.show(t.extend({},c,e))}function r(e){return m.destroy(e)}function a(t,n){var i={};return i[e]=u,o.invoke(t||function(){return n},{},i)}var l,c,m=n(),u={hide:m.hide,cancel:m.cancel,show:i,destroy:r};return l=s.methods||[],c=a(s.optionsFactory,{}),t.forEach(d,function(e,t){u[t]=e}),t.forEach(s.presets,function(e,n){function o(e){this._options=t.extend({},i,e)}var i=a(e.optionsFactory,{}),r=(e.methods||[]).concat(l);if(t.extend(i,{$type:n}),t.forEach(r,function(e){o.prototype[e]=function(t){return this._options[e]=t,this}}),e.argOption){var d="show"+n.charAt(0).toUpperCase()+n.slice(1);u[d]=function(e){var t=u[n](e);return u.show(t)}}u[n]=function(n){return arguments.length&&e.argOption&&!t.isObject(n)&&!t.isArray(n)?(new o)[e.argOption](n):new o(n)}}),u}r.$inject=["$$interimElement","$injector"];var a=["onHide","onShow","onRemove"],d={},s={presets:{}},l={setDefaults:n,addPreset:i,addMethod:o,$get:r};return l.addPreset("build",{methods:["controller","controllerAs","resolve","multiple","template","templateUrl","themable","transformTemplate","parent","contentElement"]}),l}function o(e,o,i,r,a,d,s,l,c,m,u){return function(){function p(e){e=e||{};var t=new v(e||{}),n=e.multiple?o.resolve():o.all(C);e.multiple||(n=n.then(function(){var e=y.concat(M.map(E.cancel));return o.all(e)}));var i=n.then(function(){return t.show()["catch"](function(e){return e})["finally"](function(){C.splice(C.indexOf(i),1),M.push(t)})});return C.push(i),t.deferred.promise["catch"](function(e){return e instanceof Error&&u(e),e}),t.deferred.promise}function h(e,t){function i(n){var o=n.remove(e,!1,t||{})["catch"](function(e){return e})["finally"](function(){y.splice(y.indexOf(o),1)});return M.splice(M.indexOf(n),1),y.push(o),n.deferred.promise}return t=t||{},t.closeAll?o.all(M.slice().reverse().map(i)):t.closeTo!==n?o.all(M.slice(t.closeTo).map(i)):i(M[M.length-1])}function f(e,n){var i=M.pop();if(!i)return o.when(e);var r=i.remove(e,!0,n||{})["catch"](function(e){return e})["finally"](function(){y.splice(y.indexOf(r),1)});return y.push(r),i.deferred.promise["catch"](t.noop)}function g(e){return function(){var t=arguments;return M.length?e.apply(E,t):C.length?C[0]["finally"](function(){return e.apply(E,t)}):o.when("No interim elements currently showing up.")}}function b(e){var n=e?null:M.shift(),i=t.element(e).length&&t.element(e)[0].parentNode;if(i){var r=M.filter(function(e){return e.options.element[0]===i});r.length&&(n=r[0],M.splice(M.indexOf(n),1))}return n?n.remove($,!1,{$destroy:!0}):o.when($)}function v(m){function u(){return o(function(e,t){function n(e){y.deferred.reject(e),t(e)}m.onCompiling&&m.onCompiling(m),f(m).then(function(t){M=g(t,m),m.cleanupElement=t.cleanup,T=$(M,m,t.controller).then(e,n)})["catch"](n)})}function p(e,n,i){function r(e){y.deferred.resolve(e)}function a(e){y.deferred.reject(e)}return M?(m=t.extend(m||{},i||{}),m.cancelAutoHide&&m.cancelAutoHide(),m.element.triggerHandler("$mdInterimElementRemove"),m.$destroy===!0?C(m.element,m).then(function(){n&&a(e)||r(e)}):(o.when(T)["finally"](function(){C(m.element,m).then(function(){n?a(e):r(e)},a)}),y.deferred.promise)):o.when(!1)}function h(e){return e=e||{},e.template&&(e.template=s.processTemplate(e.template)),
t.extend({preserveScope:!1,cancelAutoHide:t.noop,scope:e.scope||i.$new(e.isolateScope),onShow:function(e,t,n){return d.enter(t,n.parent)},onRemove:function(e,t){return t&&d.leave(t)||o.when()}},e)}function f(e){var t=e.skipCompile?null:l.compile(e);return t||o(function(t){t({locals:{},link:function(){return e.element}})})}function g(e,n){t.extend(e.locals,n);var o=e.link(n.scope);return n.element=o,n.parent=b(o,n),n.themable&&c(o),o}function b(n,o){var i=o.parent;if(i=t.isFunction(i)?i(o.scope,n,o):t.isString(i)?t.element(e[0].querySelector(i)):t.element(i),!(i||{}).length){var r;return a[0]&&a[0].querySelector&&(r=a[0].querySelector(":not(svg) > body")),r||(r=a[0]),"#comment"==r.nodeName&&(r=e[0].body),t.element(r)}return i}function v(){var e,o=t.noop;m.hideDelay&&(e=r(E.hide,m.hideDelay),o=function(){r.cancel(e)}),m.cancelAutoHide=function(){o(),m.cancelAutoHide=n}}function $(e,n,i){var r=n.onShowing||t.noop,a=n.onComplete||t.noop;try{r(n.scope,e,n,i)}catch(d){return o.reject(d)}return o(function(t,r){try{o.when(n.onShow(n.scope,e,n,i)).then(function(){a(n.scope,e,n),v(),t(e)},r)}catch(d){r(d.message)}})}function C(e,n){var i=n.onRemoving||t.noop;return o(function(t,r){try{var a=o.when(n.onRemove(n.scope,e,n)||!0);i(e,a),n.$destroy?(t(e),!n.preserveScope&&n.scope&&a.then(function(){n.scope.$destroy()})):a.then(function(){!n.preserveScope&&n.scope&&n.scope.$destroy(),t(e)},r)}catch(d){r(d.message)}})}var y,M,T=o.when(!0);return m=h(m),y={options:m,deferred:o.defer(),show:u,remove:p}}var E,$=!1,C=[],y=[],M=[];return E={show:p,hide:g(h),cancel:g(f),destroy:b,$injector_:m}}}return o.$inject=["$document","$q","$rootScope","$timeout","$rootElement","$animate","$mdUtil","$mdCompiler","$mdTheming","$injector","$exceptionHandler"],e.$get=o,e}t.module("material.core").provider("$$interimElement",e)}(),function(){function n(e,n){this.$timeout=e,this.$mdUtil=n,this.bodyElement=t.element(document.body),this.isBuffering=!1,this.bufferTimeout=null,this.lastInteractionType=null,this.lastInteractionTime=null,this.inputEventMap={keydown:"keyboard",mousedown:"mouse",mouseenter:"mouse",touchstart:"touch",pointerdown:"pointer",MSPointerDown:"pointer"},this.iePointerMap={2:"touch",3:"touch",4:"mouse"},this.initializeEvents()}n.$inject=["$timeout","$mdUtil"],t.module("material.core.interaction",[]).service("$mdInteraction",n),n.prototype.initializeEvents=function(){var t="MSPointerEvent"in e?"MSPointerDown":"PointerEvent"in e?"pointerdown":null;this.bodyElement.on("keydown mousedown",this.onInputEvent.bind(this)),"ontouchstart"in document.documentElement&&this.bodyElement.on("touchstart",this.onBufferInputEvent.bind(this)),t&&this.bodyElement.on(t,this.onInputEvent.bind(this))},n.prototype.onInputEvent=function(e){if(!this.isBuffering){var t=this.inputEventMap[e.type];"pointer"===t&&(t=this.iePointerMap[e.pointerType]||e.pointerType),this.lastInteractionType=t,this.lastInteractionTime=this.$mdUtil.now()}},n.prototype.onBufferInputEvent=function(e){this.$timeout.cancel(this.bufferTimeout),this.onInputEvent(e),this.isBuffering=!0,this.bufferTimeout=this.$timeout(function(){this.isBuffering=!1}.bind(this),650,!1)},n.prototype.getLastInteractionType=function(){return this.lastInteractionType},n.prototype.isUserInvoked=function(e){var n=t.isNumber(e)?e:15;return this.lastInteractionTime>=this.$mdUtil.now()-n}}(),function(){!function(){function e(e){function d(e){return e.replace(m,"").replace(u,function(e,t,n,o){return o?n.toUpperCase():n})}var m=/^((?:x|data)[\:\-_])/i,u=/([\:\-\_]+(.))/g,p=["","xs","gt-xs","sm","gt-sm","md","gt-md","lg","gt-lg","xl","print"],h=["layout","flex","flex-order","flex-offset","layout-align"],f=["show","hide","layout-padding","layout-margin"];t.forEach(p,function(n){t.forEach(h,function(t){var o=n?t+"-"+n:t;e.directive(d(o),r(o))}),t.forEach(f,function(t){var o=n?t+"-"+n:t;e.directive(d(o),a(o))})}),e.provider("$$mdLayout",function(){return{$get:t.noop,validateAttributeValue:c,validateAttributeUsage:l,disableLayouts:function(e){A.enabled=e!==!0}}}).directive("mdLayoutCss",o).directive("ngCloak",i("ng-cloak")).directive("layoutWrap",a("layout-wrap")).directive("layoutNowrap",a("layout-nowrap")).directive("layoutNoWrap",a("layout-no-wrap")).directive("layoutFill",a("layout-fill")).directive("layoutLtMd",s("layout-lt-md",!0)).directive("layoutLtLg",s("layout-lt-lg",!0)).directive("flexLtMd",s("flex-lt-md",!0)).directive("flexLtLg",s("flex-lt-lg",!0)).directive("layoutAlignLtMd",s("layout-align-lt-md")).directive("layoutAlignLtLg",s("layout-align-lt-lg")).directive("flexOrderLtMd",s("flex-order-lt-md")).directive("flexOrderLtLg",s("flex-order-lt-lg")).directive("offsetLtMd",s("flex-offset-lt-md")).directive("offsetLtLg",s("flex-offset-lt-lg")).directive("hideLtMd",s("hide-lt-md")).directive("hideLtLg",s("hide-lt-lg")).directive("showLtMd",s("show-lt-md")).directive("showLtLg",s("show-lt-lg")).config(n)}function n(){var e=!!document.querySelector("[md-layouts-disabled]");A.enabled=!e}function o(){return A.enabled=!1,{restrict:"A",priority:"900"}}function i(e){return["$timeout",function(n){return{restrict:"A",priority:-10,compile:function(o){return A.enabled?(o.addClass(e),function(t,o){n(function(){o.removeClass(e)},10,!1)}):t.noop}}}]}function r(e){function n(t,n,o){var i=d(n,e,o),r=o.$observe(o.$normalize(e),i);i(p(e,o,"")),t.$on("$destroy",function(){r()})}return["$mdUtil","$interpolate","$log",function(o,i,r){return g=o,b=i,v=r,{restrict:"A",compile:function(o,i){var r;return A.enabled&&(l(e,i,o,v),c(e,p(e,i,""),m(o,e,i)),r=n),r||t.noop}}}]}function a(e){function n(t,n){n.addClass(e)}return["$mdUtil","$interpolate","$log",function(o,i,r){return g=o,b=i,v=r,{restrict:"A",compile:function(o,i){var r;return A.enabled&&(c(e,p(e,i,""),m(o,e,i)),n(null,o),r=n),r||t.noop}}}]}function d(e,n){var o;return function(i){var r=c(n,i||"");t.isDefined(r)&&(o&&e.removeClass(o),o=r?n+"-"+r.replace($,"-"):n,e.addClass(o))}}function s(e){var n=e.split("-");return["$log",function(o){return o.warn(e+"has been deprecated. Please use a `"+n[0]+"-gt-<xxx>` variant."),t.noop}]}function l(e,t,n,o){var i,r,a,d=n[0].nodeName.toLowerCase();switch(e.replace(E,"")){case"flex":"md-button"!=d&&"fieldset"!=d||(r="<"+d+" "+e+"></"+d+">",a="https://github.com/philipwalton/flexbugs#9-some-html-elements-cant-be-flex-containers",i="Markup '{0}' may not work as expected in IE Browsers. Consult '{1}' for details.",o.warn(g.supplant(i,[r,a])))}}function c(e,n,o){var i=n;if(!u(n)){switch(e.replace(E,"")){case"layout":h(n,y)||(n=y[0]);break;case"flex":h(n,C)||isNaN(n)&&(n="");break;case"flex-offset":case"flex-order":n&&!isNaN(+n)||(n="0");break;case"layout-align":var r=f(n);n=g.supplant("{main}-{cross}",r);break;case"layout-padding":case"layout-margin":case"layout-fill":case"layout-wrap":case"layout-nowrap":case"layout-nowrap":n=""}n!=i&&(o||t.noop)(n)}return n}function m(e,t,n){return function(e){u(e)||(n[n.$normalize(t)]=e)}}function u(e){return(e||"").indexOf(b.startSymbol())>-1}function p(e,t,n){var o=t.$normalize(e);return t[o]?t[o].replace($,"-"):n||null}function h(e,t,n){e=n&&e?e.replace($,n):e;var o=!1;return e&&t.forEach(function(t){t=n?t.replace($,n):t,o=o||t===e}),o}function f(e){var t,n={main:"start",cross:"stretch"};return e=e||"",0!==e.indexOf("-")&&0!==e.indexOf(" ")||(e="none"+e),t=e.toLowerCase().trim().replace($,"-").split("-"),t.length&&"space"===t[0]&&(t=[t[0]+"-"+t[1],t[2]]),t.length>0&&(n.main=t[0]||n.main),t.length>1&&(n.cross=t[1]||n.cross),M.indexOf(n.main)<0&&(n.main="start"),T.indexOf(n.cross)<0&&(n.cross="stretch"),n}var g,b,v,E=/(-gt)?-(sm|md|lg|print)/g,$=/\s+/g,C=["grow","initial","auto","none","noshrink","nogrow"],y=["row","column"],M=["","start","center","end","stretch","space-around","space-between"],T=["","start","center","end","stretch"],A={enabled:!0,breakpoints:[]};e(t.module("material.core.layout",["ng"]))}()}(),function(){function e(e){this._$timeout=e,this._liveElement=this._createLiveElement(),this._announceTimeout=100}e.$inject=["$timeout"],t.module("material.core").service("$mdLiveAnnouncer",e),e.prototype.announce=function(e,t){t||(t="polite");var n=this;n._liveElement.textContent="",n._liveElement.setAttribute("aria-live",t),n._$timeout(function(){n._liveElement.textContent=e},n._announceTimeout,!1)},e.prototype._createLiveElement=function(){var e=document.createElement("div");return e.classList.add("md-visually-hidden"),e.setAttribute("role","status"),e.setAttribute("aria-atomic","true"),e.setAttribute("aria-live","polite"),document.body.appendChild(e),e}}(),function(){t.module("material.core.meta",[]).provider("$$mdMeta",function(){function e(e){if(r[e])return!0;var n=document.getElementsByName(e)[0];return!!n&&(r[e]=t.element(n),!0)}function n(n,o){if(e(n),r[n])r[n].attr("content",o);else{var a=t.element('<meta name="'+n+'" content="'+o+'"/>');i.append(a),r[n]=a}return function(){r[n].attr("content",""),r[n].remove(),delete r[n]}}function o(t){if(!e(t))throw Error("$$mdMeta: could not find a meta tag with the name '"+t+"'");return r[t].attr("content")}var i=t.element(document.head),r={},a={setMeta:n,getMeta:o};return t.extend({},a,{$get:function(){return a}})})}(),function(){function e(e,o){function i(e){return e&&""!==e}var r,a=[],d={};return r={notFoundError:function(t,n){e.error((n||"")+"No instance found for handle",t)},getInstances:function(){return a},get:function(e){if(!i(e))return null;var t,n,o;for(t=0,n=a.length;t<n;t++)if(o=a[t],o.$$mdHandle===e)return o;return null},register:function(e,n){function o(){var t=a.indexOf(e);t!==-1&&a.splice(t,1)}function i(){var t=d[n];t&&(t.forEach(function(t){t.resolve(e)}),delete d[n])}return n?(e.$$mdHandle=n,a.push(e),i(),o):t.noop},when:function(e){if(i(e)){var t=o.defer(),a=r.get(e);return a?t.resolve(a):(d[e]===n&&(d[e]=[]),d[e].push(t)),t.promise}return o.reject("Invalid `md-component-id` value.")}}}e.$inject=["$log","$q"],t.module("material.core").factory("$mdComponentRegistry",e)}(),function(){!function(){function e(e){function n(e){return e.hasClass("md-icon-button")?{isMenuItem:e.hasClass("md-menu-item"),fitRipple:!0,center:!0}:{isMenuItem:e.hasClass("md-menu-item"),dimBackground:!0}}return{attach:function(o,i,r){return r=t.extend(n(i),r),e.attach(o,i,r)}}}e.$inject=["$mdInkRipple"],t.module("material.core").factory("$mdButtonInkRipple",e)}()}(),function(){!function(){function e(e){function n(n,o,i){return e.attach(n,o,t.extend({center:!0,dimBackground:!1,fitRipple:!0},i))}return{attach:n}}e.$inject=["$mdInkRipple"],t.module("material.core").factory("$mdCheckboxInkRipple",e)}()}(),function(){!function(){function e(e){function n(n,o,i){return e.attach(n,o,t.extend({center:!1,dimBackground:!0,outline:!1,rippleSize:"full"},i))}return{attach:n}}e.$inject=["$mdInkRipple"],t.module("material.core").factory("$mdListInkRipple",e)}()}(),function(){function e(e,n){return{controller:t.noop,link:function(t,o,i){i.hasOwnProperty("mdInkRippleCheckbox")?n.attach(t,o):e.attach(t,o)}}}function n(){function e(){n=!0}var n=!1;return{disableInkRipple:e,$get:["$injector",function(e){function i(i,r,a){return n||r.controller("mdNoInk")?t.noop:e.instantiate(o,{$scope:i,$element:r,rippleOptions:a})}return{attach:i}}]}}function o(e,n,o,i,r,a,d){this.$window=i,this.$timeout=r,this.$mdUtil=a,this.$mdColorUtil=d,this.$scope=e,this.$element=n,this.options=o,this.mousedown=!1,this.ripples=[],this.timeout=null,this.lastRipple=null,a.valueOnUse(this,"container",this.createContainer),this.$element.addClass("md-ink-ripple"),(n.controller("mdInkRipple")||{}).createRipple=t.bind(this,this.createRipple),(n.controller("mdInkRipple")||{}).setColor=t.bind(this,this.color),this.bindEvents()}function i(e,n){(e.mousedown||e.lastRipple)&&(e.mousedown=!1,e.$mdUtil.nextTick(t.bind(e,n),!1))}function r(){return{controller:t.noop}}o.$inject=["$scope","$element","rippleOptions","$window","$timeout","$mdUtil","$mdColorUtil"],e.$inject=["$mdButtonInkRipple","$mdCheckboxInkRipple"],t.module("material.core").provider("$mdInkRipple",n).directive("mdInkRipple",e).directive("mdNoInk",r).directive("mdNoBar",r).directive("mdNoStretch",r);var a=450;o.prototype.color=function(e){function n(){var e=o.options&&o.options.colorElement?o.options.colorElement:[],t=e.length?e[0]:o.$element[0];return t?o.$window.getComputedStyle(t).color:"rgb(0,0,0)"}var o=this;return t.isDefined(e)&&(o._color=o._parseColor(e)),o._color||o._parseColor(o.inkRipple())||o._parseColor(n())},o.prototype.calculateColor=function(){return this.color()},o.prototype._parseColor=function(e,t){t=t||1;var n=this.$mdColorUtil;if(e)return 0===e.indexOf("rgba")?e.replace(/\d?\.?\d*\s*\)\s*$/,(.1*t).toString()+")"):0===e.indexOf("rgb")?n.rgbToRgba(e):0===e.indexOf("#")?n.hexToRgba(e):void 0},o.prototype.bindEvents=function(){this.$element.on("mousedown",t.bind(this,this.handleMousedown)),this.$element.on("mouseup touchend",t.bind(this,this.handleMouseup)),this.$element.on("mouseleave",t.bind(this,this.handleMouseup)),this.$element.on("touchmove",t.bind(this,this.handleTouchmove))},o.prototype.handleMousedown=function(e){if(!this.mousedown)if(e.hasOwnProperty("originalEvent")&&(e=e.originalEvent),this.mousedown=!0,this.options.center)this.createRipple(this.container.prop("clientWidth")/2,this.container.prop("clientWidth")/2);else if(e.srcElement!==this.$element[0]){var t=this.$element[0].getBoundingClientRect(),n=e.clientX-t.left,o=e.clientY-t.top;this.createRipple(n,o)}else this.createRipple(e.offsetX,e.offsetY)},o.prototype.handleMouseup=function(){i(this,this.clearRipples)},o.prototype.handleTouchmove=function(){i(this,this.deleteRipples)},o.prototype.deleteRipples=function(){for(var e=0;e<this.ripples.length;e++)this.ripples[e].remove()},o.prototype.clearRipples=function(){for(var e=0;e<this.ripples.length;e++)this.fadeInComplete(this.ripples[e])},o.prototype.createContainer=function(){var e=t.element('<div class="md-ripple-container"></div>');return this.$element.append(e),e},o.prototype.clearTimeout=function(){this.timeout&&(this.$timeout.cancel(this.timeout),this.timeout=null)},o.prototype.isRippleAllowed=function(){var e=this.$element[0];do{if(!e.tagName||"BODY"===e.tagName)break;if(e&&t.isFunction(e.hasAttribute)){if(e.hasAttribute("disabled"))return!1;if("false"===this.inkRipple()||"0"===this.inkRipple())return!1}}while(e=e.parentNode);return!0},o.prototype.inkRipple=function(){return this.$element.attr("md-ink-ripple")},o.prototype.createRipple=function(e,n){function o(e,t,n){return e?Math.max(t,n):Math.sqrt(Math.pow(t,2)+Math.pow(n,2))}if(this.isRippleAllowed()){var i=this,r=i.$mdColorUtil,d=t.element('<div class="md-ripple"></div>'),s=this.$element.prop("clientWidth"),l=this.$element.prop("clientHeight"),c=2*Math.max(Math.abs(s-e),e),m=2*Math.max(Math.abs(l-n),n),u=o(this.options.fitRipple,c,m),p=this.calculateColor();d.css({left:e+"px",top:n+"px",background:"black",width:u+"px",height:u+"px",backgroundColor:r.rgbaToRgb(p),borderColor:r.rgbaToRgb(p)}),this.lastRipple=d,this.clearTimeout(),this.timeout=this.$timeout(function(){i.clearTimeout(),i.mousedown||i.fadeInComplete(d)},.35*a,!1),this.options.dimBackground&&this.container.css({backgroundColor:p}),this.container.append(d),this.ripples.push(d),d.addClass("md-ripple-placed"),this.$mdUtil.nextTick(function(){d.addClass("md-ripple-scaled md-ripple-active"),i.$timeout(function(){i.clearRipples()},a,!1)},!1)}},o.prototype.fadeInComplete=function(e){this.lastRipple===e?this.timeout||this.mousedown||this.removeRipple(e):this.removeRipple(e)},o.prototype.removeRipple=function(e){var t=this,n=this.ripples.indexOf(e);n<0||(this.ripples.splice(this.ripples.indexOf(e),1),e.removeClass("md-ripple-active"),e.addClass("md-ripple-remove"),0===this.ripples.length&&this.container.css({backgroundColor:""}),this.$timeout(function(){t.fadeOutComplete(e)},a,!1))},o.prototype.fadeOutComplete=function(e){e.remove(),this.lastRipple=null}}(),function(){!function(){function e(e){function n(n,o,i){return e.attach(n,o,t.extend({center:!1,dimBackground:!0,outline:!1,rippleSize:"full"},i))}return{attach:n}}e.$inject=["$mdInkRipple"],t.module("material.core").factory("$mdTabInkRipple",e)}()}(),function(){t.module("material.core.theming.palette",[]).constant("$mdColorPalette",{red:{50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 300 A100",contrastStrongLightColors:"400 500 600 700 A200 A400 A700"},pink:{50:"#fce4ec",100:"#f8bbd0",200:"#f48fb1",300:"#f06292",400:"#ec407a",500:"#e91e63",600:"#d81b60",700:"#c2185b",800:"#ad1457",900:"#880e4f",A100:"#ff80ab",A200:"#ff4081",A400:"#f50057",A700:"#c51162",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 A100",contrastStrongLightColors:"500 600 A200 A400 A700"},purple:{50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 A100",contrastStrongLightColors:"300 400 A200 A400 A700"},"deep-purple":{50:"#ede7f6",100:"#d1c4e9",200:"#b39ddb",300:"#9575cd",400:"#7e57c2",500:"#673ab7",600:"#5e35b1",700:"#512da8",800:"#4527a0",900:"#311b92",A100:"#b388ff",A200:"#7c4dff",A400:"#651fff",A700:"#6200ea",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 A100",contrastStrongLightColors:"300 400 A200"},indigo:{50:"#e8eaf6",100:"#c5cae9",200:"#9fa8da",300:"#7986cb",400:"#5c6bc0",500:"#3f51b5",600:"#3949ab",700:"#303f9f",800:"#283593",900:"#1a237e",A100:"#8c9eff",A200:"#536dfe",A400:"#3d5afe",A700:"#304ffe",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 A100",contrastStrongLightColors:"300 400 A200 A400"},blue:{50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 300 400 A100",contrastStrongLightColors:"500 600 700 A200 A400 A700"},"light-blue":{50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea",contrastDefaultColor:"dark",contrastLightColors:"600 700 800 900 A700",contrastStrongLightColors:"600 700 800 A700"},cyan:{50:"#e0f7fa",100:"#b2ebf2",200:"#80deea",300:"#4dd0e1",400:"#26c6da",500:"#00bcd4",600:"#00acc1",700:"#0097a7",800:"#00838f",900:"#006064",A100:"#84ffff",A200:"#18ffff",A400:"#00e5ff",A700:"#00b8d4",contrastDefaultColor:"dark",contrastLightColors:"700 800 900",contrastStrongLightColors:"700 800 900"},teal:{50:"#e0f2f1",100:"#b2dfdb",200:"#80cbc4",300:"#4db6ac",400:"#26a69a",500:"#009688",600:"#00897b",700:"#00796b",800:"#00695c",900:"#004d40",A100:"#a7ffeb",A200:"#64ffda",A400:"#1de9b6",A700:"#00bfa5",contrastDefaultColor:"dark",contrastLightColors:"500 600 700 800 900",contrastStrongLightColors:"500 600 700"},green:{50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853",contrastDefaultColor:"dark",contrastLightColors:"500 600 700 800 900",contrastStrongLightColors:"500 600 700"},"light-green":{50:"#f1f8e9",100:"#dcedc8",200:"#c5e1a5",300:"#aed581",400:"#9ccc65",500:"#8bc34a",600:"#7cb342",700:"#689f38",800:"#558b2f",900:"#33691e",A100:"#ccff90",A200:"#b2ff59",A400:"#76ff03",A700:"#64dd17",contrastDefaultColor:"dark",contrastLightColors:"700 800 900",contrastStrongLightColors:"700 800 900"},lime:{50:"#f9fbe7",100:"#f0f4c3",200:"#e6ee9c",300:"#dce775",400:"#d4e157",500:"#cddc39",600:"#c0ca33",700:"#afb42b",800:"#9e9d24",900:"#827717",A100:"#f4ff81",A200:"#eeff41",A400:"#c6ff00",A700:"#aeea00",contrastDefaultColor:"dark",contrastLightColors:"900",contrastStrongLightColors:"900"},yellow:{50:"#fffde7",100:"#fff9c4",200:"#fff59d",300:"#fff176",400:"#ffee58",500:"#ffeb3b",600:"#fdd835",700:"#fbc02d",800:"#f9a825",900:"#f57f17",A100:"#ffff8d",A200:"#ffff00",A400:"#ffea00",A700:"#ffd600",contrastDefaultColor:"dark"},amber:{50:"#fff8e1",100:"#ffecb3",200:"#ffe082",300:"#ffd54f",400:"#ffca28",500:"#ffc107",600:"#ffb300",700:"#ffa000",800:"#ff8f00",900:"#ff6f00",A100:"#ffe57f",A200:"#ffd740",A400:"#ffc400",A700:"#ffab00",contrastDefaultColor:"dark"},orange:{50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00",contrastDefaultColor:"dark",contrastLightColors:"800 900",contrastStrongLightColors:"800 900"},"deep-orange":{50:"#fbe9e7",100:"#ffccbc",200:"#ffab91",300:"#ff8a65",400:"#ff7043",500:"#ff5722",600:"#f4511e",700:"#e64a19",800:"#d84315",900:"#bf360c",A100:"#ff9e80",A200:"#ff6e40",A400:"#ff3d00",A700:"#dd2c00",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 300 400 A100 A200",contrastStrongLightColors:"500 600 700 800 900 A400 A700"},brown:{50:"#efebe9",100:"#d7ccc8",200:"#bcaaa4",300:"#a1887f",400:"#8d6e63",500:"#795548",600:"#6d4c41",700:"#5d4037",800:"#4e342e",900:"#3e2723",A100:"#d7ccc8",A200:"#bcaaa4",A400:"#8d6e63",A700:"#5d4037",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 A100 A200",contrastStrongLightColors:"300 400"},grey:{50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#ffffff",A200:"#000000",A400:"#303030",A700:"#616161",contrastDefaultColor:"dark",contrastLightColors:"600 700 800 900 A200 A400 A700"},"blue-grey":{50:"#eceff1",100:"#cfd8dc",200:"#b0bec5",300:"#90a4ae",400:"#78909c",500:"#607d8b",600:"#546e7a",700:"#455a64",800:"#37474f",900:"#263238",A100:"#cfd8dc",A200:"#b0bec5",A400:"#78909c",A700:"#455a64",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 300 A100 A200",contrastStrongLightColors:"400 500 700"}})}(),function(){!function(e){function t(e){var t=!!document.querySelector("[md-themes-disabled]");e.disableTheming(t)}function o(t,o){function i(e,t){return t=t||{},p[e]=a(e,t),h}function r(t,n){return a(t,e.extend({},p[t]||{},n))}function a(e,t){var n=w.filter(function(e){return!t[e]});if(n.length)throw new Error("Missing colors %1 in palette %2!".replace("%1",n.join(", ")).replace("%2",e));return t}function s(t,n){if(E[t])return E[t];n=n||"default";var o="string"==typeof n?E[n]:n,i=new c(t);return o&&e.forEach(o.colors,function(t,n){i.colors[n]={name:t.name,hues:e.extend({},t.hues)}}),E[t]=i,i}function c(t){function n(t){if(t=0===arguments.length||!!t,t!==o.isDark){o.isDark=t,o.foregroundPalette=o.isDark?g:f,o.foregroundShadow=o.isDark?b:v;var n=o.isDark?A:T,i=o.isDark?T:A;return e.forEach(n,function(e,t){var n=o.colors[t],r=i[t];if(n)for(var a in n.hues)n.hues[a]===r[a]&&(n.hues[a]=e[a])}),o}}var o=this;o.name=t,o.colors={},o.dark=n,n(!1),y.forEach(function(t){var n=(o.isDark?A:T)[t];o[t+"Palette"]=function(i,r){var a=o.colors[t]={name:i,hues:e.extend({},n,r)};return Object.keys(a.hues).forEach(function(e){if(!n[e])throw new Error("Invalid hue name '%1' in theme %2's %3 color %4. Available hue names: %4".replace("%1",e).replace("%2",o.name).replace("%3",i).replace("%4",Object.keys(n).join(", ")))}),Object.keys(a.hues).map(function(e){return a.hues[e]}).forEach(function(e){if(w.indexOf(e)==-1)throw new Error("Invalid hue value '%1' in theme %2's %3 color %4. Available hue values: %5".replace("%1",e).replace("%2",o.name).replace("%3",t).replace("%4",i).replace("%5",w.join(", ")))}),o},o[t+"Color"]=function(){var e=Array.prototype.slice.call(arguments);return console.warn("$mdThemingProviderTheme."+t+"Color() has been deprecated. Use $mdThemingProviderTheme."+t+"Palette() instead."),o[t+"Palette"].apply(o,e)}})}function m(t,o,i,r){function a(e){return e===n||""===e||c.THEMES[e]!==n}function d(e,t){function n(){return d&&d.$mdTheme||("default"==C?"":C)}function i(t){if(t){a(t)||r.warn("Attempted to use unregistered theme '"+t+"'. Register it with $mdThemingProvider.theme().");var n=e.data("$mdThemeName");n&&e.removeClass("md-"+n+"-theme"),e.addClass("md-"+t+"-theme"),e.data("$mdThemeName",t),d&&e.data("$mdThemeController",d)}}var d=t.controller("mdTheme")||e.data("$mdThemeController");if(i(n()),d)var s=$||d.$shouldWatch||o.parseAttributeBoolean(e.attr("md-theme-watch")),l=d.registerChanges(function(t){i(t),s?e.on("$destroy",l):l()})}var c=function(e,o){o===n&&(o=e,e=n),e===n&&(e=t),c.inherit(o,o)};return Object.defineProperty(c,"THEMES",{get:function(){return e.extend({},E)}}),Object.defineProperty(c,"PALETTES",{get:function(){return e.extend({},p)}}),Object.defineProperty(c,"ALWAYS_WATCH",{get:function(){return $}}),c.inherit=d,c.registered=a,c.defaultTheme=function(){return C},c.generateTheme=function(e){l(E[e],e,k.nonce)},c.defineTheme=function(e,t){t=t||{};var n=s(e);return t.primary&&n.primaryPalette(t.primary),t.accent&&n.accentPalette(t.accent),t.warn&&n.warnPalette(t.warn),t.background&&n.backgroundPalette(t.background),t.dark&&n.dark(),this.generateTheme(e),i.resolve(e)},c.setBrowserColor=_,c}m.$inject=["$rootScope","$mdUtil","$q","$log"],p={};var h,E={},$=!1,C="default";e.extend(p,t);var M=function(e){var t=o.setMeta("theme-color",e),n=o.setMeta("msapplication-navbutton-color",e);return function(){t(),n()}},_=function(t){t=e.isObject(t)?t:{};var n=t.theme||"default",o=t.hue||"800",i=p[t.palette]||p[E[n].colors[t.palette||"primary"].name],r=e.isObject(i[o])?i[o].hex:i[o];return M(r)};return h={definePalette:i,extendPalette:r,theme:s,configuration:function(){return e.extend({},k,{defaultTheme:C,alwaysWatchTheme:$,registeredStyles:[].concat(k.registeredStyles)})},disableTheming:function(t){k.disableTheming=e.isUndefined(t)||!!t},registerStyles:function(e){k.registeredStyles.push(e)},setNonce:function(e){k.nonce=e},generateThemesOnDemand:function(e){k.generateOnDemand=e},setDefaultTheme:function(e){C=e},alwaysWatchTheme:function(e){$=e},enableBrowserColor:_,$get:m,_LIGHT_DEFAULT_HUES:T,_DARK_DEFAULT_HUES:A,_PALETTES:p,_THEMES:E,_parseRules:d,_rgba:u}}function i(t,n,o,i,r,a){return{priority:101,link:{pre:function(d,s,l){var c=[],m=n.startSymbol(),u=n.endSymbol(),p=l.mdTheme.trim(),h=p.substr(0,m.length)===m&&p.lastIndexOf(u)===p.length-u.length,f="::",g=l.mdTheme.split(m).join("").split(u).join("").trim().substr(0,f.length)===f,b={registerChanges:function(t,n){return n&&(t=e.bind(n,t)),c.push(t),function(){var e=c.indexOf(t);e>-1&&c.splice(e,1)}},$setTheme:function(e){t.registered(e)||a.warn("attempted to use unregistered theme '"+e+"'"),b.$mdTheme=e;for(var n=c.length;n--;)c[n](e)},$shouldWatch:i.parseAttributeBoolean(s.attr("md-theme-watch"))||t.ALWAYS_WATCH||h&&!g};s.data("$mdThemeController",b);var v=function(){var e=n(l.mdTheme)(d);return o(e)(d)||e},E=function(t){return"string"==typeof t?b.$setTheme(t):void r.when(e.isFunction(t)?t():t).then(function(e){b.$setTheme(e)})};E(v());var $=d.$watch(v,function(e){e&&(E(e),b.$shouldWatch||$())})}}}}function r(){return k.disableTheming=!0,{restrict:"A",priority:"900"}}function a(e){return e}function d(t,n,o){c(t,n),o=o.replace(/THEME_NAME/g,t.name);var i=[],r=t.colors[n],a=new RegExp("\\.md-"+t.name+"-theme","g"),d=new RegExp("('|\")?{{\\s*("+n+")-(color|contrast)-?(\\d\\.?\\d*)?\\s*}}(\"|')?","g"),s=/'?"?\{\{\s*([a-zA-Z]+)-(A?\d+|hue\-[0-3]|shadow|default)-?(\d\.?\d*)?(contrast)?\s*\}\}'?"?/g,l=p[r.name];return o=o.replace(s,function(e,n,o,i,r){return"foreground"===n?"shadow"==o?t.foregroundShadow:t.foregroundPalette[o]||t.foregroundPalette[1]:(0!==o.indexOf("hue")&&"default"!==o||(o=t.colors[n].hues[o]),u((p[t.colors[n].name][o]||"")[r?"contrast":"value"],i))}),e.forEach(r.hues,function(e,n){var r=o.replace(d,function(t,n,o,i,r){return u(l[e]["color"===i?"value":"contrast"],r)});if("default"!==n&&(r=r.replace(a,".md-"+t.name+"-theme.md-"+n)),"default"==t.name){var s=/((?:\s|>|\.|\w|-|:|\(|\)|\[|\]|"|'|=)*)\.md-default-theme((?:\s|>|\.|\w|-|:|\(|\)|\[|\]|"|'|=)*)/g;r=r.replace(s,function(e,t,n){return e+", "+t+n})}i.push(r)}),i}function s(t,n){function o(t,n){var o=t.contrastDefaultColor,i=t.contrastLightColors||[],r=t.contrastStrongLightColors||[],a=t.contrastDarkColors||[];"string"==typeof i&&(i=i.split(" ")),"string"==typeof r&&(r=r.split(" ")),"string"==typeof a&&(a=a.split(" ")),delete t.contrastDefaultColor,delete t.contrastLightColors,delete t.contrastStrongLightColors,delete t.contrastDarkColors,e.forEach(t,function(n,d){function s(){return"light"===o?a.indexOf(d)>-1?E:r.indexOf(d)>-1?C:$:i.indexOf(d)>-1?r.indexOf(d)>-1?C:$:E}if(!e.isObject(n)){var l=m(n);if(!l)throw new Error("Color %1, in palette %2's hue %3, is invalid. Hex or rgb(a) color expected.".replace("%1",n).replace("%2",t.name).replace("%3",d));t[d]={hex:t[d],value:l,contrast:s()}}})}var i=document.head,r=i?i.firstElementChild:null,a=!k.disableTheming&&t.has("$MD_THEME_CSS")?t.get("$MD_THEME_CSS"):"";if(a+=k.registeredStyles.join(""),r&&0!==a.length){e.forEach(p,o);var d=a.split(/\}(?!(\}|'|"|;))/).filter(function(e){return e&&e.trim().length}).map(function(e){return e.trim()+"}"}),s=new RegExp("md-("+y.join("|")+")","g");y.forEach(function(e){_[e]=""}),d.forEach(function(e){for(var t,n=(e.match(s),0);t=y[n];n++)if(e.indexOf(".md-"+t)>-1)return _[t]+=e;for(n=0;t=y[n];n++)if(e.indexOf(t)>-1)return _[t]+=e;return _[M]+=e}),k.generateOnDemand||e.forEach(n.THEMES,function(e){h[e.name]||"default"!==n.defaultTheme()&&"default"===e.name||l(e,e.name,k.nonce)})}}function l(e,t,n){var o=document.head,i=o?o.firstElementChild:null;h[t]||(y.forEach(function(t){for(var r=d(e,t,_[t]);r.length;){var a=r.shift();if(a){var s=document.createElement("style");s.setAttribute("md-theme-style",""),n&&s.setAttribute("nonce",n),s.appendChild(document.createTextNode(a)),o.insertBefore(s,i)}}}),h[e.name]=!0)}function c(e,t){if(!p[(e.colors[t]||{}).name])throw new Error("You supplied an invalid color palette for theme %1's %2 palette. Available palettes: %3".replace("%1",e.name).replace("%2",t).replace("%3",Object.keys(p).join(", ")))}function m(t){if(e.isArray(t)&&3==t.length)return t;if(/^rgb/.test(t))return t.replace(/(^\s*rgba?\(|\)\s*$)/g,"").split(",").map(function(e,t){return 3==t?parseFloat(e,10):parseInt(e,10)});if("#"==t.charAt(0)&&(t=t.substring(1)),/^([a-fA-F0-9]{3}){1,2}$/g.test(t)){var n=t.length/3,o=t.substr(0,n),i=t.substr(n,n),r=t.substr(2*n);return 1===n&&(o+=o,i+=i,r+=r),[parseInt(o,16),parseInt(i,16),parseInt(r,16)]}}function u(t,n){return t?(4==t.length&&(t=e.copy(t),n?t.pop():n=t.pop()),n&&("number"==typeof n||"string"==typeof n&&n.length)?"rgba("+t.join(",")+","+n+")":"rgb("+t.join(",")+")"):"rgb('0,0,0')"}t.$inject=["$mdThemingProvider"],i.$inject=["$mdTheming","$interpolate","$parse","$mdUtil","$q","$log"],a.$inject=["$mdTheming"],o.$inject=["$mdColorPalette","$$mdMetaProvider"],s.$inject=["$injector","$mdTheming"],e.module("material.core.theming",["material.core.theming.palette","material.core.meta"]).directive("mdTheme",i).directive("mdThemable",a).directive("mdThemesDisabled",r).provider("$mdTheming",o).config(t).run(s);var p,h={},f={name:"dark",1:"rgba(0,0,0,0.87)",2:"rgba(0,0,0,0.54)",3:"rgba(0,0,0,0.38)",4:"rgba(0,0,0,0.12)"},g={name:"light",1:"rgba(255,255,255,1.0)",2:"rgba(255,255,255,0.7)",3:"rgba(255,255,255,0.5)",4:"rgba(255,255,255,0.12)"},b="1px 1px 0px rgba(0,0,0,0.4), -1px -1px 0px rgba(0,0,0,0.4)",v="",E=m("rgba(0,0,0,0.87)"),$=m("rgba(255,255,255,0.87)"),C=m("rgb(255,255,255)"),y=["primary","accent","warn","background"],M="primary",T={accent:{"default":"A200","hue-1":"A100","hue-2":"A400","hue-3":"A700"},background:{"default":"50","hue-1":"A100","hue-2":"100","hue-3":"300"}},A={background:{"default":"A400","hue-1":"800","hue-2":"900","hue-3":"A200"}};y.forEach(function(e){var t={"default":"500","hue-1":"300","hue-2":"800","hue-3":"A100"};T[e]||(T[e]=t),A[e]||(A[e]=t)});var w=["50","100","200","300","400","500","600","700","800","900","A100","A200","A400","A700"],k={
disableTheming:!1,generateOnDemand:!1,registeredStyles:[],nonce:null},_={}}(e.angular)}(),function(){function n(n,o,i,r,a){var d;return d={translate3d:function(e,t,n,o){function i(n){return a(e,{to:n||t,addClass:o.transitionOutClass,removeClass:o.transitionInClass,duration:o.duration}).start()}return a(e,{from:t,to:n,addClass:o.transitionInClass,removeClass:o.transitionOutClass,duration:o.duration}).start().then(function(){return i})},waitTransitionEnd:function(t,n){var a=3e3;return o(function(o,d){function s(e){e&&e.target!==t[0]||(e&&i.cancel(c),t.off(r.CSS.TRANSITIONEND,s),o())}function l(n){return n=n||e.getComputedStyle(t[0]),"0s"==n.transitionDuration||!n.transition&&!n.transitionProperty}n=n||{},l(n.cachedTransitionStyles)&&(a=0);var c=i(s,n.timeout||a);t.on(r.CSS.TRANSITIONEND,s)})},calculateTransformValues:function(e,t){function n(){var t=e?e.parent():null,n=t?t.parent():null;return n?d.clientRect(n):null}var o=t.element,i=t.bounds;if(o||i){var r=o?d.clientRect(o)||n():d.copyRect(i),a=d.copyRect(e[0].getBoundingClientRect()),s=d.centerPointFor(a),l=d.centerPointFor(r);return{centerX:l.x-s.x,centerY:l.y-s.y,scaleX:Math.round(100*Math.min(.5,r.width/a.width))/100,scaleY:Math.round(100*Math.min(.5,r.height/a.height))/100}}return{centerX:0,centerY:0,scaleX:.5,scaleY:.5}},calculateZoomToOrigin:function(e,o){var i="translate3d( {centerX}px, {centerY}px, 0 ) scale( {scaleX}, {scaleY} )",r=t.bind(null,n.supplant,i);return r(d.calculateTransformValues(e,o))},calculateSlideToOrigin:function(e,o){var i="translate3d( {centerX}px, {centerY}px, 0 )",r=t.bind(null,n.supplant,i);return r(d.calculateTransformValues(e,o))},toCss:function(e){function n(e,n,i){t.forEach(n.split(" "),function(e){o[e]=i})}var o={},i="left top right bottom width height x y min-width min-height max-width max-height";return t.forEach(e,function(e,a){if(!t.isUndefined(e))if(i.indexOf(a)>=0)o[a]=e+"px";else switch(a){case"transition":n(a,r.CSS.TRANSITION,e);break;case"transform":n(a,r.CSS.TRANSFORM,e);break;case"transformOrigin":n(a,r.CSS.TRANSFORM_ORIGIN,e);break;case"font-size":o["font-size"]=e}}),o},toTransformCss:function(e,n,o){var i={};return t.forEach(r.CSS.TRANSFORM.split(" "),function(t){i[t]=e}),n&&(o=o||"all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1) !important",i.transition=o),i},copyRect:function(e,n){return e?(n=n||{},t.forEach("left top right bottom width height".split(" "),function(t){n[t]=Math.round(e[t])}),n.width=n.width||n.right-n.left,n.height=n.height||n.bottom-n.top,n):null},clientRect:function(e){var n=t.element(e)[0].getBoundingClientRect(),o=function(e){return e&&e.width>0&&e.height>0};return o(n)?d.copyRect(n):null},centerPointFor:function(e){return e?{x:Math.round(e.left+e.width/2),y:Math.round(e.top+e.height/2)}:{x:0,y:0}}}}t.module("material.core").factory("$$mdAnimate",["$q","$timeout","$mdConstant","$animateCss",function(e,t,o,i){return function(r){return n(r,e,t,o,i)}}])}(),function(){t.version.minor>=4?t.module("material.core.animate",[]):!function(){function e(e){return e.replace(/-[a-z]/g,function(e){return e.charAt(1).toUpperCase()})}var n=t.forEach,o=t.isDefined(document.documentElement.style.WebkitAppearance),i=o?"-webkit-":"",r=(o?"webkitTransitionEnd ":"")+"transitionend",a=(o?"webkitAnimationEnd ":"")+"animationend",d=["$document",function(e){return function(){return e[0].body.clientWidth+1}}],s=["$$rAF",function(e){return function(){var t=!1;return e(function(){t=!0}),function(n){t?n():e(n)}}}],l=["$q","$$rAFMutex",function(e,o){function i(e){this.setHost(e),this._doneCallbacks=[],this._runInAnimationFrame=o(),this._state=0}var r=0,a=1,d=2;return i.prototype={setHost:function(e){this.host=e||{}},done:function(e){this._state===d?e():this._doneCallbacks.push(e)},progress:t.noop,getPromise:function(){if(!this.promise){var t=this;this.promise=e(function(e,n){t.done(function(t){t===!1?n():e()})})}return this.promise},then:function(e,t){return this.getPromise().then(e,t)},"catch":function(e){return this.getPromise()["catch"](e)},"finally":function(e){return this.getPromise()["finally"](e)},pause:function(){this.host.pause&&this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&this.host.end(),this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel(),this._resolve(!1)},complete:function(e){var t=this;t._state===r&&(t._state=a,t._runInAnimationFrame(function(){t._resolve(e)}))},_resolve:function(e){this._state!==d&&(n(this._doneCallbacks,function(t){t(e)}),this._doneCallbacks.length=0,this._state=d)}},i.all=function(e,t){function o(n){r=r&&n,++i===e.length&&t(r)}var i=0,r=!0;n(e,function(e){e.done(o)})},i}];t.module("material.core.animate",[]).factory("$$forceReflow",d).factory("$$AnimateRunner",l).factory("$$rAFMutex",s).factory("$animateCss",["$window","$$rAF","$$AnimateRunner","$$forceReflow","$$jqLite","$timeout","$animate",function(t,d,s,l,c,m,u){function p(o,d){var l=[],c=C(o),p=c&&u.enabled(),g=!1,M=!1;p&&(d.transitionStyle&&l.push([i+"transition",d.transitionStyle]),d.keyframeStyle&&l.push([i+"animation",d.keyframeStyle]),d.delay&&l.push([i+"transition-delay",d.delay+"s"]),d.duration&&l.push([i+"transition-duration",d.duration+"s"]),g=d.keyframeStyle||d.to&&(d.duration>0||d.transitionStyle),M=!!d.addClass||!!d.removeClass,y(o,!0));var T=p&&(g||M);E(o,d);var A,w,k=!1;return{close:t.close,start:function(){function t(){if(!k)return k=!0,A&&w&&o.off(A,w),h(o,d),v(o,d),n(l,function(t){c.style[e(t[0])]=""}),u.complete(!0),u}var u=new s;return b(function(){if(y(o,!1),!T)return t();n(l,function(t){var n=t[0],o=t[1];c.style[e(n)]=o}),h(o,d);var s=f(o);if(0===s.duration)return t();var u=[];d.easing&&(s.transitionDuration&&u.push([i+"transition-timing-function",d.easing]),s.animationDuration&&u.push([i+"animation-timing-function",d.easing])),d.delay&&s.animationDelay&&u.push([i+"animation-delay",d.delay+"s"]),d.duration&&s.animationDuration&&u.push([i+"animation-duration",d.duration+"s"]),n(u,function(t){var n=t[0],o=t[1];c.style[e(n)]=o,l.push(t)});var p=s.delay,g=1e3*p,b=s.duration,v=1e3*b,E=Date.now();A=[],s.transitionDuration&&A.push(r),s.animationDuration&&A.push(a),A=A.join(" "),w=function(e){e.stopPropagation();var n=e.originalEvent||e,o=n.timeStamp||Date.now(),i=parseFloat(n.elapsedTime.toFixed(3));Math.max(o-E,0)>=g&&i>=b&&t()},o.on(A,w),$(o,d),m(t,g+1.5*v,!1)}),u}}}function h(e,t){t.addClass&&(c.addClass(e,t.addClass),t.addClass=null),t.removeClass&&(c.removeClass(e,t.removeClass),t.removeClass=null)}function f(e){function n(e){return o?"Webkit"+e.charAt(0).toUpperCase()+e.substr(1):e}var i=C(e),r=t.getComputedStyle(i),a=g(r[n("transitionDuration")]),d=g(r[n("animationDuration")]),s=g(r[n("transitionDelay")]),l=g(r[n("animationDelay")]);d*=parseInt(r[n("animationIterationCount")],10)||1;var c=Math.max(d,a),m=Math.max(l,s);return{duration:c,delay:m,animationDuration:d,transitionDuration:a,animationDelay:l,transitionDelay:s}}function g(e){var t=0,o=(e||"").split(/\s*,\s*/);return n(o,function(e){"s"==e.charAt(e.length-1)&&(e=e.substring(0,e.length-1)),e=parseFloat(e)||0,t=t?Math.max(e,t):e}),t}function b(e){M&&M(),T.push(e),M=d(function(){M=null;for(var e=l(),t=0;t<T.length;t++)T[t](e);T.length=0})}function v(e,t){E(e,t),$(e,t)}function E(e,t){t.from&&(e.css(t.from),t.from=null)}function $(e,t){t.to&&(e.css(t.to),t.to=null)}function C(e){for(var t=0;t<e.length;t++)if(1===e[t].nodeType)return e[t]}function y(t,n){var o=C(t),r=e(i+"transition-delay");o.style[r]=n?"-9999s":""}var M,T=[];return p}])}()}(),function(){t.module("material.components.autocomplete",["material.core","material.components.icon","material.components.virtualRepeat"])}(),function(){t.module("material.components.backdrop",["material.core"]).directive("mdBackdrop",["$mdTheming","$mdUtil","$animate","$rootElement","$window","$log","$$rAF","$document",function(e,n,o,i,r,a,d,s){function l(l,m,u){function p(){var e=parseInt(h.height,10)+Math.abs(parseInt(h.top,10));m.css("height",e+"px")}o.pin&&o.pin(m,i);var h;d(function(){if(h=r.getComputedStyle(s[0].body),"fixed"===h.position){var o=n.debounce(function(){h=r.getComputedStyle(s[0].body),p()},60,null,!1);p(),t.element(r).on("resize",o),l.$on("$destroy",function(){t.element(r).off("resize",o)})}var i=m.parent();if(i.length){"BODY"===i[0].nodeName&&m.css("position","fixed");var d=r.getComputedStyle(i[0]);"static"===d.position&&a.warn(c),e.inherit(m,i)}})}var c="<md-backdrop> may not work properly in a scrolled, static-positioned parent container.";return{restrict:"E",link:l}}])}(),function(){function e(e){return{restrict:"E",link:function(t,n){n.addClass("_md"),t.$on("$destroy",function(){e.destroy()})}}}function n(e){function n(e,n,r,a,d,s,l,c){function m(o,i,l,m){if(i=r.extractElementByName(i,"md-bottom-sheet"),i.attr("tabindex","-1"),i.hasClass("ng-cloak")){var u="$mdBottomSheet: using `<md-bottom-sheet ng-cloak >` will affect the bottom-sheet opening animations.";c.warn(u,i[0])}l.disableBackdrop||(h=r.createBackdrop(o,"md-bottom-sheet-backdrop md-opaque"),h[0].tabIndex=-1,l.clickOutsideToClose&&h.on("click",function(){r.nextTick(d.cancel,!0)}),a.inherit(h,l.parent),e.enter(h,l.parent,null));var f=new p(i,l.parent);return l.bottomSheet=f,a.inherit(f.element,l.parent),l.disableParentScroll&&(l.restoreScroll=r.disableScrollAround(f.element,l.parent)),e.enter(f.element,l.parent,h).then(function(){var e=r.findFocusTarget(i)||t.element(i[0].querySelector("button")||i[0].querySelector("a")||i[0].querySelector(r.prefixer("ng-click",!0)))||h;l.escapeToClose&&(l.rootElementKeyupCallback=function(e){e.keyCode===n.KEY_CODE.ESCAPE&&r.nextTick(d.cancel,!0)},s.on("keyup",l.rootElementKeyupCallback),e&&e.focus())})}function u(t,n,o){var i=o.bottomSheet;return o.disableBackdrop||e.leave(h),e.leave(i.element).then(function(){o.disableParentScroll&&(o.restoreScroll(),delete o.restoreScroll),i.cleanup()})}function p(e,t){function a(t){e.css(n.CSS.TRANSITION_DURATION,"0ms")}function s(t){var o=t.pointer.distanceY;o<5&&(o=Math.max(-i,o/2)),e.css(n.CSS.TRANSFORM,"translate3d(0,"+(i+o)+"px,0)")}function c(t){if(t.pointer.distanceY>0&&(t.pointer.distanceY>20||Math.abs(t.pointer.velocityY)>o)){var i=e.prop("offsetHeight")-t.pointer.distanceY,a=Math.min(i/t.pointer.velocityY*.75,500);e.css(n.CSS.TRANSITION_DURATION,a+"ms"),r.nextTick(d.cancel,!0)}else e.css(n.CSS.TRANSITION_DURATION,""),e.css(n.CSS.TRANSFORM,"")}var m=l.register(t,"drag",{horizontal:!1});return t.on("$md.dragstart",a).on("$md.drag",s).on("$md.dragend",c),{element:e,cleanup:function(){m(),t.off("$md.dragstart",a),t.off("$md.drag",s),t.off("$md.dragend",c)}}}var h;return{themable:!0,onShow:m,onRemove:u,disableBackdrop:!1,escapeToClose:!0,clickOutsideToClose:!0,disableParentScroll:!0}}n.$inject=["$animate","$mdConstant","$mdUtil","$mdTheming","$mdBottomSheet","$rootElement","$mdGesture","$log"];var o=.5,i=80;return e("$mdBottomSheet").setDefaults({methods:["disableParentScroll","escapeToClose","clickOutsideToClose"],options:n})}e.$inject=["$mdBottomSheet"],n.$inject=["$$interimElementProvider"],t.module("material.components.bottomSheet",["material.core","material.components.backdrop"]).directive("mdBottomSheet",e).provider("$mdBottomSheet",n)}(),function(){function e(e){return{restrict:"E",link:function(t,n){e(n)}}}function n(e,n,o,i){function r(e){return t.isDefined(e.href)||t.isDefined(e.ngHref)||t.isDefined(e.ngLink)||t.isDefined(e.uiSref)}function a(e,t){if(r(t))return'<a class="md-button" ng-transclude></a>';var n="undefined"==typeof t.type?"button":t.type;return'<button class="md-button" type="'+n+'" ng-transclude></button>'}function d(a,d,s){n(d),e.attach(a,d),o.expectWithoutText(d,"aria-label"),r(s)&&t.isDefined(s.ngDisabled)&&a.$watch(s.ngDisabled,function(e){d.attr("tabindex",e?-1:0)}),d.on("click",function(e){s.disabled===!0&&(e.preventDefault(),e.stopImmediatePropagation())}),d.hasClass("md-no-focus")||(d.on("focus",function(){i.isUserInvoked()&&"keyboard"!==i.getLastInteractionType()||d.addClass("md-focused")}),d.on("blur",function(){d.removeClass("md-focused")}))}return{restrict:"EA",replace:!0,transclude:!0,template:a,link:d}}n.$inject=["$mdButtonInkRipple","$mdTheming","$mdAria","$mdInteraction"],e.$inject=["$mdTheming"],t.module("material.components.button",["material.core"]).directive("mdButton",n).directive("a",e)}(),function(){function e(e){return{restrict:"E",link:function(t,n,o){n.addClass("_md"),e(n)}}}e.$inject=["$mdTheming"],t.module("material.components.card",["material.core"]).directive("mdCard",e)}(),function(){function e(e,n,o,i,r,a){function d(d,s){function l(d,s,l,c){function m(e,t,n){l[e]&&d.$watch(l[e],function(e){n[e]&&s.attr(t,n[e])})}function u(e){var t=e.which||e.keyCode;t!==o.KEY_CODE.SPACE&&t!==o.KEY_CODE.ENTER||(e.preventDefault(),s.addClass("md-focused"),p(e))}function p(e){s[0].hasAttribute("disabled")||d.skipToggle||d.$apply(function(){var t=l.ngChecked?l.checked:!v.$viewValue;v.$setViewValue(t,e&&e.type),v.$render()})}function h(){s.toggleClass("md-checked",!!v.$viewValue&&!g)}function f(e){g=e!==!1,g&&s.attr("aria-checked","mixed"),s.toggleClass("md-indeterminate",g)}var g,b=c[0],v=c[1]||r.fakeNgModel(),E=c[2];if(b){var $=b.isErrorGetter||function(){return v.$invalid&&(v.$touched||E&&E.$submitted)};b.input=s,d.$watch($,b.setInvalid)}i(s),s.children().on("focus",function(){s.focus()}),r.parseAttributeBoolean(l.mdIndeterminate)&&(f(),d.$watch(l.mdIndeterminate,f)),l.ngChecked&&d.$watch(d.$eval.bind(d,l.ngChecked),function(e){v.$setViewValue(e),v.$render()}),m("ngDisabled","tabindex",{"true":"-1","false":l.tabindex}),n.expectWithText(s,"aria-label"),e.link.pre(d,{on:t.noop,0:{}},l,[v]),s.on("click",p).on("keypress",u).on("focus",function(){"keyboard"===a.getLastInteractionType()&&s.addClass("md-focused")}).on("blur",function(){s.removeClass("md-focused")}),v.$render=h}return s.$set("tabindex",s.tabindex||"0"),s.$set("type","checkbox"),s.$set("role",s.type),{pre:function(e,t){t.on("click",function(e){this.hasAttribute("disabled")&&e.stopImmediatePropagation()})},post:l}}return e=e[0],{restrict:"E",transclude:!0,require:["^?mdInputContainer","?ngModel","?^form"],priority:o.BEFORE_NG_ARIA,template:'<div class="md-container" md-ink-ripple md-ink-ripple-checkbox><div class="md-icon"></div></div><div ng-transclude class="md-label"></div>',compile:d}}e.$inject=["inputDirective","$mdAria","$mdConstant","$mdTheming","$mdUtil","$mdInteraction"],t.module("material.components.checkbox",["material.core"]).directive("mdCheckbox",e)}(),function(){t.module("material.components.chips",["material.core","material.components.autocomplete"])}(),function(){!function(){function e(e,n,o){function r(e,t){try{t&&e.css(s(t))}catch(n){o.error(n.message)}}function a(e){var t=c(e);return d(t)}function d(t,o){o=o||!1;var i=e.PALETTES[t.palette][t.hue];return i=o?i.contrast:i.value,n.supplant("rgba({0}, {1}, {2}, {3})",[i[0],i[1],i[2],i[3]||t.opacity])}function s(e){var n={},o=e.hasOwnProperty("color");return t.forEach(e,function(e,t){var i=c(e),r=t.indexOf("background")>-1;n[t]=d(i),r&&!o&&(n.color=d(i,!0))}),n}function l(n){return t.isDefined(e.THEMES[n.split("-")[0]])}function c(n){var o=n.split("-"),i=t.isDefined(e.THEMES[o[0]]),r=i?o.splice(0,1)[0]:e.defaultTheme();return{theme:r,palette:m(o,r),hue:u(o,r),opacity:o[2]||1}}function m(t,o){var r=t.length>1&&i.indexOf(t[1])!==-1,a=t[0].replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();if(r&&(a=t[0]+"-"+t.splice(1,1)),i.indexOf(a)===-1){var d=e.THEMES[o].colors[a];if(!d)throw new Error(n.supplant("mdColors: couldn't find '{palette}' in the palettes.",{palette:a}));a=d.name}return a}function u(t,o){var i=e.THEMES[o].colors;if("hue"===t[1]){var r=parseInt(t.splice(2,1)[0],10);if(r<1||r>3)throw new Error(n.supplant("mdColors: 'hue-{hueNumber}' is not a valid hue, can be only 'hue-1', 'hue-2' and 'hue-3'",{hueNumber:r}));if(t[1]="hue-"+r,!(t[0]in i))throw new Error(n.supplant("mdColors: 'hue-x' can only be used with [{availableThemes}], but was used with '{usedTheme}'",{availableThemes:Object.keys(i).join(", "),usedTheme:t[0]}));return i[t[0]].hues[t[1]]}return t[1]||i[t[0]in i?t[0]:"primary"].hues["default"]}return i=i||Object.keys(e.PALETTES),{applyThemeColors:r,getThemeColor:a,hasTheme:l}}function n(e,n,i,r){return{restrict:"A",require:["^?mdTheme"],compile:function(a,d){function s(){var e=d.mdColors,i=e.indexOf("::")>-1,r=!!i||o.test(d.mdColors);d.mdColors=e.replace("::","");var a=t.isDefined(d.mdColorsWatch);return!i&&!r&&(!a||n.parseAttributeBoolean(d.mdColorsWatch))}var l=s();return function(n,o,a,d){var s=d[0],c={},m=function(t){"string"!=typeof t&&(t=""),a.mdColors||(a.mdColors="{}");var o=r(a.mdColors)(n);return s&&Object.keys(o).forEach(function(n){var i=o[n];e.hasTheme(i)||(o[n]=(t||s.$mdTheme)+"-"+i)}),u(o),o},u=function(e){if(!t.equals(e,c)){var n=Object.keys(c);c.background&&!n.color&&n.push("color"),n.forEach(function(e){o.css(e,"")})}c=e},p=t.noop;s&&(p=s.registerChanges(function(t){e.applyThemeColors(o,m(t))})),n.$on("$destroy",function(){p()});try{l?n.$watch(m,t.bind(this,e.applyThemeColors,o),!0):e.applyThemeColors(o,m())}catch(h){i.error(h.message)}}}}}n.$inject=["$mdColors","$mdUtil","$log","$parse"],e.$inject=["$mdTheming","$mdUtil","$log"];var o=/^{((\s|,)*?["'a-zA-Z-]+?\s*?:\s*?('|")[a-zA-Z0-9-.]*('|"))+\s*}$/,i=null;t.module("material.components.colors",["material.core"]).directive("mdColors",n).service("$mdColors",e)}()}(),function(){function e(e){function t(e,t){this.$scope=e,this.$element=t}return{restrict:"E",controller:["$scope","$element",t],link:function(t,o){o.addClass("_md"),e(o),t.$broadcast("$mdContentLoaded",o),n(o[0])}}}function n(e){t.element(e).on("$md.pressdown",function(t){"t"===t.pointer.type&&(t.$materialScrollFixed||(t.$materialScrollFixed=!0,0===e.scrollTop?e.scrollTop=1:e.scrollHeight===e.scrollTop+e.offsetHeight&&(e.scrollTop-=1)))})}e.$inject=["$mdTheming"],t.module("material.components.content",["material.core"]).directive("mdContent",e)}(),function(){t.module("material.components.datepicker",["material.core","material.components.icon","material.components.virtualRepeat"])}(),function(){function e(e,n,o){return{restrict:"E",link:function(i,r){r.addClass("_md"),n(r),e(function(){function e(){r.toggleClass("md-content-overflow",a.scrollHeight>a.clientHeight)}var n,a=r[0].querySelector("md-dialog-content");a&&(n=a.getElementsByTagName("img"),e(),t.element(n).on("load",e)),i.$on("$destroy",function(){o.destroy(r)})})}}}function o(e){function o(e,t){return{template:['<md-dialog md-theme="{{ dialog.theme || dialog.defaultTheme }}" aria-label="{{ dialog.ariaLabel }}" ng-class="dialog.css">','  <md-dialog-content class="md-dialog-content" role="document" tabIndex="-1">','    <h2 class="md-title">{{ dialog.title }}</h2>','    <div ng-if="::dialog.mdHtmlContent" class="md-dialog-content-body" ','        ng-bind-html="::dialog.mdHtmlContent"></div>','    <div ng-if="::!dialog.mdHtmlContent" class="md-dialog-content-body">',"      <p>{{::dialog.mdTextContent}}</p>","    </div>",'    <md-input-container md-no-float ng-if="::dialog.$type == \'prompt\'" class="md-prompt-input-container">','      <input ng-keypress="dialog.keypress($event)" md-autofocus ng-model="dialog.result"              placeholder="{{::dialog.placeholder}}">',"    </md-input-container>","  </md-dialog-content>","  <md-dialog-actions>",'    <md-button ng-if="dialog.$type === \'confirm\' || dialog.$type === \'prompt\'"               ng-click="dialog.abort()" class="md-primary md-cancel-button">',"      {{ dialog.cancel }}","    </md-button>",'    <md-button ng-click="dialog.hide()" class="md-primary md-confirm-button" md-autofocus="dialog.$type===\'alert\'">',"      {{ dialog.ok }}","    </md-button>","  </md-dialog-actions>","</md-dialog>"].join("").replace(/\s\s+/g,""),controller:function(){var n="prompt"==this.$type;n&&this.initialValue&&(this.result=this.initialValue),this.hide=function(){e.hide(!n||this.result)},this.abort=function(){e.cancel()},this.keypress=function(n){n.keyCode===t.KEY_CODE.ENTER&&e.hide(this.result)}},controllerAs:"dialog",bindToController:!0}}function i(e,o,i,d,s,l,c,m,u,p,h,f,g){function b(e){e.defaultTheme=h.defaultTheme(),C(e)}function v(e,t,n,o){if(o){var i=o.htmlContent||n.htmlContent||"",r=o.textContent||n.textContent||o.content||n.content||"";if(i&&!p.has("$sanitize"))throw Error("The ngSanitize module must be loaded in order to use htmlContent.");if(i&&r)throw Error("md-dialog cannot have both `htmlContent` and `textContent`");o.mdHtmlContent=i,o.mdTextContent=r}}function E(e,n,o,r){function a(){n[0].querySelector(".md-actions")&&u.warn("Using a class of md-actions is deprecated, please use <md-dialog-actions>.")}function d(){function e(){return n[0].querySelector(".dialog-close, md-dialog-actions button:last-child")}if(o.focusOnOpen){var t=i.findFocusTarget(n)||e()||s;t.focus()}}t.element(l[0].body).addClass("md-dialog-is-showing");var s=n.find("md-dialog");if(s.hasClass("ng-cloak")){var c="$mdDialog: using `<md-dialog ng-cloak>` will affect the dialog opening animations.";u.warn(c,n[0])}return y(o),A(s,o),T(e,n,o),M(n,o),_(n,o).then(function(){w(n,o),a(),d()})}function $(e,n,o){function i(){return x(n,o)}function d(){t.element(l[0].body).removeClass("md-dialog-is-showing"),o.contentElement&&o.reverseContainerStretch(),o.cleanupElement(),o.$destroy||"keyboard"!==o.originInteraction||o.origin.focus()}return o.deactivateListeners(),o.unlockScreenReader(),o.hideBackdrop(o.$destroy),r&&r.parentNode&&r.parentNode.removeChild(r),a&&a.parentNode&&a.parentNode.removeChild(a),o.$destroy?d():i().then(d)}function C(e){var n;e.targetEvent&&e.targetEvent.target&&(n=t.element(e.targetEvent.target));var o=n&&n.controller("mdTheme");if(o){e.themeWatch=o.$shouldWatch;var i=e.theme||o.$mdTheme;i&&(e.scope.theme=i);var r=o.registerChanges(function(t){e.scope.theme=t,e.themeWatch||r()})}}function y(e){function o(e,o){var i=t.element(e||{});if(i&&i.length){var r={top:0,left:0,height:0,width:0},a=t.isFunction(i[0].getBoundingClientRect);return t.extend(o||{},{element:a?i:n,bounds:a?i[0].getBoundingClientRect():t.extend({},r,i[0]),focus:t.bind(i,i.focus)})}}function i(e,n){return t.isString(e)&&(e=l[0].querySelector(e)),t.element(e||n)}e.origin=t.extend({element:null,bounds:null,focus:t.noop},e.origin||{}),e.parent=i(e.parent,m),e.closeTo=o(i(e.closeTo)),e.openFrom=o(i(e.openFrom)),e.targetEvent&&(e.origin=o(e.targetEvent.target,e.origin),e.originInteraction=g.getLastInteractionType())}function M(n,o){var r=t.element(c),a=i.debounce(function(){k(n,o)},60),s=[],l=function(){var t="alert"==o.$type?e.hide:e.cancel;i.nextTick(t,!0)};if(o.escapeToClose){var m=o.parent,u=function(e){e.keyCode===d.KEY_CODE.ESCAPE&&(e.stopPropagation(),e.preventDefault(),l())};n.on("keydown",u),m.on("keydown",u),s.push(function(){n.off("keydown",u),m.off("keydown",u)})}if(r.on("resize",a),s.push(function(){r.off("resize",a)}),o.clickOutsideToClose){var p,h=n,f=function(e){p=e.target},g=function(e){p===h[0]&&e.target===h[0]&&(e.stopPropagation(),e.preventDefault(),l())};h.on("mousedown",f),h.on("mouseup",g),s.push(function(){h.off("mousedown",f),h.off("mouseup",g)})}o.deactivateListeners=function(){s.forEach(function(e){e()}),o.deactivateListeners=null}}function T(e,t,n){n.disableParentScroll&&(n.restoreScroll=i.disableScrollAround(t,n.parent)),n.hasBackdrop&&(n.backdrop=i.createBackdrop(e,"md-dialog-backdrop md-opaque"),s.enter(n.backdrop,n.parent)),n.hideBackdrop=function(e){n.backdrop&&(e?n.backdrop.remove():s.leave(n.backdrop)),n.disableParentScroll&&(n.restoreScroll&&n.restoreScroll(),delete n.restoreScroll),n.hideBackdrop=null}}function A(e,t){var n="alert"===t.$type?"alertdialog":"dialog",d=e.find("md-dialog-content"),s=e.attr("id"),l="dialogContent_"+(s||i.nextUid());e.attr({role:n,tabIndex:"-1"}),0===d.length&&(d=e,s&&(l=s)),d.attr("id",l),e.attr("aria-describedby",l),t.ariaLabel?o.expect(e,"aria-label",t.ariaLabel):o.expectAsync(e,"aria-label",function(){var e=d.text().split(/\s+/);return e.length>3&&(e=e.slice(0,3).concat("...")),e.join(" ")}),r=document.createElement("div"),r.classList.add("md-dialog-focus-trap"),r.tabIndex=0,a=r.cloneNode(!1);var c=function(){e.focus()};r.addEventListener("focus",c),a.addEventListener("focus",c),e[0].parentNode.insertBefore(r,e[0]),e.after(a)}function w(e,t){function n(e){for(;e.parentNode;){if(e===document.body)return;for(var t=e.parentNode.children,i=0;i<t.length;i++)e===t[i]||S(t[i],["SCRIPT","STYLE"])||t[i].setAttribute("aria-hidden",o);n(e=e.parentNode)}}var o=!0;n(e[0]),t.unlockScreenReader=function(){o=!1,n(e[0]),t.unlockScreenReader=null}}function k(e,t){var n="fixed"==c.getComputedStyle(l[0].body).position,o=t.backdrop?c.getComputedStyle(t.backdrop[0]):null,i=o?Math.min(l[0].body.clientHeight,Math.ceil(Math.abs(parseInt(o.height,10)))):0,r={top:e.css("top"),height:e.css("height")},a=Math.abs(t.parent[0].getBoundingClientRect().top);return e.css({top:(n?a:0)+"px",height:i?i+"px":"100%"}),function(){e.css(r)}}function _(e,t){t.parent.append(e),t.reverseContainerStretch=k(e,t);var n=e.find("md-dialog"),o=i.dom.animator,r=o.calculateZoomToOrigin,a={transitionInClass:"md-transition-in",transitionOutClass:"md-transition-out"},d=o.toTransformCss(r(n,t.openFrom||t.origin)),s=o.toTransformCss("");return n.toggleClass("md-dialog-fullscreen",!!t.fullscreen),o.translate3d(n,d,s,a).then(function(e){return t.reverseAnimate=function(){return delete t.reverseAnimate,t.closeTo?(a={transitionInClass:"md-transition-out",transitionOutClass:"md-transition-in"},d=s,s=o.toTransformCss(r(n,t.closeTo)),o.translate3d(n,d,s,a)):e(s=o.toTransformCss(r(n,t.origin)))},t.clearAnimate=function(){return delete t.clearAnimate,n.removeClass([a.transitionOutClass,a.transitionInClass].join(" ")),o.translate3d(n,s,o.toTransformCss(""),{})},!0})}function x(e,t){return t.reverseAnimate().then(function(){t.contentElement&&t.clearAnimate()})}function S(e,t){if(t.indexOf(e.nodeName)!==-1)return!0}return{hasBackdrop:!0,isolateScope:!0,onCompiling:b,onShow:E,onShowing:v,onRemove:$,clickOutsideToClose:!1,escapeToClose:!0,targetEvent:null,closeTo:null,openFrom:null,focusOnOpen:!0,disableParentScroll:!0,autoWrap:!0,fullscreen:!1,transformTemplate:function(e,t){function n(e){return t.autoWrap&&!/<\/md-dialog>/g.test(e)?"<md-dialog>"+(e||"")+"</md-dialog>":e||""}var o=f.startSymbol(),i=f.endSymbol(),r=o+(t.themeWatch?"":"::")+"theme"+i;return'<div class="md-dialog-container" tabindex="-1" md-theme="'+r+'">'+n(e)+"</div>"}}}o.$inject=["$mdDialog","$mdConstant"],i.$inject=["$mdDialog","$mdAria","$mdUtil","$mdConstant","$animate","$document","$window","$rootElement","$log","$injector","$mdTheming","$interpolate","$mdInteraction"];var r,a;return e("$mdDialog").setDefaults({methods:["disableParentScroll","hasBackdrop","clickOutsideToClose","escapeToClose","targetEvent","closeTo","openFrom","parent","fullscreen","multiple"],options:i}).addPreset("alert",{methods:["title","htmlContent","textContent","content","ariaLabel","ok","theme","css"],options:o}).addPreset("confirm",{methods:["title","htmlContent","textContent","content","ariaLabel","ok","cancel","theme","css"],options:o}).addPreset("prompt",{methods:["title","htmlContent","textContent","initialValue","content","placeholder","ariaLabel","ok","cancel","theme","css"],options:o})}e.$inject=["$$rAF","$mdTheming","$mdDialog"],o.$inject=["$$interimElementProvider"],t.module("material.components.dialog",["material.core","material.components.backdrop"]).directive("mdDialog",e).provider("$mdDialog",o)}(),function(){function e(e){return{restrict:"E",link:e}}e.$inject=["$mdTheming"],t.module("material.components.divider",["material.core"]).directive("mdDivider",e)}(),function(){!function(){function e(e){return{restrict:"E",require:["^?mdFabSpeedDial","^?mdFabToolbar"],compile:function(t,n){var o=t.children(),i=e.prefixer().hasAttribute(o,"ng-repeat");i?o.addClass("md-fab-action-item"):o.wrap('<div class="md-fab-action-item">')}}}e.$inject=["$mdUtil"],t.module("material.components.fabActions",["material.core"]).directive("mdFabActions",e)}()}(),function(){!function(){function e(e,n,o,i,r,a){function d(){S.direction=S.direction||"down",S.isOpen=S.isOpen||!1,c(),n.addClass("md-animations-waiting")}function s(){var o=["click","focusin","focusout"];t.forEach(o,function(e){n.on(e,l)}),e.$on("$destroy",function(){t.forEach(o,function(e){n.off(e,l)}),h()})}function l(e){"click"==e.type&&k(e),"focusout"!=e.type||D||(D=a(function(){S.close()},100,!1)),"focusin"==e.type&&D&&(a.cancel(D),D=null)}function c(){S.currentActionIndex=-1}function m(){e.$watch("vm.direction",function(e,t){o.removeClass(n,"md-"+t),o.addClass(n,"md-"+e),c()});var t,i;e.$watch("vm.isOpen",function(e){c(),t&&i||(t=_(),i=x()),e?p():h();var r=e?"md-is-open":"",a=e?"":"md-is-open";t.attr("aria-haspopup",!0),t.attr("aria-expanded",e),i.attr("aria-hidden",!e),o.setClass(n,r,a)})}function u(){n[0].scrollHeight>0?o.addClass(n,"_md-animations-ready").then(function(){n.removeClass("md-animations-waiting")}):N<10&&(a(u,100),N+=1)}function p(){n.on("keydown",g),i.nextTick(function(){t.element(document).on("click touchend",f)})}function h(){n.off("keydown",g),t.element(document).off("click touchend",f)}function f(e){if(e.target){var t=i.getClosest(e.target,"md-fab-trigger"),n=i.getClosest(e.target,"md-fab-actions");t||n||S.close()}}function g(e){switch(e.which){case r.KEY_CODE.ESCAPE:return S.close(),e.preventDefault(),!1;case r.KEY_CODE.LEFT_ARROW:return C(e),!1;case r.KEY_CODE.UP_ARROW:return y(e),!1;case r.KEY_CODE.RIGHT_ARROW:return M(e),!1;case r.KEY_CODE.DOWN_ARROW:return T(e),!1}}function b(e){E(e,-1)}function v(e){E(e,1)}function E(e,n){var o=$();S.currentActionIndex=S.currentActionIndex+n,S.currentActionIndex=Math.min(o.length-1,S.currentActionIndex),S.currentActionIndex=Math.max(0,S.currentActionIndex);var i=t.element(o[S.currentActionIndex]).children()[0];t.element(i).attr("tabindex",0),i.focus(),e.preventDefault(),e.stopImmediatePropagation()}function $(){var e=x()[0].querySelectorAll(".md-fab-action-item");return t.forEach(e,function(e){t.element(t.element(e).children()[0]).attr("tabindex",-1)}),e}function C(e){"left"===S.direction?v(e):b(e)}function y(e){"down"===S.direction?b(e):v(e)}function M(e){"left"===S.direction?b(e):v(e)}function T(e){"up"===S.direction?b(e):v(e)}function A(e){return i.getClosest(e,"md-fab-trigger")}function w(e){return i.getClosest(e,"md-fab-actions")}function k(e){A(e.target)&&S.toggle(),w(e.target)&&S.close()}function _(){return n.find("md-fab-trigger")}function x(){return n.find("md-fab-actions")}var S=this,N=0;S.open=function(){e.$evalAsync("vm.isOpen = true")},S.close=function(){e.$evalAsync("vm.isOpen = false"),n.find("md-fab-trigger")[0].focus()},S.toggle=function(){e.$evalAsync("vm.isOpen = !vm.isOpen")},S.$onInit=function(){d(),s(),m(),u()},1===t.version.major&&t.version.minor<=4&&this.$onInit();var D}e.$inject=["$scope","$element","$animate","$mdUtil","$mdConstant","$timeout"],t.module("material.components.fabShared",["material.core"]).controller("MdFabController",e)}()}(),function(){!function(){function n(){function e(e,t){t.prepend('<div class="_md-css-variables"></div>')}return{restrict:"E",scope:{direction:"@?mdDirection",isOpen:"=?mdOpen"},bindToController:!0,controller:"MdFabController",controllerAs:"vm",link:e}}function o(n){function o(e){n(e,r,!1)}function i(n){if(!n.hasClass("md-animations-waiting")||n.hasClass("_md-animations-ready")){var o=n[0],i=n.controller("mdFabSpeedDial"),r=o.querySelectorAll(".md-fab-action-item"),a=o.querySelector("md-fab-trigger"),d=o.querySelector("._md-css-variables"),s=parseInt(e.getComputedStyle(d).zIndex);t.forEach(r,function(e,t){var n=e.style;n.transform=n.webkitTransform="",n.transitionDelay="",n.opacity=1,n.zIndex=r.length-t+s}),a.style.zIndex=s+r.length+1,i.isOpen||t.forEach(r,function(e,t){var n,o,r=e.style,d=(a.clientHeight-e.clientHeight)/2,s=(a.clientWidth-e.clientWidth)/2;switch(i.direction){case"up":n=e.scrollHeight*(t+1)+d,o="Y";break;case"down":n=-(e.scrollHeight*(t+1)+d),o="Y";break;case"left":n=e.scrollWidth*(t+1)+s,o="X";
break;case"right":n=-(e.scrollWidth*(t+1)+s),o="X"}var l="translate"+o+"("+n+"px)";r.transform=r.webkitTransform=l})}}return{addClass:function(e,t,n){e.hasClass("md-fling")?(i(e),o(n)):n()},removeClass:function(e,t,n){i(e),o(n)}}}function i(n){function o(e){n(e,r,!1)}function i(n){var o=n[0],i=n.controller("mdFabSpeedDial"),r=o.querySelectorAll(".md-fab-action-item"),d=o.querySelector("._md-css-variables"),s=parseInt(e.getComputedStyle(d).zIndex);t.forEach(r,function(e,t){var n=e.style,o=t*a;n.opacity=i.isOpen?1:0,n.transform=n.webkitTransform=i.isOpen?"scale(1)":"scale(0)",n.transitionDelay=(i.isOpen?o:r.length-o)+"ms",n.zIndex=r.length-t+s})}var a=65;return{addClass:function(e,t,n){i(e),o(n)},removeClass:function(e,t,n){i(e),o(n)}}}o.$inject=["$timeout"],i.$inject=["$timeout"];var r=300;t.module("material.components.fabSpeedDial",["material.core","material.components.fabShared","material.components.fabActions"]).directive("mdFabSpeedDial",n).animation(".md-fling",o).animation(".md-scale",i).service("mdFabSpeedDialFlingAnimation",o).service("mdFabSpeedDialScaleAnimation",i)}()}(),function(){!function(){function n(){function e(e,t,n){t.addClass("md-fab-toolbar"),t.find("md-fab-trigger").find("button").prepend('<div class="md-fab-toolbar-background"></div>')}return{restrict:"E",transclude:!0,template:'<div class="md-fab-toolbar-wrapper">  <div class="md-fab-toolbar-content" ng-transclude></div></div>',scope:{direction:"@?mdDirection",isOpen:"=?mdOpen"},bindToController:!0,controller:"MdFabController",controllerAs:"vm",link:e}}function o(){function n(n,o,i){if(o){var r=n[0],a=n.controller("mdFabToolbar"),d=r.querySelector(".md-fab-toolbar-background"),s=r.querySelector("md-fab-trigger button"),l=r.querySelector("md-toolbar"),c=r.querySelector("md-fab-trigger button md-icon"),m=n.find("md-fab-actions").children();if(s&&d){var u=e.getComputedStyle(s).getPropertyValue("background-color"),p=r.offsetWidth,h=(r.offsetHeight,2*(p/s.offsetWidth));d.style.backgroundColor=u,d.style.borderRadius=p+"px",a.isOpen?(l.style.pointerEvents="inherit",d.style.width=s.offsetWidth+"px",d.style.height=s.offsetHeight+"px",d.style.transform="scale("+h+")",d.style.transitionDelay="0ms",c&&(c.style.transitionDelay=".3s"),t.forEach(m,function(e,t){e.style.transitionDelay=25*(m.length-t)+"ms"})):(l.style.pointerEvents="none",d.style.transform="scale(1)",d.style.top="0",n.hasClass("md-right")&&(d.style.left="0",d.style.right=null),n.hasClass("md-left")&&(d.style.right="0",d.style.left=null),d.style.transitionDelay="200ms",c&&(c.style.transitionDelay="0ms"),t.forEach(m,function(e,t){e.style.transitionDelay=200+25*t+"ms"}))}}}return{addClass:function(e,t,o){n(e,t,o),o()},removeClass:function(e,t,o){n(e,t,o),o()}}}t.module("material.components.fabToolbar",["material.core","material.components.fabShared","material.components.fabActions"]).directive("mdFabToolbar",n).animation(".md-fab-toolbar",o).service("mdFabToolbarAnimation",o)}()}(),function(){function e(e,o,i,r){function a(n,a,d,s){function l(){for(var e in o.MEDIA)r(e),r.getQuery(o.MEDIA[e]).addListener(M);return r.watchResponsiveAttributes(["md-cols","md-row-height","md-gutter"],d,m)}function c(){s.layoutDelegate=t.noop,T();for(var e in o.MEDIA)r.getQuery(o.MEDIA[e]).removeListener(M)}function m(e){null==e?s.invalidateLayout():r(e)&&s.invalidateLayout()}function u(e){var o=g(),r={tileSpans:b(o),colCount:v(),rowMode:C(),rowHeight:$(),gutter:E()};if(e||!t.equals(r,A)){var d=i(r.colCount,r.tileSpans,o).map(function(e,n){return{grid:{element:a,style:f(r.colCount,n,r.gutter,r.rowMode,r.rowHeight)},tiles:e.map(function(e,i){return{element:t.element(o[i]),style:h(e.position,e.spans,r.colCount,n,r.gutter,r.rowMode,r.rowHeight)}})}}).reflow().performance();n.mdOnLayout({$event:{performance:d}}),A=r}}function p(e){return w+e+k}function h(e,t,n,o,i,r,a){var d=1/n*100,s=(n-1)/n,l=_({share:d,gutterShare:s,gutter:i}),c={left:x({unit:l,offset:e.col,gutter:i}),width:S({unit:l,span:t.col,gutter:i}),paddingTop:"",marginTop:"",top:"",height:""};switch(r){case"fixed":c.top=x({unit:a,offset:e.row,gutter:i}),c.height=S({unit:a,span:t.row,gutter:i});break;case"ratio":var m=d/a,u=_({share:m,gutterShare:s,gutter:i});c.paddingTop=S({unit:u,span:t.row,gutter:i}),c.marginTop=x({unit:u,offset:e.row,gutter:i});break;case"fit":var p=(o-1)/o,m=1/o*100,u=_({share:m,gutterShare:p,gutter:i});c.top=x({unit:u,offset:e.row,gutter:i}),c.height=S({unit:u,span:t.row,gutter:i})}return c}function f(e,t,n,o,i){var r={};switch(o){case"fixed":r.height=S({unit:i,span:t,gutter:n}),r.paddingBottom="";break;case"ratio":var a=1===e?0:(e-1)/e,d=1/e*100,s=d*(1/i),l=_({share:s,gutterShare:a,gutter:n});r.height="",r.paddingBottom=S({unit:l,span:t,gutter:n});break;case"fit":}return r}function g(){return[].filter.call(a.children(),function(e){return"MD-GRID-TILE"==e.tagName&&!e.$$mdDestroyed})}function b(e){return[].map.call(e,function(e){var n=t.element(e).controller("mdGridTile");return{row:parseInt(r.getResponsiveAttribute(n.$attrs,"md-rowspan"),10)||1,col:parseInt(r.getResponsiveAttribute(n.$attrs,"md-colspan"),10)||1}})}function v(){var e=parseInt(r.getResponsiveAttribute(d,"md-cols"),10);if(isNaN(e))throw"md-grid-list: md-cols attribute was not found, or contained a non-numeric value";return e}function E(){return y(r.getResponsiveAttribute(d,"md-gutter")||1)}function $(){var e=r.getResponsiveAttribute(d,"md-row-height");if(!e)throw"md-grid-list: md-row-height attribute was not found";switch(C()){case"fixed":return y(e);case"ratio":var t=e.split(":");return parseFloat(t[0])/parseFloat(t[1]);case"fit":return 0}}function C(){var e=r.getResponsiveAttribute(d,"md-row-height");if(!e)throw"md-grid-list: md-row-height attribute was not found";return"fit"==e?"fit":e.indexOf(":")!==-1?"ratio":"fixed"}function y(e){return/\D$/.test(e)?e:e+"px"}a.addClass("_md"),a.attr("role","list"),s.layoutDelegate=u;var M=t.bind(s,s.invalidateLayout),T=l();n.$on("$destroy",c);var A,w=e.startSymbol(),k=e.endSymbol(),_=e(p("share")+"% - ("+p("gutter")+" * "+p("gutterShare")+")"),x=e("calc(("+p("unit")+" + "+p("gutter")+") * "+p("offset")+")"),S=e("calc(("+p("unit")+") * "+p("span")+" + ("+p("span")+" - 1) * "+p("gutter")+")")}return{restrict:"E",controller:n,scope:{mdOnLayout:"&"},link:a}}function n(e){this.layoutInvalidated=!1,this.tilesInvalidated=!1,this.$timeout_=e.nextTick,this.layoutDelegate=t.noop}function o(e){function n(t,n){var o,a,d,s,l,c;return s=e.time(function(){a=i(t,n)}),o={layoutInfo:function(){return a},map:function(t){return l=e.time(function(){var e=o.layoutInfo();d=t(e.positioning,e.rowCount)}),o},reflow:function(t){return c=e.time(function(){var e=t||r;e(d.grid,d.tiles)}),o},performance:function(){return{tileCount:n.length,layoutTime:s,mapTime:l,reflowTime:c,totalTime:s+l+c}}}}function o(e,t){e.element.css(e.style),t.forEach(function(e){e.element.css(e.style)})}function i(e,t){function n(t,n){if(t.col>e)throw"md-grid-list: Tile at position "+n+" has a colspan ("+t.col+") that exceeds the column count ("+e+")";for(var a=0,c=0;c-a<t.col;)d>=e?o():(a=l.indexOf(0,d),a!==-1&&(c=r(a+1))!==-1?d=c+1:(a=c=0,o()));return i(a,t.col,t.row),d=a+t.col,{col:a,row:s}}function o(){d=0,s++,i(0,e,-1)}function i(e,t,n){for(var o=e;o<e+t;o++)l[o]=Math.max(l[o]+n,0)}function r(e){var t;for(t=e;t<l.length;t++)if(0!==l[t])return t;if(t===l.length)return t}function a(){for(var t=[],n=0;n<e;n++)t.push(0);return t}var d=0,s=0,l=a();return{positioning:t.map(function(e,t){return{spans:e,position:n(e,t)}}),rowCount:s+Math.max.apply(Math,l)}}var r=o;return n.animateWith=function(e){r=t.isFunction(e)?e:o},n}function i(e){function n(n,o,i,r){o.attr("role","listitem");var a=e.watchResponsiveAttributes(["md-colspan","md-rowspan"],i,t.bind(r,r.invalidateLayout));r.invalidateTiles(),n.$on("$destroy",function(){o[0].$$mdDestroyed=!0,a(),r.invalidateLayout()}),t.isDefined(n.$parent.$index)&&n.$watch(function(){return n.$parent.$index},function(e,t){e!==t&&r.invalidateTiles()})}return{restrict:"E",require:"^mdGridList",template:"<figure ng-transclude></figure>",transclude:!0,scope:{},controller:["$attrs",function(e){this.$attrs=e}],link:n}}function r(){return{template:"<figcaption ng-transclude></figcaption>",transclude:!0}}n.$inject=["$mdUtil"],o.$inject=["$mdUtil"],e.$inject=["$interpolate","$mdConstant","$mdGridLayout","$mdMedia"],i.$inject=["$mdMedia"],t.module("material.components.gridList",["material.core"]).directive("mdGridList",e).directive("mdGridTile",i).directive("mdGridTileFooter",r).directive("mdGridTileHeader",r).factory("$mdGridLayout",o),n.prototype={invalidateTiles:function(){this.tilesInvalidated=!0,this.invalidateLayout()},invalidateLayout:function(){this.layoutInvalidated||(this.layoutInvalidated=!0,this.$timeout_(t.bind(this,this.layout)))},layout:function(){try{this.layoutDelegate(this.tilesInvalidated)}finally{this.layoutInvalidated=!1,this.tilesInvalidated=!1}}}}(),function(){t.module("material.components.icon",["material.core"])}(),function(){function n(e,t){function n(t){var n=t[0].querySelector(r),o=t[0].querySelector(a);return n&&t.addClass("md-icon-left"),o&&t.addClass("md-icon-right"),function(t,n){e(n)}}function o(e,n,o,i){var r=this;r.isErrorGetter=o.mdIsError&&t(o.mdIsError),r.delegateClick=function(){r.input.focus()},r.element=n,r.setFocused=function(e){n.toggleClass("md-input-focused",!!e)},r.setHasValue=function(e){n.toggleClass("md-input-has-value",!!e)},r.setHasPlaceholder=function(e){n.toggleClass("md-input-has-placeholder",!!e)},r.setInvalid=function(e){e?i.addClass(n,"md-input-invalid"):i.removeClass(n,"md-input-invalid")},e.$watch(function(){return r.label&&r.input},function(e){e&&!r.label.attr("for")&&r.label.attr("for",r.input.attr("id"))})}o.$inject=["$scope","$element","$attrs","$animate"];var i=["INPUT","TEXTAREA","SELECT","MD-SELECT"],r=i.reduce(function(e,t){return e.concat(["md-icon ~ "+t,".md-icon ~ "+t])},[]).join(","),a=i.reduce(function(e,t){return e.concat([t+" ~ md-icon",t+" ~ .md-icon"])},[]).join(",");return{restrict:"E",compile:n,controller:o}}function o(){return{restrict:"E",require:"^?mdInputContainer",link:function(e,t,n,o){!o||n.mdNoFloat||t.hasClass("md-container-ignore")||(o.label=t,e.$on("$destroy",function(){o.label=null}))}}}function i(e,n,o,i,r){function a(a,d,s,l){function c(e){return h.setHasValue(!g.$isEmpty(e)),e}function m(){h.label&&s.$observe("required",function(e){h.label.toggleClass("md-required",e&&!E)})}function u(){h.setHasValue(d.val().length>0||(d[0].validity||{}).badInput)}function p(){function o(){d.attr("rows",1).css("height","auto").addClass("md-no-flex");var e=l();if(!$){var t=d[0].style.padding||"";$=d.css("padding",0).prop("offsetHeight"),d[0].style.padding=t}if(b&&$&&(e=Math.max(e,$*b)),v&&$){var n=$*v;n<e?(d.attr("md-no-autogrow",""),e=n):d.removeAttr("md-no-autogrow")}$&&d.attr("rows",Math.round(e/$)),d.css("height",e+"px").removeClass("md-no-flex")}function l(){var e=C.offsetHeight,t=C.scrollHeight-e;return e+Math.max(t,0)}function c(t){return e.nextTick(o),t}function m(){if(p&&(p=!1,t.element(n).off("resize",o),E&&E(),d.attr("md-no-autogrow","").off("input",o),f)){var e=g.$formatters.indexOf(c);e>-1&&g.$formatters.splice(e,1)}}function u(){function e(e){e.preventDefault(),c=!0,u=e.clientY,p=parseFloat(d.css("height"))||d.prop("offsetHeight")}function n(e){c&&(e.preventDefault(),m(),f.addClass("md-input-resized"))}function o(e){c&&d.css("height",p+e.pointer.distanceY+"px")}function i(e){c&&(c=!1,f.removeClass("md-input-resized"))}if(!s.hasOwnProperty("mdNoResize")){var l=t.element('<div class="md-resize-handle"></div>'),c=!1,u=null,p=0,f=h.element,g=r.register(l,"drag",{horizontal:!1});d.wrap('<div class="md-resize-wrapper">').after(l),l.on("mousedown",e),f.on("$md.dragstart",n).on("$md.drag",o).on("$md.dragend",i),a.$on("$destroy",function(){l.off("mousedown",e).remove(),f.off("$md.dragstart",n).off("$md.drag",o).off("$md.dragend",i),g(),l=null,f=null,g=null})}}var p=!s.hasOwnProperty("mdNoAutogrow");if(u(),p){var b=s.hasOwnProperty("rows")?parseInt(s.rows):NaN,v=s.hasOwnProperty("maxRows")?parseInt(s.maxRows):NaN,E=a.$on("md-resize-textarea",o),$=null,C=d[0];if(i(function(){e.nextTick(o)},10,!1),d.on("input",o),f&&g.$formatters.push(c),b||d.attr("rows",1),t.element(n).on("resize",o),a.$on("$destroy",m),s.hasOwnProperty("mdDetectHidden")){var y=function(){var e=!1;return function(){var t=0===C.offsetHeight;t===!1&&e===!0&&o(),e=t}}();a.$watch(function(){return e.nextTick(y,!1),!0})}}}var h=l[0],f=!!l[1],g=l[1]||e.fakeNgModel(),b=l[2],v=t.isDefined(s.readonly),E=e.parseAttributeBoolean(s.mdNoAsterisk),$=d[0].tagName.toLowerCase();if(h){if("hidden"===s.type)return void d.attr("aria-hidden","true");if(h.input){if(h.input[0].contains(d[0]))return;throw new Error("<md-input-container> can only have *one* <input>, <textarea> or <md-select> child element!")}h.input=d,m();var C=t.element('<div class="md-errors-spacer">');d.after(C),h.label||o.expect(d,"aria-label",s.placeholder),d.addClass("md-input"),d.attr("id")||d.attr("id","input_"+e.nextUid()),"input"===$&&"number"===s.type&&s.min&&s.max&&!s.step?d.attr("step","any"):"textarea"===$&&p(),f||u();var y=h.isErrorGetter||function(){return g.$invalid&&(g.$touched||b&&b.$submitted)};a.$watch(y,h.setInvalid),s.ngValue&&s.$observe("value",u),g.$parsers.push(c),g.$formatters.push(c),d.on("input",u),v||d.on("focus",function(t){e.nextTick(function(){h.setFocused(!0)})}).on("blur",function(t){e.nextTick(function(){h.setFocused(!1),u()})}),a.$on("$destroy",function(){h.setFocused(!1),h.setHasValue(!1),h.input=null})}}return{restrict:"E",require:["^?mdInputContainer","?ngModel","?^form"],link:a}}function r(e,n){function o(o,i,r,a){function d(e){return l.parent?(l.text(String(i.val()||e||"").length+" / "+s),e):e}var s,l,c,m=a[0],u=a[1];n.nextTick(function(){c=t.element(u.element[0].querySelector(".md-errors-spacer")),l=t.element('<div class="md-char-counter">'),c.append(l),r.$set("ngTrim","false"),o.$watch(r.mdMaxlength,function(n){s=n,t.isNumber(n)&&n>0?(l.parent().length||e.enter(l,c),d()):e.leave(l)}),m.$validators["md-maxlength"]=function(e,n){return!t.isNumber(s)||s<0||(d(),(e||i.val()||n||"").length<=s)}})}return{restrict:"A",require:["ngModel","^mdInputContainer"],link:o}}function a(e){function n(n,o,i,r){if(r){var a=r.element.find("label"),d=r.element.attr("md-no-float");if(a&&a.length||""===d||n.$eval(d))return void r.setHasPlaceholder(!0);if("MD-SELECT"!=o[0].nodeName){var s=t.element('<label ng-click="delegateClick()" tabindex="-1">'+i.placeholder+"</label>");i.$set("placeholder",null),r.element.addClass("md-icon-float").prepend(s),e(s)(n)}}}return{restrict:"A",require:"^^?mdInputContainer",priority:200,link:{pre:n}}}function d(e){function t(t,n,o){function i(){a=!0,e(function(){n[0].select(),a=!1},1,!1)}function r(e){a&&e.preventDefault()}if("INPUT"===n[0].nodeName||"TEXTAREA"===n[0].nodeName){var a=!1;n.on("focus",i).on("mouseup",r),t.$on("$destroy",function(){n.off("focus",i).off("mouseup",r)})}}return{restrict:"A",link:t}}function s(){function e(e,n,o,i){i&&(n.toggleClass("md-input-messages-animation",!0),n.toggleClass("md-auto-hide",!0),("false"==o.mdAutoHide||t(o))&&n.toggleClass("md-auto-hide",!1))}function t(e){return A.some(function(t){return e[t]})}return{restrict:"EA",link:e,require:"^^?mdInputContainer"}}function l(e){function t(t){function n(){for(var e=t[0];e=e.parentNode;)if(e.nodeType===Node.DOCUMENT_FRAGMENT_NODE)return!0;return!1}function o(t){return!!e.getClosest(t,"md-input-container")}function i(e){e.toggleClass("md-input-message-animation",!0)}if(o(t))i(t);else if(n())return function(e,n){o(n)&&i(t)}}return{restrict:"EA",compile:t,priority:100}}function c(e,t,n,o){return E(e,t,n,o),{addClass:function(e,t,n){p(e,n)}}}function m(e,t,n,o){return E(e,t,n,o),{enter:function(e,t){p(e,t)},leave:function(e,t){h(e,t)},addClass:function(e,t,n){"ng-hide"==t?h(e,n):n()},removeClass:function(e,t,n){"ng-hide"==t?p(e,n):n()}}}function u(e,t,n,o){return E(e,t,n,o),{enter:function(e,t){var n=f(e);n.start().done(t)},leave:function(e,t){var n=g(e);n.start().done(t)}}}function p(e,n){var o,i=[],r=v(e),a=r.children();return 0==r.length||0==a.length?(T.warn("mdInput messages show animation called on invalid messages element: ",e),void n()):(t.forEach(a,function(e){o=f(t.element(e)),i.push(o.start())}),void C.all(i,n))}function h(e,n){var o,i=[],r=v(e),a=r.children();return 0==r.length||0==a.length?(T.warn("mdInput messages hide animation called on invalid messages element: ",e),void n()):(t.forEach(a,function(e){o=g(t.element(e)),i.push(o.start())}),void C.all(i,n))}function f(t){var n=parseInt(e.getComputedStyle(t[0]).height),o=parseInt(e.getComputedStyle(t[0]).marginTop),i=v(t),r=b(t),a=o>-n;return a||i.hasClass("md-auto-hide")&&!r.hasClass("md-input-invalid")?y(t,{}):y(t,{event:"enter",structural:!0,from:{opacity:0,"margin-top":-n+"px"},to:{opacity:1,"margin-top":"0"},duration:.3})}function g(t){var n=t[0].offsetHeight,o=e.getComputedStyle(t[0]);return 0===parseInt(o.opacity)?y(t,{}):y(t,{event:"leave",structural:!0,from:{opacity:1,"margin-top":0},to:{opacity:0,"margin-top":-n+"px"},duration:.3})}function b(e){var t=e.controller("mdInputContainer");return t.element}function v(e){return e.hasClass("md-input-messages-animation")?e:e.hasClass("md-input-message-animation")?t.element(M.getClosest(e,function(e){return e.classList.contains("md-input-messages-animation")})):t.element(e[0].querySelector(".md-input-messages-animation"))}function E(e,t,n,o){C=e,y=t,M=n,T=o}n.$inject=["$mdTheming","$parse"],i.$inject=["$mdUtil","$window","$mdAria","$timeout","$mdGesture"],r.$inject=["$animate","$mdUtil"],a.$inject=["$compile"],l.$inject=["$mdUtil"],d.$inject=["$timeout"],c.$inject=["$$AnimateRunner","$animateCss","$mdUtil","$log"],m.$inject=["$$AnimateRunner","$animateCss","$mdUtil","$log"],u.$inject=["$$AnimateRunner","$animateCss","$mdUtil","$log"];var $=t.module("material.components.input",["material.core"]).directive("mdInputContainer",n).directive("label",o).directive("input",i).directive("textarea",i).directive("mdMaxlength",r).directive("placeholder",a).directive("ngMessages",s).directive("ngMessage",l).directive("ngMessageExp",l).directive("mdSelectOnFocus",d).animation(".md-input-invalid",c).animation(".md-input-messages-animation",m).animation(".md-input-message-animation",u);e._mdMocksIncluded&&$.service("$$mdInput",function(){return{messages:{show:p,hide:h,getElement:v}}}).service("mdInputInvalidAnimation",c).service("mdInputMessagesAnimation",m).service("mdInputMessageAnimation",u);var C,y,M,T,A=["ngIf","ngShow","ngHide","ngSwitchWhen","ngSwitchDefault"]}(),function(){function e(e){return{restrict:"E",compile:function(t){return t[0].setAttribute("role","list"),e}}}function n(e,n,o,i){var r=["md-checkbox","md-switch","md-menu"];return{restrict:"E",controller:"MdListController",compile:function(a,d){function s(){for(var e,t,n=["md-switch","md-checkbox"],o=0;t=n[o];++o)if((e=a.find(t)[0])&&!e.hasAttribute("aria-label")){var i=a.find("p")[0];if(!i)return;e.setAttribute("aria-label","Toggle "+i.textContent)}}function l(){var e=t.element(E),n=e.parent().hasClass("md-secondary-container")||E.parentNode.firstElementChild!==E,o="left";n&&(o="right"),e.attr("md-position-mode")||e.attr("md-position-mode",o+" target");var i=e.children().eq(0);g(i[0])||i.attr("ng-click","$mdMenu.open($event)"),i.attr("aria-label")||i.attr("aria-label","Open List Menu")}function c(n){if("div"==n)C=t.element('<div class="md-no-style md-list-item-inner">'),C.append(a.contents()),a.addClass("md-proxy-focus");else{C=t.element('<div class="md-button md-no-style">   <div class="md-list-item-inner"></div></div>');var o=t.element('<md-button class="md-no-style"></md-button>');p(a[0],o[0]),o.attr("aria-label")||o.attr("aria-label",e.getText(a)),a.hasClass("md-no-focus")&&o.addClass("md-no-focus"),C.prepend(o),C.children().eq(1).append(a.contents()),a.addClass("_md-button-wrap")}a[0].setAttribute("tabindex","-1"),a.append(C)}function m(){var e=t.element('<div class="md-secondary-container">');t.forEach($,function(t){u(t,e)}),C.append(e)}function u(n,o){if(n&&!f(n)&&n.hasAttribute("ng-click")){e.expect(n,"aria-label");var i=t.element('<md-button class="md-secondary md-icon-button">');p(n,i[0],["ng-if","ng-hide","ng-show"]),n.setAttribute("tabindex","-1"),i.append(n),n=i[0]}n&&(!g(n)||!d.ngClick&&h(n))&&t.element(n).removeClass("md-secondary"),a.addClass("md-with-secondary"),o.append(n)}function p(e,n,i){var r=o.prefixer(["ng-if","ng-click","ng-dblclick","aria-label","ng-disabled","ui-sref","href","ng-href","target","ng-attr-ui-sref","ui-sref-opts"]);i&&(r=r.concat(o.prefixer(i))),t.forEach(r,function(t){e.hasAttribute(t)&&(n.setAttribute(t,e.getAttribute(t)),e.removeAttribute(t))})}function h(e){return r.indexOf(e.nodeName.toLowerCase())!=-1}function f(e){var t=e.nodeName.toUpperCase();return"MD-BUTTON"==t||"BUTTON"==t}function g(e){for(var t=e.attributes,n=0;n<t.length;n++)if("ngClick"===d.$normalize(t[n].name))return!0;return!1}function b(e,a,d,s){function l(){p&&p.children&&!b&&!v&&t.forEach(r,function(e){t.forEach(p.querySelectorAll(e+":not(.md-secondary)"),function(e){u.push(e)})})}function c(){(1==u.length||b)&&(a.addClass("md-clickable"),b||s.attachRipple(e,t.element(a[0].querySelector(".md-no-style"))))}function m(e){var t=["md-slider"];if(!e.path)return t.indexOf(e.target.tagName.toLowerCase())!==-1;for(var n=e.path.indexOf(a.children()[0]),o=0;o<n;o++)if(t.indexOf(e.path[o].tagName.toLowerCase())!==-1)return!0}a.addClass("_md");var u=[],p=a[0].firstElementChild,h=a.hasClass("_md-button-wrap"),f=h?p.firstElementChild:p,b=f&&g(f),v=a.hasClass("md-no-proxy");l(),c(),u.length&&t.forEach(u,function(n){n=t.element(n),e.mouseActive=!1,n.on("mousedown",function(){e.mouseActive=!0,i(function(){e.mouseActive=!1},100)}).on("focus",function(){e.mouseActive===!1&&a.addClass("md-focused"),n.on("blur",function t(){a.removeClass("md-focused"),n.off("blur",t)})})});var E=function(e){if("INPUT"!=e.target.nodeName&&"TEXTAREA"!=e.target.nodeName&&!e.target.isContentEditable){var t=e.which||e.keyCode;t==n.KEY_CODE.SPACE&&f&&(f.click(),e.preventDefault(),e.stopPropagation())}};b||u.length||f&&f.addEventListener("keypress",E),a.off("click"),a.off("keypress"),1==u.length&&f&&a.children().eq(0).on("click",function(e){if(!m(e)){var n=o.getClosest(e.target,"BUTTON");!n&&f.contains(e.target)&&t.forEach(u,function(n){e.target===n||n.contains(e.target)||("MD-MENU"===n.nodeName&&(n=n.children[0]),t.element(n).triggerHandler("click"))})}}),e.$on("$destroy",function(){f&&f.removeEventListener("keypress",E)})}var v,E,$=a[0].querySelectorAll(".md-secondary"),C=a;if(a[0].setAttribute("role","listitem"),d.ngClick||d.ngDblclick||d.ngHref||d.href||d.uiSref||d.ngAttrUiSref)c("button");else if(!a.hasClass("md-no-proxy")){for(var y,M=0;y=r[M];++M)if(E=a[0].querySelector(y)){v=!0;break}v?c("div"):a.addClass("md-no-proxy")}return m(),s(),v&&"MD-MENU"===E.nodeName&&l(),b}}}function o(e,t,n){function o(e,t){var o={};n.attach(e,t,o)}var i=this;i.attachRipple=o}o.$inject=["$scope","$element","$mdListInkRipple"],e.$inject=["$mdTheming"],n.$inject=["$mdAria","$mdConstant","$mdUtil","$timeout"],t.module("material.components.list",["material.core"]).controller("MdListController",o).directive("mdList",e).directive("mdListItem",n)}(),function(){t.module("material.components.menu",["material.core","material.components.backdrop"])}(),function(){t.module("material.components.menuBar",["material.core","material.components.icon","material.components.menu"])}(),function(){function e(){return{definePreset:o,getAllPresets:i,clearPresets:r,$get:a()}}function o(e,t){if(!e||!t)throw new Error("mdPanelProvider: The panel preset definition is malformed. The name and preset object are required.");if(g.hasOwnProperty(e))throw new Error("mdPanelProvider: The panel preset you have requested has already been defined.");delete t.id,delete t.position,delete t.animation,g[e]=t}function i(){return t.copy(g)}function r(){g={}}function a(){return["$rootElement","$rootScope","$injector","$window",function(e,t,n,o){return new d(g,e,t,n,o)}]}function d(e,n,o,i,r){this._defaultConfigOptions={bindToController:!0,clickOutsideToClose:!1,disableParentScroll:!1,escapeToClose:!1,focusOnOpen:!0,fullscreen:!1,hasBackdrop:!1,propagateContainerEvents:!1,transformTemplate:t.bind(this,this._wrapTemplate),trapFocus:!1,zIndex:p},this._config={},this._presets=e,this._$rootElement=n,this._$rootScope=o,this._$injector=i,this._$window=r,this._$mdUtil=this._$injector.get("$mdUtil"),this._trackedPanels={},this._groups=Object.create(null),this.animation=c.animation,this.xPosition=l.xPosition,this.yPosition=l.yPosition,this.interceptorTypes=s.interceptorTypes,this.closeReasons=s.closeReasons,this.absPosition=l.absPosition}function s(e,t){this._$q=t.get("$q"),this._$mdCompiler=t.get("$mdCompiler"),this._$mdConstant=t.get("$mdConstant"),this._$mdUtil=t.get("$mdUtil"),this._$mdTheming=t.get("$mdTheming"),this._$rootScope=t.get("$rootScope"),this._$animate=t.get("$animate"),this._$mdPanel=t.get("$mdPanel"),this._$log=t.get("$log"),this._$window=t.get("$window"),this._$$rAF=t.get("$$rAF"),this.id=e.id,this.config=e,this.panelContainer,this.panelEl,this.isAttached=!1,this._removeListeners=[],this._topFocusTrap,this._bottomFocusTrap,this._backdropRef,this._restoreScroll=null,this._interceptors=Object.create(null),this._compilerCleanup=null,this._restoreCache={styles:"",classes:""}}function l(e){this._$window=e.get("$window"),this._isRTL="rtl"===e.get("$mdUtil").bidi(),this._$mdConstant=e.get("$mdConstant"),this._absolute=!1,this._relativeToEl,this._top="",this._bottom="",this._left="",this._right="",this._translateX=[],this._translateY=[],this._positions=[],this._actualPosition}function c(e){this._$mdUtil=e.get("$mdUtil"),this._openFrom,this._closeTo,this._animationClass="",this._openDuration,this._closeDuration,this._rawDuration}function m(e){var n=t.isString(e)?document.querySelector(e):e;return t.element(n)}function u(e,t){var n=getComputedStyle(e[0]||e)[t],o=n.indexOf("("),i=n.lastIndexOf(")"),r={x:0,y:0};if(o>-1&&i>-1){var a=n.substring(o+1,i).split(", ").slice(-2);r.x=parseInt(a[0]),r.y=parseInt(a[1])}return r}d.$inject=["presets","$rootElement","$rootScope","$injector","$window"],t.module("material.components.panel",["material.core","material.components.backdrop"]).provider("$mdPanel",e);var p=80,h="_md-panel-hidden",f=t.element('<div class="_md-panel-focus-trap" tabindex="0"></div>'),g={};d.prototype.create=function(e,n){if("string"==typeof e?e=this._getPresetByName(e):"object"!=typeof e||!t.isUndefined(n)&&n||(n=e,e={}),e=e||{},n=n||{},t.isDefined(n.id)&&this._trackedPanels[n.id]){var o=this._trackedPanels[n.id];return t.extend(o.config,n),o}this._config=t.extend({id:n.id||"panel_"+this._$mdUtil.nextUid(),scope:this._$rootScope.$new(!0),attachTo:this._$rootElement},this._defaultConfigOptions,n,e);var i=new s(this._config,this._$injector);return this._trackedPanels[n.id]=i,this._config.groupName&&(t.isString(this._config.groupName)&&(this._config.groupName=[this._config.groupName]),t.forEach(this._config.groupName,function(e){i.addToGroup(e)})),this._config.scope.$on("$destroy",t.bind(i,i.detach)),i},d.prototype.open=function(e,t){var n=this.create(e,t);return n.open().then(function(){return n})},d.prototype._getPresetByName=function(e){if(!this._presets[e])throw new Error("mdPanel: The panel preset configuration that you requested does not exist. Use the $mdPanelProvider to create a preset before requesting one.");return this._presets[e]},d.prototype.newPanelPosition=function(){return new l(this._$injector)},d.prototype.newPanelAnimation=function(){return new c(this._$injector)},d.prototype.newPanelGroup=function(e,t){if(!this._groups[e]){t=t||{};var n={panels:[],openPanels:[],maxOpen:t.maxOpen>0?t.maxOpen:1/0};this._groups[e]=n}return this._groups[e]},d.prototype.setGroupMaxOpen=function(e,t){if(!this._groups[e])throw new Error("mdPanel: Group does not exist yet. Call newPanelGroup().");this._groups[e].maxOpen=t},d.prototype._openCountExceedsMaxOpen=function(e){if(this._groups[e]){var t=this._groups[e];return t.maxOpen>0&&t.openPanels.length>t.maxOpen}return!1},d.prototype._closeFirstOpenedPanel=function(e){this._groups[e].openPanels[0].close()},d.prototype._wrapTemplate=function(e){var t=e||"";return'<div class="md-panel-outer-wrapper">  <div class="md-panel" style="left: -9999px;">'+t+"</div></div>"},d.prototype._wrapContentElement=function(e){var n=t.element('<div class="md-panel-outer-wrapper">');return e.addClass("md-panel").css("left","-9999px"),n.append(e),n},s.interceptorTypes={CLOSE:"onClose"},s.prototype.open=function(){var e=this;return this._$q(function(n,o){var i=e._done(n,e),r=e._simpleBind(e.show,e),a=function(){e.config.groupName&&t.forEach(e.config.groupName,function(t){e._$mdPanel._openCountExceedsMaxOpen(t)&&e._$mdPanel._closeFirstOpenedPanel(t)})};e.attach().then(r).then(a).then(i)["catch"](o)})},s.prototype.close=function(e){var n=this;return this._$q(function(o,i){n._callInterceptors(s.interceptorTypes.CLOSE).then(function(){var r=n._done(o,n),a=n._simpleBind(n.detach,n),d=n.config.onCloseSuccess||t.noop;d=t.bind(n,d,n,e),n.hide().then(a).then(r).then(d)["catch"](i)},i)})},s.prototype.attach=function(){if(this.isAttached&&this.panelEl)return this._$q.when(this);var e=this;return this._$q(function(n,o){var i=e._done(n,e),r=e.config.onDomAdded||t.noop,a=function(t){return e.isAttached=!0,e._addEventListeners(),t};e._$q.all([e._createBackdrop(),e._createPanel().then(a)["catch"](o)]).then(r).then(i)["catch"](o)})},s.prototype.detach=function(){if(!this.isAttached)return this._$q.when(this);var e=this,n=e.config.onDomRemoved||t.noop,o=function(){return e._removeEventListeners(),e._topFocusTrap&&e._topFocusTrap.parentNode&&e._topFocusTrap.parentNode.removeChild(e._topFocusTrap),e._bottomFocusTrap&&e._bottomFocusTrap.parentNode&&e._bottomFocusTrap.parentNode.removeChild(e._bottomFocusTrap),e._restoreCache.classes&&(e.panelEl[0].className=e._restoreCache.classes),e.panelEl[0].style.cssText=e._restoreCache.styles||"",e._compilerCleanup(),e.panelContainer.remove(),e.isAttached=!1,e._$q.when(e)};return this._restoreScroll&&(this._restoreScroll(),this._restoreScroll=null),this._$q(function(t,i){var r=e._done(t,e);e._$q.all([o(),!e._backdropRef||e._backdropRef.detach()]).then(n).then(r)["catch"](i)})},s.prototype.destroy=function(){var e=this;this.config.groupName&&t.forEach(this.config.groupName,function(t){e.removeFromGroup(t)}),this.config.scope.$destroy(),this.config.locals=null,this._interceptors=null},s.prototype.show=function(){if(!this.panelContainer)return this._$q(function(e,t){t("mdPanel: Panel does not exist yet. Call open() or attach().")});if(!this.panelContainer.hasClass(h))return this._$q.when(this);var e=this,n=function(){return e.panelContainer.removeClass(h),e._animateOpen()};return this._$q(function(o,i){var r=e._done(o,e),a=e.config.onOpenComplete||t.noop,d=function(){e.config.groupName&&t.forEach(e.config.groupName,function(t){e._$mdPanel._groups[t].openPanels.push(e)})};e._$q.all([e._backdropRef?e._backdropRef.show():e,n().then(function(){e._focusOnOpen()},i)]).then(a).then(d).then(r)["catch"](i)})},s.prototype.hide=function(){if(!this.panelContainer)return this._$q(function(e,t){t("mdPanel: Panel does not exist yet. Call open() or attach().")});if(this.panelContainer.hasClass(h))return this._$q.when(this);var e=this;return this._$q(function(n,o){var i=e._done(n,e),r=e.config.onRemoving||t.noop,a=function(){e.panelContainer.addClass(h)},d=function(){if(e.config.groupName){var n;t.forEach(e.config.groupName,function(t){t=e._$mdPanel._groups[t],n=t.openPanels.indexOf(e),n>-1&&t.openPanels.splice(n,1)})}},s=function(){var t=e.config.origin;t&&m(t).focus()};e._$q.all([e._backdropRef?e._backdropRef.hide():e,e._animateClose().then(r).then(a).then(d).then(s)["catch"](o)]).then(i,o)})},s.prototype.addClass=function(e,t){if(this._$log.warn("mdPanel: The addClass method is in the process of being deprecated. Full deprecation is scheduled for the Angular Material 1.2 release. To achieve the same results, use the panelContainer or panelEl JQLite elements that are referenced in MdPanelRef."),
!this.panelContainer)throw new Error("mdPanel: Panel does not exist yet. Call open() or attach().");t||this.panelContainer.hasClass(e)?t&&!this.panelEl.hasClass(e)&&this.panelEl.addClass(e):this.panelContainer.addClass(e)},s.prototype.removeClass=function(e,t){if(this._$log.warn("mdPanel: The removeClass method is in the process of being deprecated. Full deprecation is scheduled for the Angular Material 1.2 release. To achieve the same results, use the panelContainer or panelEl JQLite elements that are referenced in MdPanelRef."),!this.panelContainer)throw new Error("mdPanel: Panel does not exist yet. Call open() or attach().");!t&&this.panelContainer.hasClass(e)?this.panelContainer.removeClass(e):t&&this.panelEl.hasClass(e)&&this.panelEl.removeClass(e)},s.prototype.toggleClass=function(e,t){if(this._$log.warn("mdPanel: The toggleClass method is in the process of being deprecated. Full deprecation is scheduled for the Angular Material 1.2 release. To achieve the same results, use the panelContainer or panelEl JQLite elements that are referenced in MdPanelRef."),!this.panelContainer)throw new Error("mdPanel: Panel does not exist yet. Call open() or attach().");t?this.panelEl.toggleClass(e):this.panelContainer.toggleClass(e)},s.prototype._compile=function(){var e=this;return e._$mdCompiler.compile(e.config).then(function(n){var o=e.config;if(o.contentElement){var i=n.element;e._restoreCache.styles=i[0].style.cssText,e._restoreCache.classes=i[0].className,e.panelContainer=e._$mdPanel._wrapContentElement(i),e.panelEl=i}else e.panelContainer=n.link(o.scope),e.panelEl=t.element(e.panelContainer[0].querySelector(".md-panel"));return e._compilerCleanup=n.cleanup,m(e.config.attachTo).append(e.panelContainer),e})},s.prototype._createPanel=function(){var e=this;return this._$q(function(t,n){e.config.locals||(e.config.locals={}),e.config.locals.mdPanelRef=e,e._compile().then(function(){e.config.disableParentScroll&&(e._restoreScroll=e._$mdUtil.disableScrollAround(null,e.panelContainer,{disableScrollMask:!0})),e.config.panelClass&&e.panelEl.addClass(e.config.panelClass),e.config.propagateContainerEvents&&e.panelContainer.css("pointer-events","none"),e._$animate.pin&&e._$animate.pin(e.panelContainer,m(e.config.attachTo)),e._configureTrapFocus(),e._addStyles().then(function(){t(e)},n)},n)})},s.prototype._addStyles=function(){var e=this;return this._$q(function(t){e.panelContainer.css("z-index",e.config.zIndex),e.panelEl.css("z-index",e.config.zIndex+1);var n=function(){e._setTheming(),e.panelEl.css("left",""),e.panelContainer.addClass(h),t(e)};if(e.config.fullscreen)return e.panelEl.addClass("_md-panel-fullscreen"),void n();var o=e.config.position;return o?void e._$rootScope.$$postDigest(function(){e._updatePosition(!0),e._setTheming(),t(e)}):void n()})},s.prototype._setTheming=function(){this._$mdTheming(this.panelEl),this._$mdTheming(this.panelContainer)},s.prototype.updatePosition=function(e){if(!this.panelContainer)throw new Error("mdPanel: Panel does not exist yet. Call open() or attach().");this.config.position=e,this._updatePosition()},s.prototype._updatePosition=function(e){var t=this.config.position;t&&(t._setPanelPosition(this.panelEl),e&&this.panelContainer.addClass(h),this.panelEl.css(l.absPosition.TOP,t.getTop()),this.panelEl.css(l.absPosition.BOTTOM,t.getBottom()),this.panelEl.css(l.absPosition.LEFT,t.getLeft()),this.panelEl.css(l.absPosition.RIGHT,t.getRight()))},s.prototype._focusOnOpen=function(){if(this.config.focusOnOpen){var e=this;this._$rootScope.$$postDigest(function(){var t=e._$mdUtil.findFocusTarget(e.panelEl)||e.panelEl;t.focus()})}},s.prototype._createBackdrop=function(){if(this.config.hasBackdrop){if(!this._backdropRef){var e=this._$mdPanel.newPanelAnimation().openFrom(this.config.attachTo).withAnimation({open:"_md-opaque-enter",close:"_md-opaque-leave"});this.config.animation&&e.duration(this.config.animation._rawDuration);var t={animation:e,attachTo:this.config.attachTo,focusOnOpen:!1,panelClass:"_md-panel-backdrop",zIndex:this.config.zIndex-1};this._backdropRef=this._$mdPanel.create(t)}if(!this._backdropRef.isAttached)return this._backdropRef.attach()}},s.prototype._addEventListeners=function(){this._configureEscapeToClose(),this._configureClickOutsideToClose(),this._configureScrollListener()},s.prototype._removeEventListeners=function(){this._removeListeners&&this._removeListeners.forEach(function(e){e()}),this._removeListeners=[]},s.prototype._configureEscapeToClose=function(){if(this.config.escapeToClose){var e=m(this.config.attachTo),t=this,n=function(e){e.keyCode===t._$mdConstant.KEY_CODE.ESCAPE&&(e.stopPropagation(),e.preventDefault(),t.close(s.closeReasons.ESCAPE))};this.panelContainer.on("keydown",n),e.on("keydown",n),this._removeListeners.push(function(){t.panelContainer.off("keydown",n),e.off("keydown",n)})}},s.prototype._configureClickOutsideToClose=function(){if(this.config.clickOutsideToClose){var e,n=this.config.propagateContainerEvents?t.element(document.body):this.panelContainer,o=function(t){e=t.target},i=this,r=function(t){i.config.propagateContainerEvents?e===i.panelEl[0]||i.panelEl[0].contains(e)||i.close():e===n[0]&&t.target===n[0]&&(t.stopPropagation(),t.preventDefault(),i.close(s.closeReasons.CLICK_OUTSIDE))};n.on("mousedown",o),n.on("mouseup",r),this._removeListeners.push(function(){n.off("mousedown",o),n.off("mouseup",r)})}},s.prototype._configureScrollListener=function(){if(!this.config.disableParentScroll){var e=t.bind(this,this._updatePosition),n=this._$$rAF.throttle(e),o=this,i=function(){n()};this._$window.addEventListener("scroll",i,!0),this._removeListeners.push(function(){o._$window.removeEventListener("scroll",i,!0)})}},s.prototype._configureTrapFocus=function(){if(this.panelEl.attr("tabIndex","-1"),this.config.trapFocus){var e=this.panelEl;this._topFocusTrap=f.clone()[0],this._bottomFocusTrap=f.clone()[0];var t=function(){e.focus()};this._topFocusTrap.addEventListener("focus",t),this._bottomFocusTrap.addEventListener("focus",t),this._removeListeners.push(this._simpleBind(function(){this._topFocusTrap.removeEventListener("focus",t),this._bottomFocusTrap.removeEventListener("focus",t)},this)),e[0].parentNode.insertBefore(this._topFocusTrap,e[0]),e.after(this._bottomFocusTrap)}},s.prototype.updateAnimation=function(e){this.config.animation=e,this._backdropRef&&this._backdropRef.config.animation.duration(e._rawDuration)},s.prototype._animateOpen=function(){this.panelContainer.addClass("md-panel-is-showing");var e=this.config.animation;if(!e)return this.panelContainer.addClass("_md-panel-shown"),this._$q.when(this);var t=this;return this._$q(function(n){var o=t._done(n,t),i=function(){t._$log.warn("mdPanel: MdPanel Animations failed. Showing panel without animating."),o()};e.animateOpen(t.panelEl).then(o,i)})},s.prototype._animateClose=function(){var e=this.config.animation;if(!e)return this.panelContainer.removeClass("md-panel-is-showing"),this.panelContainer.removeClass("_md-panel-shown"),this._$q.when(this);var t=this;return this._$q(function(n){var o=function(){t.panelContainer.removeClass("md-panel-is-showing"),n(t)},i=function(){t._$log.warn("mdPanel: MdPanel Animations failed. Hiding panel without animating."),o()};e.animateClose(t.panelEl).then(o,i)})},s.prototype.registerInterceptor=function(e,n){var o=null;if(t.isString(e)?t.isFunction(n)||(o="Interceptor callback must be a function, instead got "+typeof n):o="Interceptor type must be a string, instead got "+typeof e,o)throw new Error("MdPanel: "+o);var i=this._interceptors[e]=this._interceptors[e]||[];return i.indexOf(n)===-1&&i.push(n),this},s.prototype.removeInterceptor=function(e,t){var n=this._interceptors[e]?this._interceptors[e].indexOf(t):-1;return n>-1&&this._interceptors[e].splice(n,1),this},s.prototype.removeAllInterceptors=function(e){return e?this._interceptors[e]=[]:this._interceptors=Object.create(null),this},s.prototype._callInterceptors=function(e){var n=this,o=n._$q,i=n._interceptors&&n._interceptors[e]||[];return i.reduceRight(function(e,i){var r=i&&t.isFunction(i.then),a=r?i:null;return e.then(function(){if(!a)try{a=i(n)}catch(e){a=o.reject(e)}return a})},o.resolve(n))},s.prototype._simpleBind=function(e,t){return function(n){return e.apply(t,n)}},s.prototype._done=function(e,t){return function(){e(t)}},s.prototype.addToGroup=function(e){this._$mdPanel._groups[e]||this._$mdPanel.newPanelGroup(e);var t=this._$mdPanel._groups[e],n=t.panels.indexOf(this);n<0&&t.panels.push(this)},s.prototype.removeFromGroup=function(e){if(!this._$mdPanel._groups[e])throw new Error("mdPanel: The group "+e+" does not exist.");var t=this._$mdPanel._groups[e],n=t.panels.indexOf(this);n>-1&&t.panels.splice(n,1)},s.closeReasons={CLICK_OUTSIDE:"clickOutsideToClose",ESCAPE:"escapeToClose"},l.xPosition={CENTER:"center",ALIGN_START:"align-start",ALIGN_END:"align-end",OFFSET_START:"offset-start",OFFSET_END:"offset-end"},l.yPosition={CENTER:"center",ALIGN_TOPS:"align-tops",ALIGN_BOTTOMS:"align-bottoms",ABOVE:"above",BELOW:"below"},l.absPosition={TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},l.viewportMargin=8,l.prototype.absolute=function(){return this._absolute=!0,this},l.prototype._setPosition=function(e,n){if(e===l.absPosition.RIGHT||e===l.absPosition.LEFT)this._left=this._right="";else{if(e!==l.absPosition.BOTTOM&&e!==l.absPosition.TOP){var o=Object.keys(l.absPosition).join().toLowerCase();throw new Error("mdPanel: Position must be one of "+o+".")}this._top=this._bottom=""}return this["_"+e]=t.isString(n)?n:"0",this},l.prototype.top=function(e){return this._setPosition(l.absPosition.TOP,e)},l.prototype.bottom=function(e){return this._setPosition(l.absPosition.BOTTOM,e)},l.prototype.start=function(e){var t=this._isRTL?l.absPosition.RIGHT:l.absPosition.LEFT;return this._setPosition(t,e)},l.prototype.end=function(e){var t=this._isRTL?l.absPosition.LEFT:l.absPosition.RIGHT;return this._setPosition(t,e)},l.prototype.left=function(e){return this._setPosition(l.absPosition.LEFT,e)},l.prototype.right=function(e){return this._setPosition(l.absPosition.RIGHT,e)},l.prototype.centerHorizontally=function(){return this._left="50%",this._right="",this._translateX=["-50%"],this},l.prototype.centerVertically=function(){return this._top="50%",this._bottom="",this._translateY=["-50%"],this},l.prototype.center=function(){return this.centerHorizontally().centerVertically()},l.prototype.relativeTo=function(e){return this._absolute=!1,this._relativeToEl=m(e),this},l.prototype.addPanelPosition=function(e,t){if(!this._relativeToEl)throw new Error("mdPanel: addPanelPosition can only be used with relative positioning. Set relativeTo first.");return this._validateXPosition(e),this._validateYPosition(t),this._positions.push({x:e,y:t}),this},l.prototype._validateYPosition=function(e){if(null!=e){for(var t,n=Object.keys(l.yPosition),o=[],i=0;t=n[i];i++){var r=l.yPosition[t];if(o.push(r),r===e)return}throw new Error("mdPanel: Panel y position only accepts the following values:\n"+o.join(" | "))}},l.prototype._validateXPosition=function(e){if(null!=e){for(var t,n=Object.keys(l.xPosition),o=[],i=0;t=n[i];i++){var r=l.xPosition[t];if(o.push(r),r===e)return}throw new Error("mdPanel: Panel x Position only accepts the following values:\n"+o.join(" | "))}},l.prototype.withOffsetX=function(e){return this._translateX.push(e),this},l.prototype.withOffsetY=function(e){return this._translateY.push(e),this},l.prototype.getTop=function(){return this._top},l.prototype.getBottom=function(){return this._bottom},l.prototype.getLeft=function(){return this._left},l.prototype.getRight=function(){return this._right},l.prototype.getTransform=function(){var e=this._reduceTranslateValues("translateX",this._translateX),t=this._reduceTranslateValues("translateY",this._translateY);return(e+" "+t).trim()},l.prototype._setTransform=function(e){return e.css(this._$mdConstant.CSS.TRANSFORM,this.getTransform())},l.prototype._isOnscreen=function(e){var t=parseInt(this.getLeft()),n=parseInt(this.getTop());if(this._translateX.length||this._translateY.length){var o=this._$mdConstant.CSS.TRANSFORM,i=u(e,o);t+=i.x,n+=i.y}var r=t+e[0].offsetWidth,a=n+e[0].offsetHeight;return t>=0&&n>=0&&a<=this._$window.innerHeight&&r<=this._$window.innerWidth},l.prototype.getActualPosition=function(){return this._actualPosition},l.prototype._reduceTranslateValues=function(e,n){return n.map(function(n){var o=t.isFunction(n)?n(this):n;return e+"("+o+")"},this).join(" ")},l.prototype._setPanelPosition=function(e){if(e.removeClass("_md-panel-position-adjusted"),this._absolute)return void this._setTransform(e);if(this._actualPosition)return this._calculatePanelPosition(e,this._actualPosition),this._setTransform(e),void this._constrainToViewport(e);for(var t=0;t<this._positions.length;t++)if(this._actualPosition=this._positions[t],this._calculatePanelPosition(e,this._actualPosition),this._setTransform(e),this._isOnscreen(e))return;this._constrainToViewport(e)},l.prototype._constrainToViewport=function(e){var t=l.viewportMargin,n=this._top,o=this._left;if(this.getTop()){var i=parseInt(this.getTop()),r=e[0].offsetHeight+i,a=this._$window.innerHeight;i<t?this._top=t+"px":r>a&&(this._top=i-(r-a+t)+"px")}if(this.getLeft()){var d=parseInt(this.getLeft()),s=e[0].offsetWidth+d,c=this._$window.innerWidth;d<t?this._left=t+"px":s>c&&(this._left=d-(s-c+t)+"px")}e.toggleClass("_md-panel-position-adjusted",this._top!==n||this._left!==o)},l.prototype._reverseXPosition=function(e){if(e!==l.xPosition.CENTER){var t="start",n="end";return e.indexOf(t)>-1?e.replace(t,n):e.replace(n,t)}},l.prototype._bidi=function(e){return this._isRTL?this._reverseXPosition(e):e},l.prototype._calculatePanelPosition=function(e,t){var n=e[0].getBoundingClientRect(),o=n.width,i=n.height,r=this._relativeToEl[0].getBoundingClientRect(),a=r.left,d=r.right,s=r.width;switch(this._bidi(t.x)){case l.xPosition.OFFSET_START:this._left=a-o+"px";break;case l.xPosition.ALIGN_END:this._left=d-o+"px";break;case l.xPosition.CENTER:var c=a+.5*s-.5*o;this._left=c+"px";break;case l.xPosition.ALIGN_START:this._left=a+"px";break;case l.xPosition.OFFSET_END:this._left=d+"px"}var m=r.top,u=r.bottom,p=r.height;switch(t.y){case l.yPosition.ABOVE:this._top=m-i+"px";break;case l.yPosition.ALIGN_BOTTOMS:this._top=u-i+"px";break;case l.yPosition.CENTER:var h=m+.5*p-.5*i;this._top=h+"px";break;case l.yPosition.ALIGN_TOPS:this._top=m+"px";break;case l.yPosition.BELOW:this._top=u+"px"}},c.animation={SLIDE:"md-panel-animate-slide",SCALE:"md-panel-animate-scale",FADE:"md-panel-animate-fade"},c.prototype.openFrom=function(e){return e=e.target?e.target:e,this._openFrom=this._getPanelAnimationTarget(e),this._closeTo||(this._closeTo=this._openFrom),this},c.prototype.closeTo=function(e){return this._closeTo=this._getPanelAnimationTarget(e),this},c.prototype.duration=function(e){function n(e){if(t.isNumber(e))return e/1e3}return e&&(t.isNumber(e)?this._openDuration=this._closeDuration=n(e):t.isObject(e)&&(this._openDuration=n(e.open),this._closeDuration=n(e.close))),this._rawDuration=e,this},c.prototype._getPanelAnimationTarget=function(e){return t.isDefined(e.top)||t.isDefined(e.left)?{element:n,bounds:{top:e.top||0,left:e.left||0}}:this._getBoundingClientRect(m(e))},c.prototype.withAnimation=function(e){return this._animationClass=e,this},c.prototype.animateOpen=function(e){var n=this._$mdUtil.dom.animator;this._fixBounds(e);var o={},i=e[0].style.transform||"",r=n.toTransformCss(i),a=n.toTransformCss(i);switch(this._animationClass){case c.animation.SLIDE:e.css("opacity","1"),o={transitionInClass:"_md-panel-animate-enter"};var d=n.calculateSlideToOrigin(e,this._openFrom)||"";r=n.toTransformCss(d+" "+i);break;case c.animation.SCALE:o={transitionInClass:"_md-panel-animate-enter"};var s=n.calculateZoomToOrigin(e,this._openFrom)||"";r=n.toTransformCss(s+" "+i);break;case c.animation.FADE:o={transitionInClass:"_md-panel-animate-enter"};break;default:o=t.isString(this._animationClass)?{transitionInClass:this._animationClass}:{transitionInClass:this._animationClass.open,transitionOutClass:this._animationClass.close}}return o.duration=this._openDuration,n.translate3d(e,r,a,o)},c.prototype.animateClose=function(e){var n=this._$mdUtil.dom.animator,o={},i=e[0].style.transform||"",r=n.toTransformCss(i),a=n.toTransformCss(i);switch(this._animationClass){case c.animation.SLIDE:e.css("opacity","1"),o={transitionInClass:"_md-panel-animate-leave"};var d=n.calculateSlideToOrigin(e,this._closeTo)||"";a=n.toTransformCss(d+" "+i);break;case c.animation.SCALE:o={transitionInClass:"_md-panel-animate-scale-out _md-panel-animate-leave"};var s=n.calculateZoomToOrigin(e,this._closeTo)||"";a=n.toTransformCss(s+" "+i);break;case c.animation.FADE:o={transitionInClass:"_md-panel-animate-fade-out _md-panel-animate-leave"};break;default:o=t.isString(this._animationClass)?{transitionOutClass:this._animationClass}:{transitionInClass:this._animationClass.close,transitionOutClass:this._animationClass.open}}return o.duration=this._closeDuration,n.translate3d(e,r,a,o)},c.prototype._fixBounds=function(e){var t=e[0].offsetWidth,n=e[0].offsetHeight;this._openFrom&&null==this._openFrom.bounds.height&&(this._openFrom.bounds.height=n),this._openFrom&&null==this._openFrom.bounds.width&&(this._openFrom.bounds.width=t),this._closeTo&&null==this._closeTo.bounds.height&&(this._closeTo.bounds.height=n),this._closeTo&&null==this._closeTo.bounds.width&&(this._closeTo.bounds.width=t)},c.prototype._getBoundingClientRect=function(e){if(e instanceof t.element)return{element:e,bounds:e[0].getBoundingClientRect()}}}(),function(){function e(e,n){return{restrict:"E",transclude:!0,controller:o,controllerAs:"ctrl",bindToController:!0,scope:{mdSelectedNavItem:"=?",mdNoInkBar:"=?",navBarAriaLabel:"@?"},template:'<div class="md-nav-bar"><nav role="navigation"><ul class="_md-nav-bar-list" ng-transclude role="listbox"tabindex="0"ng-focus="ctrl.onFocus()"ng-keydown="ctrl.onKeydown($event)"aria-label="{{ctrl.navBarAriaLabel}}"></ul></nav><md-nav-ink-bar ng-hide="ctrl.mdNoInkBar"></md-nav-ink-bar></div>',link:function(o,i,r,a){n(i),a.navBarAriaLabel||e.expectAsync(i,"aria-label",t.noop)}}}function o(e,t,n,o){this._$timeout=n,this._$scope=t,this._$mdConstant=o,this.mdSelectedNavItem,this.navBarAriaLabel,this._navBarEl=e[0],this._inkbar;var i=this,r=this._$scope.$watch(function(){return i._navBarEl.querySelectorAll("._md-nav-button").length},function(e){e>0&&(i._initTabs(),r())})}function i(e,n){return{restrict:"E",require:["mdNavItem","^mdNavBar"],controller:r,bindToController:!0,controllerAs:"ctrl",replace:!0,transclude:!0,template:function(e,t){var n,o,i,r=t.mdNavClick,a=t.mdNavHref,d=t.mdNavSref,s=t.srefOpts;if((r?1:0)+(a?1:0)+(d?1:0)>1)throw Error("Must not specify more than one of the md-nav-click, md-nav-href, or md-nav-sref attributes per nav-item directive.");return r?n='ng-click="ctrl.mdNavClick()"':a?n='ng-href="{{ctrl.mdNavHref}}"':d&&(n='ui-sref="{{ctrl.mdNavSref}}"'),o=s?'ui-sref-opts="{{ctrl.srefOpts}}" ':"",n&&(i='<md-button class="_md-nav-button md-accent" ng-class="ctrl.getNgClassMap()" ng-blur="ctrl.setFocused(false)" tabindex="-1" '+o+n+'><span ng-transclude class="_md-nav-button-text"></span></md-button>'),'<li class="md-nav-item" role="option" aria-selected="{{ctrl.isSelected()}}">'+(i||"")+"</li>"},scope:{mdNavClick:"&?",mdNavHref:"@?",mdNavSref:"@?",srefOpts:"=?",name:"@"},link:function(o,i,r,a){n(function(){var n=a[0],r=a[1],d=t.element(i[0].querySelector("._md-nav-button"));n.name||(n.name=t.element(i[0].querySelector("._md-nav-button-text")).text().trim()),d.on("click",function(){r.mdSelectedNavItem=n.name,o.$apply()}),e.expectWithText(i,"aria-label")})}}}function r(e){this._$element=e,this.mdNavClick,this.mdNavHref,this.mdNavSref,this.srefOpts,this.name,this._selected=!1,this._focused=!1}o.$inject=["$element","$scope","$timeout","$mdConstant"],i.$inject=["$mdAria","$$rAF"],r.$inject=["$element"],e.$inject=["$mdAria","$mdTheming"],t.module("material.components.navBar",["material.core"]).controller("MdNavBarController",o).directive("mdNavBar",e).controller("MdNavItemController",r).directive("mdNavItem",i),o.prototype._initTabs=function(){this._inkbar=t.element(this._navBarEl.querySelector("md-nav-ink-bar"));var e=this;this._$timeout(function(){e._updateTabs(e.mdSelectedNavItem,n)}),this._$scope.$watch("ctrl.mdSelectedNavItem",function(t,n){e._$timeout(function(){e._updateTabs(t,n)})})},o.prototype._updateTabs=function(e,t){var n=this,o=this._getTabs();if(o){var i=-1,r=-1,a=this._getTabByName(e),d=this._getTabByName(t);d&&(d.setSelected(!1),i=o.indexOf(d)),a&&(a.setSelected(!0),r=o.indexOf(a)),this._$timeout(function(){n._updateInkBarStyles(a,r,i)})}},o.prototype._updateInkBarStyles=function(e,t,n){if(this._inkbar.toggleClass("_md-left",t<n).toggleClass("_md-right",t>n),this._inkbar.css({display:t<0?"none":""}),e){var o=e.getButtonEl(),i=o.offsetLeft;this._inkbar.css({left:i+"px",width:o.offsetWidth+"px"})}},o.prototype._getTabs=function(){var e=Array.prototype.slice.call(this._navBarEl.querySelectorAll(".md-nav-item")).map(function(e){return t.element(e).controller("mdNavItem")});return e.indexOf(n)?e:null},o.prototype._getTabByName=function(e){return this._findTab(function(t){return t.getName()==e})},o.prototype._getSelectedTab=function(){return this._findTab(function(e){return e.isSelected()})},o.prototype.getFocusedTab=function(){return this._findTab(function(e){return e.hasFocus()})},o.prototype._findTab=function(e){for(var t=this._getTabs(),n=0;n<t.length;n++)if(e(t[n]))return t[n];return null},o.prototype.onFocus=function(){var e=this._getSelectedTab();e&&e.setFocused(!0)},o.prototype._moveFocus=function(e,t){e.setFocused(!1),t.setFocused(!0)},o.prototype.onKeydown=function(e){var t=this._$mdConstant.KEY_CODE,n=this._getTabs(),o=this.getFocusedTab();if(o){var i=n.indexOf(o);switch(e.keyCode){case t.UP_ARROW:case t.LEFT_ARROW:i>0&&this._moveFocus(o,n[i-1]);break;case t.DOWN_ARROW:case t.RIGHT_ARROW:i<n.length-1&&this._moveFocus(o,n[i+1]);break;case t.SPACE:case t.ENTER:this._$timeout(function(){o.getButtonEl().click()})}}},r.prototype.getNgClassMap=function(){return{"md-active":this._selected,"md-primary":this._selected,"md-unselected":!this._selected,"md-focused":this._focused}},r.prototype.getName=function(){return this.name},r.prototype.getButtonEl=function(){return this._$element[0].querySelector("._md-nav-button")},r.prototype.setSelected=function(e){this._selected=e},r.prototype.isSelected=function(){return this._selected},r.prototype.setFocused=function(e){this._focused=e,e&&this.getButtonEl().focus()},r.prototype.hasFocus=function(){return this._focused}}(),function(){t.module("material.components.progressCircular",["material.core"])}(),function(){function e(e,n,o){function i(e,t,n){return e.attr("aria-valuemin",0),e.attr("aria-valuemax",100),e.attr("role","progressbar"),r}function r(o,i,r){function u(){r.$observe("value",function(e){var t=a(e);i.attr("aria-valuenow",t),h()!=c&&f($,t)}),r.$observe("mdBufferValue",function(e){f(E,a(e))}),r.$observe("disabled",function(e){b=e===!0||e===!1?!!e:t.isDefined(e),i.toggleClass(m,b),C.toggleClass(g,!b)}),r.$observe("mdMode",function(e){switch(g&&C.removeClass(g),e){case c:case l:case d:case s:C.addClass(g="md-mode-"+e);break;default:C.addClass(g="md-mode-"+s)}})}function p(){if(t.isUndefined(r.mdMode)){var e=t.isDefined(r.value),n=e?d:s;i.attr("md-mode",n),r.mdMode=n}}function h(){var e=(r.mdMode||"").trim();if(e)switch(e){case d:case s:case l:case c:break;default:e=s}return e}function f(e,o){if(!b&&h()){var i=n.supplant("translateX({0}%) scale({1},1)",[(o-100)/2,o/100]),r=v({transform:i});t.element(e).css(r)}}e(i);var g,b=r.hasOwnProperty("disabled"),v=n.dom.animator.toCss,E=t.element(i[0].querySelector(".md-bar1")),$=t.element(i[0].querySelector(".md-bar2")),C=t.element(i[0].querySelector(".md-container"));i.attr("md-mode",h()).toggleClass(m,b),p(),u()}function a(e){return Math.max(0,Math.min(e||0,100))}var d="determinate",s="indeterminate",l="buffer",c="query",m="_md-progress-linear-disabled";return{restrict:"E",template:'<div class="md-container"><div class="md-dashed"></div><div class="md-bar md-bar1"></div><div class="md-bar md-bar2"></div></div>',compile:i}}e.$inject=["$mdTheming","$mdUtil","$log"],t.module("material.components.progressLinear",["material.core"]).directive("mdProgressLinear",e)}(),function(){function e(e,n,o,i){function r(r,a,d,s){function l(){a.hasClass("md-focused")||a.addClass("md-focused")}function c(o){var i=o.which||o.keyCode;if(i==n.KEY_CODE.ENTER||o.currentTarget==o.target)switch(i){case n.KEY_CODE.LEFT_ARROW:case n.KEY_CODE.UP_ARROW:o.preventDefault(),m.selectPrevious(),l();break;case n.KEY_CODE.RIGHT_ARROW:case n.KEY_CODE.DOWN_ARROW:o.preventDefault(),m.selectNext(),l();break;case n.KEY_CODE.ENTER:var r=t.element(e.getClosest(a[0],"form"));r.length>0&&r.triggerHandler("submit")}}a.addClass("_md"),o(a);var m=s[0],u=s[1]||e.fakeNgModel();m.init(u),r.mouseActive=!1,a.attr({role:"radiogroup",tabIndex:a.attr("tabindex")||"0"}).on("keydown",c).on("mousedown",function(e){r.mouseActive=!0,i(function(){r.mouseActive=!1},100)}).on("focus",function(){r.mouseActive===!1&&m.$element.addClass("md-focused")}).on("blur",function(){m.$element.removeClass("md-focused")})}function a(e){this._radioButtonRenderFns=[],this.$element=e}function d(){return{init:function(e){this._ngModelCtrl=e,this._ngModelCtrl.$render=t.bind(this,this.render)},add:function(e){this._radioButtonRenderFns.push(e)},remove:function(e){var t=this._radioButtonRenderFns.indexOf(e);t!==-1&&this._radioButtonRenderFns.splice(t,1)},render:function(){this._radioButtonRenderFns.forEach(function(e){e()})},setViewValue:function(e,t){this._ngModelCtrl.$setViewValue(e,t),this.render()},getViewValue:function(){return this._ngModelCtrl.$viewValue},selectNext:function(){return s(this.$element,1)},selectPrevious:function(){return s(this.$element,-1)},setActiveDescendant:function(e){this.$element.attr("aria-activedescendant",e)},isDisabled:function(){return this.$element[0].hasAttribute("disabled")}}}function s(n,o){var i=e.iterator(n[0].querySelectorAll("md-radio-button"),!0);if(i.count()){var r=function(e){return!t.element(e).attr("disabled")},a=n[0].querySelector("md-radio-button.md-checked"),d=i[o<0?"previous":"next"](a,r)||i.first();t.element(d).triggerHandler("click")}}return a.prototype=d(),{restrict:"E",controller:["$element",a],require:["mdRadioGroup","?ngModel"],link:{pre:r}}}function n(e,t,n){function o(o,r,a,d){function s(){if(!d)throw"RadioButton: No RadioGroupController could be found.";d.add(c),a.$observe("value",c),r.on("click",l).on("$destroy",function(){d.remove(c)})}function l(e){r[0].hasAttribute("disabled")||d.isDisabled()||o.$apply(function(){d.setViewValue(a.value,e&&e.type)})}function c(){var e=d.getViewValue()==a.value;e!==u&&("md-radio-group"!==r[0].parentNode.nodeName.toLowerCase()&&r.parent().toggleClass(i,e),e&&d.setActiveDescendant(r.attr("id")),u=e,r.attr("aria-checked",e).toggleClass(i,e))}function m(n,o){n.attr({id:a.id||"radio_"+t.nextUid(),role:"radio","aria-checked":"false"}),e.expectWithText(n,"aria-label")}var u;n(r),m(r,o),a.ngValue?t.nextTick(s,!1):s()}var i="md-checked";return{restrict:"E",require:"^mdRadioGroup",transclude:!0,template:'<div class="md-container" md-ink-ripple md-ink-ripple-checkbox><div class="md-off"></div><div class="md-on"></div></div><div ng-transclude class="md-label"></div>',link:o}}e.$inject=["$mdUtil","$mdConstant","$mdTheming","$timeout"],n.$inject=["$mdAria","$mdUtil","$mdTheming"],t.module("material.components.radioButton",["material.core"]).directive("mdRadioGroup",e).directive("mdRadioButton",n)}(),function(){function o(e,o,i,r,a,d,s,l){function c(l,c){var m=t.element("<md-select-value><span></span></md-select-value>");if(m.append('<span class="md-select-icon" aria-hidden="true"></span>'),m.addClass("md-select-value"),m[0].hasAttribute("id")||m.attr("id","select_value_label_"+o.nextUid()),l.find("md-content").length||l.append(t.element("<md-content>").append(l.contents())),c.mdOnOpen&&(l.find("md-content").prepend(t.element('<div> <md-progress-circular md-mode="indeterminate" ng-if="$$loadingAsyncDone === false" md-diameter="25px"></md-progress-circular></div>')),l.find("md-option").attr("ng-show","$$loadingAsyncDone")),c.name){var u=t.element('<select class="md-visually-hidden">');u.attr({name:c.name,"aria-hidden":"true",tabindex:"-1"});var p=l.find("md-option");t.forEach(p,function(e){var n=t.element("<option>"+e.innerHTML+"</option>");e.hasAttribute("ng-value")?n.attr("ng-value",e.getAttribute("ng-value")):e.hasAttribute("value")&&n.attr("value",e.getAttribute("value")),u.append(n)}),u.append('<option ng-value="'+c.ngModel+'" selected></option>'),l.parent().append(u)}var h=o.parseAttributeBoolean(c.multiple),f=h?"multiple":"",g='<div class="md-select-menu-container" aria-hidden="true"><md-select-menu {0}>{1}</md-select-menu></div>';return g=o.supplant(g,[f,l.html()]),l.empty().append(m),l.append(g),c.tabindex||c.$set("tabindex",0),function(l,c,m,u){function p(){var e=c.attr("aria-label")||c.attr("placeholder");!e&&T&&T.label&&(e=T.label.text()),y=e,a.expect(c,"aria-label",e)}function f(){D&&(H=H||D.find("md-select-menu").controller("mdSelectMenu"),A.setLabelText(H.selectedLabels()))}function g(){if(y){var e=H.selectedLabels({mode:"aria"});c.attr("aria-label",e.length?y+": "+e:y)}}function b(){T&&T.setHasValue(H.selectedLabels().length>0||(c[0].validity||{}).badInput)}function v(){if(D=t.element(c[0].querySelector(".md-select-menu-container")),I=l,m.mdContainerClass){var e=D[0].getAttribute("class")+" "+m.mdContainerClass;D[0].setAttribute("class",e)}H=D.find("md-select-menu").controller("mdSelectMenu"),H.init(w,m.ngModel),c.on("$destroy",function(){D.remove()})}function E(e){if(i.isNavigationKey(e))e.preventDefault(),$(e);else if(i.isInputKey(e)||i.isNumPadKey(e)){e.preventDefault();var n=H.optNodeForKeyboardSearch(e);if(!n||n.hasAttribute("disabled"))return;var o=t.element(n).controller("mdOption");H.isMultiple||H.deselect(Object.keys(H.selected)[0]),H.select(o.hashKey,o.value),H.refreshViewValue()}}function $(){I._mdSelectIsOpen=!0,c.attr("aria-expanded","true"),e.show({scope:I,preserveScope:!0,skipCompile:!0,element:D,target:c[0],selectCtrl:A,preserveElement:!0,hasBackdrop:!0,loadingAsync:!!m.mdOnOpen&&(l.$eval(m.mdOnOpen)||!0)})["finally"](function(){I._mdSelectIsOpen=!1,c.focus(),c.attr("aria-expanded","false"),w.$setTouched()})}var C,y,M=!0,T=u[0],A=u[1],w=u[2],k=u[3],_=c.find("md-select-value"),x=t.isDefined(m.readonly),S=o.parseAttributeBoolean(m.mdNoAsterisk);if(S&&c.addClass("md-no-asterisk"),T){var N=T.isErrorGetter||function(){return w.$invalid&&(w.$touched||k&&k.$submitted)};if(T.input&&c.find("md-select-header").find("input")[0]!==T.input[0])throw new Error("<md-input-container> can only have *one* child <input>, <textarea> or <select> element!");T.input=c,T.label||a.expect(c,"aria-label",c.attr("placeholder")),l.$watch(N,T.setInvalid)}var D,I,H;v(),r(c),k&&t.isDefined(m.multiple)&&o.nextTick(function(){var e=w.$modelValue||w.$viewValue;e&&k.$setPristine()});var O=w.$render;w.$render=function(){O(),f(),g(),b()},m.$observe("placeholder",w.$render),T&&T.label&&m.$observe("required",function(e){T.label.toggleClass("md-required",e&&!S)}),A.setLabelText=function(e){A.setIsPlaceholder(!e);var t=!1;if(m.mdSelectedText&&m.mdSelectedHtml)throw Error("md-select cannot have both `md-selected-text` and `md-selected-html`");if(m.mdSelectedText||m.mdSelectedHtml)e=d(m.mdSelectedText||m.mdSelectedHtml)(l),t=!0;else if(!e){var n=m.placeholder||(T&&T.label?T.label.text():"");e=n||"",t=!0}var o=_.children().eq(0);m.mdSelectedHtml?o.html(s.getTrustedHtml(e)):t?o.text(e):o.html(e)},A.setIsPlaceholder=function(e){e?(_.addClass("md-select-placeholder"),T&&T.label&&T.label.addClass("md-placeholder")):(_.removeClass("md-select-placeholder"),T&&T.label&&T.label.removeClass("md-placeholder"))},x||(c.on("focus",function(e){T&&T.setFocused(!0)}),c.on("blur",function(e){M&&(M=!1,I._mdSelectIsOpen&&e.stopImmediatePropagation()),
I._mdSelectIsOpen||(T&&T.setFocused(!1),b())})),A.triggerClose=function(){d(m.mdOnClose)(l)},l.$$postDigest(function(){p(),f(),g()}),l.$watch(function(){return H.selectedLabels()},f);var P;m.$observe("ngMultiple",function(e){P&&P();var t=d(e);P=l.$watch(function(){return t(l)},function(e,t){e===n&&t===n||(e?c.attr("multiple","multiple"):c.removeAttr("multiple"),c.attr("aria-multiselectable",e?"true":"false"),D&&(H.setMultiple(e),O=w.$render,w.$render=function(){O(),f(),g(),b()},w.$render()))})}),m.$observe("disabled",function(e){t.isString(e)&&(e=!0),C!==n&&C===e||(C=e,e?c.attr({"aria-disabled":"true"}).removeAttr("tabindex").off("click",$).off("keydown",E):c.attr({tabindex:m.tabindex,"aria-disabled":"false"}).on("click",$).on("keydown",E))}),m.hasOwnProperty("disabled")||m.hasOwnProperty("ngDisabled")||(c.attr({"aria-disabled":"false"}),c.on("click",$),c.on("keydown",E));var R={role:"listbox","aria-expanded":"false","aria-multiselectable":h&&!m.ngMultiple?"true":"false"};c[0].hasAttribute("id")||(R.id="select_"+o.nextUid());var L="select_container_"+o.nextUid();D.attr("id",L),R["aria-owns"]=L,c.attr(R),l.$on("$destroy",function(){e.destroy()["finally"](function(){T&&(T.setFocused(!1),T.setHasValue(!1),T.input=null),w.$setTouched()})})}}var m=i.KEY_CODE;[m.SPACE,m.ENTER,m.UP_ARROW,m.DOWN_ARROW];return{restrict:"E",require:["^?mdInputContainer","mdSelect","ngModel","?^form"],compile:c,controller:function(){}}}function i(e,o,i,r){function a(e,n,i,a){function d(e){13!=e.keyCode&&32!=e.keyCode||s(e)}function s(n){var i=o.getClosest(n.target,"md-option"),r=i&&t.element(i).data("$mdOptionController");if(i&&r){if(i.hasAttribute("disabled"))return n.stopImmediatePropagation(),!1;var a=l.hashGetter(r.value),d=t.isDefined(l.selected[a]);e.$apply(function(){l.isMultiple?d?l.deselect(a):l.select(a,r.value):d||(l.deselect(Object.keys(l.selected)[0]),l.select(a,r.value)),l.refreshViewValue()})}}var l=a[0];n.addClass("_md"),r(n),n.on("click",s),n.on("keypress",d)}function d(r,a,d){function s(){var e=m.ngModel.$modelValue||m.ngModel.$viewValue||[];if(t.isArray(e)){var n=Object.keys(m.selected),o=e.map(m.hashGetter),i=n.filter(function(e){return o.indexOf(e)===-1});i.forEach(m.deselect),o.forEach(function(t,n){m.select(t,e[n])})}}function l(){var e=m.ngModel.$viewValue||m.ngModel.$modelValue;Object.keys(m.selected).forEach(m.deselect),m.select(m.hashGetter(e),e)}var m=this;m.isMultiple=t.isDefined(a.multiple),m.selected={},m.options={},r.$watchCollection(function(){return m.options},function(){m.ngModel.$render()});var u,p;m.setMultiple=function(e){function n(e,n){return t.isArray(e||n||[])}var o=m.ngModel;p=p||o.$isEmpty,m.isMultiple=e,u&&u(),m.isMultiple?(o.$validators["md-multiple"]=n,o.$render=s,r.$watchCollection(m.modelBinding,function(e){n(e)&&s(e),m.ngModel.$setPristine()}),o.$isEmpty=function(e){return!e||0===e.length}):(delete o.$validators["md-multiple"],o.$render=l)};var h,f,g,b="",v=300;m.optNodeForKeyboardSearch=function(e){h&&clearTimeout(h),h=setTimeout(function(){h=n,b="",g=n,f=n},v);var o=e.keyCode-(i.isNumPadKey(e)?48:0);b+=String.fromCharCode(o);var r=new RegExp("^"+b,"i");f||(f=d.find("md-option"),g=new Array(f.length),t.forEach(f,function(e,t){g[t]=e.textContent.trim()}));for(var a=0;a<g.length;++a)if(r.test(g[a]))return f[a]},m.init=function(n,i){m.ngModel=n,m.modelBinding=i,m.ngModel.$isEmpty=function(e){return!m.options[m.hashGetter(e)]};var a=o.getModelOption(n,"trackBy");if(a){var d={},s=e(a);m.hashGetter=function(e,t){return d.$value=e,s(t||r,d)}}else m.hashGetter=function(e){return t.isObject(e)?"object_"+(e.$$mdSelectId||(e.$$mdSelectId=++c)):e};m.setMultiple(m.isMultiple)},m.selectedLabels=function(e){e=e||{};var t=e.mode||"html",n=o.nodesToArray(d[0].querySelectorAll("md-option[selected]"));if(n.length){var i;return"html"==t?i=function(e){if(e.hasAttribute("md-option-empty"))return"";var t=e.innerHTML,n=e.querySelector(".md-ripple-container");n&&(t=t.replace(n.outerHTML,""));var o=e.querySelector(".md-container");return o&&(t=t.replace(o.outerHTML,"")),t}:"aria"==t&&(i=function(e){return e.hasAttribute("aria-label")?e.getAttribute("aria-label"):e.textContent}),o.uniq(n.map(i)).join(", ")}return""},m.select=function(e,t){var n=m.options[e];n&&n.setSelected(!0),m.selected[e]=t},m.deselect=function(e){var t=m.options[e];t&&t.setSelected(!1),delete m.selected[e]},m.addOption=function(e,n){if(t.isDefined(m.options[e]))throw new Error('Duplicate md-option values are not allowed in a select. Duplicate value "'+n.value+'" found.');m.options[e]=n,t.isDefined(m.selected[e])&&(m.select(e,n.value),t.isDefined(m.ngModel.$modelValue)&&m.hashGetter(m.ngModel.$modelValue)===e&&m.ngModel.$validate(),m.refreshViewValue())},m.removeOption=function(e){delete m.options[e]},m.refreshViewValue=function(){var e,n=[];for(var i in m.selected)(e=m.options[i])?n.push(e.value):n.push(m.selected[i]);var r=o.getModelOption(m.ngModel,"trackBy"),a=m.isMultiple?n:n[0],d=m.ngModel.$modelValue;(r?t.equals(d,a):d+""===a)||(m.ngModel.$setViewValue(a),m.ngModel.$render())}}return d.$inject=["$scope","$attrs","$element"],{restrict:"E",require:["mdSelectMenu"],scope:!1,controller:d,link:{pre:a}}}function r(e,n){function o(e,n){return e.append(t.element('<div class="md-text">').append(e.contents())),e.attr("tabindex",n.tabindex||"0"),i(n)||e.attr("md-option-empty",""),r}function i(e){var t=e.value,n=e.ngValue;return t||n}function r(o,i,r,a){function d(e,t,n){if(!c.hashGetter)return void(n||o.$$postDigest(function(){d(e,t,!0)}));var i=c.hashGetter(t,o),r=c.hashGetter(e,o);l.hashKey=r,l.value=e,c.removeOption(i,l),c.addOption(r,l)}function s(){var e={role:"option","aria-selected":"false"};i[0].hasAttribute("id")||(e.id="select_option_"+n.nextUid()),i.attr(e)}var l=a[0],c=a[1];c.isMultiple&&(i.addClass("md-checkbox-enabled"),i.prepend(m.clone())),t.isDefined(r.ngValue)?o.$watch(r.ngValue,d):t.isDefined(r.value)?d(r.value):o.$watch(function(){return i.text().trim()},d),r.$observe("disabled",function(e){e?i.attr("tabindex","-1"):i.attr("tabindex","0")}),o.$$postDigest(function(){r.$observe("selected",function(e){t.isDefined(e)&&("string"==typeof e&&(e=!0),e?(c.isMultiple||c.deselect(Object.keys(c.selected)[0]),c.select(l.hashKey,l.value)):c.deselect(l.hashKey),c.refreshViewValue())})}),e.attach(o,i),s(),o.$on("$destroy",function(){c.removeOption(l.hashKey,l)})}function a(e){this.selected=!1,this.setSelected=function(t){t&&!this.selected?e.attr({selected:"selected","aria-selected":"true"}):!t&&this.selected&&(e.removeAttr("selected"),e.attr("aria-selected","false")),this.selected=t}}return a.$inject=["$element"],{restrict:"E",require:["mdOption","^^mdSelectMenu"],controller:a,compile:o}}function a(){function e(e,n){function o(){return e.parent().find("md-select-header").length}function i(){var o=e.find("label");o.length||(o=t.element("<label>"),e.prepend(o)),o.addClass("md-container-ignore"),n.label&&o.text(n.label)}o()||i()}return{restrict:"E",compile:e}}function d(){return{restrict:"E"}}function s(o){function i(o,i,c,m,u,p,h,f,g){function b(e,t,n){function o(){return h(t,{addClass:"md-leave"}).start()}function i(){t.removeClass("md-active"),t.attr("aria-hidden","true"),t[0].style.display="none",E(n),!n.$destroy&&n.restoreFocus&&n.target.focus()}return n=n||{},n.cleanupInteraction(),n.cleanupResizing(),n.hideBackdrop(),n.$destroy===!0?i():o().then(i)}function v(e,r,a){function d(e,t,n){return n.parent.append(t),u(function(e,n){try{h(t,{removeClass:"md-leave",duration:0}).start().then(s).then(e)}catch(o){n(o)}})}function s(){return u(function(t){if(a.isRemoved)return u.reject(!1);var n=$(e,r,a);n.container.element.css(y.toCss(n.container.styles)),n.dropDown.element.css(y.toCss(n.dropDown.styles)),p(function(){r.addClass("md-active"),n.dropDown.element.css(y.toCss({transform:""})),b(a.focusedNode),t()})})}function l(e,t,n){return n.disableParentScroll&&!c.getClosest(n.target,"MD-DIALOG")?n.restoreScroll=c.disableScrollAround(n.element,n.parent):n.disableParentScroll=!1,n.hasBackdrop&&(n.backdrop=c.createBackdrop(e,"md-select-backdrop md-click-catcher"),f.enter(n.backdrop,g[0].body,null,{duration:0})),function(){n.backdrop&&n.backdrop.remove(),n.disableParentScroll&&n.restoreScroll(),delete n.restoreScroll}}function b(e){e&&!e.hasAttribute("disabled")&&e.focus()}function v(e,n){var o=r.find("md-select-menu");if(!n.target)throw new Error(c.supplant(C,[n.target]));t.extend(n,{isRemoved:!1,target:t.element(n.target),parent:t.element(n.parent),selectEl:o,contentEl:r.find("md-content"),optionNodes:o[0].getElementsByTagName("md-option")})}function E(){var n=function(e,t,n){return function(){if(!n.isRemoved){var o=$(e,t,n),i=o.container,r=o.dropDown;i.element.css(y.toCss(i.styles)),r.element.css(y.toCss(r.styles))}}}(e,r,a),o=t.element(m);return o.on("resize",n),o.on("orientationchange",n),function(){o.off("resize",n),o.off("orientationchange",n)}}function T(){a.loadingAsync&&!a.isRemoved&&(e.$$loadingAsyncDone=!1,u.when(a.loadingAsync).then(function(){e.$$loadingAsyncDone=!0,delete a.loadingAsync}).then(function(){p(s)}))}function A(){function e(e){e.preventDefault(),e.stopPropagation(),a.restoreFocus=!1,c.nextTick(o.hide,!0)}function t(e){switch(e.preventDefault(),e.stopPropagation(),e.keyCode){case M.UP_ARROW:return l();case M.DOWN_ARROW:return s();case M.SPACE:case M.ENTER:var t=c.getClosest(e.target,"md-option");t&&(u.triggerHandler({type:"click",target:t}),e.preventDefault()),m(e);break;case M.TAB:case M.ESCAPE:e.stopPropagation(),e.preventDefault(),a.restoreFocus=!0,c.nextTick(o.hide,!0);break;default:if(i.isInputKey(e)||i.isNumPadKey(e)){var n=u.controller("mdSelectMenu").optNodeForKeyboardSearch(e);a.focusedNode=n||a.focusedNode,n&&n.focus()}}}function d(e){var t,o=c.nodesToArray(a.optionNodes),i=o.indexOf(a.focusedNode);do i===-1?i=0:"next"===e&&i<o.length-1?i++:"prev"===e&&i>0&&i--,t=o[i],t.hasAttribute("disabled")&&(t=n);while(!t&&i<o.length-1&&i>0);t&&t.focus(),a.focusedNode=t}function s(){d("next")}function l(){d("prev")}function m(e){function t(){var t=!1;if(e&&e.currentTarget.children.length>0){var n=e.currentTarget.children[0],o=n.scrollHeight>n.clientHeight;if(o&&n.children.length>0){var i=e.pageX-e.currentTarget.getBoundingClientRect().left;i>n.querySelector("md-option").offsetWidth&&(t=!0)}}return t}if(!(e&&"click"==e.type&&e.currentTarget!=u[0]||t())){var n=c.getClosest(e.target,"md-option");n&&n.hasAttribute&&!n.hasAttribute("disabled")&&(e.preventDefault(),e.stopPropagation(),p.isMultiple||(a.restoreFocus=!0,c.nextTick(function(){o.hide(p.ngModel.$viewValue)},!0)))}}if(!a.isRemoved){var u=a.selectEl,p=u.controller("mdSelectMenu")||{};return r.addClass("md-clickable"),a.backdrop&&a.backdrop.on("click",e),u.on("keydown",t),u.on("click",m),function(){a.backdrop&&a.backdrop.off("click",e),u.off("keydown",t),u.off("click",m),r.removeClass("md-clickable"),a.isRemoved=!0}}}return T(),v(e,a),a.hideBackdrop=l(e,r,a),d(e,r,a).then(function(e){return r.attr("aria-hidden","false"),a.alreadyOpen=!0,a.cleanupInteraction=A(),a.cleanupResizing=E(),e},a.hideBackdrop)}function E(e){var t=e.selectCtrl;if(t){var n=e.selectEl.controller("mdSelectMenu");t.setLabelText(n?n.selectedLabels():""),t.triggerClose()}}function $(n,o,i){var u,p=o[0],h=i.target[0].children[0],f=g[0].body,b=i.selectEl[0],v=i.contentEl[0],E=f.getBoundingClientRect(),$=h.getBoundingClientRect(),C=!1,y={left:E.left+l,top:l,bottom:E.height-l,right:E.width-l-(c.floatingScrollbars()?16:0)},M={top:$.top-y.top,left:$.left-y.left,right:y.right-($.left+$.width),bottom:y.bottom-($.top+$.height)},T=E.width-2*l,A=b.querySelector("md-option[selected]"),w=b.getElementsByTagName("md-option"),k=b.getElementsByTagName("md-optgroup"),_=s(o,v),x=r(i.loadingAsync);u=x?v.firstElementChild||v:A?A:k.length?k[0]:w.length?w[0]:v.firstElementChild||v,v.offsetWidth>T?v.style["max-width"]=T+"px":v.style.maxWidth=null,C&&(v.style["min-width"]=$.width+"px"),_&&b.classList.add("md-overflow");var S=u;"MD-OPTGROUP"===(S.tagName||"").toUpperCase()&&(S=w[0]||v.firstElementChild||v,u=S),i.focusedNode=S,p.style.display="block";var N=b.getBoundingClientRect(),D=d(u);if(u){var I=m.getComputedStyle(u);D.paddingLeft=parseInt(I.paddingLeft,10)||0,D.paddingRight=parseInt(I.paddingRight,10)||0}if(_){var H=v.offsetHeight/2;v.scrollTop=D.top+D.height/2-H,M.top<H?v.scrollTop=Math.min(D.top,v.scrollTop+H-M.top):M.bottom<H&&(v.scrollTop=Math.max(D.top+D.height-N.height,v.scrollTop-H+M.bottom))}var O,P,R,L,F;C?(O=$.left,P=$.top+$.height,R="50% 0",P+N.height>y.bottom&&(P=$.top-N.height,R="50% 100%")):(O=$.left+D.left-D.paddingLeft+2,P=Math.floor($.top+$.height/2-D.height/2-D.top+v.scrollTop)+2,R=D.left+$.width/2+"px "+(D.top+D.height/2-v.scrollTop)+"px 0px",L=Math.min($.width+D.paddingLeft+D.paddingRight,T),F=e.getComputedStyle(h)["font-size"]);var B=p.getBoundingClientRect(),j=Math.round(100*Math.min($.width/N.width,1))/100,U=Math.round(100*Math.min($.height/N.height,1))/100;return{container:{element:t.element(p),styles:{left:Math.floor(a(y.left,O,y.right-B.width)),top:Math.floor(a(y.top,P,y.bottom-B.height)),"min-width":L,"font-size":F}},dropDown:{element:t.element(b),styles:{transformOrigin:R,transform:i.alreadyOpen?"":c.supplant("scale({0},{1})",[j,U])}}}}var C="$mdSelect.show() expected a target element in options.target but got '{0}'!",y=c.dom.animator,M=i.KEY_CODE;return{parent:"body",themable:!0,onShow:v,onRemove:b,hasBackdrop:!0,disableParentScroll:!0}}function r(e){return e&&t.isFunction(e.then)}function a(e,t,n){return Math.max(e,Math.min(t,n))}function d(e){return e?{left:e.offsetLeft,top:e.offsetTop,width:e.offsetWidth,height:e.offsetHeight}:{left:0,top:0,width:0,height:0}}function s(e,t){var n=!1;try{var o=e[0].style.display;e[0].style.display="block",n=t.scrollHeight>t.offsetHeight,e[0].style.display=o}finally{}return n}return i.$inject=["$mdSelect","$mdConstant","$mdUtil","$window","$q","$$rAF","$animateCss","$animate","$document"],o("$mdSelect").setDefaults({methods:["target"],options:i})}o.$inject=["$mdSelect","$mdUtil","$mdConstant","$mdTheming","$mdAria","$parse","$sce","$injector"],i.$inject=["$parse","$mdUtil","$mdConstant","$mdTheming"],r.$inject=["$mdButtonInkRipple","$mdUtil"],s.$inject=["$$interimElementProvider"];var l=8,c=0,m=t.element('<div class="md-container"><div class="md-icon"></div></div>');t.module("material.components.select",["material.core","material.components.backdrop"]).directive("mdSelect",o).directive("mdSelectMenu",i).directive("mdOption",r).directive("mdOptgroup",a).directive("mdSelectHeader",d).provider("$mdSelect",s)}(),function(){function e(e,t){return["$mdUtil","$window",function(n,o){return{restrict:"A",multiElement:!0,link:function(i,r,a){var d=i.$on("$md-resize-enable",function(){d();var s=r[0],l=s.nodeType===o.Node.ELEMENT_NODE?o.getComputedStyle(s):{};i.$watch(a[e],function(e){if(!!e===t){n.nextTick(function(){i.$broadcast("$md-resize")});var o={cachedTransitionStyles:l};n.dom.animator.waitTransitionEnd(r,o).then(function(){i.$broadcast("$md-resize")})}})})}}}]}t.module("material.components.showHide",["material.core"]).directive("ngShow",e("ngShow",!0)).directive("ngHide",e("ngHide",!1))}(),function(){function e(e,o,i,r){function a(e,n){var r=function(){return!1},a=function(){return i.when(o.supplant(l,[n||""]))};return t.extend({isLockedOpen:r,isOpen:r,toggle:a,open:a,close:a,onClose:t.noop,then:function(e){return s(n).then(e||t.noop)}},e)}function d(t,i){var a=e.get(t);return a||i?a:(r.error(o.supplant(l,[t||""])),n)}function s(t){return e.when(t)["catch"](r.error)}var l="SideNav '{0}' is not available! Did you use md-component-id='{0}'?",c={find:d,waitFor:s};return function(e,n){if(t.isUndefined(e))return c;var o=n===!0,i=c.find(e,o);return!i&&o?c.waitFor(e):!i&&t.isUndefined(n)?a(c,e):i}}function o(){return{restrict:"A",require:"^mdSidenav",link:function(e,t,n,o){}}}function i(e,o,i,r,a,d,s,l,c,m,u,p,h){function f(s,f,g,b){function v(e,t){s.isLockedOpen=e,e===t?f.toggleClass("md-locked-open",!!e):d[e?"addClass":"removeClass"](f,"md-locked-open"),w&&w.toggleClass("md-locked-open",!!e)}function E(e){var t=o.findFocusTarget(f)||o.findFocusTarget(f,"[md-sidenav-focus]")||f,n=f.parent();n[e?"on":"off"]("keydown",M),w&&w[e?"on":"off"]("click",T);var i=$(n,e);return e&&(S=u[0].activeElement,k=a.getLastInteractionType()),C(e),N=m.all([e&&w?d.enter(w,n):w?d.leave(w):m.when(!0),d[e?"removeClass":"addClass"](f,"md-closed")]).then(function(){s.isOpen&&(h(function(){I.triggerHandler("resize")}),t&&t.focus()),i&&i()})}function $(e,t){var n=f[0],o=e[0].scrollTop;if(t&&o){_={top:n.style.top,bottom:n.style.bottom,height:n.style.height};var i={top:o+"px",bottom:"auto",height:e[0].clientHeight+"px"};f.css(i),w.css(i)}if(!t&&_)return function(){n.style.top=_.top,n.style.bottom=_.bottom,n.style.height=_.height,w[0].style.top=null,w[0].style.bottom=null,w[0].style.height=null,_=null}}function C(e){e&&!A?(A=x.css("overflow"),x.css("overflow","hidden")):t.isDefined(A)&&(x.css("overflow",A),A=n)}function y(e){return s.isOpen==e?m.when(!0):(s.isOpen&&b.onCloseCb&&b.onCloseCb(),m(function(t){s.isOpen=e,o.nextTick(function(){N.then(function(e){!s.isOpen&&S&&"keyboard"===k&&(S.focus(),S=null),t(e)})})}))}function M(e){var t=e.keyCode===i.KEY_CODE.ESCAPE;return t?T(e):m.when(!0)}function T(e){return e.preventDefault(),b.close()}var A,w,k,_,x=null,S=null,N=m.when(!0),D=l(g.mdIsLockedOpen),I=t.element(p),H=function(){return D(s.$parent,{$media:function(t){return c.warn("$media is deprecated for is-locked-open. Use $mdMedia instead."),e(t)},$mdMedia:e})};g.mdDisableScrollTarget&&(x=u[0].querySelector(g.mdDisableScrollTarget),x?x=t.element(x):c.warn(o.supplant('mdSidenav: couldn\'t find element matching selector "{selector}". Falling back to parent.',{selector:g.mdDisableScrollTarget}))),x||(x=f.parent()),g.hasOwnProperty("mdDisableBackdrop")||(w=o.createBackdrop(s,"md-sidenav-backdrop md-opaque ng-enter")),f.addClass("_md"),r(f),w&&r.inherit(w,f),f.on("$destroy",function(){w&&w.remove(),b.destroy()}),s.$on("$destroy",function(){w&&w.remove()}),s.$watch(H,v),s.$watch("isOpen",E),b.$toggleOpen=y}return{restrict:"E",scope:{isOpen:"=?mdIsOpen"},controller:"$mdSidenavController",compile:function(e){return e.addClass("md-closed").attr("tabIndex","-1"),f}}}function r(e,t,n,o,i){var r=this;r.isOpen=function(){return!!e.isOpen},r.isLockedOpen=function(){return!!e.isLockedOpen},r.onClose=function(e){return r.onCloseCb=e,r},r.open=function(){return r.$toggleOpen(!0)},r.close=function(){return r.$toggleOpen(!1)},r.toggle=function(){return r.$toggleOpen(!e.isOpen)},r.$toggleOpen=function(t){return o.when(e.isOpen=t)};var a=t.mdComponentId,d=a&&a.indexOf(i.startSymbol())>-1,s=d?i(a)(e.$parent):a;r.destroy=n.register(r,s),d&&t.$observe("mdComponentId",function(e){e&&e!==r.$$mdHandle&&(r.destroy(),r.destroy=n.register(r,e))})}e.$inject=["$mdComponentRegistry","$mdUtil","$q","$log"],i.$inject=["$mdMedia","$mdUtil","$mdConstant","$mdTheming","$mdInteraction","$animate","$compile","$parse","$log","$q","$document","$window","$$rAF"],r.$inject=["$scope","$attrs","$mdComponentRegistry","$q","$interpolate"],t.module("material.components.sidenav",["material.core","material.components.backdrop"]).factory("$mdSidenav",e).directive("mdSidenav",i).directive("mdSidenavFocus",o).controller("$mdSidenavController",r)}(),function(){function e(){return{controller:function(){},compile:function(e){var o=e.find("md-slider");if(o){var i=o.attr("md-vertical");return i!==n&&e.attr("md-vertical",""),o.attr("flex")||o.attr("flex",""),function(e,n,o,i){function r(e){n.children().attr("disabled",e),n.find("input").attr("disabled",e)}n.addClass("_md");var a=t.noop;o.disabled?r(!0):o.ngDisabled&&(a=e.$watch(o.ngDisabled,function(e){r(e)})),e.$on("$destroy",function(){a()});var d;i.fitInputWidthToTextLength=function(e){var t=n[0].querySelector("md-input-container");if(t){var o=getComputedStyle(t),i=parseInt(o.minWidth),r=2*parseInt(o.padding);d=d||parseInt(o.maxWidth);var a=Math.max(d,i+r+i/2*e);t.style.maxWidth=a+"px"}}}}}}}function o(e,n,o,i,r,a,d,s,l,c){function m(e,n){var i=t.element(e[0].getElementsByClassName("md-slider-wrapper")),r=n.tabindex||0;return i.attr("tabindex",r),(n.disabled||n.ngDisabled)&&i.attr("tabindex",-1),i.attr("role","slider"),o.expect(e,"aria-label"),u}function u(o,m,u,p){function h(){y(),x()}function f(e){se=parseFloat(e),m.attr("aria-valuemin",e),h()}function g(e){le=parseFloat(e),m.attr("aria-valuemax",e),h()}function b(e){ce=parseFloat(e)}function v(e){me=S(parseInt(e),0,6)}function E(){m.attr("aria-disabled",!!Y())}function $(){if(ie&&!Y()&&!t.isUndefined(ce)){if(ce<=0){var e="Slider step value must be greater than zero when in discrete mode";throw l.error(e),new Error(e)}var o=Math.floor((le-se)/ce);ue||(ue=t.element("<canvas>").css("position","absolute"),J.append(ue),pe=ue[0].getContext("2d"));var i=M();!i||i.height||i.width||(y(),i=he),ue[0].width=i.width,ue[0].height=i.height;for(var r,a=0;a<=o;a++){var d=n.getComputedStyle(J[0]);pe.fillStyle=d.color||"black",r=Math.floor((oe?i.height:i.width)*(a/o)),pe.fillRect(oe?0:r-1,oe?r-1:0,oe?i.width:2,oe?2:i.height)}}}function C(){if(ue&&pe){var e=M();pe.clearRect(0,0,e.width,e.height)}}function y(){he=Q[0].getBoundingClientRect()}function M(){return te(),he}function T(e){if(!Y()){var t;(oe?e.keyCode===r.KEY_CODE.DOWN_ARROW:e.keyCode===r.KEY_CODE.LEFT_ARROW)?t=-ce:(oe?e.keyCode===r.KEY_CODE.UP_ARROW:e.keyCode===r.KEY_CODE.RIGHT_ARROW)&&(t=ce),t=re?-t:t,t&&((e.metaKey||e.ctrlKey||e.altKey)&&(t*=4),e.preventDefault(),e.stopPropagation(),o.$evalAsync(function(){_(W.$viewValue+t)}))}}function A(){$(),o.mouseActive=!0,ee.removeClass("md-focused"),c(function(){o.mouseActive=!1},100)}function w(){o.mouseActive===!1&&ee.addClass("md-focused")}function k(){ee.removeClass("md-focused"),m.removeClass("md-active"),C()}function _(e){W.$setViewValue(S(N(e)))}function x(){isNaN(W.$viewValue)&&(W.$viewValue=W.$modelValue),W.$viewValue=S(W.$viewValue);var e=z(W.$viewValue);o.modelValue=W.$viewValue,m.attr("aria-valuenow",W.$viewValue),D(e),G.text(W.$viewValue)}function S(e,n,o){if(t.isNumber(e))return n=t.isNumber(n)?n:se,o=t.isNumber(o)?o:le,Math.max(n,Math.min(o,e))}function N(e){if(t.isNumber(e)){var n=Math.round((e-se)/ce)*ce+se;return n=Math.round(n*Math.pow(10,me))/Math.pow(10,me),V&&V.fitInputWidthToTextLength&&i.debounce(function(){V.fitInputWidthToTextLength(n.toString().length)},100)(),n}}function D(e){e=j(e);var t=100*e+"%",n=re?100*(1-e)+"%":t;oe?X.css("bottom",t):i.bidiProperty(X,"left","right",t),Z.css(oe?"height":"width",n),m.toggleClass(re?"md-max":"md-min",0===e),m.toggleClass(re?"md-min":"md-max",1===e)}function I(e){if(!Y()){m.addClass("md-active"),m[0].focus(),y();var t=q(U(oe?e.pointer.y:e.pointer.x)),n=S(N(t));o.$apply(function(){_(n),D(z(n))})}}function H(e){if(!Y()){m.removeClass("md-dragging");var t=q(U(oe?e.pointer.y:e.pointer.x)),n=S(N(t));o.$apply(function(){_(n),x()})}}function O(e){Y()||(fe=!0,e.stopPropagation(),m.addClass("md-dragging"),L(e))}function P(e){fe&&(e.stopPropagation(),L(e))}function R(e){fe&&(e.stopPropagation(),fe=!1)}function L(e){ie?B(oe?e.pointer.y:e.pointer.x):F(oe?e.pointer.y:e.pointer.x)}function F(e){o.$evalAsync(function(){_(q(U(e)))})}function B(e){var t=q(U(e)),n=S(N(t));D(U(e)),G.text(n)}function j(e){return Math.max(0,Math.min(e||0,1))}function U(e){var t=oe?he.top:he.left,n=oe?he.height:he.width,o=(e-t)/n;return oe||"rtl"!==i.bidi()||(o=1-o),Math.max(0,Math.min(1,oe?1-o:o))}function q(e){var t=re?1-e:e;return se+t*(le-se)}function z(e){var t=(e-se)/(le-se);return re?1-t:t}a(m);var W=p[0]||{$setViewValue:function(e){this.$viewValue=e,this.$viewChangeListeners.forEach(function(e){e()})},$parsers:[],$formatters:[],$viewChangeListeners:[]},V=p[1],Y=(t.element(i.getClosest(m,"_md-slider-container",!0)),u.ngDisabled?t.bind(null,s(u.ngDisabled),o.$parent):function(){return m[0].hasAttribute("disabled")}),K=t.element(m[0].querySelector(".md-thumb")),G=t.element(m[0].querySelector(".md-thumb-text")),X=K.parent(),Q=t.element(m[0].querySelector(".md-track-container")),Z=t.element(m[0].querySelector(".md-track-fill")),J=t.element(m[0].querySelector(".md-track-ticks")),ee=t.element(m[0].getElementsByClassName("md-slider-wrapper")),te=(t.element(m[0].getElementsByClassName("md-slider-content")),i.throttle(y,5e3)),ne=3,oe=t.isDefined(u.mdVertical),ie=t.isDefined(u.mdDiscrete),re=t.isDefined(u.mdInvert);t.isDefined(u.min)?u.$observe("min",f):f(0),t.isDefined(u.max)?u.$observe("max",g):g(100),t.isDefined(u.step)?u.$observe("step",b):b(1),t.isDefined(u.round)?u.$observe("round",v):v(ne);var ae=t.noop;u.ngDisabled&&(ae=o.$parent.$watch(u.ngDisabled,E)),d.register(ee,"drag",{horizontal:!oe}),o.mouseActive=!1,ee.on("keydown",T).on("mousedown",A).on("focus",w).on("blur",k).on("$md.pressdown",I).on("$md.pressup",H).on("$md.dragstart",O).on("$md.drag",P).on("$md.dragend",R),setTimeout(h,0);var de=e.throttle(h);t.element(n).on("resize",de),o.$on("$destroy",function(){t.element(n).off("resize",de)}),W.$render=x,W.$viewChangeListeners.push(x),W.$formatters.push(S),W.$formatters.push(N);var se,le,ce,me,ue,pe,he={};y();var fe=!1}return{scope:{},require:["?ngModel","?^mdSliderContainer"],template:'<div class="md-slider-wrapper"><div class="md-slider-content"><div class="md-track-container"><div class="md-track"></div><div class="md-track md-track-fill"></div><div class="md-track-ticks"></div></div><div class="md-thumb-container"><div class="md-thumb"></div><div class="md-focus-thumb"></div><div class="md-focus-ring"></div><div class="md-sign"><span class="md-thumb-text"></span></div><div class="md-disabled-thumb"></div></div></div></div>',compile:m}}o.$inject=["$$rAF","$window","$mdAria","$mdUtil","$mdConstant","$mdTheming","$mdGesture","$parse","$log","$timeout"],t.module("material.components.slider",["material.core"]).directive("mdSlider",o).directive("mdSliderContainer",e)}(),function(){function e(e,t,o,i){function r(i){function r(e,t){t.addClass("md-sticky-clone");var n={element:e,clone:t};return f.items.push(n),o.nextTick(function(){p.prepend(n.clone)}),h(),function(){f.items.forEach(function(t,n){t.element[0]===e[0]&&(f.items.splice(n,1),t.clone.remove())}),h()}}function d(){f.items.forEach(s),f.items=f.items.sort(function(e,t){return e.top<t.top?-1:1});for(var e,t=p.prop("scrollTop"),n=f.items.length-1;n>=0;n--)if(t>f.items[n].top){e=f.items[n];break}c(e)}function s(e){var t=e.element[0];for(e.top=0,e.left=0,e.right=0;t&&t!==p[0];)e.top+=t.offsetTop,e.left+=t.offsetLeft,t.offsetParent&&(e.right+=t.offsetParent.offsetWidth-t.offsetWidth-t.offsetLeft),t=t.offsetParent;e.height=e.element.prop("offsetHeight");var i=o.floatingScrollbars()?"0":n;o.bidi(e.clone,"margin-left",e.left,i),o.bidi(e.clone,"margin-right",i,e.right)}function l(){var e=p.prop("scrollTop"),t=e>(l.prevScrollTop||0);if(l.prevScrollTop=e,0===e)return void c(null);if(t){if(f.next&&f.next.top<=e)return void c(f.next);if(f.current&&f.next&&f.next.top-e<=f.next.height)return void u(f.current,e+(f.next.top-f.next.height-e))}if(!t){if(f.current&&f.prev&&e<f.current.top)return void c(f.prev);if(f.next&&f.current&&e>=f.next.top-f.current.height)return void u(f.current,e+(f.next.top-e-f.current.height))}f.current&&u(f.current,e)}function c(e){if(f.current!==e){f.current&&(u(f.current,null),m(f.current,null)),e&&m(e,"active"),f.current=e;var t=f.items.indexOf(e);f.next=f.items[t+1],f.prev=f.items[t-1],m(f.next,"next"),m(f.prev,"prev")}}function m(e,t){e&&e.state!==t&&(e.state&&(e.clone.attr("sticky-prev-state",e.state),e.element.attr("sticky-prev-state",e.state)),e.clone.attr("sticky-state",t),e.element.attr("sticky-state",t),e.state=t)}function u(t,i){t&&(null===i||i===n?t.translateY&&(t.translateY=null,t.clone.css(e.CSS.TRANSFORM,"")):(t.translateY=i,o.bidi(t.clone,e.CSS.TRANSFORM,"translate3d("+t.left+"px,"+i+"px,0)","translateY("+i+"px)")))}var p=i.$element,h=t.throttle(d);a(p),p.on("$scrollstart",h),p.on("$scroll",l);var f;return f={prev:null,current:null,next:null,items:[],add:r,refreshElements:d}}function a(e){function n(){+o.now()-r>a?(i=!1,e.triggerHandler("$scrollend")):(e.triggerHandler("$scroll"),t.throttle(n))}var i,r,a=200;e.on("scroll touchmove",function(){i||(i=!0,t.throttle(n),e.triggerHandler("$scrollstart")),e.triggerHandler("$scroll"),r=+o.now()})}var d=o.checkStickySupport();return function(e,t,n){var o=t.controller("mdContent");if(o)if(d)t.css({position:d,top:0,"z-index":2});else{var a=o.$element.data("$$sticky");a||(a=r(o),o.$element.data("$$sticky",a));var s=n||i(t.clone())(e),l=a.add(t,s);e.$on("$destroy",l)}}}e.$inject=["$mdConstant","$$rAF","$mdUtil","$compile"],t.module("material.components.sticky",["material.core","material.components.content"]).factory("$mdSticky",e)}(),function(){function e(e,n,o,i,r){return{restrict:"E",replace:!0,transclude:!0,template:'<div class="md-subheader _md">  <div class="md-subheader-inner">    <div class="md-subheader-content"></div>  </div></div>',link:function(a,d,s,l,c){function m(e){return t.element(e[0].querySelector(".md-subheader-content"))}o(d),d.addClass("_md"),i.prefixer().removeAttribute(d,"ng-repeat");var u=d[0].outerHTML;s.$set("role","heading"),r.expect(d,"aria-level","2"),c(a,function(e){m(d).append(e)}),d.hasClass("md-no-sticky")||c(a,function(t){var o=n('<div class="md-subheader-wrapper" aria-hidden="true">'+u+"</div>")(a);i.nextTick(function(){m(o).append(t)}),e(a,d,o)})}}}e.$inject=["$mdSticky","$compile","$mdTheming","$mdUtil","$mdAria"],t.module("material.components.subheader",["material.core","material.components.sticky"]).directive("mdSubheader",e)}(),function(){function e(e){function t(e){function t(t,i,r){i.css("touch-action","none");var a=e(r[n]);i.on(o,function(e){t.$applyAsync(function(){a(t,{$event:e})})})}return{restrict:"A",link:t}}t.$inject=["$parse"];var n="md"+e,o="$md."+e.toLowerCase();return t}t.module("material.components.swipe",["material.core"]).directive("mdSwipeLeft",e("SwipeLeft")).directive("mdSwipeRight",e("SwipeRight")).directive("mdSwipeUp",e("SwipeUp")).directive("mdSwipeDown",e("SwipeDown"))}(),function(){function e(e,n,o,i,r,a,d){function s(e,s){var c=l.compile(e,s).post;return e.addClass("md-dragging"),function(e,s,l,m){function u(t){b&&b(e)||(t.stopPropagation(),s.addClass("md-dragging"),C={width:v.prop("offsetWidth")})}function p(e){if(C){e.stopPropagation(),e.srcEvent&&e.srcEvent.preventDefault();var t=e.pointer.distanceX/C.width,n=g.$viewValue?1+t:t;n=Math.max(0,Math.min(1,n)),v.css(o.CSS.TRANSFORM,"translate3d("+100*n+"%,0,0)"),C.translate=n}}function h(t){if(C){t.stopPropagation(),s.removeClass("md-dragging"),v.css(o.CSS.TRANSFORM,"");var n=g.$viewValue?C.translate<.5:C.translate>.5;n&&f(!g.$viewValue),C=null,e.skipToggle=!0,d(function(){e.skipToggle=!1},1)}}function f(t){e.$apply(function(){g.$setViewValue(t),g.$render()})}var g=(m[0],m[1]||n.fakeNgModel()),b=(m[2],null);null!=l.disabled?b=function(){return!0}:l.ngDisabled&&(b=i(l.ngDisabled));var v=t.element(s[0].querySelector(".md-thumb-container")),E=t.element(s[0].querySelector(".md-container")),$=t.element(s[0].querySelector(".md-label"));r(function(){s.removeClass("md-dragging")}),c(e,s,l,m),b&&e.$watch(b,function(e){s.attr("tabindex",e?-1:0)}),l.$observe("mdInvert",function(e){var t=n.parseAttributeBoolean(e);t?s.prepend($):s.prepend(E),s.toggleClass("md-inverted",t)}),a.register(E,"drag"),E.on("$md.dragstart",u).on("$md.drag",p).on("$md.dragend",h);var C}}var l=e[0];return{restrict:"E",priority:o.BEFORE_NG_ARIA,transclude:!0,template:'<div class="md-container"><div class="md-bar"></div><div class="md-thumb-container"><div class="md-thumb" md-ink-ripple md-ink-ripple-checkbox></div></div></div><div ng-transclude class="md-label"></div>',require:["^?mdInputContainer","?ngModel","?^form"],compile:s}}e.$inject=["mdCheckboxDirective","$mdUtil","$mdConstant","$parse","$$rAF","$mdGesture","$timeout"],t.module("material.components.switch",["material.core","material.components.checkbox"]).directive("mdSwitch",e)}(),function(){function e(e){return{restrict:"E",link:function(t,n){n.addClass("_md"),t.$on("$destroy",function(){
e.destroy()})}}}function n(e){function n(e){i=e}function o(e,n,o,r){function a(t,a,d){i=d.textContent||d.content;var c=!r("gt-sm");return a=o.extractElementByName(a,"md-toast",!0),d.element=a,d.onSwipe=function(e,t){var i=e.type.replace("$md.",""),r=i.replace("swipe","");"down"===r&&d.position.indexOf("top")!=-1&&!c||"up"===r&&(d.position.indexOf("bottom")!=-1||c)||("left"!==r&&"right"!==r||!c)&&(a.addClass("md-"+i),o.nextTick(n.cancel))},d.openClass=s(d.position),a.addClass(d.toastClass),d.parent.addClass(d.openClass),o.hasComputedStyle(d.parent,"position","static")&&d.parent.css("position","relative"),a.on(l,d.onSwipe),a.addClass(c?"md-bottom":d.position.split(" ").map(function(e){return"md-"+e}).join(" ")),d.parent&&d.parent.addClass("md-toast-animating"),e.enter(a,d.parent).then(function(){d.parent&&d.parent.removeClass("md-toast-animating")})}function d(t,n,i){return n.off(l,i.onSwipe),i.parent&&i.parent.addClass("md-toast-animating"),i.openClass&&i.parent.removeClass(i.openClass),(1==i.$destroy?n.remove():e.leave(n)).then(function(){i.parent&&i.parent.removeClass("md-toast-animating"),o.hasComputedStyle(i.parent,"position","static")&&i.parent.css("position","")})}function s(e){return r("gt-xs")?"md-toast-open-"+(e.indexOf("top")>-1?"top":"bottom"):"md-toast-open-bottom"}var l="$md.swipeleft $md.swiperight $md.swipeup $md.swipedown";return{onShow:a,onRemove:d,toastClass:"",position:"bottom left",themable:!0,hideDelay:3e3,autoWrap:!0,transformTemplate:function(e,n){var o=n.autoWrap&&e&&!/md-toast-content/g.test(e);if(o){var i=document.createElement("md-template");i.innerHTML=e;for(var r=0;r<i.children.length;r++)if("MD-TOAST"===i.children[r].nodeName){var a=t.element('<div class="md-toast-content">');a.append(t.element(i.children[r].childNodes)),i.children[r].appendChild(a[0])}return i.innerHTML}return e||""}}}o.$inject=["$animate","$mdToast","$mdUtil","$mdMedia"];var i,r="ok",a=e("$mdToast").setDefaults({methods:["position","hideDelay","capsule","parent","position","toastClass"],options:o}).addPreset("simple",{argOption:"textContent",methods:["textContent","content","action","highlightAction","highlightClass","theme","parent"],options:["$mdToast","$mdTheming",function(e,t){return{template:'<md-toast md-theme="{{ toast.theme }}" ng-class="{\'md-capsule\': toast.capsule}">  <div class="md-toast-content">    <span class="md-toast-text" role="alert" aria-relevant="all" aria-atomic="true">      {{ toast.content }}    </span>    <md-button class="md-action" ng-if="toast.action" ng-click="toast.resolve()"         ng-class="highlightClasses">      {{ toast.action }}    </md-button>  </div></md-toast>',controller:["$scope",function(t){var n=this;n.highlightAction&&(t.highlightClasses=["md-highlight",n.highlightClass]),t.$watch(function(){return i},function(){n.content=i}),this.resolve=function(){e.hide(r)}}],theme:t.defaultTheme(),controllerAs:"toast",bindToController:!0}}]}).addMethod("updateTextContent",n).addMethod("updateContent",n);return a}e.$inject=["$mdToast"],n.$inject=["$$interimElementProvider"],t.module("material.components.toast",["material.core","material.components.button"]).directive("mdToast",e).provider("$mdToast",n)}(),function(){t.module("material.components.tabs",["material.core","material.components.icon"])}(),function(){function e(e,n,o,i,r){var a=t.bind(null,o.supplant,"translate3d(0,{0}px,0)");return{template:"",restrict:"E",link:function(d,s,l){function c(){function i(e){var t=s.parent().find("md-content");!f&&t.length&&c(null,t),e=d.$eval(e),e===!1?g():g=u()}function c(e,t){t&&s.parent()[0]===t.parent()[0]&&(f&&f.off("scroll",$),f=t,g=u())}function m(e){var t=e?e.target.scrollTop:v;C(),b=Math.min(h/E,Math.max(0,b+t-v)),s.css(n.CSS.TRANSFORM,a([-b*E])),f.css(n.CSS.TRANSFORM,a([(h-b)*E])),v=t,o.nextTick(function(){var e=s.hasClass("md-whiteframe-z1");e&&!b?r.removeClass(s,"md-whiteframe-z1"):!e&&b&&r.addClass(s,"md-whiteframe-z1")})}function u(){return f?(f.on("scroll",$),f.attr("scroll-shrink","true"),o.nextTick(p,!1),function(){f.off("scroll",$),f.attr("scroll-shrink","false"),p()}):t.noop}function p(){h=s.prop("offsetHeight");var e=-h*E+"px";f.css({"margin-top":e,"margin-bottom":e}),m()}var h,f,g=t.noop,b=0,v=0,E=l.mdShrinkSpeedFactor||.5,$=e.throttle(m),C=o.debounce(p,5e3);d.$on("$mdContentLoaded",c),l.$observe("mdScrollShrink",i),l.ngShow&&d.$watch(l.ngShow,p),l.ngHide&&d.$watch(l.ngHide,p),d.$on("$destroy",g)}s.addClass("_md"),i(s),o.nextTick(function(){s.addClass("_md-toolbar-transitions")},!1),t.isDefined(l.mdScrollShrink)&&c()}}}e.$inject=["$$rAF","$mdConstant","$mdUtil","$mdTheming","$animate"],t.module("material.components.toolbar",["material.core","material.components.content"]).directive("mdToolbar",e)}(),function(){function n(e,n,o,i,r,a,d,s){function l(l,g,b){function v(){l.mdZIndex=l.mdZIndex||u,l.mdDelay=l.mdDelay||p,f[l.mdDirection]||(l.mdDirection=h)}function E(e){if(e||!I.attr("aria-label")){var t=e||r(g.text().trim())(l.$parent);I.attr("aria-label",t)}}function $(){v(),S&&S.panelEl&&S.panelEl.removeClass(k),k="md-origin-"+l.mdDirection,_=f[l.mdDirection],x=d.newPanelPosition().relativeTo(I).addPanelPosition(_.x,_.y),S&&S.panelEl&&(S.panelEl.addClass(k),S.updatePosition(x))}function C(){function t(e){return e.some(function(e){return"disabled"===e.attributeName&&I[0].disabled}),!1}function o(){M(!1)}function r(){P=document.activeElement===I[0]}function d(e){"focus"===e.type&&P?P=!1:l.mdVisible||(I.on(m,u),M(!0),"touchstart"===e.type&&I.one("touchend",function(){a.nextTick(function(){i.one("touchend",u)},!1)}))}function u(){N=l.hasOwnProperty("mdAutohide")?l.mdAutohide:b.hasOwnProperty("mdAutohide"),(N||O||i[0].activeElement!==I[0])&&(D&&(e.cancel(D),M.queued=!1,D=null),I.off(m,u),I.triggerHandler("blur"),M(!1)),O=!1}function p(){O=!0}function h(){s.deregister("scroll",o,!0),s.deregister("blur",r),s.deregister("resize",H),I.off(c,d).off(m,u).off("mousedown",p),u(),f&&f.disconnect()}if(I[0]&&"MutationObserver"in n){var f=new MutationObserver(function(e){t(e)&&a.nextTick(function(){M(!1)})});f.observe(I[0],{attributes:!0})}P=!1,s.register("scroll",o,!0),s.register("blur",r),s.register("resize",H),l.$on("$destroy",h),I.on("mousedown",p),I.on(c,d)}function y(){function e(){l.$destroy()}if(g[0]&&"MutationObserver"in n){var t=new MutationObserver(function(e){e.forEach(function(e){"md-visible"!==e.attributeName||l.visibleWatcher||(l.visibleWatcher=l.$watch("mdVisible",T))})});t.observe(g[0],{attributes:!0}),b.hasOwnProperty("mdVisible")&&(l.visibleWatcher=l.$watch("mdVisible",T))}else l.visibleWatcher=l.$watch("mdVisible",T);l.$watch("mdDirection",$),g.one("$destroy",e),I.one("$destroy",e),l.$on("$destroy",function(){M(!1),S&&S.destroy(),t&&t.disconnect(),g.remove()}),g.text().indexOf(r.startSymbol())>-1&&l.$watch(function(){return g.text().trim()},E)}function M(t){M.queued&&M.value===!!t||!M.queued&&l.mdVisible===!!t||(M.value=!!t,M.queued||(t?(M.queued=!0,D=e(function(){l.mdVisible=M.value,M.queued=!1,D=null,l.visibleWatcher||T(l.mdVisible)},l.mdDelay)):a.nextTick(function(){l.mdVisible=!1,l.visibleWatcher||T(!1)})))}function T(e){e?A():w()}function A(){if(!g[0].textContent.trim())throw new Error("Text for the tooltip has not been provided. Please include text within the mdTooltip element.");if(!S){var e="tooltip-"+a.nextUid(),n=t.element(document.body),o=d.newPanelAnimation().openFrom(I).closeTo(I).withAnimation({open:"md-show",close:"md-hide"}),i={id:e,attachTo:n,contentElement:g,propagateContainerEvents:!0,panelClass:"md-tooltip "+k,animation:o,position:x,zIndex:l.mdZIndex,focusOnOpen:!1};S=d.create(i)}S.open().then(function(){S.panelEl.attr("role","tooltip")})}function w(){S&&S.close()}var k,_,x,S,N,D,I=a.getParentWithPointerEvents(g),H=o.throttle($),O=!1,P=null;v(),E(),g.detach(),$(),C(),y()}var c="focus touchstart mouseenter",m="blur touchcancel mouseleave",u=100,p=0,h="bottom",f={top:{x:d.xPosition.CENTER,y:d.yPosition.ABOVE},right:{x:d.xPosition.OFFSET_END,y:d.yPosition.CENTER},bottom:{x:d.xPosition.CENTER,y:d.yPosition.BELOW},left:{x:d.xPosition.OFFSET_START,y:d.yPosition.CENTER}};return{restrict:"E",priority:210,scope:{mdZIndex:"=?mdZIndex",mdDelay:"=?mdDelay",mdVisible:"=?mdVisible",mdAutohide:"=?mdAutohide",mdDirection:"@?mdDirection"},link:l}}function o(){function n(e){r[e.type]&&r[e.type].forEach(function(t){t.call(this,e)},this)}function o(t,o,i){var d=r[t]=r[t]||[];d.length||(i?e.addEventListener(t,n,!0):a.on(t,n)),d.indexOf(o)===-1&&d.push(o)}function i(t,o,i){var d=r[t],s=d?d.indexOf(o):-1;s>-1&&(d.splice(s,1),0===d.length&&(i?e.removeEventListener(t,n,!0):a.off(t,n)))}var r={},a=t.element(e);return{register:o,deregister:i}}n.$inject=["$timeout","$window","$$rAF","$document","$interpolate","$mdUtil","$mdPanel","$$mdTooltipRegistry"],t.module("material.components.tooltip",["material.core","material.components.panel"]).directive("mdTooltip",n).service("$$mdTooltipRegistry",o)}(),function(){function e(){return{restrict:"AE",controller:n,controllerAs:"$ctrl",bindToController:!0}}function n(e){e.addClass("md-truncate")}n.$inject=["$element"],t.module("material.components.truncate",["material.core"]).directive("mdTruncate",e)}(),function(){function e(){return{controller:o,template:n,compile:function(e,t){e.addClass("md-virtual-repeat-container").addClass(t.hasOwnProperty("mdOrientHorizontal")?"md-orient-horizontal":"md-orient-vertical")}}}function n(e){return'<div class="md-virtual-repeat-scroller"><div class="md-virtual-repeat-sizer"></div><div class="md-virtual-repeat-offsetter">'+e[0].innerHTML+"</div></div>"}function o(e,n,o,i,r,a,d,s,l){this.$rootScope=r,this.$scope=d,this.$element=s,this.$attrs=l,this.size=0,this.scrollSize=0,this.scrollOffset=0,this.horizontal=this.$attrs.hasOwnProperty("mdOrientHorizontal"),this.repeater=null,this.autoShrink=this.$attrs.hasOwnProperty("mdAutoShrink"),this.autoShrinkMin=parseInt(this.$attrs.mdAutoShrinkMin,10)||0,this.originalSize=null,this.offsetSize=parseInt(this.$attrs.mdOffsetSize,10)||0,this.oldElementSize=null,this.maxElementPixels=o.ELEMENT_MAX_PIXELS,this.$attrs.mdTopIndex?(this.bindTopIndex=i(this.$attrs.mdTopIndex),this.topIndex=this.bindTopIndex(this.$scope),t.isDefined(this.topIndex)||(this.topIndex=0,this.bindTopIndex.assign(this.$scope,0)),this.$scope.$watch(this.bindTopIndex,t.bind(this,function(e){e!==this.topIndex&&this.scrollToIndex(e)}))):this.topIndex=0,this.scroller=s[0].querySelector(".md-virtual-repeat-scroller"),this.sizer=this.scroller.querySelector(".md-virtual-repeat-sizer"),this.offsetter=this.scroller.querySelector(".md-virtual-repeat-offsetter");var c=t.bind(this,this.updateSize);e(t.bind(this,function(){c();var e=n.debounce(c,10,null,!1),o=t.element(a);this.size||e(),o.on("resize",e),d.$on("$destroy",function(){o.off("resize",e)}),d.$emit("$md-resize-enable"),d.$on("$md-resize",c)}))}function i(e){return{controller:r,priority:1e3,require:["mdVirtualRepeat","^^mdVirtualRepeatContainer"],restrict:"A",terminal:!0,transclude:"element",compile:function(t,n){var o=n.mdVirtualRepeat,i=o.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)\s*$/),r=i[1],a=e(i[2]),d=n.mdExtraName&&e(n.mdExtraName);return function(e,t,n,o,i){o[0].link_(o[1],i,r,a,d)}}}}function r(e,n,o,i,r,a,d,s){this.$scope=e,this.$element=n,this.$attrs=o,this.$browser=i,this.$document=r,this.$rootScope=a,this.$$rAF=d,this.onDemand=s.parseAttributeBoolean(o.mdOnDemand),this.browserCheckUrlChange=i.$$checkUrlChange,this.newStartIndex=0,this.newEndIndex=0,this.newVisibleEnd=0,this.startIndex=0,this.endIndex=0,this.itemSize=e.$eval(o.mdItemSize)||null,this.isFirstRender=!0,this.isVirtualRepeatUpdating_=!1,this.itemsLength=0,this.unwatchItemSize_=t.noop,this.blocks={},this.pooledBlocks=[],e.$on("$destroy",t.bind(this,this.cleanupBlocks_))}function a(e){if(!t.isFunction(e.getItemAtIndex)||!t.isFunction(e.getLength))throw Error("When md-on-demand is enabled, the Object passed to md-virtual-repeat must implement functions getItemAtIndex() and getLength() ");this.model=e}o.$inject=["$$rAF","$mdUtil","$mdConstant","$parse","$rootScope","$window","$scope","$element","$attrs"],r.$inject=["$scope","$element","$attrs","$browser","$document","$rootScope","$$rAF","$mdUtil"],i.$inject=["$parse"],t.module("material.components.virtualRepeat",["material.core","material.components.showHide"]).directive("mdVirtualRepeatContainer",e).directive("mdVirtualRepeat",i);var d=3;o.prototype.register=function(e){this.repeater=e,t.element(this.scroller).on("scroll wheel touchmove touchend",t.bind(this,this.handleScroll_))},o.prototype.isHorizontal=function(){return this.horizontal},o.prototype.getSize=function(){return this.size},o.prototype.setSize_=function(e){var t=this.getDimensionName_();this.size=e,this.$element[0].style[t]=e+"px"},o.prototype.unsetSize_=function(){this.$element[0].style[this.getDimensionName_()]=this.oldElementSize,this.oldElementSize=null},o.prototype.updateSize=function(){this.originalSize||(this.size=this.isHorizontal()?this.$element[0].clientWidth:this.$element[0].clientHeight,this.handleScroll_(),this.repeater&&this.repeater.containerUpdated())},o.prototype.getScrollSize=function(){return this.scrollSize},o.prototype.getDimensionName_=function(){return this.isHorizontal()?"width":"height"},o.prototype.sizeScroller_=function(e){var t=this.getDimensionName_(),n=this.isHorizontal()?"height":"width";if(this.sizer.innerHTML="",e<this.maxElementPixels)this.sizer.style[t]=e+"px";else{this.sizer.style[t]="auto",this.sizer.style[n]="auto";var o=Math.floor(e/this.maxElementPixels),i=document.createElement("div");i.style[t]=this.maxElementPixels+"px",i.style[n]="1px";for(var r=0;r<o;r++)this.sizer.appendChild(i.cloneNode(!1));i.style[t]=e-o*this.maxElementPixels+"px",this.sizer.appendChild(i)}},o.prototype.autoShrink_=function(e){var t=Math.max(e,this.autoShrinkMin*this.repeater.getItemSize());if(this.autoShrink&&t!==this.size){null===this.oldElementSize&&(this.oldElementSize=this.$element[0].style[this.getDimensionName_()]);var n=this.originalSize||this.size;if(!n||t<n)this.originalSize||(this.originalSize=this.size),this.setSize_(t);else if(null!==this.originalSize){this.unsetSize_();var o=this.originalSize;this.originalSize=null,o||this.updateSize(),this.setSize_(o||this.size)}this.repeater.containerUpdated()}},o.prototype.setScrollSize=function(e){var t=e+this.offsetSize;this.scrollSize!==t&&(this.sizeScroller_(t),this.autoShrink_(t),this.scrollSize=t)},o.prototype.getScrollOffset=function(){return this.scrollOffset},o.prototype.scrollTo=function(e){this.scroller[this.isHorizontal()?"scrollLeft":"scrollTop"]=e,this.handleScroll_()},o.prototype.scrollToIndex=function(e){var t=this.repeater.getItemSize(),n=this.repeater.itemsLength;e>n&&(e=n-1),this.scrollTo(t*e)},o.prototype.resetScroll=function(){this.scrollTo(0)},o.prototype.handleScroll_=function(){var e="rtl"!=document.dir&&"rtl"!=document.body.dir;e||this.maxSize||(this.scroller.scrollLeft=this.scrollSize,this.maxSize=this.scroller.scrollLeft);var t=this.isHorizontal()?e?this.scroller.scrollLeft:this.maxSize-this.scroller.scrollLeft:this.scroller.scrollTop;if(!(t===this.scrollOffset||t>this.scrollSize-this.size)){var n=this.repeater.getItemSize();if(n){var o=Math.max(0,Math.floor(t/n)-d),i=(this.isHorizontal()?"translateX(":"translateY(")+(!this.isHorizontal()||e?o*n:-(o*n))+"px)";if(this.scrollOffset=t,this.offsetter.style.webkitTransform=i,this.offsetter.style.transform=i,this.bindTopIndex){var r=Math.floor(t/n);r!==this.topIndex&&r<this.repeater.getItemCount()&&(this.topIndex=r,this.bindTopIndex.assign(this.$scope,r),this.$rootScope.$$phase||this.$scope.$digest())}this.repeater.containerUpdated()}}},r.Block,r.prototype.link_=function(e,n,o,i,r){this.container=e,this.transclude=n,this.repeatName=o,this.rawRepeatListExpression=i,this.extraName=r,this.sized=!1,this.repeatListExpression=t.bind(this,this.repeatListExpression_),this.container.register(this)},r.prototype.cleanupBlocks_=function(){t.forEach(this.pooledBlocks,function(e){e.element.remove()})},r.prototype.readItemSize_=function(){if(!this.itemSize){this.items=this.repeatListExpression(this.$scope),this.parentNode=this.$element[0].parentNode;var e=this.getBlock_(0);e.element[0].parentNode||this.parentNode.appendChild(e.element[0]),this.itemSize=e.element[0][this.container.isHorizontal()?"offsetWidth":"offsetHeight"]||null,this.blocks[0]=e,this.poolBlock_(0),this.itemSize&&this.containerUpdated()}},r.prototype.repeatListExpression_=function(e){var t=this.rawRepeatListExpression(e);if(this.onDemand&&t){var n=new a(t);return n.$$includeIndexes(this.newStartIndex,this.newVisibleEnd),n}return t},r.prototype.containerUpdated=function(){return this.itemSize?(this.sized||(this.items=this.repeatListExpression(this.$scope)),this.sized||(this.unwatchItemSize_(),this.sized=!0,this.$scope.$watchCollection(this.repeatListExpression,t.bind(this,function(e,t){this.isVirtualRepeatUpdating_||this.virtualRepeatUpdate_(e,t)}))),this.updateIndexes_(),void((this.newStartIndex!==this.startIndex||this.newEndIndex!==this.endIndex||this.container.getScrollOffset()>this.container.getScrollSize())&&(this.items instanceof a&&this.items.$$includeIndexes(this.newStartIndex,this.newEndIndex),this.virtualRepeatUpdate_(this.items,this.items)))):(this.unwatchItemSize_&&this.unwatchItemSize_!==t.noop&&this.unwatchItemSize_(),this.unwatchItemSize_=this.$scope.$watchCollection(this.repeatListExpression,t.bind(this,function(e){e&&e.length&&this.readItemSize_()})),void(this.$rootScope.$$phase||this.$scope.$digest()))},r.prototype.getItemSize=function(){return this.itemSize},r.prototype.getItemCount=function(){return this.itemsLength},r.prototype.virtualRepeatUpdate_=function(e,n){this.isVirtualRepeatUpdating_=!0;var o=e&&e.length||0,i=!1;if(this.items&&o<this.items.length&&0!==this.container.getScrollOffset()){this.items=e;var r=this.container.getScrollOffset();this.container.resetScroll(),this.container.scrollTo(r)}if(o!==this.itemsLength&&(i=!0,this.itemsLength=o),this.items=e,(e!==n||i)&&this.updateIndexes_(),this.parentNode=this.$element[0].parentNode,i&&this.container.setScrollSize(o*this.itemSize),this.isFirstRender){this.isFirstRender=!1;var a=this.$attrs.mdStartIndex?this.$scope.$eval(this.$attrs.mdStartIndex):this.container.topIndex;this.container.scrollToIndex(a)}Object.keys(this.blocks).forEach(function(e){var t=parseInt(e,10);(t<this.newStartIndex||t>=this.newEndIndex)&&this.poolBlock_(t)},this),this.$browser.$$checkUrlChange=t.noop;var d,s,l=[],c=[];for(d=this.newStartIndex;d<this.newEndIndex&&null==this.blocks[d];d++)s=this.getBlock_(d),this.updateBlock_(s,d),l.push(s);for(;null!=this.blocks[d];d++)this.updateBlock_(this.blocks[d],d);for(var m=d-1;d<this.newEndIndex;d++)s=this.getBlock_(d),this.updateBlock_(s,d),c.push(s);l.length&&this.parentNode.insertBefore(this.domFragmentFromBlocks_(l),this.$element[0].nextSibling),c.length&&this.parentNode.insertBefore(this.domFragmentFromBlocks_(c),this.blocks[m]&&this.blocks[m].element[0].nextSibling),this.$browser.$$checkUrlChange=this.browserCheckUrlChange,this.startIndex=this.newStartIndex,this.endIndex=this.newEndIndex,this.isVirtualRepeatUpdating_=!1},r.prototype.getBlock_=function(e){if(this.pooledBlocks.length)return this.pooledBlocks.pop();var n;return this.transclude(t.bind(this,function(t,o){n={element:t,"new":!0,scope:o},this.updateScope_(o,e),this.parentNode.appendChild(t[0])})),n},r.prototype.updateBlock_=function(e,t){this.blocks[t]=e,(e["new"]||e.scope.$index!==t||e.scope[this.repeatName]!==this.items[t])&&(e["new"]=!1,this.updateScope_(e.scope,t),this.$rootScope.$$phase||e.scope.$digest())},r.prototype.updateScope_=function(e,t){e.$index=t,e[this.repeatName]=this.items&&this.items[t],this.extraName&&(e[this.extraName(this.$scope)]=this.items[t])},r.prototype.poolBlock_=function(e){this.pooledBlocks.push(this.blocks[e]),this.parentNode.removeChild(this.blocks[e].element[0]),delete this.blocks[e]},r.prototype.domFragmentFromBlocks_=function(e){var t=this.$document[0].createDocumentFragment();return e.forEach(function(e){t.appendChild(e.element[0])}),t},r.prototype.updateIndexes_=function(){var e=this.items?this.items.length:0,t=Math.ceil(this.container.getSize()/this.itemSize);this.newStartIndex=Math.max(0,Math.min(e-t,Math.floor(this.container.getScrollOffset()/this.itemSize))),this.newVisibleEnd=this.newStartIndex+t+d,this.newEndIndex=Math.min(e,this.newVisibleEnd),this.newStartIndex=Math.max(0,this.newStartIndex-d)},a.prototype.$$includeIndexes=function(e,t){for(var n=e;n<t;n++)this.hasOwnProperty(n)||(this[n]=this.model.getItemAtIndex(n));this.length=this.model.getLength()}}(),function(){function e(e){function t(t,a,d){var s="";d.$observe("mdWhiteframe",function(t){t=parseInt(t,10)||r,t!=n&&(t>i||t<o)&&(e.warn("md-whiteframe attribute value is invalid. It should be a number between "+o+" and "+i,a[0]),t=r);var l=t==n?"":"md-whiteframe-"+t+"dp";d.$updateClass(l,s),s=l})}var n=-1,o=1,i=24,r=4;return{link:t}}e.$inject=["$log"],t.module("material.components.whiteframe",["material.core"]).directive("mdWhiteframe",e)}(),function(){function e(e,d,s,l,c,m,u,p,h,f,g,b){function v(){s.initOptionalProperties(e,h,{searchText:"",selectedItem:null,clearButton:!1}),c(d),M(),s.nextTick(function(){w(),C(),e.autofocus&&d.on("focus",y)})}function E(){e.requireMatch&&De&&De.$setValidity("md-require-match",!!e.selectedItem||!e.searchText)}function $(){function t(){var e=0,t=d.find("md-input-container");if(t.length){var n=t.find("input");e=t.prop("offsetHeight"),e-=n.prop("offsetTop"),e-=n.prop("offsetHeight"),e+=t.prop("offsetTop")}return e}function n(){var e=Ae.scrollContainer.getBoundingClientRect(),t={};e.right>p.right-r&&(t.left=m.right-e.width+"px"),Ae.$.scrollContainer.css(t)}if(!Ae)return s.nextTick($,!1,e);var l,c=(e.dropdownItems||i)*o,m=Ae.wrap.getBoundingClientRect(),u=Ae.snap.getBoundingClientRect(),p=Ae.root.getBoundingClientRect(),f=u.bottom-p.top,g=p.bottom-u.top,b=m.left-p.left,v=m.width,E=t(),C=e.dropdownPosition;if(C||(C=f>g&&p.height-m.bottom-r<c?"top":"bottom"),h.mdFloatingLabel&&(b+=a,v-=2*a),l={left:b+"px",minWidth:v+"px",maxWidth:Math.max(m.right-p.left,p.right-m.left)-r+"px"},"top"===C)l.top="auto",l.bottom=g+"px",l.maxHeight=Math.min(c,m.top-p.top-r)+"px";else{var y=p.bottom-m.bottom-r+s.getViewportTop();l.top=f-E+"px",l.bottom="auto",l.maxHeight=Math.min(c,y)+"px"}Ae.$.scrollContainer.css(l),s.nextTick(n,!1)}function C(){Ae.$.root.length&&(c(Ae.$.scrollContainer),Ae.$.scrollContainer.detach(),Ae.$.root.append(Ae.$.scrollContainer),u.pin&&u.pin(Ae.$.scrollContainer,p))}function y(){Ae.input.focus()}function M(){var n=parseInt(e.delay,10)||0;h.$observe("disabled",function(e){ye.isDisabled=s.parseAttributeBoolean(e,!1)}),h.$observe("required",function(e){ye.isRequired=s.parseAttributeBoolean(e,!1)}),h.$observe("readonly",function(e){ye.isReadonly=s.parseAttributeBoolean(e,!1)}),e.$watch("searchText",n?s.debounce(B,n):B),e.$watch("selectedItem",H),t.element(m).on("resize",Ie),e.$on("$destroy",T)}function T(){if(ye.hidden||s.enableScrolling(),t.element(m).off("resize",Ie),Ae){var e=["ul","scroller","scrollContainer","input"];t.forEach(e,function(e){Ae.$[e].remove()})}}function A(){ye.hidden||$()}function w(){var e=k();Ae={main:d[0],scrollContainer:d[0].querySelector(".md-virtual-repeat-container"),scroller:d[0].querySelector(".md-virtual-repeat-scroller"),ul:d.find("ul")[0],input:d.find("input")[0],wrap:e.wrap,snap:e.snap,root:document.body},Ae.li=Ae.ul.getElementsByTagName("li"),Ae.$=_(Ae),De=Ae.$.input.controller("ngModel")}function k(){var e,n;for(e=d;e.length&&(n=e.attr("md-autocomplete-snap"),!t.isDefined(n));e=e.parent());if(e.length)return{snap:e[0],wrap:"width"===n.toLowerCase()?e[0]:d.find("md-autocomplete-wrap")[0]};var o=d.find("md-autocomplete-wrap")[0];return{snap:o,wrap:o}}function _(e){var n={};for(var o in e)e.hasOwnProperty(o)&&(n[o]=t.element(e[o]));return n}function x(e,n){!e&&n?($(),ue(!0,He.Count|He.Selected),Ae&&(s.disableScrollAround(Ae.ul),Ne=S(t.element(Ae.wrap)))):e&&!n&&(s.enableScrolling(),Ne&&(Ne(),Ne=null))}function S(e){function t(e){e.preventDefault()}return e.on("wheel",t),e.on("touchmove",t),function(){e.off("wheel",t),e.off("touchmove",t)}}function N(){ke=!0}function D(){xe||ye.hidden||Ae.input.focus(),ke=!1,ye.hidden=X()}function I(){Ae.input.focus()}function H(n,o){E(),n?V(n).then(function(t){e.searchText=t,R(n,o)}):o&&e.searchText&&V(o).then(function(n){t.isString(e.searchText)&&n.toString().toLowerCase()===e.searchText.toLowerCase()&&(e.searchText="")}),n!==o&&O()}function O(){t.isFunction(e.itemChange)&&e.itemChange(Y(e.selectedItem))}function P(){t.isFunction(e.textChange)&&e.textChange()}function R(e,t){_e.forEach(function(n){n(e,t)})}function L(e){_e.indexOf(e)==-1&&_e.push(e)}function F(e){var t=_e.indexOf(e);t!=-1&&_e.splice(t,1)}function B(t,n){ye.index=K(),t!==n&&(E(),V(e.selectedItem).then(function(o){t!==o&&(e.selectedItem=null,t!==n&&P(),re()?ve():(ye.matches=[],G(!1),ue(!1,He.Count)))}))}function j(e){xe=!1,ke||(ye.hidden=X(),Ce("ngBlur",{$event:e}))}function U(e){e&&(ke=!1,xe=!1),Ae.input.blur()}function q(e){xe=!0,Q()&&re()&&ve(),ye.hidden=X(),Ce("ngFocus",{$event:e})}function z(t){switch(t.keyCode){case l.KEY_CODE.DOWN_ARROW:if(ye.loading)return;t.stopPropagation(),t.preventDefault(),ye.index=Math.min(ye.index+1,ye.matches.length-1),he(),ue(!1,He.Selected);break;case l.KEY_CODE.UP_ARROW:if(ye.loading)return;t.stopPropagation(),t.preventDefault(),ye.index=ye.index<0?ye.matches.length-1:Math.max(0,ye.index-1),he(),ue(!1,He.Selected);break;case l.KEY_CODE.TAB:if(D(),ye.hidden||ye.loading||ye.index<0||ye.matches.length<1)return;de(ye.index);break;case l.KEY_CODE.ENTER:if(ye.hidden||ye.loading||ye.index<0||ye.matches.length<1)return;if(ne())return;t.stopPropagation(),t.preventDefault(),de(ye.index);break;case l.KEY_CODE.ESCAPE:if(t.preventDefault(),!Z())return;t.stopPropagation(),le(),e.searchText&&J("clear")&&ce(),ye.hidden=!0,J("blur")&&U(!0)}}function W(){return t.isNumber(e.minLength)?e.minLength:1}function V(n){function o(t){return t&&e.itemText?e.itemText(Y(t)):null}return f.when(o(n)||n).then(function(e){return e&&!t.isString(e)&&g.warn("md-autocomplete: Could not resolve display value to a string. Please check the `md-item-text` attribute."),e})}function Y(e){if(!e)return n;var t={};return ye.itemName&&(t[ye.itemName]=e),t}function K(){return e.autoselect?0:-1}function G(e){ye.loading!=e&&(ye.loading=e),ye.hidden=X()}function X(){return!Q()||!ee()}function Q(){return!(ye.loading&&!te())&&(!ne()&&!!xe)}function Z(){return J("blur")||!ye.hidden||ye.loading||J("clear")&&e.searchText}function J(t){return!e.escapeOptions||e.escapeOptions.toLowerCase().indexOf(t)!==-1}function ee(){return re()&&te()||be()}function te(){return!!ye.matches.length}function ne(){return!!ye.scope.selectedItem}function oe(){return ye.loading&&!ne()}function ie(){return V(ye.matches[ye.index])}function re(){return(e.searchText||"").length>=W()}function ae(e,t,n){Object.defineProperty(ye,e,{get:function(){return n},set:function(e){var o=n;n=e,t(e,o)}})}function de(t){s.nextTick(function(){V(ye.matches[t]).then(function(e){var t=Ae.$.input.controller("ngModel");t.$setViewValue(e),t.$render()})["finally"](function(){e.selectedItem=ye.matches[t],G(!1)})},!1)}function se(){le(),ce()}function le(){ye.index=0,ye.matches=[]}function ce(){G(!0),e.searchText="";var t=document.createEvent("CustomEvent");t.initCustomEvent("change",!0,!0,{value:""}),Ae.input.dispatchEvent(t),Ae.input.blur(),e.searchText="",Ae.input.focus()}function me(n){function o(t){t&&(t=f.when(t),Se++,G(!0),s.nextTick(function(){t.then(i)["finally"](function(){0===--Se&&G(!1)})},!0,e))}function i(t){we[a]=t,(n||"")===(e.searchText||"")&&Ee(t)}var r=e.$parent.$eval(Te),a=n.toLowerCase(),d=t.isArray(r),l=!!r.then;d?i(r):l&&o(r)}function ue(e,t){var n=e?"polite":"assertive",o=[];t&He.Selected&&ye.index!==-1&&o.push(ie()),t&He.Count&&o.push(f.resolve(pe())),f.all(o).then(function(e){b.announce(e.join(" "),n)})}function pe(){switch(ye.matches.length){case 0:return"There are no matches available.";case 1:return"There is 1 match available.";default:return"There are "+ye.matches.length+" matches available."}}function he(){if(Ae.li[0]){var e=Ae.li[0].offsetHeight,t=e*ye.index,n=t+e,o=Ae.scroller.clientHeight,i=Ae.scroller.scrollTop;t<i?ge(t):n>i+o&&ge(n-o)}}function fe(){return 0!==Se}function ge(e){Ae.$.scrollContainer.controller("mdVirtualRepeatContainer").scrollTo(e)}function be(){var e=(ye.scope.searchText||"").length;return ye.hasNotFound&&!te()&&(!ye.loading||fe())&&e>=W()&&(xe||ke)&&!ne()}function ve(){var t=e.searchText||"",n=t.toLowerCase();!e.noCache&&we[n]?Ee(we[n]):me(t),ye.hidden=X()}function Ee(t){ye.matches=t,ye.hidden=X(),ye.loading&&G(!1),e.selectOnMatch&&$e(),$(),ue(!0,He.Count)}function $e(){var t=e.searchText,n=ye.matches,o=n[0];1===n.length&&V(o).then(function(n){var o=t==n;e.matchInsensitive&&!o&&(o=t.toLowerCase()==n.toLowerCase()),o&&de(0)})}function Ce(t,n){h[t]&&e.$parent.$eval(h[t],n||{})}var ye=this,Me=e.itemsExpr.split(/ in /i),Te=Me[1],Ae=null,we={},ke=!1,_e=[],xe=!1,Se=0,Ne=null,De=null,Ie=s.debounce(A);ae("hidden",x,!0),ye.scope=e,ye.parent=e.$parent,ye.itemName=Me[0],ye.matches=[],ye.loading=!1,ye.hidden=!0,ye.index=null,ye.id=s.nextUid(),ye.isDisabled=null,ye.isRequired=null,ye.isReadonly=null,ye.hasNotFound=!1,ye.keydown=z,ye.blur=j,ye.focus=q,ye.clear=se,ye.select=de,ye.listEnter=N,ye.listLeave=D,ye.mouseUp=I,ye.getCurrentDisplayValue=ie,ye.registerSelectedItemWatcher=L,ye.unregisterSelectedItemWatcher=F,ye.notFoundVisible=be,ye.loadingIsVisible=oe,ye.positionDropdown=$;var He={Count:1,Selected:2};return v()}e.$inject=["$scope","$element","$mdUtil","$mdConstant","$mdTheming","$window","$animate","$rootElement","$attrs","$q","$log","$mdLiveAnnouncer"],t.module("material.components.autocomplete").controller("MdAutocompleteCtrl",e);var o=48,i=5,r=8,a=2}(),function(){function e(e){return{controller:"MdAutocompleteCtrl",controllerAs:"$mdAutocompleteCtrl",scope:{inputName:"@mdInputName",inputMinlength:"@mdInputMinlength",inputMaxlength:"@mdInputMaxlength",searchText:"=?mdSearchText",selectedItem:"=?mdSelectedItem",itemsExpr:"@mdItems",itemText:"&mdItemText",placeholder:"@placeholder",noCache:"=?mdNoCache",requireMatch:"=?mdRequireMatch",selectOnMatch:"=?mdSelectOnMatch",matchInsensitive:"=?mdMatchCaseInsensitive",itemChange:"&?mdSelectedItemChange",textChange:"&?mdSearchTextChange",minLength:"=?mdMinLength",delay:"=?mdDelay",autofocus:"=?mdAutofocus",floatingLabel:"@?mdFloatingLabel",autoselect:"=?mdAutoselect",menuClass:"@?mdMenuClass",inputId:"@?mdInputId",escapeOptions:"@?mdEscapeOptions",dropdownItems:"=?mdDropdownItems",dropdownPosition:"@?mdDropdownPosition",clearButton:"=?mdClearButton"},compile:function(e,n){var o=["md-select-on-focus","md-no-asterisk","ng-trim","ng-pattern"],i=e.find("input");return o.forEach(function(e){var t=n[n.$normalize(e)];null!==t&&i.attr(e,t)}),function(e,n,o,i){i.hasNotFound=!!n.attr("md-has-not-found"),t.isDefined(o.mdClearButton)||e.floatingLabel||(e.clearButton=!0)}},template:function(t,n){function o(){var e=t.find("md-item-template").detach(),n=e.length?e.html():t.html();return e.length||t.empty(),"<md-autocomplete-parent-scope md-autocomplete-replace>"+n+"</md-autocomplete-parent-scope>"}function i(){var e=t.find("md-not-found").detach(),n=e.length?e.html():"";return n?'<li ng-if="$mdAutocompleteCtrl.notFoundVisible()"                         md-autocomplete-parent-scope>'+n+"</li>":""}function r(){return n.mdFloatingLabel?'            <md-input-container ng-if="floatingLabel">              <label>{{floatingLabel}}</label>              <input type="search"                  '+(null!=c?'tabindex="'+c+'"':"")+'                  id="{{ inputId || \'fl-input-\' + $mdAutocompleteCtrl.id }}"                  name="{{inputName}}"                  autocomplete="off"                  ng-required="$mdAutocompleteCtrl.isRequired"                  ng-readonly="$mdAutocompleteCtrl.isReadonly"                  ng-minlength="inputMinlength"                  ng-maxlength="inputMaxlength"                  ng-disabled="$mdAutocompleteCtrl.isDisabled"                  ng-model="$mdAutocompleteCtrl.scope.searchText"                  ng-model-options="{ allowInvalid: true }"                  ng-keydown="$mdAutocompleteCtrl.keydown($event)"                  ng-blur="$mdAutocompleteCtrl.blur($event)"                  ng-focus="$mdAutocompleteCtrl.focus($event)"                  aria-owns="ul-{{$mdAutocompleteCtrl.id}}"                  aria-label="{{floatingLabel}}"                  aria-autocomplete="list"                  role="combobox"                  aria-haspopup="true"                  aria-activedescendant=""                  aria-expanded="{{!$mdAutocompleteCtrl.hidden}}"/>              <div md-autocomplete-parent-scope md-autocomplete-replace>'+l+"</div>            </md-input-container>":'            <input type="search"                '+(null!=c?'tabindex="'+c+'"':"")+'                id="{{ inputId || \'input-\' + $mdAutocompleteCtrl.id }}"                name="{{inputName}}"                ng-if="!floatingLabel"                autocomplete="off"                ng-required="$mdAutocompleteCtrl.isRequired"                ng-disabled="$mdAutocompleteCtrl.isDisabled"                ng-readonly="$mdAutocompleteCtrl.isReadonly"                ng-minlength="inputMinlength"                ng-maxlength="inputMaxlength"                ng-model="$mdAutocompleteCtrl.scope.searchText"                ng-keydown="$mdAutocompleteCtrl.keydown($event)"                ng-blur="$mdAutocompleteCtrl.blur($event)"                ng-focus="$mdAutocompleteCtrl.focus($event)"                placeholder="{{placeholder}}"                aria-owns="ul-{{$mdAutocompleteCtrl.id}}"                aria-label="{{placeholder}}"                aria-autocomplete="list"                role="combobox"                aria-haspopup="true"                aria-activedescendant=""                aria-expanded="{{!$mdAutocompleteCtrl.hidden}}"/>';
}function a(){return'<button type="button" aria-label="Clear Input" tabindex="-1" ng-if="clearButton && $mdAutocompleteCtrl.scope.searchText && !$mdAutocompleteCtrl.isDisabled" ng-click="$mdAutocompleteCtrl.clear($event)"><md-icon md-svg-src="'+e.mdClose+'"></md-icon></button>'}var d=i(),s=o(),l=t.html(),c=n.tabindex;return d&&t.attr("md-has-not-found",!0),t.attr("tabindex","-1"),"        <md-autocomplete-wrap            ng-class=\"{ 'md-whiteframe-z1': !floatingLabel,                         'md-menu-showing': !$mdAutocompleteCtrl.hidden,                         'md-show-clear-button': !!clearButton }\">          "+r()+"          "+a()+'          <md-progress-linear              class="'+(n.mdFloatingLabel?"md-inline":"")+'"              ng-if="$mdAutocompleteCtrl.loadingIsVisible()"              md-mode="indeterminate"></md-progress-linear>          <md-virtual-repeat-container              md-auto-shrink              md-auto-shrink-min="1"              ng-mouseenter="$mdAutocompleteCtrl.listEnter()"              ng-mouseleave="$mdAutocompleteCtrl.listLeave()"              ng-mouseup="$mdAutocompleteCtrl.mouseUp()"              ng-hide="$mdAutocompleteCtrl.hidden"              class="md-autocomplete-suggestions-container md-whiteframe-z1"              ng-class="{ \'md-not-found\': $mdAutocompleteCtrl.notFoundVisible() }"              role="presentation">            <ul class="md-autocomplete-suggestions"                ng-class="::menuClass"                id="ul-{{$mdAutocompleteCtrl.id}}">              <li md-virtual-repeat="item in $mdAutocompleteCtrl.matches"                  ng-class="{ selected: $index === $mdAutocompleteCtrl.index }"                  ng-click="$mdAutocompleteCtrl.select($index)"                  md-extra-name="$mdAutocompleteCtrl.itemName">                  '+s+"                  </li>"+d+"            </ul>          </md-virtual-repeat-container>        </md-autocomplete-wrap>"}}}e.$inject=["$$mdSvgRegistry"],t.module("material.components.autocomplete").directive("mdAutocomplete",e)}(),function(){function e(e,t){function n(e,n,o){return function(e,n,i){function r(n,o){s[o]=e[n],e.$watch(n,function(e){t.nextTick(function(){s[o]=e})})}function a(){var t=!1,n=!1;e.$watch(function(){n||t||(t=!0,e.$$postDigest(function(){n||s.$digest(),t=n=!1}))}),s.$watch(function(){n=!0})}var d=e.$mdAutocompleteCtrl,s=d.parent.$new(),l=d.itemName;r("$index","$index"),r("item",l),a(),o(s,function(e){n.after(e)})}}return{restrict:"AE",compile:n,terminal:!0,transclude:"element"}}e.$inject=["$compile","$mdUtil"],t.module("material.components.autocomplete").directive("mdAutocompleteParentScope",e)}(),function(){function e(e,t,n){this.$scope=e,this.$element=t,this.$attrs=n,this.regex=null}e.$inject=["$scope","$element","$attrs"],t.module("material.components.autocomplete").controller("MdHighlightCtrl",e),e.prototype.init=function(e,t){this.flags=this.$attrs.mdHighlightFlags||"",this.unregisterFn=this.$scope.$watch(function(n){return{term:e(n),contentText:t(n)}}.bind(this),this.onRender.bind(this),!0),this.$element.on("$destroy",this.unregisterFn)},e.prototype.onRender=function(e,t){var n=e.contentText;null!==this.regex&&e.term===t.term||(this.regex=this.createRegex(e.term,this.flags)),e.term?this.applyRegex(n):this.$element.text(n)},e.prototype.applyRegex=function(e){var n=this.resolveTokens(e);this.$element.empty(),n.forEach(function(e){if(e.isMatch){var n=t.element('<span class="highlight">').text(e.text);this.$element.append(n)}else this.$element.append(document.createTextNode(e))}.bind(this))},e.prototype.resolveTokens=function(e){function t(t,o){var i=e.slice(t,o);i&&n.push(i)}var n=[],o=0;return e.replace(this.regex,function(e,i){t(o,i),n.push({text:e,isMatch:!0}),o=i+e.length}),t(o),n},e.prototype.createRegex=function(e,t){var n="",o="",i=this.sanitizeRegex(e);return t.indexOf("^")>=0&&(n="^"),t.indexOf("$")>=0&&(o="$"),new RegExp(n+i+o,t.replace(/[$\^]/g,""))},e.prototype.sanitizeRegex=function(e){return e&&e.toString().replace(/[\\\^\$\*\+\?\.\(\)\|\{}\[\]]/g,"\\$&")}}(),function(){function e(e,t){return{terminal:!0,controller:"MdHighlightCtrl",compile:function(n,o){var i=t(o.mdHighlightText),r=e(n.html());return function(e,t,n,o){o.init(i,r)}}}}e.$inject=["$interpolate","$parse"],t.module("material.components.autocomplete").directive("mdHighlightText",e)}(),function(){function o(e,t,o,i,r){this.$scope=e,this.$element=t,this.$mdConstant=o,this.$timeout=i,this.$mdUtil=r,this.isEditting=!1,this.parentController=n,this.enableChipEdit=!1}o.$inject=["$scope","$element","$mdConstant","$timeout","$mdUtil"],t.module("material.components.chips").controller("MdChipCtrl",o),o.prototype.init=function(e){this.parentController=e,this.enableChipEdit=this.parentController.enableChipEdit,this.enableChipEdit&&(this.$element.on("keydown",this.chipKeyDown.bind(this)),this.$element.on("mousedown",this.chipMouseDown.bind(this)),this.getChipContent().addClass("_md-chip-content-edit-is-enabled"))},o.prototype.getChipContent=function(){var e=this.$element[0].getElementsByClassName("md-chip-content");return t.element(e[0])},o.prototype.getContentElement=function(){return t.element(this.getChipContent().children()[0])},o.prototype.getChipIndex=function(){return parseInt(this.$element.attr("index"))},o.prototype.goOutOfEditMode=function(){if(this.isEditting){this.isEditting=!1,this.$element.removeClass("_md-chip-editing"),this.getChipContent()[0].contentEditable="false";var e=this.getChipIndex(),t=this.getContentElement().text();t?(this.parentController.updateChipContents(e,this.getContentElement().text()),this.$mdUtil.nextTick(function(){this.parentController.selectedChip===e&&this.parentController.focusChip(e)}.bind(this))):this.parentController.removeChipAndFocusInput(e)}},o.prototype.selectNodeContents=function(t){var n,o;document.body.createTextRange?(n=document.body.createTextRange(),n.moveToElementText(t),n.select()):e.getSelection&&(o=e.getSelection(),n=document.createRange(),n.selectNodeContents(t),o.removeAllRanges(),o.addRange(n))},o.prototype.goInEditMode=function(){this.isEditting=!0,this.$element.addClass("_md-chip-editing"),this.getChipContent()[0].contentEditable="true",this.getChipContent().on("blur",function(){this.goOutOfEditMode()}.bind(this)),this.selectNodeContents(this.getChipContent()[0])},o.prototype.chipKeyDown=function(e){this.isEditting||e.keyCode!==this.$mdConstant.KEY_CODE.ENTER&&e.keyCode!==this.$mdConstant.KEY_CODE.SPACE?this.isEditting&&e.keyCode===this.$mdConstant.KEY_CODE.ENTER&&(e.preventDefault(),this.goOutOfEditMode()):(e.preventDefault(),this.goInEditMode())},o.prototype.chipMouseDown=function(){this.getChipIndex()==this.parentController.selectedChip&&this.enableChipEdit&&!this.isEditting&&this.goInEditMode()}}(),function(){function e(e,o,i,r){function a(n,o,a,s){var l=s.shift(),c=s.shift(),m=t.element(o[0].querySelector(".md-chip-content"));e(o),l&&(c.init(l),m.append(i(d)(n)),m.on("blur",function(){l.resetSelectedChip(),l.$scope.$applyAsync()})),r(function(){l&&l.shouldFocusLastChip&&l.focusLastChipThenInput()})}var d=o.processTemplate(n);return{restrict:"E",require:["^?mdChips","mdChip"],link:a,controller:"MdChipCtrl"}}e.$inject=["$mdTheming","$mdUtil","$compile","$timeout"],t.module("material.components.chips").directive("mdChip",e);var n='    <span ng-if="!$mdChipsCtrl.readonly" class="md-visually-hidden">      {{$mdChipsCtrl.deleteHint}}    </span>'}(),function(){function e(e){function t(t,n,o,i){n.on("click",function(e){t.$apply(function(){i.removeChip(t.$$replacedScope.$index)})}),e(function(){n.attr({tabindex:-1,"aria-hidden":!0}),n.find("button").attr("tabindex","-1")})}return{restrict:"A",require:"^mdChips",scope:!1,link:t}}e.$inject=["$timeout"],t.module("material.components.chips").directive("mdChipRemove",e)}(),function(){function e(e){function t(t,n,o){var i=t.$parent.$mdChipsCtrl,r=i.parent.$new(!1,i.parent);r.$$replacedScope=t,r.$chip=t.$chip,r.$index=t.$index,r.$mdChipsCtrl=i;var a=i.$scope.$eval(o.mdChipTransclude);n.html(a),e(n.contents())(r)}return{restrict:"EA",terminal:!0,link:t,scope:!1}}e.$inject=["$compile"],t.module("material.components.chips").directive("mdChipTransclude",e)}(),function(){function e(e,t,o,i,r,a,d){this.$timeout=a,this.$mdConstant=o,this.$scope=e,this.parent=e.$parent,this.$mdUtil=d,this.$log=i,this.$element=r,this.$attrs=t,this.ngModelCtrl=null,this.userInputNgModelCtrl=null,this.autocompleteCtrl=null,this.userInputElement=null,this.items=[],this.selectedChip=-1,this.enableChipEdit=d.parseAttributeBoolean(t.mdEnableChipEdit),this.addOnBlur=d.parseAttributeBoolean(t.mdAddOnBlur),this.inputAriaLabel="Chips input.",this.containerHint="Chips container. Use arrow keys to select chips.",this.deleteHint="Press delete to remove this chip.",this.deleteButtonLabel="Remove",this.chipBuffer="",this.useTransformChip=!1,this.useOnAdd=!1,this.useOnRemove=!1,this.wrapperId="",this.contentIds=[],this.ariaTabIndex=null,this.chipAppendDelay=n,this.init()}e.$inject=["$scope","$attrs","$mdConstant","$log","$element","$timeout","$mdUtil"];var n=300;t.module("material.components.chips").controller("MdChipsCtrl",e),e.prototype.init=function(){var e=this;e.wrapperId="_md-chips-wrapper-"+e.$mdUtil.nextUid(),e.$scope.$watchCollection("$mdChipsCtrl.items",function(){e.setupInputAria(),e.setupWrapperAria()}),e.$attrs.$observe("mdChipAppendDelay",function(t){e.chipAppendDelay=parseInt(t)||n})},e.prototype.setupInputAria=function(){var e=this.$element.find("input");e&&(e.attr("role","textbox"),e.attr("aria-multiline",!0))},e.prototype.setupWrapperAria=function(){var e=this,t=this.$element.find("md-chips-wrap");this.items&&this.items.length?(t.attr("role","listbox"),this.contentIds=this.items.map(function(){return e.wrapperId+"-chip-"+e.$mdUtil.nextUid()}),t.attr("aria-owns",this.contentIds.join(" "))):(t.removeAttr("role"),t.removeAttr("aria-owns"))},e.prototype.inputKeydown=function(e){var t=this.getChipBuffer();if(!(this.autocompleteCtrl&&e.isDefaultPrevented&&e.isDefaultPrevented())){if(e.keyCode===this.$mdConstant.KEY_CODE.BACKSPACE){if(0!==this.getCursorPosition(e.target))return;return e.preventDefault(),e.stopPropagation(),void(this.items.length&&this.selectAndFocusChipSafe(this.items.length-1))}if((!this.separatorKeys||this.separatorKeys.length<1)&&(this.separatorKeys=[this.$mdConstant.KEY_CODE.ENTER]),this.separatorKeys.indexOf(e.keyCode)!==-1){if(this.autocompleteCtrl&&this.requireMatch||!t)return;if(e.preventDefault(),this.hasMaxChipsReached())return;return this.appendChip(t.trim()),this.resetChipBuffer(),!1}}},e.prototype.getCursorPosition=function(e){try{if(e.selectionStart===e.selectionEnd)return e.selectionStart}catch(t){if(!e.value)return 0}},e.prototype.updateChipContents=function(e,t){e>=0&&e<this.items.length&&(this.items[e]=t,this.ngModelCtrl.$setDirty())},e.prototype.isEditingChip=function(){return!!this.$element[0].querySelector("._md-chip-editing")},e.prototype.isRemovable=function(){return!!this.ngModelCtrl&&(this.readonly?this.removable:!t.isDefined(this.removable)||this.removable)},e.prototype.chipKeydown=function(e){if(!this.getChipBuffer()&&!this.isEditingChip())switch(e.keyCode){case this.$mdConstant.KEY_CODE.BACKSPACE:case this.$mdConstant.KEY_CODE.DELETE:if(this.selectedChip<0)return;if(e.preventDefault(),!this.isRemovable())return;this.removeAndSelectAdjacentChip(this.selectedChip);break;case this.$mdConstant.KEY_CODE.LEFT_ARROW:e.preventDefault(),(this.selectedChip<0||this.readonly&&0==this.selectedChip)&&(this.selectedChip=this.items.length),this.items.length&&this.selectAndFocusChipSafe(this.selectedChip-1);break;case this.$mdConstant.KEY_CODE.RIGHT_ARROW:e.preventDefault(),this.selectAndFocusChipSafe(this.selectedChip+1);break;case this.$mdConstant.KEY_CODE.ESCAPE:case this.$mdConstant.KEY_CODE.TAB:if(this.selectedChip<0)return;e.preventDefault(),this.onFocus()}},e.prototype.getPlaceholder=function(){var e=this.items&&this.items.length&&(""==this.secondaryPlaceholder||this.secondaryPlaceholder);return e?this.secondaryPlaceholder:this.placeholder},e.prototype.removeAndSelectAdjacentChip=function(e){var t=this,n=t.getAdjacentChipIndex(e);this.$element[0].querySelector("md-chips-wrap"),this.$element[0].querySelector('md-chip[index="'+e+'"]');t.removeChip(e),t.$timeout(function(){t.$timeout(function(){t.selectAndFocusChipSafe(n)})})},e.prototype.resetSelectedChip=function(){this.selectedChip=-1,this.ariaTabIndex=null},e.prototype.getAdjacentChipIndex=function(e){var t=this.items.length-1;return 0==t?-1:e==t?e-1:e},e.prototype.appendChip=function(e){if(this.shouldFocusLastChip=!0,this.useTransformChip&&this.transformChip){var n=this.transformChip({$chip:e});t.isDefined(n)&&(e=n)}if(t.isObject(e)){var o=this.items.some(function(n){return t.equals(e,n)});if(o)return}if(!(null==e||this.items.indexOf(e)+1)){var i=this.items.push(e),r=i-1;this.ngModelCtrl.$setDirty(),this.validateModel(),this.useOnAdd&&this.onAdd&&this.onAdd({$chip:e,$index:r})}},e.prototype.useTransformChipExpression=function(){this.useTransformChip=!0},e.prototype.useOnAddExpression=function(){this.useOnAdd=!0},e.prototype.useOnRemoveExpression=function(){this.useOnRemove=!0},e.prototype.useOnSelectExpression=function(){this.useOnSelect=!0},e.prototype.getChipBuffer=function(){var e=this.userInputElement?this.userInputNgModelCtrl?this.userInputNgModelCtrl.$viewValue:this.userInputElement[0].value:this.chipBuffer;return t.isString(e)?e:""},e.prototype.resetChipBuffer=function(){this.userInputElement?this.userInputNgModelCtrl?(this.userInputNgModelCtrl.$setViewValue(""),this.userInputNgModelCtrl.$render()):this.userInputElement[0].value="":this.chipBuffer=""},e.prototype.hasMaxChipsReached=function(){return t.isString(this.maxChips)&&(this.maxChips=parseInt(this.maxChips,10)||0),this.maxChips>0&&this.items.length>=this.maxChips},e.prototype.validateModel=function(){this.ngModelCtrl.$setValidity("md-max-chips",!this.hasMaxChipsReached())},e.prototype.removeChip=function(e){var t=this.items.splice(e,1);this.ngModelCtrl.$setDirty(),this.validateModel(),t&&t.length&&this.useOnRemove&&this.onRemove&&this.onRemove({$chip:t[0],$index:e})},e.prototype.removeChipAndFocusInput=function(e){this.removeChip(e),this.autocompleteCtrl?(this.autocompleteCtrl.hidden=!0,this.$mdUtil.nextTick(this.onFocus.bind(this))):this.onFocus()},e.prototype.selectAndFocusChipSafe=function(e){if(!this.items.length||e===-1)return this.focusInput();if(e>=this.items.length){if(!this.readonly)return this.onFocus();e=0}e=Math.max(e,0),e=Math.min(e,this.items.length-1),this.selectChip(e),this.focusChip(e)},e.prototype.focusLastChipThenInput=function(){var e=this;e.shouldFocusLastChip=!1,e.focusChip(this.items.length-1),e.$timeout(function(){e.focusInput()},e.chipAppendDelay)},e.prototype.focusInput=function(){this.selectChip(-1),this.onFocus()},e.prototype.selectChip=function(e){e>=-1&&e<=this.items.length?(this.selectedChip=e,this.useOnSelect&&this.onSelect&&this.onSelect({$chip:this.items[e]})):this.$log.warn("Selected Chip index out of bounds; ignoring.")},e.prototype.selectAndFocusChip=function(e){this.selectChip(e),e!=-1&&this.focusChip(e)},e.prototype.focusChip=function(e){var t=this.$element[0].querySelector('md-chip[index="'+e+'"] .md-chip-content');this.ariaTabIndex=e,t.focus()},e.prototype.configureNgModel=function(e){this.ngModelCtrl=e;var t=this;e.$render=function(){t.items=t.ngModelCtrl.$viewValue}},e.prototype.onFocus=function(){var e=this.$element[0].querySelector("input");e&&e.focus(),this.resetSelectedChip()},e.prototype.onInputFocus=function(){this.inputHasFocus=!0,this.setupInputAria(),this.resetSelectedChip()},e.prototype.onInputBlur=function(){this.inputHasFocus=!1,this.shouldAddOnBlur()&&(this.appendChip(this.getChipBuffer().trim()),this.resetChipBuffer())},e.prototype.configureUserInput=function(e){this.userInputElement=e;var n=e.controller("ngModel");n!=this.ngModelCtrl&&(this.userInputNgModelCtrl=n);var o=this.$scope,i=this,r=function(e,n){o.$evalAsync(t.bind(i,n,e))};e.attr({tabindex:0}).on("keydown",function(e){r(e,i.inputKeydown)}).on("focus",function(e){r(e,i.onInputFocus)}).on("blur",function(e){r(e,i.onInputBlur)})},e.prototype.configureAutocomplete=function(e){e&&(this.autocompleteCtrl=e,e.registerSelectedItemWatcher(t.bind(this,function(e){if(e){if(this.hasMaxChipsReached())return;this.appendChip(e),this.resetChipBuffer()}})),this.$element.find("input").on("focus",t.bind(this,this.onInputFocus)).on("blur",t.bind(this,this.onInputBlur)))},e.prototype.shouldAddOnBlur=function(){this.validateModel();var e=this.getChipBuffer().trim(),t=this.ngModelCtrl.$valid,n=this.autocompleteCtrl&&!this.autocompleteCtrl.hidden;return this.userInputNgModelCtrl&&(t=t&&this.userInputNgModelCtrl.$valid),this.addOnBlur&&!this.requireMatch&&e&&t&&!n},e.prototype.hasFocus=function(){return this.inputHasFocus||this.selectedChip>=0},e.prototype.contentIdFor=function(e){return this.contentIds[e]}}(),function(){function e(e,t,a,d,s,l){function c(n,o){function i(e){if(o.ngModel){var t=r[0].querySelector(e);return t&&t.outerHTML}}var r=o.$mdUserTemplate;o.$mdUserTemplate=null;var c=i("md-chips>md-chip-template"),m=t.prefixer().buildList("md-chip-remove").map(function(e){return"md-chips>*["+e+"]"}).join(","),p=i(m)||u.remove,h=c||u["default"],f=i("md-chips>md-autocomplete")||i("md-chips>input")||u.input,g=r.find("md-chip");return r[0].querySelector("md-chip-template>*[md-chip-remove]")&&d.warn("invalid placement of md-chip-remove within md-chip-template."),function(n,i,r,d){t.initOptionalProperties(n,o),e(i);var m=d[0];if(c&&(m.enableChipEdit=!1),m.chipContentsTemplate=h,m.chipRemoveTemplate=p,m.chipInputTemplate=f,m.mdCloseIcon=l.mdClose,i.attr({tabindex:-1}).on("focus",function(){m.onFocus()}),o.ngModel&&(m.configureNgModel(i.controller("ngModel")),r.mdTransformChip&&m.useTransformChipExpression(),r.mdOnAppend&&m.useOnAppendExpression(),r.mdOnAdd&&m.useOnAddExpression(),r.mdOnRemove&&m.useOnRemoveExpression(),r.mdOnSelect&&m.useOnSelectExpression(),f!=u.input&&n.$watch("$mdChipsCtrl.readonly",function(e){e||t.nextTick(function(){if(0===f.indexOf("<md-autocomplete")){var e=i.find("md-autocomplete");m.configureAutocomplete(e.controller("mdAutocomplete"))}m.configureUserInput(i.find("input"))})}),t.nextTick(function(){var e=i.find("input");e&&e.toggleClass("md-input",!0)})),g.length>0){var b=a(g.clone())(n.$parent);s(function(){i.find("md-chips-wrap").prepend(b)})}}}function m(){return{chips:t.processTemplate(n),input:t.processTemplate(o),"default":t.processTemplate(i),remove:t.processTemplate(r)}}var u=m();return{template:function(e,t){return t.$mdUserTemplate=e.clone(),u.chips},require:["mdChips"],restrict:"E",controller:"MdChipsCtrl",controllerAs:"$mdChipsCtrl",bindToController:!0,compile:c,scope:{readonly:"=readonly",removable:"=mdRemovable",placeholder:"@",secondaryPlaceholder:"@",maxChips:"@mdMaxChips",transformChip:"&mdTransformChip",onAppend:"&mdOnAppend",onAdd:"&mdOnAdd",onRemove:"&mdOnRemove",onSelect:"&mdOnSelect",inputAriaLabel:"@",containerHint:"@",deleteHint:"@",deleteButtonLabel:"@",separatorKeys:"=?mdSeparatorKeys",requireMatch:"=?mdRequireMatch",chipAppendDelayString:"@?mdChipAppendDelay"}}}e.$inject=["$mdTheming","$mdUtil","$compile","$log","$timeout","$$mdSvgRegistry"],t.module("material.components.chips").directive("mdChips",e);var n='      <md-chips-wrap          id="{{$mdChipsCtrl.wrapperId}}"          tabindex="{{$mdChipsCtrl.readonly ? 0 : -1}}"          ng-keydown="$mdChipsCtrl.chipKeydown($event)"          ng-class="{ \'md-focused\': $mdChipsCtrl.hasFocus(),                       \'md-readonly\': !$mdChipsCtrl.ngModelCtrl || $mdChipsCtrl.readonly,                      \'md-removable\': $mdChipsCtrl.isRemovable() }"          aria-setsize="{{$mdChipsCtrl.items.length}}"          class="md-chips">        <span ng-if="$mdChipsCtrl.readonly" class="md-visually-hidden">          {{$mdChipsCtrl.containerHint}}        </span>        <md-chip ng-repeat="$chip in $mdChipsCtrl.items"            index="{{$index}}"            ng-class="{\'md-focused\': $mdChipsCtrl.selectedChip == $index, \'md-readonly\': !$mdChipsCtrl.ngModelCtrl || $mdChipsCtrl.readonly}">          <div class="md-chip-content"              tabindex="{{$mdChipsCtrl.ariaTabIndex == $index ? 0 : -1}}"              id="{{$mdChipsCtrl.contentIdFor($index)}}"              role="option"              aria-selected="{{$mdChipsCtrl.selectedChip == $index}}"               aria-posinset="{{$index}}"              ng-click="!$mdChipsCtrl.readonly && $mdChipsCtrl.focusChip($index)"              ng-focus="!$mdChipsCtrl.readonly && $mdChipsCtrl.selectChip($index)"              md-chip-transclude="$mdChipsCtrl.chipContentsTemplate"></div>          <div ng-if="$mdChipsCtrl.isRemovable()"               class="md-chip-remove-container"               tabindex="-1"               md-chip-transclude="$mdChipsCtrl.chipRemoveTemplate"></div>        </md-chip>        <div class="md-chip-input-container" ng-if="!$mdChipsCtrl.readonly && $mdChipsCtrl.ngModelCtrl">          <div md-chip-transclude="$mdChipsCtrl.chipInputTemplate"></div>        </div>      </md-chips-wrap>',o='        <input            class="md-input"            tabindex="0"            aria-label="{{$mdChipsCtrl.inputAriaLabel}}"             placeholder="{{$mdChipsCtrl.getPlaceholder()}}"            ng-model="$mdChipsCtrl.chipBuffer"            ng-focus="$mdChipsCtrl.onInputFocus()"            ng-blur="$mdChipsCtrl.onInputBlur()"            ng-keydown="$mdChipsCtrl.inputKeydown($event)">',i="      <span>{{$chip}}</span>",r='      <button          class="md-chip-remove"          ng-if="$mdChipsCtrl.isRemovable()"          ng-click="$mdChipsCtrl.removeChipAndFocusInput($$replacedScope.$index)"          type="button"          tabindex="-1">        <md-icon md-svg-src="{{ $mdChipsCtrl.mdCloseIcon }}"></md-icon>        <span class="md-visually-hidden">          {{$mdChipsCtrl.deleteButtonLabel}}        </span>      </button>'}(),function(){function e(){this.selectedItem=null,this.searchText=""}t.module("material.components.chips").controller("MdContactChipsCtrl",e),e.prototype.queryContact=function(e){return this.contactQuery({$query:e})},e.prototype.itemName=function(e){return e[this.contactName]}}(),function(){function e(e,t){function o(n,o){return function(n,i,r,a){var d=a;t.initOptionalProperties(n,o),e(i),i.attr("tabindex","-1"),r.$observe("mdChipAppendDelay",function(e){d.chipAppendDelay=e})}}return{template:function(e,t){return n},restrict:"E",controller:"MdContactChipsCtrl",controllerAs:"$mdContactChipsCtrl",bindToController:!0,compile:o,scope:{contactQuery:"&mdContacts",placeholder:"@",secondaryPlaceholder:"@",contactName:"@mdContactName",contactImage:"@mdContactImage",contactEmail:"@mdContactEmail",contacts:"=ngModel",requireMatch:"=?mdRequireMatch",minLength:"=?mdMinLength",highlightFlags:"@?mdHighlightFlags",chipAppendDelay:"@?mdChipAppendDelay"}}}e.$inject=["$mdTheming","$mdUtil"],t.module("material.components.chips").directive("mdContactChips",e);var n='      <md-chips class="md-contact-chips"          ng-model="$mdContactChipsCtrl.contacts"          md-require-match="$mdContactChipsCtrl.requireMatch"          md-chip-append-delay="{{$mdContactChipsCtrl.chipAppendDelay}}"           md-autocomplete-snap>          <md-autocomplete              md-menu-class="md-contact-chips-suggestions"              md-selected-item="$mdContactChipsCtrl.selectedItem"              md-search-text="$mdContactChipsCtrl.searchText"              md-items="item in $mdContactChipsCtrl.queryContact($mdContactChipsCtrl.searchText)"              md-item-text="$mdContactChipsCtrl.itemName(item)"              md-no-cache="true"              md-min-length="$mdContactChipsCtrl.minLength"              md-autoselect              placeholder="{{$mdContactChipsCtrl.contacts.length == 0 ?                  $mdContactChipsCtrl.placeholder : $mdContactChipsCtrl.secondaryPlaceholder}}">            <div class="md-contact-suggestion">              <img                   ng-src="{{item[$mdContactChipsCtrl.contactImage]}}"                  alt="{{item[$mdContactChipsCtrl.contactName]}}"                  ng-if="item[$mdContactChipsCtrl.contactImage]" />              <span class="md-contact-name" md-highlight-text="$mdContactChipsCtrl.searchText"                    md-highlight-flags="{{$mdContactChipsCtrl.highlightFlags}}">                {{item[$mdContactChipsCtrl.contactName]}}              </span>              <span class="md-contact-email" >{{item[$mdContactChipsCtrl.contactEmail]}}</span>            </div>          </md-autocomplete>          <md-chip-template>            <div class="md-contact-avatar">              <img                   ng-src="{{$chip[$mdContactChipsCtrl.contactImage]}}"                  alt="{{$chip[$mdContactChipsCtrl.contactName]}}"                  ng-if="$chip[$mdContactChipsCtrl.contactImage]" />            </div>            <div class="md-contact-name">              {{$chip[$mdContactChipsCtrl.contactName]}}            </div>          </md-chip-template>      </md-chips>'}(),function(){!function(){function e(){return{template:function(e,t){var n=t.hasOwnProperty("ngIf")?"":'ng-if="calendarCtrl.isInitialized"',o='<div ng-switch="calendarCtrl.currentView" '+n+'><md-calendar-year ng-switch-when="year"></md-calendar-year><md-calendar-month ng-switch-default></md-calendar-month></div>';return o},scope:{minDate:"=mdMinDate",maxDate:"=mdMaxDate",dateFilter:"=mdDateFilter",_currentView:"@mdCurrentView"},require:["ngModel","mdCalendar"],controller:n,controllerAs:"calendarCtrl",bindToController:!0,link:function(e,t,n,o){var i=o[0],r=o[1];r.configureNgModel(i)}}}function n(e,n,o,r,a,d,s,l,c){d(e),this.$element=e,this.$scope=n,this.dateUtil=o,this.$mdUtil=r,this.keyCode=a.KEY_CODE,this.$$rAF=s,this.$mdDateLocale=c,this.today=this.dateUtil.createDateAtMidnight(),this.ngModelCtrl=null,this.SELECTED_DATE_CLASS="md-calendar-selected-date",this.TODAY_CLASS="md-calendar-date-today",this.FOCUSED_DATE_CLASS="md-focus",this.id=i++,this.displayDate=null,this.selectedDate=null,this.firstRenderableDate=null,this.lastRenderableDate=null,this.isInitialized=!1,this.width=0,this.scrollbarWidth=0,l.tabindex||e.attr("tabindex","-1");var m,u=t.bind(this,this.handleKeyEvent);m=e.parent().hasClass("md-datepicker-calendar")?t.element(document.body):e,m.on("keydown",u),n.$on("$destroy",function(){m.off("keydown",u)}),1===t.version.major&&t.version.minor<=4&&this.$onInit()}n.$inject=["$element","$scope","$$mdDateUtil","$mdUtil","$mdConstant","$mdTheming","$$rAF","$attrs","$mdDateLocale"],t.module("material.components.datepicker").directive("mdCalendar",e);var o=340,i=0;n.prototype.$onInit=function(){this.currentView=this._currentView||"month";var e=this.$mdDateLocale;this.minDate&&this.minDate>e.firstRenderableDate?this.firstRenderableDate=this.minDate:this.firstRenderableDate=e.firstRenderableDate,this.maxDate&&this.maxDate<e.lastRenderableDate?this.lastRenderableDate=this.maxDate:this.lastRenderableDate=e.lastRenderableDate},n.prototype.configureNgModel=function(e){var t=this;t.ngModelCtrl=e,t.$mdUtil.nextTick(function(){t.isInitialized=!0}),e.$render=function(){var e=this.$viewValue;t.$scope.$broadcast("md-calendar-parent-changed",e),t.selectedDate||(t.selectedDate=e),t.displayDate||(t.displayDate=t.selectedDate||t.today)}},n.prototype.setNgModelValue=function(e){var t=this.dateUtil.createDateAtMidnight(e);return this.focus(t),this.$scope.$emit("md-calendar-change",t),this.ngModelCtrl.$setViewValue(t),this.ngModelCtrl.$render(),t},n.prototype.setCurrentView=function(e,n){var o=this;o.$mdUtil.nextTick(function(){o.currentView=e,n&&(o.displayDate=t.isDate(n)?n:new Date(n))})},n.prototype.focus=function(e){if(this.dateUtil.isValidDate(e)){var t=this.$element[0].querySelector(".md-focus");t&&t.classList.remove(this.FOCUSED_DATE_CLASS);var n=this.getDateId(e,this.currentView),o=document.getElementById(n);o&&(o.classList.add(this.FOCUSED_DATE_CLASS),o.focus(),this.displayDate=e)}else{var i=this.$element[0].querySelector("[ng-switch]");i&&i.focus()}},n.prototype.getActionFromKeyEvent=function(e){var t=this.keyCode;switch(e.which){case t.ENTER:return"select";case t.RIGHT_ARROW:return"move-right";case t.LEFT_ARROW:return"move-left";case t.DOWN_ARROW:return e.metaKey?"move-page-down":"move-row-down";case t.UP_ARROW:return e.metaKey?"move-page-up":"move-row-up";case t.PAGE_DOWN:return"move-page-down";case t.PAGE_UP:return"move-page-up";case t.HOME:return"start";case t.END:return"end";default:return null}},n.prototype.handleKeyEvent=function(e){var t=this;this.$scope.$apply(function(){if(e.which==t.keyCode.ESCAPE||e.which==t.keyCode.TAB)return t.$scope.$emit("md-calendar-close"),void(e.which==t.keyCode.TAB&&e.preventDefault());var n=t.getActionFromKeyEvent(e);n&&(e.preventDefault(),e.stopPropagation(),t.$scope.$broadcast("md-calendar-parent-action",n))})},n.prototype.hideVerticalScrollbar=function(e){function t(){var t=n.width||o,i=n.scrollbarWidth,a=e.calendarScroller;r.style.width=t+"px",a.style.width=t+i+"px",a.style.paddingRight=i+"px"}var n=this,i=e.$element[0],r=i.querySelector(".md-calendar-scroll-mask");n.width>0?t():n.$$rAF(function(){var o=e.calendarScroller;n.scrollbarWidth=o.offsetWidth-o.clientWidth,n.width=i.querySelector("table").offsetWidth,t()})},n.prototype.getDateId=function(e,t){if(!t)throw new Error("A namespace for the date id has to be specified.");return["md",this.id,t,e.getFullYear(),e.getMonth(),e.getDate()].join("-")},n.prototype.updateVirtualRepeat=function(){var e=this.$scope,t=e.$on("$md-resize-enable",function(){e.$$phase||e.$apply(),t()})}}()}(),function(){!function(){function e(){return{template:'<table aria-hidden="true" class="md-calendar-day-header"><thead></thead></table><div class="md-calendar-scroll-mask"><md-virtual-repeat-container class="md-calendar-scroll-container" md-offset-size="'+(i-o)+'"><table role="grid" tabindex="0" class="md-calendar" aria-readonly="true"><tbody md-calendar-month-body role="rowgroup" md-virtual-repeat="i in monthCtrl.items" md-month-offset="$index" class="md-calendar-month" md-start-index="monthCtrl.getSelectedMonthIndex()" md-item-size="'+o+'"><tr aria-hidden="true" style="height:'+o+'px;"></tr></tbody></table></md-virtual-repeat-container></div>',require:["^^mdCalendar","mdCalendarMonth"],controller:n,controllerAs:"monthCtrl",bindToController:!0,link:function(e,t,n,o){var i=o[0],r=o[1];r.initialize(i)}}}function n(e,t,n,o,i,r){this.$element=e,this.$scope=t,this.$animate=n,this.$q=o,this.dateUtil=i,this.dateLocale=r,this.calendarScroller=e[0].querySelector(".md-virtual-repeat-scroller"),this.isInitialized=!1,this.isMonthTransitionInProgress=!1;var a=this;this.cellClickHandler=function(){var e=i.getTimestampFromNode(this);a.$scope.$apply(function(){a.calendarCtrl.setNgModelValue(e)})},this.headerClickHandler=function(){a.calendarCtrl.setCurrentView("year",i.getTimestampFromNode(this))}}n.$inject=["$element","$scope","$animate","$q","$$mdDateUtil","$mdDateLocale"],t.module("material.components.datepicker").directive("mdCalendarMonth",e);var o=265,i=45;n.prototype.initialize=function(e){this.items={length:this.dateUtil.getMonthDistance(e.firstRenderableDate,e.lastRenderableDate)+2},this.calendarCtrl=e,this.attachScopeListeners(),e.updateVirtualRepeat(),e.ngModelCtrl&&e.ngModelCtrl.$render()},n.prototype.getSelectedMonthIndex=function(){var e=this.calendarCtrl;return this.dateUtil.getMonthDistance(e.firstRenderableDate,e.displayDate||e.selectedDate||e.today)},n.prototype.changeSelectedDate=function(e){var t=this,n=t.calendarCtrl,o=n.selectedDate;n.selectedDate=e,this.changeDisplayDate(e).then(function(){var t=n.SELECTED_DATE_CLASS,i="month";if(o){var r=document.getElementById(n.getDateId(o,i));r&&(r.classList.remove(t),r.setAttribute("aria-selected","false"))}if(e){var a=document.getElementById(n.getDateId(e,i));a&&(a.classList.add(t),a.setAttribute("aria-selected","true"))}})},n.prototype.changeDisplayDate=function(e){if(!this.isInitialized)return this.buildWeekHeader(),
this.calendarCtrl.hideVerticalScrollbar(this),this.isInitialized=!0,this.$q.when();if(!this.dateUtil.isValidDate(e)||this.isMonthTransitionInProgress)return this.$q.when();this.isMonthTransitionInProgress=!0;var t=this.animateDateChange(e);this.calendarCtrl.displayDate=e;var n=this;return t.then(function(){n.isMonthTransitionInProgress=!1}),t},n.prototype.animateDateChange=function(e){if(this.dateUtil.isValidDate(e)){var t=this.dateUtil.getMonthDistance(this.calendarCtrl.firstRenderableDate,e);this.calendarScroller.scrollTop=t*o}return this.$q.when()},n.prototype.buildWeekHeader=function(){for(var e=this.dateLocale.firstDayOfWeek,t=this.dateLocale.shortDays,n=document.createElement("tr"),o=0;o<7;o++){var i=document.createElement("th");i.textContent=t[(o+e)%7],n.appendChild(i)}this.$element.find("thead").append(n)},n.prototype.attachScopeListeners=function(){var e=this;e.$scope.$on("md-calendar-parent-changed",function(t,n){e.changeSelectedDate(n)}),e.$scope.$on("md-calendar-parent-action",t.bind(this,this.handleKeyEvent))},n.prototype.handleKeyEvent=function(e,t){var n=this.calendarCtrl,o=n.displayDate;if("select"===t)n.setNgModelValue(o);else{var i=null,r=this.dateUtil;switch(t){case"move-right":i=r.incrementDays(o,1);break;case"move-left":i=r.incrementDays(o,-1);break;case"move-page-down":i=r.incrementMonths(o,1);break;case"move-page-up":i=r.incrementMonths(o,-1);break;case"move-row-down":i=r.incrementDays(o,7);break;case"move-row-up":i=r.incrementDays(o,-7);break;case"start":i=r.getFirstDateOfMonth(o);break;case"end":i=r.getLastDateOfMonth(o)}i&&(i=this.dateUtil.clampDate(i,n.minDate,n.maxDate),this.changeDisplayDate(i).then(function(){n.focus(i)}))}}}()}(),function(){!function(){function e(e,o){var i=e('<md-icon md-svg-src="'+o.mdTabsArrow+'"></md-icon>')({})[0];return{require:["^^mdCalendar","^^mdCalendarMonth","mdCalendarMonthBody"],scope:{offset:"=mdMonthOffset"},controller:n,controllerAs:"mdMonthBodyCtrl",bindToController:!0,link:function(e,n,o,r){var a=r[0],d=r[1],s=r[2];s.calendarCtrl=a,s.monthCtrl=d,s.arrowIcon=i.cloneNode(!0),e.$watch(function(){return s.offset},function(e){t.isNumber(e)&&s.generateContent()})}}}function n(e,t,n){this.$element=e,this.dateUtil=t,this.dateLocale=n,this.monthCtrl=null,this.calendarCtrl=null,this.offset=null,this.focusAfterAppend=null}e.$inject=["$compile","$$mdSvgRegistry"],n.$inject=["$element","$$mdDateUtil","$mdDateLocale"],t.module("material.components.datepicker").directive("mdCalendarMonthBody",e),n.prototype.generateContent=function(){var e=this.dateUtil.incrementMonths(this.calendarCtrl.firstRenderableDate,this.offset);this.$element.empty().append(this.buildCalendarForMonth(e)),this.focusAfterAppend&&(this.focusAfterAppend.classList.add(this.calendarCtrl.FOCUSED_DATE_CLASS),this.focusAfterAppend.focus(),this.focusAfterAppend=null)},n.prototype.buildDateCell=function(e){var t=this.monthCtrl,n=this.calendarCtrl,o=document.createElement("td");if(o.tabIndex=-1,o.classList.add("md-calendar-date"),o.setAttribute("role","gridcell"),e){o.setAttribute("tabindex","-1"),o.setAttribute("aria-label",this.dateLocale.longDateFormatter(e)),o.id=n.getDateId(e,"month"),o.setAttribute("data-timestamp",e.getTime()),this.dateUtil.isSameDay(e,n.today)&&o.classList.add(n.TODAY_CLASS),this.dateUtil.isValidDate(n.selectedDate)&&this.dateUtil.isSameDay(e,n.selectedDate)&&(o.classList.add(n.SELECTED_DATE_CLASS),o.setAttribute("aria-selected","true"));var i=this.dateLocale.dates[e.getDate()];if(this.isDateEnabled(e)){var r=document.createElement("span");r.classList.add("md-calendar-date-selection-indicator"),r.textContent=i,o.appendChild(r),o.addEventListener("click",t.cellClickHandler),n.displayDate&&this.dateUtil.isSameDay(e,n.displayDate)&&(this.focusAfterAppend=o)}else o.classList.add("md-calendar-date-disabled"),o.textContent=i}return o},n.prototype.isDateEnabled=function(e){return this.dateUtil.isDateWithinRange(e,this.calendarCtrl.minDate,this.calendarCtrl.maxDate)&&(!t.isFunction(this.calendarCtrl.dateFilter)||this.calendarCtrl.dateFilter(e))},n.prototype.buildDateRow=function(e){var t=document.createElement("tr");return t.setAttribute("role","row"),t.setAttribute("aria-label",this.dateLocale.weekNumberFormatter(e)),t},n.prototype.buildCalendarForMonth=function(e){var t=this.dateUtil.isValidDate(e)?e:new Date,n=this.dateUtil.getFirstDateOfMonth(t),o=this.getLocaleDay_(n),i=this.dateUtil.getNumberOfDaysInMonth(t),r=document.createDocumentFragment(),a=1,d=this.buildDateRow(a);r.appendChild(d);var s=this.offset===this.monthCtrl.items.length-1,l=0,c=document.createElement("td"),m=document.createElement("span");if(m.textContent=this.dateLocale.monthHeaderFormatter(t),c.appendChild(m),c.classList.add("md-calendar-month-label"),this.calendarCtrl.maxDate&&n>this.calendarCtrl.maxDate?c.classList.add("md-calendar-month-label-disabled"):(c.addEventListener("click",this.monthCtrl.headerClickHandler),c.setAttribute("data-timestamp",n.getTime()),c.setAttribute("aria-label",this.dateLocale.monthFormatter(t)),c.appendChild(this.arrowIcon.cloneNode(!0))),o<=2){c.setAttribute("colspan","7");var u=this.buildDateRow();if(u.appendChild(c),r.insertBefore(u,d),s)return r}else l=3,c.setAttribute("colspan","3"),d.appendChild(c);for(var p=l;p<o;p++)d.appendChild(this.buildDateCell());for(var h=o,f=n,g=1;g<=i;g++){if(7===h){if(s)return r;h=0,a++,d=this.buildDateRow(a),r.appendChild(d)}f.setDate(g);var b=this.buildDateCell(f);d.appendChild(b),h++}for(;d.childNodes.length<7;)d.appendChild(this.buildDateCell());for(;r.childNodes.length<6;){for(var v=this.buildDateRow(),E=0;E<7;E++)v.appendChild(this.buildDateCell());r.appendChild(v)}return r},n.prototype.getLocaleDay_=function(e){return(e.getDay()+(7-this.dateLocale.firstDayOfWeek))%7}}()}(),function(){!function(){function e(){return{template:'<div class="md-calendar-scroll-mask"><md-virtual-repeat-container class="md-calendar-scroll-container"><table role="grid" tabindex="0" class="md-calendar" aria-readonly="true"><tbody md-calendar-year-body role="rowgroup" md-virtual-repeat="i in yearCtrl.items" md-year-offset="$index" class="md-calendar-year" md-start-index="yearCtrl.getFocusedYearIndex()" md-item-size="'+o+'"><tr aria-hidden="true" style="height:'+o+'px;"></tr></tbody></table></md-virtual-repeat-container></div>',require:["^^mdCalendar","mdCalendarYear"],controller:n,controllerAs:"yearCtrl",bindToController:!0,link:function(e,t,n,o){var i=o[0],r=o[1];r.initialize(i)}}}function n(e,t,n,o,i){this.$element=e,this.$scope=t,this.$animate=n,this.$q=o,this.dateUtil=i,this.calendarScroller=e[0].querySelector(".md-virtual-repeat-scroller"),this.isInitialized=!1,this.isMonthTransitionInProgress=!1;var r=this;this.cellClickHandler=function(){r.calendarCtrl.setCurrentView("month",i.getTimestampFromNode(this))}}n.$inject=["$element","$scope","$animate","$q","$$mdDateUtil"],t.module("material.components.datepicker").directive("mdCalendarYear",e);var o=88;n.prototype.initialize=function(e){this.items={length:this.dateUtil.getYearDistance(e.firstRenderableDate,e.lastRenderableDate)+1},this.calendarCtrl=e,this.attachScopeListeners(),e.updateVirtualRepeat(),e.ngModelCtrl&&e.ngModelCtrl.$render()},n.prototype.getFocusedYearIndex=function(){var e=this.calendarCtrl;return this.dateUtil.getYearDistance(e.firstRenderableDate,e.displayDate||e.selectedDate||e.today)},n.prototype.changeDate=function(e){if(!this.isInitialized)return this.calendarCtrl.hideVerticalScrollbar(this),this.isInitialized=!0,this.$q.when();if(this.dateUtil.isValidDate(e)&&!this.isMonthTransitionInProgress){var t=this,n=this.animateDateChange(e);return t.isMonthTransitionInProgress=!0,t.calendarCtrl.displayDate=e,n.then(function(){t.isMonthTransitionInProgress=!1})}},n.prototype.animateDateChange=function(e){if(this.dateUtil.isValidDate(e)){var t=this.dateUtil.getYearDistance(this.calendarCtrl.firstRenderableDate,e);this.calendarScroller.scrollTop=t*o}return this.$q.when()},n.prototype.handleKeyEvent=function(e,t){var n=this.calendarCtrl,o=n.displayDate;if("select"===t)this.changeDate(o).then(function(){n.setCurrentView("month",o),n.focus(o)});else{var i=null,r=this.dateUtil;switch(t){case"move-right":i=r.incrementMonths(o,1);break;case"move-left":i=r.incrementMonths(o,-1);break;case"move-row-down":i=r.incrementMonths(o,6);break;case"move-row-up":i=r.incrementMonths(o,-6)}if(i){var a=n.minDate?r.getFirstDateOfMonth(n.minDate):null,d=n.maxDate?r.getFirstDateOfMonth(n.maxDate):null;i=r.getFirstDateOfMonth(this.dateUtil.clampDate(i,a,d)),this.changeDate(i).then(function(){n.focus(i)})}}},n.prototype.attachScopeListeners=function(){var e=this;e.$scope.$on("md-calendar-parent-changed",function(t,n){e.changeDate(n)}),e.$scope.$on("md-calendar-parent-action",t.bind(e,e.handleKeyEvent))}}()}(),function(){!function(){function e(){return{require:["^^mdCalendar","^^mdCalendarYear","mdCalendarYearBody"],scope:{offset:"=mdYearOffset"},controller:n,controllerAs:"mdYearBodyCtrl",bindToController:!0,link:function(e,n,o,i){var r=i[0],a=i[1],d=i[2];d.calendarCtrl=r,d.yearCtrl=a,e.$watch(function(){return d.offset},function(e){t.isNumber(e)&&d.generateContent()})}}}function n(e,t,n){this.$element=e,this.dateUtil=t,this.dateLocale=n,this.calendarCtrl=null,this.yearCtrl=null,this.offset=null,this.focusAfterAppend=null}n.$inject=["$element","$$mdDateUtil","$mdDateLocale"],t.module("material.components.datepicker").directive("mdCalendarYearBody",e),n.prototype.generateContent=function(){var e=this.dateUtil.incrementYears(this.calendarCtrl.firstRenderableDate,this.offset);this.$element.empty().append(this.buildCalendarForYear(e)),this.focusAfterAppend&&(this.focusAfterAppend.classList.add(this.calendarCtrl.FOCUSED_DATE_CLASS),this.focusAfterAppend.focus(),this.focusAfterAppend=null)},n.prototype.buildMonthCell=function(e,t){var n=this.calendarCtrl,o=this.yearCtrl,i=this.buildBlankCell(),r=new Date(e,t,1);i.setAttribute("aria-label",this.dateLocale.monthFormatter(r)),i.id=n.getDateId(r,"year"),i.setAttribute("data-timestamp",r.getTime()),this.dateUtil.isSameMonthAndYear(r,n.today)&&i.classList.add(n.TODAY_CLASS),this.dateUtil.isValidDate(n.selectedDate)&&this.dateUtil.isSameMonthAndYear(r,n.selectedDate)&&(i.classList.add(n.SELECTED_DATE_CLASS),i.setAttribute("aria-selected","true"));var a=this.dateLocale.shortMonths[t];if(this.dateUtil.isMonthWithinRange(r,n.minDate,n.maxDate)){var d=document.createElement("span");d.classList.add("md-calendar-date-selection-indicator"),d.textContent=a,i.appendChild(d),i.addEventListener("click",o.cellClickHandler),n.displayDate&&this.dateUtil.isSameMonthAndYear(r,n.displayDate)&&(this.focusAfterAppend=i)}else i.classList.add("md-calendar-date-disabled"),i.textContent=a;return i},n.prototype.buildBlankCell=function(){var e=document.createElement("td");return e.tabIndex=-1,e.classList.add("md-calendar-date"),e.setAttribute("role","gridcell"),e.setAttribute("tabindex","-1"),e},n.prototype.buildCalendarForYear=function(e){var t,n=e.getFullYear(),o=document.createDocumentFragment(),i=document.createElement("tr"),r=document.createElement("td");for(r.className="md-calendar-month-label",r.textContent=n,i.appendChild(r),t=0;t<6;t++)i.appendChild(this.buildMonthCell(n,t));o.appendChild(i);var a=document.createElement("tr");for(a.appendChild(this.buildBlankCell()),t=6;t<12;t++)a.appendChild(this.buildMonthCell(n,t));return o.appendChild(a),o}}()}(),function(){!function(){t.module("material.components.datepicker").config(["$provide",function(e){function t(){this.months=null,this.shortMonths=null,this.days=null,this.shortDays=null,this.dates=null,this.firstDayOfWeek=0,this.formatDate=null,this.parseDate=null,this.monthHeaderFormatter=null,this.weekNumberFormatter=null,this.longDateFormatter=null,this.msgCalendar="",this.msgOpenCalendar=""}t.prototype.$get=function(e,t){function n(e,n){if(!e)return"";var o=e.toLocaleTimeString(),i=e;return 0!==e.getHours()||o.indexOf("11:")===-1&&o.indexOf("23:")===-1||(i=new Date(e.getFullYear(),e.getMonth(),e.getDate(),1,0,0)),t("date")(i,"M/d/yyyy",n)}function o(e){return new Date(e)}function i(e){e=e.trim();var t=/^(([a-zA-Z]{3,}|[0-9]{1,4})([ \.,]+|[\/\-])){2}([a-zA-Z]{3,}|[0-9]{1,4})$/;return t.test(e)}function r(e){return g.shortMonths[e.getMonth()]+" "+e.getFullYear()}function a(e){return g.months[e.getMonth()]+" "+e.getFullYear()}function d(e){return"Week "+e}function s(e){return[g.days[e.getDay()],g.months[e.getMonth()],g.dates[e.getDate()],e.getFullYear()].join(" ")}for(var l=e.DATETIME_FORMATS.SHORTDAY.map(function(e){return e.substring(0,1)}),c=Array(32),m=1;m<=31;m++)c[m]=m;var u="Calendar",p="Open calendar",h=new Date(1880,0,1),f=new Date(h.getFullYear()+250,0,1),g={months:this.months||e.DATETIME_FORMATS.MONTH,shortMonths:this.shortMonths||e.DATETIME_FORMATS.SHORTMONTH,days:this.days||e.DATETIME_FORMATS.DAY,shortDays:this.shortDays||l,dates:this.dates||c,firstDayOfWeek:this.firstDayOfWeek||0,formatDate:this.formatDate||n,parseDate:this.parseDate||o,isDateComplete:this.isDateComplete||i,monthHeaderFormatter:this.monthHeaderFormatter||r,monthFormatter:this.monthFormatter||a,weekNumberFormatter:this.weekNumberFormatter||d,longDateFormatter:this.longDateFormatter||s,msgCalendar:this.msgCalendar||u,msgOpenCalendar:this.msgOpenCalendar||p,firstRenderableDate:this.firstRenderableDate||h,lastRenderableDate:this.lastRenderableDate||f};return g},t.prototype.$get.$inject=["$locale","$filter"],e.provider("$mdDateLocale",new t)}])}()}(),function(){!function(){t.module("material.components.datepicker").factory("$$mdDateUtil",function(){function e(e){return new Date(e.getFullYear(),e.getMonth(),1)}function n(e){return new Date(e.getFullYear(),e.getMonth()+1,0).getDate()}function o(e){return new Date(e.getFullYear(),e.getMonth()+1,1)}function i(e){return new Date(e.getFullYear(),e.getMonth()-1,1)}function r(e,t){return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()}function a(e,t){return e.getDate()==t.getDate()&&r(e,t)}function d(e,t){var n=o(e);return r(n,t)}function s(e,t){var n=i(e);return r(t,n)}function l(e,t){return b((e.getTime()+t.getTime())/2)}function c(t){var n=e(t);return Math.floor((n.getDay()+t.getDate()-1)/7)}function m(e,t){return new Date(e.getFullYear(),e.getMonth(),e.getDate()+t)}function u(e,t){var o=new Date(e.getFullYear(),e.getMonth()+t,1),i=n(o);return i<e.getDate()?o.setDate(i):o.setDate(e.getDate()),o}function p(e,t){return 12*(t.getFullYear()-e.getFullYear())+(t.getMonth()-e.getMonth())}function h(e){return new Date(e.getFullYear(),e.getMonth(),n(e))}function f(e){return e&&e.getTime&&!isNaN(e.getTime())}function g(e){f(e)&&e.setHours(0,0,0,0)}function b(e){var n;return n=t.isUndefined(e)?new Date:new Date(e),g(n),n}function v(e,t,n){var o=b(e),i=f(t)?b(t):null,r=f(n)?b(n):null;return(!i||i<=o)&&(!r||r>=o)}function E(e,t){return u(e,12*t)}function $(e,t){return t.getFullYear()-e.getFullYear()}function C(e,t,n){var o=e;return t&&e<t&&(o=new Date(t.getTime())),n&&e>n&&(o=new Date(n.getTime())),o}function y(e){if(e&&e.hasAttribute("data-timestamp"))return Number(e.getAttribute("data-timestamp"))}function M(e,t,n){var o=e.getMonth(),i=e.getFullYear();return(!t||t.getFullYear()<i||t.getMonth()<=o)&&(!n||n.getFullYear()>i||n.getMonth()>=o)}return{getFirstDateOfMonth:e,getNumberOfDaysInMonth:n,getDateInNextMonth:o,getDateInPreviousMonth:i,isInNextMonth:d,isInPreviousMonth:s,getDateMidpoint:l,isSameMonthAndYear:r,getWeekOfMonth:c,incrementDays:m,incrementMonths:u,getLastDateOfMonth:h,isSameDay:a,getMonthDistance:p,isValidDate:f,setDateTimeToMidnight:g,createDateAtMidnight:b,isDateWithinRange:v,incrementYears:E,getYearDistance:$,clampDate:C,getTimestampFromNode:y,isMonthWithinRange:M}})}()}(),function(){!function(){function n(e,n,i,r){return{template:function(t,n){var o=n.mdHideIcons,i=n.ariaLabel||n.mdPlaceholder,r="all"===o||"calendar"===o?"":'<md-button class="md-datepicker-button md-icon-button" type="button" tabindex="-1" aria-hidden="true" ng-click="ctrl.openCalendarPane($event)"><md-icon class="md-datepicker-calendar-icon" aria-label="md-calendar" md-svg-src="'+e.mdCalendar+'"></md-icon></md-button>',a="";return"all"!==o&&"triangle"!==o&&(a='<md-button type="button" md-no-ink class="md-datepicker-triangle-button md-icon-button" ng-click="ctrl.openCalendarPane($event)" aria-label="{{::ctrl.locale.msgOpenCalendar}}"><div class="md-datepicker-expand-triangle"></div></md-button>',t.addClass(l)),r+'<div class="md-datepicker-input-container" ng-class="{\'md-datepicker-focused\': ctrl.isFocused}"><input '+(i?'aria-label="'+i+'" ':"")+'class="md-datepicker-input" aria-haspopup="true" aria-expanded="{{ctrl.isCalendarOpen}}" ng-focus="ctrl.setFocused(true)" ng-blur="ctrl.setFocused(false)"> '+a+'</div><div class="md-datepicker-calendar-pane md-whiteframe-z1" id="{{::ctrl.calendarPaneId}}"><div class="md-datepicker-input-mask"><div class="md-datepicker-input-mask-opaque"></div></div><div class="md-datepicker-calendar"><md-calendar role="dialog" aria-label="{{::ctrl.locale.msgCalendar}}" md-current-view="{{::ctrl.currentView}}"md-min-date="ctrl.minDate"md-max-date="ctrl.maxDate"md-date-filter="ctrl.dateFilter"ng-model="ctrl.date" ng-if="ctrl.isCalendarOpen"></md-calendar></div></div>'},require:["ngModel","mdDatepicker","?^mdInputContainer","?^form"],scope:{minDate:"=mdMinDate",maxDate:"=mdMaxDate",placeholder:"@mdPlaceholder",currentView:"@mdCurrentView",dateFilter:"=mdDateFilter",isOpen:"=?mdIsOpen",debounceInterval:"=mdDebounceInterval",dateLocale:"=mdDateLocale"},controller:o,controllerAs:"ctrl",bindToController:!0,link:function(e,o,a,l){var c=l[0],m=l[1],u=l[2],p=l[3],h=n.parseAttributeBoolean(a.mdNoAsterisk);if(m.configureNgModel(c,u,r),u){var f=o[0].querySelector(".md-errors-spacer");f&&o.after(t.element("<div>").append(f)),u.setHasPlaceholder(a.mdPlaceholder),u.input=o,u.element.addClass(d).toggleClass(s,"calendar"!==a.mdHideIcons&&"all"!==a.mdHideIcons),u.label?h||a.$observe("required",function(e){u.label.toggleClass("md-required",!!e)}):i.expect(o,"aria-label",a.mdPlaceholder),e.$watch(u.isErrorGetter||function(){return c.$invalid&&(c.$touched||p&&p.$submitted)},u.setInvalid)}else if(p)var g=e.$watch(function(){return p.$submitted},function(e){e&&(m.updateErrorState(),g())})}}}function o(n,o,i,r,a,d,s,l,c,m,u){this.$window=r,this.dateUtil=c,this.$mdConstant=a,this.$mdUtil=s,this.$$rAF=m,this.$mdDateLocale=l,this.documentElement=t.element(document.documentElement),this.ngModelCtrl=null,this.inputElement=o[0].querySelector("input"),this.ngInputElement=t.element(this.inputElement),this.inputContainer=o[0].querySelector(".md-datepicker-input-container"),this.calendarPane=o[0].querySelector(".md-datepicker-calendar-pane"),this.calendarButton=o[0].querySelector(".md-datepicker-button"),this.inputMask=t.element(o[0].querySelector(".md-datepicker-input-mask-opaque")),this.$element=o,this.$attrs=i,this.$scope=n,this.date=null,this.isFocused=!1,this.isDisabled,this.setDisabled(o[0].disabled||t.isString(i.disabled)),this.isCalendarOpen=!1,this.openOnFocus=i.hasOwnProperty("mdOpenOnFocus"),this.mdInputContainer=null,this.calendarPaneOpenedFrom=null,this.calendarPaneId="md-date-pane-"+s.nextUid(),this.bodyClickHandler=t.bind(this,this.handleBodyClick),this.windowEventName=p.test(navigator.userAgent||navigator.vendor||e.opera)?"orientationchange":"resize",this.windowEventHandler=s.debounce(t.bind(this,this.closeCalendarPane),100),this.windowBlurHandler=t.bind(this,this.handleWindowBlur),this.ngDateFilter=u("date"),this.leftMargin=20,this.topMargin=null,i.tabindex?(this.ngInputElement.attr("tabindex",i.tabindex),i.$set("tabindex",null)):i.$set("tabindex","-1"),i.$set("aria-owns",this.calendarPaneId),d(o),d(t.element(this.calendarPane));var h=this;n.$on("$destroy",function(){h.detachCalendarPane()}),i.mdIsOpen&&n.$watch("ctrl.isOpen",function(e){e?h.openCalendarPane({target:h.inputElement}):h.closeCalendarPane()}),1===t.version.major&&t.version.minor<=4&&this.$onInit()}o.$inject=["$scope","$element","$attrs","$window","$mdConstant","$mdTheming","$mdUtil","$mdDateLocale","$$mdDateUtil","$$rAF","$filter"],n.$inject=["$$mdSvgRegistry","$mdUtil","$mdAria","inputDirective"],t.module("material.components.datepicker").directive("mdDatepicker",n);var i=3,r="md-datepicker-invalid",a="md-datepicker-open",d="_md-datepicker-floating-label",s="_md-datepicker-has-calendar-icon",l="_md-datepicker-has-triangle-icon",c=500,m=368,u=360,p=/ipad|iphone|ipod|android/i;o.prototype.$onInit=function(){this.locale=this.dateLocale?t.extend({},this.$mdDateLocale,this.dateLocale):this.$mdDateLocale,this.installPropertyInterceptors(),this.attachChangeListeners(),this.attachInteractionListeners()},o.prototype.configureNgModel=function(e,n,o){this.ngModelCtrl=e,this.mdInputContainer=n,this.$attrs.$set("type","date"),o[0].link.pre(this.$scope,{on:t.noop,val:t.noop,0:{}},this.$attrs,[e]);var i=this;i.ngModelCtrl.$formatters.push(function(e){if(e&&!(e instanceof Date))throw Error("The ng-model for md-datepicker must be a Date instance. Currently the model is a: "+typeof e);return i.onExternalChange(e),e}),e.$viewChangeListeners.unshift(t.bind(this,this.updateErrorState));var r=i.$mdUtil.getModelOption(e,"updateOn");r&&this.ngInputElement.on(r,t.bind(this.$element,this.$element.triggerHandler,r))},o.prototype.attachChangeListeners=function(){var e=this;e.$scope.$on("md-calendar-change",function(t,n){e.setModelValue(n),e.onExternalChange(n),e.closeCalendarPane()}),e.ngInputElement.on("input",t.bind(e,e.resizeInputElement));var n=t.isDefined(this.debounceInterval)?this.debounceInterval:c;e.ngInputElement.on("input",e.$mdUtil.debounce(e.handleInputEvent,n,e))},o.prototype.attachInteractionListeners=function(){var e=this,n=this.$scope,o=this.$mdConstant.KEY_CODE;e.ngInputElement.on("keydown",function(t){t.altKey&&t.keyCode==o.DOWN_ARROW&&(e.openCalendarPane(t),n.$digest())}),e.openOnFocus&&(e.ngInputElement.on("focus",t.bind(e,e.openCalendarPane)),t.element(e.$window).on("blur",e.windowBlurHandler),n.$on("$destroy",function(){t.element(e.$window).off("blur",e.windowBlurHandler)})),n.$on("md-calendar-close",function(){e.closeCalendarPane()})},o.prototype.installPropertyInterceptors=function(){var e=this;if(this.$attrs.ngDisabled){var t=this.$scope.$parent;t&&t.$watch(this.$attrs.ngDisabled,function(t){e.setDisabled(t)})}Object.defineProperty(this,"placeholder",{get:function(){return e.inputElement.placeholder},set:function(t){e.inputElement.placeholder=t||""}})},o.prototype.setDisabled=function(e){this.isDisabled=e,this.inputElement.disabled=e,this.calendarButton&&(this.calendarButton.disabled=e)},o.prototype.updateErrorState=function(e){var n=e||this.date;if(this.clearErrorState(),this.dateUtil.isValidDate(n)){if(n=this.dateUtil.createDateAtMidnight(n),this.dateUtil.isValidDate(this.minDate)){var o=this.dateUtil.createDateAtMidnight(this.minDate);this.ngModelCtrl.$setValidity("mindate",n>=o)}if(this.dateUtil.isValidDate(this.maxDate)){var i=this.dateUtil.createDateAtMidnight(this.maxDate);this.ngModelCtrl.$setValidity("maxdate",n<=i)}t.isFunction(this.dateFilter)&&this.ngModelCtrl.$setValidity("filtered",this.dateFilter(n))}else this.ngModelCtrl.$setValidity("valid",null==n);t.element(this.inputContainer).toggleClass(r,!this.ngModelCtrl.$valid)},o.prototype.clearErrorState=function(){this.inputContainer.classList.remove(r),["mindate","maxdate","filtered","valid"].forEach(function(e){this.ngModelCtrl.$setValidity(e,!0)},this)},o.prototype.resizeInputElement=function(){this.inputElement.size=this.inputElement.value.length+i},o.prototype.handleInputEvent=function(){var e=this.inputElement.value,t=e?this.locale.parseDate(e):null;this.dateUtil.setDateTimeToMidnight(t);var n=""==e||this.dateUtil.isValidDate(t)&&this.locale.isDateComplete(e)&&this.isDateEnabled(t);n&&(this.setModelValue(t),this.date=t),this.updateErrorState(t)},o.prototype.isDateEnabled=function(e){return this.dateUtil.isDateWithinRange(e,this.minDate,this.maxDate)&&(!t.isFunction(this.dateFilter)||this.dateFilter(e))},o.prototype.attachCalendarPane=function(){var e=this.calendarPane,n=document.body;e.style.transform="",this.$element.addClass(a),this.mdInputContainer&&this.mdInputContainer.element.addClass(a),t.element(n).addClass("md-datepicker-is-showing");var o=this.inputContainer.getBoundingClientRect(),i=n.getBoundingClientRect();(!this.topMargin||this.topMargin<0)&&(this.topMargin=(this.inputMask.parent().prop("clientHeight")-this.ngInputElement.prop("clientHeight"))/2);var r=o.top-i.top-this.topMargin,d=o.left-i.left-this.leftMargin,s=i.top<0&&0==document.body.scrollTop?-i.top:document.body.scrollTop,l=i.left<0&&0==document.body.scrollLeft?-i.left:document.body.scrollLeft,c=s+this.$window.innerHeight,p=l+this.$window.innerWidth;if(this.inputMask.css({position:"absolute",left:this.leftMargin+"px",top:this.topMargin+"px",width:o.width-1+"px",height:o.height-2+"px"}),d+u>p){if(p-u>0)d=p-u;else{d=l;var h=this.$window.innerWidth/u;e.style.transform="scale("+h+")"}e.classList.add("md-datepicker-pos-adjusted")}r+m>c&&c-m>s&&(r=c-m,e.classList.add("md-datepicker-pos-adjusted")),e.style.left=d+"px",e.style.top=r+"px",document.body.appendChild(e),this.$$rAF(function(){e.classList.add("md-pane-open")})},o.prototype.detachCalendarPane=function(){this.$element.removeClass(a),this.mdInputContainer&&this.mdInputContainer.element.removeClass(a),t.element(document.body).removeClass("md-datepicker-is-showing"),this.calendarPane.classList.remove("md-pane-open"),this.calendarPane.classList.remove("md-datepicker-pos-adjusted"),this.isCalendarOpen&&this.$mdUtil.enableScrolling(),this.calendarPane.parentNode&&this.calendarPane.parentNode.removeChild(this.calendarPane)},o.prototype.openCalendarPane=function(t){if(!this.isCalendarOpen&&!this.isDisabled&&!this.inputFocusedOnWindowBlur){this.isCalendarOpen=this.isOpen=!0,this.calendarPaneOpenedFrom=t.target,this.$mdUtil.disableScrollAround(this.calendarPane),this.attachCalendarPane(),this.focusCalendar(),this.evalAttr("ngFocus");var n=this;this.$mdUtil.nextTick(function(){n.documentElement.on("click touchstart",n.bodyClickHandler)},!1),e.addEventListener(this.windowEventName,this.windowEventHandler)}},o.prototype.closeCalendarPane=function(){function t(){n.isCalendarOpen=n.isOpen=!1}if(this.isCalendarOpen){var n=this;n.detachCalendarPane(),n.ngModelCtrl.$setTouched(),n.evalAttr("ngBlur"),n.documentElement.off("click touchstart",n.bodyClickHandler),e.removeEventListener(n.windowEventName,n.windowEventHandler),n.calendarPaneOpenedFrom.focus(),n.calendarPaneOpenedFrom=null,n.openOnFocus?n.$mdUtil.nextTick(t):t()}},o.prototype.getCalendarCtrl=function(){return t.element(this.calendarPane.querySelector("md-calendar")).controller("mdCalendar")},o.prototype.focusCalendar=function(){var e=this;this.$mdUtil.nextTick(function(){e.getCalendarCtrl().focus()},!1)},o.prototype.setFocused=function(e){e||this.ngModelCtrl.$setTouched(),this.openOnFocus||this.evalAttr(e?"ngFocus":"ngBlur"),this.isFocused=e},o.prototype.handleBodyClick=function(e){if(this.isCalendarOpen){var t=this.$mdUtil.getClosest(e.target,"md-calendar");t||this.closeCalendarPane(),this.$scope.$digest()}},o.prototype.handleWindowBlur=function(){this.inputFocusedOnWindowBlur=document.activeElement===this.inputElement},o.prototype.evalAttr=function(e){this.$attrs[e]&&this.$scope.$parent.$eval(this.$attrs[e])},o.prototype.setModelValue=function(e){var t=this.$mdUtil.getModelOption(this.ngModelCtrl,"timezone");this.ngModelCtrl.$setViewValue(this.ngDateFilter(e,"yyyy-MM-dd",t))},o.prototype.onExternalChange=function(e){var t=this.$mdUtil.getModelOption(this.ngModelCtrl,"timezone");this.date=e,this.inputElement.value=this.locale.formatDate(e,t),this.mdInputContainer&&this.mdInputContainer.setHasValue(!!e),this.resizeInputElement(),this.updateErrorState()}}()}(),function(){function e(e,t,n,o){function i(o,i,r){function a(){var e=i.parent();return!(!e.attr("aria-label")&&!e.text())||!(!e.parent().attr("aria-label")&&!e.parent().text())}function d(){r.mdSvgIcon||r.mdSvgSrc||(r.mdFontIcon&&i.addClass("md-font "+r.mdFontIcon),i.addClass(c))}function s(){if(!r.mdSvgIcon&&!r.mdSvgSrc){r.mdFontIcon&&(i.removeClass(l),i.addClass(r.mdFontIcon),l=r.mdFontIcon);var t=e.fontSet(r.mdFontSet);c!==t&&(i.removeClass(c),i.addClass(t),c=t)}}t(i);var l=r.mdFontIcon,c=e.fontSet(r.mdFontSet);d(),r.$observe("mdFontIcon",s),r.$observe("mdFontSet",s);var m=(i[0].getAttribute(r.$attr.mdSvgSrc),r.alt||r.mdFontIcon||r.mdSvgIcon||i.text()),u=r.$normalize(r.$attr.mdSvgIcon||r.$attr.mdSvgSrc||"");r["aria-label"]||(""===m||a()?i.text()||n.expect(i,"aria-hidden","true"):(n.expect(i,"aria-label",m),n.expect(i,"role","img"))),u&&r.$observe(u,function(t){i.empty(),t&&e(t).then(function(e){i.empty(),i.append(e)})})}return{restrict:"E",link:i}}t.module("material.components.icon").directive("mdIcon",["$mdIcon","$mdTheming","$mdAria","$sce",e])}(),function(){function n(){}function o(e,t){this.url=e,this.viewBoxSize=t||r.defaultViewBoxSize}function i(n,o,i,r,a,d){function s(e){if(e=e||"",t.isString(e)||(e=d.getTrustedUrl(e)),E[e])return i.when(c(E[e]));if(C.test(e)||y.test(e))return h(e).then(m(e));e.indexOf(":")==-1&&(e="$default:"+e);var o=n[e]?u:p;return o(e).then(m(e))}function l(e){var o=t.isUndefined(e)||!(e&&e.length);if(o)return n.defaultFontSet;var i=e;return t.forEach(n.fontSets,function(t){t.alias==e&&(i=t.fontSet||i)}),i}function c(e){var n=e.clone(),o="_cache"+a.nextUid();return n.id&&(n.id+=o),t.forEach(n.querySelectorAll("[id]"),function(e){e.id+=o}),n}function m(e){return function(t){return E[e]=f(t)?t:new g(t,n[e]),E[e].clone()}}function u(e){var t=n[e];return h(t.url).then(function(e){return new g(e,t)})}function p(e){function t(t){var n=e.slice(e.lastIndexOf(":")+1),i=t.querySelector("#"+n);return i?new g(i,d):o(e)}function o(e){var t="icon "+e+" not found";return r.warn(t),i.reject(t||e)}var a=e.substring(0,e.lastIndexOf(":"))||"$default",d=n[a];return d?h(d.url).then(t):o(e)}function h(n){function a(n){var o=y.exec(n),r=/base64/i.test(n),a=r?e.atob(o[2]):o[2];return i.when(t.element(a)[0])}function d(e){return i(function(n,i){var a=function(e){var n=t.isString(e)?e:e.message||e.data||e.statusText;r.warn(n),i(e)},d=function(o){$[e]||($[e]=t.element("<div>").append(o)[0].querySelector("svg")),n($[e])};o(e,!0).then(d,a)})}return y.test(n)?a(n):d(n)}function f(e){return t.isDefined(e.element)&&t.isDefined(e.config)}function g(e,n){e&&"svg"!=e.tagName&&(e=t.element('<svg xmlns="http://www.w3.org/2000/svg">').append(e.cloneNode(!0))[0]),e.getAttribute("xmlns")||e.setAttribute("xmlns","http://www.w3.org/2000/svg"),this.element=e,this.config=n,this.prepare()}function b(){var e=this.config?this.config.viewBoxSize:n.defaultViewBoxSize;t.forEach({fit:"",height:"100%",width:"100%",preserveAspectRatio:"xMidYMid meet",viewBox:this.element.getAttribute("viewBox")||"0 0 "+e+" "+e,focusable:!1},function(e,t){this.element.setAttribute(t,e)},this)}function v(){return this.element.cloneNode(!0)}var E={},$={},C=/[-\w@:%\+.~#?&\/\/=]{2,}\.[a-z]{2,4}\b(\/[-\w@:%\+.~#?&\/\/=]*)?/i,y=/^data:image\/svg\+xml[\s*;\w\-\=]*?(base64)?,(.*)$/i;return g.prototype={clone:v,prepare:b},s.fontSet=l,s}i.$inject=["config","$templateRequest","$q","$log","$mdUtil","$sce"],t.module("material.components.icon").constant("$$mdSvgRegistry",{mdTabsArrow:"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxnPjxwb2x5Z29uIHBvaW50cz0iMTUuNCw3LjQgMTQsNiA4LDEyIDE0LDE4IDE1LjQsMTYuNiAxMC44LDEyICIvPjwvZz48L3N2Zz4=",mdClose:"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxnPjxwYXRoIGQ9Ik0xOSA2LjQxbC0xLjQxLTEuNDEtNS41OSA1LjU5LTUuNTktNS41OS0xLjQxIDEuNDEgNS41OSA1LjU5LTUuNTkgNS41OSAxLjQxIDEuNDEgNS41OS01LjU5IDUuNTkgNS41OSAxLjQxLTEuNDEtNS41OS01LjU5eiIvPjwvZz48L3N2Zz4=",mdCancel:"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxnPjxwYXRoIGQ9Ik0xMiAyYy01LjUzIDAtMTAgNC40Ny0xMCAxMHM0LjQ3IDEwIDEwIDEwIDEwLTQuNDcgMTAtMTAtNC40Ny0xMC0xMC0xMHptNSAxMy41OWwtMS40MSAxLjQxLTMuNTktMy41OS0zLjU5IDMuNTktMS40MS0xLjQxIDMuNTktMy41OS0zLjU5LTMuNTkgMS40MS0xLjQxIDMuNTkgMy41OSAzLjU5LTMuNTkgMS40MSAxLjQxLTMuNTkgMy41OSAzLjU5IDMuNTl6Ii8+PC9nPjwvc3ZnPg==",
mdMenu:"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGQ9Ik0zLDZIMjFWOEgzVjZNMywxMUgyMVYxM0gzVjExTTMsMTZIMjFWMThIM1YxNloiIC8+PC9zdmc+",mdToggleArrow:"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDggNDgiPjxwYXRoIGQ9Ik0yNCAxNmwtMTIgMTIgMi44MyAyLjgzIDkuMTctOS4xNyA5LjE3IDkuMTcgMi44My0yLjgzeiIvPjxwYXRoIGQ9Ik0wIDBoNDh2NDhoLTQ4eiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==",mdCalendar:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTkgM2gtMVYxaC0ydjJIOFYxSDZ2Mkg1Yy0xLjExIDAtMS45OS45LTEuOTkgMkwzIDE5YzAgMS4xLjg5IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6bTAgMTZINVY4aDE0djExek03IDEwaDV2NUg3eiIvPjwvc3ZnPg==",mdChecked:"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxnPjxwYXRoIGQ9Ik05IDE2LjE3TDQuODMgMTJsLTEuNDIgMS40MUw5IDE5IDIxIDdsLTEuNDEtMS40MXoiLz48L2c+PC9zdmc+"}).provider("$mdIcon",n);var r={defaultViewBoxSize:24,defaultFontSet:"material-icons",fontSets:[]};n.prototype={icon:function(e,t,n){return e.indexOf(":")==-1&&(e="$default:"+e),r[e]=new o(t,n),this},iconSet:function(e,t,n){return r[e]=new o(t,n),this},defaultIconSet:function(e,t){var n="$default";return r[n]||(r[n]=new o(e,t)),r[n].viewBoxSize=t||r.defaultViewBoxSize,this},defaultViewBoxSize:function(e){return r.defaultViewBoxSize=e,this},fontSet:function(e,t){return r.fontSets.push({alias:e,fontSet:t||e}),this},defaultFontSet:function(e){return r.defaultFontSet=e?e:"",this},defaultIconSize:function(e){return r.defaultIconSize=e,this},$get:["$templateRequest","$q","$log","$mdUtil","$sce",function(e,t,n,o,a){return i(r,e,t,n,o,a)}]}}(),function(){function e(e,o,i,r,a,d,s,l,c){var m,u,p=a.prefixer(),h=this;this.nestLevel=parseInt(o.mdNestLevel,10)||0,this.init=function(n,o){o=o||{},m=n,u=i[0].querySelector(p.buildSelector(["ng-click","ng-mouseenter"])),u.setAttribute("aria-expanded","false"),this.isInMenuBar=o.isInMenuBar,this.nestedMenus=a.nodesToArray(m[0].querySelectorAll(".md-nested-menu")),m.on("$mdInterimElementRemove",function(){h.isOpen=!1,a.nextTick(function(){h.onIsOpenChanged(h.isOpen)})}),a.nextTick(function(){h.onIsOpenChanged(h.isOpen)});var d="menu_container_"+a.nextUid();m.attr("id",d),t.element(u).attr({"aria-owns":d,"aria-haspopup":"true"}),r.$on("$destroy",t.bind(this,function(){this.disableHoverListener(),e.destroy()})),m.on("$destroy",function(){e.destroy()})};var f,g,b=[];this.enableHoverListener=function(){b.push(s.$on("$mdMenuOpen",function(e,t){m[0].contains(t[0])&&(h.currentlyOpenMenu=t.controller("mdMenu"),h.isAlreadyOpening=!1,h.currentlyOpenMenu.registerContainerProxy(h.triggerContainerProxy.bind(h)))})),b.push(s.$on("$mdMenuClose",function(e,t){m[0].contains(t[0])&&(h.currentlyOpenMenu=n)})),g=t.element(a.nodesToArray(m[0].children[0].children)),g.on("mouseenter",h.handleMenuItemHover),g.on("mouseleave",h.handleMenuItemMouseLeave)},this.disableHoverListener=function(){for(;b.length;)b.shift()();g&&g.off("mouseenter",h.handleMenuItemHover),g&&g.off("mouseleave",h.handleMenuItemMouseLeave)},this.handleMenuItemHover=function(e){if(!h.isAlreadyOpening){var n=e.target.querySelector("md-menu")||a.getClosest(e.target,"MD-MENU");f=d(function(){if(n&&(n=t.element(n).controller("mdMenu")),h.currentlyOpenMenu&&h.currentlyOpenMenu!=n){var e=h.nestLevel+1;h.currentlyOpenMenu.close(!0,{closeTo:e}),h.isAlreadyOpening=!!n,n&&n.open()}else n&&!n.isOpen&&n.open&&(h.isAlreadyOpening=!!n,n&&n.open())},n?100:250);var o=e.currentTarget.querySelector(".md-button:not([disabled])");o&&o.focus()}},this.handleMenuItemMouseLeave=function(){f&&(d.cancel(f),f=n)},this.open=function(t){t&&t.stopPropagation(),t&&t.preventDefault(),h.isOpen||(h.enableHoverListener(),h.isOpen=!0,a.nextTick(function(){h.onIsOpenChanged(h.isOpen)}),u=u||(t?t.target:i[0]),u.setAttribute("aria-expanded","true"),r.$emit("$mdMenuOpen",i),e.show({scope:r,mdMenuCtrl:h,nestLevel:h.nestLevel,element:m,target:u,preserveElement:!0,parent:"body"})["finally"](function(){u.setAttribute("aria-expanded","false"),h.disableHoverListener()}))},this.onIsOpenChanged=function(e){e?(m.attr("aria-hidden","false"),i[0].classList.add("md-open"),t.forEach(h.nestedMenus,function(e){e.classList.remove("md-open")})):(m.attr("aria-hidden","true"),i[0].classList.remove("md-open")),r.$mdMenuIsOpen=h.isOpen},this.focusMenuContainer=function(){var e=m[0].querySelector(p.buildSelector(["md-menu-focus-target","md-autofocus"]));e||(e=m[0].querySelector(".md-button:not([disabled])")),e.focus()},this.registerContainerProxy=function(e){this.containerProxy=e},this.triggerContainerProxy=function(e){this.containerProxy&&this.containerProxy(e)},this.destroy=function(){return h.isOpen?e.destroy():l.when(!1)},this.close=function(n,o){if(h.isOpen){h.isOpen=!1,a.nextTick(function(){h.onIsOpenChanged(h.isOpen)});var d=t.extend({},o,{skipFocus:n});if(r.$emit("$mdMenuClose",i,d),e.hide(null,o),!n){var s=h.restoreFocusTo||i.find("button")[0];s instanceof t.element&&(s=s[0]),s&&s.focus()}}},this.positionMode=function(){var e=(o.mdPositionMode||"target").split(" ");return 1==e.length&&e.push(e[0]),{left:e[0],top:e[1]}},this.offsets=function(){var e=(o.mdOffset||"0 0").split(" ").map(parseFloat);if(2==e.length)return{left:e[0],top:e[1]};if(1==e.length)return{top:e[0],left:e[0]};throw Error("Invalid offsets specified. Please follow format <x, y> or <n>")},r.$mdMenu={open:this.open,close:this.close},r.$mdOpenMenu=t.bind(this,function(){return c.warn("mdMenu: The $mdOpenMenu method is deprecated. Please use `$mdMenu.open`."),this.open.apply(this,arguments)})}e.$inject=["$mdMenu","$attrs","$element","$scope","$mdUtil","$timeout","$rootScope","$q","$log"],t.module("material.components.menu").controller("mdMenuCtrl",e)}(),function(){function e(e){function n(n){n.addClass("md-menu");var r=n.children()[0],a=n.children()[1],d=e.prefixer();d.hasAttribute(r,"ng-click")||(r=r.querySelector(d.buildSelector(["ng-click","ng-mouseenter"]))||r);var s="MD-BUTTON"===r.nodeName||"BUTTON"===r.nodeName;if(r&&s&&!r.hasAttribute("type")&&r.setAttribute("type","button"),!r)throw Error(i+"Expected the menu to have a trigger element.");if(!a||"MD-MENU-CONTENT"!==a.nodeName)throw Error(i+"Expected the menu to contain a `md-menu-content` element.");r&&r.setAttribute("aria-haspopup","true");var l=n[0].querySelectorAll("md-menu"),c=parseInt(n[0].getAttribute("md-nest-level"),10)||0;return l&&t.forEach(e.nodesToArray(l),function(e){e.hasAttribute("md-position-mode")||e.setAttribute("md-position-mode","cascade"),e.classList.add("_md-nested-menu"),e.setAttribute("md-nest-level",c+1)}),o}function o(e,n,o,i){var r=i[0],a=!!i[1],d=t.element('<div class="_md md-open-menu-container md-whiteframe-z2"></div>'),s=n.children()[1];n.addClass("_md"),s.hasAttribute("role")||s.setAttribute("role","menu"),d.append(s),n.on("$destroy",function(){d.remove()}),n.append(d),d[0].style.display="none",r.init(d,{isInMenuBar:a})}var i="Invalid HTML for md-menu: ";return{restrict:"E",require:["mdMenu","?^mdMenuBar"],controller:"mdMenuCtrl",scope:!0,compile:n}}e.$inject=["$mdUtil"],t.module("material.components.menu").directive("mdMenu",e)}(),function(){function e(e){function o(e,o,a,d,s,l,c,m,u,p){function h(n,o,i){return i.nestLevel?t.noop:(i.disableParentScroll&&!e.getClosest(i.target,"MD-DIALOG")?i.restoreScroll=e.disableScrollAround(i.element,i.parent):i.disableParentScroll=!1,i.hasBackdrop&&(i.backdrop=e.createBackdrop(n,"md-menu-backdrop md-click-catcher"),u.enter(i.backdrop,d[0].body)),function(){i.backdrop&&i.backdrop.remove(),i.disableParentScroll&&i.restoreScroll()})}function f(e,t,n){function o(){return m(t,{addClass:"md-leave"}).start()}function i(){t.removeClass("md-active"),E(t,n),n.alreadyOpen=!1}return n.cleanupInteraction(),n.cleanupBackdrop(),n.cleanupResizing(),n.hideBackdrop(),t.removeClass("md-clickable"),n.$destroy===!0?i():o().then(i)}function g(n,i,r){function d(){return r.parent.append(i),i[0].style.display="",l(function(e){var t=$(i,r);i.removeClass("md-leave"),m(i,{addClass:"md-active",from:y.toCss(t),to:y.toCss({transform:""})}).start().then(e)})}function u(){if(!r.target)throw Error("$mdMenu.show() expected a target to animate from in options.target");t.extend(r,{alreadyOpen:!1,isRemoved:!1,target:t.element(r.target),parent:t.element(r.parent),menuContentEl:t.element(i[0].querySelector("md-menu-content"))})}function f(){var e=function(e,t){return c.throttle(function(){if(!r.isRemoved){var n=$(e,t);e.css(y.toCss(n))}})}(i,r);return s.addEventListener("resize",e),s.addEventListener("orientationchange",e),function(){s.removeEventListener("resize",e),s.removeEventListener("orientationchange",e)}}function g(){return r.backdrop?(r.backdrop.on("click",v),function(){r.backdrop.off("click",v)}):t.noop}function v(e){e.preventDefault(),e.stopPropagation(),n.$apply(function(){r.mdMenuCtrl.close(!0,{closeAll:!0})})}function E(){function o(t){var n;switch(t.keyCode){case a.KEY_CODE.ESCAPE:r.mdMenuCtrl.close(!1,{closeAll:!0}),n=!0;break;case a.KEY_CODE.UP_ARROW:b(t,r.menuContentEl,r,-1)||r.nestLevel||r.mdMenuCtrl.triggerContainerProxy(t),n=!0;break;case a.KEY_CODE.DOWN_ARROW:b(t,r.menuContentEl,r,1)||r.nestLevel||r.mdMenuCtrl.triggerContainerProxy(t),n=!0;break;case a.KEY_CODE.LEFT_ARROW:r.nestLevel?r.mdMenuCtrl.close():r.mdMenuCtrl.triggerContainerProxy(t),n=!0;break;case a.KEY_CODE.RIGHT_ARROW:var o=e.getClosest(t.target,"MD-MENU");o&&o!=r.parent[0]?t.target.click():r.mdMenuCtrl.triggerContainerProxy(t),n=!0}n&&(t.preventDefault(),t.stopImmediatePropagation())}function i(t){function o(){n.$apply(function(){r.mdMenuCtrl.close(!0,{closeAll:!0})})}function i(e,t){if(!e)return!1;for(var n,o=0;n=t[o];++o)if(C.hasAttribute(e,n))return!0;return!1}var a=t.target;do{if(a==r.menuContentEl[0])return;if((i(a,["ng-click","ng-href","ui-sref"])||"BUTTON"==a.nodeName||"MD-BUTTON"==a.nodeName)&&!i(a,["md-prevent-menu-close"])){var d=e.getClosest(a,"MD-MENU");a.hasAttribute("disabled")||d&&d!=r.parent[0]||o();break}}while(a=a.parentNode)}if(!r.menuContentEl[0])return t.noop;r.menuContentEl.on("keydown",o),r.menuContentEl[0].addEventListener("click",i,!0);var d=r.menuContentEl[0].querySelector(C.buildSelector(["md-menu-focus-target","md-autofocus"]));if(!d)for(var s=r.menuContentEl[0].children.length,l=0;l<s;l++){var c=r.menuContentEl[0].children[l];if(d=c.querySelector(".md-button:not([disabled])"))break;if(c.firstElementChild&&!c.firstElementChild.disabled){d=c.firstElementChild;break}}return d&&d.focus(),function(){r.menuContentEl.off("keydown",o),r.menuContentEl[0].removeEventListener("click",i,!0)}}return u(r),r.menuContentEl[0]?o.inherit(r.menuContentEl,r.target):p.warn("$mdMenu: Menu elements should always contain a `md-menu-content` element,otherwise interactivity features will not work properly.",i),r.cleanupResizing=f(),r.hideBackdrop=h(n,i,r),d().then(function(e){return r.alreadyOpen=!0,r.cleanupInteraction=E(),r.cleanupBackdrop=g(),i.addClass("md-clickable"),e})}function b(t,n,o,i){for(var r,a=e.getClosest(t.target,"MD-MENU-ITEM"),d=e.nodesToArray(n[0].children),s=d.indexOf(a),l=s+i;l>=0&&l<d.length;l+=i){var c=d[l].querySelector(".md-button");if(r=v(c))break}return r}function v(e){if(e&&e.getAttribute("tabindex")!=-1)return e.focus(),d[0].activeElement==e}function E(e,t){t.preserveElement?i(e).style.display="none":i(e).parentNode===i(t.parent)&&i(t.parent).removeChild(i(e))}function $(t,o){function i(e){e.top=Math.max(Math.min(e.top,v.bottom-c.offsetHeight),v.top),e.left=Math.max(Math.min(e.left,v.right-c.offsetWidth),v.left)}function a(){for(var e=0;e<m.children.length;++e)if("none"!=s.getComputedStyle(m.children[e]).display)return m.children[e]}var l,c=t[0],m=t[0].firstElementChild,u=m.getBoundingClientRect(),p=d[0].body,h=p.getBoundingClientRect(),f=s.getComputedStyle(m),g=o.target[0].querySelector(C.buildSelector("md-menu-origin"))||o.target[0],b=g.getBoundingClientRect(),v={left:h.left+r,top:Math.max(h.top,0)+r,bottom:Math.max(h.bottom,Math.max(h.top,0)+h.height)-r,right:h.right-r},E={top:0,left:0,right:0,bottom:0},$={top:0,left:0,right:0,bottom:0},y=o.mdMenuCtrl.positionMode();"target"!=y.top&&"target"!=y.left&&"target-right"!=y.left||(l=a(),l&&(l=l.firstElementChild||l,l=l.querySelector(C.buildSelector("md-menu-align-target"))||l,E=l.getBoundingClientRect(),$={top:parseFloat(c.style.top||0),left:parseFloat(c.style.left||0)}));var M={},T="top ";switch(y.top){case"target":M.top=$.top+b.top-E.top;break;case"cascade":M.top=b.top-parseFloat(f.paddingTop)-g.style.top;break;case"bottom":M.top=b.top+b.height;break;default:throw new Error('Invalid target mode "'+y.top+'" specified for md-menu on Y axis.')}var A="rtl"==e.bidi();switch(y.left){case"target":M.left=$.left+b.left-E.left,T+=A?"right":"left";break;case"target-left":M.left=b.left,T+="left";break;case"target-right":M.left=b.right-u.width+(u.right-E.right),T+="right";break;case"cascade":var w=A?b.left-u.width<v.left:b.right+u.width<v.right;M.left=w?b.right-g.style.left:b.left-g.style.left-u.width,T+=w?"left":"right";break;case"right":A?(M.left=b.right-b.width,T+="left"):(M.left=b.right-u.width,T+="right");break;case"left":A?(M.left=b.right-u.width,T+="right"):(M.left=b.left,T+="left");break;default:throw new Error('Invalid target mode "'+y.left+'" specified for md-menu on X axis.')}var k=o.mdMenuCtrl.offsets();M.top+=k.top,M.left+=k.left,i(M);var _=Math.round(100*Math.min(b.width/c.offsetWidth,1))/100,x=Math.round(100*Math.min(b.height/c.offsetHeight,1))/100;return{top:Math.round(M.top),left:Math.round(M.left),transform:o.alreadyOpen?n:e.supplant("scale({0},{1})",[_,x]),transformOrigin:T}}var C=e.prefixer(),y=e.dom.animator;return{parent:"body",onShow:g,onRemove:f,hasBackdrop:!0,disableParentScroll:!0,skipCompile:!0,preserveScope:!0,multiple:!0,themable:!0}}function i(e){return e instanceof t.element&&(e=e[0]),e}o.$inject=["$mdUtil","$mdTheming","$mdConstant","$document","$window","$q","$$rAF","$animateCss","$animate","$log"];var r=8;return e("$mdMenu").setDefaults({methods:["target"],options:o})}e.$inject=["$$interimElementProvider"],t.module("material.components.menu").provider("$mdMenu",e)}(),function(){function e(e,n,i,r,a,d,s,l){this.$element=i,this.$attrs=r,this.$mdConstant=a,this.$mdUtil=s,this.$document=d,this.$scope=e,this.$rootScope=n,this.$timeout=l;var c=this;t.forEach(o,function(e){c[e]=t.bind(c,c[e])})}e.$inject=["$scope","$rootScope","$element","$attrs","$mdConstant","$document","$mdUtil","$timeout"],t.module("material.components.menuBar").controller("MenuBarController",e);var o=["handleKeyDown","handleMenuHover","scheduleOpenHoveredMenu","cancelScheduledOpen"];e.prototype.init=function(){var e=this.$element,t=this.$mdUtil,o=this.$scope,i=this,r=[];e.on("keydown",this.handleKeyDown),this.parentToolbar=t.getClosest(e,"MD-TOOLBAR"),r.push(this.$rootScope.$on("$mdMenuOpen",function(t,n){i.getMenus().indexOf(n[0])!=-1&&(e[0].classList.add("md-open"),n[0].classList.add("md-open"),i.currentlyOpenMenu=n.controller("mdMenu"),i.currentlyOpenMenu.registerContainerProxy(i.handleKeyDown),i.enableOpenOnHover())})),r.push(this.$rootScope.$on("$mdMenuClose",function(o,r,a){var d=i.getMenus();if(d.indexOf(r[0])!=-1&&(e[0].classList.remove("md-open"),r[0].classList.remove("md-open")),e[0].contains(r[0])){for(var s=r[0];s&&d.indexOf(s)==-1;)s=t.getClosest(s,"MD-MENU",!0);s&&(a.skipFocus||s.querySelector("button:not([disabled])").focus(),i.currentlyOpenMenu=n,i.disableOpenOnHover(),i.setKeyboardMode(!0))}})),o.$on("$destroy",function(){for(i.disableOpenOnHover();r.length;)r.shift()()}),this.setKeyboardMode(!0)},e.prototype.setKeyboardMode=function(e){e?this.$element[0].classList.add("md-keyboard-mode"):this.$element[0].classList.remove("md-keyboard-mode")},e.prototype.enableOpenOnHover=function(){if(!this.openOnHoverEnabled){var e=this;e.openOnHoverEnabled=!0,e.parentToolbar&&(e.parentToolbar.classList.add("md-has-open-menu"),e.$mdUtil.nextTick(function(){t.element(e.parentToolbar).on("click",e.handleParentClick)},!1)),t.element(e.getMenus()).on("mouseenter",e.handleMenuHover)}},e.prototype.handleMenuHover=function(e){this.setKeyboardMode(!1),this.openOnHoverEnabled&&this.scheduleOpenHoveredMenu(e)},e.prototype.disableOpenOnHover=function(){this.openOnHoverEnabled&&(this.openOnHoverEnabled=!1,this.parentToolbar&&(this.parentToolbar.classList.remove("md-has-open-menu"),t.element(this.parentToolbar).off("click",this.handleParentClick)),t.element(this.getMenus()).off("mouseenter",this.handleMenuHover))},e.prototype.scheduleOpenHoveredMenu=function(e){var n=t.element(e.currentTarget),o=n.controller("mdMenu");this.setKeyboardMode(!1),this.scheduleOpenMenu(o)},e.prototype.scheduleOpenMenu=function(e){var t=this,o=this.$timeout;e!=t.currentlyOpenMenu&&(o.cancel(t.pendingMenuOpen),t.pendingMenuOpen=o(function(){t.pendingMenuOpen=n,t.currentlyOpenMenu&&t.currentlyOpenMenu.close(!0,{closeAll:!0}),e.open()},200,!1))},e.prototype.handleKeyDown=function(e){var n=this.$mdConstant.KEY_CODE,o=this.currentlyOpenMenu,i=o&&o.isOpen;this.setKeyboardMode(!0);var r,a,d;switch(e.keyCode){case n.DOWN_ARROW:o?o.focusMenuContainer():this.openFocusedMenu(),r=!0;break;case n.UP_ARROW:o&&o.close(),r=!0;break;case n.LEFT_ARROW:a=this.focusMenu(-1),i&&(d=t.element(a).controller("mdMenu"),this.scheduleOpenMenu(d)),r=!0;break;case n.RIGHT_ARROW:a=this.focusMenu(1),i&&(d=t.element(a).controller("mdMenu"),this.scheduleOpenMenu(d)),r=!0}r&&(e&&e.preventDefault&&e.preventDefault(),e&&e.stopImmediatePropagation&&e.stopImmediatePropagation())},e.prototype.focusMenu=function(e){var t=this.getMenus(),n=this.getFocusedMenuIndex();n==-1&&(n=this.getOpenMenuIndex());var o=!1;if(n==-1?(n=0,o=!0):(e<0&&n>0||e>0&&n<t.length-e)&&(n+=e,o=!0),o)return t[n].querySelector("button").focus(),t[n]},e.prototype.openFocusedMenu=function(){var e=this.getFocusedMenu();e&&t.element(e).controller("mdMenu").open()},e.prototype.getMenus=function(){var e=this.$element;return this.$mdUtil.nodesToArray(e[0].children).filter(function(e){return"MD-MENU"==e.nodeName})},e.prototype.getFocusedMenu=function(){return this.getMenus()[this.getFocusedMenuIndex()]},e.prototype.getFocusedMenuIndex=function(){var e=this.$mdUtil,t=e.getClosest(this.$document[0].activeElement,"MD-MENU");if(!t)return-1;var n=this.getMenus().indexOf(t);return n},e.prototype.getOpenMenuIndex=function(){for(var e=this.getMenus(),t=0;t<e.length;++t)if(e[t].classList.contains("md-open"))return t;return-1},e.prototype.handleParentClick=function(e){var n=this.querySelector("md-menu.md-open");n&&!n.contains(e.target)&&t.element(n).controller("mdMenu").close(!0,{closeAll:!0})}}(),function(){function e(e,n){return{restrict:"E",require:"mdMenuBar",controller:"MenuBarController",compile:function(o,i){return i.ariaRole||o[0].setAttribute("role","menubar"),t.forEach(o[0].children,function(n){if("MD-MENU"==n.nodeName){n.hasAttribute("md-position-mode")||(n.setAttribute("md-position-mode","left bottom"),n.querySelector("button, a, md-button").setAttribute("role","menuitem"));var o=e.nodesToArray(n.querySelectorAll("md-menu-content"));t.forEach(o,function(e){e.classList.add("md-menu-bar-menu"),e.classList.add("md-dense"),e.hasAttribute("width")||e.setAttribute("width",5)})}}),o.find("md-menu-item").addClass("md-in-menu-bar"),function(e,t,o,i){t.addClass("_md"),n(e,t),i.init()}}}}e.$inject=["$mdUtil","$mdTheming"],t.module("material.components.menuBar").directive("mdMenuBar",e)}(),function(){function e(){return{restrict:"E",compile:function(e,t){t.role||e[0].setAttribute("role","separator")}}}t.module("material.components.menuBar").directive("mdMenuDivider",e)}(),function(){function e(e,t,n){this.$element=t,this.$attrs=n,this.$scope=e}e.$inject=["$scope","$element","$attrs"],t.module("material.components.menuBar").controller("MenuItemController",e),e.prototype.init=function(e){var t=this.$element,n=this.$attrs;this.ngModel=e,"checkbox"!=n.type&&"radio"!=n.type||(this.mode=n.type,this.iconEl=t[0].children[0],this.buttonEl=t[0].children[1],e&&this.initClickListeners())},e.prototype.clearNgAria=function(){var e=this.$element[0],n=["role","tabindex","aria-invalid","aria-checked"];t.forEach(n,function(t){e.removeAttribute(t)})},e.prototype.initClickListeners=function(){function e(){if("radio"==d){var e=a.ngValue?r.$eval(a.ngValue):a.value;return i.$modelValue==e}return i.$modelValue}function n(e){e?l.off("click",c):l.on("click",c)}var o=this,i=this.ngModel,r=this.$scope,a=this.$attrs,d=(this.$element,this.mode);this.handleClick=t.bind(this,this.handleClick);var s=this.iconEl,l=t.element(this.buttonEl),c=this.handleClick;a.$observe("disabled",n),n(a.disabled),i.$render=function(){o.clearNgAria(),e()?(s.style.display="",l.attr("aria-checked","true")):(s.style.display="none",l.attr("aria-checked","false"))},r.$$postDigest(i.$render)},e.prototype.handleClick=function(e){var t,n=this.mode,o=this.ngModel,i=this.$attrs;"checkbox"==n?t=!o.$modelValue:"radio"==n&&(t=i.ngValue?this.$scope.$eval(i.ngValue):i.value),o.$setViewValue(t),o.$render()}}(),function(){function e(e,n,o){return{controller:"MenuItemController",require:["mdMenuItem","?ngModel"],priority:n.BEFORE_NG_ARIA,compile:function(n,i){function r(e,o,i){i=i||n,i instanceof t.element&&(i=i[0]),i.hasAttribute(e)||i.setAttribute(e,o)}function a(o){var i=e.prefixer(o);t.forEach(i,function(e){if(n[0].hasAttribute(e)){var t=n[0].getAttribute(e);c[0].setAttribute(e,t),n[0].removeAttribute(e)}})}var d=i.type,s="md-in-menu-bar";if("checkbox"!=d&&"radio"!=d||!n.hasClass(s))r("role","menuitem",n[0].querySelector("md-button, button, a"));else{var l=n[0].textContent,c=t.element('<md-button type="button"></md-button>'),m='<md-icon md-svg-src="'+o.mdChecked+'"></md-icon>';c.html(l),c.attr("tabindex","0"),n.html(""),n.append(t.element(m)),n.append(c),n.addClass("md-indent").removeClass(s),r("role","checkbox"==d?"menuitemcheckbox":"menuitemradio",c),a("ng-disabled")}return function(e,t,n,o){var i=o[0],r=o[1];i.init(r)}}}}e.$inject=["$mdUtil","$mdConstant","$$mdSvgRegistry"],t.module("material.components.menuBar").directive("mdMenuItem",e)}(),function(){function e(e,n,o,i,r,a){function d(a,d,E){function $(t,o,r,d,s,c){function h(e){_.attr("stroke-dashoffset",l(v,E,e,M)),_.attr("transform","rotate("+y+" "+v/2+" "+v/2+")")}var f=++D,g=i.now(),b=o-t,v=m(a.mdDiameter),E=u(v),$=r||n.easeFn,C=d||n.duration,y=-90*(s||0),M=c||100;o===t?h(o):T=p(function A(){var n=e.Math.max(0,e.Math.min(i.now()-g,C));h($(n,t,b,C)),f===D&&n<C&&(T=p(A))})}function C(){$(x,S,n.easeFnIndeterminate,n.durationIndeterminate,N,75),N=++N%4}function y(){A||(A=r(C,n.durationIndeterminate,0,!1),C(),d.addClass(v).removeAttr("aria-valuenow"))}function M(){A&&(r.cancel(A),A=null,d.removeClass(v))}var T,A,w=d[0],k=t.element(w.querySelector("svg")),_=t.element(w.querySelector("path")),x=n.startIndeterminate,S=n.endIndeterminate,N=0,D=0;o(d),d.toggleClass(b,E.hasOwnProperty("disabled")),a.mdMode===g&&y(),a.$on("$destroy",function(){M(),T&&h(T)}),a.$watchGroup(["value","mdMode",function(){var e=w.disabled;return e===!0||e===!1?e:t.isDefined(d.attr("disabled"))}],function(e,t){var n=e[1],o=e[2],i=t[2];if(o!==i&&d.toggleClass(b,!!o),o)M();else if(n!==f&&n!==g&&(n=g,E.$set("mdMode",n)),n===g)y();else{var r=c(e[0]);M(),d.attr("aria-valuenow",r),$(c(t[0]),r)}}),a.$watch("mdDiameter",function(t){var n=m(t),o=u(n),i=c(a.value),r=n/2+"px",p={width:n+"px",height:n+"px"};k[0].setAttribute("viewBox","0 0 "+n+" "+n),k.css(p).css("transform-origin",r+" "+r+" "+r),d.css(p),_.attr("stroke-width",o),_.attr("stroke-linecap","square"),a.mdMode==g?(_.attr("d",s(n,o,!0)),_.attr("stroke-dasharray",(n-o)*e.Math.PI*.75),_.attr("stroke-dashoffset",l(n,o,1,75))):(_.attr("d",s(n,o,!1)),_.attr("stroke-dasharray",(n-o)*e.Math.PI),_.attr("stroke-dashoffset",l(n,o,0,100)),$(i,i))})}function s(e,t,n){var o=e/2,i=t/2,r=o+","+i,a=i+","+o,d=o-i;return"M"+r+"A"+d+","+d+" 0 1 1 "+a+(n?"":"A"+d+","+d+" 0 0 1 "+r)}function l(t,n,o,i){return(t-n)*e.Math.PI*(3*(i||100)/100-o/100)}function c(t){return e.Math.max(0,e.Math.min(t||0,100))}function m(e){var t=n.progressSize;if(e){var o=parseFloat(e);return e.lastIndexOf("%")===e.length-1&&(o=o/100*t),o}return t}function u(e){return n.strokeWidth/100*e}var p=e.requestAnimationFrame||e.webkitRequestAnimationFrame||t.noop,h=e.cancelAnimationFrame||e.webkitCancelAnimationFrame||e.webkitCancelRequestAnimationFrame||t.noop,f="determinate",g="indeterminate",b="_md-progress-circular-disabled",v="md-mode-indeterminate";return{restrict:"E",scope:{value:"@",mdDiameter:"@",mdMode:"@"},template:'<svg xmlns="http://www.w3.org/2000/svg"><path fill="none"/></svg>',compile:function(e,n){if(e.attr({"aria-valuemin":0,"aria-valuemax":100,role:"progressbar"}),t.isUndefined(n.mdMode)){var o=n.hasOwnProperty("value")?f:g;n.$set("mdMode",o)}else n.$set("mdMode",n.mdMode.trim());return d}}}e.$inject=["$window","$mdProgressCircular","$mdTheming","$mdUtil","$interval","$log"],t.module("material.components.progressCircular").directive("mdProgressCircular",e)}(),function(){function e(){function e(e,t,n,o){return n*e/o+t}function n(e,t,n,o){var i=(e/=o)*e,r=i*e;return t+n*(6*r*i+-15*i*i+10*r)}var o={progressSize:50,strokeWidth:10,duration:100,easeFn:e,durationIndeterminate:1333,startIndeterminate:1,endIndeterminate:149,easeFnIndeterminate:n,easingPresets:{linearEase:e,materialEase:n}};return{configure:function(e){return o=t.extend(o,e||{})},$get:function(){return o}}}t.module("material.components.progressCircular").provider("$mdProgressCircular",e)}(),function(){function e(){function e(e,o,i,r){if(r){var a=r.getTabElementIndex(o),d=n(o,"md-tab-body").remove(),s=n(o,"md-tab-label").remove(),l=r.insertTab({scope:e,parent:e.$parent,index:a,element:o,template:d.html(),label:s.html()},a);e.select=e.select||t.noop,e.deselect=e.deselect||t.noop,e.$watch("active",function(e){e&&r.select(l.getIndex(),!0)}),e.$watch("disabled",function(){r.refreshIndex()}),e.$watch(function(){return r.getTabElementIndex(o)},function(e){l.index=e,r.updateTabOrder()}),e.$on("$destroy",function(){r.removeTab(l)})}}function n(e,n){for(var o=e[0].children,i=0,r=o.length;i<r;i++){var a=o[i];if(a.tagName===n.toUpperCase())return t.element(a)}return t.element()}return{require:"^?mdTabs",terminal:!0,compile:function(o,i){var r=n(o,"md-tab-label"),a=n(o,"md-tab-body");if(0===r.length&&(r=t.element("<md-tab-label></md-tab-label>"),i.label?r.text(i.label):r.append(o.contents()),0===a.length)){var d=o.contents().detach();a=t.element("<md-tab-body></md-tab-body>"),a.append(d)}return o.append(r),a.html()&&o.append(a),e},scope:{active:"=?mdActive",disabled:"=?ngDisabled",select:"&?mdOnSelect",deselect:"&?mdOnDeselect"}}}t.module("material.components.tabs").directive("mdTab",e)}(),function(){function e(){return{require:"^?mdTabs",link:function(e,t,n,o){o&&o.attachRipple(e,t)}}}t.module("material.components.tabs").directive("mdTabItem",e)}(),function(){function e(){return{terminal:!0}}t.module("material.components.tabs").directive("mdTabLabel",e)}(),function(){function e(e){return{restrict:"A",compile:function(t,n){var o=e(n.mdTabScroll,null,!0);return function(e,t){t.on("mousewheel",function(t){e.$apply(function(){o(e,{$event:t})})})}}}}e.$inject=["$parse"],t.module("material.components.tabs").directive("mdTabScroll",e)}(),function(){function e(e,o,i,r,a,d,s,l,c,m,u){function p(){v("stretchTabs",C),G("focusIndex",k,ue.selectedIndex||0),G("offsetLeft",w,0),G("hasContent",A,!1),G("maxTabWidth",M,Z()),G("shouldPaginate",T,!1),E("noInkBar",R),E("dynamicHeight",L),E("noPagination"),E("swipeContent"),E("noDisconnect"),E("autoselect"),E("noSelectClick"),E("centerTabs",y,!1),E("enableDisconnect"),ue.scope=e,ue.parent=e.$parent,ue.tabs=[],ue.lastSelectedIndex=null,ue.hasFocus=!1,ue.styleTabItemFocus=!1,ue.shouldCenterTabs=V(),ue.tabContentPrefix="tab-content-",h()}function h(){ue.selectedIndex=ue.selectedIndex||0,f(),b(),g(),m(o),d.nextTick(function(){he=j(),ae(),ne(),de(),ue.tabs[ue.selectedIndex]&&ue.tabs[ue.selectedIndex].scope.select(),be=!0,X()})}function f(){var e=l.$mdTabsTemplate,n=t.element(o[0].querySelector("md-tab-data"));n.html(e),c(n.contents())(ue.parent),delete l.$mdTabsTemplate}function g(){t.element(i).on("resize",P),e.$on("$destroy",$)}function b(){e.$watch("$mdTabsCtrl.selectedIndex",_)}function v(e,t){var n=l.$normalize("md-"+e);t&&G(e,t),l.$observe(n,function(t){ue[e]=t})}function E(e,t){function n(t){ue[e]="false"!==t}var o=l.$normalize("md-"+e);t&&G(e,t),l.hasOwnProperty(o)&&n(l[o]),l.$observe(o,n)}function $(){ge=!0,t.element(i).off("resize",P)}function C(e){var n=j();t.element(n.wrapper).toggleClass("md-stretch-tabs",W()),de()}function y(e){ue.shouldCenterTabs=V()}function M(e,n){if(e!==n){var o=j();t.forEach(o.tabs,function(t){t.style.maxWidth=e+"px"}),d.nextTick(ue.updateInkBarStyles)}}function T(e,t){e!==t&&(ue.maxTabWidth=Z(),ue.shouldCenterTabs=V(),d.nextTick(function(){ue.maxTabWidth=Z(),ne(ue.selectedIndex)}))}function A(e){o[e?"removeClass":"addClass"]("md-no-tab-content")}function w(n){var o=j(),i=ue.shouldCenterTabs?"":"-"+n+"px";t.element(o.paging).css(r.CSS.TRANSFORM,"translate3d("+i+", 0, 0)"),e.$broadcast("$mdTabsPaginationChanged")}function k(e,t){e!==t&&j().tabs[e]&&(ne(),te())}function _(t,n){t!==n&&(ue.selectedIndex=K(t),ue.lastSelectedIndex=n,ue.updateInkBarStyles(),ae(),ne(t),e.$broadcast("$mdTabsChanged"),ue.tabs[n]&&ue.tabs[n].scope.deselect(),ue.tabs[t]&&ue.tabs[t].scope.select())}function x(e){var t=o[0].getElementsByTagName("md-tab");return Array.prototype.indexOf.call(t,e[0])}function S(){S.watcher||(S.watcher=e.$watch(function(){d.nextTick(function(){S.watcher&&o.prop("offsetParent")&&(S.watcher(),S.watcher=null,P())},!1)}))}function N(e){switch(e.keyCode){case r.KEY_CODE.LEFT_ARROW:e.preventDefault(),ee(-1,!0);break;case r.KEY_CODE.RIGHT_ARROW:e.preventDefault(),ee(1,!0);break;case r.KEY_CODE.SPACE:case r.KEY_CODE.ENTER:e.preventDefault(),pe||D(ue.focusIndex)}}function D(e,t){pe||(ue.focusIndex=ue.selectedIndex=e),t&&ue.noSelectClick||d.nextTick(function(){ue.tabs[e].element.triggerHandler("click")},!1)}function I(e){ue.shouldPaginate&&(e.preventDefault(),ue.offsetLeft=le(ue.offsetLeft-e.wheelDelta))}function H(){var e,t,n=j(),o=n.canvas.clientWidth,i=o+ue.offsetLeft;for(e=0;e<n.tabs.length&&(t=n.tabs[e],!(t.offsetLeft+t.offsetWidth>i));e++);o>t.offsetWidth?ue.offsetLeft=le(t.offsetLeft):ue.offsetLeft=le(t.offsetLeft+(t.offsetWidth-o+1))}function O(){var e,t,n=j();for(e=0;e<n.tabs.length&&(t=n.tabs[e],!(t.offsetLeft+t.offsetWidth>=ue.offsetLeft));e++);n.canvas.clientWidth>t.offsetWidth?ue.offsetLeft=le(t.offsetLeft+t.offsetWidth-n.canvas.clientWidth):ue.offsetLeft=le(t.offsetLeft)}function P(){ue.lastSelectedIndex=ue.selectedIndex,ue.offsetLeft=le(ue.offsetLeft),d.nextTick(function(){ue.updateInkBarStyles(),X()})}function R(e){t.element(j().inkBar).toggleClass("ng-hide",e)}function L(e){o.toggleClass("md-dynamic-height",e)}function F(e){if(!ge){var t=ue.selectedIndex,n=ue.tabs.splice(e.getIndex(),1)[0];re(),ue.selectedIndex===t&&(n.scope.deselect(),ue.tabs[ue.selectedIndex]&&ue.tabs[ue.selectedIndex].scope.select()),d.nextTick(function(){X(),ue.offsetLeft=le(ue.offsetLeft)})}}function B(e,n){var o=be,i={getIndex:function(){return ue.tabs.indexOf(r)},isActive:function(){return this.getIndex()===ue.selectedIndex},isLeft:function(){return this.getIndex()<ue.selectedIndex},isRight:function(){return this.getIndex()>ue.selectedIndex},shouldRender:function(){return!ue.noDisconnect||this.isActive()},hasFocus:function(){return ue.styleTabItemFocus&&ue.hasFocus&&this.getIndex()===ue.focusIndex},id:d.nextUid(),hasContent:!(!e.template||!e.template.trim())},r=t.extend(i,e);return t.isDefined(n)?ue.tabs.splice(n,0,r):ue.tabs.push(r),oe(),ie(),d.nextTick(function(){X(),me(r),o&&ue.autoselect&&d.nextTick(function(){d.nextTick(function(){D(ue.tabs.indexOf(r))})})}),r}function j(){var e={},t=o[0];return e.wrapper=t.querySelector("md-tabs-wrapper"),e.canvas=e.wrapper.querySelector("md-tabs-canvas"),e.paging=e.canvas.querySelector("md-pagination-wrapper"),
e.inkBar=e.paging.querySelector("md-ink-bar"),e.contents=t.querySelectorAll("md-tabs-content-wrapper > md-tab-content"),e.tabs=e.paging.querySelectorAll("md-tab-item"),e.dummies=e.canvas.querySelectorAll("md-dummy-tab"),e}function U(){return ue.offsetLeft>0}function q(){var e=j(),t=e.tabs[e.tabs.length-1];return t&&t.offsetLeft+t.offsetWidth>e.canvas.clientWidth+ue.offsetLeft}function z(){var e=ue.tabs[ue.focusIndex];return e&&e.id?"tab-item-"+e.id:null}function W(){switch(ue.stretchTabs){case"always":return!0;case"never":return!1;default:return!ue.shouldPaginate&&i.matchMedia("(max-width: 600px)").matches}}function V(){return ue.centerTabs&&!ue.shouldPaginate}function Y(){if(ue.noPagination||!be)return!1;var e=o.prop("clientWidth");return t.forEach(j().dummies,function(t){e-=t.offsetWidth}),e<0}function K(e){if(e===-1)return-1;var t,n,o=Math.max(ue.tabs.length-e,e);for(t=0;t<=o;t++){if(n=ue.tabs[e+t],n&&n.scope.disabled!==!0)return n.getIndex();if(n=ue.tabs[e-t],n&&n.scope.disabled!==!0)return n.getIndex()}return e}function G(e,t,n){Object.defineProperty(ue,e,{get:function(){return n},set:function(e){var o=n;n=e,t&&t(e,o)}})}function X(){ue.maxTabWidth=Z(),ue.shouldPaginate=Y()}function Q(e){var n=0;return t.forEach(e,function(e){n+=Math.max(e.offsetWidth,e.getBoundingClientRect().width)}),Math.ceil(n)}function Z(){return o.prop("clientWidth")}function J(){var e=ue.tabs[ue.selectedIndex],t=ue.tabs[ue.focusIndex];ue.tabs=ue.tabs.sort(function(e,t){return e.index-t.index}),ue.selectedIndex=ue.tabs.indexOf(e),ue.focusIndex=ue.tabs.indexOf(t)}function ee(e,t){var n,o=t?"focusIndex":"selectedIndex",i=ue[o];for(n=i+e;ue.tabs[n]&&ue.tabs[n].scope.disabled;n+=e);ue.tabs[n]&&(ue[o]=n)}function te(){ue.styleTabItemFocus="keyboard"===u.getLastInteractionType(),j().dummies[ue.focusIndex].focus()}function ne(e){var n=j();if(t.isNumber(e)||(e=ue.focusIndex),n.tabs[e]&&!ue.shouldCenterTabs){var o=n.tabs[e],i=o.offsetLeft,r=o.offsetWidth+i;ue.offsetLeft=Math.max(ue.offsetLeft,le(r-n.canvas.clientWidth+64)),ue.offsetLeft=Math.min(ue.offsetLeft,le(i))}}function oe(){fe.forEach(function(e){d.nextTick(e)}),fe=[]}function ie(){for(var e=!1,t=0;t<ue.tabs.length;t++)if(ue.tabs[t].hasContent){e=!0;break}ue.hasContent=e}function re(){ue.selectedIndex=K(ue.selectedIndex),ue.focusIndex=K(ue.focusIndex)}function ae(){if(!ue.dynamicHeight)return o.css("height","");if(!ue.tabs.length)return fe.push(ae);var e=j(),t=e.contents[ue.selectedIndex],i=t?t.offsetHeight:0,r=e.wrapper.offsetHeight,a=i+r,l=o.prop("clientHeight");if(l!==a){"bottom"===o.attr("md-align-tabs")&&(l-=r,a-=r,o.attr("md-border-bottom")!==n&&++l),pe=!0;var c={height:l+"px"},m={height:a+"px"};o.css(c),s(o,{from:c,to:m,easing:"cubic-bezier(0.35, 0, 0.25, 1)",duration:.5}).start().done(function(){o.css({transition:"none",height:""}),d.nextTick(function(){o.css("transition","")}),pe=!1})}}function de(){var e=j();if(!e.tabs[ue.selectedIndex])return void t.element(e.inkBar).css({left:"auto",right:"auto"});if(!ue.tabs.length)return fe.push(ue.updateInkBarStyles);if(!o.prop("offsetParent"))return S();var n=ue.selectedIndex,i=e.paging.offsetWidth,r=e.tabs[n],a=r.offsetLeft,s=i-a-r.offsetWidth;if(ue.shouldCenterTabs){var l=Q(e.tabs);i>l&&d.nextTick(de,!1)}se(),t.element(e.inkBar).css({left:a+"px",right:s+"px"})}function se(){var e=j(),n=ue.selectedIndex,o=ue.lastSelectedIndex,i=t.element(e.inkBar);t.isNumber(o)&&i.toggleClass("md-left",n<o).toggleClass("md-right",n>o)}function le(e){var t=j();if(!t.tabs.length||!ue.shouldPaginate)return 0;var n=t.tabs[t.tabs.length-1],o=n.offsetLeft+n.offsetWidth;return e=Math.max(0,e),e=Math.min(o-t.canvas.clientWidth,e)}function ce(e,n){var o=j(),i={colorElement:t.element(o.inkBar)};a.attach(e,n,i)}function me(e){if(e.hasContent){var n=o[0].querySelectorAll('[md-tab-id="'+e.id+'"]');t.element(n).attr("aria-controls",ue.tabContentPrefix+e.id)}}var ue=this,pe=!1,he=j(),fe=[],ge=!1,be=!1;ue.$onInit=p,ue.updatePagination=d.debounce(X,100),ue.redirectFocus=te,ue.attachRipple=ce,ue.insertTab=B,ue.removeTab=F,ue.select=D,ue.scroll=I,ue.nextPage=H,ue.previousPage=O,ue.keydown=N,ue.canPageForward=q,ue.canPageBack=U,ue.refreshIndex=re,ue.incrementIndex=ee,ue.getTabElementIndex=x,ue.updateInkBarStyles=d.debounce(de,100),ue.updateTabOrder=d.debounce(J,100),ue.getFocusedTabId=z,1===t.version.major&&t.version.minor<=4&&this.$onInit()}e.$inject=["$scope","$element","$window","$mdConstant","$mdTabInkRipple","$mdUtil","$animateCss","$attrs","$compile","$mdTheming","$mdInteraction"],t.module("material.components.tabs").controller("MdTabsController",e)}(),function(){function e(e){return{scope:{selectedIndex:"=?mdSelected"},template:function(t,n){return n.$mdTabsTemplate=t.html(),'<md-tabs-wrapper> <md-tab-data></md-tab-data> <md-prev-button tabindex="-1" role="button" aria-label="Previous Page" aria-disabled="{{!$mdTabsCtrl.canPageBack()}}" ng-class="{ \'md-disabled\': !$mdTabsCtrl.canPageBack() }" ng-if="$mdTabsCtrl.shouldPaginate" ng-click="$mdTabsCtrl.previousPage()"> <md-icon md-svg-src="'+e.mdTabsArrow+'"></md-icon> </md-prev-button> <md-next-button tabindex="-1" role="button" aria-label="Next Page" aria-disabled="{{!$mdTabsCtrl.canPageForward()}}" ng-class="{ \'md-disabled\': !$mdTabsCtrl.canPageForward() }" ng-if="$mdTabsCtrl.shouldPaginate" ng-click="$mdTabsCtrl.nextPage()"> <md-icon md-svg-src="'+e.mdTabsArrow+'"></md-icon> </md-next-button> <md-tabs-canvas tabindex="{{ $mdTabsCtrl.hasFocus ? -1 : 0 }}" aria-activedescendant="{{$mdTabsCtrl.getFocusedTabId()}}" ng-focus="$mdTabsCtrl.redirectFocus()" ng-class="{ \'md-paginated\': $mdTabsCtrl.shouldPaginate, \'md-center-tabs\': $mdTabsCtrl.shouldCenterTabs }" ng-keydown="$mdTabsCtrl.keydown($event)" role="tablist"> <md-pagination-wrapper ng-class="{ \'md-center-tabs\': $mdTabsCtrl.shouldCenterTabs }" md-tab-scroll="$mdTabsCtrl.scroll($event)"> <md-tab-item tabindex="-1" class="md-tab" ng-repeat="tab in $mdTabsCtrl.tabs" role="tab" md-tab-id="{{::tab.id}}"aria-selected="{{tab.isActive()}}" aria-disabled="{{tab.scope.disabled || \'false\'}}" ng-click="$mdTabsCtrl.select(tab.getIndex())" ng-class="{ \'md-active\':    tab.isActive(), \'md-focused\':   tab.hasFocus(), \'md-disabled\':  tab.scope.disabled }" ng-disabled="tab.scope.disabled" md-swipe-left="$mdTabsCtrl.nextPage()" md-swipe-right="$mdTabsCtrl.previousPage()" md-tabs-template="::tab.label" md-scope="::tab.parent"></md-tab-item> <md-ink-bar></md-ink-bar> </md-pagination-wrapper> <md-tabs-dummy-wrapper class="md-visually-hidden md-dummy-wrapper"> <md-dummy-tab class="md-tab" tabindex="-1" id="tab-item-{{::tab.id}}" md-tab-id="{{::tab.id}}"aria-selected="{{tab.isActive()}}" aria-disabled="{{tab.scope.disabled || \'false\'}}" ng-focus="$mdTabsCtrl.hasFocus = true" ng-blur="$mdTabsCtrl.hasFocus = false" ng-repeat="tab in $mdTabsCtrl.tabs" md-tabs-template="::tab.label" md-scope="::tab.parent"></md-dummy-tab> </md-tabs-dummy-wrapper> </md-tabs-canvas> </md-tabs-wrapper> <md-tabs-content-wrapper ng-show="$mdTabsCtrl.hasContent && $mdTabsCtrl.selectedIndex >= 0" class="_md"> <md-tab-content id="{{:: $mdTabsCtrl.tabContentPrefix + tab.id}}" class="_md" role="tabpanel" aria-labelledby="tab-item-{{::tab.id}}" md-swipe-left="$mdTabsCtrl.swipeContent && $mdTabsCtrl.incrementIndex(1)" md-swipe-right="$mdTabsCtrl.swipeContent && $mdTabsCtrl.incrementIndex(-1)" ng-if="tab.hasContent" ng-repeat="(index, tab) in $mdTabsCtrl.tabs" ng-class="{ \'md-no-transition\': $mdTabsCtrl.lastSelectedIndex == null, \'md-active\':        tab.isActive(), \'md-left\':          tab.isLeft(), \'md-right\':         tab.isRight(), \'md-no-scroll\':     $mdTabsCtrl.dynamicHeight }"> <div md-tabs-template="::tab.template" md-connected-if="tab.isActive()" md-scope="::tab.parent" ng-if="$mdTabsCtrl.enableDisconnect || tab.shouldRender()"></div> </md-tab-content> </md-tabs-content-wrapper>'},controller:"MdTabsController",controllerAs:"$mdTabsCtrl",bindToController:!0}}e.$inject=["$$mdSvgRegistry"],t.module("material.components.tabs").directive("mdTabs",e)}(),function(){function e(e,t){return{require:"^?mdTabs",link:function(n,o,i,r){if(r){var a,d,s=function(){r.updatePagination(),r.updateInkBarStyles()};if("MutationObserver"in t){var l={childList:!0,subtree:!0,characterData:!0};a=new MutationObserver(s),a.observe(o[0],l),d=a.disconnect.bind(a)}else{var c=e.debounce(s,15,null,!1);o.on("DOMSubtreeModified",c),d=o.off.bind(o,"DOMSubtreeModified",c)}n.$on("$destroy",function(){d()})}}}}e.$inject=["$mdUtil","$window"],t.module("material.components.tabs").directive("mdTabsDummyWrapper",e)}(),function(){function e(e,t){function n(n,o,i,r){function a(){n.$watch("connected",function(e){e===!1?d():s()}),n.$on("$destroy",s)}function d(){r.enableDisconnect&&t.disconnectScope(l)}function s(){r.enableDisconnect&&t.reconnectScope(l)}if(r){var l=r.enableDisconnect?n.compileScope.$new():n.compileScope;return o.html(n.template),e(o.contents())(l),t.nextTick(a)}}return{restrict:"A",link:n,scope:{template:"=mdTabsTemplate",connected:"=?mdConnectedIf",compileScope:"=mdScope"},require:"^?mdTabs"}}e.$inject=["$compile","$mdUtil"],t.module("material.components.tabs").directive("mdTabsTemplate",e)}(),function(){t.module("material.core").constant("$MD_THEME_CSS",'md-autocomplete.md-THEME_NAME-theme{background:"{{background-A100}}"}md-autocomplete.md-THEME_NAME-theme[disabled]:not([md-floating-label]){background:"{{background-100}}"}md-autocomplete.md-THEME_NAME-theme button md-icon path{fill:"{{background-600}}"}md-autocomplete.md-THEME_NAME-theme button:after{background:"{{background-600-0.3}}"}.md-autocomplete-suggestions-container.md-THEME_NAME-theme{background:"{{background-A100}}"}.md-autocomplete-suggestions-container.md-THEME_NAME-theme li{color:"{{background-900}}"}.md-autocomplete-suggestions-container.md-THEME_NAME-theme li .highlight{color:"{{background-600}}"}.md-autocomplete-suggestions-container.md-THEME_NAME-theme li.selected,.md-autocomplete-suggestions-container.md-THEME_NAME-theme li:hover{background:"{{background-200}}"}md-backdrop{background-color:"{{background-900-0.0}}"}md-backdrop.md-opaque.md-THEME_NAME-theme{background-color:"{{background-900-1.0}}"}md-bottom-sheet.md-THEME_NAME-theme{background-color:"{{background-50}}";border-top-color:"{{background-300}}"}md-bottom-sheet.md-THEME_NAME-theme.md-list md-list-item{color:"{{foreground-1}}"}md-bottom-sheet.md-THEME_NAME-theme .md-subheader{background-color:"{{background-50}}";color:"{{foreground-1}}"}.md-button.md-THEME_NAME-theme:not([disabled]).md-focused,.md-button.md-THEME_NAME-theme:not([disabled]):hover{background-color:"{{background-500-0.2}}"}.md-button.md-THEME_NAME-theme:not([disabled]).md-icon-button:hover{background-color:transparent}.md-button.md-THEME_NAME-theme.md-fab md-icon{color:"{{accent-contrast}}"}.md-button.md-THEME_NAME-theme.md-primary{color:"{{primary-color}}"}.md-button.md-THEME_NAME-theme.md-primary.md-fab,.md-button.md-THEME_NAME-theme.md-primary.md-raised{color:"{{primary-contrast}}";background-color:"{{primary-color}}"}.md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]) md-icon,.md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]) md-icon{color:"{{primary-contrast}}"}.md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]).md-focused,.md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]):hover,.md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]).md-focused,.md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]):hover{background-color:"{{primary-600}}"}.md-button.md-THEME_NAME-theme.md-primary:not([disabled]) md-icon{color:"{{primary-color}}"}.md-button.md-THEME_NAME-theme.md-fab{background-color:"{{accent-color}}";color:"{{accent-contrast}}"}.md-button.md-THEME_NAME-theme.md-fab:not([disabled]) .md-icon{color:"{{accent-contrast}}"}.md-button.md-THEME_NAME-theme.md-fab:not([disabled]).md-focused,.md-button.md-THEME_NAME-theme.md-fab:not([disabled]):hover{background-color:"{{accent-A700}}"}.md-button.md-THEME_NAME-theme.md-raised{color:"{{background-900}}";background-color:"{{background-50}}"}.md-button.md-THEME_NAME-theme.md-raised:not([disabled]) md-icon{color:"{{background-900}}"}.md-button.md-THEME_NAME-theme.md-raised:not([disabled]):hover{background-color:"{{background-50}}"}.md-button.md-THEME_NAME-theme.md-raised:not([disabled]).md-focused{background-color:"{{background-200}}"}.md-button.md-THEME_NAME-theme.md-warn{color:"{{warn-color}}"}.md-button.md-THEME_NAME-theme.md-warn.md-fab,.md-button.md-THEME_NAME-theme.md-warn.md-raised{color:"{{warn-contrast}}";background-color:"{{warn-color}}"}.md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]) md-icon,.md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]) md-icon{color:"{{warn-contrast}}"}.md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]).md-focused,.md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]):hover,.md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]).md-focused,.md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]):hover{background-color:"{{warn-600}}"}.md-button.md-THEME_NAME-theme.md-warn:not([disabled]) md-icon{color:"{{warn-color}}"}.md-button.md-THEME_NAME-theme.md-accent{color:"{{accent-color}}"}.md-button.md-THEME_NAME-theme.md-accent.md-fab,.md-button.md-THEME_NAME-theme.md-accent.md-raised{color:"{{accent-contrast}}";background-color:"{{accent-color}}"}.md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]) md-icon,.md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]) md-icon{color:"{{accent-contrast}}"}.md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]).md-focused,.md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]):hover,.md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]).md-focused,.md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]):hover{background-color:"{{accent-A700}}"}.md-button.md-THEME_NAME-theme.md-accent:not([disabled]) md-icon{color:"{{accent-color}}"}.md-button.md-THEME_NAME-theme.md-accent[disabled],.md-button.md-THEME_NAME-theme.md-fab[disabled],.md-button.md-THEME_NAME-theme.md-raised[disabled],.md-button.md-THEME_NAME-theme.md-warn[disabled],.md-button.md-THEME_NAME-theme[disabled]{color:"{{foreground-3}}";cursor:default}.md-button.md-THEME_NAME-theme.md-accent[disabled] md-icon,.md-button.md-THEME_NAME-theme.md-fab[disabled] md-icon,.md-button.md-THEME_NAME-theme.md-raised[disabled] md-icon,.md-button.md-THEME_NAME-theme.md-warn[disabled] md-icon,.md-button.md-THEME_NAME-theme[disabled] md-icon{color:"{{foreground-3}}"}.md-button.md-THEME_NAME-theme.md-fab[disabled],.md-button.md-THEME_NAME-theme.md-raised[disabled]{background-color:"{{foreground-4}}"}.md-button.md-THEME_NAME-theme[disabled]{background-color:transparent}._md a.md-THEME_NAME-theme:not(.md-button).md-primary{color:"{{primary-color}}"}._md a.md-THEME_NAME-theme:not(.md-button).md-primary:hover{color:"{{primary-700}}"}._md a.md-THEME_NAME-theme:not(.md-button).md-accent:hover{color:"{{accent-700}}"}._md a.md-THEME_NAME-theme:not(.md-button).md-accent{color:"{{accent-color}}"}._md a.md-THEME_NAME-theme:not(.md-button).md-accent:hover{color:"{{accent-A700}}"}._md a.md-THEME_NAME-theme:not(.md-button).md-warn{color:"{{warn-color}}"}._md a.md-THEME_NAME-theme:not(.md-button).md-warn:hover{color:"{{warn-700}}"}md-card.md-THEME_NAME-theme{color:"{{foreground-1}}";background-color:"{{background-hue-1}}";border-radius:2px}md-card.md-THEME_NAME-theme .md-card-image{border-radius:2px 2px 0 0}md-card.md-THEME_NAME-theme md-card-header md-card-avatar md-icon{color:"{{background-color}}";background-color:"{{foreground-3}}"}md-card.md-THEME_NAME-theme md-card-header md-card-header-text .md-subhead,md-card.md-THEME_NAME-theme md-card-title md-card-title-text:not(:only-child) .md-subhead{color:"{{foreground-2}}"}md-checkbox.md-THEME_NAME-theme .md-ripple{color:"{{accent-A700}}"}md-checkbox.md-THEME_NAME-theme.md-checked .md-ripple{color:"{{background-600}}"}md-checkbox.md-THEME_NAME-theme.md-checked.md-focused .md-container:before{background-color:"{{accent-color-0.26}}"}md-checkbox.md-THEME_NAME-theme .md-ink-ripple{color:"{{foreground-2}}"}md-checkbox.md-THEME_NAME-theme.md-checked .md-ink-ripple{color:"{{accent-color-0.87}}"}md-checkbox.md-THEME_NAME-theme:not(.md-checked) .md-icon{border-color:"{{foreground-2}}"}md-checkbox.md-THEME_NAME-theme.md-checked .md-icon{background-color:"{{accent-color-0.87}}"}md-checkbox.md-THEME_NAME-theme.md-checked .md-icon:after{border-color:"{{accent-contrast-0.87}}"}md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary .md-ripple{color:"{{primary-600}}"}md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ripple{color:"{{background-600}}"}md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary .md-ink-ripple{color:"{{foreground-2}}"}md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ink-ripple{color:"{{primary-color-0.87}}"}md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary:not(.md-checked) .md-icon{border-color:"{{foreground-2}}"}md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-icon{background-color:"{{primary-color-0.87}}"}md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked.md-focused .md-container:before{background-color:"{{primary-color-0.26}}"}md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-icon:after{border-color:"{{primary-contrast-0.87}}"}md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary .md-indeterminate[disabled] .md-container{color:"{{foreground-3}}"}md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn .md-ripple{color:"{{warn-600}}"}md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn .md-ink-ripple{color:"{{foreground-2}}"}md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-ink-ripple{color:"{{warn-color-0.87}}"}md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn:not(.md-checked) .md-icon{border-color:"{{foreground-2}}"}md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-icon{background-color:"{{warn-color-0.87}}"}md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked.md-focused:not([disabled]) .md-container:before{background-color:"{{warn-color-0.26}}"}md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-icon:after{border-color:"{{background-200}}"}md-checkbox.md-THEME_NAME-theme[disabled]:not(.md-checked) .md-icon{border-color:"{{foreground-3}}"}md-checkbox.md-THEME_NAME-theme[disabled].md-checked .md-icon{background-color:"{{foreground-3}}"}md-checkbox.md-THEME_NAME-theme[disabled].md-checked .md-icon:after{border-color:"{{background-200}}"}md-checkbox.md-THEME_NAME-theme[disabled] .md-icon:after{border-color:"{{foreground-3}}"}md-checkbox.md-THEME_NAME-theme[disabled] .md-label{color:"{{foreground-3}}"}md-chips.md-THEME_NAME-theme .md-chips{box-shadow:0 1px "{{foreground-4}}"}md-chips.md-THEME_NAME-theme .md-chips.md-focused{box-shadow:0 2px "{{primary-color}}"}md-chips.md-THEME_NAME-theme .md-chips .md-chip-input-container input{color:"{{foreground-1}}"}md-chips.md-THEME_NAME-theme .md-chips .md-chip-input-container input:-moz-placeholder,md-chips.md-THEME_NAME-theme .md-chips .md-chip-input-container input::-moz-placeholder{color:"{{foreground-3}}"}md-chips.md-THEME_NAME-theme .md-chips .md-chip-input-container input:-ms-input-placeholder{color:"{{foreground-3}}"}md-chips.md-THEME_NAME-theme .md-chips .md-chip-input-container input::-webkit-input-placeholder{color:"{{foreground-3}}"}md-chips.md-THEME_NAME-theme md-chip{background:"{{background-300}}";color:"{{background-800}}"}md-chips.md-THEME_NAME-theme md-chip md-icon{color:"{{background-700}}"}md-chips.md-THEME_NAME-theme md-chip.md-focused{background:"{{primary-color}}";color:"{{primary-contrast}}"}md-chips.md-THEME_NAME-theme md-chip.md-focused md-icon{color:"{{primary-contrast}}"}md-chips.md-THEME_NAME-theme md-chip._md-chip-editing{background:transparent;color:"{{background-800}}"}md-chips.md-THEME_NAME-theme md-chip-remove .md-button md-icon path{fill:"{{background-500}}"}.md-contact-suggestion span.md-contact-email{color:"{{background-400}}"}md-content.md-THEME_NAME-theme{color:"{{foreground-1}}";background-color:"{{background-default}}"}.md-calendar.md-THEME_NAME-theme{background:"{{background-A100}}";color:"{{background-A200-0.87}}"}.md-calendar.md-THEME_NAME-theme tr:last-child td{border-bottom-color:"{{background-200}}"}.md-THEME_NAME-theme .md-calendar-day-header{background:"{{background-300}}";color:"{{background-A200-0.87}}"}.md-THEME_NAME-theme .md-calendar-date.md-calendar-date-today .md-calendar-date-selection-indicator{border:1px solid "{{primary-500}}"}.md-THEME_NAME-theme .md-calendar-date.md-calendar-date-today.md-calendar-date-disabled{color:"{{primary-500-0.6}}"}.md-calendar-date.md-focus .md-THEME_NAME-theme .md-calendar-date-selection-indicator,.md-THEME_NAME-theme .md-calendar-date-selection-indicator:hover{background:"{{background-300}}"}.md-THEME_NAME-theme .md-calendar-date.md-calendar-selected-date .md-calendar-date-selection-indicator,.md-THEME_NAME-theme .md-calendar-date.md-focus.md-calendar-selected-date .md-calendar-date-selection-indicator{background:"{{primary-500}}";color:"{{primary-500-contrast}}";border-color:transparent}.md-THEME_NAME-theme .md-calendar-date-disabled,.md-THEME_NAME-theme .md-calendar-month-label-disabled{color:"{{background-A200-0.435}}"}.md-THEME_NAME-theme .md-datepicker-input{color:"{{foreground-1}}"}.md-THEME_NAME-theme .md-datepicker-input:-moz-placeholder,.md-THEME_NAME-theme .md-datepicker-input::-moz-placeholder{color:"{{foreground-3}}"}.md-THEME_NAME-theme .md-datepicker-input:-ms-input-placeholder{color:"{{foreground-3}}"}.md-THEME_NAME-theme .md-datepicker-input::-webkit-input-placeholder{color:"{{foreground-3}}"}.md-THEME_NAME-theme .md-datepicker-input-container{border-bottom-color:"{{foreground-4}}"}.md-THEME_NAME-theme .md-datepicker-input-container.md-datepicker-focused{border-bottom-color:"{{primary-color}}"}.md-accent .md-THEME_NAME-theme .md-datepicker-input-container.md-datepicker-focused{border-bottom-color:"{{accent-color}}"}.md-THEME_NAME-theme .md-datepicker-input-container.md-datepicker-invalid,.md-warn .md-THEME_NAME-theme .md-datepicker-input-container.md-datepicker-focused{border-bottom-color:"{{warn-A700}}"}.md-THEME_NAME-theme .md-datepicker-calendar-pane{border-color:"{{background-hue-1}}"}.md-THEME_NAME-theme .md-datepicker-triangle-button .md-datepicker-expand-triangle{border-top-color:"{{foreground-2}}"}.md-THEME_NAME-theme .md-datepicker-open .md-datepicker-calendar-icon{color:"{{primary-color}}"}.md-accent .md-THEME_NAME-theme .md-datepicker-open .md-datepicker-calendar-icon,.md-THEME_NAME-theme .md-datepicker-open.md-accent .md-datepicker-calendar-icon{color:"{{accent-color}}"}.md-THEME_NAME-theme .md-datepicker-open.md-warn .md-datepicker-calendar-icon,.md-warn .md-THEME_NAME-theme .md-datepicker-open .md-datepicker-calendar-icon{color:"{{warn-A700}}"}.md-THEME_NAME-theme .md-datepicker-calendar{background:"{{background-A100}}"}.md-THEME_NAME-theme .md-datepicker-input-mask-opaque{box-shadow:0 0 0 9999px "{{background-hue-1}}"}.md-THEME_NAME-theme .md-datepicker-open .md-datepicker-input-container{background:"{{background-hue-1}}"}md-dialog.md-THEME_NAME-theme{border-radius:4px;background-color:"{{background-hue-1}}";color:"{{foreground-1}}"}md-dialog.md-THEME_NAME-theme.md-content-overflow .md-actions,md-dialog.md-THEME_NAME-theme.md-content-overflow md-dialog-actions,md-divider.md-THEME_NAME-theme{border-top-color:"{{foreground-4}}"}.layout-gt-lg-row>md-divider.md-THEME_NAME-theme,.layout-gt-md-row>md-divider.md-THEME_NAME-theme,.layout-gt-sm-row>md-divider.md-THEME_NAME-theme,.layout-gt-xs-row>md-divider.md-THEME_NAME-theme,.layout-lg-row>md-divider.md-THEME_NAME-theme,.layout-md-row>md-divider.md-THEME_NAME-theme,.layout-row>md-divider.md-THEME_NAME-theme,.layout-sm-row>md-divider.md-THEME_NAME-theme,.layout-xl-row>md-divider.md-THEME_NAME-theme,.layout-xs-row>md-divider.md-THEME_NAME-theme{border-right-color:"{{foreground-4}}"}md-icon.md-THEME_NAME-theme{color:"{{foreground-2}}"}md-icon.md-THEME_NAME-theme.md-primary{color:"{{primary-color}}"}md-icon.md-THEME_NAME-theme.md-accent{color:"{{accent-color}}"}md-icon.md-THEME_NAME-theme.md-warn{color:"{{warn-color}}"}md-input-container.md-THEME_NAME-theme .md-input{color:"{{foreground-1}}";border-color:"{{foreground-4}}"}md-input-container.md-THEME_NAME-theme .md-input:-moz-placeholder,md-input-container.md-THEME_NAME-theme .md-input::-moz-placeholder{color:"{{foreground-3}}"}md-input-container.md-THEME_NAME-theme .md-input:-ms-input-placeholder{color:"{{foreground-3}}"}md-input-container.md-THEME_NAME-theme .md-input::-webkit-input-placeholder{color:"{{foreground-3}}"}md-input-container.md-THEME_NAME-theme>md-icon{color:"{{foreground-1}}"}md-input-container.md-THEME_NAME-theme .md-placeholder,md-input-container.md-THEME_NAME-theme label{color:"{{foreground-3}}"}md-input-container.md-THEME_NAME-theme label.md-required:after{color:"{{warn-A700}}"}md-input-container.md-THEME_NAME-theme:not(.md-input-focused):not(.md-input-invalid) label.md-required:after{color:"{{foreground-2}}"}md-input-container.md-THEME_NAME-theme .md-input-message-animation,md-input-container.md-THEME_NAME-theme .md-input-messages-animation{color:"{{warn-A700}}"}md-input-container.md-THEME_NAME-theme .md-input-message-animation .md-char-counter,md-input-container.md-THEME_NAME-theme .md-input-messages-animation .md-char-counter{color:"{{foreground-1}}"}md-input-container.md-THEME_NAME-theme.md-input-focused .md-input:-moz-placeholder,md-input-container.md-THEME_NAME-theme.md-input-focused .md-input::-moz-placeholder{color:"{{foreground-2}}"}md-input-container.md-THEME_NAME-theme.md-input-focused .md-input:-ms-input-placeholder{color:"{{foreground-2}}"}md-input-container.md-THEME_NAME-theme.md-input-focused .md-input::-webkit-input-placeholder{color:"{{foreground-2}}"}md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-has-value label{color:"{{foreground-2}}"}md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused .md-input,md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-resized .md-input{border-color:"{{primary-color}}"}md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused label,md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused md-icon{color:"{{primary-color}}"}md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-accent .md-input{border-color:"{{accent-color}}"}md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-accent label,md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-accent md-icon{color:"{{accent-color}}"}md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-warn .md-input{border-color:"{{warn-A700}}"}md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-warn label,md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-warn md-icon{color:"{{warn-A700}}"}md-input-container.md-THEME_NAME-theme.md-input-invalid .md-input{border-color:"{{warn-A700}}"}md-input-container.md-THEME_NAME-theme.md-input-invalid .md-char-counter,md-input-container.md-THEME_NAME-theme.md-input-invalid .md-input-message-animation,md-input-container.md-THEME_NAME-theme.md-input-invalid label{color:"{{warn-A700}}"}[disabled] md-input-container.md-THEME_NAME-theme .md-input,md-input-container.md-THEME_NAME-theme .md-input[disabled]{border-bottom-color:transparent;color:"{{foreground-3}}";background-image:linear-gradient(90deg,"{{foreground-3}}" 0,"{{foreground-3}}" 33%,transparent 0);background-image:-ms-linear-gradient(left,transparent 0,"{{foreground-3}}" 100%)}md-list.md-THEME_NAME-theme md-list-item.md-2-line .md-list-item-text h3,md-list.md-THEME_NAME-theme md-list-item.md-2-line .md-list-item-text h4,md-list.md-THEME_NAME-theme md-list-item.md-3-line .md-list-item-text h3,md-list.md-THEME_NAME-theme md-list-item.md-3-line .md-list-item-text h4{color:"{{foreground-1}}"}md-list.md-THEME_NAME-theme md-list-item.md-2-line .md-list-item-text p,md-list.md-THEME_NAME-theme md-list-item.md-3-line .md-list-item-text p{color:"{{foreground-2}}"}md-list.md-THEME_NAME-theme .md-proxy-focus.md-focused div.md-no-style{background-color:"{{background-100}}"}md-list.md-THEME_NAME-theme md-list-item .md-avatar-icon{background-color:"{{foreground-3}}";color:"{{background-color}}"}md-list.md-THEME_NAME-theme md-list-item>md-icon{color:"{{foreground-2}}"}md-list.md-THEME_NAME-theme md-list-item>md-icon.md-highlight{color:"{{primary-color}}"}md-list.md-THEME_NAME-theme md-list-item>md-icon.md-highlight.md-accent{color:"{{accent-color}}"}md-menu-content.md-THEME_NAME-theme{background-color:"{{background-A100}}"}md-menu-content.md-THEME_NAME-theme md-menu-item{color:"{{background-A200-0.87}}"}md-menu-content.md-THEME_NAME-theme md-menu-item md-icon{color:"{{background-A200-0.54}}"}md-menu-content.md-THEME_NAME-theme md-menu-item .md-button[disabled],md-menu-content.md-THEME_NAME-theme md-menu-item .md-button[disabled] md-icon{color:"{{background-A200-0.25}}"}md-menu-content.md-THEME_NAME-theme md-menu-divider{background-color:"{{background-A200-0.11}}"}md-menu-bar.md-THEME_NAME-theme>button.md-button{color:"{{foreground-2}}";border-radius:2px}md-menu-bar.md-THEME_NAME-theme md-menu.md-open>button,md-menu-bar.md-THEME_NAME-theme md-menu>button:focus{outline:none;background:"{{background-200}}"}md-menu-bar.md-THEME_NAME-theme.md-open:not(.md-keyboard-mode) md-menu:hover>button{background-color:"{{ background-500-0.2}}"}md-menu-bar.md-THEME_NAME-theme:not(.md-keyboard-mode):not(.md-open) md-menu button:focus,md-menu-bar.md-THEME_NAME-theme:not(.md-keyboard-mode):not(.md-open) md-menu button:hover{background:transparent}md-menu-content.md-THEME_NAME-theme .md-menu>.md-button:after{color:"{{background-A200-0.54}}"}md-menu-content.md-THEME_NAME-theme .md-menu.md-open>.md-button{background-color:"{{ background-500-0.2}}"}md-toolbar.md-THEME_NAME-theme.md-menu-toolbar{background-color:"{{background-A100}}";color:"{{background-A200}}"}md-toolbar.md-THEME_NAME-theme.md-menu-toolbar md-toolbar-filler{background-color:"{{primary-color}}";color:"{{background-A100-0.87}}"}md-toolbar.md-THEME_NAME-theme.md-menu-toolbar md-toolbar-filler md-icon{color:"{{background-A100-0.87}}"}._md-panel-backdrop.md-THEME_NAME-theme{background-color:"{{background-900-1.0}}"}md-nav-bar.md-THEME_NAME-theme .md-nav-bar{background-color:transparent;border-color:"{{foreground-4}}"}md-nav-bar.md-THEME_NAME-theme .md-button._md-nav-button.md-unselected{color:"{{foreground-2}}"}md-nav-bar.md-THEME_NAME-theme md-nav-ink-bar{color:"{{accent-color}}";background:"{{accent-color}}"}md-progress-circular.md-THEME_NAME-theme path{stroke:"{{primary-color}}"}md-progress-circular.md-THEME_NAME-theme.md-warn path{stroke:"{{warn-color}}"}md-progress-circular.md-THEME_NAME-theme.md-accent path{stroke:"{{accent-color}}"}md-progress-linear.md-THEME_NAME-theme .md-container{background-color:"{{primary-100}}"}md-progress-linear.md-THEME_NAME-theme .md-bar{background-color:"{{primary-color}}"}md-progress-linear.md-THEME_NAME-theme.md-warn .md-container{background-color:"{{warn-100}}"}md-progress-linear.md-THEME_NAME-theme.md-warn .md-bar{background-color:"{{warn-color}}"}md-progress-linear.md-THEME_NAME-theme.md-accent .md-container{background-color:"{{accent-100}}"}md-progress-linear.md-THEME_NAME-theme.md-accent .md-bar{background-color:"{{accent-color}}"}md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-warn .md-bar1{background-color:"{{warn-100}}"}md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-warn .md-dashed:before{background:radial-gradient("{{warn-100}}" 0,"{{warn-100}}" 16%,transparent 42%)}md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-accent .md-bar1{background-color:"{{accent-100}}"}md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-accent .md-dashed:before{background:radial-gradient("{{accent-100}}" 0,"{{accent-100}}" 16%,transparent 42%)}md-radio-button.md-THEME_NAME-theme .md-off{border-color:"{{foreground-2}}"}md-radio-button.md-THEME_NAME-theme .md-on{background-color:"{{accent-color-0.87}}"}md-radio-button.md-THEME_NAME-theme.md-checked .md-off{border-color:"{{accent-color-0.87}}"}md-radio-button.md-THEME_NAME-theme.md-checked .md-ink-ripple{color:"{{accent-color-0.87}}"}md-radio-button.md-THEME_NAME-theme .md-container .md-ripple{color:"{{accent-A700}}"}md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-on,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary .md-on,md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary .md-on,md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary .md-on{background-color:"{{primary-color-0.87}}"}md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary.md-checked .md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-checked .md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary .md-checked .md-off,md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-off,md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary.md-checked .md-off,md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary .md-checked .md-off,md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary .md-checked .md-off{border-color:"{{primary-color-0.87}}"}md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary.md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary .md-checked .md-ink-ripple,md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ink-ripple,md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary.md-checked .md-ink-ripple,md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary .md-checked .md-ink-ripple,md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary .md-checked .md-ink-ripple{color:"{{primary-color-0.87}}"}md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-container .md-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary .md-container .md-ripple,md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary .md-container .md-ripple,md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary .md-container .md-ripple{color:"{{primary-600}}"}md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-on,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn .md-on,md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn .md-on,md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn .md-on{background-color:"{{warn-color-0.87}}"}md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn.md-checked .md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-checked .md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn .md-checked .md-off,md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-off,md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn.md-checked .md-off,md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn .md-checked .md-off,md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn .md-checked .md-off{border-color:"{{warn-color-0.87}}"}md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn.md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn .md-checked .md-ink-ripple,md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-ink-ripple,md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn.md-checked .md-ink-ripple,md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn .md-checked .md-ink-ripple,md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn .md-checked .md-ink-ripple{color:"{{warn-color-0.87}}"}md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-container .md-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn .md-container .md-ripple,md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn .md-container .md-ripple,md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn .md-container .md-ripple{color:"{{warn-600}}"}md-radio-button.md-THEME_NAME-theme[disabled],md-radio-group.md-THEME_NAME-theme[disabled]{color:"{{foreground-3}}"}md-radio-button.md-THEME_NAME-theme[disabled] .md-container .md-off,md-radio-button.md-THEME_NAME-theme[disabled] .md-container .md-on,md-radio-group.md-THEME_NAME-theme[disabled] .md-container .md-off,md-radio-group.md-THEME_NAME-theme[disabled] .md-container .md-on{border-color:"{{foreground-3}}"}md-radio-group.md-THEME_NAME-theme .md-checked .md-ink-ripple{color:"{{accent-color-0.26}}"}md-radio-group.md-THEME_NAME-theme .md-checked:not([disabled]).md-primary .md-ink-ripple,md-radio-group.md-THEME_NAME-theme.md-primary .md-checked:not([disabled]) .md-ink-ripple{color:"{{primary-color-0.26}}"}md-radio-group.md-THEME_NAME-theme .md-checked.md-primary .md-ink-ripple{color:"{{warn-color-0.26}}"}md-radio-group.md-THEME_NAME-theme.md-focused:not(:empty) .md-checked .md-container:before{background-color:"{{accent-color-0.26}}"}md-radio-group.md-THEME_NAME-theme.md-focused:not(:empty) .md-checked.md-primary .md-container:before,md-radio-group.md-THEME_NAME-theme.md-focused:not(:empty).md-primary .md-checked .md-container:before{background-color:"{{primary-color-0.26}}"}md-radio-group.md-THEME_NAME-theme.md-focused:not(:empty) .md-checked.md-warn .md-container:before,md-radio-group.md-THEME_NAME-theme.md-focused:not(:empty).md-warn .md-checked .md-container:before{background-color:"{{warn-color-0.26}}"}md-input-container md-select.md-THEME_NAME-theme .md-select-value span:first-child:after{color:"{{warn-A700}}"}md-input-container:not(.md-input-focused):not(.md-input-invalid) md-select.md-THEME_NAME-theme .md-select-value span:first-child:after{color:"{{foreground-3}}"}md-input-container.md-input-focused:not(.md-input-has-value) md-select.md-THEME_NAME-theme .md-select-value,md-input-container.md-input-focused:not(.md-input-has-value) md-select.md-THEME_NAME-theme .md-select-value.md-select-placeholder{color:"{{primary-color}}"}md-input-container.md-input-invalid md-select.md-THEME_NAME-theme .md-select-value{color:"{{warn-A700}}"!important;border-bottom-color:"{{warn-A700}}"!important}md-input-container.md-input-invalid md-select.md-THEME_NAME-theme.md-no-underline .md-select-value{border-bottom-color:transparent!important}md-select.md-THEME_NAME-theme[disabled] .md-select-value{border-bottom-color:transparent;background-image:linear-gradient(90deg,"{{foreground-3}}" 0,"{{foreground-3}}" 33%,transparent 0);background-image:-ms-linear-gradient(left,transparent 0,"{{foreground-3}}" 100%)}md-select.md-THEME_NAME-theme .md-select-value{border-bottom-color:"{{foreground-4}}"}md-select.md-THEME_NAME-theme .md-select-value.md-select-placeholder{color:"{{foreground-3}}"}md-select.md-THEME_NAME-theme .md-select-value span:first-child:after{color:"{{warn-A700}}"}md-select.md-THEME_NAME-theme.md-no-underline .md-select-value{border-bottom-color:transparent!important}md-select.md-THEME_NAME-theme.ng-invalid.ng-touched .md-select-value{color:"{{warn-A700}}"!important;border-bottom-color:"{{warn-A700}}"!important}md-select.md-THEME_NAME-theme.ng-invalid.ng-touched.md-no-underline .md-select-value{border-bottom-color:transparent!important}md-select.md-THEME_NAME-theme:not([disabled]):focus .md-select-value{border-bottom-color:"{{primary-color}}";color:"{{ foreground-1 }}"}md-select.md-THEME_NAME-theme:not([disabled]):focus .md-select-value.md-select-placeholder{color:"{{ foreground-1 }}"}md-select.md-THEME_NAME-theme:not([disabled]):focus.md-no-underline .md-select-value{border-bottom-color:transparent!important}md-select.md-THEME_NAME-theme:not([disabled]):focus.md-accent .md-select-value{border-bottom-color:"{{accent-color}}"}md-select.md-THEME_NAME-theme:not([disabled]):focus.md-warn .md-select-value{border-bottom-color:"{{warn-color}}"}md-select.md-THEME_NAME-theme[disabled] .md-select-icon,md-select.md-THEME_NAME-theme[disabled] .md-select-value,md-select.md-THEME_NAME-theme[disabled] .md-select-value.md-select-placeholder{color:"{{foreground-3}}"}md-select.md-THEME_NAME-theme .md-select-icon{color:"{{foreground-2}}"}md-select-menu.md-THEME_NAME-theme md-content{background:"{{background-A100}}"}md-select-menu.md-THEME_NAME-theme md-content md-optgroup{color:"{{background-600-0.87}}"}md-select-menu.md-THEME_NAME-theme md-content md-option{color:"{{background-900-0.87}}"}md-select-menu.md-THEME_NAME-theme md-content md-option[disabled] .md-text{color:"{{background-400-0.87}}"}md-select-menu.md-THEME_NAME-theme md-content md-option:not([disabled]):focus,md-select-menu.md-THEME_NAME-theme md-content md-option:not([disabled]):hover{background:"{{background-200}}"}md-select-menu.md-THEME_NAME-theme md-content md-option[selected]{color:"{{primary-500}}"}md-select-menu.md-THEME_NAME-theme md-content md-option[selected]:focus{color:"{{primary-600}}"}md-select-menu.md-THEME_NAME-theme md-content md-option[selected].md-accent{color:"{{accent-color}}"}md-select-menu.md-THEME_NAME-theme md-content md-option[selected].md-accent:focus{color:"{{accent-A700}}"}.md-checkbox-enabled.md-THEME_NAME-theme .md-ripple{color:"{{primary-600}}"}.md-checkbox-enabled.md-THEME_NAME-theme[selected] .md-ripple{color:"{{background-600}}"}.md-checkbox-enabled.md-THEME_NAME-theme .md-ink-ripple{color:"{{foreground-2}}"}.md-checkbox-enabled.md-THEME_NAME-theme[selected] .md-ink-ripple{color:"{{primary-color-0.87}}"}.md-checkbox-enabled.md-THEME_NAME-theme:not(.md-checked) .md-icon{border-color:"{{foreground-2}}"}.md-checkbox-enabled.md-THEME_NAME-theme[selected] .md-icon{background-color:"{{primary-color-0.87}}"}.md-checkbox-enabled.md-THEME_NAME-theme[selected].md-focused .md-container:before{background-color:"{{primary-color-0.26}}"}.md-checkbox-enabled.md-THEME_NAME-theme[selected] .md-icon:after{border-color:"{{primary-contrast-0.87}}"}.md-checkbox-enabled.md-THEME_NAME-theme .md-indeterminate[disabled] .md-container{color:"{{foreground-3}}"}.md-checkbox-enabled.md-THEME_NAME-theme md-option .md-text{color:"{{background-900-0.87}}"}md-sidenav.md-THEME_NAME-theme,md-sidenav.md-THEME_NAME-theme md-content{background-color:"{{background-hue-1}}"}md-slider.md-THEME_NAME-theme .md-track{background-color:"{{foreground-3}}"}md-slider.md-THEME_NAME-theme .md-track-ticks{color:"{{background-contrast}}"}md-slider.md-THEME_NAME-theme .md-focus-ring{background-color:"{{accent-A200-0.2}}"}md-slider.md-THEME_NAME-theme .md-disabled-thumb{border-color:"{{background-color}}";background-color:"{{background-color}}"}md-slider.md-THEME_NAME-theme.md-min .md-thumb:after{background-color:"{{background-color}}";border-color:"{{foreground-3}}"}md-slider.md-THEME_NAME-theme.md-min .md-focus-ring{background-color:"{{foreground-3-0.38}}"}md-slider.md-THEME_NAME-theme.md-min[md-discrete] .md-thumb:after{background-color:"{{background-contrast}}";border-color:transparent}md-slider.md-THEME_NAME-theme.md-min[md-discrete] .md-sign{background-color:"{{background-400}}"}md-slider.md-THEME_NAME-theme.md-min[md-discrete] .md-sign:after{border-top-color:"{{background-400}}"}md-slider.md-THEME_NAME-theme.md-min[md-discrete][md-vertical] .md-sign:after{border-top-color:transparent;border-left-color:"{{background-400}}"}md-slider.md-THEME_NAME-theme .md-track.md-track-fill{background-color:"{{accent-color}}"}md-slider.md-THEME_NAME-theme .md-thumb:after{border-color:"{{accent-color}}";background-color:"{{accent-color}}"}md-slider.md-THEME_NAME-theme .md-sign{background-color:"{{accent-color}}"}md-slider.md-THEME_NAME-theme .md-sign:after{border-top-color:"{{accent-color}}"}md-slider.md-THEME_NAME-theme[md-vertical] .md-sign:after{border-top-color:transparent;border-left-color:"{{accent-color}}"}md-slider.md-THEME_NAME-theme .md-thumb-text{color:"{{accent-contrast}}"}md-slider.md-THEME_NAME-theme.md-warn .md-focus-ring{background-color:"{{warn-200-0.38}}"}md-slider.md-THEME_NAME-theme.md-warn .md-track.md-track-fill{background-color:"{{warn-color}}"}md-slider.md-THEME_NAME-theme.md-warn .md-thumb:after{border-color:"{{warn-color}}";background-color:"{{warn-color}}"}md-slider.md-THEME_NAME-theme.md-warn .md-sign{background-color:"{{warn-color}}"}md-slider.md-THEME_NAME-theme.md-warn .md-sign:after{border-top-color:"{{warn-color}}"}md-slider.md-THEME_NAME-theme.md-warn[md-vertical] .md-sign:after{border-top-color:transparent;border-left-color:"{{warn-color}}"}md-slider.md-THEME_NAME-theme.md-warn .md-thumb-text{color:"{{warn-contrast}}"}md-slider.md-THEME_NAME-theme.md-primary .md-focus-ring{background-color:"{{primary-200-0.38}}"}md-slider.md-THEME_NAME-theme.md-primary .md-track.md-track-fill{background-color:"{{primary-color}}"}md-slider.md-THEME_NAME-theme.md-primary .md-thumb:after{border-color:"{{primary-color}}";background-color:"{{primary-color}}"}md-slider.md-THEME_NAME-theme.md-primary .md-sign{background-color:"{{primary-color}}"}md-slider.md-THEME_NAME-theme.md-primary .md-sign:after{border-top-color:"{{primary-color}}"}md-slider.md-THEME_NAME-theme.md-primary[md-vertical] .md-sign:after{border-top-color:transparent;border-left-color:"{{primary-color}}"}md-slider.md-THEME_NAME-theme.md-primary .md-thumb-text{color:"{{primary-contrast}}"}md-slider.md-THEME_NAME-theme[disabled] .md-thumb:after{border-color:transparent}md-slider.md-THEME_NAME-theme[disabled]:not(.md-min) .md-thumb:after,md-slider.md-THEME_NAME-theme[disabled][md-discrete] .md-thumb:after{background-color:"{{foreground-3}}";border-color:transparent}md-slider.md-THEME_NAME-theme[disabled][readonly] .md-sign{background-color:"{{background-400}}"}md-slider.md-THEME_NAME-theme[disabled][readonly] .md-sign:after{border-top-color:"{{background-400}}"}md-slider.md-THEME_NAME-theme[disabled][readonly][md-vertical] .md-sign:after{border-top-color:transparent;border-left-color:"{{background-400}}"}md-slider.md-THEME_NAME-theme[disabled][readonly] .md-disabled-thumb{border-color:transparent;background-color:transparent}md-slider-container[disabled]>:first-child:not(md-slider),md-slider-container[disabled]>:last-child:not(md-slider){color:"{{foreground-3}}"}.md-subheader.md-THEME_NAME-theme{color:"{{ foreground-2-0.23 }}";background-color:"{{background-default}}"}.md-subheader.md-THEME_NAME-theme.md-primary{color:"{{primary-color}}"}.md-subheader.md-THEME_NAME-theme.md-accent{color:"{{accent-color}}"}.md-subheader.md-THEME_NAME-theme.md-warn{color:"{{warn-color}}"}md-switch.md-THEME_NAME-theme .md-ink-ripple{color:"{{background-500}}"}md-switch.md-THEME_NAME-theme .md-thumb{background-color:"{{background-50}}"}md-switch.md-THEME_NAME-theme .md-bar{background-color:"{{background-500}}"}md-switch.md-THEME_NAME-theme.md-checked .md-ink-ripple{color:"{{accent-color}}"}md-switch.md-THEME_NAME-theme.md-checked .md-thumb{background-color:"{{accent-color}}"}md-switch.md-THEME_NAME-theme.md-checked .md-bar{background-color:"{{accent-color-0.5}}"}md-switch.md-THEME_NAME-theme.md-checked.md-focused .md-thumb:before{background-color:"{{accent-color-0.26}}"}md-switch.md-THEME_NAME-theme.md-checked.md-primary .md-ink-ripple{color:"{{primary-color}}"}md-switch.md-THEME_NAME-theme.md-checked.md-primary .md-thumb{background-color:"{{primary-color}}"}md-switch.md-THEME_NAME-theme.md-checked.md-primary .md-bar{background-color:"{{primary-color-0.5}}"}md-switch.md-THEME_NAME-theme.md-checked.md-primary.md-focused .md-thumb:before{background-color:"{{primary-color-0.26}}"}md-switch.md-THEME_NAME-theme.md-checked.md-warn .md-ink-ripple{color:"{{warn-color}}"}md-switch.md-THEME_NAME-theme.md-checked.md-warn .md-thumb{background-color:"{{warn-color}}"}md-switch.md-THEME_NAME-theme.md-checked.md-warn .md-bar{background-color:"{{warn-color-0.5}}"}md-switch.md-THEME_NAME-theme.md-checked.md-warn.md-focused .md-thumb:before{background-color:"{{warn-color-0.26}}"}md-switch.md-THEME_NAME-theme[disabled] .md-thumb{background-color:"{{background-400}}"}md-switch.md-THEME_NAME-theme[disabled] .md-bar{background-color:"{{foreground-4}}"}md-toast.md-THEME_NAME-theme .md-toast-content{background-color:#323232;color:"{{background-50}}"}md-toast.md-THEME_NAME-theme .md-toast-content .md-button{color:"{{background-50}}"}md-toast.md-THEME_NAME-theme .md-toast-content .md-button.md-highlight{color:"{{accent-color}}"}md-toast.md-THEME_NAME-theme .md-toast-content .md-button.md-highlight.md-primary{color:"{{primary-color}}"}md-toast.md-THEME_NAME-theme .md-toast-content .md-button.md-highlight.md-warn{color:"{{warn-color}}"}md-tabs.md-THEME_NAME-theme md-tabs-wrapper{background-color:transparent;border-color:"{{foreground-4}}"}md-tabs.md-THEME_NAME-theme .md-paginator md-icon{color:"{{primary-color}}"}md-tabs.md-THEME_NAME-theme md-ink-bar{color:"{{accent-color}}";background:"{{accent-color}}"}md-tabs.md-THEME_NAME-theme .md-tab{color:"{{foreground-2}}"}md-tabs.md-THEME_NAME-theme .md-tab[disabled],md-tabs.md-THEME_NAME-theme .md-tab[disabled] md-icon{color:"{{foreground-3}}"}md-tabs.md-THEME_NAME-theme .md-tab.md-active,md-tabs.md-THEME_NAME-theme .md-tab.md-active md-icon,md-tabs.md-THEME_NAME-theme .md-tab.md-focused,md-tabs.md-THEME_NAME-theme .md-tab.md-focused md-icon{color:"{{primary-color}}"}md-tabs.md-THEME_NAME-theme .md-tab.md-focused{background:"{{primary-color-0.1}}"}md-tabs.md-THEME_NAME-theme .md-tab .md-ripple-container{color:"{{accent-A100}}"}md-tabs.md-THEME_NAME-theme.md-accent>md-tabs-wrapper{background-color:"{{accent-color}}"}md-tabs.md-THEME_NAME-theme.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]),md-tabs.md-THEME_NAME-theme.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]) md-icon{color:"{{accent-A100}}"}md-tabs.md-THEME_NAME-theme.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active,md-tabs.md-THEME_NAME-theme.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active md-icon,md-tabs.md-THEME_NAME-theme.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,md-tabs.md-THEME_NAME-theme.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused md-icon{color:"{{accent-contrast}}"}md-tabs.md-THEME_NAME-theme.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused{background:"{{accent-contrast-0.1}}"}md-tabs.md-THEME_NAME-theme.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-ink-bar{color:"{{primary-600-1}}";background:"{{primary-600-1}}"}md-tabs.md-THEME_NAME-theme.md-primary>md-tabs-wrapper{background-color:"{{primary-color}}"}md-tabs.md-THEME_NAME-theme.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]),md-tabs.md-THEME_NAME-theme.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]) md-icon{color:"{{primary-100}}"}md-tabs.md-THEME_NAME-theme.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active,md-tabs.md-THEME_NAME-theme.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active md-icon,md-tabs.md-THEME_NAME-theme.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,md-tabs.md-THEME_NAME-theme.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused md-icon{color:"{{primary-contrast}}"}md-tabs.md-THEME_NAME-theme.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused{background:"{{primary-contrast-0.1}}"}md-tabs.md-THEME_NAME-theme.md-warn>md-tabs-wrapper{background-color:"{{warn-color}}"}md-tabs.md-THEME_NAME-theme.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]),md-tabs.md-THEME_NAME-theme.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]) md-icon{color:"{{warn-100}}"}md-tabs.md-THEME_NAME-theme.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active,md-tabs.md-THEME_NAME-theme.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active md-icon,md-tabs.md-THEME_NAME-theme.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,md-tabs.md-THEME_NAME-theme.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused md-icon{color:"{{warn-contrast}}"}md-tabs.md-THEME_NAME-theme.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused{background:"{{warn-contrast-0.1}}"}md-toolbar>md-tabs.md-THEME_NAME-theme>md-tabs-wrapper{background-color:"{{primary-color}}"}md-toolbar>md-tabs.md-THEME_NAME-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]),md-toolbar>md-tabs.md-THEME_NAME-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]) md-icon{color:"{{primary-100}}"}md-toolbar>md-tabs.md-THEME_NAME-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active,md-toolbar>md-tabs.md-THEME_NAME-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active md-icon,md-toolbar>md-tabs.md-THEME_NAME-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,md-toolbar>md-tabs.md-THEME_NAME-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused md-icon{color:"{{primary-contrast}}"}md-toolbar>md-tabs.md-THEME_NAME-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused{background:"{{primary-contrast-0.1}}"}md-toolbar.md-accent>md-tabs.md-THEME_NAME-theme>md-tabs-wrapper{background-color:"{{accent-color}}"}md-toolbar.md-accent>md-tabs.md-THEME_NAME-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]),md-toolbar.md-accent>md-tabs.md-THEME_NAME-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]) md-icon{color:"{{accent-A100}}"}md-toolbar.md-accent>md-tabs.md-THEME_NAME-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active,md-toolbar.md-accent>md-tabs.md-THEME_NAME-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active md-icon,md-toolbar.md-accent>md-tabs.md-THEME_NAME-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,md-toolbar.md-accent>md-tabs.md-THEME_NAME-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused md-icon{color:"{{accent-contrast}}"}md-toolbar.md-accent>md-tabs.md-THEME_NAME-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused{background:"{{accent-contrast-0.1}}"}md-toolbar.md-accent>md-tabs.md-THEME_NAME-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-ink-bar{color:"{{primary-600-1}}";background:"{{primary-600-1}}"}md-toolbar.md-warn>md-tabs.md-THEME_NAME-theme>md-tabs-wrapper{background-color:"{{warn-color}}"}md-toolbar.md-warn>md-tabs.md-THEME_NAME-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]),md-toolbar.md-warn>md-tabs.md-THEME_NAME-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]) md-icon{color:"{{warn-100}}"}md-toolbar.md-warn>md-tabs.md-THEME_NAME-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active,md-toolbar.md-warn>md-tabs.md-THEME_NAME-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active md-icon,md-toolbar.md-warn>md-tabs.md-THEME_NAME-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,md-toolbar.md-warn>md-tabs.md-THEME_NAME-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused md-icon{color:"{{warn-contrast}}"}md-toolbar.md-warn>md-tabs.md-THEME_NAME-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused{background:"{{warn-contrast-0.1}}"}md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar){background-color:"{{primary-color}}";color:"{{primary-contrast}}"}md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar) md-icon{color:"{{primary-contrast}}";fill:"{{primary-contrast}}"}md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar) .md-button[disabled] md-icon{color:"{{primary-contrast-0.26}}";fill:"{{primary-contrast-0.26}}"}md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar).md-accent{background-color:"{{accent-color}}";color:"{{accent-contrast}}"}md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar).md-accent .md-ink-ripple{color:"{{accent-contrast}}"}md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar).md-accent md-icon{color:"{{accent-contrast}}";fill:"{{accent-contrast}}"}md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar).md-accent .md-button[disabled] md-icon{color:"{{accent-contrast-0.26}}";fill:"{{accent-contrast-0.26}}"}md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar).md-warn{background-color:"{{warn-color}}";color:"{{warn-contrast}}"}.md-panel.md-tooltip.md-THEME_NAME-theme{color:"{{background-700-contrast}}";background-color:"{{background-700}}"}body.md-THEME_NAME-theme,html.md-THEME_NAME-theme{color:"{{foreground-1}}";background-color:"{{background-color}}"}');
}()}(window,window.angular),window.ngMaterial={version:{full:"1.1.3"}};
//! moment.js
//! version : 2.17.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

;(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    global.moment = factory()
}(this, (function () { 'use strict';

var hookCallback;

function hooks () {
    return hookCallback.apply(null, arguments);
}

// This is done to register the method called with moment()
// without creating circular dependencies.
function setHookCallback (callback) {
    hookCallback = callback;
}

function isArray(input) {
    return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
}

function isObject(input) {
    // IE8 will treat undefined and null as object if it wasn't for
    // input != null
    return input != null && Object.prototype.toString.call(input) === '[object Object]';
}

function isObjectEmpty(obj) {
    var k;
    for (k in obj) {
        // even if its not own property I'd still call it non-empty
        return false;
    }
    return true;
}

function isNumber(input) {
    return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
}

function isDate(input) {
    return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
}

function map(arr, fn) {
    var res = [], i;
    for (i = 0; i < arr.length; ++i) {
        res.push(fn(arr[i], i));
    }
    return res;
}

function hasOwnProp(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
}

function extend(a, b) {
    for (var i in b) {
        if (hasOwnProp(b, i)) {
            a[i] = b[i];
        }
    }

    if (hasOwnProp(b, 'toString')) {
        a.toString = b.toString;
    }

    if (hasOwnProp(b, 'valueOf')) {
        a.valueOf = b.valueOf;
    }

    return a;
}

function createUTC (input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, true).utc();
}

function defaultParsingFlags() {
    // We need to deep clone this object.
    return {
        empty           : false,
        unusedTokens    : [],
        unusedInput     : [],
        overflow        : -2,
        charsLeftOver   : 0,
        nullInput       : false,
        invalidMonth    : null,
        invalidFormat   : false,
        userInvalidated : false,
        iso             : false,
        parsedDateParts : [],
        meridiem        : null
    };
}

function getParsingFlags(m) {
    if (m._pf == null) {
        m._pf = defaultParsingFlags();
    }
    return m._pf;
}

var some;
if (Array.prototype.some) {
    some = Array.prototype.some;
} else {
    some = function (fun) {
        var t = Object(this);
        var len = t.length >>> 0;

        for (var i = 0; i < len; i++) {
            if (i in t && fun.call(this, t[i], i, t)) {
                return true;
            }
        }

        return false;
    };
}

var some$1 = some;

function isValid(m) {
    if (m._isValid == null) {
        var flags = getParsingFlags(m);
        var parsedParts = some$1.call(flags.parsedDateParts, function (i) {
            return i != null;
        });
        var isNowValid = !isNaN(m._d.getTime()) &&
            flags.overflow < 0 &&
            !flags.empty &&
            !flags.invalidMonth &&
            !flags.invalidWeekday &&
            !flags.nullInput &&
            !flags.invalidFormat &&
            !flags.userInvalidated &&
            (!flags.meridiem || (flags.meridiem && parsedParts));

        if (m._strict) {
            isNowValid = isNowValid &&
                flags.charsLeftOver === 0 &&
                flags.unusedTokens.length === 0 &&
                flags.bigHour === undefined;
        }

        if (Object.isFrozen == null || !Object.isFrozen(m)) {
            m._isValid = isNowValid;
        }
        else {
            return isNowValid;
        }
    }
    return m._isValid;
}

function createInvalid (flags) {
    var m = createUTC(NaN);
    if (flags != null) {
        extend(getParsingFlags(m), flags);
    }
    else {
        getParsingFlags(m).userInvalidated = true;
    }

    return m;
}

function isUndefined(input) {
    return input === void 0;
}

// Plugins that add properties should also add the key here (null value),
// so we can properly clone ourselves.
var momentProperties = hooks.momentProperties = [];

function copyConfig(to, from) {
    var i, prop, val;

    if (!isUndefined(from._isAMomentObject)) {
        to._isAMomentObject = from._isAMomentObject;
    }
    if (!isUndefined(from._i)) {
        to._i = from._i;
    }
    if (!isUndefined(from._f)) {
        to._f = from._f;
    }
    if (!isUndefined(from._l)) {
        to._l = from._l;
    }
    if (!isUndefined(from._strict)) {
        to._strict = from._strict;
    }
    if (!isUndefined(from._tzm)) {
        to._tzm = from._tzm;
    }
    if (!isUndefined(from._isUTC)) {
        to._isUTC = from._isUTC;
    }
    if (!isUndefined(from._offset)) {
        to._offset = from._offset;
    }
    if (!isUndefined(from._pf)) {
        to._pf = getParsingFlags(from);
    }
    if (!isUndefined(from._locale)) {
        to._locale = from._locale;
    }

    if (momentProperties.length > 0) {
        for (i in momentProperties) {
            prop = momentProperties[i];
            val = from[prop];
            if (!isUndefined(val)) {
                to[prop] = val;
            }
        }
    }

    return to;
}

var updateInProgress = false;

// Moment prototype object
function Moment(config) {
    copyConfig(this, config);
    this._d = new Date(config._d != null ? config._d.getTime() : NaN);
    if (!this.isValid()) {
        this._d = new Date(NaN);
    }
    // Prevent infinite loop in case updateOffset creates new moment
    // objects.
    if (updateInProgress === false) {
        updateInProgress = true;
        hooks.updateOffset(this);
        updateInProgress = false;
    }
}

function isMoment (obj) {
    return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
}

function absFloor (number) {
    if (number < 0) {
        // -0 -> 0
        return Math.ceil(number) || 0;
    } else {
        return Math.floor(number);
    }
}

function toInt(argumentForCoercion) {
    var coercedNumber = +argumentForCoercion,
        value = 0;

    if (coercedNumber !== 0 && isFinite(coercedNumber)) {
        value = absFloor(coercedNumber);
    }

    return value;
}

// compare two arrays, return the number of differences
function compareArrays(array1, array2, dontConvert) {
    var len = Math.min(array1.length, array2.length),
        lengthDiff = Math.abs(array1.length - array2.length),
        diffs = 0,
        i;
    for (i = 0; i < len; i++) {
        if ((dontConvert && array1[i] !== array2[i]) ||
            (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
            diffs++;
        }
    }
    return diffs + lengthDiff;
}

function warn(msg) {
    if (hooks.suppressDeprecationWarnings === false &&
            (typeof console !==  'undefined') && console.warn) {
        console.warn('Deprecation warning: ' + msg);
    }
}

function deprecate(msg, fn) {
    var firstTime = true;

    return extend(function () {
        if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(null, msg);
        }
        if (firstTime) {
            var args = [];
            var arg;
            for (var i = 0; i < arguments.length; i++) {
                arg = '';
                if (typeof arguments[i] === 'object') {
                    arg += '\n[' + i + '] ';
                    for (var key in arguments[0]) {
                        arg += key + ': ' + arguments[0][key] + ', ';
                    }
                    arg = arg.slice(0, -2); // Remove trailing comma and space
                } else {
                    arg = arguments[i];
                }
                args.push(arg);
            }
            warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + (new Error()).stack);
            firstTime = false;
        }
        return fn.apply(this, arguments);
    }, fn);
}

var deprecations = {};

function deprecateSimple(name, msg) {
    if (hooks.deprecationHandler != null) {
        hooks.deprecationHandler(name, msg);
    }
    if (!deprecations[name]) {
        warn(msg);
        deprecations[name] = true;
    }
}

hooks.suppressDeprecationWarnings = false;
hooks.deprecationHandler = null;

function isFunction(input) {
    return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
}

function set (config) {
    var prop, i;
    for (i in config) {
        prop = config[i];
        if (isFunction(prop)) {
            this[i] = prop;
        } else {
            this['_' + i] = prop;
        }
    }
    this._config = config;
    // Lenient ordinal parsing accepts just a number in addition to
    // number + (possibly) stuff coming from _ordinalParseLenient.
    this._ordinalParseLenient = new RegExp(this._ordinalParse.source + '|' + (/\d{1,2}/).source);
}

function mergeConfigs(parentConfig, childConfig) {
    var res = extend({}, parentConfig), prop;
    for (prop in childConfig) {
        if (hasOwnProp(childConfig, prop)) {
            if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                res[prop] = {};
                extend(res[prop], parentConfig[prop]);
                extend(res[prop], childConfig[prop]);
            } else if (childConfig[prop] != null) {
                res[prop] = childConfig[prop];
            } else {
                delete res[prop];
            }
        }
    }
    for (prop in parentConfig) {
        if (hasOwnProp(parentConfig, prop) &&
                !hasOwnProp(childConfig, prop) &&
                isObject(parentConfig[prop])) {
            // make sure changes to properties don't modify parent config
            res[prop] = extend({}, res[prop]);
        }
    }
    return res;
}

function Locale(config) {
    if (config != null) {
        this.set(config);
    }
}

var keys;

if (Object.keys) {
    keys = Object.keys;
} else {
    keys = function (obj) {
        var i, res = [];
        for (i in obj) {
            if (hasOwnProp(obj, i)) {
                res.push(i);
            }
        }
        return res;
    };
}

var keys$1 = keys;

var defaultCalendar = {
    sameDay : '[Today at] LT',
    nextDay : '[Tomorrow at] LT',
    nextWeek : 'dddd [at] LT',
    lastDay : '[Yesterday at] LT',
    lastWeek : '[Last] dddd [at] LT',
    sameElse : 'L'
};

function calendar (key, mom, now) {
    var output = this._calendar[key] || this._calendar['sameElse'];
    return isFunction(output) ? output.call(mom, now) : output;
}

var defaultLongDateFormat = {
    LTS  : 'h:mm:ss A',
    LT   : 'h:mm A',
    L    : 'MM/DD/YYYY',
    LL   : 'MMMM D, YYYY',
    LLL  : 'MMMM D, YYYY h:mm A',
    LLLL : 'dddd, MMMM D, YYYY h:mm A'
};

function longDateFormat (key) {
    var format = this._longDateFormat[key],
        formatUpper = this._longDateFormat[key.toUpperCase()];

    if (format || !formatUpper) {
        return format;
    }

    this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
        return val.slice(1);
    });

    return this._longDateFormat[key];
}

var defaultInvalidDate = 'Invalid date';

function invalidDate () {
    return this._invalidDate;
}

var defaultOrdinal = '%d';
var defaultOrdinalParse = /\d{1,2}/;

function ordinal (number) {
    return this._ordinal.replace('%d', number);
}

var defaultRelativeTime = {
    future : 'in %s',
    past   : '%s ago',
    s  : 'a few seconds',
    m  : 'a minute',
    mm : '%d minutes',
    h  : 'an hour',
    hh : '%d hours',
    d  : 'a day',
    dd : '%d days',
    M  : 'a month',
    MM : '%d months',
    y  : 'a year',
    yy : '%d years'
};

function relativeTime (number, withoutSuffix, string, isFuture) {
    var output = this._relativeTime[string];
    return (isFunction(output)) ?
        output(number, withoutSuffix, string, isFuture) :
        output.replace(/%d/i, number);
}

function pastFuture (diff, output) {
    var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
    return isFunction(format) ? format(output) : format.replace(/%s/i, output);
}

var aliases = {};

function addUnitAlias (unit, shorthand) {
    var lowerCase = unit.toLowerCase();
    aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
}

function normalizeUnits(units) {
    return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
}

function normalizeObjectUnits(inputObject) {
    var normalizedInput = {},
        normalizedProp,
        prop;

    for (prop in inputObject) {
        if (hasOwnProp(inputObject, prop)) {
            normalizedProp = normalizeUnits(prop);
            if (normalizedProp) {
                normalizedInput[normalizedProp] = inputObject[prop];
            }
        }
    }

    return normalizedInput;
}

var priorities = {};

function addUnitPriority(unit, priority) {
    priorities[unit] = priority;
}

function getPrioritizedUnits(unitsObj) {
    var units = [];
    for (var u in unitsObj) {
        units.push({unit: u, priority: priorities[u]});
    }
    units.sort(function (a, b) {
        return a.priority - b.priority;
    });
    return units;
}

function makeGetSet (unit, keepTime) {
    return function (value) {
        if (value != null) {
            set$1(this, unit, value);
            hooks.updateOffset(this, keepTime);
            return this;
        } else {
            return get(this, unit);
        }
    };
}

function get (mom, unit) {
    return mom.isValid() ?
        mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
}

function set$1 (mom, unit, value) {
    if (mom.isValid()) {
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
    }
}

// MOMENTS

function stringGet (units) {
    units = normalizeUnits(units);
    if (isFunction(this[units])) {
        return this[units]();
    }
    return this;
}


function stringSet (units, value) {
    if (typeof units === 'object') {
        units = normalizeObjectUnits(units);
        var prioritized = getPrioritizedUnits(units);
        for (var i = 0; i < prioritized.length; i++) {
            this[prioritized[i].unit](units[prioritized[i].unit]);
        }
    } else {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
            return this[units](value);
        }
    }
    return this;
}

function zeroFill(number, targetLength, forceSign) {
    var absNumber = '' + Math.abs(number),
        zerosToFill = targetLength - absNumber.length,
        sign = number >= 0;
    return (sign ? (forceSign ? '+' : '') : '-') +
        Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
}

var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

var formatFunctions = {};

var formatTokenFunctions = {};

// token:    'M'
// padded:   ['MM', 2]
// ordinal:  'Mo'
// callback: function () { this.month() + 1 }
function addFormatToken (token, padded, ordinal, callback) {
    var func = callback;
    if (typeof callback === 'string') {
        func = function () {
            return this[callback]();
        };
    }
    if (token) {
        formatTokenFunctions[token] = func;
    }
    if (padded) {
        formatTokenFunctions[padded[0]] = function () {
            return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
        };
    }
    if (ordinal) {
        formatTokenFunctions[ordinal] = function () {
            return this.localeData().ordinal(func.apply(this, arguments), token);
        };
    }
}

function removeFormattingTokens(input) {
    if (input.match(/\[[\s\S]/)) {
        return input.replace(/^\[|\]$/g, '');
    }
    return input.replace(/\\/g, '');
}

function makeFormatFunction(format) {
    var array = format.match(formattingTokens), i, length;

    for (i = 0, length = array.length; i < length; i++) {
        if (formatTokenFunctions[array[i]]) {
            array[i] = formatTokenFunctions[array[i]];
        } else {
            array[i] = removeFormattingTokens(array[i]);
        }
    }

    return function (mom) {
        var output = '', i;
        for (i = 0; i < length; i++) {
            output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];
        }
        return output;
    };
}

// format date using native date object
function formatMoment(m, format) {
    if (!m.isValid()) {
        return m.localeData().invalidDate();
    }

    format = expandFormat(format, m.localeData());
    formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

    return formatFunctions[format](m);
}

function expandFormat(format, locale) {
    var i = 5;

    function replaceLongDateFormatTokens(input) {
        return locale.longDateFormat(input) || input;
    }

    localFormattingTokens.lastIndex = 0;
    while (i >= 0 && localFormattingTokens.test(format)) {
        format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
        localFormattingTokens.lastIndex = 0;
        i -= 1;
    }

    return format;
}

var match1         = /\d/;            //       0 - 9
var match2         = /\d\d/;          //      00 - 99
var match3         = /\d{3}/;         //     000 - 999
var match4         = /\d{4}/;         //    0000 - 9999
var match6         = /[+-]?\d{6}/;    // -999999 - 999999
var match1to2      = /\d\d?/;         //       0 - 99
var match3to4      = /\d\d\d\d?/;     //     999 - 9999
var match5to6      = /\d\d\d\d\d\d?/; //   99999 - 999999
var match1to3      = /\d{1,3}/;       //       0 - 999
var match1to4      = /\d{1,4}/;       //       0 - 9999
var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999

var matchUnsigned  = /\d+/;           //       0 - inf
var matchSigned    = /[+-]?\d+/;      //    -inf - inf

var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

// any word (or two) characters or numbers including two/three word month in arabic.
// includes scottish gaelic two word and hyphenated months
var matchWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;


var regexes = {};

function addRegexToken (token, regex, strictRegex) {
    regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
        return (isStrict && strictRegex) ? strictRegex : regex;
    };
}

function getParseRegexForToken (token, config) {
    if (!hasOwnProp(regexes, token)) {
        return new RegExp(unescapeFormat(token));
    }

    return regexes[token](config._strict, config._locale);
}

// Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
function unescapeFormat(s) {
    return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
        return p1 || p2 || p3 || p4;
    }));
}

function regexEscape(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

var tokens = {};

function addParseToken (token, callback) {
    var i, func = callback;
    if (typeof token === 'string') {
        token = [token];
    }
    if (isNumber(callback)) {
        func = function (input, array) {
            array[callback] = toInt(input);
        };
    }
    for (i = 0; i < token.length; i++) {
        tokens[token[i]] = func;
    }
}

function addWeekParseToken (token, callback) {
    addParseToken(token, function (input, array, config, token) {
        config._w = config._w || {};
        callback(input, config._w, config, token);
    });
}

function addTimeToArrayFromToken(token, input, config) {
    if (input != null && hasOwnProp(tokens, token)) {
        tokens[token](input, config._a, config, token);
    }
}

var YEAR = 0;
var MONTH = 1;
var DATE = 2;
var HOUR = 3;
var MINUTE = 4;
var SECOND = 5;
var MILLISECOND = 6;
var WEEK = 7;
var WEEKDAY = 8;

var indexOf;

if (Array.prototype.indexOf) {
    indexOf = Array.prototype.indexOf;
} else {
    indexOf = function (o) {
        // I know
        var i;
        for (i = 0; i < this.length; ++i) {
            if (this[i] === o) {
                return i;
            }
        }
        return -1;
    };
}

var indexOf$1 = indexOf;

function daysInMonth(year, month) {
    return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
}

// FORMATTING

addFormatToken('M', ['MM', 2], 'Mo', function () {
    return this.month() + 1;
});

addFormatToken('MMM', 0, 0, function (format) {
    return this.localeData().monthsShort(this, format);
});

addFormatToken('MMMM', 0, 0, function (format) {
    return this.localeData().months(this, format);
});

// ALIASES

addUnitAlias('month', 'M');

// PRIORITY

addUnitPriority('month', 8);

// PARSING

addRegexToken('M',    match1to2);
addRegexToken('MM',   match1to2, match2);
addRegexToken('MMM',  function (isStrict, locale) {
    return locale.monthsShortRegex(isStrict);
});
addRegexToken('MMMM', function (isStrict, locale) {
    return locale.monthsRegex(isStrict);
});

addParseToken(['M', 'MM'], function (input, array) {
    array[MONTH] = toInt(input) - 1;
});

addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
    var month = config._locale.monthsParse(input, token, config._strict);
    // if we didn't find a month name, mark the date as invalid.
    if (month != null) {
        array[MONTH] = month;
    } else {
        getParsingFlags(config).invalidMonth = input;
    }
});

// LOCALES

var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
function localeMonths (m, format) {
    if (!m) {
        return this._months;
    }
    return isArray(this._months) ? this._months[m.month()] :
        this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
}

var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
function localeMonthsShort (m, format) {
    if (!m) {
        return this._monthsShort;
    }
    return isArray(this._monthsShort) ? this._monthsShort[m.month()] :
        this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
}

function handleStrictParse(monthName, format, strict) {
    var i, ii, mom, llc = monthName.toLocaleLowerCase();
    if (!this._monthsParse) {
        // this is not used
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
        for (i = 0; i < 12; ++i) {
            mom = createUTC([2000, i]);
            this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
            this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
        }
    }

    if (strict) {
        if (format === 'MMM') {
            ii = indexOf$1.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf$1.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
        }
    } else {
        if (format === 'MMM') {
            ii = indexOf$1.call(this._shortMonthsParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf$1.call(this._longMonthsParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
        }
    }
}

function localeMonthsParse (monthName, format, strict) {
    var i, mom, regex;

    if (this._monthsParseExact) {
        return handleStrictParse.call(this, monthName, format, strict);
    }

    if (!this._monthsParse) {
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
    }

    // TODO: add sorting
    // Sorting makes sure if one month (or abbr) is a prefix of another
    // see sorting in computeMonthsParse
    for (i = 0; i < 12; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, i]);
        if (strict && !this._longMonthsParse[i]) {
            this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
            this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
        }
        if (!strict && !this._monthsParse[i]) {
            regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
            this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
        }
        // test the regex
        if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
            return i;
        } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
            return i;
        } else if (!strict && this._monthsParse[i].test(monthName)) {
            return i;
        }
    }
}

// MOMENTS

function setMonth (mom, value) {
    var dayOfMonth;

    if (!mom.isValid()) {
        // No op
        return mom;
    }

    if (typeof value === 'string') {
        if (/^\d+$/.test(value)) {
            value = toInt(value);
        } else {
            value = mom.localeData().monthsParse(value);
            // TODO: Another silent failure?
            if (!isNumber(value)) {
                return mom;
            }
        }
    }

    dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
    mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
    return mom;
}

function getSetMonth (value) {
    if (value != null) {
        setMonth(this, value);
        hooks.updateOffset(this, true);
        return this;
    } else {
        return get(this, 'Month');
    }
}

function getDaysInMonth () {
    return daysInMonth(this.year(), this.month());
}

var defaultMonthsShortRegex = matchWord;
function monthsShortRegex (isStrict) {
    if (this._monthsParseExact) {
        if (!hasOwnProp(this, '_monthsRegex')) {
            computeMonthsParse.call(this);
        }
        if (isStrict) {
            return this._monthsShortStrictRegex;
        } else {
            return this._monthsShortRegex;
        }
    } else {
        if (!hasOwnProp(this, '_monthsShortRegex')) {
            this._monthsShortRegex = defaultMonthsShortRegex;
        }
        return this._monthsShortStrictRegex && isStrict ?
            this._monthsShortStrictRegex : this._monthsShortRegex;
    }
}

var defaultMonthsRegex = matchWord;
function monthsRegex (isStrict) {
    if (this._monthsParseExact) {
        if (!hasOwnProp(this, '_monthsRegex')) {
            computeMonthsParse.call(this);
        }
        if (isStrict) {
            return this._monthsStrictRegex;
        } else {
            return this._monthsRegex;
        }
    } else {
        if (!hasOwnProp(this, '_monthsRegex')) {
            this._monthsRegex = defaultMonthsRegex;
        }
        return this._monthsStrictRegex && isStrict ?
            this._monthsStrictRegex : this._monthsRegex;
    }
}

function computeMonthsParse () {
    function cmpLenRev(a, b) {
        return b.length - a.length;
    }

    var shortPieces = [], longPieces = [], mixedPieces = [],
        i, mom;
    for (i = 0; i < 12; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, i]);
        shortPieces.push(this.monthsShort(mom, ''));
        longPieces.push(this.months(mom, ''));
        mixedPieces.push(this.months(mom, ''));
        mixedPieces.push(this.monthsShort(mom, ''));
    }
    // Sorting makes sure if one month (or abbr) is a prefix of another it
    // will match the longer piece.
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 12; i++) {
        shortPieces[i] = regexEscape(shortPieces[i]);
        longPieces[i] = regexEscape(longPieces[i]);
    }
    for (i = 0; i < 24; i++) {
        mixedPieces[i] = regexEscape(mixedPieces[i]);
    }

    this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._monthsShortRegex = this._monthsRegex;
    this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
    this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
}

// FORMATTING

addFormatToken('Y', 0, 0, function () {
    var y = this.year();
    return y <= 9999 ? '' + y : '+' + y;
});

addFormatToken(0, ['YY', 2], 0, function () {
    return this.year() % 100;
});

addFormatToken(0, ['YYYY',   4],       0, 'year');
addFormatToken(0, ['YYYYY',  5],       0, 'year');
addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

// ALIASES

addUnitAlias('year', 'y');

// PRIORITIES

addUnitPriority('year', 1);

// PARSING

addRegexToken('Y',      matchSigned);
addRegexToken('YY',     match1to2, match2);
addRegexToken('YYYY',   match1to4, match4);
addRegexToken('YYYYY',  match1to6, match6);
addRegexToken('YYYYYY', match1to6, match6);

addParseToken(['YYYYY', 'YYYYYY'], YEAR);
addParseToken('YYYY', function (input, array) {
    array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
});
addParseToken('YY', function (input, array) {
    array[YEAR] = hooks.parseTwoDigitYear(input);
});
addParseToken('Y', function (input, array) {
    array[YEAR] = parseInt(input, 10);
});

// HELPERS

function daysInYear(year) {
    return isLeapYear(year) ? 366 : 365;
}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// HOOKS

hooks.parseTwoDigitYear = function (input) {
    return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
};

// MOMENTS

var getSetYear = makeGetSet('FullYear', true);

function getIsLeapYear () {
    return isLeapYear(this.year());
}

function createDate (y, m, d, h, M, s, ms) {
    //can't just apply() to create a date:
    //http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
    var date = new Date(y, m, d, h, M, s, ms);

    //the date constructor remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
        date.setFullYear(y);
    }
    return date;
}

function createUTCDate (y) {
    var date = new Date(Date.UTC.apply(null, arguments));

    //the Date.UTC function remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
        date.setUTCFullYear(y);
    }
    return date;
}

// start-of-first-week - start-of-year
function firstWeekOffset(year, dow, doy) {
    var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
        fwd = 7 + dow - doy,
        // first-week day local weekday -- which local weekday is fwd
        fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

    return -fwdlw + fwd - 1;
}

//http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
    var localWeekday = (7 + weekday - dow) % 7,
        weekOffset = firstWeekOffset(year, dow, doy),
        dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
        resYear, resDayOfYear;

    if (dayOfYear <= 0) {
        resYear = year - 1;
        resDayOfYear = daysInYear(resYear) + dayOfYear;
    } else if (dayOfYear > daysInYear(year)) {
        resYear = year + 1;
        resDayOfYear = dayOfYear - daysInYear(year);
    } else {
        resYear = year;
        resDayOfYear = dayOfYear;
    }

    return {
        year: resYear,
        dayOfYear: resDayOfYear
    };
}

function weekOfYear(mom, dow, doy) {
    var weekOffset = firstWeekOffset(mom.year(), dow, doy),
        week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
        resWeek, resYear;

    if (week < 1) {
        resYear = mom.year() - 1;
        resWeek = week + weeksInYear(resYear, dow, doy);
    } else if (week > weeksInYear(mom.year(), dow, doy)) {
        resWeek = week - weeksInYear(mom.year(), dow, doy);
        resYear = mom.year() + 1;
    } else {
        resYear = mom.year();
        resWeek = week;
    }

    return {
        week: resWeek,
        year: resYear
    };
}

function weeksInYear(year, dow, doy) {
    var weekOffset = firstWeekOffset(year, dow, doy),
        weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
    return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
}

// FORMATTING

addFormatToken('w', ['ww', 2], 'wo', 'week');
addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

// ALIASES

addUnitAlias('week', 'w');
addUnitAlias('isoWeek', 'W');

// PRIORITIES

addUnitPriority('week', 5);
addUnitPriority('isoWeek', 5);

// PARSING

addRegexToken('w',  match1to2);
addRegexToken('ww', match1to2, match2);
addRegexToken('W',  match1to2);
addRegexToken('WW', match1to2, match2);

addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
    week[token.substr(0, 1)] = toInt(input);
});

// HELPERS

// LOCALES

function localeWeek (mom) {
    return weekOfYear(mom, this._week.dow, this._week.doy).week;
}

var defaultLocaleWeek = {
    dow : 0, // Sunday is the first day of the week.
    doy : 6  // The week that contains Jan 1st is the first week of the year.
};

function localeFirstDayOfWeek () {
    return this._week.dow;
}

function localeFirstDayOfYear () {
    return this._week.doy;
}

// MOMENTS

function getSetWeek (input) {
    var week = this.localeData().week(this);
    return input == null ? week : this.add((input - week) * 7, 'd');
}

function getSetISOWeek (input) {
    var week = weekOfYear(this, 1, 4).week;
    return input == null ? week : this.add((input - week) * 7, 'd');
}

// FORMATTING

addFormatToken('d', 0, 'do', 'day');

addFormatToken('dd', 0, 0, function (format) {
    return this.localeData().weekdaysMin(this, format);
});

addFormatToken('ddd', 0, 0, function (format) {
    return this.localeData().weekdaysShort(this, format);
});

addFormatToken('dddd', 0, 0, function (format) {
    return this.localeData().weekdays(this, format);
});

addFormatToken('e', 0, 0, 'weekday');
addFormatToken('E', 0, 0, 'isoWeekday');

// ALIASES

addUnitAlias('day', 'd');
addUnitAlias('weekday', 'e');
addUnitAlias('isoWeekday', 'E');

// PRIORITY
addUnitPriority('day', 11);
addUnitPriority('weekday', 11);
addUnitPriority('isoWeekday', 11);

// PARSING

addRegexToken('d',    match1to2);
addRegexToken('e',    match1to2);
addRegexToken('E',    match1to2);
addRegexToken('dd',   function (isStrict, locale) {
    return locale.weekdaysMinRegex(isStrict);
});
addRegexToken('ddd',   function (isStrict, locale) {
    return locale.weekdaysShortRegex(isStrict);
});
addRegexToken('dddd',   function (isStrict, locale) {
    return locale.weekdaysRegex(isStrict);
});

addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
    var weekday = config._locale.weekdaysParse(input, token, config._strict);
    // if we didn't get a weekday name, mark the date as invalid
    if (weekday != null) {
        week.d = weekday;
    } else {
        getParsingFlags(config).invalidWeekday = input;
    }
});

addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
    week[token] = toInt(input);
});

// HELPERS

function parseWeekday(input, locale) {
    if (typeof input !== 'string') {
        return input;
    }

    if (!isNaN(input)) {
        return parseInt(input, 10);
    }

    input = locale.weekdaysParse(input);
    if (typeof input === 'number') {
        return input;
    }

    return null;
}

function parseIsoWeekday(input, locale) {
    if (typeof input === 'string') {
        return locale.weekdaysParse(input) % 7 || 7;
    }
    return isNaN(input) ? null : input;
}

// LOCALES

var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
function localeWeekdays (m, format) {
    if (!m) {
        return this._weekdays;
    }
    return isArray(this._weekdays) ? this._weekdays[m.day()] :
        this._weekdays[this._weekdays.isFormat.test(format) ? 'format' : 'standalone'][m.day()];
}

var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
function localeWeekdaysShort (m) {
    return (m) ? this._weekdaysShort[m.day()] : this._weekdaysShort;
}

var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
function localeWeekdaysMin (m) {
    return (m) ? this._weekdaysMin[m.day()] : this._weekdaysMin;
}

function handleStrictParse$1(weekdayName, format, strict) {
    var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
    if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._minWeekdaysParse = [];

        for (i = 0; i < 7; ++i) {
            mom = createUTC([2000, 1]).day(i);
            this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
            this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
            this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
        }
    }

    if (strict) {
        if (format === 'dddd') {
            ii = indexOf$1.call(this._weekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else if (format === 'ddd') {
            ii = indexOf$1.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf$1.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        }
    } else {
        if (format === 'dddd') {
            ii = indexOf$1.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else if (format === 'ddd') {
            ii = indexOf$1.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf$1.call(this._minWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        }
    }
}

function localeWeekdaysParse (weekdayName, format, strict) {
    var i, mom, regex;

    if (this._weekdaysParseExact) {
        return handleStrictParse$1.call(this, weekdayName, format, strict);
    }

    if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._minWeekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._fullWeekdaysParse = [];
    }

    for (i = 0; i < 7; i++) {
        // make the regex if we don't have it already

        mom = createUTC([2000, 1]).day(i);
        if (strict && !this._fullWeekdaysParse[i]) {
            this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\.?') + '$', 'i');
            this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\.?') + '$', 'i');
            this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\.?') + '$', 'i');
        }
        if (!this._weekdaysParse[i]) {
            regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
            this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
        }
        // test the regex
        if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
            return i;
        }
    }
}

// MOMENTS

function getSetDayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    if (input != null) {
        input = parseWeekday(input, this.localeData());
        return this.add(input - day, 'd');
    } else {
        return day;
    }
}

function getSetLocaleDayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return input == null ? weekday : this.add(input - weekday, 'd');
}

function getSetISODayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }

    // behaves the same as moment#day except
    // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
    // as a setter, sunday should belong to the previous week.

    if (input != null) {
        var weekday = parseIsoWeekday(input, this.localeData());
        return this.day(this.day() % 7 ? weekday : weekday - 7);
    } else {
        return this.day() || 7;
    }
}

var defaultWeekdaysRegex = matchWord;
function weekdaysRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysStrictRegex;
        } else {
            return this._weekdaysRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            this._weekdaysRegex = defaultWeekdaysRegex;
        }
        return this._weekdaysStrictRegex && isStrict ?
            this._weekdaysStrictRegex : this._weekdaysRegex;
    }
}

var defaultWeekdaysShortRegex = matchWord;
function weekdaysShortRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysShortStrictRegex;
        } else {
            return this._weekdaysShortRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysShortRegex')) {
            this._weekdaysShortRegex = defaultWeekdaysShortRegex;
        }
        return this._weekdaysShortStrictRegex && isStrict ?
            this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
    }
}

var defaultWeekdaysMinRegex = matchWord;
function weekdaysMinRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysMinStrictRegex;
        } else {
            return this._weekdaysMinRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysMinRegex')) {
            this._weekdaysMinRegex = defaultWeekdaysMinRegex;
        }
        return this._weekdaysMinStrictRegex && isStrict ?
            this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
    }
}


function computeWeekdaysParse () {
    function cmpLenRev(a, b) {
        return b.length - a.length;
    }

    var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [],
        i, mom, minp, shortp, longp;
    for (i = 0; i < 7; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, 1]).day(i);
        minp = this.weekdaysMin(mom, '');
        shortp = this.weekdaysShort(mom, '');
        longp = this.weekdays(mom, '');
        minPieces.push(minp);
        shortPieces.push(shortp);
        longPieces.push(longp);
        mixedPieces.push(minp);
        mixedPieces.push(shortp);
        mixedPieces.push(longp);
    }
    // Sorting makes sure if one weekday (or abbr) is a prefix of another it
    // will match the longer piece.
    minPieces.sort(cmpLenRev);
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 7; i++) {
        shortPieces[i] = regexEscape(shortPieces[i]);
        longPieces[i] = regexEscape(longPieces[i]);
        mixedPieces[i] = regexEscape(mixedPieces[i]);
    }

    this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._weekdaysShortRegex = this._weekdaysRegex;
    this._weekdaysMinRegex = this._weekdaysRegex;

    this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
    this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
}

// FORMATTING

function hFormat() {
    return this.hours() % 12 || 12;
}

function kFormat() {
    return this.hours() || 24;
}

addFormatToken('H', ['HH', 2], 0, 'hour');
addFormatToken('h', ['hh', 2], 0, hFormat);
addFormatToken('k', ['kk', 2], 0, kFormat);

addFormatToken('hmm', 0, 0, function () {
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
});

addFormatToken('hmmss', 0, 0, function () {
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +
        zeroFill(this.seconds(), 2);
});

addFormatToken('Hmm', 0, 0, function () {
    return '' + this.hours() + zeroFill(this.minutes(), 2);
});

addFormatToken('Hmmss', 0, 0, function () {
    return '' + this.hours() + zeroFill(this.minutes(), 2) +
        zeroFill(this.seconds(), 2);
});

function meridiem (token, lowercase) {
    addFormatToken(token, 0, 0, function () {
        return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
    });
}

meridiem('a', true);
meridiem('A', false);

// ALIASES

addUnitAlias('hour', 'h');

// PRIORITY
addUnitPriority('hour', 13);

// PARSING

function matchMeridiem (isStrict, locale) {
    return locale._meridiemParse;
}

addRegexToken('a',  matchMeridiem);
addRegexToken('A',  matchMeridiem);
addRegexToken('H',  match1to2);
addRegexToken('h',  match1to2);
addRegexToken('HH', match1to2, match2);
addRegexToken('hh', match1to2, match2);

addRegexToken('hmm', match3to4);
addRegexToken('hmmss', match5to6);
addRegexToken('Hmm', match3to4);
addRegexToken('Hmmss', match5to6);

addParseToken(['H', 'HH'], HOUR);
addParseToken(['a', 'A'], function (input, array, config) {
    config._isPm = config._locale.isPM(input);
    config._meridiem = input;
});
addParseToken(['h', 'hh'], function (input, array, config) {
    array[HOUR] = toInt(input);
    getParsingFlags(config).bigHour = true;
});
addParseToken('hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
    getParsingFlags(config).bigHour = true;
});
addParseToken('hmmss', function (input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
    getParsingFlags(config).bigHour = true;
});
addParseToken('Hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
});
addParseToken('Hmmss', function (input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
});

// LOCALES

function localeIsPM (input) {
    // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
    // Using charAt should be more compatible.
    return ((input + '').toLowerCase().charAt(0) === 'p');
}

var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
function localeMeridiem (hours, minutes, isLower) {
    if (hours > 11) {
        return isLower ? 'pm' : 'PM';
    } else {
        return isLower ? 'am' : 'AM';
    }
}


// MOMENTS

// Setting the hour should keep the time, because the user explicitly
// specified which hour he wants. So trying to maintain the same hour (in
// a new timezone) makes sense. Adding/subtracting hours does not follow
// this rule.
var getSetHour = makeGetSet('Hours', true);

// months
// week
// weekdays
// meridiem
var baseConfig = {
    calendar: defaultCalendar,
    longDateFormat: defaultLongDateFormat,
    invalidDate: defaultInvalidDate,
    ordinal: defaultOrdinal,
    ordinalParse: defaultOrdinalParse,
    relativeTime: defaultRelativeTime,

    months: defaultLocaleMonths,
    monthsShort: defaultLocaleMonthsShort,

    week: defaultLocaleWeek,

    weekdays: defaultLocaleWeekdays,
    weekdaysMin: defaultLocaleWeekdaysMin,
    weekdaysShort: defaultLocaleWeekdaysShort,

    meridiemParse: defaultLocaleMeridiemParse
};

// internal storage for locale config files
var locales = {};
var localeFamilies = {};
var globalLocale;

function normalizeLocale(key) {
    return key ? key.toLowerCase().replace('_', '-') : key;
}

// pick the locale from the array
// try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
// substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
function chooseLocale(names) {
    var i = 0, j, next, locale, split;

    while (i < names.length) {
        split = normalizeLocale(names[i]).split('-');
        j = split.length;
        next = normalizeLocale(names[i + 1]);
        next = next ? next.split('-') : null;
        while (j > 0) {
            locale = loadLocale(split.slice(0, j).join('-'));
            if (locale) {
                return locale;
            }
            if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                //the next array item is better than a shallower substring of this one
                break;
            }
            j--;
        }
        i++;
    }
    return null;
}

function loadLocale(name) {
    var oldLocale = null;
    // TODO: Find a better way to register and load all the locales in Node
    if (!locales[name] && (typeof module !== 'undefined') &&
            module && module.exports) {
        try {
            oldLocale = globalLocale._abbr;
            require('./locale/' + name);
            // because defineLocale currently also sets the global locale, we
            // want to undo that for lazy loaded locales
            getSetGlobalLocale(oldLocale);
        } catch (e) { }
    }
    return locales[name];
}

// This function will load locale and then set the global locale.  If
// no arguments are passed in, it will simply return the current global
// locale key.
function getSetGlobalLocale (key, values) {
    var data;
    if (key) {
        if (isUndefined(values)) {
            data = getLocale(key);
        }
        else {
            data = defineLocale(key, values);
        }

        if (data) {
            // moment.duration._locale = moment._locale = data;
            globalLocale = data;
        }
    }

    return globalLocale._abbr;
}

function defineLocale (name, config) {
    if (config !== null) {
        var parentConfig = baseConfig;
        config.abbr = name;
        if (locales[name] != null) {
            deprecateSimple('defineLocaleOverride',
                    'use moment.updateLocale(localeName, config) to change ' +
                    'an existing locale. moment.defineLocale(localeName, ' +
                    'config) should only be used for creating a new locale ' +
                    'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
            parentConfig = locales[name]._config;
        } else if (config.parentLocale != null) {
            if (locales[config.parentLocale] != null) {
                parentConfig = locales[config.parentLocale]._config;
            } else {
                if (!localeFamilies[config.parentLocale]) {
                    localeFamilies[config.parentLocale] = [];
                }
                localeFamilies[config.parentLocale].push({
                    name: name,
                    config: config
                });
                return null;
            }
        }
        locales[name] = new Locale(mergeConfigs(parentConfig, config));

        if (localeFamilies[name]) {
            localeFamilies[name].forEach(function (x) {
                defineLocale(x.name, x.config);
            });
        }

        // backwards compat for now: also set the locale
        // make sure we set the locale AFTER all child locales have been
        // created, so we won't end up with the child locale set.
        getSetGlobalLocale(name);


        return locales[name];
    } else {
        // useful for testing
        delete locales[name];
        return null;
    }
}

function updateLocale(name, config) {
    if (config != null) {
        var locale, parentConfig = baseConfig;
        // MERGE
        if (locales[name] != null) {
            parentConfig = locales[name]._config;
        }
        config = mergeConfigs(parentConfig, config);
        locale = new Locale(config);
        locale.parentLocale = locales[name];
        locales[name] = locale;

        // backwards compat for now: also set the locale
        getSetGlobalLocale(name);
    } else {
        // pass null for config to unupdate, useful for tests
        if (locales[name] != null) {
            if (locales[name].parentLocale != null) {
                locales[name] = locales[name].parentLocale;
            } else if (locales[name] != null) {
                delete locales[name];
            }
        }
    }
    return locales[name];
}

// returns locale data
function getLocale (key) {
    var locale;

    if (key && key._locale && key._locale._abbr) {
        key = key._locale._abbr;
    }

    if (!key) {
        return globalLocale;
    }

    if (!isArray(key)) {
        //short-circuit everything else
        locale = loadLocale(key);
        if (locale) {
            return locale;
        }
        key = [key];
    }

    return chooseLocale(key);
}

function listLocales() {
    return keys$1(locales);
}

function checkOverflow (m) {
    var overflow;
    var a = m._a;

    if (a && getParsingFlags(m).overflow === -2) {
        overflow =
            a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :
            a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
            a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
            a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :
            a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :
            a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
            -1;

        if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
            overflow = DATE;
        }
        if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
            overflow = WEEK;
        }
        if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
            overflow = WEEKDAY;
        }

        getParsingFlags(m).overflow = overflow;
    }

    return m;
}

// iso 8601 regex
// 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;

var isoDates = [
    ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
    ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
    ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
    ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
    ['YYYY-DDD', /\d{4}-\d{3}/],
    ['YYYY-MM', /\d{4}-\d\d/, false],
    ['YYYYYYMMDD', /[+-]\d{10}/],
    ['YYYYMMDD', /\d{8}/],
    // YYYYMM is NOT allowed by the standard
    ['GGGG[W]WWE', /\d{4}W\d{3}/],
    ['GGGG[W]WW', /\d{4}W\d{2}/, false],
    ['YYYYDDD', /\d{7}/]
];

// iso time formats and regexes
var isoTimes = [
    ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
    ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
    ['HH:mm:ss', /\d\d:\d\d:\d\d/],
    ['HH:mm', /\d\d:\d\d/],
    ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
    ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
    ['HHmmss', /\d\d\d\d\d\d/],
    ['HHmm', /\d\d\d\d/],
    ['HH', /\d\d/]
];

var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

// date from iso format
function configFromISO(config) {
    var i, l,
        string = config._i,
        match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
        allowTime, dateFormat, timeFormat, tzFormat;

    if (match) {
        getParsingFlags(config).iso = true;

        for (i = 0, l = isoDates.length; i < l; i++) {
            if (isoDates[i][1].exec(match[1])) {
                dateFormat = isoDates[i][0];
                allowTime = isoDates[i][2] !== false;
                break;
            }
        }
        if (dateFormat == null) {
            config._isValid = false;
            return;
        }
        if (match[3]) {
            for (i = 0, l = isoTimes.length; i < l; i++) {
                if (isoTimes[i][1].exec(match[3])) {
                    // match[2] should be 'T' or space
                    timeFormat = (match[2] || ' ') + isoTimes[i][0];
                    break;
                }
            }
            if (timeFormat == null) {
                config._isValid = false;
                return;
            }
        }
        if (!allowTime && timeFormat != null) {
            config._isValid = false;
            return;
        }
        if (match[4]) {
            if (tzRegex.exec(match[4])) {
                tzFormat = 'Z';
            } else {
                config._isValid = false;
                return;
            }
        }
        config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
        configFromStringAndFormat(config);
    } else {
        config._isValid = false;
    }
}

// date from iso format or fallback
function configFromString(config) {
    var matched = aspNetJsonRegex.exec(config._i);

    if (matched !== null) {
        config._d = new Date(+matched[1]);
        return;
    }

    configFromISO(config);
    if (config._isValid === false) {
        delete config._isValid;
        hooks.createFromInputFallback(config);
    }
}

hooks.createFromInputFallback = deprecate(
    'value provided is not in a recognized ISO format. moment construction falls back to js Date(), ' +
    'which is not reliable across all browsers and versions. Non ISO date formats are ' +
    'discouraged and will be removed in an upcoming major release. Please refer to ' +
    'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
    function (config) {
        config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
    }
);

// Pick the first defined of two or three arguments.
function defaults(a, b, c) {
    if (a != null) {
        return a;
    }
    if (b != null) {
        return b;
    }
    return c;
}

function currentDateArray(config) {
    // hooks is actually the exported moment object
    var nowValue = new Date(hooks.now());
    if (config._useUTC) {
        return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
    }
    return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
}

// convert an array to a date.
// the array should mirror the parameters below
// note: all values past the year are optional and will default to the lowest possible value.
// [year, month, day , hour, minute, second, millisecond]
function configFromArray (config) {
    var i, date, input = [], currentDate, yearToUse;

    if (config._d) {
        return;
    }

    currentDate = currentDateArray(config);

    //compute day of the year from weeks and weekdays
    if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
        dayOfYearFromWeekInfo(config);
    }

    //if the day of the year is set, figure out what it is
    if (config._dayOfYear) {
        yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

        if (config._dayOfYear > daysInYear(yearToUse)) {
            getParsingFlags(config)._overflowDayOfYear = true;
        }

        date = createUTCDate(yearToUse, 0, config._dayOfYear);
        config._a[MONTH] = date.getUTCMonth();
        config._a[DATE] = date.getUTCDate();
    }

    // Default to current date.
    // * if no year, month, day of month are given, default to today
    // * if day of month is given, default month and year
    // * if month is given, default only year
    // * if year is given, don't default anything
    for (i = 0; i < 3 && config._a[i] == null; ++i) {
        config._a[i] = input[i] = currentDate[i];
    }

    // Zero out whatever was not defaulted, including time
    for (; i < 7; i++) {
        config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
    }

    // Check for 24:00:00.000
    if (config._a[HOUR] === 24 &&
            config._a[MINUTE] === 0 &&
            config._a[SECOND] === 0 &&
            config._a[MILLISECOND] === 0) {
        config._nextDay = true;
        config._a[HOUR] = 0;
    }

    config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
    // Apply timezone offset from input. The actual utcOffset can be changed
    // with parseZone.
    if (config._tzm != null) {
        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
    }

    if (config._nextDay) {
        config._a[HOUR] = 24;
    }
}

function dayOfYearFromWeekInfo(config) {
    var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;

    w = config._w;
    if (w.GG != null || w.W != null || w.E != null) {
        dow = 1;
        doy = 4;

        // TODO: We need to take the current isoWeekYear, but that depends on
        // how we interpret now (local, utc, fixed offset). So create
        // a now version of current config (take local/utc/offset flags, and
        // create now).
        weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
        week = defaults(w.W, 1);
        weekday = defaults(w.E, 1);
        if (weekday < 1 || weekday > 7) {
            weekdayOverflow = true;
        }
    } else {
        dow = config._locale._week.dow;
        doy = config._locale._week.doy;

        var curWeek = weekOfYear(createLocal(), dow, doy);

        weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

        // Default to current week.
        week = defaults(w.w, curWeek.week);

        if (w.d != null) {
            // weekday -- low day numbers are considered next week
            weekday = w.d;
            if (weekday < 0 || weekday > 6) {
                weekdayOverflow = true;
            }
        } else if (w.e != null) {
            // local weekday -- counting starts from begining of week
            weekday = w.e + dow;
            if (w.e < 0 || w.e > 6) {
                weekdayOverflow = true;
            }
        } else {
            // default to begining of week
            weekday = dow;
        }
    }
    if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
        getParsingFlags(config)._overflowWeeks = true;
    } else if (weekdayOverflow != null) {
        getParsingFlags(config)._overflowWeekday = true;
    } else {
        temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
        config._a[YEAR] = temp.year;
        config._dayOfYear = temp.dayOfYear;
    }
}

// constant that refers to the ISO standard
hooks.ISO_8601 = function () {};

// date from string and format string
function configFromStringAndFormat(config) {
    // TODO: Move this to another part of the creation flow to prevent circular deps
    if (config._f === hooks.ISO_8601) {
        configFromISO(config);
        return;
    }

    config._a = [];
    getParsingFlags(config).empty = true;

    // This array is used to make a Date, either with `new Date` or `Date.UTC`
    var string = '' + config._i,
        i, parsedInput, tokens, token, skipped,
        stringLength = string.length,
        totalParsedInputLength = 0;

    tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

    for (i = 0; i < tokens.length; i++) {
        token = tokens[i];
        parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
        // console.log('token', token, 'parsedInput', parsedInput,
        //         'regex', getParseRegexForToken(token, config));
        if (parsedInput) {
            skipped = string.substr(0, string.indexOf(parsedInput));
            if (skipped.length > 0) {
                getParsingFlags(config).unusedInput.push(skipped);
            }
            string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
            totalParsedInputLength += parsedInput.length;
        }
        // don't parse if it's not a known token
        if (formatTokenFunctions[token]) {
            if (parsedInput) {
                getParsingFlags(config).empty = false;
            }
            else {
                getParsingFlags(config).unusedTokens.push(token);
            }
            addTimeToArrayFromToken(token, parsedInput, config);
        }
        else if (config._strict && !parsedInput) {
            getParsingFlags(config).unusedTokens.push(token);
        }
    }

    // add remaining unparsed input length to the string
    getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
    if (string.length > 0) {
        getParsingFlags(config).unusedInput.push(string);
    }

    // clear _12h flag if hour is <= 12
    if (config._a[HOUR] <= 12 &&
        getParsingFlags(config).bigHour === true &&
        config._a[HOUR] > 0) {
        getParsingFlags(config).bigHour = undefined;
    }

    getParsingFlags(config).parsedDateParts = config._a.slice(0);
    getParsingFlags(config).meridiem = config._meridiem;
    // handle meridiem
    config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

    configFromArray(config);
    checkOverflow(config);
}


function meridiemFixWrap (locale, hour, meridiem) {
    var isPm;

    if (meridiem == null) {
        // nothing to do
        return hour;
    }
    if (locale.meridiemHour != null) {
        return locale.meridiemHour(hour, meridiem);
    } else if (locale.isPM != null) {
        // Fallback
        isPm = locale.isPM(meridiem);
        if (isPm && hour < 12) {
            hour += 12;
        }
        if (!isPm && hour === 12) {
            hour = 0;
        }
        return hour;
    } else {
        // this is not supposed to happen
        return hour;
    }
}

// date from string and array of format strings
function configFromStringAndArray(config) {
    var tempConfig,
        bestMoment,

        scoreToBeat,
        i,
        currentScore;

    if (config._f.length === 0) {
        getParsingFlags(config).invalidFormat = true;
        config._d = new Date(NaN);
        return;
    }

    for (i = 0; i < config._f.length; i++) {
        currentScore = 0;
        tempConfig = copyConfig({}, config);
        if (config._useUTC != null) {
            tempConfig._useUTC = config._useUTC;
        }
        tempConfig._f = config._f[i];
        configFromStringAndFormat(tempConfig);

        if (!isValid(tempConfig)) {
            continue;
        }

        // if there is any input that was not parsed add a penalty for that format
        currentScore += getParsingFlags(tempConfig).charsLeftOver;

        //or tokens
        currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

        getParsingFlags(tempConfig).score = currentScore;

        if (scoreToBeat == null || currentScore < scoreToBeat) {
            scoreToBeat = currentScore;
            bestMoment = tempConfig;
        }
    }

    extend(config, bestMoment || tempConfig);
}

function configFromObject(config) {
    if (config._d) {
        return;
    }

    var i = normalizeObjectUnits(config._i);
    config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
        return obj && parseInt(obj, 10);
    });

    configFromArray(config);
}

function createFromConfig (config) {
    var res = new Moment(checkOverflow(prepareConfig(config)));
    if (res._nextDay) {
        // Adding is smart enough around DST
        res.add(1, 'd');
        res._nextDay = undefined;
    }

    return res;
}

function prepareConfig (config) {
    var input = config._i,
        format = config._f;

    config._locale = config._locale || getLocale(config._l);

    if (input === null || (format === undefined && input === '')) {
        return createInvalid({nullInput: true});
    }

    if (typeof input === 'string') {
        config._i = input = config._locale.preparse(input);
    }

    if (isMoment(input)) {
        return new Moment(checkOverflow(input));
    } else if (isDate(input)) {
        config._d = input;
    } else if (isArray(format)) {
        configFromStringAndArray(config);
    } else if (format) {
        configFromStringAndFormat(config);
    }  else {
        configFromInput(config);
    }

    if (!isValid(config)) {
        config._d = null;
    }

    return config;
}

function configFromInput(config) {
    var input = config._i;
    if (input === undefined) {
        config._d = new Date(hooks.now());
    } else if (isDate(input)) {
        config._d = new Date(input.valueOf());
    } else if (typeof input === 'string') {
        configFromString(config);
    } else if (isArray(input)) {
        config._a = map(input.slice(0), function (obj) {
            return parseInt(obj, 10);
        });
        configFromArray(config);
    } else if (typeof(input) === 'object') {
        configFromObject(config);
    } else if (isNumber(input)) {
        // from milliseconds
        config._d = new Date(input);
    } else {
        hooks.createFromInputFallback(config);
    }
}

function createLocalOrUTC (input, format, locale, strict, isUTC) {
    var c = {};

    if (locale === true || locale === false) {
        strict = locale;
        locale = undefined;
    }

    if ((isObject(input) && isObjectEmpty(input)) ||
            (isArray(input) && input.length === 0)) {
        input = undefined;
    }
    // object construction must be done this way.
    // https://github.com/moment/moment/issues/1423
    c._isAMomentObject = true;
    c._useUTC = c._isUTC = isUTC;
    c._l = locale;
    c._i = input;
    c._f = format;
    c._strict = strict;

    return createFromConfig(c);
}

function createLocal (input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, false);
}

var prototypeMin = deprecate(
    'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
    function () {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
            return other < this ? this : other;
        } else {
            return createInvalid();
        }
    }
);

var prototypeMax = deprecate(
    'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
    function () {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
            return other > this ? this : other;
        } else {
            return createInvalid();
        }
    }
);

// Pick a moment m from moments so that m[fn](other) is true for all
// other. This relies on the function fn to be transitive.
//
// moments should either be an array of moment objects or an array, whose
// first element is an array of moment objects.
function pickBy(fn, moments) {
    var res, i;
    if (moments.length === 1 && isArray(moments[0])) {
        moments = moments[0];
    }
    if (!moments.length) {
        return createLocal();
    }
    res = moments[0];
    for (i = 1; i < moments.length; ++i) {
        if (!moments[i].isValid() || moments[i][fn](res)) {
            res = moments[i];
        }
    }
    return res;
}

// TODO: Use [].sort instead?
function min () {
    var args = [].slice.call(arguments, 0);

    return pickBy('isBefore', args);
}

function max () {
    var args = [].slice.call(arguments, 0);

    return pickBy('isAfter', args);
}

var now = function () {
    return Date.now ? Date.now() : +(new Date());
};

function Duration (duration) {
    var normalizedInput = normalizeObjectUnits(duration),
        years = normalizedInput.year || 0,
        quarters = normalizedInput.quarter || 0,
        months = normalizedInput.month || 0,
        weeks = normalizedInput.week || 0,
        days = normalizedInput.day || 0,
        hours = normalizedInput.hour || 0,
        minutes = normalizedInput.minute || 0,
        seconds = normalizedInput.second || 0,
        milliseconds = normalizedInput.millisecond || 0;

    // representation for dateAddRemove
    this._milliseconds = +milliseconds +
        seconds * 1e3 + // 1000
        minutes * 6e4 + // 1000 * 60
        hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
    // Because of dateAddRemove treats 24 hours as different from a
    // day when working around DST, we need to store them separately
    this._days = +days +
        weeks * 7;
    // It is impossible translate months into days without knowing
    // which months you are are talking about, so we have to store
    // it separately.
    this._months = +months +
        quarters * 3 +
        years * 12;

    this._data = {};

    this._locale = getLocale();

    this._bubble();
}

function isDuration (obj) {
    return obj instanceof Duration;
}

function absRound (number) {
    if (number < 0) {
        return Math.round(-1 * number) * -1;
    } else {
        return Math.round(number);
    }
}

// FORMATTING

function offset (token, separator) {
    addFormatToken(token, 0, 0, function () {
        var offset = this.utcOffset();
        var sign = '+';
        if (offset < 0) {
            offset = -offset;
            sign = '-';
        }
        return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
    });
}

offset('Z', ':');
offset('ZZ', '');

// PARSING

addRegexToken('Z',  matchShortOffset);
addRegexToken('ZZ', matchShortOffset);
addParseToken(['Z', 'ZZ'], function (input, array, config) {
    config._useUTC = true;
    config._tzm = offsetFromString(matchShortOffset, input);
});

// HELPERS

// timezone chunker
// '+10:00' > ['10',  '00']
// '-1530'  > ['-15', '30']
var chunkOffset = /([\+\-]|\d\d)/gi;

function offsetFromString(matcher, string) {
    var matches = (string || '').match(matcher);

    if (matches === null) {
        return null;
    }

    var chunk   = matches[matches.length - 1] || [];
    var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
    var minutes = +(parts[1] * 60) + toInt(parts[2]);

    return minutes === 0 ?
      0 :
      parts[0] === '+' ? minutes : -minutes;
}

// Return a moment from input, that is local/utc/zone equivalent to model.
function cloneWithOffset(input, model) {
    var res, diff;
    if (model._isUTC) {
        res = model.clone();
        diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
        // Use low-level api, because this fn is low-level api.
        res._d.setTime(res._d.valueOf() + diff);
        hooks.updateOffset(res, false);
        return res;
    } else {
        return createLocal(input).local();
    }
}

function getDateOffset (m) {
    // On Firefox.24 Date#getTimezoneOffset returns a floating point.
    // https://github.com/moment/moment/pull/1871
    return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
}

// HOOKS

// This function will be called whenever a moment is mutated.
// It is intended to keep the offset in sync with the timezone.
hooks.updateOffset = function () {};

// MOMENTS

// keepLocalTime = true means only change the timezone, without
// affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
// 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
// +0200, so we adjust the time as needed, to be valid.
//
// Keeping the time actually adds/subtracts (one hour)
// from the actual represented time. That is why we call updateOffset
// a second time. In case it wants us to change the offset again
// _changeInProgress == true case, then we have to adjust, because
// there is no such time in the given timezone.
function getSetOffset (input, keepLocalTime) {
    var offset = this._offset || 0,
        localAdjust;
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    if (input != null) {
        if (typeof input === 'string') {
            input = offsetFromString(matchShortOffset, input);
            if (input === null) {
                return this;
            }
        } else if (Math.abs(input) < 16) {
            input = input * 60;
        }
        if (!this._isUTC && keepLocalTime) {
            localAdjust = getDateOffset(this);
        }
        this._offset = input;
        this._isUTC = true;
        if (localAdjust != null) {
            this.add(localAdjust, 'm');
        }
        if (offset !== input) {
            if (!keepLocalTime || this._changeInProgress) {
                addSubtract(this, createDuration(input - offset, 'm'), 1, false);
            } else if (!this._changeInProgress) {
                this._changeInProgress = true;
                hooks.updateOffset(this, true);
                this._changeInProgress = null;
            }
        }
        return this;
    } else {
        return this._isUTC ? offset : getDateOffset(this);
    }
}

function getSetZone (input, keepLocalTime) {
    if (input != null) {
        if (typeof input !== 'string') {
            input = -input;
        }

        this.utcOffset(input, keepLocalTime);

        return this;
    } else {
        return -this.utcOffset();
    }
}

function setOffsetToUTC (keepLocalTime) {
    return this.utcOffset(0, keepLocalTime);
}

function setOffsetToLocal (keepLocalTime) {
    if (this._isUTC) {
        this.utcOffset(0, keepLocalTime);
        this._isUTC = false;

        if (keepLocalTime) {
            this.subtract(getDateOffset(this), 'm');
        }
    }
    return this;
}

function setOffsetToParsedOffset () {
    if (this._tzm != null) {
        this.utcOffset(this._tzm);
    } else if (typeof this._i === 'string') {
        var tZone = offsetFromString(matchOffset, this._i);
        if (tZone != null) {
            this.utcOffset(tZone);
        }
        else {
            this.utcOffset(0, true);
        }
    }
    return this;
}

function hasAlignedHourOffset (input) {
    if (!this.isValid()) {
        return false;
    }
    input = input ? createLocal(input).utcOffset() : 0;

    return (this.utcOffset() - input) % 60 === 0;
}

function isDaylightSavingTime () {
    return (
        this.utcOffset() > this.clone().month(0).utcOffset() ||
        this.utcOffset() > this.clone().month(5).utcOffset()
    );
}

function isDaylightSavingTimeShifted () {
    if (!isUndefined(this._isDSTShifted)) {
        return this._isDSTShifted;
    }

    var c = {};

    copyConfig(c, this);
    c = prepareConfig(c);

    if (c._a) {
        var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
        this._isDSTShifted = this.isValid() &&
            compareArrays(c._a, other.toArray()) > 0;
    } else {
        this._isDSTShifted = false;
    }

    return this._isDSTShifted;
}

function isLocal () {
    return this.isValid() ? !this._isUTC : false;
}

function isUtcOffset () {
    return this.isValid() ? this._isUTC : false;
}

function isUtc () {
    return this.isValid() ? this._isUTC && this._offset === 0 : false;
}

// ASP.NET json date format regex
var aspNetRegex = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;

// from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
// somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
// and further modified to allow for strings containing both week and day
var isoRegex = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;

function createDuration (input, key) {
    var duration = input,
        // matching against regexp is expensive, do it on demand
        match = null,
        sign,
        ret,
        diffRes;

    if (isDuration(input)) {
        duration = {
            ms : input._milliseconds,
            d  : input._days,
            M  : input._months
        };
    } else if (isNumber(input)) {
        duration = {};
        if (key) {
            duration[key] = input;
        } else {
            duration.milliseconds = input;
        }
    } else if (!!(match = aspNetRegex.exec(input))) {
        sign = (match[1] === '-') ? -1 : 1;
        duration = {
            y  : 0,
            d  : toInt(match[DATE])                         * sign,
            h  : toInt(match[HOUR])                         * sign,
            m  : toInt(match[MINUTE])                       * sign,
            s  : toInt(match[SECOND])                       * sign,
            ms : toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
        };
    } else if (!!(match = isoRegex.exec(input))) {
        sign = (match[1] === '-') ? -1 : 1;
        duration = {
            y : parseIso(match[2], sign),
            M : parseIso(match[3], sign),
            w : parseIso(match[4], sign),
            d : parseIso(match[5], sign),
            h : parseIso(match[6], sign),
            m : parseIso(match[7], sign),
            s : parseIso(match[8], sign)
        };
    } else if (duration == null) {// checks for null or undefined
        duration = {};
    } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
        diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));

        duration = {};
        duration.ms = diffRes.milliseconds;
        duration.M = diffRes.months;
    }

    ret = new Duration(duration);

    if (isDuration(input) && hasOwnProp(input, '_locale')) {
        ret._locale = input._locale;
    }

    return ret;
}

createDuration.fn = Duration.prototype;

function parseIso (inp, sign) {
    // We'd normally use ~~inp for this, but unfortunately it also
    // converts floats to ints.
    // inp may be undefined, so careful calling replace on it.
    var res = inp && parseFloat(inp.replace(',', '.'));
    // apply sign while we're at it
    return (isNaN(res) ? 0 : res) * sign;
}

function positiveMomentsDifference(base, other) {
    var res = {milliseconds: 0, months: 0};

    res.months = other.month() - base.month() +
        (other.year() - base.year()) * 12;
    if (base.clone().add(res.months, 'M').isAfter(other)) {
        --res.months;
    }

    res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

    return res;
}

function momentsDifference(base, other) {
    var res;
    if (!(base.isValid() && other.isValid())) {
        return {milliseconds: 0, months: 0};
    }

    other = cloneWithOffset(other, base);
    if (base.isBefore(other)) {
        res = positiveMomentsDifference(base, other);
    } else {
        res = positiveMomentsDifference(other, base);
        res.milliseconds = -res.milliseconds;
        res.months = -res.months;
    }

    return res;
}

// TODO: remove 'name' arg after deprecation is removed
function createAdder(direction, name) {
    return function (val, period) {
        var dur, tmp;
        //invert the arguments, but complain about it
        if (period !== null && !isNaN(+period)) {
            deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' +
            'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
            tmp = val; val = period; period = tmp;
        }

        val = typeof val === 'string' ? +val : val;
        dur = createDuration(val, period);
        addSubtract(this, dur, direction);
        return this;
    };
}

function addSubtract (mom, duration, isAdding, updateOffset) {
    var milliseconds = duration._milliseconds,
        days = absRound(duration._days),
        months = absRound(duration._months);

    if (!mom.isValid()) {
        // No op
        return;
    }

    updateOffset = updateOffset == null ? true : updateOffset;

    if (milliseconds) {
        mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
    }
    if (days) {
        set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
    }
    if (months) {
        setMonth(mom, get(mom, 'Month') + months * isAdding);
    }
    if (updateOffset) {
        hooks.updateOffset(mom, days || months);
    }
}

var add      = createAdder(1, 'add');
var subtract = createAdder(-1, 'subtract');

function getCalendarFormat(myMoment, now) {
    var diff = myMoment.diff(now, 'days', true);
    return diff < -6 ? 'sameElse' :
            diff < -1 ? 'lastWeek' :
            diff < 0 ? 'lastDay' :
            diff < 1 ? 'sameDay' :
            diff < 2 ? 'nextDay' :
            diff < 7 ? 'nextWeek' : 'sameElse';
}

function calendar$1 (time, formats) {
    // We want to compare the start of today, vs this.
    // Getting start-of-today depends on whether we're local/utc/offset or not.
    var now = time || createLocal(),
        sod = cloneWithOffset(now, this).startOf('day'),
        format = hooks.calendarFormat(this, sod) || 'sameElse';

    var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);

    return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
}

function clone () {
    return new Moment(this);
}

function isAfter (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() > localInput.valueOf();
    } else {
        return localInput.valueOf() < this.clone().startOf(units).valueOf();
    }
}

function isBefore (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() < localInput.valueOf();
    } else {
        return this.clone().endOf(units).valueOf() < localInput.valueOf();
    }
}

function isBetween (from, to, units, inclusivity) {
    inclusivity = inclusivity || '()';
    return (inclusivity[0] === '(' ? this.isAfter(from, units) : !this.isBefore(from, units)) &&
        (inclusivity[1] === ')' ? this.isBefore(to, units) : !this.isAfter(to, units));
}

function isSame (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input),
        inputMs;
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(units || 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() === localInput.valueOf();
    } else {
        inputMs = localInput.valueOf();
        return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
    }
}

function isSameOrAfter (input, units) {
    return this.isSame(input, units) || this.isAfter(input,units);
}

function isSameOrBefore (input, units) {
    return this.isSame(input, units) || this.isBefore(input,units);
}

function diff (input, units, asFloat) {
    var that,
        zoneDelta,
        delta, output;

    if (!this.isValid()) {
        return NaN;
    }

    that = cloneWithOffset(input, this);

    if (!that.isValid()) {
        return NaN;
    }

    zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

    units = normalizeUnits(units);

    if (units === 'year' || units === 'month' || units === 'quarter') {
        output = monthDiff(this, that);
        if (units === 'quarter') {
            output = output / 3;
        } else if (units === 'year') {
            output = output / 12;
        }
    } else {
        delta = this - that;
        output = units === 'second' ? delta / 1e3 : // 1000
            units === 'minute' ? delta / 6e4 : // 1000 * 60
            units === 'hour' ? delta / 36e5 : // 1000 * 60 * 60
            units === 'day' ? (delta - zoneDelta) / 864e5 : // 1000 * 60 * 60 * 24, negate dst
            units === 'week' ? (delta - zoneDelta) / 6048e5 : // 1000 * 60 * 60 * 24 * 7, negate dst
            delta;
    }
    return asFloat ? output : absFloor(output);
}

function monthDiff (a, b) {
    // difference in months
    var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
        // b is in (anchor - 1 month, anchor + 1 month)
        anchor = a.clone().add(wholeMonthDiff, 'months'),
        anchor2, adjust;

    if (b - anchor < 0) {
        anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
        // linear across the month
        adjust = (b - anchor) / (anchor - anchor2);
    } else {
        anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
        // linear across the month
        adjust = (b - anchor) / (anchor2 - anchor);
    }

    //check for negative zero, return zero if negative zero
    return -(wholeMonthDiff + adjust) || 0;
}

hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

function toString () {
    return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
}

function toISOString () {
    var m = this.clone().utc();
    if (0 < m.year() && m.year() <= 9999) {
        if (isFunction(Date.prototype.toISOString)) {
            // native implementation is ~50x faster, use it when we can
            return this.toDate().toISOString();
        } else {
            return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
        }
    } else {
        return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
    }
}

/**
 * Return a human readable representation of a moment that can
 * also be evaluated to get a new moment which is the same
 *
 * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
 */
function inspect () {
    if (!this.isValid()) {
        return 'moment.invalid(/* ' + this._i + ' */)';
    }
    var func = 'moment';
    var zone = '';
    if (!this.isLocal()) {
        func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
        zone = 'Z';
    }
    var prefix = '[' + func + '("]';
    var year = (0 < this.year() && this.year() <= 9999) ? 'YYYY' : 'YYYYYY';
    var datetime = '-MM-DD[T]HH:mm:ss.SSS';
    var suffix = zone + '[")]';

    return this.format(prefix + year + datetime + suffix);
}

function format (inputString) {
    if (!inputString) {
        inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
    }
    var output = formatMoment(this, inputString);
    return this.localeData().postformat(output);
}

function from (time, withoutSuffix) {
    if (this.isValid() &&
            ((isMoment(time) && time.isValid()) ||
             createLocal(time).isValid())) {
        return createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
    } else {
        return this.localeData().invalidDate();
    }
}

function fromNow (withoutSuffix) {
    return this.from(createLocal(), withoutSuffix);
}

function to (time, withoutSuffix) {
    if (this.isValid() &&
            ((isMoment(time) && time.isValid()) ||
             createLocal(time).isValid())) {
        return createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
    } else {
        return this.localeData().invalidDate();
    }
}

function toNow (withoutSuffix) {
    return this.to(createLocal(), withoutSuffix);
}

// If passed a locale key, it will set the locale for this
// instance.  Otherwise, it will return the locale configuration
// variables for this instance.
function locale (key) {
    var newLocaleData;

    if (key === undefined) {
        return this._locale._abbr;
    } else {
        newLocaleData = getLocale(key);
        if (newLocaleData != null) {
            this._locale = newLocaleData;
        }
        return this;
    }
}

var lang = deprecate(
    'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
    function (key) {
        if (key === undefined) {
            return this.localeData();
        } else {
            return this.locale(key);
        }
    }
);

function localeData () {
    return this._locale;
}

function startOf (units) {
    units = normalizeUnits(units);
    // the following switch intentionally omits break keywords
    // to utilize falling through the cases.
    switch (units) {
        case 'year':
            this.month(0);
            /* falls through */
        case 'quarter':
        case 'month':
            this.date(1);
            /* falls through */
        case 'week':
        case 'isoWeek':
        case 'day':
        case 'date':
            this.hours(0);
            /* falls through */
        case 'hour':
            this.minutes(0);
            /* falls through */
        case 'minute':
            this.seconds(0);
            /* falls through */
        case 'second':
            this.milliseconds(0);
    }

    // weeks are a special case
    if (units === 'week') {
        this.weekday(0);
    }
    if (units === 'isoWeek') {
        this.isoWeekday(1);
    }

    // quarters are also special
    if (units === 'quarter') {
        this.month(Math.floor(this.month() / 3) * 3);
    }

    return this;
}

function endOf (units) {
    units = normalizeUnits(units);
    if (units === undefined || units === 'millisecond') {
        return this;
    }

    // 'date' is an alias for 'day', so it should be considered as such.
    if (units === 'date') {
        units = 'day';
    }

    return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
}

function valueOf () {
    return this._d.valueOf() - ((this._offset || 0) * 60000);
}

function unix () {
    return Math.floor(this.valueOf() / 1000);
}

function toDate () {
    return new Date(this.valueOf());
}

function toArray () {
    var m = this;
    return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
}

function toObject () {
    var m = this;
    return {
        years: m.year(),
        months: m.month(),
        date: m.date(),
        hours: m.hours(),
        minutes: m.minutes(),
        seconds: m.seconds(),
        milliseconds: m.milliseconds()
    };
}

function toJSON () {
    // new Date(NaN).toJSON() === null
    return this.isValid() ? this.toISOString() : null;
}

function isValid$1 () {
    return isValid(this);
}

function parsingFlags () {
    return extend({}, getParsingFlags(this));
}

function invalidAt () {
    return getParsingFlags(this).overflow;
}

function creationData() {
    return {
        input: this._i,
        format: this._f,
        locale: this._locale,
        isUTC: this._isUTC,
        strict: this._strict
    };
}

// FORMATTING

addFormatToken(0, ['gg', 2], 0, function () {
    return this.weekYear() % 100;
});

addFormatToken(0, ['GG', 2], 0, function () {
    return this.isoWeekYear() % 100;
});

function addWeekYearFormatToken (token, getter) {
    addFormatToken(0, [token, token.length], 0, getter);
}

addWeekYearFormatToken('gggg',     'weekYear');
addWeekYearFormatToken('ggggg',    'weekYear');
addWeekYearFormatToken('GGGG',  'isoWeekYear');
addWeekYearFormatToken('GGGGG', 'isoWeekYear');

// ALIASES

addUnitAlias('weekYear', 'gg');
addUnitAlias('isoWeekYear', 'GG');

// PRIORITY

addUnitPriority('weekYear', 1);
addUnitPriority('isoWeekYear', 1);


// PARSING

addRegexToken('G',      matchSigned);
addRegexToken('g',      matchSigned);
addRegexToken('GG',     match1to2, match2);
addRegexToken('gg',     match1to2, match2);
addRegexToken('GGGG',   match1to4, match4);
addRegexToken('gggg',   match1to4, match4);
addRegexToken('GGGGG',  match1to6, match6);
addRegexToken('ggggg',  match1to6, match6);

addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
    week[token.substr(0, 2)] = toInt(input);
});

addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
    week[token] = hooks.parseTwoDigitYear(input);
});

// MOMENTS

function getSetWeekYear (input) {
    return getSetWeekYearHelper.call(this,
            input,
            this.week(),
            this.weekday(),
            this.localeData()._week.dow,
            this.localeData()._week.doy);
}

function getSetISOWeekYear (input) {
    return getSetWeekYearHelper.call(this,
            input, this.isoWeek(), this.isoWeekday(), 1, 4);
}

function getISOWeeksInYear () {
    return weeksInYear(this.year(), 1, 4);
}

function getWeeksInYear () {
    var weekInfo = this.localeData()._week;
    return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
}

function getSetWeekYearHelper(input, week, weekday, dow, doy) {
    var weeksTarget;
    if (input == null) {
        return weekOfYear(this, dow, doy).year;
    } else {
        weeksTarget = weeksInYear(input, dow, doy);
        if (week > weeksTarget) {
            week = weeksTarget;
        }
        return setWeekAll.call(this, input, week, weekday, dow, doy);
    }
}

function setWeekAll(weekYear, week, weekday, dow, doy) {
    var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
        date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

    this.year(date.getUTCFullYear());
    this.month(date.getUTCMonth());
    this.date(date.getUTCDate());
    return this;
}

// FORMATTING

addFormatToken('Q', 0, 'Qo', 'quarter');

// ALIASES

addUnitAlias('quarter', 'Q');

// PRIORITY

addUnitPriority('quarter', 7);

// PARSING

addRegexToken('Q', match1);
addParseToken('Q', function (input, array) {
    array[MONTH] = (toInt(input) - 1) * 3;
});

// MOMENTS

function getSetQuarter (input) {
    return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
}

// FORMATTING

addFormatToken('D', ['DD', 2], 'Do', 'date');

// ALIASES

addUnitAlias('date', 'D');

// PRIOROITY
addUnitPriority('date', 9);

// PARSING

addRegexToken('D',  match1to2);
addRegexToken('DD', match1to2, match2);
addRegexToken('Do', function (isStrict, locale) {
    return isStrict ? locale._ordinalParse : locale._ordinalParseLenient;
});

addParseToken(['D', 'DD'], DATE);
addParseToken('Do', function (input, array) {
    array[DATE] = toInt(input.match(match1to2)[0], 10);
});

// MOMENTS

var getSetDayOfMonth = makeGetSet('Date', true);

// FORMATTING

addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

// ALIASES

addUnitAlias('dayOfYear', 'DDD');

// PRIORITY
addUnitPriority('dayOfYear', 4);

// PARSING

addRegexToken('DDD',  match1to3);
addRegexToken('DDDD', match3);
addParseToken(['DDD', 'DDDD'], function (input, array, config) {
    config._dayOfYear = toInt(input);
});

// HELPERS

// MOMENTS

function getSetDayOfYear (input) {
    var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
    return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
}

// FORMATTING

addFormatToken('m', ['mm', 2], 0, 'minute');

// ALIASES

addUnitAlias('minute', 'm');

// PRIORITY

addUnitPriority('minute', 14);

// PARSING

addRegexToken('m',  match1to2);
addRegexToken('mm', match1to2, match2);
addParseToken(['m', 'mm'], MINUTE);

// MOMENTS

var getSetMinute = makeGetSet('Minutes', false);

// FORMATTING

addFormatToken('s', ['ss', 2], 0, 'second');

// ALIASES

addUnitAlias('second', 's');

// PRIORITY

addUnitPriority('second', 15);

// PARSING

addRegexToken('s',  match1to2);
addRegexToken('ss', match1to2, match2);
addParseToken(['s', 'ss'], SECOND);

// MOMENTS

var getSetSecond = makeGetSet('Seconds', false);

// FORMATTING

addFormatToken('S', 0, 0, function () {
    return ~~(this.millisecond() / 100);
});

addFormatToken(0, ['SS', 2], 0, function () {
    return ~~(this.millisecond() / 10);
});

addFormatToken(0, ['SSS', 3], 0, 'millisecond');
addFormatToken(0, ['SSSS', 4], 0, function () {
    return this.millisecond() * 10;
});
addFormatToken(0, ['SSSSS', 5], 0, function () {
    return this.millisecond() * 100;
});
addFormatToken(0, ['SSSSSS', 6], 0, function () {
    return this.millisecond() * 1000;
});
addFormatToken(0, ['SSSSSSS', 7], 0, function () {
    return this.millisecond() * 10000;
});
addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
    return this.millisecond() * 100000;
});
addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
    return this.millisecond() * 1000000;
});


// ALIASES

addUnitAlias('millisecond', 'ms');

// PRIORITY

addUnitPriority('millisecond', 16);

// PARSING

addRegexToken('S',    match1to3, match1);
addRegexToken('SS',   match1to3, match2);
addRegexToken('SSS',  match1to3, match3);

var token;
for (token = 'SSSS'; token.length <= 9; token += 'S') {
    addRegexToken(token, matchUnsigned);
}

function parseMs(input, array) {
    array[MILLISECOND] = toInt(('0.' + input) * 1000);
}

for (token = 'S'; token.length <= 9; token += 'S') {
    addParseToken(token, parseMs);
}
// MOMENTS

var getSetMillisecond = makeGetSet('Milliseconds', false);

// FORMATTING

addFormatToken('z',  0, 0, 'zoneAbbr');
addFormatToken('zz', 0, 0, 'zoneName');

// MOMENTS

function getZoneAbbr () {
    return this._isUTC ? 'UTC' : '';
}

function getZoneName () {
    return this._isUTC ? 'Coordinated Universal Time' : '';
}

var proto = Moment.prototype;

proto.add               = add;
proto.calendar          = calendar$1;
proto.clone             = clone;
proto.diff              = diff;
proto.endOf             = endOf;
proto.format            = format;
proto.from              = from;
proto.fromNow           = fromNow;
proto.to                = to;
proto.toNow             = toNow;
proto.get               = stringGet;
proto.invalidAt         = invalidAt;
proto.isAfter           = isAfter;
proto.isBefore          = isBefore;
proto.isBetween         = isBetween;
proto.isSame            = isSame;
proto.isSameOrAfter     = isSameOrAfter;
proto.isSameOrBefore    = isSameOrBefore;
proto.isValid           = isValid$1;
proto.lang              = lang;
proto.locale            = locale;
proto.localeData        = localeData;
proto.max               = prototypeMax;
proto.min               = prototypeMin;
proto.parsingFlags      = parsingFlags;
proto.set               = stringSet;
proto.startOf           = startOf;
proto.subtract          = subtract;
proto.toArray           = toArray;
proto.toObject          = toObject;
proto.toDate            = toDate;
proto.toISOString       = toISOString;
proto.inspect           = inspect;
proto.toJSON            = toJSON;
proto.toString          = toString;
proto.unix              = unix;
proto.valueOf           = valueOf;
proto.creationData      = creationData;

// Year
proto.year       = getSetYear;
proto.isLeapYear = getIsLeapYear;

// Week Year
proto.weekYear    = getSetWeekYear;
proto.isoWeekYear = getSetISOWeekYear;

// Quarter
proto.quarter = proto.quarters = getSetQuarter;

// Month
proto.month       = getSetMonth;
proto.daysInMonth = getDaysInMonth;

// Week
proto.week           = proto.weeks        = getSetWeek;
proto.isoWeek        = proto.isoWeeks     = getSetISOWeek;
proto.weeksInYear    = getWeeksInYear;
proto.isoWeeksInYear = getISOWeeksInYear;

// Day
proto.date       = getSetDayOfMonth;
proto.day        = proto.days             = getSetDayOfWeek;
proto.weekday    = getSetLocaleDayOfWeek;
proto.isoWeekday = getSetISODayOfWeek;
proto.dayOfYear  = getSetDayOfYear;

// Hour
proto.hour = proto.hours = getSetHour;

// Minute
proto.minute = proto.minutes = getSetMinute;

// Second
proto.second = proto.seconds = getSetSecond;

// Millisecond
proto.millisecond = proto.milliseconds = getSetMillisecond;

// Offset
proto.utcOffset            = getSetOffset;
proto.utc                  = setOffsetToUTC;
proto.local                = setOffsetToLocal;
proto.parseZone            = setOffsetToParsedOffset;
proto.hasAlignedHourOffset = hasAlignedHourOffset;
proto.isDST                = isDaylightSavingTime;
proto.isLocal              = isLocal;
proto.isUtcOffset          = isUtcOffset;
proto.isUtc                = isUtc;
proto.isUTC                = isUtc;

// Timezone
proto.zoneAbbr = getZoneAbbr;
proto.zoneName = getZoneName;

// Deprecations
proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

function createUnix (input) {
    return createLocal(input * 1000);
}

function createInZone () {
    return createLocal.apply(null, arguments).parseZone();
}

function preParsePostFormat (string) {
    return string;
}

var proto$1 = Locale.prototype;

proto$1.calendar        = calendar;
proto$1.longDateFormat  = longDateFormat;
proto$1.invalidDate     = invalidDate;
proto$1.ordinal         = ordinal;
proto$1.preparse        = preParsePostFormat;
proto$1.postformat      = preParsePostFormat;
proto$1.relativeTime    = relativeTime;
proto$1.pastFuture      = pastFuture;
proto$1.set             = set;

// Month
proto$1.months            =        localeMonths;
proto$1.monthsShort       =        localeMonthsShort;
proto$1.monthsParse       =        localeMonthsParse;
proto$1.monthsRegex       = monthsRegex;
proto$1.monthsShortRegex  = monthsShortRegex;

// Week
proto$1.week = localeWeek;
proto$1.firstDayOfYear = localeFirstDayOfYear;
proto$1.firstDayOfWeek = localeFirstDayOfWeek;

// Day of Week
proto$1.weekdays       =        localeWeekdays;
proto$1.weekdaysMin    =        localeWeekdaysMin;
proto$1.weekdaysShort  =        localeWeekdaysShort;
proto$1.weekdaysParse  =        localeWeekdaysParse;

proto$1.weekdaysRegex       =        weekdaysRegex;
proto$1.weekdaysShortRegex  =        weekdaysShortRegex;
proto$1.weekdaysMinRegex    =        weekdaysMinRegex;

// Hours
proto$1.isPM = localeIsPM;
proto$1.meridiem = localeMeridiem;

function get$1 (format, index, field, setter) {
    var locale = getLocale();
    var utc = createUTC().set(setter, index);
    return locale[field](utc, format);
}

function listMonthsImpl (format, index, field) {
    if (isNumber(format)) {
        index = format;
        format = undefined;
    }

    format = format || '';

    if (index != null) {
        return get$1(format, index, field, 'month');
    }

    var i;
    var out = [];
    for (i = 0; i < 12; i++) {
        out[i] = get$1(format, i, field, 'month');
    }
    return out;
}

// ()
// (5)
// (fmt, 5)
// (fmt)
// (true)
// (true, 5)
// (true, fmt, 5)
// (true, fmt)
function listWeekdaysImpl (localeSorted, format, index, field) {
    if (typeof localeSorted === 'boolean') {
        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';
    } else {
        format = localeSorted;
        index = format;
        localeSorted = false;

        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';
    }

    var locale = getLocale(),
        shift = localeSorted ? locale._week.dow : 0;

    if (index != null) {
        return get$1(format, (index + shift) % 7, field, 'day');
    }

    var i;
    var out = [];
    for (i = 0; i < 7; i++) {
        out[i] = get$1(format, (i + shift) % 7, field, 'day');
    }
    return out;
}

function listMonths (format, index) {
    return listMonthsImpl(format, index, 'months');
}

function listMonthsShort (format, index) {
    return listMonthsImpl(format, index, 'monthsShort');
}

function listWeekdays (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
}

function listWeekdaysShort (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
}

function listWeekdaysMin (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
}

getSetGlobalLocale('en', {
    ordinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal : function (number) {
        var b = number % 10,
            output = (toInt(number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
        return number + output;
    }
});

// Side effect imports
hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);

var mathAbs = Math.abs;

function abs () {
    var data           = this._data;

    this._milliseconds = mathAbs(this._milliseconds);
    this._days         = mathAbs(this._days);
    this._months       = mathAbs(this._months);

    data.milliseconds  = mathAbs(data.milliseconds);
    data.seconds       = mathAbs(data.seconds);
    data.minutes       = mathAbs(data.minutes);
    data.hours         = mathAbs(data.hours);
    data.months        = mathAbs(data.months);
    data.years         = mathAbs(data.years);

    return this;
}

function addSubtract$1 (duration, input, value, direction) {
    var other = createDuration(input, value);

    duration._milliseconds += direction * other._milliseconds;
    duration._days         += direction * other._days;
    duration._months       += direction * other._months;

    return duration._bubble();
}

// supports only 2.0-style add(1, 's') or add(duration)
function add$1 (input, value) {
    return addSubtract$1(this, input, value, 1);
}

// supports only 2.0-style subtract(1, 's') or subtract(duration)
function subtract$1 (input, value) {
    return addSubtract$1(this, input, value, -1);
}

function absCeil (number) {
    if (number < 0) {
        return Math.floor(number);
    } else {
        return Math.ceil(number);
    }
}

function bubble () {
    var milliseconds = this._milliseconds;
    var days         = this._days;
    var months       = this._months;
    var data         = this._data;
    var seconds, minutes, hours, years, monthsFromDays;

    // if we have a mix of positive and negative values, bubble down first
    // check: https://github.com/moment/moment/issues/2166
    if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
            (milliseconds <= 0 && days <= 0 && months <= 0))) {
        milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
        days = 0;
        months = 0;
    }

    // The following code bubbles up values, see the tests for
    // examples of what that means.
    data.milliseconds = milliseconds % 1000;

    seconds           = absFloor(milliseconds / 1000);
    data.seconds      = seconds % 60;

    minutes           = absFloor(seconds / 60);
    data.minutes      = minutes % 60;

    hours             = absFloor(minutes / 60);
    data.hours        = hours % 24;

    days += absFloor(hours / 24);

    // convert days to months
    monthsFromDays = absFloor(daysToMonths(days));
    months += monthsFromDays;
    days -= absCeil(monthsToDays(monthsFromDays));

    // 12 months -> 1 year
    years = absFloor(months / 12);
    months %= 12;

    data.days   = days;
    data.months = months;
    data.years  = years;

    return this;
}

function daysToMonths (days) {
    // 400 years have 146097 days (taking into account leap year rules)
    // 400 years have 12 months === 4800
    return days * 4800 / 146097;
}

function monthsToDays (months) {
    // the reverse of daysToMonths
    return months * 146097 / 4800;
}

function as (units) {
    var days;
    var months;
    var milliseconds = this._milliseconds;

    units = normalizeUnits(units);

    if (units === 'month' || units === 'year') {
        days   = this._days   + milliseconds / 864e5;
        months = this._months + daysToMonths(days);
        return units === 'month' ? months : months / 12;
    } else {
        // handle milliseconds separately because of floating point math errors (issue #1867)
        days = this._days + Math.round(monthsToDays(this._months));
        switch (units) {
            case 'week'   : return days / 7     + milliseconds / 6048e5;
            case 'day'    : return days         + milliseconds / 864e5;
            case 'hour'   : return days * 24    + milliseconds / 36e5;
            case 'minute' : return days * 1440  + milliseconds / 6e4;
            case 'second' : return days * 86400 + milliseconds / 1000;
            // Math.floor prevents floating point math errors here
            case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
            default: throw new Error('Unknown unit ' + units);
        }
    }
}

// TODO: Use this.as('ms')?
function valueOf$1 () {
    return (
        this._milliseconds +
        this._days * 864e5 +
        (this._months % 12) * 2592e6 +
        toInt(this._months / 12) * 31536e6
    );
}

function makeAs (alias) {
    return function () {
        return this.as(alias);
    };
}

var asMilliseconds = makeAs('ms');
var asSeconds      = makeAs('s');
var asMinutes      = makeAs('m');
var asHours        = makeAs('h');
var asDays         = makeAs('d');
var asWeeks        = makeAs('w');
var asMonths       = makeAs('M');
var asYears        = makeAs('y');

function get$2 (units) {
    units = normalizeUnits(units);
    return this[units + 's']();
}

function makeGetter(name) {
    return function () {
        return this._data[name];
    };
}

var milliseconds = makeGetter('milliseconds');
var seconds      = makeGetter('seconds');
var minutes      = makeGetter('minutes');
var hours        = makeGetter('hours');
var days         = makeGetter('days');
var months       = makeGetter('months');
var years        = makeGetter('years');

function weeks () {
    return absFloor(this.days() / 7);
}

var round = Math.round;
var thresholds = {
    s: 45,  // seconds to minute
    m: 45,  // minutes to hour
    h: 22,  // hours to day
    d: 26,  // days to month
    M: 11   // months to year
};

// helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
    return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
}

function relativeTime$1 (posNegDuration, withoutSuffix, locale) {
    var duration = createDuration(posNegDuration).abs();
    var seconds  = round(duration.as('s'));
    var minutes  = round(duration.as('m'));
    var hours    = round(duration.as('h'));
    var days     = round(duration.as('d'));
    var months   = round(duration.as('M'));
    var years    = round(duration.as('y'));

    var a = seconds < thresholds.s && ['s', seconds]  ||
            minutes <= 1           && ['m']           ||
            minutes < thresholds.m && ['mm', minutes] ||
            hours   <= 1           && ['h']           ||
            hours   < thresholds.h && ['hh', hours]   ||
            days    <= 1           && ['d']           ||
            days    < thresholds.d && ['dd', days]    ||
            months  <= 1           && ['M']           ||
            months  < thresholds.M && ['MM', months]  ||
            years   <= 1           && ['y']           || ['yy', years];

    a[2] = withoutSuffix;
    a[3] = +posNegDuration > 0;
    a[4] = locale;
    return substituteTimeAgo.apply(null, a);
}

// This function allows you to set the rounding function for relative time strings
function getSetRelativeTimeRounding (roundingFunction) {
    if (roundingFunction === undefined) {
        return round;
    }
    if (typeof(roundingFunction) === 'function') {
        round = roundingFunction;
        return true;
    }
    return false;
}

// This function allows you to set a threshold for relative time strings
function getSetRelativeTimeThreshold (threshold, limit) {
    if (thresholds[threshold] === undefined) {
        return false;
    }
    if (limit === undefined) {
        return thresholds[threshold];
    }
    thresholds[threshold] = limit;
    return true;
}

function humanize (withSuffix) {
    var locale = this.localeData();
    var output = relativeTime$1(this, !withSuffix, locale);

    if (withSuffix) {
        output = locale.pastFuture(+this, output);
    }

    return locale.postformat(output);
}

var abs$1 = Math.abs;

function toISOString$1() {
    // for ISO strings we do not use the normal bubbling rules:
    //  * milliseconds bubble up until they become hours
    //  * days do not bubble at all
    //  * months bubble up until they become years
    // This is because there is no context-free conversion between hours and days
    // (think of clock changes)
    // and also not between days and months (28-31 days per month)
    var seconds = abs$1(this._milliseconds) / 1000;
    var days         = abs$1(this._days);
    var months       = abs$1(this._months);
    var minutes, hours, years;

    // 3600 seconds -> 60 minutes -> 1 hour
    minutes           = absFloor(seconds / 60);
    hours             = absFloor(minutes / 60);
    seconds %= 60;
    minutes %= 60;

    // 12 months -> 1 year
    years  = absFloor(months / 12);
    months %= 12;


    // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
    var Y = years;
    var M = months;
    var D = days;
    var h = hours;
    var m = minutes;
    var s = seconds;
    var total = this.asSeconds();

    if (!total) {
        // this is the same as C#'s (Noda) and python (isodate)...
        // but not other JS (goog.date)
        return 'P0D';
    }

    return (total < 0 ? '-' : '') +
        'P' +
        (Y ? Y + 'Y' : '') +
        (M ? M + 'M' : '') +
        (D ? D + 'D' : '') +
        ((h || m || s) ? 'T' : '') +
        (h ? h + 'H' : '') +
        (m ? m + 'M' : '') +
        (s ? s + 'S' : '');
}

var proto$2 = Duration.prototype;

proto$2.abs            = abs;
proto$2.add            = add$1;
proto$2.subtract       = subtract$1;
proto$2.as             = as;
proto$2.asMilliseconds = asMilliseconds;
proto$2.asSeconds      = asSeconds;
proto$2.asMinutes      = asMinutes;
proto$2.asHours        = asHours;
proto$2.asDays         = asDays;
proto$2.asWeeks        = asWeeks;
proto$2.asMonths       = asMonths;
proto$2.asYears        = asYears;
proto$2.valueOf        = valueOf$1;
proto$2._bubble        = bubble;
proto$2.get            = get$2;
proto$2.milliseconds   = milliseconds;
proto$2.seconds        = seconds;
proto$2.minutes        = minutes;
proto$2.hours          = hours;
proto$2.days           = days;
proto$2.weeks          = weeks;
proto$2.months         = months;
proto$2.years          = years;
proto$2.humanize       = humanize;
proto$2.toISOString    = toISOString$1;
proto$2.toString       = toISOString$1;
proto$2.toJSON         = toISOString$1;
proto$2.locale         = locale;
proto$2.localeData     = localeData;

// Deprecations
proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
proto$2.lang = lang;

// Side effect imports

// FORMATTING

addFormatToken('X', 0, 0, 'unix');
addFormatToken('x', 0, 0, 'valueOf');

// PARSING

addRegexToken('x', matchSigned);
addRegexToken('X', matchTimestamp);
addParseToken('X', function (input, array, config) {
    config._d = new Date(parseFloat(input, 10) * 1000);
});
addParseToken('x', function (input, array, config) {
    config._d = new Date(toInt(input));
});

// Side effect imports


hooks.version = '2.17.1';

setHookCallback(createLocal);

hooks.fn                    = proto;
hooks.min                   = min;
hooks.max                   = max;
hooks.now                   = now;
hooks.utc                   = createUTC;
hooks.unix                  = createUnix;
hooks.months                = listMonths;
hooks.isDate                = isDate;
hooks.locale                = getSetGlobalLocale;
hooks.invalid               = createInvalid;
hooks.duration              = createDuration;
hooks.isMoment              = isMoment;
hooks.weekdays              = listWeekdays;
hooks.parseZone             = createInZone;
hooks.localeData            = getLocale;
hooks.isDuration            = isDuration;
hooks.monthsShort           = listMonthsShort;
hooks.weekdaysMin           = listWeekdaysMin;
hooks.defineLocale          = defineLocale;
hooks.updateLocale          = updateLocale;
hooks.locales               = listLocales;
hooks.weekdaysShort         = listWeekdaysShort;
hooks.normalizeUnits        = normalizeUnits;
hooks.relativeTimeRounding = getSetRelativeTimeRounding;
hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
hooks.calendarFormat        = getCalendarFormat;
hooks.prototype             = proto;

return hooks;

})));

"format amd";!function(){"use strict";function a(a,b){return a.module("angularMoment",[]).constant("angularMomentConfig",{preprocess:null,timezone:"",format:null,statefulFilters:!0}).constant("moment",b).constant("amTimeAgoConfig",{withoutSuffix:!1,serverTime:null,titleFormat:null,fullDateThreshold:null,fullDateFormat:null}).directive("amTimeAgo",["$window","moment","amMoment","amTimeAgoConfig","angularMomentConfig",function(b,c,d,e,f){return function(g,h,i){function j(){var a;if(p)a=p;else if(e.serverTime){var b=(new Date).getTime(),d=b-w+e.serverTime;a=c(d)}else a=c();return a}function k(){q&&(b.clearTimeout(q),q=null)}function l(a){var c=j().diff(a,"day"),d=u&&c>=u;if(h.text(d?a.format(v):a.from(j(),s)),t&&!h.attr("title")&&h.attr("title",a.local().format(t)),!d){var e=Math.abs(j().diff(a,"minute")),f=3600;1>e?f=1:60>e?f=30:180>e&&(f=300),q=b.setTimeout(function(){l(a)},1e3*f)}}function m(a){z&&h.attr("datetime",a)}function n(){if(k(),o){var a=d.preprocessDate(o,x,r);l(a),m(a.toISOString())}}var o,p,q=null,r=f.format,s=e.withoutSuffix,t=e.titleFormat,u=e.fullDateThreshold,v=e.fullDateFormat,w=(new Date).getTime(),x=f.preprocess,y=i.amTimeAgo,z="TIME"===h[0].nodeName.toUpperCase();g.$watch(y,function(a){return"undefined"==typeof a||null===a||""===a?(k(),void(o&&(h.text(""),m(""),o=null))):(o=a,void n())}),a.isDefined(i.amFrom)&&g.$watch(i.amFrom,function(a){p="undefined"==typeof a||null===a||""===a?null:c(a),n()}),a.isDefined(i.amWithoutSuffix)&&g.$watch(i.amWithoutSuffix,function(a){"boolean"==typeof a?(s=a,n()):s=e.withoutSuffix}),i.$observe("amFormat",function(a){"undefined"!=typeof a&&(r=a,n())}),i.$observe("amPreprocess",function(a){x=a,n()}),i.$observe("amFullDateThreshold",function(a){u=a,n()}),i.$observe("amFullDateFormat",function(a){v=a,n()}),g.$on("$destroy",function(){k()}),g.$on("amMoment:localeChanged",function(){n()})}}]).service("amMoment",["moment","$rootScope","$log","angularMomentConfig",function(b,c,d,e){this.preprocessors={utc:b.utc,unix:b.unix},this.changeLocale=function(d,e){var f=b.locale(d,e);return a.isDefined(d)&&c.$broadcast("amMoment:localeChanged"),f},this.changeTimezone=function(a){e.timezone=a,c.$broadcast("amMoment:timezoneChanged")},this.preprocessDate=function(c,f,g){return a.isUndefined(f)&&(f=e.preprocess),this.preprocessors[f]?this.preprocessors[f](c,g):(f&&d.warn("angular-moment: Ignoring unsupported value for preprocess: "+f),!isNaN(parseFloat(c))&&isFinite(c)?b(parseInt(c,10)):b(c,g))},this.applyTimezone=function(a,b){return(b=b||e.timezone)?(b.match(/^Z|[+-]\d\d:?\d\d$/i)?a=a.utcOffset(b):a.tz?a=a.tz(b):d.warn("angular-moment: named timezone specified but moment.tz() is undefined. Did you forget to include moment-timezone.js?"),a):a}}]).filter("amCalendar",["moment","amMoment","angularMomentConfig",function(a,b,c){function d(c,d,e){if("undefined"==typeof c||null===c)return"";c=b.preprocessDate(c,d);var f=a(c);return f.isValid()?b.applyTimezone(f,e).calendar():""}return d.$stateful=c.statefulFilters,d}]).filter("amDifference",["moment","amMoment","angularMomentConfig",function(a,b,c){function d(c,d,e,f,g,h){if("undefined"==typeof c||null===c)return"";c=b.preprocessDate(c,g);var i=a(c);if(!i.isValid())return"";var j;if("undefined"==typeof d||null===d)j=a();else if(d=b.preprocessDate(d,h),j=a(d),!j.isValid())return"";return b.applyTimezone(i).diff(b.applyTimezone(j),e,f)}return d.$stateful=c.statefulFilters,d}]).filter("amDateFormat",["moment","amMoment","angularMomentConfig",function(a,b,c){function d(d,e,f,g,h){var i=h||c.format;if("undefined"==typeof d||null===d)return"";d=b.preprocessDate(d,f,i);var j=a(d);return j.isValid()?b.applyTimezone(j,g).format(e):""}return d.$stateful=c.statefulFilters,d}]).filter("amDurationFormat",["moment","angularMomentConfig",function(a,b){function c(b,c,d){return"undefined"==typeof b||null===b?"":a.duration(b,c).humanize(d)}return c.$stateful=b.statefulFilters,c}]).filter("amTimeAgo",["moment","amMoment","angularMomentConfig",function(a,b,c){function d(c,d,e,f){var g,h;return"undefined"==typeof c||null===c?"":(c=b.preprocessDate(c,d),g=a(c),g.isValid()?(h=a(f),"undefined"!=typeof f&&h.isValid()?b.applyTimezone(g).from(h,e):b.applyTimezone(g).fromNow(e)):"")}return d.$stateful=c.statefulFilters,d}]).filter("amSubtract",["moment","angularMomentConfig",function(a,b){function c(b,c,d){return"undefined"==typeof b||null===b?"":a(b).subtract(parseInt(c,10),d)}return c.$stateful=b.statefulFilters,c}]).filter("amAdd",["moment","angularMomentConfig",function(a,b){function c(b,c,d){return"undefined"==typeof b||null===b?"":a(b).add(parseInt(c,10),d)}return c.$stateful=b.statefulFilters,c}])}"function"==typeof define&&define.amd?define(["angular","moment"],a):"undefined"!=typeof module&&module&&module.exports?(a(angular,require("moment")),module.exports="angularMoment"):a(angular,("undefined"!=typeof global?global:window).moment)}();
//# sourceMappingURL=angular-moment.min.js.map
/*
 AngularJS v1.6.0
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(I,d){'use strict';function A(d){k&&d.get("$route")}function B(t,u,g){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(a,f,b,c,m){function v(){p&&(g.cancel(p),p=null);l&&(l.$destroy(),l=null);n&&(p=g.leave(n),p.done(function(a){!1!==a&&(p=null)}),n=null)}function D(){var b=t.current&&t.current.locals;if(d.isDefined(b&&b.$template)){var b=a.$new(),c=t.current;n=m(b,function(b){g.enter(b,null,n||f).done(function(b){!1===b||!d.isDefined(w)||w&&!a.$eval(w)||u()});
v()});l=c.scope=b;l.$emit("$viewContentLoaded");l.$eval(k)}else v()}var l,n,p,w=b.autoscroll,k=b.onload||"";a.$on("$routeChangeSuccess",D);D()}}}function x(d,k,g){return{restrict:"ECA",priority:-400,link:function(a,f){var b=g.current,c=b.locals;f.html(c.$template);var m=d(f.contents());if(b.controller){c.$scope=a;var v=k(b.controller,c);b.controllerAs&&(a[b.controllerAs]=v);f.data("$ngControllerController",v);f.children().data("$ngControllerController",v)}a[b.resolveAs||"$resolve"]=c;m(a)}}}var y,
E,F,z=d.module("ngRoute",[]).provider("$route",function(){function t(a,f){return d.extend(Object.create(a),f)}function u(a,d){var b=d.caseInsensitiveMatch,c={originalPath:a,regexp:a},g=c.keys=[];a=a.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)(\*\?|[?*])?/g,function(a,b,d,c){a="?"===c||"*?"===c?"?":null;c="*"===c||"*?"===c?"*":null;g.push({name:d,optional:!!a});b=b||"";return""+(a?"":b)+"(?:"+(a?b:"")+(c&&"(.+?)"||"([^/]+)")+(a||"")+")"+(a||"")}).replace(/([/$*])/g,"\\$1");c.regexp=new RegExp("^"+
a+"$",b?"i":"");return c}y=d.isArray;E=d.isObject;F=d.isDefined;var g={};this.when=function(a,f){var b;b=void 0;if(y(f)){b=b||[];for(var c=0,m=f.length;c<m;c++)b[c]=f[c]}else if(E(f))for(c in b=b||{},f)if("$"!==c.charAt(0)||"$"!==c.charAt(1))b[c]=f[c];b=b||f;d.isUndefined(b.reloadOnSearch)&&(b.reloadOnSearch=!0);d.isUndefined(b.caseInsensitiveMatch)&&(b.caseInsensitiveMatch=this.caseInsensitiveMatch);g[a]=d.extend(b,a&&u(a,b));a&&(c="/"===a[a.length-1]?a.substr(0,a.length-1):a+"/",g[c]=d.extend({redirectTo:a},
u(c,b)));return this};this.caseInsensitiveMatch=!1;this.otherwise=function(a){"string"===typeof a&&(a={redirectTo:a});this.when(null,a);return this};k=!0;this.eagerInstantiationEnabled=function(a){return F(a)?(k=a,this):k};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$templateRequest","$sce",function(a,f,b,c,m,k,u){function l(e){var h=q.current;(y=(s=B())&&h&&s.$$route===h.$$route&&d.equals(s.pathParams,h.pathParams)&&!s.reloadOnSearch&&!C)||!h&&!s||a.$broadcast("$routeChangeStart",
s,h).defaultPrevented&&e&&e.preventDefault()}function n(){var e=q.current,h=s;if(y)e.params=h.params,d.copy(e.params,b),a.$broadcast("$routeUpdate",e);else if(h||e){C=!1;q.current=h;var G=c.resolve(h);G.then(p).then(w).then(function(c){return c&&G.then(z).then(function(c){h===q.current&&(h&&(h.locals=c,d.copy(h.params,b)),a.$broadcast("$routeChangeSuccess",h,e))})}).catch(function(b){h===q.current&&a.$broadcast("$routeChangeError",h,e,b)})}}function p(e){var a={route:e,hasRedirection:!1};if(e)if(e.redirectTo)if(d.isString(e.redirectTo))a.path=
x(e.redirectTo,e.params),a.search=e.params,a.hasRedirection=!0;else{var b=f.path(),g=f.search();e=e.redirectTo(e.pathParams,b,g);d.isDefined(e)&&(a.url=e,a.hasRedirection=!0)}else if(e.resolveRedirectTo)return c.resolve(m.invoke(e.resolveRedirectTo)).then(function(e){d.isDefined(e)&&(a.url=e,a.hasRedirection=!0);return a});return a}function w(a){var b=!0;if(a.route!==q.current)b=!1;else if(a.hasRedirection){var d=f.url(),c=a.url;c?f.url(c).replace():c=f.path(a.path).search(a.search).replace().url();
c!==d&&(b=!1)}return b}function z(a){if(a){var b=d.extend({},a.resolve);d.forEach(b,function(a,e){b[e]=d.isString(a)?m.get(a):m.invoke(a,null,null,e)});a=A(a);d.isDefined(a)&&(b.$template=a);return c.all(b)}}function A(a){var b,c;d.isDefined(b=a.template)?d.isFunction(b)&&(b=b(a.params)):d.isDefined(c=a.templateUrl)&&(d.isFunction(c)&&(c=c(a.params)),d.isDefined(c)&&(a.loadedTemplateUrl=u.valueOf(c),b=k(c)));return b}function B(){var a,b;d.forEach(g,function(c,g){var r;if(r=!b){var k=f.path();r=c.keys;
var m={};if(c.regexp)if(k=c.regexp.exec(k)){for(var l=1,p=k.length;l<p;++l){var n=r[l-1],q=k[l];n&&q&&(m[n.name]=q)}r=m}else r=null;else r=null;r=a=r}r&&(b=t(c,{params:d.extend({},f.search(),a),pathParams:a}),b.$$route=c)});return b||g[null]&&t(g[null],{params:{},pathParams:{}})}function x(a,b){var c=[];d.forEach((a||"").split(":"),function(a,d){if(0===d)c.push(a);else{var e=a.match(/(\w+)(?:[?*])?(.*)/),f=e[1];c.push(b[f]);c.push(e[2]||"");delete b[f]}});return c.join("")}var C=!1,s,y,q={routes:g,
reload:function(){C=!0;var b={defaultPrevented:!1,preventDefault:function(){this.defaultPrevented=!0;C=!1}};a.$evalAsync(function(){l(b);b.defaultPrevented||n()})},updateParams:function(a){if(this.current&&this.current.$$route)a=d.extend({},this.current.params,a),f.path(x(this.current.$$route.originalPath,a)),f.search(a);else throw H("norout");}};a.$on("$locationChangeStart",l);a.$on("$locationChangeSuccess",n);return q}]}).run(A),H=d.$$minErr("ngRoute"),k;A.$inject=["$injector"];z.provider("$routeParams",
function(){this.$get=function(){return{}}});z.directive("ngView",B);z.directive("ngView",x);B.$inject=["$route","$anchorScroll","$animate"];x.$inject=["$compile","$controller","$route"]})(window,window.angular);
//# sourceMappingURL=angular-route.min.js.map

// HumanizeDuration.js - http://git.io/j0HgmQ

(function() {

  var UNITS = {
    year: 31557600000,
    month: 2629800000,
    week: 604800000,
    day: 86400000,
    hour: 3600000,
    minute: 60000,
    second: 1000,
    millisecond: 1
  };

  var languages = {
    ar: {
      year: function(c) { return ((c === 1) ? "سنة" : "سنوات"); },
      month: function(c) { return ((c === 1) ? "شهر" : "أشهر"); },
      week: function(c) { return ((c === 1) ? "أسبوع" : "أسابيع"); },
      day: function(c) { return ((c === 1) ? "يوم" : "أيام"); },
      hour: function(c) { return ((c === 1) ? "ساعة" : "ساعات"); },
      minute: function(c) { return ((c === 1) ? "دقيقة" : "دقائق"); },
      second: function(c) { return ((c === 1) ? "ثانية" : "ثواني"); },
      millisecond: function(c) { return ((c === 1) ? "جزء من الثانية" : "أجزاء من الثانية"); }
    },
    ca: {
      year: function(c) { return "any" + ((c !== 1) ? "s" : ""); },
      month: function(c) { return "mes" + ((c !== 1) ? "os" : ""); },
      week: function(c) { return "setman" + ((c !== 1) ? "es" : "a"); },
      day: function(c) { return "di" + ((c !== 1) ? "es" : "a"); },
      hour: function(c) { return "hor" + ((c !== 1) ? "es" : "a"); },
      minute: function(c) { return "minut" + ((c !== 1) ? "s" : ""); },
      second: function(c) { return "segon" + ((c !== 1) ? "s" : ""); },
      millisecond: function(c) { return "milisegon" + ((c !== 1) ? "s" : "" ); }
    },
    da: {
      year: "år",
      month: function(c) { return "måned" + ((c !== 1) ? "er" : ""); },
      week: function(c) { return "uge" + ((c !== 1) ? "r" : ""); },
      day: function(c) { return "dag" + ((c !== 1) ? "e" : ""); },
      hour: function(c) { return "time" + ((c !== 1) ? "r" : ""); },
      minute: function(c) { return "minut" + ((c !== 1) ? "ter" : ""); },
      second: function(c) { return "sekund" + ((c !== 1) ? "er" : ""); },
      millisecond: function(c) { return "millisekund" + ((c !== 1) ? "er" : ""); }
    },
    de: {
      year: function(c) { return "Jahr" + ((c !== 1) ? "e" : ""); },
      month: function(c) { return "Monat" + ((c !== 1) ? "e" : ""); },
      week: function(c) { return "Woche" + ((c !== 1) ? "n" : ""); },
      day: function(c) { return "Tag" + ((c !== 1) ? "e" : ""); },
      hour: function(c) { return "Stunde" + ((c !== 1) ? "n" : ""); },
      minute: function(c) { return "Minute" + ((c !== 1) ? "n" : ""); },
      second: function(c) { return "Sekunde" + ((c !== 1) ? "n" : ""); },
      millisecond: function(c) { return "Millisekunde" + ((c !== 1) ? "n" : ""); }
    },
    en: {
      year: function(c) { return "year" + ((c !== 1) ? "s" : ""); },
      month: function(c) { return "month" + ((c !== 1) ? "s" : ""); },
      week: function(c) { return "week" + ((c !== 1) ? "s" : ""); },
      day: function(c) { return "day" + ((c !== 1) ? "s" : ""); },
      hour: function(c) { return "hour" + ((c !== 1) ? "s" : ""); },
      minute: function(c) { return "minute" + ((c !== 1) ? "s" : ""); },
      second: function(c) { return "second" + ((c !== 1) ? "s" : ""); },
      millisecond: function(c) { return "millisecond" + ((c !== 1) ? "s" : ""); }
    },
    es: {
      year: function(c) { return "año" + ((c !== 1) ? "s" : ""); },
      month: function(c) { return "mes" + ((c !== 1) ? "es" : ""); },
      week: function(c) { return "semana" + ((c !== 1) ? "s" : ""); },
      day: function(c) { return "día" + ((c !== 1) ? "s" : ""); },
      hour: function(c) { return "hora" + ((c !== 1) ? "s" : ""); },
      minute: function(c) { return "minuto" + ((c !== 1) ? "s" : ""); },
      second: function(c) { return "segundo" + ((c !== 1) ? "s" : ""); },
      millisecond: function(c) { return "milisegundo" + ((c !== 1) ? "s" : "" ); }
    },
    fr: {
      year: function(c) { return "an" + ((c !== 1) ? "s" : ""); },
      month: "mois",
      week: function(c) { return "semaine" + ((c !== 1) ? "s" : ""); },
      day: function(c) { return "jour" + ((c !== 1) ? "s" : ""); },
      hour: function(c) { return "heure" + ((c !== 1) ? "s" : ""); },
      minute: function(c) { return "minute" + ((c !== 1) ? "s" : ""); },
      second: function(c) { return "seconde" + ((c !== 1) ? "s" : ""); },
      millisecond: function(c) { return "milliseconde" + ((c !== 1) ? "s" : ""); }
    },
    hu: {
      year: "év",
      month: "hónap",
      week: "hét",
      day: "nap",
      hour: "óra",
      minute: "perc",
      second: "másodperc",
      millisecond: "ezredmásodperc"
    },
    it: {
      year: function(c) { return "ann" + ((c !== 1) ? "i" : "o"); },
      month: function(c) { return "mes" + ((c !== 1) ? "i" : "e"); },
      week: function(c) { return "settiman" + ((c !== 1) ? "e" : "a"); },
      day: function(c) { return "giorn" + ((c !== 1) ? "i" : "o"); },
      hour: function(c) { return "or" + ((c !== 1) ? "e" : "a"); },
      minute: function(c) { return "minut" + ((c !== 1) ? "i" : "o"); },
      second: function(c) { return "second" + ((c !== 1) ? "i" : "o"); },
      millisecond: function(c) { return "millisecond" + ((c !== 1) ? "i" : "o" ); }
    },
    ja: {
      year: "年",
      month: "月",
      week: "週",
      day: "日",
      hour: "時間",
      minute: "分",
      second: "秒",
      millisecond: "ミリ秒"
    },
    ko: {
      year: "년",
      month: "개월",
      week: "주일",
      day: "일",
      hour: "시간",
      minute: "분",
      second: "초",
      millisecond: "밀리 초"
    },
    nl: {
      year: "jaar",
      month: function(c) { return (c === 1) ? "maand" : "maanden"; },
      week: function(c) { return (c === 1) ? "week" : "weken"; },
      day: function(c) { return (c === 1) ? "dag" : "dagen"; },
      hour: "uur",
      minute: function(c) { return (c === 1) ? "minuut" : "minuten"; },
      second: function(c) { return (c === 1) ? "seconde" : "seconden"; },
      millisecond: function(c) { return (c === 1) ? "milliseconde" : "milliseconden"; }
    },
    nob: {
      year: "år",
      month: function(c) { return "måned" + ((c !== 1) ? "er" : ""); },
      week: function(c) { return "uke" + ((c !== 1) ? "r" : ""); },
      day: function(c) { return "dag" + ((c !== 1) ? "er" : ""); },
      hour: function(c) { return "time" + ((c !== 1) ? "r" : ""); },
      minute: function(c) { return "minutt" + ((c !== 1) ? "er" : ""); },
      second: function(c) { return "sekund" + ((c !== 1) ? "er" : ""); },
      millisecond: function(c) { return "millisekund" + ((c !== 1) ? "er" : ""); }
    },
    pl: {
      year: function(c) { return ["rok", "roku", "lata", "lat"][getPolishForm(c)]; },
      month: function(c) { return ["miesiąc", "miesiąca", "miesiące", "miesięcy"][getPolishForm(c)]; },
      week: function(c) { return ["tydzień", "tygodnia", "tygodnie", "tygodni"][getPolishForm(c)]; },
      day: function(c) { return ["dzień", "dnia", "dni", "dni"][getPolishForm(c)]; },
      hour: function(c) { return ["godzina", "godziny", "godziny", "godzin"][getPolishForm(c)]; },
      minute: function(c) { return ["minuta", "minuty", "minuty", "minut"][getPolishForm(c)]; },
      second: function(c) { return ["sekunda", "sekundy", "sekundy", "sekund"][getPolishForm(c)]; },
      millisecond: function(c) { return ["milisekunda", "milisekundy", "milisekundy", "milisekund"][getPolishForm(c)]; }
    },
    pt: {
      year: function(c) { return "ano" + ((c !== 1) ? "s" : ""); },
      month: function(c) { return (c !== 1) ? "meses" : "mês"; },
      week: function(c) { return "semana" + ((c !== 1) ? "s" : ""); },
      day: function(c) { return "dia" + ((c !== 1) ? "s" : ""); },
      hour: function(c) { return "hora" + ((c !== 1) ? "s" : ""); },
      minute: function(c) { return "minuto" + ((c !== 1) ? "s" : ""); },
      second: function(c) { return "segundo" + ((c !== 1) ? "s" : ""); },
      millisecond: function(c) { return "milissegundo" + ((c !== 1) ? "s" : ""); }
    },
    ru: {
      year: function(c) { return ["лет", "год", "года"][getRussianForm(c)]; },
      month: function(c) { return ["месяцев", "месяц", "месяца"][getRussianForm(c)]; },
      week: function(c) { return ["недель", "неделя", "недели"][getRussianForm(c)]; },
      day: function(c) { return ["дней", "день", "дня"][getRussianForm(c)]; },
      hour: function(c) { return ["часов", "час", "часа"][getRussianForm(c)]; },
      minute: function(c) { return ["минут", "минута", "минуты"][getRussianForm(c)]; },
      second: function(c) { return ["секунд", "секунда", "секунды"][getRussianForm(c)]; },
      millisecond: function(c) { return ["миллисекунд", "миллисекунда", "миллисекунды"][getRussianForm(c)]; }
    },
    sv: {
      year: "år",
      month: function(c) { return "månad" + ((c !== 1) ? "er" : ""); },
      week: function(c) { return "veck" + ((c !== 1) ? "or" : "a"); },
      day: function(c) { return "dag" + ((c !== 1) ? "ar" : ""); },
      hour: function(c) { return "timm" + ((c !== 1) ? "ar" : "e"); },
      minute: function(c) { return "minut" + ((c !== 1) ? "er" : ""); },
      second: function(c) { return "sekund" + ((c !== 1) ? "er" : ""); },
      millisecond: function(c) { return "millisekund" + ((c !== 1) ? "er" : ""); }
    },
    tr: {
      year: "yıl",
      month: "ay",
      week: "hafta",
      day: "gün",
      hour: "saat",
      minute: "dakika",
      second: "saniye",
      millisecond: "milisaniye"
    },
    "zh-CN": {
      year: "年",
      month: "个月",
      week: "周",
      day: "天",
      hour: "小时",
      minute: "分钟",
      second: "秒",
      millisecond: "毫秒"
    },
    "zh-TW": {
      year: "年",
      month: "個月",
      week: "周",
      day: "天",
      hour: "小時",
      minute: "分鐘",
      second: "秒",
      millisecond: "毫秒"
    }
  };

  // You can create a humanizer, which returns a function with defaults
  // parameters.
  function humanizer(passedOptions) {

    var result = function humanizer(ms, humanizerOptions) {
      var options = extend({}, result, humanizerOptions || {});
      return doHumanization(ms, options);
    };

    return extend(result, {
      language: "en",
      delimiter: ", ",
      spacer: " ",
      units: ["year", "month", "week", "day", "hour", "minute", "second"],
      languages: {},
      halfUnit: true,
      round: false
    }, passedOptions);

  }

  // The main function is just a wrapper around a default humanizer.
  var defaultHumanizer = humanizer({});
  function humanizeDuration() {
    return defaultHumanizer.apply(defaultHumanizer, arguments);
  }

  // doHumanization does the bulk of the work.
  function doHumanization(ms, options) {

    // Make sure we have a positive number.
    // Has the nice sideffect of turning Number objects into primitives.
    ms = Math.abs(ms);

    if (ms === 0) {
      return "0";
    }

    var dictionary = options.languages[options.language] || languages[options.language];
    if (!dictionary) {
      throw new Error("No language " + dictionary + ".");
    }

    var result = [];

    // Start at the top and keep removing units, bit by bit.
    var unitName, unitMS, unitCount, mightBeHalfUnit;
    for (var i = 0, len = options.units.length; i < len; i ++) {

      unitName = options.units[i];
      if (unitName[unitName.length - 1] === "s") { // strip plurals
        unitName = unitName.substring(0, unitName.length - 1);
      }
      unitMS = UNITS[unitName];

      // If it's a half-unit interval, we're done.
      if (result.length === 0 && options.halfUnit) {
        mightBeHalfUnit = (ms / unitMS) * 2;
        if (mightBeHalfUnit === Math.floor(mightBeHalfUnit)) {
          return render(mightBeHalfUnit / 2, unitName, dictionary, options.spacer);
        }
      }

      // What's the number of full units we can fit?
      if ((i + 1) === len) {
        unitCount = ms / unitMS;
        if (options.round) {
          unitCount = Math.round(unitCount);
        }
      } else {
        unitCount = Math.floor(ms / unitMS);
      }

      // Add the string.
      if (unitCount) {
        result.push(render(unitCount, unitName, dictionary, options.spacer));
      }

      // Remove what we just figured out.
      ms -= unitCount * unitMS;

    }

    return result.join(options.delimiter);

  }

  function render(count, type, dictionary, spacer) {
    var dictionaryValue = dictionary[type];
    var word;
    if (typeof dictionaryValue === "function") {
      word = dictionaryValue(count);
    } else {
      word = dictionaryValue;
    }
    return count + spacer + word;
  }

  function extend(destination) {
    var source;
    for (var i = 1; i < arguments.length; i ++) {
      source = arguments[i];
      for (var prop in source) {
        if (source.hasOwnProperty(prop)) {
          destination[prop] = source[prop];
        }
      }
    }
    return destination;
  }

  // Internal helper function for Polish language.
  function getPolishForm(c) {
    if (c === 1) {
      return 0;
    } else if (Math.floor(c) !== c) {
      return 1;
    } else if (2 <= c % 10 && c % 10 <= 4 && !(10 < c % 100 && c % 100 < 20)) {
      return 2;
    } else {
      return 3;
    }
  }

  // Internal helper function for Russian language.
  function getRussianForm(c) {
    if (Math.floor(c) !== c) {
      return 2;
    } else if (c === 0 || (c >= 5 && c <= 20) || (c % 10 >= 5 && c % 10 <= 9) || (c % 10 === 0)) {
      return 0;
    } else if (c === 1 || c % 10 === 1) {
      return 1;
    } else if (c > 1) {
      return 2;
    } else {
      return 0;
    }
  }

  function getSupportedLanguages() {
    var result = [];
    for (var language in languages) {
      if (languages.hasOwnProperty(language)) {
        result.push(language);
      }
    }
    return result;
  }

  humanizeDuration.humanizer = humanizer;
  humanizeDuration.getSupportedLanguages = getSupportedLanguages;

  if (typeof define === "function" && define.amd) {
    define(function() {
      return humanizeDuration;
    });
  } else if (typeof module !== "undefined" && module.exports) {
    module.exports = humanizeDuration;
  } else {
    this.humanizeDuration = humanizeDuration;
  }

})();

var timerModule = angular.module('timer', [])
  .directive('timer', ['$compile', function ($compile) {
    return  {
      restrict: 'EA',
      replace: false,
      scope: {
        interval: '=interval',
        startTimeAttr: '=startTime',
        endTimeAttr: '=endTime',
        countdownattr: '=countdown',
        finishCallback: '&finishCallback',
        autoStart: '&autoStart',
        language: '@?',
        fallback: '@?',
        maxTimeUnit: '=',
        seconds: '=?',
        minutes: '=?',
        hours: '=?',
        days: '=?',
        months: '=?',
        years: '=?',
        secondsS: '=?',
        minutesS: '=?',
        hoursS: '=?',
        daysS: '=?',
        monthsS: '=?',
        yearsS: '=?'
      },
      controller: ['$scope', '$element', '$attrs', '$timeout', 'I18nService', '$interpolate', 'progressBarService', function ($scope, $element, $attrs, $timeout, I18nService, $interpolate, progressBarService) {

        // Checking for trim function since IE8 doesn't have it
        // If not a function, create tirm with RegEx to mimic native trim
        if (typeof String.prototype.trim !== 'function') {
          String.prototype.trim = function () {
            return this.replace(/^\s+|\s+$/g, '');
          };
        }

        //angular 1.2 doesn't support attributes ending in "-start", so we're
        //supporting both "autostart" and "auto-start" as a solution for
        //backward and forward compatibility.
        $scope.autoStart = $attrs.autoStart || $attrs.autostart;


        $scope.language = $scope.language || 'en';
        $scope.fallback = $scope.fallback || 'en';

        //allow to change the language of the directive while already launched
        $scope.$watch('language', function(newVal, oldVal) {
          if(newVal !== undefined) {
            i18nService.init(newVal, $scope.fallback);
          }
        });

        //init momentJS i18n, default english
        var i18nService = new I18nService();
        i18nService.init($scope.language, $scope.fallback);

        //progress bar
        $scope.displayProgressBar = 0;
        $scope.displayProgressActive = 'active'; //Bootstrap active effect for progress bar

        if ($element.html().trim().length === 0) {
          $element.append($compile('<span>' + $interpolate.startSymbol() + 'millis' + $interpolate.endSymbol() + '</span>')($scope));
        } else {
          $element.append($compile($element.contents())($scope));
        }

        $scope.startTime = null;
        $scope.endTime = null;
        $scope.timeoutId = null;
        $scope.countdown = angular.isNumber($scope.countdownattr) && parseInt($scope.countdownattr, 10) >= 0 ? parseInt($scope.countdownattr, 10) : undefined;
        $scope.isRunning = false;

        $scope.$on('timer-start', function () {
          $scope.start();
        });

        $scope.$on('timer-resume', function () {
          $scope.resume();
        });

        $scope.$on('timer-stop', function () {
          $scope.stop();
        });

        $scope.$on('timer-clear', function () {
          $scope.clear();
        });

        $scope.$on('timer-reset', function () {
          $scope.reset();
        });

        $scope.$on('timer-set-countdown', function (e, countdown) {
          $scope.countdown = countdown;
        });

        function resetTimeout() {
          if ($scope.timeoutId) {
            clearTimeout($scope.timeoutId);
          }
        }

        $scope.$watch('startTimeAttr', function(newValue, oldValue) {
          if (newValue !== oldValue && $scope.isRunning) {
            $scope.start();
          }
        });

        $scope.$watch('endTimeAttr', function(newValue, oldValue) {
          if (newValue !== oldValue && $scope.isRunning) {
            $scope.start();
          }
        });

        $scope.start = $element[0].start = function () {
          $scope.startTime = $scope.startTimeAttr ? moment($scope.startTimeAttr) : moment();
          $scope.endTime = $scope.endTimeAttr ? moment($scope.endTimeAttr) : null;
          if (!angular.isNumber($scope.countdown)) {
            $scope.countdown = angular.isNumber($scope.countdownattr) && parseInt($scope.countdownattr, 10) > 0 ? parseInt($scope.countdownattr, 10) : undefined;
          }
          resetTimeout();
          tick();
          $scope.isRunning = true;
        };

        $scope.resume = $element[0].resume = function () {
          resetTimeout();
          if ($scope.countdownattr) {
            $scope.countdown += 1;
          }
          $scope.startTime = moment().diff((moment($scope.stoppedTime).diff(moment($scope.startTime))));
          tick();
          $scope.isRunning = true;
        };

        $scope.stop = $scope.pause = $element[0].stop = $element[0].pause = function () {
          var timeoutId = $scope.timeoutId;
          $scope.clear();
          $scope.$emit('timer-stopped', {timeoutId: timeoutId, millis: $scope.millis, seconds: $scope.seconds, minutes: $scope.minutes, hours: $scope.hours, days: $scope.days});
        };

        $scope.clear = $element[0].clear = function () {
          // same as stop but without the event being triggered
          $scope.stoppedTime = moment();
          resetTimeout();
          $scope.timeoutId = null;
          $scope.isRunning = false;
        };

        $scope.reset = $element[0].reset = function () {
          $scope.startTime = $scope.startTimeAttr ? moment($scope.startTimeAttr) : moment();
          $scope.endTime = $scope.endTimeAttr ? moment($scope.endTimeAttr) : null;
          $scope.countdown = angular.isNumber($scope.countdownattr) && parseInt($scope.countdownattr, 10) > 0 ? parseInt($scope.countdownattr, 10) : undefined;
          resetTimeout();
          tick();
          $scope.isRunning = false;
          $scope.clear();
        };

        $element.bind('$destroy', function () {
          resetTimeout();
          $scope.isRunning = false;
        });


        function calculateTimeUnits() {
          var timeUnits = {}; //will contains time with units

          if ($attrs.startTime !== undefined){
            $scope.millis = moment().diff(moment($scope.startTimeAttr));
          }

          timeUnits = i18nService.getTimeUnits($scope.millis);

          // compute time values based on maxTimeUnit specification
          if (!$scope.maxTimeUnit || $scope.maxTimeUnit === 'day') {
            $scope.seconds = Math.floor(($scope.millis / 1000) % 60);
            $scope.minutes = Math.floor((($scope.millis / (60000)) % 60));
            $scope.hours = Math.floor((($scope.millis / (3600000)) % 24));
            $scope.days = Math.floor((($scope.millis / (3600000)) / 24));
            $scope.months = 0;
            $scope.years = 0;
          } else if ($scope.maxTimeUnit === 'second') {
            $scope.seconds = Math.floor($scope.millis / 1000);
            $scope.minutes = 0;
            $scope.hours = 0;
            $scope.days = 0;
            $scope.months = 0;
            $scope.years = 0;
          } else if ($scope.maxTimeUnit === 'minute') {
            $scope.seconds = Math.floor(($scope.millis / 1000) % 60);
            $scope.minutes = Math.floor($scope.millis / 60000);
            $scope.hours = 0;
            $scope.days = 0;
            $scope.months = 0;
            $scope.years = 0;
          } else if ($scope.maxTimeUnit === 'hour') {
            $scope.seconds = Math.floor(($scope.millis / 1000) % 60);
            $scope.minutes = Math.floor((($scope.millis / (60000)) % 60));
            $scope.hours = Math.floor($scope.millis / 3600000);
            $scope.days = 0;
            $scope.months = 0;
            $scope.years = 0;
          } else if ($scope.maxTimeUnit === 'month') {
            $scope.seconds = Math.floor(($scope.millis / 1000) % 60);
            $scope.minutes = Math.floor((($scope.millis / (60000)) % 60));
            $scope.hours = Math.floor((($scope.millis / (3600000)) % 24));
            $scope.days = Math.floor((($scope.millis / (3600000)) / 24) % 30);
            $scope.months = Math.floor((($scope.millis / (3600000)) / 24) / 30);
            $scope.years = 0;
          } else if ($scope.maxTimeUnit === 'year') {
            $scope.seconds = Math.floor(($scope.millis / 1000) % 60);
            $scope.minutes = Math.floor((($scope.millis / (60000)) % 60));
            $scope.hours = Math.floor((($scope.millis / (3600000)) % 24));
            $scope.days = Math.floor((($scope.millis / (3600000)) / 24) % 30);
            $scope.months = Math.floor((($scope.millis / (3600000)) / 24 / 30) % 12);
            $scope.years = Math.floor(($scope.millis / (3600000)) / 24 / 365);
          }
          // plural - singular unit decision (old syntax, for backwards compatibility and English only, could be deprecated!)
          $scope.secondsS = ($scope.seconds === 1) ? '' : 's';
          $scope.minutesS = ($scope.minutes === 1) ? '' : 's';
          $scope.hoursS = ($scope.hours === 1) ? '' : 's';
          $scope.daysS = ($scope.days === 1)? '' : 's';
          $scope.monthsS = ($scope.months === 1)? '' : 's';
          $scope.yearsS = ($scope.years === 1)? '' : 's';


          // new plural-singular unit decision functions (for custom units and multilingual support)
          $scope.secondUnit = timeUnits.seconds;
          $scope.minuteUnit = timeUnits.minutes;
          $scope.hourUnit = timeUnits.hours;
          $scope.dayUnit = timeUnits.days;
          $scope.monthUnit = timeUnits.months;
          $scope.yearUnit = timeUnits.years;

          //add leading zero if number is smaller than 10
          $scope.sseconds = $scope.seconds < 10 ? '0' + $scope.seconds : $scope.seconds;
          $scope.mminutes = $scope.minutes < 10 ? '0' + $scope.minutes : $scope.minutes;
          $scope.hhours = $scope.hours < 10 ? '0' + $scope.hours : $scope.hours;
          $scope.ddays = $scope.days < 10 ? '0' + $scope.days : $scope.days;
          $scope.mmonths = $scope.months < 10 ? '0' + $scope.months : $scope.months;
          $scope.yyears = $scope.years < 10 ? '0' + $scope.years : $scope.years;

        }

        //determine initial values of time units and add AddSeconds functionality
        if ($scope.countdownattr) {
          $scope.millis = $scope.countdownattr * 1000;

          $scope.addCDSeconds = $element[0].addCDSeconds = function (extraSeconds) {
            $scope.countdown += extraSeconds;
            $scope.$digest();
            if (!$scope.isRunning) {
              $scope.start();
            }
          };

          $scope.$on('timer-add-cd-seconds', function (e, extraSeconds) {
            $timeout(function () {
              $scope.addCDSeconds(extraSeconds);
            });
          });

          $scope.$on('timer-set-countdown-seconds', function (e, countdownSeconds) {
            if (!$scope.isRunning) {
              $scope.clear();
            }

            $scope.countdown = countdownSeconds;
            $scope.millis = countdownSeconds * 1000;
            calculateTimeUnits();
          });
        } else {
          $scope.millis = 0;
        }
        calculateTimeUnits();

        var tick = function tick() {
          var typeTimer = null; // countdown or endTimeAttr
          $scope.millis = moment().diff($scope.startTime);
          var adjustment = $scope.millis % 1000;

          if ($scope.endTimeAttr) {
            typeTimer = $scope.endTimeAttr;
            $scope.millis = moment($scope.endTime).diff(moment());
            adjustment = $scope.interval - $scope.millis % 1000;
          }

          if ($scope.countdownattr) {
            typeTimer = $scope.countdownattr;
            $scope.millis = $scope.countdown * 1000;
          }

          if ($scope.millis < 0) {
            $scope.stop();
            $scope.millis = 0;
            calculateTimeUnits();
            if($scope.finishCallback) {
              $scope.$eval($scope.finishCallback);
            }
            return;
          }
          calculateTimeUnits();

          //We are not using $timeout for a reason. Please read here - https://github.com/siddii/angular-timer/pull/5
          $scope.timeoutId = setTimeout(function () {
            tick();
            $scope.$digest();
          }, $scope.interval - adjustment);

          $scope.$emit('timer-tick', {timeoutId: $scope.timeoutId, millis: $scope.millis, timerElement: $element[0]});

          if ($scope.countdown > 0) {
            $scope.countdown--;
          }
          else if ($scope.countdown <= 0) {
            $scope.stop();
            if($scope.finishCallback) {
              $scope.$eval($scope.finishCallback);
            }
          }

          if(typeTimer !== null){
            //calculate progress bar
            $scope.progressBar = progressBarService.calculateProgressBar($scope.startTime, $scope.millis, $scope.endTime, $scope.countdownattr);

            if($scope.progressBar === 100){
              $scope.displayProgressActive = ''; //No more Bootstrap active effect
            }
          }
        };

        if ($scope.autoStart === undefined || $scope.autoStart === true) {
          $scope.start();
        }
      }]
    };
    }]);

/* commonjs package manager support (eg componentjs) */
if (typeof module !== "undefined" && typeof exports !== "undefined" && module.exports === exports){
  module.exports = timerModule;
}

var app = angular.module('timer');

app.factory('I18nService', function() {

    var I18nService = function() {};

    I18nService.prototype.language = 'en';
    I18nService.prototype.fallback = 'en';
    I18nService.prototype.timeHumanizer = {};

    I18nService.prototype.init = function init(lang, fallback) {
        var supported_languages = humanizeDuration.getSupportedLanguages();

        this.fallback = (fallback !== undefined) ? fallback : 'en';
        if (supported_languages.indexOf(fallback) === -1) {
            this.fallback = 'en';
        }

        this.language = lang;
        if (supported_languages.indexOf(lang) === -1) {
            this.language = this.fallback;
        }

        //moment init
        moment.locale(this.language); //@TODO maybe to remove, it should be handle by the user's application itself, and not inside the directive

        //human duration init, using it because momentjs does not allow accurate time (
        // momentJS: a few moment ago, human duration : 4 seconds ago
        this.timeHumanizer = humanizeDuration.humanizer({
            language: this.language,
            halfUnit:false
        });
    };

    /**
     * get time with units from momentJS i18n
     * @param {int} millis
     * @returns {{millis: string, seconds: string, minutes: string, hours: string, days: string, months: string, years: string}}
     */
    I18nService.prototype.getTimeUnits = function getTimeUnits(millis) {
        var diffFromAlarm = Math.round(millis/1000) * 1000; //time in milliseconds, get rid of the last 3 ms value to avoid 2.12 seconds display

        var time = {};

        if (typeof this.timeHumanizer != 'undefined'){
            time = {
                'millis' : this.timeHumanizer(diffFromAlarm, { units: ["milliseconds"] }),
                'seconds' : this.timeHumanizer(diffFromAlarm, { units: ["seconds"] }),
                'minutes' : this.timeHumanizer(diffFromAlarm, { units: ["minutes", "seconds"] }) ,
                'hours' : this.timeHumanizer(diffFromAlarm, { units: ["hours", "minutes", "seconds"] }) ,
                'days' : this.timeHumanizer(diffFromAlarm, { units: ["days", "hours", "minutes", "seconds"] }) ,
                'months' : this.timeHumanizer(diffFromAlarm, { units: ["months", "days", "hours", "minutes", "seconds"] }) ,
                'years' : this.timeHumanizer(diffFromAlarm, { units: ["years", "months", "days", "hours", "minutes", "seconds"] })
            };
        }
        else {
            console.error('i18nService has not been initialized. You must call i18nService.init("en") for example');
        }

        return time;
    };

    return I18nService;
});

var app = angular.module('timer');

app.factory('progressBarService', function() {

  var ProgressBarService = function() {};

  /**
   * calculate the remaining time in a progress bar in percentage
   * @param {momentjs} startValue in seconds
   * @param {integer} currentCountdown, where are we in the countdown
   * @param {integer} remainingTime, remaining milliseconds
   * @param {integer} endTime, end time, can be undefined
   * @param {integer} coutdown, original coutdown value, can be undefined
   *
   * joke : https://www.youtube.com/watch?v=gENVB6tjq_M
   * @return {float} 0 --> 100
   */
  ProgressBarService.prototype.calculateProgressBar = function calculateProgressBar(startValue, remainingTime, endTimeAttr, coutdown) {
    var displayProgressBar = 0,
      endTimeValue,
      initialCountdown;

    remainingTime = remainingTime / 1000; //seconds


    if(endTimeAttr !== null){
      endTimeValue = moment(endTimeAttr);
      initialCountdown = endTimeValue.diff(startValue, 'seconds');
      displayProgressBar = remainingTime * 100 / initialCountdown;
    }
    else {
      displayProgressBar = remainingTime * 100 / coutdown;
    }

    displayProgressBar = 100 - displayProgressBar; //To have 0 to 100 and not 100 to 0
    displayProgressBar = Math.round(displayProgressBar * 10) / 10; //learn more why : http://stackoverflow.com/questions/588004/is-floating-point-math-broken

    if(displayProgressBar > 100){ //security
      displayProgressBar = 100;
    }

    return displayProgressBar;
  };

  return new ProgressBarService();
});
