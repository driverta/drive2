function addRecord() {
	var y = document.getElementById("weight").value;
	var z = document.getElementById("reps").value;
	var a = parseInt(y);
	var b = parseInt(z);
	var p = b-1;
	var o = 0;
	document.getElementById("response3").innerHTML = "";

	if (exercise == "Bench") {
		if (b < 11){
			if (stacksBench[p].weight < a){
				thisSetGains = thisSetGains + 5000;
				document.getElementById("response3").innerHTML = "New Record!";
			}
		}
		for (var i in pumpsBench) {
			if (pumpsBench[i].weight == a){
				var q = i;
				if (pumpsBench[q].reps < b){
					thisSetGains = thisSetGains + 5000;
					document.getElementById("response3").innerHTML = "New Record!";
				}
			}
		}
	}
	if (exercise == "Squat"){
		if (b < 11){
			if (stacksSquat[p].weight < a){
				thisSetGains = thisSetGains + 5000;
				document.getElementById("response3").innerHTML = "New Record!";
			}
		}
		for (var i in pumpsSquat) {
			if (pumpsSquat[i].weight == a){
				var q = i;
				if (pumpsSquat[q].reps < b){
					thisSetGains = thisSetGains + 5000;
					document.getElementById("response3").innerHTML = "New Record!";
				}
			}
		}
	}
	if (exercise == "Deadlift"){
		if (b < 11){
			if (stacksDead[p].weight < a){
				thisSetGains = thisSetGains + 5000;
				document.getElementById("response3").innerHTML = "New Record!";
			}
		}
		for (var i in pumpsDead) {
			if (pumpsDead[i].weight == a){
				var q = i;
				if (pumpsDead[q].reps < b){
					thisSetGains = thisSetGains + 5000;
					document.getElementById("response3").innerHTML = "New Record!";
				}
			}
		}
	}
}
