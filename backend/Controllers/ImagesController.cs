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
    var imageUrls = new List<string>();

    foreach (var clothingItem in clothingItems)
    {
        var jpegImageBytes = ConvertToJpeg(clothingItem.Image);
        var imgSrc = $"data:image/jpeg;base64,{Convert.ToBase64String(jpegImageBytes)}";
        imageUrls.Add(imgSrc);
    }

    return Ok(imageUrls);
}

private byte[] ConvertToJpeg(byte[] imageBytes)
{
    using (var inputStream = new MemoryStream(imageBytes))
    using (var outputStream = new MemoryStream())
    {
        using (var image = Image.Load(inputStream))
        {
            image.Save(outputStream, new JpegEncoder());
        }

        return outputStream.ToArray();
    }
}

}}
