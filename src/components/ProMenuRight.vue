<template>

	<div id="ProMenuRight">
		<div class="menu_right" style="display: block;">
				<div class="topinput">
					<input type="text" name="" placeholder="请输入产品数字编号或债转编号">
					<span class="iconfont icon-sousuo"></span>
				</div>
				<div class="right_btm">
					<div>综合排名</div><span>|</span>
					<div>剩余额度</div>
				</div>
			</div>
	</div>

</template>

<script>
	export default {
		name:"ProMenuRightvue",
		mounted(){
			this.$store.commit("Type_CHANGE",2);
				this.axios.get('/rest/api/newBidlist',{
				params:{
					type:2,
					curPage:1,
					pageSize:5,
					period:0,
					sortMethod:0
				}
			}).then((info)=>{
				if(info.data.success==true){
					this.$store.commit('PRO_CHANGE',info.data)
				}
			})
		}
	}
</script>

<style>
	

</style>