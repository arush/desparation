var CheckoutFormController = function CheckoutFormController($scope,DataService,HelperService,$routeParams,$locale,checkoutLoader) {

	/**
	*  Controller Properties
	*/


	// basket title
	$scope.basketTitle = checkoutLoader.getBasketTitle($locale.id);

	


	var promise = DataService.query.usersBoxers($scope.currentUser, $scope.male_answers, $scope);
    
    promise.then(function(boxers) {
      // finally perform the action after API call completes
	  $scope.male_answers.boxers = boxers;

	  $scope.basket = checkoutLoader.getBasket($routeParams.category, $scope.male_answers);
	
		// make human readable answers, we made this non-default because the raw basket can be used
		if(typeof($scope.basket.brands) !== "undefined") {
			$scope.basket.brands = checkoutLoader.humanizeAnswer($scope.basket.brands);
		};
		
		if(typeof($scope.basket.colours) !== "undefined") {
			$scope.basket.colours = checkoutLoader.humanizeAnswer($scope.basket.colours);
		};
		
		if(typeof($scope.basket.size) !== "undefined") {
			$scope.basket.size = checkoutLoader.humanizeSize($scope.basket.size);
		};
		
	  console.log($scope.male_answers.boxers);

    }, function(reason) {
      // something went wrong in the API call, so init new object
      console.log(reason);
      // male_answers.boxers = new Boxers();
    });



	// checkout title
	$scope.checkoutTitle = checkoutLoader.getCheckoutTitle($locale.id);

	// checkout copy
	$scope.checkoutCopy = checkoutLoader.getCheckoutCopy($locale.id);

	// gloves image
	$scope.checkoutIncentiveUrl = checkoutLoader.getCheckoutIncentiveUrl($locale.id);

	var environment = HelperService.getEnvironment();
	var liveOrDevUrl;
	
	if(environment === "www") {
		liveOrDevUrl = "brandid";
	} else {
		liveOrDevUrl = "hackbrandid";
	}

	$scope.paymentPageUrl = "https://" + liveOrDevUrl + ".recurly.com/subscribe/onboardfee";


	/**
	*  Controller Functions
	*/

	// track
	HelperService.metrics.trackPage('£1 checkout');

}
CheckoutFormController.$inject = ['$scope','DataService','HelperService','$routeParams','$locale','checkoutLoader'];
