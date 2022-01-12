// import functionality
import { postTopic } from './post.js'; //takes title, username, content
import { loadPosts } from './loadPosts.js';
//get templates
const postsInHomeView = document.querySelector('.topic-title');
const form = document.querySelector('form');
const cancelBtn = document.querySelector('.cancel');

loadPosts();//clear view and load posts

cancelBtn.addEventListener('click', ev => {
    ev.preventDefault();
    form.reset();
});//cancel btn functionality

form.addEventListener('submit', ev => {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    const emptyField = [...formData].filter(x => x[1] == '');
    if (emptyField.length != 0) {
        alert('Please fill in all fields!');
        return;
    }
    const { topicName, username, postText } = [...formData].reduce((acc, [k, v]) => Object.assign(acc, { [k]: v }), {});
    postTopic(topicName, username, postText);
    ev.target.reset();
    loadPosts();
});

