import React, { useState } from 'react';
import { Paper, TextField } from '@material-ui/core';

interface IProps {
  onSubmit: (searchTerm: string) => void;
}

export default ({ onSubmit }: IProps) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => setSearchTerm(event.currentTarget.value);

  const onKeyPress = (event: any): void => {
    if (event.key === 'Enter') {
      onSubmit(searchTerm);
    }
  };

  return (
    <Paper elevation={6} style={{ padding: '1.5rem' }}>
      <TextField fullWidth label="Search..." value={searchTerm} onChange={handleChange} onKeyPress={onKeyPress} />
    </Paper>
  );
};
