const searchBtn = document.querySelector("#search-btn");
const result = document.querySelector("#result");
const sound = document.querySelector("#sound");

const url = "https://api.dictionaryapi.dev/api/v2/entries/en/"


searchBtn.addEventListener("click", () => {
    let wordInput = document.querySelector("#inp-word").value;
    result.classList.remove("fade");
    fetch(`${url}${wordInput}`)
        .then((respone) => respone.json())
        .then((data) => {
            console.log(data);
            result.innerHTML = `
                <div class="word">
                    <h3>${wordInput}</h3>
                    <button onclick="playSound()">
                        <i class="fa-solid fa-volume-high"></i>
                    </button>
                </div>
                <div class="details">
                    <p>${data[0].meanings[0].partOfSpeech}</p>
                    <p>${data[0].phonetics[0].text}</p>
                </div>
                <p class="word-meaning">
                    ${data[0].meanings[0].definitions[0].definition}
                </p>
                <p class="word-example">
                    ${data[0].meanings[0].definitions[0].example || ""}
                </p>
            `;
            sound.setAttribute("src", `${data[0].phonetics[0].audio}`)
            result.classList.add("fade");
            console.log(sound);
        })
});
function playSound() {
    sound.play();
}
