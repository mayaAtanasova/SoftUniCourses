export async function postTopic(title, username, content) {
    const data = { title, username, content, time: new Date() };
    const url = 'http://localhost:3030/jsonstore/collections/myboard/posts';

    try {
        const res = await fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'applicaiton/json'
            },
            body: JSON.stringify(data)
        });
        if (res.ok != true) {
            throw new Error(res.statusText);
        }
    } catch (err) {
        alert(err.message);
    }
}

export async function postComment(title, username, content){
    const data = {title, username, content, time: new Date()};
    const url = 'http://localhost:3030/jsonstore/collections/myboard/comments';
    try{
        const res = await fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if(res.ok != true){
            throw new Error(res.statusText);
        }
    }catch(err){
        alert(err.message);
    }
}