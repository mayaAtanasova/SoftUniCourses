export function e(type, attributes, ...content) {
    const result = document.createElement(type);
    for(let prop in attributes) {
        result[prop] = attributes[prop];
        }

    content.forEach(el => {
        if (typeof el == 'string' || typeof el == 'number') {
            el = document.createTextNode(el);
        }
        result.appendChild(el);
    });
    return result;
}

export function button(label, attributes, callback) {
    const element = e('button', attributes, label);
    element.addEventListener('click', callback);
    return element;
}