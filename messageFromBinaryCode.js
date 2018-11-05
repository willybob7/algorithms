function messageFromBinaryCode(code) {
 let i = 0;
 let characters = "";
 while (i < code.length){
  characters += String.fromCharCode(parseInt(code.slice(i, i +8), 2))
   i+=8;
 }

 return characters;
}
messageFromBinaryCode("010010000110010101101100011011000110111100100001")
