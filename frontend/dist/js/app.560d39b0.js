(function(){"use strict";var e={654:function(e,t,o){var s=o(9963),l=o(6252);const i={class:"body-container"},a={class:"navbar"},n={class:"navbar-menu"},c=(0,l._)("li",null,[(0,l._)("a",{href:"/"},"Kristo's Closet")],-1),r={class:"image-uploader-container"},d={key:2,class:"desktop-layout"},g={class:"photostream-container"},u={class:"outfit-view-container"},m={key:3,class:"mobile-layout"},h={class:"photostream-container-mobile"},v={class:"outfit-view-container"};function y(e,t,o,s,y,p){const I=(0,l.up)("RegistrationModal"),f=(0,l.up)("LoginModal"),w=(0,l.up)("ImageUploader"),_=(0,l.up)("PhotoStream"),b=(0,l.up)("OutfitView");return(0,l.wg)(),(0,l.iD)("div",i,[(0,l._)("nav",a,[(0,l._)("ul",n,[c,(0,l._)("li",null,[(0,l._)("button",{class:"registration-button",onClick:t[0]||(t[0]=(...e)=>s.showRegistrationModal&&s.showRegistrationModal(...e))},"Register")]),(0,l._)("li",null,[s.isAuthenticated?((0,l.wg)(),(0,l.iD)("button",{key:1,class:"logout-button",onClick:t[2]||(t[2]=(...e)=>s.logoutUser&&s.logoutUser(...e))},"Logout")):((0,l.wg)(),(0,l.iD)("button",{key:0,class:"login-button",onClick:t[1]||(t[1]=(...e)=>s.showLoginModal&&s.showLoginModal(...e))},"Login"))])])]),s.isRegistrationModalVisible?((0,l.wg)(),(0,l.j4)(I,{key:0,onCloseModal:e.handleCloseRegistrationModal,class:"overlay"},null,8,["onCloseModal"])):(0,l.kq)("",!0),s.isLoginModalVisible?((0,l.wg)(),(0,l.j4)(f,{key:1,class:"overlay"})):(0,l.kq)("",!0),(0,l._)("div",r,[(0,l.Wm)(w,{msg:"Welcome to The Image Uploader!",onImageUploaded:s.refreshPhotostream},null,8,["onImageUploaded"])]),s.isDesktop?((0,l.wg)(),(0,l.iD)("div",d,[(0,l._)("div",g,[(0,l.Wm)(_,{selectedItems:s.selectedItems,images:o.images,ref:"photostream",onImageDeleted:s.refreshPhotostream,onSelectImage:s.handleSelectImage},null,8,["selectedItems","images","onImageDeleted","onSelectImage"])]),(0,l._)("div",u,[(0,l.Wm)(b,{selectedItems:s.selectedItems,onRemoveItem:s.handleRemoveItem,class:"outfit-view-desktop"},null,8,["selectedItems","onRemoveItem"])])])):((0,l.wg)(),(0,l.iD)("div",m,[(0,l._)("div",h,[(0,l.Wm)(_,{selectedItems:s.selectedItems,localSelectedItems:e.localSelectedItems,images:o.images,ref:"photostream",onImageDeleted:s.refreshPhotostream,onSelectImage:s.handleSelectImage},null,8,["selectedItems","localSelectedItems","images","onImageDeleted","onSelectImage"])]),(0,l._)("div",v,[(0,l.Wm)(b,{selectedItems:s.selectedItems,onRemoveItem:s.handleRemoveItem,class:"outfit-view-mobile"},null,8,["selectedItems","onRemoveItem"])])]))])}o(7658);const p=(0,l._)("h2",{class:"upload-title"},"Upload Your Article of Clothing",-1),I={class:"upload-container"},f=(0,l._)("label",{for:"category"},"Category:",-1),w=(0,l.uE)('<option value="Top">Top</option><option value="Bottom">Bottom</option><option value="onePiece">One-piece</option><option value="Shoes">Shoes</option><option value="Hat">Hat</option><option value="Accessory">Accessory</option>',6),_=[w],b={class:"choose-file"},k=(0,l._)("button",{class:"classify-button",id:"classifyButton",type:"submit"},"Upload Image",-1),C=(0,l._)("p",{id:"resultLabel"},null,-1),S={id:"imageContainer"},U=["src"];function E(e,t,o,i,a,n){return(0,l.wg)(),(0,l.iD)("div",null,[p,(0,l._)("div",I,[(0,l._)("form",{id:"imageForm",onSubmit:t[2]||(t[2]=(0,s.iM)(((...e)=>n.classifyImage&&n.classifyImage(...e)),["prevent"]))},[f,(0,l.wy)((0,l._)("select",{id:"category","onUpdate:modelValue":t[0]||(t[0]=e=>a.selectedCategory=e),required:""},_,512),[[s.bM,a.selectedCategory]]),(0,l._)("label",b,[(0,l._)("input",{type:"file",id:"imageFile",accept:".jpg,.jpeg,.png,.gif",required:"",onChange:t[1]||(t[1]=(...e)=>n.handleFileUpload&&n.handleFileUpload(...e))},null,32),(0,l.Uk)(" Choose File ")]),k],32)]),C,(0,l._)("div",S,[a.imageUrl?((0,l.wg)(),(0,l.iD)("img",{key:0,id:"uploadedImage",alt:"Uploaded Image",src:a.imageUrl},null,8,U)):(0,l.kq)("",!0)])])}o(2062);var D={name:"ImageUploader",data(){return{imageUrl:null,selectedCategory:""}},methods:{handleFileUpload(e){const t=e.target.files[0];this.imageUrl=URL.createObjectURL(t)},classifyImage(){if(!this.$store.state.isAuthenticated)return void alert("You need to be logged in to upload an image.");const e=document.getElementById("imageFile").files[0],t=new FormData;t.append("imageFile",e),t.append("category",this.selectedCategory),t.append("userId",this.$store.state.user.id);const o=localStorage.getItem("token");console.log(o),fetch("/backend/Upload",{method:"POST",body:t,headers:{Authorization:`Bearer ${o}`}}).then((e=>e.json())).then((e=>{this.imageUrl=null,this.$emit("imageUploaded"),console.log(e)})).catch((e=>{console.log(e)}))}}},L=o(3744);const A=(0,L.Z)(D,[["render",E]]);var O=A,R=o(3577);const M={key:0},T={class:"sticky-container"},V={class:"category-buttons-container"},j=["onClick"],B={class:"photo-stream"},H=["onClick"],N=["src"],q={class:"card-info"},z={class:"card-buttons-container"},F=["onClick"],P=["onClick"],G=["onClick"],K={class:"category-container"},$={key:0,class:"edit-category"},Y=["onKeyup"],Z=["value"],x=["onClick"],W={class:"image-category"},J={key:1},Q={class:"sticky-container"},X={class:"category-buttons-container"},ee=["onClick"],te={class:"photo-stream"},oe=["onClick"],se=["src"],le={class:"card-info"},ie={class:"card-buttons-container"},ae=["onClick"],ne=["onClick"],ce=["onClick"],re={class:"category-container"},de={key:0,class:"edit-category"},ge=["onKeyup"],ue=["value"],me=["onClick"],he={class:"image-category"};function ve(e,t,o,i,a,n){return(0,l.wg)(),(0,l.iD)("div",null,[a.isDesktop?((0,l.wg)(),(0,l.iD)("div",M,[(0,l._)("div",T,[(0,l._)("div",V,[(0,l._)("button",{class:"category-button",onClick:t[0]||(t[0]=e=>n.filterByCategory(null))},"All"),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(n.uniqueCategories,(e=>((0,l.wg)(),(0,l.iD)("button",{class:"category-button",key:e,onClick:t=>n.filterByCategory(e)},(0,R.zw)(e),9,j)))),128))])]),(0,l._)("div",B,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(n.filteredImages,(e=>((0,l.wg)(),(0,l.iD)("div",{class:"card",key:e.id,onClick:t=>n.openImage(e)},[(0,l._)("img",{class:"card-image",src:n.getImageUrl(e.data),alt:"Photo"},null,8,N),(0,l._)("div",q,[(0,l._)("div",z,[(0,l._)("button",{class:"delete-button",onClick:t=>n.deleteImage(e.id)},"Delete",8,F),(0,l._)("button",{class:"select-button",onClick:t=>n.handleSelectImage(e)},"Select",8,P),(0,l._)("button",{class:"edit-button",onClick:t=>n.handleEditImage(e)},"Edit",8,G)]),(0,l._)("div",K,[n.isEditing(e)?((0,l.wg)(),(0,l.iD)("div",$,[(0,l.wy)((0,l._)("select",{"onUpdate:modelValue":t[1]||(t[1]=e=>a.editedCategory=e),onKeyup:(0,s.D2)((t=>n.saveImageEdit(e)),["enter"])},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(n.uniqueCategories,(e=>((0,l.wg)(),(0,l.iD)("option",{key:e,value:e},(0,R.zw)(e),9,Z)))),128))],40,Y),[[s.bM,a.editedCategory]]),(0,l._)("button",{onClick:t=>n.saveImageEdit(e)},"Save",8,x),(0,l._)("button",{onClick:t[2]||(t[2]=e=>n.cancelImageEdit())},"Cancel")])):(0,l.kq)("",!0),(0,l._)("div",W,(0,R.zw)(e.category),1)])])],8,H)))),128))])])):((0,l.wg)(),(0,l.iD)("div",J,[(0,l._)("div",Q,[(0,l._)("div",X,[(0,l._)("button",{class:"category-button",onClick:t[3]||(t[3]=e=>n.filterByCategory(null))},"All"),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(n.uniqueCategories,(e=>((0,l.wg)(),(0,l.iD)("button",{class:"category-button",key:e,onClick:t=>n.filterByCategory(e)},(0,R.zw)(e),9,ee)))),128))])]),(0,l._)("div",te,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(n.filteredImages,(e=>((0,l.wg)(),(0,l.iD)("div",{class:"card",key:e.id,onClick:t=>n.openImage(e)},[(0,l._)("img",{class:"card-image",src:n.getImageUrl(e.data),alt:"Photo"},null,8,se),(0,l._)("div",le,[(0,l._)("div",ie,[(0,l._)("button",{class:"delete-button",onClick:t=>n.deleteImage(e.id)},"Delete",8,ae),(0,l._)("button",{class:"select-button",onClick:t=>n.handleSelectImage(e)},"Select",8,ne),(0,l._)("button",{class:"edit-button",onClick:t=>n.handleEditImage(e)},"Edit",8,ce)]),(0,l._)("div",re,[n.isEditing(e)?((0,l.wg)(),(0,l.iD)("div",de,[(0,l.wy)((0,l._)("select",{"onUpdate:modelValue":t[4]||(t[4]=e=>a.editedCategory=e),onKeyup:(0,s.D2)((t=>n.saveImageEdit(e)),["enter"])},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(n.uniqueCategories,(e=>((0,l.wg)(),(0,l.iD)("option",{key:e,value:e},(0,R.zw)(e),9,ue)))),128))],40,ge),[[s.bM,a.editedCategory]]),(0,l._)("button",{onClick:t=>n.saveImageEdit(e)},"Save",8,me),(0,l._)("button",{onClick:t[5]||(t[5]=e=>n.cancelImageEdit())},"Cancel")])):(0,l.kq)("",!0),(0,l._)("div",he,(0,R.zw)(e.category),1)])])],8,oe)))),128))])]))])}o(2801),o(8675),o(3408),o(4590),o(3462),o(1439),o(7585),o(5315);var ye=o(3907),pe={data(){return{isDesktop:!1,images:[],selectedCategory:null,editedCategory:null,editingImageId:null,isFetched:!1}},mounted(){this.fetchImages(),this.checkScreenSize(),window.addEventListener("resize",this.checkScreenSize)},beforeUnmount(){window.removeEventListener("resize",this.checkScreenSize)},computed:{...(0,ye.rn)(["isAuthenticated"]),uniqueCategories(){const e=new Set;return this.images.forEach((t=>{e.add(t.category)})),Array.from(e)},filteredImages(){return this.selectedCategory?this.images.filter((e=>e.category===this.selectedCategory)):this.images}},methods:{checkScreenSize(){this.isDesktop=window.innerWidth>=768},openImage(){},getImageUrl(e){try{if(!e)return console.error("Invalid image data:",e),null;const t=atob(e),o=new Uint8Array(t.length);for(let e=0;e<t.length;e++)o[e]=t.charCodeAt(e);const s=new Blob([o.buffer],{type:"image/jpeg"});return URL.createObjectURL(s)}catch(t){return console.error("Error converting image data:",t),null}},async fetchImages(){try{const e=localStorage.getItem("token"),t={Authorization:`Bearer ${e}`},o=await fetch("/backend/Images",{headers:t}),s=await o.json();console.log("Retrieved images:",s),this.images=s}catch(e){console.error("Failed to fetch images:",e)}},async deleteImage(e){this.isAuthenticated||alert("you must be logged in to delete items.");const t=this.isUserClothingItem(e);if(t)try{const t=await fetch(`/backend/Images/${e}`,{method:"DELETE"});t.ok?(console.log("Image deleted:",e),this.$emit("imageDeleted")):console.error("Failed to delete image:",e)}catch(o){console.error("Error deleting image:",o)}else alert("You cannot delete shared items.")},async isUserClothingItem(e){try{const t=await fetch(`/backend/Images/${e}`),o=await t.json();return Object.prototype.hasOwnProperty.call(o,"userId")}catch(t){return console.error("Error checking if the image belongs to UserClothingItem:",t),!1}},handleEditImage(e){console.log("edit hit"),this.editingImageId=e.id,this.editedCategory=e.category,console.log(this.editedCategory)},isEditing(e){return this.editingImageId===e.id},async saveImageEdit(e){const t=this.editedCategory.trim();if(""!==t){const s=this.images.find((t=>t.id===e.id));s&&(s.category=t);try{const o=await fetch(`/backend/Images/${e.id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({category:t})});if(o.ok){const e=await o.json();s.category=e.category}else console.error("Failed to update image category:",o)}catch(o){console.error("Error updating image category:",o)}}this.editingImageId=null,this.editedCategory=""},cancelImageEdit(){this.editingImageId=null,this.editedCategory=""},handleSelectImage(e){this.$emit("selectImage",e),console.log("handleSelectImage connected:",e)},filterByCategory(e){console.log(e),this.selectedCategory=e,console.log(this.selectedCategory)}},watch:{isAuthenticated:{immediate:!0,handler:function(){console.log("who watches the watcher"),this.fetchImages()}}}};const Ie=(0,L.Z)(pe,[["render",ve]]);var fe=Ie;const we={key:0,class:"outfit-view-desktop"},_e={class:"outfit-view-container-desktop"},be={class:"outfit-view"},ke={class:"item-image-wrapper"},Ce=["src"],Se={class:"item-info"},Ue=["onClick"],Ee={class:"accessory-view"},De={key:0,class:"accessories"},Le={class:"item-image-wrapper"},Ae=["src"],Oe={class:"item-info"},Re=(0,l._)("div",null," Accessory ",-1),Me=["onClick"],Te={key:1,class:"empty-message"},Ve={key:1,class:"outfit-view-mobile"},je={class:"outfit-view-container-mobile"},Be={class:"outfit-view"},He={class:"item-image-wrapper"},Ne=["src"],qe={class:"item-info"},ze=["onClick"],Fe={class:"accessory-view"},Pe={key:0,class:"accessories"},Ge={class:"item-image-wrapper"},Ke=["src"],$e={class:"item-info"},Ye=(0,l._)("div",null," Accessory ",-1),Ze=["onClick"],xe={key:1,class:"empty-message"};function We(e,t,o,s,i,a){return(0,l.wg)(),(0,l.iD)("div",null,[i.isDesktop?((0,l.wg)(),(0,l.iD)("div",we,[(0,l._)("div",_e,[(0,l._)("div",be,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.filteredSelectedItems,((e,t)=>((0,l.wg)(),(0,l.iD)("div",{key:t,class:"item"},[(0,l._)("div",ke,[e?((0,l.wg)(),(0,l.iD)("img",{key:0,src:a.getImageUrl(e),alt:"Selected Item"},null,8,Ce)):(0,l.kq)("",!0)]),(0,l._)("div",Se,[(0,l._)("div",null,(0,R.zw)(t),1),(0,l._)("button",{onClick:o=>a.removeItem(e,t)},"Remove",8,Ue)])])))),128))]),(0,l._)("div",Ee,[o.selectedItems.accessory.length>0?((0,l.wg)(),(0,l.iD)("div",De,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(o.selectedItems.accessory,(e=>((0,l.wg)(),(0,l.iD)("div",{key:e.id,class:"item"},[(0,l._)("div",Le,[(0,l._)("img",{src:a.getImageUrl(e),alt:"Selected Accessory"},null,8,Ae)]),(0,l._)("div",Oe,[Re,(0,l._)("button",{onClick:t=>a.removeItem(e,"accessory")},"Remove",8,Me)])])))),128))])):(0,l.kq)("",!0),0===Object.keys(o.selectedItems).length&&0===o.selectedItems.accessory.length?((0,l.wg)(),(0,l.iD)("div",Te," No items selected ")):(0,l.kq)("",!0)])])])):((0,l.wg)(),(0,l.iD)("div",Ve,[(0,l._)("div",je,[(0,l._)("div",Be,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.filteredSelectedItems,((e,t)=>((0,l.wg)(),(0,l.iD)("div",{key:t,class:"item"},[(0,l._)("div",He,[e?((0,l.wg)(),(0,l.iD)("img",{key:0,src:a.getImageUrl(e),alt:"Selected Item"},null,8,Ne)):(0,l.kq)("",!0)]),(0,l._)("div",qe,[(0,l._)("div",null,(0,R.zw)(t),1),(0,l._)("button",{onClick:o=>a.removeItem(e,t)},"Remove",8,ze)])])))),128))]),(0,l._)("div",Fe,[o.selectedItems.accessory.length>0?((0,l.wg)(),(0,l.iD)("div",Pe,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(o.selectedItems.accessory,(e=>((0,l.wg)(),(0,l.iD)("div",{key:e.id,class:"item"},[(0,l._)("div",Ge,[(0,l._)("img",{src:a.getImageUrl(e),alt:"Selected Accessory"},null,8,Ke)]),(0,l._)("div",$e,[Ye,(0,l._)("button",{onClick:t=>a.removeItem(e,"accessory")},"Remove",8,Ze)])])))),128))])):(0,l.kq)("",!0),0===Object.keys(o.selectedItems).length&&0===o.selectedItems.accessory.length?((0,l.wg)(),(0,l.iD)("div",xe," No items selected ")):(0,l.kq)("",!0)])])]))])}var Je={props:{selectedItems:{type:Object}},data(){return{isDesktop:!1}},mounted(){console.log("selectedItems prop:",this.selectedItems)},computed:{filteredSelectedItems(){return Object.keys(this.selectedItems).reduce(((e,t)=>("accessory"!==t&&(e[t]=this.selectedItems[t]),e)),{})}},methods:{removeItem(e,t){if(console.log("remove items clicked",e),console.log("remove categories clicked",t),"accessory"===t){const o=this.selectedItems.accessory.indexOf(e);-1!==o&&this.$emit("removeItem",e,t)}else this.$emit("removeItem",this.selectedItems[t],t);console.log("remove items has run",t)},getImageUrl(e){console.log(e),console.log(e.data);const t=e.data;console.log(t);try{if(!e)return console.error("Invalid image data:",e),null;const o=atob(t),s=new Uint8Array(o.length);for(let e=0;e<o.length;e++)s[e]=o.charCodeAt(e);const l=new Blob([s.buffer],{type:"image/jpeg"});return URL.createObjectURL(l)}catch(o){return console.error("Error converting image data:",o),null}}}};const Qe=(0,L.Z)(Je,[["render",We]]);var Xe=Qe;const et={class:"modal"},tt={class:"modal-content"},ot=(0,l._)("h2",null,"Register",-1),st={class:"form-group"},lt=(0,l._)("label",{for:"username"},"Username:",-1),it={class:"form-group"},at=(0,l._)("label",{for:"email"},"Email:",-1),nt={class:"form-group"},ct=(0,l._)("label",{for:"password"},"Password:",-1),rt=(0,l._)("button",{class:"submit-button",type:"submit"},"Register",-1);function dt(e,t,o,i,a,n){return(0,l.wg)(),(0,l.iD)("div",et,[(0,l._)("div",tt,[ot,(0,l._)("form",{onSubmit:t[3]||(t[3]=(0,s.iM)(((...e)=>i.registerUser&&i.registerUser(...e)),["prevent"]))},[(0,l._)("div",st,[lt,(0,l.wy)((0,l._)("input",{type:"text",id:"username","onUpdate:modelValue":t[0]||(t[0]=e=>i.username=e),required:""},null,512),[[s.nr,i.username]])]),(0,l._)("div",it,[at,(0,l.wy)((0,l._)("input",{type:"email",id:"email","onUpdate:modelValue":t[1]||(t[1]=e=>i.email=e),required:""},null,512),[[s.nr,i.email]])]),(0,l._)("div",nt,[ct,(0,l.wy)((0,l._)("input",{type:"password",id:"password","onUpdate:modelValue":t[2]||(t[2]=e=>i.password=e),required:""},null,512),[[s.nr,i.password]])]),rt],32),(0,l._)("button",{class:"close-button-register",onClick:t[4]||(t[4]=(...e)=>i.handleCloseModal&&i.handleCloseModal(...e))},"Close")])])}var gt=o(2262),ut=o(9374);const mt=(0,ye.MT)({state:{isAuthenticated:!1,user:null,isRegistrationModalVisible:!1,isLoginModalVisible:!1},mutations:{SET_AUTHENTICATION(e,t){e.isAuthenticated=t},SET_USER(e,t){e.user=t},CLEAR_AUTHENTICATION(e){console.log("Before setting isAuthenticated to false:",e.isAuthenticated),e.isAuthenticated=!1,e.user=null,console.log("After setting isAuthenticated to false:",e.isAuthenticated)},SET_REGISTRATION_MODAL_VISIBLE(e,t){e.isRegistrationModalVisible=t},SET_LOGIN_MODAL_VISIBLE(e,t){e.isLoginModalVisible=t}},actions:{showLoginModal({commit:e}){e("SET_LOGIN_MODAL_VISIBLE",!0)},closeLoginModal({commit:e}){e("SET_LOGIN_MODAL_VISIBLE",!1)},showRegistrationModal({commit:e}){e("SET_REGISTRATION_MODAL_VISIBLE",!0)},closeRegistrationModal({commit:e}){e("SET_REGISTRATION_MODAL_VISIBLE",!1)},async registerUser({commit:e},t){try{const o=await ut.Z.post("/backend/User/register",t),s=o.data,l=s.token;localStorage.setItem("token",l);const i={Authorization:`Bearer ${l}`},a=n.data;console.log("Authenticated user:",a);const n=await ut.Z.get("/backend/User/current",{headers:i});e("SET_USER",s),e("SET_AUTHENTICATION",!0)}catch(o){console.error("registration failed!!")}},async loginUser({commit:e},t){try{const o=await ut.Z.post("backend/User/login",t);console.log("loginUser hit");const s=o.data.isAuthenticated,l=o.data.user,i=o.data.token;console.log(o.data),console.log(s),console.log(l),console.log(i),localStorage.setItem("token",i);const a={Authorization:`Bearer ${i}`},n=await ut.Z.get("/backend/User/current",{headers:a}),c=n.data;console.log("Authenticated user:",c),e("SET_AUTHENTICATION",!0),e("SET_USER",l)}catch(o){console.error("Login failed:",o)}},async logoutUser({commit:e}){try{await ut.Z.post("/backend/User/logout"),console.log("logout"),localStorage.removeItem("token"),e("CLEAR_AUTHENTICATION")}catch(t){console.error("Logout failed:",t)}}}});var ht=mt,vt={setup(){const e=(0,gt.iH)(""),t=(0,gt.iH)(""),o=(0,gt.iH)(""),s=(0,ye.oR)(),l=async()=>{try{const l={username:e.value,email:t.value,password:o.value};await s.dispatch("registerUser",l),console.log("User registered successfully!")}catch(l){console.error("Registration failed:",l)}},i=()=>{s.commit("SET_REGISTRATION_MODAL_VISIBLE",!1),console.log("close")};return{username:e,email:t,password:o,handleCloseModal:i,registerUser:l,isRegistrationModalVisible:s.state.isRegistrationModalVisible}}};const yt=(0,L.Z)(vt,[["render",dt]]);var pt=yt;const It={class:"modal"},ft={class:"modal-content"},wt=(0,l._)("h2",null,"Login",-1),_t={class:"form-group"},bt=(0,l._)("label",{for:"username"},"Username:",-1),kt={class:"form-group"},Ct=(0,l._)("label",{for:"password"},"Password:",-1),St=(0,l._)("button",{class:"login-button",type:"submit"},"Login",-1);function Ut(e,t,o,i,a,n){return(0,l.wg)(),(0,l.iD)("div",It,[(0,l._)("div",ft,[wt,(0,l._)("form",{onSubmit:t[2]||(t[2]=(0,s.iM)(((...e)=>i.loginUser&&i.loginUser(...e)),["prevent"]))},[(0,l._)("div",_t,[bt,(0,l.wy)((0,l._)("input",{type:"text",id:"username","onUpdate:modelValue":t[0]||(t[0]=e=>i.username=e),required:""},null,512),[[s.nr,i.username]])]),(0,l._)("div",kt,[Ct,(0,l.wy)((0,l._)("input",{type:"password",id:"password","onUpdate:modelValue":t[1]||(t[1]=e=>i.password=e),required:""},null,512),[[s.nr,i.password]])]),St],32),(0,l._)("button",{class:"close-button-login",onClick:t[3]||(t[3]=(...e)=>i.handleCloseModal&&i.handleCloseModal(...e))},"Close")])])}var Et={setup(){const e=(0,gt.iH)(""),t=(0,gt.iH)(""),o=(0,ye.oR)(),s=()=>{const s={username:e.value,password:t.value};o.dispatch("loginUser",s).then((e=>{console.log("response:",e),l()})).catch((e=>{console.error("Login failed:",e),console.log(s)}))},l=()=>{o.commit("SET_LOGIN_MODAL_VISIBLE",!1),console.log("close")};return{username:e,password:t,loginUser:s,handleCloseModal:l,isLoginModalVisible:o.state.isLoginModalVisible}}};const Dt=(0,L.Z)(Et,[["render",Ut]]);var Lt=Dt,At={name:"App",components:{ImageUploader:O,PhotoStream:fe,OutfitView:Xe,RegistrationModal:pt,LoginModal:Lt},props:{images:{type:Array,default:()=>[]}},setup(){const e=(0,ye.oR)(),t=(0,gt.iH)(!1),o=(0,l.Fl)((()=>e.state.isAuthenticated)),s=(0,l.Fl)((()=>e.state.isRegistrationModalVisible)),i=(0,l.Fl)((()=>e.state.isLoginModalVisible)),a=(0,gt.iH)({hat:null,top:null,bottom:null,onepiece:null,shoes:null,accessory:[]}),n=()=>{t.value=window.innerWidth>=768},c=()=>{const e=document.getElementById("photostream");e&&e.fetchImages(),console.log("refreshPhotostream has run")},r=()=>{console.log("test registration click"),e.commit("SET_REGISTRATION_MODAL_VISIBLE",!0)},d=()=>{console.log("test login click"),e.commit("SET_LOGIN_MODAL_VISIBLE",!0),console.log(i.value)},g=()=>{console.log("click logout"),e.dispatch("logoutUser")},u=e=>{const{category:t}=e;if(console.log("handleSelectImage hit:",e),console.log("handleSelectImage hit:",e),"shoes"===t.toLowerCase())console.log("handleSelectImage LOGIC hit:",t),a.value.shoes=e;else if("bottom"===t.toLowerCase())console.log("handleSelectImage LOGIC hit:",t),a.value.bottom=e,a.value.onepiece=null;else if("top"===t.toLowerCase())console.log("handleSelectImage LOGIC hit:",t),a.value.top=e,a.value.onepiece=null;else if("hat"===t.toLowerCase())console.log("handleSelectImage LOGIC hit:",t),a.value.hat=e;else if("accessory"===t.toLowerCase())if(console.log("handleSelectImage Accessory hit:",t),3===a.value.accessory.length)console.log("too many accessories");else{a.value.accessory.push(e);const t=a.value.accessory[0].data;console.log(t),console.log("accessory added"),console.log("accessory list:",a.value.accessory[0].id)}else"onepiece"===t.toLowerCase()&&(console.log("handleSelectImage LOGIC hit:",t),a.value.onepiece=e,a.value.top=null,a.value.bottom=null);console.log("Updated selectedItems:",a.value)},m=(e,t)=>{if(console.log("handleRemoveItem ran:",t),"accessory"===t){const t=a.value.accessory.indexOf(e);-1!==t&&a.value.accessory.splice(t,1)}else console.log("else remove RAN:",a.value[t]),a.value[t]=null};return(0,l.bv)((()=>{n(),window.addEventListener("resize",n)})),(0,l.Jd)((()=>{window.removeEventListener("resize",n)})),{isDesktop:t,isRegistrationModalVisible:s,isLoginModalVisible:i,selectedItems:a,isAuthenticated:o,refreshPhotostream:c,showRegistrationModal:r,showLoginModal:d,logoutUser:g,handleSelectImage:u,handleRemoveItem:m}}};const Ot=(0,L.Z)(At,[["render",y]]);var Rt=Ot;const Mt=(0,s.ri)(Rt);Mt.use(ht),Mt.mount("#app")}},t={};function o(s){var l=t[s];if(void 0!==l)return l.exports;var i=t[s]={exports:{}};return e[s].call(i.exports,i,i.exports,o),i.exports}o.m=e,function(){var e=[];o.O=function(t,s,l,i){if(!s){var a=1/0;for(d=0;d<e.length;d++){s=e[d][0],l=e[d][1],i=e[d][2];for(var n=!0,c=0;c<s.length;c++)(!1&i||a>=i)&&Object.keys(o.O).every((function(e){return o.O[e](s[c])}))?s.splice(c--,1):(n=!1,i<a&&(a=i));if(n){e.splice(d--,1);var r=l();void 0!==r&&(t=r)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[s,l,i]}}(),function(){o.d=function(e,t){for(var s in t)o.o(t,s)&&!o.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,s){var l,i,a=s[0],n=s[1],c=s[2],r=0;if(a.some((function(t){return 0!==e[t]}))){for(l in n)o.o(n,l)&&(o.m[l]=n[l]);if(c)var d=c(o)}for(t&&t(s);r<a.length;r++)i=a[r],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(d)},s=self["webpackChunkyour_vue_project"]=self["webpackChunkyour_vue_project"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=o.O(void 0,[998],(function(){return o(654)}));s=o.O(s)})();
//# sourceMappingURL=app.560d39b0.js.map