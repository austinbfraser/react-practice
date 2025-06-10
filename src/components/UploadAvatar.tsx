import { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';
import type { ErrorsInterface } from '../App';

const fileTypes = ['jpg', 'png'];
interface UploadAvatarProps {
  hasImage: boolean;
  setHasImage: (input: boolean) => void;
  errors: ErrorsInterface;
  setErrors: (input: ErrorsInterface) => void;
}

const UploadAvatar = ({
  hasImage,
  setHasImage,
  errors,
  setErrors,
}: UploadAvatarProps) => {
  const [file, setFile] = useState(null);

  const handleChange = (file) => {
    setFile(file);
    if (!hasImage) setHasImage(!hasImage);
    if (errors.image) {
      const newErrors = {...errors};
      delete newErrors.image;
      setErrors(newErrors);
    }
  };

  const handleTypeError = (err: string) => {
    console.log(err);
    if (!hasImage) {
      setErrors({
        ...errors,
        imageType: 'File must be either JPG or PNG.',
      });
    }
    else alert('File must be either JPG or PNG.')
  };

  const handleSizeError = (err: string) => {
    console.log(err);
    if (!hasImage) {
      setErrors({
        ...errors,
        imageSize: 'File too large.  Please upload a photo under 500KB.',
      });
    }
    else alert('File too large.  Please upload a photo under 500KB.')
  };

  return (
    <>
      <FileUploader
        multiple={true}
        handleChange={handleChange}
        types={fileTypes}
        uploadedLabel={'Uploaded successfully'}
        minSize={0.001}
        maxSize={0.5}
        onSizeError={handleSizeError}
        onTypeError={handleTypeError}
        onDrop={() => {
          if (errors.imageSize && errors.imageType) {
            const newErrors = {...errors};
            delete newErrors.imageSize;
            delete newErrors.imageType;
            setErrors(newErrors);
          }
          else if (errors.imageType) {
            const newErrors = {...errors};
            delete newErrors.imageType;
            setErrors(newErrors);
          }
          else if (errors.imageSize) {
            const newErrors = {...errors};
            delete newErrors.imageSize;
            setErrors(newErrors);
          }
          console.log('onDrop fired.');
        }}
        onSelect={() => {
          if (errors.imageSize && errors.imageType) {
            const newErrors = {...errors};
            delete newErrors.imageSize;
            delete newErrors.imageType;
            setErrors(newErrors);
          }
          else if (errors.imageType) {
            const newErrors = {...errors};
            delete newErrors.imageType;
            setErrors(newErrors);
          }
          else if (errors.imageSize) {
            const newErrors = {...errors};
            delete newErrors.imageSize;
            setErrors(newErrors);
          }
          console.log('onSelect fired.');
        }}
        children={
          <div className="uploadAvatar">
            <p className="fileStatus">
              {file ? `File name: ${file[0].name}` : 'no files uploaded yet'}
            </p>
            <div className="uploadSquare">
              <img
                className="uploadGraphic"
                src="assets/images/icon-upload.svg"
              />
            </div>
            <p className="uploadBlurb">Drag and drop or click to upload</p>
          </div>
        }
      />
    </>
  );
};

export default UploadAvatar;
