var counter = 0;
var blowCounter = 0;
function displayStory(){
	if (counter == 8){
		$("#storyButton").hide(400);
		$("#theEnd").show(1000);
		$("#text").text("THE END");

	}

	if (counter == 7){
		$("#buttonText").text("They all have a nice dinner and the wolf never tried to eat the pigs ever again.")

	TweenMax.to($("#pig1"),0.5,{top:"160px",repeat:20,yoyo:true});
	TweenMax.to($("#pig2"),0.5,{top:"160px",repeat:20,delay:0.25,yoyo:true});		
	TweenMax.to($("#pig3"),0.5,{top:"160px",repeat:20,delay:0.5,yoyo:true});	
	TweenMax.to($("#wolf"),0.5,{top:"160px",repeat:20,delay:0.75,yoyo:true});		
	counter++;
	}

	if (counter == 6){
		$("#buttonText").text("The wolf accepts this deal and the pigs start to bring out their pot to cook supper");
		TweenLite.to($("#wolf"),3,{left:"300px"})
		TweenLite.to($("#pig3"),3,{left:"450px"});
		TweenLite.to($("#pig2"),3,{left:"650px",delay:1});
		TweenLite.to($("#pig1"),3,{left:"750px",delay:1});
		TweenLite.to($("#pot"), 6, {opacity:100,delay:3});
		TweenLite.to($("#fire"), 6, {opacity:100,delay:3});
		counter++;
	
	}

	if (counter == 5){
		$("#buttonText").text("The pigs hear the wolf and the brick pig says, \"We'll give you food as long as you don't try to eat us anymore\"");
		counter++;
	}

	if (counter == 3){
		$("#buttonText").text(" ");
		$("#blowWind").show(400);
		counter++;
	}

	if (counter == 2){
		console.log(counter);
		$("#buttonText").text("All three of the pigs refuse to leave the brick house.")
		counter++;
	}
    if (counter == 1){
    	console.log(counter);
    	$("#buttonText").text("The wolf says, \"Come out little piggies, I haven't eaten all day and I'm starving. If you don't, I will blow your house down");
    	counter++;
    }
    if (counter == 0){
    	console.log(counter);
        $("#buttonText").text("But the wolf quickly arrives outside of the brick house.");
        counter++;
        TweenLite.to($("#wolf"),4,{left:"500px"});
    }
}
function blowWind(){
	blowCounter++;
	if (blowCounter == 1){
		$("#blowWind").text("Keep clicking to blow the house down")
	}
	if (blowCounter == 5){
		$("#blowWind").text("Keep clicking to try and blow the house down")
	$("#puff1").show(400);
	$("#puff2").show(400);
	$("#puff3").show(400);
	TweenLite.to($("#puff1"),1.5,{left:"65%",top:"100px"});
	TweenLite.to($("#puff2"),1.5,{left:"65%",top:"300px"});
	TweenLite.to($("#puff3"),1.5,{left:"65%"});	

	TweenLite.to($("#puff1"),2,{left:"55%",top:"0px",rotation:60,delay:1.5});
	TweenLite.to($("#puff2"),2,{left:"55%",top:"200px",rotation:60,delay:1.5});
	TweenLite.to($("#puff3"),2,{left:"55%",top:"90px",rotation:60,delay:1.5});

	TweenLite.to($("#puff1"),2,{opacity:0,delay:1.5});	
	TweenLite.to($("#puff2"),2,{opacity:0,delay:1.5});	
	TweenLite.to($("#puff3"),2,{opacity:0,delay:1.5});	
}
if (blowCounter == 10){
	$("#puff4").show(400);
	$("#puff5").show(400);
	$("#puff6").show(400);
	TweenLite.to($("#puff4"),1.5,{left:"65%",top:"100px"});
	TweenLite.to($("#puff5"),1.5,{left:"65%",top:"300px"});
	TweenLite.to($("#puff6"),1.5,{left:"65%"});	

	TweenLite.to($("#puff4"),2,{left:"55%",top:"0px",rotation:60,delay:1.5});
	TweenLite.to($("#puff5"),2,{left:"55%",top:"200px",rotation:60,delay:1.5});
	TweenLite.to($("#puff6"),2,{left:"55%",top:"90px",rotation:60,delay:1.5});

	TweenLite.to($("#puff4"),2,{opacity:0,delay:1.5});	
	TweenLite.to($("#puff5"),2,{opacity:0,delay:1.5});	
	TweenLite.to($("#puff6"),2,{opacity:0,delay:1.5});	

	counter++;
	$("#buttonText").text("The wolf says, \"Okay, I give up, I just wanted something to eat today\"");
	$("#blowWind").hide(400);
}

}
function load(){
	$("#puff1").hide();
	$("#puff2").hide();
	$("#puff3").hide();
	$("#puff4").hide();
	$("#puff5").hide();
	$("#puff6").hide();	
	$("#blowWind").hide();
	$("#theEnd").hide();
	TweenLite.to($("#pot"), 0, {opacity:0});
	TweenLite.to($("#fire"), 0, {opacity:0});
	TweenLite.to($("#pig2"),3,{left:"71%"})
	TweenLite.to($("#pig1"),3,{left:"71%",delay:1});

}
/*

counter = 0;
text: the straw pig and stick pig safely makes it into his brother's brick house
counter++

counter = 1;
text: The wolf chases after the pig and eventually arrives at the brick house
counter++

counter = 2;
text:Come out little piggies, I haven't eaten all day and I'm Starving. If you don't I will blow your house down
counter++

counter = 3;
text: all of the pigs refuse to leave the brick house.
counter++;

counter = 4;
text: blank
button that needs to be pressed 10 times for the wind to come out
counter++;
wind bounces off of the brick house. 

counter = 5;
text: Wolf: "okay i give up, I just wanted something to eat"
counter++;

counter = 6;
text: brick pig offers him food in exchange for him to stop trying to eat them.
counter++;

counter = 7;
text: the wolf accepts.
pigs leave the house and brings out their pot & wood
counter++;

counter = 8;
text: all of them ate dinner together and the wolf never tried to eat the pigs ever again.
*/