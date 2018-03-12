import React, { Component } from 'react'
import InputItem from './component/InputItem.js'
import TextArea from './component/textArea.js'
import IwantMusic from './component/IwantMusic.js'
import { InputConfig } from './config.js'
import './less/view.less'
import { addMusic } from './actions.js'
import { connect } from 'react-redux'
class Music extends Component {
    //adopted 0 未采纳 1已采纳
    constructor(props) {
        super(props)
        const date = new Date().toLocaleDateString()
        console.log(date)
        this.state = {
            "published": 0,
            "adopted": 0,
            "anonymity": false,
            "musicName": "",
            "singer": "",
            "toStuId": "",
            "toName": "",
            "content": "",
            date,
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
        this.props.onClickAdd(oldState)
        this.setState({
            "musicName": "",
            "singer": "",
            "toStuId": "",
            "toName": "",
            "content": ""
        })
    }
    isAnonymity(anonymity) {
        const oldState = this.state
        oldState['anonymity'] = anonymity
        this.setState(oldState)
    }
    onBlur(sentence,wordsNum) {
        const num = sentence.trim().length
        if(num === 0){
            
        }else if(num > wordsNum) {
            
        }
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
                propName="content" val={this.state.content}
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
    }
})
 
export default connect(() => ({}),mapDispatchToProps)(Music)