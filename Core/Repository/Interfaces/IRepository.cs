using Core.Domain.Entities.Interfaces;
using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Core.Repository.Interfaces
{
    public interface IRepository<TEntity, TPrimaryKey>
        where TEntity : class, IEntity<TPrimaryKey>
        where TPrimaryKey : IEquatable<TPrimaryKey>
    {
        IEnumerable<TEntity> GetList();

        IQueryable<TEntity> GetAll();

        TEntity GetById(TPrimaryKey id);

        TEntity Insert(TEntity entity);

        TEntity Update(TEntity entity);

        bool Delete(TEntity entity);

        bool Delete(TPrimaryKey id);
    }

    public interface IRepository<TEntity> : IRepository<TEntity, ObjectId>
        where TEntity : class, IEntity<ObjectId>
    {
    }
}