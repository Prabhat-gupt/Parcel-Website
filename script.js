document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission

    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    // Example validation logic
    const confirmUser = localStorage.getItem('userName');
    const confirmPassword = localStorage.getItem('password');
    if (username === confirmUser && password === confirmPassword) {
        alert("Login successful!");
        window.location.href = "home.html"; // Navigate to the homepage
    } else {
        alert("Invalid username or password. Please try again.");
    }
});

// document.getElementById("registerForm").addEventListener('submit', function (e) {
//     e.preventDefault();
//     console.log("Register form submit triggered"); // Debug log
//      // Prevent the default form submission

//     // Get the values of password and confirm password fields
//     const password = document.getElementById('register-password').value.trim();
//     const confirmPassword = document.getElementById('register-confirm-password').value.trim();

//     console.log("Password:", password); // Debug log
//     console.log("Confirm Password:", confirmPassword); // Debug log

//     // Check if the passwords match
//     if (password !== confirmPassword) {
//         alert('Passwords do not match. Please try again.');
//         return;
//     }

//     // Navigate to another page or perform other actions if passwords match
//     alert('Registration successful! Redirecting...');
//     window.location.href = 'success.html'; // Replace 'success.html' with your desired page
// });
