import { useState } from 'react';
import type { ErrorsInterface } from '../App';

export default function useForm(errors: ErrorsInterface, setErrors: (input: ErrorsInterface) => void) {
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [github, setGithub] = useState<string>('');

  const handleChangeFullName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value);
    if (errors.fullName) {
      const newErrors = { ...errors };
      delete newErrors.fullName;
      setErrors(newErrors);
    }
  };
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (errors.email) {
      const newErrors = { ...errors };
      delete newErrors.email;
      setErrors(newErrors);
    }
  };
  const handleChangeGithub = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGithub(e.target.value);
    if (errors.github) {
      const newErrors = { ...errors };
      delete newErrors.github;
      setErrors(newErrors);
    }
  };

  return {
    fullName: {value: fullName, onChange: handleChangeFullName},
    email: {value: email, onChange: handleChangeEmail},
    github: {value: github, onChange: handleChangeGithub}
  }
}
