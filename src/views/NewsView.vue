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
import axios from 'axios'
export default {
  data(){
    return {
      newses: [],
    }
  },
  async created(){
    this
    // axio.get은 Promise 객체를 반환함.
    await axios.get('https://api.hnpwa.com/v0/news/1.json').then((res) => {
      console.log(res)
      this.newses = res.data
    }).catch((err) => {
      console.log(err)
    })
  },
}
</script>

<style>

</style>