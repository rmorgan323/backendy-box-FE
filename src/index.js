import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './Reducers';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import './index.css';
import App from './Components/App/App';
import registerServiceWorker from './registerServiceWorker';
import './normalize.css';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, devTools, applyMiddleware(thunk));
const app = (
  <Provider store={store} >
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
