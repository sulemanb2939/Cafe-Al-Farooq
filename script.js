// Menu Data
const menuItems = [
    {
        id: 1,
        name: "Chicken Karahi (Full)",
        category: "chicken-karahi",
        price: "1,200",
        description: "Traditional chicken karahi with rich tomato-based gravy",
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&q=80",
        popular: true
    },
    {
        id: 2,
        name: "Chicken Karahi (Half)",
        category: "chicken-karahi",
        price: "650",
        description: "Perfect portion for 2-3 people",
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&q=80",
        popular: false
    },
    {
        id: 3,
        name: "Beef Karahi (Full)",
        category: "beef-karahi",
        price: "1,500",
        description: "Tender beef chunks in authentic karahi masala",
        image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600&q=80",
        popular: true
    },
    {
        id: 4,
        name: "Beef Karahi (Half)",
        category: "beef-karahi",
        price: "800",
        description: "Rich and flavorful beef karahi half portion",
        image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600&q=80",
        popular: false
    },
    {
        id: 5,
        name: "Mutton Karahi (Full)",
        category: "beef-karahi",
        price: "1,800",
        description: "Premium mutton in traditional karahi style",
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&q=80",
        popular: true
    },
    {
        id: 6,
        name: "Chicken Handi",
        category: "handi",
        price: "1,100",
        description: "Creamy chicken handi with aromatic spices",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80",
        popular: true
    },
    {
        id: 7,
        name: "Mutton Handi",
        category: "handi",
        price: "1,600",
        description: "Rich mutton in traditional clay pot",
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&q=80",
        popular: false
    },
    {
        id: 8,
        name: "Seekh Kabab (6 pcs)",
        category: "bbq",
        price: "450",
        description: "Hand-rolled seekh kababs with mint chutney",
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&q=80",
        popular: true
    },
    {
        id: 9,
        name: "Chicken Tikka (6 pcs)",
        category: "bbq",
        price: "500",
        description: "Tandoori chicken tikka boneless",
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&q=80",
        popular: true
    },
    {
        id: 10,
        name: "Malai Boti (6 pcs)",
        category: "bbq",
        price: "550",
        description: "Creamy marinated chicken cubes grilled to perfection",
        image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=600&q=80",
        popular: false
    },
    {
        id: 11,
        name: "Chicken Tawa",
        category: "tawa",
        price: "900",
        description: "Sizzling chicken tikka on hot tawa",
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&q=80",
        popular: false
    },
    {
        id: 12,
        name: "Beef Tawa",
        category: "tawa",
        price: "1,100",
        description: "Spicy beef pieces served sizzling",
        image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600&q=80",
        popular: false
    },
    {
        id: 13,
        name: "Aloo Paratha",
        category: "paratha",
        price: "80",
        description: "Traditional potato-stuffed paratha",
        image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=600&q=80",
        popular: false
    },
    {
        id: 14,
        name: "Laccha Paratha",
        category: "paratha",
        price: "60",
        description: "Flaky layered paratha",
        image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=600&q=80",
        popular: false
    },
    {
        id: 15,
        name: "Qeema Paratha",
        category: "paratha",
        price: "120",
        description: "Minced meat stuffed paratha",
        image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=600&q=80",
        popular: false
    },
    {
        id: 16,
        name: "Doodh Patti Chai",
        category: "tea",
        price: "80",
        description: "Creamy milk tea Pakistani style",
        image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=600&q=80",
        popular: true
    },
    {
        id: 17,
        name: "Karak Chai",
        category: "tea",
        price: "100",
        description: "Strong and rich karak tea",
        image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=600&q=80",
        popular: false
    },
    {
        id: 18,
        name: "Green Tea",
        category: "tea",
        price: "70",
        description: "Refreshing green tea",
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80",
        popular: false
    }
];

// State
let currentCategory = 'all';
let selectedItem = null;

// DOM Elements
const foodGrid = document.getElementById('foodGrid');
const tabButtons = document.querySelectorAll('.tab-btn');
const modal = document.getElementById('orderModal');
const closeModalBtn = document.getElementById('closeModal');
const orderForm = document.getElementById('orderForm');
const quantityInput = document.getElementById('quantity');
const decreaseBtn = document.getElementById('decreaseQty');
const increaseBtn = document.getElementById('increaseQty');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileFilterBtn = document.getElementById('mobileFilterBtn');
const filterBottomSheet = document.getElementById('filterBottomSheet');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    console.log('Hamburger element:', hamburger);
    console.log('Mobile menu element:', mobileMenu);
    console.log('Mobile filter button:', mobileFilterBtn);
    console.log('Filter bottom sheet:', filterBottomSheet);

    renderFoodItems('all');
    setupEventListeners();
    setupHamburgerMenu();
    setupBottomSheetFilter();
});

