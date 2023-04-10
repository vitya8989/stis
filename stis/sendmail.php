<?php
header("Content-Type: text/html; charset=utf-8");

$name = empty($_POST['name']) ? '' : $_POST['name'];
$phone = empty($_POST['phone']) ? '' : $_POST['phone'];
$comment = empty($_POST['comment']) ? '' : $_POST['comment'];

$test1 = empty($_POST['where']) ? '' : "\r\nКуда планирует устанавливать окно? = ".$_POST['where'];
$test2 = empty($_POST['size']) ? '' : "\r\nСможет указать размеры? = ".$_POST['size'];

$test41 = empty($_POST['supernatural-1']) ? '' : $_POST['supernatural-1'] . ", ";
$test42 = empty($_POST['supernatural-2']) ? '' : $_POST['supernatural-2'] . ", ";
$test43 = empty($_POST['supernatural-3']) ? '' : $_POST['supernatural-3'] . ", ";
$test44 = empty($_POST['supernatural-4']) ? '' : $_POST['supernatural-4'] . ", ";
$test45 = empty($_POST['supernatural-5']) ? '' : $_POST['supernatural-5'] . ", ";
$test46 = empty($_POST['supernatural-6']) ? '' : $_POST['supernatural-6'];
$gifts = "\r\nПредпочитает следующие сверхспособности стеклопакета: " . $test41 . $test42 . $test43 . $test44 . $test45 . $test46;

//защита от бота - ОТКЛ
# if ($name == '') die('');

$fileName = file_get_contents('../../bidsCopy/totalprice/num.txt');

date_default_timezone_set('Europe/Moscow');
$fileNameDate = date('Y-m-d H:i:s');

$fileRoadName = "../../bids/file_".$fileName.".txt";
$fileRoadNameCopy = "../../bidsCopy/file_".$fileName.".txt";

if (!empty($_POST['where'])) {
    $fileContent = "DATE = ".$fileNameDate."\r\n"."Телефон для связи = ". $phone . $test1 . $test2 . $gifts;
} else if (!empty($_POST['name'])) {
    $fileContent = "DATE = ".$fileNameDate."\r\n"."Ваше имя = ".$name."\r\n"."Телефон для связи = ".$phone."\r\n"."Вопрос клиента = ".$comment;
} else {
    $fileContent = "DATE = ".$fileNameDate."\r\n"."Телефон для связи = ".$phone;
}

$fileBids = fopen($fileRoadName, "w+");
fwrite($fileBids, $fileContent);
fclose($fileBids);

$fileBidsCopy = fopen($fileRoadNameCopy, "w+");
fwrite($fileBidsCopy, $fileContent);
fclose($fileBidsCopy);

//перезаписываем новый номер для имени
$fn = fopen("../../bidsCopy/totalprice/num.txt", "w+");
settype($fileName, "float");
$fileName = $fileName + 1;
fwrite($fn, $fileName);
fclose($fn);

//Отправка в Calltouch

//Вытаскиваем из куки call_value
$CallValue =$_COOKIE['call_s']; //берём из куки строку
$FirstStr =strpos($CallValue,","); // находим позицию первой запятой
$LastStr =strrpos($CallValue,","); // находим позицию следней запятой
$CallValue = substr( $CallValue,$FirstStr +1,$LastStr - $FirstStr -1 ); //обрезаем строку оставляя только колл велью
$ch = curl_init();
curl_setopt($ch, CURLOPT_HTTPHEADER, array("Content-type: application/x-www-form-urlencoded;charset=utf-8"));

curl_setopt($ch, CURLOPT_URL,"https://api-node1.calltouch.ru/calls-service/RestAPI/requests/orders/register/");
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS,
"clientApiId=2142900543ctf2c5f6c71c8a0f8d3b182b4f2c0c3a27&fio=".urlencode($name)."&phoneNumber=".urlencode($phone)."&subject=".urlencode('Потолки Петербурга - Лэндинг Эконом')."".($CallValue != 'undefined' ? "&sessionId=".$CallValue : ""));

curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$calltouch = curl_exec ($ch);

mail("vitya898989@gmail.com, vitya8989@mail.ru", "Окна Петербурга Стис", $fileContent, "From: mail@potolok-peter.ru");

//webform@okna-peter.ru, creative@okna-peter.ru

//header('Location: http://potolok-peter.ru/landing/main/ok.html');
//header('Location: https://landing.potolok-peter.ru/ok.html');

?>