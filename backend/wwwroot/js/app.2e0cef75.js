(function(){"use strict";var e={1522:function(e,t,o){var n=o(9963),a=o(6252);const r=(0,a._)("div",null,[(0,a._)("nav",{class:"navbar"},[(0,a._)("ul",{class:"navbar-menu"},[(0,a._)("li",null,[(0,a._)("a",{href:"/"},"Home")])])])],-1);function l(e,t,o,n,l,i){const c=(0,a.up)("HelloWorld"),s=(0,a.up)("PhotoStream");return(0,a.wg)(),(0,a.iD)(a.HY,null,[r,(0,a._)("body",null,[(0,a.Wm)(c,{msg:"Welcome to The Image Uploader!",onImageUploaded:i.refreshPhotostream},null,8,["onImageUploaded"]),(0,a.Wm)(s,{images:e.images,ref:"photostream"},null,8,["images"])])],64)}const i=e=>((0,a.dD)("data-v-f4fd711c"),e=e(),(0,a.Cn)(),e),c=i((()=>(0,a._)("h1",null,"Image Classification",-1))),s=i((()=>(0,a._)("label",{for:"category"},"Category:",-1))),u=(0,a.uE)('<option value="Top" data-v-f4fd711c>Top</option><option value="Bottom" data-v-f4fd711c>Bottom</option><option value="Shoes" data-v-f4fd711c>Shoes</option><option value="Hat" data-v-f4fd711c>Hat</option><option value="Accessory" data-v-f4fd711c>Accessory</option>',5),d=[u],m=i((()=>(0,a._)("button",{id:"classifyButton",type:"submit"},"Classify Image",-1))),g=i((()=>(0,a._)("p",{id:"resultLabel"},null,-1))),f={id:"imageContainer"},p=["src"];function h(e,t,o,r,l,i){return(0,a.wg)(),(0,a.iD)("div",null,[c,(0,a._)("form",{id:"imageForm",onSubmit:t[2]||(t[2]=(0,n.iM)(((...e)=>i.classifyImage&&i.classifyImage(...e)),["prevent"]))},[s,(0,a.wy)((0,a._)("select",{id:"category","onUpdate:modelValue":t[0]||(t[0]=e=>l.selectedCategory=e),required:""},d,512),[[n.bM,l.selectedCategory]]),(0,a._)("input",{type:"file",id:"imageFile",accept:".jpg,.jpeg,.png,.gif",required:"",onChange:t[1]||(t[1]=(...e)=>i.handleFileUpload&&i.handleFileUpload(...e))},null,32),m],32),g,(0,a._)("div",f,[l.imageUrl?((0,a.wg)(),(0,a.iD)("img",{key:0,id:"uploadedImage",alt:"Uploaded Image",src:l.imageUrl},null,8,p)):(0,a.kq)("",!0)])])}o(2062);var v={name:"HelloWorld",data(){return{imageUrl:null,selectedCategory:""}},methods:{handleFileUpload(e){const t=e.target.files[0];this.imageUrl=URL.createObjectURL(t)},classifyImage(){const e=document.getElementById("imageFile").files[0],t=new FormData;t.append("imageFile",e),t.append("category",this.selectedCategory),fetch("/backend/Upload",{method:"POST",body:t}).then((e=>e.json())).then((e=>{this.imageUrl=null,this.$emit("imageUploaded"),console.log(e)})).catch((e=>{console.log(e)}))}}},y=o(3744);const b=(0,y.Z)(v,[["render",h],["__scopeId","data-v-f4fd711c"]]);var _=b;const U=(0,a._)("h1",null,"Photo Stream",-1),I={class:"photo-stream"},w=["onClick"],C=["src"];function j(e,t,o,n,r,l){return(0,a.wg)(),(0,a.iD)("div",null,[U,(0,a._)("div",I,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.images,(e=>((0,a.wg)(),(0,a.iD)("div",{key:e.id,onClick:t=>l.openImage(e)},[(0,a._)("img",{src:l.getImageUrl(e.data),alt:"Photo"},null,8,C)],8,w)))),128))])])}o(2801),o(8675),o(3408),o(4590),o(3462),o(1439),o(7585),o(5315);var O={data(){return{images:[]}},methods:{openImage(){},getImageUrl(e){try{if(!e)return console.error("Invalid image data:",e),null;const t=atob(e),o=new Uint8Array(t.length);for(let e=0;e<t.length;e++)o[e]=t.charCodeAt(e);const n=new Blob([o.buffer],{type:"image/jpeg"});return URL.createObjectURL(n)}catch(t){return console.error("Error converting image data:",t),null}},async fetchImages(){try{const e=await fetch("/backend/Images"),t=await e.json();console.log("Retrieved images:",t),this.images=t.map(((e,t)=>({id:t,data:e})))}catch(e){console.error("Failed to fetch images:",e)}}},mounted(){console.log("Component mounted"),this.fetchImages()}};const k=(0,y.Z)(O,[["render",j]]);var F=k,P={name:"App",components:{HelloWorld:_,PhotoStream:F},data(){return{}},methods:{refreshPhotostream(){this.$refs.photostream.fetchImages()}}};const D=(0,y.Z)(P,[["render",l]]);var H=D;(0,n.ri)(H).mount("#app")}},t={};function o(n){var a=t[n];if(void 0!==a)return a.exports;var r=t[n]={exports:{}};return e[n].call(r.exports,r,r.exports,o),r.exports}o.m=e,function(){var e=[];o.O=function(t,n,a,r){if(!n){var l=1/0;for(u=0;u<e.length;u++){n=e[u][0],a=e[u][1],r=e[u][2];for(var i=!0,c=0;c<n.length;c++)(!1&r||l>=r)&&Object.keys(o.O).every((function(e){return o.O[e](n[c])}))?n.splice(c--,1):(i=!1,r<l&&(l=r));if(i){e.splice(u--,1);var s=a();void 0!==s&&(t=s)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[n,a,r]}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,r,l=n[0],i=n[1],c=n[2],s=0;if(l.some((function(t){return 0!==e[t]}))){for(a in i)o.o(i,a)&&(o.m[a]=i[a]);if(c)var u=c(o)}for(t&&t(n);s<l.length;s++)r=l[s],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(u)},n=self["webpackChunkyour_vue_project"]=self["webpackChunkyour_vue_project"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(1522)}));n=o.O(n)})();
//# sourceMappingURL=app.2e0cef75.js.map