<template>

	<div id="detail">
		<DeHeader />
		<DeBanner />
		<DeSection />
		<DeFlow />
		<DeInfo />
		<DeProblem title="常见问题" />
		<DeTips />
		<DeBtn />
	</div>

</template>

<script>
import DeHeader from '@/components/DeHeader.vue'
import DeBanner from '@/components/DeBanner.vue'
import DeSection from '@/components/DeSection.vue'
import DeFlow from '@/components/DeFlow.vue'
import DeInfo from '@/components/DeInfo.vue'
import DeProblem from '@/components/DeProblem.vue'
import DeTips from '@/components/DeTips.vue'
import DeBtn from '@/components/DeBtn.vue'
	export default {
		name:"Detail",
		components:{
			DeHeader,
			DeBanner,
			DeSection,
			DeFlow,
			DeInfo,
			DeProblem,
			DeTips,
			DeBtn
		},
		mounted(){
			var mid=this.$route.params.mid;
			this.axios.get("rest/api/bidinfo",{
				params:{
					bidId:mid
				}
			}).then((info)=>{
				if(info.data.success==true){
					this.$store.commit('DeDataList_CHANGE',info.data.data)
				}
			})
		}
	}
</script>

<style>
	

</style>