<template lang="html">
  <div class="">
    <div class="container">
      <p>ini map ya</p>
      <div id="map" style="width:100%;height:400px;">

      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'


export default {
  name: "house-detail",
  data() {
    return {
      house: ''
    }
  },
  methods: {
    getData(){
      var self = this;
      axios.get(`http://localhost:3000/house/${this.$route.params.slug}`)
      .then(function (response) {
          // console.log(response.data);
          self.house = response.data
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  },
  mounted(){
    this.getData()
  }
}
</script>

<style lang="css">

</style>
