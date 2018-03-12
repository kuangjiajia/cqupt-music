import React, { Component } from 'react'
import '../less/selfInforRouter.less'
import { Link } from 'react-router-dom'
import RouteItem from './routeItem.js'
const config = [{
    page: "已发布",
    toUrl:"/selfInfor/published",
    index: 0
},{
    page:'已采纳',
    toUrl:"/selfInfor/adopt",
    index: 1
}]
class SelfInforRouter extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (
            <div className="selfInfor-router-style">
                {
                    config.map((item,index) => {
                        return <RouteItem   
                                toUrl={item.toUrl} 
                                page={item.page} 
                                key={item.toUrl} 
                                />
                    })
                }
            </div>
        )
    }
}
 
export default SelfInforRouter