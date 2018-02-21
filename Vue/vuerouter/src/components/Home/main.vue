<template>
    <div id="main">
        <router-view :obj=obj :objs=objs></router-view>
    </div>
</template>
<script>
export default {
  props: ['obj', 'objs'],
  name: 'main'
}
</script>