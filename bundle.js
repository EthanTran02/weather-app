(()=>{"use strict";var n={208:(n,r,e)=>{e.d(r,{A:()=>a});var t=e(354),o=e.n(t),A=e(314),i=e.n(A)()(o());i.push([n.id,"/* Base Reset & Accessibility Improvements */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n  background: linear-gradient(135deg, #70b7ff, #4584f1);\n  min-height: 100vh;\n  color: #333;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  padding: 2rem 1rem;\n}\n\n/* Container for entire app */\n.weather-container {\n  width: 100%;\n  max-width: 500px;\n  background-color: rgba(255, 255, 255, 0.9);\n  border-radius: 16px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  margin-top: 2rem;\n}\n\n/* Form Styling */\nform {\n  padding: 1.5rem;\n  border-bottom: 1px solid #eaeaea;\n  background-color: white;\n}\n\nform label {\n  font-size: 1.2rem;\n  font-weight: 500;\n  color: #333;\n  margin-bottom: 0.5rem;\n  display: block;\n}\n\ninput[type='text'] {\n  width: 100%;\n  padding: 0.75rem 1rem;\n  border-radius: 8px;\n  border: 2px solid #e0e0e0;\n  font-size: 1rem;\n  margin-bottom: 1rem;\n  transition: border-color 0.3s;\n}\n\ninput[type='text']:focus {\n  outline: none;\n  border-color: #4584f1;\n  box-shadow: 0 0 0 3px rgba(69, 132, 241, 0.1);\n}\n\n.button-group {\n  display: flex;\n  gap: 10px;\n  margin-top: 0.5rem;\n}\n\nbutton {\n  cursor: pointer;\n  border: none;\n  border-radius: 8px;\n  font-weight: 500;\n  transition: all 0.2s ease;\n}\n\n#search {\n  background-color: #4584f1;\n  color: white;\n  padding: 0.75rem 1.5rem;\n  flex: 1;\n}\n\n#search:hover {\n  background-color: #3571d8;\n  transform: translateY(-2px);\n}\n\n#toggle {\n  background-color: #f5f5f5;\n  color: #666;\n  padding: 0.75rem 1rem;\n  border: 1px solid #e0e0e0;\n}\n\n#toggle:hover {\n  background-color: #e9e9e9;\n}\n\n#fahrenheit,\n#celsius {\n  transition: color 0.3s ease;\n}\n\n#fahrenheit[style='color: black'],\n#celsius[style='color: black'] {\n  color: #4584f1 !important;\n  font-weight: 600;\n}\n\n/* Error Message */\n#error {\n  color: #e53935;\n  font-size: 0.875rem;\n  margin-top: 0.5rem;\n  display: block;\n  padding-left: 0.25rem;\n  position: static;\n}\n\n/* Loading State */\n#loading {\n  padding: 3rem 1.5rem;\n  text-align: center;\n}\n\n#loading h1 {\n  font-size: 1.5rem;\n  color: #666;\n  margin: 0;\n  animation: pulse 1.5s infinite ease-in-out;\n}\n\n@keyframes pulse {\n  0% {\n    opacity: 0.6;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0.6;\n  }\n}\n\n/* Weather Information Display */\n#info {\n  padding: 2rem 1.5rem;\n  position: static;\n  margin: 0;\n}\n\n#info > div:first-child {\n  margin-bottom: 2rem;\n  text-align: center;\n}\n\n#location {\n  font-size: 1.8rem;\n  color: #333;\n  margin-bottom: 0.5rem;\n  font-weight: 600;\n}\n\n#time {\n  font-size: 1rem;\n  color: #666;\n  font-weight: 400;\n}\n\n/* Fixed alignment for temperature and condition */\n#info > div:last-child {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n  background-color: rgba(69, 132, 241, 0.1);\n  border-radius: 12px;\n  padding: 1.5rem;\n  text-align: center;\n}\n\n#temperature,\n#condition {\n  font-size: 1.5rem;\n  font-weight: 500;\n  color: #333;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  padding-bottom: 1.5rem;\n}\n\n#temperature::after,\n#condition::after {\n  position: absolute;\n  bottom: 0;\n  font-size: 0.875rem;\n  color: #666;\n  font-weight: 400;\n}\n\n#temperature::after {\n  content: 'Temperature';\n}\n\n#condition::after {\n  content: 'Condition';\n}\n\n/* Weather Icons - add these later with proper imagery */\n.weather-icon {\n  font-size: 2.5rem;\n  margin-bottom: 0.5rem;\n}\n\n/* Responsive Adjustments */\n@media (max-width: 600px) {\n  .weather-container {\n    border-radius: 12px;\n  }\n\n  #location {\n    font-size: 1.5rem;\n  }\n\n  /* Keep the grid layout on mobile */\n  #info > div:last-child {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA,4CAA4C;AAC5C;;;EAGE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,oEAAoE;EACpE,gBAAgB;EAChB,mCAAmC;EACnC,qDAAqD;EACrD,iBAAiB;EACjB,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,2BAA2B;EAC3B,kBAAkB;AACpB;;AAEA,6BAA6B;AAC7B;EACE,WAAW;EACX,gBAAgB;EAChB,0CAA0C;EAC1C,mBAAmB;EACnB,0CAA0C;EAC1C,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA,iBAAiB;AACjB;EACE,eAAe;EACf,gCAAgC;EAChC,uBAAuB;AACzB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,WAAW;EACX,qBAAqB;EACrB,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,qBAAqB;EACrB,kBAAkB;EAClB,yBAAyB;EACzB,eAAe;EACf,mBAAmB;EACnB,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,qBAAqB;EACrB,6CAA6C;AAC/C;;AAEA;EACE,aAAa;EACb,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;EAChB,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,uBAAuB;EACvB,OAAO;AACT;;AAEA;EACE,yBAAyB;EACzB,2BAA2B;AAC7B;;AAEA;EACE,yBAAyB;EACzB,WAAW;EACX,qBAAqB;EACrB,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;;EAEE,2BAA2B;AAC7B;;AAEA;;EAEE,yBAAyB;EACzB,gBAAgB;AAClB;;AAEA,kBAAkB;AAClB;EACE,cAAc;EACd,mBAAmB;EACnB,kBAAkB;EAClB,cAAc;EACd,qBAAqB;EACrB,gBAAgB;AAClB;;AAEA,kBAAkB;AAClB;EACE,oBAAoB;EACpB,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,WAAW;EACX,SAAS;EACT,0CAA0C;AAC5C;;AAEA;EACE;IACE,YAAY;EACd;EACA;IACE,UAAU;EACZ;EACA;IACE,YAAY;EACd;AACF;;AAEA,gCAAgC;AAChC;EACE,oBAAoB;EACpB,gBAAgB;EAChB,SAAS;AACX;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,WAAW;EACX,qBAAqB;EACrB,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,WAAW;EACX,gBAAgB;AAClB;;AAEA,kDAAkD;AAClD;EACE,aAAa;EACb,8BAA8B;EAC9B,SAAS;EACT,yCAAyC;EACzC,mBAAmB;EACnB,eAAe;EACf,kBAAkB;AACpB;;AAEA;;EAEE,iBAAiB;EACjB,gBAAgB;EAChB,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA;;EAEE,kBAAkB;EAClB,SAAS;EACT,mBAAmB;EACnB,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,oBAAoB;AACtB;;AAEA,wDAAwD;AACxD;EACE,iBAAiB;EACjB,qBAAqB;AACvB;;AAEA,2BAA2B;AAC3B;EACE;IACE,mBAAmB;EACrB;;EAEA;IACE,iBAAiB;EACnB;;EAEA,mCAAmC;EACnC;IACE,8BAA8B;EAChC;AACF",sourcesContent:["/* Base Reset & Accessibility Improvements */\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  font-family: 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;\r\n  line-height: 1.5;\r\n  -webkit-font-smoothing: antialiased;\r\n  background: linear-gradient(135deg, #70b7ff, #4584f1);\r\n  min-height: 100vh;\r\n  color: #333;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n  padding: 2rem 1rem;\r\n}\r\n\r\n/* Container for entire app */\r\n.weather-container {\r\n  width: 100%;\r\n  max-width: 500px;\r\n  background-color: rgba(255, 255, 255, 0.9);\r\n  border-radius: 16px;\r\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);\r\n  overflow: hidden;\r\n  margin-top: 2rem;\r\n}\r\n\r\n/* Form Styling */\r\nform {\r\n  padding: 1.5rem;\r\n  border-bottom: 1px solid #eaeaea;\r\n  background-color: white;\r\n}\r\n\r\nform label {\r\n  font-size: 1.2rem;\r\n  font-weight: 500;\r\n  color: #333;\r\n  margin-bottom: 0.5rem;\r\n  display: block;\r\n}\r\n\r\ninput[type='text'] {\r\n  width: 100%;\r\n  padding: 0.75rem 1rem;\r\n  border-radius: 8px;\r\n  border: 2px solid #e0e0e0;\r\n  font-size: 1rem;\r\n  margin-bottom: 1rem;\r\n  transition: border-color 0.3s;\r\n}\r\n\r\ninput[type='text']:focus {\r\n  outline: none;\r\n  border-color: #4584f1;\r\n  box-shadow: 0 0 0 3px rgba(69, 132, 241, 0.1);\r\n}\r\n\r\n.button-group {\r\n  display: flex;\r\n  gap: 10px;\r\n  margin-top: 0.5rem;\r\n}\r\n\r\nbutton {\r\n  cursor: pointer;\r\n  border: none;\r\n  border-radius: 8px;\r\n  font-weight: 500;\r\n  transition: all 0.2s ease;\r\n}\r\n\r\n#search {\r\n  background-color: #4584f1;\r\n  color: white;\r\n  padding: 0.75rem 1.5rem;\r\n  flex: 1;\r\n}\r\n\r\n#search:hover {\r\n  background-color: #3571d8;\r\n  transform: translateY(-2px);\r\n}\r\n\r\n#toggle {\r\n  background-color: #f5f5f5;\r\n  color: #666;\r\n  padding: 0.75rem 1rem;\r\n  border: 1px solid #e0e0e0;\r\n}\r\n\r\n#toggle:hover {\r\n  background-color: #e9e9e9;\r\n}\r\n\r\n#fahrenheit,\r\n#celsius {\r\n  transition: color 0.3s ease;\r\n}\r\n\r\n#fahrenheit[style='color: black'],\r\n#celsius[style='color: black'] {\r\n  color: #4584f1 !important;\r\n  font-weight: 600;\r\n}\r\n\r\n/* Error Message */\r\n#error {\r\n  color: #e53935;\r\n  font-size: 0.875rem;\r\n  margin-top: 0.5rem;\r\n  display: block;\r\n  padding-left: 0.25rem;\r\n  position: static;\r\n}\r\n\r\n/* Loading State */\r\n#loading {\r\n  padding: 3rem 1.5rem;\r\n  text-align: center;\r\n}\r\n\r\n#loading h1 {\r\n  font-size: 1.5rem;\r\n  color: #666;\r\n  margin: 0;\r\n  animation: pulse 1.5s infinite ease-in-out;\r\n}\r\n\r\n@keyframes pulse {\r\n  0% {\r\n    opacity: 0.6;\r\n  }\r\n  50% {\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    opacity: 0.6;\r\n  }\r\n}\r\n\r\n/* Weather Information Display */\r\n#info {\r\n  padding: 2rem 1.5rem;\r\n  position: static;\r\n  margin: 0;\r\n}\r\n\r\n#info > div:first-child {\r\n  margin-bottom: 2rem;\r\n  text-align: center;\r\n}\r\n\r\n#location {\r\n  font-size: 1.8rem;\r\n  color: #333;\r\n  margin-bottom: 0.5rem;\r\n  font-weight: 600;\r\n}\r\n\r\n#time {\r\n  font-size: 1rem;\r\n  color: #666;\r\n  font-weight: 400;\r\n}\r\n\r\n/* Fixed alignment for temperature and condition */\r\n#info > div:last-child {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  gap: 1rem;\r\n  background-color: rgba(69, 132, 241, 0.1);\r\n  border-radius: 12px;\r\n  padding: 1.5rem;\r\n  text-align: center;\r\n}\r\n\r\n#temperature,\r\n#condition {\r\n  font-size: 1.5rem;\r\n  font-weight: 500;\r\n  color: #333;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  position: relative;\r\n  padding-bottom: 1.5rem;\r\n}\r\n\r\n#temperature::after,\r\n#condition::after {\r\n  position: absolute;\r\n  bottom: 0;\r\n  font-size: 0.875rem;\r\n  color: #666;\r\n  font-weight: 400;\r\n}\r\n\r\n#temperature::after {\r\n  content: 'Temperature';\r\n}\r\n\r\n#condition::after {\r\n  content: 'Condition';\r\n}\r\n\r\n/* Weather Icons - add these later with proper imagery */\r\n.weather-icon {\r\n  font-size: 2.5rem;\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\n/* Responsive Adjustments */\r\n@media (max-width: 600px) {\r\n  .weather-container {\r\n    border-radius: 12px;\r\n  }\r\n\r\n  #location {\r\n    font-size: 1.5rem;\r\n  }\r\n\r\n  /* Keep the grid layout on mobile */\r\n  #info > div:last-child {\r\n    grid-template-columns: 1fr 1fr;\r\n  }\r\n}\r\n"],sourceRoot:""}]);const a=i},314:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,A){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var a=0;a<this.length;a++){var s=this[a][0];null!=s&&(i[s]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);t&&i[l[0]]||(void 0!==A&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=A),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),r.push(l))}},r}},354:n=>{n.exports=function(n){var r=n[1],e=n[3];if(!e)return r;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),A="/*# ".concat(o," */");return[r].concat([A]).join("\n")}return[r].join("\n")}},72:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var A={},i=[],a=0;a<n.length;a++){var s=n[a],c=t.base?s[0]+t.base:s[0],l=A[c]||0,d="".concat(c," ").concat(l);A[c]=l+1;var m=e(d),B={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)r[m].references++,r[m].updater(B);else{var p=o(B,t);t.byIndex=a,r.splice(a,0,{identifier:d,updater:p,references:1})}i.push(d)}return i}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var A=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<A.length;i++){var a=e(A[i]);r[a].references--}for(var s=t(n,o),c=0;c<A.length;c++){var l=e(A[c]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}A=s}}},659:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},540:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},56:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var A=e.sourceMap;A&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(A))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},113:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var A=r[t]={id:t,exports:{}};return n[t](A,A.exports,e),A.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),e.nc=void 0;var t=e(72),o=e.n(t),A=e(825),i=e.n(A),a=e(659),s=e.n(a),c=e(56),l=e.n(c),d=e(540),m=e.n(d),B=e(113),p=e.n(B),f=e(208),E={};E.styleTagTransform=p(),E.setAttributes=l(),E.insert=s().bind(null,"head"),E.domAPI=i(),E.insertStyleElement=m(),o()(f.A,E),f.A&&f.A.locals&&f.A.locals;const g=document.querySelector("form"),u=document.querySelector("#location-input"),C=document.getElementById("toggle"),b=document.getElementById("loading"),h=document.getElementById("error"),y=document.getElementById("info"),x=document.getElementById("location"),v=document.getElementById("time"),k=document.getElementById("temperature"),w=document.getElementById("condition"),I=document.getElementById("fahrenheit"),S=document.getElementById("celsius");g.addEventListener("submit",(n=>{n.preventDefault();const r=u.value;b.style.display="block",y.style.display="none",h.style.display="none",async function(){try{const n=await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${r}?key=57GV7C6SHUYNDBU83BSHUSEGQ`);if(!n.ok)throw new Error("Invalid location, try again");const e=await n.json();!function(n,r,e,t,o,A){if(n.innerText=o.resolvedAddress,r.innerText=o.currentConditions.datetime,"black"===A.style.color)e.innerText=`${o.currentConditions.temp} Degree`;else{const n=(5/9*(o.currentConditions.temp-32)).toFixed(1);e.innerText=`${n} Degree`}t.innerText=o.currentConditions.conditions}(x,v,k,w,e,I),b.style.display="none",y.style.display="flex"}catch(n){h.innerText=n.message,h.style.display="block",b.style.display="none"}}(),u.value=""})),C.addEventListener("click",(()=>{const n=k.innerText.split(" ")[0];if("black"===I.style.color){I.style.color="rgba(0, 0, 0, 0.4)",S.style.color="black";const r=(5/9*(n-32)).toFixed(1);k.innerText=`${r} Degree`}else{S.style.color="rgba(0, 0, 0, 0.4)",I.style.color="black";const r=(1.8*n+32).toFixed(1);k.innerText=`${r} Degree`}}))})();
//# sourceMappingURL=bundle.js.map