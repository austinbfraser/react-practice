import { useState, useEffect, useRef } from 'react';
import { FileUploader } from 'react-drag-drop-files';
import type { ErrorsInterface } from '../App';

const fileTypes = ['jpg', 'png'];

interface UploadAvatarProps {
  errors: ErrorsInterface;
  setErrors: (input: ErrorsInterface) => void;
  file: File | null;
  setFile: (file: File | null) => void;
}

const UploadAvatar = ({
  file,
  setFile,
  errors,
  setErrors,
}: UploadAvatarProps) => {

  const [previewUrl, setPreviewUrl] = useState<string | undefined>(undefined);

  const inputRef = useRef<HTMLLabelElement | null>(null);

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

  const handleChange = (file: File) => {
    setFile(file);
    if (errors.image) {
      const newErrors = { ...errors };
      delete newErrors.image;
      setErrors(newErrors);
    }
    console.log('file: ', file);
    console.log('handleChange fired');
  };

  const handleTypeError = (err: string) => {
    console.log(err);
    if (file === null) {
      setErrors({
        ...errors,
        imageType: 'File must be either JPG or PNG.',
      });
    } else alert('File must be either JPG or PNG.');
  };

  const handleSizeError = (err: string) => {
    console.log(err);
    if (file === null) {
      setErrors({
        ...errors,
        imageSize: 'File too large. Please upload a photo under 500KB.',
      });
    } else alert('File too large. Please upload a photo under 500KB.');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLLabelElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      inputRef.current?.click();
      // Simulate a click on the inputRef, which is designated as the uploadAvatar className
      console.log('handleKeyDown fired');
    }
  };

  const handleRemoveImage = (e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => {
    e.stopPropagation();
    setFile(null);
  }

  return (
    <>
      <FileUploader
        multiple={false}
        handleChange={handleChange}
        types={fileTypes}
        uploadedLabel={'Uploaded successfully'}
        minSize={0.001}
        maxSize={0.5}
        onSizeError={handleSizeError}
        onTypeError={handleTypeError}
        onDrop={() => {
          const newErrors = { ...errors };
          delete newErrors.imageSize;
          delete newErrors.imageType;
          setErrors(newErrors);
          console.log('onDrop fired.');
        }}
        onSelect={() => {
          const newErrors = { ...errors };
          delete newErrors.imageSize;
          delete newErrors.imageType;
          setErrors(newErrors);
          console.log('onSelect fired.');
        }}
      >
        <label
          className="uploadAvatar"
          tabIndex={0}
          role="button"
          aria-label="Upload your avatar.  Click or press Enter or Space to select a file."
          onKeyDown={handleKeyDown}
          ref={inputRef}
          aria-describedby={[
            errors.image ? 'error-image' : '',
            errors.imageSize ? 'error-imageSize' : '',
            errors.imageType ? 'error-imageType' : '',
            !errors.image && !errors.imageSize && !errors.imageType ? 'hint-uploadAvatar' : ''
          ].filter(Boolean).join(' ')}
        >
          <div className="uploadSquare">
            {!file ? <img
              className="uploadGraphic"
              src="assets/images/icon-upload.svg"
              alt="Upload icon"
            />
            : <img src={previewUrl} className="imagePreview"/>
            }
          </div>
          {!file ? <p className="uploadBlurb">Drag and drop or click to upload</p> 
          : <div>
            <button onClick={handleRemoveImage}>Remove Image</button>
            <button>Change Image</button>
            </div>}
        </label>
      </FileUploader>
    </>
  );
};

export default UploadAvatar;
