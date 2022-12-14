using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(LegacyWeb.Startup))]
namespace LegacyWeb
{
    public partial class Startup {
        public void Configuration(IAppBuilder app) {
            ConfigureAuth(app);
        }
    }
}
