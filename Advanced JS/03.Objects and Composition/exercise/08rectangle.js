function rectangle(width, height, color){
    let c = color.charAt(0).toUpperCase() + color.substring(1);
    let theRect =  {
        width,
        height,
        color: c,
    };
    theRect.calcArea = () => {
        return theRect.width * theRect.height;
    };
    return theRect;
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
