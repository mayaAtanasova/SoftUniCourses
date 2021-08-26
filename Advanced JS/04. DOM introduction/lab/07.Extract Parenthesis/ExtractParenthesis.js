function extract(id) {
    const content = document.getElementById(id).textContent;
    const pattern = /\(([A-Za-z\ ]+)\)/g;
    let match = pattern.exec(content);
    let result = [];
    while(match != null){
        result.push(match[1]);
        match = pattern.exec(content);
    }
    return (result.join('; '));
}