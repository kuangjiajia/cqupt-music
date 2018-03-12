import React, { Component } from 'react'
import './less/nav.less'
import { itemList } from './config.js'
import NavItem from './navItem.js'
class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "select": 1
        }
    }
    onClickToSelected(index) {
        this.setState({
            "select": index
        })
    }
    render() { 
        return (  
            <div className="nav-style">
                {
                    itemList.map((item,index) => { 
                        const nowIndex = this.state.select
                        const itemIndex = item.index
                        if(nowIndex === itemIndex) {
                            return <NavItem url={item.url} 
                            src={item.src1} 
                            character={item.character} 
                            index={item.index} 
                            onClickToSelected={this.onClickToSelected.bind(this)} 
                            color={item.color1}
                            key={item.index}/>
                        }else{
                            return <NavItem url={item.url} 
                            src={item.src0} 
                            character={item.character} 
                            index={item.index} 
                            color={item.color0}
                            onClickToSelected={this.onClickToSelected.bind(this)} 
                            key={item.index}/>
                        }
                    })
                }
            </div>
        )
    }
}
 
export default Nav