import React, { Component } from 'react'
import '../less/selfPages.less'
import { connect } from 'react-redux'
class SelfPages extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount() {

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
                        <h3>{}</h3>
                    </div>
                </div>
            </div>
        )
    }
}
 

// const mapStateToProps = (state) => {
//     return {
//         headImg: 
//     }
// } 

export default connect()(SelfPages) 