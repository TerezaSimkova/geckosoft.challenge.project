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

        public List<GifModel> GetAll()
        {
            var gifModel = _context.Gif.Select(gif => new GifModel
            {
                GifUniqueId = gif.GifUniqueId,
                Title = gif.Title,
                GifUrl = gif.GifUrl,
                Users = gif.Users.Select(user => new UserModel
                {
                    UserId = user.UserId,
                    Username = user.Username
                }).ToList(),

            }).ToList();

            return gifModel;
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
