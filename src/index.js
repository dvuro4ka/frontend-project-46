#!/usr/bin/env node
import fs from 'fs'
import path from 'path';
import parse from './parser.js'

const buildAbsolutePath = (filePath) => (path.resolve(process.cwd(), filePath));
const readData = (filePath) => parse(fs.readFileSync(filePath), path.extname(filePath).slice(1));


export const genDiff = (file1, file2) => {
    
};

export default genDiff;
