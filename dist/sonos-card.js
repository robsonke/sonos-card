function t(t,e,i,s){var o,r=arguments.length,n=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(r<3?o(n):r>3?o(e,i,n):o(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}const e=window,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),o=new WeakMap;class r{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(e,t))}return t}toString(){return this.cssText}}const n=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,s))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var a;const l=window,c=l.trustedTypes,h=c?c.emptyScript:"",d=l.reactiveElementPolyfillSupport,p={toAttribute(t,e){switch(e){case Boolean:t=t?h:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},u=(t,e)=>e!==t&&(e==e||t==t),v={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:u};class m extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;null!==(e=this.h)&&void 0!==e||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))})),t}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||v}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(n(t))}else void 0!==t&&e.push(n(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{i?t.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((i=>{const s=document.createElement("style"),o=e.litNonce;void 0!==o&&s.setAttribute("nonce",o),s.textContent=i.cssText,t.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=v){var s;const o=this.constructor._$Ep(t,i);if(void 0!==o&&!0===i.reflect){const r=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:p).toAttribute(e,i.type);this._$El=t,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,o=s._$Ev.get(t);if(void 0!==o&&this._$El!==o){const t=s.getPropertyOptions(o),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:p;this._$El=o,this[o]=r.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||u)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var f;m.finalized=!0,m.elementProperties=new Map,m.elementStyles=[],m.shadowRootOptions={mode:"open"},null==d||d({ReactiveElement:m}),(null!==(a=l.reactiveElementVersions)&&void 0!==a?a:l.reactiveElementVersions=[]).push("1.4.1");const _=window,g=_.trustedTypes,b=g?g.createPolicy("lit-html",{createHTML:t=>t}):void 0,y=`lit$${(Math.random()+"").slice(9)}$`,$="?"+y,w=`<${$}>`,x=document,A=(t="")=>x.createComment(t),k=t=>null===t||"object"!=typeof t&&"function"!=typeof t,S=Array.isArray,C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,E=/-->/g,P=/>/g,z=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),U=/'/g,O=/"/g,N=/^(?:script|style|textarea|title)$/i,T=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),H=Symbol.for("lit-noChange"),R=Symbol.for("lit-nothing"),j=new WeakMap,M=x.createTreeWalker(x,129,null,!1),D=(t,e)=>{const i=t.length-1,s=[];let o,r=2===e?"<svg>":"",n=C;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,h=0;for(;h<i.length&&(n.lastIndex=h,l=n.exec(i),null!==l);)h=n.lastIndex,n===C?"!--"===l[1]?n=E:void 0!==l[1]?n=P:void 0!==l[2]?(N.test(l[2])&&(o=RegExp("</"+l[2],"g")),n=z):void 0!==l[3]&&(n=z):n===z?">"===l[0]?(n=null!=o?o:C,c=-1):void 0===l[1]?c=-2:(c=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?z:'"'===l[3]?O:U):n===O||n===U?n=z:n===E||n===P?n=C:(n=z,o=void 0);const d=n===z&&t[e+1].startsWith("/>")?" ":"";r+=n===C?i+w:c>=0?(s.push(a),i.slice(0,c)+"$lit$"+i.slice(c)+y+d):i+y+(-2===c?(s.push(void 0),e):d)}const a=r+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==b?b.createHTML(a):a,s]};class I{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,r=0;const n=t.length-1,a=this.parts,[l,c]=D(t,e);if(this.el=I.createElement(l,i),M.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=M.nextNode())&&a.length<n;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(y)){const i=c[r++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(y),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?Z:"?"===e[1]?W:"@"===e[1]?Y:q})}else a.push({type:6,index:o})}for(const e of t)s.removeAttribute(e)}if(N.test(s.tagName)){const t=s.textContent.split(y),e=t.length-1;if(e>0){s.textContent=g?g.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],A()),M.nextNode(),a.push({type:2,index:++o});s.append(t[e],A())}}}else if(8===s.nodeType)if(s.data===$)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(y,t+1));)a.push({type:7,index:o}),t+=y.length-1}o++}}static createElement(t,e){const i=x.createElement("template");return i.innerHTML=t,i}}function L(t,e,i=t,s){var o,r,n,a;if(e===H)return e;let l=void 0!==s?null===(o=i._$Cl)||void 0===o?void 0:o[s]:i._$Cu;const c=k(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,s)),void 0!==s?(null!==(n=(a=i)._$Cl)&&void 0!==n?n:a._$Cl=[])[s]=l:i._$Cu=l),void 0!==l&&(e=L(t,l._$AS(t,e.values),l,s)),e}class B{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:s}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:x).importNode(i,!0);M.currentNode=o;let r=M.nextNode(),n=0,a=0,l=s[0];for(;void 0!==l;){if(n===l.index){let e;2===l.type?e=new V(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new J(r,this,t)),this.v.push(e),l=s[++a]}n!==(null==l?void 0:l.index)&&(r=M.nextNode(),n++)}return o}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class V{constructor(t,e,i,s){var o;this.type=2,this._$AH=R,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$C_=null===(o=null==s?void 0:s.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$C_}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=L(this,t,e),k(t)?t===R||null==t||""===t?(this._$AH!==R&&this._$AR(),this._$AH=R):t!==this._$AH&&t!==H&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):(t=>S(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.O(t):this.$(t)}S(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}$(t){this._$AH!==R&&k(this._$AH)?this._$AA.nextSibling.data=t:this.k(x.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:s}=t,o="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=I.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.m(i);else{const t=new B(o,this),e=t.p(this.options);t.m(i),this.k(e),this._$AH=t}}_$AC(t){let e=j.get(t.strings);return void 0===e&&j.set(t.strings,e=new I(t)),e}O(t){S(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new V(this.S(A()),this.S(A()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$C_=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class q{constructor(t,e,i,s,o){this.type=1,this._$AH=R,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=R}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let r=!1;if(void 0===o)t=L(this,t,e,0),r=!k(t)||t!==this._$AH&&t!==H,r&&(this._$AH=t);else{const s=t;let n,a;for(t=o[0],n=0;n<o.length-1;n++)a=L(this,s[i+n],e,n),a===H&&(a=this._$AH[n]),r||(r=!k(a)||a!==this._$AH[n]),a===R?t=R:t!==R&&(t+=(null!=a?a:"")+o[n+1]),this._$AH[n]=a}r&&!s&&this.P(t)}P(t){t===R?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class Z extends q{constructor(){super(...arguments),this.type=3}P(t){this.element[this.name]=t===R?void 0:t}}const K=g?g.emptyScript:"";class W extends q{constructor(){super(...arguments),this.type=4}P(t){t&&t!==R?this.element.setAttribute(this.name,K):this.element.removeAttribute(this.name)}}class Y extends q{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=L(this,t,e,0))&&void 0!==i?i:R)===H)return;const s=this._$AH,o=t===R&&s!==R||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==R&&(s===R||o);o&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class J{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){L(this,t)}}const X=_.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var G,Q;null==X||X(I,V),(null!==(f=_.litHtmlVersions)&&void 0!==f?f:_.litHtmlVersions=[]).push("2.3.1");class F extends m{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var s,o;const r=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let n=r._$litPart$;if(void 0===n){const t=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;r._$litPart$=n=new V(e.insertBefore(A(),t),t,void 0,null!=i?i:{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return H}}F.finalized=!0,F._$litElement$=!0,null===(G=globalThis.litElementHydrateSupport)||void 0===G||G.call(globalThis,{LitElement:F});const tt=globalThis.litElementPolyfillSupport;null==tt||tt({LitElement:F}),(null!==(Q=globalThis.litElementVersions)&&void 0!==Q?Q:globalThis.litElementVersions=[]).push("3.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const et=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function it(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):et(t,e)
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}var st;null===(st=window.HTMLSlotElement)||void 0===st||st.prototype.assignedElements;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ot=1,rt=2,nt=t=>(...e)=>({_$litDirective$:t,values:e});class at{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lt=nt(class extends at{constructor(t){var e;if(super(t),t.type!==ot||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,i)=>{const s=t[i];return null==s?e:e+`${i=i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.vt){this.vt=new Set;for(const t in e)this.vt.add(t);return this.render(e)}this.vt.forEach((t=>{null==e[t]&&(this.vt.delete(t),t.includes("-")?i.removeProperty(t):i[t]="")}));for(const t in e){const s=e[t];null!=s&&(this.vt.add(t),t.includes("-")?i.setProperty(t,s):i[t]=s)}return H}}),ct=(t,e)=>{var i,s;const o=t._$AN;if(void 0===o)return!1;for(const t of o)null===(s=(i=t)._$AO)||void 0===s||s.call(i,e,!1),ct(t,e);return!0},ht=t=>{let e,i;do{if(void 0===(e=t._$AM))break;i=e._$AN,i.delete(t),t=e}while(0===(null==i?void 0:i.size))},dt=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(void 0===i)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),vt(e)}};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pt(t){void 0!==this._$AN?(ht(this),this._$AM=t,dt(this)):this._$AM=t}function ut(t,e=!1,i=0){const s=this._$AH,o=this._$AN;if(void 0!==o&&0!==o.size)if(e)if(Array.isArray(s))for(let t=i;t<s.length;t++)ct(s[t],!1),ht(s[t]);else null!=s&&(ct(s,!1),ht(s));else ct(this,t)}const vt=t=>{var e,i,s,o;t.type==rt&&(null!==(e=(s=t)._$AP)&&void 0!==e||(s._$AP=ut),null!==(i=(o=t)._$AQ)&&void 0!==i||(o._$AQ=pt))};class mt extends at{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),dt(this),this.isConnected=t._$AU}_$AO(t,e=!0){var i,s;t!==this.isConnected&&(this.isConnected=t,t?null===(i=this.reconnected)||void 0===i||i.call(this):null===(s=this.disconnected)||void 0===s||s.call(this)),e&&(ct(this,t),ht(this))}setValue(t){if((t=>void 0===t.strings)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ft{constructor(t){this.Y=t}disconnect(){this.Y=void 0}reconnect(t){this.Y=t}deref(){return this.Y}}class _t{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){var t;null!==(t=this.Z)&&void 0!==t||(this.Z=new Promise((t=>this.q=t)))}resume(){var t;null===(t=this.q)||void 0===t||t.call(this),this.Z=this.q=void 0}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gt=t=>!(t=>null===t||"object"!=typeof t&&"function"!=typeof t)(t)&&"function"==typeof t.then;const bt=nt(class extends mt{constructor(){super(...arguments),this._$Cwt=1073741823,this._$Cyt=[],this._$CK=new ft(this),this._$CX=new _t}render(...t){var e;return null!==(e=t.find((t=>!gt(t))))&&void 0!==e?e:H}update(t,e){const i=this._$Cyt;let s=i.length;this._$Cyt=e;const o=this._$CK,r=this._$CX;this.isConnected||this.disconnected();for(let t=0;t<e.length&&!(t>this._$Cwt);t++){const n=e[t];if(!gt(n))return this._$Cwt=t,n;t<s&&n===i[t]||(this._$Cwt=1073741823,s=0,Promise.resolve(n).then((async t=>{for(;r.get();)await r.get();const e=o.deref();if(void 0!==e){const i=e._$Cyt.indexOf(n);i>-1&&i<e._$Cwt&&(e._$Cwt=i,e.setValue(t))}})))}return H}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}),yt=((t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new r(i,t,s)})`
  ha-card {
    --sns-card-background: var(--ha-card-background, var(--paper-card-background-color, white));
    --sns-card-border-radius: var(--ha-card-border-radius, 2px);
    --sns-card-box-shadow: var(--ha-card-box-shadow, 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2));
    --sns-card-primary-text-color: var(--primary-text-color);
    --sns-card-header-color: var(--ha-card-header-color, --primary-text-color);
    --sns-card-header-font-family: var(--ha-card-header-font-family, inherit);
    --sns-card-header-font-size: var(--ha-card-header-font-size, 24px);

    --sns-group-button-size-width: 150px;
    --sns-artwork-opacity: 1;
    --sns-button-icon-color: var(--paper-item-icon-color, var(--primary-color, rgba(211, 3, 32, 0.95)));

    --sns-player-background: #fff;
    --sns-player-button-size: 60px;

    background: var(--sns-card-background);
    border-radius: var(--sns-card-border-radius);
    box-shadow: var(--sns-card-box-shadow);
    color: var(--sns-card-primary-text-color);
    display: block;
    transition: all 0.3s ease-out;
    padding: 16px;
  }

  .container {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: 1.5fr 0.5fr;
    gap: 1em 1em;
    grid-auto-flow: row;
    grid-template-areas:
      "players player-main"
      "playlists playlists";
  }

  div.container div.players {
    grid-area: players;
    display: flex;
    row-gap: 1rem;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .player-main {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1.6fr 0.4fr;
    gap: 1em 2em;
    grid-auto-flow: row;
    grid-template-areas:
      "player"
      "extra-players";
    grid-area: player-main;
  }

  div.container .player-main .player {
    grid-area: player;
    position: relative;
  }

  .extra-players {
    grid-area: extra-players;
  }

  div.playlists {
    grid-area: playlists;
    display: flex;
    gap: 1rem;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  @media (max-width: 800px) {
    .container {
      grid-template-areas:
        "players"
        "player-main"
        "playlists";
      grid-template-columns: 1fr;
      grid-template-rows: minmax(300px, auto);
    }
  }

  .header {
    color: var(--sns-card-header-color);
    font-family: var(--sns-card-header-font-family);
    font-size: var(--sns-card-header-font-size);
    letter-spacing: -0.012em;
    line-height: 32px;
    padding: 4px 0 12px;
    display: block;
  }
  .header .name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .player__body {
    position: relative;
  }

  .body__cover {
    position: absolute;
    height: 100%;
    width: 100%;
  }

  .entity__cover {
    display: block;
    max-width: 100%;
    width: 100%;
    opacity: 0.4;
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border-radius: var(--ha-card-border-radius, 0);
    overflow: hidden;
  }

  .list {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  .body__buttons,
  .body__info,
  .player__footer {
    padding-right: 2rem;
    padding-left: 2rem;
  }

  .list--footer {
    justify-content: space-between;
  }
  .list--footer li:last-child {
    flex: 1;
    display: flex;
    flex-direction: row;
    margin-left: 15px;
  }
  .list--footer li:last-child input {
    flex: 1;
  }
  .list--footer li:last-child ha-icon {
    margin: 0 5px;
    color: #888;
    font-size: 16px;
  }

  .volumeRange {
    -webkit-appearance: none;
    height: 5px;
    border-radius: 5px;
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
    margin: auto;
  }

  .list--cover {
    justify-content: flex-end;
  }

  .list--header .list__link,
  .list--footer .list__link {
    color: #888;
  }

  .list--cover {
    position: absolute;
    top: 0.5rem;
    width: 100%;
  }
  .list--cover li:first-of-type {
    margin-left: 0.75rem;
  }
  .list--cover li:last-of-type {
    margin-right: 0.75rem;
  }
  .list--cover a {
    font-size: 1.15rem;
    color: #fff;
  }

  .range {
    position: relative;
    top: -1.5rem;
    right: 0;
    left: 0;
    margin: auto;
    background: rgba(255, 255, 255, 0.95);
    width: 80%;
    height: 0.125rem;
    border-radius: 0.25rem;
    cursor: pointer;
  }
  .range:before,
  .range:after {
    content: '';
    position: absolute;
    cursor: pointer;
  }
  .range:before {
    width: 3rem;
    height: 100%;
    background: -webkit-linear-gradient(left, rgba(211, 3, 32, 0.5), rgba(211, 3, 32, 0.85));
    background: linear-gradient(to right, rgba(211, 3, 32, 0.5), rgba(211, 3, 32, 0.85));
    border-radius: 0.25rem;
    overflow: hidden;
  }
  .range:after {
    top: -0.375rem;
    left: 3rem;
    z-index: 3;
    width: 0.875rem;
    height: 0.875rem;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.15);
    -webkit-transition: all 0.25s cubic-bezier(0.4, 0, 1, 1);
    transition: all 0.25s cubic-bezier(0.4, 0, 1, 1);
  }
  .range:focus:after,
  .range:hover:after {
    background: var(--sns-button-icon-color);
  }

  .body__info {
    padding-top: 1.5rem;
    padding-bottom: 1.25rem;
    text-align: center;
    display: flex;
    min-width: 0;
  }

  .info__album,
  .info__song {
    flex: 1 1 auto;
    margin-bottom: 0.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .info__artist,
  .info__album {
    font-size: 0.75rem;
    font-weight: 300;
    color: #666;
  }

  .info__artist {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex: 1 1 auto;
  }

  .info__song {
    font-size: 1.15rem;
    font-weight: 400;
    color: var(--sns-button-icon-color);
  }

  .body__buttons {
    padding-bottom: 2rem;
  }

  .body__buttons {
    padding-top: 1rem;
  }

  .list--buttons {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  .list--buttons li:nth-of-type(n + 2) {
    margin-left: 1.25rem;
  }

  .list--buttons a {
    padding-top: 0.45rem;
    padding-right: 0.75rem;
    padding-bottom: 0.45rem;
    padding-left: 0.75rem;
    font-size: 1rem;
    border-radius: 50%;
    //box-shadow: 0 3px 6px rgba(33, 33, 33, 0.1), 0 3px 12px rgba(33, 33, 33, 0.15);
  }
  .list--buttons a:focus,
  .list--buttons a:hover {
    color: var(--sns-button-icon-color);
    opacity: 1;
    //box-shadow: 0 6px 9px rgba(33, 33, 33, 0.1), 0 6px 16px rgba(33, 33, 33, 0.15);
  }

  .list--buttons li.middle a {
    padding: 0.82rem;
    margin-left: 0.5rem;
    font-size: 1.25rem !important;
    color: var(--sns-button-icon-color);
    opacity: 1 !important;
  }

  .list--buttons li:first-of-type a,
  .list--buttons li:last-of-type a {
    font-size: 0.95rem;
    color: var(--sns-button-icon-color);
    opacity: 0.5;
  }
  .list--buttons li:first-of-type a:focus,
  .list--buttons li:first-of-type a:hover,
  .list--buttons li:last-of-type a:focus,
  .list--buttons li:last-of-type a:hover {
    color: var(--sns-button-icon-color);
    opacity: 0.75;
  }

  div.player-main div.player ha-icon {
    --mdc-icon-size: var(--sns-player-button-size, 50px);
  }


  .list__link {
    -webkit-transition: all 0.25s cubic-bezier(0.4, 0, 1, 1);
    transition: all 0.25s cubic-bezier(0.4, 0, 1, 1);
  }
  .list__link:focus,
  .list__link:hover {
    color: var(--sns-button-icon-color);
  }

  .player__footer {
    padding-top: 1rem;
    padding-bottom: 2rem;
  }

  .list--footer a {
    opacity: 0.5;
  }
  .list--footer a:focus,
  .list--footer a:hover {
    opacity: 0.9;
  }

  .players > .group {
    display: flex;
    flex-grow: 1;
    max-height: 100px;
    min-width: 0;
    max-width: calc(var(--sns-group-button-size-width) * 2);
    flex-basis: calc(var(--sns-group-button-size-width) * 1.5);
    padding: 0;
    margin: 0;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 3px 0px;
    position: relative;
    font-weight: 300;
    touch-action: auto !important;
    padding: 10px;
    border-radius: 12px;
    overflow: hidden;
    flex-direction: column;
    height: 100%;
  }

  @media ( max-width: 800px) {
    .players > .group {
      max-width: 100%;
    }
  }

  .group.active {
    background-color: rgba(255, 255, 255, 1);
  }

  .group span.icon {
    display: block;
    position: relative;
    height: 40px;
    width: 40px;
    color: var(--sns-button-icon-color);
    font-size: 30px;
    transform-origin: 50% 50%;
    line-height: 40px;
    text-align: center;
    pointer-events: none;
  }
  .group span.icon ha-icon {
    width: 30px;
    height: 30px;
    pointer-events: none;
  }
  .group span.name {
    font-size: 14px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.4);
    width: 100%;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    white-space: normal;
    pointer-events: none;
    overflow: hidden;
  }
  .group span:nth-child(2) {
    margin-top: auto;
  }

  .group span.state {
    position: relative;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.4);
    text-transform: capitalize;
    float: left;
    pointer-events: none;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  div.group span.cover-icon {
    position: absolute;
    right: 4px;
    top: 4px;
    width: 40px;
    height: 40px;
  }

  .entity__icon {
    width: 100%;
    height: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 100%;
    position: relative;
  }

  .group .player .bar {
    background: var(--sns-button-icon-color);
    bottom: 1px;
    height: 3px;
    position: absolute;
    width: 4px;
    animation: sound 0ms -800ms linear infinite alternate;
    display: block;
  }

  .group .player .bar:nth-child(1) {
    left: 1px;
  }
  .group .player .bar:nth-child(2) {
    left: 6px;
  }
  .group .player .bar:nth-child(3) {
    left: 11px;
  }

  .group .player.active .bar:nth-child(1) {
    animation-duration: 474ms;
  }
  .group .player.active .bar:nth-child(2) {
    animation-duration: 433ms;
  }
  .group .player.active .bar:nth-child(3) {
    animation-duration: 407ms;
  }

  .group .wrap .inner-wrap span.name,
  .group .wrap .inner-wrap span.state {
    color: rgb(0, 0, 0);
  }

  div.members {
    display: flex;
    height: 100%;
    column-gap: 1rem;
    row-gap: 1rem;
    flex-flow: row wrap;
    justify-content: space-between;
  }

  div.members > .member {
    cursor: pointer;
    display: inline-block;
    flex-grow: 1;
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 3px 0px;
    position: relative;
    font-weight: 300;
    touch-action: auto !important;
    padding: 10px;
    border-radius: 12px;
    overflow: hidden;
  }

  .member .member-inner {
    display: flex;
    flex-direction: column;
    height: 100%;
    pointer-events: none;
  }

  div.members > .member span {
    font-size: 14px;
    font-weight: 500;
    color: #000;
    width: 100%;
    margin-top: auto;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    white-space: normal;
    pointer-events: none;
    overflow: hidden;
  }

  div.members > .member ha-icon {
    display: block;
    height: 30px;
    width: 30px;
    color: #888;
    font-size: 30px;
    transform-origin: 50% 50%;
    line-height: 40px;
    text-align: center;
    pointer-events: none;
  }

  .member:hover ha-icon {
    color: var(--sns-button-icon-color);
  }

  div.playlists > .favorite {
    cursor: pointer;
    display: inline-block;
    min-width: 60px;
    flex: 1 1 0;
    height: 6rem;
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 3px 0px;
    position: relative;
    font-weight: 300;
    touch-action: auto !important;
    padding: 10px;
    border-radius: 12px;
    overflow: hidden;
  }
  div.playlists > .favorite .favorite-inner {
    display: flex;
    flex-direction: column;
    height: 100%;
    pointer-events: none;
  }
  div.playlists > .favorite span.icon {
    display: block;
    height: 40px;
    width: 40px;
    color: var(--sns-button-icon-color);
    font-size: 30px;
    transform-origin: 50% 50%;
    line-height: 40px;
    text-align: center;
    pointer-events: none;
  }
  div.playlists > .favorite span.icon ha-icon {
    width: 30px;
    height: 30px;
    pointer-events: none;
  }
  div.playlists > .favorite span.name {
    font-size: 14px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.4);
    width: 100%;
    margin-top: auto;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    white-space: normal;
    pointer-events: none;
    overflow: hidden;
  }

  @keyframes sound {
    0% {
      opacity: 0.35;
      height: 3px;
    }
    100% {
      opacity: 1;
      height: 20px;
    }
  }

`,$t=["entities","active"],wt="mdi:skip-next",xt={playing:"mdi:pause",paused:"mdi:play"},At="mdi:skip-previous";console.info("%c SONOS-CARD \n%c Version: 2.0.1    ","color: red; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:"sonos-card",name:"Sonos-Card",preview:!1,description:"A responsive Sonos card with support for groups and playlists"});let kt=class extends F{constructor(){super(),this.entities={},this.active=""}setConfig(t){if(!t.entities)throw new Error("You need to define entities");this.config=Object.assign({name:"Sonos"},t)}set hass(t){if(!t)return;this._hass=t;let e=!1;for(const t of this.config.entities){const i=this._hass.states[t],s=this.entities[t];s?i&&JSON.stringify(s)!==JSON.stringify(i)&&(this.entities[t]=i,e=!0):(this.entities[t]=i,e=!0)}e&&this.requestUpdate("entities")}shouldUpdate(t){if(!this.config)return!1;return $t.some((e=>t.has(e)))}render(){const t=[],e=[];let i=!0;for(const s of this.config.entities){const o=this._hass.states[s];if(i){i=!1;const t=this._hass.states["sensor.sonos_favorites"];for(const i in t.attributes.items)e.push(t.attributes.items[i])}t[s]=o.attributes.friendly_name,o.attributes.group_members.length>1&&o.attributes.group_members[0]==s?"playing"==o.state&&""==this.active&&(this.active=s):1==o.attributes.group_members.length&&"playing"==o.state&&""==this.active&&(this.active=s)}return""===this.active&&this.config.entities.length>0&&(this.active=this.config.entities[0]),T`
      <ha-card
        .header="sonos-card">
        <div class="container">
          <div class="players">
            ${this.config.entities.map((e=>{const i=this._hass.states[e];return 1==i.attributes.group_members.length||i.attributes.group_members.length>1&&i.attributes.group_members[0]==e?T`
                  <div class="group ${this.active==e?"active":""}" data-entity="${e}" @click="${t=>this.switchGroup(t)}">
                    <span class="icon">
                      <div class="player ${"playing"==i.state?"active":""}">
                        <div class="bar"></div>
                        <div class="bar"></div>
                        <div class="bar"></div>
                      </div>
                    </span>
                    <span class="cover-icon">${bt(this.renderIcon(i))}</span>
                    ${i.attributes.group_members.map((e=>T`<span class="name">${t[e]}</span>`))}
                    <span class="state">${i.attributes.media_artist} - ${i.attributes.media_title}</span>
                  </div>
                `:T``}))}
          </div>

          <div class="player-main">
            ${""!=this.active?T`
                  <div class="player">
                    <div class="body__cover">${bt(this.renderCover(this._hass.states[this.active]))}</div>
                    <div class="player__body">
                      <div class="body__info">
                        <div class="info__album">${this._hass.states[this.active].attributes.media_album_name}</div>
                        <div class="info__song">${this._hass.states[this.active].attributes.media_title}</div>
                        <div class="info__artist">${this._hass.states[this.active].attributes.media_artist}</div>
                      </div>
                      <div class="body__buttons">
                        <ul class="list list--buttons">
                          <li>
                            <ha-icon-button class="previous-button" @click="${t=>this._previousTrack(t,this.active)}" .icon=${At}>
                              <ha-icon .icon=${At}></ha-icon>
                            </ha-icon-button>
                          </li>
                          <li class="middle">
                            <a class="list__link">
                              ${"playing"!==this._hass.states[this.active].state?T`
                                  <ha-icon-button class="play-button" @click="${t=>this._play(t,this.active)}" .icon=${xt[this._hass.states[this.active].state]}>
                                    <ha-icon .icon=${xt[this._hass.states[this.active].state]}></ha-icon>
                                  </ha-icon-button>`:T`
                                  <ha-icon-button class="pause-button" @click="${t=>this._pause(t,this.active)}" .icon=${xt[this._hass.states[this.active].state]}>
                                    <ha-icon .icon=${xt[this._hass.states[this.active].state]}></ha-icon>
                                  </ha-icon-button>`}
                            </a>
                          </li>
                          <li>
                            <ha-icon-button class="next-button" @click="${t=>this._nextTrack(t,this.active)}" .icon=${wt}>
                              <ha-icon .icon=${wt}></ha-icon>
                            </ha-icon-button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="player__footer">
                      <ul class="list list--footer">
                        <li>
                          <ha-icon @click="${t=>this._volumeDown(t,this.active)}" .icon=${"mdi:volume-minus"}></ha-icon
                          ><input
                            type="range"
                            .value="${100*this._hass.states[this.active].attributes.volume_level}"
                            @change=${t=>this._volumeSet(t,this.active)}
                            min="0"
                            max="100"
                            id="volumeRange"
                            class="volumeRange"
                            style="background: linear-gradient(to right, var(--sns-button-icon-color) 0%, var(--sns-button-icon-color) ${100*this._hass.states[this.active].attributes.volume_level}%, rgb(211, 211, 211) ${100*this._hass.states[this.active].attributes.volume_level}%, rgb(211, 211, 211) 100%);"
                          /><ha-icon @click="${t=>this._volumeUp(t,this.active)}" .icon=${"mdi:volume-plus"}></ha-icon>
                        </li>
                      </ul>
                    </div>
                  </div>
              `:T``}

            <div class="extra-players">
              <div class="members">
                ${""!=this.active?T`${this._hass.states[this.active].attributes.group_members.map((e=>e!=this.active?T`
                          <div class="member unjoin-member" data-member="${e}" @click="${t=>this._unjoin(t)}">
                            <div class="member-inner" data-member="${e}">
                              <ha-icon .icon=${"mdi:minus"}></ha-icon>
                              <span>${t[e]} </span>
                            </div>
                          </div>
                        `:T``))}
                    ${this.config.entities.map((e=>e==this.active||this._hass.states[this.active].attributes.group_members.includes(e)?T``:T`
                          <div class="member join-member" data-member="${e}" @click="${t=>this._join(t)}">
                            <div class="member-inner" data-member="${e}">
                              <ha-icon .icon=${"mdi:plus"}></ha-icon>
                              <span>${t[e]} </span>
                            </div>
                          </div>
                        `))}`:T``}
              </div>
            </div>
          </div>

          <div class="playlists">
            ${e.map((t=>T`
                <div class="favorite" data-favorite="${t}" @click="${t=>this._sourceSet(t)}">
                  <div class="favorite-inner">
                    <span class="icon" style="">
                      <ha-icon .icon=${"mdi:play"}></ha-icon>
                    </span>
                    <span class="name">${t}</span>
                  </div>
                </div>
              `))}
          </div>
        </div>
      </ha-card>
    `}switchGroup(t){const e=t.target.dataset;(null==e?void 0:e.entity)&&(this.active=null==e?void 0:e.entity)}_pause(t,e){this.callService(t,"media_player","media_pause",e)}_play(t,e){this.callService(t,"media_player","media_play",e)}_nextTrack(t,e){this.callService(t,"media_player","media_next_track",e)}_previousTrack(t,e){this.callService(t,"media_player","media_previous_track",e)}_volumeDown(t,e){this.callService(t,"media_player","volume_down",e,{},this._hass.states[e].attributes.group_members)}_volumeUp(t,e){this.callService(t,"media_player","volume_up",e,{},this._hass.states[e].attributes.group_members)}_volumeSet(t,e){const i=t.target.value/100;this.callService(t,"media_player","volume_set",e,{volume_level:i},this._hass.states[e].attributes.group_members)}_sourceSet(t){const e=t.target.dataset;(null==e?void 0:e.favorite)&&this.callService(t,"media_player","select_source",this.active,{source:e.favorite})}_join(t){const e=t.target.dataset;(null==e?void 0:e.member)&&this.callService(t,"media_player","join",this.active,{group_members:[e.member]})}_unjoin(t){const e=t.target.dataset;(null==e?void 0:e.member)&&this.callService(t,"media_player","unjoin",e.member)}callService(t,e,i,s,o={},r=[]){t.stopPropagation(),this._hass.callService(e,i,Object.assign(Object.assign({},s&&{entity_id:s}),o));for(const t in r)t!==s&&this._hass.states[t]&&this._hass.callService(e,i,Object.assign({entity_id:t},o))}getCardSize(){return 1}async fetchCover(t){if(t.attributes.entity_picture)try{const e=t.attributes.entity_picture_local?this._hass._hassUrl(t.attributes.entity_picture):t.attributes.entity_picture,i=await fetch(new Request(e)),s=(t=>{let e="";return[].slice.call(new Uint8Array(t)).forEach((t=>e+=String.fromCharCode(t))),window.btoa(e)})(await i.arrayBuffer());return`url(data:${i.headers.get("Content-Type")||"image/jpeg"};base64,${s})`}catch(t){console.debug("Fetch covers failed: "+t)}return null}async renderCover(t){const e=await this.fetchCover(t);let i;return i="cover"===this.config.background&&e&&e.length>0?{backgroundImage:e,width:"100%"}:{background:"var(--sns-player-background, #fff)",width:"100%"},T`<div class='entity__cover' style=${lt(i)}></div>`}async renderIcon(t){const e=await this.fetchCover(t);return e?T`
        <div class='entity__icon' style='background-image: ${e};'></div>`:T``}static get styles(){return yt}};t([it()],kt.prototype,"config",void 0),t([it()],kt.prototype,"entities",void 0),t([it()],kt.prototype,"_hass",void 0),t([it()],kt.prototype,"active",void 0),kt=t([(t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){customElements.define(t,e)}}})(t,e))("sonos-card")],kt);
