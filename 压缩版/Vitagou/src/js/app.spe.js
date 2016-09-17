/**
 * Created by Administrator on 2016/9/17.
 */
var $ = require('./libs/jquery.js');

var common = require('./util/common.util.js');

var tplSpe = require('./tpls/specific1.string');

var imagezoom = require('./module/jquery.imagezoom.min.js');
var ajaxLoad = require('./module/ajaxLoad_specific.js');
var specific1 = require('./module/specific1.js');
var shop = require('./module/shop.js');
var share = require('./module/share.js');
var zoom = require('./module/zoom.js');

$(function() {
    common.renderHtml(tplSpe);
    imagezoom();
    ajaxLoad();
    specific1();
    shop();
    share();
    zoom();
});