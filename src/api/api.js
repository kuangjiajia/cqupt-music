import axios from 'axios'
import Server from './server.js'
// import $ from 'jquery'
class API extends Server{
    // async getUserInfor() {
    //     let result = await this.axios('get',url,params)
    // }
    async getAllMusic() {
        // let result = await this.axios("get",url,params)
    }
    async getNewest(params) {
        await this.axios("get","https://wx.idsbllp.cn/test-proxy-rewrite-root/Vodplatform/latest??",params)
    }
    async subInfor(params) {
        await this.axios("post","https://wx.idsbllp.cn/test-proxy-rewrite-root/Vodplatform/song",params)
    }
    // async getNewest(params) {
    //     return await this.axios("get","https://wx.idsbllp.cn/test-proxy-rewrite-root/Vodplatform/latest??",params)
    // }
    async postGood(params) {
        await this.axios("post","https://wx.idsbllp.cn/test-proxy-rewrite-root/Vodplatform/like",params)
    }
}

export default new API()