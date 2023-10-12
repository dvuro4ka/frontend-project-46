import makeStylishDiff from './stylish.js';
import makePlainDiff from './plain.js';
import makeJsonDiff from './json.js';

const makeFormat = (result, format) => {
  switch (format) {
    case 'stylish': {
      return makeStylishDiff(result);
    }
    case 'plain': {
      return makePlainDiff(result);
    }
    case 'json': {
      return makeJsonDiff(result);
    }
    default: {
      throw new Error(`"${format}" format is not supported by the formatter`);
    }
  }
};
export default makeFormat;
