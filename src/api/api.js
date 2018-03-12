import axios from 'axios'
import Server from './server.js'
class API extends Server{
    async getUserInfor() {
        let result = await this.axios('get',url,params)
    }
    async getAllMusic() {
        let result = await this.axios("get",url,params)
    }
}