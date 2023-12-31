using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using ClothingInventory.Models;
using Microsoft.AspNetCore.Identity;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using System.Text;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Authorization;

namespace ClothingInventory.Controllers
{
    [ApiController]
    [Route("backend/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;
        private readonly IConfiguration _configuration; 
        private readonly ClothingInventoryContext _dbContext;


        public UserController(UserManager<User> userManager, SignInManager<User> signInManager, IConfiguration configuration, ClothingInventoryContext dbContext)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _configuration = configuration;
            _dbContext = dbContext;
        }

        // API endpoint for user registration
        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterModel model)
        {

            var user = new User
            {
                UserName = model.Username,
                Email = model.Email
            };

            var result = await _userManager.CreateAsync(user, model.Password);

            //if successful then login with new username
            if (result.Succeeded)
            {
                var loginResult = await _signInManager.PasswordSignInAsync(model.Username, model.Password, isPersistent: false, lockoutOnFailure: false);

                if (loginResult.Succeeded)
                {
                    user = await _userManager.FindByNameAsync(model.Username);

                    var token = GenerateToken(user);
                    return Ok(new { Message = "User registered and logged in successfully", isAuthenticated = true, token, user = new { username = model.Username } });
                }
                else
                {
                    // If user creation fails, return the errors
                    return BadRequest(new { Message = "User registered, but login failed.", isAuthenticated = false });
                }
            }
            return BadRequest(result.Errors);
        }

        // API endpoint for user login
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginModel model)
        {
            var result = await _signInManager.PasswordSignInAsync(model.Username, model.Password, isPersistent: false, lockoutOnFailure: false);

            if (result.Succeeded)
            {
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

        [HttpPost("loginAnonymous")]
        public async Task<IActionResult> LoginAnonymous()
        {
            var anonymousUser = new User
            {
                // Generate a unique username for each anonymous user
                UserName = "AnonymousUser_" + Guid.NewGuid().ToString(), 
            };

            var result = await _userManager.CreateAsync(anonymousUser);

            if (result.Succeeded)
            {
                // Generate the token
                var token = GenerateToken(anonymousUser);
                return Ok(new { isAuthenticated = true, token, user = new { username = anonymousUser.UserName } });
            }

            // Login failed, return error message
            return BadRequest(new { isAuthenticated = false, error = "Anonymous login failed" });
        }


        [HttpGet("current")]
        [Authorize]
        public IActionResult GetCurrentUserData()
        {
            // Get the authenticated user's username from the claims
            var username = User.FindFirstValue(ClaimTypes.Name);

            if (string.IsNullOrEmpty(username))
            {
                // If the username is null or empty, return a 404 Not Found response
                return NotFound();
            }

            // Retrieve the authenticated user's data from the database based on the username
            var user = _dbContext.Users.FirstOrDefault(u => u.UserName == username);

            if (user != null)
            {
                // Return the authenticated user's data as JSON
                return Ok(user);
            }
            else
            {
                // If the user is not found, return a 404 Not Found response
                return NotFound();
            }
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
