$(document).ready(function() {
  const ranks = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];
  const suits = ["hearts", "diamonds", "clubs", "spades"];

  suits.forEach(function(suit) {
    ranks.forEach(function(rank) {
      $("ul#deck").append("<li>" + rank + " of " + suit + "</li>");
    });
  });


});