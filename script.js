function calculateTotal() {
  const car = document.querySelector('input[name="car"]:checked');
  const insurance = document.getElementById("insurance").checked;
  const days = document.getElementById("days").value;

  if (car && days) {
    let total = car.value * days;
    if (insurance) {
      total += 57.98 * days;
    }
    document.getElementById("totalCost").innerText = total;
  } else {
    alert("Please select a car and enter the number of days.");
  }
}
