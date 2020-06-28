import React, { FormEvent, useState } from 'react';

import { signInWithGoogle } from '../../../firebase/firebase.utils';
import { CustomButton } from '../../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import { TargetChangeValue } from '../forms.interfaces';
import {
  SignInContainer,
  SignInTitle,
  SingInButtonsBar,
} from './sign-in.styles';

interface SignInFormValues {
  email: string;
  password: string;
}

const SignIn = () => {
  const [formValues, setFormValues] = useState<SignInFormValues>(
    {} as SignInFormValues,
  );

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    setFormValues({ email: '', password: '' });
  };

  const handleChange = (event: TargetChangeValue) => {
    const { value, name } = event.target as HTMLInputElement;
    const newFormValues = { [name]: value } as Pick<
      SignInFormValues,
      keyof SignInFormValues
    >;

    setFormValues(newFormValues);
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>
      newFormValues
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          value={formValues.email}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={formValues.password}
          handleChange={handleChange}
          label="password"
          required
        />
        <SingInButtonsBar>
          <CustomButton type="submit"> Sign in </CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </SingInButtonsBar>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
