using Application.Dtos;
using Autofac;
using Autofac.Integration.WebApi;
using AutoMapper;
using AutoMapper.Configuration;
using Repositories.Cliente;
using System;
using System.Linq;
using System.Reflection;
using System.Web.Http;

namespace WebApi
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            GlobalConfiguration.Configure(WebApiConfig.Register);

            var builder = new ContainerBuilder();

            var config = GlobalConfiguration.Configuration;

            builder.RegisterApiControllers(Assembly.GetExecutingAssembly());

            builder
                .RegisterAssemblyTypes(typeof(ClienteRepository).Assembly)
                .Where(t => t.Name.EndsWith("Repository"))
                .AsImplementedInterfaces().InstancePerRequest();

            var container = builder.Build();
            config.DependencyResolver = new AutofacWebApiDependencyResolver(container);

            var mapper = new MapperConfigurationExpression();

            CreateMappingsInternal(mapper);

            Mapper.Initialize(mapper);
        }

        private static void CreateMappingsInternal(IMapperConfigurationExpression mapper)
        {
            var profiles = from t in typeof(ClienteMapperProfile).Assembly.GetTypes()
                           where typeof(Profile).IsAssignableFrom(t)
                           select (Profile)Activator.CreateInstance(t);

            foreach (var profile in profiles)
            {
                mapper.AddProfile(profile);
            }
        }
    }
}