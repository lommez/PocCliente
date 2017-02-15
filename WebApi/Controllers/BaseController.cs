using Core.Domain.Entities.Interfaces;
using Core.Repository.Interfaces;
using System.Web.Http;

namespace WebApi.Controllers
{
    public abstract class BaseController<TEntity> : ApiController
        where TEntity : class, IEntity
    {
        public IRepository<TEntity> Repository { get; set; }

        public BaseController(IRepository<TEntity> repository)
        {
            Repository = repository;
        }
    }
}