function calculatePhoneNumberAndPrice(isIncrease) {
  const phone = document.getElementById("phone-number-field");
  const phoneNumberString = phone.value;
  const phoneValue = parseInt(phoneNumberString);

  let updatedPhoneNumber;
  if (isIncrease === true) {
    updatedPhoneNumber = phoneValue + 1;
  } else {
    updatedPhoneNumber = phoneValue - 1;
  }
  phone.value = updatedPhoneNumber;

  return updatedPhoneNumber;
}

document
  .getElementById("btn-increase-phone-number")
  .addEventListener("click", function () {
    const updatedPhoneNumber = calculatePhoneNumberAndPrice(true);
    updatedPhoneTotalAmount(updatedPhoneNumber);

    // phone price
    const phonePrice = getTotalPrice("phone-price");
    const coverPrice = getTotalPrice("case-price-plus-minus");
    const phoneSubTotal = phonePrice + coverPrice;

    // get and set sub-total
    setTagTextValueById("sub-total", phoneSubTotal);

    // get and set tax
    const taxString = phoneSubTotal * 0.1;
    const tax = parseFloat(taxString).toFixed(2);
    setTagTextValueById("tax", tax);

    // Grand Total(Sub-total + tax)
    const grandTotal = parseFloat(phoneSubTotal) + parseFloat(tax);
    setTagTextValueById("grand-total", grandTotal.toFixed(2));
  });

document
  .getElementById("btn-decrease-phone-number")
  .addEventListener("click", function () {
    const updatedPhoneNumber = calculatePhoneNumberAndPrice(false);
    updatedPhoneTotalAmount(updatedPhoneNumber);
    // phone price
    const phonePrice = getTotalPrice("phone-price");
    const coverPrice = getTotalPrice("case-price-plus-minus");
    const phoneSubTotal = phonePrice + coverPrice;

    // get and set sub-total
    setTagTextValueById("sub-total", phoneSubTotal);
    // get and set tax
    const taxString = phoneSubTotal * 0.1;
    const tax = parseFloat(taxString).toFixed(2);
    setTagTextValueById("tax", tax);

    // Grand Total(Sub-total + tax)
    const grandTotal = parseFloat(phoneSubTotal) + parseFloat(tax);
    setTagTextValueById("grand-total", grandTotal.toFixed(2));
  });
