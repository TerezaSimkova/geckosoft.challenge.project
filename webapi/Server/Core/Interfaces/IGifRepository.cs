using webapi.Server.Core.Models;

namespace webapi.Server.Core.Interfaces
{
    public interface IGifRepository : IRepository<GifModel>
    {
        public bool Add(GifModel model);
    }
}
