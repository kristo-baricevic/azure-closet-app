<template>
  <div class="body-container">

    <nav class="navbar">
      <ul class="navbar-menu">
        <li><a href="/">Kristo's Closet</a></li>
        <li>    
          <button class="registration-button" @click="showRegistrationModal">Register</button>
        </li>
        <li>
          <button class="login-button" v-if="!isAuthenticated" @click="showLoginModal">Login</button>
          <button class="logout-button" v-else @click="logoutUser">Logout</button>
        </li>
      </ul>

    </nav>


    <RegistrationModal 
      v-if="isRegistrationModalVisible" 
      @close-modal="handleCloseRegistrationModal" 
      class="overlay"
    />
    <LoginModal 
      v-if="isLoginModalVisible" 
      class="overlay"
    />

    <div class="image-uploader-container">
      <ImageUploader msg="Welcome to The Image Uploader!" @imageUploaded="refreshPhotostream" />
    </div>

    <!-- Render the outfit for Desktop -->
    <div v-if="isDesktop" class="desktop-layout">
      <div class="photostream-container">
        <PhotoStream 
        :selectedItems="selectedItems" 
        :images="images" 
        ref="photostream" 
        @imageDeleted="refreshPhotostream" 
        @selectImage="handleSelectImage"
        />
      </div>
      <div class="outfit-view-container">
        <OutfitView 
        :selectedItems="selectedItems" 
        @removeItem="handleRemoveItem" 
        class="outfit-view-desktop" />
      </div>
    </div>

    <!-- Render the outfit for Mobile -->
    <div v-else class="mobile-layout">
      <div class="photostream-container-mobile">
        <PhotoStream 
        :selectedItems="selectedItems"
        :localSelectedItems="localSelectedItems" 
        :images="images" 
        ref="photostream" 
        @imageDeleted="refreshPhotostream" 
        @selectImage="handleSelectImage"
        />
      </div>

      <div class="outfit-view-container">
        <OutfitView 
        :selectedItems="selectedItems" 
        @removeItem="handleRemoveItem" 
        class="outfit-view-mobile" 
        />
      </div>
    </div>

  </div>
</template>

<script>
import ImageUploader from './components/ImageUploader.vue';
import PhotoStream from './components/PhotoStream.vue';
import OutfitView from './components/OutfitView.vue';
import RegistrationModal from './components/RegistrationModal.vue';
import LoginModal from './components/LoginModal.vue';

