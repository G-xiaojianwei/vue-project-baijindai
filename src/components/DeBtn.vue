<template>
	
		<div id="btn" v-if="list.loanSchedule<100">
		<div class="btn_left"><i class="iconfont icon-jisuan"></i></div>
		<div class="btn_right">立即出借</div>
		</div>
		<div id="btn" v-else>
			<div class="btn_right" style="background:#EDAC2E !important;">还款中…</div>
		</div>
	
	

</template>

<script>
	export default {
		name:"DeBtn",
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