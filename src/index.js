import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import loginPage from './reducers/reducer'
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

var store = createStore(loginPage)

// ReactDOM.render(<App />, document.getElementById('root'));
render (
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
)
serviceWorker.unregister();
