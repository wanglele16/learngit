/**
 * Created by Administrator on 2016/9/15.
 */
var $ = require('../libs/jquery.js');
var Specific1 = function () {

$(function() {
    $(".brand_particulars_state_top").hover(
        function(){
            $(".brand_particulars_state_float").show();
        },function(){
            $(".brand_particulars_state_float").hide();
        });

    //   详情页面点击切换
    $(".nav_container li ").each(function(index){
        $(this).click(function(){
            $(".nav_container li").removeClass('details_bg');
            $(this).addClass('details_bg');
            $('.nav_container_ljdm_show').removeClass('nav_container_ljdm_show');
            $('.nav_container_ljdm').eq(index).addClass('nav_container_ljdm_show');
        });
    });
});
};
module.exports = Specific1;

