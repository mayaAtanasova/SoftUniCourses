window.onload = () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (ev) => {
        ev.preventDefault();
        const formData = new FormData(ev.target);
        const data = [...formData].reduce((acc, [k, v]) => Object.assign(acc, { [k]: v }), {});
        register(data);
    });

    async function register(data) {
        try {
            if (data.email == '' || data.password == '') {
                alert('Please fill in all fields');
                return;
            }
            if(data.password != data.rePass){
                alert('Password retype does not match');
                return;
            }
            const res = await fetch('http://localhost:3030/users/register', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email: data.email, password: data.password})
            });
            const result = await res.json();
            console.log(result);
            if (res.ok != true) {
                throw new Error(result.message);
            }
            sessionStorage.setItem('userData', JSON.stringify({ email: result.email, id: result._id, token: result.accessToken }));
            window.location = './index.html';
        } catch (error) {
            alert(error.message);
        }
    }
};