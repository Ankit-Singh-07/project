
    function updateCountdown() {
        const daysElement = document.getElementById('days');
        const hoursElement = document.getElementById('hours');
        const minutesElement = document.getElementById('minutes');
        const secondsElement = document.getElementById('seconds');

        let days = parseInt(daysElement.textContent);
        let hours = parseInt(hoursElement.textContent);
        let minutes = parseInt(minutesElement.textContent);
        let seconds = parseInt(secondsElement.textContent);

        seconds--;
        
        if (seconds < 0) {
            seconds = 59;
            minutes--;
            
            if (minutes < 0) {
                minutes = 59;
                hours--;
                
                if (hours < 0) {
                    hours = 23;
                    days--;
                    
                    if (days < 0) {
                        // Sale has ended
                        days = 0;
                        hours = 0;
                        minutes = 0;
                        seconds = 0;
                        clearInterval(countdownInterval);
                    }
                }
            }
        }

        daysElement.textContent = days.toString().padStart(2, '0');
        hoursElement.textContent = hours.toString().padStart(2, '0');
        minutesElement.textContent = minutes.toString().padStart(2, '0');
        secondsElement.textContent = seconds.toString().padStart(2, '0');
    }

    const countdownInterval = setInterval(updateCountdown, 1000);

    // Shopping Cart Functionality
    let cartCount = 0;
    const cartCountElement = document.querySelector('.cart-count');
    const addToCartButtons = document.querySelectorAll('.add-to-cart, .btn-primary');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            cartCount++;
            cartCountElement.textContent = cartCount;
            
            // Add animation to cart icon
            const cartIcon = document.querySelector('.cart img');
            cartIcon.classList.add('bounce');
            setTimeout(() => {
                cartIcon.classList.remove('bounce');
            }, 1000);
            
            // Show confirmation (you can customize this)
            alert('Item added to cart!');
        });
    });

    // Dropdown Menu Toggle
    const menuButton = document.querySelector('.menu-button');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    menuButton.addEventListener('click', function() {
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.menu-container')) {
            dropdownMenu.style.display = 'none';
        }
    });

    // Product Card Hover Effect
    const productCards = document.querySelectorAll('.product-card, .card');
    
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        });
    });

    // Search Functionality
    const searchBar = document.querySelector('.search-bar input');
    
    searchBar.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const searchTerm = this.value.trim();
            if (searchTerm) {
                alert(`Searching for: ${searchTerm}`);
                // In a real application, you would redirect to search results or filter products
            }
        }
    });

    // Currency Selector
    const currencySelector = document.querySelector('.currency-selector select');
    
    currencySelector.addEventListener('change', function() {
        const selectedCurrency = this.value;
        alert(`Currency changed to: ${selectedCurrency}`);
        // In a real application, you would update prices based on currency
    });