import React from 'react';

import {
  CollectionItemsContainer,
  CollectionPageContainer,
  CollectionTitle,
} from './collection.styles';
import { selectCollection } from '../../redux/shop/shop.selectors';
import { createStructuredSelector } from 'reselect';

export const CollectionPage = ({ collection }: any) => {
  // const stateSelector = createStructuredSelector({
  //   collection: selectCollection(),
  // });

  const { title, items } = collection;

  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};
