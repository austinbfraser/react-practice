import { useState } from 'react';
import type { ErrorsInterface } from '../App';

// interface UseFormProps {
//   field: string;
//   errors: ErrorsInterface;
//   setErrors: (input: ErrorsInterface) => void;
// }

export default function useForm(field: string, errors: ErrorsInterface, setErrors: (input: ErrorsInterface) => void) {
  const [value, setValue] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (errors[field]) {
      const newErrors = { ...errors };
      delete newErrors[field];
      setErrors(newErrors);
    }
  };

  return {
    value,
    onChange: handleChange
  }
}
