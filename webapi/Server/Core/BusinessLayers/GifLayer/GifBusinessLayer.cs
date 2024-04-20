using webapi.Server.Core.Interfaces;

namespace webapi.Server.Core.BusinessLayers.GifLayer
{
    public class GifBusinessLayer : IGifLayer
    {
        private readonly IGifRepository _gifRepository;

        public GifBusinessLayer(IGifRepository gifRepository)
        {
            _gifRepository = gifRepository;
        }
    }
}
