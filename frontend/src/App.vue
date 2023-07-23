<template>
  <div class="body-container">

    <nav class="navbar">
      <ul class="navbar-menu">
        <li><a href="/">Kristo's Closet</a></li>
      </ul>

    <button @click="showRegistrationModal">Register</button>
    <button @click="showLoginModal">Login</button>
    </nav>

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

    <RegistrationModal v-if="isRegistrationModalVisible" @close="closeRegistrationModal" />
    <LoginModal v-if="isLoginModalVisible" @close="closeLoginModal" />

  </div>
</template>

<script>
import ImageUploader from './components/ImageUploader.vue';
import PhotoStream from './components/PhotoStream.vue';
import OutfitView from './components/OutfitView.vue';
import RegistrationModal from './components/RegistrationModal.vue';
import LoginModal from './components/LoginModal.vue';

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

  data() {
    return {
      isDesktop: false,
      isRegistrationModalVisible: false,
      isLoginModalVisible: false,
      selectedItems: { 
        hat: null,
        top: null,
        bottom: null,
        onepiece: null,
        shoes: null,
        accessory: [],
      },
    };
  },
    
  mounted() {
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkScreenSize);
  },
  methods: {

    checkScreenSize() {
      this.isDesktop = window.innerWidth >= 768;
    },
    refreshPhotostream() {
      this.$refs.photostream.fetchImages();
    },

    showRegistrationModal() {
      this.isRegistrationModalVisible = true;
    },
    closeRegistrationModal() {
      this.isRegistrationModalVisible = false;
    },

    showLoginModal() {
      this.isLoginModalVisible = true;
    },
    closeLoginModal() {
      this.isLoginModalVisible = false;
    },

    handleSelectImage(image) {
      const { category } = image;
      console.log("handleSelectImage hit:", image);
      console.log("handleSelectImage hit:", image);

      if (category.toLowerCase() === 'shoes') {
        console.log("handleSelectImage LOGIC hit:", category);
        this.selectedItems.shoes = image;
      } else if (category.toLowerCase() === 'bottom') {
          console.log("handleSelectImage LOGIC hit:", category);
          this.selectedItems.bottom = image;
          this.selectedItems.onepiece = null;
      } else if (category.toLowerCase() === 'top') {
          console.log("handleSelectImage LOGIC hit:", category);
          this.selectedItems.top = image;
          this.selectedItems.onepiece = null;
      } else if (category.toLowerCase() === 'hat') {
          console.log("handleSelectImage LOGIC hit:", category);
          this.selectedItems.hat = image;
      } else if (category.toLowerCase() === 'accessory') {
          console.log("handleSelectImage Accessory hit:", category);
          if (this.selectedItems.accessory.length === 3) {
          console.log("too many accessories") 
      } else {
          this.selectedItems.accessory.push(image);
          const firstAccessoryData = this.selectedItems.accessory[0].data;
          console.log(firstAccessoryData);
          console.log("accessory added");
          console.log("accessory list:", this.selectedItems.accessory[0].id);
        }
      } else if (category.toLowerCase() === 'onepiece') {
          console.log("handleSelectImage LOGIC hit:", category);
          this.selectedItems.onepiece = image;
          this.selectedItems.top = null;
          this.selectedItems.bottom = null;
        }
      console.log("Updated selectedItems:", this.selectedItems);
},

    handleRemoveItem(item, category) {
      console.log("handleRemoveItem ran:", category);

    if (category === 'accessory') {
    
      const index = this.selectedItems.accessory.indexOf(item);

      if (index !== -1) {
        // Remove the item from the accessories array
        this.selectedItems.accessory.splice(index, 1);
      }
    } else {
      // Reset the category to null
      console.log("else remove RAN:", this.selectedItems[category]);
      this.selectedItems[category] = null;
      }
    },
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
</style>