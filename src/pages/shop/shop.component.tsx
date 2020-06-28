import React, { useState } from 'react';

import CollectionPreview from '../../components/collection-preview/collection-preview';
import { SHOP_DATA } from './shop.data';

interface Props {
  collections: any[];
}

const ShopPage = (props: Props) => {
  const [collections, setCollections] = useState<any[]>(SHOP_DATA as any);

  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default ShopPage;
