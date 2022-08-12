import $http from './http'

export default {
  install(Vue){
    window.$ajax = {
      simpleReq(url, type, opt){
        try{
          $http[type](url,opt)
            .then(res => {

            })
        }catch (e) {
          console.log(e)
        }
      }

    }
  }
}
