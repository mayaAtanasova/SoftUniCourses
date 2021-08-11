function buyComputer(input) {
    let totalPrice = 0;
    let isSpecial = false;
    for (let i = 0; i < input.length; i++) {
        let item = input[i];
        if (item == 'special') {
            isSpecial = true;
            break;
        } else if (item == 'regular') {
            break;
        } else {
            if (Number(item) <= 0){
                console.log('Invalid price!');
            }else{
                totalPrice += Number(item);
            }
        }
    }
    if (totalPrice == 0){
        console.log('Invalid order!');
    }else{
        console.log(
        `Congratulations you've just bought a new computer!
        Price without taxes: ${totalPrice.toFixed(2)}$
        Taxes: ${(totalPrice*0.2).toFixed(2)}$
        -----------
        Total price: ${isSpecial ?(totalPrice*0.9*1.2).toFixed(2):(totalPrice*1.2).toFixed(2)}$`);
    }
}

buyComputer([
'regular'
    ]
    )