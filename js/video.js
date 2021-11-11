var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"

 });

 document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
    video.pause();
 });

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down Video by 5%"); 
	if (video.playbackRate > 1)
		video.playbackRate = video.playbackRate - video.playbackRate *.0475;
	else 
		video.playbackRate = video.playbackRate - video.playbackRate * .05;
	console.log("New Speed is " + video.playbackRate);

});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up Video by 5%");
	if (video.playbackRate < 1)
		video.playbackRate = video.playbackRate + video.playbackRate * .0527;
	else
		video.playbackRate = video.playbackRate + video.playbackRate * .05;
	console.log("New Speed is " + video.playbackRate);

});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Original Location " + video.currentTime);
	console.log()
	video.currentTime = video.currentTime + 15;
	if (video.currentTime == video.duration) 
		video.currentTime = 0;
		video.play();
	console.log("New Location " + video.currentTime);

});

document.querySelector("#mute").addEventListener("click", function()  {
	if (video.muted != true) {
		console.log("Video Muted")
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	}
	else {
		console.log("Video Unmuted")
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	}

})

document.querySelector("#slider").addEventListener("click", function()  {
	console.log("Changed Volume");
	var newVol = document.querySelector("#slider").value / 100;
	video.volume = newVol
	console.log(newVol);
	document.querySelector("#volume").innerHTML = newVol * 100 + "%"
})

document.querySelector("#vintage").addEventListener("click", function()  {
	console.log("Style is now Old School");
	video.className = "oldSchool";
})

document.querySelector("#orig").addEventListener("click", function()  {
	console.log("Style is back to the original");
	video.className = "video";
})
