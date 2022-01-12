window.onload = async () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', (ev) => {
        ev.preventDefault();
        let formData = new FormData(ev.target);
        formData = [...formData].reduce((acc, [k, v]) => Object.assign(acc, { [k]: v }), {});
        onRegister(formData);
    });

    async function onRegister(data) {
        //check if passwords match
        if (data.password != data.rePass) {
            alert('Passwords should match');
            return;
        } else if (data.password == '' || data.rePass == '') {
            alert('The password cannot be empty');
            return;
        }

        //create request body
        const body = JSON.stringify({
            email: data.email,
            password: data.password
        });
        //make request and error handling
        try {
            const res = await fetch('http://localhost:3030/users/register', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body
            });
            const data = await res.json();
            //if everything went well, store the received token
            if (res.status == 200) {
                sessionStorage.setItem('authToken', data.accessToken);
                //and redirect the user to the index page
                window.location.pathname = 'login.html';
            } else {
                throw new Error(data.message);
            }
        } catch (error) {
            alert(`Error: ${error.message}`);
        }

    }

};
