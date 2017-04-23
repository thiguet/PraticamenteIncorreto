function screenInit ($scope, $http) {

	var X = $http.get( './asssets/json/bandaInfo.json');

	$scope.menu = [
		"HOME",
		"BANDA",
		"SHOWS",
		"CONTATO"
	];

	$scope.welcome = "E ai gente! Bem vindos ao nosso site. Ele foi criado pelos próprios componentes da banda e, tem como objetivo criar o maior vínculo possível entre vocês e nós. Aqui poderão ver um pouco do nosso conteúdo, além de nossos contatos, para sugestões e contratações.";
	
	$scope.banda = {
		"nome": "Praticamente Incorreto",  
		"descricao": "E ai gente! Bem vindos ao nosso site. Ele foi criado pelos próprios componentes da banda e, tem como objetivo criar o maior vínculo possível entre vocês e nós. Aqui poderão ver um pouco do nosso conteúdo, além de nossos contatos, para sugestões e contratações.",
		"email": "bandapraticamenteincorreto@gmail.com",
		"integrantes": [
			{
				"nome": "Thiguet",
				"descricao": "Definindo coisas sem sentido desde sempre.",
				"tel": "+55 (31) 98221-6556",
				"papeis": "Guitarrista e Vocalista",
				"anoEntrada": 2014
			},
			{
				"nome": "Barbosa",
				"descricao": "Vegeta + Ariano + Batera + Ser o cabuloso em tudo que faz.",
				"tel": "+55 (31) 99296-9209",
				"papeis": "Baterista",
				"anoEntrada": 2014
			},
			{
				"nome": "Leo",
				"descricao": "Vários meu signo plural.",
				"tel": "+55 (31) 99246-1009",
				"papeis": "Guitarrista Principal",
				"anoEntrada": 2017
			}
		]
	}
}


RegisterInAngular('screenInit', screenInit);