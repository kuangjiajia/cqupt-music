import React, { Component } from 'react'
import './less/index.less'
import Newest from './component/newest.js'
import Previous from './component/previous.js'
import { Switch,Route } from 'react-router-dom'

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Switch>
                    <Route path="/index/newest" component={Newest} />
                    <Route path="/index/previous" component={Previous} />
                </Switch>
            </div>
        )
    }
}
 
export default Index