import React, { Component } from 'react';
import { Provider } from 'react-redux'
import ShoppingCart from './ShoppingCart';
import ProductList from './ProductList';
import configureStore from '../store';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <div>
      <ShoppingCart />
      <ProductList />
    </div>
  </Provider>
);

export default App;