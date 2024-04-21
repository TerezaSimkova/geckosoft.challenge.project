using webapi.Server.Core.Interfaces;
using webapi.Server.Core.Models;

namespace webapi.Server.Core.BusinessLayers.GifLayer
{
    public class GifBusinessLayer : IGifLayer
    {
        private readonly IGifRepository _gifRepository;

        public GifBusinessLayer(IGifRepository gifRepository)
        {
            _gifRepository = gifRepository;
        }

        public bool SaveGif(GifModel convertGif)
        {
            var saveGif = _gifRepository.Add(convertGif);
            if(saveGif)
            {
                return true;
            } else
            {
                return false;
            }
        }
    }
}