// Render Food Items
function renderFoodItems(category) {
    const filteredItems = category === 'all'
        ? menuItems
        : menuItems.filter(item => item.category === category);

    foodGrid.innerHTML = filteredItems.map(item => `
        <div class="food-card" data-id="${item.id}">
            <div class="food-image-wrapper">
                <img src="${item.image}" alt="${item.name}" class="food-image">
                <div class="food-overlay"></div>
                ${item.popular ? '<span class="popular-badge">Popular</span>' : ''}
            </div>
            <div class="food-details">
                <h3 class="food-name">${item.name}</h3>
                <p class="food-description">${item.description}</p>
                <div class="food-footer">
                    <span class="food-price">Rs. ${item.price}</span>
                    <button class="order-btn" data-id="${item.id}">Order on WhatsApp</button>
                </div>
            </div>
        </div>
    `).join('');

    // Add click handlers to order buttons
    document.querySelectorAll('.order-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const itemId = parseInt(btn.dataset.id);
            openOrderModal(itemId);
        });
    });
}

// Render Items for Multiple Categories (Multi-Select)
function renderMultiCategoryItems(categories) {
    console.log('Rendering items for multiple categories:', Array.from(categories));

    const filteredItems = menuItems.filter(item =>
        categories.has(item.category)
    );

    if (filteredItems.length === 0) {
        foodGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem; color: #616161;">No items found for selected categories.</p>';
        return;
    }

    foodGrid.innerHTML = filteredItems.map(item => `
        <div class="food-card" data-id="${item.id}">
            <div class="food-image-wrapper">
                <img src="${item.image}" alt="${item.name}" class="food-image">
                <div class="food-overlay"></div>
                ${item.popular ? '<span class="popular-badge">Popular</span>' : ''}
            </div>
            <div class="food-details">
                <h3 class="food-name">${item.name}</h3>
                <p class="food-description">${item.description}</p>
                <div class="food-footer">
                    <span class="food-price">Rs. ${item.price}</span>
                    <button class="order-btn" data-id="${item.id}">Order on WhatsApp</button>
                </div>
            </div>
        </div>
    `).join('');

    // Add click handlers to order buttons
    document.querySelectorAll('.order-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const itemId = parseInt(btn.dataset.id);
            openOrderModal(itemId);
        });
    });
}

// Hamburger Menu Setup
function setupHamburgerMenu() {
    if (!hamburger || !mobileMenu) {
        console.error('Hamburger or mobile menu element not found!');
        return;
    }

    console.log('Setting up hamburger menu...');

    // Toggle menu on hamburger click
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        console.log('Hamburger clicked!');
        toggleMobileMenu();
    });

    // Close menu when clicking on a link
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            console.log('Menu link clicked, closing menu');
            closeMobileMenu();
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (mobileMenu.classList.contains('active') &&
            !mobileMenu.contains(e.target) &&
            !hamburger.contains(e.target)) {
            console.log('Clicked outside, closing menu');
            closeMobileMenu();
        }
    });

    console.log('Hamburger menu setup complete!');
}

function toggleMobileMenu() {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    const isOpen = mobileMenu.classList.contains('active');
    console.log('Menu toggled. Is now:', isOpen ? 'OPEN' : 'CLOSED');
}

function closeMobileMenu() {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('active');
    console.log('Menu closed');
}

