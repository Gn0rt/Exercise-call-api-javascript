let result = document.querySelector("#result");
const searchBtn = document.querySelector("#search-btn");
const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";


searchBtn.addEventListener("click", () => {
    const userInp = document.querySelector("#user-inp").value;
    if (userInp.length == 0) {
        result.innerHTML = `<h3>Input Field Cannot Be Empty!</h3>`
    }
    else {
        fetch(url + userInp)
            .then(reponse => reponse.json())
            .then(data => {
                let myMeal = data.meals[0];

                let count = 1;
                let ingredients = [];
                for (let i in myMeal) {
                    //duyet qua tat ca key cua object
                    let ingredient = "";
                    let measure = "";
                    if (i.startsWith("strIngredient") && myMeal[i]) {
                        ingredient = myMeal[i];
                        measure = myMeal[`strMeasure` + count];
                        count += 1;
                        console.log(ingredient, measure);
                        ingredients.push(`${measure} ${ingredient}`);
                    }
                }
                console.log(ingredients);
                result.innerHTML = `
            <img src="${myMeal.strMealThumb}" alt="">
            <div class="details">
                <h2>${myMeal.strMeal}</h2>
                <h4a>${myMeal.strArea}</h4a>
            </div>
            <div class="ingredient-con">

            </div>
            <div id="recipe">
                <button id="hide-recipe">X</button>
                <pre id="instructions">${myMeal.strInstructions}</pre>
            </div>
            <button id="show-recipe">View Recipe</button>
        `;
                let ingredientCon = document.querySelector(".ingredient-con");
                let parent = document.createElement("ul");
                let recipe = document.querySelector("#recipe");
                let hideRecipe = document.querySelector("#hide-recipe");
                let showRecipe = document.querySelector("#show-recipe");

                ingredients.forEach((i) => {
                    let child = document.createElement("li");
                    child.innerText = i;
                    parent.appendChild(child);
                    ingredientCon.appendChild(parent);
                });

                hideRecipe.addEventListener("click", () => {
                    recipe.style.display = "none";
                });
                showRecipe.addEventListener("click", () => {
                    recipe.style.display = "block";

                })
            })
            .catch(() => {
                result.innerHTML = `<h3>Invalid Input!</h3>`
            })
    }
})

