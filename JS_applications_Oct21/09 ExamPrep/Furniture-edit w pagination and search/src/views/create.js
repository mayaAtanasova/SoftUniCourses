import { html } from '../lib.js';
import { createItem } from '../api/data.js';

const createTemplate = (onSubmit, errorMsg, errors) => html`
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Create New Furniture</h1>
                <p>Please fill all fields.</p>
                ${errorMsg ? html`<div class='form-group error'>${errorMsg}</div>` : null}
            </div>
        </div>
        <form @submit=${onSubmit}>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-make">Make</label>
                        <input class=${'form-control' + (errors.make ? ' is-invalid' : ' is-valid' )} id="new-make" type="text" name="make">
                    </div>
                    <div class="form-group has-success">
                        <label class="form-control-label" for="new-model">Model</label>
                        <input class=${'form-control' + (errors.model ? ' is-invalid' : ' is-valid' )} id="new-model" type="text" name="model">
                    </div>
                    <div class="form-group has-danger">
                        <label class="form-control-label" for="new-year">Year</label>
                        <input class=${'form-control' + (errors.year ? ' is-invalid' : ' is-valid' )} id="new-year" type="number" name="year">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-description">Description</label>
                        <input class=${'form-control' + (errors.description ? ' is-invalid' : ' is-valid' )} id="new-description" type="text" name="description">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-price">Price</label>
                        <input class=${'form-control' + (errors.price ? ' is-invalid' : ' is-valid' )} id="new-price" type="number" name="price">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-image">Image</label>
                        <input class=${'form-control' + (errors.img ? ' is-invalid' : ' is-valid' )} id="new-image" type="text" name="img">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-material">Material (optional)</label>
                        <input class="form-control" id="new-material" type="text" name="material">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Create" />
                </div>
            </div>
        </form>
`;

export function createPage(ctx) {
    update(null, {});

    function update(errorMsg, errors) {
        ctx.render(createTemplate(onSubmit, errorMsg, errors));
    }

    async function onSubmit(event){
        event.preventDefault();
        const formData = [...(new FormData(event.target)).entries()];
        const data = formData.reduce((a, [k,v]) => Object.assign(a, {[k]:v.trim()}), {});
    
        try{
            let emptyFields = formData.filter(([k,v]) => k != 'material' && v.trim() == '');
            if(emptyFields.length > 0){
                const errors = emptyFields.reduce((a,[k]) => Object.assign(a, {[k]:true}), {});
                console.log(errors);
                throw {
                    error: new Error ('Please fill in all required fields!'),
                    errors
                };
            }else{
                if(data.make.trim().length < 4){
                    throw {
                        error: new Error('Input at least 4 symbols for the make!'),
                        errors: {
                            make: true
                        }
                    };
                }
                if(data.model.trim().length < 4){
                    throw {
                        error: new Error('Input at least 4 symbols for the model!'),
                        errors: {
                            model: true
                        }
                    };
                }
                if (isNaN(data.year) || Number(data.year) < 1950 || Number(data.year) > 2050){
                    throw {
                        error: new Error('Year must be between 1950 and 2050!'),
                        errors: {
                            year: true
                        }
                    };
                }
                if(data.description.trim().length < 10){
                    throw {
                        error: new Error('Description must be at least 10 symbols!'),
                        errors: {
                            description: true
                        }
                    };
                }
    
                if (isNaN(data.price) || Number(data.price) <= 0){
                    throw {
                        error: new Error('Price must be a positive number'),
                        errors: {
                            price: true
                        }
                    };
                }
    
                if(data.img.trim().length <= 0){
                    throw {
                        error: new Error('Image URL is required'),
                        errors: {
                            img: true
                        }
                    };
                }
            }

            data.year = Number(data.year);
            data.price = Number(data.price);
    
            const result = await createItem(data);
            event.target.reset();
            ctx.page.redirect('/details/' + result._id);
        }catch(err){
            const message = err.message || err.error.message;
            update(message, err.errors || {});
        }


    }
}