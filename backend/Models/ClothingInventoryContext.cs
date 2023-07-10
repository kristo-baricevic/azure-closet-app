using Microsoft.EntityFrameworkCore;
using ClothingInventory.Models;
using Newtonsoft.Json;

namespace ClothingInventory.Models
{
    public class ClothingInventoryContext : DbContext
    {
        public ClothingInventoryContext(DbContextOptions<ClothingInventoryContext> options)
            : base(options)
        {
        }

        public DbSet<ClothingItem> ClothingItems { get; set; }
        public DbSet<ImageGallery> ImageGalleries { get; set; }        

        // Define your entity sets (DbSets) here

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Configure the ImageGallery entity
            modelBuilder.Entity<ImageGallery>(entity =>
            {
                entity.Property(e => e.Id).IsRequired();
                entity.Property(e => e.Images).HasConversion(
                    v => JsonConvert.SerializeObject(v), // Convert List<byte[]> to JSON string
                    v => JsonConvert.DeserializeObject<List<byte[]>>(v) // Convert JSON string to List<byte[]>
                );
            });

            // Other entity configurations...

            base.OnModelCreating(modelBuilder);
        }
    }
}