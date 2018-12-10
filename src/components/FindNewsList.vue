<template>

	<div id="find_news_list">
		<ul>
			<!-- <li>
				<div class="list_left">
					<p class="left_p1">
					<i class="iconfont icon-tuijian"></i> 百金贷备案合规新进程：《自查报告》及《自律检查和行政核查材料》已全部递交
                </p>
					<div class="left_info">
						<div><i class="iconfont icon-yanjing"></i>1236</div>
						<div><i class="iconfont icon-duanxin"></i>1245</div>
						<div>2102-12-11</div>
					</div>
				</div>
				<div class="list_right">
					<img src="https://www.baijindai.com/upload/2018/11/02/201811020531268489.jpeg" alt="" />
				</div>
			</li> -->
				<li v-if="list.length!=0" v-for="item in list">
				<div class="list_left">
					<p class="left_p1">
					<i class="iconfont icon-tuijian"></i>
					{{item.title}} 
                </p>
					<div class="left_info">
						<div><i class="iconfont icon-yanjing"></i>{{item.v}}</div>
						<div><i class="iconfont icon-duanxin"></i>{{item.r}}</div>
						<div>{{item.inTime}}</div>
					</div>
				</div>
				<div class="list_right">
					<img :src="'https://www.baijindai.com/upload'+item.litPic" />
				</div>
			</li>
			
		</ul>
	</div>

</template>

<script>
	export default {
		name:"FindNewsList",
		data(){
			return{
				list:[]
			}
		},
		mounted(){
				this.axios.get('/rest/api/messageListLit').then((info)=>{
					if(info.data.success==true){
						this.list=info.data.datalist;
					}
				})
			
		}
	}
</script>

<style>
	

</style>