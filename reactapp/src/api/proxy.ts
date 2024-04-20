//Api key
const api_key = "";
const giphyUrl = `https://api.giphy.com/v1/gifs/trending?api_key=${api_key}&limit=25&offset=0&rating=g&bundle=messaging_non_clips`;

export type Gif = {
    title: string;
    rating: string;
    create_datetime: string;
    update_datetime: string;
    alt_text?: string;
    user?: User;
    images: Image
};

type Image = {
    original: OriginalSize;
}

type User = {
    username: string;
}


type OriginalSize = {
    width: string;
    height: string;
    webp: string;
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