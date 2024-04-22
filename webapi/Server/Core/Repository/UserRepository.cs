using webapi.Server.Core.Interfaces;
using webapi.Server.Core.Models;
using webapi.Server.Database;

namespace webapi.Server.Core.Repository
{
    public class UserRepository : IUserRepository
    {

        private readonly GeckosoftAppContext _context;

        public UserRepository(GeckosoftAppContext context)
        {
            _context = context;
        }

        public bool Add(string username)
        {
            if (!string.IsNullOrEmpty(username))
            {
                var user = new UserModel
                {
                    Username = username,
                };
                _context.User.Add(user);
                _context.SaveChanges();
                return true;
            }
            else { return false; }
        }

        public List<UserModel> GetAll(string? item = null)
        {
            return _context.User.ToList();
        }

        public bool Remove(UserModel item)
        {
            if (item != null)
            {
                _context.User.Remove(item);
                _context.SaveChanges();
                return true;
            }
            else { return false; }
        }
    }
}
