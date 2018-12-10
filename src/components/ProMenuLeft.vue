<template>

	<div id="ProMenuLeft">
		<div class="menu_left">
				<i></i>
				<ul class="menu_left_calc">
					<li><b></b></li>
					<li><b></b></li>
					<li><b></b></li>
					<li><b></b></li>
					<li><b></b></li>
					<li><b></b></li>
					<li><b></b></li>
				</ul>
				<ul class="menu_left_cont">
					<li  ref="ll" :class="item.isClick ? 'cont_active' : '0' "  v-for="item,index in list" @touchstart.stop="handleClick($event,item.num)">
						<span class="iconfont icon-location" ></span>
						<span>{{item.name}}</span>
					</li>
				</ul>
			</div>
			
			
	</div>

</template>

<script>

	export default {
		name:"ProMenuLeft",
		data(){
			return{
				list:[
				{'name':'全部','num':0,'isClick':true},
				{'name':'1月','num':1,'isClick':false},
				{'name':'3月','num':3,'isClick':false},
				{'name':'6月','num':6,'isClick':false},
				{'name':'12月','num':12,'isClick':false},
				{'name':'24月','num':24,'isClick':false},
				{'name':'36月','num':36,'isClick':false}
				],
				bidpid:0
			}
		},
		methods:{
			handleClick(ev,num){
				// console.log(this.$refs)
				this.list.filter((item)=>{
					if(item.num==num){
						item.isClick=true;
						this.bidpid=num;
						this.axios.get('/rest/api/newBidlist',{
						params:{
							type:1,
							curPage:1,
							pageSize:5,
							period:this.bidpid,
							sortMethod:0
						}
					}).then((info)=>{
						if(info.data.success==true){
							this.$store.commit('PRO_CHANGE',info.data)
						}
					})
					}else{
						item.isClick=false;
					}
				})
			}
		},
		mounted(){
			this.axios.get('/rest/api/newBidlist',{
				params:{
					type:1,
					curPage:1,
					pageSize:5,
					period:this.bidpid,
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