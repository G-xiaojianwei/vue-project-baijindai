<template>

	<div id="de_banner">
		<div class="de_title">{{datalist.title}}</div>
		<div class="de_par">{{datalist.apr}}%</div>
		<div class="de_xy">协议约定利率</div>
		<div class="de_dibt">
			<div>
				<p class="p1">{{datalist.surplusAmount}}</p>
				<p>剩余可承接额度(元)</p>
			</div>
			<span></span>
			<div>
				<p>{{datalist.surplusPeriod}}</p>
				<p>剩余期限</p>
			</div>
			<span></span>
			<div>
				<p>{{datalist.transferAmount}}</p>
				<p>当前债权价值(元)</p>
			</div>
		</div>
		<div class="de_posi">* 借贷有风险，出借需谨慎</div>
		<div class="bianqian">
			<i class="iconfont icon-biaoqian"></i>
			<div class="bq_top">
				<span>{{datalist.lockDays}}</span>天
			</div>
			<div class="bq_btm">
				最低锁定
			</div>
		</div>
	</div>

</template>

<script>
	export default {

		name:"DeBanner2",
		data(){
			return{
				datalist:[]
			}
		},
		mounted(){
			this.$nextTick().then(()=>{
					setTimeout(()=>{
						this.datalist=this.$store.state.DeData2List;
					},500)
				})
		}
		
	}
</script>

<style>
	

</style>