window.onload = () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (ev) => {
        ev.preventDefault();
        const formData = new FormData(ev.target);
        const data = [...formData].reduce((acc, [k, v]) => Object.assign(acc, { [k]: v }), {});
        login(data);
    });

    async function login(data) {
        try {
            const body = JSON.stringify(data);
            const res = await fetch('http://localhost:3030/users/login', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body
            });
            const result = await res.json();
            if (res.ok != true) {
                throw new Error(result.message);
            }
            sessionStorage.setItem('userData', JSON.stringify({email: data.email, id: data._id, token: result.accessToken}));
            window.location = './index.html';
        } catch (error) {
            alert(error.message);
        }
    }
};



