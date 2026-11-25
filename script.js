const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const orderNumber = document.getElementById("order-no");
const productCode = document.getElementById("productCode");
const quantity = document.getElementById("quantity");
const compliantGroup = document.getElementById("complaints-group");
const complaintDescription = document.querySelectorAll(
  "#complaints-group input[type='complaint-description']",
);
const radioButtons = document.querySelectorAll(
  '#solutions-group input[type="radio"]',
);

const submitButton = document.getElementById("submit-btn");

function validateForm() {
  const fullNameValue = fullName.value.trim() !== "";
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const orderNumberRegex = /^\[2024\][^\sA-Za-z]+\d{6}$/;
  const emailValue =
    email.value.trim() !== "" && emailRegex.test(email.value.trim());
  const orderNumberValue =
    orderNumber.value.trim() !== "" &&
    orderNumberRegex.test(orderNumber.value.trim());
  return {
    "full-name": fullNameValue,
    email: emailValue,
    "order-no": orderNumberValue,
  };
}

fullName.addEventListener("change", () => {
  const result = validateForm();
  fullName.style.borderColor = result["full-name"] ? "green" : "red";
});

email.addEventListener("change", () => {
  const result = validateForm();
  email.style.borderColor = result["email"] ? "green" : "red"; // Change border color based on validation result
});

orderNumber.addEventListener("change", () => {
  const result = validateForm();
  orderNumber.style.borderColor = result["order-no"] ? "green" : "red"; // Change border color based on validation result
});

// submitButton.addEventListener("click", (event) => {
//   event.preventDefault();
//   const formData = validateForm();
//   if (formData) {
//     console.log("Form data:", formData);
//     fullName.style.borderColor = "green"; // Change border color to green on successful validation
//     // You can add further processing of the form data here
//   } else {
//     fullName.style.borderColor = "red"; // Change border color to red on validation failure
//   }
// });
