using webapi.Server.Core.Models;

namespace webapi.Server.Core.BusinessLayers.GifLayer
{
    public interface IGifLayer
    {
        public List<GifModel> GetAllFavouriteGifs(string username);
        public bool SaveGif(GifModel convertGif);
    }
}
