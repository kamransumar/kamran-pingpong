var numToBePonged =[];

function pingPong (number){
  for (var i = 1; i <= number; i+= 1){
    if(i % 15 === 0){
    numToBePonged.push("pingpong");

  }else if(i % 3 === 0){
      numToBePonged.push("ping");
    }
    else if(i % 5 === 0){
      numToBePonged.push("pong");
   }
   else{
     numToBePonged.push(i);
   };
};
return numToBePonged;
};

$(document).ready(function(){
  $("form#willitpong").submit(function(event){
    event.preventDefault();
    var number= parseInt($("input#formnumber").val());
    pingPong(number);

    numToBePonged.forEach(function(number){
      $("ul#output").append("<li>" + number + "</li>");
console.log(numToBePonged)
    });
  });
});
