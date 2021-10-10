function solve() {
    const moviesContainer = document.querySelector('#movies > ul');
    let container = document.querySelector('#container');
    let [movieName, hall, price, addBtn] = Array.from(container.children);
    let movieList = document.querySelector('#movies>ul');
    let clearBtn = document.querySelector('#archive > button');

    addBtn.addEventListener('click', (ev) => {
        let moviePrice = Number(price.value);
        if (movieName.value === '' || hall.value === '' || price.value === '' || isNaN(price.value)) {
            return;
        }
        let newMovie = e('li', e('span', movieName.value), e('strong', `Hall: ${hall.value}`), e('div', e('strong', moviePrice.toFixed(2)), e('input', ''), button('Archive', archive)));
        newMovie.querySelector('input').placeholder = 'Tickets Sold';
        movieList.appendChild(newMovie);
        movieName.value = '';
        hall.value = '';
        price.value = '';
        ev.preventDefault();
    });

    clearBtn.addEventListener('click', (ev) => {
        ev.target.parentNode.querySelector('ul').innerHTML = '';
    });

    function archive(ev) {
        let movieToArchiveLi = ev.target.parentNode.parentNode;
        let ArchiveUl = document.querySelector('#archive > ul');
        let inputQty = movieToArchiveLi.querySelector('input');
        let movieName = movieToArchiveLi.querySelector('span').textContent;
        if (inputQty.value == '') {
            return;
        }
        inputQty = Number(inputQty.value);
        let unitPrice = Number(movieToArchiveLi.querySelectorAll('strong')[1].textContent);
        let totalPrice = inputQty * unitPrice;
        ArchiveUl.appendChild(e('li', e('span', movieName), e('strong', `Total amount: ${totalPrice.toFixed(2)}`), button('Delete', deleteMovie)));
        movieToArchiveLi.remove();
    }

    function deleteMovie(ev) {
        let movieArchive = document.querySelector('#archive');
        console.log(movieArchive);
        ev.target.parentNode.remove();
    }

    function e(type, ...content) {
        const result = document.createElement(type);

        content.forEach(e => {
            if (typeof e == 'string') {
                const node = document.createTextNode(e);
                result.appendChild(node);
            } else {
                result.appendChild(e);
            }
        });
        return result;
    }

    function button(label, callback) {
        const element = e('button', label);
        element.addEventListener('click', callback);
        return element;
    }

}