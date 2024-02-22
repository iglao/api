<?PHP
$url = "https://api.iglao.com/v1/domain/change-dns?key=YOUR_SERVICE_API_KEY&ns1=&ns2=&ns3=&ns4=&ns5=";
$curl = curl_init($url);

curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_HTTPGET, true);
curl_setopt($curl, CURLOPT_TIMEOUT, 3);
$response = curl_exec($curl);
curl_close($curl);

$json = json_decode($response, TRUE);
var_dump($json); // display all returned results

// uncomment the line under to display results separately:
// echo $json['message']; // here, show result of "message" only
?>