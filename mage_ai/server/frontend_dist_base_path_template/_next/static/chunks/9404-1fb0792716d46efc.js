(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9404,2834],{98677:function(n,e,t){"use strict";function r(n,e,t){n=+n,e=+e,t=(i=arguments.length)<2?(e=n,n=0,1):i<3?1:+t;for(var r=-1,i=0|Math.max(0,Math.ceil((e-n)/t)),o=new Array(i);++r<i;)o[r]=n+r*t;return o}t.d(e,{Z:function(){return c}});var i=t(8208),o=t(8162);function u(){var n,e,t=(0,o.Z)().unknown(void 0),a=t.domain,c=t.range,f=0,l=1,s=!1,h=0,d=0,g=.5;function v(){var t=a().length,i=l<f,o=i?l:f,u=i?f:l;n=(u-o)/Math.max(1,t-h+2*d),s&&(n=Math.floor(n)),o+=(u-o-n*(t-h))*g,e=n*(1-h),s&&(o=Math.round(o),e=Math.round(e));var v=r(t).map((function(e){return o+n*e}));return c(i?v.reverse():v)}return delete t.unknown,t.domain=function(n){return arguments.length?(a(n),v()):a()},t.range=function(n){return arguments.length?([f,l]=n,f=+f,l=+l,v()):[f,l]},t.rangeRound=function(n){return[f,l]=n,f=+f,l=+l,s=!0,v()},t.bandwidth=function(){return e},t.step=function(){return n},t.round=function(n){return arguments.length?(s=!!n,v()):s},t.padding=function(n){return arguments.length?(h=Math.min(1,d=+n),v()):h},t.paddingInner=function(n){return arguments.length?(h=Math.min(1,n),v()):h},t.paddingOuter=function(n){return arguments.length?(d=+n,v()):d},t.align=function(n){return arguments.length?(g=Math.max(0,Math.min(1,n)),v()):g},t.copy=function(){return u(a(),[f,l]).round(s).paddingInner(h).paddingOuter(d).align(g)},i.o.apply(v(),arguments)}var a=(0,t(93342).Z)("domain","range","reverse","align","padding","round");function c(n){return a(u(),n)}},81354:function(n,e,t){"use strict";t.d(e,{Z:function(){return p}});var r=t(82684),i=t(63588),o=t.n(i),u=t(75823),a=t(29989),c=t(62072),f=t(53989),l=t(13004),s=t(18246),h=t(59309),d=t(65743),g=["data","className","top","left","x","y0","y1","xScale","yScale","color","keys","value","order","offset","children"];function v(){return v=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},v.apply(this,arguments)}function p(n){var e=n.data,t=n.className,i=n.top,p=n.left,y=n.x,m=n.y0,Z=void 0===m?c.l8:m,b=n.y1,x=void 0===b?c.xf:b,k=n.xScale,A=n.yScale,C=n.color,w=n.keys,O=n.value,T=n.order,_=n.offset,E=n.children,M=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,g),P=(0,u.Z)();w&&P.keys(w),O&&(0,l.Z)(P.value,O),T&&P.order((0,s.ZP)(T)),_&&P.offset((0,h.ZP)(_));var j=P(e),S=(0,f.Z)(k),N=j.map((function(n,e){var t=n.key;return{index:e,key:t,bars:n.map((function(e,r){var i=(A(Z(e))||0)-(A(x(e))||0),o=A(x(e)),u="bandwidth"in k?k(y(e.data)):Math.max((k(y(e.data))||0)-S/2);return{bar:e,key:t,index:r,height:i,width:S,x:u||0,y:o||0,color:C(n.key,r)}}))}}));return E?r.createElement(r.Fragment,null,E(N)):r.createElement(a.Z,{className:o()("visx-bar-stack",t),top:i,left:p},N.map((function(n){return n.bars.map((function(e){return r.createElement(d.Z,v({key:"bar-stack-"+n.index+"-"+e.index,x:e.x,y:e.y,height:e.height,width:e.width,fill:e.color},M))}))})))}},62072:function(n,e,t){"use strict";function r(n){return null==n?void 0:n[0]}function i(n){return null==n?void 0:n[1]}t.d(e,{l8:function(){return r},xf:function(){return i}})},53989:function(n,e,t){"use strict";function r(n){if("bandwidth"in n)return n.bandwidth();var e=n.range(),t=n.domain();return Math.abs(e[e.length-1]-e[0])/t.length}t.d(e,{Z:function(){return r}})},59309:function(n,e,t){"use strict";t.d(e,{ZP:function(){return f}});var r=t(12759),i=t(27500),o=t(82610),u=t(34812),a=t(77944),c={expand:r.Z,diverging:i.Z,none:o.Z,silhouette:u.Z,wiggle:a.Z};Object.keys(c);function f(n){return n&&c[n]||c.none}},18246:function(n,e,t){"use strict";t.d(e,{ZP:function(){return f}});var r=t(39586),i=t(25516),o=t(54164),u=t(8512),a=t(2010),c={ascending:r.Z,descending:i.Z,insideout:o.Z,none:u.Z,reverse:a.Z};Object.keys(c);function f(n){return n&&c[n]||c.none}},13946:function(n,e,t){"use strict";t.d(e,{t:function(){return r}});var r=Array.prototype.slice},27500:function(n,e,t){"use strict";function r(n,e){if((a=n.length)>0)for(var t,r,i,o,u,a,c=0,f=n[e[0]].length;c<f;++c)for(o=u=0,t=0;t<a;++t)(i=(r=n[e[t]][c])[1]-r[0])>0?(r[0]=o,r[1]=o+=i):i<0?(r[1]=u,r[0]=u+=i):(r[0]=0,r[1]=i)}t.d(e,{Z:function(){return r}})},12759:function(n,e,t){"use strict";t.d(e,{Z:function(){return i}});var r=t(82610);function i(n,e){if((i=n.length)>0){for(var t,i,o,u=0,a=n[0].length;u<a;++u){for(o=t=0;t<i;++t)o+=n[t][u][1]||0;if(o)for(t=0;t<i;++t)n[t][u][1]/=o}(0,r.Z)(n,e)}}},82610:function(n,e,t){"use strict";function r(n,e){if((i=n.length)>1)for(var t,r,i,o=1,u=n[e[0]],a=u.length;o<i;++o)for(r=u,u=n[e[o]],t=0;t<a;++t)u[t][1]+=u[t][0]=isNaN(r[t][1])?r[t][0]:r[t][1]}t.d(e,{Z:function(){return r}})},34812:function(n,e,t){"use strict";t.d(e,{Z:function(){return i}});var r=t(82610);function i(n,e){if((t=n.length)>0){for(var t,i=0,o=n[e[0]],u=o.length;i<u;++i){for(var a=0,c=0;a<t;++a)c+=n[a][i][1]||0;o[i][1]+=o[i][0]=-c/2}(0,r.Z)(n,e)}}},77944:function(n,e,t){"use strict";t.d(e,{Z:function(){return i}});var r=t(82610);function i(n,e){if((o=n.length)>0&&(i=(t=n[e[0]]).length)>0){for(var t,i,o,u=0,a=1;a<i;++a){for(var c=0,f=0,l=0;c<o;++c){for(var s=n[e[c]],h=s[a][1]||0,d=(h-(s[a-1][1]||0))/2,g=0;g<c;++g){var v=n[e[g]];d+=(v[a][1]||0)-(v[a-1][1]||0)}f+=h,l+=d*h}t[a-1][1]+=t[a-1][0]=u,f&&(u-=l/f)}t[a-1][1]+=t[a-1][0]=u,(0,r.Z)(n,e)}}},34128:function(n,e,t){"use strict";t.d(e,{Z:function(){return i}});var r=t(8512);function i(n){var e=n.map(o);return(0,r.Z)(n).sort((function(n,t){return e[n]-e[t]}))}function o(n){for(var e,t=-1,r=0,i=n.length,o=-1/0;++t<i;)(e=+n[t][1])>o&&(o=e,r=t);return r}},39586:function(n,e,t){"use strict";t.d(e,{S:function(){return o},Z:function(){return i}});var r=t(8512);function i(n){var e=n.map(o);return(0,r.Z)(n).sort((function(n,t){return e[n]-e[t]}))}function o(n){for(var e,t=0,r=-1,i=n.length;++r<i;)(e=+n[r][1])&&(t+=e);return t}},25516:function(n,e,t){"use strict";t.d(e,{Z:function(){return i}});var r=t(39586);function i(n){return(0,r.Z)(n).reverse()}},54164:function(n,e,t){"use strict";t.d(e,{Z:function(){return o}});var r=t(34128),i=t(39586);function o(n){var e,t,o=n.length,u=n.map(i.S),a=(0,r.Z)(n),c=0,f=0,l=[],s=[];for(e=0;e<o;++e)t=a[e],c<f?(c+=u[t],l.push(t)):(f+=u[t],s.push(t));return s.reverse().concat(l)}},8512:function(n,e,t){"use strict";function r(n){for(var e=n.length,t=new Array(e);--e>=0;)t[e]=e;return t}t.d(e,{Z:function(){return r}})},2010:function(n,e,t){"use strict";t.d(e,{Z:function(){return i}});var r=t(8512);function i(n){return(0,r.Z)(n).reverse()}},75823:function(n,e,t){"use strict";t.d(e,{Z:function(){return c}});var r=t(13946),i=t(90875),o=t(82610),u=t(8512);function a(n,e){return n[e]}function c(){var n=(0,i.Z)([]),e=u.Z,t=o.Z,c=a;function f(r){var i,o,u=n.apply(this,arguments),a=r.length,f=u.length,l=new Array(f);for(i=0;i<f;++i){for(var s,h=u[i],d=l[i]=new Array(a),g=0;g<a;++g)d[g]=s=[0,+c(r[g],h,g,r)],s.data=r[g];d.key=h}for(i=0,o=e(l);i<f;++i)l[o[i]].index=i;return t(l,o),l}return f.keys=function(e){return arguments.length?(n="function"===typeof e?e:(0,i.Z)(r.t.call(e)),f):n},f.value=function(n){return arguments.length?(c="function"===typeof n?n:(0,i.Z)(+n),f):c},f.order=function(n){return arguments.length?(e=null==n?u.Z:"function"===typeof n?n:(0,i.Z)(r.t.call(n)),f):e},f.offset=function(n){return arguments.length?(t=null==n?o.Z:n,f):t},f}},17717:function(n,e,t){var r=t(554);!function(){"use strict";var e={977:function(n){function e(n){if("string"!==typeof n)throw new TypeError("Path must be a string. Received "+JSON.stringify(n))}function t(n,e){for(var t,r="",i=0,o=-1,u=0,a=0;a<=n.length;++a){if(a<n.length)t=n.charCodeAt(a);else{if(47===t)break;t=47}if(47===t){if(o===a-1||1===u);else if(o!==a-1&&2===u){if(r.length<2||2!==i||46!==r.charCodeAt(r.length-1)||46!==r.charCodeAt(r.length-2))if(r.length>2){var c=r.lastIndexOf("/");if(c!==r.length-1){-1===c?(r="",i=0):i=(r=r.slice(0,c)).length-1-r.lastIndexOf("/"),o=a,u=0;continue}}else if(2===r.length||1===r.length){r="",i=0,o=a,u=0;continue}e&&(r.length>0?r+="/..":r="..",i=2)}else r.length>0?r+="/"+n.slice(o+1,a):r=n.slice(o+1,a),i=a-o-1;o=a,u=0}else 46===t&&-1!==u?++u:u=-1}return r}var i={resolve:function(){for(var n,i="",o=!1,u=arguments.length-1;u>=-1&&!o;u--){var a;u>=0?a=arguments[u]:(void 0===n&&(n=r.cwd()),a=n),e(a),0!==a.length&&(i=a+"/"+i,o=47===a.charCodeAt(0))}return i=t(i,!o),o?i.length>0?"/"+i:"/":i.length>0?i:"."},normalize:function(n){if(e(n),0===n.length)return".";var r=47===n.charCodeAt(0),i=47===n.charCodeAt(n.length-1);return 0!==(n=t(n,!r)).length||r||(n="."),n.length>0&&i&&(n+="/"),r?"/"+n:n},isAbsolute:function(n){return e(n),n.length>0&&47===n.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var n,t=0;t<arguments.length;++t){var r=arguments[t];e(r),r.length>0&&(void 0===n?n=r:n+="/"+r)}return void 0===n?".":i.normalize(n)},relative:function(n,t){if(e(n),e(t),n===t)return"";if((n=i.resolve(n))===(t=i.resolve(t)))return"";for(var r=1;r<n.length&&47===n.charCodeAt(r);++r);for(var o=n.length,u=o-r,a=1;a<t.length&&47===t.charCodeAt(a);++a);for(var c=t.length-a,f=u<c?u:c,l=-1,s=0;s<=f;++s){if(s===f){if(c>f){if(47===t.charCodeAt(a+s))return t.slice(a+s+1);if(0===s)return t.slice(a+s)}else u>f&&(47===n.charCodeAt(r+s)?l=s:0===s&&(l=0));break}var h=n.charCodeAt(r+s);if(h!==t.charCodeAt(a+s))break;47===h&&(l=s)}var d="";for(s=r+l+1;s<=o;++s)s!==o&&47!==n.charCodeAt(s)||(0===d.length?d+="..":d+="/..");return d.length>0?d+t.slice(a+l):(a+=l,47===t.charCodeAt(a)&&++a,t.slice(a))},_makeLong:function(n){return n},dirname:function(n){if(e(n),0===n.length)return".";for(var t=n.charCodeAt(0),r=47===t,i=-1,o=!0,u=n.length-1;u>=1;--u)if(47===(t=n.charCodeAt(u))){if(!o){i=u;break}}else o=!1;return-1===i?r?"/":".":r&&1===i?"//":n.slice(0,i)},basename:function(n,t){if(void 0!==t&&"string"!==typeof t)throw new TypeError('"ext" argument must be a string');e(n);var r,i=0,o=-1,u=!0;if(void 0!==t&&t.length>0&&t.length<=n.length){if(t.length===n.length&&t===n)return"";var a=t.length-1,c=-1;for(r=n.length-1;r>=0;--r){var f=n.charCodeAt(r);if(47===f){if(!u){i=r+1;break}}else-1===c&&(u=!1,c=r+1),a>=0&&(f===t.charCodeAt(a)?-1===--a&&(o=r):(a=-1,o=c))}return i===o?o=c:-1===o&&(o=n.length),n.slice(i,o)}for(r=n.length-1;r>=0;--r)if(47===n.charCodeAt(r)){if(!u){i=r+1;break}}else-1===o&&(u=!1,o=r+1);return-1===o?"":n.slice(i,o)},extname:function(n){e(n);for(var t=-1,r=0,i=-1,o=!0,u=0,a=n.length-1;a>=0;--a){var c=n.charCodeAt(a);if(47!==c)-1===i&&(o=!1,i=a+1),46===c?-1===t?t=a:1!==u&&(u=1):-1!==t&&(u=-1);else if(!o){r=a+1;break}}return-1===t||-1===i||0===u||1===u&&t===i-1&&t===r+1?"":n.slice(t,i)},format:function(n){if(null===n||"object"!==typeof n)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof n);return function(n,e){var t=e.dir||e.root,r=e.base||(e.name||"")+(e.ext||"");return t?t===e.root?t+r:t+n+r:r}("/",n)},parse:function(n){e(n);var t={root:"",dir:"",base:"",ext:"",name:""};if(0===n.length)return t;var r,i=n.charCodeAt(0),o=47===i;o?(t.root="/",r=1):r=0;for(var u=-1,a=0,c=-1,f=!0,l=n.length-1,s=0;l>=r;--l)if(47!==(i=n.charCodeAt(l)))-1===c&&(f=!1,c=l+1),46===i?-1===u?u=l:1!==s&&(s=1):-1!==u&&(s=-1);else if(!f){a=l+1;break}return-1===u||-1===c||0===s||1===s&&u===c-1&&u===a+1?-1!==c&&(t.base=t.name=0===a&&o?n.slice(1,c):n.slice(a,c)):(0===a&&o?(t.name=n.slice(1,u),t.base=n.slice(1,c)):(t.name=n.slice(a,u),t.base=n.slice(a,c)),t.ext=n.slice(u,c)),a>0?t.dir=n.slice(0,a-1):o&&(t.dir="/"),t},sep:"/",delimiter:":",win32:null,posix:null};i.posix=i,n.exports=i}},t={};function i(n){var r=t[n];if(void 0!==r)return r.exports;var o=t[n]={exports:{}},u=!0;try{e[n](o,o.exports,i),u=!1}finally{u&&delete t[n]}return o.exports}i.ab="//";var o=i(977);n.exports=o}()},59739:function(n,e,t){"use strict";var r=t(56669);function i(){}function o(){}o.resetWarningCache=i,n.exports=function(){function n(n,e,t,i,o,u){if(u!==r){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function e(){return n}n.isRequired=n;var t={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:o,resetWarningCache:i};return t.PropTypes=t,t}},47329:function(n,e,t){n.exports=t(59739)()},56669:function(n){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);