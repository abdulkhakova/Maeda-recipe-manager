document.addEventListener('DOMContentLoaded', function () {
    // European recipes object for detailed recipe information
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
                '2 zucchini, sliced',
                '1 red bell pepper, chopped',
                '1 yellow bell pepper, chopped',
                '4 tomatoes, chopped',
                '1 large onion, sliced',
                '4 cloves garlic, minced',
                '1/4 cup olive oil',
                '2 tsp dried herbs de Provence',
                'Salt and pepper to taste',
                'Fresh basil leaves'
            ],
            instructions: [
                'Heat olive oil in a large pot over medium heat.',
                'Add onion and garlic, cook until softened.',
                'Add eggplant and cook for 5 minutes.',
                'Add bell peppers and zucchini, cook for another 5 minutes.',
                'Add tomatoes, herbs, salt, and pepper.',
                'Simmer covered for 30-40 minutes until vegetables are tender.',
                'Garnish with fresh basil before serving.'
            ],
            tips: 'For best results, salt the eggplant and let it drain for 30 minutes before cooking to remove bitterness.',
            nutrition: {
                'Calories': '180 kcal',
                'Protein': '4g',
                'Carbs': '15g',
                'Fat': '12g',
                'Fiber': '8g',
                'Sodium': '320mg'
            }
        },
        'paella': {
            title: 'Seafood Paella',
            difficulty: 'Medium',
            time: '45 min',
            calories: '420 cal',
            servings: '6 servings',
            image: '../images/recipes/paella.jpg',
            ingredients: [
                '2 cups bomba rice or short-grain rice',
                '4 cups seafood stock',
                '1/2 cup white wine',
                '1 lb mixed seafood (shrimp, mussels, clams)',
                '1/2 cup green beans',
                '1/2 cup lima beans',
                '1 red bell pepper, strips',
                '4 cloves garlic, minced',
                '1 onion, chopped',
                '1/4 cup olive oil',
                'Pinch of saffron threads',
                'Salt and pepper to taste',
                'Lemon wedges for serving'
            ],
            instructions: [
                'Heat olive oil in a paella pan over medium-high heat.',
                'Add onion and garlic, cook until softened.',
                'Add rice and stir for 2 minutes until coated.',
                'Add wine and let it evaporate.',
                'Add hot stock with saffron, bring to a boil.',
                'Add vegetables and seafood, season with salt and pepper.',
                'Simmer for 20-25 minutes without stirring.',
                'Let rest for 5 minutes before serving with lemon wedges.'
            ],
            tips: 'Never stir paella while cooking - this develops the coveted socarrat (crispy bottom layer).',
            nutrition: {
                'Calories': '420 kcal',
                'Protein': '28g',
                'Carbs': '45g',
                'Fat': '12g',
                'Fiber': '3g',
                'Sodium': '680mg'
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
                '2 large potatoes, sliced',
                '1 lb ground lamb or beef',
                '1 onion, chopped',
                '3 cloves garlic, minced',
                '1 can crushed tomatoes',
                '1/2 cup red wine',
                '1 tsp cinnamon',
                '1 tsp oregano',
                'For béchamel: 4 tbsp butter, 4 tbsp flour, 2 cups milk',
                '1/2 cup grated cheese',
                'Olive oil for frying',
                'Salt and pepper to taste'
            ],
            instructions: [
                'Slice and salt eggplant, let drain for 30 minutes.',
                'Fry eggplant and potato slices until golden.',
                'Cook ground meat with onion, garlic, tomatoes, wine, and spices.',
                'Make béchamel sauce by melting butter, adding flour, then milk gradually.',
                'Layer potatoes, meat sauce, eggplant in baking dish.',
                'Top with béchamel sauce and cheese.',
                'Bake at 350°F for 45 minutes until golden.',
                'Let rest for 15 minutes before serving.'
            ],
            tips: 'Let the moussaka rest after baking - it will be easier to cut and the flavors will meld beautifully.',
            nutrition: {
                'Calories': '480 kcal',
                'Protein': '25g',
                'Carbs': '35g',
                'Fat': '25g',
                'Fiber': '8g',
                'Sodium': '720mg'
            }
        },
        'schnitzel': {
            title: 'Wiener Schnitzel',
            difficulty: 'Easy',
            time: '30 min',
            calories: '520 cal',
            servings: '4 servings',
            image: '../images/recipes/schnitzel.jpg',
            ingredients: [
                '4 veal cutlets, pounded thin',
                '1 cup all-purpose flour',
                '2 eggs, beaten',
                '2 cups fine breadcrumbs',
                '1 cup vegetable oil for frying',
                'Salt and pepper',
                'Lemon wedges for serving',
                'Fresh parsley for garnish'
            ],
            instructions: [
                'Season veal cutlets with salt and pepper.',
                'Set up breading station: flour, beaten eggs, breadcrumbs.',
                'Dredge each cutlet in flour, then egg, then breadcrumbs.',
                'Heat oil in large skillet over medium-high heat.',
                'Fry schnitzels for 2-3 minutes per side until golden.',
                'Drain on paper towels.',
                'Serve immediately with lemon wedges and parsley.'
            ],
            tips: 'The key to perfect schnitzel is thin cutlets and hot oil. The coating should puff up and be golden brown.',
            nutrition: {
                'Calories': '520 kcal',
                'Protein': '35g',
                'Carbs': '25g',
                'Fat': '28g',
                'Fiber': '2g',
                'Sodium': '450mg'
            }
        }
    };

    // Regional recipes for the region modal
    const regionalRecipes = {
        'italian': [
            {
                id: 'pizza-margherita',
                title: 'Pizza Margherita',
                image: '../images/recipes/pizza-margherita.jpg',
                time: '45 min',
                difficulty: 'Easy',
                description: 'Classic Italian pizza with tomato, mozzarella, and basil.'
            },
            {
                id: 'carbonara',
                title: 'Classic Italian Carbonara',
                image: '../images/recipes/carbonara.jpg',
                time: '30 min',
                difficulty: 'Easy',
                description: 'Authentic Roman pasta dish made with eggs, cheese, pancetta, and black pepper.'
            },
            {
                id: 'risotto',
                title: 'Mushroom Risotto',
                image: '../images/recipes/risotto.jpg',
                time: '40 min',
                difficulty: 'Medium',
                description: 'Creamy Italian rice dish with wild mushrooms and Parmesan cheese.'
            }
        ],
        'french': [
            {
                id: 'ratatouille',
                title: 'Provençal Ratatouille',
                image: '../images/recipes/ratatouille.jpg',
                time: '60 min',
                difficulty: 'Medium',
                description: 'French vegetable stew featuring eggplant, zucchini, peppers, and tomatoes.'
            },
            {
                id: 'coq-au-vin',
                title: 'Coq au Vin',
                image: '../images/recipes/coq-au-vin.jpg',
                time: '2 hours',
                difficulty: 'Medium',
                description: 'Classic French chicken braised in red wine with mushrooms and onions.'
            }
        ],
        'spanish': [
            {
                id: 'paella',
                title: 'Seafood Paella',
                image: '../images/recipes/paella.jpg',
                time: '45 min',
                difficulty: 'Medium',
                description: 'Traditional Spanish rice dish with saffron, seafood, and seasonal vegetables.'
            },
            {
                id: 'gazpacho',
                title: 'Andalusian Gazpacho',
                image: '../images/recipes/gazpacho.jpg',
                time: '20 min',
                difficulty: 'Easy',
                description: 'Cold Spanish soup made with fresh tomatoes, peppers, and cucumbers.'
            }
        ],
        'greek': [
            {
                id: 'moussaka',
                title: 'Greek Moussaka',
                image: '../images/recipes/moussaka.jpg',
                time: '90 min',
                difficulty: 'Advanced',
                description: 'Layered casserole with eggplant, potatoes, spiced meat, and béchamel sauce.'
            },
            {
                id: 'greek-salad',
                title: 'Traditional Greek Salad',
                image: '../images/recipes/greek-salad.jpg',
                time: '15 min',
                difficulty: 'Easy',
                description: 'Fresh Mediterranean salad with tomatoes, cucumbers, olives, and feta cheese.'
            }
        ],
        'german': [
            {
                id: 'schnitzel',
                title: 'Wiener Schnitzel',
                image: '../images/recipes/schnitzel.jpg',
                time: '30 min',
                difficulty: 'Easy',
                description: 'Thinly pounded veal cutlets, breaded and fried to golden perfection.'
            },
            {
                id: 'sauerbraten',
                title: 'Sauerbraten',
                image: '../images/recipes/sauerbraten.jpg',
                time: '3 hours',
                difficulty: 'Advanced',
                description: 'German pot roast marinated in vinegar and spices, served with gravy.'
            }
        ],
        'scandinavian': [
            {
                id: 'salmon-gravlax',
                title: 'Gravlax',
                image: '../images/recipes/gravlax.jpg',
                time: '48 hours',
                difficulty: 'Medium',
                description: 'Cured salmon with dill and spices, a Nordic delicacy.'
            },
            {
                id: 'meatballs',
                title: 'Swedish Meatballs',
                image: '../images/recipes/swedish-meatballs.jpg',
                time: '45 min',
                difficulty: 'Easy',
                description: 'Traditional Swedish meatballs with cream sauce and lingonberry jam.'
            }
        ],
        'eastern-european': [
            {
                id: 'pierogi',
                title: 'Polish Pierogi',
                image: '../images/recipes/pierogi.jpg',
                time: '90 min',
                difficulty: 'Medium',
                description: 'Traditional Polish dumplings filled with potato and cheese.'
            },
            {
                id: 'goulash',
                title: 'Hungarian Goulash',
                image: '../images/recipes/goulash.jpg',
                time: '2 hours',
                difficulty: 'Medium',
                description: 'Hearty Hungarian stew with beef, vegetables, and paprika.'
            }
        ],
        'british': [
            {
                id: 'fish-chips',
                title: 'Fish and Chips',
                image: '../images/recipes/fish-chips.jpg',
                time: '45 min',
                difficulty: 'Medium',
                description: 'Classic British dish of battered fish with crispy chips.'
            },
            {
                id: 'shepherds-pie',
                title: 'Shepherd\'s Pie',
                image: '../images/recipes/shepherds-pie.jpg',
                time: '60 min',
                difficulty: 'Easy',
                description: 'Traditional British casserole with minced lamb and mashed potato topping.'
            }
        ]
    };

    // Category information
    const categoryInfo = {
        'appetizers': {
            title: 'European Appetizers',
            description: 'Start your meal with these delicious European-style starters and appetizers.',
            image: '../images/categories/appetizers-hero.jpg',
            recipes: [
                {
                    id: 'bruschetta',
                    title: 'Italian Bruschetta',
                    image: '../images/recipes/bruschetta.jpg',
                    time: '15 min',
                    difficulty: 'Easy',
                    description: 'Toasted bread topped with fresh tomatoes, basil, and garlic.'
                },
                {
                    id: 'spanish-tapas',
                    title: 'Spanish Tapas Platter',
                    image: '../images/recipes/tapas.jpg',
                    time: '30 min',
                    difficulty: 'Medium',
                    description: 'Selection of classic Spanish small plates including patatas bravas and gambas al ajillo.'
                },
                {
                    id: 'greek-mezze',
                    title: 'Greek Mezze Platter',
                    image: '../images/recipes/mezze.jpg',
                    time: '25 min',
                    difficulty: 'Easy',
                    description: 'Assortment of Greek dips, olives, and pita bread.'
                }
            ]
        },
        'main-courses': {
            title: 'European Main Courses',
            description: 'Hearty and satisfying main dishes from across Europe.',
            image: '../images/categories/main-courses-hero.jpg',
            recipes: [
                {
                    id: 'beef-bourguignon',
                    title: 'Beef Bourguignon',
                    image: '../images/recipes/beef-bourguignon.jpg',
                    time: '3 hours',
                    difficulty: 'Medium',
                    description: 'Classic French beef stew braised in red wine with mushrooms and pearl onions.'
                },
                {
                    id: 'paella',
                    title: 'Seafood Paella',
                    image: '../images/recipes/paella.jpg',
                    time: '45 min',
                    difficulty: 'Medium',
                    description: 'Traditional Spanish rice dish with saffron, seafood, and seasonal vegetables.'
                }
            ]
        },
        'desserts': {
            title: 'European Desserts',
            description: 'Indulge in these sweet treats and pastries from across Europe.',
            image: '../images/categories/desserts-hero.jpg',
            recipes: [
                {
                    id: 'tiramisu',
                    title: 'Classic Tiramisu',
                    image: '../images/recipes/tiramisu.jpg',
                    time: '30 min + 4 hours chilling',
                    difficulty: 'Medium',
                    description: 'Italian coffee-flavored dessert with layers of mascarpone cream and ladyfingers.'
                },
                {
                    id: 'creme-brulee',
                    title: 'Crème Brûlée',
                    image: '../images/recipes/creme-brulee.jpg',
                    time: '1 hour',
                    difficulty: 'Medium',
                    description: 'French custard dessert with a layer of hard caramel on top.'
                },
                {
                    id: 'apple-strudel',
                    title: 'Apple Strudel',
                    image: '../images/recipes/apple-strudel.jpg',
                    time: '1 hour 30 min',
                    difficulty: 'Advanced',
                    description: 'Austrian pastry with thin layers of dough filled with spiced apples and raisins.'
                }
            ]
        },
        'breads': {
            title: 'European Breads',
            description: 'Traditional breads and pastries from European bakeries.',
            image: '../images/categories/breads-hero.jpg',
            recipes: [
                {
                    id: 'french-baguette',
                    title: 'French Baguette',
                    image: '../images/recipes/baguette.jpg',
                    time: '3 hours',
                    difficulty: 'Medium',
                    description: 'Classic French bread with a crispy crust and soft interior.'
                },
                {
                    id: 'italian-focaccia',
                    title: 'Italian Focaccia',
                    image: '../images/recipes/focaccia.jpg',
                    time: '2 hours',
                    difficulty: 'Easy',
                    description: 'Flat Italian bread topped with olive oil, herbs, and salt.'
                }
            ]
        },
        'vegetarian': {
            title: 'European Vegetarian Dishes',
            description: 'Delicious meat-free dishes with European flair.',
            image: '../images/categories/vegetarian-hero.jpg',
            recipes: [
                {
                    id: 'ratatouille',
                    title: 'Provençal Ratatouille',
                    image: '../images/recipes/ratatouille.jpg',
                    time: '60 min',
                    difficulty: 'Medium',
                    description: 'French vegetable stew featuring eggplant, zucchini, peppers, and tomatoes.'
                },
                {
                    id: 'spanakopita',
                    title: 'Greek Spanakopita',
                    image: '../images/recipes/spanakopita.jpg',
                    time: '1 hour',
                    difficulty: 'Medium',
                    description: 'Greek spinach pie with feta cheese and phyllo dough.'
                }
            ]
        },
        'quick-meals': {
            title: 'Quick European Meals',
            description: 'European recipes ready in 30 minutes or less.',
            image: '../images/categories/quick-meals-hero.jpg',
            recipes: [
                {
                    id: 'carbonara',
                    title: 'Classic Italian Carbonara',
                    image: '../images/recipes/carbonara.jpg',
                    time: '30 min',
                    difficulty: 'Easy',
                    description: 'Authentic Roman pasta dish made with eggs, cheese, pancetta, and black pepper.'
                },
                {
                    id: 'greek-salad',
                    title: 'Greek Salad',
                    image: '../images/recipes/greek-salad.jpg',
                    time: '15 min',
                    difficulty: 'Easy',
                    description: 'Fresh Mediterranean salad with tomatoes, cucumbers, olives, and feta cheese.'
                }
            ]
        }
    };

    // European culinary history content
    const culinaryHistoryContent = {
        title: "European Culinary History",
        subtitle: "A Journey Through Time and Taste",
        image: "../images/european-history.jpg",
        sections: [
            {
                title: "Ancient Foundations",
                content: "European cuisine has its roots in ancient civilizations. The Greeks and Romans established many cooking techniques and ingredients that remain fundamental today. The Romans were known for their elaborate feasts, while the Greeks emphasized simple, fresh ingredients from the Mediterranean. Olive oil, wine, bread, and various herbs were staples in both cultures, setting the foundation for modern European cooking."
            },
            {
                title: "Medieval Influences",
                content: "During the Middle Ages, cooking was heavily influenced by social class. Nobility enjoyed elaborate dishes with exotic spices imported from the East, while peasants relied on local produce and grains. Monasteries preserved culinary knowledge and techniques during this period, developing cheese-making processes and brewing methods that are still used today. The medieval era also saw the first European cookbooks emerge."
            },
            {
                title: "Renaissance Innovations",
                content: "The Renaissance brought significant changes to European cuisine, particularly in Italy. Catherine de Medici's marriage to the French king in the 16th century led to an exchange of culinary ideas between Italy and France. This period saw the introduction of forks, table manners, and more refined cooking techniques. Sugar became more widely available, leading to advancements in pastry and confectionery."
            },
            {
                title: "Colonial Expansion and New Ingredients",
                content: "European exploration and colonization from the 15th to 19th centuries dramatically transformed the continent's cuisine. New ingredients like potatoes, tomatoes, chocolate, vanilla, and peppers from the Americas gradually became integrated into European cooking. These ingredients, once foreign and exotic, are now considered essential to many traditional European dishes."
            },
            {
                title: "Birth of Modern Cuisine",
                content: "The 18th and 19th centuries saw the formalization of cooking techniques and restaurant culture, particularly in France. Chef Marie-Antoine Carême and later Auguste Escoffier codified French cuisine and established the brigade system still used in professional kitchens. This period also saw the rise of national cuisines as we understand them today, with distinct regional specialties becoming recognized across Europe."
            },
            {
                title: "20th Century and Globalization",
                content: "The 20th century brought both standardization and innovation to European cuisine. Two World Wars and economic changes led to simpler, more practical cooking, while later prosperity allowed for a renaissance in fine dining. The latter part of the century saw increased interest in regional authenticity and traditional methods, alongside avant-garde movements like molecular gastronomy. European cuisine today represents a balance between preserving culinary heritage and embracing global influences and modern techniques."
            }
        ],
        conclusion: "European culinary traditions continue to evolve while maintaining strong connections to their historical roots. The continent's diverse cooking styles reflect centuries of cultural exchange, innovation, and adaptation, making European cuisine one of the world's most influential and varied culinary traditions."
    };

    // Track navigation history
    let navigationHistory = [];
    let currentRegion = null;
    let currentCategory = null;

    // Initialize region cards functionality
    initRegionCards();
    
    // Initialize category cards functionality
    initCategoryCards();
    
    // Initialize culinary history link
    initCulinaryHistoryLink();
    
    // Initialize header buttons
    initHeaderButtons();
    
    // Initialize recipe modal event listeners
    initializeModalEventListeners();
    
    function initRegionCards() {
        const regionCards = document.querySelectorAll('.region-card');
        
        regionCards.forEach(card => {
            card.addEventListener('click', function() {
                const region = this.getAttribute('data-region');
                showRegionRecipes(region);
            });
        });
    }
    
    function initCategoryCards() {
        const categoryCards = document.querySelectorAll('.category-card');
        
        categoryCards.forEach(card => {
            card.addEventListener('click', function(e) {
                e.preventDefault();
                const categoryPath = this.getAttribute('href');
                const categoryId = categoryPath.split('/').pop().replace('.html', '');
                showCategoryRecipes(categoryId);
            });
        });
    }
    
    function initCulinaryHistoryLink() {
        const culinaryHistoryLink = document.querySelector('.insights-link');
        if (culinaryHistoryLink) {
            culinaryHistoryLink.addEventListener('click', function(e) {
                e.preventDefault();
                showCulinaryHistory();
            });
        }
    }
    
    function initHeaderButtons() {
        const browseAllBtn = document.querySelector('.eu-header-btn.primary');
        const learnAboutBtn = document.querySelector('.eu-header-btn.secondary');
        
        if (browseAllBtn) {
            browseAllBtn.addEventListener('click', function() {
                showAllRecipes();
            });
        }
        
        if (learnAboutBtn) {
            learnAboutBtn.addEventListener('click', function() {
                showCulinaryHistory();
            });
        }
    }

    function initializeModalEventListeners() {
        // Initialize any recipe cards on the main page
        const recipeLinks = document.querySelectorAll('.see-recipe');
        recipeLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const recipeId = this.getAttribute('data-recipe-id');
                openRecipeModal(recipeId);
            });
        });

        // Initialize save buttons on the main page
        const saveButtons = document.querySelectorAll('.save-recipe');
        saveButtons.forEach(button => {
            button.addEventListener('click', function() {
                const icon = this.querySelector('i');
                if (icon && icon.classList.contains('far')) {
                    icon.classList.replace('far', 'fas');
                    showToast('Recipe added to your favorites');
                } else if (icon) {
                    icon.classList.replace('fas', 'far');
                    showToast('Recipe removed from your favorites');
                }
            });
        });

        // Only add listeners if they haven't been added already
        const recipeModal = document.getElementById('recipe-modal');
        if (recipeModal && !recipeModal.hasAttribute('data-listeners-initialized')) {
            
            // Close modal listener
            const closeButton = document.getElementById('close-recipe-modal');
            if (closeButton) {
                closeButton.addEventListener('click', closeRecipeModal);
            }

            // Close modal when clicking outside
            recipeModal.addEventListener('click', function(e) {
                if (e.target === recipeModal) {
                    closeRecipeModal();
                }
            });

            // Close modal with Escape key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && recipeModal.style.display === 'block') {
                    closeRecipeModal();
                }
            });

            // Action button listeners
            const saveButton = document.getElementById('save-recipe-modal');
            if (saveButton) {
                saveButton.addEventListener('click', function() {
                    const recipeId = this.getAttribute('data-recipe-id');
                    if (recipeId && europeanRecipes[recipeId]) {
                        const recipeName = europeanRecipes[recipeId].title;
                        showToast(`${recipeName} has been saved to your favorites`);
                        
                        // Toggle heart icon
                        const icon = this.querySelector('i');
                        if (icon && icon.classList.contains('far')) {
                            icon.classList.replace('far', 'fas');
                        } else if (icon) {
                            icon.classList.replace('fas', 'far');
                        }
                    }
                });
            }

            const shareButton = document.getElementById('share-recipe-modal');
            if (shareButton) {
                shareButton.addEventListener('click', function() {
                    const recipeId = this.getAttribute('data-recipe-id');
                    if (recipeId) {
                        openShareModal(recipeId);
                    }
                });
            }

            const printButton = document.getElementById('print-recipe');
            if (printButton) {
                printButton.addEventListener('click', function() {
                    const modal = document.getElementById('recipe-modal');
                    const recipeId = modal ? modal.getAttribute('data-current-recipe') : null;
                    if (recipeId) {
                        printRecipe(recipeId);
                    }
                });
            }

            const addToListButton = document.getElementById('add-to-shopping-list');
            if (addToListButton) {
                addToListButton.addEventListener('click', function() {
                    const modal = document.getElementById('recipe-modal');
                    const recipeId = modal ? modal.getAttribute('data-current-recipe') : null;
                    if (recipeId && europeanRecipes[recipeId]) {
                        const recipeName = europeanRecipes[recipeId].title;
                        showToast(`Ingredients for ${recipeName} added to shopping list`);
                    }
                });
            }

            // Mark as initialized
            recipeModal.setAttribute('data-listeners-initialized', 'true');
        }
    }

    function showRegionRecipes(region) {
        // Save current region
        currentRegion = region;
        
        // Check if we have recipes for this region
        if (!regionalRecipes[region]) {
            console.error(`No recipes found for region: ${region}`);
            return;
        }

        // Create modal if it doesn't exist yet
        let regionModal = document.getElementById('region-modal');
        if (!regionModal) {
            regionModal = document.createElement('div');
            regionModal.id = 'region-modal';
            regionModal.className = 'modal region-modal';
            regionModal.setAttribute('aria-hidden', 'true');
            
            regionModal.innerHTML = `
                <div class="modal-content region-modal-content">
                    <button class="close-modal" id="close-region-modal" aria-label="Close">&times;</button>
                    <div class="region-modal-header">
                        <h2 id="region-modal-title">Region Recipes</h2>
                        <p id="region-modal-description">Explore authentic recipes from this region</p>
                    </div>
                    <div class="region-recipes-grid" id="region-recipes-container">
                        <!-- Recipes will be inserted here -->
                    </div>
                </div>
            `;
            
            document.body.appendChild(regionModal);
            
            // Add event listener to close button
            document.getElementById('close-region-modal').addEventListener('click', function() {
                closeRegionModal();
            });
            
            // Close modal when clicking outside
            regionModal.addEventListener('click', function(e) {
                if (e.target === regionModal) {
                    closeRegionModal();
                }
            });
            
            // Close modal with Escape key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && regionModal.style.display === 'block') {
                    closeRegionModal();
                }
            });
        }
        
        // Format region name for display
        const formattedRegion = region.charAt(0).toUpperCase() + region.slice(1).replace('-', ' ');
        
        // Update modal content
        document.getElementById('region-modal-title').textContent = `${formattedRegion} Cuisine`;
        document.getElementById('region-modal-description').textContent = `Explore authentic ${formattedRegion} recipes and culinary traditions`;
        
        // Populate recipes
        const recipesContainer = document.getElementById('region-recipes-container');
        recipesContainer.innerHTML = '';
        
        regionalRecipes[region].forEach(recipe => {
            const recipeCard = document.createElement('div');
            recipeCard.className = 'region-recipe-card';
            recipeCard.innerHTML = `
                <div class="region-recipe-img">
                    <img src="${recipe.image}" alt="${recipe.title}" loading="lazy">
                </div>
                <div class="region-recipe-content">
                    <h3>${recipe.title}</h3>
                    <div class="region-recipe-info">
                        <span><i class="far fa-clock"></i> ${recipe.time}</span>
                        <span><i class="fas fa-signal"></i> ${recipe.difficulty}</span>
                    </div>
                    <p class="region-recipe-desc">${recipe.description}</p>
                    <button class="view-recipe-btn" data-recipe-id="${recipe.id}">View Recipe</button>
                </div>
            `;
            
            recipesContainer.appendChild(recipeCard);
        });
        
        // Add event listeners to recipe buttons
        document.querySelectorAll('.view-recipe-btn').forEach(button => {
            button.addEventListener('click', function() {
                const recipeId = this.getAttribute('data-recipe-id');
                // Add to navigation history before opening recipe
                navigationHistory.push({type: 'region', id: currentRegion});
                openRecipeModal(recipeId, true);
            });
        });
        
        // Show the modal
        regionModal.style.display = 'block';
        regionModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }
    
    function showCategoryRecipes(categoryId) {
        // Save current category
        currentCategory = categoryId;
        
        // Check if we have recipes for this category
        if (!categoryInfo[categoryId]) {
            console.error(`No information found for category: ${categoryId}`);
            return;
        }

        // Create modal if it doesn't exist yet
        let categoryModal = document.getElementById('category-modal');
        if (!categoryModal) {
            categoryModal = document.createElement('div');
            categoryModal.id = 'category-modal';
            categoryModal.className = 'modal category-modal';
            categoryModal.setAttribute('aria-hidden', 'true');
            
            categoryModal.innerHTML = `
                <div class="modal-content category-modal-content">
                    <button class="close-modal" id="close-category-modal" aria-label="Close">&times;</button>
                    <div class="category-modal-header">
                        <div class="category-hero">
                            <img id="category-hero-image" src="" alt="">
                            <div class="category-hero-overlay">
                                <h2 id="category-modal-title"></h2>
                                <p id="category-modal-description"></p>
                            </div>
                        </div>
                    </div>
                    <div class="category-recipes-grid" id="category-recipes-container">
                        <!-- Recipes will be inserted here -->
                    </div>
                </div>
            `;
            
            document.body.appendChild(categoryModal);
            
            // Add event listener to close button
            document.getElementById('close-category-modal').addEventListener('click', function() {
                closeCategoryModal();
            });
            
            // Close modal when clicking outside
            categoryModal.addEventListener('click', function(e) {
                if (e.target === categoryModal) {
                    closeCategoryModal();
                }
            });
            
            // Close modal with Escape key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && categoryModal.style.display === 'block') {
                    closeCategoryModal();
                }
            });
        }
        
        const category = categoryInfo[categoryId];
        
        // Update modal content
        const heroImage = document.getElementById('category-hero-image');
        const modalTitle = document.getElementById('category-modal-title');
        const modalDescription = document.getElementById('category-modal-description');
        
        if (heroImage) {
            heroImage.src = category.image;
            heroImage.alt = category.title;
        }
        if (modalTitle) modalTitle.textContent = category.title;
        if (modalDescription) modalDescription.textContent = category.description;
        
        // Populate recipes
        const recipesContainer = document.getElementById('category-recipes-container');
        if (recipesContainer) {
            recipesContainer.innerHTML = '';
            
            category.recipes.forEach(recipe => {
                const recipeCard = document.createElement('div');
                recipeCard.className = 'category-recipe-card';
                recipeCard.innerHTML = `
                    <div class="category-recipe-img">
                        <img src="${recipe.image}" alt="${recipe.title}" loading="lazy">
                    </div>
                    <div class="category-recipe-content">
                        <h3>${recipe.title}</h3>
                        <div class="category-recipe-info">
                            <span><i class="far fa-clock"></i> ${recipe.time}</span>
                            <span><i class="fas fa-signal"></i> ${recipe.difficulty}</span>
                        </div>
                        <p class="category-recipe-desc">${recipe.description}</p>
                        <button class="view-recipe-btn" data-recipe-id="${recipe.id}">View Recipe</button>
                    </div>
                `;
                
                recipesContainer.appendChild(recipeCard);
            });
            
            // Add event listeners to recipe buttons
            document.querySelectorAll('.view-recipe-btn').forEach(button => {
                button.addEventListener('click', function() {
                    const recipeId = this.getAttribute('data-recipe-id');
                    // Add to navigation history before opening recipe
                    navigationHistory.push({type: 'category', id: currentCategory});
                    openRecipeModal(recipeId, true, 'category');
                });
            });
        }
        
        // Show the modal
        categoryModal.style.display = 'block';
        categoryModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }
    
    function showCulinaryHistory() {
        // Create modal if it doesn't exist yet
        let historyModal = document.getElementById('history-modal');
        if (!historyModal) {
            historyModal = document.createElement('div');
            historyModal.id = 'history-modal';
            historyModal.className = 'modal history-modal';
            historyModal.setAttribute('aria-hidden', 'true');
            
            historyModal.innerHTML = `
                <div class="modal-content history-modal-content">
                    <button class="close-modal" id="close-history-modal" aria-label="Close">&times;</button>
                    <div class="history-modal-header">
                        <h2 id="history-modal-title"></h2>
                        <p id="history-modal-subtitle"></p>
                    </div>
                    <div class="history-hero">
                        <img id="history-hero-image" src="" alt="European culinary history">
                    </div>
                    <div class="history-content" id="history-content">
                        <!-- Content will be inserted here -->
                    </div>
                    <div class="history-conclusion">
                        <p id="history-conclusion-text"></p>
                    </div>
                </div>
            `;
            
            document.body.appendChild(historyModal);
            
            // Add event listener to close button
            document.getElementById('close-history-modal').addEventListener('click', function() {
                closeHistoryModal();
            });
            
            // Close modal when clicking outside
            historyModal.addEventListener('click', function(e) {
                if (e.target === historyModal) {
                    closeHistoryModal();
                }
            });
            
            // Close modal with Escape key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && historyModal.style.display === 'block') {
                    closeHistoryModal();
                }
            });
        }
        
        // Update modal content
        const titleElement = document.getElementById('history-modal-title');
        const subtitleElement = document.getElementById('history-modal-subtitle');
        const heroImageElement = document.getElementById('history-hero-image');
        const conclusionElement = document.getElementById('history-conclusion-text');
        
        if (titleElement) titleElement.textContent = culinaryHistoryContent.title;
        if (subtitleElement) subtitleElement.textContent = culinaryHistoryContent.subtitle;
        if (heroImageElement) heroImageElement.src = culinaryHistoryContent.image;
        if (conclusionElement) conclusionElement.textContent = culinaryHistoryContent.conclusion;
        
        // Populate history sections
        const historyContent = document.getElementById('history-content');
        if (historyContent) {
            historyContent.innerHTML = '';
            
            culinaryHistoryContent.sections.forEach(section => {
                const sectionElement = document.createElement('div');
                sectionElement.className = 'history-section';
                sectionElement.innerHTML = `
                    <h3>${section.title}</h3>
                    <p>${section.content}</p>
                `;
                
                historyContent.appendChild(sectionElement);
            });
        }
        
        // Show the modal
        historyModal.style.display = 'block';
        historyModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }
    
    function showAllRecipes() {
        // Create modal if it doesn't exist yet
        let allRecipesModal = document.getElementById('all-recipes-modal');
        if (!allRecipesModal) {
            allRecipesModal = document.createElement('div');
            allRecipesModal.id = 'all-recipes-modal';
            allRecipesModal.className = 'modal all-recipes-modal';
            allRecipesModal.setAttribute('aria-hidden', 'true');
            
            allRecipesModal.innerHTML = `
                <div class="modal-content all-recipes-modal-content">
                    <button class="close-modal" id="close-all-recipes-modal" aria-label="Close">&times;</button>
                    <div class="all-recipes-modal-header">
                        <h2>All European Recipes</h2>
                        <p>Browse our complete collection of authentic European recipes</p>
                        <div class="filter-controls">
                            <div class="filter-group">
                                <label for="region-filter">Filter by Region:</label>
                                <select id="region-filter">
                                    <option value="all">All Regions</option>
                                    <option value="italian">Italian</option>
                                    <option value="french">French</option>
                                    <option value="spanish">Spanish</option>
                                    <option value="greek">Greek</option>
                                    <option value="german">German</option>
                                    <option value="scandinavian">Scandinavian</option>
                                    <option value="eastern-european">Eastern European</option>
                                    <option value="british">British</option>
                                </select>
                            </div>
                            <div class="filter-group">
                                <label for="difficulty-filter">Filter by Difficulty:</label>
                                <select id="difficulty-filter">
                                    <option value="all">All Difficulties</option>
                                    <option value="easy">Easy</option>
                                    <option value="medium">Medium</option>
                                    <option value="advanced">Advanced</option>
                                </select>
                            </div>
                            <div class="filter-group">
                                <label for="time-filter">Filter by Time:</label>
                                <select id="time-filter">
                                    <option value="all">All Times</option>
                                    <option value="quick">Quick (< 30 min)</option>
                                    <option value="medium">Medium (30-60 min)</option>
                                    <option value="long">Long (> 60 min)</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="all-recipes-grid" id="all-recipes-container">
                        <!-- Recipes will be inserted here -->
                    </div>
                </div>
            `;
            
            document.body.appendChild(allRecipesModal);
            
            // Add event listener to close button
            document.getElementById('close-all-recipes-modal').addEventListener('click', function() {
                closeAllRecipesModal();
            });
            
            // Close modal when clicking outside
            allRecipesModal.addEventListener('click', function(e) {
                if (e.target === allRecipesModal) {
                    closeAllRecipesModal();
                }
            });
            
            // Close modal with Escape key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && allRecipesModal.style.display === 'block') {
                    closeAllRecipesModal();
                }
            });
            
            // Add event listeners to filters
            const regionFilter = document.getElementById('region-filter');
            const difficultyFilter = document.getElementById('difficulty-filter');
            const timeFilter = document.getElementById('time-filter');
            
            if (regionFilter) regionFilter.addEventListener('change', filterAllRecipes);
            if (difficultyFilter) difficultyFilter.addEventListener('change', filterAllRecipes);
            if (timeFilter) timeFilter.addEventListener('change', filterAllRecipes);
        }
        
        // Populate recipes
        populateAllRecipes();
        
        // Show the modal
        allRecipesModal.style.display = 'block';
        allRecipesModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }
    
    function populateAllRecipes() {
        const recipesContainer = document.getElementById('all-recipes-container');
        if (!recipesContainer) return;
        
        recipesContainer.innerHTML = '';
        
        // Combine recipes from all regions
        let allRecipes = [];
        
        // Add recipes from regions
        for (const region in regionalRecipes) {
            regionalRecipes[region].forEach(recipe => {
                allRecipes.push({
                    ...recipe,
                    region: region
                });
            });
        }
        
        // Add recipes from categories (avoid duplicates)
        for (const category in categoryInfo) {
            categoryInfo[category].recipes.forEach(recipe => {
                if (!allRecipes.some(r => r.id === recipe.id)) {
                    allRecipes.push({
                        ...recipe,
                        category: category
                    });
                }
            });
        }
        
        // Display recipes
        displayFilteredRecipes(allRecipes);
    }
    
    function filterAllRecipes() {
        const regionFilter = document.getElementById('region-filter');
        const difficultyFilter = document.getElementById('difficulty-filter');
        const timeFilter = document.getElementById('time-filter');
        
        if (!regionFilter || !difficultyFilter || !timeFilter) return;
        
        const regionValue = regionFilter.value;
        const difficultyValue = difficultyFilter.value;
        const timeValue = timeFilter.value;
        
        // Combine recipes from all regions
        let allRecipes = [];
        
        // Add recipes from regions
        for (const region in regionalRecipes) {
            regionalRecipes[region].forEach(recipe => {
                allRecipes.push({
                    ...recipe,
                    region: region
                });
            });
        }
        
        // Add recipes from categories (avoid duplicates)
        for (const category in categoryInfo) {
            categoryInfo[category].recipes.forEach(recipe => {
                if (!allRecipes.some(r => r.id === recipe.id)) {
                    allRecipes.push({
                        ...recipe,
                        category: category
                    });
                }
            });
        }
        
        // Apply filters
        let filteredRecipes = allRecipes;
        
        if (regionValue !== 'all') {
            filteredRecipes = filteredRecipes.filter(recipe => recipe.region === regionValue);
        }
        
        if (difficultyValue !== 'all') {
            filteredRecipes = filteredRecipes.filter(recipe => 
                recipe.difficulty.toLowerCase() === difficultyValue
            );
        }
        
        if (timeValue !== 'all') {
            filteredRecipes = filteredRecipes.filter(recipe => {
                const timeInMinutes = parseInt(recipe.time);
                switch (timeValue) {
                    case 'quick':
                        return timeInMinutes < 30;
                    case 'medium':
                        return timeInMinutes >= 30 && timeInMinutes <= 60;
                    case 'long':
                        return timeInMinutes > 60;
                    default:
                        return true;
                }
            });
        }
        
        // Display filtered recipes
        displayFilteredRecipes(filteredRecipes);
    }
    
    function displayFilteredRecipes(recipes) {
        const recipesContainer = document.getElementById('all-recipes-container');
        if (!recipesContainer) return;
        
        recipesContainer.innerHTML = '';
        
        if (recipes.length === 0) {
            recipesContainer.innerHTML = '<p class="no-results">No recipes match your filters. Try adjusting your criteria.</p>';
            return;
        }
        
        recipes.forEach(recipe => {
            const recipeCard = document.createElement('div');
            recipeCard.className = 'all-recipe-card';
            
            let regionBadge = '';
            if (recipe.region) {
                const formattedRegion = recipe.region.charAt(0).toUpperCase() + recipe.region.slice(1).replace('-', ' ');
                regionBadge = `<div class="recipe-badge">${formattedRegion}</div>`;
            }
            
            recipeCard.innerHTML = `
                <div class="recipe-img">
                    <img src="${recipe.image}" alt="${recipe.title}" loading="lazy">
                    ${regionBadge}
                </div>
                <div class="recipe-content">
                    <h3>${recipe.title}</h3>
                    <div class="recipe-info">
                        <span><i class="far fa-clock"></i> ${recipe.time}</span>
                        <span><i class="fas fa-signal"></i> ${recipe.difficulty}</span>
                    </div>
                    <p class="recipe-desc">${recipe.description}</p>
                    <button class="view-recipe-btn" data-recipe-id="${recipe.id}">View Recipe</button>
                </div>
            `;
            
            recipesContainer.appendChild(recipeCard);
        });
        
        // Add event listeners to recipe buttons
        document.querySelectorAll('.view-recipe-btn').forEach(button => {
            button.addEventListener('click', function() {
                const recipeId = this.getAttribute('data-recipe-id');
                // Add to navigation history before opening recipe
                navigationHistory.push({type: 'all-recipes'});
                openRecipeModal(recipeId, true, 'all-recipes');
            });
        });
    }

    function closeRegionModal() {
        const modal = document.getElementById('region-modal');
        if (modal) {
            modal.style.display = 'none';
            modal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
            // Reset current region
            currentRegion = null;
        }
    }
    
    function closeCategoryModal() {
        const modal = document.getElementById('category-modal');
        if (modal) {
            modal.style.display = 'none';
            modal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
            // Reset current category
            currentCategory = null;
        }
    }
    
    function closeHistoryModal() {
        const modal = document.getElementById('history-modal');
        if (modal) {
            modal.style.display = 'none';
            modal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }
    }
    
    function closeAllRecipesModal() {
        const modal = document.getElementById('all-recipes-modal');
        if (modal) {
            modal.style.display = 'none';
            modal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }
    }

    function openRecipeModal(recipeId, fromNavigation = false, sourceType = 'region') {
        const recipe = europeanRecipes[recipeId];
        if (!recipe) {
            console.error(`Recipe not found: ${recipeId}`);
            return;
        }

        // Use the existing modal from HTML
        const modal = document.getElementById('recipe-modal');
        if (!modal) {
            console.error('Recipe modal not found in DOM');
            return;
        }
        
        // Add back button if coming from navigation
        const modalHeader = modal.querySelector('.recipe-modal-header');
        if (fromNavigation && modalHeader) {
            // Check if back button already exists
            let backButton = document.getElementById('back-to-source');
            if (!backButton) {
                backButton = document.createElement('button');
                backButton.id = 'back-to-source';
                backButton.className = 'back-button';
                backButton.innerHTML = '<i class="fas fa-arrow-left"></i> Back';
                backButton.addEventListener('click', goBackToSource);
                modalHeader.insertBefore(backButton, modalHeader.firstChild);
            }
            backButton.style.display = 'block';
            
            // Store source type for back button
            backButton.setAttribute('data-source-type', sourceType);
        } else {
            // Hide back button if not coming from navigation
            const backButton = document.getElementById('back-to-source');
            if (backButton) {
                backButton.style.display = 'none';
            }
        }

        // Populate recipe data using the existing HTML structure
        const titleElement = document.getElementById('recipe-modal-title');
        const imageElement = document.getElementById('recipe-modal-image');
        const difficultyElement = document.getElementById('recipe-difficulty');
        const timeElement = document.getElementById('recipe-time');
        const caloriesElement = document.getElementById('recipe-calories');
        const servingsElement = document.getElementById('recipe-servings');

        if (titleElement) titleElement.textContent = recipe.title;
        if (imageElement) {
            imageElement.src = recipe.image;
            imageElement.alt = recipe.title;
        }
        if (difficultyElement) difficultyElement.textContent = recipe.difficulty;
        if (timeElement) timeElement.textContent = recipe.time;
        if (caloriesElement) caloriesElement.textContent = recipe.calories;
        if (servingsElement) servingsElement.textContent = recipe.servings;

        // Ingredients
        const ingredientsList = document.getElementById('recipe-ingredients-list');
        if (ingredientsList) {
            ingredientsList.innerHTML = '';
            recipe.ingredients.forEach(ingredient => {
                const li = document.createElement('li');
                li.textContent = ingredient;
                ingredientsList.appendChild(li);
            });
        }

        // Instructions
        const instructionsList = document.getElementById('recipe-instructions-list');
        if (instructionsList) {
            instructionsList.innerHTML = '';
            recipe.instructions.forEach((instruction, index) => {
                const li = document.createElement('li');
                li.textContent = instruction;
                instructionsList.appendChild(li);
            });
        }

        // Tips
        const tipsElement = document.getElementById('recipe-tips-text');
        if (tipsElement) {
            tipsElement.textContent = recipe.tips;
        }

        // Nutrition
        const nutritionFacts = document.getElementById('nutrition-facts');
        if (nutritionFacts) {
            nutritionFacts.innerHTML = '';
            for (const [key, value] of Object.entries(recipe.nutrition)) {
                const div = document.createElement('div');
                div.className = 'nutrition-item';
                div.innerHTML = `<span class="nutrition-label">${key}</span><span class="nutrition-value">${value}</span>`;
                nutritionFacts.appendChild(div);
            }
        }

        // Store current recipe ID
        modal.setAttribute('data-current-recipe', recipeId);

        // Set recipe ID for action buttons
        const saveButton = document.getElementById('save-recipe-modal');
        const shareButton = document.getElementById('share-recipe-modal');
        if (saveButton) saveButton.setAttribute('data-recipe-id', recipeId);
        if (shareButton) shareButton.setAttribute('data-recipe-id', recipeId);

        // Show the modal
        modal.style.display = 'block';
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function goBackToSource() {
        // Close recipe modal
        closeRecipeModal();
        
        // Get the source type
        const backButton = document.getElementById('back-to-source');
        const sourceType = backButton ? backButton.getAttribute('data-source-type') : null;
        
        // Get the last navigation from history
        if (navigationHistory.length > 0) {
            const lastNavigation = navigationHistory.pop();
            
            // Show the appropriate source based on type
            if (lastNavigation.type === 'region') {
                showRegionRecipes(lastNavigation.id);
            } else if (lastNavigation.type === 'category') {
                showCategoryRecipes(lastNavigation.id);
            } else if (lastNavigation.type === 'all-recipes') {
                showAllRecipes();
            }
        }
    }

    function closeRecipeModal() {
        const modal = document.getElementById('recipe-modal');
        if (modal) {
            modal.style.display = 'none';
            modal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }
    }

    function createShareModal() {
        let shareModal = document.getElementById('share-modal');
        if (!shareModal) {
            shareModal = document.createElement('div');
            shareModal.id = 'share-modal';
            shareModal.className = 'modal share-modal';
            shareModal.setAttribute('aria-hidden', 'true');
            
            shareModal.innerHTML = `
                <div class="modal-content share-modal-content">
                    <button class="close-modal" id="close-share-modal" aria-label="Close">&times;</button>
                    <h3>Share This Recipe</h3>
                    <div class="share-link-container">
                        <input type="text" id="share-link" readonly>
                        <button id="copy-link">Copy</button>
                    </div>
                    <div class="share-buttons">
                        <button id="share-facebook" class="share-button facebook">
                            <i class="fab fa-facebook-f"></i> Facebook
                        </button>
                        <button id="share-twitter" class="share-button twitter">
                            <i class="fab fa-twitter"></i> Twitter
                        </button>
                        <button id="share-pinterest" class="share-button pinterest">
                            <i class="fab fa-pinterest-p"></i> Pinterest
                        </button>
                        <button id="share-email" class="share-button email">
                            <i class="fas fa-envelope"></i> Email
                        </button>
                    </div>
                </div>
            `;
            
            document.body.appendChild(shareModal);
            
            // Add event listeners
            document.getElementById('close-share-modal').addEventListener('click', function() {
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
                shareModal.style.display = 'none';
            });
            
            document.getElementById('share-twitter').addEventListener('click', function() {
                showToast('Shared on Twitter');
                shareModal.style.display = 'none';
            });
            
            document.getElementById('share-pinterest').addEventListener('click', function() {
                showToast('Saved to Pinterest');
                shareModal.style.display = 'none';
            });
            
            document.getElementById('share-email').addEventListener('click', function() {
                showToast('Email sharing opened');
                shareModal.style.display = 'none';
            });
        }
        
        return shareModal;
    }

    function openShareModal(recipeId) {
        const shareModal = createShareModal();
        const recipe = europeanRecipes[recipeId];

        const shareLinkInput = document.getElementById('share-link');
        if (shareLinkInput) {
            shareLinkInput.value = `https://maeda-recipes.com/recipes/${recipeId}`;
        }

        shareModal.style.display = 'block';
        shareModal.setAttribute('aria-hidden', 'false');
    }

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

    function createToast() {
        let toast = document.getElementById('toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'toast';
            toast.className = 'toast';
            toast.innerHTML = `
                <div class="toast-content">
                    <span class="toast-message"></span>
                    <button id="toast-close" aria-label="Close notification">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            `;
            document.body.appendChild(toast);
            
            document.getElementById('toast-close').addEventListener('click', function() {
                toast.classList.remove('show');
            });
        }
        
        return toast;
    }

    function showToast(message) {
        const toast = createToast();
        const toastMessage = toast.querySelector('.toast-message');

        if (toastMessage) {
            toastMessage.textContent = message;
            toast.classList.add('show');

            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        }
    }
    
    // Add CSS for new modals
    addModalStyles();
    
    function addModalStyles() {
        const styleElement = document.createElement('style');
        styleElement.textContent = `
            /* Category Modal Styles */
            .category-modal .modal-content {
                max-width: 1000px;
                max-height: 90vh;
                overflow-y: auto;
            }
            
            .category-hero {
                position: relative;
                height: 250px;
                overflow: hidden;
                border-radius: 10px 10px 0 0;
            }
            
            .category-hero img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            
            .category-hero-overlay {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                padding: 30px;
                background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
                color: white;
            }
            
            .category-hero-overlay h2 {
                font-size: 2.2rem;
                margin-bottom: 10px;
                text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
            }
            
            .category-hero-overlay p {
                font-size: 1.1rem;
                max-width: 600px;
                text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
            }
            
            .category-recipes-grid, .region-recipes-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                gap: 30px;
                padding: 30px;
            }
            
            .category-recipe-card, .region-recipe-card {
                background-color: white;
                border-radius: 10px;
                overflow: hidden;
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
                transition: transform 0.3s ease, box-shadow 0.3s ease;
            }
            
            .category-recipe-card:hover, .region-recipe-card:hover {
                transform: translateY(-10px);
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
            }
            
            .category-recipe-img, .region-recipe-img {
                height: 200px;
                overflow: hidden;
            }
            
            .category-recipe-img img, .region-recipe-img img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: transform 0.5s ease;
            }
            
            .category-recipe-card:hover .category-recipe-img img,
            .region-recipe-card:hover .region-recipe-img img {
                transform: scale(1.05);
            }
            
            .category-recipe-content, .region-recipe-content {
                padding: 20px;
            }
            
            .category-recipe-content h3, .region-recipe-content h3 {
                font-size: 1.3rem;
                margin-bottom: 15px;
                color: #333;
            }
            
            .category-recipe-info, .region-recipe-info {
                display: flex;
                gap: 15px;
                margin-bottom: 15px;
                color: #666;
                font-size: 0.9rem;
            }
            
            .category-recipe-info span, .region-recipe-info span {
                display: flex;
                align-items: center;
                gap: 5px;
            }
            
            .category-recipe-desc, .region-recipe-desc {
                margin-bottom: 20px;
                line-height: 1.6;
                color: #666;
            }
            
            .view-recipe-btn {
                background-color: #E4281F;
                color: white;
                border: none;
                padding: 10px 20px;
                border-radius: 25px;
                cursor: pointer;
                font-weight: 600;
                transition: background-color 0.3s ease;
                width: 100%;
            }
            
            .view-recipe-btn:hover {
                background-color: #c52018;
            }
            
            /* History Modal Styles */
            .history-modal .modal-content {
                max-width: 900px;
                max-height: 90vh;
                overflow-y: auto;
            }
            
            .history-modal-header {
                text-align: center;
                padding: 20px 30px;
            }
            
            .history-modal-header h2 {
                font-size: 2.2rem;
                color: #333;
                margin-bottom: 10px;
            }
            
            .history-modal-header p {
                color: #666;
                font-size: 1.2rem;
            }
            
            .history-hero {
                height: 300px;
                overflow: hidden;
                margin-bottom: 30px;
            }
            
            .history-hero img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            
            .history-content {
                padding: 0 30px;
            }
            
            .history-section {
                margin-bottom: 30px;
            }
            
            .history-section h3 {
                font-size: 1.6rem;
                color: #333;
                margin-bottom: 15px;
                border-bottom: 2px solid #E4281F;
                padding-bottom: 10px;
                display: inline-block;
            }
            
            .history-section p {
                line-height: 1.7;
                color: #444;
                font-size: 1.05rem;
            }
            
            .history-conclusion {
                background-color: #f9f9f9;
                padding: 25px 30px;
                border-left: 4px solid #E4281F;
                margin: 30px;
                font-style: italic;
                color: #333;
                line-height: 1.7;
                font-size: 1.1rem;
            }
            
            /* All Recipes Modal Styles */
            .all-recipes-modal .modal-content {
                max-width: 1200px;
                max-height: 90vh;
                overflow-y: auto;
            }
            
            .all-recipes-modal-header {
                padding: 30px;
                border-bottom: 1px solid #e0e0e0;
            }
            
            .all-recipes-modal-header h2 {
                font-size: 2.2rem;
                color: #333;
                margin-bottom: 10px;
            }
            
            .all-recipes-modal-header p {
                color: #666;
                font-size: 1.1rem;
                margin-bottom: 20px;
            }
            
            .filter-controls {
                display: flex;
                flex-wrap: wrap;
                gap: 20px;
                margin-top: 20px;
            }
            
            .filter-group {
                display: flex;
                flex-direction: column;
                flex: 1;
                min-width: 200px;
            }
            
            .filter-group label {
                margin-bottom: 5px;
                font-weight: 600;
                color: #333;
            }
            
            .filter-group select {
                padding: 10px;
                border: 1px solid #e0e0e0;
                border-radius: 5px;
                background-color: white;
                font-family: inherit;
            }
            
            .all-recipes-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                gap: 30px;
                padding: 30px;
            }
            
            .all-recipe-card {
                background-color: white;
                border-radius: 10px;
                overflow: hidden;
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
                transition: transform 0.3s ease, box-shadow 0.3s ease;
            }
            
            .all-recipe-card:hover {
                transform: translateY(-10px);
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
            }
            
            .recipe-img {
                height: 200px;
                overflow: hidden;
                position: relative;
            }
            
            .recipe-img img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: transform 0.5s ease;
            }
            
            .all-recipe-card:hover .recipe-img img {
                transform: scale(1.05);
            }
            
            .recipe-badge {
                position: absolute;
                top: 15px;
                left: 15px;
                background-color: #E4281F;
                color: white;
                padding: 5px 12px;
                border-radius: 20px;
                font-size: 0.8rem;
                font-weight: 600;
            }
            
            .recipe-content {
                padding: 20px;
            }
            
            .recipe-content h3 {
                font-size: 1.3rem;
                margin-bottom: 15px;
                color: #333;
            }
            
            .recipe-info {
                display: flex;
                gap: 15px;
                margin-bottom: 15px;
                color: #666;
                font-size: 0.9rem;
            }
            
            .recipe-info span {
                display: flex;
                align-items: center;
                gap: 5px;
            }
            
            .recipe-desc {
                margin-bottom: 20px;
                line-height: 1.6;
                color: #666;
            }
            
            .no-results {
                grid-column: 1 / -1;
                text-align: center;
                padding: 50px;
                color: #666;
                font-size: 1.2rem;
            }
            
            /* Back Button Styles */
            .back-button {
                background: none;
                border: none;
                color: #E4281F;
                font-size: 1rem;
                display: flex;
                align-items: center;
                gap: 5px;
                cursor: pointer;
                padding: 5px 10px;
                margin-right: 15px;
                transition: color 0.3s ease;
            }
            
            .back-button:hover {
                color: #c52018;
            }
            
            /* Share Modal Styles */
            .share-modal .modal-content {
                max-width: 500px;
                padding: 30px;
                text-align: center;
            }
            
            .share-modal h3 {
                margin-bottom: 20px;
                color: #333;
            }
            
            .share-link-container {
                display: flex;
                gap: 10px;
                margin-bottom: 20px;
            }
            
            .share-link-container input {
                flex: 1;
                padding: 10px;
                border: 1px solid #ddd;
                border-radius: 5px;
            }
            
            .share-link-container button {
                padding: 10px 20px;
                background-color: #E4281F;
                color: white;
                border: none;
                border-radius: 5px;
                cursor: pointer;
            }
            
            .share-buttons {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 15px;
            }
            
            .share-button {
                padding: 15px;
                border: none;
                border-radius: 8px;
                cursor: pointer;
                font-weight: 600;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 10px;
                transition: transform 0.2s ease;
            }
            
            .share-button:hover {
                transform: translateY(-2px);
            }
            
            .share-button.facebook {
                background-color: #1877f2;
                color: white;
            }
            
            .share-button.twitter {
                background-color: #1da1f2;
                color: white;
            }
            
            .share-button.pinterest {
                background-color: #bd081c;
                color: white;
            }
            
            .share-button.email {
                background-color: #34495e;
                color: white;
            }
            
            /* Toast Styles */
            .toast {
                position: fixed;
                bottom: 20px;
                right: 20px;
                background-color: #2ecc71;
                color: white;
                padding: 15px 20px;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
                transform: translateX(400px);
                transition: transform 0.3s ease;
                z-index: 10000;
                max-width: 350px;
            }
            
            .toast.show {
                transform: translateX(0);
            }
            
            .toast-content {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 15px;
            }
            
            .toast-message {
                flex: 1;
            }
            
            #toast-close {
                background: none;
                border: none;
                color: white;
                cursor: pointer;
                font-size: 1.2rem;
                padding: 0;
                width: 20px;
                height: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            @media (max-width: 768px) {
                .category-hero {
                    height: 180px;
                }
                
                .category-hero-overlay h2 {
                    font-size: 1.8rem;
                }
                
                .category-recipes-grid, .all-recipes-grid, .region-recipes-grid {
                    grid-template-columns: 1fr;
                }
                
                .filter-controls {
                    flex-direction: column;
                    gap: 15px;
                }
                
                .history-hero {
                    height: 200px;
                }
                
                .history-section h3 {
                    font-size: 1.4rem;
                }
                
                .share-buttons {
                    grid-template-columns: 1fr;
                }
                
                .toast {
                    right: 10px;
                    left: 10px;
                    max-width: none;
                    transform: translateY(100px);
                }
                
                .toast.show {
                    transform: translateY(0);
                }
            }
        `;
        
        document.head.appendChild(styleElement);
    }
});