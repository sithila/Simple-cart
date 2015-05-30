<!-- home.html -->
<div class="inner-wrapper">
   
   <div class="product-details">
   <h3 class="title">Resent Products</h3>
   <div class="search-product">
   <input  type="text" ng-model="search" >
   <span class="icon search-icon"></span>
   </div>
   <a id="category-model" class="categories" ng-click="catmodel()" rel="category-model">Categories <span class="icon category-icon"></span></a>
   <div  class="model_dialog category-model">
  <div class="dialog">
 <a ng-click="modelclose()" class="close"><span class="icon close-icon"></span></a>
 <div class="model-header">
 <h3 class="model-title">All Categories</h3>
 <div class="search-category">
   <input name="" type="text" ng-model="searchcat">
   <span class="icon search-icon"></span>
   </div>
 </div>
   <div class="model-body">
   
  <ul class="category-list">
  <li ng-repeat="cat in categories | filter:searchcat | orderBy:'Name'"><a href="#/category/{{ cat.ID }}">{{cat.Name}}</a></li>
  
  </ul> 
   
   
   </div>
  
  </div>
  </div>
   </div>
   
   
   </div>
   
   <div class="inner-wrapper products">
   <a class="dropdown-link">Sign in</a>
   <div class="dropdown"><div class="arrow"></div> siathila</div>
   
   <div >
   
  <ul class="cutom-products">
  <li ng-repeat="x in names | filter:search | orderBy:'Name'">
  <div class="trans-bg"></div>
   <div class="top">
   <div class="product-img" ng-if="!x.Image"><img src="img/phone.jpg"></div>
<div class="product-img" ng-if="x.Image"><img ng-src="{{ x.Image }}" ></div>
   
   
   <div class="actions">
   <input class="p-code" type="hidden" value="{{ x.Code }}" ng-model="movie">
 
   <a class="icon view-icon product-view" ng-click="moreinfo(x.Code, $index)" rel="product-model"></a>
   <a class="icon shop-icon addtocart" ng-click="send(x.Code, $index)"></a>
   </div>
   </div>
   <div class="bottom">
   <p class="name">{{ x.Name }}</p>
   <p class="detail">{{ x.Discription }}</p>
   <span class="price">
   <p class="real">{{ x.Price }}</p>
   <p class="old">235.6$</p>
   </span>
   </div>
  
  </li>
  </ul>
<!--<table>
  <tr ng-repeat="x in names">
    <td>{{ x.Name }}</td>
    <td>{{ x.Country }}</td>
  </tr>
</table>-->
 
</div>
   
   <!--<ul class="cutom-products">
   <li >
   <div class="trans-bg"></div>
   <div class="top">
   <div class="product-img"><img src="img/chare.jpg"></div>
   <div class="actions">
   
   <a class="icon view-icon product-view" rel="product-model"></a>
   <a class="icon shop-icon addtocart"></a>
   </div>
   </div>
   <div class="bottom">
   <p class="name">Product Name</p>
   <p class="detail">It's necessary </p>
   <span class="price">
   <p class="real">200.0$</p>
   <p class="old">235.6$</p>
   </span>
   </div>
   </li>
   
   
   <li >
   <div class="trans-bg"></div>
   <div class="top">
   <div class="product-img"><img src="img/phone.jpg"></div>
   <div class="actions">
   <a class="icon view-icon"></a>
   <a class="icon shop-icon"></a>
   </div>
   </div>
   <div class="bottom">
   <p class="name">Product Name</p>
   <p class="detail">It's necessary </p>
   <span class="price">
   <p class="real">200.0$</p>
   <p class="old">235.6$</p>
   </span>
   </div>
   </li>
   
   <li>
   <div class="trans-bg"></div>
   <div class="top">
   <div class="product-img"><img src="img/phone.jpg"></div>
   <div class="actions">
   <a class="icon view-icon"></a>
   <a class="icon shop-icon"></a>
   </div>
   </div>
   <div class="bottom">
   <p class="name">Product Name</p>
   <p class="detail">It's necessary </p>
   <span class="price">
   <p class="real">200.0$</p>
   <p class="old">235.6$</p>
   </span>
   </div>
   </li>
   
   <li >
   <div class="trans-bg"></div>
   <div class="top">
   <div class="product-img"><img src="img/phone.jpg"></div>
   <div class="actions">
   <a class="icon view-icon"></a>
   <a class="icon shop-icon"></a>
   </div>
   </div>
   <div class="bottom">
   <p class="name">Product Name</p>
   <p class="detail">It's necessary </p>
   <span class="price">
   <p class="real">200.0$</p>
   <p class="old">235.6$</p>
   </span>
   </div>
   </li>
   
   <li >
   <div class="trans-bg"></div>
   <div class="top">
   <div class="product-img"><img src="img/phone.jpg"></div>
   <div class="actions">
   <a class="icon view-icon"></a>
   <a class="icon shop-icon"></a>
   </div>
   </div>
   <div class="bottom">
   <p class="name">Product Name</p>
   <p class="detail">It's necessary </p>
   <span class="price">
   <p class="real">200.0$</p>
   <p class="old">235.6$</p>
   </span>
   </div>
   </li>
   
   
   </ul>-->
   
   
   <div  class="model_dialog product-model">
  <div class="dialog">
 <a class="close" ng-click="modelclose()"><span class="icon close-icon"></span></a>
 <div class="model-header">

 
 </div>
   <div class="model-body">
   <div class="product-more-wrapper">
   <div class="left-sec">
   <a class="carosel-left" ></a>
   <a class="carosel-right" ></a>
   <div class="carousel">
   <ul class="product-carosel">
  <li ng-repeat="pdt in names5">
  <div class="product-img" >
<img ng-src="{{pdt.Path}}" >
</div>
  
 
  </li>
  
  </ul> 
   </div>
   </div>
   <div class="right-sec">
   
   <ul >
  <li ng-repeat="pdt in names2">
  <form>
  <div class="form-row"><h2>{{ pdt.Name }}</h2></div>
  <div class="form-row"><h3>{{ pdt.Discription }}</h3></div>
  <div class="form-row"><h2>{{ pdt.Price }}</h2></div>
  <div class="form-row align-bottom-rigth">
  <button class="btn btn-default align-right" ng-click="send2(pdt.Code, $index)" type="submit">Shop Now</button><button class="btn btn-default align-right" type="submit">Share</button>
  </div>
  </form>
  </li>
  
  </ul> 
   
   </div>
   </div>
  
   
   
   </div>
  
  </div>
  </div>
  
  
  

   
   <div class="pagination">
   <ul>
   <li><a href="" class="page-link">1</a></li>
   <li><a href="" class="page-link">2</a></li>
   <li><a href="" class="page-link">3</a></li>
   </ul>
   
   </div>
   
   </div>
