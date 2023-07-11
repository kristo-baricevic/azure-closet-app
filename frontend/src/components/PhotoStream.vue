<template>
  <div>
    <h1>Photo Stream</h1>
    <div class="photo-stream">
      <div class="card" v-for="image in images" :key="image.id" @click="openImage(image)">
        <img class="card-image" :src="getImageUrl(image.data)" alt="Photo" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [],
    };
  },
  methods: {
    openImage() {
      // open the image when clicked
    },
    getImageUrl(imageData) {
  try {
    if (!imageData) {
      console.error('Invalid image data:', imageData);
      return null;
    }
  
    const base64String = atob(imageData);
    const bytes = new Uint8Array(base64String.length);
  
    for (let i = 0; i < base64String.length; i++) {
      bytes[i] = base64String.charCodeAt(i);
    }
  
    const blob = new Blob([bytes.buffer], { type: 'image/jpeg' });
    return URL.createObjectURL(blob);
  } catch (error) {
    console.error('Error converting image data:', error);
    return null;
  }
},


    async fetchImages() {
  try {
    const response = await fetch('/backend/Images');
    const data = await response.json();
    console.log('Retrieved images:', data);
    this.images = data.map((imageBytes, index) => ({ id: index, data: imageBytes }));
  } catch (error) {
    console.error('Failed to fetch images:', error);
  }
},
  },
  mounted() {
    console.log('Component mounted');
    this.fetchImages();
  },
};
</script>

<style>
.photo-stream {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  width: 250px;
  margin: 10px;
  padding: 10px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

.card-image {
  width: 100%;
  height: auto;
}
</style>