document.addEventListener('DOMContentLoaded', function() {
    initModals();
    initAuthForms();
    initPasswordToggle();
    initSocialLogin();
    initRememberMe();
    initForgotPassword();
});

function initModals() {
    const modals = document.querySelectorAll('.modal');
    
    modals.forEach(modal => {
        const modalId = modal.id;
        const openButtons = document.querySelectorAll(`[data-modal="${modalId}"]`);
        const closeButtons = modal.querySelectorAll('.close-modal, .modal-cancel');
        
        openButtons.forEach(btn => {
            btn.addEventListener('click', () => openModal(modal));
        });
        
        closeButtons.forEach(btn => {
            btn.addEventListener('click', () => closeModal(modal));
        });
        
        window.addEventListener('click', e => {
            if (e.target === modal) closeModal(modal);
        });
        
        window.addEventListener('keydown', e => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeModal(modal);
            }
        });
    });
    
    const signInBtn = document.getElementById('sign-in-btn');
    const loginModal = document.getElementById('login-modal');
    
    if (signInBtn && loginModal) {
        signInBtn.addEventListener('click', () => openModal(loginModal));
    }
}

function openModal(modal) {
    document.body.style.overflow = 'hidden';
    modal.style.display = 'flex';
    
    setTimeout(() => {
        modal.classList.add('active');
        
        const focusableElement = modal.querySelector('input:not([disabled]), button:not([disabled])');
        if (focusableElement) focusableElement.focus();
        
        const modalContent = modal.querySelector('.modal-content');
        if (modalContent) modalContent.classList.add('slide-in');
    }, 10);
}

function closeModal(modal) {
    modal.classList.remove('active');
    
    const modalContent = modal.querySelector('.modal-content');
    if (modalContent) modalContent.classList.remove('slide-in');
    
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }, 300);
}

function initAuthForms() {
    const loginForm = document.querySelector('.login-form');
    const registerForm = document.querySelector('.register-form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (!validateForm(this)) return;
            
            const email = this.querySelector('input[type="email"]').value;
            const password = this.querySelector('input[type="password"]').value;
            const rememberMe = this.querySelector('input[type="checkbox"]')?.checked;
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span class="spinner"></span> Signing in...';
            
            simulateAuth(email, password, rememberMe)
                .then(response => {
                    showNotification('Successfully logged in!', 'success');
                    updateUIAfterLogin(response.user);
                    closeModal(document.getElementById('login-modal'));
                })
                .catch(error => {
                    showNotification(error.message, 'error');
                    const passwordField = this.querySelector('input[type="password"]');
                    passwordField.classList.add('error');
                    passwordField.focus();
                })
                .finally(() => {
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalText;
                });
        });
    }
    
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (!validateForm(this)) return;
            
            const email = this.querySelector('input[type="email"]').value;
            const password = this.querySelector('input[type="password"]').value;
            const name = this.querySelector('input[name="name"]').value;
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span class="spinner"></span> Creating account...';
            
            simulateRegistration(email, password, name)
                .then(response => {
                    showNotification('Account created successfully!', 'success');
                    updateUIAfterLogin(response.user);
                    closeModal(document.getElementById('register-modal'));
                })
                .catch(error => {
                    showNotification(error.message, 'error');
                })
                .finally(() => {
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalText;
                });
        });
    }
    
    const registerLink = document.querySelector('.register-link');
    const loginLink = document.querySelector('.login-link');
    
    if (registerLink) {
        registerLink.addEventListener('click', function(e) {
            e.preventDefault();
            closeModal(document.getElementById('login-modal'));
            
            setTimeout(() => {
                openModal(document.getElementById('register-modal'));
            }, 350);
        });
    }
    
    if (loginLink) {
        loginLink.addEventListener('click', function(e) {
            e.preventDefault();
            closeModal(document.getElementById('register-modal'));
            
            setTimeout(() => {
                openModal(document.getElementById('login-modal'));
            }, 350);
        });
    }
}

function validateForm(form) {
    const inputs = form.querySelectorAll('input[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        input.classList.remove('error');
        
        if (!input.value.trim()) {
            input.classList.add('error');
            input.focus();
            isValid = false;
        }
        
        if (input.type === 'email' && !isValidEmail(input.value)) {
            input.classList.add('error');
            input.focus();
            isValid = false;
        }
        
        if (input.type === 'password' && input.value.length < 6) {
            input.classList.add('error');
            input.focus();
            isValid = false;
        }
    });
    
    const password = form.querySelector('input[name="password"]');
    const confirmPassword = form.querySelector('input[name="confirm-password"]');
    
    if (password && confirmPassword && password.value !== confirmPassword.value) {
        confirmPassword.classList.add('error');
        showNotification('Passwords do not match', 'error');
        isValid = false;
    }
    
    if (!isValid) {
        showNotification('Please fill in all required fields correctly', 'error');
    }
    
    return isValid;
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function simulateAuth(email, password, rememberMe) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (password === 'password123') {
                resolve({
                    user: {
                        email: email,
                        name: email.split('@')[0],
                        avatar: 'https://ui-avatars.com/api/?name=' + email.split('@')[0]
                    }
                });
            } else {
                reject({ message: 'Invalid email or password' });
            }
        }, 1500);
    });
}

