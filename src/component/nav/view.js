import React, { Component } from 'react'
import './less/nav.less'
import { itemList } from './config.js'
import { Switch ,Redirect , withRouter } from 'react-router-dom'
import NavItem from './navItem.js'
class Nav extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        console.log(this.props)
        return (  
            <div className="nav-style">
                    {
                        itemList.map((item,index) => { 
                                return <NavItem url={item.url} 
                                src0={item.src0} 
                                src1={item.src1}
                                character={item.character} 
                                color0={item.color0}
                                color1={item.src1}
                                key={item.index}/>
                        })
                    }
            </div>
        )
    }
}
 
export default withRouter(Nav)