import React, { ChangeEvent } from 'react';

import { TargetChangeValue } from '../forms.interfaces';

import {
  FormInputContainer,
  FormInputLabel,
  GroupContainer,
} from './form-input.component.styles';

interface Props {
  handleChange: (event: any) => void;
  name: string;
  type: string;
  label: string;
  value: string;
  required: boolean;
}

const FormInput = ({ handleChange, label, ...otherProps }: Props) => (
  <GroupContainer>
    <FormInputContainer onChange={handleChange} {...otherProps} />
    {label ? (
      <FormInputLabel
        className={`${
          otherProps.value.length ? 'shrink' : ''
        } form-input-label`}
      >
        {label}
      </FormInputLabel>
    ) : null}
  </GroupContainer>
);

export default FormInput;
