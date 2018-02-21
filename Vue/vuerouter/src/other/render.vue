<template>
    <div id='render'>
				内容: {{num}}
    </div>
</template>
<script>
export default {
  name: 'render',
  computed: {
    num () {
      return this.$store.state.num
    }
  }
}
</script>
