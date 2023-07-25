(function(){"use strict";var e={618:function(e,t,o){var s=o(9963),l=o(6252);const a={class:"body-container"},i={class:"navbar"},n={class:"navbar-menu"},c=(0,l._)("li",null,[(0,l._)("a",{href:"/"},"Kristo's Closet")],-1),r={class:"image-uploader-container"},d={key:2,class:"desktop-layout"},g={class:"photostream-container"},m={class:"outfit-view-container"},u={key:3,class:"mobile-layout"},v={class:"photostream-container-mobile"},y={class:"outfit-view-container"};function h(e,t,o,s,h,p){const I=(0,l.up)("RegistrationModal"),f=(0,l.up)("LoginModal"),w=(0,l.up)("ImageUploader"),_=(0,l.up)("PhotoStream"),b=(0,l.up)("OutfitView");return(0,l.wg)(),(0,l.iD)("div",a,[(0,l._)("nav",i,[(0,l._)("ul",n,[c,(0,l._)("li",null,[(0,l._)("button",{onClick:t[0]||(t[0]=(...e)=>s.showRegistrationModal&&s.showRegistrationModal(...e))},"Register")]),(0,l._)("li",null,[s.isAuthenticated?((0,l.wg)(),(0,l.iD)("button",{key:1,onClick:t[2]||(t[2]=(...e)=>s.logoutUser&&s.logoutUser(...e))},"Logout")):((0,l.wg)(),(0,l.iD)("button",{key:0,onClick:t[1]||(t[1]=(...e)=>s.showLoginModal&&s.showLoginModal(...e))},"Login"))])])]),s.isRegistrationModalVisible?((0,l.wg)(),(0,l.j4)(I,{key:0,onCloseModal:e.handleCloseRegistrationModal,class:"overlay"},null,8,["onCloseModal"])):(0,l.kq)("",!0),s.isLoginModalVisible?((0,l.wg)(),(0,l.j4)(f,{key:1,class:"overlay"})):(0,l.kq)("",!0),(0,l._)("div",r,[(0,l.Wm)(w,{msg:"Welcome to The Image Uploader!",onImageUploaded:s.refreshPhotostream},null,8,["onImageUploaded"])]),s.isDesktop?((0,l.wg)(),(0,l.iD)("div",d,[(0,l._)("div",g,[(0,l.Wm)(_,{selectedItems:s.selectedItems,images:o.images,ref:"photostream",onImageDeleted:s.refreshPhotostream,onSelectImage:s.handleSelectImage},null,8,["selectedItems","images","onImageDeleted","onSelectImage"])]),(0,l._)("div",m,[(0,l.Wm)(b,{selectedItems:s.selectedItems,onRemoveItem:s.handleRemoveItem,class:"outfit-view-desktop"},null,8,["selectedItems","onRemoveItem"])])])):((0,l.wg)(),(0,l.iD)("div",u,[(0,l._)("div",v,[(0,l.Wm)(_,{selectedItems:s.selectedItems,localSelectedItems:e.localSelectedItems,images:o.images,ref:"photostream",onImageDeleted:s.refreshPhotostream,onSelectImage:s.handleSelectImage},null,8,["selectedItems","localSelectedItems","images","onImageDeleted","onSelectImage"])]),(0,l._)("div",y,[(0,l.Wm)(b,{selectedItems:s.selectedItems,onRemoveItem:s.handleRemoveItem,class:"outfit-view-mobile"},null,8,["selectedItems","onRemoveItem"])])]))])}o(7658);const p=e=>((0,l.dD)("data-v-35fa40ae"),e=e(),(0,l.Cn)(),e),I=p((()=>(0,l._)("h2",null,"Upload Your Article of Clothing",-1))),f=p((()=>(0,l._)("label",{for:"category"},"Category:",-1))),w=(0,l.uE)('<option value="Top" data-v-35fa40ae>Top</option><option value="Bottom" data-v-35fa40ae>Bottom</option><option value="onePiece" data-v-35fa40ae>One-piece</option><option value="Shoes" data-v-35fa40ae>Shoes</option><option value="Hat" data-v-35fa40ae>Hat</option><option value="Accessory" data-v-35fa40ae>Accessory</option>',6),_=[w],b=p((()=>(0,l._)("button",{id:"classifyButton",type:"submit"},"Classify Image",-1))),k=p((()=>(0,l._)("p",{id:"resultLabel"},null,-1))),C={id:"imageContainer"},S=["src"];function U(e,t,o,a,i,n){return(0,l.wg)(),(0,l.iD)("div",null,[I,(0,l._)("form",{id:"imageForm",onSubmit:t[2]||(t[2]=(0,s.iM)(((...e)=>n.classifyImage&&n.classifyImage(...e)),["prevent"]))},[f,(0,l.wy)((0,l._)("select",{id:"category","onUpdate:modelValue":t[0]||(t[0]=e=>i.selectedCategory=e),required:""},_,512),[[s.bM,i.selectedCategory]]),(0,l._)("input",{type:"file",id:"imageFile",accept:".jpg,.jpeg,.png,.gif",required:"",onChange:t[1]||(t[1]=(...e)=>n.handleFileUpload&&n.handleFileUpload(...e))},null,32),b],32),k,(0,l._)("div",C,[i.imageUrl?((0,l.wg)(),(0,l.iD)("img",{key:0,id:"uploadedImage",alt:"Uploaded Image",src:i.imageUrl},null,8,S)):(0,l.kq)("",!0)])])}o(2062);var E={name:"ImageUploader",data(){return{imageUrl:null,selectedCategory:""}},methods:{handleFileUpload(e){const t=e.target.files[0];this.imageUrl=URL.createObjectURL(t)},classifyImage(){const e=document.getElementById("imageFile").files[0],t=new FormData;t.append("imageFile",e),t.append("category",this.selectedCategory),fetch("/backend/Upload",{method:"POST",body:t}).then((e=>e.json())).then((e=>{this.imageUrl=null,this.$emit("imageUploaded"),console.log(e)})).catch((e=>{console.log(e)}))}}},D=o(3744);const L=(0,D.Z)(E,[["render",U],["__scopeId","data-v-35fa40ae"]]);var R=L,O=o(3577);const M={key:0},A={class:"sticky-container"},T={class:"category-buttons-container"},V=["onClick"],j={class:"photo-stream"},H=["onClick"],N=["src"],q={class:"card-info"},B={class:"card-buttons-container"},z=["onClick"],F=["onClick"],G=["onClick"],K={class:"category-container"},P={key:0,class:"edit-category"},Y=["onKeyup"],x=["value"],Z=["onClick"],W={class:"image-category"},$={key:1},J={class:"sticky-container"},Q={class:"category-buttons-container"},X=["onClick"],ee={class:"photo-stream"},te=["onClick"],oe=["src"],se={class:"card-info"},le={class:"card-buttons-container"},ae=["onClick"],ie=["onClick"],ne=["onClick"],ce={class:"category-container"},re={key:0,class:"edit-category"},de=["onKeyup"],ge=["value"],me=["onClick"],ue={class:"image-category"};function ve(e,t,o,a,i,n){return(0,l.wg)(),(0,l.iD)("div",null,[i.isDesktop?((0,l.wg)(),(0,l.iD)("div",M,[(0,l._)("div",A,[(0,l._)("div",T,[(0,l._)("button",{class:"category-button",onClick:t[0]||(t[0]=e=>n.filterByCategory(null))},"All"),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(n.uniqueCategories,(e=>((0,l.wg)(),(0,l.iD)("button",{class:"category-button",key:e,onClick:t=>n.filterByCategory(e)},(0,O.zw)(e),9,V)))),128))])]),(0,l._)("div",j,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(n.filteredImages,(e=>((0,l.wg)(),(0,l.iD)("div",{class:"card",key:e.id,onClick:t=>n.openImage(e)},[(0,l._)("img",{class:"card-image",src:n.getImageUrl(e.data),alt:"Photo"},null,8,N),(0,l._)("div",q,[(0,l._)("div",B,[(0,l._)("button",{class:"delete-button",onClick:t=>n.deleteImage(e.id)},"Delete",8,z),(0,l._)("button",{class:"select-button",onClick:t=>n.handleSelectImage(e)},"Select",8,F),(0,l._)("button",{class:"edit-button",onClick:t=>n.handleEditImage(e)},"Edit",8,G)]),(0,l._)("div",K,[n.isEditing(e)?((0,l.wg)(),(0,l.iD)("div",P,[(0,l.wy)((0,l._)("select",{"onUpdate:modelValue":t[1]||(t[1]=e=>i.editedCategory=e),onKeyup:(0,s.D2)((t=>n.saveImageEdit(e)),["enter"])},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(n.uniqueCategories,(e=>((0,l.wg)(),(0,l.iD)("option",{key:e,value:e},(0,O.zw)(e),9,x)))),128))],40,Y),[[s.bM,i.editedCategory]]),(0,l._)("button",{onClick:t=>n.saveImageEdit(e)},"Save",8,Z),(0,l._)("button",{onClick:t[2]||(t[2]=e=>n.cancelImageEdit())},"Cancel")])):(0,l.kq)("",!0),(0,l._)("div",W,(0,O.zw)(e.category),1)])])],8,H)))),128))])])):((0,l.wg)(),(0,l.iD)("div",$,[(0,l._)("div",J,[(0,l._)("div",Q,[(0,l._)("button",{class:"category-button",onClick:t[3]||(t[3]=e=>n.filterByCategory(null))},"All"),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(n.uniqueCategories,(e=>((0,l.wg)(),(0,l.iD)("button",{class:"category-button",key:e,onClick:t=>n.filterByCategory(e)},(0,O.zw)(e),9,X)))),128))])]),(0,l._)("div",ee,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(n.filteredImages,(e=>((0,l.wg)(),(0,l.iD)("div",{class:"card",key:e.id,onClick:t=>n.openImage(e)},[(0,l._)("img",{class:"card-image",src:n.getImageUrl(e.data),alt:"Photo"},null,8,oe),(0,l._)("div",se,[(0,l._)("div",le,[(0,l._)("button",{class:"delete-button",onClick:t=>n.deleteImage(e.id)},"Delete",8,ae),(0,l._)("button",{class:"select-button",onClick:t=>n.handleSelectImage(e)},"Select",8,ie),(0,l._)("button",{class:"edit-button",onClick:t=>n.handleEditImage(e)},"Edit",8,ne)]),(0,l._)("div",ce,[n.isEditing(e)?((0,l.wg)(),(0,l.iD)("div",re,[(0,l.wy)((0,l._)("select",{"onUpdate:modelValue":t[4]||(t[4]=e=>i.editedCategory=e),onKeyup:(0,s.D2)((t=>n.saveImageEdit(e)),["enter"])},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(n.uniqueCategories,(e=>((0,l.wg)(),(0,l.iD)("option",{key:e,value:e},(0,O.zw)(e),9,ge)))),128))],40,de),[[s.bM,i.editedCategory]]),(0,l._)("button",{onClick:t=>n.saveImageEdit(e)},"Save",8,me),(0,l._)("button",{onClick:t[5]||(t[5]=e=>n.cancelImageEdit())},"Cancel")])):(0,l.kq)("",!0),(0,l._)("div",ue,(0,O.zw)(e.category),1)])])],8,te)))),128))])]))])}o(2801),o(8675),o(3408),o(4590),o(3462),o(1439),o(7585),o(5315);var ye={data(){return{isDesktop:!1,images:[],selectedCategory:null,editedCategory:null,editingImageId:null}},mounted(){this.fetchImages(),this.checkScreenSize(),window.addEventListener("resize",this.checkScreenSize)},beforeUnmount(){window.removeEventListener("resize",this.checkScreenSize)},computed:{uniqueCategories(){const e=new Set;return this.images.forEach((t=>{e.add(t.category)})),Array.from(e)},filteredImages(){return this.selectedCategory?this.images.filter((e=>e.category===this.selectedCategory)):this.images}},methods:{checkScreenSize(){this.isDesktop=window.innerWidth>=768},openImage(){},getImageUrl(e){try{if(!e)return console.error("Invalid image data:",e),null;const t=atob(e),o=new Uint8Array(t.length);for(let e=0;e<t.length;e++)o[e]=t.charCodeAt(e);const s=new Blob([o.buffer],{type:"image/jpeg"});return URL.createObjectURL(s)}catch(t){return console.error("Error converting image data:",t),null}},async fetchImages(){try{const e=await fetch("/backend/Images"),t=await e.json();console.log("Retrieved images:",t),this.images=t}catch(e){console.error("Failed to fetch images:",e)}},async deleteImage(e){try{const t=await fetch(`/backend/Images/${e}`,{method:"DELETE"});t.ok?(console.log("Image deleted:",e),this.$emit("imageDeleted")):console.error("Failed to delete image:",e)}catch(t){console.error("Error deleting image:",t)}},handleEditImage(e){console.log("edit hit"),this.editingImageId=e.id,this.editedCategory=e.category,console.log(this.editedCategory)},isEditing(e){return this.editingImageId===e.id},async saveImageEdit(e){const t=this.editedCategory.trim();if(""!==t){const s=this.images.find((t=>t.id===e.id));s&&(s.category=t);try{const o=await fetch(`/backend/Images/${e.id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({category:t})});if(o.ok){const e=await o.json();s.category=e.category}else console.error("Failed to update image category:",o)}catch(o){console.error("Error updating image category:",o)}}this.editingImageId=null,this.editedCategory=""},cancelImageEdit(){this.editingImageId=null,this.editedCategory=""},handleSelectImage(e){this.$emit("selectImage",e),console.log("handleSelectImage connected:",e)},filterByCategory(e){console.log(e),this.selectedCategory=e,console.log(this.selectedCategory)}}};const he=(0,D.Z)(ye,[["render",ve]]);var pe=he;const Ie={key:0,class:"outfit-view-desktop"},fe={class:"outfit-view-container-desktop"},we={class:"outfit-view"},_e={class:"item-image-wrapper"},be=["src"],ke={class:"item-info"},Ce=["onClick"],Se={class:"accessory-view"},Ue={key:0,class:"accessories"},Ee={class:"item-image-wrapper"},De=["src"],Le={class:"item-info"},Re=(0,l._)("div",null," Accessory ",-1),Oe=["onClick"],Me={key:1,class:"empty-message"},Ae={key:1,class:"outfit-view-mobile"},Te={class:"outfit-view-container-mobile"},Ve={class:"outfit-view"},je={class:"item-image-wrapper"},He=["src"],Ne={class:"item-info"},qe=["onClick"],Be={class:"accessory-view"},ze={key:0,class:"accessories"},Fe={class:"item-image-wrapper"},Ge=["src"],Ke={class:"item-info"},Pe=(0,l._)("div",null," Accessory ",-1),Ye=["onClick"],xe={key:1,class:"empty-message"};function Ze(e,t,o,s,a,i){return(0,l.wg)(),(0,l.iD)("div",null,[a.isDesktop?((0,l.wg)(),(0,l.iD)("div",Ie,[(0,l._)("div",fe,[(0,l._)("div",we,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(i.filteredSelectedItems,((e,t)=>((0,l.wg)(),(0,l.iD)("div",{key:t,class:"item"},[(0,l._)("div",_e,[e?((0,l.wg)(),(0,l.iD)("img",{key:0,src:i.getImageUrl(e),alt:"Selected Item"},null,8,be)):(0,l.kq)("",!0)]),(0,l._)("div",ke,[(0,l._)("div",null,(0,O.zw)(t),1),(0,l._)("button",{onClick:o=>i.removeItem(e,t)},"Remove",8,Ce)])])))),128))]),(0,l._)("div",Se,[o.selectedItems.accessory.length>0?((0,l.wg)(),(0,l.iD)("div",Ue,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(o.selectedItems.accessory,(e=>((0,l.wg)(),(0,l.iD)("div",{key:e.id,class:"item"},[(0,l._)("div",Ee,[(0,l._)("img",{src:i.getImageUrl(e),alt:"Selected Accessory"},null,8,De)]),(0,l._)("div",Le,[Re,(0,l._)("button",{onClick:t=>i.removeItem(e,"accessory")},"Remove",8,Oe)])])))),128))])):(0,l.kq)("",!0),0===Object.keys(o.selectedItems).length&&0===o.selectedItems.accessory.length?((0,l.wg)(),(0,l.iD)("div",Me," No items selected ")):(0,l.kq)("",!0)])])])):((0,l.wg)(),(0,l.iD)("div",Ae,[(0,l._)("div",Te,[(0,l._)("div",Ve,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(i.filteredSelectedItems,((e,t)=>((0,l.wg)(),(0,l.iD)("div",{key:t,class:"item"},[(0,l._)("div",je,[e?((0,l.wg)(),(0,l.iD)("img",{key:0,src:i.getImageUrl(e),alt:"Selected Item"},null,8,He)):(0,l.kq)("",!0)]),(0,l._)("div",Ne,[(0,l._)("div",null,(0,O.zw)(t),1),(0,l._)("button",{onClick:o=>i.removeItem(e,t)},"Remove",8,qe)])])))),128))]),(0,l._)("div",Be,[o.selectedItems.accessory.length>0?((0,l.wg)(),(0,l.iD)("div",ze,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(o.selectedItems.accessory,(e=>((0,l.wg)(),(0,l.iD)("div",{key:e.id,class:"item"},[(0,l._)("div",Fe,[(0,l._)("img",{src:i.getImageUrl(e),alt:"Selected Accessory"},null,8,Ge)]),(0,l._)("div",Ke,[Pe,(0,l._)("button",{onClick:t=>i.removeItem(e,"accessory")},"Remove",8,Ye)])])))),128))])):(0,l.kq)("",!0),0===Object.keys(o.selectedItems).length&&0===o.selectedItems.accessory.length?((0,l.wg)(),(0,l.iD)("div",xe," No items selected ")):(0,l.kq)("",!0)])])]))])}var We={props:{selectedItems:{type:Object}},data(){return{isDesktop:!1}},mounted(){console.log("selectedItems prop:",this.selectedItems)},computed:{filteredSelectedItems(){return Object.keys(this.selectedItems).reduce(((e,t)=>("accessory"!==t&&(e[t]=this.selectedItems[t]),e)),{})}},methods:{removeItem(e,t){if(console.log("remove items clicked",e),console.log("remove categories clicked",t),"accessory"===t){const o=this.selectedItems.accessory.indexOf(e);-1!==o&&this.$emit("removeItem",e,t)}else this.$emit("removeItem",this.selectedItems[t],t);console.log("remove items has run",t)},getImageUrl(e){console.log(e),console.log(e.data);const t=e.data;console.log(t);try{if(!e)return console.error("Invalid image data:",e),null;const o=atob(t),s=new Uint8Array(o.length);for(let e=0;e<o.length;e++)s[e]=o.charCodeAt(e);const l=new Blob([s.buffer],{type:"image/jpeg"});return URL.createObjectURL(l)}catch(o){return console.error("Error converting image data:",o),null}}}};const $e=(0,D.Z)(We,[["render",Ze]]);var Je=$e;const Qe={class:"modal"},Xe={class:"modal-content"},et=(0,l._)("h2",null,"Register",-1),tt={class:"form-group"},ot=(0,l._)("label",{for:"username"},"Username:",-1),st={class:"form-group"},lt=(0,l._)("label",{for:"email"},"Email:",-1),at={class:"form-group"},it=(0,l._)("label",{for:"password"},"Password:",-1),nt=(0,l._)("button",{class:"submit-button",type:"submit"},"Register",-1);function ct(e,t,o,a,i,n){return(0,l.wg)(),(0,l.iD)("div",Qe,[(0,l._)("div",Xe,[et,(0,l._)("form",{onSubmit:t[3]||(t[3]=(0,s.iM)(((...e)=>a.registerUser&&a.registerUser(...e)),["prevent"]))},[(0,l._)("div",tt,[ot,(0,l.wy)((0,l._)("input",{type:"text",id:"username","onUpdate:modelValue":t[0]||(t[0]=e=>a.username=e),required:""},null,512),[[s.nr,a.username]])]),(0,l._)("div",st,[lt,(0,l.wy)((0,l._)("input",{type:"email",id:"email","onUpdate:modelValue":t[1]||(t[1]=e=>a.email=e),required:""},null,512),[[s.nr,a.email]])]),(0,l._)("div",at,[it,(0,l.wy)((0,l._)("input",{type:"password",id:"password","onUpdate:modelValue":t[2]||(t[2]=e=>a.password=e),required:""},null,512),[[s.nr,a.password]])]),nt],32),(0,l._)("button",{class:"close-button",onClick:t[4]||(t[4]=(...e)=>a.handleCloseModal&&a.handleCloseModal(...e))},"Close")])])}var rt=o(2262),dt=o(3907),gt=o(9374);const mt=(0,dt.MT)({state:{isAuthenticated:!1,user:null,isRegistrationModalVisible:!1,isLoginModalVisible:!1},mutations:{SET_AUTHENTICATION(e,t){e.isAuthenticated=t},SET_USER(e,t){e.user=t},CLEAR_AUTHENTICATION(e){e.isAuthenticated=!1,e.user=null},SET_REGISTRATION_MODAL_VISIBLE(e,t){e.isRegistrationModalVisible=t},SET_LOGIN_MODAL_VISIBLE(e,t){e.isLoginModalVisible=t}},actions:{showLoginModal({commit:e}){e("SET_LOGIN_MODAL_VISIBLE",!0)},closeLoginModal({commit:e}){e("SET_LOGIN_MODAL_VISIBLE",!1)},showRegistrationModal({commit:e}){e("SET_REGISTRATION_MODAL_VISIBLE",!0)},closeRegistrationModal({commit:e}){e("SET_REGISTRATION_MODAL_VISIBLE",!1)},async registerUser({commit:e},t){const o=await gt.Z.post("/backend/User/register",t),s=o.data;e("SET_USER",s),e("SET_AUTHENTICATION",!0)},async loginUser({commit:e},t){try{const o=await gt.Z.post("backend/User/login",t);console.log("loginUser hit");const s=o.isAuthenticated,l=o.user;console.log(s),console.log(l),e("SET_AUTHENTICATION",!0),e("SET_USER",l)}catch(o){console.error("Login failed:",o)}},async logoutUser({commit:e}){try{await gt.Z.post("/backend/User/logout"),console.log("logout"),e("CLEAR_AUTHENTICATION")}catch(t){console.error("Logout failed:",t)}}}});var ut=mt,vt={setup(){const e=(0,rt.iH)(""),t=(0,rt.iH)(""),o=(0,rt.iH)(""),s=(0,dt.oR)(),l=async()=>{try{const l={username:e.value,email:t.value,password:o.value};await s.dispatch("registerUser",l),console.log("User registered successfully!")}catch(l){console.error("Registration failed:",l)}},a=()=>{s.commit("SET_REGISTRATION_MODAL_VISIBLE",!1),console.log("close")};return{username:e,email:t,password:o,handleCloseModal:a,registerUser:l,isRegistrationModalVisible:s.state.isRegistrationModalVisible}}};const yt=(0,D.Z)(vt,[["render",ct]]);var ht=yt;const pt={class:"modal"},It={class:"modal-content"},ft=(0,l._)("h2",null,"Login",-1),wt={class:"form-group"},_t=(0,l._)("label",{for:"username"},"Username:",-1),bt={class:"form-group"},kt=(0,l._)("label",{for:"password"},"Password:",-1),Ct=(0,l._)("button",{class:"login-button",type:"submit"},"Login",-1);function St(e,t,o,a,i,n){return(0,l.wg)(),(0,l.iD)("div",pt,[(0,l._)("div",It,[ft,(0,l._)("form",{onSubmit:t[2]||(t[2]=(0,s.iM)(((...e)=>a.loginUser&&a.loginUser(...e)),["prevent"]))},[(0,l._)("div",wt,[_t,(0,l.wy)((0,l._)("input",{type:"text",id:"username","onUpdate:modelValue":t[0]||(t[0]=e=>a.username=e),required:""},null,512),[[s.nr,a.username]])]),(0,l._)("div",bt,[kt,(0,l.wy)((0,l._)("input",{type:"password",id:"password","onUpdate:modelValue":t[1]||(t[1]=e=>a.password=e),required:""},null,512),[[s.nr,a.password]])]),Ct],32),(0,l._)("button",{class:"close-button",onClick:t[3]||(t[3]=(...e)=>a.handleCloseModal&&a.handleCloseModal(...e))},"Close")])])}var Ut={setup(){const e=(0,rt.iH)(""),t=(0,rt.iH)(""),o=(0,dt.oR)(),s=()=>{const s={username:e.value,password:t.value};o.dispatch("loginUser",s).then((e=>{console.log("response:",e),l()})).catch((e=>{console.error("Login failed:",e),console.log(s)}))},l=()=>{o.commit("SET_LOGIN_MODAL_VISIBLE",!1),console.log("close")};return{username:e,password:t,loginUser:s,handleCloseModal:l,isLoginModalVisible:o.state.isLoginModalVisible}}};const Et=(0,D.Z)(Ut,[["render",St]]);var Dt=Et,Lt={name:"App",components:{ImageUploader:R,PhotoStream:pe,OutfitView:Je,RegistrationModal:ht,LoginModal:Dt},props:{images:{type:Array,default:()=>[]}},setup(){const e=(0,dt.oR)(),t=(0,rt.iH)(!1),o=(0,l.Fl)((()=>e.state.isRegistrationModalVisible)),s=(0,l.Fl)((()=>e.state.isLoginModalVisible)),a=(0,rt.iH)({hat:null,top:null,bottom:null,onepiece:null,shoes:null,accessory:[]}),i=(0,l.Fl)((()=>e.state.isAuthenticated)),n=()=>{t.value=window.innerWidth>=768},c=()=>{const e=document.getElementById("photostream");e&&e.fetchImages()},r=()=>{console.log("test registration click"),e.commit("SET_REGISTRATION_MODAL_VISIBLE",!0)},d=()=>{console.log("test login click"),e.commit("SET_LOGIN_MODAL_VISIBLE",!0),console.log(s.value)},g=()=>{console.log("click logout"),e.dispatch("logoutUser")},m=e=>{const{category:t}=e;if(console.log("handleSelectImage hit:",e),console.log("handleSelectImage hit:",e),"shoes"===t.toLowerCase())console.log("handleSelectImage LOGIC hit:",t),a.value.shoes=e;else if("bottom"===t.toLowerCase())console.log("handleSelectImage LOGIC hit:",t),a.value.bottom=e,a.value.onepiece=null;else if("top"===t.toLowerCase())console.log("handleSelectImage LOGIC hit:",t),a.value.top=e,a.value.onepiece=null;else if("hat"===t.toLowerCase())console.log("handleSelectImage LOGIC hit:",t),a.value.hat=e;else if("accessory"===t.toLowerCase())if(console.log("handleSelectImage Accessory hit:",t),3===a.value.accessory.length)console.log("too many accessories");else{a.value.accessory.push(e);const t=a.value.accessory[0].data;console.log(t),console.log("accessory added"),console.log("accessory list:",a.value.accessory[0].id)}else"onepiece"===t.toLowerCase()&&(console.log("handleSelectImage LOGIC hit:",t),a.value.onepiece=e,a.value.top=null,a.value.bottom=null);console.log("Updated selectedItems:",a.value)},u=(e,t)=>{if(console.log("handleRemoveItem ran:",t),"accessory"===t){const t=a.value.accessory.indexOf(e);-1!==t&&a.value.accessory.splice(t,1)}else console.log("else remove RAN:",a.value[t]),a.value[t]=null};return(0,l.bv)((()=>{n(),window.addEventListener("resize",n)})),(0,l.Jd)((()=>{window.removeEventListener("resize",n)})),{isDesktop:t,isRegistrationModalVisible:o,isLoginModalVisible:s,selectedItems:a,isAuthenticated:i,refreshPhotostream:c,showRegistrationModal:r,showLoginModal:d,logoutUser:g,handleSelectImage:m,handleRemoveItem:u}}};const Rt=(0,D.Z)(Lt,[["render",h]]);var Ot=Rt;const Mt=(0,s.ri)(Ot);Mt.use(ut),Mt.mount("#app")}},t={};function o(s){var l=t[s];if(void 0!==l)return l.exports;var a=t[s]={exports:{}};return e[s].call(a.exports,a,a.exports,o),a.exports}o.m=e,function(){var e=[];o.O=function(t,s,l,a){if(!s){var i=1/0;for(d=0;d<e.length;d++){s=e[d][0],l=e[d][1],a=e[d][2];for(var n=!0,c=0;c<s.length;c++)(!1&a||i>=a)&&Object.keys(o.O).every((function(e){return o.O[e](s[c])}))?s.splice(c--,1):(n=!1,a<i&&(i=a));if(n){e.splice(d--,1);var r=l();void 0!==r&&(t=r)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[s,l,a]}}(),function(){o.d=function(e,t){for(var s in t)o.o(t,s)&&!o.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,s){var l,a,i=s[0],n=s[1],c=s[2],r=0;if(i.some((function(t){return 0!==e[t]}))){for(l in n)o.o(n,l)&&(o.m[l]=n[l]);if(c)var d=c(o)}for(t&&t(s);r<i.length;r++)a=i[r],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(d)},s=self["webpackChunkyour_vue_project"]=self["webpackChunkyour_vue_project"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=o.O(void 0,[998],(function(){return o(618)}));s=o.O(s)})();
//# sourceMappingURL=app.64ad275d.js.map