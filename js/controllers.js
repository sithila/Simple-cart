var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/product.php',
                controller  : 'customersCtrl'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'pages/about.php',
                controller  : 'aboutController'
            })
			
			.when('/cart', {
                templateUrl : 'view_cart.php',
                controller  : 'cartController'
            })

			.when('/category/:catID', {
                templateUrl : 'pages/category.php',
                controller  : 'categoryController'
            })
            // route for the contact page
            .when('/blog', {
                templateUrl : 'pages/blog.php',
                controller  : 'blogCtrl'
            });
    });

app.controller('aboutController', function($scope, $http) {
        $scope.message = 'Look! I am an about page.';
    });
	
app.controller('blogCtrl', function($scope, $http) {
	
	 $scope.selectedCountry = null;
    $scope.contries = [];

	
       $http.get('https://restcountries.eu/rest/v1/all').
        success(function(data) {
            $scope.contries = data;
			//alert($scope.contries);
        });
    });	
	
app.controller('cartController', function($scope, $http, $templateCache) {
        $templateCache.removeAll();
    });	
	
	
app.controller('categoryController', function($scope, $http, $routeParams) {
	CART.modelPopupFunctions.HideDialog();
      var catID = $routeParams.catID;
	  alert(catID)  
			var FormData = {
      'ID' : catID
    };
  $http({
  method  : 'POST',
  url     : 'catsearch.php',
  data    : FormData,
  headers: {'Content-Type': 'application/x-www-form-urlencoded'},
 })
  .success(function(data) {
    
alert(data.records)
    $scope.products = data.records;
	
	
  });
		
		
		
		
    });	

	
	
app.controller('customersCtrl', function($scope, $http) {
	
	
	
	
   $http.get("search.php")
   .success(function (response) {
					  $scope.names = response.records;
	$scope.modelpop = function(){ 
	
                var att1 = 'product-model';
                CART.modelPopupFunctions.ShowDialog(true, att1);
				//$("#overlay").hide();
                //event.preventDefault();
           
	};
	$scope.catmodel = function(){ 
	$http.get("category.php")
   .success(function (response) {
				$scope.categories = response.records;
                var att1 = 'category-model';
                CART.modelPopupFunctions.ShowDialog(true, att1);
				$("#overlay").hide();
   });//event.preventDefault();
           
	};
	$scope.modelclose = function(){ 
                CART.modelPopupFunctions.HideDialog();
				//$("#overlay").hide();
                //event.preventDefault();
           
	};
	
$scope.moreinfo = function(PCode, $index) {
	//alert(PCode);
	var FormData = {
      'Code' : PCode
    };
	
  $http({
  method  : 'POST',
  url     : 'search2.php',
  data    : FormData,
  headers: {'Content-Type': 'application/x-www-form-urlencoded'},
 })
  .success(function(data) {
    

    $scope.names2 = data.records;
	//alert($scope.names2);
	$http({
  method  : 'POST',
  url     : 'imagesearch.php',
  data    : FormData,
  headers: {'Content-Type': 'application/x-www-form-urlencoded'},
 })
.success(function(data2) {
	//alert(data2.records.length);
	$('.product-carosel').width(600 * data2.records.length + 100);	
	$scope.names5 = data2.records;
	//alert($scope.names5);
});

	var att1 = 'product-model';
                CART.modelPopupFunctions.ShowDialog(true, att1);
				CART.carousel.init();
  });
};	
	
	$scope.filterCategories = function(CatID, $index){
		//$location.path('#/category').search({param: 'CatID'});
		window.location = '#/category' + CatID;
	alert(CatID);
	
		var FormData = {
      'ID' : CatID
    };
  $http({
  method  : 'POST',
  url     : 'catsearch.php',
  data    : FormData,
  headers: {'Content-Type': 'application/x-www-form-urlencoded'},
 })
  .success(function(data) {
    
alert(data.records)
    $scope.products = data.records;
	
	
  });
	
	
	};
					  
	$scope.moreinfo2 = function(PCode, $index){ 
	alert(PCode);
	$http.get("search2.php" ,{
    product_code: PCode
}).success(function(response) {
  // data contains the response
  // status is the HTTP status
  alert(response.records);
  // headers is the header getter function
  // config is the object that was used to create the HTTP request
}).error(function(response) {
});
	 var att1 = 'product-model';
                CART.modelPopupFunctions.ShowDialog(true, att1);
	};
	$scope.send2 = function(PCode, $index){    
	alert(PCode);
	
	var iqty = 1; //get quantity
    //var icode = 'TSH2'; //get product code
	var icode =  PCode; //get product code
	//alert(icode);
    
    //button_content.attr('disabled','disabled'); //disable button before Ajax request
    $.ajax({ //make ajax request to cart_process.php
        url: "cart_process.php",
        type: "POST",
        dataType:"json", //expect json value from server
        data: { quantity: iqty, product_code: icode}
    }).done(function(data){ //on Ajax success
	
        $("#cart-info").html(data.items); //total items in cart-info element
        CART.modelPopupFunctions.HideDialog();
    })
	
	
	
	}
	$scope.send = function(PCode, $index){    
   
	//e.preventDefault();
    var button_content = $(this); //this triggered button
    var iqty = 1; //get quantity
    //var icode = 'TSH2'; //get product code
	var icode =  PCode; //get product code
	//alert(icode);
    button_content.html('Adding...'); //Loading button text
    //button_content.attr('disabled','disabled'); //disable button before Ajax request
    $.ajax({ //make ajax request to cart_process.php
        url: "cart_process.php",
        type: "POST",
        dataType:"json", //expect json value from server
        data: { quantity: iqty, product_code: icode}
    }).done(function(data){ //on Ajax success
	
        $("#cart-info").html(data.items); //total items in cart-info element
        button_content.html('Add to Cart'); //reset button text to original text
        alert("Item added to Cart!"); //alert user
    })
	
};
					  
					  });
   
   
   
 $scope.moreinfo2 = function(){
                var att1 = $(this).attr('rel');
                CART.modelPopupFunctions.ShowDialog(true, att1);
				//$("#overlay").hide();
                //event.preventDefault();
            };  
   
  
});