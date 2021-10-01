function lockedProfile() {
    document.getElementById('main').addEventListener('click', onShow);

    function onShow(ev) {
        if (ev.target.tagName == 'BUTTON') {
        const curProfile = ev.target.parentNode;
        const lockState = curProfile.children[2];
        if (!lockState.checked) {
            let div = curProfile.querySelector('div');
            let isVisible = div.style.display === 'block';
            div.style.display = isVisible ? 'none' : 'block';
            ev.target.textContent = !isVisible ? 'Hide it' : 'Show more';
            }         
        }
    }
}