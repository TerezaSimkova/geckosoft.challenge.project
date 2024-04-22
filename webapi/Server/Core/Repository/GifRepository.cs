using System.Linq;
using webapi.Server.Core.Interfaces;
using webapi.Server.Core.Models;
using webapi.Server.Database;

namespace webapi.Server.Core.Repository
{
    public class GifRepository : IGifRepository
    {

        private readonly GeckosoftAppContext _context;

        public GifRepository(GeckosoftAppContext context)
        {
            _context = context;
        }

        public bool Add(GifModel item)
        {
            if (item != null)
            {
                _context.Gif.Add(item);
                _context.SaveChanges();
                return true;
            }
            else { return false; }
        }

        public List<GifModel> GetAll(string? username = null)
        {
            if(username != null)
            {
                var gifModel = _context.Gif
                    .Where(gif => gif.Users.Any(user => user.Username.Equals(username)))
                    .ToList();

                return gifModel;
            }
            return new List<GifModel>();

            
        }

        public bool Remove(GifModel item)
        {
            if(item != null)
            {
                _context.Gif.Remove(item);
                _context.SaveChanges();
                return true;
            }
            else { return false; }
        }
    }
}
