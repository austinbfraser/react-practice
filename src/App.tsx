import './App.css';
import { useState, useEffect } from 'react';
import Form from './components/Form';
import TicketScreen from './components/TicketScreen';
import CodingConfLogo from './components/CodingConfLogo';
import useForm from './hooks/useForm';

export interface ErrorsInterface {
  image?: string;
  fullName?: string;
  email?: string;
  github?: string;
  imageSize?: string;
  imageType?: string;
  [key: string]: string | undefined;
}

function App() {
  // const TEST = false;

  // const defaultFile: File | null = null;
  // let defaultFullName: string;
  // let defaultGithub: string;
  // let defaultEmail: string;
  // if (TEST) {
  //   defaultFullName = 'Austin Fraser';
  //   defaultEmail = 'austinbfraser@gmail.com';
  //   defaultGithub = '@austinbfraser';
  // } else {
  //   defaultFullName = '';
  //   defaultEmail = '';
  //   defaultGithub = '';
  // }

  const [errors, setErrors] = useState<ErrorsInterface>({});
  const [file, setFile] = useState<File | null>(null);
  const formTextProps = useForm( errors, setErrors);
  const [previewUrl, setPreviewUrl] = useState<string | undefined>(undefined);
  const [validSubmission, setValidSubmission] = useState<boolean>(false);

  useEffect(() => {
    if (!file) {
      setPreviewUrl(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(file);
    setPreviewUrl(objectUrl);

  /**
      This return statement below is a cleanup to prevent memory leak that can be caused by the 
      client hanging onto the image binary.

      When we use URL.createObjectURL, we're asking the browser to create and manage a reference to 
      a chunk of binary data (a Blob) in memory. This object is stored outside of the JavaScript heap, 
      inside the browser’s internal memory management system.

      The returned string (the blob: URL) is just a pointer to that binary blob. As long as that URL 
      exists and is accessible, the browser cannot garbage-collect the underlying file data, because 
      it thinks the app might still use it.
  */
  return () => {
      URL.revokeObjectURL(objectUrl);
    };
  }, [file]);

  return (
    <div className="appContainer">
      <div>
        <CodingConfLogo />
      </div>
      {!validSubmission ? (
        <Form
          file={file}
          setFile={setFile}
          errors={errors}
          setErrors={setErrors}
          formTextProps={formTextProps}
          previewUrl={previewUrl}
          setPreviewUrl={setPreviewUrl}
          validSubmission={validSubmission}
          setValidSubmission={setValidSubmission}
        />
      ) : (
        <TicketScreen
          file={file}
          errors={errors}
          formTextProps={formTextProps}
          previewUrl={previewUrl}
        />
      )}
    </div>
  );
}

export default App;
