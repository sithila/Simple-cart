<?php

$postData = json_decode(file_get_contents("php://input"));




$myurlvariable = $postData->Code;	
	$conn = new mysqli("localhost", "root", "", "simple-cart");

$result = $conn->query("SELECT id, product_name, product_desc, product_price, product_code, product_image  FROM products_list WHERE product_code = '" . $myurlvariable . "'");

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