import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const formats = [['stylish'], ['plain'], ['json']];
const filesFormat = [['json'], ['yaml'], ['yml']];

describe.each(formats)('Test format %s', (format) => {
  test.each(filesFormat)('Test file format %s', (fileFormat) => {
    const actual = gendiff(
      getFixturePath(`file1.${fileFormat}`),
      getFixturePath(`file2.${fileFormat}`),
      format,
    );
    const expected = readFile(
      `expected${format.charAt(0).toUpperCase() + format.slice(1)}.txt`,
    );
    expect(actual).toEqual(expected);
  });
});
