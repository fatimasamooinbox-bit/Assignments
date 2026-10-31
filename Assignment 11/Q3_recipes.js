const API_URL = "https://dummyjson.com/recipes";
const recipesGrid = document.getElementById("recipesGrid");
const statusMessage = document.getElementById("statusMessage");
const httpStatus = document.getElementById("httpStatus");
const recipeDetails = document.getElementById("recipeDetails");

function showError(message) {
  statusMessage.textContent = message;
  statusMessage.className = "status error";
}

function showRecipeDetails(recipe) {
  recipeDetails.replaceChildren();

  const heading = document.createElement("h2");
  heading.textContent = `${recipe.name} — Ingredients`;

  const list = document.createElement("ul");
  (recipe.ingredients || []).forEach((ingredient) => {
    const item = document.createElement("li");
    item.textContent = ingredient;
    list.appendChild(item);
  });

  if (!recipe.ingredients || recipe.ingredients.length === 0) {
    const item = document.createElement("li");
    item.textContent = "Ingredients are not available for this recipe.";
    list.appendChild(item);
  }

  recipeDetails.append(heading, list);
}

async function loadRecipes() {
  statusMessage.textContent = "Loading recipes...";
  try {
    const response = await fetch(API_URL);
    httpStatus.textContent = `HTTP status: ${response.status} ${response.statusText}`;
    console.log("Recipe API status:", response.status);

    if (!response.ok) {
      throw new Error(`The recipe request failed (HTTP ${response.status}).`);
    }

    const data = await response.json();
    const recipes = data.recipes;

    if (!Array.isArray(recipes) || recipes.length === 0) {
      throw new Error("The API did not return any recipes.");
    }

    recipesGrid.replaceChildren();
    recipes.slice(0, 6).forEach((recipe) => {
      const card = document.createElement("article");
      card.className = "recipe-card";

      const image = document.createElement("img");
      image.src = recipe.image || "";
      image.alt = recipe.name || "Recipe image";
      image.loading = "lazy";
      if (!recipe.image) image.hidden = true;
      image.addEventListener("error", () => { image.hidden = true; });

      const info = document.createElement("div");
      info.className = "recipe-info";

      const title = document.createElement("h2");
      title.textContent = recipe.name || "Unnamed recipe";

      const cuisine = document.createElement("p");
      cuisine.textContent = `Cuisine: ${recipe.cuisine || "Not available"}`;

      const time = document.createElement("p");
      const prep = recipe.prepTimeMinutes;
      time.textContent = `Preparation time: ${prep !== undefined ? `${prep} minutes` : "Not available"}`;

      const button = document.createElement("button");
      button.type = "button";
      button.textContent = "View ingredients";
      button.addEventListener("click", () => showRecipeDetails(recipe));

      info.append(title, cuisine, time, button);
      card.append(image, info);
      recipesGrid.appendChild(card);
    });

    statusMessage.textContent = `Loaded ${Math.min(6, recipes.length)} recipes. Select one to see its ingredients.`;
    statusMessage.className = "status";
  } catch (error) {
    showError(error.message || "Could not load recipes. Check your internet connection.");
    console.error("Recipe fetch error:", error);
  }
}

loadRecipes();
