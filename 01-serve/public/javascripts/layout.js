const axios = require('axios');
window.onload = function(){
  axios('/article','GET').then(res=>{
    console.log(res)
  })
}