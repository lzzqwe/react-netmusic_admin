import axios from 'axios';
axios.defaults.timeout = 30000;
// 添加请求拦截器
axios.interceptors.request.use(function(config) {

    return config;
}, function(error) {
    return Promise.reject(error);
});

// 添加响应拦截器

axios.interceptors.response.use(function(response, config) {
    if (response.status == 200) {
        return response.data;
    }

}, function(error) {
    return Promise.reject(error);
});
export default axios