<?php

header('Access-Control-Allow-Origin: *');

require_once('../vendor/autoload.php');
require '../rb.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/..');
$dotenv->load();

$rbconn = R::setup( 'mysql:host='. $_ENV['dbhost'] .';dbname='. $_ENV['dbname'], $_ENV['dbusername'], $_ENV['dbpassword']);

$filterstr = "";
$toget = [
	'id' => " id = &&",
	'title' => " title like '%&&%'",
];

foreach ($toget as $key => $value) {
	if ($_GET && isset($_GET[$key])) {
		$filterstr .= str_replace('&&', $_GET[$key], $value);
	}
}

if ($_GET && isset($_GET['tags'])) {
	$imploded = '';

	foreach (explode(',', $_GET['tags']) as $key ) {
		$imploded .= "'" . $key . "', ";
	}

	$filterstr .= ' tags in(' . substr($imploded, 0, -2) . ')';
}

$return = [];

foreach (R::findAll('blogs', $filterstr) as $blog){
    array_push($return, $blog);
}

echo json_encode($return);