let userNameInput = document.getElementById("userName");
let userEmailInput = document.getElementById("userEmail");
let userDollarAmountInput = document.getElementById("userDollarAmount");
let userSubmitBtn = document.getElementById("userSubmitBtn");
let userClearBtn = document.getElementById("userClearBtn");

userSubmitBtn.addEventListener("click", inputValidation);
userClearBtn.addEventListener("click", clearUserInput);

function inputValidation() {
	if ((userNameInput.value) && (userEmailInput.value) && (userDollarAmountInput.value)) {
		collectUserInput();
	}
}

function collectUserInput() {
	let userInputObject = {};
	let radios = document.getElementsByName('optionsRadios');
	userInputObject.userName = userNameInput.value;
	userInputObject.userEmail = userEmailInput.value;
	userInputObject.userDollarAmount = userDollarAmountInput.value;

	for (let i = 0; i < radios.length; i++) {
		if (radios[i].checked) {
			userInputObject.paymentType = radios[i].value;
		}
	}
	console.log("userInputObject: ", userInputObject);
	clearUserInput();
}

function clearUserInput() {
	userName.value = "";
	userEmail.value = "";
	userDollarAmount.value = "";
}