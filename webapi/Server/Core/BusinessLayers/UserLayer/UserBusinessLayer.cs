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

        public bool SaveUser(string username)
        {
            var isAdded = _userRepository.Add(username);
            return isAdded;
        }
    }
}
