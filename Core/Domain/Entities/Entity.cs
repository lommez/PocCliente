using Core.Domain.Entities.Interfaces;
using MongoDB.Bson;

namespace Core.Domain.Entities
{
    public abstract class Entity<TPrimaryKey> : IEntity<TPrimaryKey>
    {
        public TPrimaryKey _id { get; set; }
    }

    public abstract class Entity : Entity<ObjectId>, IEntity
    {
    }
}