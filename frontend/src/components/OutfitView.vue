<template>
  <div>
    <!-- Desktop view -->
    <div v-if="isDesktop" class="outfit-view-desktop">
      <div class="outfit-view">
        <!-- Display the selected clothing items here -->
        <div v-for="(item, category) in selectedItems" :key="category" class="item">
          <!-- Render the item in the desired format -->
          <div class="item-image-wrapper">
            <img :src="getImageUrl(item)" alt="Selected Item" v-if="item" />
          </div>
          <div class="item-info">
            <button @click="removeItem(item, category)">Remove</button>
          </div>
        </div>
        <div v-if="Object.keys(selectedItems).length === 0" class="empty-message">No items selected</div>
      </div>
    </div>

    <!-- Mobile view -->
    <div v-else class="outfit-view-mobile">
      <div class="outfit-view">
        <!-- Display the selected clothing items here -->
        <div v-for="(item, category) in selectedItems" :key="category" class="item">
          <!-- Render the item in the desired format -->
          <div class="item-image-wrapper">
            <img :src="getImageUrl(item)" alt="Selected Item" v-if="item" />
          </div>
          <div class="item-info">
            <button @click="removeItem(item, category)">Remove</button>
          </div>
        </div>
        <div v-if="Object.keys(selectedItems).length === 0" class="empty-message">No items selected</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {

  props: {
    selectedItems: {
      type: Object,
    },
  },
  data() {
    return {
      isDesktop: false,
    };
  },
  mounted() {
    console.log('selectedItems prop:', this.selectedItems);
  },
  
  methods: {
    removeItem(item, category) {
      console.log("remove items clicked", item);
      if (category === 'accessories') {
        const index = this.selectedItems.accessories.indexOf(item);
        if (index !== -1) {
          // Emit an event to remove the item from the parent component
          this.$emit('removeItem', item, category);
        }
      } else if (category === 'onePiece') {
        // Emit an event to remove the item from the parent component
        this.$emit('removeItem', item, category);
      } else {
        // Emit an event to remove the item from the parent component
        this.$emit('removeItem', item, category);
      }
    },

    getImageUrl(imageData) {
        console.log(imageData);
        console.log(imageData.data);
        const selectedImageData = imageData.data;
        console.log(selectedImageData);

      try {
        if (!imageData) {
          console.error('Invalid image data:', imageData);
          return null;
        }

        const base64String = atob(selectedImageData);
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
  },
};
</script>

<style>
.outfit-view {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.item {
  width: 120px;
  margin: 10px;
  padding: 10px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.empty-message {
  margin-top: 20px;
  text-align: center;
  color: gray;
}

.outfit-view-desktop {
  /* Styles specific to the desktop view */
}

.outfit-view-mobile {
  /* Styles specific to the mobile view */
}

.item-image-wrapper {
  width: 100%;
  height: 120px; /* Adjust the height as needed */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.item-image-wrapper img {
  max-width: 100%;
  max-height: 100%;
}

.item-info {
  margin-top: 10px;
}

.item-category {
  font-size: 14px;
  color: black;
  padding: 5px;
}

button {
  margin-top: 5px;
}
</style>