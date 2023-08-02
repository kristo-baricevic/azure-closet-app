using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using System;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;
using System.Text;
using System.Linq;
using ClothingInventory.Models;
using SixLabors.ImageSharp;
using SixLabors.ImageSharp.Processing;
using SixLabors.ImageSharp.Formats.Jpeg;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.StaticFiles;
using Newtonsoft.Json.Serialization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Authorization;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;




namespace ClothingInventory.Controllers
{

    [ApiController]
    [Route("backend/[controller]")]
    public class UploadController : ControllerBase
    {
        private readonly ClothingInventoryContext _dbContext;

        private readonly IConfiguration _configuration;

        public UploadController(ClothingInventoryContext dbContext, IConfiguration configuration)
        {
            _dbContext = dbContext;
            _configuration = configuration;
        }


        [HttpPost]
        [Authorize]
        [EnableCors]
        public ActionResult Upload([FromForm] string category, [FromForm] IFormFile imageFile)
        {
            Console.WriteLine("Upload endpoint called.");

            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);

            if (imageFile != null && imageFile.Length > 0)
            {
                try
                {
                    // Read the image file into a byte array
                    using (var memoryStream = new MemoryStream())
                    {
                        imageFile.CopyTo(memoryStream);
                        var imageBytes = memoryStream.ToArray();
                        Console.WriteLine("image coverted to imageBytes.");

                        // Preprocess the image
                        var processedImage = PreprocessImage(imageFile);
                        Console.WriteLine("image processed");


                        // Classify the category
                        var predictedCategory = ClassifyCategory(category);
                        Console.WriteLine("image classified");


                        // Save the image and category to the database
                        SaveImageAndCategory(processedImage, predictedCategory, userId);
                        Console.WriteLine("Upload endpoint called.");


                        // Return the predicted category as JSON
                        return Ok(new { category = predictedCategory });

                    }
                }
                catch (Exception ex)
                {
                    // Return an error message as JSON
                    return BadRequest(new { error = "Error loading or processing image: " + ex.Message });
                }
            }
            else
            {
                // Return an error message as JSON
                return BadRequest(new { error = "No image selected" });
            }
        }

        private byte[] PreprocessImage(IFormFile imageFile)
        {
            using (var image = Image.Load(imageFile.OpenReadStream()))
            {

                using (var processedImage = new MemoryStream())
                {
                    image.Save(processedImage, new JpegEncoder()); // Save the processed image to the stream
                    return processedImage.ToArray(); // Convert the processed image to a byte array
                }
            }
        }

        private string ClassifyCategory(string category)
        {
            // Implement the classification logic based on the user's input category
            if (category.ToLower() == "top")
                return "Top";
            else if (category.ToLower() == "bottom")
                return "Bottom";
            else if (category.ToLower() == "onepiece")
                return "OnePiece";
            else if (category.ToLower() == "shoes")
                return "Shoes";
            else if (category.ToLower() == "hat")
                return "Hat";
            else if (category.ToLower() == "accessory")
                return "Accessory";
            else
                return "Unknown";
        }

        private void SaveImageAndCategory(byte[] image, string category, string userId)
        {   
            // Admin user ID
            var isAdminUser = userId == "a6a0400a-37fe-4f79-a93f-6b9b1427b0cb"; 
            Console.WriteLine("isAdminUser: " + isAdminUser);

            if (isAdminUser)
            {
                var clothingItem = new ClothingItem
                {
                    Image = image,
                    Category = category,
                    // Add other properties if needed
                };

                Console.WriteLine("admin upload");
                _dbContext.ClothingItems.Add(clothingItem);
                _dbContext.SaveChanges();
            } 
            else
            {
            // Save the image and category to the database
                var userClothingItem = new UserClothingItem
                {
                    Image = image,
                    Category = category,
                    UserId = userId,
                    isUserImage = true,
                };

            Console.WriteLine("user upload");
            _dbContext.UserClothingItems.Add(userClothingItem);
            _dbContext.SaveChanges();
            }
        }
    }
}