import React from 'react';
import { Button, Typography } from '@mui/material';

const FileUploader = ({ onFileSelect }) => {
  const handleFileChange = (e) => {
    onFileSelect(e.target.files[0]);
  };

  return (
    <div>
      <Typography variant="h6">Загрузите файл</Typography>
      <input
        accept=".docx,.pdf"
        style={{ display: 'none' }}
        id="upload-file"
        type="file"
        onChange={handleFileChange}
      />
      <label htmlFor="upload-file">
        <Button variant="contained" component="span">
          Выбрать файл
        </Button>
      </label>
    </div>
  );
};

export default FileUploader;
