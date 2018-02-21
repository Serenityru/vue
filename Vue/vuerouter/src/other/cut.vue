<template>
    <div id='cut'>
			<button @click='cut'>-1</button>
    </div>
</template>
<script>
export default {
  name: 'cut',
  methods: {
    cut () {
      this.$store.dispatch('cut', 1)
    }
  }
}
</script>
