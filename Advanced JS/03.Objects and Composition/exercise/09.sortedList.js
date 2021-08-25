function createSortedList() {
    let list = {};
    list.size = 0;
    list.collection = [];
    list.add = (element) => {
        list.collection.push(element)
        list.size++;
        return list.collection.sort((a, b) => a - b);
    };
    list.remove = (index) => {
        if (index > 0 && index < list.collection.length) {
            list.collection.splice(index, 1);
            list.size--;
            return list.collection.sort((a, b) => a - b);
        }else{
            return;
        }
    };
    list.get = (index) => {
        if (index > 0 && index < list.collection.length) {
            return list.collection[index];
        }else{
            return;
        }
    };
    return list;
}

let list = createSortedList();
list.add(7);
list.add(6);
list.add(5);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list);