import yaml from 'js-yaml';

export const parse = (data, dataFormat) => {
    switch (dataFormat) {
        case 'json':
            return JSON.parse(data);
        case 'yaml':
            return yaml.load(data);
        case 'yml':
            return yaml.load(data);
        default:
            throw new Error(`Wrong format`)
    }
};

export default parse;