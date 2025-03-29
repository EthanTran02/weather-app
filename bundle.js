(()=>{"use strict";var n={208:(n,r,e)=>{e.d(r,{A:()=>i});var t=e(354),o=e.n(t),A=e(314),a=e.n(A)()(o());a.push([n.id,"/* style.css */\n/* Updated Base Styles */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;\n  line-height: 1.6;\n  -webkit-font-smoothing: antialiased;\n  background: linear-gradient(135deg, #83a4d4, #b6fbff);\n  min-height: 100vh;\n  color: #2d3436;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  padding: 2rem 1rem;\n  transition: background 0.5s ease;\n}\n\n.weather-container {\n  width: 100%;\n  max-width: 800px;\n  background: rgba(255, 255, 255, 0.95);\n  border-radius: 20px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n  backdrop-filter: blur(10px);\n  margin-top: 1rem;\n  overflow: visible;\n}\n\n/* Enhanced Form Styling */\nform {\n  padding: 2rem;\n  border-bottom: 1px solid rgba(223, 230, 233, 0.5);\n}\n\n.form-header {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 1rem;\n}\n\n.form-header i {\n  color: #4a90e2;\n  font-size: 1.4rem;\n}\n\nform label {\n  font-size: 1.4rem;\n  color: #2d3436;\n  font-weight: 600;\n}\n\ninput[type='text'] {\n  width: 100%;\n  border: 2px solid #dfe6e9;\n  font-size: 1.1rem;\n  padding: 1rem;\n  border-radius: 12px;\n  margin-bottom: 1rem;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\ninput[type='text']:focus {\n  outline: none;\n  border-color: #4a90e2;\n  box-shadow: 0 0 0 4px rgba(74, 144, 226, 0.1);\n}\n\n/* Modern Button Styles */\n.button-group {\n  display: flex;\n  gap: 1rem;\n  margin-top: 1rem;\n}\n\nbutton {\n  cursor: pointer;\n  border: none;\n  padding: 1rem 2rem;\n  border-radius: 12px;\n  font-size: 1rem;\n  font-weight: 600;\n  transition: all 0.2s ease;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\n}\n\n#search {\n  background: linear-gradient(135deg, #4a90e2, #3066be);\n  color: white;\n  flex: 1;\n}\n\n#search:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);\n}\n\n#toggle {\n  background: #ffffff;\n  border: 2px solid #dfe6e9;\n  color: #2d3436;\n}\n\n#toggle:hover {\n  background: #f8f9fa;\n}\n\n/* Weather Data Grid */\n#info {\n  display: none;\n  flex-direction: column;\n  gap: 1.5rem;\n  padding: 2rem;\n}\n\n.location-info {\n  text-align: center;\n  margin-bottom: 1.5rem;\n}\n\n#location {\n  font-size: 2rem;\n  margin-bottom: 0.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n\n#time {\n  font-size: 1.2rem;\n  color: #666;\n}\n\n.weather-data {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 1.5rem;\n}\n\n.weather-card {\n  background: white;\n  padding: 1.5rem;\n  border-radius: 16px;\n  text-align: center;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\n  transition: transform 0.2s ease;\n}\n\n.weather-card:hover {\n  transform: translateY(-5px);\n}\n\n.weather-card i {\n  font-size: 2rem;\n  color: #4a90e2;\n  margin-bottom: 1rem;\n}\n\n.main-temp {\n  grid-column: span 2;\n  background: linear-gradient(135deg, #4a90e2, #3066be);\n  color: white;\n}\n\n.main-temp i,\n.main-temp .card-label {\n  color: rgba(255, 255, 255, 0.9);\n}\n\n.card-label {\n  font-size: 0.9rem;\n  color: #666;\n  margin-top: 0.5rem;\n}\n\n/* Loading Animation */\n#loading {\n  display: none;\n  flex-direction: column;\n  align-items: center;\n  padding: 3rem;\n}\n\n.loader {\n  width: 50px;\n  height: 50px;\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #4a90e2;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin-bottom: 1.5rem;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n/* Error Message Styling */\n#error {\n  display: none;\n  background: #ffe3e3;\n  color: #ff6b6b;\n  padding: 1rem;\n  border-radius: 8px;\n  margin-top: 1rem;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n/* Responsive Design */\n@media (max-width: 768px) {\n  .weather-container {\n    border-radius: 16px;\n    margin-top: 0.5rem;\n  }\n\n  #location {\n    font-size: 1.5rem;\n  }\n\n  .weather-data {\n    grid-template-columns: 1fr;\n  }\n\n  .main-temp {\n    grid-column: span 1;\n  }\n\n  button {\n    padding: 0.75rem 1.5rem;\n  }\n}\n\n","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"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",sourcesContent:["/* style.css */\r\n/* Updated Base Styles */\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  font-family: 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;\r\n  line-height: 1.6;\r\n  -webkit-font-smoothing: antialiased;\r\n  background: linear-gradient(135deg, #83a4d4, #b6fbff);\r\n  min-height: 100vh;\r\n  color: #2d3436;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n  padding: 2rem 1rem;\r\n  transition: background 0.5s ease;\r\n}\r\n\r\n.weather-container {\r\n  width: 100%;\r\n  max-width: 800px;\r\n  background: rgba(255, 255, 255, 0.95);\r\n  border-radius: 20px;\r\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\r\n  backdrop-filter: blur(10px);\r\n  margin-top: 1rem;\r\n  overflow: visible;\r\n}\r\n\r\n/* Enhanced Form Styling */\r\nform {\r\n  padding: 2rem;\r\n  border-bottom: 1px solid rgba(223, 230, 233, 0.5);\r\n}\r\n\r\n.form-header {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 0.5rem;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.form-header i {\r\n  color: #4a90e2;\r\n  font-size: 1.4rem;\r\n}\r\n\r\nform label {\r\n  font-size: 1.4rem;\r\n  color: #2d3436;\r\n  font-weight: 600;\r\n}\r\n\r\ninput[type='text'] {\r\n  width: 100%;\r\n  border: 2px solid #dfe6e9;\r\n  font-size: 1.1rem;\r\n  padding: 1rem;\r\n  border-radius: 12px;\r\n  margin-bottom: 1rem;\r\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\r\n}\r\n\r\ninput[type='text']:focus {\r\n  outline: none;\r\n  border-color: #4a90e2;\r\n  box-shadow: 0 0 0 4px rgba(74, 144, 226, 0.1);\r\n}\r\n\r\n/* Modern Button Styles */\r\n.button-group {\r\n  display: flex;\r\n  gap: 1rem;\r\n  margin-top: 1rem;\r\n}\r\n\r\nbutton {\r\n  cursor: pointer;\r\n  border: none;\r\n  padding: 1rem 2rem;\r\n  border-radius: 12px;\r\n  font-size: 1rem;\r\n  font-weight: 600;\r\n  transition: all 0.2s ease;\r\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\r\n}\r\n\r\n#search {\r\n  background: linear-gradient(135deg, #4a90e2, #3066be);\r\n  color: white;\r\n  flex: 1;\r\n}\r\n\r\n#search:hover {\r\n  transform: translateY(-2px);\r\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n#toggle {\r\n  background: #ffffff;\r\n  border: 2px solid #dfe6e9;\r\n  color: #2d3436;\r\n}\r\n\r\n#toggle:hover {\r\n  background: #f8f9fa;\r\n}\r\n\r\n/* Weather Data Grid */\r\n#info {\r\n  display: none;\r\n  flex-direction: column;\r\n  gap: 1.5rem;\r\n  padding: 2rem;\r\n}\r\n\r\n.location-info {\r\n  text-align: center;\r\n  margin-bottom: 1.5rem;\r\n}\r\n\r\n#location {\r\n  font-size: 2rem;\r\n  margin-bottom: 0.5rem;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 0.5rem;\r\n}\r\n\r\n#time {\r\n  font-size: 1.2rem;\r\n  color: #666;\r\n}\r\n\r\n.weather-data {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\r\n  gap: 1.5rem;\r\n}\r\n\r\n.weather-card {\r\n  background: white;\r\n  padding: 1.5rem;\r\n  border-radius: 16px;\r\n  text-align: center;\r\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\r\n  transition: transform 0.2s ease;\r\n}\r\n\r\n.weather-card:hover {\r\n  transform: translateY(-5px);\r\n}\r\n\r\n.weather-card i {\r\n  font-size: 2rem;\r\n  color: #4a90e2;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.main-temp {\r\n  grid-column: span 2;\r\n  background: linear-gradient(135deg, #4a90e2, #3066be);\r\n  color: white;\r\n}\r\n\r\n.main-temp i,\r\n.main-temp .card-label {\r\n  color: rgba(255, 255, 255, 0.9);\r\n}\r\n\r\n.card-label {\r\n  font-size: 0.9rem;\r\n  color: #666;\r\n  margin-top: 0.5rem;\r\n}\r\n\r\n/* Loading Animation */\r\n#loading {\r\n  display: none;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 3rem;\r\n}\r\n\r\n.loader {\r\n  width: 50px;\r\n  height: 50px;\r\n  border: 4px solid #f3f3f3;\r\n  border-top: 4px solid #4a90e2;\r\n  border-radius: 50%;\r\n  animation: spin 1s linear infinite;\r\n  margin-bottom: 1.5rem;\r\n}\r\n\r\n@keyframes spin {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n/* Error Message Styling */\r\n#error {\r\n  display: none;\r\n  background: #ffe3e3;\r\n  color: #ff6b6b;\r\n  padding: 1rem;\r\n  border-radius: 8px;\r\n  margin-top: 1rem;\r\n  align-items: center;\r\n  gap: 0.5rem;\r\n}\r\n\r\n/* Responsive Design */\r\n@media (max-width: 768px) {\r\n  .weather-container {\r\n    border-radius: 16px;\r\n    margin-top: 0.5rem;\r\n  }\r\n\r\n  #location {\r\n    font-size: 1.5rem;\r\n  }\r\n\r\n  .weather-data {\r\n    grid-template-columns: 1fr;\r\n  }\r\n\r\n  .main-temp {\r\n    grid-column: span 1;\r\n  }\r\n\r\n  button {\r\n    padding: 0.75rem 1.5rem;\r\n  }\r\n}\r\n\r\n"],sourceRoot:""}]);const i=a},314:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,A){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(a[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);t&&a[l[0]]||(void 0!==A&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=A),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),r.push(l))}},r}},354:n=>{n.exports=function(n){var r=n[1],e=n[3];if(!e)return r;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),A="/*# ".concat(o," */");return[r].concat([A]).join("\n")}return[r].join("\n")}},72:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var A={},a=[],i=0;i<n.length;i++){var s=n[i],d=t.base?s[0]+t.base:s[0],l=A[d]||0,c="".concat(d," ").concat(l);A[d]=l+1;var m=e(c),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)r[m].references++,r[m].updater(p);else{var B=o(p,t);t.byIndex=i,r.splice(i,0,{identifier:c,updater:B,references:1})}a.push(c)}return a}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var A=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<A.length;a++){var i=e(A[a]);r[i].references--}for(var s=t(n,o),d=0;d<A.length;d++){var l=e(A[d]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}A=s}}},659:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},540:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},56:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var A=e.sourceMap;A&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(A))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},113:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var A=r[t]={id:t,exports:{}};return n[t](A,A.exports,e),A.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),e.nc=void 0;var t=e(72),o=e.n(t),A=e(825),a=e.n(A),i=e(659),s=e.n(i),d=e(56),l=e.n(d),c=e(540),m=e.n(c),p=e(113),B=e.n(p),E=e(208),g={};g.styleTagTransform=B(),g.setAttributes=l(),g.insert=s().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=m(),o()(E.A,g),E.A&&E.A.locals&&E.A.locals;const f=document.querySelector("form"),C=document.querySelector("#location-input"),u=document.getElementById("toggle"),b=document.getElementById("loading"),x=document.getElementById("error"),y=document.getElementById("info"),h=document.getElementById("location"),v=document.getElementById("time"),w=document.getElementById("temperature"),k=document.getElementById("condition"),z=document.getElementById("humidity"),I=document.getElementById("wind"),D=document.getElementById("fahrenheit"),S=document.getElementById("celsius");f.addEventListener("submit",(n=>{n.preventDefault();const r=C.value;b.style.display="block",y.style.display="none",x.style.display="none",async function(){try{const n=await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${r}?key=57GV7C6SHUYNDBU83BSHUSEGQ`);if(!n.ok)throw new Error("Invalid location, try again");const e=await n.json();!function(n,r,e,t,o,A,a,i){if(n.innerText=a.resolvedAddress,r.innerText=a.currentConditions.datetime,"black"===i.style.color)e.innerText=`${a.currentConditions.temp} Degree`;else{const n=(5/9*(a.currentConditions.temp-32)).toFixed(1);e.innerText=`${n} Degree`}t.innerText=a.currentConditions.conditions,o.innerText=a.currentConditions.humidity,A.innerText=a.currentConditions.windspeed}(h,v,w,k,z,I,e,D),b.style.display="none",y.style.display="flex"}catch(n){x.innerText=n.message,x.style.display="block",b.style.display="none"}}(),C.value=""})),u.addEventListener("click",(()=>{const n=w.innerText.split(" ")[0];if("black"===D.style.color){D.style.color="rgba(0, 0, 0, 0.4)",S.style.color="black";const r=(5/9*(n-32)).toFixed(1);w.innerText=`${r} Degree`}else{S.style.color="rgba(0, 0, 0, 0.4)",D.style.color="black";const r=(1.8*n+32).toFixed(1);w.innerText=`${r} Degree`}}))})();
//# sourceMappingURL=bundle.js.map