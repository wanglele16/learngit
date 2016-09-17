/**
 * Created by Administrator on 2016/9/17.
 */
$(function(){
    $(".jqzoom").imagezoom();
    $("#thumblist").find("a").click(function(){
        $(this).parents("li").addClass("tb-selected").siblings().removeClass("tb-selected");
        $(".jqzoom").attr('src',$(this).find("img").attr("mid"));
        $(".jqzoom").attr('rel',$(this).find("img").attr("big"));
    });
});