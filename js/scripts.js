function Ticket(movieTitle, time, userAge) {
  this.movieTitle = movieTitle; 
  this.time = time; 
  this.userAge = userAge; 
  this.cost = 0;

}

Ticket.prototype.movie = function(movieTitle) {
  let movie = movieTitle; 
  console.log(movie);  
  const aMovies = ["Good", "Better", "Best" ]; 
  const bMovies = ["Ok", "Soso", "Alright"]; 
  for (let i = 0; i <= aMovies.length -1; i++ ) {
    for (let b = 0; b <= bMovies.length -1; b++){ 
      if (aMovies[i].includes(movie)){
        this.cost += 5;
        break;
      }else if (bMovies[b].includes(movie)) {
        this.cost += 2;
        break; 
      } 
    }   
  }
}

Ticket.prototype.showTime = function(time) {
  let showTime = time;
  if (showTime >= 19) {
    this.cost += 2;
  } else if (showTime < 19) {
    this.cost += 5;
  }
}

Ticket.prototype.age = function(userAge) {
  let age = userAge;
  if (age <= 15) {
    this.cost += 20; 
  } else if (age > 15 && age <= 55) {
    this.cost += 10;
  } else if (age > 55) {
    this.cost += 5;
  }
}

//UI 
function timeConverter (showTime) {
  let newTime = showTime;
  let finalTime = 0; 
  if (newTime > 12) {
    return finalTime = newTime - 12 + "pm"; 
  }else {
    return newTime; 
  }
}

$(document).ready(function() {
  $("form#movie-picker").submit(function(event) {
    event.preventDefault();

    const movieOptions = $("select#movieOptions").val(); 
    const time = parseInt($("select#time").val());
    const viewerAge = parseInt($("#viewerAge").val());

    let newTicket = new Ticket(movieOptions, time, viewerAge); 
    newTicket.movie(movieOptions); 
    newTicket.showTime(time); 
    newTicket.age(viewerAge); 

    const finalTime = timeConverter(time); 
    const totalPrice = newTicket.cost; 
    $("#total").show();
    $(".movie-picker").text(movieOptions);
    $(".time").text(finalTime);
    $(".total").text(totalPrice);
    $("#movie-picker").each(function(){
      this.reset();
    });
  });
});