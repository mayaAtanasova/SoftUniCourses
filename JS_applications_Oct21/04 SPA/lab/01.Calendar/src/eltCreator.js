export function e(type, attributes, ...content) {
    const result = document.createElement(type);
    for(let prop in attributes) {
        result[prop] = attributes[prop];
        }

    content.forEach(el => {
        if (typeof el == 'string' || typeof el == 'number') {
            result.innerHTML = el;
        } else {
            result.appendChild(el);
        }
    });
    return result;
}