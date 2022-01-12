window.onload = async () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (ev) => {
        ev.preventDefault();
        let formData = new FormData(ev.target);
        formData = [...formData].reduce((acc, [k, v]) => Object.assign(acc, { [k]: v }), {});
        onLogin(formData);
    });
};

async function onLogin(data) {
    if (data.email == '' || data.password == '') {
        alert('Please enter both email and password');
        return;
    }
    const body = JSON.stringify({
        email: data.email,
        password: data.password
    });

    try {
        const response = await fetch('http://localhost:3030/users/login', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body
        });
        const data = await response.json();
        if(response.status == 200){
            sessionStorage.setItem('authToken', data.accessToken);
            window.location.pathname = 'index.html';
        }else{
            throw new Error(data.message);
        }

    } catch (error) {
        alert (error.message);
    }

}