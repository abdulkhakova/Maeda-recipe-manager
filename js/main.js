document.addEventListener('DOMContentLoaded', function() {
    initSearchFunctionality();
    initNavigation();
    initHeroButton();
    initCategoryCards();
    initLiveSessions();
    initModalHandling();
    initResponsiveFeatures();
    initIngredientSearch();
});

function initSearchFunctionality() {
    const searchBox = document.querySelector('.search-box input');
    const searchBtn = document.querySelector('.search-box button');
    
    if (!searchBox || !searchBtn) return;
    
    searchBtn.addEventListener('click', performSearch);
    
    searchBox.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    function performSearch() {
        const searchTerm = searchBox.value.trim();
        if (searchTerm) {
            showNotification(`Searching for: ${searchTerm}`);
        }
    }
}

function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === window.location.pathname || 
            window.location.pathname.includes(link.getAttribute('href')) && link.getAttribute('href') !== '#') {
            link.setAttribute('aria-current', 'page');
        }
    });
}

function initHeroButton() {
    const heroBtn = document.querySelector('.hero-btn');
    
    if (!heroBtn) return;
    
    heroBtn.addEventListener('click', function() {
        const ingredientSearch = document.querySelector('.ingredient-search');
        if (ingredientSearch) {
            ingredientSearch.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

function initCategoryCards() {
    const categoryCards = document.querySelectorAll('.category-card');
    
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const categoryName = this.querySelector('.category-name').textContent;
            showNotification(`Viewing ${categoryName} recipes`);
        });
    });
}

function initLiveSessions() {
    const joinButtons = document.querySelectorAll('.join-btn');
    
    joinButtons.forEach(button => {
        button.addEventListener('click', function() {
            const sessionCard = this.closest('.session-card');
            const sessionTitle = sessionCard.querySelector('h4').textContent;
            const sessionTime = sessionCard.querySelector('.session-time').textContent;
            
            showNotification(`You've registered for "${sessionTitle}" on ${sessionTime}`);
            
            this.textContent = 'Registered';
            this.classList.add('registered');
            this.disabled = true;
        });
    });
}

function initModalHandling() {
    const authModal = document.getElementById('auth-modal');
    const signInBtn = document.getElementById('sign-in-btn');
    const signUpBtn = document.getElementById('sign-up-btn');
    const closeModal = document.getElementById('close-modal');
    const switchToSignup = document.getElementById('switch-to-signup');
    const switchToSignin = document.getElementById('switch-to-signin');
    const signinForm = document.getElementById('signin-form');
    const signupForm = document.getElementById('signup-form');
    const signinContainer = document.getElementById('signin-container');
    const signupContainer = document.getElementById('signup-container');
    
    if (!authModal || !signInBtn || !closeModal) return;
    
    signInBtn.addEventListener('click', function() {
        openAuthModal('signin');
    });
    
    if (signUpBtn) {
        signUpBtn.addEventListener('click', function() {
            openAuthModal('signup');
        });
    }
    
    closeModal.addEventListener('click', closeAuthModal);
    
    window.addEventListener('click', function(e) {
        if (e.target === authModal) {
            closeAuthModal();
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && authModal.classList.contains('show')) {
            closeAuthModal();
        }
    });
    
    if (switchToSignup) {
        switchToSignup.addEventListener('click', function(e) {
            e.preventDefault();
            signinContainer.style.display = 'none';
            signupContainer.style.display = 'block';
        });
    }
    
    if (switchToSignin) {
        switchToSignin.addEventListener('click', function(e) {
            e.preventDefault();
            signupContainer.style.display = 'none';
            signinContainer.style.display = 'block';
        });
    }
    
    if (signinForm) {
        signinForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            clearErrors();
            
            const email = document.getElementById('signin-email').value;
            const password = document.getElementById('signin-password').value;
            const rememberMe = document.getElementById('remember-me').checked;
            
            let isValid = true;
            
            if (!validateEmail(email)) {
                showError('signin-email-error', 'Please enter a valid email address');
                isValid = false;
            }
            
            if (password.length < 6) {
                showError('signin-password-error', 'Password must be at least 6 characters');
                isValid = false;
            }
            
            if (isValid) {
                showLoading(signinForm.querySelector('.auth-btn'));
                
                setTimeout(() => {
                    closeAuthModal();
                    showNotification('Login successful!');
                    updateLoggedInUI(email);
                    
                    signinForm.reset();
                }, 1000);
            }
        });
    }
    
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            clearErrors();
            
            const name = document.getElementById('signup-name').value;
            const email = document.getElementById('signup-email').value;
            const password = document.getElementById('signup-password').value;
            const termsAgreed = document.getElementById('terms-agree').checked;
            
            let isValid = true;
            
            if (name.trim().length < 3) {
                showError('signup-name-error', 'Please enter your full name');
                isValid = false;
            }
            
            if (!validateEmail(email)) {
                showError('signup-email-error', 'Please enter a valid email address');
                isValid = false;
            }
            
            if (password.length < 8) {
                showError('signup-password-error', 'Password must be at least 8 characters');
                isValid = false;
            }
            
            if (!termsAgreed) {
                showError('terms-error', 'You must agree to the Terms of Service');
                isValid = false;
            }
            
            if (isValid) {
                showLoading(signupForm.querySelector('.auth-btn'));
                
                setTimeout(() => {
                    closeAuthModal();
                    showNotification('Account created successfully!');
                    updateLoggedInUI(email);
                    
                    signupForm.reset();
                }, 1000);
            }
        });
        
        const passwordInput = document.getElementById('signup-password');
        const strengthBar = document.getElementById('password-strength-bar');
        const strengthText = document.getElementById('password-strength-text');
        
        passwordInput.addEventListener('input', function() {
            const strength = checkPasswordStrength(this.value);
            updatePasswordStrengthUI(strength, strengthBar, strengthText);
        });
    }
    
    const toggleButtons = document.querySelectorAll('.toggle-password');
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const passwordInput = this.previousElementSibling;
            const icon = this.querySelector('i');
            
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                passwordInput.type = 'password';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        });
    });
    
    const socialButtons = document.querySelectorAll('.social-login-btn');
    socialButtons.forEach(button => {
        button.addEventListener('click', function() {
            const provider = this.getAttribute('aria-label').replace('Sign in with ', '').replace('Sign up with ', '');
            showNotification(`Logging in with ${provider}`);
            
            setTimeout(() => {
                closeAuthModal();
                updateLoggedInUI(`user@${provider.toLowerCase()}.com`);
            }, 1000);
        });
    });
}

