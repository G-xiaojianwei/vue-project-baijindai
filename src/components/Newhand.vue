<template>

	<router-link id="newhand" to='/detail/12464' tag='div'>
		<div id="ho_newhand">
			<div class="newtj"><img src="../assets/img/tj.png"></div>
			<div class="scroll2"> 
			    <ul>
			        <li v-for="item in list">用户{{item.mobile}}成功借出<span style="color:#F63844">{{item.amount}}</span>元</li> 
			    </ul> 
			</div>
			<div class="bidlist">
				<div class="bidinfo">
					<div class="bidleft">
						<div class="blefta">{{newuser.apr}}%</div>
						<div class="bleftb">协议约定利率</div>
					</div>
					<div class="bidright">
						<div class="brighta">项目期限 <span>{{newuser.period}}</span> 月</div>
						<div class="brightb">项目总额 <span>{{newuser.amount}}万元</span></div>
					</div>
				</div>
				<div class="bid_line">
					<div class="bid_line_a" :style="'width:'+newuser.totalAddApr+'%'"></div>
				</div>
				<div class="bidtext">
					<span>剩余可出借金额<i>{{newuser.lastMoney}}</i>元</span><span>{{newuser.totalAddApr}}%</span>
				</div>
			</div>
		</div>
	</router-link>

</template>

<script>
	export default {
		name:"Newhand",
		data(){
			return{
				list:[],
				newuser:{}
			}
		},
		mounted(){
			this.axios.get('/rest/api/newBuyRecord').then((info)=>{
				if(info.data.success==true){
					this.list=info.data.datalist;
					this.$nextTick().then(()=>{
						var timer2=setInterval(function(){
				    var scrollDiv2 = $(".scroll2"),
				        $ul2 = scrollDiv2.find("ul"),
				        $li2 = scrollDiv2.find("li"),
				        $length2 = $li2.length,
				        $liHeight2 = $li2.height(),
				        num2 = 0;
				 
				    if(scrollDiv2.length == 0){
				        return;
				    }
				    if($li2.length!=0){
				        clearInterval(timer2);
				        timer2=null;
				    }
				    if($length2 > 0){
				        $ul2.append($li2.eq(0).clone());
				        setInterval(
				            function(){
				                num2++;
				                $ul2.addClass("animate").css("-webkit-transform","translateY(-"+ $liHeight2*(num2) +"px)");
				                setTimeout(
				                    function(){
				                        if(num2 == $length2){
				                            $ul2.removeClass("animate").css("-webkit-transform","translateY(0)");
				                            num2 = 0;
				                        }
				                        
				                    },300);
				            },3000);
				    }
				    },100)
					})
					
				}
			}),
			this.axios.get('/rest/api/getNoviceBid').then((info)=>{
				if(info.data.success==true){
					this.newuser=info.data.data;
				}
			})
		}
	}
</script>

<style>
	

</style>