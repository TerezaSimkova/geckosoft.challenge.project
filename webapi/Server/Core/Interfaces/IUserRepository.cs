using webapi.Server.Core.Models;

namespace webapi.Server.Core.Interfaces
{
    public interface IUserRepository : IRepository<UserModel>
    {
        public bool Add(string username);
    }
}
