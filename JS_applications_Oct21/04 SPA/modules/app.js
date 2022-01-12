import { sum, myNumber } from './module.js';

const result = sum(myNumber, 3);
document.querySelector('main').textContent = (`The result is ${result}`);