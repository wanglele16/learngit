/**
 * Created by Administrator on 2016/9/6.
 */
$(function() {

    //点击显示或隐藏菜单
    /*$(".nav_all").click(function() {
        $(".menu_item").toggle();
    });*/

    //菜单部分移入显示
    $(".menu_item1").mouseenter(function() {
        $(".menu_item1").find("label").remove();
        $(this).append("<label></label>");
        $(".menu_right").hide();
        $(".menu_right").eq($(this).index()).show();
    });

    //菜单右部分移出隐藏
    $(".menu_right").mouseleave(function(){
        $(".menu_right").hide();
        $(".menu_item1").find("label").remove();
    })
});