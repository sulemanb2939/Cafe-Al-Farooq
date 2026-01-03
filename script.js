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
let currentSearchTerm = '';
let currentCategories = new Set();

// Cart State
let cart = JSON.parse(localStorage.getItem('cafeCart')) || [];
let orderCounter = parseInt(localStorage.getItem('cafeOrderCounter')) || 0;

// DOM Elements
const foodGrid = document.getElementById('foodGrid');
const tabButtons = document.querySelectorAll('.tab-btn');
const mobileFilterBtn = document.getElementById('mobileFilterBtn');
const filterBottomSheet = document.getElementById('filterBottomSheet');

// DOM Elements (Updated)
const cartTrigger = document.getElementById('cartTrigger');
const cartDrawer = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');
const closeCartBtn = document.getElementById('closeCart');
const cartItemsContainer = document.getElementById('cartItems');
const cartTotalAmount = document.getElementById('cartTotalAmount');
const cartCount = document.getElementById('cartCount');
const startOrderingBtn = document.getElementById('startOrderingBtn');
// Checkout Elements
const proceedToCheckoutBtn = document.getElementById('proceedToCheckoutBtn');
const checkoutModal = document.getElementById('checkoutModal');
const closeCheckoutModalBtn = document.getElementById('closeCheckoutModal');
const checkoutForm = document.getElementById('checkoutForm');
const backToCartBtn = document.getElementById('backToCartBtn');

// ... (Search Elements remain the same) ...
const desktopSearchInput = document.getElementById('desktopSearch');
const mobileSearchTrigger = document.getElementById('mobileSearchTrigger');
const mobileSearchOverlay = document.getElementById('mobileSearchOverlay');
const mobileSearchInput = document.getElementById('mobileSearchInput');
const closeSearchBtn = document.getElementById('closeSearch');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    console.log('Restaurant App Initialized');

    // Cart Initialization
    updateCartUI();

    // Render Items
    renderFoodItems();

    // Event Setup
    setupEventListeners();
    setupHamburgerMenu();
    setupBottomSheetFilter();
    setupSearch();
});

// Helper: Parse price string "1,200" -> 1200
function parsePrice(priceStr) {
    return parseInt(priceStr.replace(/,/g, ''));
}

// ==========================================
// CART LOGIC
// ==========================================

function addToCart(id) {
    const item = menuItems.find(i => i.id === id);
    if (!item) return;

    const existingItem = cart.find(i => i.id === id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: item.id,
            name: item.name,
            price: item.price,
            image: item.image,
            quantity: 1
        });
    }

    saveCart();
    updateCartUI();
    openCart(); // Optional: open cart when item added to confirm
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
    updateCartUI();
}

function changeQuantity(id, delta) {
    const item = cart.find(i => i.id === id);
    if (!item) return;

    const newQty = item.quantity + delta;

    if (newQty < 1) {
        removeFromCart(id);
    } else {
        item.quantity = newQty;
        saveCart();
        updateCartUI();
    }
}

function saveCart() {
    localStorage.setItem('cafeCart', JSON.stringify(cart));
}

