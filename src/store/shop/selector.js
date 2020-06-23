import { createSelector } from 'reselect';

const shopData = (state) => state.shop;

export const selectShopCollection = createSelector([shopData], (shop) => shop);

export const selectCollectionByRouteName = (collectionId) =>
  createSelector([selectShopCollection], (collection) =>
    collection.find((c) => c.routeName === collectionId)
  );
