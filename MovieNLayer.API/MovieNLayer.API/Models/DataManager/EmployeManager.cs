using MovieNLayer.API.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MovieNLayer.API.Models.DataManager
{
    public class EmployeManager : IDataRepository<Movie>
    {
        readonly MovieContext _movieContext;    

        public EmployeManager(MovieContext context)
        {
            _movieContext = context;
        }
        public void Add(Movie entity)
        {
            _movieContext.Movies.Add(entity);
            _movieContext.SaveChanges();
        }

        public void Delete(Movie movie)
        {
            _movieContext.Movies.Remove(movie);
            _movieContext.SaveChanges();
        }

        public Movie Get(int id)
        {
            return _movieContext.Movies
                 .FirstOrDefault(e => e.MovieId == id);
        }

        public IEnumerable<Movie> GetAll()
        {
             return _movieContext.Movies.ToList();
        }

        public void Update(Movie movie, Movie entity)
        {
            movie.Name = entity.Name;
            movie.Image = entity.Image;
            movie.Description = entity.Description;
            _movieContext.SaveChanges();
        }
    }
}
