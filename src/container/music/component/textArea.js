import React, { Component } from 'react'
import '../less/textArea.less'
class TextArea extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            
        }
    }
    onInputValueChange(e) {
        const value = e.target.value
        const props = this.props.propName
        this.props.onInputChange(props,value)
    }
    render() { 
        return ( 
            <div className="textarea-style">
                <h3>想说的话</h3>
                <textarea rows="4" cols="30" placeholder="请输入不超过50字的内容哦~"  onChange={this.onInputValueChange.bind(this)} value={this.props.val}></textarea>
            </div>
        )
    }
}
 
export default TextArea