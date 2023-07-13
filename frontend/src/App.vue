<template>

  <body>
    <div>
      <ImageUploader msg="Welcome to The Image Uploader!" @imageUploaded="refreshPhotostream" />
    </div>
    <div>
      <PhotoStream :images="images" ref="photostream" @imageDeleted="refreshPhotostream" />
    </div>

  <div>
    <nav class="navbar">
      <ul class="navbar-menu">
        <li><a href="/">Kristo's Closet</a></li>
      </ul>
    </nav>

     <!-- Render the outfit view component based on the screen size and layout -->
    <div v-if="isDesktop">
      <div>
        <OutfitView class="outfit-view-desktop" />
      </div>
    <div v-else>
      <div class="mobile-layout">
      <!-- Render the outfit view component in the desired position for mobile layout -->
          <div>
            <OutfitView class="outfit-view-mobile" />
          </div>
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
  data() {
    return {
      isDesktop: false,
    };
  },
    mounted() {
      this.checkScreenSize();
      window.addEventListener('resize', this.checkScreenSize);
    },
    beforeUnmounted() {
      window.removeEventListener('resize', this.checkScreenSize);
    },
    methods: {
      checkScreenSize() {
        this.isDesktop = window.innerWidth >= 768;
      },
      refreshPhotostream() {
      this.$refs.photostream.fetchImages();
      },
    },
  };
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}

body { 
  background-color: #e9ff96;
}

.desktop-layout {
}

.mobile-layout {
}

.outfit-view-desktop {
}

.outfit-view-mobile {
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
