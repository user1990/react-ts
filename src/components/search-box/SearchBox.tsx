import React, { ChangeEvent } from 'react';

import styled from 'styled-components';

interface Props {
  onSearchChange: (event: ChangeEvent) => void;
}

const Input = styled.input`
  width: 85vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
`;

export const SearchBox = (props: Props) => (
  <Input
    type="search"
    placeholder="search monsters"
    onChange={props.onSearchChange}
  />
);
