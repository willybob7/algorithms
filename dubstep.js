function songDecoder(song){
  // ...
  var letters = [];
  var char = song.split(/WUB/g);
  char.forEach(function (value){
    if ( /\w/.test(value)){
       letters.push(value);
    }
  });
  var newSong = letters.join(" ");

  return newSong;
}
//problem description: https://www.codewars.com/kata/55b42574ff091733d900002f
