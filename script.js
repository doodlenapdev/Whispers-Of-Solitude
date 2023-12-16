const password = "SOLITUDE"; // Replace with your desired password

function checkPassword() {
    const enteredPassword = document.getElementById("passwordInput").value;

    if (enteredPassword === password) {
        window.location.href = "unlocked.html"; // Redirect to the unlocked page
    } else {
        document.getElementById("errorMessage").innerText = "Incorrect password. Try again.";
    }
}

function downloadFile() {
    // Create an anchor element to trigger the download
    const downloadLink = document.createElement("a");
    downloadLink.href = "C:\Users\anair\OneDrive - Agrupamento de Escolas Fernão de Magalhães\Ambiente de Trabalho\arg"; // Replace with the actual path to your file
    downloadLink.download = "SolitaryHaven.zip"; // Replace with the desired download filename
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);