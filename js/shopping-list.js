
document.addEventListener('DOMContentLoaded', function() {
    initDeliveryProviders();
    initLocationButton();
    initCategoryFilters();
    initQuantityControls();
    initShoppingCart();
    initCheckoutProcess();
});

function initDeliveryProviders() {
    const deliveryProviders = document.querySelectorAll('.delivery-provider');
    if (!deliveryProviders.length) return;
    
    deliveryProviders.forEach(provider => {
        provider.addEventListener('click', function() {
            deliveryProviders.forEach(p => p.classList.remove('active'));
            this.classList.add('active');
            
            const providerName = this.getAttribute('data-provider');
            const timeElement = document.querySelector('.delivery-time strong');
            
            const deliveryTimes = {
                'yandex': '15-30 minutes',
                'samokat': '30-45 minutes',
                'sbermarket': '45-60 minutes'
            };
            
            timeElement.textContent = deliveryTimes[providerName] || '15-60 minutes';
        });
    });
}

function initLocationButton() {
    const useLocationBtn = document.getElementById('use-location');
    if (!useLocationBtn) return;
    
    useLocationBtn.addEventListener('click', function() {
        if (!navigator.geolocation) {
            showNotification('Geolocation is not supported by your browser.', 'error');
            return;
        }
        
        const originalText = useLocationBtn.innerHTML;
        useLocationBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Getting location...';
        useLocationBtn.disabled = true;
        
        navigator.geolocation.getCurrentPosition(
            function(position) {
                const addressInput = document.getElementById('delivery-address-input');
                addressInput.value = 'Tashkent, Uzbekistan, 100000';
                addressInput.classList.add('location-found');
                
                useLocationBtn.innerHTML = originalText;
                useLocationBtn.disabled = false;
                
                showNotification('Location detected successfully!', 'success');
            },
            function(error) {
                showNotification('Unable to get your location. Please enter your address manually.', 'error');
                useLocationBtn.innerHTML = originalText;
                useLocationBtn.disabled = false;
                console.error('Geolocation error:', error);
            },
            { timeout: 10000, enableHighAccuracy: true }
        );
    });
}

