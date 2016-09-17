/**
 * Created by Administrator on 2016/9/12.
 */
$(function() {
    var pageSizeV = 15;
    var pageIndexV = 1;
    $.ajax({
        url: "http://localhost:8080/product/GetProductsByPage_get",
        data: {
            "pagesize": pageSizeV,
            "pageindex": pageIndexV
        },
        dataType: "json",
        success: function(data) {
            var _obj =[];
            for (var i = 0; i < 15; i++) {
                var dataObj = JSON.parse(data[i].Data);
                _obj[i] = $('<dd><div class="new_img_container"><a href="#"  target="_blank"><img data-original="/upload/2016/06/16/20160616141610971.jpg" width="296" height="300" title="" src="../img/' + dataObj.imgSrc + '" style="display: block;"></a><div class="new_img_btn" style="display: none;"><span class="new_img_btn_left">' + dataObj.commentsPer +'%好评</span><span class="new_img_btn_center"></span><span class="new_img_btn_right">' + dataObj.commentsNum + '条评论</span></div></div><div class="new_container_bottom"><a href="#" target="_blank">' + dataObj.name + '</a><div class="goods_coupon_label" style="height:35px;line-height:35px;"><a class="sheer_img_container" onclick="addGoodsCart($(this), 1247, 1,0)">加入购物车</a></div><p><strong>￥'+ dataObj.newPrice + '</strong><span>￥' + dataObj.oldPrice + '</span></p></div></dd>');
            }
            for (i = 0; i < 3; i++) {
                $(".floor1").prepend(_obj[i]);
            }
            for (i = 3; i < 6; i++) {
                $(".floor2").prepend(_obj[i]);
            }
            for (i = 6; i < 9; i++) {
                $(".floor3").prepend(_obj[i]);
            }
            for (i = 9; i < 12; i++) {
                $(".floor4").prepend(_obj[i]);
            }
            for (i = 12; i < 15; i++) {
                $(".floor5").prepend(_obj[i]);
            }

        }


    })
});