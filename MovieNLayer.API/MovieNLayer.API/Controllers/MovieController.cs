using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MovieNLayer.API.Models;
using MovieNLayer.API.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MovieNLayer.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieController : ControllerBase
    {
         readonly IDataRepository<Movie> _dataRepository;
        public MovieController(IDataRepository<Movie> dataRepository)
        {
            _dataRepository = dataRepository;
        }
      
        [HttpGet]
        public IActionResult Get()
        {
            IEnumerable<Movie> movies = _dataRepository.GetAll();
            return Ok(movies);
        }
        [EnableCors("MovieNLayer.API")]
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
           
            Movie movie = _dataRepository.Get(id);
            if (movie == null)
            {
                return NotFound("Film Bulunamadı.");
            }
            return Ok(movie);
        }

        [HttpPost]
        public IActionResult Post([FromBody] Movie movie)
        {
            if (movie == null)
            {
                return BadRequest("Film bulunamadı.");
            }
            _dataRepository.Add(movie);
            return CreatedAtRoute(
                "Get",
                new { Id=movie.MovieId},
                movie);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id,[FromBody] Movie movie)
        {
            if (movie == null)
            {
                return BadRequest("Film bulunamadı.");
            }
            Movie movieToUpdate = _dataRepository.Get(id);
            if (movieToUpdate == null)
            {
                return NotFound("Film Kaydı Bulunamadı");
            }
            _dataRepository.Update(movieToUpdate, movie);
            return NoContent();
        }
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Movie movie = _dataRepository.Get(id);
            if (movie == null)
            {
                return NotFound("Film Kaydı Bulunamadı.");
            }
            _dataRepository.Delete(movie);
            return NoContent();
        }

    }
}

