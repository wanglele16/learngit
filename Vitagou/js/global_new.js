/**
 * Created by Administrator on 2016/9/6.
 */
$(function() {

    //�����ʾ�����ز˵�
    /*$(".nav_all").click(function() {
        $(".menu_item").toggle();
    });*/

    //�˵�����������ʾ
    $(".menu_item1").mouseenter(function() {
        $(".menu_item1").find("label").remove();
        $(this).append("<label></label>");
        $(".menu_right").hide();
        $(".menu_right").eq($(this).index()).show();
    });

    //�˵��Ҳ����Ƴ�����
    $(".menu_right").mouseleave(function(){
        $(".menu_right").hide();
        $(".menu_item1").find("label").remove();
    })
});