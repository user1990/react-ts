import React from 'react';
import styled from 'styled-components';

interface Props {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

const CollectionItemContainer = styled.div`
  width: 22%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
`;

const CollectionImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
`;

const CollectionFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;

  .name {
    width: 90%;
    margin-bottom: 15px;
  }

  .price {
    width: 10%;
  }
`;

const CollectionItem = ({ id, name, price, imageUrl }: Props) => (
  <CollectionItemContainer>
    <CollectionImage
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <CollectionFooter>
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </CollectionFooter>
  </CollectionItemContainer>
);

export default CollectionItem;
