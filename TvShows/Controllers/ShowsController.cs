using Microsoft.AspNetCore.Mvc;
using TvShows.Models;

namespace TvShows.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ShowsController : Controller
    {
        TvShowDbContext dbContext = new TvShowDbContext();

        [HttpGet("getShows")]
        public List<Show> GetShows()
        {
            return dbContext.Shows.ToList();
        }

        [HttpGet("getShows/{id}")]
        public Show GetById(int id)
        {
            return dbContext.Shows.FirstOrDefault(s => s.Id == id);
        }

        [HttpPost("addShow")]
        public Show addShow([FromBody] Show newShow)
        {
            if(newShow.Rating < 0 ||  newShow.Rating > 10)
            {
                throw new ArgumentOutOfRangeException("Rating must be between 0 and 10");
            }
            dbContext.Shows.Add(newShow);
            dbContext.SaveChanges();
            return newShow;
        }
    }
}
