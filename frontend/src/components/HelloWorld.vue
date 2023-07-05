<template>
  <div>
    <h1>Image Classification</h1>

    <form id="imageForm">
      <label for="category">Category:</label>
      <select id="category" required>
        <option value="Top">Top</option>
        <option value="Bottom">Bottom</option>
        <option value="Shoes">Shoes</option>
        <option value="Hat">Hat</option>
        <option value="Accessory">Accessory</option>
      </select>

      <input type="file" id="imageFile" accept=".jpg,.jpeg,.png,.gif" required @change="handleFileUpload">
      <button id="classifyButton">Classify Image</button>
    </form>

    <p id="resultLabel"></p>

    <div id="imageContainer">
      <img id="uploadedImage" alt="Uploaded Image" v-if="imageUrl" :src="imageUrl">
    </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      imageUrl: null
    };
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      this.imageUrl = URL.createObjectURL(file);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
