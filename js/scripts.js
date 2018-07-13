var numToBePonged=[];

function pingPong (number){
  for (var index = 1; index <= number; index += 1){
    if(index % 15 === 0){
    numToBePonged.push("pingpong")
    }
    else if(index % 3 === 0){
      numToBePonged.push("ping");
    }
    else if(index % 5 === 0){
      numToBePonged.push("pong");

  }
}
