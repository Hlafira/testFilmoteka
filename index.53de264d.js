function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};var n={},r={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){r[e]=t},t.parcelRequired7c6=i),i.register("fExtF",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}})),i.register("iaRLo",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),i.register("7K24o",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),i.register("3LGG3",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}}));var s={};Object.defineProperty(s,"__esModule",{value:!0}),s.default=function(e,t){var n=o.default(e,t,"get");return a.default(e,n)};var o=u(i("fExtF")),a=u(i("iaRLo"));function u(e){return e&&e.__esModule?e:{default:e}}var c={};Object.defineProperty(c,"__esModule",{value:!0}),c.default=function(e,t,n){h.default(e,t),t.set(e,n)};var l,h=(l=i("7K24o"))&&l.__esModule?l:{default:l};var d={};Object.defineProperty(d,"__esModule",{value:!0}),d.default=function(e,t,n){var r=f.default(e,t,"set");return p.default(e,r,n),n};var f=g(i("fExtF")),p=g(i("3LGG3"));function g(e){return e&&e.__esModule?e:{default:e}}var m={};Object.defineProperty(m,"__esModule",{value:!0}),m.default=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n};var y={};Object.defineProperty(y,"__esModule",{value:!0}),y.default=function(e,t){v.default(e,t),t.add(e)};var v=function(e){return e&&e.__esModule?e:{default:e}}(i("7K24o"));const b=["w92","w154","w185","w342","w500","w780","original"],_=[{id:28,name_en:"Action",name_ru:"боевик",name_ua:"Бойовик"},{id:12,name_en:"Adventure",name_ru:"приключения",name_ua:"Пригоди"},{id:16,name_en:"Animation",name_ru:"мультфильм",name_ua:"Мультфільм"},{id:35,name_en:"Comedy",name_ru:"комедия",name_ua:"Комедія"},{id:80,name_en:"Crime",name_ru:"криминал",name_ua:"Кримінал"},{id:99,name_en:"Documentary",name_ru:"документальный",name_ua:"Документальний"},{id:18,name_en:"Drama",name_ru:"драма",name_ua:"Драма"},{id:10751,name_en:"Family",name_ru:"семейный",name_ua:"Сімейний"},{id:14,name_en:"Fantasy",name_ru:"фэнтези",name_ua:"Фентезі"},{id:36,name_en:"History",name_ru:"история",name_ua:"Історичний"},{id:27,name_en:"Horror",name_ru:"ужасы",name_ua:"Жахи"},{id:10402,name_en:"Music",name_ru:"музыка",name_ua:"Музика"},{id:9648,name_en:"Mystery",name_ru:"детектив",name_ua:"Детектив"},{id:10749,name_en:"Romance",name_ru:"мелодрама",name_ua:"Мелодрама"},{id:878,name_en:"Science Fiction",name_ru:"фантастика",name_ua:"Фантастика"},{id:10770,name_en:"TV Movie",name_ru:"телевизионный фильм",name_ua:"Телефільм"},{id:53,name_en:"Thriller",name_ru:"триллер",name_ua:"Трилер"},{id:10752,name_en:"War",name_ru:"военный",name_ua:"Військовий"},{id:37,name_en:"Western",name_ru:"вестерн",name_ua:"Вестерн"}];var w,E,I,T,S={};function O(e,t){return function(){return e.apply(t,arguments)}}w=S,E="default",I=function(){return ne},T=function(e){return ne=e},Object.defineProperty(w,E,{get:I,set:T,enumerable:!0,configurable:!0});const{toString:R}=Object.prototype,{getPrototypeOf:A}=Object,k=(P=Object.create(null),e=>{const t=R.call(e);return P[t]||(P[t]=t.slice(8,-1).toLowerCase())});var P;const C=e=>(e=e.toLowerCase(),t=>k(t)===e),N=e=>t=>typeof t===e,{isArray:L}=Array,x=N("undefined");const M=C("ArrayBuffer");const B=N("string"),D=N("function"),U=N("number"),j=e=>null!==e&&"object"==typeof e,F=e=>{if("object"!==k(e))return!1;const t=A(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},q=C("Date"),$=C("File"),H=C("Blob"),V=C("FileList"),W=C("URLSearchParams");function z(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let r,i;if("object"!=typeof e&&(e=[e]),L(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),s=i.length;let o;for(r=0;r<s;r++)o=i[r],t.call(null,e[o],o,e)}}function J(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,i=n.length;for(;i-- >0;)if(r=n[i],t===r.toLowerCase())return r;return null}const K="undefined"==typeof self?void 0===t?void 0:t:self,G=e=>!x(e)&&e!==K;const X=(Y="undefined"!=typeof Uint8Array&&A(Uint8Array),e=>Y&&e instanceof Y);var Y;const Q=C("HTMLFormElement"),Z=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),ee=C("RegExp"),te=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};z(n,((n,i)=>{!1!==t(n,i,e)&&(r[i]=n)})),Object.defineProperties(e,r)};var ne={isArray:L,isArrayBuffer:M,isBuffer:function(e){return null!==e&&!x(e)&&null!==e.constructor&&!x(e.constructor)&&D(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{const t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||R.call(e)===t||D(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&M(e.buffer),t},isString:B,isNumber:U,isBoolean:e=>!0===e||!1===e,isObject:j,isPlainObject:F,isUndefined:x,isDate:q,isFile:$,isBlob:H,isRegExp:ee,isFunction:D,isStream:e=>j(e)&&D(e.pipe),isURLSearchParams:W,isTypedArray:X,isFileList:V,forEach:z,merge:function e(){const{caseless:t}=G(this)&&this||{},n={},r=(r,i)=>{const s=t&&J(n,i)||i;F(n[s])&&F(r)?n[s]=e(n[s],r):F(r)?n[s]=e({},r):L(r)?n[s]=r.slice():n[s]=r};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&z(arguments[e],r);return n},extend:(e,t,n,{allOwnKeys:r}={})=>(z(t,((t,r)=>{n&&D(t)?e[r]=O(t,n):e[r]=t}),{allOwnKeys:r}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let i,s,o;const a={};if(t=t||{},null==e)return t;do{for(i=Object.getOwnPropertyNames(e),s=i.length;s-- >0;)o=i[s],r&&!r(o,e,t)||a[o]||(t[o]=e[o],a[o]=!0);e=!1!==n&&A(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:k,kindOfTest:C,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(L(e))return e;let t=e.length;if(!U(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:Q,hasOwnProperty:Z,hasOwnProp:Z,reduceDescriptors:te,freezeMethods:e=>{te(e,((t,n)=>{if(D(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];D(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return L(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:J,global:K,isContextDefined:G,toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(j(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const i=L(e)?[]:{};return z(e,((e,t)=>{const s=n(e,r+1);!x(s)&&(i[t]=s)})),t[r]=void 0,i}}return e};return n(e,0)}};function re(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}S.default.inherits(re,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:S.default.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const ie=re.prototype,se={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{se[e]={value:e}})),Object.defineProperties(re,se),Object.defineProperty(ie,"isAxiosError",{value:!0}),re.from=(e,t,n,r,i,s)=>{const o=Object.create(ie);return S.default.toFlatObject(e,o,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),re.call(o,e.message,t,n,r,i),o.cause=e,o.name=e.name,s&&Object.assign(o,s),o};var oe,ae,ue,ce=re,le=e("object"==typeof self?self.FormData:window.FormData);ae=function(e){var t,n,r=be(e),i=r[0],s=r[1],o=new ge(function(e,t,n){return 3*(t+n)/4-n}(0,i,s)),a=0,u=s>0?i-4:i;for(n=0;n<u;n+=4)t=pe[e.charCodeAt(n)]<<18|pe[e.charCodeAt(n+1)]<<12|pe[e.charCodeAt(n+2)]<<6|pe[e.charCodeAt(n+3)],o[a++]=t>>16&255,o[a++]=t>>8&255,o[a++]=255&t;2===s&&(t=pe[e.charCodeAt(n)]<<2|pe[e.charCodeAt(n+1)]>>4,o[a++]=255&t);1===s&&(t=pe[e.charCodeAt(n)]<<10|pe[e.charCodeAt(n+1)]<<4|pe[e.charCodeAt(n+2)]>>2,o[a++]=t>>8&255,o[a++]=255&t);return o},ue=function(e){for(var t,n=e.length,r=n%3,i=[],s=16383,o=0,a=n-r;o<a;o+=s)i.push(_e(e,o,o+s>a?a:o+s));1===r?(t=e[n-1],i.push(fe[t>>2]+fe[t<<4&63]+"==")):2===r&&(t=(e[n-2]<<8)+e[n-1],i.push(fe[t>>10]+fe[t>>4&63]+fe[t<<2&63]+"="));return i.join("")}
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */;for(var he,de,fe=[],pe=[],ge="undefined"!=typeof Uint8Array?Uint8Array:Array,me="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",ye=0,ve=me.length;ye<ve;++ye)fe[ye]=me[ye],pe[me.charCodeAt(ye)]=ye;function be(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");return-1===n&&(n=t),[n,n===t?0:4-n%4]}function _e(e,t,n){for(var r,i,s=[],o=t;o<n;o+=3)r=(e[o]<<16&16711680)+(e[o+1]<<8&65280)+(255&e[o+2]),s.push(fe[(i=r)>>18&63]+fe[i>>12&63]+fe[i>>6&63]+fe[63&i]);return s.join("")}pe["-".charCodeAt(0)]=62,pe["_".charCodeAt(0)]=63,he=function(e,t,n,r,i){var s,o,a=8*i-r-1,u=(1<<a)-1,c=u>>1,l=-7,h=n?i-1:0,d=n?-1:1,f=e[t+h];for(h+=d,s=f&(1<<-l)-1,f>>=-l,l+=a;l>0;s=256*s+e[t+h],h+=d,l-=8);for(o=s&(1<<-l)-1,s>>=-l,l+=r;l>0;o=256*o+e[t+h],h+=d,l-=8);if(0===s)s=1-c;else{if(s===u)return o?NaN:1/0*(f?-1:1);o+=Math.pow(2,r),s-=c}return(f?-1:1)*o*Math.pow(2,s-r)},de=function(e,t,n,r,i,s){var o,a,u,c=8*s-i-1,l=(1<<c)-1,h=l>>1,d=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,f=r?0:s-1,p=r?1:-1,g=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,o=l):(o=Math.floor(Math.log(t)/Math.LN2),t*(u=Math.pow(2,-o))<1&&(o--,u*=2),(t+=o+h>=1?d/u:d*Math.pow(2,1-h))*u>=2&&(o++,u/=2),o+h>=l?(a=0,o=l):o+h>=1?(a=(t*u-1)*Math.pow(2,i),o+=h):(a=t*Math.pow(2,h-1)*Math.pow(2,i),o=0));i>=8;e[n+f]=255&a,f+=p,a/=256,i-=8);for(o=o<<i|a,c+=i;c>0;e[n+f]=255&o,f+=p,o/=256,c-=8);e[n+f-p]|=128*g};const we="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;oe=Ie;function Ee(e){if(e>2147483647)throw new RangeError('The value "'+e+'" is invalid for option "size"');const t=new Uint8Array(e);return Object.setPrototypeOf(t,Ie.prototype),t}function Ie(e,t,n){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return Oe(e)}return Te(e,t,n)}function Te(e,t,n){if("string"==typeof e)return function(e,t){"string"==typeof t&&""!==t||(t="utf8");if(!Ie.isEncoding(t))throw new TypeError("Unknown encoding: "+t);const n=0|Pe(e,t);let r=Ee(n);const i=r.write(e,t);i!==n&&(r=r.slice(0,i));return r}(e,t);if(ArrayBuffer.isView(e))return function(e){if(ct(e,Uint8Array)){const t=new Uint8Array(e);return Ae(t.buffer,t.byteOffset,t.byteLength)}return Re(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(ct(e,ArrayBuffer)||e&&ct(e.buffer,ArrayBuffer))return Ae(e,t,n);if("undefined"!=typeof SharedArrayBuffer&&(ct(e,SharedArrayBuffer)||e&&ct(e.buffer,SharedArrayBuffer)))return Ae(e,t,n);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');const r=e.valueOf&&e.valueOf();if(null!=r&&r!==e)return Ie.from(r,t,n);const i=function(e){if(Ie.isBuffer(e)){const t=0|ke(e.length),n=Ee(t);return 0===n.length||e.copy(n,0,0,t),n}if(void 0!==e.length)return"number"!=typeof e.length||lt(e.length)?Ee(0):Re(e);if("Buffer"===e.type&&Array.isArray(e.data))return Re(e.data)}(e);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return Ie.from(e[Symbol.toPrimitive]("string"),t,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function Se(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function Oe(e){return Se(e),Ee(e<0?0:0|ke(e))}function Re(e){const t=e.length<0?0:0|ke(e.length),n=Ee(t);for(let r=0;r<t;r+=1)n[r]=255&e[r];return n}function Ae(e,t,n){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(n||0))throw new RangeError('"length" is outside of buffer bounds');let r;return r=void 0===t&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,t):new Uint8Array(e,t,n),Object.setPrototypeOf(r,Ie.prototype),r}function ke(e){if(e>=2147483647)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+2147483647..toString(16)+" bytes");return 0|e}function Pe(e,t){if(Ie.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||ct(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);const n=e.length,r=arguments.length>2&&!0===arguments[2];if(!r&&0===n)return 0;let i=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return ot(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return at(e).length;default:if(i)return r?-1:ot(e).length;t=(""+t).toLowerCase(),i=!0}}function Ce(e,t,n){let r=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return Ve(this,t,n);case"utf8":case"utf-8":return qe(this,t,n);case"ascii":return $e(this,t,n);case"latin1":case"binary":return He(this,t,n);case"base64":return Fe(this,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return We(this,t,n);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}function Ne(e,t,n){const r=e[t];e[t]=e[n],e[n]=r}function Le(e,t,n,r,i){if(0===e.length)return-1;if("string"==typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),lt(n=+n)&&(n=i?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(i)return-1;n=e.length-1}else if(n<0){if(!i)return-1;n=0}if("string"==typeof t&&(t=Ie.from(t,r)),Ie.isBuffer(t))return 0===t.length?-1:xe(e,t,n,r,i);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):xe(e,[t],n,r,i);throw new TypeError("val must be string, number or Buffer")}function xe(e,t,n,r,i){let s,o=1,a=e.length,u=t.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(e.length<2||t.length<2)return-1;o=2,a/=2,u/=2,n/=2}function c(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}if(i){let r=-1;for(s=n;s<a;s++)if(c(e,s)===c(t,-1===r?0:s-r)){if(-1===r&&(r=s),s-r+1===u)return r*o}else-1!==r&&(s-=s-r),r=-1}else for(n+u>a&&(n=a-u),s=n;s>=0;s--){let n=!0;for(let r=0;r<u;r++)if(c(e,s+r)!==c(t,r)){n=!1;break}if(n)return s}return-1}function Me(e,t,n,r){n=Number(n)||0;const i=e.length-n;r?(r=Number(r))>i&&(r=i):r=i;const s=t.length;let o;for(r>s/2&&(r=s/2),o=0;o<r;++o){const r=parseInt(t.substr(2*o,2),16);if(lt(r))return o;e[n+o]=r}return o}function Be(e,t,n,r){return ut(ot(t,e.length-n),e,n,r)}function De(e,t,n,r){return ut(function(e){const t=[];for(let n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}(t),e,n,r)}function Ue(e,t,n,r){return ut(at(t),e,n,r)}function je(e,t,n,r){return ut(function(e,t){let n,r,i;const s=[];for(let o=0;o<e.length&&!((t-=2)<0);++o)n=e.charCodeAt(o),r=n>>8,i=n%256,s.push(i),s.push(r);return s}(t,e.length-n),e,n,r)}function Fe(e,t,n){return 0===t&&n===e.length?ue(e):ue(e.slice(t,n))}function qe(e,t,n){n=Math.min(e.length,n);const r=[];let i=t;for(;i<n;){const t=e[i];let s=null,o=t>239?4:t>223?3:t>191?2:1;if(i+o<=n){let n,r,a,u;switch(o){case 1:t<128&&(s=t);break;case 2:n=e[i+1],128==(192&n)&&(u=(31&t)<<6|63&n,u>127&&(s=u));break;case 3:n=e[i+1],r=e[i+2],128==(192&n)&&128==(192&r)&&(u=(15&t)<<12|(63&n)<<6|63&r,u>2047&&(u<55296||u>57343)&&(s=u));break;case 4:n=e[i+1],r=e[i+2],a=e[i+3],128==(192&n)&&128==(192&r)&&128==(192&a)&&(u=(15&t)<<18|(63&n)<<12|(63&r)<<6|63&a,u>65535&&u<1114112&&(s=u))}}null===s?(s=65533,o=1):s>65535&&(s-=65536,r.push(s>>>10&1023|55296),s=56320|1023&s),r.push(s),i+=o}return function(e){const t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e);let n="",r=0;for(;r<t;)n+=String.fromCharCode.apply(String,e.slice(r,r+=4096));return n}(r)}Ie.TYPED_ARRAY_SUPPORT=function(){try{const e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),Ie.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(Ie.prototype,"parent",{enumerable:!0,get:function(){if(Ie.isBuffer(this))return this.buffer}}),Object.defineProperty(Ie.prototype,"offset",{enumerable:!0,get:function(){if(Ie.isBuffer(this))return this.byteOffset}}),Ie.poolSize=8192,Ie.from=function(e,t,n){return Te(e,t,n)},Object.setPrototypeOf(Ie.prototype,Uint8Array.prototype),Object.setPrototypeOf(Ie,Uint8Array),Ie.alloc=function(e,t,n){return function(e,t,n){return Se(e),e<=0?Ee(e):void 0!==t?"string"==typeof n?Ee(e).fill(t,n):Ee(e).fill(t):Ee(e)}(e,t,n)},Ie.allocUnsafe=function(e){return Oe(e)},Ie.allocUnsafeSlow=function(e){return Oe(e)},Ie.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==Ie.prototype},Ie.compare=function(e,t){if(ct(e,Uint8Array)&&(e=Ie.from(e,e.offset,e.byteLength)),ct(t,Uint8Array)&&(t=Ie.from(t,t.offset,t.byteLength)),!Ie.isBuffer(e)||!Ie.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let n=e.length,r=t.length;for(let i=0,s=Math.min(n,r);i<s;++i)if(e[i]!==t[i]){n=e[i],r=t[i];break}return n<r?-1:r<n?1:0},Ie.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},Ie.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return Ie.alloc(0);let n;if(void 0===t)for(t=0,n=0;n<e.length;++n)t+=e[n].length;const r=Ie.allocUnsafe(t);let i=0;for(n=0;n<e.length;++n){let t=e[n];if(ct(t,Uint8Array))i+t.length>r.length?(Ie.isBuffer(t)||(t=Ie.from(t)),t.copy(r,i)):Uint8Array.prototype.set.call(r,t,i);else{if(!Ie.isBuffer(t))throw new TypeError('"list" argument must be an Array of Buffers');t.copy(r,i)}i+=t.length}return r},Ie.byteLength=Pe,Ie.prototype._isBuffer=!0,Ie.prototype.swap16=function(){const e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)Ne(this,t,t+1);return this},Ie.prototype.swap32=function(){const e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)Ne(this,t,t+3),Ne(this,t+1,t+2);return this},Ie.prototype.swap64=function(){const e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)Ne(this,t,t+7),Ne(this,t+1,t+6),Ne(this,t+2,t+5),Ne(this,t+3,t+4);return this},Ie.prototype.toString=function(){const e=this.length;return 0===e?"":0===arguments.length?qe(this,0,e):Ce.apply(this,arguments)},Ie.prototype.toLocaleString=Ie.prototype.toString,Ie.prototype.equals=function(e){if(!Ie.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===Ie.compare(this,e)},Ie.prototype.inspect=function(){let e="";return e=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(e+=" ... "),"<Buffer "+e+">"},we&&(Ie.prototype[we]=Ie.prototype.inspect),Ie.prototype.compare=function(e,t,n,r,i){if(ct(e,Uint8Array)&&(e=Ie.from(e,e.offset,e.byteLength)),!Ie.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===r&&(r=0),void 0===i&&(i=this.length),t<0||n>e.length||r<0||i>this.length)throw new RangeError("out of range index");if(r>=i&&t>=n)return 0;if(r>=i)return-1;if(t>=n)return 1;if(this===e)return 0;let s=(i>>>=0)-(r>>>=0),o=(n>>>=0)-(t>>>=0);const a=Math.min(s,o),u=this.slice(r,i),c=e.slice(t,n);for(let e=0;e<a;++e)if(u[e]!==c[e]){s=u[e],o=c[e];break}return s<o?-1:o<s?1:0},Ie.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},Ie.prototype.indexOf=function(e,t,n){return Le(this,e,t,n,!0)},Ie.prototype.lastIndexOf=function(e,t,n){return Le(this,e,t,n,!1)},Ie.prototype.write=function(e,t,n,r){if(void 0===t)r="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)r=t,n=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(n)?(n>>>=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}const i=this.length-t;if((void 0===n||n>i)&&(n=i),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");let s=!1;for(;;)switch(r){case"hex":return Me(this,e,t,n);case"utf8":case"utf-8":return Be(this,e,t,n);case"ascii":case"latin1":case"binary":return De(this,e,t,n);case"base64":return Ue(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return je(this,e,t,n);default:if(s)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),s=!0}},Ie.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function $e(e,t,n){let r="";n=Math.min(e.length,n);for(let i=t;i<n;++i)r+=String.fromCharCode(127&e[i]);return r}function He(e,t,n){let r="";n=Math.min(e.length,n);for(let i=t;i<n;++i)r+=String.fromCharCode(e[i]);return r}function Ve(e,t,n){const r=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>r)&&(n=r);let i="";for(let r=t;r<n;++r)i+=ht[e[r]];return i}function We(e,t,n){const r=e.slice(t,n);let i="";for(let e=0;e<r.length-1;e+=2)i+=String.fromCharCode(r[e]+256*r[e+1]);return i}function ze(e,t,n){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>n)throw new RangeError("Trying to access beyond buffer length")}function Je(e,t,n,r,i,s){if(!Ie.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<s)throw new RangeError('"value" argument is out of bounds');if(n+r>e.length)throw new RangeError("Index out of range")}function Ke(e,t,n,r,i){nt(t,r,i,e,n,7);let s=Number(t&BigInt(4294967295));e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,n}function Ge(e,t,n,r,i){nt(t,r,i,e,n,7);let s=Number(t&BigInt(4294967295));e[n+7]=s,s>>=8,e[n+6]=s,s>>=8,e[n+5]=s,s>>=8,e[n+4]=s;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[n+3]=o,o>>=8,e[n+2]=o,o>>=8,e[n+1]=o,o>>=8,e[n]=o,n+8}function Xe(e,t,n,r,i,s){if(n+r>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function Ye(e,t,n,r,i){return t=+t,n>>>=0,i||Xe(e,0,n,4),de(e,t,n,r,23,4),n+4}function Qe(e,t,n,r,i){return t=+t,n>>>=0,i||Xe(e,0,n,8),de(e,t,n,r,52,8),n+8}Ie.prototype.slice=function(e,t){const n=this.length;(e=~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),(t=void 0===t?n:~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e);const r=this.subarray(e,t);return Object.setPrototypeOf(r,Ie.prototype),r},Ie.prototype.readUintLE=Ie.prototype.readUIntLE=function(e,t,n){e>>>=0,t>>>=0,n||ze(e,t,this.length);let r=this[e],i=1,s=0;for(;++s<t&&(i*=256);)r+=this[e+s]*i;return r},Ie.prototype.readUintBE=Ie.prototype.readUIntBE=function(e,t,n){e>>>=0,t>>>=0,n||ze(e,t,this.length);let r=this[e+--t],i=1;for(;t>0&&(i*=256);)r+=this[e+--t]*i;return r},Ie.prototype.readUint8=Ie.prototype.readUInt8=function(e,t){return e>>>=0,t||ze(e,1,this.length),this[e]},Ie.prototype.readUint16LE=Ie.prototype.readUInt16LE=function(e,t){return e>>>=0,t||ze(e,2,this.length),this[e]|this[e+1]<<8},Ie.prototype.readUint16BE=Ie.prototype.readUInt16BE=function(e,t){return e>>>=0,t||ze(e,2,this.length),this[e]<<8|this[e+1]},Ie.prototype.readUint32LE=Ie.prototype.readUInt32LE=function(e,t){return e>>>=0,t||ze(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},Ie.prototype.readUint32BE=Ie.prototype.readUInt32BE=function(e,t){return e>>>=0,t||ze(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},Ie.prototype.readBigUInt64LE=dt((function(e){rt(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||it(e,this.length-8);const r=t+256*this[++e]+65536*this[++e]+this[++e]*2**24,i=this[++e]+256*this[++e]+65536*this[++e]+n*2**24;return BigInt(r)+(BigInt(i)<<BigInt(32))})),Ie.prototype.readBigUInt64BE=dt((function(e){rt(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||it(e,this.length-8);const r=t*2**24+65536*this[++e]+256*this[++e]+this[++e],i=this[++e]*2**24+65536*this[++e]+256*this[++e]+n;return(BigInt(r)<<BigInt(32))+BigInt(i)})),Ie.prototype.readIntLE=function(e,t,n){e>>>=0,t>>>=0,n||ze(e,t,this.length);let r=this[e],i=1,s=0;for(;++s<t&&(i*=256);)r+=this[e+s]*i;return i*=128,r>=i&&(r-=Math.pow(2,8*t)),r},Ie.prototype.readIntBE=function(e,t,n){e>>>=0,t>>>=0,n||ze(e,t,this.length);let r=t,i=1,s=this[e+--r];for(;r>0&&(i*=256);)s+=this[e+--r]*i;return i*=128,s>=i&&(s-=Math.pow(2,8*t)),s},Ie.prototype.readInt8=function(e,t){return e>>>=0,t||ze(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},Ie.prototype.readInt16LE=function(e,t){e>>>=0,t||ze(e,2,this.length);const n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},Ie.prototype.readInt16BE=function(e,t){e>>>=0,t||ze(e,2,this.length);const n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},Ie.prototype.readInt32LE=function(e,t){return e>>>=0,t||ze(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},Ie.prototype.readInt32BE=function(e,t){return e>>>=0,t||ze(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},Ie.prototype.readBigInt64LE=dt((function(e){rt(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||it(e,this.length-8);const r=this[e+4]+256*this[e+5]+65536*this[e+6]+(n<<24);return(BigInt(r)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+this[++e]*2**24)})),Ie.prototype.readBigInt64BE=dt((function(e){rt(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||it(e,this.length-8);const r=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(r)<<BigInt(32))+BigInt(this[++e]*2**24+65536*this[++e]+256*this[++e]+n)})),Ie.prototype.readFloatLE=function(e,t){return e>>>=0,t||ze(e,4,this.length),he(this,e,!0,23,4)},Ie.prototype.readFloatBE=function(e,t){return e>>>=0,t||ze(e,4,this.length),he(this,e,!1,23,4)},Ie.prototype.readDoubleLE=function(e,t){return e>>>=0,t||ze(e,8,this.length),he(this,e,!0,52,8)},Ie.prototype.readDoubleBE=function(e,t){return e>>>=0,t||ze(e,8,this.length),he(this,e,!1,52,8)},Ie.prototype.writeUintLE=Ie.prototype.writeUIntLE=function(e,t,n,r){if(e=+e,t>>>=0,n>>>=0,!r){Je(this,e,t,n,Math.pow(2,8*n)-1,0)}let i=1,s=0;for(this[t]=255&e;++s<n&&(i*=256);)this[t+s]=e/i&255;return t+n},Ie.prototype.writeUintBE=Ie.prototype.writeUIntBE=function(e,t,n,r){if(e=+e,t>>>=0,n>>>=0,!r){Je(this,e,t,n,Math.pow(2,8*n)-1,0)}let i=n-1,s=1;for(this[t+i]=255&e;--i>=0&&(s*=256);)this[t+i]=e/s&255;return t+n},Ie.prototype.writeUint8=Ie.prototype.writeUInt8=function(e,t,n){return e=+e,t>>>=0,n||Je(this,e,t,1,255,0),this[t]=255&e,t+1},Ie.prototype.writeUint16LE=Ie.prototype.writeUInt16LE=function(e,t,n){return e=+e,t>>>=0,n||Je(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},Ie.prototype.writeUint16BE=Ie.prototype.writeUInt16BE=function(e,t,n){return e=+e,t>>>=0,n||Je(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},Ie.prototype.writeUint32LE=Ie.prototype.writeUInt32LE=function(e,t,n){return e=+e,t>>>=0,n||Je(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},Ie.prototype.writeUint32BE=Ie.prototype.writeUInt32BE=function(e,t,n){return e=+e,t>>>=0,n||Je(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},Ie.prototype.writeBigUInt64LE=dt((function(e,t=0){return Ke(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),Ie.prototype.writeBigUInt64BE=dt((function(e,t=0){return Ge(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),Ie.prototype.writeIntLE=function(e,t,n,r){if(e=+e,t>>>=0,!r){const r=Math.pow(2,8*n-1);Je(this,e,t,n,r-1,-r)}let i=0,s=1,o=0;for(this[t]=255&e;++i<n&&(s*=256);)e<0&&0===o&&0!==this[t+i-1]&&(o=1),this[t+i]=(e/s>>0)-o&255;return t+n},Ie.prototype.writeIntBE=function(e,t,n,r){if(e=+e,t>>>=0,!r){const r=Math.pow(2,8*n-1);Je(this,e,t,n,r-1,-r)}let i=n-1,s=1,o=0;for(this[t+i]=255&e;--i>=0&&(s*=256);)e<0&&0===o&&0!==this[t+i+1]&&(o=1),this[t+i]=(e/s>>0)-o&255;return t+n},Ie.prototype.writeInt8=function(e,t,n){return e=+e,t>>>=0,n||Je(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},Ie.prototype.writeInt16LE=function(e,t,n){return e=+e,t>>>=0,n||Je(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},Ie.prototype.writeInt16BE=function(e,t,n){return e=+e,t>>>=0,n||Je(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},Ie.prototype.writeInt32LE=function(e,t,n){return e=+e,t>>>=0,n||Je(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},Ie.prototype.writeInt32BE=function(e,t,n){return e=+e,t>>>=0,n||Je(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},Ie.prototype.writeBigInt64LE=dt((function(e,t=0){return Ke(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),Ie.prototype.writeBigInt64BE=dt((function(e,t=0){return Ge(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),Ie.prototype.writeFloatLE=function(e,t,n){return Ye(this,e,t,!0,n)},Ie.prototype.writeFloatBE=function(e,t,n){return Ye(this,e,t,!1,n)},Ie.prototype.writeDoubleLE=function(e,t,n){return Qe(this,e,t,!0,n)},Ie.prototype.writeDoubleBE=function(e,t,n){return Qe(this,e,t,!1,n)},Ie.prototype.copy=function(e,t,n,r){if(!Ie.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),r||0===r||(r=this.length),t>=e.length&&(t=e.length),t||(t=0),r>0&&r<n&&(r=n),r===n)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),e.length-t<r-n&&(r=e.length-t+n);const i=r-n;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,n,r):Uint8Array.prototype.set.call(e,this.subarray(n,r),t),i},Ie.prototype.fill=function(e,t,n,r){if("string"==typeof e){if("string"==typeof t?(r=t,t=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string");if("string"==typeof r&&!Ie.isEncoding(r))throw new TypeError("Unknown encoding: "+r);if(1===e.length){const t=e.charCodeAt(0);("utf8"===r&&t<128||"latin1"===r)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;let i;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(i=t;i<n;++i)this[i]=e;else{const s=Ie.isBuffer(e)?e:Ie.from(e,r),o=s.length;if(0===o)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<n-t;++i)this[i+t]=s[i%o]}return this};const Ze={};function et(e,t,n){Ze[e]=class extends n{get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}}}function tt(e){let t="",n=e.length;const r="-"===e[0]?1:0;for(;n>=r+4;n-=3)t=`_${e.slice(n-3,n)}${t}`;return`${e.slice(0,n)}${t}`}function nt(e,t,n,r,i,s){if(e>n||e<t){const r="bigint"==typeof t?"n":"";let i;throw i=s>3?0===t||t===BigInt(0)?`>= 0${r} and < 2${r} ** ${8*(s+1)}${r}`:`>= -(2${r} ** ${8*(s+1)-1}${r}) and < 2 ** ${8*(s+1)-1}${r}`:`>= ${t}${r} and <= ${n}${r}`,new Ze.ERR_OUT_OF_RANGE("value",i,e)}!function(e,t,n){rt(t,"offset"),void 0!==e[t]&&void 0!==e[t+n]||it(t,e.length-(n+1))}(r,i,s)}function rt(e,t){if("number"!=typeof e)throw new Ze.ERR_INVALID_ARG_TYPE(t,"number",e)}function it(e,t,n){if(Math.floor(e)!==e)throw rt(e,n),new Ze.ERR_OUT_OF_RANGE(n||"offset","an integer",e);if(t<0)throw new Ze.ERR_BUFFER_OUT_OF_BOUNDS;throw new Ze.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${t}`,e)}et("ERR_BUFFER_OUT_OF_BOUNDS",(function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),et("ERR_INVALID_ARG_TYPE",(function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`}),TypeError),et("ERR_OUT_OF_RANGE",(function(e,t,n){let r=`The value of "${e}" is out of range.`,i=n;return Number.isInteger(n)&&Math.abs(n)>2**32?i=tt(String(n)):"bigint"==typeof n&&(i=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(i=tt(i)),i+="n"),r+=` It must be ${t}. Received ${i}`,r}),RangeError);const st=/[^+/0-9A-Za-z-_]/g;function ot(e,t){let n;t=t||1/0;const r=e.length;let i=null;const s=[];for(let o=0;o<r;++o){if(n=e.charCodeAt(o),n>55295&&n<57344){if(!i){if(n>56319){(t-=3)>-1&&s.push(239,191,189);continue}if(o+1===r){(t-=3)>-1&&s.push(239,191,189);continue}i=n;continue}if(n<56320){(t-=3)>-1&&s.push(239,191,189),i=n;continue}n=65536+(i-55296<<10|n-56320)}else i&&(t-=3)>-1&&s.push(239,191,189);if(i=null,n<128){if((t-=1)<0)break;s.push(n)}else if(n<2048){if((t-=2)<0)break;s.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;s.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;s.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return s}function at(e){return ae(function(e){if((e=(e=e.split("=")[0]).trim().replace(st,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function ut(e,t,n,r){let i;for(i=0;i<r&&!(i+n>=t.length||i>=e.length);++i)t[i+n]=e[i];return i}function ct(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function lt(e){return e!=e}const ht=function(){const e="0123456789abcdef",t=new Array(256);for(let n=0;n<16;++n){const r=16*n;for(let i=0;i<16;++i)t[r+i]=e[n]+e[i]}return t}();function dt(e){return"undefined"==typeof BigInt?ft:e}function ft(){throw new Error("BigInt not supported")}var pt=oe;function gt(e){return S.default.isPlainObject(e)||S.default.isArray(e)}function mt(e){return S.default.endsWith(e,"[]")?e.slice(0,-2):e}function yt(e,t,n){return e?e.concat(t).map((function(e,t){return e=mt(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const vt=S.default.toFlatObject(S.default,{},null,(function(e){return/^is[A-Z]/.test(e)}));var bt=function(e,t,n){if(!S.default.isObject(e))throw new TypeError("target must be an object");t=t||new(le||FormData);const r=(n=S.default.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!S.default.isUndefined(t[e])}))).metaTokens,i=n.visitor||l,s=n.dots,o=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&((u=t)&&S.default.isFunction(u.append)&&"FormData"===u[Symbol.toStringTag]&&u[Symbol.iterator]);var u;if(!S.default.isFunction(i))throw new TypeError("visitor must be a function");function c(e){if(null===e)return"";if(S.default.isDate(e))return e.toISOString();if(!a&&S.default.isBlob(e))throw new ce("Blob is not supported. Use a Buffer instead.");return S.default.isArrayBuffer(e)||S.default.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):pt.from(e):e}function l(e,n,i){let a=e;if(e&&!i&&"object"==typeof e)if(S.default.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(S.default.isArray(e)&&function(e){return S.default.isArray(e)&&!e.some(gt)}(e)||S.default.isFileList(e)||S.default.endsWith(n,"[]")&&(a=S.default.toArray(e)))return n=mt(n),a.forEach((function(e,r){!S.default.isUndefined(e)&&null!==e&&t.append(!0===o?yt([n],r,s):null===o?n:n+"[]",c(e))})),!1;return!!gt(e)||(t.append(yt(i,n,s),c(e)),!1)}const h=[],d=Object.assign(vt,{defaultVisitor:l,convertValue:c,isVisitable:gt});if(!S.default.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!S.default.isUndefined(n)){if(-1!==h.indexOf(n))throw Error("Circular reference detected in "+r.join("."));h.push(n),S.default.forEach(n,(function(n,s){!0===(!(S.default.isUndefined(n)||null===n)&&i.call(t,n,S.default.isString(s)?s.trim():s,r,d))&&e(n,r?r.concat(s):[s])})),h.pop()}}(e),t};function _t(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function wt(e,t){this._pairs=[],e&&bt(e,this,t)}const Et=wt.prototype;Et.append=function(e,t){this._pairs.push([e,t])},Et.toString=function(e){const t=e?function(t){return e.call(this,t,_t)}:_t;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var It=wt;function Tt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function St(e,t,n){if(!t)return e;const r=n&&n.encode||Tt,i=n&&n.serialize;let s;if(s=i?i(t,n):S.default.isURLSearchParams(t)?t.toString():new It(t,n).toString(r),s){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}var Ot=class{use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){S.default.forEach(this.handlers,(function(t){null!==t&&e(t)}))}constructor(){this.handlers=[]}},Rt={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},At="undefined"!=typeof URLSearchParams?URLSearchParams:It,kt=FormData;const Pt=(()=>{let e;return("undefined"==typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&("undefined"!=typeof window&&"undefined"!=typeof document)})(),Ct="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts;var Nt={isBrowser:!0,classes:{URLSearchParams:At,FormData:kt,Blob:Blob},isStandardBrowserEnv:Pt,isStandardBrowserWebWorkerEnv:Ct,protocols:["http","https","file","blob","url","data"]};function Lt(e,t){return bt(e,new Nt.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return Nt.isNode&&S.default.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}var xt=function(e){function t(e,n,r,i){let s=e[i++];const o=Number.isFinite(+s),a=i>=e.length;if(s=!s&&S.default.isArray(r)?r.length:s,a)return S.default.hasOwnProp(r,s)?r[s]=[r[s],n]:r[s]=n,!o;r[s]&&S.default.isObject(r[s])||(r[s]=[]);return t(e,n,r[s],i)&&S.default.isArray(r[s])&&(r[s]=function(e){const t={},n=Object.keys(e);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],t[s]=e[s];return t}(r[s])),!o}if(S.default.isFormData(e)&&S.default.isFunction(e.entries)){const n={};return S.default.forEachEntry(e,((e,r)=>{t(function(e){return S.default.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null};const Mt={"Content-Type":void 0};const Bt={transitional:Rt,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,i=S.default.isObject(e);i&&S.default.isHTMLForm(e)&&(e=new FormData(e));if(S.default.isFormData(e))return r&&r?JSON.stringify(xt(e)):e;if(S.default.isArrayBuffer(e)||S.default.isBuffer(e)||S.default.isStream(e)||S.default.isFile(e)||S.default.isBlob(e))return e;if(S.default.isArrayBufferView(e))return e.buffer;if(S.default.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(i){if(n.indexOf("application/x-www-form-urlencoded")>-1)return Lt(e,this.formSerializer).toString();if((s=S.default.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return bt(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return i||r?(t.setContentType("application/json",!1),function(e,t,n){if(S.default.isString(e))try{return(t||JSON.parse)(e),S.default.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||Bt.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(e&&S.default.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(e){if(n){if("SyntaxError"===e.name)throw ce.from(e,ce.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Nt.classes.FormData,Blob:Nt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};S.default.forEach(["delete","get","head"],(function(e){Bt.headers[e]={}})),S.default.forEach(["post","put","patch"],(function(e){Bt.headers[e]=S.default.merge(Mt)}));var Dt=Bt;const Ut=S.default.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var jt=e=>{const t={};let n,r,i;return e&&e.split("\n").forEach((function(e){i=e.indexOf(":"),n=e.substring(0,i).trim().toLowerCase(),r=e.substring(i+1).trim(),!n||t[n]&&Ut[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t};const Ft=Symbol("internals");function qt(e){return e&&String(e).trim().toLowerCase()}function $t(e){return!1===e||null==e?e:S.default.isArray(e)?e.map($t):String(e)}function Ht(e,t,n,r){return S.default.isFunction(r)?r.call(this,t,n):S.default.isString(t)?S.default.isString(r)?-1!==t.indexOf(r):S.default.isRegExp(r)?r.test(t):void 0:void 0}let Vt=Symbol.iterator,Wt=Symbol.toStringTag;class zt{set(e,t,n){const r=this;function i(e,t,n){const i=qt(t);if(!i)throw new Error("header name must be a non-empty string");const s=S.default.findKey(r,i);(!s||void 0===r[s]||!0===n||void 0===n&&!1!==r[s])&&(r[s||t]=$t(e))}const s=(e,t)=>S.default.forEach(e,((e,n)=>i(e,n,t)));return S.default.isPlainObject(e)||e instanceof this.constructor?s(e,t):S.default.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z]+$/.test(e.trim())?s(jt(e),t):null!=e&&i(t,e,n),this}get(e,t){if(e=qt(e)){const n=S.default.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(S.default.isFunction(t))return t.call(this,e,n);if(S.default.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=qt(e)){const n=S.default.findKey(this,e);return!(!n||t&&!Ht(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function i(e){if(e=qt(e)){const i=S.default.findKey(n,e);!i||t&&!Ht(0,n[i],i,t)||(delete n[i],r=!0)}}return S.default.isArray(e)?e.forEach(i):i(e),r}clear(){return Object.keys(this).forEach(this.delete.bind(this))}normalize(e){const t=this,n={};return S.default.forEach(this,((r,i)=>{const s=S.default.findKey(n,i);if(s)return t[s]=$t(r),void delete t[i];const o=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(i):String(i).trim();o!==i&&delete t[i],t[o]=$t(r),n[o]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return S.default.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&S.default.isArray(n)?n.join(", "):n)})),t}[Vt](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Wt](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[Ft]=this[Ft]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=qt(e);t[r]||(!function(e,t){const n=S.default.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,i){return this[r].call(this,t,e,n,i)},configurable:!0})}))}(n,e),t[r]=!0)}return S.default.isArray(e)?e.forEach(r):r(e),this}constructor(e){e&&this.set(e)}}zt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]),S.default.freezeMethods(zt.prototype),S.default.freezeMethods(zt);var Jt=zt;function Kt(e,t){const n=this||Dt,r=t||n,i=Jt.from(r.headers);let s=r.data;return S.default.forEach(e,(function(e){s=e.call(n,s,i.normalize(),t?t.status:void 0)})),i.normalize(),s}function Gt(e){return!(!e||!e.__CANCEL__)}function Xt(e,t,n){ce.call(this,null==e?"canceled":e,ce.ERR_CANCELED,t,n),this.name="CanceledError"}S.default.inherits(Xt,ce,{__CANCEL__:!0});var Yt=Xt;function Qt(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new ce("Request failed with status code "+n.status,[ce.ERR_BAD_REQUEST,ce.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}var Zt=Nt.isStandardBrowserEnv?{write:function(e,t,n,r,i,s){const o=[];o.push(e+"="+encodeURIComponent(t)),S.default.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),S.default.isString(r)&&o.push("path="+r),S.default.isString(i)&&o.push("domain="+i),!0===s&&o.push("secure"),document.cookie=o.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function en(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function tn(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?en(e,t):t}var nn=Nt.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=S.default.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0};function rn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}var sn=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i,s=0,o=0;return t=void 0!==t?t:1e3,function(a){const u=Date.now(),c=r[o];i||(i=u),n[s]=a,r[s]=u;let l=o,h=0;for(;l!==s;)h+=n[l++],l%=e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),u-i<t)return;const d=c&&u-c;return d?Math.round(1e3*h/d):void 0}};function on(e,t){let n=0;const r=sn(50,250);return i=>{const s=i.loaded,o=i.lengthComputable?i.total:void 0,a=s-n,u=r(a);n=s;const c={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:u||void 0,estimated:u&&o&&s<=o?(o-s)/u:void 0,event:i};c[t?"download":"upload"]=!0,e(c)}}const an={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){let r=e.data;const i=Jt.from(e.headers).normalize(),s=e.responseType;let o;function a(){e.cancelToken&&e.cancelToken.unsubscribe(o),e.signal&&e.signal.removeEventListener("abort",o)}S.default.isFormData(r)&&(Nt.isStandardBrowserEnv||Nt.isStandardBrowserWebWorkerEnv)&&i.setContentType(!1);let u=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(t+":"+n))}const c=tn(e.baseURL,e.url);function l(){if(!u)return;const r=Jt.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders());Qt((function(e){t(e),a()}),(function(e){n(e),a()}),{data:s&&"text"!==s&&"json"!==s?u.response:u.responseText,status:u.status,statusText:u.statusText,headers:r,config:e,request:u}),u=null}if(u.open(e.method.toUpperCase(),St(c,e.params,e.paramsSerializer),!0),u.timeout=e.timeout,"onloadend"in u?u.onloadend=l:u.onreadystatechange=function(){u&&4===u.readyState&&(0!==u.status||u.responseURL&&0===u.responseURL.indexOf("file:"))&&setTimeout(l)},u.onabort=function(){u&&(n(new ce("Request aborted",ce.ECONNABORTED,e,u)),u=null)},u.onerror=function(){n(new ce("Network Error",ce.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const r=e.transitional||Rt;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new ce(t,r.clarifyTimeoutError?ce.ETIMEDOUT:ce.ECONNABORTED,e,u)),u=null},Nt.isStandardBrowserEnv){const t=(e.withCredentials||nn(c))&&e.xsrfCookieName&&Zt.read(e.xsrfCookieName);t&&i.set(e.xsrfHeaderName,t)}void 0===r&&i.setContentType(null),"setRequestHeader"in u&&S.default.forEach(i.toJSON(),(function(e,t){u.setRequestHeader(t,e)})),S.default.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),s&&"json"!==s&&(u.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&u.addEventListener("progress",on(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&u.upload&&u.upload.addEventListener("progress",on(e.onUploadProgress)),(e.cancelToken||e.signal)&&(o=t=>{u&&(n(!t||t.type?new Yt(null,e,u):t),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(o),e.signal&&(e.signal.aborted?o():e.signal.addEventListener("abort",o)));const h=rn(c);h&&-1===Nt.protocols.indexOf(h)?n(new ce("Unsupported protocol "+h+":",ce.ERR_BAD_REQUEST,e)):u.send(r||null)}))}};S.default.forEach(an,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));var un={getAdapter:e=>{e=S.default.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let i=0;i<t&&(n=e[i],!(r=S.default.isString(n)?an[n.toLowerCase()]:n));i++);if(!r){if(!1===r)throw new ce(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(S.default.hasOwnProp(an,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!S.default.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:an};function cn(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Yt(null,e)}function ln(e){cn(e),e.headers=Jt.from(e.headers),e.data=Kt.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return un.getAdapter(e.adapter||Dt.adapter)(e).then((function(t){return cn(e),t.data=Kt.call(e,e.transformResponse,t),t.headers=Jt.from(t.headers),t}),(function(t){return Gt(t)||(cn(e),t&&t.response&&(t.response.data=Kt.call(e,e.transformResponse,t.response),t.response.headers=Jt.from(t.response.headers))),Promise.reject(t)}))}const hn=e=>e instanceof Jt?e.toJSON():e;function dn(e,t){t=t||{};const n={};function r(e,t,n){return S.default.isPlainObject(e)&&S.default.isPlainObject(t)?S.default.merge.call({caseless:n},e,t):S.default.isPlainObject(t)?S.default.merge({},t):S.default.isArray(t)?t.slice():t}function i(e,t,n){return S.default.isUndefined(t)?S.default.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function s(e,t){if(!S.default.isUndefined(t))return r(void 0,t)}function o(e,t){return S.default.isUndefined(t)?S.default.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function a(n,i,s){return s in t?r(n,i):s in e?r(void 0,n):void 0}const u={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(e,t)=>i(hn(e),hn(t),!0)};return S.default.forEach(Object.keys(e).concat(Object.keys(t)),(function(r){const s=u[r]||i,o=s(e[r],t[r],r);S.default.isUndefined(o)&&s!==a||(n[r]=o)})),n}const fn={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{fn[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const pn={};fn.transitional=function(e,t,n){function r(e,t){return"[Axios v1.2.1] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,i,s)=>{if(!1===e)throw new ce(r(i," has been removed"+(t?" in "+t:"")),ce.ERR_DEPRECATED);return t&&!pn[i]&&(pn[i]=!0,console.warn(r(i," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,i,s)}};var gn={assertOptions:function(e,t,n){if("object"!=typeof e)throw new ce("options must be an object",ce.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const s=r[i],o=t[s];if(o){const t=e[s],n=void 0===t||o(t,s,e);if(!0!==n)throw new ce("option "+s+" must be "+n,ce.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new ce("Unknown option "+s,ce.ERR_BAD_OPTION)}},validators:fn};const mn=gn.validators;class yn{request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=dn(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:i}=t;let s;void 0!==n&&gn.assertOptions(n,{silentJSONParsing:mn.transitional(mn.boolean),forcedJSONParsing:mn.transitional(mn.boolean),clarifyTimeoutError:mn.transitional(mn.boolean)},!1),void 0!==r&&gn.assertOptions(r,{encode:mn.function,serialize:mn.function},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase(),s=i&&S.default.merge(i.common,i[t.method]),s&&S.default.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete i[e]})),t.headers=Jt.concat(s,i);const o=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,o.unshift(e.fulfilled,e.rejected))}));const u=[];let c;this.interceptors.response.forEach((function(e){u.push(e.fulfilled,e.rejected)}));let l,h=0;if(!a){const e=[ln.bind(this),void 0];for(e.unshift.apply(e,o),e.push.apply(e,u),l=e.length,c=Promise.resolve(t);h<l;)c=c.then(e[h++],e[h++]);return c}l=o.length;let d=t;for(h=0;h<l;){const e=o[h++],t=o[h++];try{d=e(d)}catch(e){t.call(this,e);break}}try{c=ln.call(this,d)}catch(e){return Promise.reject(e)}for(h=0,l=u.length;h<l;)c=c.then(u[h++],u[h++]);return c}getUri(e){return St(tn((e=dn(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}constructor(e){this.defaults=e,this.interceptors={request:new Ot,response:new Ot}}}S.default.forEach(["delete","get","head","options"],(function(e){yn.prototype[e]=function(t,n){return this.request(dn(n||{},{method:e,url:t,data:(n||{}).data}))}})),S.default.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,i){return this.request(dn(i||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}yn.prototype[e]=t(),yn.prototype[e+"Form"]=t(!0)}));var vn=yn;class bn{throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new bn((function(t){e=t})),cancel:e}}constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,i){n.reason||(n.reason=new Yt(e,r,i),t(n.reason))}))}}var _n=bn;const wn=function e(t){const n=new vn(t),r=O(vn.prototype.request,n);return S.default.extend(r,vn.prototype,n,{allOwnKeys:!0}),S.default.extend(r,n,null,{allOwnKeys:!0}),r.create=function(n){return e(dn(t,n))},r}(Dt);wn.Axios=vn,wn.CanceledError=Yt,wn.CancelToken=_n,wn.isCancel=Gt,wn.VERSION="1.2.1",wn.toFormData=bt,wn.AxiosError=ce,wn.Cancel=wn.CanceledError,wn.all=function(e){return Promise.all(e)},wn.spread=function(e){return function(t){return e.apply(null,t)}},wn.isAxiosError=function(e){return S.default.isObject(e)&&!0===e.isAxiosError},wn.mergeConfig=dn,wn.AxiosHeaders=Jt,wn.formToJSON=e=>xt(S.default.isHTMLForm(e)?new FormData(e):e),wn.default=wn;var En=wn;const{Axios:In,AxiosError:Tn,CanceledError:Sn,isCancel:On,CancelToken:Rn,VERSION:An,all:kn,Cancel:Pn,isAxiosError:Cn,spread:Nn,toFormData:Ln,AxiosHeaders:xn,formToJSON:Mn,mergeConfig:Bn}=En;var Dn=new WeakMap,Un=new WeakMap,jn=new WeakMap,Fn=new WeakSet,qn=new WeakSet,$n=new WeakSet;class Hn{preparePosters(e){return b.map((t=>({size:t,path:`https://image.tmdb.org/t/p/${t}${e}`})))}prepareGenres(e){return e.reduce(((e,t)=>{const n=_.find((e=>e.id===t));return n&&e.push(n["name_"+this.language]),e}),[])}getFilmsDataFromRequest(e){return e.map((({id:e,title:t,name:n,poster_path:r,genre_ids:i,release_date:s,first_air_date:o,vote_average:a})=>{const u=this.preparePosters(r),c=this.prepareGenres(i),l=s||(o||""),h=l?l.slice(0,4):"";return new Kn({id:e,title:t||n,posters:u,genres:c,year:h,poster_path:r,vote:a,language:this.language})}))}async getDayPopular(t,n="en"){return this.language=n,e(s)(this,Dn).set("page",t),e(s)(this,Dn).set("language",n),e(m)(this,Fn,Vn).call(this,e(s)(this,Dn),"https://api.themoviedb.org/3/trending/movie/day")}async getSearchQuery(t,n,r="en"){try{this.language=r;encodeURIComponent(t);for(;t.includes(" ");)t=t.replace(" ","%");return e(s)(this,Un).set("query",t),e(s)(this,Un).set("page",n),e(s)(this,Un).set("language",r),e(m)(this,Fn,Vn).call(this,e(s)(this,Un),"https://api.themoviedb.org/3/search/movie?")}catch(e){throw e}}async getById(t,n="en"){try{this.language=n;const r=`https://api.themoviedb.org/3/movie/${t}`;return e(s)(this,jn).set("language",n),e(m)(this,$n,zn).call(this,e(s)(this,jn),r)}catch(e){throw e}}constructor(t="en"){e(y)(this,Fn),e(y)(this,qn),e(y)(this,$n),e(c)(this,Dn,{writable:!0,value:void 0}),e(c)(this,Un,{writable:!0,value:void 0}),e(c)(this,jn,{writable:!0,value:void 0}),e(d)(this,Dn,new URLSearchParams({api_key:"c1b8c874be54ebc5c34c225dbd6a36f5",page:1,language:"en","vote_average.gte":6,include_adult:!1,"vote_average.gte":5,sort_by:"popularity.desc"})),e(d)(this,Un,new URLSearchParams({api_key:"c1b8c874be54ebc5c34c225dbd6a36f5",page:1,language:t,query:"",include_adult:!1,"vote_average.gte":6,sort_by:"popularity.desc"})),e(d)(this,jn,new URLSearchParams({api_key:"c1b8c874be54ebc5c34c225dbd6a36f5"}))}}async function Vn(e,t){try{const n=await En.get(t,{params:e}),r=n.data.total_pages,i=n.data.total_results,s=n.data.results;return{films:this.getFilmsDataFromRequest(s),total_pages:r,total_results:i,sizes:b,base_poster_path:"https://image.tmdb.org/t/p",language:this.language}}catch(e){throw e}}function Wn(e){const t=e.title?e.title:e.original_title,{id:n,genres:r,original_title:i,overview:s,popularity:o,poster_path:a,release_date:u,vote_average:c,vote_count:l}=e,h=s,d=this.preparePosters(a),f=u?u.slice(0,4):"";return new Gn({id:n,title:t,vote:c,votes:l,popularity:o,original_title:i,genres:r,about:h,poster_path:a,posters:d,release_date:f,language:this.language})}async function zn(t,n){try{const r=await En.get(n,{params:t});return e(m)(this,qn,Wn).call(this,r.data)}catch(e){throw e}}var Jn=Hn;class Kn{preparePosters(e){return b.map((t=>({size:t,path:`https://image.tmdb.org/t/p/${t}/${e}`})))}constructor({id:e,title:t,genres:n,year:r,poster_path:i,vote:s,language:o="en"}){this.id=e,this.title=t,this.poster_path=i,this.year=r,this.vote=s.toFixed(2),this.genres=n,this.language=o,this.posters=this.preparePosters(i)}}class Gn{constructor({id:e,title:t,vote:n,votes:r,popularity:i,original_title:s,genres:o,about:a,poster_path:u,posters:c,release_date:l,language:h}){this.id=e,this.title=t,this.vote=n,this.votes=r,this.popularity=i,this.original_title=s,this.genres=o,this.about=a,this.poster_path=u,this.posters=c,this.release_date=l,this.language=h}}function Xn(){return{gallery:document.querySelector(".gallery"),search:document.getElementById("search-form"),mBtnToQueue:document.querySelector(".add-to-queue-btn"),nBtnToWatched:document.querySelector(".add-to-watched-btn"),filmoteka:document.querySelector(".header__logo"),modal:document.querySelector("[data-modal-film]"),modalFilmWrapper:document.querySelector("#data-modal-film-wrapper"),closeModalBtn:document.querySelector("[data-modal-close]"),spinner:document.querySelector(".loader"),buttonUp:document.querySelector(".up-button"),message:document.querySelector(".failure-message"),searchError:document.querySelector(".search-error"),emptyLibraryError:document.querySelector(".empty-library-error"),autofocusBtn:document.querySelector(".input-autofocus-btn"),home:document.getElementById("home"),library:document.getElementById("library"),input:document.querySelector(".header__input"),modeButton:document.querySelector(".toggle-theme-btn"),moon:document.querySelector(".moon"),sun:document.querySelector(".sun"),loginModal:document.querySelector(".modallogin"),regModal:document.querySelector(".modalreg"),loginForm:document.querySelector(".login-form"),regForm:document.querySelector(".reg-form"),loginFormBtn:document.querySelector(".logbtn"),regFormBtn:document.querySelector(".regbtn"),tuiContainer:document.getElementById("tui-pagination-container"),galleryPosterTitle:document.querySelector(".gallery-poster-title"),signOut:document.querySelector("#signout"),signUp:document.querySelector("#signup"),signIn:document.querySelector("#signin"),userIcon:document.querySelector("#usericon")}}var Yn,Qn={};
/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */window,Yn=function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="dist",n(n.s=10)}([function(e,t,n){e.exports=function(e,t){var n,r,i,s,o=Object.prototype.hasOwnProperty;for(i=1,s=arguments.length;i<s;i+=1)for(r in n=arguments[i])o.call(n,r)&&(e[r]=n[r]);return e}},function(e,t,n){e.exports=function(e){return void 0===e}},function(e,t,n){e.exports=function(e){return e instanceof Array}},function(e,t,n){var r=n(2),i=n(17),s=n(6);e.exports=function(e,t,n){r(e)?i(e,t,n):s(e,t,n)}},function(e,t,n){e.exports=function(e){return"string"==typeof e||e instanceof String}},function(e,t,n){e.exports=function(e){return e instanceof Function}},function(e,t,n){e.exports=function(e,t,n){var r;for(r in n=n||null,e)if(e.hasOwnProperty(r)&&!1===t.call(n,e[r],r,e))break}},function(e,t,n){var r=n(18),i=n(0);e.exports=function(e,t){var n;return t||(t=e,e=null),n=t.init||function(){},e&&r(n,e),t.hasOwnProperty("static")&&(i(n,t.static),delete t.static),i(n.prototype,t),n}},function(e,t,n){var r=n(2);e.exports=function(e,t,n){var i,s;if(n=n||0,!r(t))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(t,e,n);for(s=t.length,i=n;n>=0&&i<s;i+=1)if(t[i]===e)return i;return-1}},function(e,t,n){var r=n(29),i=n(30),s=n(5),o={capitalizeFirstLetter:function(e){return e.substring(0,1).toUpperCase()+e.substring(1,e.length)},isContained:function(e,t){return!!t&&(e===t||t.contains(e))},createElementByTemplate:function(e,t){var n=document.createElement("div"),i=s(e)?e(t):r(e,t);return n.innerHTML=i,n.firstChild},bind:function(e,t){var n,r=Array.prototype.slice;return e.bind?e.bind.apply(e,r.call(arguments,1)):(n=r.call(arguments,2),function(){return e.apply(t,n.length?n.concat(r.call(arguments)):arguments)})},sendHostName:function(){i("pagination","UA-129987462-1")}};e.exports=o},function(e,t,n){n(11),e.exports=n(12)},function(e,t,n){},function(e,t,n){var r=n(13),i=n(7),s=n(0),o=n(1),a=n(20),u=n(9),c={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},l=i({init:function(e,t){this._options=s({},c,t),this._currentPage=0,this._view=new a(e,this._options,u.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&u.sendHostName()},_setCurrentPage:function(e){this._currentPage=e||this._options.page},_getLastPage:function(){var e=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return e||1},_getPageIndex:function(e){var t;return this._options.centerAlign?(t=e-Math.floor(this._options.visiblePages/2),t=Math.max(t,1),t=Math.min(t,this._getLastPage()-this._options.visiblePages+1)):Math.ceil(e/this._options.visiblePages)},_getRelativePage:function(e){var t="prev"===e,n=this.getCurrentPage();return t?n-1:n+1},_getMorePageIndex:function(e){var t=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,r="prev"===e;return this._options.centerAlign?r?t-1:t+n:r?(t-1)*n:t*n+1},_convertToValidPage:function(e){var t=this._getLastPage();return e=Math.max(e,1),e=Math.min(e,t)},_paginate:function(e){var t=this._makeViewData(e||this._options.page);this._setCurrentPage(e),this._view.update(t)},_makeViewData:function(e){var t={},n=this._getLastPage(),r=this._getPageIndex(e),i=this._getPageIndex(n),s=this._getEdge(e);return t.leftPageNumber=s.left,t.rightPageNumber=s.right,t.prevMore=r>1,t.nextMore=r<i,t.page=e,t.currentPageIndex=e,t.lastPage=n,t.lastPageListIndex=n,t},_getEdge:function(e){var t,n,r,i=this._getLastPage(),s=this._options.visiblePages,o=this._getPageIndex(e);return this._options.centerAlign?(r=Math.floor(s/2),(n=(t=Math.max(e-r,1))+s-1)>i&&(t=Math.max(i-s+1,1),n=i)):(t=(o-1)*s+1,n=o*s,n=Math.min(n,i)),{left:t,right:n}},_onClickHandler:function(e,t){switch(e){case"first":t=1;break;case"prev":t=this._getRelativePage("prev");break;case"next":t=this._getRelativePage("next");break;case"prevMore":t=this._getMorePageIndex("prev");break;case"nextMore":t=this._getMorePageIndex("next");break;case"last":t=this._getLastPage();break;default:if(!t)return}this.movePageTo(t)},reset:function(e){o(e)&&(e=this._options.totalItems),this._options.totalItems=e,this._paginate(1)},movePageTo:function(e){e=this._convertToValidPage(e),this.invoke("beforeMove",{page:e})&&(this._paginate(e),this.fire("afterMove",{page:e}))},setTotalItems:function(e){this._options.totalItems=e},setItemsPerPage:function(e){this._options.itemsPerPage=e},getCurrentPage:function(){return this._currentPage||this._options.page}});r.mixin(l),e.exports=l},function(e,t,n){var r=n(0),i=n(14),s=n(4),o=n(16),a=n(2),u=n(5),c=n(3),l=/\s+/g;function h(){this.events=null,this.contexts=null}h.mixin=function(e){r(e.prototype,h.prototype)},h.prototype._getHandlerItem=function(e,t){var n={handler:e};return t&&(n.context=t),n},h.prototype._safeEvent=function(e){var t,n=this.events;return n||(n=this.events={}),e&&((t=n[e])||(t=[],n[e]=t),n=t),n},h.prototype._safeContext=function(){var e=this.contexts;return e||(e=this.contexts=[]),e},h.prototype._indexOfContext=function(e){for(var t=this._safeContext(),n=0;t[n];){if(e===t[n][0])return n;n+=1}return-1},h.prototype._memorizeContext=function(e){var t,n;i(e)&&(t=this._safeContext(),(n=this._indexOfContext(e))>-1?t[n][1]+=1:t.push([e,1]))},h.prototype._forgetContext=function(e){var t,n;i(e)&&(t=this._safeContext(),(n=this._indexOfContext(e))>-1&&(t[n][1]-=1,t[n][1]<=0&&t.splice(n,1)))},h.prototype._bindEvent=function(e,t,n){var r=this._safeEvent(e);this._memorizeContext(n),r.push(this._getHandlerItem(t,n))},h.prototype.on=function(e,t,n){var r=this;s(e)?(e=e.split(l),c(e,(function(e){r._bindEvent(e,t,n)}))):o(e)&&(n=t,c(e,(function(e,t){r.on(t,e,n)})))},h.prototype.once=function(e,t,n){var r=this;if(o(e))return n=t,void c(e,(function(e,t){r.once(t,e,n)}));this.on(e,(function i(){t.apply(n,arguments),r.off(e,i,n)}),n)},h.prototype._spliceMatches=function(e,t){var n,r=0;if(a(e))for(n=e.length;r<n;r+=1)!0===t(e[r])&&(e.splice(r,1),n-=1,r-=1)},h.prototype._matchHandler=function(e){var t=this;return function(n){var r=e===n.handler;return r&&t._forgetContext(n.context),r}},h.prototype._matchContext=function(e){var t=this;return function(n){var r=e===n.context;return r&&t._forgetContext(n.context),r}},h.prototype._matchHandlerAndContext=function(e,t){var n=this;return function(r){var i=e===r.handler,s=t===r.context,o=i&&s;return o&&n._forgetContext(r.context),o}},h.prototype._offByEventName=function(e,t){var n=this,r=u(t),i=n._matchHandler(t);e=e.split(l),c(e,(function(e){var t=n._safeEvent(e);r?n._spliceMatches(t,i):(c(t,(function(e){n._forgetContext(e.context)})),n.events[e]=[])}))},h.prototype._offByHandler=function(e){var t=this,n=this._matchHandler(e);c(this._safeEvent(),(function(e){t._spliceMatches(e,n)}))},h.prototype._offByObject=function(e,t){var n,r=this;this._indexOfContext(e)<0?c(e,(function(e,t){r.off(t,e)})):s(t)?(n=this._matchContext(e),r._spliceMatches(this._safeEvent(t),n)):u(t)?(n=this._matchHandlerAndContext(t,e),c(this._safeEvent(),(function(e){r._spliceMatches(e,n)}))):(n=this._matchContext(e),c(this._safeEvent(),(function(e){r._spliceMatches(e,n)})))},h.prototype.off=function(e,t){s(e)?this._offByEventName(e,t):arguments.length?u(e)?this._offByHandler(e):o(e)&&this._offByObject(e,t):(this.events={},this.contexts=[])},h.prototype.fire=function(e){this.invoke.apply(this,arguments)},h.prototype.invoke=function(e){var t,n,r,i;if(!this.hasListener(e))return!0;for(t=this._safeEvent(e),n=Array.prototype.slice.call(arguments,1),r=0;t[r];){if(!1===(i=t[r]).handler.apply(i.context,n))return!1;r+=1}return!0},h.prototype.hasListener=function(e){return this.getListenerLength(e)>0},h.prototype.getListenerLength=function(e){return this._safeEvent(e).length},e.exports=h},function(e,t,n){var r=n(1),i=n(15);e.exports=function(e){return!r(e)&&!i(e)}},function(e,t,n){e.exports=function(e){return null===e}},function(e,t,n){e.exports=function(e){return e===Object(e)}},function(e,t,n){e.exports=function(e,t,n){var r=0,i=e.length;for(n=n||null;r<i&&!1!==t.call(n,e[r],r,e);r+=1);}},function(e,t,n){var r=n(19);e.exports=function(e,t){var n=r(t.prototype);n.constructor=e,e.prototype=n}},function(e,t,n){e.exports=function(e){function t(){}return t.prototype=e,new t}},function(e,t,n){var r=n(3),i=n(7),s=n(21),o=n(22),a=n(24),u=n(25),c=n(0),l=n(4),h=n(28),d=n(9),f={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},p=["first","prev","next","last"],g=["prev","next"],m=i({init:function(e,t,n){this._containerElement=null,this._firstItemClassName=t.firstItemClassName,this._lastItemClassName=t.lastItemClassName,this._template=c({},f,t.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(e),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(e){if(l(e)?e=document.getElementById(e)||document.querySelector(e):e.jquery&&(e=e[0]),!h(e))throw new Error("The container element is invalid.");this._containerElement=e},_setMoveButtons:function(){r(p,(function(e){this._buttons[e]=d.createElementByTemplate(this._template.moveButton,{type:e})}),this)},_setDisabledMoveButtons:function(){r(p,(function(e){var t="disabled"+d.capitalizeFirstLetter(e);this._buttons[t]=d.createElementByTemplate(this._template.disabledMoveButton,{type:e})}),this)},_setMoreButtons:function(){r(g,(function(e){var t=e+"More";this._buttons[t]=d.createElementByTemplate(this._template.moreButton,{type:e})}),this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(e){var t;t=e.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(t)},_appendPrevButton:function(e){var t;t=e.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(t)},_appendNextButton:function(e){var t;t=e.currentPageIndex<e.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(t)},_appendLastButton:function(e){var t;t=e.page<e.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(t)},_appendPrevMoreButton:function(e){var t;e.prevMore&&(t=this._buttons.prevMore,u(t,this._firstItemClassName),this._getContainerElement().appendChild(t))},_appendNextMoreButton:function(e){var t;e.nextMore&&(t=this._buttons.nextMore,u(t,this._lastItemClassName),this._getContainerElement().appendChild(t))},_appendPages:function(e){var t,n,r=e.leftPageNumber,i=e.rightPageNumber;for(n=r;n<=i;n+=1)n===e.page?t=d.createElementByTemplate(this._template.currentPage,{page:n}):(t=d.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(t)),n!==r||e.prevMore||u(t,this._firstItemClassName),n!==i||e.nextMore||u(t,this._lastItemClassName),this._getContainerElement().appendChild(t)},_attachClickEvent:function(e){var t=this._getContainerElement();o(t,"click",(function(t){var n,r,i=s(t);a(t),(r=this._getButtonType(i))||(n=this._getPageNumber(i)),e(r,n)}),this)},_getButtonType:function(e){var t,n=this._buttons;return r(n,(function(n,r){return!d.isContained(e,n)||(t=r,!1)}),this),t},_getPageNumber:function(e){var t,n=this._findPageElement(e);return n&&(t=parseInt(n.innerText,10)),t},_findPageElement:function(e){for(var t,n=0,r=this._enabledPageElements.length;n<r;n+=1)if(t=this._enabledPageElements[n],d.isContained(e,t))return t;return null},_empty:function(){this._enabledPageElements=[],r(this._buttons,(function(e,t){this._buttons[t]=e.cloneNode(!0)}),this),this._getContainerElement().innerHTML=""},update:function(e){this._empty(),this._appendFirstButton(e),this._appendPrevButton(e),this._appendPrevMoreButton(e),this._appendPages(e),this._appendNextMoreButton(e),this._appendNextButton(e),this._appendLastButton(e)}});e.exports=m},function(e,t,n){e.exports=function(e){return e.target||e.srcElement}},function(e,t,n){var r=n(4),i=n(3),s=n(23);function o(e,t,n,r){function o(t){n.call(r||e,t||window.event)}"addEventListener"in e?e.addEventListener(t,o):"attachEvent"in e&&e.attachEvent("on"+t,o),function(e,t,n,r){var o=s(e,t),a=!1;i(o,(function(e){return e.handler!==n||(a=!0,!1)})),a||o.push({handler:n,wrappedHandler:r})}(e,t,n,o)}e.exports=function(e,t,n,s){r(t)?i(t.split(/\s+/g),(function(t){o(e,t,n,s)})):i(t,(function(t,r){o(e,r,t,n)}))}},function(e,t,n){var r="_feEventKey";e.exports=function(e,t){var n,i=e[r];return i||(i=e[r]={}),(n=i[t])||(n=i[t]=[]),n}},function(e,t,n){e.exports=function(e){e.preventDefault?e.preventDefault():e.returnValue=!1}},function(e,t,n){var r=n(3),i=n(8),s=n(26),o=n(27);e.exports=function(e){var t,n=Array.prototype.slice.call(arguments,1),a=e.classList,u=[];a?r(n,(function(t){e.classList.add(t)})):((t=s(e))&&(n=[].concat(t.split(/\s+/),n)),r(n,(function(e){i(e,u)<0&&u.push(e)})),o(e,u))}},function(e,t,n){var r=n(1);e.exports=function(e){return e&&e.className?r(e.className.baseVal)?e.className:e.className.baseVal:""}},function(e,t,n){var r=n(2),i=n(1);e.exports=function(e,t){t=(t=r(t)?t.join(" "):t).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),i(e.className.baseVal)?e.className=t:e.className.baseVal=t}},function(e,t,n){e.exports=function(e){return"object"==typeof HTMLElement?e&&(e instanceof HTMLElement||!!e.nodeType):!(!e||!e.nodeType)}},function(e,t,n){var r=n(8),i=n(3),s=n(2),o=n(4),a=n(0),u=/{{\s?|\s?}}/g,c=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,l=/\[\s?|\s?\]/,h=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,d=/\./,f=/^["']\w+["']$/,p=/"|'/g,g=/^-?\d+\.?\d*$/,m={if:function(e,t,n){var r=function(e,t){var n=[e],r=[],s=0,o=0;return i(t,(function(e,i){0===e.indexOf("if")?s+=1:"/if"===e?s-=1:s||0!==e.indexOf("elseif")&&"else"!==e||(n.push("else"===e?["true"]:e.split(" ").slice(1)),r.push(t.slice(o,i)),o=i+1)})),r.push(t.slice(o)),{exps:n,sourcesInsideIf:r}}(e,t),s=!1,o="";return i(r.exps,(function(e,t){return(s=_(e,n))&&(o=w(r.sourcesInsideIf[t],n)),!s})),o},each:function(e,t,n){var r=_(e,n),o=s(r)?"@index":"@key",u={},c="";return i(r,(function(e,r){u[o]=r,u["@this"]=e,a(n,u),c+=w(t.slice(),n)})),c},with:function(e,t,n){var i=r("as",e),s=e[i+1],o=_(e.slice(0,i),n),u={};return u[s]=o,w(t,a(n,u))||""}},y=3==="a".split(/a/).length?function(e,t){return e.split(t)}:function(e,t){var n,r,i=[],s=0;for(t.global||(t=new RegExp(t,"g")),n=t.exec(e);null!==n;)r=n.index,i.push(e.slice(s,r)),s=r+n[0].length,n=t.exec(e);return i.push(e.slice(s)),i};function v(e,t){var n,r=t[e];return"true"===e?r=!0:"false"===e?r=!1:f.test(e)?r=e.replace(p,""):c.test(e)?r=v((n=e.split(l))[0],t)[v(n[1],t)]:h.test(e)?r=v((n=e.split(d))[0],t)[n[1]]:g.test(e)&&(r=parseFloat(e)),r}function b(e,t,n){for(var r,i,s,a,u=m[e],c=1,l=2,h=t[l];c&&o(h);)0===h.indexOf(e)?c+=1:0===h.indexOf("/"+e)&&(c-=1,r=l),h=t[l+=2];if(c)throw Error(e+" needs {{/"+e+"}} expression.");return t[0]=u(t[0].split(" ").slice(1),(i=0,s=r,(a=t.splice(i+1,s-i)).pop(),a),n),t}function _(e,t){var n=v(e[0],t);return n instanceof Function?function(e,t,n){var r=[];return i(t,(function(e){r.push(v(e,n))})),e.apply(null,r)}(n,e.slice(1),t):n}function w(e,t){for(var n,r,i,s=1,a=e[s];o(a);)r=(n=a.split(" "))[0],m[r]?(i=b(r,e.splice(s,e.length-s),t),e=e.concat(i)):e[s]=_(n,t),a=e[s+=2];return e.join("")}e.exports=function(e,t){return w(y(e,u),t)}},function(e,t,n){var r=n(1),i=n(31);e.exports=function(e,t){var n=location.hostname,s="TOAST UI "+e+" for "+n+": Statistics",o=window.localStorage.getItem(s);(r(window.tui)||!1!==window.tui.usageStatistics)&&(o&&!function(e){return(new Date).getTime()-e>6048e5}(o)||(window.localStorage.setItem(s,(new Date).getTime()),setTimeout((function(){"interactive"!==document.readyState&&"complete"!==document.readyState||i("https://www.google-analytics.com/collect",{v:1,t:"event",tid:t,cid:n,dp:n,dh:e,el:e,ec:"use"})}),1e3)))}},function(e,t,n){var r=n(6);e.exports=function(e,t){var n=document.createElement("img"),i="";return r(t,(function(e,t){i+="&"+t+"="+e})),i=i.substring(1),n.src=e+"?"+i,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}])},Qn=Yn();const Zn=Xn();function er(t){const n={totalItems:t,itemsPerPage:20,visiblePages:5,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};new(e(Qn))(Zn.tuiContainer,n)}const tr=Xn(),nr=new Jn;function rr(e,t,n){e.insertAdjacentHTML("beforeend",t.map(n).join(""))}function ir({id:e,posters:t,title:n,genres:r,year:i,vote:s}){if("https://image.tmdb.org/t/p/w342/null"!==t[3].path&&"https://image.tmdb.org/t/p/w500/null"!==t[4].path&&"https://image.tmdb.org/t/p/w780/null"!==t[5].path&&r.length>0){const o=r.join(", "),a=o[0].toUpperCase(),u=o.replaceAt(0,a);return`\n    <div class="gallery-poster-box">\n    <div class="gallery-poster">\n    <picture>\n          <source\n            srcset="\n              ${t[4].path} 1x,\n              ${t[5].path} 2x\n            "\n            media="(min-width: 1200px)"\n          />\n          <source\n            srcset="\n              ${t[3].path} 1x,\n              ${t[4].path} 2x\n            "\n            media="(min-width: 768px)"\n          />\n          <source\n            srcset="\n              ${t[3].path} 1x,\n              ${t[4].path} 2x\n            "\n            media="(max-width: 767px)"\n          />\n          <img\n            class="gallery-poster-img"\n            src="${t[3].path}"\n            alt="${n}"\n            data-id=${e}\n            loading="lazy"\n          />\n    </picture>\n    </div>\n    <h2 class="gallery-poster-title">${n}</h2>\n    <div class="gallery-poster-description">\n      <p class="gallery-poster-text">${u}\n        <span class="date-befor">${i}</span>\n        <div class="film-rating-wrapper">\n      <p class="film-rating">${s}</p>\n        </div>\n      </p>\n    </div>\n    </div>\n    `}}String.prototype.replaceAt=function(e,t){return this.substr(0,e)+t+this.substr(e+t.length)};const sr=Xn();function or(){sr.spinner.classList.remove("visually-hidden")}function ar(){sr.spinner.classList.add("visually-hidden")}const ur=Xn();function cr(){ur.searchError.classList.remove("no-display")}const lr=Xn(),hr=new class{async getFilmsPopular(){try{const e=await nr.getDayPopular(this.nextPage);this.totalResults=e.total_results,er(this.totalResults);return e.films.map((({id:e,posters:t,title:n,genres:r,year:i,vote:s})=>({id:e,posters:t,title:n,genres:r,year:i,vote:s})))}catch(e){console.log(e)}}async getFilms(){try{const e=await nr.getSearchQuery(this.userRequest,this.nextPage);this.totalResults=e.total_results,er(this.totalResults);return e.films.map((({id:e,posters:t,title:n,genres:r,year:i,vote:s})=>({id:e,posters:t,title:n,genres:r,year:i,vote:s})))}catch(e){console.log(e)}}async getFilmsPopularRestart(e){try{const t=await nr.getDayPopular(e);this.totalResults=t.total_results,er(this.totalResults);return t.films.map((({id:e,posters:t,title:n,genres:r,year:i,vote:s})=>({id:e,posters:t,title:n,genres:r,year:i,vote:s})))}catch(e){console.log(e)}}async getFilmsRestart(e,t){try{const n=await nr.getSearchQuery(e,t);this.totalResults=n.total_results,er(this.totalResults);return n.films.map((({id:e,posters:t,title:n,genres:r,year:i,vote:s})=>({id:e,posters:t,title:n,genres:r,year:i,vote:s})))}catch(e){console.log(e)}}reset(){this.nextPage=1,this.currentPage=0,tr.gallery.innerHTML=""}incrementPage(){this.nextPage+=1,this.currentPage+=1}get request(){return this.userRequest}set request(e){this.userRequest=e}constructor(){this.userRequest="",this.nextPage=1,this.currentPage=0,this.totalResults=0}},dr=new class{save(e,t){try{const n=JSON.stringify(t);sessionStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}}get(e){try{const t=sessionStorage.getItem(e);return JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}}load(e){try{const t=sessionStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}}remove(e){try{sessionStorage.removeItem(e)}catch(e){console.error("Get state error: ",e.message)}}clear(){try{sessionStorage.clear()}catch(e){console.error("Get state error: ",e.message)}}constructor(){}};document.querySelector(".tui-pagination").addEventListener("click",(function(e){fr.firstOupen=!1,dr.save("userSettings",fr),fr=dr.get("userSettings"),hr.currentPage=fr.page,hr.userRequest=fr.request,hr.nextPage=fr.page+1,lr.gallery.innerHTML="",""===hr.userRequest?pr():hr.userRequest&&(or(),hr.getFilms().then((e=>{0===e.length&&(ar(),hr.reset(),lr.message.classList.remove("visually-hidden"),cr(),dr.clear()),e.length>0&&(gr(e),ar(),rr(lr.gallery,e,ir),hr.incrementPage(),fr.page=hr.currentPage,fr.request=hr.userRequest,dr.save("userSettings",fr))})))})),console.log(document.location.pathname),document.addEventListener("DOMContentLoaded",(function(e){fr=dr.get("userSettings"),hr.currentPage=fr.page,hr.request=fr.request,""===fr.request&&fr.page>0&&!fr.firstOupen&&(lr.gallery.innerHTML="",or(),hr.getFilmsPopularRestart(fr.page).then((e=>{gr(e),ar(),rr(lr.gallery,e,ir)})));fr.firstOupen=!1,dr.save("userSettings",fr),fr.request&&fr.page>0&&(lr.gallery.innerHTML="",or(),hr.getFilmsRestart(fr.request,fr.page).then((e=>{gr(e),ar(),rr(lr.gallery,e,ir)})))}));let fr={page:hr.currentPage,request:hr.userRequest,firstOupen:!1};function pr(){lr.gallery.innerHTML="",or(),hr.getFilmsPopular().then((e=>{gr(e),ar(),rr(lr.gallery,e,ir)})),hr.incrementPage(),fr.page=hr.currentPage,fr.request=hr.userRequest,dr.save("userSettings",fr)}function gr(e){return e.forEach((e=>{e.genres.length>2&&(e.genres=[e.genres[0],e.genres[1],"Other"])}))}void 0===dr.load("userSettings")&&(pr(),fr.firstOupen=!0,dr.save("userSettings",fr));({el:Xn().buttonUp,show(){this.el.classList.remove("up-button_hiden")},hide(){this.el.classList.add("up-button_hiden")},addEventListener(){window.addEventListener("scroll",(()=>{(window.scrollY||document.documentElement.scrollTop)>700?this.show():this.hide()})),document.querySelector(".up-button").onclick=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})}}}).addEventListener();const mr=Xn();function yr(){return mr.modalFilmWrapper.innerHTML='<div class="error-img-thumb">\n    <img\n      class="movie-poster"\n      src="/src/images/error-images/search-error-min.png"\n      alt="Error"\n      loading="lazy"\n    />\n  </div>\n\n  <p class="error-text">\n    Oops... <br />\n    The page you requested could not be found...\n  </p>'}const vr=Xn(),br=new Jn;!function(){function e(){document.body.classList.toggle("modal-open"),vr.modal.classList.toggle("is_hidden")}function t(n){"Escape"===n.key&&(e(),document.removeEventListener("keydown",t),vr.modalFilmWrapper.innerHTML="")}function n(t){t.target===t.currentTarget&&(e(),vr.modal.removeEventListener("click",n),vr.modalFilmWrapper.innerHTML="")}vr.gallery.addEventListener("click",(function(r){if(r.target===r.currentTarget)return;vr.modalFilmWrapper.innerHTML="",document.addEventListener("keydown",t),vr.modal.addEventListener("click",n),e(),br.getById(r.target.dataset.id).then((e=>{var t,n;console.log(e),t=vr.modalFilmWrapper,n=function({title:e,vote:t,votes:n,popularity:r,original_title:i,genres:s,about:o,poster_path:a,posters:u,year:c}){const l=s.map((e=>e.name)).join(", ");return`<div class="modal-container">\n      <div class="poster-thumb">\n        <picture>\n            <source\n            srcset="\n            ${u[4].path} 1x,\n            ${u[5].path} 2x\n            "\n            media="(min-width: 1200px)"\n          />\n            <source\n            srcset="\n            ${u[3].path} 1x,\n            ${u[4].path} 2x\n            "\n            media="(min-width: 768px)"\n          />\n            <source\n            srcset="\n            ${u[3].path} 1x,\n            ${u[4].path} 2x\n            "\n            media="(max-width: 767px)"\n          />\n\n          <img\n            class="movie-poster"\n            src="${u[3].path}"\n            alt="${e}"\n\n            loading="lazy"\n          />\n        </picture>\n      </div>\n\n      <div>\n        <table class="info">\n          <caption class="movie-title">\n          ${e.toUpperCase()}\n          </caption>\n          <tbody>\n            <tr class="table-row">\n              <td class="td">\n                <p class="characteristic">Vote / Votes</p>\n              </td>\n              <td class="description">\n                <span class="vote">${t} </span> &nbsp;\n                <span class="characteristic">/</span> ${n}\n              </td>\n            </tr>\n            <tr class="table-row">\n              <td class="td">\n                <p class="characteristic">Popularity</p>\n              </td>\n              <td class="description">${r}</td>\n            </tr>\n            <tr class="table-row">\n              <td class="td">\n                <p class="characteristic">Original Title</p>\n              </td>\n              <td class="description">${i.toUpperCase()}</td>\n            </tr>\n            <tr class="table-row">\n              <td class="td">\n                <p class="characteristic">Genre</p>\n              </td>\n              <td class="description">${l}</td>\n            </tr>\n          </tbody>\n        </table>\n        <h3 class="about">About</h3>\n        <p class="about-descr">\n          ${o}\n        </p>\n        <div class="buttons-wrapper">\n          <button\n            type="button"\n            class="button-modal add-to-watched-btn"\n            data-action="add-to-watched"\n          >\n            add to Watched</button\n          ><button\n            type="button"\n            class="button-modal add-to-queue-btn"\n            data-action="add-to-queue"\n          >\n            add to queue\n          </button>\n        </div>\n      </div>\n    </div>\n    `}(e),t.insertAdjacentHTML("beforeend",n)})).catch(yr)})),vr.closeModalBtn.addEventListener("click",(function(t){e()}))}();const _r=Xn();_r.autofocusBtn.addEventListener("click",(function(){_r.autofocusInput.focus(),_r.autofocusInput.value=""})),(()=>{const e={openModalBtn:document.querySelector("#signin"),closeModalBtn:document.querySelector(".modal-close-btn"),modal:document.querySelector("[login-data-modal]")};function t(){e.modal.classList.toggle("is_hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)})(),(()=>{const e={openModalBtn:document.querySelector("#signup"),closeModalBtn:document.querySelector("[reg-modal-close]"),modal:document.querySelector("[reg-data-modal]")};function t(){e.modal.classList.toggle("is_hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)})();var wr,Er,Ir,Tr=wr={};function Sr(){throw new Error("setTimeout has not been defined")}function Or(){throw new Error("clearTimeout has not been defined")}function Rr(e){if(Er===setTimeout)return setTimeout(e,0);if((Er===Sr||!Er)&&setTimeout)return Er=setTimeout,setTimeout(e,0);try{return Er(e,0)}catch(t){try{return Er.call(null,e,0)}catch(t){return Er.call(this,e,0)}}}!function(){try{Er="function"==typeof setTimeout?setTimeout:Sr}catch(e){Er=Sr}try{Ir="function"==typeof clearTimeout?clearTimeout:Or}catch(e){Ir=Or}}();var Ar,kr=[],Pr=!1,Cr=-1;function Nr(){Pr&&Ar&&(Pr=!1,Ar.length?kr=Ar.concat(kr):Cr=-1,kr.length&&Lr())}function Lr(){if(!Pr){var e=Rr(Nr);Pr=!0;for(var t=kr.length;t;){for(Ar=kr,kr=[];++Cr<t;)Ar&&Ar[Cr].run();Cr=-1,t=kr.length}Ar=null,Pr=!1,function(e){if(Ir===clearTimeout)return clearTimeout(e);if((Ir===Or||!Ir)&&clearTimeout)return Ir=clearTimeout,clearTimeout(e);try{Ir(e)}catch(t){try{return Ir.call(null,e)}catch(t){return Ir.call(this,e)}}}(e)}}function xr(e,t){this.fun=e,this.array=t}function Mr(){}Tr.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];kr.push(new xr(e,t)),1!==kr.length||Pr||Rr(Lr)},xr.prototype.run=function(){this.fun.apply(null,this.array)},Tr.title="browser",Tr.browser=!0,Tr.env={},Tr.argv=[],Tr.version="",Tr.versions={},Tr.on=Mr,Tr.addListener=Mr,Tr.once=Mr,Tr.off=Mr,Tr.removeListener=Mr,Tr.removeAllListeners=Mr,Tr.emit=Mr,Tr.prependListener=Mr,Tr.prependOnceListener=Mr,Tr.listeners=function(e){return[]},Tr.binding=function(e){throw new Error("process.binding is not supported")},Tr.cwd=function(){return"/"},Tr.chdir=function(e){throw new Error("process.chdir is not supported")},Tr.umask=function(){return 0};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Br=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},Dr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,u=a?e[t+2]:0,c=i>>2,l=(3&i)<<4|o>>4;let h=(15&o)<<2|u>>6,d=63&u;a||(d=64,s||(h=64)),r.push(n[c],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Br(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==s||null==o||null==a)throw Error();const u=i<<2|s>>4;if(r.push(u),64!==o){const e=s<<4&240|o>>2;if(r.push(e),64!==a){const e=o<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Ur=function(e){return function(e){const t=Br(e);return Dr.encodeByteArray(t,!0)}(e).replace(/\./g,"")},jr=function(e){try{return Dr.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Fr(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function qr(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function $r(){const e=Fr();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Hr(){try{return"object"==typeof indexedDB}catch(e){return!1}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Vr=()=>function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,Wr=()=>{try{return Vr()||(()=>{if(void 0===wr||void 0===wr.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&jr(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},zr=e=>{var t;return null===(t=Wr())||void 0===t?void 0:t[`_${e}`]};class Jr extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Jr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Kr.prototype.create)}}class Kr{create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(Gr,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new Jr(r,o,n)}constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}}const Gr=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Xr(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Yr(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function Qr(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zr(e,t){const n=new ei(e,t);return n.subscribe.bind(n)}class ei{next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=ti),void 0===r.error&&(r.error=ti),void 0===r.complete&&(r.complete=ti);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}}function ti(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ni(e){return e&&e._delegate?e._delegate:e}class ri{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ii=[];var si,oi;(oi=si||(si={}))[oi.DEBUG=0]="DEBUG",oi[oi.VERBOSE=1]="VERBOSE",oi[oi.INFO=2]="INFO",oi[oi.WARN=3]="WARN",oi[oi.ERROR=4]="ERROR",oi[oi.SILENT=5]="SILENT";const ai={debug:si.DEBUG,verbose:si.VERBOSE,info:si.INFO,warn:si.WARN,error:si.ERROR,silent:si.SILENT},ui=si.INFO,ci={[si.DEBUG]:"log",[si.VERBOSE]:"log",[si.INFO]:"info",[si.WARN]:"warn",[si.ERROR]:"error"},li=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=ci[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class hi{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in si))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?ai[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,si.DEBUG,...e),this._logHandler(this,si.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,si.VERBOSE,...e),this._logHandler(this,si.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,si.INFO,...e),this._logHandler(this,si.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,si.WARN,...e),this._logHandler(this,si.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,si.ERROR,...e),this._logHandler(this,si.ERROR,...e)}constructor(e){this.name=e,this._logLevel=ui,this._logHandler=li,this._userLogHandler=null,ii.push(this)}}let di,fi;const pi=new WeakMap,gi=new WeakMap,mi=new WeakMap,yi=new WeakMap,vi=new WeakMap;let bi={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return gi.get(e);if("objectStoreNames"===t)return e.objectStoreNames||mi.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ei(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function _i(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(fi||(fi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Ii(this),t),Ei(pi.get(this))}:function(...t){return Ei(e.apply(Ii(this),t))}:function(t,...n){const r=e.call(Ii(this),t,...n);return mi.set(r,t.sort?t.sort():[t]),Ei(r)}}function wi(e){return"function"==typeof e?_i(e):(e instanceof IDBTransaction&&function(e){if(gi.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));gi.set(e,t)}(e),t=e,(di||(di=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,bi):e);var t}function Ei(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(Ei(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&pi.set(t,e)})).catch((()=>{})),vi.set(t,e),t}(e);if(yi.has(e))return yi.get(e);const t=wi(e);return t!==e&&(yi.set(e,t),vi.set(t,e)),t}const Ii=e=>vi.get(e);function Ti(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Ei(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(Ei(o.result),e.oldVersion,e.newVersion,Ei(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const Si=["get","getKey","getAll","getAllKeys","count"],Oi=["put","add","delete","clear"],Ri=new Map;function Ai(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Ri.get(t))return Ri.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Oi.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!Si.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return Ri.set(t,s),s}bi=(e=>({...e,get:(t,n,r)=>Ai(t,n)||e.get(t,n,r),has:(t,n)=>!!Ai(t,n)||e.has(t,n)}))(bi);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ki{getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}constructor(e){this.container=e}}const Pi=new hi("@firebase/app"),Ci={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Ni=new Map,Li=new Map;function xi(e,t){try{e.container.addComponent(t)}catch(n){Pi.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Mi(e){const t=e.name;if(Li.has(t))return Pi.debug(`There were multiple attempts to register component ${t}.`),!1;Li.set(t,e);for(const t of Ni.values())xi(t,e);return!0}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Bi=new Kr("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});function Di(e,t,n){var r;let i=null!==(r=Ci[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Pi.warn(e.join(" "))}Mi(new ri(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}let Ui=null;function ji(){return Ui||(Ui=Ti("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore("firebase-heartbeat-store")}}).catch((e=>{throw Bi.create("idb-open",{originalErrorMessage:e.message})}))),Ui}async function Fi(e,t){try{const n=(await ji()).transaction("firebase-heartbeat-store","readwrite"),r=n.objectStore("firebase-heartbeat-store");return await r.put(t,qi(e)),n.done}catch(e){if(e instanceof Jr)Pi.warn(e.message);else{const t=Bi.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});Pi.warn(t.message)}}}function qi(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=Hi();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Hi(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),Wi(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Wi(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=Ur(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Vi(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}}function Hi(){return(new Date).toISOString().substring(0,10)}class Vi{async runIndexedDBEnvironmentCheck(){return!!Hr()&&new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{return(await ji()).transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(qi(e))}catch(e){if(e instanceof Jr)Pi.warn(e.message);else{const t=Bi.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});Pi.warn(t.message)}}}(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Fi(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Fi(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function Wi(e){return Ur(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zi;zi="",Mi(new ri("platform-logger",(e=>new ki(e)),"PRIVATE")),Mi(new ri("heartbeat",(e=>new $i(e)),"PRIVATE")),Di("@firebase/app","0.9.0",zi),Di("@firebase/app","0.9.0","esm2017"),Di("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Di("firebase","9.15.0","app");function Ji(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;function Ki(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Gi=Ki,Xi=new Kr("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Yi=new hi("@firebase/auth");function Qi(e,...t){Yi.logLevel<=si.ERROR&&Yi.error(`Auth (9.15.0): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(e,...t){throw ns(e,...t)}function es(e,...t){return ns(e,...t)}function ts(e,t,n){const r=Object.assign(Object.assign({},Gi()),{[t]:n});return new Kr("auth","Firebase",r).create(t,{appName:e.name})}function ns(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Xi.create(e,...t)}function rs(e,t,...n){if(!e)throw ns(t,...n)}function is(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Qi(t),new Error(t)}function ss(e,t){e||is(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os=new Map;function as(e){ss(e instanceof Function,"Expected a class definition");let t=os.get(e);return t?(ss(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,os.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function us(){return"http:"===cs()||"https:"===cs()}function cs(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(us()||qr()||"connection"in navigator))||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hs{get(){return ls()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}constructor(e,t){this.shortDelay=e,this.longDelay=t,ss(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Fr())||"object"==typeof navigator&&"ReactNative"===navigator.product}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ds(e,t){ss(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void is("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void is("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void is("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},gs=new hs(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ms(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function ys(e,t,n,r,i={}){return vs(e,i,(async()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const o=Xr(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),fs.fetch()(_s(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))}))}async function vs(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},ps),t);try{const t=new ws(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw Es(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Es(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw Es(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw Es(e,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw ts(e,a,o);Zi(e,a)}}catch(t){if(t instanceof Jr)throw t;Zi(e,"network-request-failed")}}async function bs(e,t,n,r,i={}){const s=await ys(e,t,n,r,i);return"mfaPendingCredential"in s&&Zi(e,"multi-factor-auth-required",{_serverResponse:s}),s}function _s(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?ds(e.config,i):`${e.config.apiScheme}://${i}`}class ws{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(es(this.auth,"network-request-failed"))),gs.get())}))}}function Es(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=es(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Is(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(e){return 1e3*Number(e)}function Ss(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return Qi("JWT malformed, contained fewer than 3 sections"),null;try{const e=jr(n);return e?JSON.parse(e):(Qi("Failed to decode base64 JWT payload"),null)}catch(e){return Qi("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Os(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof Jr&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class Rs{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{_initializeTime(){this.lastSignInTime=Is(this.lastLoginAt),this.creationTime=Is(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ks(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Os(e,async function(e,t){return ys(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));rs(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=Ji(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=function(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}(e.providerData,o),u=e.isAnonymous,c=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),l=!!u&&c,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new As(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(e,h)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ps{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){rs(e.idToken,"internal-error"),rs(void 0!==e.idToken,"internal-error"),rs(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=Ss(e);return rs(t,"internal-error"),rs(void 0!==t.exp,"internal-error"),rs(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return rs(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await vs(e,{},(async()=>{const n=Xr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=_s(e,r,"/v1/token",`key=${i}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",fs.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new Ps;return n&&(rs("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(rs("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(rs("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ps,this.toJSON())}_performRefresh(){return is("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cs(e,t){rs("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Ns{async getIdToken(e){const t=await Os(this,this.stsTokenManager.getToken(this.auth,e));return rs(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=ni(e),r=await n.getIdToken(t),i=Ss(r);rs(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Is(Ts(i.auth_time)),issuedAtTime:Is(Ts(i.iat)),expirationTime:Is(Ts(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=ni(e);await ks(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(rs(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Ns(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){rs(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ks(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Os(this,async function(e,t){return ys(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,u,c;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(u=t.createdAt)&&void 0!==u?u:void 0,y=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:v,emailVerified:b,isAnonymous:_,providerData:w,stsTokenManager:E}=t;rs(v&&E,e,"internal-error");const I=Ps.fromJSON(this.name,E);rs("string"==typeof v,e,"internal-error"),Cs(l,e.name),Cs(h,e.name),rs("boolean"==typeof b,e,"internal-error"),rs("boolean"==typeof _,e,"internal-error"),Cs(d,e.name),Cs(f,e.name),Cs(p,e.name),Cs(g,e.name),Cs(m,e.name),Cs(y,e.name);const T=new Ns({uid:v,auth:e,email:h,emailVerified:b,displayName:l,isAnonymous:_,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:I,createdAt:m,lastLoginAt:y});return w&&Array.isArray(w)&&(T.providerData=w.map((e=>Object.assign({},e)))),g&&(T._redirectEventId=g),T}static async _fromIdTokenResponse(e,t,n=!1){const r=new Ps;r.updateFromServerResponse(t);const i=new Ns({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await ks(i),i}constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=Ji(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Rs(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new As(i.createdAt||void 0,i.lastLoginAt||void 0)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}constructor(){this.type="NONE",this.storage={}}}Ls.type="NONE";const xs=Ls;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ms(e,t,n){return`firebase:${e}:${t}:${n}`}class Bs{setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ns._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Bs(as(xs),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||as(xs);const s=Ms(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(s);if(t){const r=Ns._fromJSON(e,t);n!==i&&(o=r),i=n;break}}catch(e){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(e){}}))),new Bs(i,e,n)):new Bs(i,e,n)}constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=Ms(this.userKey,r.apiKey,i),this.fullPersistenceKey=Ms("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ds(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(qs(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Us(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Hs(t))return"Blackberry";if(Vs(t))return"Webos";if(js(t))return"Safari";if((t.includes("chrome/")||Fs(t))&&!t.includes("edge/"))return"Chrome";if($s(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Us(e=Fr()){return/firefox\//i.test(e)}function js(e=Fr()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Fs(e=Fr()){return/crios\//i.test(e)}function qs(e=Fr()){return/iemobile/i.test(e)}function $s(e=Fr()){return/android/i.test(e)}function Hs(e=Fr()){return/blackberry/i.test(e)}function Vs(e=Fr()){return/webos/i.test(e)}function Ws(e=Fr()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function zs(){return $r()&&10===document.documentMode}function Js(e=Fr()){return Ws(e)||$s(e)||Vs(e)||Hs(e)||/windows phone/i.test(e)||qs(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ks(e,t=[]){let n;switch(e){case"Browser":n=Ds(Fr());break;case"Worker":n=`${Ds(Fr())}-${e}`;break;default:n=e}return`${n}/JsCore/9.15.0/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{n(e(t))}catch(e){r(e)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}constructor(e){this.auth=e,this.queue=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=as(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await Bs.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null==o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(e){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return rs(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ks(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?ni(e):null;return t&&rs(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&rs(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(as(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Kr("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&as(e)||this._popupRedirectResolver;rs(t,this,"argument-error"),this.redirectPersistenceManager=await Bs.create(this,[as(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return rs(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return rs(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ks(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qs(this),this.idTokenSubscription=new Qs(this),this.beforeStateQueue=new Gs(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Xi,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}}function Ys(e){return ni(e)}class Qs{get next(){return rs(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(e){this.auth=e,this.observer=null,this.addObserver=Zr((e=>this.observer=e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zs{toJSON(){return is("not implemented")}_getIdTokenResponse(e){return is("not implemented")}_linkToIdToken(e,t){return is("not implemented")}_getReauthenticationResolver(e){return is("not implemented")}constructor(e,t){this.providerId=e,this.signInMethod=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eo(e,t){return ys(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class to extends Zs{static _fromEmailAndPassword(e,t){return new to(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new to(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return bs(e,"POST","/v1/accounts:signInWithPassword",ms(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return bs(e,"POST","/v1/accounts:signInWithEmailLink",ms(e,t))}(e,{email:this._email,oobCode:this._password});default:Zi(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return eo(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return bs(e,"POST","/v1/accounts:signInWithEmailLink",ms(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:Zi(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function no(e,t){return bs(e,"POST","/v1/accounts:signInWithIdp",ms(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro extends Zs{static _fromParams(e){const t=new ro(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Zi("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=Ji(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new ro(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return no(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,no(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,no(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Xr(t)}return e}constructor(){super(...arguments),this.pendingToken=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const io={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class so extends Zs{static _fromVerification(e,t){return new so({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new so({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return bs(e,"POST","/v1/accounts:signInWithPhoneNumber",ms(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await bs(e,"POST","/v1/accounts:signInWithPhoneNumber",ms(e,t));if(n.temporaryProof)throw Es(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return bs(e,"POST","/v1/accounts:signInWithPhoneNumber",ms(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),io)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new so({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}constructor(e){super("phone","phone"),this.params=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{static parseLink(e){const t=function(e){const t=Yr(Qr(e)).link,n=t?Yr(Qr(t)).deep_link_id:null,r=Yr(Qr(e)).deep_link_id;return(r?Yr(Qr(r)).link:null)||r||n||t||e}(e);try{return new oo(t)}catch(e){return null}}constructor(e){var t,n,r,i,s,o;const a=Yr(Qr(e)),u=null!==(t=a.apiKey)&&void 0!==t?t:null,c=null!==(n=a.oobCode)&&void 0!==n?n:null,l=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=a.mode)&&void 0!==r?r:null);rs(u&&c&&l,"argument-error"),this.apiKey=u,this.operation=l,this.code=c,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ao{static credential(e,t){return to._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=oo.parseLink(t);return rs(n,"argument-error"),to._fromEmailAndCode(e,n.code,n.tenantId)}constructor(){this.providerId=ao.PROVIDER_ID}}ao.PROVIDER_ID="password",ao.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ao.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class uo{setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co extends uo{addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lo extends co{static credential(e){return ro._fromParams({providerId:lo.PROVIDER_ID,signInMethod:lo.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lo.credentialFromTaggedObject(e)}static credentialFromError(e){return lo.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return lo.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("facebook.com")}}lo.FACEBOOK_SIGN_IN_METHOD="facebook.com",lo.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ho extends co{static credential(e,t){return ro._fromParams({providerId:ho.PROVIDER_ID,signInMethod:ho.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ho.credentialFromTaggedObject(e)}static credentialFromError(e){return ho.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return ho.credential(t,n)}catch(e){return null}}constructor(){super("google.com"),this.addScope("profile")}}ho.GOOGLE_SIGN_IN_METHOD="google.com",ho.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fo extends co{static credential(e){return ro._fromParams({providerId:fo.PROVIDER_ID,signInMethod:fo.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fo.credentialFromTaggedObject(e)}static credentialFromError(e){return fo.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return fo.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("github.com")}}fo.GITHUB_SIGN_IN_METHOD="github.com",fo.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class po extends co{static credential(e,t){return ro._fromParams({providerId:po.PROVIDER_ID,signInMethod:po.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return po.credentialFromTaggedObject(e)}static credentialFromError(e){return po.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return po.credential(t,n)}catch(e){return null}}constructor(){super("twitter.com")}}po.TWITTER_SIGN_IN_METHOD="twitter.com",po.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class go{static async _fromIdTokenResponse(e,t,n,r=!1){const i=await Ns._fromIdTokenResponse(e,n,r),s=mo(n);return new go({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=mo(n);return new go({user:e,providerId:r,_tokenResponse:n,operationType:t})}constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}}function mo(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yo extends Jr{static _fromErrorAndOperation(e,t,n,r){return new yo(e,t,n,r)}constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,yo.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}}function vo(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw yo._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bo(e,t,n=!1){const r=await Os(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return go._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function _o(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await Os(e,vo(r,i,t,e),n);rs(s.idToken,r,"internal-error");const o=Ss(s.idToken);rs(o,r,"internal-error");const{sub:a}=o;return rs(e.uid===a,r,"user-mismatch"),go._forOperation(e,i,s)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&Zi(r,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wo(e,t,n=!1){const r="signIn",i=await vo(e,r,t),s=await go._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Eo{_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(e,t){this.storageRetriever=e,this.type=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io extends Eo{forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);zs()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=Fr();return js(e)||Ws(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=Js(),this._shouldAllowMigration=!0}}Io.type="LOCAL";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class To extends Eo{_addListener(e,t){}_removeListener(e,t){}constructor(){super((()=>window.sessionStorage),"SESSION")}}To.type="SESSION";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class So{static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new So(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Oo(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */So.receivers=[];class Ro{removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const u=Oo("",20);r.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===u)switch(t.data.status){case"ack":clearTimeout(c),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(c),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}constructor(e){this.target=e,this.handlers=new Set}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ao(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ko(){return void 0!==Ao().WorkerGlobalScope&&"function"==typeof Ao().importScripts}class Po{toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}constructor(e){this.request=e}}function Co(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function No(){const e=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new Po(e).toPromise()}(),t(await No()))}))}))}async function Lo(e,t,n){const r=Co(e,!0).put({fbase_key:t,value:n});return new Po(r).toPromise()}function xo(e,t){const n=Co(e,!0).delete(t);return new Po(n).toPromise()}class Mo{async _openDb(){return this.db||(this.db=await No()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ko()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=So._getInstance(ko()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Ro(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await No();return await Lo(e,"__sak","1"),await xo(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Lo(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Co(e,!1).get(t),r=await new Po(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>xo(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Co(e,!1).getAll();return new Po(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}Mo.type="LOCAL";function Bo(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Bo("rcb"),new hs(3e4,6e4);async function Do(e,t,n){var r;const i=await n.verify();try{let s;if(rs("string"==typeof i,e,"argument-error"),rs("recaptcha"===n.type,e,"argument-error"),s="string"==typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){rs("enroll"===t.type,e,"internal-error");const n=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return ys(e,"POST","/v2/accounts/mfaEnrollment:start",ms(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{rs("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;rs(n,e,"missing-multi-factor-info");const o=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return ys(e,"POST","/v2/accounts/mfaSignIn:start",ms(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return ys(e,"POST","/v1/accounts:sendVerificationCode",ms(e,t))}(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Uo{verifyPhoneNumber(e,t){return Do(this.auth,e,ni(t))}static credential(e,t){return so._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Uo.credentialFromTaggedObject(t)}static credentialFromError(e){return Uo.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?so._fromTokenResponse(t,n):null}constructor(e){this.providerId=Uo.PROVIDER_ID,this.auth=Ys(e)}}Uo.PROVIDER_ID="phone",Uo.PHONE_SIGN_IN_METHOD="phone";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jo extends Zs{_getIdTokenResponse(e){return no(e,this._buildIdpRequest())}_linkToIdToken(e,t){return no(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return no(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}constructor(e){super("custom","custom"),this.params=e}}function Fo(e){return wo(e.auth,new jo(e),e.bypassAuthState)}function qo(e){const{auth:t,user:n}=e;return rs(n,t,"internal-error"),_o(n,new jo(e),e.bypassAuthState)}async function $o(e){const{auth:t,user:n}=e;return rs(n,t,"internal-error"),bo(n,new jo(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Fo;case"linkViaPopup":case"linkViaRedirect":return $o;case"reauthViaPopup":case"reauthViaRedirect":return qo;default:Zi(this.auth,"internal-error")}}resolve(e){ss(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ss(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vo=new hs(2e3,1e4);class Wo extends Ho{async executeNotNull(){const e=await this.execute();return rs(e,this.auth,"internal-error"),e}async onExecution(){ss(1===this.filter.length,"Popup operations only handle one event");const e=Oo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(es(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(es(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Wo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(es(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,Vo.get())};e()}constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Wo.currentPopupAction&&Wo.currentPopupAction.cancel(),Wo.currentPopupAction=this}}Wo.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new Map;
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new hs(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new hs(5e3,15e3),new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zo{getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){rs(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(e){this.auth=e,this.internalListeners=new Map}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
zr("authIdTokenMaxAge");var Jo;Jo="Browser",Mi(new ri("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:s}=n.options;return((e,n)=>{rs(i&&!i.includes(":"),"invalid-api-key",{appName:e.name}),rs(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});const r={apiKey:i,authDomain:s,clientPlatform:Jo,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ks(Jo)},o=new Xs(e,n,r);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(as);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(o,t),o})(n,r)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),Mi(new ri("auth-internal",(e=>{const t=Ys(e.getProvider("auth").getImmediate());return new zo(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Di("@firebase/auth","0.21.0",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Jo)),Di("@firebase/auth","0.21.0","esm2017");const Ko=Xn();Ko.modeButton.addEventListener("click",(function(){document.body.classList.contains("moon")?(document.body.classList.remove("moon"),Ko.moon.classList.add("visually-hidden"),Ko.sun.classList.remove("visually-hidden"),localStorage.setItem("mode",!1)):(document.body.classList.add("moon"),localStorage.setItem("mode","moon"),Ko.sun.classList.add("visually-hidden"),Ko.moon.classList.remove("visually-hidden"))})),"moon"===localStorage.getItem("mode")&&(document.body.classList.add("moon"),Ko.sun.classList.add("visually-hidden"),Ko.moon.classList.remove("visually-hidden")),console.log("change2");
//# sourceMappingURL=index.53de264d.js.map
