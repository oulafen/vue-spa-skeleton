/** 自定义公共基础依赖 **/
import Vue from 'vue'
import _ from 'lodash'

import global from 'util/global'

import 'util/filters'
import 'assets/scss/base.scss'


Vue.use(global);

Vue.prototype.$_ = _;

(function (doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      var fontSize = 20 * (clientWidth / 375);
      docEl.style.fontSize = (fontSize > 40 ? 40 : fontSize) + 'px';
    };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
