import React, { Component } from 'react'
import SelfInforRouter from '../../../component/main/routes/selfInforRouter.js'
import SelfPages from '../../../component/main/routes/selfPages.js'
import Item from '../../../component/main/routes/item.js'
import { connect } from 'react-redux'
import '../less/common.less'
import '../less/itemsStyle.less'
import {addDataAdopt , innitialDataAdopt} from '../action/adopt.js'

class Adopt extends Component {
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
        if(this.props.Adopt.toString() === "") {
            this.props.forceUpdateDate()
        }
    }
    onClickAddData = () => {
        let num = this.state.num
        let len = this.props.Adopt.length
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
        const { Adopt } = this.props
        console.log(Adopt)
        return (
            <div className="adopt-published-common-style">
                <SelfPages />
                <SelfInforRouter />
                <div className="items-style" ref="adoptDOM">  
                    {   
                        Adopt.map((item,index) => {
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
                        Adopt.length >= 10 ? <button className="reload" onClick={this.onClickAddData}>{this.state.text}</button> : null
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state,ownProps) => {
    return {
        Adopt: state.Adopt
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        forceUpdateDate: () => dispatch(innitialDataAdopt()),
        clickAddData: (num) => dispatch(addDataAdopt(num))        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Adopt)