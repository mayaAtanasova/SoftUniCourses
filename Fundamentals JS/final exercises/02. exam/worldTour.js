function solve(input) {
    let stops = input.shift();

    while (input[0] != 'Travel') {
        let tokens = input[0].split(':');
        let command = tokens.shift();
        if (command == 'Add Stop') {
            let [index, string] = tokens;
            index = Number(index);
            if (valid(index)) {
                let first = stops.substring(0, index);
                let last = stops.substring(index);
                stops = first + string + last;
            }
            console.log(stops);
        } else if (command == 'Remove Stop') {
            let [start_index, end_index] = tokens;
            start_index = Number(start_index);
            end_index = Number(end_index);
            if (valid(start_index) && valid(end_index)) {
                let first = stops.substring(0, start_index);
                let last = stops.substring(end_index + 1);
                stops = first + last;
            }
            console.log(stops);
        } else if (command == 'Switch') {
            let [old_string, new_string] = tokens;
            stops = stops.split(old_string).join(new_string);
            // let pattern = new RegExp(old_string, 'g');
            // stops = stops.replace(pattern, new_string);
            console.log(stops);
        }
        input.shift();
    }

    function valid(id) {
        return (id >= 0) && (id < stops.length);
    }
    console.log(`Ready for world tour! Planned stops: ${stops}`);
}

solve(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"
]);