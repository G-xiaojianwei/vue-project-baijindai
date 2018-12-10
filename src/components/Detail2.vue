<template>

	<div id="detail2">
		<DeHeader />
		<DeBanner2 />
		<DeLi />
		<DeFlow2 />
		<DeProblem title="原始标详情" />
		<DeProblem title="常见问题" class='mar' />
		<DeBtn2 />
	</div>

</template>

<script>
import DeHeader from '@/components/DeHeader.vue'
import DeBanner2 from '@/components/DeBanner2.vue'
import DeLi from '@/components/DeLi.vue'
import DeFlow2 from '@/components/DeFlow2.vue'
import DeProblem from '@/components/DeProblem.vue'
import DeBtn2 from '@/components/DeBtn2.vue'
	export default {
		name:"Detail2",
		components:{
			DeHeader,
			DeBanner2,
			DeLi,
			DeFlow2,
			DeProblem,
			DeBtn2
		},
		mounted(){
			this.$store.commit("Type_CHANGE",2)
			var mid=this.$route.params.mid;
			this.axios.get("/rest/api/creditorBidinfo",{
				params:{
					bidId:mid
				}
			}).then((info)=>{
				this.$store.commit("DeData2List_CHANGE",info.data.data)
			})
		}
	}
</script>

<style>
.mar{
	margin-bottom:0.48rem !important;
}
</style>