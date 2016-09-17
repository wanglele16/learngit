/**
 * Created by Administrator on 2016/9/14.
 */
//进去的时候根据url改变商品详情
$(function() {
    var tmpUrl = "";
    function urlSearch() {
        var str = location.href;
        var num = str.indexOf("?");
        if (num != -1) {
            str = str.substr(num + 1);
            tmpUrl = str;
        }
    }
    urlSearch();

    $.ajax({

        url:"http://localhost:8080/product/GetProductById_get?id="+tmpUrl,
        type: "get",
        success:function(data){ //data  { id:101,Data:"string json"}
            var dataJsonOB=JSON.parse(data.Data);
            $("#spe1").html(dataJsonOB.name);
            $("#spe2").attr("src", "../img/" + dataJsonOB.imgSrc);
            $("#spe7").attr("src", "../img/" + dataJsonOB.imgSrc);
            $("#spe7").attr("big", "../img/" + dataJsonOB.imgSrc);
            $("#spe7").attr("mid", "../img/" + dataJsonOB.imgSrc);
            $("#spe2").attr("rel", "../img/" + dataJsonOB.imgSrc);
            $("#spe3").html(dataJsonOB.name);
            $("#spe4").html(dataJsonOB.oldPrice);
            $("#spe5").html(dataJsonOB.newPrice);
            $("#spe6").html(dataJsonOB.commentsNum);
        },
        dataType:"json"
    });
});




