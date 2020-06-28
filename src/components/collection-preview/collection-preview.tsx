import React from 'react';
import styled from 'styled-components';

import { Data } from '../../common/interfaces';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const CollectionPreviewTitle = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
`;

const CollectionPreviewContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CollectionPreview = ({ title, items }: Data) => (
  <CollectionPreviewContainer>
    <CollectionPreviewTitle>{title.toUpperCase()}</CollectionPreviewTitle>
    <CollectionPreviewContent>
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))}
    </CollectionPreviewContent>
  </CollectionPreviewContainer>
);

export default CollectionPreview;
