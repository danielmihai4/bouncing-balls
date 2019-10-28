import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Animation from './components/Animation';
import store from './store/store';

const jsx = (
    <Provider store = {store}>
        <Animation />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));