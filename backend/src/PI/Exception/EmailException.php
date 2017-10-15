<?php
namespace PI\Exception; 

class EmailException extends \Exception {
	public function error($message) {
		return $message || 'Ocorreu um erro!';
	}
}

?>