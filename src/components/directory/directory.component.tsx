import React from 'react';
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selector';
import MenuItem from '../menu-item/menu-Item.component';
import { DirectoryMenuContainer } from './directory.styles';

const stateSelector = createStructuredSelector({
  sections: selectDirectorySections,
});

const Directory = () => {
  const { sections } = useSelector(stateSelector);

  return (
    <DirectoryMenuContainer>
      {sections.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </DirectoryMenuContainer>
  );
};

export default Directory;
