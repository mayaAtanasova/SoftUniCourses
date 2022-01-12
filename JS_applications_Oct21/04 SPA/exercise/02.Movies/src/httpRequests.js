export async function makeRequest(method, link, id, data, token) {
    const url = id == null ? `${link}`.trim() : `${link}/${id}`.trim();

    const options = {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
    };
    if(data != null){
        options['body'] = JSON.stringify(data);
    }
    if (token != undefined) {
        options.headers['X-Authorization'] = token;
    }
    try{
        const res = await fetch(url, options);
        if(res.ok != true){
            throw new Error(res.statusText);
        }
        if(res.status != 204){
            const data = await res.json();
                return data;
        }
    }catch(error){
        alert(error.message);
    }
}


