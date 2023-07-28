<template>
  <div>
    <h2 class="upload-title">Upload Your Article of Clothing</h2>
    <div class="upload-container">
      <form id="imageForm" @submit.prevent="classifyImage">
        <label for="category">Category:</label>
        <select id="category" v-model="selectedCategory" required>
          <option value="Top">Top</option>
          <option value="Bottom">Bottom</option>
          <option value="onePiece">One-piece</option>
          <option value="Shoes">Shoes</option>
          <option value="Hat">Hat</option>
          <option value="Accessory">Accessory</option>
        </select>
        <label class="choose-file">
          <input type="file" id="imageFile" accept=".jpg,.jpeg,.png,.gif" required @change="handleFileUpload">
          Choose File
        </label>
        <button class="classify-button" id="classifyButton" type="submit">Upload Image</button>
      </form>
    </div>

    <p id="resultLabel"></p>

    <div id="imageContainer">
      <img id="uploadedImage" alt="Uploaded Image" v-if="imageUrl" :src="imageUrl">
    </div>

  </div>
</template>

<script>
export default {
  name: 'ImageUploader',
  data() {
    return {
      imageUrl: null,
      selectedCategory: '',
    };
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      this.imageUrl = URL.createObjectURL(file);
    },
    
    classifyImage() {
      // Check if the user is authenticated and throw a pop-up error if they are not
      if (!this.$store.state.isAuthenticated) {
        alert('You need to be logged in to upload an image.');
        return;
      }

      const file = document.getElementById('imageFile').files[0];
      const formData = new FormData();
      formData.append('imageFile', file);
      formData.append('category', this.selectedCategory);
      formData.append('userId', this.$store.state.user.id);

      // Get the JWT token from local storage
      const token = localStorage.getItem('token');
      console.log(token);

      fetch('/backend/Upload', {
        method: 'POST', 
        body: formData,
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })
        .then(response => response.json())
        .then(data => {
          // Handle the response from the backend
          this.imageUrl = null; 
          this.$emit('imageUploaded'); 
          console.log(data);
        })
        .catch(error => {
          // Handle the error
          console.log(error);
        });
    }
  }
};
</script>


<style>
.upload-container {
  display: inline-block;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
.upload-title {
  margin-left: 10px;
  margin-top: 15px;
}
.choose-file {
  margin: 5px;
  font-size: 14px;
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #50C878;
  color: black;
  border: 1px solid black;
  border-radius: 4px;
  width: 83px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.choose-file:hover {
  background-color: #228B22;
  color: black;
}
input[type="file"] {
    display: none;
}
.classify-button {
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
.classify-button:hover {
  background-color: #228B22;
  color: black;
}
</style>
