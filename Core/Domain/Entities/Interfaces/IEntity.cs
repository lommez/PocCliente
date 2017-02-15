using MongoDB.Bson;

namespace Core.Domain.Entities.Interfaces
{
    public interface IEntity<TPrimaryKey>
    {
        TPrimaryKey _id { get; set; }
    }

    public interface IEntity : IEntity<ObjectId>
    {
    }
}