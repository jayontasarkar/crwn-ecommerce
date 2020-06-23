import React from 'react';
import './collection-preview.scss';
import CollectionItem from '../collection-item/collection-item';
import { withRouter } from 'react-router-dom';

const CollectionPreview = ({ title, routeName, items, match, history }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">
        <span onClick={() => history.push(`${match.path}/${routeName}`)}>
          {title.toUpperCase()}
        </span>
      </h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item, index) => (
            <CollectionItem key={index} item={item} />
          ))}
      </div>
    </div>
  );
};

export default withRouter(CollectionPreview);
