const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const orderNumber = document.getElementById("order-no");
const productCode = document.getElementById("product-code");
const quantity = document.getElementById("quantity");
const compliantGroup = document.getElementById("complaints-group");
const complaintCheckboxes = compliantGroup.querySelectorAll(
  'input[type="checkbox"]',
);
const otherComplaintInput = document.getElementById("other-complaint");
const complaintDescription = document.getElementById("complaint-description");
const radioButtons = document.querySelectorAll(
  'fieldset#solutions-group input[type="radio"]',
);

const solutionRadioButtons = document.getElementById("solutions-group");
const solutionRadioInputs = solutionRadioButtons.querySelectorAll(
  'input[type="radio"]',
);

const otherCompileRadioButton = document.getElementById("other-solution");
const solutionDescription = document.getElementById("solution-description");

const submitButton = document.getElementById("submit-btn");

function validateForm() {
  const fullNameValue = fullName.value.trim() !== "";
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const orderNumberRegex = /^2024\d{6}$/;
  const productCodeRegex =
    /^[A-Za-z]{2}\d{2}-[A-Za-z]{1}\d{3}-[A-Za-z]{2}\d{1}$/;

  //const orderNumberRegex = /^2024[^\sA-Za-z._()_-]+\d{6}$/;
  const quantityValue =
    quantity.value.trim() !== "" &&
    !isNaN(quantity.value.trim()) &&
    Number(quantity.value.trim()) > 0;
  const emailValue =
    email.value.trim() !== "" && emailRegex.test(email.value.trim());
  const orderNumberValue =
    orderNumber.value.trim() !== "" &&
    orderNumberRegex.test(orderNumber.value.trim());
  const productCodeValue =
    productCode.value.trim() !== "" &&
    productCodeRegex.test(productCode.value.trim());

  const complaintChecked = Array.from(complaintCheckboxes).some(
    (checkbox) => checkbox.checked,
  );

  const solutionChecked = Array.from(solutionRadioInputs).some(
    (radio) => radio.checked,
  );

  const complaintDescriptionValid =
    !otherComplaintInput.checked ||
    complaintDescription.value.trim().length >= 20;

  const complainRadioDescription =
    !otherCompileRadioButton.checked ||
    solutionDescription.value.trim().length >= 20;

  return {
    "full-name": fullNameValue,
    email: emailValue,
    "order-no": orderNumberValue,
    "product-code": productCodeValue,
    quantity: quantityValue,
    "complaints-group": complaintChecked,
    "complaint-description": complaintDescriptionValid,
    "solutions-group": solutionChecked,
    "solution-description": complainRadioDescription,
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

productCode.addEventListener("change", () => {
  const result = validateForm();
  productCode.style.borderColor = result["product-code"] ? "green" : "red"; // Change border color based on validation result
});

quantity.addEventListener("change", () => {
  const result = validateForm();
  quantity.style.borderColor = result["quantity"] ? "green" : "red"; // Change border color based on validation result
});

complaintCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    const result = validateForm();

    compliantGroup.style.borderColor = result["complaints-group"]
      ? "green"
      : "red";
  });
});

solutionRadioInputs.forEach((radio) => {
  radio.addEventListener("change", () => {
    const result = validateForm();

    solutionRadioButtons.style.borderColor = result["solutions-group"]
      ? "green"
      : "red";
  });
});

// otherComplaintInput.addEventListener("change", () => {
//   const result = validateForm();
//   document.querySelector("#complaint-description-container").style.display =
//     otherComplaintInput.checked ? "block" : "none";
// complaintDescription.style.borderColor = result["complaint-description"]
//   ? "green"
//   : "red";
// otherComplaintInput.style.borderColor = result["complaint-description"]
//   ? "green"
//   : "red"; // Change border color based on validation result
// });

otherComplaintInput.addEventListener("change", () => {
  const container = document.getElementById("complaint-description-container");

  container.style.display = otherComplaintInput.checked ? "block" : "none";
});

complaintDescription.addEventListener("change", () => {
  const result = validateForm();

  complaintDescription.style.borderColor = result["complaint-description"]
    ? "green"
    : "red";
});

complaintDescription.addEventListener("input", () => {
  const result = validateForm();

  complaintDescription.style.borderColor = result["complaint-description"]
    ? "green"
    : "red";
});

otherCompileRadioButton.addEventListener("change", () => {
  const container = document.getElementById("solution-description-container");

  container.style.display = otherCompileRadioButton.checked ? "block" : "none";
});

solutionDescription.addEventListener("change", () => {
  const result = validateForm();

  solutionDescription.style.borderColor = result["solution-description"]
    ? "green"
    : "red";
});

document.querySelectorAll('input[type="radio"]').forEach((radio) => {
  radio.addEventListener("change", () => {
    const container = document.getElementById("solution-description-container");

    container.style.display = otherCompileRadioButton.checked
      ? "block"
      : "none";
  });
});

function isValid(validationResult) {
  return Object.values(validationResult).every((value) => value === true);
}

// submitButton.addEventListener(
//   "click",
//   isValid(validateForm())
//     ? () => {
//         const validationResult = validateForm();
//         console.log("Form data:", validationResult);

//         // You can add further processing of the form data here
//         alert("Form submitted successfully!");
//       }
//     : (event) => {
//         event.preventDefault();
//         const validationResult = validateForm();

//         // Highlight invalid fields
//         for (const [field, isValid] of Object.entries(validationResult)) {
//           const element = document.getElementById(field);
//           if (element) {
//             element.style.borderColor = isValid ? "green" : "red";
//           }
//         }
//         alert("Please correct the highlighted fields before submitting.");
//       },
// );

// submitButton.addEventListener("click", (event) => {
//   event.preventDefault();
//   const validationResult = validateForm();

//   if (isValid(validationResult)) {
//     console.log("Form data:", validationResult);

//     // You can add further processing of the form data here
//     alert("Form submitted successfully!");
//   } else {
//     // Highlight invalid fields
//     for (const [field, isValid] of Object.entries(validationResult)) {
//       const element = document.getElementById(field);
//       if (element) {
//         element.style.borderColor = isValid ? "green" : "red";
//       }
//     }
//     alert("Please correct the highlighted fields before submitting.");
//   }
// });

submitButton.addEventListener("submit", (event) => {
  event.preventDefault();

  const validationResult = validateForm();

  for (const [field, valid] of Object.entries(validationResult)) {
    const element = document.getElementById(field);

    if (element) {
      element.style.borderColor = valid ? "green" : "red";
    }
  }

  if (isValid(validationResult)) {
    console.log("Form data:", validationResult);
    alert("Form submitted successfully!");
  } else {
    alert("Please correct the highlighted fields before submitting.");
  }
});
