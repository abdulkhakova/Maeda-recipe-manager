document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initFilterButtons();
    initRegionCards();
    initMobileMenu();
    initSearchFunctionality();
    handleActiveNavLinks();
    initScrollEffects();
});

function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            navLinks.forEach(item => item.removeAttribute('aria-current'));
            this.setAttribute('aria-current', 'page');
            sessionStorage.setItem('activePage', this.getAttribute('id'));
        });
    });
    
    const activePage = sessionStorage.getItem('activePage');
    if (activePage) {
        const activeLink = document.getElementById(activePage);
        if (activeLink) {
            activeLink.setAttribute('aria-current', 'page');
        }
    }
}

function initFilterButtons() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    if (!filterBtns.length) return;
    
    const recipeItems = document.querySelectorAll('.recipe-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            recipeItems.forEach(item => {
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px)';
            });
            
            setTimeout(() => {
                recipeItems.forEach(item => {
                    const itemCategory = item.getAttribute('data-category');
                    
                    if (filterValue === 'all' || itemCategory === filterValue) {
                        item.style.display = '';
                        
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, Math.random() * 200);
                    } else {
                        item.style.display = 'none';
                    }
                });
                
                const countDisplay = document.querySelector('.recipe-count');
                if (countDisplay) {
                    const visibleItems = [...recipeItems].filter(item => 
                        item.style.display !== 'none'
                    ).length;
                    
                    countDisplay.textContent = `${visibleItems} recipe${visibleItems !== 1 ? 's' : ''} found`;
                    countDisplay.classList.add('updated');
                    setTimeout(() => countDisplay.classList.remove('updated'), 1000);
                }
            }, 300);
            
            history.replaceState(null, null, `#${filterValue}`);
        });
    });
    
    const urlHash = window.location.hash.substring(1);
    if (urlHash) {
        const matchingBtn = document.querySelector(`.filter-btn[data-filter="${urlHash}"]`);
        if (matchingBtn) matchingBtn.click();
    }
}

function initRegionCards() {
    const regionCards = document.querySelectorAll('.region-card');
    if (!regionCards.length) return;
    
    const recipeContainer = document.querySelector('.recipes-container');
    const regionTitle = document.querySelector('.selected-region-title');
    
    regionCards.forEach(card => {
        card.addEventListener('click', function() {
            regionCards.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            
            const region = this.querySelector('.region-name').textContent;
            const regionId = this.getAttribute('data-region');
            
            if (regionTitle) {
                regionTitle.textContent = `${region} Cuisine`;
                regionTitle.classList.add('title-changed');
                setTimeout(() => regionTitle.classList.remove('title-changed'), 1000);
            }
            
            if (recipeContainer) {
                recipeContainer.classList.add('loading');
                
                setTimeout(() => {
                    fetchRegionRecipes(regionId)
                        .then(recipes => {
                            displayRegionRecipes(recipes);
                            recipeContainer.classList.remove('loading');
                        })
                        .catch(error => {
                            console.error('Error fetching recipes:', error);
                            recipeContainer.classList.remove('loading');
                            showNotification(`Failed to load recipes for ${region}`, 'error');
                        });
                }, 800);
            }
            
            history.pushState({region: regionId}, null, `?region=${regionId}`);
        });
    });
    
    const urlParams = new URLSearchParams(window.location.search);
    const regionParam = urlParams.get('region');
    if (regionParam) {
        const matchingCard = document.querySelector(`.region-card[data-region="${regionParam}"]`);
        if (matchingCard) matchingCard.click();
    }
}

function fetchRegionRecipes(regionId) {
    return new Promise((resolve) => {
        const recipes = [
            {
                id: `${regionId}-1`,
                title: `Popular ${regionId.charAt(0).toUpperCase() + regionId.slice(1)} Dish 1`,
                image: `../images/recipes/${regionId}-dish1.jpg`,
                time: '30 min',
                difficulty: 'Medium'
            },
            {
                id: `${regionId}-2`,
                title: `Traditional ${regionId.charAt(0).toUpperCase() + regionId.slice(1)} Recipe`,
                image: `../images/recipes/${regionId}-dish2.jpg`,
                time: '45 min',
                difficulty: 'Easy'
            },
            {
                id: `${regionId}-3`,
                title: `${regionId.charAt(0).toUpperCase() + regionId.slice(1)} Special`,
                image: `../images/recipes/${regionId}-dish3.jpg`,
                time: '60 min',
                difficulty: 'Hard'
            }
        ];
        
        resolve(recipes);
    });
}

function displayRegionRecipes(recipes) {
    const recipeContainer = document.querySelector('.recipes-container');
    if (!recipeContainer) return;
    
    recipeContainer.innerHTML = '';
    
    if (recipes.length === 0) {
        recipeContainer.innerHTML = `
            <div class="no-recipes">
                <i class="fas fa-utensils"></i>
                <p>No recipes found for this region</p>
            </div>
        `;
        return;
    }
    
    recipes.forEach((recipe, index) => {
        const recipeCard = document.createElement('div');
        recipeCard.className = 'recipe-card';
        recipeCard.style.opacity = '0';
        recipeCard.style.transform = 'translateY(20px)';
        
        recipeCard.innerHTML = `
            <div class="recipe-image">
                <img src="${recipe.image}" alt="${recipe.title}" onerror="this.src='../images/placeholder.jpg'">
            </div>
            <div class="recipe-info">
                <h3>${recipe.title}</h3>
                <div class="recipe-meta">
                    <span><i class="fas fa-clock"></i> ${recipe.time}</span>
                    <span><i class="fas fa-signal"></i> ${recipe.difficulty}</span>
                </div>
                <button class="view-recipe-btn">View Recipe</button>
            </div>
        `;
        
        recipeContainer.appendChild(recipeCard);
        
        setTimeout(() => {
            recipeCard.style.opacity = '1';
            recipeCard.style.transform = 'translateY(0)';
        }, 100 * index);
        
        recipeCard.querySelector('.view-recipe-btn').addEventListener('click', () => {
            window.location.href = `recipe-detail.html?id=${recipe.id}`;
        });
    });
}

function initMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (!menuToggle || !navLinks) return;
    
    menuToggle.addEventListener('click', function() {
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        
        this.setAttribute('aria-expanded', !isExpanded);
        navLinks.classList.toggle('show');
        this.classList.toggle('active');
        
        document.body.style.overflow = isExpanded ? '' : 'hidden';
        
        if (!isExpanded) {
            const menuItems = navLinks.querySelectorAll('li');
            menuItems.forEach((item, index) => {
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, 100 + (index * 50));
            });
        }
    });
    
    document.addEventListener('click', function(event) {
        if (navLinks.classList.contains('show') && 
            !navLinks.contains(event.target) && 
            !menuToggle.contains(event.target)) {
            
            menuToggle.setAttribute('aria-expanded', 'false');
            navLinks.classList.remove('show');
            menuToggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    window.addEventListener('resize', function() {
        if (window.innerWidth > 992 && navLinks.classList.contains('show')) {
            menuToggle.setAttribute('aria-expanded', 'false');
            navLinks.classList.remove('show');
            menuToggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

function initSearchFunctionality() {
    const searchForm = document.querySelector('.search-box form');
    const searchInput = document.querySelector('.search-box input');
    
    if (!searchForm || !searchInput) return;
    
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const searchTerm = searchInput.value.trim();
        if (!searchTerm) {
            searchInput.classList.add('error');
            searchInput.focus();
            
            setTimeout(() => {
                searchInput.classList.remove('error');
            }, 1000);
            
            return;
        }
        
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalHTML = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            window.location.href = `../pages/search-results.html?q=${encodeURIComponent(searchTerm)}`;
            
            submitBtn.innerHTML = originalHTML;
            submitBtn.disabled = false;
        }, 500);
    });
    
    if (searchInput) {
        searchInput.addEventListener('input', debounce(function() {
            const searchTerm = this.value.trim();
            if (searchTerm.length < 2) return;
            
            fetchSearchSuggestions(searchTerm)
                .then(suggestions => {
                    displaySearchSuggestions(suggestions);
                })
                .catch(error => {
                    console.error('Error fetching search suggestions:', error);
                });
        }, 300));
    }
}

function fetchSearchSuggestions(searchTerm) {
    return new Promise((resolve) => {
        const suggestions = [
            `${searchTerm} recipe`,
            `How to cook ${searchTerm}`,
            `${searchTerm} ingredients`,
            `Easy ${searchTerm} dishes`
        ];
        
        resolve(suggestions);
    });
}

function displaySearchSuggestions(suggestions) {
    let suggestionsContainer = document.querySelector('.search-suggestions');
    
    if (!suggestionsContainer) {
        suggestionsContainer = document.createElement('div');
        suggestionsContainer.className = 'search-suggestions';
        document.querySelector('.search-box').appendChild(suggestionsContainer);
    }
    
    suggestionsContainer.innerHTML = '';
    
    suggestions.forEach(suggestion => {
        const item = document.createElement('div');
        item.className = 'suggestion-item';
        item.textContent = suggestion;
        
        item.addEventListener('click', function() {
            document.querySelector('.search-box input').value = suggestion;
            suggestionsContainer.innerHTML = '';
        });
        
        suggestionsContainer.appendChild(item);
    });
    
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.search-box')) {
            suggestionsContainer.innerHTML = '';
        }
    });
}

function handleActiveNavLinks() {
    const currentPath = window.location.pathname;
    const pageName = currentPath.split('/').pop();
    
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        
        if ((pageName === '' || pageName === 'index.html') && href === '../index.html') {
            link.setAttribute('aria-current', 'page');
        } else if (href && href.includes(pageName)) {
            link.setAttribute('aria-current', 'page');
        } else {
            link.removeAttribute('aria-current');
        }
    });
}

function initScrollEffects() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    if (animatedElements.length) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        animatedElements.forEach(element => {
            observer.observe(element);
        });
    }
    
    const backToTopBtn = document.createElement('button');
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopBtn.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(backToTopBtn);
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    let icon = '';
    switch (type) {
        case 'success':
            icon = '<i class="fas fa-check-circle"></i>';
            break;
        case 'error':
            icon = '<i class="fas fa-exclamation-circle"></i>';
            break;
        case 'info':
            icon = '<i class="fas fa-info-circle"></i>';
            break;
    }
    
    notification.innerHTML = `
        ${icon}
        <span>${message}</span>
        <button class="close-notification"><i class="fas fa-times"></i></button>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    notification.querySelector('.close-notification').addEventListener('click', () => {
        closeNotification(notification);
    });
    
    setTimeout(() => {
        closeNotification(notification);
    }, 5000);
}

function closeNotification(notification) {
    notification.classList.remove('show');
    notification.classList.add('hide');
    
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300);
}

function debounce(func, wait) {
    let timeout;
    return function(...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
}