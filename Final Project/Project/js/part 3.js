var counter = 0;
var blowCounter = 0;
function displayStory(){
	if (counter == 5){
		$("#storyButton").hide();
		TweenLite.to($("#pig1"),3,{left:"90%",opacity:0});
		TweenLite.to($("#pig2"),1.5,{left:"90%",opacity:0});
		TweenLite.to($("#wolf"),3,{left:"60%",opacity:0,delay:2})
		TweenLite.to($("#brokenHouse"),3,{opacity:0,delay:2})
	}

	if (counter == 3){
		$("#buttonText").text(" ");
		$("#blowWind").show(400);
		counter++;
	}

	if (counter == 2){
		console.log(counter);
		$("#buttonText").text("Both of the pigs refuse to leave the stick house.")
		counter++;
	}
    if (counter == 1){
    	console.log(counter);
    	$("#buttonText").text("The wolf repeats himself and says, \"Come out little piggies and let me eat you or I will blow your house down.\"");
    	counter++;
    }
    if (counter == 0){
    	console.log(counter);
        $("#buttonText").text("But the wolf quickly chases after and arrives outside of the stick house.");
        counter++;
        TweenLite.to($("#wolf"),5,{left:"500px"});
    }
}
function blowWind(){
	blowCounter++;
	if (blowCounter == 1){
		$("#blowWind").text("Keep clicking to blow the house down")
	}
	if (blowCounter == 5){
	$("#puff1").show(400);
	$("#puff2").show(400);
	$("#puff3").show(400);
	TweenLite.to($("#puff1"),2,{left:"71%"});
	TweenLite.to($("#puff2"),2,{left:"71%"});
	TweenLite.to($("#puff3"),2,{left:"71%"});
	TweenLite.to($("#puff1"),2,{top:"100px"});
	TweenLite.to($("#puff2"),2,{top:"300px"});	
	TweenLite.to($("#brokenHouse"), 1.5, {opacity:100, delay:2});
	TweenLite.to($("#house"), 1.5, {opacity:0, delay:1.5});
	TweenLite.to($("#puff1"),0,{opacity:0,delay:1.5});	
	TweenLite.to($("#puff2"),0,{opacity:0,delay:1.5});	
	TweenLite.to($("#puff3"),0,{opacity:0,delay:1.5});	

	TweenLite.to($("#pig1"),0.5,{top:"160px",delay:2.1});	
	TweenLite.to($("#pig1"),0.5,{top:"200px",delay:2.6});
	TweenLite.to($("#pig1"),0.5,{top:"160px",delay:3.1});	
	TweenLite.to($("#pig1"),0.5,{top:"200px",delay:3.6});

	TweenLite.to($("#pig2"),0.5,{top:"160px",delay:2.1});	
	TweenLite.to($("#pig2"),0.5,{top:"200px",delay:2.6});
	TweenLite.to($("#pig2"),0.5,{top:"160px",delay:3.1});	
	TweenLite.to($("#pig2"),0.5,{top:"200px",delay:3.6});

	counter++;
	$("#buttonText").text("The pig from the straw house runs away to his brother's stick house");
	$("#blowWind").hide(400);
}

}
function load(){
	$("#puff1").hide();
	$("#puff2").hide();
	$("#puff3").hide();
	$("#blowWind").hide();
	TweenLite.to($("#brokenHouse"), 0, {opacity:0});
	TweenLite.to($("#pig1"),4,{left:"71%"})

}
/*

counter = 0;
text: the straw pig safely makes it into his brother's stick house
counter++

counter = 1;
text: The wolf chases after the pig and eventually arrives at the stick house
counter++

counter = 2;
text:Come out little piggies and let me eat you or I will have to blow your house down.
counter++

counter = 3;
text: Both of the pigs refuse to leave the straw house.
counter++;

counter = 4;
text: blank
button that needs to be pressed 3 times for the wind to come out
counter++;

counter = 5;


*/