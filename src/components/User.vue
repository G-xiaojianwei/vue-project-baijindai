<template>

	<div id="user">
		<UserHeader />
		<div style="margin-bottom:0.1rem">
			<UserLine1 />
			<UserLine2 icon="icon-jiangli" title="奖励中心" info="" color="#FD634E"/>
		</div>
		<div style="margin-bottom:0.1rem">
			<UserLine2 icon="icon-45wodezichanlicaichanpin" title="我的资产" info="--" color="#9675FC"/>
			<UserLine2 icon="icon-zichan" title="资产分析" info="--" color="#4C7CFC"/>
			<UserLine2 icon="icon-huikuanguanhuai" title="回款日历" info="--" color="#FDBF11"/>
			<UserLine2 icon="icon-jiaoyimingxi" title="交易明细" info=""  color="#DCAD70"/>
		</div>
		<div style="margin-bottom:0.6rem">
			<UserLine2 icon="icon-weixin" title="官方微信" info="百金贷服务中心"  color="#4DC49E"/>
			<UserLine2 icon="icon-wenhao" title="帮助中心" info="" color="#EE6251"/>
			<UserLine2 icon="icon-duanxin" title="在线客户" info="400-900-2888" color="#2775F3"/>
		</div>
		<Nav />
	</div>

</template>

<script>
import UserHeader from '@/components/UserHeader.vue'
import Nav from '@/components/Nav.vue'
import UserLine1 from '@/components/UserLine1.vue'
import UserLine2 from '@/components/UserLine2.vue'
	export default {
		name:"User",
		components:{
			UserHeader,
			Nav,
			UserLine1,
			UserLine2
		}
	}
</script>

<style>
	

</style>