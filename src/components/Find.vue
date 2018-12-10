<template>

	<div id="find">
		<FindBanner />
		<Menu a="签到日历" b="推荐有礼" c="积分任务" d="会员中心" />
		<FindNavTitle title="积分商城" />
		<FindGood />
		<FindFix />
		<FindMore />
		<FindNavTitle title="百金社区" />
		<FindNewsList  />
		<FindMore class="margin" />
		<Nav />
	</div>

</template>
<script>
import FindBanner from '@/components/FindBanner.vue'
import Nav from '@/components/Nav.vue'
import Menu from '@/components/Menu.vue'
import FindNavTitle from '@/components/FindNavTitle.vue'
import FindGood from '@/components/FindGood.vue'
import FindFix from '@/components/FindFix.vue'
import FindMore from '@/components/FindMore.vue'
import FindNewsList from '@/components/FindNewsList.vue'
	export default {
		name:"Find",
		components:{
			FindBanner,
			Menu,
			Nav,
			FindNavTitle,
			FindGood,
			FindFix,
			FindMore,
			FindNewsList

		}
	}
</script>

<style>
.margin{
	margin-bottom:0.6rem !important;
}

</style>