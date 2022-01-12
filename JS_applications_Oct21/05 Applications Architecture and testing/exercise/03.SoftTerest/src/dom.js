const main = document.querySelector('main');

export function showSection(section){
    main.replaceChildren(section);
}

export function e(type, attributes, ...content) {
    const result = document.createElement(type);
    for(let [attr, value] of Object.entries(attributes || {})) {
        if (attr.substring(0, 2) == 'on'){
            result.addEventListener(attr.substring(2).toLocaleLowercase, value());
        }else{}
        result[attr] = value;
        }

    content = content.reduce((a,c) => a.concat(Array.isArray(c) ? c: [c]), []);
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