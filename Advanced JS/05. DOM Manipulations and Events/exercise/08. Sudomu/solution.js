function solve() {
    const checkBtn = document.querySelectorAll('button')[0];
    const clearBtn = document.querySelectorAll('button')[1];
    const rows = Array.from(document.querySelectorAll('tbody > tr'));
    const para = document.querySelector('#check > p');
    const table = document.querySelector('table');


    checkBtn.addEventListener('click', check);
    clearBtn.addEventListener('click', clear);

    function check(ev) {
        let correct = true;
        let setRow = new Set();
        let setCol = new Set();
        for (let i = 0; i < rows.length; i++) {
            for (let j = 0; j < rows.length; j++) {
                let r = Number(rows[i].children[j].children[0].value);
                let c = Number(rows[j].children[i].children[0].value);
                const allowed = [1,2,3,4,5,6,7,8,9];
                if(allowed.includes(r) && allowed.includes(c)){
                    setRow.add(r);
                    setCol.add(c);
                }
            }
            if (setRow.size < 3 || setCol.size < 3) {
                correct = false;
            }
            setRow.clear();
            setCol.clear();
        };
        if (correct == true) {
            para.textContent = 'You solve it! Congratulations!';
            para.style.color = 'green';
            table.style.border = '2px solid green';
        } else {
            para.textContent = 'NOP! You are not done yet...';
            para.style.color = 'red';
            table.style.border = '2px solid red';
        }
    }
    function clear(ev) {
        for (let i = 0; i < rows.length; i++) {
            for (let j = 0; j < rows.length; j++) {
                rows[i].children[j].children[0].value = '';
            }
        };
        table.style.border = 'none';
        para.textContent = '';
    }

}