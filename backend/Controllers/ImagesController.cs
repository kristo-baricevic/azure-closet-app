using Microsoft.AspNetCore.Mvc;
using ClothingInventory.Models;
using System.Linq;
using SixLabors.ImageSharp;
using SixLabors.ImageSharp.Processing;
using SixLabors.ImageSharp.Formats.Jpeg;
using static ClothingInventory.Models.ClothingItem;
using System.Security.Claims;

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
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);

            Console.WriteLine("userId retrieved", userId);

            var userClothingItems = _dbContext.UserClothingItems
            .Where(item => item.UserId == userId)
            .ToList();

            var sharedClothingItems = _dbContext.ClothingItems.ToList();
            var images = new List<object>();

            foreach (var sharedClothingItem in sharedClothingItems)
            {
                images.Add(new
                {
                    id = sharedClothingItem.Id,
                    data = sharedClothingItem.Image,
                    category = sharedClothingItem.Category,
                });
            }

            foreach (var userClothingItem in userClothingItems)
            {
                images.Add(new
                {
                    id = userClothingItem.Id,
                    data = userClothingItem.Image,
                    category = userClothingItem.Category,
                    userId = userClothingItem.UserId,
                });
            }

        return Ok(images);
    }

        [HttpPut("{id}")]
        public IActionResult UpdateImage(int id,[FromBody] EditClothingItemModel editModel)    
        {
            var clothingItem = _dbContext.UserClothingItems.FirstOrDefault(c => c.Id == id);
            if (clothingItem == null)
            {
                return NotFound();
            }

            clothingItem.Category = editModel.Category;
            _dbContext.SaveChanges();

            return Ok(new
            {
            id = clothingItem.Id,
            data = clothingItem.Image,
            category = clothingItem.Category
            }); 

        }

        [HttpDelete("{id}")]
        public IActionResult DeleteImage(int id)
        {
            var clothingItem = _dbContext.UserClothingItems.FirstOrDefault(c => c.Id == id);
            if (clothingItem == null)
            {
                return NotFound();
            }

            Console.WriteLine("DeleteIamge endpoint hit");

            _dbContext.UserClothingItems.Remove(clothingItem);
            _dbContext.SaveChanges();

            return NoContent();
        }
    }
}