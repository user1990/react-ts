import React, { ChangeEvent } from 'react';

import styled from 'styled-components';

interface Props {
  placeholder: string;
  onSearchChange: (event: ChangeEvent) => void;
}

const Input = styled.input`
  width: 85vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
`;

export const SearchBox = ({ placeholder, onSearchChange }: Props) => (
  <Input type="search" placeholder={placeholder} onChange={onSearchChange} />
);
