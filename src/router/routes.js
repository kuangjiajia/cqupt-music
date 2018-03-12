import React, { Component } from 'react'
import Nav from '../component/nav/view'
import Main from '../component/main/view'
import Announce from '../component/announce/view'
import './root.less'
class Root extends Component {
    state = {}
    render() { 
        return ( 
            <div>
                {/* <Announce /> */}
                <Main />
                <Nav />
            </div>
        )
    }
}
 
export default Root