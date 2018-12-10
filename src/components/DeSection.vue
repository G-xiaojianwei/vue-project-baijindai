<template>

	<div id="de_section">
		<div class="de_v">
			<div>
				<span>{{list.amount}}</span>
				<span>项目总额（元）</span>
			</div>
		</div>
		<div class="de_v">
			<div class="de_a">
				<span>{{list.billCount}}</span>
				<span>项目期限（月）</span>
			</div>
		</div>
		<div class="de_v">
			<div>
				<span>A级 <i class="iconfont icon-wenhao"></i> </span>
				<span>项目评级</span>
			</div>
		</div>
	</div>

</template>

<script>
	export default {
		name:"DeSection",
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