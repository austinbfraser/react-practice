import { useState } from 'react';
import type { ErrorsInterface } from '../App';

export default function useForm(
  errors: ErrorsInterface,
  setErrors: (input: ErrorsInterface) => void
) {
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [github, setGithub] = useState<string>('');

  const createChangeHandler = (
    setValue: (val: string) => void,
    fieldName: keyof ErrorsInterface
  ) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      if (errors[fieldName]) {
        const newErrors = { ...errors };
        delete newErrors[fieldName];
        setErrors(newErrors);
      }
    };
  };

  const handleChangeFullName = createChangeHandler(setFullName, 'fullName');
  const handleChangeEmail = createChangeHandler(setEmail, 'email');
  const handleChangeGithub = createChangeHandler(setGithub, 'github');

  return {
    fullName: { value: fullName, onChange: handleChangeFullName },
    email: { value: email, onChange: handleChangeEmail },
    github: { value: github, onChange: handleChangeGithub },
  };
}
