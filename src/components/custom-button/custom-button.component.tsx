import React from 'react';

import { CustomButtonContainer } from './custom-button.styles';

export const CustomButton = ({ children, isGoogleSignIn, ...props }: any) => (
  <CustomButtonContainer
    className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
    {...props}
  >
    {children}
  </CustomButtonContainer>
);

export default CustomButton;
