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
*{
    margin: 0;
    padding: 0;
    list-style-type: none;
}
html, body, #app{
  width:100%;
  height:100%;
  overflow: hidden;
}
</style>
