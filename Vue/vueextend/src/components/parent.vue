<template>
    <div>
        <list :list='lists'></list>
        <tab :tab='tabs' @:myfn='fns'></tab>
        <p>{{names}}</p>
        <slide/>
    </div>
</template>
<script>
import slide from './slide'
import list from './list/list'
import tab from './tab'
export default {
    name: 'parents',
    data () {
        return {
            lists: [
                {name: 'zs',toName: '/zs'},
                {name: 'ls',toName: '/ls'},
                {name: 'we',toName: '/we'}
            ],
            tabs: [
                {
                    "title":"wode",
                    "content": "sha"
                },
                {
                    "title": "wodef",
                    "content": "sha"
                },
                {
                    "title": "wodeeeeeeeee",
                    "content": "sha"
                }
            ],
            names: ''
        }
    },
    methods:{
        fns (result) {
            this.names = result;
        }
    },
    components: {
        list: list,
        tab: tab,
        slide
    }
}
</script>
<style scoped>
</style>
