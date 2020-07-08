import React from 'react';
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollections } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../collection-preview/collection-preview';
import { CollectionsOverviewContainer } from './collections-overview.styles';

interface Props {}

const stateSelector = createStructuredSelector({
  collections: selectCollections,
});

const CollectionsOverview = (props: Props) => {
  const { collections } = useSelector(stateSelector);

  return collections.map(({ id, ...otherProps }) => (
    <CollectionsOverviewContainer>
      <CollectionPreview key={id} {...otherProps} title={'title'} />
    </CollectionsOverviewContainer>
  ));
};

export default CollectionsOverview;
