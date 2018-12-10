<template>
	
	<div id="find_clearfix" v-if="list.length!=0">
		<div class="clearfix_a" v-for="item in list">
			<div class="good_img">
				<img :src="'https://www.baijindai.com/upload'+item.ext5">
			</div>
			<p class="find_p1" style="white-space:nowrap;text-overflow:ellipsis;overflow:hidden">{{item.name}}</p>
			<p class="find_p2"><span>1400000</span>积分</p>
		</div>
	</div>

</template>

<script>
	export default {
		name:"FindFix",
		data(){
			return{
				list:[]
			}
		},
		mounted(){
			this.axios.get('rest/api/newDiscover').then((info)=>{
					if(info.data.success==true){
						this.list=info.data.data.hots;
					}
			})
		}
	}
</script>

<style>
	

</style>