window.onload = function() {
	var buttonLogin = document.querySelector(".button-login");
	var buttonReg = document.querySelector(".button-reg");
	var formLogin = document.querySelector(".form-login");
	var formReg = document.querySelector(".form-reg");

	function visibleFormLogin(e) {
	        formLogin.style.display = "block";
			formReg.style.display = "none";
	};
	buttonLogin.addEventListener('click', visibleFormLogin);
	
	function hideFormLogin(e) {
	    if(!e.target.matches('.form-login, .form-login *') && !e.target.matches('.button-login')) {
	        formLogin.style.display = "none";
	    }
	};
	window.addEventListener('click', hideFormLogin);

	function visibleFormReg(e) {
	        formReg.style.display = "block";
			formLogin.style.display = "none";
	};
	buttonReg.addEventListener('click', visibleFormReg);
	
	function hideFormReg(e) {
	    if(!e.target.matches('.form-reg, .form-reg *') && !e.target.matches('.button-reg')) {
	        formReg.style.display = "none";
	    }
	};
	window.addEventListener('click', hideFormReg);
}