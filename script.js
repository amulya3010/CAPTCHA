// Generate a random captcha
function generateCaptcha() {
  let captcha = "";
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i <= 6; i++) {
    captcha += chars[Math.floor(Math.random() * chars.length)];
  }
  return captcha;
}

// Display the captcha on the page
function displayCaptcha() {
  let captcha = generateCaptcha();
  document.getElementById("captcha").innerHTML = captcha;
}

// Check if the user input matches the captcha

function checkCaptcha() {
  let input = document.getElementById("input").value;
  let captcha = document.getElementById("captcha").innerHTML;
  let check = document.getElementById("check");
  let times = document.getElementById("times");
  let message = document.getElementById("message");
  if (input == captcha) {
    // The input is correct
    check.classList.remove("hidden");
    times.classList.add("hidden");
    message.innerHTML = "You have entered the correct captcha";
    message.classList.add("success");
    message.classList.remove("error");
  } else {
    // The input is Wrong
    check.classList.add("hidden");
    times.classList.remove("hidden");
    message.innerHTML = "You have entered the Wrong captcha";
    message.classList.add("error");
    message.classList.remove("success");
  }
}

// Run the displayCaptcha function when the page loads

window.onload = displayCaptcha;

// Add a click event listeners to the button

document.getElementById("button").addEventListener("click", checkCaptcha);

