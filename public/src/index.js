import _ from 'lodash';

fucntion component(){
  var element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], '');

  return element;
}

document.body.appendChild(component);
