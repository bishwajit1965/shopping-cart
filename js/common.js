function updatedPhoneTotalAmount(updatedPhoneNumber) {
  const totalPhonePrice = updatedPhoneNumber * 1219;
  const phonePrice = document.getElementById("phone-price");
  phonePrice.innerText = totalPhonePrice;
}

function getTotalPrice(elementId) {
  const phone = document.getElementById(elementId);
  const phoneString = phone.innerText;
  const phonePrice = parseInt(phoneString);
  return phonePrice;
}

function setTagTextValueById(tagId, value) {
  const tag = document.getElementById(tagId);
  tag.innerText = value;
}
