#!/usr/bin/env node
import path from 'path';
import { readData } from './utils.js';
import { getDifferenceTree } from './compareData.js';
import makeFormat from './formatters/index.js';

const buildAbsolutePath = (filePath) => path.resolve(process.cwd(), filePath);
const getFormat = (filePath) => path.extname(filePath).slice(1);

export const genDiff = (file1, file2, format = 'stylish') => {
  const path1 = buildAbsolutePath(file1);
  const path2 = buildAbsolutePath(file2);

  const data1 = readData(file1, getFormat(path1));
  const data2 = readData(file2, getFormat(path2));

  const result = getDifferenceTree(data1, data2);
  return makeFormat(result, format);
};

export default genDiff;
