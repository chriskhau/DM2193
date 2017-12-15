var counter = 0;
function displayStory(){
	if (counter == 5){
		$("#storyButton").hide();
		TweenLite.to($("#pig"),3,{left:"90%",opacity:0});
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
		$("#buttonText").text("The pig in straw house refused to leave his home.")
		counter++;
	}
    if (counter == 1){
    	console.log(counter);
    	$("#buttonText").text("The wolf says, \"Come out and let me eat you or I will blow your house down.\"");
    	counter++;
    }
    if (counter == 0){
    	console.log(counter);
        $("#buttonText").text("Outside was a mean and hungry wolf.");
        counter++;
        TweenLite.to($("#wolf"),5,{left:"500px"});
    }
}
function blowWind(){
	$("#puff").show(400);
	TweenLite.to($("#puff"),2,{left:"80%"});
	TweenLite.to($("#brokenHouse"), 1.5, {opacity:100, delay:2});
	TweenLite.to($("#house"), 1.5, {opacity:0, delay:1.5});
	TweenLite.to($("#puff"),0,{opacity:0,delay:1.5});	

	TweenLite.to($("#pig"),0.5,{top:"160px",delay:2.1});	
	TweenLite.to($("#pig"),0.5,{top:"200px",delay:2.6});
	TweenLite.to($("#pig"),0.5,{top:"160px",delay:3.1});	
	TweenLite.to($("#pig"),0.5,{top:"200px",delay:3.6});

	counter++;
	$("#buttonText").text("The pig from the straw house runs away to his brother's stick house.")
	$("#blowWind").hide(400);


}
function load(){
	$("#puff").hide();
	$("#blowWind").hide();
	TweenLite.to($("#brokenHouse"), 0, {opacity:0});

}
/*
    ("The wolf said," + <q>Come and let me eat you or I will blow your house down.</q>)

    ("The pig refuses to leave his house")

    (nothing)


counter 1 make wolf appear

counter 2 do nothing - wolf threatens

counter 3 do nothing - pig refuses

counter 4 blank text and button to blow house shows up on screen

button click -> animation for puff and house breaking 

counter 5 pig yells
animation pig runs off screen
*/