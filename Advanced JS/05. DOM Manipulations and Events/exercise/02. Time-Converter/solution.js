function attachEventsListeners() {
    const days = document.getElementById('days');
    const hours = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');

    const main = document.getElementsByTagName('main')[0];
    main.addEventListener('click', onClick);

    const timeObj = {
        days: 86400,
        hours: 3600,
        minutes: 60,
        seconds: 1,
    };
    function onClick(ev) {
        let sourceDiv = ev.target.parentNode;
        let input = sourceDiv.children[1];
        const convValue = Number(input.value);
        if(!isNaN(convValue)){
            const secs = convValue * timeObj[input.id];
            days.value = secs / 86400;
            hours.value = secs / 3600;
            minutes.value = secs / 60;
            seconds.value = secs;
        }
    }
}
