<template>

	<div id="prodoct">
		<div id="pr_header" ref="height" @touchstart="heightl($event)">
			<ProMenu />
		</div>
		<div class="Data" :style="heg">
			<ProDataLeft />
		</div>
		<Nav />
	</div>

</template>

<script>
import ProMenu from '@/components/ProMenu.vue'
import ProDataLeft from '@/components/ProDataLeft.vue'
import Nav from '@/components/Nav.vue'
	export default {
		name:"Prodoct",
		data(){
			return{
				heg:""
			}
		},
		components:{
			ProMenu,
			ProDataLeft,
			Nav
		},
		mounted(){
			
			this.heg="padding-top:"+this.$refs.height.offsetHeight+"px";
		},
		methods:{
			heightl(ev){
				var This=this;
				setTimeout(()=>{
					this.heg="padding-top:"+this.$refs.height.offsetHeight+"px";
					if(ev.target.innerText=="散标专区"){
						this.$store.commit('Type_CHANGE',1);
						axs(1);
					}else{
						this.$store.commit('Type_CHANGE',2)
						axs(2);
						
					}
					function axs(num) {
						This.axios.get('/rest/api/newBidlist',{
							params:{
								type:num,
								curPage:1,
								pageSize:5,
								period:0,
								sortMethod:0
							}
						}).then((info)=>{
							if(info.data.success==true){
								This.$store.commit('PRO_CHANGE',info.data)
							}
						})
					}
				},500);
				
			}
		}
	}
</script>

<style>
.Data{
	transition:all 0.3s;
	padding-bottom:0.43rem;
}

</style>