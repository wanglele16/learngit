/**
 * Created by Administrator on 2016/9/7.
 */
//强调移入效果
$(function() {
   $(".head_hover").hover(function(){
       $(this).css("opacity", "0.8");
   },function () {
       $(this).css("opacity", "1");
   });
});
/*$(document).ready(function(){
    alert(1);
    //强调移入效果
    $('.head_hover').mouseover(function(){
        $(this).css('opacity','0.8');
    }).mouseout(function(){
        $(this).css('opacity','1');
    });
});*/

