(function(){"use strict";var e={766:function(e,t,o){var a=o(9963),n=o(6252);const r=(0,n._)("div",null,[(0,n._)("nav",{class:"navbar"},[(0,n._)("ul",{class:"navbar-menu"},[(0,n._)("li",null,[(0,n._)("a",{href:"/"},"Home")])])])],-1);function l(e,t,o,a,l,i){const c=(0,n.up)("ImageUploader"),s=(0,n.up)("PhotoStream");return(0,n.wg)(),(0,n.iD)(n.HY,null,[r,(0,n._)("body",null,[(0,n.Wm)(c,{msg:"Welcome to The Image Uploader!",onImageUploaded:i.refreshPhotostream},null,8,["onImageUploaded"]),(0,n.Wm)(s,{images:e.images,ref:"photostream",onImageDeleted:i.refreshPhotostream},null,8,["images","onImageDeleted"])])],64)}const i=e=>((0,n.dD)("data-v-244784c0"),e=e(),(0,n.Cn)(),e),c=i((()=>(0,n._)("h1",null,"Image Classification",-1))),s=i((()=>(0,n._)("label",{for:"category"},"Category:",-1))),d=(0,n.uE)('<option value="Top" data-v-244784c0>Top</option><option value="Bottom" data-v-244784c0>Bottom</option><option value="Shoes" data-v-244784c0>Shoes</option><option value="Hat" data-v-244784c0>Hat</option><option value="Accessory" data-v-244784c0>Accessory</option>',5),u=[d],g=i((()=>(0,n._)("button",{id:"classifyButton",type:"submit"},"Classify Image",-1))),m=i((()=>(0,n._)("p",{id:"resultLabel"},null,-1))),p={id:"imageContainer"},f=["src"];function h(e,t,o,r,l,i){return(0,n.wg)(),(0,n.iD)("div",null,[c,(0,n._)("form",{id:"imageForm",onSubmit:t[2]||(t[2]=(0,a.iM)(((...e)=>i.classifyImage&&i.classifyImage(...e)),["prevent"]))},[s,(0,n.wy)((0,n._)("select",{id:"category","onUpdate:modelValue":t[0]||(t[0]=e=>l.selectedCategory=e),required:""},u,512),[[a.bM,l.selectedCategory]]),(0,n._)("input",{type:"file",id:"imageFile",accept:".jpg,.jpeg,.png,.gif",required:"",onChange:t[1]||(t[1]=(...e)=>i.handleFileUpload&&i.handleFileUpload(...e))},null,32),g],32),m,(0,n._)("div",p,[l.imageUrl?((0,n.wg)(),(0,n.iD)("img",{key:0,id:"uploadedImage",alt:"Uploaded Image",src:l.imageUrl},null,8,f)):(0,n.kq)("",!0)])])}o(2062);var v={name:"ImageUploader",data(){return{imageUrl:null,selectedCategory:""}},methods:{handleFileUpload(e){const t=e.target.files[0];this.imageUrl=URL.createObjectURL(t)},classifyImage(){const e=document.getElementById("imageFile").files[0],t=new FormData;t.append("imageFile",e),t.append("category",this.selectedCategory),fetch("/backend/Upload",{method:"POST",body:t}).then((e=>e.json())).then((e=>{this.imageUrl=null,this.$emit("imageUploaded"),console.log(e)})).catch((e=>{console.log(e)}))}}},y=o(3744);const b=(0,y.Z)(v,[["render",h],["__scopeId","data-v-244784c0"]]);var I=b,_=o(3577);const U=(0,n._)("h1",null,"Photo Stream",-1),w={class:"photo-stream"},C=["onClick"],k=["src"],j={class:"card-info"},O=["onClick"],D={class:"image-category"};function F(e,t,o,a,r,l){return(0,n.wg)(),(0,n.iD)("div",null,[U,(0,n._)("div",w,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(r.images,(e=>((0,n.wg)(),(0,n.iD)("div",{class:"card",key:e.id,onClick:t=>l.openImage(e)},[(0,n._)("img",{class:"card-image",src:l.getImageUrl(e.data),alt:"Photo"},null,8,k),(0,n._)("div",j,[(0,n._)("button",{class:"delete-button",onClick:t=>l.deleteImage(e.id)},"Delete",8,O),(0,n._)("div",D,(0,_.zw)(e.category),1)])],8,C)))),128))])])}o(2801),o(8675),o(3408),o(4590),o(3462),o(1439),o(7585),o(5315);var P={data(){return{images:[]}},methods:{openImage(){},getImageUrl(e){try{if(!e)return console.error("Invalid image data:",e),null;const t=atob(e),o=new Uint8Array(t.length);for(let e=0;e<t.length;e++)o[e]=t.charCodeAt(e);const a=new Blob([o.buffer],{type:"image/jpeg"});return URL.createObjectURL(a)}catch(t){return console.error("Error converting image data:",t),null}},async fetchImages(){try{const e=await fetch("/backend/Images"),t=await e.json();console.log("Retrieved images:",t),this.images=t}catch(e){console.error("Failed to fetch images:",e)}},async deleteImage(e){try{const t=await fetch(`/backend/Images/${e}`,{method:"DELETE"});t.ok?(console.log("Image deleted:",e),this.$emit("imageDeleted")):console.error("Failed to delete image:",e)}catch(t){console.error("Error deleting image:",t)}}},mounted(){console.log("Component mounted"),this.fetchImages()}};const E=(0,y.Z)(P,[["render",F]]);var S=E,T={name:"App",components:{ImageUploader:I,PhotoStream:S},data(){return{}},methods:{refreshPhotostream(){this.$refs.photostream.fetchImages()}}};const L=(0,y.Z)(T,[["render",l]]);var x=L;(0,a.ri)(x).mount("#app")}},t={};function o(a){var n=t[a];if(void 0!==n)return n.exports;var r=t[a]={exports:{}};return e[a].call(r.exports,r,r.exports,o),r.exports}o.m=e,function(){var e=[];o.O=function(t,a,n,r){if(!a){var l=1/0;for(d=0;d<e.length;d++){a=e[d][0],n=e[d][1],r=e[d][2];for(var i=!0,c=0;c<a.length;c++)(!1&r||l>=r)&&Object.keys(o.O).every((function(e){return o.O[e](a[c])}))?a.splice(c--,1):(i=!1,r<l&&(l=r));if(i){e.splice(d--,1);var s=n();void 0!==s&&(t=s)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[a,n,r]}}(),function(){o.d=function(e,t){for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,a){var n,r,l=a[0],i=a[1],c=a[2],s=0;if(l.some((function(t){return 0!==e[t]}))){for(n in i)o.o(i,n)&&(o.m[n]=i[n]);if(c)var d=c(o)}for(t&&t(a);s<l.length;s++)r=l[s],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(d)},a=self["webpackChunkyour_vue_project"]=self["webpackChunkyour_vue_project"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=o.O(void 0,[998],(function(){return o(766)}));a=o.O(a)})();
//# sourceMappingURL=app.34c4d00f.js.map