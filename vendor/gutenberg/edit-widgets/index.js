this.wp=this.wp||{},this.wp.editWidgets=function(e){var t={};function n(r){if(t[r])return t[r].exports;var c=t[r]={i:r,l:!1,exports:{}};return e[r].call(c.exports,c,c.exports,n),c.l=!0,c.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(r,c,function(t){return e[t]}.bind(null,c));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=389)}({0:function(e,t){!function(){e.exports=this.wp.element}()},1:function(e,t){!function(){e.exports=this.wp.i18n}()},10:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return r}))},101:function(e,t){!function(){e.exports=this.wp.notices}()},11:function(e,t){!function(){e.exports=this.wp.blocks}()},14:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return c}))},15:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},16:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(36);var c=n(28),o=n(37);function i(e,t){return Object(r.a)(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,c=!1,o=void 0;try{for(var i,a=e[Symbol.iterator]();!(r=(i=a.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){c=!0,o=e}finally{try{r||null==a.return||a.return()}finally{if(c)throw o}}return n}}(e,t)||Object(c.a)(e,t)||Object(o.a)()}},17:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,"a",(function(){return c}))},18:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(34),c=n(8);function o(e,t){return!t||"object"!==Object(r.a)(t)&&"function"!=typeof t?Object(c.a)(e):t}},2:function(e,t){!function(){e.exports=this.lodash}()},20:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(40);function c(e,t){if(null==e)return{};var n,c,o=Object(r.a)(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(c=0;c<i.length;c++)n=i[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}},24:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))},28:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(24);function c(e,t){if(e){if("string"==typeof e)return Object(r.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(e,t):void 0}}},3:function(e,t){!function(){e.exports=this.wp.components}()},32:function(e,t){!function(){e.exports=this.wp.hooks}()},34:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"a",(function(){return r}))},36:function(e,t,n){"use strict";function r(e){if(Array.isArray(e))return e}n.d(t,"a",(function(){return r}))},37:function(e,t,n){"use strict";function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}n.d(t,"a",(function(){return r}))},389:function(e,t,n){"use strict";n.r(t),n.d(t,"initialize",(function(){return Q})),n.d(t,"customizerInitialize",(function(){return X}));var r=n(0),c=(n(101),n(69)),o=n(32),i=n(64);Object(o.addFilter)("editor.MediaUpload","core/edit-widgets/replace-media-upload",(function(){return i.MediaUpload}));var a=n(16),u=n(3),l=n(5),s=n(9),d=n(1),b=Object(u.createSlotFill)("EditWidgetsInserter"),f=b.Fill,p=b.Slot,O=f;O.Slot=function(){return Object(r.createElement)(p,{bubblesVirtually:!0})};var m=O,j=n(2),y=n(4);var g=function(){var e=Object(y.useSelect)((function(e){var t=e("core"),n=t.hasEditsForEntityRecord,r=t.isSavingEntityRecord,c=(0,t.getEntityRecords)("root","widgetArea"),o=Object(j.map)(c,(function(e){return e.id}));return{editedWidgetAreaIds:Object(j.filter)(o,(function(e){return n("root","widgetArea",e)})),isSaving:Object(j.some)(o,(function(e){return r("root","widgetArea",e)}))}}),[]),t=e.editedWidgetAreaIds,n=e.isSaving,c=Object(y.useDispatch)("core").saveEditedEntityRecord,o=Object(r.useCallback)((function(){Object(j.forEach)(t,(function(e){c("root","widgetArea",e)}))}),[t]);return Object(r.createElement)(u.Button,{isPrimary:!0,isBusy:n,"aria-disabled":n,onClick:n?void 0:o,disabled:0===t.length},Object(d.__)("Update"))};var w=function(){return Object(r.createElement)("div",{className:"edit-widgets-header"},Object(r.createElement)(u.NavigableMenu,null,Object(r.createElement)(m.Slot,null)),Object(r.createElement)("h1",{className:"edit-widgets-header__title"},Object(d.__)("Block Areas")," ",Object(d.__)("(experimental)")),Object(r.createElement)("div",{className:"edit-widgets-header__actions"},Object(r.createElement)(g,null)))},v=Object(u.createSlotFill)("EditWidgetsBlockSidebar"),E=v.Fill,h=v.Slot;function S(){return Object(r.createElement)("div",{className:"edit-widgets-sidebar"},Object(r.createElement)(u.Panel,{header:Object(d.__)("Block Areas")},Object(r.createElement)(h,{bubblesVirtually:!0})))}S.Inspector=E;var k=S,_=n(6),P=n(20),A=n(11),B=n(15),x=n(14),R=n(18),I=n(10),N=n(17);function M(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var z=function(e){Object(N.a)(r,e);var t,n=(t=r,function(){var e,n=Object(I.a)(t);if(M()){var r=Object(I.a)(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return Object(R.a)(this,e)});function r(){return Object(B.a)(this,r),n.apply(this,arguments)}return Object(x.a)(r,[{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.hasSelectedBlock,r=t.onBlockSelected,c=t.isSelectedArea,o=t.clearSelectedBlock;n&&!e.hasSelectedBlock&&r(),!c&&e.isSelectedArea&&o()}},{key:"render",value:function(){return null}}]),r}(r.Component),F=Object(s.compose)([Object(y.withSelect)((function(e){return{hasSelectedBlock:(0,e("core/block-editor").hasSelectedBlock)()}})),Object(y.withDispatch)((function(e){return{clearSelectedBlock:e("core/block-editor").clearSelectedBlock}}))])(z);function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){Object(_.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var T={isPrimary:!0};var U=function(e){var t=e.id,n=e.blockEditorSettings,c=e.initialOpen,o=e.isSelectedArea,a=e.onBlockSelected,s=Object(y.useSelect)((function(e){var n=e("core"),r=n.canUser,c=(0,n.getEditedEntityRecord)("root","widgetArea",t),o=Object(j.get)(c,["content"],"");return{blocks:c&&c.blocks,rawContent:o.raw?o.raw:o,widgetAreaName:c&&c.name,hasUploadPermissions:Object(j.defaultTo)(r("create","media"),!0)}}),[t]),d=s.blocks,b=s.widgetAreaName,f=s.hasUploadPermissions,p=s.rawContent,O=Object(y.useDispatch)("core").editEntityRecord,g=Object(r.useCallback)((function(e){O("root","widgetArea",t,{blocks:e})}),[O,t]),w=Object(r.useCallback)((function(e){O("root","widgetArea",t,{blocks:e,content:Object(A.serialize)(e)})}),[O,t]),v=Object(r.useMemo)((function(){return function(e,t){return t?C({},e,{mediaUpload:function(t){var n=t.onError,r=Object(P.a)(t,["onError"]);Object(i.uploadMedia)(C({wpAllowedMimeTypes:e.allowedMimeTypes,onError:function(e){var t=e.message;return n(t)}},r))}}):e}(n,f)}),[n,f]);return Object(r.useEffect)((function(){d||g(Object(A.parse)(p))}),[d,g,p]),Object(r.createElement)(u.Panel,{className:"edit-widgets-widget-area"},Object(r.createElement)(u.PanelBody,{title:b,initialOpen:c},Object(r.createElement)("div",{onFocus:function(e){e.stopPropagation(),e.preventDefault()}},Object(r.createElement)(l.BlockEditorProvider,{value:d,onInput:w,onChange:g,settings:v},o&&Object(r.createElement)(r.Fragment,null,Object(r.createElement)(m,null,Object(r.createElement)(l.Inserter,{toggleProps:T})),Object(r.createElement)(l.BlockEditorKeyboardShortcuts,null)),Object(r.createElement)(F,{isSelectedArea:o,onBlockSelected:a}),Object(r.createElement)(k.Inspector,null,Object(r.createElement)(l.BlockInspector,{showNoBlockSelectedMessage:!1})),Object(r.createElement)("div",{className:"editor-styles-wrapper"},Object(r.createElement)(l.WritingFlow,null,Object(r.createElement)(l.ObserveTyping,null,Object(r.createElement)(l.BlockList,{className:"edit-widgets-main-block-list",renderAppender:l.ButtonBlockerAppender}))))))))},W=[];var L=Object(s.compose)([Object(y.withSelect)((function(e){return{areas:(0,e("core").getEntityRecords)("root","widgetArea")||W}}))])((function(e){var t=e.areas,n=e.blockEditorSettings,c=e.selectedArea,o=e.setSelectedArea;return t.map((function(e,t){var i=e.id;return Object(r.createElement)(U,{isSelectedArea:t===c,onBlockSelected:function(){return o(t)},blockEditorSettings:n,key:i,id:i,initialOpen:0===t})}))}));var H=function(){var e=Object(y.useSelect)((function(e){return{notices:e("core/notices").getNotices()}}),[]).notices,t=Object(j.filter)(e,{type:"snackbar"}),n=Object(y.useDispatch)("core/notices").removeNotice;return Object(r.createElement)(u.SnackbarList,{notices:t,className:"edit-widgets-notices__snackbar",onRemove:n})};var V=function(e){var t=e.blockEditorSettings,n=Object(r.useState)(null),c=Object(a.a)(n,2),o=c[0],i=c[1],d=Object(s.useViewportMatch)("medium","<");return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(l.BlockEditorKeyboardShortcuts.Register,null),Object(r.createElement)(u.SlotFillProvider,null,Object(r.createElement)(u.DropZoneProvider,null,Object(r.createElement)(u.FocusReturnProvider,null,Object(r.createElement)(l.__experimentalEditorSkeleton,{header:Object(r.createElement)(w,null),sidebar:!d&&Object(r.createElement)(k,null),content:Object(r.createElement)(r.Fragment,null,Object(r.createElement)(H,null),Object(r.createElement)(u.Popover.Slot,{name:"block-toolbar"}),Object(r.createElement)("div",{className:"edit-widgets-layout__content",tabIndex:"-1",onFocus:function(){i(null)}},Object(r.createElement)(L,{selectedArea:o,setSelectedArea:i,blockEditorSettings:t})))}),Object(r.createElement)(u.Popover.Slot,null)))))};var q=function(e){var t=e.settings;return Object(r.createElement)(V,{blockEditorSettings:t})},J=function(){var e=window.wp.data.select("core"),t=e.getEntityRecords,n=e.getEditedEntityRecord;return t("root","widgetArea").reduce((function(e,t){var r=t.id;return e[r]=n("root","widgetArea",r).blocks,e}),{})},K=Object(j.throttle)((function(e,t){var n=document.querySelector("#customize-preview > iframe");if(n&&n.contentDocument){var r=n.contentDocument.querySelector('[data-customize-partial-placement-context*=\'"sidebar_id":"'.concat(e,"\"']"));r&&(r.innerHTML=Object(A.serialize)(t),r.parentElement.innerHTML=r.outerHTML)}}),1e3),Z=Object(j.throttle)((function(e){var t=document.getElementById("_customize-input-gutenberg_widget_blocks");t&&(t.value=JSON.stringify(Object.keys(e).reduce((function(t,n){return t[n]=Object(A.serialize)(e[n]),t}),{})),t.dispatchEvent(new window.Event("change")))}),1e3);if(window.wp&&window.wp.customize&&window.wp.data){var $=!1;window.wp.customize.bind("ready",(function(){return window.wp.customize.previewer.bind("ready",(function(){if(!$){var e,t,n,r;$=!0;try{e=JSON.parse(document.getElementById("_customize-input-gutenberg_widget_blocks").value),e=Object.keys(e).reduce((function(t,n){return t[n]=Object(A.parse)(e[n]),t}),{})}catch(t){e={}}(t=function(){return window.wp.data.select("core").hasFinishedResolution("getEntityRecords",["root","widgetArea"])},n=!0,r=function(){return window.wp.data.select("core").getEntityRecords("root","widgetArea")},new Promise((function(e){if(r(),t()!==n)var c=window.wp.data.subscribe((function(){t()===n&&(c(),e())}));else e()}))).then((function(){Object.keys(e).forEach((function(t){window.wp.data.dispatch("core").editEntityRecord("root","widgetArea",t,{content:Object(A.serialize)(e[t]),blocks:e[t]})})),e=J(),window.wp.data.subscribe((function(){for(var t=J(),n=!1,r=0,c=Object.keys(t);r<c.length;r++){var o=c[r];e[o]!==t[o]&&(K(o,t[o]),n=!0)}n&&Z(t),e=t}))}))}}))}))}var G=Object(u.navigateRegions)((function(e){var t=e.settings,n=Object(r.useState)(null),c=Object(a.a)(n,2),o=c[0],i=c[1];return Object(r.createElement)(u.SlotFillProvider,null,Object(r.createElement)("div",{className:"edit-widgets-customizer-edit-widgets-initializer__content",role:"region","aria-label":Object(d.__)("Widgets screen content"),tabIndex:"-1"},Object(r.createElement)(L,{selectedArea:o,setSelectedArea:i,blockEditorSettings:t})),Object(r.createElement)(u.Popover.Slot,null))}));function Q(e,t){Object(c.registerCoreBlocks)(),Object(c.__experimentalRegisterExperimentalCoreBlocks)(t),Object(r.render)(Object(r.createElement)(q,{settings:t}),document.getElementById(e))}function X(e,t){Object(c.registerCoreBlocks)(),Object(c.__experimentalRegisterExperimentalCoreBlocks)(t),Object(r.render)(Object(r.createElement)(G,{settings:t}),document.getElementById(e))}},4:function(e,t){!function(){e.exports=this.wp.data}()},40:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}n.d(t,"a",(function(){return r}))},5:function(e,t){!function(){e.exports=this.wp.blockEditor}()},6:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},64:function(e,t){!function(){e.exports=this.wp.mediaUtils}()},69:function(e,t){!function(){e.exports=this.wp.blockLibrary}()},8:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return r}))},9:function(e,t){!function(){e.exports=this.wp.compose}()}});