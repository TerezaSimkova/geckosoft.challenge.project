using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using webapi.Server.Core.BusinessLayers.GifLayer;
using webapi.Server.Core.Models;

namespace webapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GifController : ControllerBase
    {
        private readonly IGifLayer _layer;

        public GifController(IGifLayer layer)
        {
            _layer = layer;
        }

        [HttpPost]
        public IActionResult SaveFavouriteGif([FromBody] Request request)
        {
            if (request != null)
            {
                var convertGif = MapGif(request);
                var saveGif = _layer.SaveGif(convertGif);
                if (saveGif)
                {

                    return Ok(saveGif);
                }
                else
                {
                    return BadRequest(false);
                }

            }
            return BadRequest(false);
        }

        [HttpGet]
        public IActionResult GetAll([FromQuery]string username)
        {
            if (!string.IsNullOrEmpty(username))
            {
                var myFavouriteGifs = _layer.GetAllFavouriteGifs(username);
                return Ok(myFavouriteGifs);
            }
            else
            {
                return BadRequest(false);
            }
        }

        private GifModel MapGif(Request request)
        {
            var gif = new GifModel
            {
                GifUniqueId = request.GifUniqueId,
                Title = request.Title,
                IsFavourite = request.IsFavourite
            };

            return gif;
        }
    }
    public class Request
    {
        public required string GifUniqueId { get; set; }
        public string Title { get; set; } = string.Empty;
        public bool? IsFavourite { get; set; }

    }
}
