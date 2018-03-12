import React, { Component } from 'react'
import SelfInforRouter from '../../../component/main/routes/selfInforRouter.js'
import SelfPages from '../../../component/main/routes/selfPages.js'
import Item from '../../../component/main/routes/item.js'
import { connect } from 'react-redux'
import '../less/itemsStyle.less'
class Published extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const { Music } = this.props
        return (
            <div>
                <SelfPages />
                <SelfInforRouter />              
                <div className="items-style">  
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
 
const mapStateToProps = (state) => {
    return {
        Music: state.Music
    }
}

export default connect(mapStateToProps)(Published)