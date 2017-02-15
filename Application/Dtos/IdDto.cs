using System.ComponentModel.DataAnnotations;

namespace Application.Dtos
{
    public class IdDto<TPrimaryKey>
    {
        [Required]
        public TPrimaryKey Id { get; set; }
    }

    public class IdDto : IdDto<string>
    {
    }
}