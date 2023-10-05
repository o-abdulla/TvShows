using Microsoft.AspNetCore.Mvc;
using TvShows.Models;

namespace TvShows.Controllers
{
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
    }
}
