<template>

	<ul id="de_detail_li">
		<li><span>转让编号</span><span>{{datalist.transferNumber}}</span></li>
		<li><span>转让系数</span><span>{{datalist.transferRatio}}</span></li>
		<li><span>债转价格</span><span>{{datalist.transferPrice}}元</span></li>
		<li><span>下一还款日</span><span>{{datalist.nextRepaymentDay}}</span></li>
		<li><span>回款方式</span><span>{{datalist.repaymentype}}</span></li>
		<li><span>剩余时间</span><span>{{datalist.lockFullDays}}</span></li>
	</ul>

</template>

<script>
	export default {
		name:"DeLi",
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