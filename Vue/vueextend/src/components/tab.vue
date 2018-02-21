<template>
    <div>
        <p v-for = '(v,k) in tab' :key='k'>
            {{v.title}}
        </p>
        <button @:click='fn'>{{msg}}</button>
    </div>
</template>
<script>
export default {
    name: "tab",
    data () {
        return {
            msg: 'zhangsan'
        }
    },
    methods: {
        fn () {
            this.$emit('myfn',this.msg)
        }
    },
    props: ['tab']
}
</script>
<style scoped>
</style>
