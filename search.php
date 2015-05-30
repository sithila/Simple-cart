<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "root", "", "simple-cart");

$result = $conn->query("SELECT id, product_name, product_desc, product_price, product_code, product_image  FROM products_list");

$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"ID":"'  . $rs["id"] . '",';
    $outp .= '"Name":"'   . $rs["product_name"]        . '",';
	$outp .= '"Price":"'   . $rs["product_price"]        . '",';
	$outp .= '"Code":"'   . $rs["product_code"]        . '",';
	$outp .= '"Image":"'   . $rs["product_image"]        . '",';
    $outp .= '"Discription":"'. $rs["product_desc"]     . '"}';
}
$outp ='{"records":['.$outp.']}';
$conn->close();

echo($outp);
?> 