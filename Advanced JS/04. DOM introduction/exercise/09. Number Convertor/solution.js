function solve() {

    const selectMenuTo = document.querySelector('#selectMenuTo');
    // selectMenuTo.options[0] = new Option('Binary', 'binary');
    // selectMenuTo.options[1] = new Option('Hexadecimal', 'hexadecimal');
    
    let optionBinary = document.createElement('option');
    optionBinary.value = 'binary';
    optionBinary.textContent = 'Binary';
    
    let optionHexadecimal = document.createElement('option');
    optionHexadecimal.value = 'hexadecimal';
    optionHexadecimal.textContent = 'Hexadecimal';
    
    selectMenuTo.appendChild(optionBinary);
    selectMenuTo.appendChild(optionHexadecimal);
    
    let convertBtn = document.querySelector('button');
    convertBtn.addEventListener('click', () => {
        const input = Number(document.getElementById('input').value);
        const result = document.getElementById('result');

        if (selectMenuTo.value === 'binary') {
            result.value = input.toString(2);
        }
        if (selectMenuTo.value === 'hexadecimal') {
            result.value = input.toString(16).toUpperCase();
        }
    });
}