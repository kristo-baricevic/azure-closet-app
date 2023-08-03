using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.FileProviders;
using Microsoft.EntityFrameworkCore;
using MySql.EntityFrameworkCore;
using Microsoft.AspNetCore.Cors;
using Microsoft.Extensions.Configuration;
using ClothingInventory.Models;
using System.IO;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using System;
using System.Drawing;
using System.Drawing.Imaging;
using static Microsoft.AspNetCore.Hosting.IWebHostBuilder;
using System.IO;
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
using Microsoft.AspNetCore.Identity;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Authentication.JwtBearer;


var builder = WebApplication.CreateBuilder(args);

// Add configuration
builder.Configuration.AddJsonFile("appsettings.json", optional: false, reloadOnChange: true);

// Get the token secret key from appsettings.json
var tokenSecretKey = builder.Configuration["TokenSecretKey"];
var key = Encoding.ASCII.GetBytes(tokenSecretKey);

// Add services to the container
builder.Services.AddControllers();
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(
        builder => builder
            .WithOrigins("http://localhost:5062", "https://azure-closet-app-production.up.railway.app/")
            .AllowAnyMethod()
            .AllowAnyHeader());
});

builder.Services.AddDbContext<ClothingInventoryContext>(options =>
    options.UseMySQL($"Server={Environment.GetEnvironmentVariable("MYSQLHOST")};Port={Environment.GetEnvironmentVariable("MYSQLPORT")};Database={Environment.GetEnvironmentVariable("MYSQLDATABASE")};Uid={Environment.GetEnvironmentVariable("MYSQLUSER")};Pwd={Environment.GetEnvironmentVariable("MYSQLPASSWORD")};"));

builder.Services.AddIdentity<User, IdentityRole>(options =>
{
    // Configure Identity options
})
.AddEntityFrameworkStores<ClothingInventoryContext>();


builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(options =>
{
    options.RequireHttpsMetadata = false;
    options.SaveToken = true;
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidIssuer = "Clothing Inventory App", 
        ValidAudience = "Clothing Inventory API", 
        IssuerSigningKey = new SymmetricSecurityKey(key),
    };
});

// Create and migrate the database
using (var scope = builder.Services.BuildServiceProvider().CreateScope())
{
    var dbContext = scope.ServiceProvider.GetRequiredService<ClothingInventoryContext>();
    dbContext.Database.Migrate();
}

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

app.UseStaticFiles();

app.UseRouting();

app.UseCors();

app.UseAuthentication();

app.UseAuthorization();

app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
    endpoints.MapFallbackToFile("/index.html");
});

app.UseUrls($"http://*:{Environment.GetEnvironmentVariable("PORT") ?? "80"}");

app.Run();

