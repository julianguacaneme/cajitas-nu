// Get elements
const montoInput = document.getElementById('monto');
const calcularButton = document.querySelector("button"); // Assuming there's only one button
const errorMessageDiv = document.getElementById("error-message");
const resultadosDiv = document.querySelector(".resultado"); // Assuming .resultado is the results container

// Initially disable the button
calcularButton.disabled = true;

// Add an input event listener to the monto input for real-time validation
montoInput.addEventListener("input", function() {
    const monto = parseFloat(montoInput.value);

    // Clear previous errors and results
    errorMessageDiv.innerText = "";
    montoInput.classList.remove("input-error"); // Assuming you have a CSS class for error
    resultadosDiv.style.display = "none"; // Hide results while input is being typed

    // Check if the input is a valid positive number
    if (isNaN(monto) || monto <= 0) {
        calcularButton.disabled = true;
        calcularButton.setAttribute("aria-disabled", "true");
        errorMessageDiv.innerText = "Ingrese un monto válido y positivo.";
        montoInput.classList.add("input-error");
    } else {
        calcularButton.disabled = false;
        calcularButton.setAttribute("aria-disabled", "false");
    }
});

// Add an event listener to the button to trigger the calculation
calcularButton.addEventListener("click", calcular);

/**
 * Calculates the distribution of a given amount into three categories:
 * gastos (75%), fondo de emergencia (15%), and inversion/pago de deudas (10%).
 * Displays the calculated amounts in the respective elements on the page.
 */
function calcular() {
    // Get the input value and convert it to a floating-point number
    let monto = parseFloat(montoInput.value);

    // Calculate the amounts for each category based on predefined percentages
    let gastos = monto * 0.75;
    let fondo = monto * 0.15;
    let inversion = monto * 0.10;

    // Display the calculated amounts, formatted as currency
    document.getElementById("gastos").innerText = `$${gastos.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    document.getElementById("fondo").innerText = `$${fondo.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    document.getElementById("inversion").innerText = `$${inversion.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    resultadosDiv.style.display = "block"; // Show results after calculation
}