/**
 * Created by Administrator on 2016/9/16.
 */

$(function() {
    var tmpUrl = "";
    function urlSearch() {
        var str = location.href;
        var num = str.indexOf("?");
        if (num != -1) {
            str = str.substr(num + 1);
            tmpUrl = str;
            $.ajax({
                url:"http://localhost:8080/product/GetProductById_get?id="+tmpUrl,
                type: "get",
                success:function(data){ //data  { id:101,Data:"string json"}
                    var dataJsonOB=JSON.parse(data.Data);
                    $(":text").eq(0).val(data.Id);
                    //前面有一个:text
                    $(":text").eq(1).val(dataJsonOB.imgSrc);
                    $(":text").eq(2).val(dataJsonOB.name);
                    $(":text").eq(3).val(dataJsonOB.newPrice);
                    $(":text").eq(4).val(dataJsonOB.oldPrice);
                    $(":text").eq(5).val(dataJsonOB.commentsNum);
                    $(":text").eq(6).val(dataJsonOB.commentsPer);
                    $(":text").attr("disabled", "true");
                    $(":text").css("textAlign", "center");
                },
                dataType:"json"
            });
        }
    }
    urlSearch();

    $(".searchBtn").click(function(){
        var goodsId = $("#goodsId").val();
        window.location.href = "search-goods.html?" + goodsId;
    });


});

