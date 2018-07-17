var path = require('path');

var pathArr = [
  {
    path_name: "/api/v1/shop_store/home",
    file_name: "store_home"
  },
  {
    path_name: "/api/v1/user/home",
    file_name: "user_home"
  }
];

var devServerApi = function (module) {
  module.exports.devServer.before = (app) => {
    pathArr.map((api) => {
      app.get(api.path_name, function (req, res) {
        res.json(require(path.resolve(__dirname, './apis/' + api.file_name + '.json')));
      });
    });
  };
};

exports.api = devServerApi;