function simulateRegistration(email, password, name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email.includes('existing')) {
                reject({ message: 'Email already in use' });
            } else {
                resolve({
                    user: {
                        email: email,
                        name: name,
                        avatar: 'https://ui-avatars.com/api/?name=' + name.replace(' ', '+')
                    }
                });
            }
        }, 1500);
    });
}

function updateUIAfterLogin(user) {
    const authSection = document.querySelector('.auth-section');
    const userSection = document.querySelector('.user-section');
    
    if (authSection && userSection) {
        authSection.style.display = 'none';
        userSection.style.display = 'flex';
        
        const userAvatar = userSection.querySelector('.user-avatar');
        const userName = userSection.querySelector('.user-name');
        
        if (userAvatar) userAvatar.src = user.avatar;
        if (userName) userName.textContent = user.name;
    }
    
    const userMenuBtn = document.querySelector('.user-menu-btn');
    if (userMenuBtn) {
        userMenuBtn.addEventListener('click', function() {
            const userMenu = document.querySelector('.user-menu');
            userMenu.classList.toggle('show');
            
            document.addEventListener('click', function closeMenu(e) {
                if (!userMenuBtn.contains(e.target) && !userMenu.contains(e.target)) {
                    userMenu.classList.remove('show');
                    document.removeEventListener('click', closeMenu);
                }
            });
        });
    }
    
    const logoutBtn = document.querySelector('.logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            if (authSection && userSection) {
                userSection.style.display = 'none';
                authSection.style.display = 'flex';
            }
            
            showNotification('You have been logged out', 'info');
        });
    }
}

function initPasswordToggle() {
    const passwordFields = document.querySelectorAll('.password-field');
    
    passwordFields.forEach(field => {
        const input = field.querySelector('input');
        const toggleBtn = document.createElement('button');
        toggleBtn.type = 'button';
        toggleBtn.className = 'password-toggle';
        toggleBtn.innerHTML = '<i class="fas fa-eye"></i>';
        toggleBtn.setAttribute('aria-label', 'Toggle password visibility');
        
        field.appendChild(toggleBtn);
        
        toggleBtn.addEventListener('click', function() {
            const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
            input.setAttribute('type', type);
            
            this.innerHTML = type === 'password' ? 
                '<i class="fas fa-eye"></i>' : 
                '<i class="fas fa-eye-slash"></i>';
        });
    });
}

function initSocialLogin() {
    const socialButtons = document.querySelectorAll('.social-login button');
    
    socialButtons.forEach(button => {
        button.addEventListener('click', function() {
            const provider = this.getAttribute('data-provider');
            const originalHTML = this.innerHTML;
            
            this.disabled = true;
            this.innerHTML = '<span class="spinner"></span> Connecting...';
            
            setTimeout(() => {
                this.disabled = false;
                this.innerHTML = originalHTML;
                
                showNotification(`${provider} login is not implemented in this demo`, 'info');
            }, 2000);
        });
    });
}

function initRememberMe() {
    const rememberMe = document.querySelector('.remember-me input');
    
    if (rememberMe) {
        const savedState = localStorage.getItem('rememberMe') === 'true';
        rememberMe.checked = savedState;
        
        rememberMe.addEventListener('change', function() {
            localStorage.setItem('rememberMe', this.checked);
        });
    }
}

function initForgotPassword() {
    const forgotPasswordLink = document.querySelector('.forgot-password');
    
    if (forgotPasswordLink) {
        forgotPasswordLink.addEventListener('click', function(e) {
            e.preventDefault();
            
            const loginModal = document.getElementById('login-modal');
            const forgotModal = document.getElementById('forgot-password-modal');
            
            if (loginModal && forgotModal) {
                closeModal(loginModal);
                
                setTimeout(() => {
                    openModal(forgotModal);
                }, 350);
            }
        });
    }
    
    const forgotForm = document.querySelector('.forgot-password-form');
    
    if (forgotForm) {
        forgotForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            
            if (!email || !isValidEmail(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span class="spinner"></span> Sending...';
            
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
                
                showNotification(`Password reset link sent to ${email}`, 'success');
                closeModal(document.getElementById('forgot-password-modal'));
            }, 2000);
        });
    }
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