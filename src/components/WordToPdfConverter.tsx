import React, { useState } from 'react';
import { Button } from '@mui/material';
import FileUploader from './FileUploader';
import { convertWordToPdf } from '../utils/fileConversion';

const WordToPdfConverter = () => {
  const [file, setFile] = useState(null);

  const handleFileSelect = (selectedFile) => {
    setFile(selectedFile);
  };

  const handleConvert = () => {
    if (file) {
      convertWordToPdf(file);
    }
  };

  return (
    <div>
      <FileUploader onFileSelect={handleFileSelect} />
      <Button variant="contained" onClick={handleConvert} disabled={!file}>
        Конвертировать в PDF
      </Button>
    </div>
  );
};

export default WordToPdfConverter;
