namespace webapi.Server.Core.Models
{
    public class UserModel
    {
        public int UserId { get; set; }
        public string Username { get; set; } = string.Empty;

        public List<GifModel> Gifs { get; set; } = new List<GifModel>();
    }
}
