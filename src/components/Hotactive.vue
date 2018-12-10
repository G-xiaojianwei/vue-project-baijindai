
<template>

	<div id="hotactive">
		<div id="ho_hotactive">
			<div class="hottitle">
				<img src="../assets/img/rmhd.png">
			</div>
			<div class="swiper-container bannera">
	            <div class="swiper-wrapper">
	                <div class="swiper-slide" v-for="item in list"><img :src="'https://www.baijindai.com/upload'+item.image"/></div>
	                
	            </div>
	 		</div>
		</div>
	</div>

</template>

<script>
	export default {
		name:"Hotactive",
		data(){
			return{
			list:[]
			}
		},
		mounted(){
			this.axios.get('/rest/api/indexAdver',{
				params:{
					type:1
				}
			}).then((info)=>{
				if(info.data.success==true){
					this.list=info.data.datalist;
					this.$nextTick().then(()=>{
						new Swiper('.bannera', {
			                slidesPerView: 'auto',
			                spaceBetween: 10,
			                autoplay : {
			                  disableOnInteraction : true
			                }
			              });
					})
				}
			})
		}
	}
</script>

<style>
	

</style>