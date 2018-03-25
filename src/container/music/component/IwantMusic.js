import React, { Component } from 'react'
import '../less/IwantMusic.less'

class IwantMusic extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    isChecked(e) {
        const name = e.target.checked
        const bool = name === true ? 1 : 0
        this.props.isAnonymity(bool)
    }
    render() { 
        return (
            <div className="Iwant-div-style">
                <button onClick={this.props.onSubmit}>我要点歌</button>
                <div className="anonymity"><input type="checkbox" onChange={this.isChecked.bind(this)}/>匿名</div>
            </div>
        )
    }
}
 
export default IwantMusic;