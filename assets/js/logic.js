document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('dark-mode');
    const body = document.body;

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
    });
});

function goToSecondPage() {
    console.log("Redirecting to index.html");
    window.location.href = 'index.html';
}

document.getElementById('back-btn').addEventListener('click', function() {
    console.log("Back button clicked");
    goToSecondPage();
})