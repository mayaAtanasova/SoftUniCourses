function focused() {
    let inpits = Array.from(document.querySelectorAll('input')).forEach(inpit =>{
        inpit.addEventListener('focus', (ev) =>{
            ev.target.parentNode.className = 'focused';
        });
        inpit.addEventListener('blur', (ev) =>{
            ev.target.parentNode.className = '';
        });
    });
}
