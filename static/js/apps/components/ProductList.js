import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProductList extends Component {
  componentDidMount(){
    
  }

  render() {
    return (
      <div>
        PRODUCTLIST!
      </div>
    );
  }
}


const mapStateToProps = (state) => {

};

const mapDispatchToProps = (dispatch) => {

}


export default connect(mapStateToProps, mapDispatchToProps)(ProductList);


