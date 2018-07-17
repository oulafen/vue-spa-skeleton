var global = {
  "browser": (function(){
    const u = navigator.userAgent;
    return {
      trident: u.indexOf('Trident') > -1, //IE内核
      presto: u.indexOf('Presto') > -1, //opera内核
      webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
      gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
      mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
      ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
      android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端
      weixin: u.indexOf('MicroMessenger') > -1, //是否微信 （2015-01-22新增）
      qq: u.match(/\sQQ/i) == " qq", //是否QQ
    }
  })(),
  /** 正则验证 **/
  "regValidate": {
    'phone': function (num) {
      let reg = /^1[3|4|5|7|8][0-9]{9}$/;
      return reg.test(num);
    },
    'email': function (str) {
      let reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
      return reg.test(str);
    },
    'url': function (str) {
      let reg = /(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)/g;
      return reg.test(str);
    }
  },
  formatNumber(n) {
    n = n.toString();
    return n[1] ? n : '0' + n;
  }
};


exports.install = function (Vue, options) {
  Vue.prototype.$global = global;
};
