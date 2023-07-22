using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ClothingInventory.Models
{
    public class ClothingItem
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public required byte[] Image { get; set; }
        public required string Category { get; set; }

        public class EditClothingItemModel
        {
            public string Category { get; set; }
        }

    }
}