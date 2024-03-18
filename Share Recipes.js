document.getElementById("recipeForm").addEventListener("submit", function(event) {
  event.preventDefault(); 

  
  const recipeName = document.getElementById("recipeName").value;
  const ingredients = document.getElementById("ingredients").value;
  const instructions = document.getElementById("instructions").value;

  
  
  console.log("Recipe Name:", recipeName);
  console.log("Ingredients:", ingredients);
  console.log("Instructions:", instructions);

  
  document.getElementById("recipeForm").reset();
});