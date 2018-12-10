<template>

	<div id="prodata">

		<router-link id="biddata" v-if="bidType==1" v-for="item in list" tag='div' :to="'/detail/'+item.id">
			<div>{{item.title}}</div>
			<div class="bidlist">
				<div class="bidinfo">
					<div class="bidleft">
						<div class="blefta">{{item.apr}}%</div>
						<div class="bleftb">协议约定利率</div>
					</div>
					<div class="bidright">
						<div class="brighta">项目期限 <span>{{item.period}}</span> 月</div>
						<div class="brightb">项目总额 <span>{{(item.amount/10000).toFixed(2)}}万元</span></div>
					</div>
				</div>
				<div class="bid_line">
					<div class="bid_line_a" :style="'width:'+item.loanSchedule+'%'"></div>
				</div>
				<div class="bidtext">
					<span>剩余可出借金额<i>{{item.lastMoney}}</i>元</span><span v-if="item.loanSchedule!==100">进度 {{item.loanSchedule}}%</span>
				</div>
			</div>
			<div class="yqx" v-if="item.loanSchedule==100">
				<div class="hbt">
					已起息
				</div>
		</div>
	</router-link>

	<router-link id="biddata" v-if="bidType==2" v-for="item in list" tag='div' :to="'/detail2/'+item.id">
			<div class="bid_first">{{item.title}} <span class="zhe" v-if="item.transferRatio<100">{{item.transferRatio}}折</span></div>
			<div class="bidlist">
				<div class="bidinfo">
					<div class="bidleft">
						<div class="blefta">{{item.apr}}%</div>
						<div class="bleftb">协议约定利率</div>
					</div>
					<div class="bidright">
						<div class="brighta">项目期限 <span>{{item.surplusPeriod}}</span></div>
						<div class="brightb">项目总额 <span>{{item.amount.toFixed(2)}}元</span></div>
					</div>
				</div>
				<div class="bid_line">
					<div class="bid_line_a" :style="'width:'+item.loanSchedule+'%'"></div>
				</div>
				<div class="bidtext">
					<span>剩余可出借金额<i>{{item.lastMoney}}</i>元</span><span v-if="item.loanSchedule!==100">进度 {{item.loanSchedule}}%</span>
				</div>
			</div>
			<div class="yqx" v-if="item.loanSchedule==100">
				<div class="hbt">
					已起息
				</div>
		</div>
	</router-link>
	{{lilist}}
	</div>

</template>

<script>
	export default {
		name:"ProData",
		data(){
			return{
				list:this.$store.state.ProMenuLeftList.datalist
			}
		},
		computed:{
			lilist(){
				 this.list=this.$store.state.ProMenuLeftList.datalist;
				 // console.log(this.list)
			},
			bidType(){
				return this.$store.state.bidType;
			}
		}
	
	}
</script>

<style>
	.zhe{
		padding: 0 .05rem;
	    height: .4rem;
	    margin-left: .05rem;
	    font-size: .025rem;
	    color: #ff464d;
	    text-align: center;
	    line-height: .4rem;
	    border: 1px solid #ff6a6d;
	    background-color: #facfcf;
	    border-radius: 2px;
	}

</style>