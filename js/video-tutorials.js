document.addEventListener('DOMContentLoaded', function() {
    const videoCards = document.querySelectorAll('.video-card');
    const videoModal = document.getElementById('video-modal');
    const closeVideoModal = document.querySelector('.close-video-modal');
    const videoIframe = document.getElementById('video-iframe');
    const modalVideoTitle = document.getElementById('modal-video-title');
    const modalChefImg = document.getElementById('modal-chef-img');
    const modalChefName = document.getElementById('modal-chef-name');
    const modalViews = document.getElementById('modal-views');
    const modalRating = document.getElementById('modal-rating');
    const modalDescription = document.getElementById('modal-video-description');
    const modalIngredients = document.getElementById('modal-ingredients');
    const featuredVideo = document.querySelector('.featured-video-wrapper');
    
    const filterButtons = document.querySelectorAll('.filter-btn');
    const clearFiltersBtn = document.querySelector('.clear-filters');
    const activeFilterTags = document.querySelector('.active-filter-tags');
    
    const startLearningBtn = document.querySelector('.hero-buttons .primary-btn');
    if (startLearningBtn) {
        startLearningBtn.addEventListener('click', function() {
            document.querySelector('.video-collections').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
    
    const browseCategoriesBtn = document.querySelector('.hero-buttons .secondary-btn');
    if (browseCategoriesBtn) {
        browseCategoriesBtn.addEventListener('click', function() {
            document.querySelector('.video-filters').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
    
    const videoData = {
        'Traditional Uzbek Plov': {
            videoId: 'XVlnxbX_Xgo',
            chef: 'Chef Alisher',
            chefImg: '../images/chefs/chef-alisher.jpg',
            views: '12.5K',
            rating: '4.9',
            description: 'Learn how to make the perfect Uzbek plov with tender lamb and aromatic rice. This traditional dish is a staple in Uzbek cuisine and is perfect for special occasions.',
            ingredients: [
                { name: 'Lamb shoulder', amount: '800g, cut into chunks' },
                { name: 'Basmati rice', amount: '500g' },
                { name: 'Carrots', amount: '500g, julienned' },
                { name: 'Onions', amount: '3 large, sliced' },
                { name: 'Garlic', amount: '1 whole head' },
                { name: 'Cumin seeds', amount: '2 tbsp' },
                { name: 'Coriander seeds', amount: '1 tbsp' },
                { name: 'Vegetable oil', amount: '100ml' },
                { name: 'Salt', amount: 'to taste' },
                { name: 'Water', amount: '750ml' }
            ]
        },
        'Perfect French Toast': {
            videoId: 'BHOGfQJLnGE',
            chef: 'Chef Marie',
            chefImg: '../images/chefs/chef-marie.jpg',
            views: '8.7K',
            rating: '4.7',
            description: 'Quick and easy French toast with a crispy exterior and fluffy interior. Perfect for a weekend breakfast or brunch. Serve with fresh berries and maple syrup.',
            ingredients: [
                { name: 'Bread', amount: '6 slices, preferably day-old' },
                { name: 'Eggs', amount: '3 large' },
                { name: 'Milk', amount: '3/4 cup' },
                { name: 'Vanilla extract', amount: '1 tsp' },
                { name: 'Cinnamon', amount: '1/2 tsp' },
                { name: 'Butter', amount: '2 tbsp' },
                { name: 'Maple syrup', amount: 'for serving' },
                { name: 'Fresh berries', amount: 'for serving' }
            ]
        },
        'Classic Italian Tiramisu': {
            videoId: '6O3SL5XgJAo',
            chef: 'Chef Marco',
            chefImg: '../images/chefs/chef-marco.jpg',
            views: '15.3K',
            rating: '4.8',
            description: 'Create this elegant Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream. A perfect ending to any Italian meal.',
            ingredients: [
                { name: 'Ladyfingers', amount: '24 pieces' },
                { name: 'Mascarpone cheese', amount: '500g' },
                { name: 'Eggs', amount: '4, separated' },
                { name: 'Sugar', amount: '100g' },
                { name: 'Strong coffee', amount: '300ml, cooled' },
                { name: 'Cocoa powder', amount: '2 tbsp' },
                { name: 'Amaretto', amount: '60ml (optional)' }
            ]
        },
        'Homemade Sushi Masterclass': {
            videoId: 'daJDgEMNeK8',
            chef: 'Chef Yuki',
            chefImg: '../images/chefs/chef-yuki.jpg',
            views: '22.1K',
            rating: '4.9',
            description: 'Master the art of making restaurant-quality sushi rolls at home. Learn proper rice preparation, fish selection, and rolling techniques.',
            ingredients: [
                { name: 'Sushi rice', amount: '500g' },
                { name: 'Rice vinegar', amount: '60ml' },
                { name: 'Sugar', amount: '2 tbsp' },
                { name: 'Salt', amount: '1 tsp' },
                { name: 'Nori sheets', amount: '10 sheets' },
                { name: 'Sashimi-grade fish', amount: '500g' },
                { name: 'Cucumber', amount: '1, julienned' },
                { name: 'Avocado', amount: '2, sliced' },
                { name: 'Wasabi', amount: 'to taste' },
                { name: 'Soy sauce', amount: 'for serving' }
            ]
        },
        'Traditional Uzbek Breakfast': {
            videoId: 'ZNI9UwIpWwc',
            chef: 'Chef Nodira',
            chefImg: '../images/chefs/chef-nodira.jpg',
            views: '7.2K',
            rating: '4.6',
            description: 'Learn to prepare a traditional Uzbek breakfast with non bread and kaymak.',
            ingredients: [
                { name: 'Non bread', amount: '2 loaves' },
                { name: 'Kaymak', amount: '200g' },
                { name: 'Green tea', amount: '500ml' },
                { name: 'Honey', amount: '100g' },
                { name: 'Dried fruits', amount: '100g, assorted' }
            ]
        },
        'Perfect Avocado Toast': {
            videoId: '3dHXa8DoA_k',
            chef: 'Chef Emma',
            chefImg: '../images/chefs/chef-emma.jpg',
            views: '9.8K',
            rating: '4.7',
            description: 'Create the perfect avocado toast with poached eggs and microgreens.',
            ingredients: [
                { name: 'Sourdough bread', amount: '2 slices' },
                { name: 'Avocado', amount: '1 ripe' },
                { name: 'Eggs', amount: '2 large' },
                { name: 'Microgreens', amount: 'a handful' },
                { name: 'Chili flakes', amount: '1/2 tsp' },
                { name: 'Lemon juice', amount: '1 tsp' },
                { name: 'Salt and pepper', amount: 'to taste' }
            ]
        },
        'Spicy Shakshuka': {
            videoId: '618QsMaVXp8',
            chef: 'Chef Amir',
            chefImg: '../images/chefs/chef-amir.jpg',
            views: '11.4K',
            rating: '4.8',
            description: 'Make this flavorful Mediterranean breakfast with eggs poached in a spicy tomato sauce.',
            ingredients: [
                { name: 'Eggs', amount: '6 large' },
                { name: 'Tomatoes', amount: '800g, diced' },
                { name: 'Bell peppers', amount: '2, diced' },
                { name: 'Onion', amount: '1 large, diced' },
                { name: 'Garlic', amount: '3 cloves, minced' },
                { name: 'Cumin', amount: '1 tsp' },
                { name: 'Paprika', amount: '1 tsp' },
                { name: 'Chili powder', amount: '1/2 tsp' },
                { name: 'Olive oil', amount: '2 tbsp' },
                { name: 'Fresh herbs', amount: 'for garnish' }
            ]
        },
        'Comforting Rice Congee': {
            videoId: 'kB4-K8FeGJw',
            chef: 'Chef Lin',
            chefImg: '../images/chefs/chef-lin.jpg',
            views: '8.3K',
            rating: '4.5',
            description: 'Learn to make this soothing Asian rice porridge with various toppings.',
            ingredients: [
                { name: 'Rice', amount: '200g' },
                { name: 'Chicken stock', amount: '1.5L' },
                { name: 'Ginger', amount: '30g, sliced' },
                { name: 'Green onions', amount: '4, sliced' },
                { name: 'Soy sauce', amount: '2 tbsp' },
                { name: 'Chicken', amount: '200g, shredded (optional)' },
                { name: 'Century egg', amount: '1, diced (optional)' }
            ]
        }
    };
    
    const featuredVideoData = {
        title: 'Uzbek Plov Masterclass',
        videoId: 'XVlnxbX_Xgo',
        chef: 'Chef Alisher',
        chefImg: '../images/chefs/chef-alisher.jpg',
        views: '25.3K',
        rating: '4.9',
        description: 'Master the art of cooking authentic Uzbek plov with Chef Alisher. Learn the traditional techniques, the right rice to use, and how to achieve the perfect flavor balance.',
        ingredients: [
            { name: 'Lamb shoulder', amount: '1kg, cut into chunks' },
            { name: 'Devzira rice', amount: '800g' },
            { name: 'Carrots', amount: '800g, julienned' },
            { name: 'Onions', amount: '4 large, sliced' },
            { name: 'Garlic', amount: '2 whole heads' },
            { name: 'Cumin seeds', amount: '3 tbsp' },
            { name: 'Barberries', amount: '2 tbsp' },
            { name: 'Vegetable oil', amount: '150ml' },
            { name: 'Salt', amount: 'to taste' },
            { name: 'Water', amount: '1L' }
        ]
    };
    
    let activeFilters = {
        filter: 'all',
        cuisine: 'all',
        difficulty: 'all',
        duration: 'all'
    };
    
    document.querySelectorAll('.video-thumbnail').forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const videoId = this.getAttribute('data-video-id');
            const videoTitle = this.closest('.video-card').querySelector('.video-title').textContent;
            
            this.classList.add('loading');
            
            const iframe = document.createElement('iframe');
            iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
            iframe.title = videoTitle;
            iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
            iframe.allowFullscreen = true;
            
            iframe.onload = () => {
                this.classList.remove('loading');
            };
            
            this.innerHTML = '';
            this.appendChild(iframe);
            
            event.stopPropagation();
        });
        
        thumbnail.closest('.video-card').addEventListener('click', function() {
            const videoTitle = this.querySelector('.video-title').textContent;
            openVideoModal(videoTitle);
        });
    });
    
    if (featuredVideo) {
        featuredVideo.addEventListener('click', function() {
            const videoId = this.getAttribute('data-video-id');
            
            const iframe = document.createElement('iframe');
            iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
            iframe.title = "Featured Video";
            iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
            iframe.allowFullscreen = true;
            
            this.innerHTML = '';
            this.appendChild(iframe);
            
            event.preventDefault();
        });
    }
    
    function openVideoModal(videoTitle) {
        const data = videoData[videoTitle] || {
            videoId: 'dQw4w9WgXcQ', 
            chef: 'Chef',
            chefImg: '../images/chefs/default-chef.jpg',
            views: '0',
            rating: '0.0',
            description: 'No description available.',
            ingredients: []
        };
        
        modalVideoTitle.textContent = videoTitle;
        modalChefImg.src = data.chefImg;
        modalChefName.textContent = data.chef;
        modalViews.textContent = `${data.views} views`;
        modalRating.textContent = `${data.rating} ★`;
        modalDescription.textContent = data.description;
        
        videoIframe.src = `https://www.youtube.com/embed/${data.videoId}?autoplay=1`;
        
        modalIngredients.innerHTML = '';
        data.ingredients.forEach(ingredient => {
            const li = document.createElement('li');
            li.innerHTML = `<span>${ingredient.name}</span><span>${ingredient.amount}</span>`;
            modalIngredients.appendChild(li);
        });
        
        videoModal.style.display = 'block';
        videoModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }
    
    if (closeVideoModal) {
        closeVideoModal.addEventListener('click', function() {
            closeModal();
        });
    }
    
    function closeModal() {
        videoModal.style.display = 'none';
        videoModal.setAttribute('aria-hidden', 'true');
        videoIframe.src = '';
        document.body.style.overflow = '';
    }
    
    window.addEventListener('click', function(e) {
        if (e.target === videoModal) {
            closeModal();
        }
    });
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filterType = this.hasAttribute('data-filter') ? 'filter' : 
                              this.hasAttribute('data-cuisine') ? 'cuisine' :
                              this.hasAttribute('data-difficulty') ? 'difficulty' : 'duration';
            
            const filterValue = this.getAttribute(`data-${filterType}`);
            
            document.querySelectorAll(`.filter-btn[data-${filterType}]`).forEach(btn => {
                btn.classList.remove('active');
            });
            this.classList.add('active');
            
            activeFilters[filterType] = filterValue;
            
            applyFilters();
            updateFilterTags();
        });
    });
    
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', function() {
            activeFilters = {
                filter: 'all',
                cuisine: 'all',
                difficulty: 'all',
                duration: 'all'
            };
            
            filterButtons.forEach(btn => {
                if (btn.getAttribute('data-filter') === 'all' || 
                    btn.getAttribute('data-cuisine') === 'all' ||
                    btn.getAttribute('data-difficulty') === 'all' ||
                    btn.getAttribute('data-duration') === 'all') {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });
            
            applyFilters();
            updateFilterTags();
        });
    }
    
    function applyFilters() {
        videoCards.forEach(card => {
            const cardFilter = card.getAttribute('data-filter');
            const cardCuisine = card.getAttribute('data-cuisine');
            const cardDifficulty = card.getAttribute('data-difficulty');
            const cardDuration = card.getAttribute('data-duration');
            
            const filterMatch = activeFilters.filter === 'all' || activeFilters.filter === cardFilter;
            const cuisineMatch = activeFilters.cuisine === 'all' || activeFilters.cuisine === cardCuisine;
            const difficultyMatch = activeFilters.difficulty === 'all' || activeFilters.difficulty === cardDifficulty;
            const durationMatch = activeFilters.duration === 'all' || activeFilters.duration === cardDuration;
            
            if (filterMatch && cuisineMatch && difficultyMatch && durationMatch) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
    
    function updateFilterTags() {
        activeFilterTags.innerHTML = '';
        
        const filterNames = {
            filter: {
                all: 'All Meal Types',
                breakfast: 'Breakfast',
                lunch: 'Lunch',
                dinner: 'Dinner',
                dessert: 'Desserts',
                snack: 'Snacks'
            },
            cuisine: {
                all: 'All Cuisines',
                uzbek: 'Uzbek',
                european: 'European',
                asian: 'Asian',
                mediterranean: 'Mediterranean'
            },
            difficulty: {
                all: 'All Difficulties',
                beginner: 'Beginner',
                intermediate: 'Intermediate',
                advanced: 'Advanced'
            },
            duration: {
                all: 'All Durations',
                short: 'Under 15 min',
                medium: '15-30 min',
                long: 'Over 30 min'
            }
        };
        
        for (const [type, value] of Object.entries(activeFilters)) {
            const tag = document.createElement('span');
            tag.className = 'filter-tag';
            tag.innerHTML = `${filterNames[type][value]} <button class="remove-filter" data-type="${type}" aria-label="Remove ${filterNames[type][value]} filter">×</button>`;
            activeFilterTags.appendChild(tag);
        }
        
        document.querySelectorAll('.remove-filter').forEach(button => {
            button.addEventListener('click', function() {
                const type = this.getAttribute('data-type');
                
                activeFilters[type] = 'all';
                
                document.querySelectorAll(`.filter-btn[data-${type}]`).forEach(btn => {
                    btn.classList.remove('active');
                    if (btn.getAttribute(`data-${type}`) === 'all') {
                        btn.classList.add('active');
                    }
                });
                
                applyFilters();
                updateFilterTags();
            });
        });
    }
    
    updateFilterTags();
});