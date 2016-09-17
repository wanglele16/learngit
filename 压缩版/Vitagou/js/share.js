/**
 * Created by Administrator on 2016/9/17.
 */
$(function() {
    $("#bdshare").hover(function() {
        $("#bdshare").stop(true, false).animate({right: 0});
    },function(){
        $("#bdshare").stop(true, false).animate({right: "-210px"});
    })
})