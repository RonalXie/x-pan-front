import axios from "axios";

const service = axios.create({
    baseURL: "http://127.0.0.1:8090",
    timeout: 5 * 1000,
})

// 2.请求拦截器request interceptor
service.interceptors.request.use(
    config => {
        // 发请求前做的一些处理，数据转化，配置请求头，设置token,设置loading等，根据需求去添加
        // 注意使用token的时候需要引入cookie方法或者用本地localStorage等方法，推荐js-cookie
        if (window.localStorage.getItem("token")) {
            // config.params = {'token': token}    // 如果要求携带在参数中
            // config.headers.token = token;       // 如果要求携带在请求头中
            // bearer：w3c规范
            config.headers['Authorization'] = 'Bearer ' + window.localStorage.getItem("token")
        }
        return config
    },
    error => {
        // do something with request error
        // console.log(error) // for debug
        return Promise.reject(error)
    }
)


service.defaults.withCredentials = false

service.interceptors.response.use(
    // response => {
    //     const res = response.data
    //     if (res.code !== 200) {
    //         if (res.code === 401 || res.code === 50012 || res.code === 50014) {
    //             // MessageBox.confirm("会话失效，您可以留在当前页面，或者重新登录", "权限不足", {
    //             //   confirmButtonText: "确定",
    //             //   cancelButtonText: "取消",
    //             //   type: "warning",
    //             //   center: true
    //             // }).then(() => {
    //             //   window.location.href = "#/login"
    //             // })
    //         } else {
    //             // Message({
    //             //   showClose: true,
    //             //   message: res.message || "Error",
    //             //   type: "error",
    //             //   duration: 3 * 1000
    //             // })
    //         }
    //         return Promise.reject(new Error(res.message || "Error"))
    //     } else {
    //         return res
    //     }
    // },
    // error => {
    //     /** *** 接收到异常响应的处理开始 *****/
    //     // console.log('err' + error) // for debug
    //     // Message({
    //     //   showClose: true,
    //     //   message: error.message,
    //     //   type: 'error',
    //     //   duration: 5 * 1000
    //     // })
    //     return Promise.reject(error)
    // }
)
export default service
