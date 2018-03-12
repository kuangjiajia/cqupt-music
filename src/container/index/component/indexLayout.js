import React, { Component } from 'react'
import '../less/index.less'
import IndexRouter from '../../../component/main/routes/indexRouter.js'

class IndexLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <IndexRouter />
            </div>
        )
    }
}
 
export default IndexLayout