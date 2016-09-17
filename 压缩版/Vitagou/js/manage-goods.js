/**
 * Created by Administrator on 2016/9/17.
 */

var pageSizeV = 30;
var pageIndexV = 1;

$(function() {
    var count = 0;

    $.ajax({
        url: "http://localhost:8080/product/GetProductsByPage_get",
        data: {
            "pagesize": pageSizeV,
            "pageindex": pageIndexV
        },
        dataType: "json",
        success: function(data) {
            for (var i = 0; i < data.length; i++) {
                count++;
                var dataObj = JSON.parse(data[i].Data);
                var trOb = $("<tr><td><input type = \"checkbox\" /></td><td>" + data[i].Id + "</td><td><img src = \"../img/" + dataObj.imgSrc + "\"/></td><td>" + dataObj.name + "</td><td>" + dataObj.newPrice + "</td><td>" + dataObj.oldPrice + "</td><td>" + dataObj.commentsNum + "</td><td>" + dataObj.commentsPer + "</td><td><a href = \"add-goods.html?" + data[i].Id + "&" + dataObj.imgSrc + "&" + dataObj.name + "&" + dataObj.newPrice + "&" +  dataObj.oldPrice + "&" +  dataObj.commentsNum + "&" + dataObj.commentsPer + "\"><em></em></a></td>");
                $("table").append(trOb);
            }
            $("#count").html(count);
        }
    });



    //ȫѡ��ȫ��ѡ
    $("#selectAll").click(function() {
        $(":checkbox").prop("checked", $(this).prop("checked"));
    });

    //ɾ��
    $("#delGoods").click(function () {
        $(":checked:not(#selectAll)").each(function() {
            $.ajax({
                url: "http://localhost:8080/product/DeleteProductById_post",
                type: "post",
                data: {
                    "id": $(this).parents("tr").children().eq(1).html()
                },
                success: function(data) {
                    if (data == 1) {
                        /*$("table").html("<tr><th colspan = \"9\"><p><a href = \"add-goods.html\" class = \"link1\"></a><i>|</i><a href = \"#\" class = \"link2\" id = \"delGoods\"></a></p></th></tr><tr class = \"one\"><td><input type = \"checkbox\" id = \"selectAll\"/>ȫѡ</td><td>��Ʒ���</td><td>ͼƬ��ַ</td><td>��Ʒ����</td><td>�ּ�</td><td>ԭ��</td><td>��������</td><td>�����ٷֱ�</td><td>�༭</td></tr>");*/
                        /*loadPage();*/
                        alert("ɾ���ɹ�");
                        location.href = "manage-goods.html";
                    } else {
                        alert("ɾ��ʧ��");
                    }
                },
                dataType: "json",
                error: function() {
                    alert("ajax error");
                }
            })
        })

    });
});