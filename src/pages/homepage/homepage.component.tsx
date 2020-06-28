import React from 'react';
import styled from 'styled-components';

import Directory from '../../components/directory/directory.component';

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
`;

const HomePage = () => (
  <HomePageContainer>
    <Directory title="title" items={[]} />
  </HomePageContainer>
);

export default HomePage;
