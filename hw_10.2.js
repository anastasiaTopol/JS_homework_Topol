const text = 'Wonderful, Joyful, Happiness, Time, Task, Apple';

const pattern = /\b[b-zB-Z]{6,}\b/g;

console.log(text.match(pattern));