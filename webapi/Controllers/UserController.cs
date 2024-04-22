using Microsoft.AspNetCore.Mvc;
using webapi.Server.Core.BusinessLayers.UserLayer;

namespace webapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : Controller
    {
        private readonly IUserLayer _layer;

        public UserController(IUserLayer layer)
        {
            _layer = layer;
        }
        public IActionResult SaveUser([FromQuery] string username)
        {
            if (!string.IsNullOrEmpty(username))
            {
                var saveUser = _layer.SaveUser(username);
                if (saveUser) {
                    return Ok(true);
                }
                else
                {
                    return BadRequest(false);
                }
            }
            else
            {
                return BadRequest(false);
            }
        }
    }

}
