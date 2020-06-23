import _ from 'lodash';
const native = require('@amilajack/neon-hello/native/index.node')

native.helloWorld()

function component() {
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}
  
document.body.appendChild(component());