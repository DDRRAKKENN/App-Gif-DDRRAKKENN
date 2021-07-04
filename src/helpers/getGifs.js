

export const getGifs = async(category)=>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=CkdA7UCbPyOtx7b2jc5p3W0KfMsNjn9L`
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs =data.map(img =>{
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gifs;
}