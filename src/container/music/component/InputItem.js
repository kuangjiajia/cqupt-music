import React, { Component } from 'react'
import '../less/InputItem.less'

class InputItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stateValue: ""
        }
        // this.onInputValueChange.bind(this)
    }
    onInputValueChange(e) {
        const value = e.target.value
        const props = this.props.propName
        this.setState({
            stateValue: value
        })
        this.props.onInputChange(props,value)
    }
    render() { 
        const { type, placeholder,val } = this.props
        return (
            <div className="input-item-less">
                <h3>{type}</h3>
                <input type="text" placeholder={placeholder} onChange={this.onInputValueChange.bind(this)} value={val}/>
            </div>
        )
    }
}
 
export default InputItem;