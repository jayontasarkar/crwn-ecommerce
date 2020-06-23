import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './collection-overview.scss';
import { selectShopCollection } from '../../store/shop/selector';
import CollectionPreview from '../collection-preview/collection-preview';

const CollectionOverview = ({ collection }) => {
  return (
    <div className="collection-overview">
      {collection.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collection: selectShopCollection,
});

export default connect(mapStateToProps)(CollectionOverview);
