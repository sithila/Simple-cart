<?php
session_start(); //start session
include("config.inc.php");
setlocale(LC_MONETARY,"en_US"); // US national format (see : http://php.net/money_format)
?>
<div class="inner-wrapper">
<div class="cart-page">
<?php
if(isset($_SESSION["products"]) && count($_SESSION["products"])>0){
	$total 			= 0;
	$list_tax 		= '';
	$cart_box 		= '<ul class="view-cart">';
	
	foreach($_SESSION["products"] as $product){ //Print each item, quantity and price.
		$item_price 	= sprintf("%01.2f",($product["price"] * $product["qty"]));  // price x qty = total item price
		
		$cart_box 		.=  '<li>' . $product["code"]. ' &ndash; ' . $product["name"]. ' (Qty : ' . $product["qty"]. ') <span class="align-right">' . $currency. $item_price .'</span></li>';
		
		$subtotal 		= ($product["price"] * $product["qty"]); //Multiply item quantity * price
		$total 			= ($total + $subtotal); //Add up to total price
	}
	
	$grand_total = $total + $shipping_cost; //grand total
	
	foreach($taxes as $key => $value){ //list and calculate all taxes in array
			$tax_amount 	= round($total * ($value / 100));
			$tax_item[$key] = $tax_amount;
			$grand_total 	= $grand_total + $tax_amount; 
	}
	
	foreach($tax_item as $key => $value){ //taxes List
		$list_tax .= '<p>'.$key.'<span class="align-right">'. $currency. sprintf("%01.2f", $value).'</span>'.'</p>';
	}
	
	$shipping_cost = ($shipping_cost)?'<p>'.'Shipping Cost : '.'<span class="align-right">'.$currency. sprintf("%01.2f", $shipping_cost).'</span>'.'</p>':'';
	
	//Print Shipping, VAT and Total
	$cart_box .= '<li class="view-cart-total">'.$shipping_cost . $list_tax .'<hr>Payable Amount : '.'<span class="align-right">'.$currency. sprintf("%01.2f", $grand_total).'</span>'.'</li>';
	$cart_box .= "</ul>";
	
	echo $cart_box;
}else{
	echo "Your Cart is empty";
}
?>
</div>
</div>