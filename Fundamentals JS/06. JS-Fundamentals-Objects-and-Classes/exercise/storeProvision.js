function storeProvisioin(stock, orders) {
    let myStore = [];
    for (let i = 0; i < stock.length-1; i+= 2){
        let productName = stock[i];
        let quantity = Number(stock[i+1]);
        let myProduct = {
            productName,
            quantity
        };
        myStore.push(myProduct);        
    }

    for (let i = 0; i < orders.length-1; i+= 2){
        let productName = orders[i];
        let quantity = Number(orders[i+1]);
        let used = false;
        for (let j = 0; j <myStore.length; j++){
            let currentProd = myStore[j];
            if(currentProd.productName == productName){
                currentProd.quantity += quantity;
                used = true;
            }
        }
        if (!used){
            let myProduct = {
                productName,
                quantity
            } 
            myStore.push(myProduct);
            
        }
        
    }
for (let i = 0; i < myStore.length; i++){
    let currentProd = myStore[i];
    console.log(`${currentProd.productName} -> ${currentProd.quantity}`);
}
}
storeProvisioin([
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
)