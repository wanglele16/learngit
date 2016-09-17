/**
 * Created by Administrator on 2016/9/16.
 */
$(function() {
    $(".cart_shop_main").html("");
    //页面加载完成 ，读取cookie。病渲染到页面。
    var strCookie=getCookie("cartcookie");//string
    if(strCookie.length>0){
        //在购物车中显示出来；
        var arrProducts=JSON.parse(strCookie); //string to object  //条件的， string 必须是一个遵循json格式的string
        InitCart(arrProducts);
    }
});

/* function jia(dom){
 changeCount(dom,1);
 }
 function jian(dom){
 changeCount(dom,-1);
 }*/
//第二个参数，是代表数量的变化值；
function changeCount(dom,count){
    var  productName=dom.parentNode.parentNode.children[0].children[1].innerHTML;
    //1.页面显示数字要 加1
    //2.cookie 中找到对应的商品，让商品的数量加1；
    //1. 找到cookie中对应的商品。让商品的数量加1；
    //2.根据cookie 重新加在购物车。
    var strCookie=getCookie("cartcookie");
    if(strCookie.length>0){
        var arrCookie=JSON.parse(strCookie);
        for(var i=0;i<arrCookie.length;i++){
            if(arrCookie[i].name==productName){
                //arrCookie[i].changeCount(count);
                arrCookie[i].count=arrCookie[i].count+count;
                arrCookie[i].totalPrice=parseInt(arrCookie[i].price)*arrCookie[i].count;
                if(arrCookie[i].count==0){
                    arrCookie.splice(i,1);
                }
                break;
            }
        }
        var strCookieNew=JSON.stringify(arrCookie);
        setCookie("cartcookie",strCookieNew,30);
    }
    $(".cart_shop_main").html("");
    InitCart(arrCookie);
}

//通过商品信息，在购物车中渲染一条记录；
function showProduct(productInfo){
    /* var html= "<div class=\"pl\">";
     html+="<div class=\"c1\">";
     html+="<span>"+productInfo.img+"</span>";
     html+="<p>"+productInfo.name+"</p>";
     html+="</div>"
     html+="<div class=\"c2\">"+productInfo.price+"</div>";
     html+="<div class=\"c2\">1</div>";
     html+="<div class=\"c3\"><a href=\"#\">删除</a></div> </div>";
     var carlist=document.getElementById("cart-list");
     carlist.innerHTML+=html;*/
    //var totalPrice=parseInt(productInfo.price)*productInfo.count;
    var html="<div class=\"pl\"><div class=\"c1\"><span><img src=\""+productInfo.img+"\"></span>";
    html+="<p>"+productInfo.name+"</p></div><div class=\"c2 price\">"+productInfo.totalPrice+"</div><div class=\"c2\"><input type='button' value='－' onclick='changeCount(this,-1)'/>"+productInfo.count+"<input type='button' value='+' onclick='changeCount(this,1)'/></div>";
    html+="<div class=\"c3\"><a class='deletebt' href=\"javascript:void(0)\" onclick='deleteProduct(this)'>删除</a></div> </div>";
    $(".cart_shop_main")[0].innerHTML += html;
}

function InitCart(arrCookie){
    var totalCount=0;
    for(var i=0;i<arrCookie.length;i++){
        totalCount+=arrCookie[i].count;
        showProduct(arrCookie[i]);
    }
    $(".totalCount").html(totalCount);
    $(".totalNum").html(totalCount);
    $(".totalPri").html(totalPrice());
}

function totalPrice() {
    var sum = 0;
    $(".price").each(function(index){
        var temp = Number(this.innerHTML);
        sum += temp;
    });
    return sum;
}

function deleteProduct(dom){
    //dom 我点是哪个 a标签
    var  productName=dom.parentNode.parentNode.children[0].children[1].innerHTML;
    dom.parentNode.parentNode.parentNode.removeChild(dom.parentNode.parentNode);
    //删除cookie
    var strCookie=getCookie("cartcookie");
    if(strCookie.length>0){
        var arrCookie=JSON.parse(strCookie);
        //找到要删除的元素
        for(var i=0;i<arrCookie.length;i++){
            if(arrCookie[i].name==productName){
                arrCookie.splice(i,1);//从下标i开始， 删除 1个元素  仅仅是把数组arrCookie 删除了一个对象的商品！
                //cookie 还是原来。
            }
        }
    }
    //更新cookie
    var strCookieNew=JSON.stringify(arrCookie);
    setCookie("cartcookie",strCookieNew,30);
}

function getCookie(cookieName){
    var cookieValue="";
    var strCookies=document.cookie;//string "loginName=gaoge; name=456";  // name=value; name=value
    var arrCookies=strCookies.split("; ");  //["loginName=gaoge"��"name=456"]  ����Ԫ����Ȼ��string ��name=value
    for(var i=0;i<arrCookies.length;i++){
        var arrItem=arrCookies[i].split("=");//["loginName","gaoge"]      ;;["name","456"];
        if(arrItem[0]==cookieName){  //loginName  name
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