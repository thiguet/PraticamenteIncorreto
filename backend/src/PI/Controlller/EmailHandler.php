<?php

require('./IEmailHandler.php');
require('./IEmailException.php');

namespace PI/Controller; 

use PI/Exception;

class EmailHandler extends IEmailHandler {

	public function sendEmail ($to, $subject, $txt) {
		if( !! $this->getHeaders() ) {
			mail($to, $subject, $txt, $headers);
		} if ( !! $this->getParameters() ) {
			mail($to, $subject, $txt, $headers, $parameters);
		} else {
			mail($to, $subject, $txt);
		} 
	}
}

?>