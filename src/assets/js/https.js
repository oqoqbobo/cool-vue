import axios from 'axios';
const baseUrl = window.apiConfig.localhost.url;

// 普通请求
const fetch = axios.create({
  headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
});
// json请求
const fetchJson = axios.create({
  headers: {
    Accept: '*/*',
    'Content-Type': 'application/json;charset=UTF-8',
    "Access-Control-Allow-Origin": "*",
    'authorization': localStorage.token
  },
});
// 下载图片
const fetchDownLoad = axios.create({
  responseType: 'blob',
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'authorization': localStorage.token
  },
});
// 上传图片
const fetchUpload = axios.create({
  responseType: 'blob',
  headers: {
    'Content-Type': 'multipart/form-data',
    'Accept': 'blob',
    'authorization': localStorage.token
  },
});
// 上传图片 + json串
const fetchUploadSub = axios.create({
  headers: {
    'Content-Type': 'multipart/form-data',
    'authorization': localStorage.token
  },
});

/**
 * 拼接配置文件的路由
 * @param path
 * @returns {string}
 */
function getPath(path) {
  let sendPath;
  //如果传递的路径不含http，需要加上配置文件的
  if (path.indexOf('http') <= -1) {
    sendPath = `${baseUrl}/${path}`;
  } else {
    //如果由http（说明本身是完整的，不需要拼接）
    sendPath = path;
  }
  return sendPath;
}

var $http = {
  post(path,params){
    return fetch({method:"post",url:getPath(path),params:{...params}})
  },
  get(path,params){
    return fetch({method:"get",url:getPath(path),params:{...params}})
  },
  postJson(path,params){
    return fetchJson({method:"post",url:getPath(path),params:{...params}})
  },
  getJson(path,params){
    return fetchJson({method:"get",url:getPath(path),params:{...params}})
  },
  download(path, type, params) {
    return fetchDownLoad({method: type, url: getPath(path), params: {...params}});
  },
  //图片二进制数据
  upload(path,data, type = 'post'){
    return fetchUpload({method: type, url: getPath(path), data: data})
  },
  //表单+二进制数据
  uploadSub(path,data, type = 'post') {
    return fetchUploadSub({method: type, url: getPath(path), data: data})
  }
}

export default $http
