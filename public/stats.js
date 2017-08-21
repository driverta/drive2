function addStats() {
	var y = document.getElementById("weight").value;
	var z = document.getElementById("reps").value;
	var a = parseInt(y);
	var b = parseInt(z);
	var g = a * b;
	var gains = g + thisSetGains;

	if(a && b){
		document.getElementById("response2").innerHTM 

		if (exercise == "Bench"){
			stats[1].gains += gains;
			stats[1].weight += a;
			stats[1].reps += b;
			stats[1].sets++;
		} else if (exercise =="Squat"){
			stats[2].gains += gains;
			stats[2].weight += a;
			stats[2].reps += b;
			stats[2].sets++;
		} else if (exercise == "Deadlift"){
			stats[3].gains += gains;
			stats[3].weight += a;
			stats[3].reps += b;
			stats[3].sets++;
		}
		stats[0].oneRM = stats[1].oneRM + stats[2].oneRM + stats[3].oneRM;
		//NEEDS WORK
		levelInfo[level].current += gains;
		if (levelInfo[level].current > levelInfo[level].gains){
			var current = levelInfo[level].current - levelInfo[level].gains;
			level++;
			levelInfo[level].current = current;
		}
		progress = levelInfo[level].current / levelInfo[level].gains * 100 + "%";
		localStorage.setItem("progress", JSON.stringify(progress));
		localStorage.setItem("nnnStats", JSON.stringify(stats));
		localStorage.setItem("level", JSON.stringify(level));
		localStorage.setItem("levelInfo", JSON.stringify(levelInfo));
		 
	} else {
		document.getElementById("response2").innerHTML = "No Gains Bro";
	}
}