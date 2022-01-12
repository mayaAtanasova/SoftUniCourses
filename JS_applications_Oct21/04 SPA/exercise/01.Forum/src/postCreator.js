import { e } from './elCreator.js';
import { loadPostDetails, loadPostComments } from './loadPosts.js';
import { postComment } from './post.js';

export function createHomePost(title, timeStamp, username, id) {
    const template = `<div class="topic-name-wrapper">
    <div class="topic-name">
        <a href="#" class="normal">
            <h2>${title}</h2>
        </a>
        <div class="columns">
            <div>
                <p>Date: <time>${timeStamp}</time></p>
                <div class="nick-name">
                    <p>Username: <span>${username}</span></p>
                </div>
            </div>
        </div>
    </div>
</div>`;

    const homeViewPost = e('div', { className: 'topic-container', 'data-id': id, innerHTML: template });
    homeViewPost.querySelector('a').addEventListener('click', async (ev) => {
        const commentsContainer = ev.target.parentNode.closest('.topic-name');
        await loadComments(commentsContainer, id);
    });
    return homeViewPost;
}

async function loadComments(container, id) {
    if (container.children[1] != null){
        console.log(container.children);
        container.children[1].remove();
    }
    const { title, username, content, time } = await loadPostDetails(id); //{title, username, content, time, _id};
    const comments = await loadPostComments(title);
    const newContent = createPostWithDetails(title, username, content, time);
    if (comments.length > 0) {
        comments.forEach(comment => {
            const userComment = createComment(comment.username, comment.time, comment.content);
            newContent.appendChild(userComment);
        });
    }
    const commentForm = createCommentsForm(title);
    container.appendChild(newContent);
    container.appendChild(commentForm);
}

export function createPostWithDetails(title, username, content, time) {

    const postTemplate =
        `<div class="header">
            <img src="./static/profile.png" alt="avatar">
            <p><span>${username}</span> posted on <time>${time}</time></p>
            <p class="post-content">${content}</p>
        </div>`;

    const commentDiv = e('div', { className: 'comment', innerHTML: postTemplate });
    return commentDiv;
}

function createComment(username, time, content) {
    const userCommentTemplate =
        `<class="topic-name-wrapper">
            <div class="topic-name">
                <p><strong>${username}</strong> commented on <time>${time}</time></p>
            <div class="post-content">
                <p>${content}</p>
            </div>
        </div>`;
    return e('div', { id: 'user-comment', innerHTML: userCommentTemplate });
}

function createCommentsForm(title) {
    const answerCommentFormTemplate =
        `<p><span>currentUser</span> comment:</p>
        <div class="answer">
            <form>
                <textarea name="postText" id="comment" cols="30" rows="10"></textarea>
                <div>
                    <label for="username">Username <span class="red">*</span></label>
                    <input type="text" name="username" id="username">
                </div>
                <button>Post</button>
            </form>
        </div>`;

    const commentFormDiv = e('div', { className: 'answer-comment', innerHTML: answerCommentFormTemplate });
    const commentForm = commentFormDiv.querySelector('form');
    commentForm.addEventListener('submit', ev => {
        ev.preventDefault();
        const formData = new FormData(ev.target);
        const commentContent = formData.get('postText');
        const commentUsername = formData.get('username');
        if(commentContent == '' || commentUsername == ''){
            alert('Please fill in all fields');
        }else{
            postComment(title, commentUsername, commentContent);
            ev.target.reset();
        }
        const container = ev.target.parentNode.parentNode.parentNode;
        const id = container['data-id'];
        loadComments(container, id);
    });
    return commentForm;
}