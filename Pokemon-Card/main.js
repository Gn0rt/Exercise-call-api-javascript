const url = "https://pokeapi.co/api/v2/pokemon/";
const card = document.querySelector("#card");
const btn = document.querySelector("#btn");
const typeColor = {
    bug: "#26de81",
    dragon: "#ffeaa7",
    electric: "#fed330",
    fairy: "#FF0069",
    fighting: "#30336b",
    fire: "#f0932b",
    flying: "#81ecec",
    grass: "#00b894",
    ground: "#EFB549",
    ghost: "#a55eea",
    ice: "#74b9ff",
    normal: "#95afc0",
    poison: "#6c5ce7",
    psychic: "#a29bfe",
    rock: "#2d3436",
    water: "#0190FF"
};

function getPokemon() {
    let id = Math.floor(Math.random() * 150) + 1;
    const finalUrl = url + id;
    fetch(finalUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            console.log("Hp: " + data.stats[0].base_stat);
            console.log(data.name);
            console.log(data.types[0].type.name)
            console.log("Attack: " + data.stats[1].base_stat);
            console.log("Def: " + data.stats[2].base_stat);
            // "?": Optional Chanining: giúp truy cập thuộc tính an toàn không sợ bị lỗi undefined or null
            //obj.prop: truy cập prop, gặp lỗi nếu obj là null/undefined
            //obj?.prop: chỉ truy cập prop nếu obj không phải null/undefined
            //obj?[prop]: tương tự như trên với key là biến
            //obj?.method(): gọi hàm chỉ nếu obj tồn tại
            const typeElements = data.types?.length ? data.types.map(type => `<span>${type.type.name}</span>`).join("") : "<span>No type</span>";
            const themeColor = typeColor[data.types[0].type.name];
            card.innerHTML = `
                <p class="hp">
                    <span>HP</span>
                    ${data.stats[0].base_stat}
                </p>
                <img src="${data.sprites.other.dream_world.front_default}" alt="Pokemon Image">
                <h2 class="pokemon-name">
                    ${data.name}
                </h2>
                <div class="types">
                    ${typeElements}
                </div>
                <div class="stats">
                    <div>
                        <h3>${data.stats[1].base_stat}</h3>
                        <p>Attack</p>
                    </div>
                    <div>
                        <h3>${data.stats[2].base_stat}</h3>
                        <p>Defense</p>
                    </div>
                    <div>
                        <h3>${data.stats[5].base_stat}</h3>
                        <p>Speed</p>
                    </div>
                </div>
            `;
            styleCard(themeColor);
        })
}
let styleCard = (color) => {
    card.style.background = `radial-gradient(circle at 50% 0%, ${color} 36%, #fff 36%)`;
    card.querySelectorAll(".types span").forEach((typeColor) => {
        typeColor.style.backgroundColor = color;
    })
}
btn.addEventListener("click", getPokemon);
window.addEventListener("load", getPokemon);
