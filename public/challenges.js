function addChallenges(b) {
	//document.getElementById("response4").innerHTML = "Hey";
	var reps = b
	if (exercise == "Bench"){
		checkChallenge(benchChallenges, reps);
	}else if (exercise == "Squat"){
		checkChallenge(squatChallenges, reps);
	}else if (exercise == "Deadlift"){
		checkChallenge(deadChallenges, reps);
	}
}

function checkChallenge (x, reps) {
	var x = x;
	var reps = reps;
	var one = {num: 0, val: [20,20]};
	var two = {num: 1, val: [18, 18]};
	var three = {num: 2, val: [15, 15, 15]};
	var four = {num: 3, val: [12, 12, 12]};
	var five = {num: 4, val: [10, 10, 10, 10]};
	var six = {num: 5, val: [8, 8, 8, 8]};
	var seven = {num: 6, val: [5, 5, 5, 5, 5]};
	var eight = {num: 7, val: [3, 3, 3, 3, 3]};
	var nine = {num: 8, val: [6, 8, 10]};
	var ten = {num: 9, val: [10, 8, 6]};

	if (x[0].challenge == "Incomplete"){
		challengeCompleted(one, reps);
	}
	if (x[1].challenge == "Incomplete"){
		challengeCompleted(two, reps);
	}
	if (x[2].challenge == "Incomplete"){
		challengeCompleted(three, reps);
	}
	if (x[3].challenge == "Incomplete"){
		challengeCompleted(four, reps);
	}
	if (x[4].challenge == "Incomplete"){
		challengeCompleted(five, reps);
	}
	if (x[5].challenge == "Incomplete"){
		challengeCompleted(six, reps);
	}
	if (x[6].challenge == "Incomplete"){
		challengeCompleted(seven, reps);
	}
	if (x[7].challenge == "Incomplete"){
		challengeCompleted(eight, reps);
	}
	if (x[8].challenge == "Incomplete"){
		challengeCompleted(nine, reps);
	}
	if (x[9].challenge == "Incomplete"){
		challengeCompleted(ten, reps);
	}
}

function challengeCompleted(chal, reps){
	var chal = chal;
	var z = chal.num;
	var x = chal.val;
	var y = x.length;
	var n = z + 1;
	var reps = reps;
	
	var problem = true;
	
	if (exercise == "Bench"){
		if (benchHist.length >= y){
			for (var i in benchHist){
				arrayReps.push(benchHist[i].reps);
				if (benchHist[i].challenge == n){
					problem = false;
				}
			}
			arrayReps.push(reps);
			var arr = arrayReps.slice(-y);
			if (actuallyCompleted(arr, x)){
				if(problem){
					document.getElementById("response4").innerHTML = "Challenge Completed!";
					thisSetGains = thisSetGains + 5000;
					challenge = n;
				}
			}
		}
	}else if (exercise == "Squat"){
		if (squatHist.length >= y){
			for (var i in squatHist){
				arrayReps.push(squatHist[i].reps);
				if (squatHist[i].challenge == n){
					problem = false;
				}
			}
			arrayReps.push(reps);
			var arr = arrayReps.slice(-y);
			if (actuallyCompleted(arr, x)){
				if(problem){
					document.getElementById("response4").innerHTML = "Challenge Completed!";
					thisSetGains = thisSetGains + 5000;
					challenge = n;
				}
			}
		}
	}else if (exercise == "Deadlift"){
		if (deadHist.length >= y){
			for (var i in deadHist){
				arrayReps.push(deadHist[i].reps); 
				if (deadHist[i].challenge == n){
					problem = false;
				}
			}
			arrayReps.push(reps);
			var arr = arrayReps.slice(-y);
			if (actuallyCompleted(arr, x)){
				if(problem){
					document.getElementById("response4").innerHTML = "Challenge Completed!";
					thisSetGains = thisSetGains + 5000;
					challenge = n;
				}
			}
		}
	}
}

function actuallyCompleted(arr, x) {
	var arr = arr;
	var x = x;

	if (arr.length !== x.length) return false;
	for (var i in arr){
		if (arr[i] !== x[i]){
			return false;
		}
	}
	return true;
}