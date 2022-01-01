/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),i=new Map;class s{constructor(t,i){if(this._$cssResult$=!0,i!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let e=i.get(this.cssText);return t&&void 0===e&&(i.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const o=(t,...i)=>{const o=1===t.length?t[0]:i.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new s(o,e)},r=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const e of t.cssRules)i+=e.cssText;return(t=>new s("string"==typeof t?t:t+"",e))(i)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var n;const a=window.trustedTypes,l=a?a.emptyScript:"",h=window.reactiveElementPolyfillSupport,d={toAttribute(t,e){switch(e){case Boolean:t=t?l:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},c=(t,e)=>e!==t&&(e==e||t==t),p={attribute:!0,type:String,converter:d,reflect:!1,hasChanged:c};class u extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Eh(i,e);void 0!==s&&(this._$Eu.set(s,i),t.push(s))})),t}static createProperty(t,e=p){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||p}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var e;const i=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,i)=>{t?e.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((t=>{const i=document.createElement("style"),s=window.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=t.cssText,e.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ES(t,e,i=p){var s,o;const r=this.constructor._$Eh(t,i);if(void 0!==r&&!0===i.reflect){const n=(null!==(o=null===(s=i.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==o?o:d.toAttribute)(e,i.type);this._$Ei=t,null==n?this.removeAttribute(r):this.setAttribute(r,n),this._$Ei=null}}_$AK(t,e){var i,s,o;const r=this.constructor,n=r._$Eu.get(t);if(void 0!==n&&this._$Ei!==n){const t=r.getPropertyOptions(n),a=t.converter,l=null!==(o=null!==(s=null===(i=a)||void 0===i?void 0:i.fromAttribute)&&void 0!==s?s:"function"==typeof a?a:null)&&void 0!==o?o:d.fromAttribute;this._$Ei=n,this[n]=l(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||c)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$E_&&(this._$E_=new Map),this._$E_.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$E_&&(this._$E_.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$E_=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var v;u.finalized=!0,u.elementProperties=new Map,u.elementStyles=[],u.shadowRootOptions={mode:"open"},null==h||h({ReactiveElement:u}),(null!==(n=globalThis.reactiveElementVersions)&&void 0!==n?n:globalThis.reactiveElementVersions=[]).push("1.0.2");const g=globalThis.trustedTypes,m=g?g.createPolicy("lit-html",{createHTML:t=>t}):void 0,f=`lit$${(Math.random()+"").slice(9)}$`,_="?"+f,b=`<${_}>`,$=document,y=(t="")=>$.createComment(t),x=t=>null===t||"object"!=typeof t&&"function"!=typeof t,w=Array.isArray,A=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,S=/-->/g,E=/>/g,k=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,C=/'/g,U=/"/g,P=/^(?:script|style|textarea)$/i,T=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),z=Symbol.for("lit-noChange"),H=Symbol.for("lit-nothing"),N=new WeakMap,R=$.createTreeWalker($,129,null,!1),M=(t,e)=>{const i=t.length-1,s=[];let o,r=2===e?"<svg>":"",n=A;for(let e=0;e<i;e++){const i=t[e];let a,l,h=-1,d=0;for(;d<i.length&&(n.lastIndex=d,l=n.exec(i),null!==l);)d=n.lastIndex,n===A?"!--"===l[1]?n=S:void 0!==l[1]?n=E:void 0!==l[2]?(P.test(l[2])&&(o=RegExp("</"+l[2],"g")),n=k):void 0!==l[3]&&(n=k):n===k?">"===l[0]?(n=null!=o?o:A,h=-1):void 0===l[1]?h=-2:(h=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?k:'"'===l[3]?U:C):n===U||n===C?n=k:n===S||n===E?n=A:(n=k,o=void 0);const c=n===k&&t[e+1].startsWith("/>")?" ":"";r+=n===A?i+b:h>=0?(s.push(a),i.slice(0,h)+"$lit$"+i.slice(h)+f+c):i+f+(-2===h?(s.push(void 0),e):c)}const a=r+(t[i]||"<?>")+(2===e?"</svg>":"");return[void 0!==m?m.createHTML(a):a,s]};class O{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,r=0;const n=t.length-1,a=this.parts,[l,h]=M(t,e);if(this.el=O.createElement(l,i),R.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=R.nextNode())&&a.length<n;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(f)){const i=h[r++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(f),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?I:"?"===e[1]?W:"@"===e[1]?q:B})}else a.push({type:6,index:o})}for(const e of t)s.removeAttribute(e)}if(P.test(s.tagName)){const t=s.textContent.split(f),e=t.length-1;if(e>0){s.textContent=g?g.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],y()),R.nextNode(),a.push({type:2,index:++o});s.append(t[e],y())}}}else if(8===s.nodeType)if(s.data===_)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(f,t+1));)a.push({type:7,index:o}),t+=f.length-1}o++}}static createElement(t,e){const i=$.createElement("template");return i.innerHTML=t,i}}function j(t,e,i=t,s){var o,r,n,a;if(e===z)return e;let l=void 0!==s?null===(o=i._$Cl)||void 0===o?void 0:o[s]:i._$Cu;const h=x(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==h&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===h?l=void 0:(l=new h(t),l._$AT(t,i,s)),void 0!==s?(null!==(n=(a=i)._$Cl)&&void 0!==n?n:a._$Cl=[])[s]=l:i._$Cu=l),void 0!==l&&(e=j(t,l._$AS(t,e.values),l,s)),e}class L{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:s}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:$).importNode(i,!0);R.currentNode=o;let r=R.nextNode(),n=0,a=0,l=s[0];for(;void 0!==l;){if(n===l.index){let e;2===l.type?e=new D(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new J(r,this,t)),this.v.push(e),l=s[++a]}n!==(null==l?void 0:l.index)&&(r=R.nextNode(),n++)}return o}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class D{constructor(t,e,i,s){var o;this.type=2,this._$AH=H,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cg=null===(o=null==s?void 0:s.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=j(this,t,e),x(t)?t===H||null==t||""===t?(this._$AH!==H&&this._$AR(),this._$AH=H):t!==this._$AH&&t!==z&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):(t=>{var e;return w(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.M(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==H&&x(this._$AH)?this._$AA.nextSibling.data=t:this.S($.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:s}=t,o="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=O.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.m(i);else{const t=new L(o,this),e=t.p(this.options);t.m(i),this.S(e),this._$AH=t}}_$AC(t){let e=N.get(t.strings);return void 0===e&&N.set(t.strings,e=new O(t)),e}M(t){w(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new D(this.A(y()),this.A(y()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class B{constructor(t,e,i,s,o){this.type=1,this._$AH=H,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=H}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let r=!1;if(void 0===o)t=j(this,t,e,0),r=!x(t)||t!==this._$AH&&t!==z,r&&(this._$AH=t);else{const s=t;let n,a;for(t=o[0],n=0;n<o.length-1;n++)a=j(this,s[i+n],e,n),a===z&&(a=this._$AH[n]),r||(r=!x(a)||a!==this._$AH[n]),a===H?t=H:t!==H&&(t+=(null!=a?a:"")+o[n+1]),this._$AH[n]=a}r&&!s&&this.k(t)}k(t){t===H?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class I extends B{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===H?void 0:t}}const V=g?g.emptyScript:"";class W extends B{constructor(){super(...arguments),this.type=4}k(t){t&&t!==H?this.element.setAttribute(this.name,V):this.element.removeAttribute(this.name)}}class q extends B{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=j(this,t,e,0))&&void 0!==i?i:H)===z)return;const s=this._$AH,o=t===H&&s!==H||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==H&&(s===H||o);o&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class J{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){j(this,t)}}const K=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Z,Y;null==K||K(O,D),(null!==(v=globalThis.litHtmlVersions)&&void 0!==v?v:globalThis.litHtmlVersions=[]).push("2.0.2");class F extends u{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,i)=>{var s,o;const r=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let n=r._$litPart$;if(void 0===n){const t=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;r._$litPart$=n=new D(e.insertBefore(y(),t),t,void 0,null!=i?i:{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return z}}F.finalized=!0,F._$litElement$=!0,null===(Z=globalThis.litElementHydrateSupport)||void 0===Z||Z.call(globalThis,{LitElement:F});const G=globalThis.litElementPolyfillSupport;null==G||G({LitElement:F}),(null!==(Y=globalThis.litElementVersions)&&void 0!==Y?Y:globalThis.litElementVersions=[]).push("3.0.2");customElements.define("sonos-card",class extends F{constructor(){super(),this.active=""}static get properties(){return{hass:{},config:{},active:{}}}render(){const t=[],e=[];let i=!0;for(const s of this.config.entities){const o=this.hass.states[s];if(i){i=!1;for(const t of o.attributes.source_list)e.push(t)}t[s]=o.attributes.friendly_name,o.attributes.sonos_group.length>1&&o.attributes.sonos_group[0]==s?"playing"==o.state&&""==this.active&&(this.active=s):1==o.attributes.sonos_group.length&&"playing"==o.state&&""==this.active&&(this.active=s)}return T`
      <div class="center">
        <div class="groups">
          ${this.config.entities.map((e=>{const i=this.hass.states[e];return 1==i.attributes.sonos_group.length||i.attributes.sonos_group.length>1&&i.attributes.sonos_group[0]==e?T`
                <div class="group" data-entity="${e}">
                  <div class="wrap ${this.active==e?"active":""}">
                    <div class="inner-wrap">
                      <span class="icon" style="">
                        <div class="player ${"playing"==i.state?"active":""}">
                          <div class="bar"></div>
                          <div class="bar"></div>
                          <div class="bar"></div>
                        </div>
                      </span>
                      ${i.attributes.sonos_group.map((e=>T`<span class="name">${t[e]}</span>`))}
                      <span class="state">${i.attributes.media_artist} - ${i.attributes.media_title}</span>
                    </div>
                  </div>
                </div>
              `:T``}))}
        </div>

        <div class="players">
          ${""!=this.active?T`
                <div class="player__container">
                  <div class="player__body">
                    <div class="body__cover"></div>
                    <div class="body__info">
                      <div class="info__album">${this.hass.states[this.active].attributes.media_album_name}</div>
                      <div class="info__song">${this.hass.states[this.active].attributes.media_title}</div>
                      <div class="info__artist">${this.hass.states[this.active].attributes.media_artist}</div>
                    </div>
                    <div class="body__buttons">
                      <ul class="list list--buttons">
                        <li class="middle">
                          <a class="list__link">
                            ${"playing"!=this.hass.states[this.active].state?T`<ha-icon @click="${()=>this._play(this.active)}" .icon=${"mdi:play"}></ha-icon>`:T`<ha-icon @click="${()=>this._pause(this.active)}" .icon=${"mdi:stop"}></ha-icon>`}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="player__footer">
                    <ul class="list list--footer">
                      <li>
                        <ha-icon @click="${()=>this._volumeDown(this.active)}" .icon=${"mdi:volume-minus"}></ha-icon
                        ><input
                          type="range"
                          .value="${100*this.hass.states[this.active].attributes.volume_level}"
                          @change=${t=>this._volumeSet(this.active,t.target.value)}
                          min="0"
                          max="100"
                          id="volumeRange"
                          class="volumeRange"
                          style="background: linear-gradient(to right, rgb(211, 3, 32) 0%, rgb(211, 3, 32) ${100*this.hass.states[this.active].attributes.volume_level}%, rgb(211, 211, 211) ${100*this.hass.states[this.active].attributes.volume_level}%, rgb(211, 211, 211) 100%);"
                        /><ha-icon @click="${()=>this._volumeUp(this.active)}" .icon=${"mdi:volume-plus"}></ha-icon>
                      </li>
                    </ul>
                  </div>
                </div>
              `:T``}
        </div>

        <div class="sidebar">
          <ul class="members">
            ${""!=this.active?T`${this.hass.states[this.active].attributes.sonos_group.map((e=>e!=this.active?T`
                      <li>
                        <div class="member unjoin-member" data-member="${e}" @click="${t=>this._unjoin(t)}">
                          <div class="member-inner">
                            <ha-icon .icon=${"mdi:minus"}></ha-icon>
                            <span>${t[e]} </span>
                          </div>
                        </div>
                      </li>
                    `:T``))}
                ${this.config.entities.map((e=>e==this.active||this.hass.states[this.active].attributes.sonos_group.includes(e)?T``:T`
                      <li>
                        <div class="member join-member" data-member="${e}" @click="${t=>this._join(t)}">
                          <div class="member-inner">
                            <ha-icon .icon=${"mdi:plus"}></ha-icon>
                            <span>${t[e]} </span>
                          </div>
                        </div>
                      </li>
                    `))}`:T``}
          </ul>
        </div>
      </div>
      <div class="center">
        <ul class="favorites">
          ${e.map((t=>T`
              <li>
                <div class="favorite" data-favorite="${t}" @click="${t=>this._sourceSet(t)}">
                  <div class="favorite-inner">
                    <span class="icon" style="">
                      <ha-icon .icon=${"mdi:play"}></ha-icon>
                    </span>
                    <span class="name">${t}</span>
                  </div>
                </div>
              </li>
            `))}
        </ul>
      </div>
    `}updated(){this.shadowRoot.querySelectorAll(".group").forEach((t=>{t.addEventListener("click",(()=>{this.active=t.dataset.entity}))}))}_pause(t){this.hass.callService("media_player","media_pause",{entity_id:t})}_play(t){this.hass.callService("media_player","media_play",{entity_id:t})}_volumeDown(t){this.hass.callService("media_player","volume_down",{entity_id:t});for(const e in this.hass.states[t].sonos_group)e!=t&&this.hass.callService("media_player","volume_down",{entity_id:e})}_volumeUp(t){this.hass.callService("media_player","volume_up",{entity_id:t});for(const e in this.hass.states[t].sonos_group)e!=t&&this.hass.callService("media_player","volume_up",{entity_id:e})}_volumeSet(t,e){const i=e/100;this.hass.callService("media_player","volume_set",{entity_id:t,volume_level:i});for(const e in this.hass.states[t].sonos_group)e!=t&&this.hass.callService("media_player","volume_set",{entity_id:e,volume_level:i})}_sourceSet(t){t.target.dataset&&t.target.dataset.favorite&&(console.log(this.active),console.log(t.target.dataset.favorite),this.hass.callService("media_player","select_source",{source:t.target.dataset.favorite,entity_id:this.active}))}_join(t){t.target.dataset&&t.target.dataset.member&&(console.log(this.active),console.log(t.target.dataset.member),this.hass.callService("sonos","join",{master:this.active,entity_id:t.target.dataset.member}))}_unjoin(t){t.target.dataset&&t.target.dataset.member&&(console.log(this.active),console.log(t.target.dataset.member),this.hass.callService("sonos","unjoin",{master:this.active,entity_id:t.target.dataset.member}))}setConfig(t){if(!t.entities)throw new Error("You need to define entities");this.config=t}getCardSize(){return 1}static get styles(){return o`
      ha-card {
        background: var(--ha-card-background, var(--paper-card-background-color, white));
        border-radius: var(--ha-card-border-radius, 2px);
        box-shadow: var(--ha-card-box-shadow, 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2));
        color: var(--primary-text-color);
        display: block;
        transition: all 0.3s ease-out;
        padding: 16px;
      }
      .header {
        color: var(--ha-card-header-color, --primary-text-color);
        font-family: var(--ha-card-header-font-family, inherit);
        font-size: var(--ha-card-header-font-size, 24px);
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

      .players {
        margin: 3px 5px;
        width: 382px;
      }
      .player__container {
        margin: 0;
        background: #fff;
        border-radius: 12px;
        box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 3px 0px;
      }

      .body__cover {
        position: relative;
      }

      .body__cover img {
        max-width: 100%;
        width: 100%;
        border-radius: 0.25rem;
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
        margin: 6px 5px 0 5px;
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
        background: rgba(211, 3, 32, 0.95);
      }

      .body__info {
        padding-top: 1.5rem;
        padding-bottom: 1.25rem;
        text-align: center;
      }

      .info__album,
      .info__song {
        margin-bottom: 0.5rem;
        white-space: nowrap;
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
      }

      .info__song {
        font-size: 1.15rem;
        font-weight: 400;
        color: #d30320;
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
        box-shadow: 0 3px 6px rgba(33, 33, 33, 0.1), 0 3px 12px rgba(33, 33, 33, 0.15);
      }
      .list--buttons a:focus,
      .list--buttons a:hover {
        color: rgba(171, 2, 26, 0.95);
        opacity: 1;
        box-shadow: 0 6px 9px rgba(33, 33, 33, 0.1), 0 6px 16px rgba(33, 33, 33, 0.15);
      }

      .list--buttons li.middle a {
        padding: 0.82rem;
        margin-left: 0.5rem;
        font-size: 1.25rem !important;
        color: rgba(211, 3, 32, 0.95) !important;
        opacity: 1 !important;
      }

      .list--buttons li:first-of-type a,
      .list--buttons li:last-of-type a {
        font-size: 0.95rem;
        color: #212121;
        opacity: 0.5;
      }
      .list--buttons li:first-of-type a:focus,
      .list--buttons li:first-of-type a:hover,
      .list--buttons li:last-of-type a:focus,
      .list--buttons li:last-of-type a:hover {
        color: #d30320;
        opacity: 0.75;
      }

      .list__link {
        -webkit-transition: all 0.25s cubic-bezier(0.4, 0, 1, 1);
        transition: all 0.25s cubic-bezier(0.4, 0, 1, 1);
      }
      .list__link:focus,
      .list__link:hover {
        color: #d30320;
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

      .shuffle.active {
        color: #d30320;
        opacity: 0.9;
      }

      .center {
        margin: 2rem auto;
        display: flex;
        flex-direction: row;
        justify-content: center;
      }

      .groups {
        margin: 0;
        padding: 0;
        width: auto;
      }
      .groups > .group {
        padding: 0;
        margin: 0;
      }
      .group .wrap {
        cursor: pointer;
        display: inline-block;
        width: 150px;
        height: 100px;
        background-color: rgba(255, 255, 255, 0.8);
        box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 3px 0px;
        position: relative;
        font-weight: 300;
        touch-action: auto !important;
        padding: 10px;
        border-radius: 12px;
        margin: 3px;
        overflow: hidden;
      }
      .group .wrap.active {
        background-color: rgba(255, 255, 255, 1);
      }

      .group .wrap .inner-wrap {
        display: flex;
        flex-direction: column;
        height: 100%;
        pointer-events: none;
      }

      .group .wrap .inner-wrap span.icon {
        display: block;
        height: 40px;
        width: 40px;
        color: #d30320;
        font-size: 30px;
        transform-origin: 50% 50%;
        line-height: 40px;
        text-align: center;
        pointer-events: none;
      }
      .group .wrap .inner-wrap span.icon ha-icon {
        width: 30px;
        height: 30px;
        pointer-events: none;
      }
      .group .wrap .inner-wrap span.name {
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
      .inner-wrap span:nth-child(2) {
        margin-top: auto;
      }

      .group .wrap .inner-wrap span.state {
        position: relative;
        font-size: 14px;
        color: rgba(0, 0, 0, 0.4);
        text-transform: capitalize;
        float: left;
        white-space: nowrap;
        pointer-events: none;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .group .player {
        position: relative;
        width: 30px;
        height: 30px;
      }

      .group .player .bar {
        background: #666;
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

      .sidebar {
        width: auto;
        margin: 0;
        padding: 0;
      }
      ul.members {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      ul.members > li {
        padding: 0;
        margin: 0;
      }
      ul.members > li .member {
        cursor: pointer;
        display: inline-block;
        width: 150px;
        height: 50px;
        background-color: rgba(255, 255, 255, 0.8);
        box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 3px 0px;
        position: relative;
        font-weight: 300;
        touch-action: auto !important;
        padding: 10px;
        border-radius: 12px;
        margin: 3px;
        overflow: hidden;
      }
      ul.members > li .member .member-inner {
        display: flex;
        flex-direction: column;
        height: 100%;
        pointer-events: none;
      }
      ul.members > li .member span {
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
      ul.members > li .member ha-icon {
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
      ul.members > li .member:hover ha-icon {
        color: #d30320;
      }

      ul.favorites {
        width: 644px;
        margin: 0;
        padding: 0;
      }
      ul.favorites > li {
        padding: 0;
        margin: 0;
        display: inline-block;
      }
      ul.favorites > li .favorite {
        cursor: pointer;
        display: inline-block;
        width: 100px;
        height: 100px;
        background-color: rgba(255, 255, 255, 0.8);
        box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 3px 0px;
        position: relative;
        font-weight: 300;
        touch-action: auto !important;
        padding: 10px;
        border-radius: 12px;
        margin: 3px;
        overflow: hidden;
      }
      ul.favorites > li .favorite .favorite-inner {
        display: flex;
        flex-direction: column;
        height: 100%;
        pointer-events: none;
      }
      ul.favorites > li .favorite span.icon {
        display: block;
        height: 40px;
        width: 40px;
        color: #d30320;
        font-size: 30px;
        transform-origin: 50% 50%;
        line-height: 40px;
        text-align: center;
        pointer-events: none;
      }
      ul.favorites > li .favorite span.icon ha-icon {
        width: 30px;
        height: 30px;
        pointer-events: none;
      }
      ul.favorites > li .favorite span.name {
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
    `}});
