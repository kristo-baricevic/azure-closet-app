using Microsoft.AspNetCore.Mvc;

public class SpaController : ControllerBase
{
    public IActionResult Index()
    {
        return PhysicalFile(Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "index.html"), "text/html");
    }
}
