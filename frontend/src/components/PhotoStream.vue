<template>
  <div>
    <!-- Desktop layout -->
    <div v-if="isDesktop">

      <div class="sticky-container">
        <div class="category-buttons-container">
          <button class="category-button" @click="filterByCategory(null)">All</button>
          <button class="category-button" v-for="category in uniqueCategories" :key="category" @click="filterByCategory(category)">
            {{ category }}
          </button>
        </div>
      </div>

      <div class="photo-stream">
        <div class="card" v-for="image in filteredImages" :key="image.id" @click="openImage(image)">
          <img class="card-image" :src="getImageUrl(image.data)" alt="Photo" />
          <div class="card-info">
            <div class="card-buttons-container">
              <button class="delete-button" @click="deleteImage(image)">Delete</button>
              <button class="select-button" @click="handleSelectImage(image)">Select</button>
              <button class="edit-button" @click="handleEditImage(image)">Edit</button>
            </div>
            <div class="category-container">
              <div class="edit-category" v-if="isEditing(image)">
                <select v-model="editedCategory" @keyup.enter="saveImageEdit(image)">
                  <option v-for="category in uniqueCategories" :key="category" :value="category">{{ category }}</option>
                </select>
                <button @click="saveImageEdit(image)">Save</button>
                <button @click="cancelImageEdit()">Cancel</button>
              </div>
              <div class="image-category">{{ image.category }}</div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- Mobile layout -->
    <div v-else>

      <!-- Mobile layout code (same as desktop) -->
      <div class="sticky-container">
        <div class="category-buttons-container">
          <button class="category-button" @click="filterByCategory(null)">All</button>
          <button class="category-button" v-for="category in uniqueCategories" :key="category" @click="filterByCategory(category)">
            {{ category }}
          </button>
        </div>
      </div>

      <div class="photo-stream">
        <div class="card" v-for="image in filteredImages" :key="image.id" @click="openImage(image)">
          <img class="card-image" :src="getImageUrl(image.data)" alt="Photo" />
          <div class="card-info">
            <div class="card-buttons-container">
              <button class="delete-button" @click="deleteImage(image)">Delete</button>
              <button class="select-button" @click="handleSelectImage(image)">Select</button>
              <button class="edit-button" @click="handleEditImage(image)">Edit</button>
            </div>
            <div class="category-container">
              <div class="edit-category" v-if="isEditing(image)">
                <select v-model="editedCategory" @keyup.enter="saveImageEdit(image)">
                  <option v-for="category in uniqueCategories" :key="category" :value="category">{{ category }}</option>
                </select>
                <button @click="saveImageEdit(image)">Save</button>
                <button @click="cancelImageEdit()">Cancel</button>
              </div>
              <div class="image-category">{{ image.category }}</div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {

  data() {
    return {
      isDesktop: false,
      images: [],
      selectedCategory: null,
      editedCategory: null,
      editingImageId: null,
      isFetched: false,
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

  computed: {
    ...mapState(['isAuthenticated']),

    uniqueCategories() {
      const categories = new Set();
      this.images.forEach((image) => {
        categories.add(image.category);
      });
      return Array.from(categories);
    },

    filteredImages() {
      if (!this.selectedCategory) return this.images;
      return this.images.filter((image) => image.category === this.selectedCategory);
    },
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
        // Get the token from local storage
        const token = localStorage.getItem('token');

        // Include the token in the request headers
        const headers = {
          Authorization: `Bearer ${token}`,
        };

        const response = await fetch('/backend/Images', { headers });
        const data = await response.json();

        console.log("fetched images", data);

        // Check if each image has a 'userId' property to determine if it's a user image
        this.images = data.map((image) => ({
        ...image,
        isUserImage: image.userId !== null,
        }));
      } catch (error) {
        console.error('Failed to fetch images:', error);
      }
    },

    async deleteImage(image) {
      console.log("delete function ran");
      console.log(image);

      // Check to see if user is logged in

      if (!this.isAuthenticated) {
        console.log("authentication check for delete");
        alert('you must be logged in to delete items.');
        return;
      }

      if (!image.userId) {
        console.log("userId check for delete");
        alert('you cannot delete shared items');
      }

      try {
        console.log("sending image.userId to backend", image.id);
        const response = await fetch(`/backend/Images/${image.id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          console.log('Image deleted:', image.id);
          // fetch images after deletion
          await this.fetchImages();
          console.log('post emit');
        } else {
          console.error('Failed to delete image:', image.id);
        }
      } catch (error) {
        console.error('Error deleting image:', error);
      }
    },


  handleEditImage(image) {
    console.log("edit hit");

    // Check if the user is authenticated
    if (!this.isAuthenticated) {
      alert('You must be logged in to edit items.');
      return;
    }

    console.log(image.isUserImage);
    // Check if the image belongs to the UserClothingItem table
    this.isUserClothingItem(image.id)
      .then((isUserItem) => {
        if (isUserItem) {
          // Allow the user to edit the image
          this.editingImageId = image.id;
          this.editedCategory = image.category;
          console.log(this.editedCategory);
        } else {
          // Display an alert as the image is not owned by the user
          alert('You can only edit your uploaded images.');
        }
      })
      .catch((error) => {
        console.error('Error checking if the image belongs to UserClothingItem:', error);
        // Display an alert or handle the error gracefully
      });
  },
    

  async isUserClothingItem(imageId) {
    try {
      const image = this.images.find((img) => img.id === imageId);
      return image && image.isUserImage;
    } catch (error) {
      console.error('Error checking if the image belongs to UserClothingItem:', error);
      return false;
    }
  },


  isEditing(image) {
    return this.editingImageId === image.id && image.isUserImage;
  },

  async saveImageEdit(image) {
      const updatedCategory = this.editedCategory.trim();
      if (updatedCategory !== "") {
        // update the category 
        const foundImage = this.images.find((img) => img.id === image.id);
        if (foundImage) {
        foundImage.category = updatedCategory;
      }

      // Call the backend to update the category
      try {
        const response = await fetch(`/backend/Images/${image.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            category: updatedCategory,
          }),
        });

        if (response.ok) {
          const updatedImage = await response.json();
          // Update the image category in the frontend
          foundImage.category = updatedImage.category;
          } else {
            console.error('Failed to update image category:', response);
          }
        } catch (error) {
        console.error('Error updating image category:', error);
        }
      }

    // Reset editing state 
    this.editingImageId = null;
    this.editedCategory = "";
  },

  cancelImageEdit() {
    this.editingImageId = null;
    this.editedCategory = "";
  },

  handleSelectImage(image) {
    // Emit the selected image to the parent component
    this.$emit('selectImage', image);
    console.log('handleSelectImage connected:', image);
  },

  filterByCategory(category) {
    console.log(category);
    this.selectedCategory = category;
    console.log(this.selectedCategory);
    },
  },

  watch: {
    isAuthenticated: {
      handler: function () {
          console.log("who watches the watcher");
          this.fetchImages();
      },
    },
  },

};
</script>

<style>

.sticky-container {
  position: sticky;
  top: 0;
  z-index: 1; 
}

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
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.card-buttons-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}

.category-buttons-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 5px;
  background-color: #a4e333;
  position: sticky;
  top: 0;
  border: 1px solid black;
  border-radius: 4px;
}

.category-button {
  padding: 5 5px;
  margin: 5px;
  background-color: #50C878;
  color: black;
  border: 1px solid black;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.category-button:hover {
  background-color: #228B22;
  border-color: #0056b3;
}

.delete-button {
  display: block;
  margin: 5px;
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

.edit-button {
  display: block;
  margin: 5px;
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #50C878;
  color: black;
  border: 1px solid black;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.edit-button:hover {
  background-color: #228B22;
  color: black;
}

.category-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.image-category {
  margin-top: 5px;
  font-size: 14px;
  color: black;
  padding: 5px;
}

.select-button {
  display: block;
  margin: 5px;
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #50C878;
  color: black;
  border: 1px solid black;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.select-button:hover {
  background-color: #228B22;
  border-color: #0056b3;
}
</style>
