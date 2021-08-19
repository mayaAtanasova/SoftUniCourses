function sortDouble(arr){
    arr.sort((a,b)=> a.length - b.length || a.localeCompare(b)).forEach(el =>{
        console.log(el)});
}

sortDouble(['test', 
'Deny', 
'omen', 
'Default']
)