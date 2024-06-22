#!/usr/bin/env node
import _yargs from 'yargs';
import {hideBin} from 'yargs/helpers';

const yargs = _yargs(hideBin(process.argv));

const argv = await yargs.option('height', {type: 'string', require: true}).option('width', {type: 'string', require: true}).argv;

const height = argv.height;
const width = argv.width;

const main = async () => {
  console.log('Main start');
  console.log(height, width);
  console.log('Main end');
};

main();
