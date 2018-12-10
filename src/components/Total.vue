<template>

	<div id="total">
		<div id="ho_total">
			<div class="title">— <span>截止至{{total.newDate}}</span> —</div>
			<div class="content">
				<div class="contenta">
					<span class="shuju">{{total.sitedays}}</span>
					<span>已安全运营（天）</span>
				</div>
				<div class="contentb">
					<span class="shuju">{{total.count}}</span>
					<span>平台注册人数（人）</span>
				</div>
				<div class="contentc">
					<span class="shuju">{{sum}}</span>
					<span>累计成交额（万元）</span>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
	export default {
		name:"Total",
		data(){
			return{
				total:[]
			}
		},
		mounted(){
			this.axios.get('/rest/api/xxpl').then((res)=>{
				if(res.data.success==true){
					this.total=res.data.data
				}
				
			})
		},
		computed:{
			sum(){
				return Number(this.total.sumTradeNum).toLocaleString();
			}
		}
	}
</script>

<style>
	

</style>