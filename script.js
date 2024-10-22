// List of valid passwords and corresponding pages
const passwordPages = {
    'song1': 'song1.html',
    'song2': 'song2.html',
    // Add more as needed
};

document.getElementById('submitButton').addEventListener('click', function() {
    const password = document.getElementById('passwordInput').value;
    const errorMessage = document.getElementById('errorMessage');

    if (passwordPages[password]) {
        window.location.href = passwordPages[password];
    } else {
        errorMessage.textContent = 'Invalid password. Please try again.';
    }
});
