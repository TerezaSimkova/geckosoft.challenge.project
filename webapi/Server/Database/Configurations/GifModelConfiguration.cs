using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using webapi.Server.Core.Models;

namespace webapi.Server.Database.Configurations
{
    public class GifModelConfiguration : IEntityTypeConfiguration<GifModel>
    {
        public void Configure(EntityTypeBuilder<GifModel> gif)
        {
            gif.HasKey(gif => gif.GifUniqueId);
            gif.HasMany(gif => gif.Users).WithMany(user => user.Gifs);
        }
    }
}
