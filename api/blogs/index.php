<?php
header('Access-Control-Allow-Origin: *');

require_once('../vendor/autoload.php');

use NilPortugues\Sql\QueryBuilder\Builder\MySqlBuilder;

Dotenv\Dotenv::createImmutable(__DIR__ . '/..')->load();

$conn = new mysqli($_ENV['dbhost'], $_ENV['dbusername'], $_ENV['dbpassword'], $_ENV['dbname']) or die('ERROR connecting');
$builder = new MySqlBuilder(); 

$query = $builder->select()->setTable('blogs'); 

$result = [];
$alreadywhere = false;

function putwhere() {
	if ($alreadywhere) return
	$alreadywhere = true;

	$query = $query->where();
}

if ($_GET && isset($_GET['id'])) {
	putwhere();

	$query = $query->equals('id', $_GET['id']);
}

echo $builder->write($query);

foreach ($conn->query($builder->write($query)) as $row) {
    array_push($result, $row);
}

echo json_encode($result);



// $db = \ParagonIE\EasyDB\Factory::fromArray([
// 	'mysql:host=' . $_ENV['dbhost'] . ';dbname=' . $_ENV['dbname'],
//     $_ENV['dbusername'],
//     $_ENV['dbpassword']
// ]);



// require '../rb.php';

// Dotenv\Dotenv::createImmutable(__DIR__ . '/..')->load();
// $rbconn = R::setup( 'mysql:host='. $_ENV['dbhost'] .';dbname='. $_ENV['dbname'], $_ENV['dbusername'], $_ENV['dbpassword']) or die('ERROR connecting');


// $filterstr 		=	"";
// $return			=	[];
// $pagenumber		=	isset($_GET['page']) && intval($_GET['page']) !== 0 ? $_GET['page'] : 1;
// $pagelimit		=	isset($_GET['limit']) && intval($_GET['limit']) !== 0 ? $_GET['limit'] : 10;
// $totalpages		=	ceil(R::count('blogs') / $pagelimit);
// $rempages 		=	$totalpages - $pagenumber;
// $toget 			=	['id' => " id = &&", 'title' => " title like '%&&%'"];


// foreach ($toget as $key => $value) {
// 	if ($_GET && isset($_GET[$key])) {
// 		$filterstr .= str_replace('&&', $_GET[$key], $value);
// 	}
// }

// if ($_GET && isset($_GET['tags'])) {
// 	$imploded = '';

// 	foreach (explode(',', $_GET['tags']) as $key ) {
// 		$imploded .= "'" . $key . "', ";
// 	}

// 	$filterstr .= ' tags in(' . substr($imploded, 0, -2) . ')';
// }

// if ($_GET && isset($_GET['exclude'])) {
// 	$imploded = '';

// 	foreach (explode(',', $_GET['exclude']) as $key ) {
// 		$imploded .= "'" . $key . "', ";
// 	}

// 	$filterstr .= ' id not in(' . substr($imploded, 0, -2) . ')';
// }

// $paginationString = '';

// if ($totalpages > 1) {
// 	$paginationString = ' limit ' . (($pagenumber - 1) * $pagelimit) . ', ' . $pagelimit;
// }

// foreach (R::findAll('blogs', $filterstr . 'order by id desc' . $paginationString) as $blog){
//     array_push($return, $blog);
// }

// echo json_encode([
// 	'data'			=>	$return,
// 	'totalpages'	=>	$totalpages,
// 	'pagenumber'	=>	intval($pagenumber),
// 	'pagelimit'		=>	intval($pagelimit)
// ]);