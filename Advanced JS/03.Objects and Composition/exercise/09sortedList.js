function createSortedList() {
    let obj = {
        collection: [],
        size: 0,
    };
    obj.add = (element) => {
        obj.collection.push(element);
        obj.collection.sort((a, b) => a - b);
        obj.size++;
    };

    obj.remove = (index) => {
        obj.collection.splice(index, 1);
        obj.collection.sort((a, b) => a - b);
        obj.size--;
    };

    obj.get = (index) => {
        return obj.collection[index];
    };

    return obj;
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size);
