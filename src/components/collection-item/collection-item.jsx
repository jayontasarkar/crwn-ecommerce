import React from 'react';
import './collection-item.scss';
import CustomButton from '../custom-button/custom-button';
import { connect } from 'react-redux';
import { addToCart } from '../../store/cart/actions';

const CollectionItem = ({ item, addToCart }) => {
  const { imageUrl, name, price } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton classes="inverted" onClick={() => addToCart(item)}>
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addToCart: (item) => dispatch(addToCart(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
