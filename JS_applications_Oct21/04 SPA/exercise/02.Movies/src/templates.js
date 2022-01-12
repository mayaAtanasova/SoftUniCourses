export const registerFormTemplate =
    `<form class="text-center border border-light p-5" action="#" method="post">
        <div class="form-group" >
            <label for="email">Email</label>
            <input type="email" class="form-control" placeholder="Email" name="email" value="">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" placeholder="Password" name="password" value="">
        </div>
        <div class="form-group">
            <label for="repeatPassword">Repeat Password</label>
            <input type="password" class="form-control" placeholder="Repeat-Password" name="repeatPassword"
                value="">
        </div>
        <button type="submit" class="btn btn-primary">Register</button>
</form >`;

export const loginFormTemplate =
    `<form class="text-center border border-light p-5" action="" method="">
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" placeholder="Email" name="email" value="">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" placeholder="Password" name="password" value="">
        </div>

        <button type="submit" class="btn btn-primary">Login</button>
    </form>`;

export function createMovieCard(img, title) {
    const movieCard =
        `<img class="card-img-top" src="${img}"
        alt="Card image cap" width="400">
    <div class="card-body">
        <h4 class="card-title">${title}</h4>
    </div>
    <div class="card-footer">
        <a href="#">
            <button type="button" class="btn btn-info">Details</button>
        </a>
    </div>`;
    return movieCard;
}

export const addMovieFormTemplate =
    `<form class="text-center border border-light p-5" action="#" method="">
        <h1>Add Movie</h1>
        <div class="form-group">
            <label for="title">Movie Title</label>
            <input type="text" class="form-control" placeholder="Title" name="title" value="">
        </div>
        <div class="form-group">
            <label for="description">Movie Description</label>
            <textarea class="form-control" placeholder="Description" name="description"></textarea>
        </div>
        <div class="form-group">
            <label for="imageUrl">Image url</label>
            <input type="text" class="form-control" placeholder="Image Url" name="imageUrl" value="">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>`;

export function createMovieDetails(title, img, description) {
    const movieDetailsTemplate =
        `<div class="container">
            <div class="row bg-light text-dark">
                <h1>Movie title: ${title}</h1>

                <div class="col-md-8">
                    <img class="img-thumbnail" src="${img}"
                        alt="Movie">
                </div>
                <div class="col-md-4 text-center">
                    <h3 class="my-3 ">Movie Description</h3>
                    <p>${description}</p>
                    <a class="btn btn-danger" href="#">Delete</a>
                    <a class="btn btn-warning" href="#">Edit</a>
                    <a class="btn btn-primary" href="#">Like</a>
                    <span class="enrolled-span">Liked 1</span>
                </div>
            </div>
        </div>`;
    return movieDetailsTemplate;
}

export function createEditFormTemplate(title, img) {
    const editFormTemplate =
        `<form class="text-center border border-light p-5" action="#" method="">
    <h1>Edit Movie</h1>
    <div class="form-group">
        <label for="title"></label>
        <input type="text" class="form-control" placeholder="Movie Title" value="${title}" name="title">
    </div>
    <div class="form-group">
        <label for="description">Movie Description</label>
        <textarea class="form-control" placeholder="Movie Description..." name="description"></textarea>
    </div>
    <div class="form-group">
        <label for="imageUrl">Image url</label>
        <input type="text" class="form-control" placeholder="Image Url" value="${img}" name="imageUrl">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
    </form>`;
    return editFormTemplate;
}