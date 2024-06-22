#!/usr/bin/env node
import {input, select} from '@inquirer/prompts';

const main = async () => {
  // Get title of the folder
  const folderName = await input({
    message: 'Enter folder name',
  });
  // Give some options to the user - templates
  const template = await select({
    message: 'Select template',
    name: 'template',
    choices: [
      {name: 'Default Template', value: 'small', description: 'Small default template'},
      {name: 'Full Template', value: 'full', description: 'Full template of package'},
    ],
  });

  console.log('Folder name:', folderName);
  console.log('Template name:', template);
};

main();
