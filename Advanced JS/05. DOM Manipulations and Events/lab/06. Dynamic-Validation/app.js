function validate() {
    const email = document.getElementById('email');
    email.addEventListener('change', validateEmail);
    const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;

    function validateEmail(){
        if(pattern.test(email.value)){
            email.className = '';
        }else{
            email.className = 'error';
        }
    }
}