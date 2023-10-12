#!/usr/bin/env node

import { program } from 'commander';
import { genDiff } from '../src/index.js';

program
  .name('gendiff')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .helpOption('-h', 'output usage information')
  .option('-f, -format <type>', 'output format', 'stylish')
  .action((filepath1, filepath2) => {
    console.log(genDiff(filepath1, filepath2, program.opts().format));
  })
  .parse(process.argv);
