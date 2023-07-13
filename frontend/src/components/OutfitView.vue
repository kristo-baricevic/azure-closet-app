<template>
  <div class="outfit-view">
    <!-- Display the selected clothing items here -->
    <div v-for="item in selectedItems" :key="item.id">
      <!-- Render the item in the desired format -->
      <div class="item">{{ item.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedItems: [], // Array to store the selected clothing items
    };
  },
  methods: {
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

}

.item {

}
</style>
