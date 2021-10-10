function validate() {
    const submitBtn = document.querySelector('#submit');
    const isCompany = document.querySelector('#company');
    const companyInfo = document.querySelector('#companyInfo');
    const companyNumber = document.querySelector('#companyNumber');
    let isValid = true;

    isCompany.addEventListener('change', () => {
        let visibility = 'none';
        if (isCompany.checked) {
            visibility = 'block';
        }
        companyInfo.style.display = visibility;
    });

    submitBtn.addEventListener('click', (event) => {
        const username = document.querySelector('#username');
        const unPattern = /^[a-zA-z0-9]{3,20}$/;
        const email = document.querySelector('#email');
        const emailPattern = /(.)*@(.)*\.(.)*/;
        const password = document.querySelector('#password');
        const confPassword = document.querySelector('#confirm-password');
        const passPattern = /^\w{5,15}$/;
        const company = document.querySelector('#company');

        if (!unPattern.test(username.value)) {
            alertSyle(username);
        } else {
            restoreStyle(username);
        }
        if (!emailPattern.test(email.value)) {
            alertSyle(email);
        } else {
            restoreStyle(email);
        }
        if (password.value != confPassword.value) {
            alertSyle(password);
            alertSyle(confPassword);
        } else {
            if (!passPattern.test(password.value)) {
                alertSyle(password);
            } else {
                restoreStyle(password);
            }
            if (!passPattern.test(confPassword.value)) {
                alertSyle(confPassword);
            } else {
                restoreStyle(confPassword);
            }
        }
        if (company.checked) {
            if (companyNumber.value < 1000
                || companyNumber.value > 9999) {
                alertSyle(companyNumber);
            } else {
                restoreStyle(companyNumber);
            }
        }
        const inputFields = Array.from(document.querySelectorAll('input'));
        if(company.checked){
            // console.log(inputFields);
            if (inputFields.some(x => x.style['border-color'] == 'red')) {
                document.getElementById('valid').style.display = 'none';
            } else {
                document.getElementById('valid').style.display = 'block';
            }
        } else {
            let restFields = inputFields.filter(x => x.id != 'companyNumber' );
            // console.log(restFields);
            if (restFields.some(x => x.style['border-color'] == 'red')) {
                document.getElementById('valid').style.display = 'none';
            } else {
                document.getElementById('valid').style.display = 'block';
            }
        }
        event.preventDefault();
    });


    function alertSyle(el) {
        el.style['border'] = '1px solid';
        el.style['border-color'] = 'red';
    }

    function restoreStyle(el) {
        el.style['border'] = 'none';
    }

}
