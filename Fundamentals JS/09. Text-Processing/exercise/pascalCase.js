function solve(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] == str.toUpperCase()[i]) {
            newStr += ' ';
        }
        newStr += str[i];
    }
    console.log(newStr.trim().split(' ').join(', '));
}
solve('SplitMeIfYouCanHaHaYouCantOrYouCan')