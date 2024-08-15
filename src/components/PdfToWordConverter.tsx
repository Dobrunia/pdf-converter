import React, { useState } from 'react';
import { Button } from '@mui/material';
import FileUploader from './FileUploader';
import { convertPdfToWord } from '../utils/fileConversion';

const PdfToWordConverter = () => {
  const [file, setFile] = useState(null);

  const handleFileSelect = (selectedFile) => {
    setFile(selectedFile);
  };

  const handleConvert = () => {
    if (file) {
      convertPdfToWord(file);
    }
  };

  return (
    <div>
      <FileUploader onFileSelect={handleFileSelect} />
      <Button variant="contained" onClick={handleConvert} disabled={!file}>
        Конвертировать в Word
      </Button>
    </div>
  );
};

export default PdfToWordConverter;
