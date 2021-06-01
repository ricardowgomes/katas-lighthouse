const chooseRecipe = function (bakeryA, bakeryB, recipes) {
  let matchIngredients = [];
  let matchRecipes = [];

  const ingredientCheck = function (bakery) {
    for (let i = 0; i < bakery.length; i++) {
      for (let recipe of recipes) {
        for (let ingredient of recipe.ingredients) {
          if (ingredient === bakery[i]) {
            matchIngredients.push(ingredient)
            matchRecipes.push(recipe.name)
          }
        }
      }
    } return matchRecipes
  }

  const recipesBakeryA = ingredientCheck(bakeryA)
  const recipesBakeryB = ingredientCheck(bakeryB)

  function getDuplicateArrayElements(arr) {
    let sorted_arr = arr.slice().sort();
    let results = [];
    for (let i = 0; i < sorted_arr.length - 1; i++) {
      if (sorted_arr[i + 1] === sorted_arr[i]) {
        results.push(sorted_arr[i]);
      }
    }
    return results;
  }

  const matchBakeries = getDuplicateArrayElements(matchRecipes)

  return matchBakeries.join("")
}


let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
  {
    name: 'Coconut Sponge Cake',
    ingredients: ['coconut', 'cake base']
  },
  {
    name: 'Persian Cheesecake',
    ingredients: ['saffron', 'cream cheese']
  },
  {
    name: 'Custard Surprise',
    ingredients: ['custard', 'ground beef']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
  {
    name: 'Potato Ganache',
    ingredients: ['potatoes', 'chocolate']
  },
  {
    name: 'Sweet Fish',
    ingredients: ['anchovies', 'honey']
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ['dijon mustard', 'raisins']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));