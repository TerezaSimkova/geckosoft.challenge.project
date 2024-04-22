//Api key
const api_key = "";
const giphyUrl = `https://api.giphy.com/v1/gifs/trending?api_key=${api_key}&limit=25&offset=0&rating=g&bundle=messaging_non_clips`;

export type Gif = {
    id: string;
    title: string;
    rating: string;
    import_datetime: string;
    trending_datetime: string;
    alt_text?: string;
    user?: User;
    images: Image
};

type Image = {
    original: OriginalSize;
}

type OriginalSize = {
    width: string;
    height: string;
    webp: string;
}

type User = {
    username: string;
}

type GifResponse = {
    data: Gif[];
}


export const fetchGifs = async (): Promise<GifResponse> => {

    const gifPromise: GifResponse = await fetch(giphyUrl)
        .then(object => { return object.json(); })
        .catch(err => console.log("Error fetching gifs.", err));
    console.log(gifPromise);
    return gifPromise;
}


type SaveGifRequest = {
    GifUniqueId: string;
    Title: string;
    IsFavourite?: boolean;
}

export const saveGif = (gif: Gif) => {
    const gifToSave: SaveGifRequest = {
        GifUniqueId: gif.id,
        Title: gif.title,
        IsFavourite: true
    }

    return fetch("/api/gif", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(gifToSave)
    });
}
export const getFavouritesGifs = (username: string)=> {

    return fetch("/api/gif?username=" + username, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        }
    });
}


// User

export const saveUser = (username: string) => {

    return fetch("/api/user?username=" + username, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        }
    });
}