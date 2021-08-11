function catMaker(input){
    class Cat {
        constructor(catName, age){
            this.catName = catName;
            this.age = age;
            this.sayMeow = () => {
                console.log(`${catName}, age ${age} says Meow`);
            }
        }
    }
    for (element of input){
        let [catName, age] = element.split(' ');
        let newCat = new Cat(catName, age);
        newCat.sayMeow();
    }

}

catMaker(['Mellow 2', 'Tom 5'])