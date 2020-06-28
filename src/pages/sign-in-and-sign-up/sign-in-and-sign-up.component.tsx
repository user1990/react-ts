import React from 'react';

import SignIn from '../../components/forms/sign-in/sign-in.component';
import SignUp from '../../components/forms/sign-up/sign-up.component';
import { SignInSignUp } from './sign-in-and-sign-up.component.styles';

const SignInAndSignUpPage = () => (
  <SignInSignUp>
    <SignIn />
    <SignUp />
  </SignInSignUp>
);

export default SignInAndSignUpPage;
