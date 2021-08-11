function makePerson(firstName, lastName, age){
    let person = {
        firstName,
        lastName,
        age
    }

    return person;
}

console.log(makePerson("Peter", "Pan", "20" ));