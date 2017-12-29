import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import mainReducer from './reducers';
import persistState from 'redux-localstorage'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {

  const middlewares = [thunk];

  if(process.env.NODE_ENV !== 'production'){
    middlewares.push(logger); //Logger is configurable
  }

  //Remember to add persistedState before the Enhancer if available
  return createStore(
    mainReducer,
    composeEnhancers(
      applyMiddleware(...middlewares),
      persistState(null, 'state')
    ) //returns an Enhancer //applyMiddleware accepts positional arguments
  );

};


export default configureStore;