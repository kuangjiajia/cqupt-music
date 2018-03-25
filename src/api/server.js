import axios from 'axios'
import qs from 'qs'

class Server {
    axios(method,url,params) {
        return new Promise((resolve,reject) => {
            if(method.toUpperCase() === 'POST') {
                console.log(123)
                console.log(params)
                axios.post(url,qs.stringify(params)).then(res => {
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
            }else if(method.toUpperCase() === "GET") {
                axios.get(url,{params}).then(res => {
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
            }else {
                throw new Error("传入参数错误")
            }
        })
    }
}

export default Server