function initCategoryFilters() {
    const deliveryCategories = document.querySelectorAll('.delivery-category');
    const deliveryItems = document.querySelectorAll('.delivery-item');
    
    if (!deliveryCategories.length || !deliveryItems.length) return;
    
    deliveryCategories.forEach(category => {
        category.addEventListener('click', function() {
            deliveryCategories.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            
            const selectedCategory = this.getAttribute('data-category');
            
            deliveryItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                
                if (selectedCategory === 'all' || itemCategory === selectedCategory) {
                    item.style.display = '';
                    item.classList.add('animate-item');
                    setTimeout(() => item.classList.remove('animate-item'), 300);
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

function initQuantityControls() {
    const quantityControls = document.querySelectorAll('.quantity-control');
    if (!quantityControls.length) return;
    
    quantityControls.forEach(control => {
        const minusBtn = control.querySelector('.minus');
        const plusBtn = control.querySelector('.plus');
        const input = control.querySelector('input');
        
        minusBtn.addEventListener('click', function() {
            let value = parseInt(input.value);
            if (value > 1) {
                input.value = value - 1;
                input.dispatchEvent(new Event('change'));
            }
            
            updateButtonState(minusBtn, value - 1 <= 1);
            updateButtonState(plusBtn, value - 1 >= 10);
        });
        
        plusBtn.addEventListener('click', function() {
            let value = parseInt(input.value);
            if (value < 10) {
                input.value = value + 1;
                input.dispatchEvent(new Event('change'));
            }
            
            updateButtonState(minusBtn, value + 1 <= 1);
            updateButtonState(plusBtn, value + 1 >= 10);
        });
        
        input.addEventListener('change', function() {
            let value = parseInt(this.value);
            
            if (isNaN(value) || value < 1) {
                this.value = 1;
                value = 1;
            } else if (value > 10) {
                this.value = 10;
                value = 10;
            }
            
            updateButtonState(minusBtn, value <= 1);
            updateButtonState(plusBtn, value >= 10);
        });
        
        function updateButtonState(button, shouldDisable) {
            button.classList.toggle('disabled', shouldDisable);
            button.setAttribute('aria-disabled', shouldDisable);
        }
    });
}

let cartItems = [];
let deliveryFeeThreshold = 100000;
let standardDeliveryFee = 9900;

function initShoppingCart() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const addMissingButtons = document.querySelectorAll('.add-missing');
    const addAllMissingBtn = document.querySelector('.add-all-missing');
    
    if (addToCartButtons.length) {
        addToCartButtons.forEach(button => {
            button.addEventListener('click', function() {
                const item = this.closest('.delivery-item');
                const itemImg = item.querySelector('.delivery-item-img img').src;
                const itemName = item.querySelector('h4').textContent;
                const itemPrice = item.querySelector('.current-price').textContent;
                const itemQuantity = parseInt(item.querySelector('.quantity-control input').value);
                
                addItemToCart(itemName, itemPrice, itemImg, itemQuantity);
                
                animateAddToCart(item);
                showNotification(`Added ${itemQuantity} × ${itemName} to your cart`, 'success');
            });
        });
    }
    
    if (addMissingButtons.length) {
        addMissingButtons.forEach(button => {
            button.addEventListener('click', function() {
                const item = this.closest('.missing-item');
                const itemName = item.querySelector('.missing-name').textContent;
                const itemPrice = item.querySelector('.missing-price').textContent;
                
                addItemToCart(itemName, itemPrice, '../images/products/placeholder.jpg', 1);
                
                this.disabled = true;
                this.innerHTML = '<i class="fas fa-check"></i> Added';
                this.classList.add('added');
                
                item.classList.add('item-added');
            });
        });
    }
    
    if (addAllMissingBtn) {
        addAllMissingBtn.addEventListener('click', function() {
            const missingItems = document.querySelectorAll('.missing-item');
            let addedCount = 0;
            
            missingItems.forEach(item => {
                const button = item.querySelector('.add-missing');
                if (!button.disabled) {
                    button.click();
                    addedCount++;
                }
            });
            
            if (addedCount > 0) {
                showNotification(`Added ${addedCount} items to your cart`, 'success');
            } else {
                showNotification('All items already in cart', 'info');
            }
        });
    }
}

function addItemToCart(name, price, img, quantity) {
    const existingItemIndex = cartItems.findIndex(item => item.name === name);
    
    if (existingItemIndex !== -1) {
        const newQuantity = cartItems[existingItemIndex].quantity + quantity;
        cartItems[existingItemIndex].quantity = Math.min(newQuantity, 10);
    } else {
        cartItems.push({
            img: img,
            name: name,
            price: price,
            quantity: quantity
        });
    }
    
    updateCart();
    saveCartToLocalStorage();
}

function updateCart() {
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartCount = document.querySelector('.cart-count');
    const subtotalElement = document.querySelector('.subtotal');
    const totalPriceElement = document.querySelector('.total-price');
    const checkoutBtn = document.querySelector('.checkout-btn');
    const emptyCartMessage = document.querySelector('.empty-cart-message');
    
    if (!cartItemsContainer || !cartCount || !subtotalElement || !totalPriceElement || !checkoutBtn || !emptyCartMessage) return;
    
    // Clear existing items
    const existingItems = cartItemsContainer.querySelectorAll('.cart-item');
    existingItems.forEach(item => item.remove());
    
    if (cartItems.length === 0) {
        emptyCartMessage.style.display = 'block';
        checkoutBtn.disabled = true;
        cartCount.textContent = '0';
        subtotalElement.textContent = '0 UZS';
        totalPriceElement.textContent = formatCurrency(standardDeliveryFee);
        document.querySelector('.delivery-fee').textContent = formatCurrency(standardDeliveryFee);
        return;
    }
    
    emptyCartMessage.style.display = 'none';
    checkoutBtn.disabled = false;
    
    let subtotal = 0;
    
    cartItems.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        
        const priceValue = parseCurrency(item.price);
        const itemTotal = priceValue * item.quantity;
        subtotal += itemTotal;
        
        cartItem.innerHTML = `
            <div class="cart-item-img">
                <img src="${item.img}" alt="${item.name}" loading="lazy">
            </div>
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">${item.price} × ${item.quantity}</div>
            </div>
            <div class="cart-item-quantity">
                <button class="cart-quantity-btn minus" data-index="${index}" aria-label="Decrease quantity" ${item.quantity <= 1 ? 'disabled' : ''}><i class="fas fa-minus"></i></button>
                <span class="cart-quantity-value">${item.quantity}</span>
                <button class="cart-quantity-btn plus" data-index="${index}" aria-label="Increase quantity" ${item.quantity >= 10 ? 'disabled' : ''}><i class="fas fa-plus"></i></button>
                <button class="remove-cart-item" data-index="${index}" aria-label="Remove item"><i class="fas fa-times"></i></button>
            </div>
        `;
        
        cartItemsContainer.insertBefore(cartItem, emptyCartMessage);
    });
    
    cartCount.textContent = cartItems.length.toString();
    subtotalElement.textContent = formatCurrency(subtotal);
    
    const deliveryFee = subtotal >= deliveryFeeThreshold ? 0 : standardDeliveryFee;
    document.querySelector('.delivery-fee').textContent = deliveryFee === 0 ? 'Free' : formatCurrency(deliveryFee);
    totalPriceElement.textContent = formatCurrency(subtotal + deliveryFee);
    
    addCartItemListeners();
}

function addCartItemListeners() {
    const minusButtons = document.querySelectorAll('.cart-quantity-btn.minus');
    const plusButtons = document.querySelectorAll('.cart-quantity-btn.plus');
    const removeButtons = document.querySelectorAll('.remove-cart-item');
    
    minusButtons.forEach(button => {
        button.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            if (cartItems[index].quantity > 1) {
                cartItems[index].quantity -= 1;
                updateCart();
                saveCartToLocalStorage();
            }
        });
    });
    
    plusButtons.forEach(button => {
        button.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            if (cartItems[index].quantity < 10) {
                cartItems[index].quantity += 1;
                updateCart();
                saveCartToLocalStorage();
            }
        });
    });
    
    removeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            const itemName = cartItems[index].name;
            
            cartItems.splice(index, 1);
            updateCart();
            saveCartToLocalStorage();
            
            showNotification(`Removed ${itemName} from your cart`, 'info');
            
            // Reset "Add" buttons for removed items in the "missing items" section
            const missingItems = document.querySelectorAll('.missing-item');
            missingItems.forEach(item => {
                const nameElement = item.querySelector('.missing-name');
                if (nameElement && nameElement.textContent === itemName) {
                    const addButton = item.querySelector('.add-missing');
                    if (addButton) {
                        addButton.disabled = false;
                        addButton.innerHTML = '<i class="fas fa-plus"></i> Add';
                        addButton.classList.remove('added');
                        item.classList.remove('item-added');
                    }
                }
            });
        });
    });
}

