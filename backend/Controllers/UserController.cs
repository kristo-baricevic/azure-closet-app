using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using ClothingInventory.Models;
using Microsoft.AspNetCore.Identity;

namespace ClothingInventory.Controllers
{
    [ApiController]
    [Route("backend/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;

        public UserController(UserManager<User> userManager, SignInManager<User> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
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
                return Ok(new { isAuthenticated = true, user = new { username = model.Username } });
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
    }
}
