function calculateTime(input){
let [e1, e2, e3, studentCount] = input.map(Number);
let time = 0;
let breakTime = 0;

while (studentCount >0){
    studentCount -= (e1+e2+e3);
    time ++;
    if(time % 4 == 0){
        time++;
    }
}
console.log(`Time needed: ${time}h.`);
}
calculateTime(['5', '2', '3', '40'])