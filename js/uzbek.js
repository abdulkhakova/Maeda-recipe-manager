document.addEventListener('DOMContentLoaded', function() {
    const recipes = {
        'plov': {
            title: 'Uzbek Plov',
            difficulty: 'Medium',
            time: '90 min',
            calories: '450 cal',
            servings: '6 servings',
            image: '../images/recipes/uzbek/plov.jpg',
            ingredients: [
                '500g lamb or beef, cut into cubes',
                '500g long grain rice (preferably Devzira)',
                '500g carrots, julienned',
                '2 large onions, thinly sliced',
                '100ml vegetable oil',
                '1 head of garlic, whole',
                '2 tsp cumin seeds',
                '1 tsp coriander seeds',
                '2-3 bay leaves',
                '5-6 cups water or broth',
                'Salt and black pepper to taste'
            ],
            instructions: [
                'Heat oil in a large kazan (heavy-bottomed pot) over high heat.',
                'Add the meat and brown on all sides, about 7-10 minutes.',
                'Add sliced onions and cook until golden, about 5 minutes.',
                'Add julienned carrots and cook for another 5-7 minutes.',
                'Add cumin, coriander, bay leaves, salt, and pepper. Mix well.',
                'Pour in water or broth, bring to a boil, then reduce heat and simmer for 30 minutes.',
                'Wash rice thoroughly until water runs clear, then drain well.',
                'Spread the rice evenly over the meat and vegetables. Do not stir.',
                'Push the whole head of garlic into the center of the rice.',
                'Pour enough water to cover the rice by about 1 inch.',
                'Bring to a boil, then reduce heat to low, cover, and cook for 20-25 minutes until rice is tender.',
                'Remove from heat and let rest for 10 minutes before serving.',
                'Gently fluff the rice and mix with the meat and vegetables before serving.'
            ],
            tips: 'For authentic flavor, use lamb fat instead of vegetable oil. The garlic head cooked in the center adds incredible aroma - squeeze the soft cloves over your portion when serving.',
            nutrition: {
                'Calories': '450 kcal',
                'Protein': '25g',
                'Carbs': '45g',
                'Fat': '18g',
                'Fiber': '3g',
                'Sodium': '380mg'
            }
        },
        'samsa': {
            title: 'Samsa',
            difficulty: 'Medium',
            time: '60 min',
            calories: '320 cal',
            servings: '8 servings',
            image: '../images/recipes/uzbek/samsa.jpg',
            ingredients: [
                '500g flour',
                '250ml water',
                '1 tsp salt',
                '2 tbsp oil',
                '400g lamb or beef, minced',
                '2 onions, finely chopped',
                '100g lamb fat (optional)',
                '1 tsp cumin seeds',
                '1 tsp black pepper',
                '1 egg (for egg wash)',
                'Sesame or nigella seeds for topping'
            ],
            instructions: [
                'Mix flour, water, salt, and oil to make a smooth dough. Knead for 10 minutes.',
                'Cover and let rest for 30 minutes.',
                'Meanwhile, mix minced meat, chopped onions, diced fat, cumin, salt, and pepper.',
                'Roll out the dough into a large rectangle, about 2-3mm thick.',
                'Cut into squares (approximately 10x10cm).',
                'Place a spoonful of filling in the center of each square.',
                'Fold the corners to the center and pinch to seal, forming a pyramid shape.',
                'Place on a baking sheet, brush with beaten egg, and sprinkle with seeds.',
                'Bake at 200°C (400°F) for 25-30 minutes until golden brown.'
            ],
            tips: 'For extra flaky samsa, brush thin layers of the dough with oil or melted butter before cutting into squares. Traditional samsa are baked in a tandoor oven, but a conventional oven works well too.',
            nutrition: {
                'Calories': '320 kcal',
                'Protein': '18g',
                'Carbs': '30g',
                'Fat': '15g',
                'Fiber': '2g',
                'Sodium': '320mg'
            }
        },
        'lagman': {
            title: 'Lagman Soup',
            difficulty: 'Hard',
            time: '120 min',
            calories: '380 cal',
            servings: '4 servings',
            image: '../images/recipes/uzbek/lagman.jpg',
            ingredients: [
                'For the noodles:',
                '500g flour',
                '1 egg',
                '200ml water',
                '1 tsp salt',
                'For the soup:',
                '300g beef, thinly sliced',
                '2 onions, sliced',
                '2 bell peppers, sliced',
                '2 carrots, julienned',
                '2 tomatoes, diced',
                '2 potatoes, cubed',
                '2 tbsp vegetable oil',
                '2 cloves garlic, minced',
                '1 tbsp tomato paste',
                '1 tsp cumin',
                '1 tsp paprika',
                '1.5L beef broth',
                'Fresh herbs (cilantro, parsley) for garnish'
            ],
            instructions: [
                'For the noodles: Mix flour, egg, water, and salt to form a stiff dough. Knead for 15 minutes until smooth and elastic.',
                'Cover and rest for 30 minutes.',
                'Roll the dough into a thick rope and pull/stretch repeatedly to form long, thin noodles.',
                'Boil noodles in salted water for 3-5 minutes until al dente, then drain.',
                'For the soup: Heat oil in a large pot over medium-high heat.',
                'Add beef and brown for 5-7 minutes.',
                'Add onions and cook until translucent, about 3 minutes.',
                'Add carrots, bell peppers, and cook for 5 minutes.',
                'Stir in tomato paste, garlic, cumin, and paprika. Cook for 1 minute.',
                'Add tomatoes and potatoes, then pour in beef broth.',
                'Bring to a boil, then reduce heat and simmer for 30 minutes.',
                'To serve, place noodles in bowls and ladle the soup over them.',
                'Garnish with fresh herbs.'
            ],
            tips: 'The key to authentic lagman is hand-pulled noodles, which requires practice. If you\'re not confident, you can substitute with thick store-bought noodles like udon. For extra flavor, add a dash of black vinegar before serving.',
            nutrition: {
                'Calories': '380 kcal',
                'Protein': '22g',
                'Carbs': '48g',
                'Fat': '12g',
                'Fiber': '5g',
                'Sodium': '450mg'
            }
        },
        'non': {
            title: 'Uzbek Non (Bread)',
            difficulty: 'Easy',
            time: '75 min',
            calories: '210 cal',
            servings: '8 servings',
            image: '../images/recipes/uzbek/non.jpg',
            ingredients: [
                '500g flour',
                '300ml warm water',
                '7g dry yeast (1 packet)',
                '1 tbsp sugar',
                '1 tsp salt',
                '2 tbsp vegetable oil',
                '1 egg (for egg wash)',
                'Sesame seeds for topping',
                'Nigella seeds for topping (optional)'
            ],
            instructions: [
                'In a large bowl, mix warm water, sugar, and yeast. Let sit for 10 minutes until foamy.',
                'Add flour, salt, and oil. Mix to form a soft dough.',
                'Knead for 8-10 minutes until smooth and elastic.',
                'Cover and let rise in a warm place for 1 hour, or until doubled in size.',
                'Punch down the dough and shape into a round disk, about 20-25cm in diameter and 2cm thick.',
                'Place on a baking sheet and let rise for another 30 minutes.',
                'Using a bread stamp or fork, create a decorative pattern in the center.',
                'Brush with beaten egg and sprinkle with sesame and nigella seeds.',
                'Bake at 200°C (400°F) for 20-25 minutes until golden brown.',
                'Cool slightly before serving.'
            ],
            tips: 'Traditional Uzbek non is baked in a tandoor oven, but a regular oven works well too. For the authentic pattern, you can use a special bread stamp called a "chekich" or simply make patterns with a fork. The bread is best enjoyed fresh and warm.',
            nutrition: {
                'Calories': '210 kcal',
                'Protein': '6g',
                'Carbs': '38g',
                'Fat': '4g',
                'Fiber': '2g',
                'Sodium': '290mg'
            }
        },
        'chuchvara': {
            title: 'Chuchvara',
            difficulty: 'Medium',
            time: '90 min',
            calories: '340 cal',
            servings: '4 servings',
            image: '../images/recipes/uzbek/chuchvara.jpg',
            ingredients: [
                'For the dough:',
                '300g flour',
                '1 egg',
                '100ml water',
                '1/2 tsp salt',
                'For the filling:',
                '250g ground beef or lamb',
                '1 onion, very finely chopped',
                '1 tsp cumin',
                'Salt and pepper to taste',
                'For the broth:',
                '1.5L beef or chicken broth',
                '1 onion, sliced',
                '2 bay leaves',
                'Fresh herbs (dill, parsley) for garnish',
                'Sour cream for serving'
            ],
            instructions: [
                'For the dough: Mix flour, egg, water, and salt to form a smooth dough. Knead for 5-7 minutes.',
                'Cover and let rest for 30 minutes.',
                'For the filling: Mix ground meat, onion, cumin, salt, and pepper.',
                'Roll out the dough very thinly (1-2mm) on a floured surface.',
                'Cut into 5x5cm squares.',
                'Place a small amount of filling (about 1/2 teaspoon) in the center of each square.',
                'Fold the dough over the filling to form a triangle and pinch the edges to seal.',
                'Then, bring the two corners of the triangle together and pinch to form a small dumpling.',
                'For the broth: Bring broth to a boil with sliced onion and bay leaves.',
                'Add the dumplings to the boiling broth and cook for 5-7 minutes until they float to the surface.',
                'Serve hot, garnished with fresh herbs and a dollop of sour cream.'
            ],
            tips: 'The key to good chuchvara is making them small - traditionally they should be no bigger than a thumbnail. For extra flavor, add a small piece of lamb fat to each dumpling along with the meat filling.',
            nutrition: {
                'Calories': '340 kcal',
                'Protein': '20g',
                'Carbs': '35g',
                'Fat': '14g',
                'Fiber': '2g',
                'Sodium': '380mg'
            }
        },
        'shashlik': {
            title: 'Shashlik',
            difficulty: 'Easy',
            time: '45 min',
            calories: '290 cal',
            servings: '4 servings',
            image: '../images/recipes/uzbek/shashlik.jpg',
            ingredients: [
                '800g lamb or beef, cut into 2-inch cubes',
                '2 onions, sliced into rings',
                '3 tbsp vegetable oil',
                '2 tbsp vinegar',
                '1 tsp salt',
                '1 tsp black pepper',
                '1 tsp cumin',
                '1 tsp coriander',
                'Fresh herbs (parsley, cilantro) for garnish',
                'Sliced red onions and sumac for serving'
            ],
            instructions: [
                'In a large bowl, combine sliced onions, oil, vinegar, salt, pepper, cumin, and coriander.',
                'Add the meat cubes and mix well to coat. Marinate for at least 2 hours, preferably overnight.',
                'Thread the marinated meat onto skewers, leaving small spaces between pieces.',
                'Preheat a grill to high heat.',
                'Grill the skewers for 10-12 minutes, turning occasionally, until meat is charred on the outside but still juicy inside.',
                'Remove from grill and let rest for 5 minutes.',
                'Serve hot with sliced red onions sprinkled with sumac and fresh herbs.'
            ],
            tips: 'For the most authentic flavor, cook over charcoal or wood fire. The best cuts for shashlik are lamb shoulder or beef chuck. Don\'t skip the marination time - it\'s essential for tender, flavorful meat.',
            nutrition: {
                'Calories': '290 kcal',
                'Protein': '32g',
                'Carbs': '5g',
                'Fat': '16g',
                'Fiber': '1g',
                'Sodium': '310mg'
            }
        },
        'halva': {
            title: 'Uzbek Halva',
            difficulty: 'Medium',
            time: '60 min',
            calories: '420 cal',
            servings: '12 servings',
            image: '../images/recipes/uzbek/halva.jpg',
            ingredients: [
                '2 cups flour',
                '1 cup butter or ghee',
                '2 cups sugar',
                '1 cup water',
                '1/2 cup chopped pistachios',
                '1/2 cup chopped almonds',
                '1 tsp cardamom powder',
                '1/4 tsp saffron threads (optional)',
                '1 tbsp rose water (optional)'
            ],
            instructions: [
                'In a large heavy-bottomed pan, melt the butter over medium heat.',
                'Add the flour and stir continuously for 15-20 minutes until it turns golden brown and gives off a nutty aroma.',
                'Meanwhile, in another pot, combine sugar and water. Bring to a boil and simmer for 5 minutes to make a syrup.',
                'Reduce heat to low and carefully pour the hot syrup into the flour mixture, stirring vigorously to prevent lumps.',
                'Add cardamom, saffron (if using), and half of the nuts. Mix well.',
                'Continue cooking and stirring for another 5-7 minutes until the mixture thickens and starts to pull away from the sides of the pan.',
                'Remove from heat and stir in rose water if using.',
                'Transfer to a greased dish and press down evenly.',
                'Sprinkle with remaining nuts and press them lightly into the surface.',
                'Let cool completely, then cut into diamond or square shapes.'
            ],
            tips: 'The key to perfect halva is constant stirring to prevent burning. For a smoother texture, you can use a food processor to grind the nuts before adding them. Store in an airtight container at room temperature for up to 2 weeks.',
            nutrition: {
                'Calories': '420 kcal',
                'Protein': '5g',
                'Carbs': '48g',
                'Fat': '25g',
                'Fiber': '2g',
                'Sodium': '15mg'
            }
        },
        'chak-chak': {
            title: 'Chak-Chak',
            difficulty: 'Medium',
            time: '50 min',
            calories: '380 cal',
            servings: '10 servings',
            image: '../images/recipes/uzbek/chak-chak.jpg',
            ingredients: [
                '2 cups flour',
                '3 eggs',
                '1 tbsp butter, melted',
                '1/4 tsp salt',
                '1 tbsp milk',
                '1 cup honey',
                '1/2 cup sugar',
                '1/2 cup chopped nuts (almonds, walnuts, or pistachios)',
                'Vegetable oil for frying'
            ],
            instructions: [
                'In a large bowl, beat eggs with salt. Add melted butter and milk, mix well.',
                'Gradually add flour, mixing until a soft dough forms.',
                'Knead the dough on a floured surface for 5-7 minutes until smooth and elastic.',
                'Cover and let rest for 30 minutes.',
                'Roll the dough thin (about 2-3mm) and cut into small strips or pieces.',
                'Heat oil in a deep pan to 350°F (175°C).',
                'Fry the dough pieces in batches until golden brown, about 2-3 minutes.',
                'Remove with a slotted spoon and drain on paper towels.',
                'In a separate pot, heat honey and sugar until the sugar dissolves completely.',
                'Remove from heat and immediately add the fried dough pieces and nuts. Mix gently to coat.',
                'Transfer to a wet mold or dish and shape into a mound while still warm.',
                'Let cool completely before serving, cut into pieces.'
            ],
            tips: 'Work quickly when mixing the fried dough with honey syrup as it hardens fast. For a traditional presentation, shape the chak-chak into a dome or pyramid. It\'s typically served at celebrations and can be decorated with additional nuts or dried fruits.',
            nutrition: {
                'Calories': '380 kcal',
                'Protein': '6g',
                'Carbs': '58g',
                'Fat': '15g',
                'Fiber': '1g',
                'Sodium': '80mg'
            }
        }
    };

    initRecipeModal();

    function initRecipeModal() {
        const viewButtons = document.querySelectorAll('.view-recipe-btn');
        const recipeModal = document.getElementById('recipe-modal');
        const closeButton = document.getElementById('close-recipe-modal');
        
        viewButtons.forEach(button => {
            button.addEventListener('click', function() {
                const recipeId = this.getAttribute('data-recipe-id');
                openRecipeModal(recipeId);
            });
        });
        
        if (closeButton) {
            closeButton.addEventListener('click', closeRecipeModal);
        }
        
        window.addEventListener('click', function(e) {
            if (e.target === recipeModal) {
                closeRecipeModal();
            }
        });
        
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && recipeModal.style.display === 'block') {
                closeRecipeModal();
            }
        });
    }

    function openRecipeModal(recipeId) {
        const recipe = recipes[recipeId];
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
            div.innerHTML = `<span class="nutrient">${key}</span><span class="value">${value}</span>`;
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

    document.getElementById('save-recipe-modal').addEventListener('click', function() {
        const recipeId = this.getAttribute('data-recipe-id');
        const recipeName = recipes[recipeId].title;
        showToast(`${recipeName} has been saved to your favorites`);
    });

    document.getElementById('share-recipe-modal').addEventListener('click', function() {
        const recipeId = this.getAttribute('data-recipe-id');
        openShareModal(recipeId);
    });

    document.getElementById('print-recipe').addEventListener('click', function() {
        const recipeId = document.getElementById('recipe-modal').getAttribute('data-current-recipe');
        printRecipe(recipeId);
    });

    document.getElementById('add-to-shopping-list').addEventListener('click', function() {
        const recipeId = document.getElementById('recipe-modal').getAttribute('data-current-recipe');
        const recipeName = recipes[recipeId].title;
        showToast(`Ingredients for ${recipeName} added to shopping list`);
    });

    function openShareModal(recipeId) {
        const shareModal = document.getElementById('share-modal');
        const recipe = recipes[recipeId];
        
        document.getElementById('share-link').value = `https://maeda-recipes.com/recipes/${recipeId}`;
        
        shareModal.style.display = 'block';
        shareModal.setAttribute('aria-hidden', 'false');
    }

    document.getElementById('close-share-modal').addEventListener('click', function() {
        const shareModal = document.getElementById('share-modal');
        shareModal.style.display = 'none';
        shareModal.setAttribute('aria-hidden', 'true');
    });

    document.getElementById('copy-link').addEventListener('click', function() {
        const linkInput = document.getElementById('share-link');
        linkInput.select();
        document.execCommand('copy');
        showToast('Link copied to clipboard');
    });

    document.getElementById('share-facebook').addEventListener('click', function() {
        showToast('Shared on Facebook');
        document.getElementById('share-modal').style.display = 'none';
    });

    document.getElementById('share-twitter').addEventListener('click', function() {
        showToast('Shared on Twitter');
        document.getElementById('share-modal').style.display = 'none';
    });

    document.getElementById('share-pinterest').addEventListener('click', function() {
        showToast('Saved to Pinterest');
        document.getElementById('share-modal').style.display = 'none';
    });

    document.getElementById('share-email').addEventListener('click', function() {
        showToast('Email sharing opened');
        document.getElementById('share-modal').style.display = 'none';
    });

    function printRecipe(recipeId) {
        const recipe = recipes[recipeId];
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
                    <p>Recipe from Maeda Recipe Manager - Uzbek Cuisine Collection</p>
                </footer>
            </body>
            </html>
        `;
        
        printWindow.document.open();
        printWindow.document.write(printContent);
        printWindow.document.close();
        
        printWindow.onload = function() {
            printWindow.print();
        };
    }

    const filterTabs = document.querySelectorAll('.filter-tab');
    filterTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            filterTabs.forEach(t => t.classList.remove('active'));

            this.classList.add('active');
            
            
            const filter = this.getAttribute('data-filter');
            
            
            const recipeCards = document.querySelectorAll('.recipe-card');
            recipeCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    
    const saveButtons = document.querySelectorAll('.save-recipe');
    saveButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation(); 
            const recipeId = this.getAttribute('data-recipe-id');
            const recipeName = recipes[recipeId].title;
            
            
            const isSaved = this.querySelector('i').classList.contains('fas');
            if (isSaved) {
                this.querySelector('i').classList.replace('fas', 'far');
                showToast(`${recipeName} removed from favorites`);
            } else {
                this.querySelector('i').classList.replace('far', 'fas');
                showToast(`${recipeName} added to favorites`);
            }
        });
    });

    
    const shareCardButtons = document.querySelectorAll('.share-recipe');
    shareCardButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation(); 
            const recipeId = this.getAttribute('data-recipe-id');
            openShareModal(recipeId);
        });
    });


    function showToast(message) {
        const toast = document.getElementById('toast');
        const toastMessage = document.querySelector('.toast-message');
        
        toastMessage.textContent = message;
        toast.classList.add('show');
        

        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }


    document.getElementById('toast-close').addEventListener('click', function() {
        document.getElementById('toast').classList.remove('show');
    });


    document.getElementById('save-collection-btn').addEventListener('click', function() {
        showToast('Uzbek Cuisine collection saved to your favorites');
    });

    document.getElementById('share-collection-btn').addEventListener('click', function() {
        showToast('Share link for Uzbek Cuisine collection copied to clipboard');
    });


    document.getElementById('learn-more-btn').addEventListener('click', function() {
        showToast('Exploring Uzbek culinary traditions...');
    });


    const techniqueLinks = document.querySelectorAll('.technique-link');
    techniqueLinks.forEach(link => {
        link.addEventListener('click', function() {
            const technique = this.getAttribute('data-technique');
            showToast(`Learning more about ${technique} cooking technique...`);
        });
    });


    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('newsletter-email').value;
            showToast(`Thank you for subscribing with ${email}! You'll receive our Uzbek recipes soon.`);
            this.reset();
        });
    }
});