function initCheckoutProcess() {
    // Fixed: Properly select all necessary elements
    const checkoutBtn = document.querySelector('.checkout-btn');
    const checkoutModal = document.getElementById('checkout-modal');
    const closeCheckoutModal = document.getElementById('close-checkout-modal');
    const cancelCheckoutBtn = document.getElementById('cancel-checkout');
    const nextStep1Btn = document.getElementById('next-step-1');
    const backStep2Btn = document.getElementById('back-step-2');
    const nextStep2Btn = document.getElementById('next-step-2');
    const closeConfirmationBtn = document.getElementById('close-confirmation');
    
    // Fixed: Additional check to ensure all elements are properly selected
    if (!checkoutBtn) {
        console.error('Checkout button not found');
        return;
    }
    
    if (!checkoutModal) {
        console.error('Checkout modal not found');
        return;
    }
    
    // Fixed: Improved checkout button click handler
    checkoutBtn.addEventListener('click', function() {
        if (this.disabled) {
            return;
        }
        
        if (cartItems.length > 0) {
            const addressInput = document.getElementById('delivery-address-input');
            if (addressInput && addressInput.value) {
                const completeAddressInput = document.getElementById('complete-address');
                if (completeAddressInput) {
                    completeAddressInput.value = addressInput.value;
                }
            }
            
            // Fixed: Reset checkout steps to start from step 1
            goToCheckoutStep(1);
            
            // Fixed: More robust modal display
            checkoutModal.hidden = false;
            checkoutModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            
            setTimeout(() => {
                checkoutModal.classList.add('show');
            }, 10);
        } else {
            showNotification('Your cart is empty', 'error');
        }
    });
    
    if (closeCheckoutModal) {
        closeCheckoutModal.addEventListener('click', function() {
            closeCheckoutModalFn();
        });
    }
    
    if (cancelCheckoutBtn) {
        cancelCheckoutBtn.addEventListener('click', function() {
            closeCheckoutModalFn();
        });
    }
    
    if (nextStep1Btn) {
        nextStep1Btn.addEventListener('click', function() {
            const fullName = document.getElementById('full-name').value;
            const phoneNumber = document.getElementById('phone-number').value;
            const address = document.getElementById('complete-address').value;
            
            if (!fullName || !phoneNumber || !address) {
                showNotification('Please fill in all required fields', 'error');
                highlightEmptyFields(['full-name', 'phone-number', 'complete-address']);
                return;
            }
            
            goToCheckoutStep(2);
        });
    }
    
    if (backStep2Btn) {
        backStep2Btn.addEventListener('click', function() {
            goToCheckoutStep(1);
        });
    }
    
    if (nextStep2Btn) {
        nextStep2Btn.addEventListener('click', function() {
            const paymentMethod = document.querySelector('input[name="payment-method"]:checked');
            if (!paymentMethod) {
                showNotification('Please select a payment method', 'error');
                return;
            }
            
            let paymentText;
            switch (paymentMethod.id) {
                case 'card-payment':
                    if (validateCardDetails()) {
                        paymentText = 'Credit/Debit Card';
                    } else {
                        return;
                    }
                    break;
                case 'cash-payment':
                    paymentText = 'Cash on Delivery';
                    break;
                case 'online-payment':
                    paymentText = 'Online Payment';
                    break;
                default:
                    paymentText = 'Unknown';
            }
            
            // Update confirmation details
            const confirmationAddress = document.getElementById('confirmation-address');
            const confirmationPayment = document.getElementById('confirmation-payment');
            
            if (confirmationAddress) {
                confirmationAddress.textContent = document.getElementById('complete-address').value;
            }
            
            if (confirmationPayment) {
                confirmationPayment.textContent = paymentText;
            }
            
            goToCheckoutStep(3);
            
            // Clear cart after successful order
            setTimeout(() => {
                cartItems = [];
                updateCart();
                saveCartToLocalStorage();
            }, 1000);
        });
    }
    
    if (closeConfirmationBtn) {
        closeConfirmationBtn.addEventListener('click', function() {
            closeCheckoutModalFn();
        });
    }
    
    // Fixed: Improved modal closing function
    function closeCheckoutModalFn() {
        checkoutModal.classList.remove('show');
        setTimeout(() => {
            checkoutModal.style.display = 'none';
            checkoutModal.hidden = true;
            document.body.style.overflow = '';
            
            // Reset form fields when modal closes
            const formFields = checkoutModal.querySelectorAll('input, textarea');
            formFields.forEach(field => {
                if (field.type !== 'radio') {
                    field.value = '';
                }
                field.classList.remove('error');
            });
            
            // Reset to step 1 for next opening
            goToCheckoutStep(1);
        }, 300);
    }
    
    // Fixed: Ensure modal close on outside click
    window.addEventListener('click', function(e) {
        if (e.target === checkoutModal) {
            closeCheckoutModalFn();
        }
    });
    
    // Payment method change handler
    document.querySelectorAll('input[name="payment-method"]').forEach(radio => {
        radio.addEventListener('change', function() {
            const cardDetails = document.querySelector('.card-details');
            if (cardDetails) {
                cardDetails.style.display = this.id === 'card-payment' ? 'block' : 'none';
            }
        });
    });
    
    // Load cart from localStorage on page load
    loadCartFromLocalStorage();
}

