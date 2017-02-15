using Application.Dtos;
using AutoMapper;
using Core.Domain.Entities;
using Core.Repository;
using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Web.Http;

namespace WebApi.Controllers
{
    [RoutePrefix("api/cliente")]
    public class ClienteController : BaseController<Cliente>
    {
        public ClienteController(IClienteRepository repository)
            : base(repository)
        {
        }

        [HttpPost]
        [Route("Insert")]
        public ClienteDtoWithId Insert(ClienteDtoWithoutId model)
        {
            if (!ModelState.IsValid)
            {
                throw new Exception("Os dados do cliente são inválidos.");
            }

            var cliente = Mapper.Map<Cliente>(model);

            if (cliente == null)
            {
                throw new Exception("Modelo inválido.");
            }

            this.Repository.Insert(cliente);

            return Mapper.Map<ClienteDtoWithId>(cliente);
        }

        [HttpPut]
        [Route("Update")]
        public ClienteDtoWithId Update(ClienteDtoWithId model)
        {
            if (!ModelState.IsValid)
            {
                throw new Exception("Os dados do cliente são inválidos.");
            }

            var cliente = Mapper.Map<Cliente>(model);

            if (cliente == null)
            {
                throw new Exception("Modelo inválido.");
            }

            this.Repository.Update(cliente);

            return Mapper.Map<ClienteDtoWithId>(cliente);
        }

        [HttpGet]
        [Route("GetById")]
        public ClienteDtoWithId GetById(string id)
        {
            var cliente = this.Repository.GetById(new ObjectId(id));

            if (cliente == null)
            {
                throw new Exception("Cliente não encontrado.");
            }

            return Mapper.Map<ClienteDtoWithId>(cliente);
        }

        [HttpGet]
        [Route("GetList")]
        public IEnumerable<ClienteDtoWithId> GetList()
        {
            var list = this.Repository.GetList();

            return Mapper.Map<List<ClienteDtoWithId>>(list);
        }

        [HttpDelete]
        [Route("Delete")]
        public bool Delete(IdDto id)
        {
            if (!ModelState.IsValid)
            {
                throw new Exception("Id do cliente é inválido ou está nulo.");
            }

            return this.Repository.Delete(new ObjectId(id.Id));
        }
    }
}