(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8662],{19395:function(e,n,t){"use strict";t.d(n,{IJ:function(){return d},M8:function(){return h},Vx:function(){return f},eI:function(){return p},gU:function(){return b},tL:function(){return v},vJ:function(){return O}});var r,i,u=t(82394),o=t(92083),l=t.n(o),c=t(28799);function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){(0,u.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e){return null===e||void 0===e?void 0:e.reduce((function(e,n){var t=n.block_uuid,r=n.completed_at,i=n.started_at,o=n.status,c=null;i&&r&&(c=l()(r).valueOf()-l()(i).valueOf());return a(a({},e),{},(0,u.Z)({},t,{runtime:c,status:o}))}),{})}function p(e){if(!e)return null;var n=new Date(l()(e).valueOf()),t=Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds());return new Date(t)}function f(e){return"string"!==typeof e?e:p(e.split("+")[0]).toISOString().split(".")[0]}!function(e){e.DAY="day",e.HOUR="hour",e.MINUTE="minute",e.SECOND="second"}(i||(i={}));var v=(r={},(0,u.Z)(r,i.DAY,86400),(0,u.Z)(r,i.HOUR,3600),(0,u.Z)(r,i.MINUTE,60),(0,u.Z)(r,i.SECOND,1),r);function b(e){var n=i.SECOND,t=e;return e%86400===0?(t/=86400,n=i.DAY):e%3600===0?(t/=3600,n=i.HOUR):e%60===0&&(t/=60,n=i.MINUTE),{time:t,unit:n}}function O(e,n){return e*v[n]}function h(e){var n,t="";return t="".concat(window.origin,"/api/pipeline_schedules/").concat(null===e||void 0===e?void 0:e.id,"/pipeline_runs"),null!==e&&void 0!==e&&e.token&&(t="".concat(t,"/").concat(e.token)),(n=window.location.port)&&(t=t.replace(n,c.QT)),t}},47409:function(e,n,t){"use strict";t.d(n,{Az:function(){return c},BF:function(){return l},Do:function(){return a},IK:function(){return o},VO:function(){return u},sZ:function(){return s}});var r,i=t(82394),u=t(66050).V,o=[u.FAILED,u.COMPLETED,u.RUNNING,u.CANCELLED,u.INITIAL],l=[u.INITIAL,u.RUNNING],c=[u.CANCELLED,u.COMPLETED,u.FAILED],s="__mage_variables",a=(r={},(0,i.Z)(r,u.CANCELLED,"Cancelled"),(0,i.Z)(r,u.COMPLETED,"Done"),(0,i.Z)(r,u.FAILED,"Failed"),(0,i.Z)(r,u.INITIAL,"Ready"),(0,i.Z)(r,u.RUNNING,"Running"),r)},23588:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return X}});var r=t(77837),i=t(75582),u=t(82394),o=t(38860),l=t.n(o),c=t(82684),s=t(83455),a=t(34376),d=t(27125),p=t(60328),f=t(34744),v=t(93461),b=t(67971),O=t(87372),h=t(51099),g=t(60547),j=t(47409),m=t(98781),y=t(41788),_=t(86673),Z=t(54283),P=t(19711),x=t(82531),D=t(26304),E=t(32316),w=t(62976),k=t(48952),N=t(82635),I=t(49125),T=t(64155),R=t(56681),C=t(19395),S=t(90211),L=t(28598),M=["blockRuns","columns","dataType","height","heightOffset","loadingData","pipeline","renderColumnHeader","rows","selectedRun","selectedTab","setSelectedTab","textData"];function A(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function U(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?A(Object(t),!0).forEach((function(n){(0,u.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):A(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var F={uuid:"Dependency tree"},B={uuid:"Block output"},H=[B,F];var G=t(59920),J=t(96510),V=t(66653),Y=t(59e3);function q(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Q(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?q(Object(t),!0).forEach((function(n){(0,u.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):q(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function z(e){var n,t=e.pipeline,r=e.pipelineRun,u=(0,a.useRouter)(),o=(0,Y.iV)(),l=null!==o&&void 0!==o&&o.page?o.page:0,y=(0,c.useState)(null),A=y[0],q=y[1],z=(0,c.useState)(H[0]),X=z[0],K=z[1],W=(0,c.useState)(null),$=W[0],ee=W[1],ne=t.uuid,te=x.ZP.pipelines.detail(ne,{includes_content:!1,includes_outputs:!1},{revalidateOnFocus:!1}).data,re=(0,c.useMemo)((function(){return Q(Q({},null===te||void 0===te?void 0:te.pipeline),{},{uuid:ne})}),[te,ne]),ie=x.ZP.pipeline_runs.detail(r.id,{_format:"with_basic_details"},{refreshInterval:3e3,revalidateOnFocus:!0}).data,ue=(0,c.useMemo)((function(){return(null===ie||void 0===ie?void 0:ie.pipeline_run)||{}}),[ie]),oe=ue.execution_date,le=ue.id,ce=ue.status,se={_limit:h.Q,_offset:l*h.Q,pipeline_run_id:le},ae=x.ZP.block_runs.list(se,{refreshInterval:5e3}),de=ae.data,pe=ae.mutate,fe=(0,c.useMemo)((function(){return(null===de||void 0===de?void 0:de.block_runs)||[]}),[de]),ve=(0,s.Db)(x.ZP.pipeline_runs.useUpdate(le),{onSuccess:function(e){return(0,J.wD)(e,{callback:function(){q(null),null===pe||void 0===pe||pe()},onErrorCallback:function(e,n){return ee({errors:n,response:e})}})}}),be=(0,i.Z)(ve,2),Oe=be[0],he=be[1].isLoading,ge=x.ZP.outputs.block_runs.list(null===A||void 0===A?void 0:A.id),je=ge.data,me=ge.loading,ye=(null===je||void 0===je||null===(n=je.outputs)||void 0===n?void 0:n[0])||{},_e=ye.sample_data,Ze=ye.text_data,Pe=ye.type;(0,c.useEffect)((function(){A||(null===X||void 0===X?void 0:X.uuid)!==B.uuid||K(F)}),[A,null===X||void 0===X?void 0:X.uuid]);var xe=((null===_e||void 0===_e?void 0:_e.columns)||[]).slice(0,40),De=(null===_e||void 0===_e?void 0:_e.rows)||[],Ee=(0,c.useMemo)((function(){return(0,L.jsx)(d.Z,{blockRuns:fe,onClickRow:function(e){q((function(n){var t=fe[e],r=(null===n||void 0===n?void 0:n.id)!==t.id?t:null;return r&&K((function(e){return e!==B?B:e})),r}))},pipeline:re,selectedRun:A,setErrors:ee})}),[fe,re,A]),we=(null===re||void 0===re?void 0:re.type)!==m.qL.STREAMING&&ce&&ce!==j.VO.COMPLETED,ke=((null===re||void 0===re?void 0:re.type)===m.qL.PYTHON||(null===re||void 0===re?void 0:re.type)===m.qL.INTEGRATION)&&A&&j.Az.includes(ce),Ne=(0,c.useMemo)((function(){var e;return(null===de||void 0===de||null===(e=de.metadata)||void 0===e?void 0:e.count)||[]}),[de]),Ie=(0,c.useMemo)((function(){return(0,L.jsx)(_.Z,{p:2,children:(0,L.jsx)(h.ZP,{maxPages:h.Et,onUpdate:function(e){var n=Number(e),t=Q(Q({},o),{},{page:n>=0?n:0});q(null),u.push("/pipelines/[pipeline]/runs/[run]","/pipelines/".concat(ne,"/runs/").concat(le,"?").concat((0,Y.uM)(t)))},page:Number(l),totalPages:Math.ceil(Ne/h.Q)})})}),[l,le,ne,o,u,Ne]);return(0,L.jsxs)(g.Z,{breadcrumbs:[{label:function(){return"Runs"},linkProps:{as:"/pipelines/".concat(ne,"/runs"),href:"/pipelines/[pipeline]/runs"}},{label:function(){return oe}}],buildSidekick:function(e){return function(e){var n=e.blockRuns,t=e.columns,r=e.dataType,i=e.height,u=e.heightOffset,o=e.loadingData,l=e.pipeline,c=e.renderColumnHeader,s=e.rows,a=e.selectedRun,d=e.selectedTab,p=e.setSelectedTab,f=e.textData,v=U({},(0,D.Z)(e,M));v.blockStatus=(0,C.IJ)(n);var O=(0,L.jsx)(_.Z,{ml:2,children:(0,L.jsx)(P.ZP,{children:"This block run has no output."})}),h=s&&s.length>0?(0,L.jsx)(w.Z,{columnHeaderHeight:c?T.Eh:0,columns:t,height:i-u-90,noBorderBottom:!0,noBorderLeft:!0,noBorderRight:!0,renderColumnHeader:c,rows:s}):O,g=(0,S.Pb)(f)?JSON.stringify(JSON.parse(f),null,2):f,j=f?(0,L.jsx)(_.Z,{ml:2,children:(0,L.jsx)(P.ZP,{monospace:!0,children:(0,L.jsx)("pre",{children:g})})}):O,m=d&&p;return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)("div",{style:{position:"fixed",top:"50px"},children:m&&(0,L.jsx)(_.Z,{py:I.cd,children:(0,L.jsx)(E.Z,{onClickTab:p,selectedTabUUID:null===d||void 0===d?void 0:d.uuid,tabs:a?H:[F]})})}),(0,L.jsxs)("div",{style:{position:"relative",top:"75px"},children:[(!a||F.uuid===(null===d||void 0===d?void 0:d.uuid))&&(0,L.jsx)(k.Z,U(U({},v),{},{height:i,heightOffset:(u||0)+(m?R.u$:0),pipeline:l})),a&&B.uuid===(null===d||void 0===d?void 0:d.uuid)&&(0,L.jsxs)(L.Fragment,{children:[o&&(0,L.jsx)(_.Z,{mt:2,children:(0,L.jsx)(b.ZP,{alignItems:"center",fullWidth:!0,justifyContent:"center",children:(0,L.jsx)(Z.Z,{color:"white",large:!0})})}),!o&&r===N.Gi.TABLE&&h,!o&&r!==N.Gi.TABLE&&j]})]})]})}(Q(Q({},e),{},{blockRuns:fe,columns:xe,dataType:Pe,loadingData:me,rows:De,selectedRun:A,selectedTab:X,setSelectedTab:K,showDynamicBlocks:!0,textData:Ze}))},errors:$,pageName:G.M.RUNS,pipeline:re,setErrors:ee,subheader:(we||ke)&&(0,L.jsxs)(b.ZP,{alignItems:"center",children:[j.BF.includes(ce)&&(0,L.jsxs)(v.Z,{children:[(0,L.jsx)(P.ZP,{bold:!0,default:!0,large:!0,children:"Pipeline is running"}),(0,L.jsx)(_.Z,{mr:1}),(0,L.jsx)(Z.Z,{inverted:!0}),(0,L.jsx)(_.Z,{mr:2})]}),we&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(p.Z,{danger:!0,loading:he,onClick:function(e){(0,V.j)(e),Oe({pipeline_run:{pipeline_run_action:"retry_blocks"}})},outline:!0,children:"Retry incomplete blocks"}),(0,L.jsx)(_.Z,{mr:2})]}),ke&&(0,L.jsxs)(p.Z,{loading:he,onClick:function(e){(0,V.j)(e),Oe({pipeline_run:{from_block_uuid:A.block_uuid,pipeline_run_action:"retry_blocks"}})},outline:!0,primary:!0,children:["Retry from selected block (",A.block_uuid,")"]})]}),title:function(e){var n=e.name;return"".concat(n," runs")},uuid:"".concat(G.M.RUNS,"_").concat(ne,"_").concat(le),children:[(0,L.jsx)(_.Z,{mt:I.cd,px:I.cd,children:(0,L.jsx)(O.Z,{level:5,children:"Block runs"})}),(0,L.jsx)(f.Z,{light:!0,mt:I.cd,short:!0}),Ee,Ie]})}z.getInitialProps=function(){var e=(0,r.Z)(l().mark((function e(n){var t,r,i;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.query,r=t.pipeline,i=t.run,e.abrupt("return",{pipeline:{uuid:r},pipelineRun:{id:i}});case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();var X=(0,y.Z)(z)},39525:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pipelines/[pipeline]/runs/[run]",function(){return t(23588)}])}},function(e){e.O(0,[844,9902,426,1774,8792,4259,5896,7849,5872,1424,1005,7815,6422,547,8952,4822,437,1805,9774,2888,179],(function(){return n=39525,e(e.s=n);var n}));var n=e.O();_N_E=n}]);