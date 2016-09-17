/**
 * Created by Administrator on 2016/9/17.
 */
var $ = require('../libs/jquery.js');

var Common = {
  renderHtml: function (str) {
      $('body').prepend(str);
  }
};

module.exports = Common;