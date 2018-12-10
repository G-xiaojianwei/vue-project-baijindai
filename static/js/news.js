window.onload=function(){
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
};

$(function(){
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
});