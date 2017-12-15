var counter = 0;
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

function load(){
	$("#strawHouse").hide();
	$("#stickHouse").hide();
	$("#brickHouse").hide();

}

function buildStrawHouse(){

    $("#strawStack1").hide(400);
    $("#strawStack2").hide(400);
    $("#strawDiv1").hide(400);
    $("#strawDiv2").hide(400);
    $("#strawHouse").show(400)
    TweenLite.to($("#strawStack"),1,{top:"40px"});

}
function buildStickHouse(){
    $("#stickStack1").hide(400);
    $("#stickStack2").hide(400);
    $("#stickStack3").hide(400);
    $("#stickDiv1").hide(400);
    $("#stickDiv2").hide(400);
    $("#stickDiv3").hide(400);
    $("#stickHouse").show(400)
    TweenLite.to($("#stickStack"),1,{top:"40px"});	

}
function buildBrickHouse(){
    $("#brickStack1").hide(400);
    $("#brickStack2").hide(400);
    $("#brickStack3").hide(400);
    $("#brickStack4").hide(400);
    $("#brickDiv1").hide(400);
    $("#brickDiv2").hide(400);
    $("#brickDiv3").hide(400);
    $("#brickDiv4").hide(400);
    $("#brickHouse").show(400)
     TweenLite.to($("#brickStack"),1,{top:"40px"});	

}
function displayStory(){

    console.log(counter);
    if (counter == 1){
        $("#storyButton").hide();
    }
    if (counter == 0){
        $("#buttonText").text("Help them build their houses by dragging the piles into their respective black boxes. Once you have all the pieces for a house, you can click the button to build the house.")
        counter++;
    }
}


