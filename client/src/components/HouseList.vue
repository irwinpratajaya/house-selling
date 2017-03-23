<template lang="html">
  <div id="galary" class="galary">
		<!-- container -->
		<div class="container">
			<div class="galary-info">
				<h3>{{ msg }}</h3>
			</div>
			<div class="galary-grids" >
				<div class="col-md-4 galary-grid"  v-for="house in houses">
					<div class="galary-grid-info">
						<img v-bind:src="house.image" alt="" />
					</div>
					<div class="galary-grid-text">
						<h6><router-link :to="{ path: '/'+ house.slug}">{{ house.name }}</router-link></h6>
            <h5>{{ house.price }}</h5>
						<p>{{ house.description }}</p>
            <p>{{ house.location }}</p>
					</div>
					<!-- <div class="new">
						<p>new</p>
					</div> -->
				</div>
			</div>
      <div class="clearfix"> </div>
		</div>
		<!-- //container -->
	</div>
</template>

<script>
import axios from 'axios'

export default {
  name: "HouseList",
  data() {
    return {
      msg: 'Top Search',
      houses: ''
    }
  },
  methods: {
    getData() {
      var self = this;
      axios.get('http://localhost:3000/house')
        .then(function (response) {
          // console.log(response.data);
          self.houses = response.data
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  },
  mounted() {
    this.getData()
  }
}
</script>

<style lang="css">
</style>
