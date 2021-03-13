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
export default {
  data(){
    return {
      newses: [],
    }
  },
  async created(){
    await this.$store.dispatch('FETCH_NEWS')
    this.newses = this.$store.getters.GET_NEWS
  },
}
</script>

<style>

</style>