function cone(r, h){
    let volume = Math.PI * r * r * h / 3;
    let area = Math.PI * r * (r + Math.sqrt(h ** 2 + r ** 2));

    console.log(`volume = ${(volume).toFixed(4)}`);
    console.log(`area = ${(area).toFixed(4)}`);
}

cone(3,5)