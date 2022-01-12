function attachEvents() {
    const loadBtn = document.getElementById('btnLoad');
    const createBtn = document.getElementById('btnCreate');
    const pbUl = document.getElementById('phonebook');
    const person = document.getElementById('person');
    const phone = document.getElementById('phone');

    loadBtn.addEventListener('click', load);
    createBtn.addEventListener('click', (ev) => {
        const input = { person: person.value, phone: phone.value };
        create(input);
    });

    async function load() {
        pbUl.innerHTML = '';
        try{
            const res = await fetch('http://localhost:3030/jsonstore/phonebook');
            if(res.status != 200){
                throw new Error ('No connection with the phonebook');
            }
            const data = await res.json();
            const entries = Object.values(data);
            entries.forEach(entry => {
                const li = e('li', {}, `${entry.person}: ${entry.phone}   `, e('button', {}, 'Delete'));
                li.querySelector('button').addEventListener('click', ev => {
                    del(ev, entry._id);
                });
    
                pbUl.appendChild(li);
            });
        }catch(error){
            alert (error.message);
        }
        
    }

    async function create(input) {
        if(input.person == '' || input.phone == ''){
            alert ('Please fill in all fields');
            return;
        }
        const body = JSON.stringify(input);
        try{
            const res = await fetch('http://localhost:3030/jsonstore/phonebook', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body
            });
            if (res.ok != true){
                throw new Error('Could not save record');
            } else{
                alert ('Record created successfully');
            }
            const result = await res.json();
            load();
            person.value = phone.value = '';
        }catch(error){
            alert (error.message);
        }
        
    }

    async function del(ev, id) {
        const deleted = await fetch(`http://localhost:3030/jsonstore/phonebook/${id}`, { method: 'delete' });
        if(deleted.ok == true){
            alert('Record deleted successfully');
        }else{
            alert('Could not delete record');
        }
        ev.target.parentNode.remove();
    }


    function e(type, attributes, ...content) {
        const result = document.createElement(type);
        for (let prop in attributes) {
            result[prop] = attributes[prop];
        }

        content.forEach(el => {
            if (typeof el == 'string' || typeof el == 'number') {
                el = document.createTextNode(el);
            }
            result.appendChild(el);
        });
        return result;
    }

}

attachEvents();