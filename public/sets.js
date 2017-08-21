function addSet() {
	var d = new Date();
	var m = new Date();
	var date = m.getMonth() + 1 + "-" + d.getDate();
	var y = document.getElementById("weight").value;
	var z = document.getElementById("reps").value;
	var a = parseInt(y);
	var b = parseInt(z);   
	var q = b - 1;
	var o = 0;
	document.getElementById("response2").innerHTML = "";
	document.getElementById("response3").innerHTML = "";
	document.getElementById("response4").innerHTML = "";
	var g = a * b;
	var gains = g + thisSetGains;
	challenge = 0;
	addRecord();
	addChallenges(b);
	var bench = "/" + userBro + "bench"
	var squat = "/" + userBro + "squat"
	var dead = "/" + userBro + "deadlift"
	//var user = "/" + userBro
	//alert(benchHist);
	if(a && b){
		document.getElementById("response2").innerHTML = "+ " + gains + " Gains!";
		//thisSetGains = thisSetGains + g;
		if (exercise == "Bench"){
			var num = benchHist.length;
			if (b < 11){
				o = benchCoef[q] * a;
			}else {
				o = a / (1.013-(0.0267123 * b));
			}
			var oneRM = Math.round(o);
			set = {set: num, date: date, weight: a, reps: b, oneRM: oneRM, challenge: challenge, gains: gains};
			benchHist.push(set); 
			var database = firebase.database().ref(bench);
			database.set(benchHist);
			refreshBench();
		} else if (exercise == "Squat"){
			var num = squatHist.length;
			if (b < 11){
				o = squatCoef[q] * a;
			}else {
				o = a / (1.013-(0.0267123 * b));
			}
			var oneRM = Math.round(o);
			set = {set: num, date: date, weight: a, reps: b, oneRM: oneRM, challenge: challenge, gains: gains};
			squatHist.push(set);
			var database = firebase.database().ref(squat);
			database.set(squatHist);
			refreshSquat();
		} else if (exercise == "Deadlift"){
			var num = deadHist.length;
			if (b < 11){
				o = deadCoef[q] * a;
			}else {
				o = a / (1.013-(0.0267123 * b));
			}
			var oneRM = Math.round(o);
			set = {set: num, date: date, weight: a, reps: b, oneRM: oneRM, challenge: challenge, gains: gains};
			deadHist.push(set);
			var database = firebase.database().ref(dead);
			database.set(deadHist);
			refreshDead();
		}	
	} else {
		document.getElementById("response3").innerHTML = "Please enter a number for weight and reps!";
		document.getElementById("response2").innerHTML = "No Gains Bro";
	}

	thisSetGains = 0;
	challenge = 0;
	arrayReps = [];
}