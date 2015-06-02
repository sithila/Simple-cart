<!-- blog.html -->
    <div class="inner-wrapper">
        <h1>Blog</h1>
<div ng-controller="blogCtrl">

    
<select ng-model="selectedCountry" ng-options="country.alpha2Code as country.name for country in contries">
    <option value="">Select Account</option>
</select>    
    
 <p>{{selectedCountry}}</p>   
</div>

      
    </div>
