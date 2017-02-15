using Core.Repository;

namespace Repositories.Cliente
{
    public class ClienteRepository : Repository<Core.Domain.Entities.Cliente>, IClienteRepository
    {
        public ClienteRepository()
        {
            base.SetCollectionName("clientes");
        }
    }
}