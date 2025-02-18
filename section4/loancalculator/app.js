// Listen on submit button
document.getElementById("loan-form").addEventListener("submit", function (e) {
  // Hide results
  document.getElementById("results").style.display = "none";

  // Show loader
  document.getElementById("loading").style.display = "block";

  setTimeout(calculateResults, 2000);
  e.preventDefault;
});

function calculateResults() {
  console.log("calc");
  // UI Variables
  const amount = document.getElementById("amount");
  const interest = document.getElementById("interest");
  const years = document.getElementById("years");
  const monthlyPayment = document.getElementById("monthly-payment");
  const totalPayment = document.getElementById("total-payment");
  const totalInterest = document.getElementById("total-interest");

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  // Compute monthly payments
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = (monthly * calculatedPayments - principal).toFixed(2);
    console.log("a");
    document.getElementById("results").style.display = "block";
    document.getElementById("loading").style.display = "none";
  } else {
    console.log("sumtin wrong");
    showError("Check your numbers");
  }
}

function showError(error) {
  // Hide results
  document.getElementById("results").style.display = "none";

  // Show loader
  document.getElementById("loading").style.display = "none";
  // create a div
  const errorDiv = document.createElement("div");

  // get elements to append error to
  const card = document.querySelector(".card");
  const heading = document.querySelector(".heading");
  // Add class
  errorDiv.className = "alert alert-danger";
  // create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  // insert error above heading
  card.insertBefore(errorDiv, heading);

  // clear error after set time
  setTimeout(clearError, 3000);
}

function clearError() {
  document.querySelector(".alert").remove();
}