function openAuthModal(mode) {
    const authModal = document.getElementById('auth-modal');
    const signinContainer = document.getElementById('signin-container');
    const signupContainer = document.getElementById('signup-container');
    
    if (!authModal) return;
    
    document.getElementById('signin-form')?.reset();
    document.getElementById('signup-form')?.reset();
    clearErrors();
    
    if (mode === 'signup') {
        signinContainer.style.display = 'none';
        signupContainer.style.display = 'block';
    } else {
        signinContainer.style.display = 'block';
        signupContainer.style.display = 'none';
    }
    
    authModal.style.display = 'flex';
    authModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    
    setTimeout(() => {
        authModal.classList.add('show');
    }, 10);
}

function closeAuthModal() {
    const authModal = document.getElementById('auth-modal');
    if (!authModal) return;
    
    authModal.classList.remove('show');
    
    setTimeout(() => {
        authModal.style.display = 'none';
        authModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }, 300);
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
}

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = message;
        
        const inputId = elementId.replace('-error', '');
        const inputElement = document.getElementById(inputId);
        if (inputElement) {
            inputElement.classList.add('error');
        }
    }
}

function clearErrors() {
    const errorElements = document.querySelectorAll('.error-message');
    const inputElements = document.querySelectorAll('.auth-form input');
    
    errorElements.forEach(el => el.textContent = '');
    inputElements.forEach(el => el.classList.remove('error'));
}

function showLoading(button) {
    const originalText = button.textContent;
    button.disabled = true;
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
    
    setTimeout(() => {
        if (button.disabled) {
            button.disabled = false;
            button.textContent = originalText;
        }
    }, 5000);
}

function checkPasswordStrength(password) {
    if (!password) return 0;
    
    let strength = 0;
    
    if (password.length >= 8) strength += 25;
    
    if (/[a-z]/.test(password)) strength += 25;
    
    if (/[A-Z]/.test(password)) strength += 25;
    
    if (/[0-9!@#$%^&*(),.?":{}|<>]/.test(password)) strength += 25;
    
    return strength;
}

function updatePasswordStrengthUI(strength, bar, text) {
    bar.style.width = `${strength}%`;
    
    if (strength < 25) {
        bar.style.backgroundColor = '#e74c3c';
        text.textContent = 'Very weak';
    } else if (strength < 50) {
        bar.style.backgroundColor = '#e67e22';
        text.textContent = 'Weak';
    } else if (strength < 75) {
        bar.style.backgroundColor = '#f1c40f';
        text.textContent = 'Medium';
    } else if (strength < 100) {
        bar.style.backgroundColor = '#2ecc71';
        text.textContent = 'Strong';
    } else {
        bar.style.backgroundColor = '#27ae60';
        text.textContent = 'Very strong';
    }
}

function initResponsiveFeatures() {
    const navbar = document.querySelector('.navbar');
    
    if (!navbar) return;
    
    if (window.innerWidth <= 768 && !document.querySelector('.mobile-menu-toggle')) {
        const mobileMenuToggle = document.createElement('button');
        mobileMenuToggle.className = 'mobile-menu-toggle';
        mobileMenuToggle.setAttribute('aria-label', 'Toggle navigation menu');
        mobileMenuToggle.innerHTML = '☰';
        
        navbar.insertBefore(mobileMenuToggle, navbar.firstChild);
        
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.add('mobile-hidden');
        
        mobileMenuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('mobile-hidden');
            this.innerHTML = navLinks.classList.contains('mobile-hidden') ? '☰' : '✕';
        });
    }
    
    window.addEventListener('resize', function() {
        const navLinks = document.querySelector('.nav-links');
        
        if (window.innerWidth > 768) {
            if (navLinks.classList.contains('mobile-hidden')) {
                navLinks.classList.remove('mobile-hidden');
            }
        }
    });
}

