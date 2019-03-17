using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using VirtualWaiter.ViewModels;
using WebSiteCore.DAL.Entities;

namespace VirtualWaiter.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly EFDbContext _context;
        public UserController(EFDbContext context)
        {
            _context = context;
        }

        [HttpGet("list")]
        public IEnumerable<UserViewModel> WeatherForecasts()
        {
            var list = _context.Users.Select(u=>new UserViewModel {
                Id = u.Id,
                Email = u.Email
            }).ToList();

            return list;

            //return new List<UserViewModel>
            //{
            //    new UserViewModel
            //    {
            //        Id = "fhgf",
            //        Email = "email@email.com"
            //    }
            //};
        }
    }
}