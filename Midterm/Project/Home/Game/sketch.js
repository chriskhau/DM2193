var myImage1;
var myImage2;
var correctAnswer = 0;
var randNum;
var time = 0;
var time2 = 0;
var elapsed = 0;
var cnv;

function preload(){
	myImage1 = createImg("http://sites.bxmc.poly.edu/~chriskhau/Intro%20to%20Web%20Development/Midterm/Project/Game/potato%20images/potato-clip-art-russet_potato.jpg");
	myImage2 = createImg("http://sites.bxmc.poly.edu/~chriskhau/Intro%20to%20Web%20Development/Midterm/Project/Game/potato%20images/potato-clip-art-yukon_gold_potato.jpg");
	myImage1.hide();
	myImage2.hide();
}

function keyTyped(){

	if (key === 'r'){
		time2 = time;
		clear();
		correctAnswer = 0;
			for (var i = 0;i<10;i++){
			for (var j=0;j<10;j++){

				randNum = int(random(0,3));
				if (randNum > 0){
					correctAnswer++;
				}
				if (randNum == 1){
					image(myImage1,i*40,j*40,25,25);
			}
				if (randNum ==2){
					image(myImage2,i*40,j*40,25,25);
			}


		}

	}
	}
	else if (key === "e"){
		clear();
		textSize(38);
		text("The correct number is " + correctAnswer,0,140);
	}

}

function centerCanvas() {
  var x = width + 100;
  var y = (windowHeight) / 4 - 50;
  cnv.position(x, y);
}

function setup(){
	cnv = createCanvas(500,500);
	centerCanvas();
	for (var i = 0;i<10;i++){
			for (var j=0;j<10;j++){

				randNum = int(random(0,3));
				if (randNum > 0){
					correctAnswer++;
				}
				if (randNum == 1){
					image(myImage1,i*40,j*40,25,25);
			}
				if (randNum ==2){
					image(myImage2,i*40,j*40,25,25);
			}


		}

	}
	//text(correctAnswer,10,10);

}

function windowResized() {
  centerCanvas();
}


function draw(){
}