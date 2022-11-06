// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let justDirectors = moviesArray.map(
        function movieToDirector(movie) {
          return movie.director;
        }
    )
    return justDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let justTheDrama = moviesArray.filter(
        function(movie){
            if (movie.director === "Steven Spielberg" && movie.genre.includes("Drama")) {
                return true;
            } else {
                return false;
            }
        }
    )
    return justTheDrama.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    let sumatorio ;
    
    if (moviesArray.length === 0) {
      return 0;
    }
    
    function reducer (accumulator, movie) {
      if (typeof movie.score === typeof 0) {
        return accumulator + movie.score;
      } else {
        return accumulator;
      }
    }
    sumatorio = moviesArray.reduce(reducer, 0);
    return sumatorio/moviesArray.length;
  }

// let nuestroArray = [ 1, 2, 5, 3, 12, 27 ];

// function reducer(accumulador, x) {
//   return accumulador + x;
// }

// nuestroArray.reduce(reducer, 0);

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let pelisDramas = moviesArray.filter(holicaracoli);
  if (pelisDramas.length === 0){
    return 0;
  }
  function holicaracoli (movie) {
    if (movie.genre.includes("Drama")) {
      return true;
    } else {
      return false;
    }
  }
  
  function dramaTime(accumulator, movie) {
    return accumulator + movie.score;
  }
  return pelisDramas.reduce(dramaTime, 0)/pelisDramas.length;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let moviesOrdered = moviesArray.map (movie=>movie);
return moviesOrdered.sort(function(a,b){
  if(a.year>b.year){
    return 1;
  } 
  else if(a.year<b.year){
    return -1;
    }else {
    if(a.title>b.title){
      return 1;
    }else {
      return -1;
    }
  };
})

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
let moviesSorted = moviesArray.sort(function(a,b){
  if(a.title>b.title){
    return 1;
   }else{ 
    return -1;
   }
  })
  let moviesTitles = moviesSorted.map(
    function (movie) {
      return movie.title;
    }
 )
return moviesTitles.slice(0,20);
}



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
let moviesPerMinute;


}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}

// let nuestroArray = [ 1, 2, 5, 3, 12, 27 ];

// for (let i = 0; i < nuestroArray.length; i++) {
//   nuestroArray[i]
// }
// nuestroArray.indexOf(12); // => 4

// function double(x) {
//   return x*2;
// }

// nuestroArray.map(x => x*2); // => [ 2, 4, 10, 6, ... ]
// nuestroArray.map(function double(x) { return x*2 }); // => [ 2, 4, 10, 6, ... ]