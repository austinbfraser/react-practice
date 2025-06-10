import { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';

const fileTypes = ['jpg', 'png'];

const UploadAvatar = () => {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  return (
    <>
      <FileUploader
        multiple={true}
        handleChange={handleChange}
        types={fileTypes}
        uploadedLabel={'Uploaded successfully'}
        minSize={.001}
        maxSize={.5}
        children={
          <div className="uploadAvatar">
            <p>
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
      <p className="uploadRequirements">
        Upload your photo (JPG or PNG, max size: 500KB).
      </p>
    </>
  );
};

export default UploadAvatar;
