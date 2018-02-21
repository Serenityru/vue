<template>
    <div id='add'>
			<button @click='add'>+1</button>
    </div>
</template>
<script>
export default {
  name: 'add',
  methods: {
    add () {
      this.$store.dispatch('add', 1)
    }
  }
}
</script>
