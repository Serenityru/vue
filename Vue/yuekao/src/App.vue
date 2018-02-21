<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
    name: 'app'
};
</script>

<style>
* {
  margin:0;
  padding:0;
  list-style: none;
  font-size: .32rem;
}
input {
  outline:none;
  border:none;
}
h1, h2, h3, h4, h5, h6 {
  font-weight: normal;
}
a {
  color:#333;
  text-decoration: none;
}
html, body, #app {
  width:100%;
  height:100%;
  overflow: hidden;
}
</style>
