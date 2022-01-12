function attachEvents() {
    const submitBtn = document.querySelector('#submit');
    const refreshBtn = document.querySelector('#refresh');
    const msgArea = document.getElementById('messages');

    submitBtn.addEventListener('click', (ev) => {
        ev.preventDefault();
        const author = document.querySelector('[name="author"]');
        const content = document.querySelector('[name="content"]');
        onSend({ author: author.value, content: content.value });
    });

    refreshBtn.addEventListener('click', (ev) => {
        ev.preventDefault();
        onRefresh();
    });

    async function onSend(data) {
        const body = JSON.stringify(data);
        if(data.author == ''){
            alert ('Please enter an author');
            return;
        }
        try{
        const response = await fetch('http://localhost:3030/jsonstore/messenger', {
            method: 'post',
            headers: {
                'Content-Type': 'applicaiton/json'
            },
            body
        });
        if(response.status != 200){
            throw new Error ('Error sending the data');
        }
            const result = await response.json();
            document.querySelector('[name="author"]').value = document.querySelector('[name="content"]').value = '';
        }catch(error){
            alert(error);
        }
    }

    async function onRefresh() {
        const response = await fetch('http://localhost:3030/jsonstore/messenger');
        const data = await response.json();
        const messages = Object.values(data);
        let text = messages.map(x => `${x.author}: ${x.content}`).join('\n');
        msgArea.textContent = text;
    }
}

attachEvents();