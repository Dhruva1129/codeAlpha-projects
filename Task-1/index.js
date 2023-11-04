document.addEventListener("DOMContentLoaded", function() {
    const addRecipeButton = document.getElementById("addRecipeButton");
    const addRecipeForm = document.getElementById("addRecipeForm");
    const saveRecipeButton = document.getElementById("saveRecipeButton");
    const cancelButton = document.getElementById("cancelButton");
    const recipeList = document.getElementById("recipeList");

    let recipeIdCounter = 1;

    addRecipeButton.addEventListener("click", function() {
        addRecipeForm.style.display = "block";
    });

    cancelButton.addEventListener("click", function() {
        addRecipeForm.style.display = "none";
    });

    function openEditForm(recipeName, recipeInstructions) {
        addRecipeForm.style.display = "block";
        document.getElementById("recipeName").value = recipeName;
        document.getElementById("recipeInstructions").value = recipeInstructions;
    }

    saveRecipeButton.addEventListener("click", function() {
        const recipeName = document.getElementById("recipeName").value;
        const recipeInstructions = document.getElementById("recipeInstructions").value;

        if (recipeName && recipeInstructions) {
            const recipeId = `recipe${recipeIdCounter}`;
            const recipeItem = document.createElement("div");
            recipeItem.innerHTML = `
                <h3>${recipeName}</h3>
                <p>${recipeInstructions}</p>
                <button class="editButton" data-id="${recipeId}">Edit</button>
                <button class="deleteButton" data-id="${recipeId}">Delete</button>
            `;
            recipeItem.setAttribute("id", recipeId);
            recipeList.appendChild(recipeItem);

            document.getElementById("recipeName").value = "";
            document.getElementById("recipeInstructions").value = "";
            addRecipeForm.style.display = "none";

            recipeIdCounter++;

            const editButtons = document.querySelectorAll(".editButton");
            const deleteButtons = document.querySelectorAll(".deleteButton");

            editButtons.forEach(button => {
                button.addEventListener("click", function() {
                    const recipeId = this.getAttribute("data-id");
                    const recipeElement = document.getElementById(recipeId);

                    const recipeName = recipeElement.querySelector("h3").textContent;
                    const recipeInstructions = recipeElement.querySelector("p").textContent;

                    openEditForm(recipeName, recipeInstructions);

                    recipeElement.remove();
                });
            });

            deleteButtons.forEach(button => {
                button.addEventListener("click", function() {
                    const recipeId = this.getAttribute("data-id");
                    const recipeElement = document.getElementById(recipeId);
                    recipeElement.remove();
                });
            });
        }
    });
});
