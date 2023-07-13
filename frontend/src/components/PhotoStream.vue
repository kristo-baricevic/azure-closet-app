<template>
  <div>
    <!-- Desktop layout -->
    <div v-if="isDesktop">
      <h1>Photo Stream</h1>
        <div class="photo-stream">
          <div class="card" v-for="image in images" :key="image.id" @click="openImage(image)">
            <img class="card-image" :src="getImageUrl(image.data)" alt="Photo" />
          <div class="card-info">
            <button class="delete-button" @click="deleteImage(image.id)">Delete</button>
            <div class="image-category">{{ image.category }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile layout -->
    <div v-else>
      <!-- Render mobile-specific components or layout here -->
    </div>
  </div>
</template>

<template>
  <div>
    <!-- Desktop layout -->
    <div v-if="isDesktop">
      <h1>Photo Stream</h1>
      <div class="photo-stream">
        <div class="card" v-for="image in images" :key="image.id" @click="openImage(image)">
          <img class="card-image" :src="getImageUrl(image.data)" alt="Photo" />
          <div class="card-info">
            <button class="delete-button" @click="deleteImage(image.id)">Delete</button>
            <div class="image-category">{{ image.category }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile layout -->
    <div v-else>
      <!-- Render mobile-specific components or layout here -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDesktop: false,
      images: [],
    };
  },

  mounted() {
    this.fetchImages();
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize);
  },

  beforeUnmount() {
    window.removeEventListener('resize', this.checkScreenSize);
  },

  methods: {
    checkScreenSize() {
      this.isDesktop = window.innerWidth >= 768; // Breakpoint
    },

    openImage() {
      // Open the image when clicked
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
        this.images = data;
      } catch (error) {
        console.error('Failed to fetch images:', error);
      }
    },

    async deleteImage(imageId) {
      try {
        const response = await fetch(`/backend/Images/${imageId}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          console.log('Image deleted:', imageId);
          this.$emit('imageDeleted');
        } else {
          console.error('Failed to delete image:', imageId);
        }
      } catch (error) {
        console.error('Error deleting image:', error);
      }
    },
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

.card-info {
  display: flex;
  justify-content: center;
  align-items: center;
}

.delete-button {
  display: block;
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #50C878; 
  color: black;
  border: 1px solid black;  
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease; 
}

.delete-button:hover {
  background-color: #228B22; 
  color: black;
}

.image-category {
  margin-top: 5px;
  font-size: 14px;
  color: black;
  padding: 5px;
}

</style>