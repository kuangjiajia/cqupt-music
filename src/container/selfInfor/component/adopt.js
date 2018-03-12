import React, { Component } from 'react'
import SelfInforRouter from '../../../component/main/routes/selfInforRouter.js'
import SelfPages from '../../../component/main/routes/selfPages.js'
import Item from '../../../component/main/routes/item.js'
import { connect } from 'react-redux'
import '../less/common.less'
import '../less/itemsStyle.less'

class Adopt extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
        const adoptDOM = this.refs.adoptDOM
        adoptDOM.addEventListener("scroll",() => {
            let marginBot = adoptDOM.scrollHeight - adoptDOM.scrollTop-  adoptDOM.clientHeight
            console.log(marginBot)
            if(marginBot <= 0) {
                //请求数据
            }
        })
        console.log(adoptDOM)
    }
    render() { 
        const { Music } = this.props
        console.log(Music)
        return (
            <div className="adopt-published-common-style">
                <SelfPages />
                <SelfInforRouter />
                <div className="items-style" ref="adoptDOM">  
                    {
                        Music.map((item,index) => {
                            return <Item musicName={item.musicName} singer={item.singer} toName={item.toName} content={item.content} who={item.who} date={item.date}/>
                        })
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state,ownProps) => {
    return {
        Music: state.Music
    }
}

export default connect(mapStateToProps)(Adopt)