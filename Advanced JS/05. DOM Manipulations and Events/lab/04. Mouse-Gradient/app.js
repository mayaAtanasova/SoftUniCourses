function attachGradientEvents() {
    const hoverArea = document.getElementById('gradient');
    const result = document.getElementById('result');
    hoverArea.addEventListener('mousemove', calculatePosition);
    
    function calculatePosition(ev){
        const perc = Math.floor(ev.offsetX / hoverArea.clientWidth * 100);
        result.textContent = `${perc}%`;
    }
}