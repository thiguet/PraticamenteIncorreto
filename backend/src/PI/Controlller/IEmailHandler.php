<?php
namespace PI/Controller; 

abstract class IEmailHandler {

	protected 	$to,
	 			$subject, 
	 			$txt,
	 			$headers,
	 			$parameters;	

	public function __construct ($to,  $subject, $txt, $headers, $parameters) {
		$this->to = $to;
		$this->subject = $subject;
		$this->txt = $txt;
		$this->headers = $headers;
		$this->parameters = $parameters;
	}
	
	public function getTo() {
		return $this->to;
	}

	public function setTo($to) {
		$this->to = $to;
	}

	public function getSubject() {
		return $this->subject;
	}

	public function setSubject($subject) {
		$this->subject = $subject;
	}

	public function getTxt() {
		return $this->txt;
	}

	public function setTxt($txt) {
		$this->txt = $txt;
	}

	public function getHeaders() {
		return $this->headers;
	}

	public function setHeaders($headers) {
		$this->headers = $headers;
	}

	public function getParameters() {
		return $this->parameters;
	}

	public function setParameters($parameters) {
		$this->parameters = $parameters;
	}


	public function sendEmail ($to,  $subject, $txt, $headers, $parameters);
}
?>