import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'App',
  components: {
    ImageUploader,
    PhotoStream,
    OutfitView,
    RegistrationModal,
    LoginModal,
  },

  props: {
    images: {
      type: Array,
      default: () => [],
    },
  },

  setup() {
    const store = useStore();

    // Reactive data properties
    const isDesktop = ref(false);
    const isRegistrationModalVisible = computed(() => store.state.isRegistrationModalVisible);
    const isLoginModalVisible = computed(() => store.state.isLoginModalVisible);
    const selectedItems = ref({
      hat: null,
      top: null,
      bottom: null,
      onepiece: null,
      shoes: null,
      accessory: [],
    });

    const isAuthenticated = computed(() => store.state.isAuthenticated);

    // Methods
    const checkScreenSize = () => {
      isDesktop.value = window.innerWidth >= 768;
    };

    const refreshPhotostream = () => {
      const photostreamComponent = document.getElementById('photostream');
      if (photostreamComponent) {
        photostreamComponent.fetchImages();
      }
      console.log("refreshPhotostream has run");
    };

    const showRegistrationModal = () => {
      console.log("test registration click");
      store.commit('SET_REGISTRATION_MODAL_VISIBLE', true);
    };

    const showLoginModal = () => {
      console.log("test login click");
      store.commit('SET_LOGIN_MODAL_VISIBLE', true);
      console.log(isLoginModalVisible.value);
    };

    const logoutUser = () => {
      console.log("click logout");
      store.dispatch('logoutUser');
    };

    const handleSelectImage = (image) => {
      const { category } = image;
      console.log("handleSelectImage hit:", image);
      console.log("handleSelectImage hit:", image);

      if (category.toLowerCase() === 'shoes') {
        console.log("handleSelectImage LOGIC hit:", category);
        selectedItems.value.shoes = image;
      } else if (category.toLowerCase() === 'bottom') {
        console.log("handleSelectImage LOGIC hit:", category);
        selectedItems.value.bottom = image;
        selectedItems.value.onepiece = null;
      } else if (category.toLowerCase() === 'top') {
        console.log("handleSelectImage LOGIC hit:", category);
        selectedItems.value.top = image;
        selectedItems.value.onepiece = null;
      } else if (category.toLowerCase() === 'hat') {
        console.log("handleSelectImage LOGIC hit:", category);
        selectedItems.value.hat = image;
      } else if (category.toLowerCase() === 'accessory') {
        console.log("handleSelectImage Accessory hit:", category);
        if (selectedItems.value.accessory.length === 3) {
          console.log("too many accessories");
        } else {
          selectedItems.value.accessory.push(image);
          const firstAccessoryData = selectedItems.value.accessory[0].data;
          console.log(firstAccessoryData);
          console.log("accessory added");
          console.log("accessory list:", selectedItems.value.accessory[0].id);
        }
      } else if (category.toLowerCase() === 'onepiece') {
        console.log("handleSelectImage LOGIC hit:", category);
        selectedItems.value.onepiece = image;
        selectedItems.value.top = null;
        selectedItems.value.bottom = null;
      }
      console.log("Updated selectedItems:", selectedItems.value);
    };

    const handleRemoveItem = (item, category) => {
      console.log("handleRemoveItem ran:", category);

      if (category === 'accessory') {
        const index = selectedItems.value.accessory.indexOf(item);
        if (index !== -1) {
          // Remove the item from the accessories array
          selectedItems.value.accessory.splice(index, 1);
        }
      } else {
        // Reset the category to null
        console.log("else remove RAN:", selectedItems.value[category]);
        selectedItems.value[category] = null;
      }
    };

    // Check screen size on mount and update on resize
    onMounted(() => {
      checkScreenSize();
      window.addEventListener('resize', checkScreenSize);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('resize', checkScreenSize);
    });

    return {
      isDesktop,
      isRegistrationModalVisible,
      isLoginModalVisible,
      selectedItems,
      isAuthenticated,
      refreshPhotostream,
      showRegistrationModal,
      showLoginModal,
      logoutUser,
      handleSelectImage,
      handleRemoveItem,
    };
  },
};
</script>


<style>
.body-container {
  background-color: #e9ff96;
}

.desktop-layout {
  display: flex;
  flex-direction: row;
}

.mobile-layout {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.image-uploader-container {
  margin-left:20px;
}

.photostream-container {
  flex-grow: 1;
  height: calc(100vh - 80px);
  overflow-y: scroll;
  max-width: 60%;
}

.photostream-container-mobile {
  flex-grow: 1;
  resize: vertical;
  height: calc(100vh - 80px);
  overflow-y: scroll;
  max-width: 90%;
}


.outfit-view-container {
  flex-grow: 1;
  height: calc(100vh - 80px);
  overflow-y: auto;
  min-width: 40%;
}

.outfit-view-container-mobile {
  flex-grow: 1;
  height: calc(100vh - 80px);
  overflow-y: auto;
  min-width: 90%;
}

.outfit-view-desktop {
  /* Add styles for desktop outfit view */
}

.outfit-view-mobile {
  /* Add styles for mobile outfit view */
}

.navbar {
  background-color: #a4e333;
  height: 80px; 
}

.navbar-menu {
  list-style-type: none;
  padding: 0;
  height: 100%; 
  display: flex;
  align-items: center;
}

.navbar-menu li {
  display: inline-block;
  margin: 0 10px;
}

.navbar-menu a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  line-height: 80px; 
}

.registration-button {
  margin: 5px;
  font-size: 14px;
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #50C878;
  color: black;
  border: 1px solid black;
  border-radius: 4px;
  width: 83px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.registation-button:hover {
  background-color: #228B22;
  color: black;
}

.login-button {
  margin: 5px;
  font-size: 14px;
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #50C878;
  color: black;
  border: 1px solid black;
  border-radius: 4px;
  width: 83px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-button:hover {
  background-color: #228B22;
  color: black;
}

.logout-button {
  margin: 5px;
  font-size: 14px;
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #50C878;
  color: black;
  border: 1px solid black;
  border-radius: 4px;
  width: 83px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.logout-button:hover{
  background-color: #228B22;
  color: black;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999; 
}

</style>