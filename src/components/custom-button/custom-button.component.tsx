import React from 'react';

import { CustomButtonContainer } from './custom-button.styles';

interface Props {
  children?: React.ReactNode;
  onClick?: () => void;
  inverted?: boolean;
  type?: string;
  isGoogleSignIn?: boolean;
}

export const CustomButton = ({ children, ...props }: Props) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;
