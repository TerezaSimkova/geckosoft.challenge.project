namespace webapi.Server.Core.Models
{
    public class GifModel
    {
        public required string GifUniqueId { get; set; }
        public string Title { get; set; } = string.Empty;
        public string GifUrl { get; set; } = string.Empty;
        public bool? IsFavourite { get; set; }
       
        public List<UserModel> Users { get; set; } = new List<UserModel>();
    }
}
