<template>
  <div class="body-container">

    <nav class="navbar">
      <ul class="navbar-menu">
        <li><a href="/">Kristo's Closet</a></li>
      </ul>
    </nav>

    <div>
      <ImageUploader msg="Welcome to The Image Uploader!" @imageUploaded="refreshPhotostream" />
    </div>

    <!-- Render the outfit for Desktop -->
    <div v-if="isDesktop" class="desktop-layout">
      <div class="photostream-container resizable">
        <PhotoStream 
        :selectedItems="selectedItems" 
        :images="images" 
        ref="photostream" 
        @imageDeleted="refreshPhotostream" 
        @selectedItemsUpdated="updateSelectedItems" 
        />
      </div>
      <div class="outfit-view-container resizable">
        <OutfitView 
        :selectedItems="selectedItems" 
        @remove-Item="removeItem" 
        class="outfit-view-desktop" />
      </div>
    </div>

    <!-- Render the outfit for Mobile -->
    <div v-else class="mobile-layout">
      <div class="photostream-container resizable">
        <PhotoStream 
        :selectedItems="selectedItems" 
        :images="images" 
        ref="photostream" 
        @imageDeleted="refreshPhotostream" 
        @selectedItemsUpdated="updateSelectedItems"        
        />
      </div>
      <div class="outfit-view-container resizable">
        <OutfitView 
        :selectedItems="selectedItems" 
        @remove-Item="removeItem" 
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

export default {
  name: 'App',
  components: {
    ImageUploader,
    PhotoStream,
    OutfitView
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
      selectedItems: { 
        shoes: null,
        bottom: null,
        top: null,
        onePiece: null,
        hat: null,
        accessories: [],
      }
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

    updateSelectedItems(updatedItems) {
      this.selectedItems = updatedItems;
    },

    removeItem(category) {
      if (category === 'accessories') {
        this.selectedItems.accessories = [];
      } else {
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

/* Add CSS styles for resizable split screens */
.resizable {
  resize: both;
  overflow: auto;
  min-width: 200px;
  min-height: 200px;
  max-width: 100%;
  max-height: 100%;
}

.desktop-layout {
  display: flex;
  flex-direction: row;
}

.mobile-layout {
  display: flex;
  flex-direction: column;
}

.photostream-container {
  flex-grow: 1;
}

.outfit-view-container {
  flex-grow: 1;
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