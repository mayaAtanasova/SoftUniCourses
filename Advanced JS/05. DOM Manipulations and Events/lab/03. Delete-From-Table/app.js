function deleteByEmail() {
    const result = document.getElementById('result');
    const email = document.getElementsByName('email')[0].value;
    const emails = Array.from(document.querySelectorAll('tbody tr td'));
    let found = false;
    emails.forEach(el => {
        if (el.textContent == email) {
            el.parentNode.remove();
            found = true;
        }
    });
    if(found){
        result.textContent = 'Deleted';
    }else{
        result.textContent = 'Not found.';
    }
}