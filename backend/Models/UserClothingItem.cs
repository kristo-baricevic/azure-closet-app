using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace ClothingInventory.Models

{
    public class UserClothingItem
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public required byte[] Image { get; set; }
        public required string Category { get; set; }

        public bool isUserImage { get; set; }
        
        [ForeignKey("User")]
        public string UserId { get; set; }

        public class EditUserClothingItem
        {
            public string Category { get; set; }
        }
    }
}