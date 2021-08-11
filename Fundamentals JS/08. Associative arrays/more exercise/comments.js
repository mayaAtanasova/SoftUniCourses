function letscomment(input) {
    let titlePool = {};
    let userList = [];
    input.forEach(line => {
        if (line.includes('user ')) {
            let userName = line.replace('user ', '');
            userList.push(userName);
        }
        if (line.includes('article ')) {
            let articleTitle = line.replace('article ', '');
            titlePool[articleTitle] = [];
        }
        if (line.includes(' posts on ')) {
            let [userName, tokens] = line.split(' posts on ');
            // console.log(typeof tokens);
            //someArticle: NoTitle, stupidComment - string
            if (userList.includes(userName)) {
                let [articleTitle, comments] = tokens.split(': ');
                // console.log(comments);
                // I like books, I do really like them  - string
                let commentObj = {};
                commentObj['userName'] = userName;
                commentObj['comments'] = comments;
                titlePool[articleTitle].push(commentObj);
            }
        }
    });
    let sortedPool = Object.entries(titlePool).sort((a,b) => b[1].length - a[1].length).forEach(title =>{
        console.log(`Comments on ${title[0]}`);
        title[1].sort((a, b) => a['userName'].localeCompare(b['userName'])).forEach(e => {
            console.log(`--- From user ${e['userName']}: ${e['comments'].replace(', ', ' - ')}`);
        })
        
    });
}

letscomment([
    'user aUser123',
    'someUser posts on someArticle: NoTitle, stupidComment',
    'article Books',
    'article Movies',
    'article Shopping',
    'user someUser',
    'user uSeR4',
    'user lastUser',
    'uSeR4 posts on Books: I like books, I do really like them ',
    'uSeR4 posts on Movies: I also like movies, I really do',
    'someUser posts on Shopping: title, I go shopping every day',
    'someUser posts on Movies: Like, I also like movies very much'
])