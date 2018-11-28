import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'

import {BrowserRouter,Switch,Route} from 'react-router-dom'

import {Provider} from 'react-redux'
import reducers from "./reducer";
import './config'

import AuthRoute from './component/authroute'
import Login from './container/login'
import Register from './container/register'
const store = createStore(reducers,compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>

            <div>
                <AuthRoute/>
                <Route path='/login' component={Login}/>
                <Route path='/register' component={Register}/>

            </div>
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));

