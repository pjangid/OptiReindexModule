using System.ComponentModel.DataAnnotations;

namespace OptimizelyModules.CMS.Models;

public class LoginViewModel
{
    [Required]
    public string Username { get; set; }

    [Required]
    public string Password { get; set; }
}
