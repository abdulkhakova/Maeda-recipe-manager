document.addEventListener('DOMContentLoaded', function () {
    const europeanRecipes = {
        'carbonara': {
            title: 'Classic Italian Carbonara',
            difficulty: 'Easy',
            time: '30 min',
            calories: '650 cal',
            servings: '4 servings',
            image: '../images/recipes/carbonara.jpg',
            ingredients: [
                '400g spaghetti',
                '200g pancetta or guanciale, diced',
                '4 large eggs',
                '100g Pecorino Romano cheese, grated',
                '50g Parmigiano Reggiano, grated',
                'Freshly ground black pepper',
                'Salt for pasta water'
            ],
            instructions: [
                'Bring a large pot of salted water to boil and cook the spaghetti according to package instructions until al dente.',
                'While pasta is cooking, heat a large skillet over medium heat. Add the diced pancetta and cook until crispy, about 5-7 minutes.',
                'In a bowl, whisk together the eggs, grated cheeses, and a generous amount of freshly ground black pepper.',
                'When the pasta is done, reserve 1/2 cup of pasta water, then drain the pasta.',
                'Working quickly, add the hot pasta to the skillet with pancetta, away from the heat.',
                'Pour the egg and cheese mixture over the pasta, stirring vigorously to create a creamy sauce. If needed, add a splash of reserved pasta water to loosen the sauce.',
                'Serve immediately with additional grated cheese and black pepper on top.'
            ],
            tips: 'The key to perfect carbonara is to remove the pan from heat before adding the egg mixture to prevent scrambling. The residual heat from the pasta will cook the eggs just enough to create a silky sauce. Never add cream - authentic carbonara gets its creaminess from the eggs and cheese alone.',
            nutrition: {
                'Calories': '650 kcal',
                'Protein': '30g',
                'Carbs': '65g',
                'Fat': '28g',
                'Fiber': '3g',
                'Sodium': '890mg'
            }
        },
        'ratatouille': {
            title: 'Provençal Ratatouille',
            difficulty: 'Medium',
            time: '60 min',
            calories: '180 cal',
            servings: '6 servings',
            image: '../images/recipes/ratatouille.jpg',
            ingredients: [
                '1 large eggplant, diced',
                '2 zucchini, diced',
                '2 bell peppers (red and yellow), diced',
                '2 onions, diced',
                '4 tomatoes, diced',
                '4 cloves garlic, minced',
                '2 tbsp olive oil',
                '2 tbsp fresh basil, chopped',
                '1 tbsp fresh thyme leaves',
                '1 bay leaf',
                'Salt and pepper to taste'
            ],
            instructions: [
                'Heat olive oil in a large pot or Dutch oven over medium heat.',
                'Add onions and cook until translucent, about 5 minutes.',
                'Add garlic and cook for another minute until fragrant.',
                'Add bell peppers and cook for 5 minutes until slightly softened.',
                'Add eggplant and zucchini, cook for 10 minutes, stirring occasionally.',
                'Add tomatoes, bay leaf, thyme, salt, and pepper. Stir well.',
                'Reduce heat to low, cover, and simmer for 30 minutes, stirring occasionally.',
                'Remove bay leaf, stir in fresh basil, and adjust seasoning if needed.',
                'Serve warm or at room temperature.'
            ],
            tips: 'For the best flavor, make ratatouille a day ahead and reheat - the flavors develop beautifully overnight. Some chefs prefer to cook each vegetable separately before combining, which preserves their individual textures and flavors.',
            nutrition: {
                'Calories': '180 kcal',
                'Protein': '4g',
                'Carbs': '20g',
                'Fat': '10g',
                'Fiber': '7g',
                'Sodium': '320mg'
            }
        },
        'paella': {
            title: 'Seafood Paella',
            difficulty: 'Medium',
            time: '45 min',
            calories: '520 cal',
            servings: '6 servings',
            image: '../images/recipes/paella.jpg',
            ingredients: [
                '400g paella rice (bomba or calasparra)',
                '1 liter fish stock',
                '1 pinch saffron threads',
                '300g mixed seafood (prawns, mussels, squid)',
                '200g chicken thighs, diced',
                '1 onion, finely chopped',
                '2 cloves garlic, minced',
                '1 red bell pepper, diced',
                '200g canned chopped tomatoes',
                '100g frozen peas',
                '4 tbsp olive oil',
                '1 tsp paprika',
                'Lemon wedges for serving',
                'Fresh parsley for garnish'
            ],
            instructions: [
                'Heat the stock in a pot and add saffron threads to infuse.',
                'Heat olive oil in a paella pan over medium heat. Add chicken and cook until browned, about 5 minutes.',
                'Add onion, garlic, and bell pepper. Cook until softened, about 5 minutes.',
                'Stir in paprika and rice, coating the grains with oil.',
                'Pour in the tomatoes and hot stock. Bring to a boil, then reduce heat to simmer.',
                'Cook uncovered for 15 minutes without stirring.',
                'Arrange seafood and peas on top of the rice. Continue cooking for 10 minutes until rice is tender and seafood is cooked.',
                'Remove from heat, cover with a cloth, and let rest for 5 minutes.',
                'Garnish with parsley and serve with lemon wedges.'
            ],
            tips: 'Authentic paella develops a caramelized crust on the bottom called "socarrat" - this is highly prized! To achieve this, increase heat for the final 1-2 minutes of cooking until you hear a gentle crackling sound, but be careful not to burn the rice.',
            nutrition: {
                'Calories': '520 kcal',
                'Protein': '28g',
                'Carbs': '65g',
                'Fat': '15g',
                'Fiber': '4g',
                'Sodium': '780mg'
            }
        },
        'moussaka': {
            title: 'Greek Moussaka',
            difficulty: 'Advanced',
            time: '90 min',
            calories: '480 cal',
            servings: '8 servings',
            image: '../images/recipes/moussaka.jpg',
            ingredients: [
                '2 large eggplants, sliced',
                '500g ground lamb or beef',
                '2 onions, finely chopped',
                '3 cloves garlic, minced',
                '400g canned tomatoes',
                '2 tbsp tomato paste',
                '1 cinnamon stick',
                '1/4 tsp ground cloves',
                '1/4 tsp nutmeg',
                '2 bay leaves',
                '2 tbsp fresh parsley, chopped',
                'Salt and pepper to taste',
                'For the béchamel sauce:',
                '60g butter',
                '60g all-purpose flour',
                '750ml milk',
                '2 eggs, beaten',
                '100g Kefalotyri or Parmesan cheese, grated',
                'Pinch of nutmeg'
            ],
            instructions: [
                'Preheat oven to 180°C (350°F).',
                'Salt eggplant slices and let them sit for 30 minutes to draw out moisture. Rinse and pat dry.',
                'Brush eggplant with olive oil and bake for 20 minutes until soft. Set aside.',
                'In a large pan, cook onions until translucent. Add garlic and cook for 1 minute.',
                'Add ground meat and brown thoroughly, breaking up lumps.',
                'Stir in tomatoes, tomato paste, cinnamon, cloves, bay leaves, salt, and pepper.',
                'Simmer for 20 minutes until sauce thickens. Remove bay leaves and cinnamon stick.',
                'For the béchamel, melt butter in a saucepan, add flour, and cook for 2 minutes.',
                'Gradually whisk in milk and cook until thickened. Remove from heat.',
                'Temper beaten eggs by adding a little of the hot sauce, then mix into the béchamel along with half the cheese and nutmeg.',
                'In a baking dish, layer half the eggplant, all the meat sauce, then remaining eggplant.',
                'Pour béchamel on top and sprinkle with remaining cheese.',
                'Bake for 45 minutes until golden brown. Let rest 15 minutes before serving.'
            ],
            tips: 'Salting the eggplant is crucial to remove bitterness and excess moisture. For an authentic Greek flavor, use lamb rather than beef in the meat sauce. The moussaka can be assembled a day ahead and refrigerated before baking.',
            nutrition: {
                'Calories': '480 kcal',
                'Protein': '25g',
                'Carbs': '28g',
                'Fat': '30g',
                'Fiber': '6g',
                'Sodium': '520mg'
            }
        },
        'schnitzel': {
            title: 'Wiener Schnitzel',
            difficulty: 'Easy',
            time: '30 min',
            calories: '450 cal',
            servings: '4 servings',
            image: '../images/recipes/schnitzel.jpg',
            ingredients: [
                '4 veal cutlets (about 140g each)',
                '100g all-purpose flour',
                '2 eggs, beaten',
                '200g breadcrumbs',
                '200ml vegetable oil for frying',
                'Salt and pepper to taste',
                'Lemon wedges for serving',
                'Parsley for garnish'
            ],
            instructions: [
                'Place veal cutlets between plastic wrap and pound to about 5mm thickness.',
                'Season cutlets with salt and pepper on both sides.',
                'Set up three shallow dishes: one with flour, one with beaten eggs, and one with breadcrumbs.',
                'Dredge each cutlet in flour, shaking off excess.',
                'Dip into beaten eggs, ensuring complete coverage.',
                'Coat thoroughly with breadcrumbs, pressing gently to adhere.',
                'Heat oil in a large pan to 170°C (340°F).',
                'Fry schnitzels one at a time for 2-3 minutes per side until golden brown.',
                'Transfer to paper towels to drain excess oil.',
                'Serve immediately with lemon wedges and garnish with parsley.'
            ],
            tips: 'Authentic Wiener Schnitzel is made with veal, but pork or chicken are common substitutes. The key to a perfect schnitzel is to ensure the breading is light and puffy - never press the breadcrumbs too firmly. For extra crispiness, shake the pan gently while frying to create ripples in the coating.',
            nutrition: {
                'Calories': '450 kcal',
                'Protein': '32g',
                'Carbs': '28g',
                'Fat': '24g',
                'Fiber': '1g',
                'Sodium': '380mg'
            }
        }
    };

    initRecipeModal();

    function initRecipeModal() {
        const recipeLinks = document.querySelectorAll('.see-recipe');
        const recipeModal = document.getElementById('recipe-modal');
        const closeButton = document.getElementById('close-recipe-modal');

        recipeLinks.forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                const recipeId = this.getAttribute('href').split('/').pop().replace('.html', '');
                openRecipeModal(recipeId);
            });
        });

        if (closeButton) {
            closeButton.addEventListener('click', closeRecipeModal);
        }

        window.addEventListener('click', function (e) {
            if (e.target === recipeModal) {
                closeRecipeModal();
            }
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && recipeModal.style.display === 'block') {
                closeRecipeModal();
            }
        });
    }

    function openRecipeModal(recipeId) {
        const recipe = europeanRecipes[recipeId];
        if (!recipe) return;

        const modal = document.getElementById('recipe-modal');

        document.getElementById('recipe-modal-title').textContent = recipe.title;
        document.getElementById('recipe-modal-image').src = recipe.image;
        document.getElementById('recipe-modal-image').alt = recipe.title;
        document.getElementById('recipe-difficulty').textContent = recipe.difficulty;
        document.getElementById('recipe-time').textContent = recipe.time;
        document.getElementById('recipe-calories').textContent = recipe.calories;
        document.getElementById('recipe-servings').textContent = recipe.servings;

        const ingredientsList = document.getElementById('recipe-ingredients-list');
        ingredientsList.innerHTML = '';
        recipe.ingredients.forEach(ingredient => {
            const li = document.createElement('li');
            li.textContent = ingredient;
            ingredientsList.appendChild(li);
        });

        const instructionsList = document.getElementById('recipe-instructions-list');
        instructionsList.innerHTML = '';
        recipe.instructions.forEach(instruction => {
            const li = document.createElement('li');
            li.textContent = instruction;
            instructionsList.appendChild(li);
        });

        document.getElementById('recipe-tips-text').textContent = recipe.tips;

        const nutritionFacts = document.getElementById('nutrition-facts');
        nutritionFacts.innerHTML = '';
        for (const [key, value] of Object.entries(recipe.nutrition)) {
            const div = document.createElement('div');
            div.className = 'nutrition-item';
            div.innerHTML = `<span class="nutrition-label">${key}</span><span class="nutrition-value">${value}</span>`;
            nutritionFacts.appendChild(div);
        }

        modal.style.display = 'block';
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';

        modal.setAttribute('data-current-recipe', recipeId);

        document.getElementById('save-recipe-modal').setAttribute('data-recipe-id', recipeId);
        document.getElementById('share-recipe-modal').setAttribute('data-recipe-id', recipeId);
    }

    function closeRecipeModal() {
        const modal = document.getElementById('recipe-modal');
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    document.getElementById('save-recipe-modal').addEventListener('click', function () {
        const recipeId = this.getAttribute('data-recipe-id');
        const recipeName = europeanRecipes[recipeId].title;
        showToast(`${recipeName} has been saved to your favorites`);

        // Toggle heart icon
        const icon = this.querySelector('i');
        if (icon.classList.contains('far')) {
            icon.classList.replace('far', 'fas');
        } else {
            icon.classList.replace('fas', 'far');
        }
    });

    document.getElementById('share-recipe-modal').addEventListener('click', function () {
        const recipeId = this.getAttribute('data-recipe-id');
        openShareModal(recipeId);
    });

    document.getElementById('print-recipe').addEventListener('click', function () {
        const recipeId = document.getElementById('recipe-modal').getAttribute('data-current-recipe');
        printRecipe(recipeId);
    });

    document.getElementById('add-to-shopping-list').addEventListener('click', function () {
        const recipeId = document.getElementById('recipe-modal').getAttribute('data-current-recipe');
        const recipeName = europeanRecipes[recipeId].title;
        showToast(`Ingredients for ${recipeName} added to shopping list`);
    });

    function openShareModal(recipeId) {
        const shareModal = document.getElementById('share-modal');
        const recipe = europeanRecipes[recipeId];

        document.getElementById('share-link').value = `https://maeda-recipes.com/recipes/${recipeId}`;

        shareModal.style.display = 'block';
        shareModal.setAttribute('aria-hidden', 'false');
    }

    document.getElementById('close-share-modal').addEventListener('click', function () {
        const shareModal = document.getElementById('share-modal');
        shareModal.style.display = 'none';
        shareModal.setAttribute('aria-hidden', 'true');
    });

    document.getElementById('copy-link').addEventListener('click', function () {
        const linkInput = document.getElementById('share-link');
        linkInput.select();
        document.execCommand('copy');
        showToast('Link copied to clipboard');
    });

    document.getElementById('share-facebook').addEventListener('click', function () {
        showToast('Shared on Facebook');
        document.getElementById('share-modal').style.display = 'none';
    });

    document.getElementById('share-twitter').addEventListener('click', function () {
        showToast('Shared on Twitter');
        document.getElementById('share-modal').style.display = 'none';
    });

    document.getElementById('share-pinterest').addEventListener('click', function () {
        showToast('Saved to Pinterest');
        document.getElementById('share-modal').style.display = 'none';
    });

    document.getElementById('share-email').addEventListener('click', function () {
        showToast('Email sharing opened');
        document.getElementById('share-modal').style.display = 'none';
    });

    function printRecipe(recipeId) {
        const recipe = europeanRecipes[recipeId];
        if (!recipe) return;

        const printWindow = window.open('', '_blank');

        let printContent = `
            <html>
            <head>
                <title>${recipe.title} - Maeda Recipe</title>
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; max-width: 800px; margin: 0 auto; padding: 20px; }
                    h1 { color: #E4281F; border-bottom: 2px solid #E4281F; padding-bottom: 10px; }
                    .recipe-meta { display: flex; gap: 20px; margin-bottom: 20px; color: #666; }
                    h2 { color: #333; margin-top: 30px; }
                    ul, ol { margin-bottom: 30px; }
                    li { margin-bottom: 10px; }
                    .tips { background-color: #f9f9f9; padding: 15px; border-left: 4px solid #E4281F; }
                    .nutrition { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 30px; }
                    .nutrition-item { background-color: #f0f0f0; padding: 10px; border-radius: 5px; text-align: center; }
                    .nutrient { font-weight: bold; display: block; }
                </style>
            </head>
            <body>
                <h1>${recipe.title}</h1>
                
                <div class="recipe-meta">
                    <div>Difficulty: ${recipe.difficulty}</div>
                    <div>Time: ${recipe.time}</div>
                    <div>Calories: ${recipe.calories}</div>
                    <div>Servings: ${recipe.servings}</div>
                </div>
                
                <h2>Ingredients</h2>
                <ul>
        `;

        recipe.ingredients.forEach(ingredient => {
            printContent += `<li>${ingredient}</li>`;
        });

        printContent += `
                </ul>
                
                <h2>Instructions</h2>
                <ol>
        `;

        recipe.instructions.forEach(instruction => {
            printContent += `<li>${instruction}</li>`;
        });

        printContent += `
                </ol>
                
                <div class="tips">
                    <h2>Chef's Tips</h2>
                    <p>${recipe.tips}</p>
                </div>
                
                <h2>Nutrition Facts</h2>
                <div class="nutrition">
        `;

        for (const [key, value] of Object.entries(recipe.nutrition)) {
            printContent += `
                <div class="nutrition-item">
                    <span class="nutrient">${key}</span>
                    <span class="value">${value}</span>
                </div>
            `;
        }

        printContent += `
                </div>
                
                <footer style="margin-top: 50px; text-align: center; color: #666;">
                    <p>Recipe from Maeda Recipe Manager - European Cuisine Collection</p>
                </footer>
            </body>
            </html>
        `;

        printWindow.document.open();
        printWindow.document.write(printContent);
        printWindow.document.close();

        printWindow.onload = function () {
            printWindow.print();
        };
    }

    // Save recipe functionality for cards
    const saveButtons = document.querySelectorAll('.save-recipe');
    saveButtons.forEach(button => {
        button.addEventListener('click', function () {
            const icon = this.querySelector('i');
            if (icon.classList.contains('far')) {
                icon.classList.replace('far', 'fas');
                showToast('Recipe added to your favorites');
            } else {
                icon.classList.replace('fas', 'far');
                showToast('Recipe removed from your favorites');
            }
        });
    });

    // Toast notification function
    function showToast(message) {
        const toast = document.getElementById('toast');
        const toastMessage = document.querySelector('.toast-message');

        toastMessage.textContent = message;
        toast.classList.add('show');

        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }

    document.getElementById('toast-close').addEventListener('click', function () {
        document.getElementById('toast').classList.remove('show');
    });
});