function goToCheckoutStep(step) {
    // Update step indicators
    document.querySelectorAll('.checkout-step').forEach(s => {
        s.classList.remove('active');
        if (parseInt(s.getAttribute('data-step')) < step) {
            s.classList.add('completed');
        } else {
            s.classList.remove('completed');
        }
    });
    
    const activeStep = document.querySelector(`.checkout-step[data-step="${step}"]`);
    if (activeStep) {
        activeStep.classList.add('active');
    }
    
    // Update step content visibility
    document.querySelectorAll('.checkout-step-content').forEach(c => {
        c.classList.remove('active');
    });
    
    const activeContent = document.querySelector(`.checkout-step-content[data-step="${step}"]`);
    if (activeContent) {
        activeContent.classList.add('active');
    }
}

function validateCardDetails() {
    // Skip validation if not using card payment
    const selectedPayment = document.querySelector('input[name="payment-method"]:checked');
    if (!selectedPayment || selectedPayment.id !== 'card-payment') {
        return true;
    }
    
    const cardNumber = document.getElementById('card-number');
    const expiryDate = document.getElementById('expiry-date');
    const cvv = document.getElementById('cvv');
    const cardName = document.getElementById('card-name');
    
    if (!cardNumber || !expiryDate || !cvv || !cardName) {
        showNotification('Card form fields are missing', 'error');
        return false;
    }
    
    let isValid = true;
    const fieldsToCheck = [];
    
    // Basic validation for card number (16 digits, can have spaces)
    if (!cardNumber.value || !cardNumber.value.replace(/\s/g, '').match(/^\d{16}$/)) {
        fieldsToCheck.push('card-number');
        isValid = false;
    }
    
    // Expiry date format MM/YY
    if (!expiryDate.value || !expiryDate.value.match(/^(0[1-9]|1[0-2])\/([0-9]{2})$/)) {
        fieldsToCheck.push('expiry-date');
        isValid = false;
    }
    
    // CVV is 3 digits
    if (!cvv.value || !cvv.value.match(/^\d{3}$/)) {
        fieldsToCheck.push('cvv');
        isValid = false;
    }
    
    // Name on card shouldn't be empty
    if (!cardName.value.trim()) {
        fieldsToCheck.push('card-name');
        isValid = false;
    }
    
    if (!isValid) {
        showNotification('Please fill in all card details correctly', 'error');
        highlightEmptyFields(fieldsToCheck);
    }
    
    return isValid;
}

