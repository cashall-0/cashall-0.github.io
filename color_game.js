var numSquares = 6;
var colors=generateRandomColors(numSquares);
var squares=document.querySelectorAll(".squares");
var pickedColor=pickColor();
var colorDisplay=document.getElementById("selectedCDisplay");
var messageDisplayed = document.getElementById("message")
var h1= document.querySelector("h1")
var resetButton=document.querySelector("#reset");
var easyb= document.querySelector("#easyb");
var hardb = document.querySelector("#hardb");

easyb.addEventListener("click", function(){
	easyb.classList.add("selected");
	hardb.classList.remove("selected");
	numSquares=3
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor=colors[i];
		}
		else{
			squares[i].style.display="none";
		}
	}
})
hardb.addEventListener("click", function(){
	hardb.classList.add("selected");
	easyb.classList.remove("selected");
	numSquares=6;
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor=colors[i];
		squares[i].style.display="block";
	}
})


resetButton.addEventListener("click", function(){
	colors= generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor=colors[i];}
		h1.style.backgroundColor="steelblue";
		messageDisplayed.textContent="";
		this.textContent="new Colors"

})

colorDisplay.textContent=pickedColor;
for(var i=0; i<squares.length; i++){
	squares[i].style.backgroundColor=colors[i];
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		 if(clickedColor===pickedColor){
		 	resetButton.textContent="Play Again"
		 	messageDisplayed.textContent="Correct!";
		 	changeColors(clickedColor)
		 }
		 else{
		 	this.style.backgroundColor = "#232323";
		 	messageDisplayed.textContent="Try again";
		 }
	})
}
function changeColors(color){
	h1.style.backgroundColor=color;
	for(var i=0; i<squares.length; i++){
	squares[i].style.backgroundColor=color;}

}
function pickColor(){
	var random=Math.floor(Math.random() * colors.length)
	return colors[random]
}
function generateRandomColors(num){
	var arr = []
	for(var i=0; i<num; i++){
		arr.push(randomColor())
	}
	return arr
}
	function randomColor(){
		var r = Math.floor(Math.random()*256);
		var g = Math.floor(Math.random()*256);
		var b = Math.floor(Math.random()*256);
		return "rgb("+r+", "+g+", "+b+")"
	}
