import API from '../../../api/api.js'
import axios from 'axios'
export const upDateDataNewest = "UPDATE_NEWEST"
export const addDataMoreNewest = "ADD_DATA_MORE_NEWEST"

export const upDateNewest = () => dispatch => {
    API.getNewest({
        pageNum: 1,
        pageSize: 10   
    }).then(res => {
        const data = res.data.data
        dispatch({
            type: addDataMoreNewest,
            data
        })
    })
}

export const addDataNewest = async (num) => dispatch => {
    console.log(num)
    // axios.get("https://wx.idsbllp.cn/test-proxy-rewrite-root/Vodplatform/latest??",{
    //     params: {
    //         pageNum: num,
    //         pageSize: 10
    //     }
    // }).then(res => {
    //     const data = res.data.data
    //     dispatch({
    //         type: addDataMoreNewest,
    //         data
    //     })
    // })
    API.getNewest({
        pageNum: num,
        pageSize: 10   
    }).then(res => {
        const data = res.data.data
        dispatch({
            type: addDataMoreNewest,
            data
        })
    })
}