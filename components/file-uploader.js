import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import styles from '@styles/file-uploader.module.scss';
import { classNames } from '@utls/common';
const FileUploader = ({ getFiles, className, filesList }) => {
  const onDrop = useCallback((acceptedFiles) => {
    getFiles(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className={classNames(styles.container, className)}>
      <input {...getInputProps()} />
      <p>
        <b>Select a document</b>
      </p>
      {isDragActive ? <p>Drop the files here ...</p> : <p>Drag and drop some files here, or click to select files</p>}
    </div>
  );
};
export default FileUploader;
