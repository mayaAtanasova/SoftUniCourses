function findEAddr(text){
    let pattern = /[A-Za-z0-9]+[\.\_\-]*[A-Za-z0-9]+@[a-z]+[\-]*[a-z]*\.[a-z]+[\-]*[a-z]*\.*[a-z]+/g;
    let match = pattern.exec(text);
    let mails = [];
    while(match != null){
        mails.push(match[0]);
        match = pattern.exec(text);
    }
mails.forEach(m => {
    console.log(m);
})
}
findEAddr('Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.')