import pkg from 'lodash';
const { _ } = pkg;

let example = _.fill([1,2,3,4,5],"banana",1,4);
console.log(example);
