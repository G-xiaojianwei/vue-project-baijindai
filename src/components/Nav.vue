<template>

	<div id="nav">
		<div id="ho_nav">
		    <router-link class="nava" to="/home" tag="div">
		    	<span class="iconfont icon-shouye "></span>
		    	<span>首页</span>
		    </router-link>
		    <router-link class="navb" to="/prodoct" tag="div">
		    	<span class="iconfont icon-chanpin"></span>
		    	<span>产品</span>
		    </router-link>
		    <router-link class="navc" to="/find" tag="div">
		    	<span class="iconfont icon-faxian"></span>
		    	<span>发现</span>
		    </router-link>
		    <router-link class="navd" to="/user" tag="div">
		    	<span class="iconfont icon-wode"></span>
		    	<span>我的</span>
		    </router-link>
		 </div>
		 <!-- <router-view/> -->
	</div>

</template>

<script>
	export default {
		name:"Nav"
	}
</script>

<style>
	
.router-link-active .iconfont{
	color: #E44B39 !important
}

.router-link-active span {
	color: #000 !important
}
</style>