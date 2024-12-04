(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8450],{16488:function(e,n,t){"use strict";t.d(n,{IJ:function(){return v},M8:function(){return P},Uc:function(){return k},XM:function(){return j},_U:function(){return b},eI:function(){return _},gU:function(){return E},lO:function(){return C},ri:function(){return O},tL:function(){return y},vJ:function(){return g},xH:function(){return h}});var r,i=t(82394),u=t(92083),l=t.n(u),c=t(3917),o=t(30229),a=t(4383),s=t(42122),f=t(86735);function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var b=function(e){return!!e&&!Object.values(o.U5).includes(e)};function v(e){return null==e?void 0:e.reduce((function(e,n){var t=n.block_uuid,r=n.completed_at,u=n.started_at,c=n.status,o=null;u&&r&&(o=l()(r).valueOf()-l()(u).valueOf());return p(p({},e),{},(0,i.Z)({},t,{runtime:o,status:c}))}),{})}var m,O=function(e){var n=[{description:function(){return"This pipeline will run continuously on an interval or just once."},label:function(){return"Schedule"},uuid:o.Xm.TIME},{description:function(){return"Run this pipeline when you make an API call."},label:function(){return"API"},uuid:o.Xm.API}];return e?n.slice(0,1):n};function h(e){var n=(0,s.gR)(e,[o.gm.INTERVAL,o.gm.TYPE]),t=e[o.gm.INTERVAL];t&&(n["schedule_interval[]"]=encodeURIComponent(t));var r=e[o.gm.TYPE];return r&&(n["schedule_type[]"]=r),n}function _(e){return e?new Date(l()(e).valueOf()):null}function k(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return n?(0,c.XG)(e,n,t):function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if("string"!=typeof e)return e;var t=e.split("+")[0];return l()(_(t)).format(n||c.Nx)}(e,t)}!function(e){e.DAY="day",e.HOUR="hour",e.MINUTE="minute",e.SECOND="second"}(m||(m={}));var y=(r={},(0,i.Z)(r,m.DAY,86400),(0,i.Z)(r,m.HOUR,3600),(0,i.Z)(r,m.MINUTE,60),(0,i.Z)(r,m.SECOND,1),r);function E(e){var n=m.SECOND,t=e;return e%86400==0?(t/=86400,n=m.DAY):e%3600==0?(t/=3600,n=m.HOUR):e%60==0&&(t/=60,n=m.MINUTE),{time:t,unit:n}}function g(e,n){return e*y[n]}function j(e,n,t){var r,i=l()(e);return i.set("hour",+(null==n?void 0:n.hour)||0),i.set("minute",+(null==n?void 0:n.minute)||0),i.set("second",0),r=i.format(c.TD),null!=t&&t.includeSeconds&&(r=r.concat(":00")),null!=t&&t.localTimezone&&(r=i.format(c.lE),null!=t&&t.convertToUtc&&(r=(0,c.d$)(r,{includeSeconds:null==t?void 0:t.includeSeconds,utcFormat:!0}))),r}function P(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t="",r=(0,a.XF)();return n?t="".concat(r,"/api/pipeline_schedules/").concat(null==e?void 0:e.id,"/api_trigger"):(t="".concat(r,"/api/pipeline_schedules/").concat(null==e?void 0:e.id,"/pipeline_runs"),null!=e&&e.token&&(t="".concat(t,"/").concat(e.token))),t}function Z(e,n,t){return e.match(/[*,-/]/)?{additionalOffset:0,cronValue:e}:function(e,n,t){var r=t.indexOf(e),i=0;if(n<0)for(var u=0;u>n;u--)0===r?(r=t.length-1,i-=1):r-=1;else if(n>0)for(var l=0;l<n;l++)r===t.length-1?(r=0,i+=1):r+=1;var c="number"==typeof t[r]?t[r]:e;return{additionalOffset:i,cronValue:String(c)}}(+e,n,t)}var w=(0,f.m5)(60),I=(0,f.m5)(24),N=(0,c.Cs)();function C(e,n){if(!e)return e;var t=l()().local().format("Z"),r=t.split(":"),i="-"===t[0],u=3===r[0].length?Number(r[0].slice(1)):Number(r[0]),c=Number(r[1]);(i&&!n||!i&&n)&&(u=-u,c=-c);var o=e.split(" "),a=o[0],s=o[1],f=o[2],d=Z(a,c,w),p=Z(s,u+d.additionalOffset,I);if(o[0]=d.cronValue,o[1]=p.cronValue,0!==(null==p?void 0:p.additionalOffset)){var b=Z(f,p.additionalOffset,N);o[2]=b.cronValue}return o.join(" ")}},83641:function(e,n,t){"use strict";t.d(n,{I7:function(){return r},IB:function(){return o},VV:function(){return u},_7:function(){return l},rn:function(){return c}});var r,i=t(41143),u="datetime",l="code",c=i.V;!function(e){e.SECOND="second",e.MINUTE="minute",e.HOUR="hour",e.DAY="day",e.WEEK="week",e.MONTH="month",e.YEAR="year",e.CUSTOM="custom"}(r||(r={}));var o=[r.MINUTE,r.HOUR,r.DAY,r.WEEK,r.MONTH,r.YEAR]},4303:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return K}});var r=t(77837),i=t(75582),u=t(38860),l=t.n(u),c=t(82684),o=t(83455),a=t(34376),s=t(82394),f=t(12691),d=t.n(f),p=t(83641),b=t(71180),v=t(55485),m=t(48670),O=t(75499),h=t(30160),_=t(35686),k=t(50724),y=t(89515),E=t(38276),g=t(81655),j=t(72191),P=t(72473),Z=t(72619),w=t(23780),I=t(28598);var N=function(e){var n=e.fetchItems,t=e.mutationFn,r=e.path,u=e.pipelineUUID,l=(0,a.useRouter)(),s=(0,c.useRef)({}),f=(0,c.useState)(null),d=f[0],p=f[1],v=(0,c.useState)(0),m=v[0],O=v[1],h=(0,c.useState)(0),_=h[0],N=h[1],C=(0,w.VI)(null,{},[],{uuid:"".concat(r,"/").concat(u,"/delete/error")}),D=(0,i.Z)(C,1)[0],x=(0,o.Db)((function(e){return t(e)()}),{onSuccess:function(e){return(0,Z.wD)(e,{callback:function(){null==n||n(),u&&l.push("/pipelines/[pipeline]/".concat(r),"/pipelines/".concat(u,"/").concat(r))},onErrorCallback:function(e,n){return D({errors:n,response:e})}})}}),T=(0,i.Z)(x,1)[0];return{deleteButton:function(e,n,t){return s.current[e]=(0,c.createRef)(),(0,I.jsxs)(E.Z,{mr:1,children:[(0,I.jsx)(b.ZP,{default:!0,iconOnly:!0,noBackground:!0,onClick:function(){var n,t,r,i;p(e),O((null===(n=s.current[e])||void 0===n||null===(t=n.current)||void 0===t?void 0:t.offsetTop)||0),N((null===(r=s.current[e])||void 0===r||null===(i=r.current)||void 0===i?void 0:i.offsetLeft)||0)},ref:s.current[e],title:"Delete",children:(0,I.jsx)(P.Trash,{default:!0,size:j.bL})}),(0,I.jsx)(k.Z,{onClickOutside:function(){return p(null)},open:d===e,children:(0,I.jsx)(y.Z,{danger:!0,left:(_||0)-g.nH,onCancel:function(){return p(null)},onClick:function(){p(null),T(e)},title:t,top:(m||0)-(n<=1?g.oz:g.OK),width:g.Xx})})]})}}},C=t(44265),D=t(70515),x=t(16488),T=t(50178),U=t(70320),R=t(3917);function S(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function A(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?S(Object(t),!0).forEach((function(n){(0,s.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):S(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var V={default:!0,monospace:!0};var L=function(e){var n=e.fetchBackfills,t=e.models,r=e.onClickRow,i=e.pipeline,u=e.selectedRow,l=(0,a.useRouter)(),o=(0,T.Ct)(null==l?void 0:l.basePath),s=(0,U.qB)(),f=null==i?void 0:i.uuid,k=s?g.O$:{},y=N({fetchItems:n,mutationFn:_.ZP.backfills.useDelete,path:"backfills",pipelineUUID:f}).deleteButton,E=[{uuid:"Status"},{uuid:"Name"},A(A({},k),{},{uuid:"Backfill"}),{uuid:"Ready"},{uuid:"Running"},{uuid:"Cancelled"},{uuid:"Completed"},{uuid:"Failed"},{uuid:"Total runs"},A(A({},k),{},{uuid:"Started at"}),A(A({},k),{},{uuid:"Completed at"}),{uuid:"Interval"},{uuid:"Interval units"},{uuid:"Type"}];return o||E.push({label:function(){return""},uuid:"edit_delete_backfill"}),(0,I.jsx)(O.Z,{columnFlex:[null,1,1,null,null,null,null,null,null,1,1,null,null,null,null],columns:E,isSelectedRow:function(e){return t[e].id===(null==u?void 0:u.id)},onClickRow:function(e){return null==r?void 0:r(t[e])},rows:t.map((function(e,n){var t=e.block_uuid,r=e.completed_at,i=e.end_datetime,u=e.id,l=e.interval_type,a=e.interval_units,O=e.name,_=e.run_status_counts,k=void 0===_?{}:_,E=e.start_datetime,j=e.started_at,Z=e.status,w=e.total_run_count,N=[(0,c.createElement)(h.ZP,A(A({},(0,g.NC)(Z)),{},{key:"status_".concat(n)}),Z||"inactive"),(0,I.jsx)(d(),{as:"/pipelines/".concat(f,"/backfills/").concat(u),href:"/pipelines/[pipeline]/backfills/[...slug]",passHref:!0,children:(0,I.jsx)(m.Z,{bold:!0,sameColorAsText:!0,children:O})},"name_".concat(n)),(0,c.createElement)(h.ZP,A(A({},V),{},{key:"backfill_".concat(n),small:!0}),E&&i&&(0,I.jsxs)(I.Fragment,{children:[(0,x.Uc)(E,s)," - ",(0,x.Uc)(i,s)]}),!(E&&i)&&(0,I.jsx)(I.Fragment,{children:"—"})),(0,c.createElement)(h.ZP,A(A({},V),{},{key:"ready_".concat(n)}),k[C.VO.INITIAL]||0),(0,c.createElement)(h.ZP,A(A({},V),{},{info:k[C.VO.RUNNING]>0,key:"running_".concat(n)}),k[C.VO.RUNNING]||0),(0,c.createElement)(h.ZP,A(A({},V),{},{key:"cancelled_".concat(n),warning:k[C.VO.CANCELLED]>0}),k[C.VO.CANCELLED]||0),(0,c.createElement)(h.ZP,A(A({},V),{},{key:"completed_".concat(n),success:k[C.VO.COMPLETED]>0}),k[C.VO.COMPLETED]||0),(0,c.createElement)(h.ZP,A(A({},V),{},{danger:k[C.VO.FAILED]>0,key:"failed_".concat(n)}),k[C.VO.FAILED]||0),(0,c.createElement)(h.ZP,A(A({},V),{},{bold:!0,key:"total_runs_".concat(n)}),w||0),(0,c.createElement)(h.ZP,A(A({},V),{},{key:"started_at_".concat(n),small:!0,title:j?(0,R._6)(j):null}),j?(0,x.Uc)(j,s):(0,I.jsx)(I.Fragment,{children:"—"})),(0,c.createElement)(h.ZP,A(A({},V),{},{key:"completed_at_".concat(n),small:!0,title:r?(0,R._6)(r):null}),r?(0,x.Uc)(r,s):(0,I.jsx)(I.Fragment,{children:"—"})),(0,c.createElement)(h.ZP,A(A({},V),{},{key:"interval_".concat(n)}),l||(0,I.jsx)(I.Fragment,{children:"—"})),(0,c.createElement)(h.ZP,A(A({},V),{},{key:"interval_units_".concat(n)}),a||(0,I.jsx)(I.Fragment,{children:"—"})),(0,c.createElement)(h.ZP,A(A({},V),{},{key:"type_".concat(n)}),t?p._7:p.VV)];return o||N.push((0,I.jsxs)(v.ZP,{children:[(0,I.jsx)(b.ZP,{default:!0,disabled:!!j,iconOnly:!0,linkProps:{as:"/pipelines/".concat(f,"/backfills/").concat(u,"/edit"),href:"/pipelines/[pipeline]/backfills/[...slug]"},noBackground:!0,title:"Edit",children:(0,I.jsx)(P.Edit,{default:!0,size:2*D.iI})},"".concat(n,"_edit_button")),y(u,n,'Are you sure you want to delete the backfill "'.concat(O,'?"'))]},"edit_delete_backfill_".concat(n))),N})),uuid:"pipeline-runs"})},M=t(68562),F=t(75457),B=t(93808),H=t(28795),Y=t(69419),X=t(81728);function z(e){var n=e.pipeline,t=(0,a.useRouter)(),r=n.uuid,u=_.ZP.backfills.list({_limit:20,_offset:0,include_run_count:!0,pipeline_uuid:r},{refreshInterval:6e4}),l=u.data,s=u.mutate,f=(0,c.useMemo)((function(){return(null==l?void 0:l.backfills)||[]}),[l]),d=(0,Y.iV)(),p=(0,c.useState)(null),b=p[0],v=p[1],m=(0,c.useState)(null),O=m[0],k=m[1];(0,c.useEffect)((function(){null!=d&&d.backfill_id?v(null==f?void 0:f.find((function(e){return e.id===Number(d.backfill_id)}))):b&&v(null)}),[f,d,b]);var y=(0,c.useMemo)((function(){var e="/pipelines/".concat(r,"/backfills"),n=[{label:function(){return"Backfills"},linkProps:b?{as:e,href:"/pipelines/[pipeline]/backfills"}:null}];return b&&n.push({label:function(){return b.name}}),n}),[r,b]),g=(0,o.Db)(_.ZP.backfills.pipelines.useCreate(r),{onSuccess:function(e){return(0,Z.wD)(e,{callback:function(e){var n=e.backfill.id;t.push("/pipelines/[pipeline]/backfills/[...slug]","/pipelines/".concat(r,"/backfills/").concat(n,"/edit"))},onErrorCallback:function(e,n){return k({errors:n,response:e})}})}}),j=(0,i.Z)(g,2),w=j[0],N=j[1].isLoading;return(0,I.jsxs)(F.Z,{breadcrumbs:y,errors:O,pageName:H.M.BACKFILLS,pipeline:n,setErrors:k,title:function(e){var n=e.name;return"".concat(n," backfills")},uuid:"".concat(H.M.BACKFILLS,"_").concat(r),children:[(0,I.jsx)(E.Z,{p:D.cd,children:(0,I.jsx)(M.ZP,{beforeElement:(0,I.jsx)(P.Add,{size:2.5*D.iI}),blackBorder:!0,inline:!0,loading:N,noHoverUnderline:!0,onClick:function(){return w({backfill:{name:(0,X.Y6)()}})},sameColorAsText:!0,uuid:"PipelineDetailPage/Backfills/add_new_backfill",children:"Create new backfill"})}),f&&0===f.length&&(0,I.jsx)(E.Z,{p:D.cd,children:(0,I.jsx)(h.ZP,{bold:!0,default:!0,monospace:!0,muted:!0,children:"No backfills available"})}),(null==f?void 0:f.length)>=1&&(0,I.jsx)(L,{fetchBackfills:s,models:f,pipeline:n,selectedRow:b})]})}z.getInitialProps=function(){var e=(0,r.Z)(l().mark((function e(n){var t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.query.pipeline,e.abrupt("return",{pipeline:{uuid:t}});case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();var K=(0,B.Z)(z)},37459:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pipelines/[pipeline]/backfills",function(){return t(4303)}])},80022:function(e,n,t){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}t.d(n,{Z:function(){return r}})},15544:function(e,n,t){"use strict";function r(e){return r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(e)}t.d(n,{Z:function(){return r}})},13692:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(61049);function i(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&(0,r.Z)(e,n)}},93189:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var r=t(12539),i=t(80022);function u(e,n){if(n&&("object"===r(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return(0,i.Z)(e)}}},function(e){e.O(0,[449,3782,9774,2888,179],(function(){return n=37459,e(e.s=n);var n}));var n=e.O();_N_E=n}]);