$(function () {
    var temp = true;
    $(".infor-first").click(function () {
        if (temp) {
            $(".specific").stop(true, true).slideDown();
            temp = !temp;
        }else {
            $(".specific").stop(true, true).slideUp();
            temp = !temp;
        }
    })

});
