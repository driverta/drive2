var app = angular.module('myApp', []);
var x = [];
app.controller('homepage', function($scope, $timeout) {
	$scope.logButton = true;
	$scope.confirm = false;
	var log = "Log";
	$scope.actionURL = "Angular.html";

	$scope.changeLog = function(){
		$scope.logButton = true;
		$scope.signButton = false;
		$scope.confirm = false;
		log = "Log";
	}

	$scope.changeSign = function(){
		$scope.logButton = false;
		$scope.signButton = true;
		$scope.confirm = true;
		log = "Sign";
	}

	$scope.checkUser = function(){
		
		var query1 = firebase.database().ref("users").orderByKey();
	
		query1.once("value").then(function(snapshot) {
			
			snapshot.forEach(function(childSnapshot) {

				var childData1 = childSnapshot.val();
				
				x.push(childData1);
				//alert(x);
				
			  
			});
			localStorage.setItem("users", JSON.stringify(x));
		});
		
		
		
		
		if (log == "Sign"){

			var userBro = document.getElementById("userBro").value;
			var passBro = document.getElementById("passBro").value;
			var accounts = JSON.parse(localStorage.getItem("users"));
			//accounts.push(account);
			var checker = true;
			for(var i in accounts){
				if(accounts[i].username == userBro){
					checker = false;
				}
			}
			

			if(userBro && passBro){
				if(checker){
					var account = {username: userBro, password: passBro};
					var database = firebase.database().ref('/users');
					database.push(account);
					$timeout(function() {location.href = $scope.actionURL;}, 500);
				} else {
					$scope.message = "Username Unavailable";
				}
			} else {
				$scope.message = "Enter a Username/Password";
			}
					
		}
		if (log == "Log"){
			var userBro = document.getElementById("userBro").value;
			var passBro = document.getElementById("passBro").value;
			var accounts = JSON.parse(localStorage.getItem("users"));
			var checker = false;
			//alert(accounts[0].username);
			for(var i in accounts){
				if(accounts[i].username == userBro && accounts[i].password == passBro){
					checker = true;
					//alert(accounts[0].username);

				}
			}

			if(userBro && passBro){
				if(checker){
					location.href = $scope.actionURL;
				} else {
					$scope.message = "Invalid Username/Password";
				}
			} else {
				$scope.message = "Enter a Username/Password";
			}
		}

	}
	$scope.updateInfo = function(){
		var userBro = document.getElementById("userBro").value;
		localStorage.setItem("userBro", JSON.stringify(userBro));
	}

});
