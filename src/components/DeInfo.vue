<template>

	<div id="detail_info"> 
		<div class="info_left">
			<span>借款信息</span>
		</div>
		<div class="info_right">
			<div>企业借款</div>
			<p>
		      {{list.summarize}}
		    </p>
		</div>
	</div>

</template>

<script>
	export default {
		name:"DeInfo",
		data(){
			return{
				list:[]
			}
		},
		mounted(){
				this.$nextTick().then(()=>{
					setTimeout(()=>{
						this.list=this.$store.state.DeDataList;
					},500)
				})
			}
	}
</script>

<style>
	

</style>