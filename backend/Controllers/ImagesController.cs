using Microsoft.AspNetCore.Mvc;
using ClothingInventory.Models;
using System.Linq;
using Microsoft.EntityFrameworkCore;


namespace ClothingInventory.Controllers
{
    [ApiController]
    [Route("backend/Images")]
    public class ImagesController : ControllerBase
    {
        private readonly ClothingInventoryContext _dbContext;

        public ImagesController(ClothingInventoryContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public IActionResult GetImages()
        {
            var imageGalleries = _dbContext.ImageGalleries.Include(g => g.Images).ToList();
            var images = imageGalleries.SelectMany(g => g.Images).ToList();
            return Ok(images);
        }
    }
}