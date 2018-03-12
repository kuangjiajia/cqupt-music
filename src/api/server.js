import axios from 'axios'

class Server {
    axios(method,url,params) {
        return new Promise((resolve,reject) => {
            if(method.toUpperCase() === 'POST') {
                axios.post(url,params).then(res => {
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