function updateCartUI() {
    // 1. Update Badge
    const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.innerText = totalQty;

    // Animate badge
    cartCount.style.transform = 'scale(1.2)';
    setTimeout(() => cartCount.style.transform = 'scale(1)', 200);

    // 2. Update Cart Items
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart-message">
                <p>Your cart is empty</p>
                <button class="btn btn-primary" onclick="closeCart()">Start Ordering</button>
            </div>
        `;
        cartTotalAmount.innerText = 'Rs 0';
        if (proceedToCheckoutBtn) proceedToCheckoutBtn.disabled = true;
        return;
    }

    if (proceedToCheckoutBtn) proceedToCheckoutBtn.disabled = false;
    let grandTotal = 0;

    cartItemsContainer.innerHTML = cart.map(item => {
        const itemTotal = parsePrice(item.price) * item.quantity;
        grandTotal += itemTotal;
        return `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                <div class="cart-item-details">
                    <h5 class="cart-item-title">${item.name}</h5>
                    <div class="cart-item-price">Rs. ${item.price}</div>
                    <div class="cart-item-actions">
                        <button class="qty-btn-mini" onclick="changeQuantity(${item.id}, -1)">-</button>
                        <span class="qty-display">${item.quantity}</span>
                        <button class="qty-btn-mini" onclick="changeQuantity(${item.id}, 1)">+</button>
                    </div>
                </div>
                <button class="remove-item-btn" onclick="removeFromCart(${item.id})">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                </button>
            </div>
        `;
    }).join('');

    cartTotalAmount.innerText = `Rs ${grandTotal.toLocaleString()}`;
}

// Drawer Control
function openCart() {
    cartDrawer.classList.add('active');
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    cartDrawer.classList.remove('active');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = 'auto'; // Only reset if no modal is open (handled by specific flows)
}

// Step 2: Checkout Modal Logic
function openCheckoutModal() {
    // Close cart first (but keep overflow hidden)
    cartDrawer.classList.remove('active');
    cartOverlay.classList.remove('active');

    // Open Modal
    checkoutModal.classList.add('active');
}

function closeCheckoutModal() {
    checkoutModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function backToCart() {
    checkoutModal.classList.remove('active');
    openCart();
}

// Order ID Generation
function generateOrderId() {
    const year = new Date().getFullYear();
    orderCounter++;
    localStorage.setItem('cafeOrderCounter', orderCounter);
    const orderNum = String(orderCounter).padStart(6, '0');
    return `CAF-${year}-${orderNum}`;
}

// Final Submit Handler
function handleOrderConfirm(e) {
    e.preventDefault();

    if (cart.length === 0) return;

    const name = document.getElementById('checkoutName').value.trim();
    const phone = document.getElementById('checkoutPhone').value.trim();
    const city = document.getElementById('checkoutCity').value.trim();
    const address = document.getElementById('checkoutAddress').value.trim();
    const notes = document.getElementById('checkoutNotes').value.trim();

    if (!name || !phone || !city || !address) {
        alert('Please fill in all required fields (Name, Phone, City, Address).');
        return;
    }

    const orderId = generateOrderId();
    const grandTotal = cart.reduce((sum, item) => sum + (parsePrice(item.price) * item.quantity), 0);

    // Build Message
    let message = `*New Order – Cafe Al-Farooq*\n`;
    message += `Order ID: *${orderId}*\n\n`;
    message += `*Items:*\n`;

    cart.forEach(item => {
        const itemTotal = parsePrice(item.price) * item.quantity;
        message += `• ${item.quantity} × ${item.name} (${item.price}) = Rs ${itemTotal}\n`;
    });

    message += `\n*Total Amount: Rs ${grandTotal.toLocaleString()}*\n\n`;
    message += `*Customer Details:*\n`;
    message += `Name: ${name}\n`;
    message += `Phone: ${phone}\n`;
    message += `City: ${city}\n`;
    message += `Address: ${address}\n`;
    if (notes) message += `Notes: ${notes}\n`;

    // Send
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = '923106628463';

    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');

    // cleanup
    cart = [];
    saveCart();
    updateCartUI();
    closeCheckoutModal();
    checkoutForm.reset();
}


// ==========================================
// FILTER & RENDER LOGIC
// ==========================================

function applyFilters() {
    let filteredItems = menuItems;

    // 1. Filter by Categories
    if (currentCategories.size > 0) {
        filteredItems = filteredItems.filter(item => currentCategories.has(item.category));
    }

    // 2. Filter by Search
    if (currentSearchTerm) {
        const term = currentSearchTerm.toLowerCase();
        filteredItems = filteredItems.filter(item =>
            item.name.toLowerCase().includes(term) ||
            item.category.toLowerCase().includes(term)
        );
    }

    renderFilteredResults(filteredItems);
}

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
                    <button class="btn btn-primary" onclick="addToCart(${item.id})">
                        Add to Cart 
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function renderFoodItems(category) {
    if (category && category !== 'all') {
        currentCategories.clear();
        currentCategories.add(category);
    } else if (category === 'all') {
        currentCategories.clear();
    }
    applyFilters();
}

// ==========================================
// EVENT SETUP
// ==========================================

function setupEventListeners() {
    // Category Tabs
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            tabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const category = btn.dataset.category;
            renderFoodItems(category);
        });
    });

    // Cart Events
    cartTrigger.addEventListener('click', openCart);
    closeCartBtn.addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', closeCart);

    // Checkout Flow Events
    if (proceedToCheckoutBtn) {
        proceedToCheckoutBtn.addEventListener('click', openCheckoutModal);
    }

    if (checkoutForm) {
        checkoutForm.addEventListener('submit', handleOrderConfirm);
    }

    if (backToCartBtn) {
        backToCartBtn.addEventListener('click', backToCart);
    }

    if (closeCheckoutModalBtn) {
        closeCheckoutModalBtn.addEventListener('click', closeCheckoutModal);
    }

    // Close modal on overlay click
    const modalOverlay = checkoutModal.querySelector('.modal-overlay');
    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeCheckoutModal);
    }

    // Smooth Scroll
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

// Search Setup
function setupSearch() {
    desktopSearchInput.addEventListener('input', (e) => {
        currentSearchTerm = e.target.value;
        applyFilters();
    });

    mobileSearchTrigger.addEventListener('click', () => {
        mobileSearchOverlay.classList.add('active');
        setTimeout(() => mobileSearchInput.focus(), 300);
        document.body.style.overflow = 'hidden';
    });

    closeSearchBtn.addEventListener('click', () => {
        mobileSearchOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
        currentSearchTerm = '';
        mobileSearchInput.value = '';
        desktopSearchInput.value = '';
        applyFilters();
    });

    mobileSearchInput.addEventListener('input', (e) => {
        currentSearchTerm = e.target.value;
        desktopSearchInput.value = currentSearchTerm;
        applyFilters();
    });
}

// Bottom Sheet Filter
function setupBottomSheetFilter() {
    if (!mobileFilterBtn || !filterBottomSheet) return;

    const overlay = filterBottomSheet.querySelector('.bottom-sheet-overlay');
    const filterPills = filterBottomSheet.querySelectorAll('.filter-pill');
    const applyBtn = document.getElementById('applyFiltersBtn');
    const clearBtn = document.getElementById('clearFiltersBtn');

    mobileFilterBtn.addEventListener('click', () => {
        filterBottomSheet.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    overlay.addEventListener('click', () => {
        filterBottomSheet.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    filterPills.forEach(pill => {
        pill.addEventListener('click', () => {
            const category = pill.dataset.category;
            if (pill.classList.contains('selected')) {
                pill.classList.remove('selected');
                currentCategories.delete(category);
            } else {
                pill.classList.add('selected');
                currentCategories.add(category);
            }
        });
    });

    clearBtn.addEventListener('click', () => {
        filterPills.forEach(pill => pill.classList.remove('selected'));
        currentCategories.clear();
        applyFilters();
    });

    applyBtn.addEventListener('click', () => {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        if (currentCategories.size === 0) {
            tabButtons.forEach(btn => {
                if (btn.dataset.category === 'all') btn.classList.add('active');
            });
        }
        applyFilters();
        setTimeout(() => {
            filterBottomSheet.classList.remove('active');
            document.body.style.overflow = 'auto';
        }, 150);
    });
}

// Hamburger Menu
function setupHamburgerMenu() {
    const hamburger = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    if (!hamburger || !mobileMenu) return;

    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    document.querySelectorAll('.mobile-menu-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });

    document.addEventListener('click', (e) => {
        if (mobileMenu.classList.contains('active') &&
            !mobileMenu.contains(e.target) &&
            !hamburger.contains(e.target)) {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
        }
    });
}

// Expose functions slightly for inline onclick handlers if needed, 
// though event listeners are better. But I used onclick in template literals above.
window.addToCart = addToCart;
window.changeQuantity = changeQuantity;
window.removeFromCart = removeFromCart;
window.closeCart = closeCart;
