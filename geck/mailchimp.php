<?php

require_once('core.php');


// first of the month
// $ts = date("Y-m-d H:i:s", mktime(0, 0, 0, date('m'), 1, date('Y')));
// $te = date('Y-m-d H:i:s', mktime(date('H'), date('i'), date('s'), date('m'), date('d'), date('Y')));

// $ys = date("Y-m-d H:i:s", mktime(0, 0, 0, date('m')-1, 1, date('Y')));
// $ye = $ts;

// compare with this time a month ago
$ts = date('Y-m-d H:i:s', strtotime('-1 month'));
$te = date('Y-m-d H:i:s', mktime(date('H'), date('i'), date('s'), date('m'), date('d'), date('Y')));

$ys = date('Y-m-d H:i:s', strtotime('-1 month',strtotime('-1 month')));
$ye = date('Y-m-d H:i:s', mktime(date('H'), date('i'), date('s'), date('m')-1, date('d'), date('Y')));


// if (isset($_POST) && isset($_SERVER['PHP_AUTH_USER'])) {


	/* Check API key */
    // if ('XXXX' == $_SERVER['PHP_AUTH_USER']) {
		$mailchimpData = getAllMembers();
		$emailArray;

		if($mailchimpData["status"] === 1) {
			$i =0;
			foreach($mailchimpData['data'] as $member){
			    $emailArray[$i] = $member['email'];
			    $i++;
			}
		}

		$retval = getMaleSegments($emailArray);
		
		foreach($retval['data'] as $member){
			echo $member['email'] . '\n';
			echo $member['merges']['MALE'] . '\n';
		}
		

		// $json = json_encode($mailchimpData);

		// echo $json;  






    // } else {
    //     Header("HTTP/1.1 403 Access denied");
    //     $data = array('error' => 'Nice try, asshole.');
    //     echo $data;
    // }

// } else {
// 	Header("HTTP/1.1 404 Page not found");
// }



?>