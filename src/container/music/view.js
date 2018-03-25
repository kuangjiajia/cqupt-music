import React, { Component } from 'react'
import InputItem from './component/InputItem.js'
import TextArea from './component/textArea.js'
import IwantMusic from './component/IwantMusic.js'
import { InputConfig } from './config.js'
import './less/view.less'
import { addMusic } from './actions.js'
import { connect } from 'react-redux'
import API from '../../api/api.js'

class Music extends Component {
    //adopted 0 未采纳 1已采纳
    constructor(props) {
        super(props)
        const date = new Date().toLocaleDateString()
        console.log(date)
        this.state = {
            "isAnonymous": 0,
            "songName": "",
            "singer": "",
            "toStuid": "",
            "toName": "",
            "saySth": "",
            "openid": "ouRCyjk_lS-puvJHTIiYyItWMt74",
            // "state": 
            date
        }
    }
    onChange(props,value) {
        const oldState = this.state
        oldState[props] = value
        this.setState(oldState)
    }
    onSubmit() {
        // console.log(this.state)
        const oldState = this.state
        if(oldState.songName.trim() === "" || oldState.singer.trim() === "" || oldState.toStuid.trim() === "" || oldState.toName.trim() === "" || oldState.saySth.trim() === "") {
            alert("输入不能为空")
        }else if(oldState.songName.trim().length > 15) {
            alert("输入的歌曲字数不能超过15字~~~")
        }else if(oldState.saySth.trim().length > 50){
            alert("输入的内容字数不能超过50字~~~")
        }else {
            this.props.onClickAdd(oldState)
        } 
        this.setState({
            "songName": "",
            "singer": "",
            "toStuid": "",
            "toName": "",
            "saySth": ""
        })
    }
    isAnonymity(anonymity) {
        const oldState = this.state
        oldState['isAnonymous'] = anonymity
        this.setState(oldState)
    }
    render() { 
        return ( 
            <div className="music-style">
                {
                    InputConfig.map((item,index) => {
                        return <InputItem 
                                type={item.type} 
                                placeholder={item.placeholder} 
                                key={item.type} 
                                onInputChange={this.onChange.bind(this)} 
                                propName={item.prop} 
                                val={this.state[item.prop]}
                                />
                    })
                }
                <TextArea 
                onInputChange={this.onChange.bind(this)} 
                propName="saySth" val={this.state.saySth}
                />
                <IwantMusic 
                onSubmit={this.onSubmit.bind(this)} 
                isAnonymity={this.isAnonymity.bind(this)}
                />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClickAdd: (json) => {
        dispatch(addMusic(json))
        API.subInfor(json)
    }
})
 
export default connect(() => ({}),mapDispatchToProps)(Music)