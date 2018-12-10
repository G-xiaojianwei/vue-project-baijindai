<template>

	<div id="home">
		<Banner />
		<News />
		<Menu a="信息披露" b="安全体系" c="新手引导" d="推荐有礼" />
		<Sprog />
		<Newhand />
		<Hotactive />
		<Total />
		<Nav />
	</div>

</template>

<script>
	import Banner from '@/components/Banner.vue'
	import News from '@/components/News.vue'
	import Menu from '@/components/Menu.vue'
	import Sprog from '@/components/Sprog.vue'
	import Newhand from '@/components/Newhand.vue'
	import Hotactive from '@/components/Hotactive.vue'
	import Total from '@/components/Total.vue'
	import Nav from '@/components/Nav.vue'
	
	export default {
		name:"Home",
		components:{
			Banner,
			News,
			Menu,
			Sprog,
			Newhand,
			Hotactive,
			Total,
			Nav
		}
	}
</script>

<style>
	

</style>