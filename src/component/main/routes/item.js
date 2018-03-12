import React, { Component } from 'react'
import '../less/item.less'
class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const { musicName, singer, toName, content, who, date} = this.props
        return (
            <div className="item-style">
                <h2>
                    <div className="user-icon">
                        <img src="" />
                    </div>
                    <div className="musicion-music">
                        <i></i>&nbsp;
                        <span>&nbsp;{musicName}</span>
                        <span>&nbsp;&nbsp;{singer}</span>
                    </div>
                </h2>
                <h3>To {toName}</h3>
                <div className="content">
                    {content}
                </div>
                <div className="from-who clearfix">
                    <div className="spot"></div>
                    <div className="spot-text"></div>
                    <div className="benefactor">{who ? who : "匡俊嘉"}</div>
                    <div className="from">from&nbsp;&nbsp;</div>
                </div>
                <div>
                    <div className="date">{date}</div>
                </div>
            </div>
        )
    }
}
 
export default Item;