<?php

namespace PI\Controller; 

require('IEmailHandler.php');
require('\..\Exception\EmailException.php');

use PI\Exception;

class EmailHandler extends IEmailHandler {

	public function sendEmail () {
		if( !! $this->getHeaders() ) {
			mail($this->to, $this->subject, $this->txt, $this->headers);
		} if ( !! $this->getParameters() ) {
			mail($this->to, $this->subject, $this->txt, $this->headers, $this->parameters);
		} else {
			mail($this->to, $this->subject, $this->txt);
		}
	}
}

?>