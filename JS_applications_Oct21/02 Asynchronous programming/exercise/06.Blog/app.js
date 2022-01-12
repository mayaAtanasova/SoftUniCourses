async function attachEvents() {
    //get needed elements
    const loadBtn = document.getElementById('btnLoadPosts');
    const viewBtn = document.getElementById('btnViewPost');
    const selectPosts = document.getElementById('posts');
    const postTitle = document.getElementById('post-title');
    const postBody = document.getElementById('post-body');
    const commentsList = document.getElementById('post-comments');

    //prepare event listeners
    loadBtn.addEventListener('click', loadPosts);
    viewBtn.addEventListener('click', viewPost);

    //set callback for load button to populate the select
    async function loadPosts(ev){
        let posts = await getPosts();
        posts = Object.values(posts);
        posts.forEach(post => {
            const optionEl = document.createElement('option');
            optionEl.value = post.id;
            optionEl.innerText = post.title;
            selectPosts.appendChild(optionEl);
        });
    }

    //set callback for view button
    async function viewPost(ev){
        //first clear the list
        commentsList.innerHTML = '';
        //get selected post id and filter all posts by it
        const postId = selectPosts.value;
        let posts = await getPosts();
        posts = Object.values(posts);
        const post = posts.filter(x => x.id == postId)[0];
        postTitle.innerText = post.title;
        postBody.innerText = post.body;
        //get all comments for teh selected id and populate the list
        let comments = await getComments(postId);
        comments.forEach(comment => {
            const li = document.createElement('li');
            li.id = comment.id;
            li.innerText = comment.text;
            commentsList.appendChild(li);
        });
    }
}

attachEvents();
//get posts functionality
async function getPosts() {
    try {
        const res = await fetch('http://localhost:3030/jsonstore/blog/posts');
        if (res.status != 200) {
            throw new Error('Error!');
        }
        const data = res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}
//get comments functionality
async function getComments(id) {
    try {
        const res = await fetch('http://localhost:3030/jsonstore/blog/comments/');
        if (res.status != 200) {
            throw new Error('Error!');
        }
        const data = await res.json();
        let filtered = Object.values(data).filter(x => x.postId == id);
        return filtered;
    } catch (error) {
        console.log(error);
    }
}