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
    var imageBytes = new List<byte[]>();

    foreach (var clothingItem in clothingItems)
    {
        imageBytes.Add(clothingItem.Image);
    }

    return Ok(imageBytes);
    }
}}
