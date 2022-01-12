async function lockedProfile() {
    //get needed elements
    const main = document.querySelector('#main');
    const template = document.querySelector('.profile').innerHTML;
    const users = await getUserData();
    //clear the main
    main.replaceChildren();
    //add new cards with data
    users.forEach((dataBlock, id) => {
        const { _id, username, email, age } = dataBlock[1];
        let userDivHTML = template.replace('user1Locked', `user${id + 1}Locked`)
                                    .replace('user1Locked', `user${id + 1}Locked`)
                                    .replace('name="user1Username" value=""', `name="user${id + 1}Username" value="${username}"`)
                                    .replace('name="user1Email" value=""', `name="user${id + 1}Email" value="${email}"`)
                                    .replace('name="user1Age" value=""', `name="user${id + 1}Age" value="${age}"`);
        const userDiv = document.createElement('div');
        userDiv.className = 'profile';
        userDiv.innerHTML = userDivHTML; 
        main.appendChild(userDiv);
    });
    //addfunctionality
    addGlobalEventListener('click', 'button', toggleShow);

    function toggleShow(ev) {
        const currButton = ev.target;
        const card = ev.target.parentNode;
        const hidden = card.querySelector('#user1HiddenFields');
        if(card.children[4].checked == true){
            if (currButton.innerText == 'Show more'){
                hidden.style.display = 'block';
                currButton.innerText = 'Hide it';
            } else if (currButton.innerText == 'Hide it'){
                hidden.style.display = 'none';
                currButton.innerText = 'Show more';

            }
        }
    }
}

async function getUserData() {
    try {
        const res = await fetch('http://localhost:3030/jsonstore/advanced/profiles');
        if (res.status != '200') {
            throw new Error('No data found');
        }
        const userData = await res.json();
        return Object.entries(userData);
    } catch (error) {
        console.log(error);
    }
}

function addGlobalEventListener(type, selector, callback) {
    document.addEventListener(type, ev => {
        if (ev.target.matches(selector)) { callback(ev); };
    });
}