using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using ClothingInventory.Models;
using Microsoft.AspNetCore.Identity;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using System.Text;


namespace ClothingInventory.Controllers
{
    [ApiController]
    [Route("backend/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;
        private readonly IConfiguration _configuration; 

        public UserController(UserManager<User> userManager, SignInManager<User> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _configuration = configuration;
        }

        // API endpoint for user registration
        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterModel model)
        {
            // Perform validation checks on the model if needed
            // For example, check if the username or email already exists

            var user = new User
            {
                UserName = model.Username,
                Email = model.Email
                // Add any additional properties you want to set for the user
                // For example: FullName = model.FullName
            };

            var result = await _userManager.CreateAsync(user, model.Password);

            if (result.Succeeded)
            {
                // You can choose to sign the user in automatically after registration if needed
                // For example: await _signInManager.SignInAsync(user, isPersistent: false);
                return Ok(new { Message = "User registered successfully" });
            }

            // If user creation fails, return the errors
            return BadRequest(result.Errors);
        }

        // API endpoint for user login
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginModel model)
        {
            var result = await _signInManager.PasswordSignInAsync(model.Username, model.Password, isPersistent: false, lockoutOnFailure: false);

            if (result.Succeeded)
            {
                // User login successful

                // Retrieve the authenticated user
                var user = await _userManager.FindByNameAsync(model.Username);

                // Generate the token
                var token = GenerateToken(user);
                return Ok(new { isAuthenticated = true, token, user = new { username = model.Username } });
            }

            // Login failed, return error message
            return BadRequest(new { isAuthenticated = false, error = "Invalid login attempt" });
        }

        // API endpoint for user logout
        [HttpPost("logout")]
        public async Task<IActionResult> Logout()
        {
            await _signInManager.SignOutAsync();
                
            return Ok(new { Message = "User logged out successfully" });

        }

        private string GenerateToken(User user)
        {
            // Set token expiration time
            var tokenExpiration = DateTime.UtcNow.AddHours(1);

            // Get the token secret key from the configuration
            var tokenSecretKey = _configuration["TokenSecretKey"];

            // Create the security key 
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(tokenSecretKey));

            // Creating the signing Credentials
            var signingCredentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
        
            // Create the claims for the token (you can add any additional claims you need)
            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, user.Id),
                new Claim(ClaimTypes.Name, user.UserName),
                // Add any additional claims if needed
            };

            // Create the token
            var token = new JwtSecurityToken(
                issuer: "Clothing Inventory App",
                audience: "Clothing Inventory API",
                claims: claims,
                expires: tokenExpiration,
                signingCredentials: signingCredentials
            );

            // Serialize the token to a string
            var tokenString = new JwtSecurityTokenHandler().WriteToken(token);

            return tokenString;
        }
    }
}
