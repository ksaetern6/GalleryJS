var chico = ["Chico State", "Bear", "Moms", "Cinemark14","Ramen Place"];
var current = "test";

function shuffleGallery()
{
  var arrsize = chico.length;
  var rand = Math.floor(Math.random()*arrsize);
  var randvalue = chico[rand];
  while(randvalue==current){
    var rand = Math.floor(Math.random()*arrsize);
    randvalue = chico[rand];
  }
  current = randvalue;
  console.log(randvalue);
}
