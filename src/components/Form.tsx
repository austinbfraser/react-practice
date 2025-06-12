// import React from 'react';
import type { ErrorsInterface } from '../App';
import UploadAvatar from './UploadAvatar';
import InfoIcon from './InfoIcon';

interface FormProps {
  file: File | null;
  setFile: (file: File | null) => void;
  errors: ErrorsInterface;
  setErrors: (input: ErrorsInterface) => void;
  fullName: string;
  setFullName: (input: string) => void;
  email: string;
  setEmail: (input: string) => void;
  github: string;
  setGithub: (input: string) => void;
  validSubmission: boolean;
  setValidSubmission: (input: boolean) => void;
}

const Form = ({ 
  file, 
  setFile, 
  errors, 
  setErrors, 
  fullName,
  setFullName,
  email,
  setEmail,
  github,
  setGithub,
  validSubmission,
  setValidSubmission
}: FormProps) => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent actual form submission
    const errors: ErrorsInterface = {};
    if (file === null) errors.image = 'Avatar is required.';
    if (!fullName.trim()) errors.fullName = 'Full name is required.';
    if (!email.trim()) errors.email = 'Email is required.';
    if (email.trim() && !email.includes('@'))
      errors.email = 'Enter a valid email address.';
    if (!github.trim()) errors.github = 'GitHub username is required.';

    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      // All good: proceed with form logic
      console.log('Form is valid! Submitting...');
      // setFile(null);
      // setFullName('');
      // setEmail('');
      // setGithub('');
      setValidSubmission(!validSubmission);
    }
  };

  return (
    <>
    <h1>Your Journey to Coding Conf 2025 Starts Here!</h1>
      <p className="blurb">
        Secure your spot at next year's biggest coding conference.
      </p>
      <form className="formContainer" onSubmit={handleSubmit}>
        <p>Upload Avatar</p>
        <UploadAvatar
          file={file}
          setFile={setFile}
          errors={errors}
          setErrors={setErrors}
        />
        {errors.image && (
          <div className="error" id="error-image">
            <InfoIcon />
            <span className="errorText">{errors.image}</span>
          </div>
        )}
        {errors.imageSize && (
          <div className="error" id="error-imageSize">
            <InfoIcon />
            <span className="errorText">{errors.imageSize}</span>
          </div>
        )}
        {errors.imageType && (
          <div className="error" id="error-imageType">
            <InfoIcon />
            <span className="errorText">{errors.imageType}</span>
          </div>
        )}

        {!errors.image && !errors.imageSize && !errors.imageType && (
          <p className="uploadRequirements" id="hint-uploadAvatar">
            Upload your photo (JPG or PNG, max size: 500KB).
          </p>
        )}

        <label className="formLabel" htmlFor="textInput-fullName">Full Name</label>
        <input
          className="textInput"
          id="textInput-fullName"
          type="text"
          value={fullName}
          onChange={(e) => {
            setFullName(e.target.value);
            if (errors.fullName) {
              const newErrors = { ...errors };
              delete newErrors.fullName;
              setErrors(newErrors);
            }
          }}
          aria-describedby="error-fullName"
        ></input>
        {errors.fullName && (
          <div className="error" id="error-fullName">
            <InfoIcon />
            <span className="errorText">{errors.fullName}</span>
          </div>
        )}

        <label className="formLabel" htmlFor="textInput-email">Email Address</label>
        <input
          className="textInput"
          id="textInput-email"
          placeholder="example@email.com"
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (errors.email) {
              const newErrors = { ...errors };
              delete newErrors.email;
              setErrors(newErrors);
            }
          }}
          aria-describedby="error-email"
        ></input>
        {errors.email && (
          <div className="error" id="error-email">
            <InfoIcon />
            <span className="errorText">{errors.email}</span>
          </div>
        )}

        <label className="formLabel" htmlFor="textInput-github">GitHub Username</label>
        <input
          className="textInput"
          id="textInput-github"
          placeholder="@yourusername"
          onChange={(e) => {
            setGithub(e.target.value);
            if (errors.github) {
              const newErrors = {...errors};
              delete newErrors.github;
              setErrors(newErrors);
            }
          }}
          type="text"
          value={github}
          aria-describedby="error-github"
        ></input>
        {errors.github && (
          <div className="error" id="error-github">
            <InfoIcon />
            <span className="errorText">{errors.github}</span>
          </div>
        )}

        <button className="generateButton" type="submit">
          Generate My Ticket
        </button>
      </form>
      </>
  )
}

export default Form