function wordCount(input) {
    let map = new Map();

    input.forEach(word => {
        if (!map.has(word)) {
            let count = 1;
            map.set(word, count);
        } else {
            let newCount = map.get(word) + 1;
            map.set(word, newCount);
        }
    });
    let sorted = Array.from(map).sort((a, b) => b[1] - a[1]);

    sorted.forEach(line => {
            console.log(`${line[0]} -> ${line[1]} times`);
        });
}
    wordCount(["Here", "is", "the", "first", "sentence",
        "Here", "is", "another", "sentence",
        "And", "finally", "the", "third", "sentence"
    ])