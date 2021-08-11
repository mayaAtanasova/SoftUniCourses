let text = 'astalavista baby';
let pattern = 'sta';
let first = text.indexOf(pattern);
let last = text.lastIndexOf(pattern);
text = text.substring(0, first) + text.substring(first + pattern.length, last)

console.log(text);