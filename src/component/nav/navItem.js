import React, { Component } from 'react'
import './less/navItem.less'
import { Link } from 'react-router-dom'

class NavItem extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    onClickChangeColor() {
        this.props.onClickToSelected(this.props.index)
    }
    render() { 
        const {url,src,character,spanColor,color} = this.props
        return ( 
            <Link to={url} className="link-style" onClick={this.onClickChangeColor.bind(this)}>
                <img src={src} className="icon-style"/>
                <span className="span-style" style={{color}}>{character}</span>
            </Link>
        )
    }
}
 
export default NavItem