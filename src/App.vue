<template>
  <div id="app">
  	
  	<myheader></myheader>
  	
  	<div class="tab">
	  	<div class="tab-item">
	  		<router-link to="/goods">商品</router-link>
	  	</div>
	  	<div class="tab-item">
	  		<router-link to="/ratings">评论</router-link>
	  	</div>
	  	<div class="tab-item">
	  		<router-link to="/seller">商家</router-link>
	  	</div>
	  	
    </div>
  	<router-view></router-view>
    
  </div>
</template>

<script>
import myheader from './components/header/header.vue'

export default {
  name: 'app',
  components: {
  	myheader
  }
}
</script>

<style lang="stylus">

#app .tab {
	display: flex;
	width: 100%;
	line-height: 40px;
}
#app .tab .tab-item {
	flex: 1;
	text-align: center;
}
</style>
