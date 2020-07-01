import React from 'react';

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

const FormInput = ({ handleChange, label, ...props }: Props) => (
  <GroupContainer>
    <FormInputContainer onChange={handleChange} {...props} />
    {label ? (
      <FormInputLabel className={`${props.value.length ? 'shrink' : ''}`}>
        {label}
      </FormInputLabel>
    ) : null}
  </GroupContainer>
);

export default FormInput;
