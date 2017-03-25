angular.module("myApp", []).controller("myCtrl", function ($scope) {
    $scope.aPictures = [{ url: "image1.jpg", name: "Taj Mahal" },
                        { url: "image2.jpg", name: "Eifel Tower" },
						{ url: "image3.jpg", name: "Tower of Pisa" },
						{ url: "image4.jpg", name: "CN Tower" },
						{ url: "image5.jpg", name: "Sydney Opera House"},
						{ url: "image6.jpg", name: "Lotus Temple" }];
    
	
	$scope.nextPicture = function () {
        $scope.n = Math.floor((Math.random() * 6));
        
		var questionArray = [];
		var shuffledArray = [];
        $scope.currentPicture = $scope.aPictures[$scope.n].url;
		questionArray.push($scope.aPictures[$scope.n].name);
		
		for (var i = 1; i<4; i++){
		randomnum = Math.floor((Math.random() * 6));
		questionArray.push($scope.aPictures[randomnum].name);
		}
		
		$scope.questionName = questionArray;
		
	};
	
	$scope.submitAnswer = function () {
		var radios = document.getElementsByName('question');
		for (var i = 0, length = radios.length; i < length; i++) {
			if (radios[i].checked) {
				if(radios[i].value==$scope.aPictures[$scope.n].name){
				$scope.winner = "You win!";
				
				}
			else{
				$scope.winner = "Try again!";
				}
			break;
			}
		}
	};
	
    $scope.n = -1;
    $scope.nextPicture();
});