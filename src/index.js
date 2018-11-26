import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Login from './containers/login'
import Main from './containers/main'
import Register from './containers/register'

import {Provider} from 'react-redux'
import store from './redux'

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path='/login' exact component={Login}/>
                <Route path='/register' exact component={Register}/>
                <Route component={Main} />
            </Switch>
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));

