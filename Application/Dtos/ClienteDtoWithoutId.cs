using Core.Domain.Enums;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Application.Dtos
{
    public class ClienteDtoWithoutId
    {
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
}