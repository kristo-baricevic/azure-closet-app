(function(){"use strict";var e={9382:function(e,t,o){var s=o(9963),l=o(6252);const a={class:"body-container"},n=(0,l._)("nav",{class:"navbar"},[(0,l._)("ul",{class:"navbar-menu"},[(0,l._)("li",null,[(0,l._)("a",{href:"/"},"Kristo's Closet")])])],-1),i={key:0,class:"desktop-layout"},c={class:"photostream-container resizable"},r={class:"outfit-view-container resizable"},d={key:1,class:"mobile-layout"},m={class:"photostream-container resizable"},g={class:"outfit-view-container resizable"};function u(e,t,o,s,u,h){const I=(0,l.up)("ImageUploader"),p=(0,l.up)("PhotoStream"),v=(0,l.up)("OutfitView");return(0,l.wg)(),(0,l.iD)("div",a,[n,(0,l._)("div",null,[(0,l.Wm)(I,{msg:"Welcome to The Image Uploader!",onImageUploaded:h.refreshPhotostream},null,8,["onImageUploaded"])]),u.isDesktop?((0,l.wg)(),(0,l.iD)("div",i,[(0,l._)("div",c,[(0,l.Wm)(p,{selectedItems:u.selectedItems,images:o.images,ref:"photostream",onImageDeleted:h.refreshPhotostream,onSelectImage:h.handleSelectImage},null,8,["selectedItems","images","onImageDeleted","onSelectImage"])]),(0,l._)("div",r,[(0,l.Wm)(v,{selectedItems:u.selectedItems,onRemoveItem:h.handleRemoveItem,class:"outfit-view-desktop"},null,8,["selectedItems","onRemoveItem"])])])):((0,l.wg)(),(0,l.iD)("div",d,[(0,l._)("div",m,[(0,l.Wm)(p,{selectedItems:u.selectedItems,localSelectedItems:e.localSelectedItems,images:o.images,ref:"photostream",onImageDeleted:h.refreshPhotostream,onSelectImage:h.handleSelectImage},null,8,["selectedItems","localSelectedItems","images","onImageDeleted","onSelectImage"])]),(0,l._)("div",g,[(0,l.Wm)(v,{selectedItems:u.selectedItems,onRemoveItem:h.handleRemoveItem,class:"outfit-view-mobile"},null,8,["selectedItems","onRemoveItem"])])]))])}const h=e=>((0,l.dD)("data-v-a5d363aa"),e=e(),(0,l.Cn)(),e),I=h((()=>(0,l._)("h1",null,"Image Classification",-1))),p=h((()=>(0,l._)("label",{for:"category"},"Category:",-1))),v=(0,l.uE)('<option value="Top" data-v-a5d363aa>Top</option><option value="Bottom" data-v-a5d363aa>Bottom</option><option value="Top" data-v-a5d363aa>One-piece</option><option value="Shoes" data-v-a5d363aa>Shoes</option><option value="Hat" data-v-a5d363aa>Hat</option><option value="Accessory" data-v-a5d363aa>Accessory</option>',6),f=[v],w=h((()=>(0,l._)("button",{id:"classifyButton",type:"submit"},"Classify Image",-1))),y=h((()=>(0,l._)("p",{id:"resultLabel"},null,-1))),k={id:"imageContainer"},b=["src"];function S(e,t,o,a,n,i){return(0,l.wg)(),(0,l.iD)("div",null,[I,(0,l._)("form",{id:"imageForm",onSubmit:t[2]||(t[2]=(0,s.iM)(((...e)=>i.classifyImage&&i.classifyImage(...e)),["prevent"]))},[p,(0,l.wy)((0,l._)("select",{id:"category","onUpdate:modelValue":t[0]||(t[0]=e=>n.selectedCategory=e),required:""},f,512),[[s.bM,n.selectedCategory]]),(0,l._)("input",{type:"file",id:"imageFile",accept:".jpg,.jpeg,.png,.gif",required:"",onChange:t[1]||(t[1]=(...e)=>i.handleFileUpload&&i.handleFileUpload(...e))},null,32),w],32),y,(0,l._)("div",k,[n.imageUrl?((0,l.wg)(),(0,l.iD)("img",{key:0,id:"uploadedImage",alt:"Uploaded Image",src:n.imageUrl},null,8,b)):(0,l.kq)("",!0)])])}o(2062);var _={name:"ImageUploader",data(){return{imageUrl:null,selectedCategory:""}},methods:{handleFileUpload(e){const t=e.target.files[0];this.imageUrl=URL.createObjectURL(t)},classifyImage(){const e=document.getElementById("imageFile").files[0],t=new FormData;t.append("imageFile",e),t.append("category",this.selectedCategory),fetch("/backend/Upload",{method:"POST",body:t}).then((e=>e.json())).then((e=>{this.imageUrl=null,this.$emit("imageUploaded"),console.log(e)})).catch((e=>{console.log(e)}))}}},C=o(3744);const D=(0,C.Z)(_,[["render",S],["__scopeId","data-v-a5d363aa"]]);var U=D,O=o(3577);const L=e=>((0,l.dD)("data-v-8f2ea7a6"),e=e(),(0,l.Cn)(),e),j={key:0},P=L((()=>(0,l._)("h1",null,"Photo Stream",-1))),z={class:"photo-stream"},R=["onClick"],E=["src"],F={class:"card-info"},A=["onClick"],T={class:"image-category"},W=["onClick"],q={key:1},$=L((()=>(0,l._)("h1",null,"Photo Stream",-1))),x={class:"photo-stream"},B=["onClick"],H=["src"],G={class:"card-info"},K=["onClick"],Y={class:"image-category"},Z=["onClick"];function V(e,t,o,s,a,n){return(0,l.wg)(),(0,l.iD)("div",null,[a.isDesktop?((0,l.wg)(),(0,l.iD)("div",j,[P,(0,l._)("div",z,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.images,(e=>((0,l.wg)(),(0,l.iD)("div",{class:"card",key:e.id,onClick:t=>n.openImage(e)},[(0,l._)("img",{class:"card-image",src:n.getImageUrl(e.data),alt:"Photo"},null,8,E),(0,l._)("div",F,[(0,l._)("button",{class:"delete-button",onClick:t=>n.deleteImage(e.id)},"Delete",8,A),(0,l._)("div",T,(0,O.zw)(e.category),1),(0,l._)("button",{class:"select-button",onClick:t=>n.handleSelectImage(e)},"Select",8,W)])],8,R)))),128))])])):((0,l.wg)(),(0,l.iD)("div",q,[$,(0,l._)("div",x,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.images,(e=>((0,l.wg)(),(0,l.iD)("div",{class:"card",key:e.id,onClick:t=>n.openImage(e)},[(0,l._)("img",{class:"card-image",src:n.getImageUrl(e.data),alt:"Photo"},null,8,H),(0,l._)("div",G,[(0,l._)("button",{class:"delete-button",onClick:t=>n.deleteImage(e.id)},"Delete",8,K),(0,l._)("div",Y,(0,O.zw)(e.category),1),(0,l._)("button",{class:"select-button",onClick:t=>n.handleSelectImage(e)},"Select",8,Z)])],8,B)))),128))])]))])}o(2801),o(8675),o(3408),o(4590),o(3462),o(1439),o(7585),o(5315);var M={data(){return{isDesktop:!1,images:[]}},mounted(){this.fetchImages(),this.checkScreenSize(),window.addEventListener("resize",this.checkScreenSize)},beforeUnmount(){window.removeEventListener("resize",this.checkScreenSize)},methods:{checkScreenSize(){this.isDesktop=window.innerWidth>=768},openImage(){},getImageUrl(e){try{if(!e)return console.error("Invalid image data:",e),null;const t=atob(e),o=new Uint8Array(t.length);for(let e=0;e<t.length;e++)o[e]=t.charCodeAt(e);const s=new Blob([o.buffer],{type:"image/jpeg"});return URL.createObjectURL(s)}catch(t){return console.error("Error converting image data:",t),null}},async fetchImages(){try{const e=await fetch("/backend/Images"),t=await e.json();console.log("Retrieved images:",t),this.images=t}catch(e){console.error("Failed to fetch images:",e)}},async deleteImage(e){try{const t=await fetch(`/backend/Images/${e}`,{method:"DELETE"});t.ok?(console.log("Image deleted:",e),this.$emit("imageDeleted")):console.error("Failed to delete image:",e)}catch(t){console.error("Error deleting image:",t)}},handleSelectImage(e){this.$emit("selectImage",e),console.log("handleSelectImage connected:",e)}}};const N=(0,C.Z)(M,[["render",V],["__scopeId","data-v-8f2ea7a6"]]);var J=N;const Q={key:0,class:"outfit-view-desktop"},X={class:"outfit-view"},ee=["src"],te=["onClick"],oe={key:0,class:"empty-message"},se={key:1,class:"outfit-view-mobile"},le={class:"outfit-view"},ae=["src"],ne=["onClick"],ie={key:0,class:"empty-message"};function ce(e,t,o,s,a,n){return(0,l.wg)(),(0,l.iD)("div",null,[a.isDesktop?((0,l.wg)(),(0,l.iD)("div",Q,[(0,l._)("div",X,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(o.selectedItems,((e,t)=>((0,l.wg)(),(0,l.iD)("div",{key:t,class:"item"},[e?((0,l.wg)(),(0,l.iD)("img",{key:0,src:n.getImageUrl(e),alt:"Selected Item"},null,8,ee)):(0,l.kq)("",!0),(0,l._)("button",{onClick:o=>n.removeItem(e,t)},"Remove",8,te)])))),128)),0===Object.keys(o.selectedItems).length?((0,l.wg)(),(0,l.iD)("div",oe,"No items selected")):(0,l.kq)("",!0)])])):((0,l.wg)(),(0,l.iD)("div",se,[(0,l._)("div",le,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(o.selectedItems,((e,t)=>((0,l.wg)(),(0,l.iD)("div",{key:t,class:"item"},[e?((0,l.wg)(),(0,l.iD)("img",{key:0,src:n.getImageUrl(e),alt:"Selected Item"},null,8,ae)):(0,l.kq)("",!0),(0,l._)("button",{onClick:o=>n.removeItem(e,t)},"Remove",8,ne)])))),128)),0===Object.keys(o.selectedItems).length?((0,l.wg)(),(0,l.iD)("div",ie,"No items selected")):(0,l.kq)("",!0)])]))])}var re={props:{selectedItems:{type:Object}},data(){return{isDesktop:!1}},mounted(){console.log("selectedItems prop:",this.selectedItems)},methods:{removeItem(e,t){if(console.log("remove items clicked",e),"accessories"===t){const o=this.selectedItems.accessories.indexOf(e);-1!==o&&this.$emit("removeItem",e,t)}else this.$emit("removeItem",e,t)},getImageUrl(e){console.log(e),console.log(e.data);const t=e.data;console.log(t);try{if(!e)return console.error("Invalid image data:",e),null;const o=atob(t),s=new Uint8Array(o.length);for(let e=0;e<o.length;e++)s[e]=o.charCodeAt(e);const l=new Blob([s.buffer],{type:"image/jpeg"});return URL.createObjectURL(l)}catch(o){return console.error("Error converting image data:",o),null}}}};const de=(0,C.Z)(re,[["render",ce],["__scopeId","data-v-15aa3e32"]]);var me=de,ge={name:"App",components:{ImageUploader:U,PhotoStream:J,OutfitView:me},props:{images:{type:Array,default:()=>[]}},data(){return{isDesktop:!1,selectedItems:{shoes:null,bottom:null,top:null,onePiece:null,hat:null,accessories:[]}}},mounted(){this.checkScreenSize(),window.addEventListener("resize",this.checkScreenSize)},beforeUnmount(){window.removeEventListener("resize",this.checkScreenSize)},methods:{checkScreenSize(){this.isDesktop=window.innerWidth>=768},refreshPhotostream(){this.$refs.photostream.fetchImages()},handleSelectImage(e){const{category:t}=e;console.log("handleSelectImage hit:",e),console.log("handleSelectImage hit:",e),"shoes"===t.toLowerCase()?(console.log("handleSelectImage LOGIC hit:",t),this.selectedItems.shoes=e,this.selectedItems.onePiece=null,this.selectedItems.top=null,this.selectedItems.bottom=null):"bottom"===t.toLowerCase()?(console.log("handleSelectImage LOGIC hit:",t),this.selectedItems.shoes=null,this.selectedItems.onePiece=null,this.selectedItems.top=null,this.selectedItems.bottom=e):"top"===t.toLowerCase()?(console.log("handleSelectImage LOGIC hit:",t),this.selectedItems.shoes=null,this.selectedItems.onePiece=null,this.selectedItems.top=e,this.selectedItems.bottom=null):"hat"===t.toLowerCase()?(console.log("handleSelectImage LOGIC hit:",t),this.selectedItems.shoes=null,this.selectedItems.onePiece=null,this.selectedItems.top=null,this.selectedItems.bottom=null):("accessories"===t.toLowerCase()||"onePiece"===t.toLowerCase())&&console.log("handleSelectImage LOGIC hit:",t),console.log("Updated selectedItems:",this.selectedItems)},handleRemoveItem(e){"accessories"===e?this.selectedItems.accessories=[]:this.selectedItems[e]=null}}};const ue=(0,C.Z)(ge,[["render",u]]);var he=ue;(0,s.ri)(he).mount("#app")}},t={};function o(s){var l=t[s];if(void 0!==l)return l.exports;var a=t[s]={exports:{}};return e[s].call(a.exports,a,a.exports,o),a.exports}o.m=e,function(){var e=[];o.O=function(t,s,l,a){if(!s){var n=1/0;for(d=0;d<e.length;d++){s=e[d][0],l=e[d][1],a=e[d][2];for(var i=!0,c=0;c<s.length;c++)(!1&a||n>=a)&&Object.keys(o.O).every((function(e){return o.O[e](s[c])}))?s.splice(c--,1):(i=!1,a<n&&(n=a));if(i){e.splice(d--,1);var r=l();void 0!==r&&(t=r)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[s,l,a]}}(),function(){o.d=function(e,t){for(var s in t)o.o(t,s)&&!o.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,s){var l,a,n=s[0],i=s[1],c=s[2],r=0;if(n.some((function(t){return 0!==e[t]}))){for(l in i)o.o(i,l)&&(o.m[l]=i[l]);if(c)var d=c(o)}for(t&&t(s);r<n.length;r++)a=n[r],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(d)},s=self["webpackChunkyour_vue_project"]=self["webpackChunkyour_vue_project"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=o.O(void 0,[998],(function(){return o(9382)}));s=o.O(s)})();
//# sourceMappingURL=app.fa248719.js.map