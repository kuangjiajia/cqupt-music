import axios from 'axios'
export const addAdoptData = "ADD_ADOPT_DATA"
export const initialAdoptData = "INITIAL_DATA"

export const addDataAdopt = (num) => dispatch => {
    axios.get("https://wx.idsbllp.cn/test-proxy-rewrite-root/Vodplatform//myAdoption???",{
        params: {
            pageNum: num,
            pageSize: 10,
            openid: "puvJHTIiYyItWMt74"
        }
    }).then(res => {
        dispatch({
            type: addAdoptData,
            data: res.data.data
        })
    })
}

export const innitialDataAdopt = () => dispatch => {
    axios.get("https://wx.idsbllp.cn/test-proxy-rewrite-root/Vodplatform//myAdoption???",{
        params: {
            pageNum: 1,
            pageSize: 10,
            openid: "puvJHTIiYyItWMt74"            
        }
    }).then(res => {
        dispatch({
            type: initialAdoptData,
            data: res.data.data
        })
    })
}