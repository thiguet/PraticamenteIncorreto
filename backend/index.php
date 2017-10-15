<?php
	// The JSON format is being passed to the $_POST var,
	// through the input file.
	// For some reason, php was not configured for posting correctly...
	// I use this to receive frontend contents

	$rest_json = file_get_contents("php://input");
	$_POST = json_decode($rest_json, true);

 	const urlDefaultRelativePath = '.\src\PI\\';
	
	require urlDefaultRelativePath . 'Controller\EmailHandler.php';
	require urlDefaultRelativePath . 'Util\Consts.php';

	use PI\Controller;
	use PI\Util;

	if(empty($_POST)) {
		throw new \Execption ('Ocorreu um problema com os dados do remetente!');
	} else {

		$subject = $_POST['name']. ' Olá !';
		$txt = 'Nome: '. $_POST['name'] . ' Email: '. $_POST['email'] . " " . $_POST['comments'];

		// ini_set("SMTP","localhost");
	 	// ini_set("smtp_port","587");
		// ini_set("smtp_server","smtp.gmail.com");

		// ini_set("sendmail_from", Util\Consts::emailUrl);
		// ini_set("sendmail_path", "C:\wamp\sendmail\sendmail.exe -t");

		// ini_set("smtp_ssl", "auto");
		// ini_set("auth_username","praticamenteincorretooficial@gmail.com");
		// ini_set("force_sender", "praticamenteincorretooficial@gmail.com");
		// ini_set("auth_password","praticamente123");

		$headers = 'From: ' . Util\Consts::emailUrl . "\r\n";
		$headers .= $_POST['email'] . "\r\n";

		$email = new Controller\EmailHandler(Util\Consts::emailUrl, $subject, $txt);
		$email->setHeaders($headers);
		$email->sendEmail();
	}
?>