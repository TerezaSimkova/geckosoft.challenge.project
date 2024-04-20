using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using webapi.Server.Core.Models;

namespace webapi.Server.Database.Configurations
{
    public class UserModelConfiguration : IEntityTypeConfiguration<UserModel>
    {
        public void Configure(EntityTypeBuilder<UserModel> user)
        {
            user.HasKey(user => user.UserId);
            user.HasMany(user => user.Gifs)
                .WithMany(user => user.Users)
                .UsingEntity("UserGif",
                gif => gif.HasOne(typeof(GifModel))
                .WithMany()
                .HasForeignKey("GifsId")
                .HasPrincipalKey(nameof(GifModel.GifUniqueId)),
                user => user.HasOne(typeof(UserModel))
                .WithMany()
                .HasForeignKey("UsersId")
                .HasPrincipalKey(nameof(UserModel.UserId)),
                both => both.HasKey("GifsId", "UsersId"));
        }
    }
}
