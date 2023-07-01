<template>
  <!DOCTYPE html>
<html>
<head>
    <title>Image Classification</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
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
        
        <input type="file" id="imageFile" accept=".jpg,.jpeg,.png,.gif" required>
        <button id="classifyButton">Classify Image</button>
    </form>
    
    <p id="resultLabel"></p>

    <div id="imageContainer">
        <img id="uploadedImage" alt="Uploaded Image">
    </div>
    
    <script src="/js/upload.js"></script>
</body>
</html>

</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
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
