using Core.Domain.Entities.Interfaces;
using Core.Domain.Enums;
using System.Collections.Generic;

namespace Core.Domain.Entities
{
    public class Cliente : Entity
    {
        public string Nome { get; set; }

        public TipoPessoaEnum TipoPessoa { get; set; }

        public string Documento { get; set; }

        public string Email { get; set; }

        public IEnumerable<string> Telefones { get; set; }
    }
}