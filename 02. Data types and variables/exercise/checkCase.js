function checkCase(ch){
    result = ch == ch.toUpperCase();
    console.log(result
        ? "upper-case"
        : "lower-case");
}
checkCase('f')