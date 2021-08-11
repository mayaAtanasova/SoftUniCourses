function shake(input) {
    let [text, pattern] = input;
    while (pattern.length > 0) {
        let first = text.indexOf(pattern);
        let last = text.lastIndexOf(pattern);
        if (first != last) {
            text = text.substring(0, first) + text.substring(first + pattern.length, last) +
                text.substring(last + pattern.length);
            console.log('Shaked it.');
            let ch = pattern.charAt(Math.floor(pattern.length / 2))
            pattern = pattern.replace(ch, '')
        } else {
            break;
        }
    }
    console.log('No shake.');
    console.log(text);
}
shake(['##mtm!!mm.mm*mtm.#',
    'mtm'
])