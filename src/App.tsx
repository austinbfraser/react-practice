import './App.css';
import { useState } from 'react';
import CodingConfLogo from './components/CodingConfLogo';
import UploadAvatar from './components/UploadAvatar';
import InfoIcon from './components/InfoIcon';

export interface ErrorsInterface {
  image?: string;
  fullName?: string;
  email?: string;
  github?: string;
  imageSize?: string;
  imageType?: string;
}

function App() {
  const [errors, setErrors] = useState<ErrorsInterface>({});
  const [file, setFile] = useState<File | null>(null);
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [github, setGithub] = useState<string>('');

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
      setFile(null);
      setFullName('');
      setEmail('');
      setGithub('');
    }
  };

  return (
    <div className="appContainer">
      <div>
        <CodingConfLogo />
      </div>
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
          <div className="error">
            <InfoIcon />
            <span className="errorText">{errors.image}</span>
          </div>
        )}
        {errors.imageSize && (
          <div className="error">
            <InfoIcon />
            <span className="errorText">{errors.imageSize}</span>
          </div>
        )}
        {errors.imageType && (
          <div className="error">
            <InfoIcon />
            <span className="errorText">{errors.imageType}</span>
          </div>
        )}

        {!errors.image && !errors.imageSize && !errors.imageType && (
          <p className="uploadRequirements">
            Upload your photo (JPG or PNG, max size: 500KB).
          </p>
        )}

        <p>Full Name</p>
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
        ></input>
        {errors.fullName && (
          <div className="error">
            <InfoIcon />
            <span className="errorText">{errors.fullName}</span>
          </div>
        )}

        <p>Email Address</p>
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
        ></input>
        {errors.email && (
          <div className="error">
            <InfoIcon />
            <span className="errorText">{errors.email}</span>
          </div>
        )}

        <p>GitHub Username</p>
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
        ></input>
        {errors.github && (
          <div className="error">
            <InfoIcon />
            <span className="errorText">{errors.github}</span>
          </div>
        )}

        <button className="generateButton" type="submit">
          Generate My Ticket
        </button>
      </form>
    </div>
  );
}

export default App;
