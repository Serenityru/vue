<template>
    <div>
      {{this.$route.params.newsId}}
      <news-detail :article="art"></news-detail>
    </div>
</template>
<script>

  import newsDetail from "./newsDetail.vue"

  export default {
    name:"detail",
    data:function(){
      return {
        article:null,
        art:null
      }
    },
    components:{
      newsDetail:newsDetail
    },
    mounted:function(){
      this.getNewsDetail();

    },
    methods:{
      getNewsDetail:function(){
        let that = this;
        this.$ajax.get("src/data/news.json",null,null,function(result){
          that.article = result;
          that.show();
        });
      },
      show:function(){
        console.log(this.article)
        let that = this;
        this.article.forEach(function(item){
          if(item.newsId ==that.$route.params.newsId){
            that.art = item.newsContent
          }
        });
      }
    }
  }
</script>
