import React from 'react';
import styled from 'styled-components';

import { Card } from '../card/card';
import { Monster } from '../../interfaces/monster.interface';

interface Props {
  monsters: Monster[];
}

const CardListContainer = styled.div`
  width: 85vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
`;

export const CardList = (props: Props) => (
  <CardListContainer>
    {props.monsters.map(monster => (
      <Card key={monster.id} monster={monster} />
    ))}
  </CardListContainer>
);
