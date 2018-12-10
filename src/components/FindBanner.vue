<template>

	<div id="banner">
		<header id="ho_header">
			<div class="banner swiper-container">
				<ul class="swiper-wrapper">
          <li class="swiper-slide" v-if="list.length!=0"><img :src="'https://www.baijindai.com/upload'+list.imageName" /></li>

				</ul>
				<div class="swiper-pagination"></div>
			</div>
		</header>
	</div>

</template>

<script>
	export default {
		name:"FindBanner",
    data(){
      return{
        list:[]
      }
    },
    mounted(){
        this.axios.get('/rest/api/index',{
        params:{
          type:6
        }
      }).then((info)=>{
        if(info.data.success==true){
           this.list = info.data.data.advertisements[0];
        }
      })
    }
	}
</script>

<style>
    #ho_header .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }
    #ho_header .banner img {
	width: 100%
	}
</style>