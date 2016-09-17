/**
 * Created by Administrator on 2016/9/16.
 */
var $ = require('../libs/jquery.js');
var Shop = function () {
$(function () {
    $(".shop").click(function () {
        var productInfo = new Object();
        var $tempObj = $(this).parents(".vt_sale_container");
        productInfo.img = $tempObj.find(".shop1").attr("src");
        productInfo.price = $tempObj.find(".shop3").html();
        productInfo.name = $tempObj.find(".shop4").html();
        productInfo.totalPrice = productInfo.price;
        productInfo.count = 1;
        var products = getCookie("cartcookie"); // "lslslsl";
        var arrProducts = []; //存储所有的商品在此arr中
        if (products.length > 0) {
            //购物车里有旧数据
            arrProducts = JSON.parse(products);//[1];
        }
        var flag = false;
        //arrProducts 这个数组里面 看看有没有一个数组元素 跟productInfo 一样
        for (var j = 0; j < arrProducts.length; j++) {
            //比如商品名称相等 就算是同一个商品。
            if (arrProducts[j].name == productInfo.name) {
                arrProducts[j].count += 1;
                arrProducts[j].totalPrice = parseInt(arrProducts[j].price) * arrProducts[j].count;
                //arrProducts[j].changeCount(1);
                flag = true;
            }
        }

        if (!flag) {
            arrProducts.push(productInfo);// 2,[productInfo,productInfo]
        }
        //存储到cookie中
        var strProInfo = JSON.stringify(arrProducts); //json����ת��Ϊstring��
        setCookie("cartcookie", strProInfo, 30);//1 ,
        alert("加入成功！");

    });

});


function getCookie(cookieName){
    var cookieValue="";
    var strCookies=document.cookie;//string "loginName=gaoge; name=456";  // name=value; name=value
    var arrCookies=strCookies.split("; ");  //["loginName=gaoge"��"name=456"]  ����Ԫ����Ȼ��string ��name=value
    for(var i=0;i<arrCookies.length;i++){
        var arrItem=arrCookies[i].split("=");//["loginName","gaoge"]      ;;["name","456"];
        if(arrItem[0]==cookieName){  //loginName  name
            //�ҵ���cookie��
            //arrItem[1];  //  gaoge
            cookieValue=arrItem[1];
        }
    }
    return cookieValue;
}

function setCookie(name,value,expiredays){
    var date=new Date();
    date.setDate(date.getDate()+expiredays);
    document.cookie=name+"="+value+";expires="+date;
}


function removeCookie(name){
    setCookie(name,"",-1);
}
};
module.exports = Shop;

