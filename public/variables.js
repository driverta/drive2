var exercise = "Bench";

var benchHist = [];

var squatHist =  [];

var deadHist = [];

var userBro = JSON.parse(localStorage.getItem("userBro"));

var app = angular.module('myApp', ["ng-fusioncharts"]);

var stacksBench = [
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

var pumpsBench = [
	{weight: 45, reps: 0, oneRM: 0, records: 0},
	{weight: 95, reps: 0, oneRM: 0, records: 0},
	{weight: 135, reps: 0, oneRM: 0, records: 0},
	{weight: 185, reps: 0, oneRM: 0, records: 0},
	{weight: 225, reps: 0, oneRM: 0, records: 0},
	{weight: 275, reps: 0, oneRM: 0, records: 0},
	{weight: 315, reps: 0, oneRM: 0, records: 0},
	{weight: 365, reps: 0, oneRM: 0, records: 0},
	{weight: 405, reps: 0, oneRM: 0, records: 0},
	{weight: 455, reps: 0, oneRM: 0, records: 0}];

var stacksDead = [
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

var pumpsDead = [
	{weight: 45, reps: 0, oneRM: 0, records: 0},
	{weight: 95, reps: 0, oneRM: 0, records: 0},
	{weight: 135, reps: 0, oneRM: 0, records: 0},
	{weight: 185, reps: 0, oneRM: 0, records: 0},
	{weight: 225, reps: 0, oneRM: 0, records: 0},
	{weight: 275, reps: 0, oneRM: 0, records: 0},
	{weight: 315, reps: 0, oneRM: 0, records: 0},
	{weight: 365, reps: 0, oneRM: 0, records: 0},
	{weight: 405, reps: 0, oneRM: 0, records: 0},
	{weight: 455, reps: 0, oneRM: 0, records: 0}];

var stacksSquat = [
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

var pumpsSquat = [
	{weight: 45, reps: 0, oneRM: 0, records: 0},
	{weight: 95, reps: 0, oneRM: 0, records: 0},
	{weight: 135, reps: 0, oneRM: 0, records: 0},
	{weight: 185, reps: 0, oneRM: 0, records: 0},
	{weight: 225, reps: 0, oneRM: 0, records: 0},
	{weight: 275, reps: 0, oneRM: 0, records: 0},
	{weight: 315, reps: 0, oneRM: 0, records: 0},
	{weight: 365, reps: 0, oneRM: 0, records: 0},
	{weight: 405, reps: 0, oneRM: 0, records: 0},
	{weight: 455, reps: 0, oneRM: 0, records: 0}];

var benchChallenges = [
	{num: 1, title: "2 sets of 20 reps", challenge: "Incomplete"},
	{num: 2, title: "2 sets of 18 reps", challenge: "Incomplete"},
	{num: 3, title: "3 sets of 15 reps", challenge: "Incomplete"},
	{num: 4, title: "3 sets of 12 reps", challenge: "Incomplete"},
	{num: 5, title: "4 sets of 10 reps", challenge: "Incomplete"},
	{num: 6, title: "4 sets of 8 reps", challenge: "Incomplete"},
	{num: 7, title: "5 sets of 5 reps", challenge: "Incomplete"},
	{num: 8, title: "5 sets of 3 reps", challenge: "Incomplete"},
	{num: 9, title: "6, 8, then 10 reps", challenge: "Incomplete"},
	{num: 10, title: "10, 8, then 6 reps", challenge: "Incomplete"}];

var squatChallenges = [
	{num: 1, title: "2 sets of 20 reps", challenge: "Incomplete"},
	{num: 2, title: "2 sets of 18 reps", challenge: "Incomplete"},
	{num: 3, title: "3 sets of 15 reps", challenge: "Incomplete"},
	{num: 4, title: "3 sets of 12 reps", challenge: "Incomplete"},
	{num: 5, title: "4 sets of 10 reps", challenge: "Incomplete"},
	{num: 6, title: "4 sets of 8 reps", challenge: "Incomplete"},
	{num: 7, title: "5 sets of 5 reps", challenge: "Incomplete"},
	{num: 8, title: "5 sets of 3 reps", challenge: "Incomplete"},
	{num: 9, title: "6, 8, then 10 reps", challenge: "Incomplete"},
	{num: 10, title: "10, 8, then 6 reps", challenge: "Incomplete"}];

var deadChallenges = [
	{num: 1, title: "2 sets of 20 reps", challenge: "Incomplete"},
	{num: 2, title: "2 sets of 18 reps", challenge: "Incomplete"},
	{num: 3, title: "3 sets of 15 reps", challenge: "Incomplete"},
	{num: 4, title: "3 sets of 12 reps", challenge: "Incomplete"},
	{num: 5, title: "4 sets of 10 reps", challenge: "Incomplete"},
	{num: 6, title: "4 sets of 8 reps", challenge: "Incomplete"},
	{num: 7, title: "5 sets of 5 reps", challenge: "Incomplete"},
	{num: 8, title: "5 sets of 3 reps", challenge: "Incomplete"},
	{num: 9, title: "6, 8, then 10 reps", challenge: "Incomplete"},
	{num: 10, title: "10, 8, then 6 reps", challenge: "Incomplete"}];

var arrayReps = [];

var stats = [
	{name: "Total", gains: 0, sets: 0, reps: 0, weight: 0, records: 0, challenges: 0, oneRM: 0},
	{name: "Bench", gains: 0, sets: 0, reps: 0, weight: 0, records: 0, challenges: 0, oneRM: 0},
	{name: "Squat", gains: 0, sets: 0, reps: 0, weight: 0, records: 0, challenges: 0, oneRM: 0},
	{name: "Dead", gains: 0, sets: 0, reps: 0, weight: 0, records: 0, challenges: 0, oneRM: 0}];

var thisSetGains = 0;

var levelInfo = [
	{name: 1, gains: 10000, total: 10000, current: 0},
	{name: 2, gains: 20000, total: 30000, current: 0},
	{name: 3, gains: 20000, total: 50000, current: 0},
	{name: 4, gains: 25000, total: 75000, current: 0},
	{name: 5, gains: 25000, total: 100000, current: 0},
	{name: 6, gains: 50000, total: 150000, current: 0},
	{name: 7, gains: 50000, total: 200000, current: 0},
	{name: 8, gains: 50000, total: 250000, current: 0},
	{name: 9, gains: 50000, total: 300000, current: 0},
	{name: 10, gains: 50000, total: 350000, current: 0},
	{name: 11, gains: 50000, total: 400000, current: 0},
	{name: 12, gains: 50000, total: 500000, current: 0},
	{name: 13, gains: 100000, total: 600000, current: 0},
	{name: 14, gains: 100000, total: 700000, current: 0},
	{name: 15, gains: 100000, total: 800000, current: 0},
	{name: 16, gains: 200000, total: 1000000, current: 0},
	{name: 17, gains: 500000, total: 1500000, current: 0},
	{name: 18, gains: 500000, total: 2000000, current: 0},
	{name: 19, gains: 1000000, total: 3000000, current: 0},
	{name: 20, gains: 2000000, total: 5000000, current: 0},];

var level = 1;
var current = 0;
var progress = 0;
var total = 0;


var squatCoef = [1, 1.0475, 1.13, 1.1575, 1.2, 1.242, 1.284, 1.326, 1.368, 1.41];
var benchCoef = [1, 1.035, 1.08, 1.115, 1.15, 1.18, 1.22, 1.255, 1.29, 1.325];
var deadCoef = [1, 1.065, 1.13, 1.147, 1.164, 1.181, 1.198, 1.22, 1.232, 1.24];

var challenge = 0;
