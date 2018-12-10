<template>

	<div id="de_banner">
		<div class="de_title">{{list.title}}</div>
		<div class="de_par">{{list.apr}}%</div>
		<div class="de_xy">协议约定利率</div>
		<div class="de_jd">
			<div class="de_line">
				<div class="de_line_a" :style="'width:'+list.loanSchedule+'%'">
					<div class="de_yde">{{list.loanSchedule}}%</div>
				</div>
			</div>
		</div>
		<div class="de_mj">
			<div>剩余可出借金额：{{list.lastMoney}}元</div><div>募集进度：{{list.loanSchedule}}%</div>
		</div>
		<div class="de_end">
			首标奖励/单笔最高奖励/尾标奖励
		</div>
		<div class="de_posi">* 借贷有风险，出借需谨慎</div>
	</div>

</template>

<script>
	export default{
		name:"DeBanner",
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
	.de_line_a{
		transition:all 0.5s;
	}
</style>