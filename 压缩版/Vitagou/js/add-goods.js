/**
 * Created by Administrator on 2016/9/17.
 */
//��ȥ��ʱ����url,������޸İ�ť�����ģ�Ĭ������ֵ��id ���ɸı�
function urlSearch() {
    var str = location.href;
    var num = str.indexOf("?");
    if (num != -1) {
        str = str.substr(num + 1);
        var arr = str.split("&");
        $(":text").eq(0).val(arr[0]);
        $(":text").eq(0).attr("disabled", "true");
        $(":text").eq(1).val(arr[1]);
        $(":text").eq(2).val(decodeURIComponent(arr[2]));
        $(":text").eq(3).val(arr[3]);
        $(":text").eq(4).val(arr[4]);
        $(":text").eq(5).val(arr[5]);
        $(":text").eq(6).val(arr[6]);
    }
}


$(function() {
    urlSearch();
    //��������
    $("#btn2").click(function() {
        $(":text").val("");
        alert("���óɹ�");
    });
    $("#btn1").click(function() {
        var flag = true;
        $(":text").each(function(index){
            if ($(":text").eq(index).val() == "") {
                alert("�����Ϣ����������");
                flag = false;
                return false;
            }
        });
        if (flag) {
            var ajaxurl = "http://localhost:8080/product/CreateUpdateProduct_get";
            var ajaxJson = {
                imgSrc: $(":text").eq(1).val(),
                name: $(":text").eq(2).val(),
                newPrice: $(":text").eq(3).val(),
                oldPrice: $(":text").eq(4).val(),
                commentsNum: $(":text").eq(5).val(),
                commentsPer: $(":text").eq(6).val()
            };
            var dataStr = JSON.stringify(ajaxJson);
            $.ajax({
                url: ajaxurl,
                data: {
                    id: $(":text").eq(0).val(),
                    dataJson: dataStr
                },
                success:function(data){
                    if(data==1){
                        alert("�ɹ�");
                    }else{
                        alert("ʧ��");
                    }
                },
                error:function(){
                    alert("ajax error");
                }
            });
            $(":text").val("");
        }

    });
});