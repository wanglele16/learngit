/**
 * Created by Administrator on 2016/9/17.
 */
var $ = require('../libs/jquery.js');
var Endtime = function() {

//特卖倒计时
/*  $(document).ready(function(){
 function timer(intDiff,btn){
 window.setInterval(function(){
 var day=0,
 hour=0,
 minute=0,
 second=0;//时间默认值
 if(intDiff > 0){
 day = Math.floor(intDiff / (60 * 60 * 24));
 hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
 minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
 second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
 }
 if (minute <= 9) minute = '0' + minute;
 if (second <= 9) second = '0' + second;
 $(btn).html("距离结束"+"<label>"+day+"</label>"+"天"+"<label>"+hour+"</label>"+'时'+"<label>"+minute+"</label>"+'分'+"<label>"+second+"</label>"+'秒');
 intDiff--;
 }, 1000);
 }

 timer(parseInt(2400),"#day_01");//倒计时总秒数量和对应产品
 timer(parseInt(3600),"#day_02");
 timer(parseInt(7200),"#day_03");
 }); */

$(function(){
    setInterval(function(){
        $(".endtime").each(function(){
            var obj = $(this);
            var end =obj.attr('value');
            end = end.substring(0,19);
            end = end.replace(/-/g,'/');
            var endtime = new Date(end).getTime();
            var nowTime1 = new Date();
            var nowTime=nowTime1.getTime();
            var nMS = endtime-nowTime;
            var myD=Math.floor(nMS/(1000 * 60 * 60 * 24)); //天
            var myH=Math.floor(nMS/(1000*60*60)) % 24; //小时
            var myM=Math.floor(nMS/(1000*60)) % 60; //分钟
            var myS=Math.floor(nMS/1000) % 60; //秒
            var myMS=Math.floor(nMS/100) % 10; //拆分秒
            var str;
            if(myD>= 0){
                str = myD+"天"+myH+"小时"+myM+"分"+myS+"."+myMS+"秒";
            }else{
                str = "已结束！";
            }
            obj.html(str);
        });
    }, 100); //每个0.1秒执行一次
});
};
module.exports = Endtime;