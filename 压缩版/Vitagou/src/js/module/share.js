/**
 * Created by Administrator on 2016/9/17.
 */
var $ = require('../libs/jquery.js');
var Share = function () {
$(function() {
    $("#bdshare").hover(function() {
        $("#bdshare").stop(true, false).animate({right: 0});
    },function(){
        $("#bdshare").stop(true, false).animate({right: "-210px"});
    })
});
};
module.exports = Share;