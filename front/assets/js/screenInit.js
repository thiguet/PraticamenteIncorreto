function screenInit ($scope, $http) {
	$(document).ready(function() {
		// Add smooth scrolling to all links in navbar + footer link
		$(" .menu-item a , .navbar a , footer a[href='#HOME']").on('click', function(event) {

		  	// Make sure this.hash has a value before overriding default behavior
			if (this.hash !== "") {

			    // Prevent default anchor click behavior
			    event.preventDefault();

			    // Store hash
			    var hash = this.hash;

			    // Using jQuery's animate() method to add smooth page scroll
			    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
			    $('html, body').animate({
			      scrollTop: $(hash).offset().top
			    }, 600, function(){

			      // Add hash (#) to URL when done scrolling (default click behavior)
			      window.location.hash = hash;
		      	});
		    } // End if 
		});
	});

	$scope.welcome = "E ai gente? Sejam bem vindos ao nosso site! Nós o fizemos para ser um espaço mais perto entre nós e vocês. Espero que gostem!",

    $scope.menu = [
        "HOME",
        "BANDA",
        "SHOWS",
        "CONTATO"
    ];

    $scope.banda = {
        "nome": "Praticamente Incorreto",
        "email": "bandapraticamenteincorreto@gmail.com",
        "integrantes": [
            {
                "nome": "Thiguet",
                "descricao": "Adora falar coisas sem sentido durante o show.",
                "tel": "+55 (31) 98221-6556",
                "papeis": "Guitarrista e Vocalista",
                "anoEntrada": 2014
            },
            {
                "nome": "Barbosa",
                "descricao": "Ama girar e jogar a baqueta durante o show.",
                "tel": "+55 (31) 99296-9209",
                "papeis": "Baterista",
                "anoEntrada": 2014
            },
            {
                "nome": "Leo",
                "descricao": "Ama fazer uns solo lokos durante o show.",
                "tel": "+55 (31) 99246-1009",
                "papeis": "Guitarrista Principal",
                "anoEntrada": 2017
            }
        ]
    };

	$scope.shows = [
		{
			"titulo": "Barzinho A",
			"data": "Sexta, 25 de maio de 2017",
			"img": "pub a.jpg"
		},
		{
			"titulo": "New York",
			"data": "Sábado, 28 de novembro de 2015",
			"img": "pub b.jpg"
		},
		{
			"titulo": "São Francisco",
			"data": "Domingo, 29 de novembro de 2015",
			"img": "pub a.jpg"
		}
	];
}


RegisterInAngular('screenInit', screenInit);