import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeItem } from '../../actions/shoppingCart';
import accounting from 'accounting';
import Product from '../Product';
import Container from './Container';
import Total from './Total';
import ItemsContainer from './ItemsContainer';

const ShoppingCart = ({
  total,
  availableItems,
  cartItems, 
  removeItem
}) => (
  <Container>
    <Total>Total: {accounting.formatMoney(total)}</Total>
    <ItemsContainer>
      {
        cartItems.map((item, i) => {
          const cartItem = availableItems.find(el => el.id === item.id);
          return (
            <Product {...cartItem} key={i} action={()=>{ removeItem(item.key, item.price); }} buttonMsg="Remove from Cart"/>
          )
        })
      }
    </ItemsContainer>
  </Container>
);


const mapStateToProps = (state) => ({
  availableItems: state.productList.items,
  cartItems: state.shoppingCart.items,
  total: state.shoppingCart.total
});
  
const mapDispatchToProps = (dispatch) => ({
  removeItem(key, price){
    dispatch(removeItem(key, price));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);