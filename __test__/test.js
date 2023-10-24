import { test, expect, describe } from 'jest';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const expectedStylish = readFile('expectedStylish.txt');
const expectedPlain = readFile('expectedPlain.txt');
const expectedJson = readFile('expectedJson.txt');

const cases = [
  ['file1.json', 'file2.json', 'stylish', expectedStylish],
  ['file3.yml', 'file4.yml', 'stylish', expectedStylish],
  ['file5.yaml', 'file6.yaml', 'stylish', expectedStylish],
  ['file1.json', 'file2.json', 'plain', expectedPlain],
  ['file3.yml', 'file4.yml', 'plain', expectedPlain],
  ['file5.yaml', 'file6.yaml', 'plain', expectedPlain],
  ['file1.json', 'file2.json', 'json', expectedJson],
  ['file3.yml', 'file4.yml', 'json', expectedJson],
  ['file5.yaml', 'file6.yaml', 'json', expectedJson],
];

describe('All tests', () => {
  test.each(cases)('Format %s', (file1, file2, format, expectedFile) => {
    const actual = gendiff(getFixturePath(file1), getFixturePath(file2), format);
    expect(actual).toEqual(expectedFile);
  });
});
