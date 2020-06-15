import React, { ChangeEvent } from 'react';

import styled from 'styled-components';

interface Props {
  placeholder: string;
  onSearchChange: (event: ChangeEvent) => void;
}

const Input = styled.input`
  -webkit-appearance: none;
  border: none;
  padding: 10px;
  width: 150px;
  line-height: 30px;
  margin-bottom: 30px;
`;

export const SearchBox = ({ placeholder, onSearchChange }: Props) => (
  <Input type="search" placeholder={placeholder} onChange={onSearchChange} />
);
