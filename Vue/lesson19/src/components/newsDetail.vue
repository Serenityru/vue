<template>
    <div>
      {{article}}
    </div>
</template>
<script>
  export default {
    name:"newsDetail",
    props:["article"],
    data:function(){
      return {
        art :this.article
      }
    }

  }
</script>
