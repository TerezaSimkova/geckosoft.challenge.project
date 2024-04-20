namespace webapi.Server.Core.Interfaces
{
    public interface IRepository<T>
    {
        public List<T> GetAll();
        public bool Add(T item);
        public bool Remove(T item);
    }
}
