import axios from 'axios'
export const addPublishedData = "ADD_PUBLISH_DATA"
export const initialPublishedData = "INITIAL_DATA_PUBLISH"

export const addDataPublish = (num) => dispatch => {
    axios.get("https://wx.idsbllp.cn/test-proxy-rewrite-root/Vodplatform/myRelease??",{
        params:{
            pageNum: num,
            pageSize: 10,
            openid: "puvJHTIiYyItWMt74"
        }
    }).then(res => {
        dispatch({
            type: addPublishedData,
            data: res.data.data
        })
    })
}

export const initialDataPublish = (num) => dispatch => {
    axios.get("https://wx.idsbllp.cn/test-proxy-rewrite-root/Vodplatform/myRelease??",{
        params:{
            pageNum: 1,
            pageSize: 10,
            openid: "puvJHTIiYyItWMt74"
        }
    }).then(res => {
        dispatch({
            type: initialPublishedData,
            data: res.data.data
        })
    })
}