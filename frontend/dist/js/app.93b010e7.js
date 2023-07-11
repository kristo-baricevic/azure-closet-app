(function(){"use strict";var e={2832:function(e,t,o){var n=o(9963),a=o(6252);const r=(0,a.uE)('<div><nav class="navbar"><ul class="navbar-menu"><li><a href="/">Home</a></li><li><a href="/about">About</a></li><li><a href="/contact">Contact</a></li></ul></nav></div>',1);function i(e,t,o,n,i,l){const c=(0,a.up)("HelloWorld"),s=(0,a.up)("PhotoStream");return(0,a.wg)(),(0,a.iD)(a.HY,null,[r,(0,a._)("body",null,[(0,a.Wm)(c,{msg:"Welcome to The Image Uploader!"}),(0,a.Wm)(s)])],64)}const l=e=>((0,a.dD)("data-v-e8b452ee"),e=e(),(0,a.Cn)(),e),c=l((()=>(0,a._)("h1",null,"Image Classification",-1))),s=l((()=>(0,a._)("label",{for:"category"},"Category:",-1))),u=(0,a.uE)('<option value="Top" data-v-e8b452ee>Top</option><option value="Bottom" data-v-e8b452ee>Bottom</option><option value="Shoes" data-v-e8b452ee>Shoes</option><option value="Hat" data-v-e8b452ee>Hat</option><option value="Accessory" data-v-e8b452ee>Accessory</option>',5),d=[u],g=l((()=>(0,a._)("button",{id:"classifyButton",type:"submit"},"Classify Image",-1))),m=l((()=>(0,a._)("p",{id:"resultLabel"},null,-1))),p={id:"imageContainer"},f=["src"];function v(e,t,o,r,i,l){return(0,a.wg)(),(0,a.iD)("div",null,[c,(0,a._)("form",{id:"imageForm",onSubmit:t[2]||(t[2]=(0,n.iM)(((...e)=>l.classifyImage&&l.classifyImage(...e)),["prevent"]))},[s,(0,a.wy)((0,a._)("select",{id:"category","onUpdate:modelValue":t[0]||(t[0]=e=>i.selectedCategory=e),required:""},d,512),[[n.bM,i.selectedCategory]]),(0,a._)("input",{type:"file",id:"imageFile",accept:".jpg,.jpeg,.png,.gif",required:"",onChange:t[1]||(t[1]=(...e)=>l.handleFileUpload&&l.handleFileUpload(...e))},null,32),g],32),m,(0,a._)("div",p,[i.imageUrl?((0,a.wg)(),(0,a.iD)("img",{key:0,id:"uploadedImage",alt:"Uploaded Image",src:i.imageUrl},null,8,f)):(0,a.kq)("",!0)])])}o(2062);var h={name:"HelloWorld",data(){return{imageUrl:null,selectedCategory:""}},methods:{handleFileUpload(e){const t=e.target.files[0];this.imageUrl=URL.createObjectURL(t)},classifyImage(){const e=document.getElementById("imageFile").files[0],t=new FormData;t.append("imageFile",e),t.append("category",this.selectedCategory),fetch("/backend/Upload",{method:"POST",body:t}).then((e=>e.json())).then((e=>{console.log(e)})).catch((e=>{console.log(e)}))}}},b=o(3744);const y=(0,b.Z)(h,[["render",v],["__scopeId","data-v-e8b452ee"]]);var w=y;const I=(0,a._)("h1",null,"Photo Stream",-1),U={class:"photo-stream"},_=["onClick"],C=["src"];function j(e,t,o,n,r,i){return(0,a.wg)(),(0,a.iD)("div",null,[I,(0,a._)("div",U,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.images,(e=>((0,a.wg)(),(0,a.iD)("div",{key:e.id,onClick:t=>i.openImage(e)},[(0,a._)("img",{src:i.getImageUrl(e.data),alt:"Photo"},null,8,C)],8,_)))),128))])])}o(2801),o(8675),o(3408),o(4590),o(3462),o(1439),o(7585),o(5315);var O={data(){return{images:[]}},methods:{openImage(){},getImageUrl(e){try{if(!e)return console.error("Invalid image data:",e),null;const t=atob(e),o=new Uint8Array(t.length);for(let e=0;e<t.length;e++)o[e]=t.charCodeAt(e);const n=new Blob([o.buffer],{type:"image/jpeg"});return URL.createObjectURL(n)}catch(t){return console.error("Error converting image data:",t),null}},async fetchImages(){try{const e=await fetch("/backend/Images"),t=await e.json();console.log("Retrieved images:",t),this.images=t.map(((e,t)=>({id:t,data:e})))}catch(e){console.error("Failed to fetch images:",e)}}},mounted(){console.log("Component mounted"),this.fetchImages()}};const k=(0,b.Z)(O,[["render",j]]);var F=k,D={name:"App",components:{HelloWorld:w,PhotoStream:F}};const H=(0,b.Z)(D,[["render",i]]);var P=H;(0,n.ri)(P).mount("#app")}},t={};function o(n){var a=t[n];if(void 0!==a)return a.exports;var r=t[n]={exports:{}};return e[n].call(r.exports,r,r.exports,o),r.exports}o.m=e,function(){var e=[];o.O=function(t,n,a,r){if(!n){var i=1/0;for(u=0;u<e.length;u++){n=e[u][0],a=e[u][1],r=e[u][2];for(var l=!0,c=0;c<n.length;c++)(!1&r||i>=r)&&Object.keys(o.O).every((function(e){return o.O[e](n[c])}))?n.splice(c--,1):(l=!1,r<i&&(i=r));if(l){e.splice(u--,1);var s=a();void 0!==s&&(t=s)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[n,a,r]}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,r,i=n[0],l=n[1],c=n[2],s=0;if(i.some((function(t){return 0!==e[t]}))){for(a in l)o.o(l,a)&&(o.m[a]=l[a]);if(c)var u=c(o)}for(t&&t(n);s<i.length;s++)r=i[s],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(u)},n=self["webpackChunkyour_vue_project"]=self["webpackChunkyour_vue_project"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(2832)}));n=o.O(n)})();
//# sourceMappingURL=app.93b010e7.js.map