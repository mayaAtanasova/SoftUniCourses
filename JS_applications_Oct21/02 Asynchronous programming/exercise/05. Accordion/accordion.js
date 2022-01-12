async function solution() {
    //get needed elements
    const main = document.querySelector('#main');
    const articles = await getArticles();

    addGlobalEventListener('click', 'button', toggleDetails);

    //populate html
    articles.forEach(async function displayArticle(article) {
        const accDiv = e('div', { className: 'accordion' },
            e('div', { className: 'head' },
                e('span', {}, article.title),
                e('button', { className: 'button', id: article._id }, 'More')
            ),
            e('div', { className: 'extra' }, e('p', {}, '')
            )
        );
        main.appendChild(accDiv);
    });

    //create toggle logic
    //load remote details content only if p is still empty
    async function toggleDetails(ev) {
        const currButton = ev.target;
        const currBlock = ev.target.parentNode.parentNode;
        if (currButton.innerText == 'MORE') {
            const pEl = currBlock.querySelector('p');
            if(pEl.innerText == ''){
                const details = await getArticleDetails(`${currButton.id}`);
                pEl.innerText = details.content;
            }
            currBlock.querySelector('.extra').style.display = 'flex';
            currButton.innerText = 'Less';
        } else if (currButton.innerText == 'LESS') {
            currBlock.querySelector('.extra').style.display = 'none';
            currButton.innerText = 'More';
        }
    }

}

async function getArticles() {
    try {
        const res = await fetch('http://localhost:3030/jsonstore/advanced/articles/list');
        if (res.status != 200) {
            throw new Error('Error!');
        }
        const data = res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

async function getArticleDetails(id) {
    try {
        const res = await fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${id}`);
        if (res.status != 200) {
            throw new Error('Error!');
        }
        const data = res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

function e(type, attributes, ...content) {
    const result = document.createElement(type);
    for (let prop in attributes) {
        result[prop] = attributes[prop];
    }

    content.forEach(el => {
        if (typeof el == 'string' || typeof el == 'number') {
            el = document.createTextNode(el);
        }
        result.appendChild(el);
    });
    return result;
}
function addGlobalEventListener(type, selector, callback) {
    document.addEventListener(type, ev => {
        if (ev.target.matches(selector)) { callback(ev); };
    });
}