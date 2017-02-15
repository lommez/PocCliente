using AutoMapper;
using Core.Domain.Entities;
using MongoDB.Bson;

namespace Application.Dtos
{
    public class ClienteMapperProfile : Profile
    {
        public ClienteMapperProfile()
        {
            CreateMap<Cliente, ClienteDtoWithId>()
                .ForMember(destination => destination.Id, opt => opt.MapFrom(source => source._id))
                .ReverseMap()
                .ForMember(destination => destination._id, opt => opt.MapFrom(source => new ObjectId(source.Id)));

            CreateMap<Cliente, ClienteDtoWithoutId>()
                .ReverseMap();
        }
    }
}