<template>
  <div>
    <!-- Desktop view -->
    <div v-if="isDesktop">
      <div class="outfit-view-desktop">
        <div class="outfit-view">
          <!-- Display the selected clothing items here -->
          <div v-for="(item, category) in selectedItems" :key="category" class="item">
            <!-- Render the item in the desired format -->
            {{ item.name }}
            <button @click="removeItem(item, category)">Remove</button>
          </div>
          <div v-if="Object.keys(selectedItems).length === 0" class="empty-message">No items selected</div>
        </div>
      </div>
    </div>

    <!-- Mobile view -->
    <div v-else>
      <div class="outfit-view-mobile">
        <div class="outfit-view">
          <!-- Display the selected clothing items here -->
          <div v-for="(item, category) in selectedItems" :key="category" class="item">
            <!-- Render the item in the desired format -->
            {{ item.name }}
            <button @click="removeItem(item, category)">Remove</button>
          </div>
          <div v-if="Object.keys(selectedItems).length === 0" class="empty-message">No items selected</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedItems: {
        shoes: null, // Selected shoe item
        bottom: null, // Selected bottom item
        top: null, // Selected top item
        onePiece: null, // Selected one-piece item
        hat: null, // Selected hat item
        accessories: [], // Array to store the selected accessories
      },
      isDesktop: false, // Flag to determine view mode
      images: [],
    };
  },
  methods: {
    // Add a clothing item to the outfit view
    addItem(item, category) {
      if (category === 'accessories') {
        if (this.selectedItems.accessories.length >= 3) {
          return; // Reached maximum number of accessories
        }
        this.selectedItems.accessories.push(item);
      } else if (category === 'onePiece') {
        // Reset top and bottom selections when a one-piece is selected
        this.selectedItems.top = null;
        this.selectedItems.bottom = null;
        this.selectedItems.onePiece = item;
      } else {
        // Check if a one-piece item is already selected, if so, prevent selecting top and bottom
        if (this.selectedItems.onePiece) {
          return;
        }
        this.selectedItems[category] = item;
      }
    },
    // Remove a clothing item from the outfit view
    removeItem(item, category) {
      if (category === 'accessories') {
        const index = this.selectedItems.accessories.indexOf(item);
        if (index !== -1) {
          this.selectedItems.accessories.splice(index, 1);
        }
      } else if (category === 'onePiece') {
        this.selectedItems.onePiece = null;
      } else {
        this.selectedItems[category] = null;
      }
    },
  },
};
</script>

<style scoped>
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
</style>