// Bottom Sheet Filter Setup (Multi-Select)
function setupBottomSheetFilter() {
    if (!mobileFilterBtn || !filterBottomSheet) {
        console.log('Mobile filter button or bottom sheet not found (probably on desktop)');
        return;
    }

    console.log('Setting up multi-select bottom sheet filter...');

    const overlay = filterBottomSheet.querySelector('.bottom-sheet-overlay');
    const filterPills = filterBottomSheet.querySelectorAll('.filter-pill');
    const applyBtn = document.getElementById('applyFiltersBtn');
    const clearBtn = document.getElementById('clearFiltersBtn');

    let selectedCategories = new Set();

    // Open bottom sheet on button click
    mobileFilterBtn.addEventListener('click', () => {
        console.log('Opening filter bottom sheet');
        filterBottomSheet.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    // Close on overlay click
    overlay.addEventListener('click', () => {
        console.log('Closing filter bottom sheet (overlay clicked)');
        closeBottomSheet();
    });

    // Handle filter pill toggle (multi-select)
    filterPills.forEach(pill => {
        pill.addEventListener('click', () => {
            const category = pill.dataset.category;

            if (pill.classList.contains('selected')) {
                // Deselect
                pill.classList.remove('selected');
                selectedCategories.delete(category);
                console.log('Deselected:', category);
            } else {
                // Select
                pill.classList.add('selected');
                selectedCategories.add(category);
                console.log('Selected:', category);
            }

            console.log('Currently selected:', Array.from(selectedCategories));
        });
    });

    // Clear all filters
    clearBtn.addEventListener('click', () => {
        console.log('Clearing all filters');
        filterPills.forEach(pill => pill.classList.remove('selected'));
        selectedCategories.clear();
    });

    // Apply filters
    applyBtn.addEventListener('click', () => {
        console.log('Applying filters:', Array.from(selectedCategories));

        // Update desktop filter active states
        tabButtons.forEach(btn => btn.classList.remove('active'));

        if (selectedCategories.size === 0) {
            // No filters selected = show all
            tabButtons.forEach(btn => {
                if (btn.dataset.category === 'all') {
                    btn.classList.add('active');
                }
            });
            renderFoodItems('all');
        } else {
            // Apply multi-category filter
            renderMultiCategoryItems(selectedCategories);
        }

        // Close bottom sheet
        setTimeout(() => {
            closeBottomSheet();
        }, 150);
    });

    console.log('Multi-select bottom sheet filter setup complete!');
}

function closeBottomSheet() {
    filterBottomSheet.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Setup Event Listeners
function setupEventListeners() {
    // Category tabs
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            tabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            renderFoodItems(currentCategory);
        });
    });

    // Modal close
    closeModalBtn.addEventListener('click', closeOrderModal);
    modal.querySelector('.modal-overlay').addEventListener('click', closeOrderModal);

    // Quantity controls
    decreaseBtn.addEventListener('click', () => {
        const currentQty = parseInt(quantityInput.value);
        if (currentQty > 1) {
            quantityInput.value = currentQty - 1;
        }
    });

    increaseBtn.addEventListener('click', () => {
        const currentQty = parseInt(quantityInput.value);
        quantityInput.value = currentQty + 1;
    });

    // Form submission
    orderForm.addEventListener('submit', handleOrderSubmit);

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Open Order Modal
function openOrderModal(itemId) {
    selectedItem = menuItems.find(item => item.id === itemId);
    if (!selectedItem) return;

    document.getElementById('foodItem').value = selectedItem.name;
    quantityInput.value = 1;
    document.getElementById('customerName').value = '';
    document.getElementById('customerPhone').value = '';
    document.getElementById('notes').value = '';

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close Order Modal
function closeOrderModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    selectedItem = null;
}

// Handle Order Submit
function handleOrderSubmit(e) {
    e.preventDefault();

    const customerName = document.getElementById('customerName').value.trim();
    const customerPhone = document.getElementById('customerPhone').value.trim();
    const quantity = quantityInput.value;
    const notes = document.getElementById('notes').value.trim();

    if (!customerName || !customerPhone) {
        alert('Please fill in all required fields');
        return;
    }

    // Construct WhatsApp message
    let message = `*New Order from Cafe Al-Farooq Website*\n\n`;
    message += `*Customer:* ${customerName}\n`;
    message += `*Phone:* ${customerPhone}\n`;
    message += `*Item:* ${selectedItem.name}\n`;
    message += `*Quantity:* ${quantity}\n`;
    message += `*Price:* Rs. ${selectedItem.price} each\n`;

    if (notes) {
        message += `*Special Instructions:* ${notes}\n`;
    }

    message += `\nThank you!`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/923213258463?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappURL, '_blank');

    // Close modal
    closeOrderModal();
}

// Add scroll animation for elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe food cards for scroll animation
setTimeout(() => {
    document.querySelectorAll('.food-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}, 100);
