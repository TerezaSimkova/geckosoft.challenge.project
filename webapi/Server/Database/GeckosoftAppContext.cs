using Microsoft.EntityFrameworkCore;
using webapi.Server.Core.Models;
using webapi.Server.Database.Configurations;

namespace webapi.Server.Database
{
    public class GeckosoftAppContext : DbContext
    {
        // Database structure
        public DbSet<GifModel> Gif { get; set; }
        public DbSet<UserModel> User { get; set; }

        public GeckosoftAppContext(DbContextOptions<GeckosoftAppContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration<GifModel>(new GifModelConfiguration());
            modelBuilder.ApplyConfiguration<UserModel>(new UserModelConfiguration());

            base.OnModelCreating(modelBuilder);
        }
    }
}
