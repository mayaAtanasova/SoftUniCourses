function getArticleGenerator(articles) {
    const container = document.querySelector('#content');
    return function () {
        if (articles.length > 0) {
            container.appendChild(e('article', articles.shift()));
        };
        function e(type, content) {
            const result = document.createElement(type);
            const node = document.createTextNode(content);
            result.appendChild(node);
            return result;
        }
    };
}
