import React, { Component } from 'react'
import '../less/selfPages.less'
class SelfPages extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="selfInfor-style">
                <div className="green-style"></div>
                <div className="center-style">
                    <div className="user-infor">
                        <div className="user-icon">
                            <img src="" />
                        </div>
                        <h3>脱发女孩</h3>
                    </div>
                </div>
            </div>
        )
    }
}
 
export default SelfPages 