function initIngredientSearch() {
    const ingredientInput = document.querySelector('.ingredient-input');
    const addIngredientBtn = document.querySelector('.add-ingredient-btn');
    const ingredientTags = document.querySelector('.ingredient-tags');
    const searchRecipesBtn = document.querySelector('.search-recipes-btn');
    const removeTags = document.querySelectorAll('.remove-tag');
    
    if (!ingredientInput || !addIngredientBtn || !ingredientTags || !searchRecipesBtn) return;
    
    removeTags.forEach(btn => {
        btn.addEventListener('click', function() {
            const tag = this.closest('.ingredient-tag');
            const ingredientName = tag.textContent.trim().replace('×', '').trim();
            tag.remove();
            showNotification(`Removed ${ingredientName}`);
        });
    });
    
    addIngredientBtn.addEventListener('click', addIngredient);
    
    ingredientInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addIngredient();
        }
    });
    
    function addIngredient() {
        const ingredient = ingredientInput.value.trim();
        if (ingredient) {
            const tag = document.createElement('span');
            tag.className = 'ingredient-tag';
            tag.innerHTML = `${ingredient} <button class="remove-tag" aria-label="Remove ${ingredient}"><i class="fas fa-times"></i></button>`;
            
            const removeBtn = tag.querySelector('.remove-tag');
            removeBtn.addEventListener('click', function() {
                tag.remove();
                showNotification(`Removed ${ingredient}`);
            });
            
            ingredientTags.appendChild(tag);
            ingredientInput.value = '';
            ingredientInput.focus();
            
            showNotification(`Added ${ingredient}`);
        }
    }
    
    searchRecipesBtn.addEventListener('click', function() {
        const tags = document.querySelectorAll('.ingredient-tag');
        if (tags.length > 0) {
            const ingredients = Array.from(tags).map(tag => 
                tag.textContent.trim().replace('×', '').trim()
            );
            
            showNotification(`Searching recipes with: ${ingredients.join(', ')}`);
        } else {
            showNotification('Please add at least one ingredient');
        }
    });
}

function showNotification(message) {
    let notification = document.querySelector('.notification');
    
    if (!notification) {
        notification = document.createElement('div');
        notification.className = 'notification';
        document.body.appendChild(notification);
    }
    
    notification.textContent = message;
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

function updateLoggedInUI(email) {
    const userControls = document.querySelector('.user-controls');
    if (!userControls) return;
    
    userControls.innerHTML = '';
    
    const userProfile = document.createElement('div');
    userProfile.className = 'user-profile';
    
    const userInitial = document.createElement('div');
    userInitial.className = 'user-initial';
    userInitial.textContent = email.charAt(0).toUpperCase();
    
    const userName = document.createElement('span');
    userName.className = 'user-name';
    userName.textContent = email.split('@')[0];
    
    const dropdown = document.createElement('div');
    dropdown.className = 'dropdown-menu';
    
    const menuItems = [
        { text: 'My Profile', icon: 'fa-user', action: () => { showNotification('Profile page coming soon'); } },
        { text: 'My Recipes', icon: 'fa-utensils', action: () => { showNotification('My recipes coming soon'); } },
        { text: 'Saved Items', icon: 'fa-bookmark', action: () => { showNotification('Saved items coming soon'); } },
        { text: 'Settings', icon: 'fa-cog', action: () => { showNotification('Settings coming soon'); } },
        { text: 'Log Out', icon: 'fa-sign-out-alt', action: logOut }
    ];
    
    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'dropdown-item';
        menuItem.innerHTML = `<i class="fas ${item.icon}"></i> ${item.text}`;
        menuItem.addEventListener('click', item.action);
        dropdown.appendChild(menuItem);
    });
    
    userProfile.appendChild(userInitial);
    userProfile.appendChild(userName);
    userProfile.appendChild(dropdown);
    userControls.appendChild(userProfile);
    
    userProfile.addEventListener('click', function(e) {
        e.stopPropagation();
        dropdown.classList.toggle('show');
    });
    
    document.addEventListener('click', function() {
        dropdown.classList.remove('show');
    });
}

function logOut() {
    showNotification('You have been logged out');
    
    const userControls = document.querySelector('.user-controls');
    if (!userControls) return;
    
    userControls.innerHTML = `
        <button class="sign-in-btn" id="sign-in-btn">Sign In</button>
        <button class="sign-up-btn" id="sign-up-btn">Sign Up</button>
    `;
    
    initModalHandling();
}