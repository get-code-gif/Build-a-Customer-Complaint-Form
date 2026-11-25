const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const orderNumber = document.getElementById("orderNumber");
const productCode = document.getElementById("productCode");
const quantity = document.getElementById("quantity");
const compliantGroup = document.getElementById("complaints-group");
const complaintDescription = document.querySelectorAll(
  "#complaints-group input[type='complaint-description']",
);
const radioButtons = document.querySelectorAll(
  '#solutions-group input[type="radio"]',
);

function validateForm() {
  let isValid = true;
  return {
    fullName: function () {
      if (fullName.value.trim() === "") {
        alert("Please enter your full name.");
        isValid = false;
      }
    },
    email: function () {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email.value)) {
        alert("Please enter a valid email address.");
        isValid = false;
      }
    },
    orderNumber: function () {
      if (orderNumber.value.trim() === "") {
        alert("Please enter your order number.");
        isValid = false;
      }
    },
    productCode: function () {
      if (productCode.value.trim() === "") {
        alert("Please enter the product code.");
        isValid = false;
      }
    },
    quantity: function () {
      if (
        quantity.value.trim() === "" ||
        isNaN(quantity.value) ||
        parseInt(quantity.value) <= 0
      ) {
        alert("Please enter a valid quantity.");
        isValid = false;
      }
    },
    complaintDescription: function () {
      let hasDescription = false;
      complaintDescription.forEach((input) => {
        if (input.value.trim() !== "") {
          hasDescription = true;
        }
      });
      if (!hasDescription) {
        alert("Please provide a description for at least one complaint.");
        isValid = false;
      }
    },
  };
}
