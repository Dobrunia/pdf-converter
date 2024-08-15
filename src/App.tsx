import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import WordToPdfConverter from './components/WordToPdfConverter';
import PdfToWordConverter from './components/PdfToWordConverter';
import PdfEditor from './components/PdfEditor';

function App() {
  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom>
        Конвертер и Редактор PDF
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <WordToPdfConverter />
        </Grid>
        <Grid item xs={12} md={4}>
          <PdfToWordConverter />
        </Grid>
        <Grid item xs={12} md={4}>
          <PdfEditor />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
