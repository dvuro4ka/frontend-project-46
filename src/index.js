import fs from 'fs';
import path from 'path';
import { parse } from './parser.js';
import { getDifferenceTree } from './compareData.js';
import makeFormat from './formatters/index.js';

const buildAbsolutePath = (filePath) => path.resolve(process.cwd(), filePath);
const getFormat = (filePath) => path.extname(filePath).slice(1);
const readData = (filePath) => parse(fs.readFileSync(buildAbsolutePath(filePath), 'utf-8'), getFormat(filePath));
const getData = (file) => readData(file, getFormat(buildAbsolutePath(file)));

export const genDiff = (file1, file2, format = 'stylish') => {
  const data1 = getData(file1);
  const data2 = getData(file2);
  const result = getDifferenceTree(data1, data2);
  return makeFormat(result, format);
};

export default genDiff;
