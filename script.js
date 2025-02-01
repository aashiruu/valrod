function checkPassword() {
    const password = "ILoveYou"; // Set your password here
    const input = document.getElementById("passwordInput").value;
    const errorMessage = document.getElementById("errorMessage");
  
    if (input === password) {
      document.getElementById("slide1").classList.add("hidden");
      document.getElementById("slide2").classList.remove("hidden");
    } else {
      errorMessage.classList.remove("hidden");
    }
  }
  
  function showSlide3() {
    document.getElementById("slide2").classList.add("hidden");
    document.getElementById("slide3").classList.remove("hidden");
  }