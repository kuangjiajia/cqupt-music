import React, { Component } from 'react'
import IndexLayout from './indexLayout.js'
import { connect } from 'react-redux'
import Item from '../../../component/main/routes/item.js'
import '../../../mock/mock.js'
import { upDateReview, addDataReview } from '../action/review.js'
import '../less/index.less'


class Previous extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 2,
            length: 0,
            text: "点击加载"
        }
        this.onClickAddData.bind(this)
    }
    componentDidMount() {
        if(this.props.Previous.toString() === "") {
            this.props.forceUpdateDate()
        }
    }
    onClickAddData = () => {
        let num = this.state.num
        let len = this.props.Previous.length
        let length = len
        num++
        if(len > this.state.length + 9) {
            this.props.clickAddData(num)
            this.setState({
                length,
                num
            })
        }else {
            this.setState({
                text: "没有更多了~~~~",
                num,
                length 
            })
        }
    }
    render() { 
        const { Previous } = this.props
        return ( 
            <div>
                <IndexLayout />
                <div className="index-item-style">
                    {   
                        Previous.map((item,index) => {
                            if(item === false) return null
                            return <Item 
                                    musicName={item.songname} 
                                    singer={item.singer} 
                                    toName={item.toName} 
                                    content={item.saysth} 
                                    who={item.nickname} 
                                    date={item.date}
                                    imgSrc={item.headimgurl}
                                    key={item.id}
                                    likeNum={item.like}
                                    openid={item.openid}
                                    likeid={item.id}
                                    />                        
                            })
                    }
                    {
                        Previous.length >= 10 ? <button className="reload" onClick={this.onClickAddData}>{this.state.text}</button> : null
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        Previous: state.Review 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        forceUpdateDate: () => dispatch(upDateReview()),
        clickAddData: (num) => dispatch(addDataReview(num))        
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Previous)