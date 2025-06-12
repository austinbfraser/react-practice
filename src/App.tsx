import './App.css';
import { useState } from 'react';
import Form from './components/Form';
import TicketScreen from './components/TicketScreen';
import CodingConfLogo from './components/CodingConfLogo';


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
  const [validSubmission, setValidSubmission] = useState<boolean>(false);

  return (
    <div className="appContainer">
      <div>
        <CodingConfLogo />
      </div>
      {!validSubmission ? 
        <Form 
          file={file}
          setFile={setFile}
          errors={errors}
          setErrors={setErrors}
          fullName={fullName}
          setFullName={setFullName}
          email={email}
          setEmail={setEmail}
          github={github}
          setGithub={setGithub}
          validSubmission={validSubmission}
          setValidSubmission={setValidSubmission}
        /> 
        : <TicketScreen 
            file={file}
            errors={errors}
            fullName={fullName}
            email={email}
            github={github}
        />}
    </div>
  );
}

export default App;
