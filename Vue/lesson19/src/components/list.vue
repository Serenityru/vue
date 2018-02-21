<template>
  <div>
    <ul>
      <li v-for="news in news">
        <router-link :to="{name:'detail',params:{newsId:news.newsId}}">{{news.newsTitle}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'list',
  data: function () {
    return {
      news: [
        {
          newsId: 1,
          newsTitle: "龙泉峡谷",
          newsContent: "水质优渥,来自深山，健康绿色好生活！"
        },
        {
          newsId: 2,
          newsTitle: "婷美",
          newsContent: "你本来就很美！"
        },
        {
          newsId: 3,
          newsTitle: "安踏",
          newsContent: "我选择，我喜欢！"
        },
        {
          newsId: 4,
          newsTitle: "人人车",
          newsContent: "人人车没有中间商的二手车！"
        },
        {
          newsId: 5,
          newsTitle: "58同城",
          newsContent: "58同城，一个神奇的网站！"
        }
      ]
    }
  }
}
</script>
