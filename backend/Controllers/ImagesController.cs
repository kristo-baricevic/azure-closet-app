using Microsoft.AspNetCore.Mvc;
using ClothingInventory.Models;
using System.Linq;
using SixLabors.ImageSharp;
using SixLabors.ImageSharp.Processing;
using SixLabors.ImageSharp.Formats.Jpeg;

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
            var clothingItems = _dbContext.ClothingItems.ToList();
            var images = new List<object>();

            foreach (var clothingItem in clothingItems)
            {
                images.Add(new
                {
                    id = clothingItem.Id,
                    data = clothingItem.Image,
                    category = clothingItem.Category
                });
            }

        return Ok(images);
    }


        [HttpDelete("{id}")]
        public IActionResult DeleteImage(int id)
        {
            var clothingItem = _dbContext.ClothingItems.FirstOrDefault(c => c.Id == id);
            if (clothingItem == null)
            {
                return NotFound();
            }

            _dbContext.ClothingItems.Remove(clothingItem);
            _dbContext.SaveChanges();

            return NoContent();
        }
    }
}