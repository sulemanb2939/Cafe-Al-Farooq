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
const hamburger = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const mobileFilterBtn = document.getElementById('mobileFilterBtn');
const filterBottomSheet = document.getElementById('filterBottomSheet');

// Search Elements
const desktopSearchInput = document.getElementById('desktopSearch');
const mobileSearchTrigger = document.getElementById('mobileSearchTrigger');
const mobileSearchOverlay = document.getElementById('mobileSearchOverlay');
const mobileSearchInput = document.getElementById('mobileSearchInput');
const closeSearchBtn = document.getElementById('closeSearch');

// Global State
let currentSearchTerm = '';
let currentCategories = new Set(); // Empty set means 'all'

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');

    renderFoodItems(); // Use unified render
    setupEventListeners();
    setupHamburgerMenu();
    setupBottomSheetFilter();
    setupSearch();
});

// Unified Filter Logic
function applyFilters() {
    console.log('Applying filters - Categories:', Array.from(currentCategories), 'Search:', currentSearchTerm);

    let filteredItems = menuItems;

    // 1. Filter by Categories (if any selected)
    if (currentCategories.size > 0) {
        filteredItems = filteredItems.filter(item => currentCategories.has(item.category));
    }

    // 2. Filter by Search Term
    if (currentSearchTerm) {
        const term = currentSearchTerm.toLowerCase();
        filteredItems = filteredItems.filter(item =>
            item.name.toLowerCase().includes(term) ||
            item.category.toLowerCase().includes(term)
        );
    }

    renderFilteredResults(filteredItems);
}

// Render Results to Grid
function renderFilteredResults(items) {
    if (items.length === 0) {
        foodGrid.innerHTML = `
            <div class="no-results">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    <line x1="8" y1="11" x2="14" y2="11"></line>
                </svg>
                <h3>No items found</h3>
                <p>We couldn't find anything matching "${currentSearchTerm || 'your selection'}". Try searching for something else!</p>
            </div>
        `;
        return;
    }

    foodGrid.innerHTML = items.map(item => `
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

    // Re-attach handlers
    document.querySelectorAll('.order-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const itemId = parseInt(btn.dataset.id);
            openOrderModal(itemId);
        });
    });
}

// Render Food Items (Now just a wrapper for applyFilters)
function renderFoodItems(category) {
    if (category && category !== 'all') {
        currentCategories.clear();
        currentCategories.add(category);
    } else if (category === 'all') {
        currentCategories.clear();
    }
    applyFilters();
}

// Search Setup
function setupSearch() {
    // Desktop Search
    desktopSearchInput.addEventListener('input', (e) => {
        currentSearchTerm = e.target.value;
        applyFilters();
    });

    // Mobile Search Overlay Toggle
    mobileSearchTrigger.addEventListener('click', () => {
        mobileSearchOverlay.classList.add('active');
        setTimeout(() => mobileSearchInput.focus(), 300);
        document.body.style.overflow = 'hidden';
    });

    closeSearchBtn.addEventListener('click', () => {
        closeMobileSearch();
    });

    // Mobile Search Input
    mobileSearchInput.addEventListener('input', (e) => {
        currentSearchTerm = e.target.value;
        // Sync desktop input for consistency if visible later
        desktopSearchInput.value = currentSearchTerm;
        applyFilters();
    });
}

function closeMobileSearch() {
    mobileSearchOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
    // Optional: clear search on close? User request says "restores previous state", 
    // but usually search persists until cleared. Let's clear if empty or keep it.
    // User: "Closing search restores previous state". 
    // I'll clear the search term when closing mobile search.
    currentSearchTerm = '';
    mobileSearchInput.value = '';
    desktopSearchInput.value = '';
    applyFilters();
}

// Hamburger Menu Setup
function setupHamburgerMenu() {
    const hamburger = document.getElementById('menuToggle');
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
    const hamburger = document.getElementById('menuToggle');
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    const isOpen = mobileMenu.classList.contains('active');
    console.log('Menu toggled. Is now:', isOpen ? 'OPEN' : 'CLOSED');
}

function closeMobileMenu() {
    const hamburger = document.getElementById('menuToggle');
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
                currentCategories.delete(category);
                console.log('Deselected:', category);
            } else {
                // Select
                pill.classList.add('selected');
                currentCategories.add(category);
                console.log('Selected:', category);
            }

            console.log('Currently selected:', Array.from(currentCategories));
        });
    });

    // Clear all filters
    clearBtn.addEventListener('click', () => {
        console.log('Clearing all filters');
        filterPills.forEach(pill => pill.classList.remove('selected'));
        currentCategories.clear();
        applyFilters(); // Apply empty filters (Search still works)
    });

    // Apply filters
    applyBtn.addEventListener('click', () => {
        console.log('Applying filters:', Array.from(currentCategories));

        // Update desktop filter active states
        tabButtons.forEach(btn => btn.classList.remove('active'));

        if (currentCategories.size === 0) {
            // No filters selected = show all categories (respecting search)
            tabButtons.forEach(btn => {
                if (btn.dataset.category === 'all') {
                    btn.classList.add('active');
                }
            });
        }

        applyFilters();

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

            const category = btn.dataset.category;
            if (category === 'all') {
                currentCategories.clear();
            } else {
                currentCategories.clear();
                currentCategories.add(category);
            }
            applyFilters();
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

    // Validation
    if (!customerName || !customerPhone) {
        alert('Please fill in all required fields');
        return;
    }

    if (parseInt(quantity) < 1) {
        alert('Quantity must be at least 1');
        return;
    }

    // Construct WhatsApp message with exact format
    let message = `New Food Order 🍽️\n\n`;
    message += `Name: ${customerName}\n`;
    message += `Phone: ${customerPhone}\n`;
    message += `Food Item: ${selectedItem.name}\n`;
    message += `Quantity: ${quantity}\n`;
    message += `Special Instructions: ${notes || 'None'}\n`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/923106628463?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappURL, '_blank');

    // Close modal
    closeOrderModal();

    // Optional: Show confirmation (brief)
    console.log('Order sent to WhatsApp successfully!');
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
