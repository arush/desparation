var CheckoutFormController = function CheckoutFormController($scope,$location,DataService,HelperService,$routeParams,$locale,checkoutLoader) {

	/**
	*  Controller Properties
	*/

	


	// set up Recurlyjs inputs

	if(typeof $scope.currentUser.get("recurlyAccountCode") !== "undefined") {
		var accountCode = $scope.currentUser.get("recurlyAccountCode");
	} else {
		var accountCode = $scope.currentUser.get("email");
	};

	$scope.recurlyPayload = {
		user 				: $scope.currentUser,
		transactionType		: "billing",
		currency			: "GBP",
		subdomain			: HelperService.getRecurlySubdomain(),
		params : { // these are the params to sign
			account : {
				account_code: accountCode
			}
			// transaction : {
			// 	"amount_in_cents" : 1999,
			// 	"currency":"GBP"
			// }
		}
		
	};

	

	// checkout title
	$scope.checkoutTitle = checkoutLoader.getCheckoutTitle($locale.id);

	// checkout copy
	$scope.checkoutCopy = checkoutLoader.getCheckoutCopy($locale.id);

	// gloves image
	$scope.checkoutIncentiveUrl = checkoutLoader.getCheckoutIncentiveUrl($locale.id);


	/**
	*  Controller Functions
	*/

	$scope.receiveRecurlyToken = function(recurly_token) {
		
		// track
		var metricsPayload = {'B4.1_Funnel': $routeParams.category};
	    HelperService.metrics.track('Registered Credit Card', metricsPayload);

		// update user with recurlyAccountCode, which is always their email address
		// Even though Recurly sets it in Parse via push noty, there could be a delay or data loss that way, so we set it here also just to be safe 
		DataService.setToUser($scope.currentUser, "recurlyAccountCode", $scope.currentUser.get("email"));
		

		var promise = DataService.saveUser($scope.currentUser, $scope);

		promise.then(function(user) {

			$scope.currentUser = user;

			var newLocation = '#/section/' + $routeParams.section + '/category/' + $routeParams.category + '/question/success';
		
		    window.location = newLocation;


		}, function(reason) {
			// something went wrong in the API call, so init new object
			console.log("Could not fetch user after adding credit card");
			console.log(reason);
			// male_answers.boxers = new Boxers();
		});

	};

	// track
	var metricsPayload = {'B4.1_Funnel': $routeParams.category};
    HelperService.metrics.track('Reached Checkout Funnel Step', metricsPayload);

}
CheckoutFormController.$inject = ['$scope','$location','DataService','HelperService','$routeParams','$locale','checkoutLoader'];
