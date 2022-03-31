<?php

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
	http_response_code(405);

	exit();
}

require_once('../../vendor/autoload.php');
require '../../rb.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/../..');
$dotenv->load();

$imgur = new \Imgur\Client();
$imgur->setOption('client_id', $_ENV['imgurclient']);
$imgur->setOption('client_secret', $_ENV['imgursecret']);

$rbconn = R::setup( 'mysql:host='. $_ENV['dbhost'] .';dbname='. $_ENV['dbname'], $_ENV['dbusername'], $_ENV['dbpassword']);

$blog = R::dispense('blogs');

$req_params = ['title', 'body', 'shortbody', 'authors', 'tags'];

foreach ($req_params as $key) {
	if ($_POST && isset($_POST[$key])) {
		$req_params[$key];
		$filterstr .= str_replace('&&', $_POST[$key], $value);
	}
}