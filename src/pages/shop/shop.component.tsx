import React from 'react';
import { Route } from 'react-router';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import { CollectionPage } from '../collection/collection.component';
import { ShopPageContainer } from './shop.styles';

interface ShopProps {
  match: {
    path: string | string[];
  };
}

const ShopPage = ({ match }: ShopProps) => (
  <ShopPageContainer>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </ShopPageContainer>
);

export default ShopPage;
