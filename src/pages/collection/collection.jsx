import React from 'react';

import './collection.scss';
import CollectionItem from '../../components/collection-item/collection-item';
import { selectCollectionByRouteName } from '../../store/shop/selector';
import { connect } from 'react-redux';

const Collection = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item, idx) => (
          <CollectionItem key={idx} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  collection: selectCollectionByRouteName(props.match.params.collectionId)(
    state
  ),
});

export default connect(mapStateToProps)(Collection);
