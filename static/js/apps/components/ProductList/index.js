import React, { Component } from 'react';
import { requestItems, addItem } from '../../actions/productList';
import { connect } from 'react-redux';
import Product from '../Product';
import ProductListContainer from './ProductListContainer';

class ProductList extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.getItems();
  }

  render() {
    const { items, addItem } = this.props;
    return (
      <ProductListContainer>
        {
          items.map((item, i) => (
            <Product {...item} key={i} action={()=>{ addItem(item.id, item.price); }} buttonMsg="Add to Cart" />
          ))
        }
      </ProductListContainer>
    );
  }
}


const mapStateToProps = (state) => ({
  items: state.productList.items
});

const mapDispatchToProps = (dispatch) => ({
  getItems(){
    dispatch(requestItems());
  },
  addItem(id, price){
    dispatch(addItem(id, price));
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(ProductList);


