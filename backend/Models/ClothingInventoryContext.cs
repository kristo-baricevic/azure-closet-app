using Microsoft.EntityFrameworkCore;
using ClothingInventory.Models;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Identity;


namespace ClothingInventory.Models
{
    public class User : IdentityUser
        {

        }
        
    public class ClothingInventoryContext : DbContext
    {
    
        public ClothingInventoryContext(DbContextOptions<ClothingInventoryContext> options)
            : base(options)
        {
        }

        public DbSet<ClothingItem> ClothingItems { get; set; }

        // Define your entity sets (DbSets) here

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
        }
    }
}