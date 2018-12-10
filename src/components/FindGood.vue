<template>

	<div id="find_good" v-if="list.length!=0">
		<img :src="'https://www.baijindai.com/upload'+list[0].image" alt="">
	</div>

</template>

<script>
	export default {
		name:"FindGood",
		data(){
			return{
				list:[]
			}
		},
		mounted(){
			this.axios.get('rest/api/indexAdver',{
				params:{
					type:3
				}
			}).then((info)=>{
				if(info.data.success==true){
					this.list=info.data.datalist;
				}
			})
		}
	}
</script>

<style>
	

</style>