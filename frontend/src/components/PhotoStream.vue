<template>
  <div>
    <h1>Photo Stream</h1>
    <div class="photo-stream">
      <div v-for="image in images" :key="image.id" @click="openImage(image)">
        <img :src="image.url" alt="Photo" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      images: [],
    };
  },
  mounted() {
    this.fetchImages();
  },
  methods: {
    fetchImages() {
      // fetch the image data
      axios.get('/backend/Images')
        .then(response => {
          console.log(response);
          this.images = response.data;
          console.log(this.images);
        })
        .catch(error => {
          console.error('Error fetching images:', error);
        });
    },
  },
};

</script>

<style scoped>
.photo-stream {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 10px;
}

.photo-stream img {
  width: 100%;
  height: auto;
}
</style>