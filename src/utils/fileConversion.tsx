import CloudConvert from 'cloudconvert';

const cloudConvert = new CloudConvert(import.meta.env.VITE_CLOUDCONVERT_KEY); // Замените на свой API ключ

export const convertWordToPdf = async (file) => {
  try {
    const job = await cloudConvert.jobs.create({
      tasks: {
        'import-my-file': {
          operation: 'import/upload',
        },
        'convert-my-file': {
          operation: 'convert',
          input: 'import-my-file',
          output_format: 'pdf',
        },
        'export-my-file': {
          operation: 'export/url',
          input: 'convert-my-file',
        },
      },
    });

    const uploadTask = job.tasks.filter(
      (task) => task.name === 'import-my-file',
    )[0];

    const form = new FormData();
    form.append('file', file);

    await fetch(uploadTask.result.form.url, {
      method: 'POST',
      body: form,
    });

    const exportTask = await cloudConvert.tasks.wait(
      job.tasks.filter((task) => task.name === 'export-my-file')[0].id,
    );

    const fileUrl = exportTask.result.files[0].url;
    console.log('Скачайте PDF файл по ссылке:', fileUrl);
  } catch (error) {
    console.error('Ошибка при конвертации Word в PDF:', error);
  }
};

export const convertPdfToWord = async (file) => {
    try {
      const job = await cloudConvert.jobs.create({
        tasks: {
          'import-my-file': {
            operation: 'import/upload'
          },
          'convert-my-file': {
            operation: 'convert',
            input: 'import-my-file',
            output_format: 'docx'
          },
          'export-my-file': {
            operation: 'export/url',
            input: 'convert-my-file'
          }
        }
      });
  
      const uploadTask = job.tasks.filter(task => task.name === 'import-my-file')[0];
  
      const form = new FormData();
      form.append('file', file);
  
      await fetch(uploadTask.result.form.url, {
        method: 'POST',
        body: form
      });
  
      const exportTask = await cloudConvert.tasks.wait(job.tasks.filter(task => task.name === 'export-my-file')[0].id);
  
      const fileUrl = exportTask.result.files[0].url;
      console.log('Скачайте Word файл по ссылке:', fileUrl);
    } catch (error) {
      console.error('Ошибка при конвертации PDF в Word:', error);
    }
  };
  
