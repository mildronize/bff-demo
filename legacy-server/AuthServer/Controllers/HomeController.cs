using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace AuthServer.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger) => _logger = logger;

        public IActionResult Index() => Content("Home");
    }
}
