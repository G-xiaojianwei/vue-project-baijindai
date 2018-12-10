<template>

	<div id="news">
		<div id="ho_news">
			<div class="news_max">
				<div class="news_title">
					平台<span class="span">公告</span>
				</div>
				<div class="scroll"> 
				    <ul>
				        <li v-for="item in news">{{item.title}}</li>  
				    </ul> 
				</div>
			</div>
		</div>
	</div>

</template>

<script>
	export default {
		name:"News",
		data(){
			return{
				news:[]
			}
		},
		mounted(){
			this.axios.get('/rest/api/sygg').then((info)=>{
				if(info.data.success==true){
					this.news=info.data.datalist;
					this.$nextTick().then(()=>{
						var timer=setInterval(function(){
				        var scrollDiv = $(".scroll"),
				        $ul = scrollDiv.find("ul"),
				        $li = scrollDiv.find("li"),
				        $length = $li.length,
				        $liHeight = $li.height(),
				        num = 0;
				 
				    if(scrollDiv.length == 0){
				        return;
				    }

				    if($li.length!=0){
				        clearInterval(timer);
				        timer=null;
				    }

				    if($length > 1){
				        $ul.append($li.eq(0).clone());
				        setInterval(
				            function(){
				                num++;
				                $ul.addClass("animate").css("-webkit-transform","translateY(-"+ $liHeight*(num) +"px)");
				                setTimeout(
				                    function(){
				                        if(num == $length){
				                            $ul.removeClass("animate").css("-webkit-transform","translateY(0)");
				                            num = 0;
				                        }
				                        
				                    },300);
				            },3000);
				    }
				    },100)
					})
				}
			})
		}
	}
</script>

<style>
	

</style>