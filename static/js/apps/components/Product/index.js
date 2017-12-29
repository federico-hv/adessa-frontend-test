import React, { Component } from 'react';
import Button from './Button';
import CardContainer from './CardContainer';
import ItemDataRow from './ItemDataRow';
import ImageContainer from './ImageContainer';

const Product = ({
  imageURL,
  name,
  id,
  price,
  buttonMsg,
  action
}) => (
  <CardContainer>
    <ImageContainer>
      <img src={imageURL} />
    </ImageContainer>
    <div>
      <ItemDataRow>
        {name}
      </ItemDataRow>
      <ItemDataRow>
        {price}
      </ItemDataRow>
      <ItemDataRow button={true}>
        <Button onClick={action}>
          { buttonMsg }
        </Button>
      </ItemDataRow>
    </div>
  </CardContainer>
);


export default Product;