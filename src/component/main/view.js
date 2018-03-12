import React, { Component } from 'react'
import './main.less'
import { Route, Switch ,Redirect } from 'react-router-dom'
import Index from '../../container/index/view.js'
import Music from '../../container/music/view.js'
import SelfInfor from '../../container/selfInfor/view.js'
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="main-style">
                <Switch>
                    <Route path="/index" component={Index}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/selfInfor" component={SelfInfor}/>  
                </Switch>
            </div>
        )
    }
}
 
export default Main