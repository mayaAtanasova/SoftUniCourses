function length (s1, s2, s3){
let totLen = s1.length + s2.length + s3.length;
let avLen = Math.floor(totLen / 3);
console.log(totLen);
console.log(avLen);
}

length('chocolate', 'ice cream', 'cake')