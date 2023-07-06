<template>
  <div>
    <h1>Image Classification</h1>

    <form id="imageForm" @submit.prevent="classifyImage">
      <label for="category">Category:</label>
      <select id="category" v-model="selectedCategory" required>
        <option value="Top">Top</option>
        <option value="Bottom">Bottom</option>
        <option value="Shoes">Shoes</option>
        <option value="Hat">Hat</option>
        <option value="Accessory">Accessory</option>
      </select>

      <input type="file" id="imageFile" accept=".jpg,.jpeg,.png,.gif" required @change="handleFileUpload">
      <button id="classifyButton" type="submit">Classify Image</button>
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
      imageUrl: null,
      selectedCategory: ''
    };
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      this.imageUrl = URL.createObjectURL(file);
    },
    
    classifyImage() {
      const file = document.getElementById('imageFile').files[0];
      const formData = new FormData();
      formData.append('imageFile', file);
      formData.append('category', this.selectedCategory);

      fetch('/backend/Upload', {
        method: 'POST',
        body: formData
      })
        .then(response => response.json())
        .then(data => {
          // Handle the response from the backend
          console.log(data);
        })
        .catch(error => {
          // Handle the error
          console.error(error);
        });
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
