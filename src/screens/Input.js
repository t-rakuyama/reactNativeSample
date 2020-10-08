import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { store } from '../modules/memo'
import InputForm from '../components/InputForm'

/**
 * input画面
 */
export default class Input extends Component {
  render() {
    return (
      <Provider store={store}>
        <InputForm />
      </Provider>
    )
  }
}
