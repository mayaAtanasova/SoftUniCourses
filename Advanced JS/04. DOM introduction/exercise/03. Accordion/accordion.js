function toggle() {
    let action = document.getElementsByClassName('button')[0].textContent;
    let text = document.getElementById('extra');
    if(action === 'More'){
        if(text.style.display = 'none'){
            text.style.display = 'block';
        }
        document.getElementsByClassName('button')[0].textContent = 'Less'
    }else{
        if(text.style.display = 'block'){
            text.style.display = 'none';
        }
        document.getElementsByClassName('button')[0].textContent = 'More'
    }
    console.log('TODO:...');
}