<template>

	<div id="user_two">
		<div class="user_line2">
			<div class="line_left">
				<div><i :class="'iconfont '+icon" :style="'color:'+color+' !important;'"></i>{{title}}</div>
				<div>{{info}}</div>
			</div>
			<div class="line_right">
				<i class="iconfont icon-xiaoyuhao-copy-copy"></i>
			</div>
		</div>
	</div>

</template>

<script>
	export default {
		name:"UserLine2",
		props:['icon','title','info','color']
	}
</script>

<style>
	

</style>