#!/usr/bin/env node

import { program } from 'commander';

program
  .name('gendiff')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .helpOption('-h', 'output usage information')
  .option('-f, -format <type>', 'output format')
  .action((filepath1, filepath2) => {
    console.log(filepath1, filepath2);
  })
  .parse(process.argv);
