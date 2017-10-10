import axios from 'axios';

//封装好的get和post接口，调用方法情况action文件
const instance = axios.create({
    baseURL: 'https://cnodejs.org/api/v1', //设置默认api路径
    timeout: 5000, //设置超时时间
    headers: {'content-type': 'application/json; charset=utf-8'}
});

export default instance;