function highlightEmptyFields(fieldIds) {
    fieldIds.forEach(id => {
        const field = document.getElementById(id);
        if (field) {
            field.classList.add('error');
            
            // Remove error class on input
            field.addEventListener('input', function() {
                this.classList.remove('error');
            }, { once: true });
            
            // Focus on the first field with error
            if (fieldIds.indexOf(id) === 0) {
                field.focus();
            }
        }
    });
}

function parseCurrency(priceString) {
    // Extract only digits from the price string and convert to integer
    return parseInt(priceString.replace(/[^\d]/g, '')) || 0;
}

function formatCurrency(amount) {
    // Format the number according to Uzbek format with UZS currency
    return new Intl.NumberFormat('uz-UZ', {
        style: 'decimal',
        maximumFractionDigits: 0
    }).format(amount) + ' UZS';
}

function animateAddToCart(item) {
    const itemRect = item.getBoundingClientRect();
    const cartIconRect = document.querySelector('.cart-count').getBoundingClientRect();
    
    if (!cartIconRect) return; // Safety check
    
    const animatedElement = document.createElement('div');
    animatedElement.className = 'animated-cart-item';
    animatedElement.style.cssText = `
        position: fixed;
        top: ${itemRect.top + itemRect.height/2}px;
        left: ${itemRect.left + itemRect.width/2}px;
        width: 20px;
        height: 20px;
        background-color: var(--rojo);
        border-radius: 50%;
        z-index: 9999;
        opacity: 0.8;
        transform: scale(1);
        pointer-events: none;
    `;
    
    document.body.appendChild(animatedElement);
    
    // Start animation after a short delay to ensure the element is rendered
    setTimeout(() => {
        animatedElement.style.transition = 'all 0.8s cubic-bezier(0.25, 0.1, 0.25, 1)';
        animatedElement.style.top = `${cartIconRect.top + cartIconRect.height/2}px`;
        animatedElement.style.left = `${cartIconRect.left + cartIconRect.width/2}px`;
        animatedElement.style.opacity = '0';
        animatedElement.style.transform = 'scale(0.2)';
        
        // Remove the element after animation completes
        setTimeout(() => {
            if (document.body.contains(animatedElement)) {
                document.body.removeChild(animatedElement);
            }
        }, 800);
    }, 10);
}

function showNotification(message, type = 'info') {
    // Remove any existing notifications with the same message
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => {
        if (notification.querySelector('span').textContent === message) {
            document.body.removeChild(notification);
        }
    });
    
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
        <button class="close-notification" aria-label="Close notification"><i class="fas fa-times"></i></button>
    `;
    
    document.body.appendChild(notification);
    
    // Show notification with a small delay
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Add event listener to close button
    notification.querySelector('.close-notification').addEventListener('click', () => {
        closeNotification(notification);
    });
    
    // Auto-close after 5 seconds
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

function saveCartToLocalStorage() {
    localStorage.setItem('maedaCart', JSON.stringify(cartItems));
}

function loadCartFromLocalStorage() {
    const savedCart = localStorage.getItem('maedaCart');
    if (savedCart) {
        try {
            cartItems = JSON.parse(savedCart);
            updateCart();
        } catch (e) {
            console.error('Error loading cart from localStorage:', e);
            cartItems = [];
            localStorage.removeItem('maedaCart');
        }
    }
}