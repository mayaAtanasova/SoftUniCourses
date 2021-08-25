function rectangle(w, h, color) {
    let c = color[0].toUpperCase() + color.substring(1);
    w = Number(w);
    h = Number(h);
    let rect = {};
    rect.width = w;
    rect.height = h;
    rect.color = c;
    rect.calcArea = () => {
        return rect.width * rect.height;
    }
    return rect;
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
