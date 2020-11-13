async function fetchData(datasource) {
    let resource = await fetch(datasource).then(response => {
        // bang operator - means "does not equal" (or a falsy value)
        if (response.status !== 200) {
            throw new Error(`Danger Will Robinson! Here there be monster! Error ${response.status}`);
        }
        return response;

    }) 
    
    // if we get success, then we can retuen back our resource after we parse it into plain JS
    let dataset = await resource.json();

    return dataset[0];

    debugger;
   
}

export { fetchData};