import React, { Component } from 'react'
import IndexLayout from './indexLayout.js'
import { connect } from 'react-redux'
import Item from '../../../component/main/routes/item.js'

class Newest extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const { Music } = this.props
        return (
            <div>
                <IndexLayout />
                <div>
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
 
export default connect(mapStateToProps)(Newest)