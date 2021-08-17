function areaCalc(r) {
    console.log(
    typeof r === "number"
        ? (Math.PI * r ** 2).toFixed(2)
        : `We can not calculate the circle area, because we receive a ${typeof r}.`);
}
areaCalc(5);

console.log("------");

areaCalc("name");
