<template>
  <div>
    jobs
    <div
      v-for="job in jobs"
      :key="job.id"
    >
      {{ job.title }}
    </div>
  </div>
</template>

<script>
import { fetchJobsList } from '../api/index.js'
export default {
  data(){
    return {
      jobs: [],
    }
  },
  async created(){
    await fetchJobsList().then((res) => {
      console.log(this)
      this.jobs = res.data
    }).catch((err) => {
      console.log(err)
    })
  },
}
</script>

<style>

</style>