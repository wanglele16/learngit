/**
 * Created by Administrator on 2016/9/12.
 */
$(function() {
    var pageSizeV = 15;
    var pageIndex = 1;
    $.ajax({
        url: "http://localhost:8080/product/GetProductsByPage_get",
        data: {
            "pagesize": pageSizeV,
            "pageindex": pageIndexV
        },
        dataType: "json",
        success: function(data) {
            for (var i = 0; i < 3; i++) {
                var dataObj = JSON.parse(data[i].Data);
            }
            var obj1 = $("
                ");
        }

    })
});