/**
 * Created by Administrator on 2016/9/17.
 */
var $ = require('./libs/jquery.js');

var common = require('./util/common.util.js');

var tplIndex = require('./tpls/index.string');

var global = require('./module/global_new.js');
var fade = require('./module/fade.js');
var heal = require('./module/heal_page.js');

$(function() {
   common.renderHtml(tplIndex);
    global();
    fade();
    heal();
});