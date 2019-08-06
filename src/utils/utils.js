import * as moment from 'moment'
export default {
  formateDate(time) {
    // if(!time){
    //   return '';
    // }
    let date = moment().format(time);
    return date;
    // date.getFullYear() + '-' + (date.getMonth()+1) + '-'  + date.getDate()+ ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
  }
}