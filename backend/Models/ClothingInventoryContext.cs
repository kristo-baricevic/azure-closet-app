using Microsoft.EntityFrameworkCore;
using ClothingInventory.Models;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;


namespace ClothingInventory.Models
{

    public class ClothingInventoryContext : IdentityDbContext<User>
    {
        public ClothingInventoryContext(DbContextOptions<ClothingInventoryContext> options)
            : base(options)
        {

        }

        public DbSet<ClothingItem> ClothingItems { get; set; }
        public DbSet<UserClothingItem> UserClothingItems { get; set; }

        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<User>().ToTable("Users");
        }
    }
}
