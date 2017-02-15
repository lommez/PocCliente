using Core.Domain.Entities.Interfaces;
using Core.Repository.Interfaces;
using MongoDB.Bson;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;

namespace Core.Repository
{
    public abstract class Repository<TEntity, TPrimaryKey> : IRepository<TEntity, TPrimaryKey>
        where TEntity : class, IEntity<TPrimaryKey>
        where TPrimaryKey : IEquatable<TPrimaryKey>
    {
        private IMongoClient _mongoClient;
        private IMongoDatabase _mongoDatabase;
        private IMongoCollection<TEntity> _mongoCollection;
        private string _connectionString;
        private string _mongoDatabaseName;

        public Repository()
        {
            _connectionString = ConfigurationManager.AppSettings["mongoServer"];
            _mongoDatabaseName = ConfigurationManager.AppSettings["mongoDatabaseName"];
            _mongoClient = new MongoClient(_connectionString);
            _mongoDatabase = _mongoClient.GetDatabase(_mongoDatabaseName);
        }

        protected virtual void SetCollectionName(string collectionName)
        {
            _mongoCollection = _mongoDatabase.GetCollection<TEntity>(collectionName);
        }

        public virtual bool Delete(TPrimaryKey id)
        {
            FilterDefinition<TEntity> filter = Builders<TEntity>.Filter.Eq("_id", id);
            var result = _mongoCollection.DeleteOne(filter);
            return result.DeletedCount == 1;
        }

        public virtual bool Delete(TEntity entity)
        {
            FilterDefinition<TEntity> filter = Builders<TEntity>.Filter.Eq("_id", entity._id);
            var result = _mongoCollection.DeleteOne(filter);
            return result.DeletedCount == 1;
        }

        public virtual TEntity GetById(TPrimaryKey id)
        {
            FilterDefinition<TEntity> filter = Builders<TEntity>.Filter.Eq("_id", id);
            return _mongoCollection.Find(filter).FirstOrDefault();
        }

        public virtual IQueryable<TEntity> GetAll()
        {
            return _mongoCollection.AsQueryable();
        }

        public virtual IEnumerable<TEntity> GetList()
        {
            FilterDefinition<TEntity> filter = Builders<TEntity>.Filter.Empty;
            return _mongoCollection.Find(filter).ToList();
        }

        public virtual TEntity Insert(TEntity entity)
        {
            this._mongoCollection.InsertOne(entity);
            return entity;
        }

        public virtual TEntity Update(TEntity entity)
        {
            FilterDefinition<TEntity> filter = Builders<TEntity>.Filter.Eq("_id", entity._id);
            _mongoCollection.ReplaceOne(filter, entity);
            return entity;
        }
    }

    public abstract class Repository<TEntity> : Repository<TEntity, ObjectId>, IRepository<TEntity>
        where TEntity : class, IEntity<ObjectId>
    {
        public override TEntity Insert(TEntity entity)
        {
            entity._id = ObjectId.GenerateNewId();
            return base.Insert(entity);
        }
    }
}