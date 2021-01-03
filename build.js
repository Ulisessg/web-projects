const { exec } = require('child_process');
const fs = require('fs');
const { join } = require('path');

// Create dynamic pages
fs.readdir(join(__dirname, 'src', 'react', 'pages'), (error, files) => {
  if (error) {
    throw new Error('Error reading file');
  }
  if (files.length === 0) {
    throw new Error('No files in the folder');
  }

  //Build the DLL with common production dependencies
  const commonLibs = exec('npm run dll', (error, message) => {
    if (error) throw new Error(error);
    if (!message) console.log('Success');
    console.log(message);
  });

  commonLibs.stdout.on('data', (data) => {
    console.log(data);
  });

  //When comminLibs finish execute a build for every page, the name of page is send on a environment variable
  commonLibs.on('exit', () => {
    exec('node ./buildBlogs.js', (error, message) => {
      if (error) throw new Error(error);
      console.log(message);
    }).stdout.on('data', (chunk) => {
      console.log(chunk);
    });

    for (let i = 0; i < files.length; i++) {
      const buildAPage = exec(
        `FILE=${files[i]} npm run production`,
        (error, message) => {
          if (error) throw new Error(error);
          console.log(message);
        },
      );

      buildAPage.stdout.on('data', (data) => {
        console.log(data);
      });
    }
  });
});
