function solve(area, vol, jStr){
    const input = JSON.parse(jStr);
    function calc(figure){
        const myArea = area.call(figure);
        const myVol = vol.call(figure);
        return {area: myArea, volume: myVol};
    }
    return input.map(x => calc(x));

};

function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};

console.log(solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
    ));
