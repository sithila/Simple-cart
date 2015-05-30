<?php

$postData = json_decode(file_get_contents("php://input"));




$myurlvariable = $postData->Code;
	$conn = new mysqli("localhost", "root", "", "simple-cart");

$result = $conn->query("SELECT id, product_code, image_path FROM images WHERE product_code = '" . $myurlvariable . "'");

$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"ID":"'  . $rs["id"] . '",';
    $outp .= '"Name":"'   . $rs["product_code"]        . '",';
    $outp .= '"Path":"'. $rs["image_path"]     . '"}';
}
$outp ='{"records":['.$outp.']}';
$conn->close();

echo($outp);
	











?> 