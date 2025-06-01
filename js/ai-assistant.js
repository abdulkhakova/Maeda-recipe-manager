/**
 * Maeda AI Assistant
 * Provides recipe suggestions and cooking assistance
 */
class MaedaAIAssistant {
    constructor() {
      this.container = document.getElementById('ai-assistant-container');
      this.toggleButton = document.getElementById('ai-assistant-toggle');
      this.closeButton = document.getElementById('ai-assistant-close');
      this.messagesContainer = document.getElementById('ai-assistant-messages');
      this.inputField = document.getElementById('ai-assistant-input-field');
      this.sendButton = document.getElementById('ai-assistant-send');
      this.suggestionButtons = document.querySelectorAll('.suggestion-btn');
      
      this.isOpen = false;
      this.isTyping = false;
      
      this.initEventListeners();
      this.connectToIngredientSearch();
    }
    
    initEventListeners() {
      // Toggle assistant visibility
      this.toggleButton.addEventListener('click', () => this.toggleAssistant());
      this.closeButton.addEventListener('click', () => this.closeAssistant());
      
      // Send message on button click or Enter key
      this.sendButton.addEventListener('click', () => this.handleUserMessage());
      this.inputField.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          this.handleUserMessage();
        }
      });
      
      // Handle suggestion buttons
      this.suggestionButtons.forEach(button => {
        button.addEventListener('click', () => {
          this.handleSuggestion(button.textContent);
        });
      });
    }
    
    toggleAssistant() {
      if (this.isOpen) {
        this.closeAssistant();
      } else {
        this.openAssistant();
      }
    }
    
    openAssistant() {
      this.container.classList.add('active');
      this.isOpen = true;
      this.inputField.focus();
    }
    
    closeAssistant() {
      this.container.classList.remove('active');
      this.isOpen = false;
    }
    
    handleUserMessage() {
      const message = this.inputField.value.trim();
      if (message === '') return;
      
      this.addUserMessage(message);
      this.inputField.value = '';
      
      this.showTypingIndicator();
      
      // Simulate AI response after a delay
      setTimeout(() => {
        this.removeTypingIndicator();
        this.addAIResponse(this.generateResponse(message));
      }, 1500);
    }
    
    handleSuggestion(suggestion) {
      this.addUserMessage(suggestion);
      
      this.showTypingIndicator();
      
      // Simulate AI response after a delay
      setTimeout(() => {
        this.removeTypingIndicator();
        this.addAIResponse(this.generateResponse(suggestion));
      }, 1500);
    }
    
    addUserMessage(message) {
      const messageElement = document.createElement('div');
      messageElement.className = 'user-message';
      messageElement.innerHTML = `
        <div class="message-content">
          <p>${this.escapeHTML(message)}</p>
        </div>
        <div class="user-avatar">
          <i class="fas fa-user"></i>
        </div>
      `;
      
      this.messagesContainer.appendChild(messageElement);
      this.scrollToBottom();
    }
    
    addAIResponse(message) {
      const messageElement = document.createElement('div');
      messageElement.className = 'ai-message';
      messageElement.innerHTML = `
        <div class="ai-avatar">
          <i class="fas fa-robot"></i>
        </div>
        <div class="message-content">
          <p>${message}</p>
        </div>
      `;
      
      this.messagesContainer.appendChild(messageElement);
      this.scrollToBottom();
      
      // Update suggestions based on the conversation
      this.updateSuggestions();
    }
    
    showTypingIndicator() {
      if (this.isTyping) return;
      
      this.isTyping = true;
      const typingElement = document.createElement('div');
      typingElement.className = 'ai-message typing-message';
      typingElement.innerHTML = `
        <div class="ai-avatar">
          <i class="fas fa-robot"></i>
        </div>
        <div class="message-content">
          <div class="typing-indicator">
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
          </div>
        </div>
      `;
      
      this.messagesContainer.appendChild(typingElement);
      this.scrollToBottom();
    }
    
    removeTypingIndicator() {
      const typingMessage = this.messagesContainer.querySelector('.typing-message');
      if (typingMessage) {
        typingMessage.remove();
      }
      this.isTyping = false;
    }
    
    scrollToBottom() {
      this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    }
    
    updateSuggestions() {
      // This would ideally be dynamic based on conversation context
      const newSuggestions = [
        "Healthy breakfast ideas",
        "What can I make with eggs?",
        "How to store vegetables"
      ];
      
      const suggestionsContainer = document.querySelector('.ai-assistant-suggestions');
      suggestionsContainer.innerHTML = '';
      
      newSuggestions.forEach(suggestion => {
        const button = document.createElement('button');
        button.className = 'suggestion-btn';
        button.textContent = suggestion;
        button.addEventListener('click', () => {
          this.handleSuggestion(suggestion);
        });
        suggestionsContainer.appendChild(button);
      });
    }
    
    suggestRecipeFromIngredients(ingredients) {
      // This would ideally call an API with the ingredients
      // For now, we'll simulate a response
      
      const recipes = [
        {
          name: "Pasta Primavera",
          ingredients: ["pasta", "tomatoes", "zucchini", "bell peppers", "garlic"],
          difficulty: "Easy",
          time: "25 minutes"
        },
        {
          name: "Chicken Stir-Fry",
          ingredients: ["chicken", "broccoli", "carrots", "soy sauce", "garlic"],
          difficulty: "Medium",
          time: "30 minutes"
        },
        {
          name: "Simple Omelette",
          ingredients: ["eggs", "cheese", "butter", "salt", "pepper"],
          difficulty: "Easy",
          time: "10 minutes"
        },
        {
          name: "Tomato Chicken Pasta",
          ingredients: ["chicken", "pasta", "tomatoes", "onion", "garlic"],
          difficulty: "Easy",
          time: "35 minutes"
        }
      ];
      
      // Find recipes that match at least some ingredients
      let matchedRecipes = recipes.filter(recipe => {
        return ingredients.some(ingredient => 
          recipe.ingredients.some(recipeIng => 
            recipeIng.toLowerCase().includes(ingredient.toLowerCase())
          )
        );
      });
      
      if (matchedRecipes.length === 0) {
        return "I couldn't find any recipes with those exact ingredients. Would you like me to suggest some popular recipes instead?";
      }
      
      let response = "Here are some recipes you can make with those ingredients:<br><br>";
      
      matchedRecipes.forEach(recipe => {
        response += `<b>${recipe.name}</b> - ${recipe.difficulty}, ${recipe.time}<br>`;
        response += `Ingredients: ${recipe.ingredients.join(", ")}<br><br>`;
      });
      
      response += "Would you like more details about any of these recipes?";
      
      return response;
    }
    
    generateResponse(message) {
      // Simple response generation logic - in a real app, this would call an API
      message = message.toLowerCase();
      
      // Check for ingredient lists
      if (message.includes('i have') || message.includes('ingredients')) {
        const ingredients = message.replace(/i have|ingredients|what can i make with|can i make with|with these ingredients|[?.,]/gi, '')
          .split(/\s+and\s+|\s*,\s*|\s+/)
          .filter(word => word.trim().length > 2);
        
        if (ingredients.length > 0) {
          return this.suggestRecipeFromIngredients(ingredients);
        }
      }
      
      if (message.includes('recipe') && message.includes('chicken')) {
        return 'Here are some popular chicken recipes you might enjoy:<br><br>1. <b>Chicken Parmesan</b> - Breaded chicken topped with marinara and cheese<br>2. <b>Grilled Chicken Salad</b> - Light and healthy with fresh vegetables<br>3. <b>Chicken Stir Fry</b> - Quick and easy with vegetables and soy sauce';
      }
      
      if (message.includes('pasta sauce') || message.includes('make pasta')) {
        return 'For a basic tomato pasta sauce:<br><br>1. Sauté 1 diced onion and 2 minced garlic cloves in olive oil<br>2. Add 1 can (28oz) crushed tomatoes<br>3. Season with salt, pepper, and Italian herbs<br>4. Simmer for 20 minutes<br>5. Optionally add fresh basil at the end';
      }
      
      if (message.includes('dinner') && (message.includes('quick') || message.includes('idea'))) {
        return 'Here are some quick dinner ideas:<br><br>1. <b>Sheet Pan Fajitas</b> - Chicken or beef with peppers and onions<br>2. <b>Pasta Carbonara</b> - Ready in 15 minutes with eggs, cheese, and bacon<br>3. <b>Stir-Fry</b> - Use any protein and vegetables you have on hand<br>4. <b>Breakfast for Dinner</b> - Omelettes or frittatas are quick and customizable';
      }
      
      if (message.includes('breakfast') && message.includes('healthy')) {
        return 'Try these healthy breakfast options:<br><br>1. <b>Overnight Oats</b> with fruits and nuts<br>2. <b>Greek Yogurt Parfait</b> with berries and granola<br>3. <b>Avocado Toast</b> with a poached egg<br>4. <b>Smoothie Bowl</b> topped with seeds and fresh fruit';
      }
      
      if (message.includes('eggs') && (message.includes('make') || message.includes('cook'))) {
        return 'Eggs are versatile! Try:<br><br>1. <b>Scrambled</b> - Cook slowly for creamy texture<br>2. <b>Omelette</b> - Fill with cheese, vegetables, or herbs<br>3. <b>Frittata</b> - Great for using leftover vegetables<br>4. <b>Shakshuka</b> - Eggs poached in spiced tomato sauce';
      }
      
      if (message.includes('store') && message.includes('vegetable')) {
        return 'To keep vegetables fresh longer:<br><br>1. Store leafy greens with a paper towel to absorb moisture<br>2. Keep tomatoes at room temperature<br>3. Store root vegetables in a cool, dark place<br>4. Blanch vegetables before freezing<br>5. Don\'t wash berries until ready to eat';
      }
      
      // Default responses
      const defaultResponses = [
        "I can help you find recipes based on ingredients you have. What's in your kitchen?",
        "Would you like me to suggest some seasonal recipes that are popular right now?",
        "I can help with cooking techniques, ingredient substitutions, or meal planning. What are you interested in?",
        "Looking for something specific? I can help you find recipes by cuisine type, dietary restrictions, or cooking method."
      ];
      
      return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
    }
    
    connectToIngredientSearch() {
      const searchRecipesBtn = document.querySelector('.search-recipes-btn');
      
      if (searchRecipesBtn) {
        const originalClickHandler = searchRecipesBtn.onclick;
        
        searchRecipesBtn.onclick = (event) => {
          // Call the original handler if it exists
          if (originalClickHandler) {
            originalClickHandler.call(searchRecipesBtn, event);
          }
          
          // Get ingredients from the tags
          const tags = document.querySelectorAll('.ingredient-tag');
          if (tags.length > 0) {
            const ingredients = Array.from(tags).map(tag => 
              tag.textContent.trim().replace('×', '').trim()
            );
            
            // Open the assistant and suggest recipes
            this.openAssistant();
            this.addUserMessage(`What can I make with ${ingredients.join(', ')}?`);
            
            this.showTypingIndicator();
            setTimeout(() => {
              this.removeTypingIndicator();
              this.addAIResponse(this.suggestRecipeFromIngredients(ingredients));
            }, 1500);
          }
        };
      }
    }
    
    escapeHTML(text) {
      const div = document.createElement('div');
      div.textContent = text;
      return div.innerHTML;
    }
  }
  
  // Initialize the AI Assistant when the DOM is loaded
  document.addEventListener('DOMContentLoaded', function() {
    const aiAssistant = new MaedaAIAssistant();
  });