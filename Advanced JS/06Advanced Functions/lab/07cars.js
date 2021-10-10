function createCars(input){
    let result = {};

    const actions = {
        create: (name, inherit, parentName) => 
            {result[name] = inherit ? Object.create(result[parentName]) : {};},
        set: (name, key, value) => result[name][key] = value,
        print: name => {
            const entry = [];
            for (const key in result[name]) {
                entry.push(`${key}:${result[name][key]}`);
            }
            return entry.join(',');
        },
    };

    input.forEach(el => {
        const [command, a, b, c] = el.split(' ');
        actions[command](a, b, c);
    });
}
createCars(['create c1',
'create c2 inherit c1',
'set c1 color red',
'set c2 model new',
'print c1',
'print c2']
);