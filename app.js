

var racing = document.getElementById("bluecar");
var userCar = document.getElementById("user-car")
var result = document.getElementById("result")
const score = document.getElementById("score")
var game = document.getElementById("game-box")
var counter = 0;

// BLUE CAR MOVE

 racing.addEventListener("animationiteration", function() {
    var random =((Math.floor(Math.random() *3)) *130)
    racing.style.left = random +"px"
     counter++;
    // console.log(random)

 })
 
//  USER CAR MOVE
window.addEventListener("keydown", function(e){
   if(e.keyCode == "39"){  var raceCarLeft = parseInt(window.getComputedStyle(userCar).getPropertyValue("left"))
   if(raceCarLeft < 260) {userCar.style.left = (raceCarLeft + 130) + "px"}}

   if(e.keyCode == "37"){
    var raceCarLeft = parseInt(window.getComputedStyle(userCar).getPropertyValue("left"))
   if(raceCarLeft > 0) {userCar.style.left = (raceCarLeft - 130) + "px"}
 }
})

// game over page
 setInterval(   function gameOver (){

 
var bluecarTop = parseInt(window.getComputedStyle (bluecar).getPropertyValue ("top"))
var blueCarLeft = parseInt (window.getComputedStyle (bluecar).getPropertyValue("left"))
var raceCarLeft = parseInt(window.getComputedStyle(userCar).getPropertyValue("left"))
if( (blueCarLeft === raceCarLeft) && (bluecarTop > 250 ) && (bluecarTop < 450)){

result.style.display = "block";
game.style.display ="none";
score.innerHTML = `score: ${counter}`;
counter = 0;

}
}, 10)