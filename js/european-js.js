document.addEventListener('DOMContentLoaded', function () {
    // Original europeanRecipes object for detailed recipe information
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
        },
        'pizza-margherita': {
            title: 'Pizza Margherita',
            difficulty: 'Easy',
            time: '45 min',
            calories: '285 cal',
            servings: '4 servings',
            image: '../images/recipes/pizza-margherita.jpg',
            ingredients: [
                '500g pizza dough',
                '400g canned San Marzano tomatoes',
                '250g fresh mozzarella cheese, sliced',
                'Fresh basil leaves',
                '2 tbsp extra virgin olive oil',
                'Salt to taste',
                'Semolina flour for dusting'
            ],
            instructions: [
                'Preheat your oven to the highest temperature (usually 500°F/260°C) with a pizza stone or steel if you have one.',
                'Crush the tomatoes by hand and drain excess liquid. Season with salt.',
                'Divide the dough into 2-4 balls depending on desired pizza size.',
                'On a surface dusted with semolina flour, stretch each dough ball into a thin round.',
                'Spread a thin layer of crushed tomatoes over the dough, leaving a border for the crust.',
                'Tear the mozzarella into pieces and distribute evenly over the pizza.',
                'Drizzle with olive oil and sprinkle with a pinch of salt.',
                'Transfer to the hot oven and bake until the crust is golden and cheese is bubbling, about 8-10 minutes.',
                'Remove from the oven and immediately top with fresh basil leaves.',
                'Let rest for a minute before slicing and serving.'
            ],
            tips: 'For authentic Neapolitan pizza, the dough should be very thin in the center with puffed edges. Using San Marzano tomatoes and fresh mozzarella (preferably buffalo mozzarella) makes a huge difference in flavor. The basil should be added after baking to preserve its fresh flavor and aroma.',
            nutrition: {
                'Calories': '285 kcal',
                'Protein': '12g',
                'Carbs': '35g',
                'Fat': '11g',
                'Fiber': '2g',
                'Sodium': '570mg'
            }
        },
        'tortilla': {
            title: 'Spanish Tortilla',
            difficulty: 'Easy',
            time: '35 min',
            calories: '320 cal',
            servings: '6 servings',
            image: '../images/recipes/tortilla.jpg',
            ingredients: [
                '6 medium potatoes, peeled and thinly sliced',
                '1 large onion, thinly sliced',
                '6 large eggs',
                '200ml olive oil for frying',
                'Salt to taste'
            ],
            instructions: [
                'Heat the olive oil in a large non-stick frying pan over medium heat.',
                'Add the sliced potatoes and onion, season with salt, and cook slowly for about 20 minutes, turning occasionally until the potatoes are soft but not browned.',
                'Drain the potatoes and onion in a colander, reserving 2 tablespoons of the oil.',
                'In a large bowl, beat the eggs and season with salt.',
                'Add the warm potato and onion mixture to the eggs and gently mix together.',
                'Heat 1 tablespoon of the reserved oil in the frying pan over medium heat.',
                'Pour in the egg mixture, spread it evenly and cook for about 5 minutes until the bottom is set but the top is still runny.',
                'Place a large plate over the pan and carefully flip the tortilla onto the plate.',
                'Add the remaining tablespoon of oil to the pan and slide the tortilla back in, uncooked side down.',
                'Cook for another 3-4 minutes until set but still slightly moist in the center.',
                'Slide onto a serving plate and let cool slightly before serving.'
            ],
            tips: 'The key to a great Spanish tortilla is to cook the potatoes slowly in plenty of olive oil until they\'re soft but not browned. This process is called "confit." The tortilla should be slightly runny in the center when served - this is the traditional Spanish way.',
            nutrition: {
                'Calories': '320 kcal',
                'Protein': '10g',
                'Carbs': '30g',
                'Fat': '18g',
                'Fiber': '3g',
                'Sodium': '290mg'
            }
        },
        'risotto': {
            title: 'Mushroom Risotto',
            difficulty: 'Medium',
            time: '40 min',
            calories: '420 cal',
            servings: '4 servings',
            image: '../images/recipes/risotto.jpg',
            ingredients: [
                '300g arborio rice',
                '250g mixed mushrooms (portobello, shiitake, oyster)',
                '1 onion, finely diced',
                '2 cloves garlic, minced',
                '150ml dry white wine',
                '1L vegetable or chicken stock, heated',
                '50g butter',
                '50g Parmesan cheese, grated',
                '2 tbsp olive oil',
                '2 tbsp fresh parsley, chopped',
                'Salt and pepper to taste'
            ],
            instructions: [
                'Clean and slice the mushrooms. Set aside a few slices for garnish.',
                'In a large pan, heat 1 tablespoon of olive oil and sauté most of the mushrooms until golden. Remove and set aside.',
                'In a heavy-bottomed pot, heat the remaining olive oil and add the diced onion. Cook until translucent.',
                'Add the garlic and cook for another minute until fragrant.',
                'Add the rice and stir for 1-2 minutes until the grains are coated and slightly translucent at the edges.',
                'Pour in the wine and stir until completely absorbed.',
                'Begin adding the hot stock one ladle at a time, stirring constantly and waiting until each addition is absorbed before adding more.',
                'After about 18-20 minutes, when the rice is al dente, stir in the cooked mushrooms.',
                'Remove from heat and add the butter and Parmesan cheese. Stir vigorously to create a creamy texture.',
                'Season with salt and pepper to taste.',
                'In a small pan, sauté the reserved mushroom slices for garnish.',
                'Serve the risotto topped with the sautéed mushrooms, extra Parmesan, and chopped parsley.'
            ],
            tips: 'The key to perfect risotto is patience - add the stock slowly and stir frequently to release the rice\'s starch for that signature creamy texture. For deeper mushroom flavor, use dried porcini mushrooms soaked in hot water, then use the soaking liquid as part of your stock.',
            nutrition: {
                'Calories': '420 kcal',
                'Protein': '12g',
                'Carbs': '65g',
                'Fat': '14g',
                'Fiber': '3g',
                'Sodium': '650mg'
            }
        },
        'tiramisu': {
            title: 'Tiramisu',
            difficulty: 'Medium',
            time: '30 min + 4 hrs chill',
            calories: '380 cal',
            servings: '8 servings',
            image: '../images/recipes/tiramisu.jpg',
            ingredients: [
                '6 egg yolks',
                '3/4 cup granulated sugar',
                '500g mascarpone cheese, room temperature',
                '1 cup strong espresso, cooled',
                '1/4 cup coffee liqueur (optional)',
                '200g ladyfinger biscuits',
                '2 tbsp unsweetened cocoa powder',
                'Dark chocolate shavings for garnish'
            ],
            instructions: [
                'In a heatproof bowl, whisk together egg yolks and sugar until pale.',
                'Place the bowl over a pot of simmering water (double boiler) and whisk continuously until the mixture reaches 160°F (70°C) or thickens enough to coat the back of a spoon.',
                'Remove from heat and let cool slightly.',
                'In a separate bowl, whisk the mascarpone until smooth.',
                'Gently fold the egg mixture into the mascarpone until fully incorporated.',
                'Mix the espresso and coffee liqueur (if using) in a shallow dish.',
                'Quickly dip each ladyfinger into the coffee mixture (about 1 second per side) and arrange in a single layer in a 9x13 inch dish.',
                'Spread half of the mascarpone mixture over the ladyfingers.',
                'Repeat with another layer of dipped ladyfingers and the remaining mascarpone mixture.',
                'Cover and refrigerate for at least 4 hours, preferably overnight.',
                'Before serving, dust with cocoa powder and sprinkle with chocolate shavings.'
            ],
            tips: 'Don\'t soak the ladyfingers too long in the coffee or they\'ll become soggy. For food safety, use pasteurized eggs or heat the egg yolks as directed. The flavor develops beautifully with time, so making tiramisu a day ahead is ideal.',
            nutrition: {
                'Calories': '380 kcal',
                'Protein': '7g',
                'Carbs': '28g',
                'Fat': '26g',
                'Fiber': '0g',
                'Sodium': '85mg'
            }
        },
        'greek-salad': {
            title: 'Traditional Greek Salad',
            difficulty: 'Easy',
            time: '15 min',
            calories: '230 cal',
            servings: '4 servings',
            image: '../images/recipes/greek-salad.jpg',
            ingredients: [
                '4 large tomatoes, cut into chunks',
                '1 cucumber, sliced',
                '1 green bell pepper, sliced',
                '1 red onion, thinly sliced',
                '200g feta cheese, cut into cubes',
                '16 Kalamata olives',
                '4 tbsp extra virgin olive oil',
                '1 tbsp red wine vinegar',
                '1 tsp dried oregano',
                'Salt and freshly ground black pepper to taste'
            ],
            instructions: [
                'In a large bowl, combine the tomatoes, cucumber, bell pepper, and red onion.',
                'Add the feta cheese cubes and olives.',
                'In a small bowl, whisk together the olive oil, red wine vinegar, oregano, salt, and pepper.',
                'Pour the dressing over the salad and gently toss to combine.',
                'Let the salad sit for 5-10 minutes to allow flavors to meld.',
                'Serve at room temperature with a sprinkle of additional oregano on top.'
            ],
            tips: 'Authentic Greek salad doesn\'t include lettuce. Use the ripest tomatoes you can find for the best flavor. Traditional Greek salads are served with a large piece of feta on top rather than crumbled throughout, but either way works. Don\'t refrigerate the tomatoes for the best texture and flavor.',
            nutrition: {
                'Calories': '230 kcal',
                'Protein': '7g',
                'Carbs': '11g',
                'Fat': '18g',
                'Fiber': '3g',
                'Sodium': '580mg'
            }
        },
        'churros': {
            title: 'Churros with Chocolate',
            difficulty: 'Medium',
            time: '30 min',
            calories: '310 cal',
            servings: '6 servings',
            image: '../images/recipes/churros.jpg',
            ingredients: [
                '250ml water',
                '100g butter',
                '1 tbsp sugar',
                '1/4 tsp salt',
                '150g all-purpose flour',
                '3 large eggs',
                'Vegetable oil for frying',
                '100g sugar mixed with 2 tsp ground cinnamon for coating',
                'For the chocolate sauce:',
                '200g dark chocolate, chopped',
                '250ml heavy cream',
                '1/2 tsp vanilla extract',
                '1 tbsp sugar (optional)'
            ],
            instructions: [
                'In a medium saucepan, combine water, butter, sugar, and salt. Bring to a boil over medium-high heat.',
                'Remove from heat and add flour all at once. Stir vigorously with a wooden spoon until mixture forms a ball.',
                'Return to low heat and stir for 1-2 minutes to dry the dough slightly.',
                'Transfer dough to a mixing bowl and let cool for 5 minutes.',
                'Add eggs one at a time, beating well after each addition, until the dough is smooth and glossy.',
                'Transfer dough to a piping bag fitted with a large star tip.',
                'Heat oil in a deep fryer or large pot to 180°C (350°F).',
                'Pipe 10-15cm lengths of dough into the hot oil, cutting the end with scissors.',
                'Fry in batches for 2-3 minutes until golden brown, turning occasionally.',
                'Drain on paper towels, then roll in cinnamon-sugar mixture while still warm.',
                'For the chocolate sauce, heat cream until just simmering.',
                'Pour over chopped chocolate and let sit for 1 minute, then stir until smooth.',
                'Add vanilla and sugar if using. Stir until completely incorporated.',
                'Serve churros warm with chocolate sauce for dipping.'
            ],
            tips: 'The dough should be stiff enough to hold its shape when piped. If it\'s too runny, add a little more flour. For the crispiest churros, fry at the correct temperature and don\'t overcrowd the pan. Churros are best served immediately after frying.',
            nutrition: {
                'Calories': '310 kcal',
                'Protein': '5g',
                'Carbs': '32g',
                'Fat': '19g',
                'Fiber': '2g',
                'Sodium': '120mg'
            }
        },
        'gazpacho': {
            title: 'Gazpacho',
            difficulty: 'Easy',
            time: '20 min + 2 hrs chill',
            calories: '120 cal',
            servings: '6 servings',
            image: '../images/recipes/gazpacho.jpg',
            ingredients: [
                '1kg ripe tomatoes, roughly chopped',
                '1 cucumber, peeled and roughly chopped',
                '1 red bell pepper, deseeded and roughly chopped',
                '1 small red onion, roughly chopped',
                '2 garlic cloves',
                '150ml extra virgin olive oil',
                '2 tbsp sherry vinegar or red wine vinegar',
                '1 slice of white bread, soaked in water and squeezed dry',
                'Salt and freshly ground black pepper to taste',
                'For garnish:',
                'Diced cucumber, bell pepper, and tomato',
                'Croutons',
                'A drizzle of olive oil'
            ],
            instructions: [
                'Reserve about 1/4 cup each of diced cucumber, bell pepper, and tomato for garnish.',
                'Place the remaining vegetables, garlic, bread, vinegar, and half the olive oil in a blender.',
                'Blend until completely smooth, about 2-3 minutes.',
                'With the blender running, slowly add the remaining olive oil to emulsify.',
                'Season with salt and pepper to taste.',
                'Pass the soup through a fine sieve for a smoother texture (optional).',
                'Cover and refrigerate for at least 2 hours, or preferably overnight.',
                'Before serving, check the consistency – if too thick, add cold water to thin it out.',
                'Adjust seasoning if needed.',
                'Serve in chilled bowls, garnished with the reserved diced vegetables, croutons, and a drizzle of olive oil.'
            ],
            tips: 'Use the ripest tomatoes you can find for the best flavor. The bread helps to thicken the soup and create a silky texture. Gazpacho should be served very cold – you can even place the serving bowls in the freezer for 15 minutes before serving.',
            nutrition: {
                'Calories': '120 kcal',
                'Protein': '2g',
                'Carbs': '8g',
                'Fat': '9g',
                'Fiber': '2g',
                'Sodium': '150mg'
            }
        },
        'souvlaki': {
            title: 'Chicken Souvlaki',
            difficulty: 'Easy',
            time: '30 min + 2 hrs marinating',
            calories: '310 cal',
            servings: '4 servings',
            image: '../images/recipes/souvlaki.jpg',
            ingredients: [
                '800g chicken breast, cut into 1-inch cubes',
                '3 tbsp olive oil',
                '2 tbsp lemon juice',
                '2 cloves garlic, minced',
                '1 tbsp dried oregano',
                '1 tsp dried thyme',
                '1 tsp paprika',
                'Salt and pepper to taste',
                'For the tzatziki sauce:',
                '1 cucumber, grated and drained',
                '2 cups Greek yogurt',
                '2 cloves garlic, minced',
                '1 tbsp olive oil',
                '1 tbsp lemon juice',
                '1 tbsp fresh dill, chopped',
                'Salt to taste',
                'For serving:',
                'Pita bread',
                'Sliced tomatoes',
                'Sliced red onion',
                'Fresh parsley'
            ],
            instructions: [
                'In a large bowl, combine olive oil, lemon juice, garlic, oregano, thyme, paprika, salt, and pepper.',
                'Add chicken cubes and toss to coat. Cover and refrigerate for at least 2 hours, or overnight for best flavor.',
                'For the tzatziki, squeeze excess water from the grated cucumber using a clean kitchen towel.',
                'In a bowl, combine the cucumber, yogurt, garlic, olive oil, lemon juice, dill, and salt. Refrigerate until ready to serve.',
                'If using wooden skewers, soak them in water for 30 minutes before grilling.',
                'Thread marinated chicken onto skewers.',
                'Preheat grill or grill pan to medium-high heat.',
                'Grill skewers for 10-12 minutes, turning occasionally, until chicken is cooked through and slightly charred.',
                'Warm pita bread on the grill for about 30 seconds per side.',
                'Serve souvlaki skewers with warm pita, tzatziki sauce, tomatoes, red onion, and a sprinkle of fresh parsley.'
            ],
            tips: 'Don\'t overcrowd the skewers – leave a little space between each piece of chicken for even cooking. The tzatziki can be made a day ahead to allow flavors to develop. For an authentic Greek meal, serve with a side of lemon potatoes or Greek salad.',
            nutrition: {
                'Calories': '310 kcal',
                'Protein': '38g',
                'Carbs': '8g',
                'Fat': '14g',
                'Fiber': '1g',
                'Sodium': '290mg'
            }
        },
        'baklava': {
            title: 'Baklava',
            difficulty: 'Medium',
            time: '60 min',
            calories: '350 cal',
            servings: '24 pieces',
            image: '../images/recipes/baklava.jpg',
            ingredients: [
                '1 package (16 oz) phyllo dough, thawed',
                '1 cup unsalted butter, melted',
                '2 cups finely chopped walnuts',
                '1 cup finely chopped pistachios',
                '1/2 cup finely chopped almonds',
                '1 tsp ground cinnamon',
                '1/4 tsp ground cloves',
                '1/4 cup sugar',
                'For the syrup:',
                '1 cup water',
                '1 cup sugar',
                '1/2 cup honey',
                '1 cinnamon stick',
                '3 whole cloves',
                '1 strip lemon peel',
                '1 tbsp lemon juice'
            ],
            instructions: [
                'Preheat oven to 350°F (175°C). Butter a 9x13 inch baking dish.',
                'In a bowl, combine nuts, cinnamon, cloves, and sugar.',
                'Unroll phyllo dough and cover with a damp cloth to prevent drying.',
                'Place two sheets of phyllo in the bottom of the prepared dish and brush generously with melted butter.',
                'Repeat until you have 8 sheets layered.',
                'Sprinkle 3 tablespoons of the nut mixture evenly over the phyllo.',
                'Layer two sheets of phyllo, brush with butter, and add another 3 tablespoons of nuts.',
                'Continue this process until all nuts are used.',
                'Top with 8-10 layers of phyllo, brushing each sheet with butter.',
                'Using a sharp knife, cut the baklava into diamond or square shapes, making sure to cut all the way to the bottom.',
                'Bake for 45-50 minutes, until golden brown and crisp.',
                'While the baklava is baking, make the syrup: combine water, sugar, honey, cinnamon stick, cloves, and lemon peel in a saucepan.',
                'Bring to a boil, then reduce heat and simmer for 20 minutes.',
                'Remove from heat, discard cinnamon, cloves, and lemon peel, and stir in lemon juice.',
                'Allow syrup to cool slightly.',
                'When the baklava is done, remove from oven and immediately pour the warm syrup over it.',
                'Let cool completely, uncovered, at room temperature for at least 4 hours or overnight before serving.'
            ],
            tips: 'Work quickly with the phyllo dough to prevent it from drying out. The syrup should be cooler than the baklava when you pour it over – this helps it to be absorbed properly. Baklava can be stored at room temperature in an airtight container for up to 2 weeks.',
            nutrition: {
                'Calories': '350 kcal',
                'Protein': '5g',
                'Carbs': '35g',
                'Fat': '22g',
                'Fiber': '2g',
                'Sodium': '95mg'
            }
        },
        'coq-au-vin': {
            title: 'Coq au Vin',
            difficulty: 'Medium',
            time: '90 min',
            calories: '420 cal',
            servings: '6 servings',
            image: '../images/recipes/coq-au-vin.jpg',
            ingredients: [
                '1 whole chicken (about 1.5kg), cut into 8 pieces',
                '200g bacon or pancetta, diced',
                '24 pearl onions, peeled',
                '300g mushrooms, quartered',
                '3 cloves garlic, minced',
                '2 tbsp all-purpose flour',
                '750ml red wine (preferably Burgundy)',
                '250ml chicken stock',
                '2 tbsp tomato paste',
                '1 bouquet garni (thyme, parsley, bay leaf)',
                '3 tbsp butter',
                '2 tbsp olive oil',
                'Salt and freshly ground black pepper',
                'Fresh parsley, chopped, for garnish'
            ],
            instructions: [
                'Season chicken pieces with salt and pepper.',
                'In a large Dutch oven, heat 1 tablespoon of olive oil over medium heat. Add bacon and cook until crisp. Remove with a slotted spoon and set aside.',
                'In the same pot, brown the chicken pieces in batches, about 5 minutes per side. Transfer to a plate.',
                'Add pearl onions to the pot and cook until browned, about 5 minutes. Remove and set aside.',
                'Add mushrooms and cook until golden, about 5 minutes. Remove and set aside.',
                'Add remaining olive oil and 1 tablespoon of butter to the pot. Add garlic and cook for 30 seconds.',
                'Sprinkle flour over and stir for 1 minute.',
                'Slowly add wine, stirring constantly to prevent lumps.',
                'Add chicken stock, tomato paste, and bouquet garni. Bring to a simmer.',
                'Return chicken pieces to the pot, cover, and simmer gently for 45 minutes, or until chicken is tender.',
                'Add the reserved bacon, onions, and mushrooms. Simmer uncovered for another 15 minutes.',
                'Remove chicken and vegetables to a serving platter.',
                'Increase heat and reduce sauce until slightly thickened, about 5 minutes.',
                'Off heat, whisk in remaining 2 tablespoons of butter.',
                'Pour sauce over chicken and vegetables. Garnish with chopped parsley.'
            ],
            tips: 'Traditional Coq au Vin uses a mature rooster, but a regular chicken works well. Marinating the chicken in wine overnight intensifies the flavor. The dish tastes even better the next day, so consider making it ahead of time and reheating gently.',
            nutrition: {
                'Calories': '420 kcal',
                'Protein': '35g',
                'Carbs': '8g',
                'Fat': '24g',
                'Fiber': '1g',
                'Sodium': '480mg'
            }
        },
        'croissant': {
            title: 'Classic Croissants',
            difficulty: 'Advanced',
            time: '1 hr + overnight rest',
            calories: '280 cal',
            servings: '12 croissants',
            image: '../images/recipes/croissant.jpg',
            ingredients: [
                '500g all-purpose flour',
                '10g salt',
                '75g sugar',
                '14g active dry yeast',
                '300ml cold milk',
                '250g cold unsalted butter',
                '1 egg, beaten (for egg wash)'
            ],
            instructions: [
                'In a large bowl, mix flour, salt, and sugar.',
                'In a small bowl, dissolve yeast in a little warm milk, then add to the flour mixture along with the remaining cold milk.',
                'Mix until a dough forms, then knead briefly until smooth.',
                'Shape into a rectangle, wrap in plastic, and refrigerate for 1 hour.',
                'Place butter between two sheets of parchment paper and beat with a rolling pin to form a 20x15cm rectangle. Refrigerate.',
                'Roll the dough into a 40x20cm rectangle on a floured surface.',
                'Place the butter in the center of the dough and fold the sides over to enclose it completely.',
                'Roll the dough into a 60x30cm rectangle, then fold in thirds like a letter.',
                'Wrap and refrigerate for 1 hour.',
                'Repeat the rolling and folding process two more times, with 1-hour refrigeration between each.',
                'After the final fold, refrigerate overnight.',
                'The next day, roll the dough to 60x30cm and cut into triangles.',
                'Stretch each triangle slightly and roll from the base to the tip.',
                'Place on baking sheets, curve into crescents, and let rise for 1-2 hours until doubled.',
                'Preheat oven to 200°C (390°F).',
                'Brush croissants with egg wash.',
                'Bake for 15-20 minutes until golden brown.',
                'Cool on a wire rack before serving.'
            ],
            tips: 'Keep everything cold while working with the dough to prevent the butter from melting into the layers. The key to flaky croissants is maintaining distinct layers of dough and butter. For the best results, be patient with the folding and resting process.',
            nutrition: {
                'Calories': '280 kcal',
                'Protein': '5g',
                'Carbs': '28g',
                'Fat': '17g',
                'Fiber': '1g',
                'Sodium': '320mg'
            }
        },
        'creme-brulee': {
            title: 'Crème Brûlée',
            difficulty: 'Medium',
            time: '45 min + 2 hrs chill',
            calories: '390 cal',
            servings: '6 servings',
            image: '../images/recipes/creme-brulee.jpg',
            ingredients: [
                '500ml heavy cream',
                '1 vanilla bean, split and scraped (or 1 tsp vanilla extract)',
                '6 egg yolks',
                '100g granulated sugar, plus extra for topping',
                'Pinch of salt'
            ],
            instructions: [
                'Preheat oven to 325°F (165°C).',
                'In a saucepan, heat cream and vanilla bean (if using) over medium heat until it just begins to simmer. Remove from heat.',
                'If using vanilla extract instead of a bean, add it to the cream now.',
                'In a bowl, whisk together egg yolks, sugar, and salt until pale and slightly thickened.',
                'Gradually whisk the hot cream into the egg mixture, a little at a time, to temper the eggs.',
                'Strain the mixture through a fine sieve into a jug.',
                'Place 6 ramekins in a deep baking dish.',
                'Divide the custard mixture among the ramekins.',
                'Pour hot water into the baking dish until it reaches halfway up the sides of the ramekins.',
                'Bake for 30-35 minutes, until the custards are set but still slightly jiggly in the center.',
                'Remove from the water bath and let cool to room temperature.',
                'Cover with plastic wrap and refrigerate for at least 2 hours, or up to 3 days.',
                'Before serving, sprinkle a thin, even layer of sugar over each custard.',
                'Use a kitchen torch to caramelize the sugar until golden brown.',
                'Let the caramelized sugar harden for a minute before serving.'
            ],
            tips: 'The water bath ensures gentle, even cooking. If you don\'t have a kitchen torch, you can place the ramekins under a broiler for a few minutes to caramelize the sugar, but watch them carefully to prevent burning. The perfect crème brûlée has a crisp, thin sugar crust that cracks when tapped with a spoon.',
            nutrition: {
                'Calories': '390 kcal',
                'Protein': '5g',
                'Carbs': '26g',
                'Fat': '31g',
                'Fiber': '0g',
                'Sodium': '80mg'
            }
        },
        'goulash': {
            title: 'Hungarian Goulash',
            difficulty: 'Medium',
            time: '2 hrs',
            calories: '380 cal',
            servings: '6 servings',
            image: '../images/recipes/goulash.jpg',
            ingredients: [
                '1kg beef chuck, cut into 2cm cubes',
                '2 large onions, diced',
                '3 cloves garlic, minced',
                '2 tbsp vegetable oil',
                '2 tbsp Hungarian sweet paprika',
                '1 tsp caraway seeds',
                '2 bell peppers, chopped',
                '2 carrots, diced',
                '2 medium potatoes, cubed',
                '2 tomatoes, chopped',
                '1L beef stock',
                '2 bay leaves',
                'Salt and pepper to taste',
                'Sour cream for serving',
                'Fresh parsley, chopped, for garnish'
            ],
            instructions: [
                'Heat oil in a large pot or Dutch oven over medium heat.',
                'Add onions and cook until translucent, about 5 minutes.',
                'Add garlic and cook for another minute.',
                'Add beef cubes and brown on all sides, about 5-7 minutes.',
                'Stir in paprika and caraway seeds, coating the meat evenly.',
                'Add bell peppers, carrots, potatoes, and tomatoes. Stir to combine.',
                'Pour in beef stock and add bay leaves. Season with salt and pepper.',
                'Bring to a boil, then reduce heat to low. Cover and simmer for 1.5 to 2 hours, until meat is tender.',
                'Remove bay leaves before serving.',
                'Serve hot with a dollop of sour cream and sprinkled with chopped parsley.',
                'Traditionally served with egg noodles or crusty bread.'
            ],
            tips: 'The key to authentic goulash is using high-quality Hungarian paprika. Don\'t rush the cooking process – slow simmering allows the meat to become tender and the flavors to meld beautifully. For a thicker consistency, you can add a little flour mixed with cold water during the last 15 minutes of cooking.',
            nutrition: {
                'Calories': '380 kcal',
                'Protein': '32g',
                'Carbs': '22g',
                'Fat': '18g',
                'Fiber': '4g',
                'Sodium': '520mg'
            }
        },
        'pierogi': {
            title: 'Polish Pierogi',
            difficulty: 'Medium',
            time: '90 min',
            calories: '320 cal',
            servings: '6 servings (about 24 pierogi)',
            image: '../images/recipes/pierogi.jpg',
            ingredients: [
                'For the dough:',
                '3 cups all-purpose flour',
                '1 egg',
                '3/4 cup sour cream',
                '1/3 cup water',
                '1/2 tsp salt',
                'For potato-cheese filling:',
                '2 cups mashed potatoes',
                '1 cup farmer\'s cheese or cottage cheese',
                '1 onion, finely chopped and sautéed',
                'Salt and pepper to taste',
                'For serving:',
                '1/4 cup butter',
                '1 onion, sliced and caramelized',
                'Sour cream'
            ],
            instructions: [
                'For the dough, mix flour and salt in a large bowl.',
                'Make a well in the center and add egg, sour cream, and water.',
                'Mix and knead until a smooth dough forms. Cover and let rest for 30 minutes.',
                'Meanwhile, prepare the filling by combining mashed potatoes, cheese, sautéed onion, salt, and pepper.',
                'Roll out the dough on a floured surface to about 1/8 inch thickness.',
                'Cut out 3-inch circles using a cookie cutter or glass.',
                'Place a tablespoon of filling in the center of each circle.',
                'Fold the dough over to form a half-moon and pinch the edges to seal.',
                'Bring a large pot of salted water to a boil.',
                'Cook pierogi in batches for 2-3 minutes, until they float to the surface.',
                'Remove with a slotted spoon and drain well.',
                'In a large skillet, melt butter and sauté the boiled pierogi until lightly browned on both sides.',
                'Serve hot topped with caramelized onions and a dollop of sour cream.'
            ],
            tips: 'Pierogi freeze well – arrange uncooked pierogi on a baking sheet, freeze until solid, then transfer to freezer bags. Cook from frozen, adding a few extra minutes to the boiling time. The dough should be rolled thin but not so thin that it tears easily when filled.',
            nutrition: {
                'Calories': '320 kcal',
                'Protein': '10g',
                'Carbs': '42g',
                'Fat': '14g',
                'Fiber': '3g',
                'Sodium': '390mg'
            }
        },
        'borscht': {
            title: 'Ukrainian Borscht',
            difficulty: 'Medium',
            time: '60 min',
            calories: '210 cal',
            servings: '8 servings',
            image: '../images/recipes/borscht.jpg',
            ingredients: [
                '500g beef (chuck or brisket), cut into cubes',
                '3 medium beets, peeled and grated',
                '2 carrots, grated',
                '1 onion, finely chopped',
                '2 potatoes, diced',
                '1/4 cabbage, shredded',
                '2 tbsp tomato paste',
                '2 tbsp vegetable oil',
                '2 bay leaves',
                '3 cloves garlic, minced',
                '2 tbsp fresh dill, chopped',
                '2 tbsp fresh parsley, chopped',
                '1 tbsp sugar',
                '2 tbsp white vinegar',
                'Salt and pepper to taste',
                'Sour cream for serving',
                '2L beef broth or water'
            ],
            instructions: [
                'In a large pot, bring beef and broth to a boil. Reduce heat, skim foam, and simmer for 1 hour until meat is tender.',
                'In a separate pan, heat oil and sauté onions and carrots until softened, about 5 minutes.',
                'Add beets and cook for another 5 minutes.',
                'Stir in tomato paste and cook for 1 minute.',
                'Add the vegetable mixture to the pot with the meat.',
                'Add potatoes, bay leaves, and cabbage to the pot.',
                'Simmer for 20 minutes until all vegetables are tender.',
                'Add garlic, sugar, and vinegar. Season with salt and pepper.',
                'Remove from heat and let stand for 10 minutes.',
                'Stir in fresh herbs before serving.',
                'Serve hot with a dollop of sour cream and additional fresh herbs.'
            ],
            tips: 'The vinegar helps maintain the vibrant red color of the beets and adds a slight tanginess to balance the sweetness. For vegetarian borscht, omit the meat and use vegetable broth instead. Borscht tastes even better the next day after the flavors have had time to meld.',
            nutrition: {
                'Calories': '210 kcal',
                'Protein': '15g',
                'Carbs': '18g',
                'Fat': '10g',
                'Fiber': '4g',
                'Sodium': '420mg'
            }
        },
        'cabbage-rolls': {
            title: 'Stuffed Cabbage Rolls',
            difficulty: 'Medium',
            time: '90 min',
            calories: '290 cal',
            servings: '6 servings',
            image: '../images/recipes/cabbage-rolls.jpg',
            ingredients: [
                '1 large cabbage',
                '500g ground beef',
                '250g ground pork',
                '1 cup cooked rice',
                '1 onion, finely chopped',
                '2 cloves garlic, minced',
                '1 egg',
                '2 tbsp fresh parsley, chopped',
                '1 tsp dried dill',
                'Salt and pepper to taste',
                'For the sauce:',
                '800g canned crushed tomatoes',
                '2 tbsp tomato paste',
                '1 onion, finely chopped',
                '2 cloves garlic, minced',
                '1 bay leaf',
                '1 tbsp sugar',
                '2 tbsp vegetable oil',
                'Salt and pepper to taste'
            ],
            instructions: [
                'Core the cabbage and place it in a large pot of boiling water.',
                'Cook for 5-7 minutes, peeling off leaves as they soften.',
                'Cut out the thick center rib from each leaf.',
                'In a bowl, combine ground meats, rice, onion, garlic, egg, parsley, dill, salt, and pepper.',
                'Place about 2 tablespoons of filling near the stem end of each cabbage leaf.',
                'Fold in the sides and roll up the leaf, enclosing the filling completely.',
                'For the sauce, heat oil in a large pot and sauté onion until translucent.',
                'Add garlic and cook for another minute.',
                'Stir in crushed tomatoes, tomato paste, bay leaf, sugar, salt, and pepper.',
                'Bring to a simmer and cook for 5 minutes.',
                'Place cabbage rolls seam-side down in the pot with the sauce.',
                'Cover and simmer on low heat for 1-1.5 hours, until the meat is cooked through.',
                'Serve hot with a dollop of sour cream and fresh herbs.'
            ],
            tips: 'To make the cabbage leaves more pliable, freeze the whole head of cabbage overnight, then thaw completely before using – this eliminates the need for boiling. Don\'t overstuff the rolls or they may burst during cooking. These rolls freeze well, either before or after cooking.',
            nutrition: {
                'Calories': '290 kcal',
                'Protein': '22g',
                'Carbs': '20g',
                'Fat': '14g',
                'Fiber': '4g',
                'Sodium': '380mg'
            }
        },
        'fish-and-chips': {
            title: 'Fish and Chips',
            difficulty: 'Medium',
            time: '45 min',
            calories: '780 cal',
            servings: '4 servings',
            image: '../images/recipes/fish-chips.jpg',
            ingredients: [
                '4 large russet potatoes, peeled and cut into thick chips',
                '4 cod or haddock fillets (about 150g each)',
                'For the batter:',
                '200g all-purpose flour',
                '1 tsp baking powder',
                '1 tsp salt',
                '1/4 tsp black pepper',
                '300ml cold beer',
                '1 egg, beaten',
                'Vegetable oil for deep frying',
                'Salt for seasoning',
                'Malt vinegar for serving',
                'Tartar sauce for serving',
                'Lemon wedges for serving'
            ],
            instructions: [
                'Place cut potatoes in cold water for 30 minutes to remove excess starch.',
                'Drain and dry thoroughly with paper towels.',
                'Heat oil in a deep fryer or large pot to 140°C (285°F).',
                'Fry potatoes for 5-7 minutes until soft but not colored. Remove and drain on paper towels.',
                'Increase oil temperature to 180°C (350°F).',
                'For the batter, whisk together flour, baking powder, salt, and pepper in a large bowl.',
                'Make a well in the center and add beaten egg and cold beer. Whisk until smooth.',
                'Pat fish fillets dry with paper towels and season with salt.',
                'Dip each fillet in the batter, allowing excess to drip off.',
                'Carefully lower into the hot oil and fry for 4-5 minutes until golden and crisp.',
                'Remove and drain on paper towels.',
                'Return the chips to the hot oil and fry for another 2-3 minutes until golden and crisp.',
                'Drain and season with salt immediately.',
                'Serve hot with malt vinegar, tartar sauce, and lemon wedges.'
            ],
            tips: 'For the crispiest results, make sure the oil is at the correct temperature. The beer in the batter creates a light, airy coating – make sure it\'s very cold when you add it. Traditional British fish and chips are served wrapped in newspaper (or parchment paper made to look like newspaper) to absorb excess oil.',
            nutrition: {
                'Calories': '780 kcal',
                'Protein': '32g',
                'Carbs': '85g',
                'Fat': '34g',
                'Fiber': '6g',
                'Sodium': '650mg'
            }
        },
        'shepherds-pie': {
            title: 'Shepherd\'s Pie',
            difficulty: 'Medium',
            time: '60 min',
            calories: '420 cal',
            servings: '6 servings',
            image: '../images/recipes/shepherds-pie.jpg',
            ingredients: [
                '500g ground lamb (use beef for Cottage Pie)',
                '1 large onion, finely chopped',
                '2 carrots, diced',
                '2 celery stalks, diced',
                '2 cloves garlic, minced',
                '2 tbsp tomato paste',
                '1 tbsp Worcestershire sauce',
                '200ml beef stock',
                '1 tsp dried thyme',
                '1 tsp dried rosemary',
                '1 cup frozen peas',
                'Salt and pepper to taste',
                'For the topping:',
                '1kg potatoes, peeled and cut into chunks',
                '100ml milk, warmed',
                '50g butter',
                '1 egg yolk (optional)',
                'Salt and pepper to taste',
                'Grated cheddar cheese (optional)'
            ],
            instructions: [
                'Preheat oven to 200°C (400°F).',
                'In a large pan, brown the ground lamb over medium heat, breaking it up as it cooks.',
                'Add onion, carrots, celery, and garlic. Cook for 5 minutes until vegetables begin to soften.',
                'Stir in tomato paste and cook for 1 minute.',
                'Add Worcestershire sauce, beef stock, thyme, and rosemary.',
                'Simmer for 15-20 minutes until the sauce has thickened. Add peas in the last 5 minutes.',
                'Meanwhile, boil potatoes in salted water until tender, about 15 minutes.',
                'Drain potatoes well and return to the pot. Allow to steam dry for a minute.',
                'Mash potatoes with warm milk, butter, and egg yolk if using. Season with salt and pepper.',
                'Transfer the meat mixture to a baking dish and spread evenly.',
                'Top with the mashed potatoes, using a fork to create peaks that will brown nicely.',
                'Sprinkle with grated cheese if desired.',
                'Bake for 25-30 minutes until the top is golden brown and the filling is bubbling.',
                'Let stand for 5 minutes before serving.'
            ],
            tips: 'Traditional Shepherd\'s Pie is made with lamb, while Cottage Pie uses beef. The egg yolk enriches the potato topping and helps it brown. For extra flavor, add a splash of red wine when simmering the meat mixture.',
            nutrition: {
                'Calories': '420 kcal',
                'Protein': '26g',
                'Carbs': '38g',
                'Fat': '18g',
                'Fiber': '5g',
                'Sodium': '480mg'
            }
        },
        'english-breakfast': {
            title: 'Full English Breakfast',
            difficulty: 'Easy',
            time: '30 min',
            calories: '850 cal',
            servings: '2 servings',
            image: '../images/recipes/english-breakfast.jpg',
            ingredients: [
                '4 pork sausages',
                '4 slices back bacon',
                '2 large eggs',
                '2 tomatoes, halved',
                '4 large mushrooms',
                '1 can (400g) baked beans',
                '2 slices black pudding (optional)',
                '2 slices bread for toast',
                'Butter for toast',
                'Vegetable oil for frying',
                'Salt and pepper to taste'
            ],
            instructions: [
                'Heat a large frying pan over medium heat. Add sausages and cook for 10-12 minutes, turning occasionally, until browned and cooked through.',
                'In another pan, fry the bacon until crisp around the edges but still tender.',
                'Add mushrooms to the pan with the bacon and cook until golden.',
                'Place tomato halves cut-side down in the pan and cook for 2-3 minutes.',
                'If using black pudding, fry for 2 minutes on each side.',
                'Heat the baked beans in a small saucepan.',
                'Toast the bread and spread with butter.',
                'In a separate pan, fry the eggs to your preference (sunny side up is traditional).',
                'Arrange all components on warm plates and season with salt and pepper.',
                'Serve immediately with a pot of tea or coffee.'
            ],
            tips: 'For an authentic experience, use British-style back bacon, which includes both the loin and belly area of the pig. The key to a great English breakfast is timing – try to have all elements ready at the same time. In different regions of the UK, you might find additional items like fried bread, hash browns, or regional specialties like white pudding or potato cakes.',
            nutrition: {
                'Calories': '850 kcal',
                'Protein': '40g',
                'Carbs': '45g',
                'Fat': '55g',
                'Fiber': '8g',
                'Sodium': '1800mg'
            }
        },
        'victoria-sponge': {
            title: 'Victoria Sponge Cake',
            difficulty: 'Medium',
            time: '45 min',
            calories: '320 cal',
            servings: '8 slices',
            image: '../images/recipes/victoria-sponge.jpg',
            ingredients: [
                'For the sponge:',
                '200g unsalted butter, softened',
                '200g caster sugar',
                '4 large eggs, at room temperature',
                '200g self-raising flour',
                '1 tsp baking powder',
                '1 tsp vanilla extract',
                'For the filling:',
                '100g unsalted butter, softened',
                '200g icing sugar, plus extra for dusting',
                '1/2 tsp vanilla extract',
                '100g strawberry or raspberry jam'
            ],
            instructions: [
                'Preheat oven to 180°C (350°F). Grease and line two 20cm (8 inch) round cake tins.',
                'In a large bowl, cream together butter and sugar until pale and fluffy.',
                'Beat in eggs one at a time, adding a tablespoon of flour with each to prevent curdling.',
                'Fold in remaining flour, baking powder, and vanilla extract.',
                'Divide the batter evenly between the prepared tins and level the surface.',
                'Bake for 20-25 minutes until golden and a skewer inserted comes out clean.',
                'Allow to cool in the tins for 5 minutes, then turn out onto a wire rack to cool completely.',
                'For the buttercream, beat butter until soft, then gradually add icing sugar and vanilla, beating until light and fluffy.',
                'Once cakes are completely cool, spread buttercream on one cake and jam on the other.',
                'Sandwich the cakes together, jam and buttercream facing each other.',
                'Dust the top with icing sugar before serving.'
            ],
            tips: 'For the lightest texture, make sure all ingredients are at room temperature before starting. The traditional Victoria sponge has just jam in the middle, but buttercream is a popular addition. The cake is named after Queen Victoria, who was known to enjoy a slice with her afternoon tea.',
            nutrition: {
                'Calories': '320 kcal',
                'Protein': '4g',
                'Carbs': '42g',
                'Fat': '16g',
                'Fiber': '1g',
                'Sodium': '120mg'
            }
        },
        'swedish-meatballs': {
            title: 'Swedish Meatballs',
            difficulty: 'Medium',
            time: '45 min',
            calories: '420 cal',
            servings: '4 servings',
            image: '../images/recipes/swedish-meatballs.jpg',
            ingredients: [
                'For the meatballs:',
                '250g ground beef',
                '250g ground pork',
                '1 onion, finely chopped',
                '1 clove garlic, minced',
                '50g breadcrumbs',
                '1 egg',
                '60ml milk',
                '1/4 tsp ground allspice',
                '1/4 tsp ground nutmeg',
                'Salt and pepper to taste',
                'For the sauce:',
                '2 tbsp butter',
                '2 tbsp all-purpose flour',
                '300ml beef stock',
                '100ml heavy cream',
                '1 tbsp soy sauce',
                '1 tsp Dijon mustard',
                'For serving:',
                'Lingonberry jam',
                'Mashed potatoes',
                'Fresh dill for garnish'
            ],
            instructions: [
                'In a small bowl, combine breadcrumbs and milk. Let sit for 5 minutes.',
                'In a large bowl, mix ground meats, onion, garlic, soaked breadcrumbs, egg, allspice, nutmeg, salt, and pepper.',
                'Roll the mixture into small, 1-inch meatballs.',
                'Heat a large skillet over medium heat and add a tablespoon of oil.',
                'Cook meatballs in batches until browned on all sides and cooked through, about 8-10 minutes. Transfer to a plate.',
                'In the same skillet, melt butter. Whisk in flour and cook for 1-2 minutes.',
                'Gradually whisk in beef stock, then cream, soy sauce, and mustard.',
                'Bring to a simmer and cook until thickened, about 5 minutes.',
                'Return meatballs to the skillet and simmer for 5 more minutes.',
                'Serve with lingonberry jam, mashed potatoes, and garnish with fresh dill.'
            ],
            tips: 'For authentic Swedish meatballs, the mix of beef and pork is essential. The allspice and nutmeg give them their distinctive flavor. Lingonberry jam provides a sweet-tart contrast to the rich, creamy sauce. If you can\'t find lingonberry jam, cranberry sauce is a good substitute.',
            nutrition: {
                'Calories': '420 kcal',
                'Protein': '28g',
                'Carbs': '15g',
                'Fat': '28g',
                'Fiber': '1g',
                'Sodium': '520mg'
            }
        },
        'gravlax': {
            title: 'Gravlax',
            difficulty: 'Medium',
            time: '30 min + 48 hrs curing',
            calories: '220 cal',
            servings: '8 servings',
            image: '../images/recipes/gravlax.jpg',
            ingredients: [
                '1kg fresh salmon fillet, skin on',
                '50g coarse sea salt',
                '50g granulated sugar',
                '1 tbsp crushed black peppercorns',
                '1 large bunch fresh dill, roughly chopped',
                '2 tbsp aquavit or vodka (optional)',
                'For the mustard-dill sauce:',
                '2 tbsp whole grain mustard',
                '1 tbsp Dijon mustard',
                '1 tbsp sugar',
                '2 tbsp white wine vinegar',
                '3 tbsp vegetable oil',
                '3 tbsp fresh dill, finely chopped',
                'Salt and pepper to taste'
            ],
            instructions: [
                'Check the salmon for any small bones and remove them with tweezers.',
                'In a small bowl, mix together salt, sugar, and crushed peppercorns.',
                'Place a large piece of plastic wrap on a work surface and sprinkle half of the dill over it.',
                'Place the salmon skin-side down on the dill.',
                'Rub the flesh side of the salmon with the salt-sugar mixture.',
                'Sprinkle with aquavit or vodka if using.',
                'Cover with the remaining dill.',
                'Wrap the salmon tightly in the plastic wrap, then wrap again in aluminum foil.',
                'Place in a dish and put a weight on top (like a plate with canned goods).',
                'Refrigerate for 48 hours, turning the salmon every 12 hours and basting with any liquid that accumulates.',
                'For the sauce, whisk together both mustards, sugar, and vinegar.',
                'Slowly whisk in the oil to emulsify, then stir in the dill. Season with salt and pepper.',
                'After 48 hours, unwrap the salmon and rinse off the cure mixture.',
                'Pat dry with paper towels.',
                'Using a sharp knife, slice the gravlax thinly at an angle.',
                'Serve with mustard-dill sauce, rye bread, and lemon wedges.'
            ],
            tips: 'Use the freshest salmon possible for gravlax. The curing process kills bacteria, but starting with high-quality fish is important. Don\'t cure for longer than 48 hours or the texture will become too firm. Gravlax can be stored in the refrigerator for up to 5 days after curing.',
            nutrition: {
                'Calories': '220 kcal',
                'Protein': '23g',
                'Carbs': '5g',
                'Fat': '12g',
                'Fiber': '0g',
                'Sodium': '650mg'
            }
        },
        'danish-pastry': {
            title: 'Danish Pastries',
            difficulty: 'Advanced',
            time: '1 hr + overnight rest',
            calories: '310 cal',
            servings: '12 pastries',
            image: '../images/recipes/danish-pastry.jpg',
            ingredients: [
                'For the dough:',
                '500g all-purpose flour',
                '80g sugar',
                '10g salt',
                '7g instant yeast',
                '2 eggs',
                '120ml milk',
                '1 tsp vanilla extract',
                '250g cold unsalted butter',
                'For the fillings (choose one or more):',
                'Almond paste mixed with a little egg white',
                'Vanilla custard',
                'Fruit preserves (raspberry, apricot, etc.)',
                'Fresh berries',
                'For the glaze:',
                '1 egg, beaten',
                '100g powdered sugar',
                '2 tbsp milk',
                '1/2 tsp vanilla extract'
            ],
            instructions: [
                'In a large bowl, mix flour, sugar, salt, and yeast.',
                'Add eggs, milk, and vanilla. Mix until a dough forms.',
                'Knead for 5 minutes until smooth. Cover and refrigerate for 30 minutes.',
                'Place butter between two sheets of parchment paper and beat with a rolling pin to form a 20x20cm square. Refrigerate.',
                'Roll the dough into a 30x30cm square on a floured surface.',
                'Place the butter square diagonally on the dough square.',
                'Fold the corners of the dough over the butter to enclose it completely.',
                'Roll the dough into a 45x20cm rectangle, then fold in thirds like a letter.',
                'Wrap and refrigerate for 1 hour.',
                'Repeat the rolling and folding process two more times, with 1-hour refrigeration between each.',
                'After the final fold, refrigerate overnight.',
                'The next day, roll the dough to 3mm thickness and cut into desired shapes.',
                'Add fillings as desired – for pinwheels, cut squares and make cuts from corners toward center; for pockets, fold corners to center.',
                'Place on baking sheets and let rise for 1-2 hours until puffy.',
                'Preheat oven to 200°C (390°F).',
                'Brush pastries with beaten egg.',
                'Bake for 15-18 minutes until golden brown.',
                'While still warm, brush with a mixture of powdered sugar, milk, and vanilla.',
                'Allow to cool slightly before serving.'
            ],
            tips: 'Keep the dough cold throughout the process to maintain distinct layers. If the butter starts to soften too much, return the dough to the refrigerator immediately. For the best flavor, use high-quality butter with at least 82% fat content. Danish pastries are best enjoyed fresh on the day they\'re baked.',
            nutrition: {
                'Calories': '310 kcal',
                'Protein': '5g',
                'Carbs': '35g',
                'Fat': '16g',
                'Fiber': '1g',
                'Sodium': '210mg'
            }
        },
        'finnish-salmon-soup': {
            title: 'Finnish Salmon Soup',
            difficulty: 'Easy',
            time: '40 min',
            calories: '320 cal',
            servings: '6 servings',
            image: '../images/recipes/finnish-soup.jpg',
            ingredients: [
                '500g salmon fillet, skin removed and cut into chunks',
                '1 leek, white part only, thinly sliced',
                '1 onion, finely chopped',
                '4 potatoes, peeled and cubed',
                '2 carrots, diced',
                '1.5L fish stock or water',
                '200ml heavy cream',
                '2 bay leaves',
                '8 allspice berries',
                '2 tbsp butter',
                '3 tbsp fresh dill, chopped',
                'Salt and white pepper to taste'
            ],
            instructions: [
                'In a large pot, melt butter over medium heat.',
                'Add leek and onion, sauté until soft but not browned, about 5 minutes.',
                'Add potatoes and carrots, stir to coat with butter.',
                'Pour in fish stock or water, add bay leaves and allspice berries.',
                'Bring to a boil, then reduce heat and simmer for 10-15 minutes until potatoes are almost tender.',
                'Add salmon chunks and simmer gently for 5 minutes until just cooked through.',
                'Stir in heavy cream and heat through without boiling.',
                'Season with salt and white pepper to taste.',
                'Remove bay leaves and allspice berries.',
                'Stir in most of the fresh dill, reserving some for garnish.',
                'Serve hot, garnished with remaining dill and a swirl of cream if desired.'
            ],
            tips: 'Known as Lohikeitto in Finland, this soup is a comforting staple in Nordic cuisine. For the best flavor, use fresh salmon and make your own fish stock. The soup should be gently simmered rather than boiled to prevent the cream from separating and to keep the salmon tender.',
            nutrition: {
                'Calories': '320 kcal',
                'Protein': '22g',
                'Carbs': '18g',
                'Fat': '18g',
                'Fiber': '2g',
                'Sodium': '390mg'
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
                id: 'risotto',
                title: 'Mushroom Risotto',
                image: '../images/recipes/risotto.jpg',
                time: '40 min',
                difficulty: 'Medium',
                description: 'Creamy arborio rice with sautéed mushrooms and parmesan.'
            },
            {
                id: 'tiramisu',
                title: 'Tiramisu',
                image: '../images/recipes/tiramisu.jpg',
                time: '30 min + 4 hrs chill',
                difficulty: 'Medium',
                description: 'Coffee-soaked ladyfingers layered with mascarpone cream.'
            },
            {
                id: 'carbonara',
                title: 'Classic Carbonara',
                image: '../images/recipes/carbonara.jpg',
                time: '30 min',
                difficulty: 'Easy',
                description: 'Pasta with eggs, cheese, pancetta, and black pepper.'
            }
        ],
        'spanish': [
            {
                id: 'paella',
                title: 'Seafood Paella',
                image: '../images/recipes/paella.jpg',
                time: '45 min',
                difficulty: 'Medium',
                description: 'Traditional Spanish rice dish with saffron and seafood.'
            },
            {
                id: 'tortilla',
                title: 'Spanish Tortilla',
                image: '../images/recipes/tortilla.jpg',
                time: '35 min',
                difficulty: 'Easy',
                description: 'Classic potato and onion omelette, a Spanish staple.'
            },
            {
                id: 'churros',
                title: 'Churros with Chocolate',
                image: '../images/recipes/churros.jpg',
                time: '30 min',
                difficulty: 'Medium',
                description: 'Fried dough pastry served with thick hot chocolate.'
            },
            {
                id: 'gazpacho',
                title: 'Gazpacho',
                image: '../images/recipes/gazpacho.jpg',
                time: '20 min + 2 hrs chill',
                difficulty: 'Easy',
                description: 'Cold soup made of raw blended vegetables, perfect for summer.'
            }
        ],
        'greek': [
            {
                id: 'moussaka',
                title: 'Greek Moussaka',
                image: '../images/recipes/moussaka.jpg',
                time: '90 min',
                difficulty: 'Advanced',
                description: 'Layered casserole with eggplant, potatoes, and béchamel sauce.'
            },
            {
                id: 'greek-salad',
                title: 'Traditional Greek Salad',
                image: '../images/recipes/greek-salad.jpg',
                time: '15 min',
                difficulty: 'Easy',
                description: 'Fresh salad with tomatoes, cucumber, olives, and feta cheese.'
            },
            {
                id: 'souvlaki',
                title: 'Chicken Souvlaki',
                image: '../images/recipes/souvlaki.jpg',
                time: '30 min + 2 hrs marinating',
                difficulty: 'Easy',
                description: 'Grilled skewers of marinated chicken served with tzatziki.'
            },
            {
                id: 'baklava',
                title: 'Baklava',
                image: '../images/recipes/baklava.jpg',
                time: '60 min',
                difficulty: 'Medium',
                description: 'Sweet pastry made of layers of filo filled with chopped nuts and honey.'
            }
        ],
        'french': [
            {
                id: 'ratatouille',
                title: 'Provençal Ratatouille',
                image: '../images/recipes/ratatouille.jpg',
                time: '60 min',
                difficulty: 'Medium',
                description: 'French vegetable stew with eggplant, zucchini, and tomatoes.'
            },
            {
                id: 'coq-au-vin',
                title: 'Coq au Vin',
                image: '../images/recipes/coq-au-vin.jpg',
                time: '90 min',
                difficulty: 'Medium',
                description: 'Chicken braised with wine, mushrooms, and garlic.'
            },
            {
                id: 'croissant',
                title: 'Classic Croissants',
                image: '../images/recipes/croissant.jpg',
                time: '1 hr + overnight rest',
                difficulty: 'Advanced',
                description: 'Buttery, flaky viennoiserie pastry of Austrian origin.'
            },
            {
                id: 'creme-brulee',
                title: 'Crème Brûlée',
                image: '../images/recipes/creme-brulee.jpg',
                time: '45 min + 2 hrs chill',
                difficulty: 'Medium',
                description: 'Rich custard base topped with a layer of hardened caramelized sugar.'
            }
        ],
        'german': [
            {
                id: 'schnitzel',
                title: 'Wiener Schnitzel',
                image: '../images/recipes/schnitzel.jpg',
                time: '30 min',
                difficulty: 'Easy',
                description: 'Thinly pounded meat coated in breadcrumbs and fried.'
            },
            {
                id: 'sauerkraut',
                title: 'Sauerkraut with Sausages',
                image: '../images/recipes/sauerkraut.jpg',
                time: '45 min',
                difficulty: 'Easy',
                description: 'Fermented cabbage served with various German sausages.'
            },
            {
                id: 'pretzel',
                title: 'Bavarian Pretzels',
                image: '../images/recipes/pretzel.jpg',
                time: '40 min + 1 hr rise',
                difficulty: 'Medium',
                description: 'Traditional German twisted bread with a dark, shiny crust.'
            },
            {
                id: 'black-forest',
                title: 'Black Forest Cake',
                image: '../images/recipes/black-forest.jpg',
                time: '90 min',
                difficulty: 'Advanced',
                description: 'Chocolate sponge cake with cherry filling and whipped cream.'
            }
        ],
        'scandinavian': [
            {
                id: 'swedish-meatballs',
                title: 'Swedish Meatballs',
                image: '../images/recipes/swedish-meatballs.jpg',
                time: '45 min',
                difficulty: 'Medium',
                description: 'Small meatballs served with gravy, mashed potatoes, and lingonberry jam.'
            },
            {
                id: 'gravlax',
                title: 'Gravlax',
                image: '../images/recipes/gravlax.jpg',
                time: '30 min + 48 hrs curing',
                difficulty: 'Medium',
                description: 'Cured salmon with dill, a Nordic specialty.'
            },
            {
                id: 'danish-pastry',
                title: 'Danish Pastries',
                image: '../images/recipes/danish-pastry.jpg',
                time: '1 hr + overnight rest',
                difficulty: 'Advanced',
                description: 'Multilayered, laminated sweet pastry with various fillings.'
            },
            {
                id: 'finnish-salmon-soup',
                title: 'Finnish Salmon Soup',
                image: '../images/recipes/finnish-soup.jpg',
                time: '40 min',
                difficulty: 'Easy',
                description: 'Creamy soup with salmon, potatoes, and dill.'
            }
        ],
        'eastern-european': [
            {
                id: 'goulash',
                title: 'Hungarian Goulash',
                image: '../images/recipes/goulash.jpg',
                time: '2 hrs',
                difficulty: 'Medium',
                description: 'Rich beef stew seasoned with paprika and other spices.'
            },
            {
                id: 'pierogi',
                title: 'Polish Pierogi',
                image: '../images/recipes/pierogi.jpg',
                time: '90 min',
                difficulty: 'Medium',
                description: 'Dumplings filled with potato, cheese, or sauerkraut.'
            },
            {
                id: 'borscht',
                title: 'Ukrainian Borscht',
                image: '../images/recipes/borscht.jpg',
                time: '60 min',
                difficulty: 'Medium',
                description: 'Beet soup served with sour cream and fresh dill.'
            },
            {
                id: 'cabbage-rolls',
                title: 'Stuffed Cabbage Rolls',
                image: '../images/recipes/cabbage-rolls.jpg',
                time: '90 min',
                difficulty: 'Medium',
                description: 'Cabbage leaves stuffed with ground meat and rice in tomato sauce.'
            }
        ],
        'british': [
            {
                id: 'fish-and-chips',
                title: 'Fish and Chips',
                image: '../images/recipes/fish-chips.jpg',
                time: '45 min',
                difficulty: 'Medium',
                description: 'Battered fish with thick-cut fried potatoes, a British classic.'
            },
            {
                id: 'shepherds-pie',
                title: 'Shepherd\'s Pie',
                image: '../images/recipes/shepherds-pie.jpg',
                time: '60 min',
                difficulty: 'Medium',
                description: 'Ground lamb topped with mashed potatoes and baked until golden.'
            },
            {
                id: 'english-breakfast',
                title: 'Full English Breakfast',
                image: '../images/recipes/english-breakfast.jpg',
                time: '30 min',
                difficulty: 'Easy',
                description: 'Traditional breakfast with eggs, bacon, sausages, beans, and more.'
            },
            {
                id: 'victoria-sponge',
                title: 'Victoria Sponge Cake',
                image: '../images/recipes/victoria-sponge.jpg',
                time: '45 min',
                difficulty: 'Medium',
                description: 'Light sponge cake filled with jam and cream, named after Queen Victoria.'
            }
        ]
    };

    // Track navigation history
    let navigationHistory = [];
    let currentRegion = null;

    // Initialize recipe modal
    initRecipeModal();
    
    // Initialize region modal functionality
    initRegionModal();

    function initRecipeModal() {
        const recipeLinks = document.querySelectorAll('.see-recipe');
        const recipeModal = document.getElementById('recipe-modal');
        const closeButton = document.getElementById('close-recipe-modal');

        recipeLinks.forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                const recipeId = this.getAttribute('data-recipe-id');
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

    function initRegionModal() {
        const regionCards = document.querySelectorAll('.region-card');
        
        regionCards.forEach(card => {
            card.addEventListener('click', function() {
                const region = this.getAttribute('data-region');
                showRegionRecipes(region);
            });
        });
    }

    function showRegionRecipes(region) {
        // Save current region to history
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

    function openRecipeModal(recipeId, fromRegion = false) {
        const recipe = europeanRecipes[recipeId];
        if (!recipe) {
            console.error(`Recipe not found: ${recipeId}`);
            return;
        }

        const modal = document.getElementById('recipe-modal');
        
        // Add back button if coming from region view
        const modalHeader = document.querySelector('.recipe-modal-header');
        if (fromRegion && modalHeader) {
            // Check if back button already exists
            let backButton = document.getElementById('back-to-region');
            if (!backButton) {
                backButton = document.createElement('button');
                backButton.id = 'back-to-region';
                backButton.className = 'back-button';
                backButton.innerHTML = '<i class="fas fa-arrow-left"></i> Back to Region';
                backButton.addEventListener('click', goBackToRegion);
                modalHeader.insertBefore(backButton, modalHeader.firstChild);
            }
            backButton.style.display = 'block';
        } else {
            // Hide back button if not coming from region
            const backButton = document.getElementById('back-to-region');
            if (backButton) {
                backButton.style.display = 'none';
            }
        }

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
        recipe.instructions.forEach((instruction, index) => {
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

    function goBackToRegion() {
        // Close recipe modal
        closeRecipeModal();
        
        // Get the last region from history
        if (navigationHistory.length > 0) {
            const lastNavigation = navigationHistory.pop();
            if (lastNavigation.type === 'region') {
                // Show the region modal again
                showRegionRecipes(lastNavigation.id);
            }
        }
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