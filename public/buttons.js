 app.controller('buttons', function($scope, $timeout) {
	$scope.userBro = userBro;

	$scope.removeRow = function(x){				
		var bench = "/" + userBro + "bench"
		var squat = "/" + userBro + "squat"
		var dead = "/" + userBro + "deadlift"
		var index = -1;	
		if (exercise == "Bench"){	
			for( var i = 0; i < benchHist.length; i++ ) {
				if(benchHist[i].set === x ) {
					index = i;
					break;
				}
			}
			benchHist.splice( index, 1 );
			var database = firebase.database().ref(bench);
			database.set(benchHist);
		}
		if (exercise == "Squat"){	
			for( var i = 0; i < squatHist.length; i++ ) {
				if(squatHist[i].set === x ) {
					index = i;
					break;
				}
			}
			squatHist.splice( index, 1 );
			var database = firebase.database().ref(squat);
			database.set(squatHist);
		}
		if (exercise == "Deadlift"){	
			for( var i = 0; i < deadHist.length; i++ ) {
				if(deadHist[i].set === x ) {
					index = i;
					break;
				}
			}
			deadHist.splice( index, 1 );
			var database = firebase.database().ref(dead);
			database.set(deadHist);
		}
		$scope.refresh();		
	};


	$scope.benchButton = true;
	$scope.weightButton = true;
	$scope.oneRMPieButton = true;

	$scope.myDataSource = {
	    chart: {
	    	type: "column",
	    	width: '925',
	    	height: '400',
	    	spacingTop: 20,
	    	backgroundColor:'black',
	    	marginLeft: 80,
	    	marginTop: 40
	    },
	    title: {
	        text: ""
	    },
	    yAxis: {
	        title: {
	            text: ''
	        },
	        labels: {
	        	style: {
	        		fontSize: '30px',
	        		color: 'white'
	        	}
	        },
	        maxPadding: 0
    	},
    	xAxis: {
    		categories: [1,2,3,4,5,6,7,8,9,10],
    		labels: {
	        	style: {
	        		fontSize: '30px',
	        		color: 'white'
	        	}
	        }
    	},
    	tooltip: {
		    //backgroundColor: '#FCFFC5',
		    //borderColor: 'black',
		    //borderRadius: 30,
		    borderWidth: 5,
		    style: {
		    	fontSize: '40px'
		    }
		},
    	plotOptions: {
            series: {
                pointPadding: 0,
                groupPadding: 0.1,
            }
        },
    	legend: {
    		enabled: false
    	},
    	exporting: {
			enabled: false
		},
    	credits: {
    		enabled: false
    	},
		series: [{
  	    	name: '1 Rep Max',
	        data: [0,0,0,0,0,0,0,0,0,0],
	        color: 'red'
	    }]
	};

	$scope.myDataSource2 = {
	    chart: {
	    	type: "column",
	    	width: '925',
	    	height: '400',
	    	spacingTop: 20,
	    	backgroundColor:'black',
	    	marginLeft: 80,
	    	marginTop: 40
	    },
	    title: {
	        text: ""
	    },
	    yAxis: {
	        title: {
	            text: ''
	        },
	        labels: {
	        	style: {
	        		fontSize: '30px',
	        		color: 'white'
	        	}
	        },
	        maxPadding: 0
    	},
    	xAxis: {
    		categories: [45,95,135,185,225,275,315,365,405,455],
    		labels: {
	        	style: {
	        		fontSize: '30px',
	        		color: 'white'
	        	}
	        }
    	},
    	tooltip: {
		    //backgroundColor: '#FCFFC5',
		    //borderColor: 'black',
		    //borderRadius: 30,
		    borderWidth: 5,
		    style: {
		    	fontSize: '40px'
		    }
		},
    	plotOptions: {
            series: {
                pointPadding: 0,
                groupPadding: 0.1,
            }
        },
    	legend: {
    		enabled: false
    	},
    	exporting: {
			enabled: false
		},
		credits: {
    		enabled: false
    	},
		series: [{
  	    	name: '1 Rep Max',
	        data: [0,0,0,0,0,0,0,0,0,0],
	        color: 'red'
	    }]
	};

	$scope.myDataSource3 = {
	    chart: {
	    	type: "column",
	    	width: '925',
	    	height: '500',
	    	backgroundColor:'black',
	    	marginLeft: 80,
	    	marginTop: 40
	    },
	    title: {
	    	text: ""
	    },
	    yAxis: {
	        title: {
	            text: ''
	        },
	        labels: {
	        	style: {
	        		fontSize: '30px',
	        		color: 'white'
	        	}
	        },
	        maxPadding: 0
    	},
    	xAxis: {
    		categories: [],
    		labels: {
	        	style: {
	        		fontSize: '30px',
	        		color: 'white'
	        	}
	        },
	        max: 5
    	},
    	tooltip: {
		    //backgroundColor: '#FCFFC5',
		    //borderColor: 'black',
		    //borderRadius: 30,
		    borderWidth: 5,
		    style: {
		    	fontSize: '40px'
		    }
		},
    	plotOptions: {
            series: {
                pointPadding: 0,
                groupPadding: 0.1,
            }
        },
        exporting: {
			enabled: false
		},
		navigator: {
			enabled: true,
			height: 80
		},
    	legend: {
    		enabled: false
    	},
    	credits: {
    		enabled: false
    	},
	    series: [{
  	    	name: '1 Rep Max',
	        data: [],
	        color: 'red',
	        showInNavigator: true
	    }]
	};

	$scope.changeTotals = function(){
		$scope.xrecords = stats[0].records;
		$scope.xreps = stats[0].reps;
		$scope.xsets = stats[0].sets;
		$scope.xweight = stats[0].weight;
		$scope.xgains = stats[0].gains;
		$scope.xchallenges = stats[0].challenges;
		$scope.xoneRM = stats[0].oneRM;
		$scope.xlevel = level;
		$scope.xcurrent = current;
		$scope.xtotal = total;
		$scope.progress = progress;
	}

	$scope.refresh = function(){
		if (exercise == "Bench"){
			$scope.changeBench();
		} else if (exercise == "Squat"){
			$scope.changeSquat();
		} else if (exercise == "Deadlift"){
			$scope.changeDead();
		}
		$scope.totalStats();
	}

	$scope.changeBench = function(){
		$scope.benchButton = true;
		$scope.squatButton = false;
		$scope.deadButton = false;
		$scope.hist = benchHist;
		$scope.orderByField = 'set';
		$scope.orderByField2 = 'reps';
		$scope.orderByField3 = 'weight';
		$scope.orderByField4 = 'num';
 		$scope.reverseSort = true;
 		$scope.reverseSort2 = false;
 		$scope.exercise = exercise;
 		$scope.benchStacks();
 		$scope.benchPumps();
 		$scope.benchChallenges();
 		$scope.benchStats();
 		var graph = [];
 		var date = [];
 		for (i in benchHist){
 			graph.push(benchHist[i].oneRM)
 			date.push(benchHist[i].date)
 		}
 		var stack = [];
 		for (var i in stacksBench){
	    	stack.push(stacksBench[i].oneRM);
	    }
	    var pump = [];
 		for (var i in pumpsBench){
	    	pump.push(pumpsBench[i].oneRM);
	    }
	    $scope.myDataSource.series[0].data = stack;
	    $scope.myDataSource2.series[0].data = pump;
 		$scope.myDataSource3.series[0].data = graph;
 		$scope.myDataSource3.xAxis.categories = date;
 		Highcharts.chart('work', $scope.myDataSource3);
 		Highcharts.chart('stackwork', $scope.myDataSource);
 		Highcharts.chart('pumpwork', $scope.myDataSource2);	
	}
	$scope.changeSquat = function(){
		$scope.squatButton = true;
		$scope.benchButton = false;
		$scope.deadButton = false;
		$scope.hist = squatHist;
		$scope.orderByField = 'set';
		$scope.orderByField2 = 'reps';
		$scope.orderByField3 = 'weight';
		$scope.orderByField4 = 'num';
 		$scope.reverseSort = true;
 		$scope.reverseSort2 = false;
 		$scope.exercise = exercise; 	
 		$scope.squatStacks();
 		$scope.squatPumps();
 		$scope.squatChallenges();
 		$scope.squatStats();
 		var graph = [];
 		var date = [];
 		for (i in squatHist){
 			graph.push(squatHist[i].oneRM)
 			date.push(squatHist[i].date)
 		}
 		var stack = [];
 		for (var i in stacksSquat){
	    	stack.push(stacksSquat[i].oneRM);
	    }
	    var pump = [];
 		for (var i in pumpsSquat){
	    	pump.push(pumpsSquat[i].oneRM);
	    }
	    $scope.myDataSource.series[0].data = stack;
	    $scope.myDataSource2.series[0].data = pump;
 		$scope.myDataSource3.series[0].data = graph;
 		$scope.myDataSource3.xAxis.categories = date;
 		Highcharts.chart('work', $scope.myDataSource3);
 		Highcharts.chart('stackwork', $scope.myDataSource);
 		Highcharts.chart('pumpwork', $scope.myDataSource2);	
	}
	$scope.changeDead = function(){
		$scope.deadButton = true;
		$scope.squatButton = false;
		$scope.benchButton = false;
		$scope.hist = deadHist;
		$scope.orderByField = 'set';
		$scope.orderByField2 = 'reps';
		$scope.orderByField3 = 'weight';
		$scope.orderByField4 = 'num';
 		$scope.reverseSort = true;
 		$scope.reverseSort2 = false;
 		$scope.exercise = exercise;
 		$scope.deadStacks();
 		$scope.deadPumps();
 		$scope.deadChallenges();
 		$scope.deadStats();
 		var graph = [];
 		var date = [];
 		for (i in deadHist){
 			graph.push(deadHist[i].oneRM)
 			date.push(deadHist[i].date)
 		}
 		var stack = [];
 		for (var i in stacksDead){
	    	stack.push(stacksDead[i].oneRM);
	    }
	    var pump = [];
 		for (var i in pumpsDead){
	    	pump.push(pumpsDead[i].oneRM);
	    }
	    $scope.myDataSource.series[0].data = stack;
	    $scope.myDataSource2.series[0].data = pump;
 		$scope.myDataSource3.series[0].data = graph;
 		$scope.myDataSource3.xAxis.categories = date;
 		Highcharts.chart('work', $scope.myDataSource3);
 		Highcharts.chart('stackwork', $scope.myDataSource);
 		Highcharts.chart('pumpwork', $scope.myDataSource2);
	}
	$scope.benchStacks = function(){
		stacksBench = [
		{reps: 1, weight: 0, oneRM: 0, records: 0},
		{reps: 2, weight: 0, oneRM: 0, records: 0},
		{reps: 3, weight: 0, oneRM: 0, records: 0},
		{reps: 4, weight: 0, oneRM: 0, records: 0},
		{reps: 5, weight: 0, oneRM: 0, records: 0},
		{reps: 6, weight: 0, oneRM: 0, records: 0},
		{reps: 7, weight: 0, oneRM: 0, records: 0},
		{reps: 8, weight: 0, oneRM: 0, records: 0},
		{reps: 9, weight: 0, oneRM: 0, records: 0},
		{reps: 10, weight: 0, oneRM: 0, records: 0}];
		for (var i in benchHist){
			if (benchHist[i].reps == 1){
				if (benchHist[i].weight > stacksBench[0].weight){
					stacksBench[0].weight = benchHist[i].weight;
					stacksBench[0].oneRM = benchHist[i].oneRM;
					stacksBench[0].records++;
				}
			}
			if (benchHist[i].reps == 2){
				if (benchHist[i].weight > stacksBench[1].weight){
					stacksBench[1].weight = benchHist[i].weight;
					stacksBench[1].oneRM = benchHist[i].oneRM;
					stacksBench[1].records++;
				}
			}
			if (benchHist[i].reps == 3){
				if (benchHist[i].weight > stacksBench[2].weight){
					stacksBench[2].weight = benchHist[i].weight;
					stacksBench[2].oneRM = benchHist[i].oneRM;
					stacksBench[2].records++;
				}
			}
			if (benchHist[i].reps == 4){
				if (benchHist[i].weight > stacksBench[3].weight){
					stacksBench[3].weight = benchHist[i].weight;
					stacksBench[3].oneRM = benchHist[i].oneRM;
					stacksBench[3].records++;
				}
			}
			if (benchHist[i].reps == 5){
				if (benchHist[i].weight > stacksBench[4].weight){
					stacksBench[4].weight = benchHist[i].weight;
					stacksBench[4].oneRM = benchHist[i].oneRM;
					stacksBench[4].records++;
				}
			}
			if (benchHist[i].reps == 6){
				if (benchHist[i].weight > stacksBench[5].weight){
					stacksBench[5].weight = benchHist[i].weight;
					stacksBench[5].oneRM = benchHist[i].oneRM;
					stacksBench[5].records++;
				}
			}
			if (benchHist[i].reps == 7){
				if (benchHist[i].weight > stacksBench[6].weight){
					stacksBench[6].weight = benchHist[i].weight;
					stacksBench[6].oneRM = benchHist[i].oneRM;
					stacksBench[6].records++;
				}
			}
			if (benchHist[i].reps == 8){
				if (benchHist[i].weight > stacksBench[7].weight){
					stacksBench[7].weight = benchHist[i].weight;
					stacksBench[7].oneRM = benchHist[i].oneRM;
					stacksBench[7].records++;
				}
			}
			if (benchHist[i].reps == 9){
				if (benchHist[i].weight > stacksBench[8].weight){
					stacksBench[8].weight = benchHist[i].weight;
					stacksBench[8].oneRM = benchHist[i].oneRM;
					stacksBench[8].records++;
				}
			}
			if (benchHist[i].reps == 10){
				if (benchHist[i].weight > stacksBench[9].weight){
					stacksBench[9].weight = benchHist[i].weight;
					stacksBench[9].oneRM = benchHist[i].oneRM;
					stacksBench[9].records++;
				}
			}
		}
		$scope.stack = stacksBench;
	}
	$scope.benchPumps = function(){
		for (var i in benchHist){
			if (benchHist[i].weight == 45){
				if (benchHist[i].reps > pumpsBench[0].reps){
					pumpsBench[0].reps = benchHist[i].reps;
					pumpsBench[0].oneRM = benchHist[i].oneRM;
					pumpsBench[0].records++;
				}
			}
			if (benchHist[i].weight == 95){
				if (benchHist[i].reps > pumpsBench[1].reps){
					pumpsBench[1].reps = benchHist[i].reps;
					pumpsBench[1].oneRM = benchHist[i].oneRM;
					pumpsBench[1].records++;
				}
			}
			if (benchHist[i].weight == 135){
				if (benchHist[i].reps > pumpsBench[2].reps){
					pumpsBench[2].reps = benchHist[i].reps;
					pumpsBench[2].oneRM = benchHist[i].oneRM;
					pumpsBench[2].records++;
				}
			}
			if (benchHist[i].weight == 185){
				if (benchHist[i].reps > pumpsBench[3].reps){
					pumpsBench[3].reps = benchHist[i].reps;
					pumpsBench[3].oneRM = benchHist[i].oneRM;
					pumpsBench[3].records++;
				}
			}
			if (benchHist[i].weight == 225){
				if (benchHist[i].reps > pumpsBench[4].reps){
					pumpsBench[4].reps = benchHist[i].reps;
					pumpsBench[4].oneRM = benchHist[i].oneRM;
					pumpsBench[4].records++;
				}
			}
			if (benchHist[i].weight == 275){
				if (benchHist[i].reps > pumpsBench[5].reps){
					pumpsBench[5].reps = benchHist[i].reps;
					pumpsBench[5].oneRM = benchHist[i].oneRM;
					pumpsBench[5].records++;
				}
			}
			if (benchHist[i].weight == 315){
				if (benchHist[i].reps > pumpsBench[6].reps){
					pumpsBench[6].reps = benchHist[i].reps;
					pumpsBench[6].oneRM = benchHist[i].oneRM;
					pumpsBench[6].records++;
				}
			}
			if (benchHist[i].weight == 365){
				if (benchHist[i].reps > pumpsBench[7].reps){
					pumpsBench[7].reps = benchHist[i].reps;
					pumpsBench[7].oneRM = benchHist[i].oneRM;
					pumpsBench[7].records++;
				}
			}
			if (benchHist[i].weight == 405){
				if (benchHist[i].reps > pumpsBench[8].reps){
					pumpsBench[8].reps = benchHist[i].reps;
					pumpsBench[8].oneRM = benchHist[i].oneRM;
					pumpsBench[8].records++;
				}
			}
			if (benchHist[i].weight == 455){
				if (benchHist[i].reps > pumpsBench[9].reps){
					pumpsBench[9].reps = benchHist[i].reps;
					pumpsBench[9].oneRM = benchHist[i].oneRM;
					pumpsBench[9].records++;
				}
			}
		}
		$scope.pump = pumpsBench;
	}
	$scope.squatStacks = function(){

		for (var i in squatHist){
			if (squatHist[i].reps == 1){
				if (squatHist[i].weight > stacksSquat[0].weight){
					stacksSquat[0].weight = squatHist[i].weight;
					stacksSquat[0].oneRM = squatHist[i].oneRM;
					stacksSquat[0].records++;
				}
			}
			if (squatHist[i].reps == 2){
				if (squatHist[i].weight > stacksSquat[1].weight){
					stacksSquat[1].weight = squatHist[i].weight;
					stacksSquat[1].oneRM = squatHist[i].oneRM;
					stacksSquat[1].records++;
				}
			}
			if (squatHist[i].reps == 3){
				if (squatHist[i].weight > stacksSquat[2].weight){
					stacksSquat[2].weight = squatHist[i].weight;
					stacksSquat[2].oneRM = squatHist[i].oneRM;
					stacksSquat[2].records++;
				}
			}
			if (squatHist[i].reps == 4){
				if (squatHist[i].weight > stacksSquat[3].weight){
					stacksSquat[3].weight = squatHist[i].weight;
					stacksSquat[3].oneRM = squatHist[i].oneRM;
					stacksSquat[3].records++;
				}
			}
			if (squatHist[i].reps == 5){
				if (squatHist[i].weight > stacksSquat[4].weight){
					stacksSquat[4].weight = squatHist[i].weight;
					stacksSquat[4].oneRM = squatHist[i].oneRM;
					stacksSquat[4].records++;
				}
			}
			if (squatHist[i].reps == 6){
				if (squatHist[i].weight > stacksSquat[5].weight){
					stacksSquat[5].weight = squatHist[i].weight;
					stacksSquat[5].oneRM = squatHist[i].oneRM;
					stacksSquat[5].records++;
				}
			}
			if (squatHist[i].reps == 7){
				if (squatHist[i].weight > stacksSquat[6].weight){
					stacksSquat[6].weight = squatHist[i].weight;
					stacksSquat[6].oneRM = squatHist[i].oneRM;
					stacksSquat[6].records++;
				}
			}
			if (squatHist[i].reps == 8){
				if (squatHist[i].weight > stacksSquat[7].weight){
					stacksSquat[7].weight = squatHist[i].weight;
					stacksSquat[7].oneRM = squatHist[i].oneRM;
					stacksSquat[7].records++;
				}
			}
			if (squatHist[i].reps == 9){
				if (squatHist[i].weight > stacksSquat[8].weight){
					stacksSquat[8].weight = squatHist[i].weight;
					stacksSquat[8].oneRM = squatHist[i].oneRM;
					stacksSquat[8].records++;
				}
			}
			if (squatHist[i].reps == 10){
				if (squatHist[i].weight > stacksSquat[9].weight){
					stacksSquat[9].weight = squatHist[i].weight;
					stacksSquat[9].oneRM = squatHist[i].oneRM;
					stacksSquat[9].records++;
				}
			}
		}
		$scope.stack = stacksSquat;
	}
	$scope.squatPumps = function(){
		for (var i in squatHist){
			if (squatHist[i].weight == 45){
				if (squatHist[i].reps > pumpsSquat[0].reps){
					pumpsSquat[0].reps = squatHist[i].reps;
					pumpsSquat[0].oneRM = squatHist[i].oneRM;
					pumpsSquat[0].records++;
				}
			}
			if (squatHist[i].weight == 95){
				if (squatHist[i].reps > pumpsSquat[1].reps){
					pumpsSquat[1].reps = squatHist[i].reps;
					pumpsSquat[1].oneRM = squatHist[i].oneRM;
					pumpsSquat[1].records++;
				}
			}
			if (squatHist[i].weight == 135){
				if (squatHist[i].reps > pumpsSquat[2].reps){
					pumpsSquat[2].reps = squatHist[i].reps;
					pumpsSquat[2].oneRM = squatHist[i].oneRM;
					pumpsSquat[2].records++;
				}
			}
			if (squatHist[i].weight == 185){
				if (squatHist[i].reps > pumpsSquat[3].reps){
					pumpsSquat[3].reps = squatHist[i].reps;
					pumpsSquat[3].oneRM = squatHist[i].oneRM;
					pumpsSquat[3].records++;
				}
			}
			if (squatHist[i].weight == 225){
				if (squatHist[i].reps > pumpsSquat[4].reps){
					pumpsSquat[4].reps = squatHist[i].reps;
					pumpsSquat[4].oneRM = squatHist[i].oneRM;
					pumpsSquat[4].records++;
				}
			}
			if (squatHist[i].weight == 275){
				if (squatHist[i].reps > pumpsSquat[5].reps){
					pumpsSquat[5].reps = squatHist[i].reps;
					pumpsSquat[5].oneRM = squatHist[i].oneRM;
					pumpsSquat[5].records++;
				}
			}
			if (squatHist[i].weight == 315){
				if (squatHist[i].reps > pumpsSquat[6].reps){
					pumpsSquat[6].reps = squatHist[i].reps;
					pumpsSquat[6].oneRM = squatHist[i].oneRM;
					pumpsSquat[6].records++;
				}
			}
			if (squatHist[i].weight == 365){
				if (squatHist[i].reps > pumpsSquat[7].reps){
					pumpsSquat[7].reps = squatHist[i].reps;
					pumpsSquat[7].oneRM = squatHist[i].oneRM;
					pumpsSquat[7].records++;
				}
			}
			if (squatHist[i].weight == 405){
				if (squatHist[i].reps > pumpsSquat[8].reps){
					pumpsSquat[8].reps = squatHist[i].reps;
					pumpsSquat[8].oneRM = squatHist[i].oneRM;
					pumpsSquat[8].records++;
				}
			}
			if (squatHist[i].weight == 455){
				if (squatHist[i].reps > pumpsSquat[9].reps){
					pumpsSquat[9].reps = squatHist[i].reps;
					pumpsSquat[9].oneRM = squatHist[i].oneRM;
					pumpsSquat[9].records++;
				}
			}
		}
		$scope.pump = pumpsSquat;
	}
	$scope.deadStacks = function(){
		stacksDead = [
		{reps: 1, weight: 0, oneRM: 0, records: 0},
		{reps: 2, weight: 0, oneRM: 0, records: 0},
		{reps: 3, weight: 0, oneRM: 0, records: 0},
		{reps: 4, weight: 0, oneRM: 0, records: 0},
		{reps: 5, weight: 0, oneRM: 0, records: 0},
		{reps: 6, weight: 0, oneRM: 0, records: 0},
		{reps: 7, weight: 0, oneRM: 0, records: 0},
		{reps: 8, weight: 0, oneRM: 0, records: 0},
		{reps: 9, weight: 0, oneRM: 0, records: 0},
		{reps: 10, weight: 0, oneRM: 0, records: 0}];
		for (var i in deadHist){
			if (deadHist[i].reps == 1){
				if (deadHist[i].weight > stacksDead[0].weight){
					stacksDead[0].weight = deadHist[i].weight;
					stacksDead[0].oneRM = deadHist[i].oneRM;
					stacksDead[0].records++;
				}
			}
			if (deadHist[i].reps == 2){
				if (deadHist[i].weight > stacksDead[1].weight){
					stacksDead[1].weight = deadHist[i].weight;
					stacksDead[1].oneRM = deadHist[i].oneRM;
					stacksDead[1].records++;
				}
			}
			if (deadHist[i].reps == 3){
				if (deadHist[i].weight > stacksDead[2].weight){
					stacksDead[2].weight = deadHist[i].weight;
					stacksDead[2].oneRM = deadHist[i].oneRM;
					stacksDead[2].records++;
				}
			}
			if (deadHist[i].reps == 4){
				if (deadHist[i].weight > stacksDead[3].weight){
					stacksDead[3].weight = deadHist[i].weight;
					stacksDead[3].oneRM = deadHist[i].oneRM;
					stacksDead[3].records++;
				}
			}
			if (deadHist[i].reps == 5){
				if (deadHist[i].weight > stacksDead[4].weight){
					stacksDead[4].weight = deadHist[i].weight;
					stacksDead[4].oneRM = deadHist[i].oneRM;
					stacksDead[4].records++;
				}
			}
			if (deadHist[i].reps == 6){
				if (deadHist[i].weight > stacksDead[5].weight){
					stacksDead[5].weight = deadHist[i].weight;
					stacksDead[5].oneRM = deadHist[i].oneRM;
					stacksDead[5].records++;
				}
			}
			if (deadHist[i].reps == 7){
				if (deadHist[i].weight > stacksDead[6].weight){
					stacksDead[6].weight = deadHist[i].weight;
					stacksDead[6].oneRM = deadHist[i].oneRM;
					stacksDead[6].records++;
				}
			}
			if (deadHist[i].reps == 8){
				if (deadHist[i].weight > stacksDead[7].weight){
					stacksDead[7].weight = deadHist[i].weight;
					stacksDead[7].oneRM = deadHist[i].oneRM;
					stacksDead[7].records++;
				}
			}
			if (deadHist[i].reps == 9){
				if (deadHist[i].weight > stacksDead[8].weight){
					stacksDead[8].weight = deadHist[i].weight;
					stacksDead[8].oneRM = deadHist[i].oneRM;
					stacksDead[8].records++;
				}
			}
			if (deadHist[i].reps == 10){
				if (deadHist[i].weight > stacksDead[9].weight){
					stacksDead[9].weight = deadHist[i].weight;
					stacksDead[9].oneRM = deadHist[i].oneRM;
					stacksDead[9].records++;
				}
			}
		}
		$scope.stack = stacksDead;
	}
	$scope.deadPumps = function(){
		for (var i in deadHist){
			if (deadHist[i].weight == 45){
				if (deadHist[i].reps > pumpsDead[0].reps){
					pumpsDead[0].reps = deadHist[i].reps;
					pumpsDead[0].oneRM = deadHist[i].oneRM;
					pumpsDead[0].records++;
				}
			}
			if (deadHist[i].weight == 95){
				if (deadHist[i].reps > pumpsDead[1].reps){
					pumpsDead[1].reps = deadHist[i].reps;
					pumpsDead[1].oneRM = deadHist[i].oneRM;
					pumpsDead[1].records++;
				}
			}
			if (deadHist[i].weight == 135){
				if (deadHist[i].reps > pumpsDead[2].reps){
					pumpsDead[2].reps = deadHist[i].reps;
					pumpsDead[2].oneRM = deadHist[i].oneRM;
					pumpsDead[2].records++;
				}
			}
			if (deadHist[i].weight == 185){
				if (deadHist[i].reps > pumpsDead[3].reps){
					pumpsDead[3].reps = deadHist[i].reps;
					pumpsDead[3].oneRM = deadHist[i].oneRM;
					pumpsDead[3].records++;
				}
			}
			if (deadHist[i].weight == 225){
				if (deadHist[i].reps > pumpsDead[4].reps){
					pumpsDead[4].reps = deadHist[i].reps;
					pumpsDead[4].oneRM = deadHist[i].oneRM;
					pumpsDead[4].records++;
				}
			}
			if (deadHist[i].weight == 275){
				if (deadHist[i].reps > pumpsDead[5].reps){
					pumpsDead[5].reps = deadHist[i].reps;
					pumpsDead[5].oneRM = deadHist[i].oneRM;
					pumpsDead[5].records++;
				}
			}
			if (deadHist[i].weight == 315){
				if (deadHist[i].reps > pumpsDead[6].reps){
					pumpsDead[6].reps = deadHist[i].reps;
					pumpsDead[6].oneRM = deadHist[i].oneRM;
					pumpsDead[6].records++;
				}
			}
			if (deadHist[i].weight == 365){
				if (deadHist[i].reps > pumpsDead[7].reps){
					pumpsDead[7].reps = deadHist[i].reps;
					pumpsDead[7].oneRM = deadHist[i].oneRM;
					pumpsDead[7].records++;
				}
			}
			if (deadHist[i].weight == 405){
				if (deadHist[i].reps > pumpsDead[8].reps){
					pumpsDead[8].reps = deadHist[i].reps;
					pumpsDead[8].oneRM = deadHist[i].oneRM;
					pumpsDead[8].records++;
				}
			}
			if (deadHist[i].weight == 455){
				if (deadHist[i].reps > pumpsDead[9].reps){
					pumpsDead[9].reps = deadHist[i].reps;
					pumpsDead[9].oneRM = deadHist[i].oneRM;
					pumpsDead[9].records++;
				}
			}
		}
		$scope.pump = pumpsDead;
	}
	$scope.benchChallenges = function(){
		for (var i in benchChallenges){
			benchChallenges[i].challenge = "Incomplete"
		}
		for (var i in benchHist){
			if (benchHist[i].challenge == 1){
				benchChallenges[0].challenge = "Complete!!"
			}
			if (benchHist[i].challenge == 2){
				benchChallenges[1].challenge = "Complete!!"
			}
			if (benchHist[i].challenge == 3){
				benchChallenges[2].challenge = "Complete!!"
			}
			if (benchHist[i].challenge == 4){
				benchChallenges[3].challenge = "Complete!!"
			}
			if (benchHist[i].challenge == 5){
				benchChallenges[4].challenge = "Complete!!"
			}
			if (benchHist[i].challenge == 6){
				benchChallenges[5].challenge = "Complete!!"
			}
			if (benchHist[i].challenge == 7){
				benchChallenges[6].challenge = "Complete!!"
			}
			if (benchHist[i].challenge == 8){
				benchChallenges[7].challenge = "Complete!!"
			}
			if (benchHist[i].challenge == 9){
				benchChallenges[8].challenge = "Complete!!"
			}
			if (benchHist[i].challenge == 10){
				benchChallenges[9].challenge = "Complete!!"
			}
		}
		$scope.challenge = benchChallenges;
	}
	$scope.squatChallenges = function(){
		for (var i in squatChallenges){
			squatChallenges[i].challenge = "Incomplete"
		}
		for (var i in squatHist){
			if (squatHist[i].challenge == 1){
				squatChallenges[0].challenge = "Complete!!"
			}
			if (squatHist[i].challenge == 2){
				squatChallenges[1].challenge = "Complete!!"
			}
			if (squatHist[i].challenge == 3){
				squatChallenges[2].challenge = "Complete!!"
			}
			if (squatHist[i].challenge == 4){
				squatChallenges[3].challenge = "Complete!!"
			}
			if (squatHist[i].challenge == 5){
				squatChallenges[4].challenge = "Complete!!"
			}
			if (squatHist[i].challenge == 6){
				squatChallenges[5].challenge = "Complete!!"
			}
			if (squatHist[i].challenge == 7){
				squatChallenges[6].challenge = "Complete!!"
			}
			if (squatHist[i].challenge == 8){
				squatChallenges[7].challenge = "Complete!!"
			}
			if (squatHist[i].challenge == 9){
				squatChallenges[8].challenge = "Complete!!"
			}
			if (squatHist[i].challenge == 10){
				squatChallenges[9].challenge = "Complete!!"
			}
		}
		$scope.challenge = squatChallenges;
	}
	$scope.deadChallenges = function(){
		for (var i in deadChallenges){
			deadChallenges[i].challenge = "Incomplete"
		}
		for (var i in deadHist){
			if (deadHist[i].challenge == 1){
				deadChallenges[0].challenge = "Complete!!"
			}
			if (deadHist[i].challenge == 2){
				deadChallenges[1].challenge = "Complete!!"
			}
			if (deadHist[i].challenge == 3){
				deadChallenges[2].challenge = "Complete!!"
			}
			if (deadHist[i].challenge == 4){
				deadChallenges[3].challenge = "Complete!!"
			}
			if (deadHist[i].challenge == 5){
				deadChallenges[4].challenge = "Complete!!"
			}
			if (deadHist[i].challenge == 6){
				deadChallenges[5].challenge = "Complete!!"
			}
			if (deadHist[i].challenge == 7){
				deadChallenges[6].challenge = "Complete!!"
			}
			if (deadHist[i].challenge == 8){
				deadChallenges[7].challenge = "Complete!!"
			}
			if (deadHist[i].challenge == 9){
				deadChallenges[8].challenge = "Complete!!"
			}
			if (deadHist[i].challenge == 10){
				deadChallenges[9].challenge = "Complete!!"
			}
		}
		$scope.challenge = deadChallenges;
	}
	$scope.benchStats = function(){
		stats[1].gains = 0;
		stats[1].sets = benchHist.length;
		stats[1].reps = 0;
		stats[1].weight = 0;
		stats[1].records = 0;
		stats[1].challenges = 0;
		stats[1].oneRM = 0;
		for (var i in benchHist){
			stats[1].gains = stats[1].gains + benchHist[i].gains;
			stats[1].reps = stats[1].reps + benchHist[i].reps;
			stats[1].weight = stats[1].weight + benchHist[i].weight;
			if (benchHist[i].challenge > 0){
				stats[1].challenges++;
			}
			if (benchHist[i].oneRM > stats[1].oneRM){
				stats[1].oneRM = benchHist[i].oneRM; 
			}
		}
		for (var j in stacksBench){
			stats[1].records = stats[1].records + stacksBench[j].records;
			stats[1].records = stats[1].records + pumpsBench[j].records;
		}
		$scope.srecords = stats[1].records;
		$scope.sreps = stats[1].reps;
		$scope.ssets = stats[1].sets;
		$scope.sweight = stats[1].weight;
		$scope.sgains = stats[1].gains;
		$scope.schallenges = stats[1].challenges;
		$scope.soneRM = stats[1].oneRM;
	}
	$scope.squatStats = function(){
		stats[2].gains = 0;
		stats[2].sets = squatHist.length;
		stats[2].reps = 0;
		stats[2].weight = 0;
		stats[2].records = 0;
		stats[2].challenges = 0;
		stats[2].oneRM = 0;
		for (var i in squatHist){
			stats[2].gains = stats[2].gains + squatHist[i].gains;
			stats[2].reps = stats[2].reps + squatHist[i].reps;
			stats[2].weight = stats[2].weight + squatHist[i].weight;
			if (squatHist[i].challenge > 0){
				stats[2].challenges++;
			}
			if (squatHist[i].oneRM > stats[1].oneRM){
				stats[2].oneRM = squatHist[i].oneRM; 
			}
		}
		for (var j in stacksSquat){
			stats[2].records = stats[2].records + stacksSquat[j].records;
			stats[2].records = stats[2].records + pumpsSquat[j].records;
		}
		$scope.srecords = stats[2].records;
		$scope.sreps = stats[2].reps;
		$scope.ssets = stats[2].sets;
		$scope.sweight = stats[2].weight;
		$scope.sgains = stats[2].gains;
		$scope.schallenges = stats[2].challenges;
		$scope.soneRM = stats[2].oneRM;
	}
	$scope.deadStats = function(){
		stats[3].gains = 0;
		stats[3].sets = deadHist.length;
		stats[3].reps = 0;
		stats[3].weight = 0;
		stats[3].records = 0;
		stats[3].challenges = 0;
		stats[3].oneRM = 0;
		for (var i in deadHist){
			stats[3].gains = stats[3].gains + deadHist[i].gains;
			stats[3].reps = stats[3].reps + deadHist[i].reps;
			stats[3].weight = stats[3].weight + deadHist[i].weight;
			if (deadHist[i].challenge > 0){
				stats[3].challenges++;
			}
			if (deadHist[i].oneRM > stats[3].oneRM){
				stats[3].oneRM = deadHist[i].oneRM; 
			}
		}
		for (var j in stacksDead){
			stats[3].records = stats[3].records + stacksDead[j].records;
			stats[3].records = stats[3].records + pumpsDead[j].records;
		}
		$scope.srecords = stats[3].records;
		$scope.sreps = stats[3].reps;
		$scope.ssets = stats[3].sets;
		$scope.sweight = stats[3].weight;
		$scope.sgains = stats[3].gains;
		$scope.schallenges = stats[3].challenges;
		$scope.soneRM = stats[3].oneRM;
	}
	$scope.totalStats = function(){
		stats[0].gains = 0;
		stats[0].sets = benchHist.length + deadHist.length + squatHist.length;
		stats[0].reps = 0;
		stats[0].weight = 0;
		stats[0].records = 0;
		stats[0].challenges = 0;
		stats[0].oneRM = 0;
		for (var i in benchHist){
			stats[0].gains = stats[0].gains + benchHist[i].gains;
			stats[0].reps = stats[0].reps + benchHist[i].reps;
			stats[0].weight = stats[0].weight + benchHist[i].weight;
			if (benchHist[i].challenge > 0){
				stats[0].challenges++;
			}
		}
		for (var j in stacksBench){
			stats[0].records = stats[0].records + stacksBench[j].records;
			stats[0].records = stats[0].records + pumpsBench[j].records;
		}
		for (var i in squatHist){
			stats[0].gains = stats[0].gains + squatHist[i].gains;
			stats[0].reps = stats[0].reps + squatHist[i].reps;
			stats[0].weight = stats[0].weight + squatHist[i].weight;
			if (squatHist[i].challenge > 0){
				stats[0].challenges++;
			}
		}
		for (var j in stacksSquat){
			stats[0].records = stats[0].records + stacksSquat[j].records;
			stats[0].records = stats[0].records + pumpsSquat[j].records;
		}
		for (var i in deadHist){
			stats[0].gains = stats[0].gains + deadHist[i].gains;
			stats[0].reps = stats[0].reps + deadHist[i].reps;
			stats[0].weight = stats[0].weight + deadHist[i].weight;
			if (deadHist[i].challenge > 0){
				stats[0].challenges++;
			}
		}
		for (var j in stacksDead){
			stats[0].records = stats[0].records + stacksDead[j].records;
			stats[0].records = stats[0].records + pumpsDead[j].records;
		}
		stats[0].oneRM = stats[1].oneRM + stats[2].oneRM + stats[3].oneRM;
		//NEEDS WORK?
		
		for (var i in levelInfo){
			
			if (stats[0].gains < levelInfo[i].total){
				level = levelInfo[i].name;
				if (level == 1){
					current = stats[0].gains
				} else {
					current = stats[0].gains - levelInfo[i-1].total;
				}
				total = levelInfo[i].gains;
				progress = current / total * 100 + "%";
				break;
			}					
		
		}
		
		$scope.changeTotals();
	}

	$scope.updateInfo = function(){


		var bench = "/" + userBro + "bench"
		var squat = "/" + userBro + "squat"
		var dead = "/" + userBro + "deadlift"

	//	var benchHist = [];
//		var squatHist = [];
//		var deadHist = [];

		var query1 = firebase.database().ref(bench);
			
		query1.once("value").then(function(snapshot) {
			//$timeout(function() {
				snapshot.forEach(function(childSnapshot) {

					var childData1 = childSnapshot.val();
					benchHist.push(childData1);
							  
				});
			//});

		//	localStorage.setItem("bench", JSON.stringify(benchHist));
		});

		var query2 = firebase.database().ref(squat).orderByKey();
		
		query2.once("value").then(function(snapshot) {
			
			snapshot.forEach(function(childSnapshot) {
				
				var childData2 = childSnapshot.val();
				squatHist.push(childData2);
			  
			});
			//localStorage.setItem("squat", JSON.stringify(squatHist));
		});

		var query3 = firebase.database().ref(dead).orderByKey();
		
		query3.once("value").then(function(snapshot) {
			
			snapshot.forEach(function(childSnapshot) {
				
				var childData3 = childSnapshot.val();
				deadHist.push(childData3);
			  
			});
			//localStorage.setItem("dead", JSON.stringify(deadHist));
		});
		
		
	}
	$scope.sendToFirebase = function(){

		
		//$scope.refresh();

		//$scope.changeTotals();
	}

	
	$scope.sendToFirebase();

	
	Highcharts.chart('work', $scope.myDataSource3);
	Highcharts.chart('stackwork', $scope.myDataSource);
	Highcharts.chart('pumpwork', $scope.myDataSource2);
	//$timeout(function() {$scope.updateInfo();}, 5000);
	//$scope.changeBench();
	//$scope.changeSquat();
	//$scope.changeBench();
	$scope.updateInfo();
	$timeout(function() {$scope.changeBench();$scope.totalStats();}, 1000);
});
