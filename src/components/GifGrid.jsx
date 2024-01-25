const getGifs= async()=>{

    const url=`https://api.giphy.com/v1/gifs/search?api_key=ItI6mtM6Gy0pnZiBTiW5GlkWqnpV3T7i&q=${ category }&limited=20`
    const resp = await fetch(url);
    const {data} = await(resp.json())

    const gifs = data.map( img =>(
        {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    ))
    return gifs

}



export const GifGrid = ({category}) => {



    getGifs(category);


    return (
        <>
            <h3>{category}</h3>
            <p>Hola Mundo</p>
        </>

    )

}



