import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Root from './router/routes'
import { store } from './store.js'
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {  }
    }
    render() { 
        return ( 
            <Provider store={store}>
                <BrowserRouter>
                    <Root />
                </BrowserRouter>
            </ Provider>
        )
    }
}

export default App