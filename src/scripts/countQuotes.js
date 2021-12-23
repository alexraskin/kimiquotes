// document selectors
const quoteCount = document.getElementById('quoteCount');

// display update listeners
window.onload = getNumberOfQuotes();

// send GET request to API
async function getNumberOfQuotes() {
    const response = await fetch(`${window.location.href}quotes/total`);
    const quoteCountData = await response.json();

    quoteCount.textContent = `Database currently contains ${quoteCountData.numberOfQuotes} quotes`;
}
