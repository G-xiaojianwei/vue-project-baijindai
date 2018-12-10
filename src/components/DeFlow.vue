<template>

	<div id="de_flow">
		<div class="flow_a">
			<div class="flow_big">
				<div class="flow_big_a"><i class="iconfont icon-lingjinbi"></i></div>
				<div class="flow_big_b" v-if="list.loanSchedule<100">最低出借额</div>
				<div class="flow_big_b" v-else>募集开始</div>
				<div class="flow_big_c" v-if="list.loanSchedule<100">{{list.lastMinMoney}}</div>
				<div class="flow_big_c" v-else>{{list.beginTime}}</div>

			</div>
			<div class="flow_small">
				<i class="iconfont icon-shenglve-"></i>
			</div>
			<div class="flow_big">
				<div class="flow_big_a"><i class="iconfont icon-manbiaoqixi"></i></div>
				<div class="flow_big_b">满标起息</div>
				<div class="flow_big_c" v-if="list.loanSchedule<100">起息时间</div>
				<div class="flow_big_c" v-else>{{list.fullTime}}</div>

			</div>
			<div class="flow_small">
				<i class="iconfont icon-shenglve-"></i>
			</div>
			<div class="flow_big">
				<div class="flow_big_a"><i class="iconfont icon-huankuanfangshibiangeng-h"></i></div>
				<div class="flow_big_b" v-if="list.loanSchedule<100">还款方式</div>
				<div class="flow_big_b" v-else>项目结清</div>
				<div class="flow_big_c" v-if="list.loanSchedule<100">{{list.repaymentype}}</div>
				<div class="flow_big_c" v-else>{{list.settleTime}}</div>

			</div>
		</div>
		<div class="flow_b">
			具体以实际日期为准
		</div>
	</div>
	</div>

</template>

<script>
	export default {
		name:"DeFlow",
		data(){
			return{
				list:[]
			}
		},
		mounted(){
				this.$nextTick().then(()=>{
					setTimeout(()=>{
						this.list=this.$store.state.DeDataList;
						console.log(this.list)
					},500)
				})
			}
	}
</script>

<style>
	

</style>