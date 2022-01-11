const getTime = ()=>{
  const myDate = new Date();
  const hh = myDate.getHours(); //获取当前小时数(0-23)
  const mm = myDate.getMinutes(); //获取当前小时数(0-23)
  // const SS = myDate.getSeconds(); //获取当前秒数(0-59); 
  return `${hh}:${mm}`
}

const getDate = ()=>{
  const myDate = new Date();
  const YY = myDate.getFullYear();
  const MM = myDate.getMonth() + 1 
  const DD = myDate.getDate(); //获取当前日(1-31) 

  const week = ['天','一','二','三','四','五','六']
  const weekday = week[myDate.getDay()]; //获取当前星期X(0-6,0代表星期天)
  return `${YY}.${MM}.${DD} 星期${weekday}`
}

export {
  getTime,
  getDate
}