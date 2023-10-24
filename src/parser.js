import yaml from 'js-yaml';

export const parse = (data, dataFormat) => {
  switch (dataFormat) {
    case 'json':
      return JSON.parse(data);
    case 'yaml':
    case 'yml':
      return yaml.load(data);
    default:
      throw new Error('Wrong format, your format', dataFormat, 'is not supported');
  }
};

export default parse;
