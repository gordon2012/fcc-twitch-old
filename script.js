var app = angular.module('myApp', []);


app.controller('ListController', ['$scope', '$http', function($scope, $http)
{
	$scope.users = [];

	userlist.forEach(function(e, i)
	{
		$http.get('https://api.twitch.tv/kraken/users/' + e).success(function(data)
		{
			var obj = data;
			var ind = ($scope.users.push(obj))-1;
			$http.get('https://api.twitch.tv/kraken/streams/' + e).success(function(data)
			{
				$scope.users[ind].online = data.stream ? true : false;
			}).error(function()
			{
				$scope.users[ind].online = false;
			});
		});
	});
}]);


app.controller('TabController', function()
{
	this.tab = 1;

	this.setTab = function(newValue)
	{
		this.tab = newValue;
	};

	this.isSet = function(tabName)
	{
		return this.tab === tabName;
	};
});


var userlist = ["freecodecamp", "storbeck", "MedryBW", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff",  "brunofin", "comster404"];
