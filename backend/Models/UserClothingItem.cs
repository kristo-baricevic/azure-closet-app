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
        public int UserId { get; set; }
        public User User { get; set; }

        public class EditUserClothingItem
        {
            public string Category { get; set; }
        }
    }
}