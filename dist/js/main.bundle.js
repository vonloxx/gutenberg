!function(e){function t(t){for(var o,s,l=t[0],i=t[1],d=t[2],p=0,u=[];p<l.length;p++)s=l[p],a[s]&&u.push(a[s][0]),a[s]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);for(c&&c(t);u.length;)u.shift()();return n.push.apply(n,d||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],o=!0,l=1;l<r.length;l++){var i=r[l];0!==a[i]&&(o=!1)}o&&(n.splice(t--,1),e=s(s.s=r[0]))}return e}var o={},a={0:0},n=[];function s(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=o,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(r,o,function(t){return e[t]}.bind(null,o));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var l=window.webpackJsonp=window.webpackJsonp||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var c=i;n.push([2,2]),r()}([,,function(e,t,r){"use strict";r(3);var o=r(0),a=s(r(13)),n=s(r(14));s(r(17));function s(e){return e&&e.__esModule?e:{default:e}}function l(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){return function o(a,n){try{var s=t[a](n),l=s.value}catch(e){return void r(e)}if(!s.done)return Promise.resolve(l).then(function(e){o("next",e)},function(e){o("throw",e)});e(l)}("next")})}}r(18),((e,t,r)=>{t.editors.gutenberg={attach:s=>l(function*(){(0,a.default)(o.data),yield(0,n.default)(o.blocks,o.editor),yield function(a){const n=e(a),s="editor-"+n.data("drupal-selector");e('<div id="'+s+'" class="gutenberg__editor"></div>').insertAfter(n),n.hide(),r.node={content:{raw:e(a).val()},templates:"",type:"page",status:"draft",id:1};const l={alignWide:!0,availableTemplates:[],allowedBlockTypes:!0,disableCustomColors:!1,disablePostFormats:!1,mediaLibrary:!1,titlePlaceholder:t.t("Add title"),bodyPlaceholder:t.t("Add text or type / to add content"),isRTL:!1,autosaveInterval:0,canAutosave:!1,canPublish:!1,canSave:!1};return window.customGutenberg={events:{OPEN_GENERAL_SIDEBAR:t=>{let r=t.name.replace(/edit-post\//g,"");r=r.replace(/drupal\//g,"");let o=e(".edit-post-sidebar .components-panel .tab");e(".gutenberg-sidebar").append(o),setTimeout(()=>{let t=e(".gutenberg-sidebar .tab."+r);e(".edit-post-sidebar .components-panel").append(t)},0),e(document.body).addClass("gutenberg-sidedar-open")},CLOSE_GENERAL_SIDEBAR:()=>{e(document.body).removeClass("gutenberg-sidedar-open"),e(".gutenberg-sidebar").append(e(".edit-post-sidebar .components-panel .tab"))}}},new Promise(e=>{setTimeout(()=>{o.editPost.initializeEditor(s,"page",1,l,{}),e()},0)})}(s),o.data.dispatch("core/edit-post").openGeneralSidebar("edit-post/document"),o.data.dispatch("core/nux").disableTips(),o.data.dispatch("core/editor").unregisterToken("core/image"),setTimeout(function(){e(".edit-post-header__settings").append(e(".gutenberg-header-settings")),e(".gutenberg-full-editor").addClass("ready"),e("#gutenberg-loading").addClass("hide")},0),e(document.forms[0]).on("submit",(()=>{var t=l(function*(t){e(s).val(o.data.select("core/editor").getEditedPostContent()),o.data.dispatch("core/edit-post").openGeneralSidebar("edit-post/document"),o.data.dispatch("core/editor").savePost();let r=e('[id^="edit-"]:focus');return r.length||(r=e(t.originalEvent.explicitOriginalTarget)),"edit-submit"===r.attr("id")||"edit-preview"===r.attr("id")||"edit-delete"===r.attr("id")||(t.preventDefault(),t.stopPropagation(),!1)});return function(e){return t.apply(this,arguments)}})())})(),detach(t,r,a){const n=e(t),s="editor-"+n.data("drupal-selector"),l=o.data.select("core/editor").getEditedPostContent();n.val(l),"serialize"!==a&&e("#"+s).remove()},onChange(){}}})(jQuery,Drupal,wp,drupalSettings,_)},function(e,t,r){"use strict";var o=function(e){return e&&e.__esModule?e:{default:e}}(r(4)),a=r(5);window._wpDateSettings={l10n:{locale:"pt_PT"}},window.wp={apiFetch:o.default,url:{addQueryArgs:a.addQueryArgs}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return console.log(e),function(e){for(const t in a)if(a.hasOwnProperty(t)){const r=a[t];r.regex.lastIndex=0;let o=r.regex.exec(e.path+"");if(o&&o.length>0&&(e.method&&e.method===r.method||"GET"===r.method))return r.process(o,e.data,e.body)}return new Promise((t,r)=>r({code:"api_handler_not_found",message:"API handler not found.",data:{path:e.path,status:404}}))}(e)};const o={page:{labels:{Document:Drupal.t("Node"),document:Drupal.t("Node"),posts:Drupal.t("Nodes"),extras:Drupal.t("Fields")},name:"Page",rest_base:"pages",slug:"page",supports:{author:!1,comments:!1,"custom-fields":!0,document:!0,editor:!0,"media-library":!1,"page-attributes":!1,posts:!1,revisions:!1,"template-settings":!1,thumbnail:!1,title:!1,extras:!1},viewable:!1,saveable:!1,publishable:!1,autosaveable:!1},block:{name:"Blocks",rest_base:"blocks",slug:"wp_block",description:"",supports:{title:!0,editor:!0},viewable:!1}},a={"save-page":{method:"PUT",regex:/\/wp\/v2\/page\/(\d*)/g,process:(e,t)=>(wp.node={pathType:"save-post",id:1,type:"page",title:{raw:document.title},content:{raw:t}},new Promise(e=>{e(wp.node)}))},"load-node":{method:"GET",regex:/\/wp\/v2\/pages\/(\d*)/g,process:()=>new Promise(e=>{e(wp.node)})},"load-media":{method:"GET",regex:/\/wp\/v2\/media\/(\d*)/g,process:e=>new Promise((t,r)=>{jQuery.ajax({method:"GET",url:drupalSettings.path.baseUrl+"editor/image/load/"+e[1],accepts:{json:"application/json, text/javascript, */*; q=0.01"}}).done(e=>{t(e)}).fail(()=>{r({message:"Error"})})})},"save-media":{method:"POST",regex:/\/wp\/v2\/media/g,process:(e,t,r)=>new Promise((e,t)=>{let o;for(let e of r.entries())"file"===e[0]&&(o=e[1]);const a=new FormData;a.append("files[fid]",o),a.append("fid[fids]",""),a.append("attributes[alt]","Test"),a.append("_drupal_ajax","1"),a.append("form_id",jQuery('[name="form_id"]').val()),a.append("form_build_id",jQuery('[name="form_build_id"]').val()),a.append("form_token",jQuery('[name="form_token"]').val()),jQuery.ajax({method:"POST",url:drupalSettings.path.baseUrl+"editor/image/upload/gutenberg",data:a,processData:!1,contentType:!1,accepts:{json:"application/json, text/javascript, */*; q=0.01"}}).done(t=>{e(t)}).fail(()=>{t("Error")})})},categories:{method:"GET",regex:/\/wp\/v2\/categories\?(.*)/g,process:()=>new Promise(e=>{e("ok")})},users:{method:"GET",regex:/\/wp\/v2\/users\/\?(.*)/g,process:()=>new Promise(e=>{e("ok")})},taxonomies:{method:"GET",regex:/\/wp\/v2\/taxonomies\?(.*)/g,process:()=>new Promise(e=>{e("ok")})},embed:{method:"GET",regex:/\/oembed\/1\.0\/proxy\?(.*)/g,process:e=>new Promise((t,r)=>{jQuery.ajax({method:"GET",url:"/editor/oembed?url="+encodeURIComponent(`http://open.iframe.ly/api/oembed?${e[1]}&origin=drupal`),processData:!1,accepts:{json:"application/json, text/javascript, */*; q=0.01"}}).done(e=>{t(e)}).fail(()=>{r("Error")})})},root:{method:"GET",regex:/^\/$/g,process:()=>new Promise(e=>e({theme_supports:{formats:["standard","aside","image","video","quote","link","gallery","audio"],"post-thumbnails":!0}}))},"load-type-page":{method:"GET",regex:/\/wp\/v2\/types\/page/g,process:()=>new Promise(e=>e(o.page))},"load-type-block":{method:"GET",regex:/\/wp\/v2\/types\/wp_block/g,process:()=>new Promise(e=>e(o.block))},"load-types":{method:"GET",regex:/\/wp\/v2\/types/g,process:()=>new Promise(e=>e(o))},"update-block":{method:"PUT",regex:/\/wp\/v2\/blocks\/(\d*)/g,process:(e,t)=>new Promise((e,r)=>{jQuery.ajax({method:"PUT",url:drupalSettings.path.baseUrl+"editor/reusable-blocks/"+t.id,data:JSON.stringify(t),processData:!1,contentType:!1,accepts:{json:"application/json, text/javascript, */*; q=0.01"}}).done(t=>{e(t)}).fail(e=>{r("Error")})})},"delete-block":{method:"DELETE",regex:/\/wp\/v2\/blocks\/(\d*)/g,process:e=>new Promise((t,r)=>{jQuery.ajax({method:"DELETE",url:drupalSettings.path.baseUrl+"editor/reusable-blocks/"+e[1],processData:!1,contentType:!1,accepts:{json:"application/json, text/javascript, */*; q=0.01"}}).done(e=>{t(e)}).fail(e=>{r("Error")})})},"insert-block":{method:"POST",regex:/\/wp\/v2\/blocks/g,process:(e,t,r)=>(console.log(e,t),new Promise((e,r)=>{const o=new FormData;o.append("title",t.title),o.append("content",t.content),jQuery.ajax({method:"POST",url:drupalSettings.path.baseUrl+"editor/reusable-blocks",data:o,processData:!1,contentType:!1,accepts:{json:"application/json, text/javascript, */*; q=0.01"}}).done(t=>{e(t)}).fail(()=>{r("Error")})}))},"load-block":{method:"GET",regex:/\/wp\/v2\/blocks\/(\d*)/g,process:e=>new Promise((t,r)=>{jQuery.ajax({method:"GET",url:drupalSettings.path.baseUrl+"editor/reusable-blocks/"+e[1],accepts:{json:"application/json, text/javascript, */*; q=0.01"}}).done(e=>{t(e)}).fail(()=>{r("Error")})})},"load-blocks":{method:"GET",regex:/\/wp\/v2\/blocks\?(.*)/g,process:()=>new Promise((e,t)=>{jQuery.ajax({method:"GET",url:drupalSettings.path.baseUrl+"editor/reusable-blocks",accepts:{json:"application/json, text/javascript, */*; q=0.01"}}).done(t=>{e(t)}).fail(()=>{t("Error")})})}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e};t.addQueryArgs=function(e,t){const r=(0,a.parse)(e,!0),n=o({},r.query,t);delete r.search;const{Drupal:s}=window;if("post.php"===r.path)return"?save=1";if("edit.php"===r.path&&t.post_type&&"wp_block"===t.post_type)return s.url("")+"admin/content/reusable-blocks";return(0,a.format)(o({},r,{query:n}))};var a=r(6);r(1)},,,,,,,,function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e};t.default=function(e){const{registerStore:t,dispatch:r}=e,a={blocks:{}};return t("drupal",{reducer(e=a,t){switch(t.type){case"SET_BLOCK":return o({},e,{blocks:o({},e.blocks,{[t.item]:t.block})})}return e},actions:{setBlock:(e,t)=>({type:"SET_BLOCK",item:e,block:t})},selectors:{getBlock(e,t){const{blocks:r}=e,o=r[t];return o}},resolvers:{getBlock:(e,t)=>(function(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){return function o(a,n){try{var s=t[a](n),l=s.value}catch(e){return void r(e)}if(!s.done)return Promise.resolve(l).then(function(e){o("next",e)},function(e){o("throw",e)});e(l)}("next")})}})(function*(){const e=yield fetch(`${drupalSettings.path.baseUrl}editor/blocks/load/${t}`),o=yield e.json();return r("drupal").setBlock(t,o),o})()}})}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return new Promise(r=>{const{BlockAlignmentToolbar:s,BlockControls:i}=t,d=wp.element.Fragment;jQuery.ajax(drupalSettings.path.baseUrl+"editor/blocks/load").done(t=>{const c={slug:"drupal",title:Drupal.t("Drupal Blocks")},p=[c,...o.data.select("core/blocks").getCategories()];o.data.dispatch("core/blocks").setCategories(p);for(const r in t){const o=t[r];let c=`drupalblock/${r}`;c=(c=c.replace(/_/g,"-")).replace(/:/g,"-"),e.registerBlockType(c,{title:`${o.admin_label} [${o.category}]`,icon:l[o.provider]||n.default,category:"drupal",supports:{html:!1},attributes:{blockId:{type:"string"},align:{type:"string"}},edit({attributes:e,className:t,setAttributes:o}){const{align:n}=e;return o({blockId:r}),wp.element.createElement(d,null,wp.element.createElement(i,null,wp.element.createElement(s,{value:n,onChange:e=>{o({align:e})},controls:["left","right","center","wide","full"]})),wp.element.createElement(a.default,{className:t,id:r,url:`${drupalSettings.path.baseUrl}editor/blocks/load/${r}`}))},save:()=>null})}r()})})};var o=r(0),a=s(r(15)),n=s(r(16));function s(e){return e&&e.__esModule?e:{default:e}}const l={system:n.default,user:"admin-users",views:"media-document",core:n.default}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(0);const{withSelect:a}=o.data;t.default=a((e,t)=>{const{getBlock:r}=e("drupal"),{id:o}=t;return{blockContent:r(o)}})(class extends wp.element.Component{constructor(e){super(e)}render(){return this.props.blockContent?wp.element.createElement("div",{className:this.props.className,dangerouslySetInnerHTML:{__html:this.props.blockContent.html}}):wp.element.createElement("div",{className:"loading-drupal-block"},Drupal.t("Loading"),"...")}})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=class extends wp.element.Component{constructor(e){super(e)}render(){return wp.element.createElement("svg",{width:"20",height:"20",viewBox:"0 0 222 251",className:"dashicon"},wp.element.createElement("path",{d:"M104.41,155.1c-21.825,0 -39.525,17.7 -39.525,39.525c0,21.825 17.7,39.525 39.525,39.525c21.825,0 39.525,-17.7 39.525,-39.525c0,-21.825 -17.7,-39.525 -39.525,-39.525Z"}),wp.element.createElement("path",{d:"M153.61,147.525c11.7,12.225 18.9,28.8 18.9,47.1c0,23.175 -11.55,43.575 -29.175,55.875c32.625,-10.05 59.625,-34.575 71.7,-64.275c16.725,-41.1 1.125,-72 -24.975,-100.05c0.825,3.6 1.275,7.425 1.275,11.25c-0.075,23.85 -15.975,43.875 -37.725,50.1Z"}),wp.element.createElement("path",{d:"M108.91,97.5c0,16.725 13.575,30.225 30.225,30.225c16.65,0 30.3,-13.575 30.3,-30.225c0,-16.725 -13.575,-30.225 -30.225,-30.225c-16.65,0 -30.3,13.5 -30.3,30.225Z"}),wp.element.createElement("path",{d:"M52.285,238.5c-9.975,-11.85 -15.975,-27.15 -15.975,-43.875c0,-34.875 26.175,-63.6 60,-67.575c-5.775,-8.4 -9.225,-18.6 -9.225,-29.55c0,-28.8 23.325,-52.05 52.125,-52.05c2.4,0 4.725,0.15 6.975,0.45c-17.025,-14.7 -34.05,-29.625 -47.475,-45.9c6.825,71.4 -65.025,45.45 -91.65,111.3c-17.775,44.1 -1.725,98.625 45.225,127.2Z"}))}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return wp.element.createElement(n,{name:"additional-fields",title:"Additional fields",icons:"forms",isPinnable:"false"},wp.element.createElement(a,null))};var o=r(0);const{PanelBody:a}=o.components,{PluginSidebar:n}=o.editPost},function(e,t,r){}]);