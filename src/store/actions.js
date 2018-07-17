import axios from "axios";

export default {
  fetchUserInfo: ({commit}) => {
    return new Promise((resolve, reject) => {
      axios.get("/api/v1/user/home")
        .then(res => {
          const res_data = res.data;
          let userInfo = {};
          if (res_data.error_code == 0) {
            userInfo = res_data.data.user_info;
            commit('setUserInfo', userInfo);

            resolve(userInfo);
          } else {
            reject(res_data.msg);
          }
        })
        .catch(error => {
          reject(error);
        })
    })
  }
}
