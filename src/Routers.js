import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { nativeHistory, Route, NativeRouter } from 'react-router-native'
import store from './state/store'

import LogIn from './containers/LogIn/LogIn'

class Routers extends Component {
  // <Route path='*' component={NotFoundView} />
  render() {
    return (
      <Provider store={store}>
        <NativeRouter history={nativeHistory}>
          <Route path="/" component={LogIn} />
        </NativeRouter>
      </Provider>
    );
  }
}

export default Routers;