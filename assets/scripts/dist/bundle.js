!function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return e[i].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="/assets/scripts/dist/",t(0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.Choices=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=n(2),a=n(12),u=i(a),l=n(13),c=n(14),d=t.Choices=function(){function e(t){r(this,e);var n=document.createElement("fakeel"),i=t||{},o=(0,s.createStore)(u.default),a={element:document.querySelector("[data-choice]"),disabled:!1,addItems:!0,removeItems:!0,editItems:!1,maxItems:!1,delimiter:",",allowDuplicates:!0,regexFilter:!1,debug:!1,placeholder:!1,prependValue:!1,appendValue:!1,callbackOnInit:function(){},callbackOnRender:function(){},callbackOnRemoveItem:function(){},callbackOnAddItem:function(){}};this.options=this.extend(a,i||{}),this.store=o,this.initialised=!1,this.supports="querySelector"in document&&"addEventListener"in document&&"classList"in n,this.element=this.options.element,this.valueArray=""!==this.element.value?this.cleanInputValue(this.element.value):[],this.valueCount=this.valueArray.length,this.onClick=this.onClick.bind(this),this.onKeyDown=this.onKeyDown.bind(this),this.onChange=this.onChange.bind(this),this.onFocus=this.onFocus.bind(this),this.onBlur=this.onChange.bind(this),this.init()}return o(e,[{key:"cleanInputValue",value:function(e){return e.replace(/\s/g,"").split(this.options.delimiter)}},{key:"extend",value:function(){for(var e={},t=arguments.length,n=function(t){for(var n in t)e[n]=t[n]},i=0;t>i;i++){var r=arguments[i];(0,c.isType)("Object",r)?n(r):console.error("Custom options must be an object")}return e}},{key:"isOpen",value:function(){}},{key:"isDisabled",value:function(){}},{key:"isEmpty",value:function(){return 0===this.valueCount.length}},{key:"clearInput",value:function(){this.input.value&&(this.input.value="")}},{key:"onKeyUp",value:function(e){}},{key:"onKeyDown",value:function(e){var t=this,n=e.ctrlKey||e.metaKey,i=8,r=13,o=65;if(n&&e.keyCode===o&&this.list&&this.list.children){var s=function(){t.options.removeItems&&!t.input.value&&t.selectAll(t.list.children)};s()}if(e.keyCode===r&&e.target.value&&!function(){var e=t.input.value,n=function(){var n=!0;if(t.options.maxItems&&t.options.maxItems<=t.list.children.length&&(n=!1),t.options.allowDuplicates===!1&&t.element.value&&t.valueArray.indexOf(e)>-1&&(n=!1),n&&"text"===t.element.type){var i=!0;t.options.regexFilter&&(i=t.regexFilter(e)),i&&(t.addItem(t.list,e),t.updateInputValue(e),t.clearInput(t.element),t.unselectAll(t.list.children))}};n()}(),e.keyCode===i&&!e.target.value){var a=function(){if(t.options.removeItems){var e=t.list.querySelectorAll(".choices__item"),n=t.list.querySelectorAll(".is-selected"),i=e[e.length-1];i&&i.classList.add("is-selected"),t.options.editItems&&i&&n.length<=1?(t.input.value=i.innerHTML,t.removeItem(i)):t.removeAll(e)}};a(),e.preventDefault()}}},{key:"onFocus",value:function(e){}},{key:"onClick",value:function(e){}},{key:"onChange",value:function(e){}},{key:"addEventListeners",value:function(e){e.addEventListener("click",this.onClick),e.addEventListener("keyup",this.onKeyUp),e.addEventListener("keydown",this.onKeyDown),e.addEventListener("change",this.onChange),e.addEventListener("focus",this.onFocus),e.addEventListener("blur",this.onBlur)}},{key:"removeEventListeners",value:function(e){e.removeEventListener("click",this.onClick),e.removeEventListener("keyup",this.onKeyUp),e.removeEventListener("keydown",this.onKeyDown),e.removeEventListener("change",this.onChange),e.removeEventListener("focus",this.onFocus),e.removeEventListener("blur",this.onBlur)}},{key:"setValue",value:function(){}},{key:"getValue",value:function(){}},{key:"getValues",value:function(){}},{key:"regexFilter",value:function(e){var t=new RegExp(this.options.regexFilter,"i"),n=t.test(e);return n}},{key:"getPlaceholder",value:function(){}},{key:"selectAll",value:function(e){for(var t=0;t<e.length;t++){var n=e[t];n.classList.contains("is-selected")||n.classList.add("is-selected")}}},{key:"unselectAll",value:function(e){for(var t=0;t<e.length;t++){var n=e[t];n.classList.contains("is-selected")&&n.classList.remove("is-selected")}}},{key:"updateInputValue",value:function(e){this.options.debug&&console.debug("Update input value"),this.valueArray.push(e),this.element.value=this.valueArray.join(this.options.delimiter)}},{key:"removeInputValue",value:function(e){this.options.debug&&console.debug("Remove input value");var t=this.valueArray.indexOf(e);this.valueArray.splice(t,1),this.element.value=this.valueArray.join(this.options.delimiter)}},{key:"addItem",value:function(e,t){this.options.debug&&console.debug("Add item");var n=t;this.options.prependValue&&(n=this.options.prependValue+n.toString()),this.options.appendValue&&(n+=this.options.appendValue.toString());var i=this.store.getState().length+1,r=document.createElement("li");r.classList.add("choices__item"),r.textContent=n,r.id=i,e.appendChild(r),this.options.callbackOnAddItem&&((0,c.isType)("Function",this.options.callbackOnAddItem)?this.options.callbackOnAddItem(r,t):console.error("callbackOnAddItem: Callback is not a function")),this.store.dispatch((0,l.addItemToStore)(n,r,i)),console.log(this.store.getState())}},{key:"removeItem",value:function(e){if(!e)return void console.error("removeItem: No item was passed to be removed");var t=e.id,n=e.innerHTML;e.parentNode.removeChild(e),this.options.callbackOnRemoveItem&&((0,c.isType)("Function",this.options.callbackOnRemoveItem)?this.options.callbackOnRemoveItem(n):console.error("callbackOnRemoveItem: Callback is not a function")),this.store.dispatch((0,l.removeItemFromStore)(t)),console.log(this.store.getState())}},{key:"removeAll",value:function(e){for(var t=0;t<e.length;t++){var n=e[t];n.classList.contains("is-selected")&&(this.removeItem(n),this.removeInputValue(n.textContent))}}},{key:"init",value:function(){this.supports||console.error("init: Your browser doesn'nt support shit"),this.initialised=!0,this.render(this.element)}},{key:"renderTextInput",value:function(){var e=this,t=document.createElement("div");t.className="choices choices--active";var n=document.createElement("div");n.className="choices__inner",this.element.classList.add("choices__input","choices__input--hidden"),this.element.tabIndex="-1",this.element.setAttribute("style","display:none;"),this.element.setAttribute("aria-hidden","true"),(0,c.wrap)(this.element,n),(0,c.wrap)(n,t);var i=document.createElement("ul");i.className="choices__list choices__list--items";var r=document.createElement("input");r.type="text",r.className="choices__input choices__input--cloned",r.placeholder&&(r.placeholder=this.element.placeholder),this.options.addItems||(r.disabled=!0),n.appendChild(i),n.appendChild(r),t.appendChild(n),this.containerOuter=t,this.containerInner=n,this.input=r,this.list=i,""!==this.element.value&&this.valueArray.forEach(function(t){e.addItem(e.list,t)}),this.addEventListeners(this.input)}},{key:"renderSelectInput",value:function(){var e=document.createElement("div");e.className="choices choices--active";var t=document.createElement("div");t.className="choices__inner",this.element.classList.add("choices__input","choices__input--hidden"),this.element.tabIndex="-1",this.element.setAttribute("style","display:none;"),this.element.setAttribute("aria-hidden","true"),(0,c.wrap)(this.element,t),(0,c.wrap)(t,e);var n=document.createElement("ul");n.className="choices__list choices__list--options";var i=document.createElement("input");i.type="text",i.className="choices__input choices__input--cloned",t.appendChild(i),t.appendChild(n),e.appendChild(t),this.containerOuter=e,this.containerInner=t,this.input=i,this.list=null,this.options=n;var r=this.element.children;if(r)for(var o=0;o<r.length;o++){var s=r[o];if("OPTGROUP"===s.tagName){this.addItem(this.options,s.label);for(var a=0;a<s.children.length;a++){var u=s.children[a];this.addItem(this.options,u.innerHTML)}}else"OPTION"===s.tagName&&this.addItem(this.options,s.innerHTML)}this.addEventListeners(this.input)}},{key:"renderMultipleSelectInput",value:function(){}},{key:"render",value:function(){switch(this.options.debug&&console.debug("Render"),this.element.type){case"text":this.renderTextInput();break;case"select-one":this.renderSelectInput();break;case"select-multiple":this.renderMultipleSelectInput();break;default:rthis.renderTextInput()}}},{key:"destroy",value:function(){this.options=null,this.element=null,this.initialised=null,this.removeEventListeners(this.input)}}]),e}();!function(){var e=document.getElementById(1),t=document.getElementById(2),n=document.getElementById(3),i=document.getElementById(4),r=document.getElementById(5);new d({element:e,delimiter:" ",maxItems:5}),new d({element:t,allowDuplicates:!1,editItems:!0}),new d({element:n,allowDuplicates:!1,editItems:!0,regexFilter:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/}),new d({element:i,addItems:!1}),new d({element:r,prependValue:"item-",appendValue:"-"+Date.now()})}()},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0,t.compose=t.applyMiddleware=t.bindActionCreators=t.combineReducers=t.createStore=void 0;var r=n(3),o=i(r),s=n(7),a=i(s),u=n(9),l=i(u),c=n(10),d=i(c),f=n(11),h=i(f),p=n(8);i(p);t.createStore=o.default,t.combineReducers=a.default,t.bindActionCreators=l.default,t.applyMiddleware=d.default,t.compose=h.default},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function r(e,t,n){function i(){p===h&&(p=h.slice())}function o(){return f}function u(e){if("function"!=typeof e)throw new Error("Expected listener to be a function.");var t=!0;return i(),p.push(e),function(){if(t){t=!1,i();var n=p.indexOf(e);p.splice(n,1)}}}function l(e){if(!(0,s.default)(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if("undefined"==typeof e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(v)throw new Error("Reducers may not dispatch actions.");try{v=!0,f=d(f,e)}finally{v=!1}for(var t=h=p,n=0;n<t.length;n++)t[n]();return e}function c(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");d=e,l({type:a.INIT})}if("function"==typeof t&&"undefined"==typeof n&&(n=t,t=void 0),"undefined"!=typeof n){if("function"!=typeof n)throw new Error("Expected the enhancer to be a function.");return n(r)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var d=e,f=t,h=[],p=h,v=!1;return l({type:a.INIT}),{dispatch:l,subscribe:u,getState:o,replaceReducer:c}}t.__esModule=!0,t.ActionTypes=void 0,t.default=r;var o=n(4),s=i(o),a=t.ActionTypes={INIT:"@@redux/INIT"}},function(e,t,n){function i(e){if(!o(e)||c.call(e)!=s||r(e))return!1;var t=d(e);if(null===t)return!0;var n=t.constructor;return"function"==typeof n&&n instanceof n&&u.call(n)==l}var r=n(5),o=n(6),s="[object Object]",a=Object.prototype,u=Function.prototype.toString,l=u.call(Object),c=a.toString,d=Object.getPrototypeOf;e.exports=i},function(e,t){function n(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(n){}return t}e.exports=n},function(e,t){function n(e){return!!e&&"object"==typeof e}e.exports=n},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){var n=t&&t.type,i=n&&'"'+n.toString()+'"'||"an action";return'Reducer "'+e+'" returned undefined handling '+i+". To ignore an action, you must explicitly return the previous state."}function o(e){Object.keys(e).forEach(function(t){var n=e[t],i=n(void 0,{type:a.ActionTypes.INIT});if("undefined"==typeof i)throw new Error('Reducer "'+t+'" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');var r="@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".");if("undefined"==typeof n(void 0,{type:r}))throw new Error('Reducer "'+t+'" returned undefined when probed with a random type. '+("Don't try to handle "+a.ActionTypes.INIT+' or other actions in "redux/*" ')+"namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")})}function s(e){for(var t=Object.keys(e),n={},i=0;i<t.length;i++){var s=t[i];"function"==typeof e[s]&&(n[s]=e[s])}var a,u=Object.keys(n);try{o(n)}catch(l){a=l}return function(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=arguments[1];if(a)throw a;for(var i=!1,o={},s=0;s<u.length;s++){var l=u[s],c=n[l],d=e[l],f=c(d,t);if("undefined"==typeof f){var h=r(l,t);throw new Error(h)}o[l]=f,i=i||f!==d}return i?o:e}}t.__esModule=!0,t.default=s;var a=n(3),u=n(4),l=(i(u),n(8));i(l)},function(e,t){"use strict";function n(e){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(e);try{throw new Error(e)}catch(t){}}t.__esModule=!0,t.default=n},function(e,t){"use strict";function n(e,t){return function(){return t(e.apply(void 0,arguments))}}function i(e,t){if("function"==typeof e)return n(e,t);if("object"!=typeof e||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var i=Object.keys(e),r={},o=0;o<i.length;o++){var s=i[o],a=e[s];"function"==typeof a&&(r[s]=n(a,t))}return r}t.__esModule=!0,t.default=i},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function r(){for(var e=arguments.length,t=Array(e),n=0;e>n;n++)t[n]=arguments[n];return function(e){return function(n,i,r){var s=e(n,i,r),u=s.dispatch,l=[],c={getState:s.getState,dispatch:function(e){return u(e)}};return l=t.map(function(e){return e(c)}),u=a.default.apply(void 0,l)(s.dispatch),o({},s,{dispatch:u})}}}var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};t.__esModule=!0,t.default=r;var s=n(11),a=i(s)},function(e,t){"use strict";function n(){for(var e=arguments.length,t=Array(e),n=0;e>n;n++)t[n]=arguments[n];return function(){if(0===t.length)return arguments.length<=0?void 0:arguments[0];var e=t[t.length-1],n=t.slice(0,-1);return n.reduceRight(function(e,t){return t(e)},e.apply(void 0,arguments))}}t.__esModule=!0,t.default=n},function(e,t){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){var e=arguments.length<=0||void 0===arguments[0]?[]:arguments[0],t=arguments[1];switch(t.type){case"ADD_ITEM":return[].concat(n(e),[{id:parseInt(t.id),value:t.value,element:t.element,active:!0}]);case"REMOVE_ITEM":return e.filter(function(e){return e.id!==parseInt(t.id)?e:void 0});default:return e}};t.default=i},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.addItemToStore=function(e,t,n){return{type:"ADD_ITEM",value:e,element:t,id:n}},t.removeItemFromStore=function(e){return{type:"REMOVE_ITEM",id:e}},t.updateItemInStore=function(e){return{type:"UPDATE_ITEM",value:e}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=(t.hasClass=function(e,t){return new RegExp(" "+t+" ").test(" "+e.className+" ")},t.capitalise=function(e){return e.replace(/\w\S*/g,function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()})},t.isType=function(e,t){var n=Object.prototype.toString.call(t).slice(8,-1);return void 0!==t&&null!==t&&n===e},t.whichTransitionEvent=function(){var e,t=document.createElement("fakeelement"),n={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(e in n)if(void 0!==t.style[e])return n[e]},t.whichAnimationEvent=function(){var e,t=document.createElement("fakeelement"),n={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"animationend",WebkitAnimation:"webkitAnimationEnd"};for(e in n)if(void 0!==t.style[e])return n[e]});t.getParentsUntil=function(e,t,n){for(var i=[];e&&e!==document;e=e.parentNode){if(t){var r=t.charAt(0);if("."===r&&e.classList.contains(t.substr(1)))break;if("#"===r&&e.id===t.substr(1))break;if("["===r&&e.hasAttribute(t.substr(1,t.length-1)))break;if(e.tagName.toLowerCase()===t)break}if(n){var o=n.charAt(0);"."===o&&e.classList.contains(n.substr(1))&&i.push(e),"#"===o&&e.id===n.substr(1)&&i.push(e),"["===o&&e.hasAttribute(n.substr(1,n.length-1))&&i.push(e),e.tagName.toLowerCase()===n&&i.push(e)}else i.push(e)}return 0===i.length?null:i},t.wrap=function(e,t){return t=t||document.createElement("div"),e.nextSibling?e.parentNode.insertBefore(t,e.nextSibling):e.parentNode.appendChild(t),t.appendChild(e)},t.getSiblings=function(e){for(var t=[],n=e.parentNode.firstChild;n;n=n.nextSibling)1===n.nodeType&&n!==e&&t.push(n);return t},t.findAncestor=function(e,t){for(;(e=e.parentElement)&&!e.classList.contains(t););return e},t.debounce=function(e,t,n){var i;return function(){var r=this,o=arguments,s=function(){i=null,n||e.apply(r,o)},a=n&&!i;clearTimeout(i),i=setTimeout(s,t),a&&e.apply(r,o)}},t.getElemDistance=function(e){var t=0;if(e.offsetParent)do t+=e.offsetTop,e=e.offsetParent;while(e);return t>=0?t:0},t.getElementOffset=function(e,t){var n=t;return n>1&&(n=1),n>0&&(n=0),Math.max(e.offsetHeight*n)},t.getScrollPosition=function(e){return"bottom"===e?Math.max((window.scrollY||window.pageYOffset)+(window.innerHeight||document.documentElement.clientHeight)):window.scrollY||window.pageYOffset},t.isInView=function(e,t,n){return this.getScrollPosition(t)>this.getElemDistance(e)+this.getElementOffset(e,n)},t.stripHTML=function(e){var t=document.createElement("DIV");return t.innerHTML=e,t.textContent||t.innerText||""},t.addAnimation=function(e,t){var i=n(),r=function o(){e.classList.remove(t),e.removeEventListener(i,o,!1)};e.classList.add(t),e.addEventListener(i,r,!1)},t.getRandomNumber=function(e,t){return Math.floor(Math.random()*(t-e)+e)}}]);