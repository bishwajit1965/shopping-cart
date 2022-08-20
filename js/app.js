function caseNumberIncreaseDecrease(isIncrease) {
  const cases = document.getElementById("increase-decrease-number");
  const casesStringValue = cases.value;
  const casesValue = parseInt(casesStringValue);
  let updatedCaseNumber;
  if (isIncrease === true) {
    updatedCaseNumber = casesValue + 1;
  } else {
    updatedCaseNumber = casesValue - 1;
  }
  cases.value = updatedCaseNumber;
  return updatedCaseNumber;
}

function updatedCaseTotalAmount(updatedCaseNumber) {
  const totalCasePrice = updatedCaseNumber * 59;
  const casePrice = document.getElementById("case-price-plus-minus");
  casePrice.innerText = totalCasePrice;
}

document.getElementById("btn-case-plus").addEventListener("click", function () {
  const updatedCaseNumber = caseNumberIncreaseDecrease(true);
  updatedCaseTotalAmount(updatedCaseNumber);
});

document
  .getElementById("btn-case-minus")
  .addEventListener("click", function () {
    const updatedCaseNumber = caseNumberIncreaseDecrease(false);
    updatedCaseTotalAmount(updatedCaseNumber);
  });
