<template lang="html">
  <div class="">

		<div class="header-bottom">
			<div class="container">
				<div class="top-nav">
					<span class="menu">Menu</span>
					<ul class="nav1">
						<li><a href="#home" class="scroll active">HOME</a></li>
						<li><a href="#about" class="scroll">ABOUT</a></li>
						<li><a href="#services" class="scroll">SERVICES</a></li>
						<li><a href="#galary" class="scroll">GALLERY</a></li>
						<li><a href="#blog" class="scroll">BLOG</a></li>
						<li><a href="#contact" class="scroll">CONTACT US</a></li>
					</ul>
				</div>
			</div>
		</div>
    <house-list></house-list>
  </div>
</template>

<script>
import axios from 'axios'
import HouseList from './HouseList';

export default {
  name: 'home',
  components: {
    HouseList
  },
  data() {
    return {
      title:'rumahku.com'
    }
  }
}
</script>

<style lang="css">
#map {
  width: 200px;
  height: 200px;
}
</style>
