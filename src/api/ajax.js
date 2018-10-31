// 封装 ajax 请求函数
import axios from 'axios'

export default function ajax(url='', data={}, type= 'GET') {
 return new Promise((resolve, reject)=> {
   let promise

   if (type === 'GET') { //get 请求
   //   准备 get 请求的参数数据
     let dataStr = ''
     Object.keys(data).forEach(key => {
       dataStr += key + ':' + data[key] + '&'
     })
     if (dataStr!== ''){
       dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
       url = url+'?'+dataStr
     }
     //发送get 请求
     promise = axios.get(url)

   } else { //post 请求
     promise = axios.post(url,data)
   }
   promise.then(response => {
      resolve(response.data)
   }).catch(error => {
     reject(error)
   })

 })
}
