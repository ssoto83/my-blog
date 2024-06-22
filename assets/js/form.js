console.log("Hello");
// const userData = localStorage.getItem

// function goToSecondPage() {
//    const userData = localStorage.getItem('user');
//    window.location.href = `secondPage.html?data=${userData}`;
// }

const button = document.createElement('button');
button.textContent = 'New Button';

// Add an event listener to the button
button.addEventListener('click', function() {
  alert('You clicked the new button!');
});

