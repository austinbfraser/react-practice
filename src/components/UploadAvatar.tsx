import { FileUploader } from 'react-drag-drop-files';
import type { ErrorsInterface } from '../App';

const fileTypes = ['jpg', 'png'];
interface UploadAvatarProps {
  errors: ErrorsInterface;
  setErrors: (input: ErrorsInterface) => void;
  file: File | null;
  setFile: (file: File) => void;
}

const UploadAvatar = ({
  file,
  setFile,
  errors,
  setErrors,
}: UploadAvatarProps) => {

  const handleChange = (file: File) => {
    setFile(file);
    if (errors.image) {
      const newErrors = {...errors};
      delete newErrors.image;
      setErrors(newErrors);
    }
    console.log('file: ', file);
  };

  const handleTypeError = (err: string) => {
    console.log(err);
    if (file === null) {
      setErrors({
        ...errors,
        imageType: 'File must be either JPG or PNG.',
      });
    }
    else alert('File must be either JPG or PNG.')
  };

  const handleSizeError = (err: string) => {
    console.log(err);
    if (file === null) {
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
        multiple={false}
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
          <div className="uploadAvatar" tabIndex={0}>
            <p className="fileStatus">
              {file ? `File name: ${file.name}` : 'no files uploaded yet'}
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
