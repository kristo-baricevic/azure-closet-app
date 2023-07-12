<template>
  <div>
    <nav class="navbar">
      <ul class="navbar-menu">
        <li><a href="/">Home</a></li>
      </ul>
    </nav>

  </div>
  <body>
    <ImageUploader msg="Welcome to The Image Uploader!" @imageUploaded="refreshPhotostream" />
    <PhotoStream :images="images" ref="photostream" @imageDeleted="refreshPhotostream" />
  </body>
</template>

<script>
import ImageUploader from './components/ImageUploader.vue';
import PhotoStream from './components/PhotoStream.vue';


export default {
  name: 'App',
  components: {
    ImageUploader,
    PhotoStream
  },
  data() {
    return {
    };
  },
    methods: {
      refreshPhotostream() {
      this.$refs.photostream.fetchImages();
    }
  }
}
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

.navbar {
  background-color: #a4e333;
  height: 80px; /* Adjust the height value as needed */
}

.navbar-menu {
  list-style-type: none;
  padding: 0;
  height: 100%; /* Adjust the height value as needed */
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
  line-height: 80px; /* Ensures the text is vertically centered */
}
</style>
