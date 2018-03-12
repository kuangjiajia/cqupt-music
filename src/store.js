import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import { reducer } from './reducers.js'

// redux chrome插件
const reduxDevtools =  window.devToolsExtension ? window.devToolsExtension() : f=> f
const store = createStore(combineReducers(reducer),compose(
    applyMiddleware(thunk),
    reduxDevtools
))

// const store = createStore(combineReducers(reducer))

console.log(store.getState())
//
export { store }