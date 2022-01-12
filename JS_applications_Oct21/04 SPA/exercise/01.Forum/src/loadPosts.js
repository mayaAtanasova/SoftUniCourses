//functionality for loading data from the server
// creates html elements from the data and appends to the DOM

import { createHomePost } from './postCreator.js'; //takes title, timeStamp, username, id

const postsInHomeView = document.querySelector('.topic-title');

export async function loadPosts() {
    postsInHomeView.innerHTML = '';
    const url = 'http://localhost:3030/jsonstore/collections/myboard/posts';
    try {
        const res = await fetch(url);
        if (res.ok != true) {
            throw new Error(res.statusMessage);
        }
        const data = await res.json();
        const allPosts = Object.entries(data);
        allPosts.forEach(post => {
            const postDiv = createHomePost(post[1].title, post[1].time, post[1].username, post[0]);
            postsInHomeView.appendChild(postDiv);
        });
    } catch (err) {
        alert(err.message);
    }
}

export async function loadPostDetails(id){
    const postUrl = `http://localhost:3030/jsonstore/collections/myboard/posts/${id}`;
    try {
        const res = await fetch(postUrl);
        if (res.ok != true) {
            throw new Error(res.statusMessage);
        }
        const data = await res.json();//returns object id:{title, username, content, time, _id}
        return data;
    } catch (err) {
        alert(err.message);
    }
}

export async function loadPostComments(title){
    const commentUrl = 'http://localhost:3030/jsonstore/collections/myboard/comments';
    try {
        const res = await fetch(commentUrl);
        if (res.ok != true) {
            throw new Error(res.statusMessage);
        }
        const data = await res.json();//returns an object of objects
        const comments = Object.values(data).filter(x => x.title == title);//returns an array of objects with comments for given title
        return comments;
    } catch (err) {
        alert(err.message);
    }

}