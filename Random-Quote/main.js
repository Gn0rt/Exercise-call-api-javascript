const contentQuote = document.querySelector("#quote");
const author = document.querySelector("#author");
const btn = document.querySelector("#btn");

const url = "https://api.quotable.io/random";

function getRandomQuote() {
    contentQuote.classList.remove("fade");
    author.classList.remove("fade");
    fetch(url)
        .then(resolve => resolve.json())
        .then((data) => {
            contentQuote.innerHTML = `${data.content}`;
            author.innerHTML = `${data.author}`;
            contentQuote.classList.add("fade");
            author.classList.add("fade");
        })
}

btn.addEventListener("click", getRandomQuote)
window.addEventListener("load", getRandomQuote)
