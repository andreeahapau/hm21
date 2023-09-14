function verifyEmail(sectionId) {
    let inputEmail = document.querySelector(`#${sectionId} input[type="email"]`).value;
    let resultElement = document.querySelector(`#${sectionId} p`);
    let emailInput = document.querySelector(`#${sectionId} input[type="email"]`);
    
    if (inputEmail.indexOf("@") === -1) {
        resultElement.textContent = "Please check your email";
        emailInput.classList.add("input-error");
    } else {
        resultElement.textContent = "";
        emailInput.classList.remove("input-error");
    }
}
document.addEventListener("DOMContentLoaded", function() {
    const textToClick = document.getElementById("textToClick");
    const dialog = document.getElementById("dialog");
    const closeDialog = document.getElementById("closeDialog");
  
    textToClick.addEventListener("click", function() {
      dialog.style.display = "block";
    });
  
  });
  