import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../less/indexRouter.less'
import '../less/routeItem.less'
import { withRouter } from 'react-router-dom'

class RouteItem extends Component {
    render() { 
        const nowUrl = this.props.location.pathname
        const { toUrl, page} = this.props
        const color = nowUrl===toUrl ? "white" : "black" 
        const backgroundColor = nowUrl===toUrl ? "#afd776" : "white" 
        return(
            <Link style={{color,backgroundColor}} to={toUrl} className="link-styles">{page}</Link>
        )
    }
}
 
export default withRouter(RouteItem)