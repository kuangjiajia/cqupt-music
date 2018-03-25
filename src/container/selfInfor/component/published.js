import React, { Component } from 'react'
import SelfInforRouter from '../../../component/main/routes/selfInforRouter.js'
import SelfPages from '../../../component/main/routes/selfPages.js'
import Item from '../../../component/main/routes/item.js'
import { connect } from 'react-redux'
import '../less/itemsStyle.less'
import { initialDataPublish , addDataPublish } from '../action/published.js'
class Published extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 2,
            length: 0,
            text: "点击加载" 
        }
    }
    componentDidMount() {
        if(this.props.Publish.toString() === "") {
            this.props.forceUpdateDate()
        }
    }
    onClickAddData = () => {
        let num = this.state.num
        let len = this.props.Publish.length
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
        const { Publish } = this.props
        return (
            <div>
                <SelfPages />
                <SelfInforRouter />              
                <div className="items-style" ref="adoptDOM">  
                    {   
                        Publish.map((item,index) => {
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
                        Publish.length >= 10 ? <button className="reload" onClick={this.onClickAddData}>{this.state.text}</button> : null
                    }
                </div>
            </div>
        )
    }
}
 
const mapStateToProps = (state,ownProps) => {
    return {
        Publish: state.Publish
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        forceUpdateDate: () => dispatch(initialDataPublish()),
        clickAddData: (num) => dispatch(addDataPublish(num))        
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Published)
