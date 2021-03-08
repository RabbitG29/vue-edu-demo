<template>
  <div>
    news
    <div
      v-for="news in newses"
      :key="news.id"
    >
      {{ news.title }}
    </div>
  </div>
</template>

<script>
import { fetchNewsList } from '../api/index.js'
export default {
  data(){
    return {
      newses: [],
    }
  },
  async created(){
    await fetchNewsList().then((res) => {
      this.newses = res.data
    }).catch((err) => {
      console.log(err)
    })
  },
}
</script>

<style>

</style>