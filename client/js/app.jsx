import React from 'react'
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Route, Router, IndexRoute, browserHistory, applyRouterMiddleware } from 'react-router';
import AppContainer from './containers/AppContainer';
import reducers from '../js/reducers';
import initialState from './initialState';
const store = createStore(reducers, initialState(), applyMiddleware(thunk));
const rootEl = document.getElementById('app');

const renderApp = () => {
  return (
      <Provider store={ store }>
        <Router history={ browserHistory }>
          <Route path="/" component={ AppContainer }>
          </Route>
        </Router>
      </Provider>
  )
}

render(renderApp(), rootEl);
