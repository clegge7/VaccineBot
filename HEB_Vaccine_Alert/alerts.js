//delay to let site js load list of vaccine appointments
setTimeout(checkTimeSlots, 1500);
timeSplotsAvailable = false;

function checkTimeSlots(){
	//get classes containing distance and time slots available as lists
	miles = document.getElementsByClassName("evtGGn");
	timeSlots = document.getElementsByClassName("lhuWlB");
	
	//timeSlots will always be <= miles in length so iterate across is to avoid issues
	for (iter = 0; iter < timeSlots.length; iter++){
		//check for appointments within 30 miles away with 3 or more time slots available
		//(1 time slot openings immediately get booked and aren't work trying)
		if(parseFloat(miles[iter].innerHTML.replace(/ .*/,'')) < 30.0 && timeSlots[iter].innerHTML.replace(/ .*/,'') >= 3){
			timeSplotsAvailable = true;
			vaccinesAvailable();
			break;
		}
	}
	if(!timeSplotsAvailable){
		//refresh page and continue
		setTimeout(refresh, 3000);
	}
}

function vaccinesAvailable(){
	//change background to bright red and play nuclear siren
	document.body.style.background = "red";
	
	let player = document.createElement("audio");
	player.src = browser.runtime.getURL('/audio/siren.mp3');
	player.play();
}

function refresh(){
	location.reload();
}