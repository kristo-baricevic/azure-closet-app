<template>
  <div>
    <nav class="navbar">
      <ul class="navbar-menu">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>

  </div>
  <body>
    <HelloWorld msg="Welcome to The Image Uploader!"/>
    <PhotoStream />
  </body>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import PhotoStream from './components/PhotoStream.vue';


export default {
  name: 'App',
  components: {
    HelloWorld,
    PhotoStream
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}

body { 
  background-color: #e9ff96;
}

.navbar {
  background-color: #a4e333;
  height: 80px; /* Adjust the height value as needed */
}

.navbar-menu {
  list-style-type: none;
  padding: 0;
  height: 100%; /* Adjust the height value as needed */
  display: flex;
  align-items: center;
}

.navbar-menu li {
  display: inline-block;
  margin: 0 10px;
}

.navbar-menu a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  line-height: 80px; /* Ensures the text is vertically centered */
}
</style>
