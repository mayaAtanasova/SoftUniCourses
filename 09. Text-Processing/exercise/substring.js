function solve(sub, text){
    text  = text.toLocaleLowerCase().split(' ');
    sub = sub.toLocaleLowerCase();
    if(text.indexOf(sub) != -1){
        console.log(sub);
    }else{
        console.log(`${sub} not found!`);
    }
}

solve('javascript',
'JavaScript is the best programming language'
)
console.log('-----');
solve('python',
'JavaScript is the best programming language'
)