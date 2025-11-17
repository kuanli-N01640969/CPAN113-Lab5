import multiply,{ add, subtract } from './mathModule.js';
import { toUpperCase, toLowerCase } from './stringModule.js';
import { findMax, reverseArray } from './arrayModule.js';

console.log('Multiply: ', multiply(2, 5)); 
console.log('Subtract: ', subtract(10, 3));  
console.log('Lowercase: ', toLowerCase('HELLOWoRld'));  
console.log('Max: ', findMax([0, 2, 14, 26, 73]));  
console.log('Reversed: ', reverseArray([2, 4, 6, 8]));  