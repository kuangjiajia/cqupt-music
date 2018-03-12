import React, { Component } from 'react'
import '../less/indexRouter.less'
import { Link } from 'react-router-dom'
import RouteItem from './routeItem.js'
class IndexRouter extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (
            <div className="placeholder">
                <div className="index-router-style">
                    <RouteItem page='最新动态' toUrl="/index/newest" />
                    <RouteItem page='往期回顾' toUrl="/index/previous" />
                </div>
            </div>
        )
    }
}
 
export default IndexRouter