import React, { Component } from 'react'
import './less/navItem.less'
import { withRouter , Route , Link } from 'react-router-dom'
class NavItem extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        const { url,src1,character,color1,src0,color0 } = this.props
        const nowUrl = this.props.location.pathname
        const color = nowUrl === url ? color1 : color0
        const src = nowUrl === url ? src1 : src0    
        return ( 
            <Link to={url} className="link-style" >
                <img src={src} className="icon-style" alt="icon"/>
                <span className="span-style" style={{color}}>{character}</span>
            </Link>
        )
    }
}
 
export default withRouter(NavItem)