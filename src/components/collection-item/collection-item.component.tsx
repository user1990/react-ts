import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import CustomButton from '../custom-button/custom-button.component';
import {
  BackgroundImage,
  CollectionFooterContainer,
  CollectionItemContainer,
  NameContainer,
  PriceContainer,
} from './collection-item.component.styles';

import { addItemAction } from '../../redux/cart/cart.actions';
import { Item } from '../../redux/cart/cart.interfaces';

interface Props {
  item: Item;
  addItem: (item: Item) => void;
}

const CollectionItem = ({ item, addItem }: Props) => {
  const { name, price, imageUrl } = item;

  return (
    <CollectionItemContainer>
      <BackgroundImage className="image" imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addItem: (item: Item) => dispatch(addItemAction(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
