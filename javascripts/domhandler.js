let userNameInput = document.getElementById("userName");
let userEmailInput = document.getElementById("userEmail");
let userDollarAmountInput = document.getElementById("userDollarAmount");
let userSubmitBtn = document.getElementById("userSubmitBtn");
let userClearBtn = document.getElementById("userClearBtn");
let outputTable = document.getElementById("outputTable");

userSubmitBtn.addEventListener("click", inputValidation);
userClearBtn.addEventListener("click", clearUserInput);

function inputValidation() {
	if ((userNameInput.value) && (userEmailInput.value) && (userDollarAmountInput.value)) {
		collectUserInput();
	}
}

function collectUserInput() {
	let donorObject = {};
	let radios = document.getElementsByName('optionsRadios');
	donorObject.userName = userNameInput.value;
	donorObject.userEmail = userEmailInput.value;
	donorObject.userDollarAmount = userDollarAmountInput.value;

	for (let i = 0; i < radios.length; i++) {
		if (radios[i].checked) {
			donorObject.paymentType = radios[i].value;
		}
	}
	WalkAThon.addDonor(donorObject);
	addInfoToTable();
	clearUserInput();
}

function clearUserInput() {
	userName.value = "";
	userEmail.value = "";
	userDollarAmount.value = "";
}

function addInfoToTable() {
	let tableRowCounter = 0;
	outputTable.innerHTML = "";
	let donorObjectArray = WalkAThon.getDonors();
	donorObjectArray.forEach(function(donor) {
		tableRowCounter++;
		outputTable.innerHTML +=
			"<tr>" +
				"<th scope='row'>" + tableRowCounter + "</th>" +
				"<td>" + donor.userName + "</td>" +
				"<td>" + donor.userEmail + "</td>" +
				"<td>" + donor.userDollarAmount + "</td>" +
				"<td>" + donor.paymentType + "</td>" +
			"</tr>";
	});
}