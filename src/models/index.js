/*PIVOTE */

const Genre = require("./Genre");
const Movie = require("./Movie");

/*Movies N-N Genres*/

Movie.belongsToMany(Genre, {through: 'MoviesGenres'})
Genre.belongsToMany(Movie, {through: 'MoviesGenres'})