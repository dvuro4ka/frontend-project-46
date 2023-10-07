import fs from 'fs';
import path from 'path';
import { parse } from './parser.js';

const buildAbsolutePath = (filePath) => (path.resolve(process.cwd(), filePath));
export const getFormat = (filepath) => path.extname(filepath).substring(1);
export const readData = (filePath) => parse(fs.readFileSync(buildAbsolutePath(filePath), 'utf-8'), getFormat(filePath));
