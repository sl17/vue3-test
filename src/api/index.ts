import axios from "axios";

let domain = '',
    base = '',
    upPath = '',
    assetsDomain = '',
    cookieDomain = '';
if (process.env.NODE_ENV === 'development') {  //本地开发环境
    domain = '';
    base = '';
    assetsDomain = '';
    cookieDomain = '';
    upPath = '';//de
    // domain = 'http://dev.ng-test.linkedprint.cn/views';
    // base = 'http://dev.ng-test.linkedprint.cn/privateapi';
    // assetsDomain = 'http://dev.ng-test.linkedprint.cn';
    // cookieDomain = '.ng-test.linkedprint.cn';
    // upPath = '/privateapi';
} else if (process.env.NODE_ENV === 'production') {  //线上正式环境
    // 线上测试 - 测试库    .\publish-pre.sh 
    // domain = 'http://ng-test.linkedprint.cn/views';
    // base = 'http://ng-test.linkedprint.cn';
    // assetsDomain = 'http://ng-test.linkedprint.cn';
    // cookieDomain = '.ng-test.linkedprint.cn';
    // upPath = '';
}

export const DOMAIN = domain;
export const ASSETSDOMAIN = assetsDomain;
export const BASE = base;
export const UPLOADPATH = upPath;


let request = axios.create({
    baseURL: '',
    timeout: 5000,
})

request.interceptors.request.use((config) => {
    return config;
}, (error) => {
    return Promise.reject(new Error(error));
})

request.interceptors.response.use((response) => {
    let { code, msg } = response.data;
    if (code != 200) {
        return Promise.reject(new Error(msg));
    }
    return response;
}, (error) => {
    return Promise.reject(new Error(error));
})

export let API = function (url:string, params?:any, contentType?:string) {

    if (contentType == 'json') {
        return request.post(
            `${base}${url}`, params,
            {
                headers:
                    { 'apiMethod': 'ajax', 'content-type': 'application/json;charset=UTF-8' }
            }
        ).then(res => res.data);
    } else if (contentType == 'formData') {
        return request.post(
            `${base}${url}`, params,
            {
                headers:
                    { 'apiMethod': 'ajax', 'content-type': 'multipart/form-data' }
            }
        ).then(res => res.data);
    } else if (contentType == 'get'|| contentType==null) {
        return request.get(`${base}${url}`,
            {
                'params': params,
                headers:
                    { 'apiMethod': 'ajax', 'content-type': 'application/x-www-form-urlencoded' }
            }).then(res => res.data);
    }
}

export default request;
