using webapi.Server.Core.Interfaces;

namespace webapi.Server.Core.BusinessLayers.UserLayer
{
    public class UserBusinessLayer : IUserLayer
    {
        private readonly IUserRepository _userRepository;

        public UserBusinessLayer(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }
    }
}
