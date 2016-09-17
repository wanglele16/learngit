/**
 * Created by Administrator on 2016/9/17.
 */
var $ = require('./libs/jquery.js');

var common = require('./util/common.util.js');

var tplHk = require('./tpls/hk.string');

var global = require('./module/global_new.js');
var fade = require('./module/fade.js');
var heal = require('./module/heal_page.js');
var shop = require('./module/shop.js');
var hk = require('./module/hk.js');
var endtime = require('./module/endtime.js');

$(function() {
    common.renderHtml(tplHk);
    global();
    fade();
    heal();
    shop();
    hk();
    endtime();
});