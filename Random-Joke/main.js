const jokeContainer = document.querySelector("#joke");
const iconSmile = document.querySelector("#icSmile");
const btn = document.querySelector("#btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";


function getContentJoke() {
    jokeContainer.classList.remove("fade");
    iconSmile.classList.remove("sway");
    fetch(url)
        .then(function (respone) {
            const datas = respone.json();
            return datas;
        })
        .then(function (data) {
            jokeContainer.innerHTML = `${data.joke}`;
            jokeContainer.classList.add("fade");
            iconSmile.classList.add("sway");
        })
}

btn.addEventListener("click", getContentJoke);

