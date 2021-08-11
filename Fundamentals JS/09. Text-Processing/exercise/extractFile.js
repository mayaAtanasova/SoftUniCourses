function extract(str){
let file = str.split('\\').pop().split('.');
let ext = file.pop();
let fileName = file.join('.')
console.log(`File name: ${fileName}`);
console.log(`File extension: ${ext}`);
}

extract('C:\\Internal\\training-internal\\Template.bak.pptx')