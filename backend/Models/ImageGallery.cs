using System.Collections.Generic;

namespace ClothingInventory.Models
{
    public class ImageGallery
    {
        public int Id { get; set; }
        public required List<byte[]> Images { get; set; }
    }
}
