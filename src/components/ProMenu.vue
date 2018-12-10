<template>

	<div id="promenu" ref="promenu">
		<ul class="header_menu" >
				<router-link to="/prodoct/promenuleft" tag='li'>散标专区</router-link>
				<router-link to="/prodoct/promenuright" tag='li'>债转专区</router-link>
		</ul>
		<router-view />
	</div>

</template>

<script>
	export default {
		name:"ProMenu"
	}
</script>

<style>
	.router-link-active{
		color: #fe404b !important;
		background: #fff !important;
	}
</style>