function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequire37c5;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequire37c5=a),a("kyEFX").register(JSON.parse('{"5ZPII":"index.17b7715a.js","9cBl5":"noImageAvailable.4bf2d6d5.jpg","b9auz":"index.44bba2c0.js"}'));var i={API_KEY:"7cb8097836a7a1f4e5c19953961668c8",BASE_URL:"https://api.themoviedb.org/3",IMG_URL:"https://image.tmdb.org/t/p/w500/"},o=a("iiPHV");const{API_KEY:s,BASE_URL:c}=i,l=`${c}/search/movie?api_key=${s}&include_adult=false`;class u{fetchMoviesySearch(){return(0,o.default)(),fetch(`${l}&query=${this.searchQuery}&language=${this.language}&page=${this.currentPage}`).then((e=>e.json())).finally(o.default)}async fetchPopular(){(0,o.default)();const e=`${c}/trending/movie/day?api_key=${s}&page=${this.currentPage}`;return fetch(e).then((e=>e.json())).finally(o.default)}async getMovieDetails(e){(0,o.default)();return fetch(`${c}/movie/${e}?api_key=${s}`).then((e=>e.json())).finally(o.default)}async fetchById(){(0,o.default)();const e=await fetch(`${c}/movie/${this.movieId}?api_key=${s}`);return await e.json().finally(o.default)}async fetchTrailer(e){(0,o.default)();const t=await fetch(`${c}/movie/${e}/videos?api_key=${s}`);return await t.json()}getMoviedId(e){this.movieId=e}getItemFromLS(e){return localStorage.getItem(e)}addMovie(e,t){let n=JSON.parse(this.getItemFromLS(t));return null===n&&(n=[]),n.push(e),localStorage.setItem(t,JSON.stringify(n))}deleteMovie(e){let t=JSON.parse(this.getItemFromLS(e));const n=t.filter((e=>e.id!==Number(this.movieId)));return t=n,localStorage.setItem(e,JSON.stringify(t))}incrementPage(){this.page+=1}resetPage(){this.page=1}get query(){return this.searchQuery}set query(e){this.searchQuery=e}get page(){return this.currentPage}set page(e){this.currentPage=e}constructor(){this.searchQuery="",this.currentPage=1,this.language="en-US",this.genres="",this.movieId=0}}var d=e(a("amrNH")).template({1:function(e,t,n,r,a){var i,o=null!=t?t:e.nullContext||{},s=e.hooks.helperMissing,c="function",l=e.escapeExpression,u=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'  <li class="films__item" data-id='+l(typeof(i=null!=(i=u(n,"id")||(null!=t?u(t,"id"):t))?i:s)===c?i.call(o,{name:"id",hash:{},data:a,loc:{start:{line:2,column:34},end:{line:2,column:40}}}):i)+'>\n\n    <a href="" class="films__wrapper">\n      <div class="films__img-wrapper">\n        <img class="films__img" src="'+l(typeof(i=null!=(i=u(n,"img")||(null!=t?u(t,"img"):t))?i:s)===c?i.call(o,{name:"img",hash:{},data:a,loc:{start:{line:6,column:37},end:{line:6,column:44}}}):i)+'" alt="'+l(typeof(i=null!=(i=u(n,"title")||(null!=t?u(t,"title"):t))?i:s)===c?i.call(o,{name:"title",hash:{},data:a,loc:{start:{line:6,column:51},end:{line:6,column:60}}}):i)+'" loading="lazy" />\n      </div>\n\n      <div class="films__info">\n        <p class="films__name">'+l(typeof(i=null!=(i=u(n,"title")||(null!=t?u(t,"title"):t))?i:s)===c?i.call(o,{name:"title",hash:{},data:a,loc:{start:{line:10,column:31},end:{line:10,column:40}}}):i)+'</p>\n\n        <p class="films__description">\n          '+l(typeof(i=null!=(i=u(n,"genre")||(null!=t?u(t,"genre"):t))?i:s)===c?i.call(o,{name:"genre",hash:{},data:a,loc:{start:{line:13,column:10},end:{line:13,column:19}}}):i)+"\n          |\n          "+l(typeof(i=null!=(i=u(n,"releaseDate")||(null!=t?u(t,"releaseDate"):t))?i:s)===c?i.call(o,{name:"releaseDate",hash:{},data:a,loc:{start:{line:15,column:10},end:{line:15,column:25}}}):i)+"\n        </p>\n      </div>\n    </a>\n    \n  </li>\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,r,a){var i;return null!=(i=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,a,0),inverse:e.noop,data:a,loc:{start:{line:1,column:0},end:{line:21,column:9}}}))?i:""},useData:!0}),h={28:"Action",12:"Adventure",16:"Animation",35:"Comedy",80:"Crime",99:"Documentary",18:"Drama",10751:"Family",14:"Fantasy",36:"History",27:"Horror",10402:"Music",9648:"Mystery",10749:"Romance",878:"Science Fiction",10770:"TV Movie",53:"Thriller",10752:"War",37:"Western"};[1,2,3,4,5,6,7].slice(0,4);var p;p=new URL(a("kyEFX").resolve("9cBl5"),import.meta.url).toString();const{API_KEY:f,BASE_URL:m,IMG_URL:g}=i,b=e=>e.map((e=>h[`${e}`])),y=e=>e.map((e=>e.name)),v=({genres:t=null,genre_ids:n=null,id:r,original_title:a,overview:i,popularity:o,poster_path:s,release_date:c,vote_average:l,vote_count:u})=>{return{genre:n?b(n):y(t),id:r,title:a,about:i,popularity:o,img:(h=s,h?`${g}${h}`:`${e(p)}`),releaseDate:c?(d=c,d?d.slice(0,4):data):"",vote:l,votes:u};var d,h};function _(e,t){const n=e.map((e=>{let t=v(e);return t.genre.length<=3?t.genre=t.genre.join(", "):t.genre=[t.genre[0],t.genre[1],"Other"].join(", "),t}));t.insertAdjacentHTML("beforeend",d(n))}const w=document.querySelector(".js-films-list-index");function S(){w.innerHTML=""}const E=document.querySelector(".search-span");function I(e,t){const n=`View the trending list for the day, page ${t}`,r=`View the list by keywords "${e}", page ${t}`;E.innerHTML=""===e?n:r}const D=new u,L={arrowLeft:document.querySelector("button[aria-label='previous-page'"),arrowRight:document.querySelector("button[aria-label='next-page'"),pagination:document.querySelector(".pagination"),firstButton:document.querySelector(".firstButton-and-threeDots"),lastButton:document.querySelector(".lastButton-and-threeDots"),filmsContainerIndex:document.querySelector(".js-films-list-index"),inputError:document.querySelector(".input__error"),searchSpan:document.querySelector(".search-span")};let C,A=1;function T(e,t){if(A>C)return;A=e,C=t;let n=A-2,r=A+2;A!==C&&A+1!==C||(n=A-3,r=C),A+3===C&&(r=C),n<3&&(n=1,r=5),C<=5&&(n=A,r=C);for(let e=n;e<=r;e+=1)if(e===A){const t=`<button id="paginationButton" data-page="${e}" class="button-page paginationButton active">${e}</button>`;L.pagination.insertAdjacentHTML("beforeend",t)}else{const t=`<button id="paginationButton" data-page="${e}" class="button-page paginationButton">${e}</button>`;L.pagination.insertAdjacentHTML("beforeend",t)}if(n>=3){if(j())return;!function(){const e='<button id="paginationButton" data-page="1" class="button-page paginationButton">1</button>',t="<span class='page-buttons__first-points'>···</span>";L.firstButton.insertAdjacentHTML("beforeend",e),L.firstButton.insertAdjacentHTML("beforeend",t)}()}if(n<3&&j()&&(L.firstButton.innerHTML=""),A===C||A+1===C||A+2===C||A+3===C)return L.lastButton.innerHTML="",void(L.lastButton.style.marginRight=0);null===document.querySelector(".page-buttons__last-points")&&(!function(e){const t=`<button id="paginationButton" data-page="${e}" class="button-page paginationButton">${e}</button>`,n="<span class='page-buttons__last-points'>···</span>";L.lastButton.insertAdjacentHTML("beforeend",n),L.lastButton.insertAdjacentHTML("beforeend",t),L.lastButton.style.marginRight="10px"}(C),L.arrowLeft.onclick=M,L.arrowRight.onclick=$,L.pagination.onclick=N,L.firstButton.onclick=O,L.lastButton.onclick=B)}function O(e){"BUTTON"===e.target.nodeName&&(A=1,H(D.query,A))}function B(e){"BUTTON"===e.target.nodeName&&(A=C,H(D.query,A))}function M(){1!==A&&(A-=1,H(D.query,A))}function $(){A!==C&&(A+=1,H(D.query,A))}function k(){L.pagination.innerHTML="",L.firstButton.innerHTML="",L.lastButton.innerHTML=""}function N(e){e.preventDefault(),e.target!==e.currentTarget&&(A=Number(e.target.dataset.page),H(D.query,A))}function j(){return null!==document.querySelector(".page-buttons__first-points")}function H(e,t){if(""===e)return I(e,t),A=t,D.page=A,D.query="",sessionStorage.setItem("query",D.query),sessionStorage.setItem("page",A),D.fetchPopular().then((({results:e,total_pages:t})=>{S(),_(e,L.filmsContainerIndex),k(),T(D.page,t)})),void P();I(e,t),function(e,t){D.query=e,D.page=t,sessionStorage.setItem("query",e),sessionStorage.setItem("page",t),D.fetchMoviesySearch().then((({results:e,total_pages:t})=>{0!==e.length?(S(),_(e,L.filmsContainerIndex),k(),T(D.page,t)):L.inputError.textContent="Search result not successful. Enter the correct movie name and smile : )"}))}(e,t),P()}function P(){window.scrollTo(pageXOffset,0)}new u,document.querySelector(".js-films-list-index");const R=document.querySelector(".logo");window.addEventListener("load",(function(){let e=sessionStorage.getItem("query"),t=sessionStorage.getItem("page");null===e&&(e="");null===t&&(t=1);H(e,Number(t))})),R.addEventListener("click",(function(e){e.preventDefault();H("",1)}));var q=/^\s+|\s+$/g,x=/^[-+]0x[0-9a-f]+$/i,F=/^0b[01]+$/i,V=/^0o[0-7]+$/i,U=parseInt,W="object"==typeof t&&t&&t.Object===Object&&t,z="object"==typeof self&&self&&self.Object===Object&&self,G=W||z||Function("return this")(),J=Object.prototype.toString,Q=Math.max,K=Math.min,X=function(){return G.Date.now()};function Y(e,t,n){var r,a,i,o,s,c,l=0,u=!1,d=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=r,i=a;return r=a=void 0,l=t,o=e.apply(i,n)}function f(e){return l=e,s=setTimeout(g,t),u?p(e):o}function m(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=i}function g(){var e=X();if(m(e))return b(e);s=setTimeout(g,function(e){var n=t-(e-c);return d?K(n,i-(e-l)):n}(e))}function b(e){return s=void 0,h&&r?p(e):(r=a=void 0,o)}function y(){var e=X(),n=m(e);if(r=arguments,a=this,c=e,n){if(void 0===s)return f(c);if(d)return s=setTimeout(g,t),p(c)}return void 0===s&&(s=setTimeout(g,t)),o}return t=ee(t)||0,Z(n)&&(u=!!n.leading,i=(d="maxWait"in n)?Q(ee(n.maxWait)||0,t):i,h="trailing"in n?!!n.trailing:h),y.cancel=function(){void 0!==s&&clearTimeout(s),l=0,r=c=a=s=void 0},y.flush=function(){return void 0===s?o:b(X())},y}function Z(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function ee(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==J.call(e)}(e))return NaN;if(Z(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Z(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(q,"");var n=F.test(e);return n||V.test(e)?U(e.slice(2),n?2:8):x.test(e)?NaN:+e}const te=new u,ne=document.querySelector(".input__wraper"),re=document.querySelector(".input__error");document.querySelector(".js-films-list-index");ne.addEventListener("submit",(function(e){if(e.preventDefault(),te.query=e.currentTarget.searchQuery.value.trim(),re.textContent=" ",te.resetPage(),!te.query)return void(re.textContent="Please enter something to search ");H(te.query,te.page)})),a("jxohN");let ae={};const ie=[],oe=[],se=(e,t)=>{try{const n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}},ce=e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}};function le(e){const t=document.querySelector(".btn-watch.is-active");e.currentTarget.classList.toggle("is-active");const n=ce("allWatchedMovies");if(t){let e;n.forEach((({id:t},n)=>t===ae.id?e=n:n)),ie.splice(e,1),se("allWatchedMovies",ie)}!!n&&n.find((({id:e})=>e===ae.id))||(ie.push(ae),se("allWatchedMovies",ie))}function ue(e){const t=document.querySelector(".btn-queue.is-active");e.currentTarget.classList.toggle("is-active");const n=ce("allQueueMovies");if(t){let t;e.currentTarget.textContent="add to Queue",n.forEach((({id:e},n)=>e===ae.id?t=n:n)),oe.splice(t,1),se("allQueueMovies",oe)}!!n&&n.find((({id:e})=>e===ae.id))||(oe.push(ae),se("allQueueMovies",oe))}var de=a("9B8F0");const he=new u,pe=document.querySelector(".trailer__window"),fe=document.querySelector(".trailer__backdrop");function me(e){const t=e.currentTarget.dataset.id;he.fetchTrailer(t).then((({results:e})=>{e.forEach((e=>{if("Official Trailer"===e.name){console.log(e.key);document.querySelector(".basicLightbox .modal__container").classList.add("visually-hidden"),t=e.key,console.log(t),fe.classList.remove("visually-hidden"),pe.innerHTML=`\n  <iframe class="trailer__iframe" width="700" height="500" src="https://www.youtube.com/embed/${t}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n  `,fe.addEventListener("click",(e=>{e.target===fe&&ge()}))}var t}))}))}function ge(){document.querySelector(".basicLightbox .modal__container").classList.remove("visually-hidden"),fe.classList.add("visually-hidden"),pe.innerHTML=""}fe.addEventListener("click",(e=>{e.target===fe&&ge()}));const{IMG_URL:be}=i,ye=new u;async function ve(e){const t=await ye.getMovieDetails(e).then((e=>e)),n=v(t);return ae=n,n}({cardContainer:document.querySelector(".films__container")}).cardContainer.addEventListener("click",(async function(e){if(e.preventDefault(),"DIV"!==e.target.nodeName&&"UL"!==e.target.nodeName){if("IMG"===e.target.nodeName){const n=e.target.parentElement.parentElement.parentElement.dataset.id;t(await ve(n))}if("P"===e.target.nodeName){const n=e.target.parentElement.parentElement.parentElement.dataset.id;t(await ve(n))}}function t({id:e,img:t,title:n,popularity:r,vote:a,votes:i,about:o,genre:s}){const c=de.create(`\n    <div class="modal__container">\n      <div class="modal__close">\n        <div class="modal__close-first"></div>\n        <div class="modal__close-second"></div>\n      </div>\n      <div class="modal-wrap">\n        <div class="modal__picture-wrap">\n          <img\n          class="modal__picture"\n          src="${t}"\n          alt="film-picture"\n          />\n          <button class="modal__button-play trailer-button" data-id="${e}">\n            <img class="modal__img-play" src="https://www.freepnglogos.com/uploads/play-button-png/play-button-file-youtube-play-buttom-icon-svg-wikimedia-commons-27.png" alt="play trailer" width="100" height="100" />\n\t\t\t\t\t</button>\n        </div>\n        <div class="modal__desc-wrap">\n          <h2 class="modal-heading">${n}</h2>\n          <div class="modal__rating-wrap">\n            <ul class="modal__rating-left-list">\n              <li class="modal__rating-left-item">Vote / Votes</li>\n              <li class="modal__rating-left-item">Popularity</li>\n              <li class="modal__rating-left-item">Original Title</li>\n              <li class="modal__rating-left-item">Genre</li>\n            </ul>\n            <ul class="modal__rating-right-list">\n              <li class="modal__rating-right-item">\n                <span class="modal__rating-right-item--color">${a}</span> /\n                <span class="modal__rating-right-item--shadow">${i}</span>\n              </li>\n              <li class="modal__rating-right-item">${r}</li>\n              <li class="modal__rating-right-item modal__rating-right-item--uppercase">${n}</li>\n              <li class="modal__rating-right-item">${s}</li>\n            </ul>\n          </div>\n          <div class="modal__content-wrap">\n            <h4 class="modal__content-heading">About</h4>\n            <p class="modal__content">\n              ${o}\n            </p>\n          </div>\n          <div class="modal__button-wrap" data-id="${e}">\n            <button class="modal__button btn-watch">add to Watched</button>\n            <button class="modal__button btn-queue">add to queue</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  `,{onShow:e=>{window.addEventListener("keydown",l),window.addEventListener("click",u),e.element().querySelector(".modal__close").onclick=e.close},onClose:e=>{window.removeEventListener("keydown",l),window.removeEventListener("click",u)}});function l(e){"Escape"===e.code&&c.close()}function u(e){console.log(e.target.classList.value),"basicLightbox__placeholder"===e.target.classList.value&&c.close()}c.show()}document.querySelector(".modal__button-play").addEventListener("click",me),document.querySelector(".btn-watch").addEventListener("click",le),document.querySelector(".btn-queue").addEventListener("click",ue)})),a("iiPHV");
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
const _e=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let a=e.charCodeAt(r);a<128?t[n++]=a:a<2048?(t[n++]=a>>6|192,t[n++]=63&a|128):55296==(64512&a)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(a=65536+((1023&a)<<10)+(1023&e.charCodeAt(++r)),t[n++]=a>>18|240,t[n++]=a>>12&63|128,t[n++]=a>>6&63|128,t[n++]=63&a|128):(t[n++]=a>>12|224,t[n++]=a>>6&63|128,t[n++]=63&a|128)}return t},we={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const a=e[t],i=t+1<e.length,o=i?e[t+1]:0,s=t+2<e.length,c=s?e[t+2]:0,l=a>>2,u=(3&a)<<4|o>>4;let d=(15&o)<<2|c>>6,h=63&c;s||(h=64,i||(d=64)),r.push(n[l],n[u],n[d],n[h])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(_e(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const a=e[n++];if(a<128)t[r++]=String.fromCharCode(a);else if(a>191&&a<224){const i=e[n++];t[r++]=String.fromCharCode((31&a)<<6|63&i)}else if(a>239&&a<365){const i=((7&a)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(i>>10)),t[r++]=String.fromCharCode(56320+(1023&i))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&a)<<12|(63&i)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const a=n[e.charAt(t++)],i=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const s=t<e.length?n[e.charAt(t)]:64;if(++t,null==a||null==i||null==o||null==s)throw Error();const c=a<<2|i>>4;if(r.push(c),64!==o){const e=i<<4&240|o>>2;if(r.push(e),64!==s){const e=o<<6&192|s;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Se=function(e){return function(e){const t=_e(e);return we.encodeByteArray(t,!0)}(e).replace(/\./g,"")};
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
class Ee{wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
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
 */class Ie extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Ie.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,De.prototype.create)}}class De{create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,a=this.errors[e],i=a?function(e,t){return e.replace(Le,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(a,n):"Error",o=`${this.serviceName}: ${i} (${r}).`;return new Ie(r,o,n)}constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}}const Le=/\{\$([^}]+)}/g;
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
 */function Ce(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const a of n){if(!r.includes(a))return!1;const n=e[a],i=t[a];if(Ae(n)&&Ae(i)){if(!Ce(n,i))return!1}else if(n!==i)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function Ae(e){return null!==e&&"object"==typeof e}
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
 */class Te{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
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
class Oe{get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new Ee;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),a=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;a.add(e),this.onInitCallbacks.set(r,a);const i=this.instances.get(r);return i&&e(i,r),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,"[DEFAULT]"===r?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class Be{addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Oe(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}
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
 */const Me=[];var $e,ke;(ke=$e||($e={}))[ke.DEBUG=0]="DEBUG",ke[ke.VERBOSE=1]="VERBOSE",ke[ke.INFO=2]="INFO",ke[ke.WARN=3]="WARN",ke[ke.ERROR=4]="ERROR",ke[ke.SILENT=5]="SILENT";const Ne={debug:$e.DEBUG,verbose:$e.VERBOSE,info:$e.INFO,warn:$e.WARN,error:$e.ERROR,silent:$e.SILENT},je=$e.INFO,He={[$e.DEBUG]:"log",[$e.VERBOSE]:"log",[$e.INFO]:"info",[$e.WARN]:"warn",[$e.ERROR]:"error"},Pe=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),a=He[t];if(!a)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[a](`[${r}]  ${e.name}:`,...n)};let Re,qe;const xe=new WeakMap,Fe=new WeakMap,Ve=new WeakMap,Ue=new WeakMap,We=new WeakMap;let ze={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Fe.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Ve.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Qe(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Ge(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(qe||(qe=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Ke(this),t),Qe(xe.get(this))}:function(...t){return Qe(e.apply(Ke(this),t))}:function(t,...n){const r=e.call(Ke(this),t,...n);return Ve.set(r,t.sort?t.sort():[t]),Qe(r)}}function Je(e){return"function"==typeof e?Ge(e):(e instanceof IDBTransaction&&function(e){if(Fe.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",i),e.removeEventListener("abort",i)},a=()=>{t(),r()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",a),e.addEventListener("error",i),e.addEventListener("abort",i)}));Fe.set(e,t)}(e),t=e,(Re||(Re=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,ze):e);var t}function Qe(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",a),e.removeEventListener("error",i)},a=()=>{t(Qe(e.result)),r()},i=()=>{n(e.error),r()};e.addEventListener("success",a),e.addEventListener("error",i)}));return t.then((t=>{t instanceof IDBCursor&&xe.set(t,e)})).catch((()=>{})),We.set(t,e),t}(e);if(Ue.has(e))return Ue.get(e);const t=Je(e);return t!==e&&(Ue.set(e,t),We.set(t,e)),t}const Ke=e=>We.get(e);function Xe(e,t,{blocked:n,upgrade:r,blocking:a,terminated:i}={}){const o=indexedDB.open(e,t),s=Qe(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(Qe(o.result),e.oldVersion,e.newVersion,Qe(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),s.then((e=>{i&&e.addEventListener("close",(()=>i())),a&&e.addEventListener("versionchange",(()=>a()))})).catch((()=>{})),s}const Ye=["get","getKey","getAll","getAllKeys","count"],Ze=["put","add","delete","clear"],et=new Map;function tt(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(et.get(t))return et.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,a=Ze.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!a&&!Ye.includes(n))return;const i=async function(e,...t){const i=this.transaction(e,a?"readwrite":"readonly");let o=i.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),a&&i.done]))[0]};return et.set(t,i),i}ze=(e=>({...e,get:(t,n,r)=>tt(t,n)||e.get(t,n,r),has:(t,n)=>!!tt(t,n)||e.has(t,n)}))(ze);
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
class nt{getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}constructor(e){this.container=e}}const rt=new class{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in $e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Ne[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,$e.DEBUG,...e),this._logHandler(this,$e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,$e.VERBOSE,...e),this._logHandler(this,$e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,$e.INFO,...e),this._logHandler(this,$e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,$e.WARN,...e),this._logHandler(this,$e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,$e.ERROR,...e),this._logHandler(this,$e.ERROR,...e)}constructor(e){this.name=e,this._logLevel=je,this._logHandler=Pe,this._userLogHandler=null,Me.push(this)}}("@firebase/app"),at={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},it=new Map,ot=new Map;function st(e,t){try{e.container.addComponent(t)}catch(n){rt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ct(e){const t=e.name;if(ot.has(t))return rt.debug(`There were multiple attempts to register component ${t}.`),!1;ot.set(t,e);for(const t of it.values())st(t,e);return!0}
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
const lt=new De("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","storage-delete":"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."});
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
class ut{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw lt.create("app-deleted",{appName:this._name})}constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Te("app",(()=>this),"PUBLIC"))}}
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
 */function dt(e,t,n){var r;let a=null!==(r=at[e])&&void 0!==r?r:e;n&&(a+=`-${n}`);const i=a.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const e=[`Unable to register library "${a}" with version "${t}":`];return i&&e.push(`library name "${a}" contains illegal characters (whitespace or "/")`),i&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void rt.warn(e.join(" "))}ct(new Te(`${a}-version`,(()=>({library:a,version:t})),"VERSION"))}let ht=null;function pt(){return ht||(ht=Xe("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore("firebase-heartbeat-store")}}).catch((e=>{throw lt.create("storage-open",{originalErrorMessage:e.message})}))),ht}async function ft(e,t){var n;try{const n=(await pt()).transaction("firebase-heartbeat-store","readwrite"),r=n.objectStore("firebase-heartbeat-store");return await r.put(t,mt(e)),n.done}catch(e){throw lt.create("storage-set",{originalErrorMessage:null===(n=e)||void 0===n?void 0:n.message})}}function mt(e){return`${e.name}!${e.options.appId}`}
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
 */class gt{async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=bt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=bt(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const a of e){const e=n.find((e=>e.agent===a.agent));if(e){if(e.dates.push(a.date),vt(n)>t){e.dates.pop();break}}else if(n.push({agent:a.agent,dates:[a.date]}),vt(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=Se(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new yt(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}}function bt(){return(new Date).toISOString().substring(0,10)}class yt{async runIndexedDBEnvironmentCheck(){return"object"==typeof indexedDB&&new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(r);a.onsuccess=()=>{a.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},a.onupgradeneeded=()=>{n=!1},a.onerror=()=>{var e;t((null===(e=a.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){var t;try{return(await pt()).transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(mt(e))}catch(e){throw lt.create("storage-get",{originalErrorMessage:null===(t=e)||void 0===t?void 0:t.message})}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return ft(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return ft(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function vt(e){return Se(JSON.stringify({version:2,heartbeats:e})).length}
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
 */var _t;_t="",ct(new Te("platform-logger",(e=>new nt(e)),"PRIVATE")),ct(new Te("heartbeat",(e=>new gt(e)),"PRIVATE")),dt("@firebase/app","0.7.26",_t),dt("@firebase/app","0.7.26","esm2017"),dt("fire-js","");
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
dt("firebase","9.8.3","app");const wt={apiKey:"AIzaSyC3mAeoJSkVgXp7W5wSmHtE9e1wFGsySmc",authDomain:"filmoteka-209ce.firebaseapp.com",projectId:"filmoteka-209ce",storageBucket:"filmoteka-209ce.appspot.com",messagingSenderId:"68393581409",appId:"1:68393581409:web:5521fb7cea0b94cd42e320"};!function(e,t={}){if("object"!=typeof t){t={name:t}}const n=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!=typeof r||!r)throw lt.create("bad-app-name",{appName:String(r)});const a=it.get(r);if(a){if(Ce(e,a.options)&&Ce(n,a.config))return a;throw lt.create("duplicate-app",{appName:r})}const i=new Be(r);for(const e of ot.values())i.addComponent(e);const o=new ut(e,n,i);it.set(r,o)}(wt);function St(e,t){return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${wt.apiKey}`,{method:"POST",body:JSON.stringify({email:e,password:t,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>e.idToken))}const Et=new class{create(e){return fetch("https://filmoteka-209ce-default-rtdb.firebaseio.com/films.json",{method:"POST",body:JSON.stringify(e),header:{"Content-Type":"application/json"}}).then((e=>e.json())).then((t=>(e.nameId=t.name,e))).then((e=>function(e){const t=JSON.parse(localStorage.getItem("film")||"[]");console.log(t),t.push(e),((e,t)=>{try{const n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}})("film",t)}(e)))}fetch(e){return e?fetch(`https://filmoteka-209ce-default-rtdb.firebaseio.com/films.json?auth=${e}`).then((e=>e.json())).then((e=>(console.log("films:",e),e&&e.error?`<p class="error">${e.error}</p>`:e?Object.keys(e).map((t=>({...e[t],id:t}))):[]))):Promise.resolve('<p class="error"> you don\'t have a token</p>')}},It=document.querySelector("#modal-btn-auth"),Dt=document.querySelector(".auth__backdrop"),Lt=document.querySelector("#js-auth__error");function Ct(e){e.preventDefault();St(e.target.querySelector("#email").value.trim(),e.target.querySelector("#password").value.trim()).then((e=>Et.fetch(e))).then(At)}function At(e){"string"==typeof e?Lt.textContent="INVALID EMAIL OR PASSWORD":(Lt.textContent="",Dt.classList.add("visually-hidden"),It.textContent="log out",sessionStorage.setItem("sign-in","true")),console.log(e)}function Tt(e){"Escape"===e.code&&Dt.classList.add("visually-hidden")}function Ot(e){e.target===e.currentTarget&&Dt.classList.add("visually-hidden")}It.addEventListener("click",(function(e){if(console.log(It.textContent),"log out"!==It.textContent){Dt.classList.remove("visually-hidden");document.querySelector(".auth__form").addEventListener("submit",Ct)}else sessionStorage.removeItem("sign-in"),It.textContent="sign in";window.addEventListener("keydown",Tt),Dt.addEventListener("click",Ot)}));
//# sourceMappingURL=index.17b7715a.js.map
