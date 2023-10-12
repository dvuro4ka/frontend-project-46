import _ from 'lodash';

const getValue = (value) => {
  switch (typeof value) {
    case 'object': {
      return !value ? 'null' : '[complex value]';
    }
    case 'string': {
      return `'${value}'`;
    }
    default: {
      return `${value}`;
    }
  }
};
const getPath = (nodeNames) => nodeNames.flat().join('.');

export function makePlain(tree) {
  const iter = (node, path) => node.map((child) => {
    const currentPath = getPath([path, child.key]);
    switch (child.type) {
      case 'nested': {
        return iter(child.children, currentPath);
      }
      case 'added': {
        return `Property '${currentPath}' was added with value: ${getValue(
          child.value,
        )}`;
      }
      case 'removed': {
        return `Property '${currentPath}' was removed`;
      }
      case 'changed': {
        return `Property '${currentPath}' was updated. From ${getValue(
          child.value,
        )} to ${getValue(child.value2)}`;
      }
      case 'unchanged': {
        return null;
      }
      default: {
        throw Error('Uncorrect data');
      }
    }
  });
  return iter(tree.children, []);
}

const makePlainDiff = (data) => {
  const result = makePlain(data);
  const flatten = _.flattenDeep(result);
  const filtered = flatten.filter((el) => el);
  return filtered.join('\n');
};

export default makePlainDiff;
