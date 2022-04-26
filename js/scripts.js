function Ticket(movieTitle, time, userAge, cost) {
  this.movieTitle = movieTitle; 
  this.time = time; 
  this.userAge = userAge; 
  this.cost = cost;

}

Ticket.prototype.movie = function(movieTitle) {
  let movie = movieTitle; 
  console.log(movie); 
  const firstRelease = 5; 
  const nonFirstRelease = 2; 
  const aMovies = ["good", "better", "best" ]; 
  const bMovies = ["ok", "soso", "alright"]; 
  for (let i = 0; i <= aMovies.length -1; i++ ) {
    for (let b = 0; b <= bMovies.length -1; b++){ 
      if (aMovies[i].includes(movie)){
        return firstRelease;
        console.log(movie);
      }else if (bMovies[b].includes(movie)) {
        return nonFirstRelease;
        console.log(movie); 
      } else {
        alert("your movie does not exist")
      }
    }   
  }
}

Ticket.prototype.showTime = function(time) {
  let showTime = time;
  const primeTime = 5;
  const matinee = 2;
  if (showTime >= 19) {
    return primeTime;
  } else if (showTime < 19) {
    return matinee;
  }
}

Ticket.prototype.age = function(userAge) {
  let age = userAge;
  const child = 20;
  const adult = 10; 
  const senior = 5;
  if (age <= 15) {
    return child;
  } else if (age > 15 && age <= 55) {
    return adult;
  } else if (age > 55) {
    return senior;
  }
}

function price(userAge, showTime, movieTitle) {
  let price = userAge + showTime + movieTitle;
  return price; 
}

//UI 

