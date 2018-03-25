import React, { Component } from 'react'
import '../less/item.less'
import goodIc from '../images/good-ic.png'
import goodChooseIc from '../images/good-choose-ic.png'
import axios from 'axios'
import API from '../../../api/api.js'

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            good: props.state,
            likeNum: props.likeNum
        }
        this.handleClickChangeGood.bind(this)
    }
    handleClickChangeGood = () => {
        let { openid , likeid}  = this.props,
        { good , likeNum }= this.state
        if(good === 0) {
            good = 1
            likeNum -= 1
        }else {
            good = 0
            likeNum += 1
        }
        this.setState({
            good,
            likeNum
        })
        // axios.post('https://wx.idsbllp.cn/test-proxy-rewrite-root/Vodplatform/like', qs.stringify({
        //         openid,
        //         id
        // }),{withCredentials: true}).then(res => console.log(res))
        API.postGood({
            openid,
            likeid
        })
    }
    render() { 
        const { musicName, singer, toName, content, who, date ,imgSrc} = this.props
        return (
            <div className="item-style">
                <h2>
                    <div className="user-icon">
                        <img src={imgSrc} />
                    </div>
                    <div className="musicion-music">
                        <i></i>&nbsp;
                        <span>&nbsp;{musicName}</span>
                        <span>&nbsp;&nbsp;{singer}</span>
                    </div>
                </h2>
                <h3>To {toName}</h3>
                <div className="content">
                    {content}
                </div>
                <div className="from-who clearfix">
                    <div className="spot" onClick={this.handleClickChangeGood}>
                        <img src={this.state.good === 0 ?  goodChooseIc : goodIc} />
                    </div>
                    <div className="spot-text">
                        {this.state.likeNum}
                    </div>
                    <div className="benefactor">{who ? who : "匡俊嘉"}</div>
                    <div className="from">from&nbsp;&nbsp;</div>
                </div>
                <div>
                    <div className="date">{date}</div>
                </div>
            </div>
        )
    }
}
 
export default Item;