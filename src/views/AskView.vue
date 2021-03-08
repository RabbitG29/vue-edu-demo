<template>
  <div>
    ask
    <div
      v-for="ask in asks"
      :key="ask.id"
    >
      {{ ask.title }}
    </div>
  </div>
</template>

<script>
import { fetchAsksList } from '../api/index.js'
export default {
  data(){
    return {
      asks: [],
    }
  },
  async created(){
    await fetchAsksList().then((res) => {
      this.asks = res.data
    }).catch((err) => {
      console.log(err)
    })
  },
}
</script>

<style>

</style>