import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../configureStore'
// import AsyncApp from './AsyncApp'
import Content from './Content/Content'
const store = configureStore();
export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Content />
      </Provider>
    )
  }
}