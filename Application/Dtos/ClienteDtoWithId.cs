using Core.Domain.Enums;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Application.Dtos
{
    public class ClienteDtoWithId<TPrimaryKey>
    {
        [Required]
        public TPrimaryKey Id { get; set; }

        [Required]
        public string Nome { get; set; }

        [Required]
        public TipoPessoaEnum TipoPessoa { get; set; }

        [Required]
        public string Documento { get; set; }

        [Required]
        public string Email { get; set; }

        public IEnumerable<string> Telefones { get; set; }
    }

    public class ClienteDtoWithId : ClienteDtoWithId<string>
    {
    }
}