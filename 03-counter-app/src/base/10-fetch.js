const apiKey = 'C1khQe3Z7R1W2lfT09myKeuShdqFYSGC';
const peticion = fetch(`http://api.giphy.com/v1/gifs/random`);

peticion
    .then(resp => resp.json())
    .then(({ data }) => { 
        const {url} = data.images.original.url;
        const img = document.createElement('img');
        img.src = url;
        console.log(data.images.original.url);
        document.body.append(img);
    })
    .catch(console.warn);