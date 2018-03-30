// import API from '../../../api/api.js'
import axios from 'axios'
export const upDateDataNewest = "UPDATE_NEWEST"
export const addDataMoreNewest = "ADD_DATA_MORE_NEWEST"
export const addNewest = 'ADD_NEWEST'

export const upDateNewest = () => dispatch => {
    // API.getNewest({
        // pageNum: 1,
        // pageSize: 10   
    // }).then(res => {
    //     console.log(res)
        // const data = res.data.data
        // dispatch({
        //     type: addDataMoreNewest,
        //     data
        // })
    // })
    axios.get("https://wx.idsbllp.cn/test-proxy-rewrite-root/Vodplatform/main/latest??",{
        params:{
            pageNum: 1,
            pageSize: 10 
        }  
    }).then(res => {
        console.log(res)
        const data = res.data.data
        dispatch({
            type: addDataMoreNewest,
            data
        })
    }).catch(err => {
        // reject(err)
    })
}

export const addPublish = (data) => {
    return {
        type: addNewest,
        data
    }
}


export const addDataNewest = (num) => dispatch => {


    axios.get("https://wx.idsbllp.cn/test-proxy-rewrite-root/Vodplatform/main/latest??",{
        params:{
            pageNum: num,
            pageSize: 10 
        }  
    }).then(res => {
        console.log(res)
        const data = res.data.data
        dispatch({
            type: addDataMoreNewest,
            data
        })
    }).catch(err => {
        // reject(err)
        console.log(err)
    })

    // API.getNewest({
    //     pageNum: num,
    //     pageSize: 10   
    // }).then(res => {
    //     const data = res.data.data
    //     dispatch({
    //         type: addDataMoreNewest,
    //         data
    //     })
    // })
}