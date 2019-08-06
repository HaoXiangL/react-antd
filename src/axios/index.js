import JSONP from 'jsonp'

export default class Axios {
  static jsonp(options){
    return new Promise((res,rej) => {
      JSONP(options.url,{
        param: 'callback'
      }, (err,response)=>  {
        if(response.status === 'success'){
          res(response);
        }else {
          rej(response.message);
        }
      })
    })
  }
}
