$(function() {
    var curIndex = 1;  //当前index
    // 定时器自动变换3秒每次
    var autoChange = setInterval(function(){
        if(curIndex <  $(".sliders li").length){
            curIndex ++;
        }else{
            curIndex = 1;
        }
        //调用变换处理函数
        changeTo(curIndex);
    },3000);

    //初始化
    $(".sliders").find("a:not(:first)").fadeOut(1000);

    $(".flex-control-paging").find("a").each(function(item){
        $(this).hover(function(){
            clearInterval(autoChange);
            if (curIndex != item + 1) {
                curIndex = item + 1;
                changeTo(curIndex);
            }
        },function(){
            autoChange = setInterval(function(){
                if(curIndex <  $(".sliders li").length){
                    curIndex ++;
                }else{
                    curIndex = 1;
                }
                //调用变换处理函数
                changeTo(curIndex);
            },3000);
        });
    });
    function changeTo(num){
        $(".sliders").find("a").stop(true, true).fadeOut(1000).eq(num - 1).fadeIn("1000");
        $(".flex-control-paging").find("a").removeClass("flex-active").eq(num - 1).addClass("flex-active");
    }
});