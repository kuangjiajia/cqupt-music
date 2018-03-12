import React, { Component } from 'react'
import Adopt from './component/adopt.js'
import Published from './component/published.js'
import { Switch, Route} from 'react-router-dom'
class SelfInfor extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Switch>
                    <Route path="/selfInfor/published" component={Published} />
                    <Route path="/selfInfor/adopt" component={Adopt} />
                </Switch>
            </div>
        )
    }
}
 
export default SelfInfor