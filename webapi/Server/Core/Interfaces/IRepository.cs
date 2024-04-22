namespace webapi.Server.Core.Interfaces
{
    public interface IRepository<T>
    {
        public List<T> GetAll(string? item = null);
        public bool Remove(T item);
    }
}
