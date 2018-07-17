import Vue from 'vue';

Vue.filter('formatTimestamp', function(start_time, type){
  const start_date = new Date(start_time);

  const year = start_date.getFullYear();
  const month = start_date.getMonth() + 1;
  const day = start_date.getDate();
  const hour = start_date.getHours();
  const minutes = start_date.getMinutes();
  const seconds = start_date.getSeconds();

  if(type == 'yyyy年mm月dd'){
    return year + '年' + formatNumber(month) + '月' + formatNumber(day) + '日';
  }else if(type == 'yyyy-mm-dd'){
    return [year, month, day].map(formatNumber).join('-');
  }else if(type == 'yyyy-mm-dd hh:mm'){
    return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minutes].map(formatNumber).join(':');
  }else if(type == 'yyyy/mm/dd hh:mm'){
    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minutes].map(formatNumber).join(':');
  }else {
    return [year, month, day].map(formatNumber).join('/')
      + ' ' + [hour, minutes, seconds].map(formatNumber).join(':');
  }

});

function formatNumber(n) {
  n = n.toString();
  return n[1] ? n : '0' + n;
}
