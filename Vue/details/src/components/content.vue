<template>
  <div>
      <router-link to='/newList'><span>返回</span></router-link>
      <h1>{{$route.params.newsTitle}}</h1>
      <p>{{$route.params.newsContent}}</p>
  </div>
</template>
<script>
export default {
  
}
</script>

