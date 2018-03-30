import axios from 'axios'
export const upDateDataReview = "UPDATE_REVIEW"
export const addDataMoreReview = "ADD_DATA_MORE_REVIEW"

export const upDateReview = () => dispatch => {
    axios.get("https://wx.idsbllp.cn/test-proxy-rewrite-root/Vodplatform/review??",{
        params: {
            pageNum: 1,
            pageSize: 10
        }
    }).then(res => {
        const data = res.data.data
        dispatch({
            type: upDateDataReview,
            data
        })
    })
}

export const addDataReview = (num) => dispatch => {
    console.log(num)
    axios.get("https://wx.idsbllp.cn/test-proxy-rewrite-root/Vodplatform/review??",{
        params: {
            pageNum: num,
            pageSize: 10
        }
    }).then(res => {
        const data = res.data.data
        dispatch({
            type: addDataMoreReview,
            data
        })
    })
}