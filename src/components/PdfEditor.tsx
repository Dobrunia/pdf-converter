import React, { useState } from 'react';
import { Button } from '@mui/material';
import FileUploader from './FileUploader';

const PdfEditor = () => {
  const [file, setFile] = useState(null);

  const handleFileSelect = (selectedFile) => {
    setFile(selectedFile);
  };

  const handleEditAndDownload = () => {
    if (file) {
      // Ваша логика для редактирования PDF файла
      console.log('Редактирование файла');
      // Логика для скачивания новой версии PDF
    }
  };

  return (
    <div>
      <FileUploader onFileSelect={handleFileSelect} />
      <Button variant="contained" onClick={handleEditAndDownload} disabled={!file}>
        Редактировать и скачать
      </Button>
    </div>
  );
};

export default PdfEditor;
