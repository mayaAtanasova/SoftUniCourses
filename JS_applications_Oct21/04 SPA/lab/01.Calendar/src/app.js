import { e } from './eltCreator.js';

const body = document.querySelector('body');
const sectionEls = document.querySelectorAll('section');

const sections = [...sectionEls];
sectionEls.forEach(section => section.remove());
body.appendChild(sections[0]);

body.addEventListener('click', ev => {
    if (ev.target.matches('.date')) {
        const destination = ev.target.textContent;
        const description = ev.target.closest('section').className.replace('sCalendar', '');
        const targetId = `${description}-${destination}`;
        const currentView = sections.filter(x => x.id == targetId)[0];
        body.removeChild(body.querySelector('section'));
        body.appendChild(currentView);
    }
});



