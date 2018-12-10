<template>

	<div id="banner">
		<header id="ho_header">
			<div class="banner swiper-container">
				<ul class="swiper-wrapper">
					<li class="swiper-slide" v-for='item in list'><img :src="'https://www.baijindai.com/upload/'+item.imageName"></li>
         <!--  <li class="swiper-slide">f</li>
          <li class="swiper-slide">f</li>
          <li class="swiper-slide">f</li>
          <li class="swiper-slide">f</li>
          <li class="swiper-slide">f</li>
          <li class="swiper-slide">f</li>
          <li class="swiper-slide">f</li> -->

				</ul>
				<div class="swiper-pagination"></div>
			</div>
		</header>
	</div>

</template>

<script>
	export default {
		name:"Banner",
    data(){
      return{
        list:[]
      }
    },
    mounted(){
      this.axios.get('/rest/api/index',{
        params:{
          type:1
        }
      }).then((info)=>{
        if(info.data.success==true){
          this.list=info.data.data.advertisements;

          //swiper必须保证在dom渲染完后执行
          //$nextTick();等到dom渲染完后执行
          this.$nextTick().then(()=>{
            new Swiper('.banner', {
                 pagination: {
                      el: '.swiper-pagination',
                      dynamicBullets: true,
                    },
                     autoplay : {
                    disableOnInteraction : true
                  }
                });
          })
          
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