<template>
  <div>
    <!-- Desktop view -->
    <div v-if="isDesktop">
      <div class="outfit-view-desktop">
        <div class="outfit-view">
          <!-- Display the selected clothing items here -->
          <div v-for="item in selectedItems" :key="item.id" class="item">
            <!-- Render the item in the desired format -->
            {{ item.name }}
            <button @click="removeItem(item)">Remove</button>
          </div>
          <div v-if="selectedItems.length === 0" class="empty-message">No items selected</div>
        </div>
      </div>
    </div>
    
    <!-- Mobile view -->
    <div v-else>
      <div class="outfit-view-mobile">
        <div class="outfit-view">
          <!-- Display the selected clothing items here -->
          <div v-for="item in selectedItems" :key="item.id" class="item">
            <!-- Render the item in the desired format -->
            {{ item.name }}
            <button @click="removeItem(item)">Remove</button>
          </div>
          <div v-if="selectedItems.length === 0" class="empty-message">No items selected</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedItems: [], // Array to store the selected clothing items
      isDesktop: false, // Flag to determine view mode
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
      this.isDesktop = window.innerWidth >= 768; // Example breakpoint: 768px
    },
    // Add a clothing item to the outfit view
    addItem(item) {
      this.selectedItems.push(item);
    },
    // Remove a clothing item from the outfit view
    removeItem(item) {
      const index = this.selectedItems.indexOf(item);
      if (index !== -1) {
        this.selectedItems.splice(index, 1);
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
