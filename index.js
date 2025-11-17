// Sample product data 
const products = [
  // Electronics
  {
    id: 1,
    name: "Apple AirPods Pro",
    price: 29999,
    category: "electronics",
    image: "🎧",
    sale: true,
    originalPrice: 33699,
  },
  {
    id: 2,
    name: "Samsung 4K Smart TV",
    price: 71999,
    category: "electronics",
    image: "📺",
    sale: false,
  },
  {
    id: 3,
    name: "iPhone 15 Case",
    price: 2399,
    category: "electronics",
    image: "📱",
    sale: true,
    originalPrice: 3599,
  },
  {
    id: 4,
    name: "Wireless Charger",
    price: 4199,
    category: "electronics",
    image: "⚡",
    sale: false,
  },
  {
    id: 5,
    name: "USB-C Cable",
    price: 1299,
    category: "electronics",
    image: "🔌",
    sale: true,
    originalPrice: 1899,
  },
  {
    id: 6,
    name: "Screen Protector",
    price: 899,
    category: "electronics",
    image: "📱",
    sale: false,
  },
  {
    id: 7,
    name: "Bluetooth Speaker",
    price: 5999,
    category: "electronics",
    image: "🔊",
    sale: true,
    originalPrice: 7499,
  },
  {
    id: 8,
    name: "Phone Stand",
    price: 799,
    category: "electronics",
    image: "📱",
    sale: false,
  },

  // Grocery
  {
    id: 9,
    name: "Organic Bananas (1kg)",
    price: 179,
    category: "grocery",
    image: "🍌",
    sale: false,
  },
  {
    id: 10,
    name: "Fresh Ground Coffee",
    price: 1079,
    category: "grocery",
    image: "☕",
    sale: true,
    originalPrice: 1439,
  },
  {
    id: 11,
    name: "Organic Milk (1L)",
    price: 599,
    category: "grocery",
    image: "🥛",
    sale: false,
  },
  {
    id: 12,
    name: "Free Range Eggs (12)",
    price: 659,
    category: "grocery",
    image: "🥚",
    sale: false,
  },
  {
    id: 13,
    name: "Whole Wheat Bread",
    price: 299,
    category: "grocery",
    image: "🍞",
    sale: true,
    originalPrice: 399,
  },
  {
    id: 14,
    name: "Olive Oil (500ml)",
    price: 1699,
    category: "grocery",
    image: "�",
    sale: false,
  },
  {
    id: 15,
    name: "Fresh Tomatoes (1kg)",
    price: 249,
    category: "grocery",
    image: "🍅",
    sale: false,
  },
  {
    id: 16,
    name: "Cheddar Cheese",
    price: 1299,
    category: "grocery",
    image: "🧀",
    sale: true,
    originalPrice: 1599,
  },

  // Clothing
  {
    id: 17,
    name: "Men's T-Shirt",
    price: 1799,
    category: "clothing",
    image: "👕",
    sale: true,
    originalPrice: 2399,
  },
  {
    id: 18,
    name: "Women's Jeans",
    price: 3599,
    category: "clothing",
    image: "👖",
    sale: false,
  },
  {
    id: 19,
    name: "Kids' Sneakers",
    price: 2999,
    category: "clothing",
    image: "👟",
    sale: true,
    originalPrice: 4199,
  },
  {
    id: 20,
    name: "Winter Jacket",
    price: 5999,
    category: "clothing",
    image: "🧥",
    sale: false,
  },
  {
    id: 21,
    name: "Summer Dress",
    price: 2299,
    category: "clothing",
    image: "👗",
    sale: true,
    originalPrice: 2999,
  },
  {
    id: 22,
    name: "Wool Socks (Pair)",
    price: 499,
    category: "clothing",
    image: "🧦",
    sale: false,
  },
  {
    id: 23,
    name: "Running Shoes",
    price: 4999,
    category: "clothing",
    image: "👟",
    sale: true,
    originalPrice: 6499,
  },
  {
    id: 24,
    name: "Casual Hat",
    price: 899,
    category: "clothing",
    image: "🧢",
    sale: false,
  },

  // Home
  {
    id: 25,
    name: "Kitchen Towels (Pack)",
    price: 1559,
    category: "home",
    image: "🍽️",
    sale: false,
  },
  {
    id: 26,
    name: "Bedding Set",
    price: 5999,
    category: "home",
    image: "🛏️",
    sale: true,
    originalPrice: 8399,
  },
  {
    id: 27,
    name: "Cookware Set",
    price: 10799,
    category: "home",
    image: "🍳",
    sale: false,
  },
  {
    id: 28,
    name: "Desk Lamp",
    price: 2499,
    category: "home",
    image: "💡",
    sale: true,
    originalPrice: 3299,
  },
  {
    id: 29,
    name: "Throw Pillow",
    price: 1299,
    category: "home",
    image: "🪑",
    sale: false,
  },
  {
    id: 30,
    name: "Wall Clock",
    price: 1999,
    category: "home",
    image: "🕐",
    sale: true,
    originalPrice: 2499,
  },
  {
    id: 31,
    name: "Door Mat",
    price: 599,
    category: "home",
    image: "🚪",
    sale: false,
  },
  {
    id: 32,
    name: "Storage Box (Large)",
    price: 2299,
    category: "home",
    image: "📦",
    sale: false,
  },

  // Toys
  {
    id: 33,
    name: "LEGO Set",
    price: 4799,
    category: "toys",
    image: "🧱",
    sale: true,
    originalPrice: 5999,
  },
  {
    id: 34,
    name: "Board Game",
    price: 2999,
    category: "toys",
    image: "🎲",
    sale: false,
  },
  {
    id: 35,
    name: "Puzzle (1000 pieces)",
    price: 1799,
    category: "toys",
    image: "🧩",
    sale: true,
    originalPrice: 2399,
  },
  {
    id: 36,
    name: "Action Figure",
    price: 899,
    category: "toys",
    image: "🦸",
    sale: false,
  },
  {
    id: 37,
    name: "Toy Car Set",
    price: 1499,
    category: "toys",
    image: "�️",
    sale: true,
    originalPrice: 1999,
  },
  {
    id: 38,
    name: "Remote Control Drone",
    price: 8999,
    category: "toys",
    image: "🚁",
    sale: false,
  },

  // Beauty
  {
    id: 39,
    name: "Skincare Set",
    price: 4199,
    category: "beauty",
    image: "💄",
    sale: true,
    originalPrice: 5399,
  },
  {
    id: 40,
    name: "Hair Dryer",
    price: 5159,
    category: "beauty",
    image: "💇",
    sale: false,
  },
  {
    id: 41,
    name: "Lipstick Collection",
    price: 2499,
    category: "beauty",
    image: "💋",
    sale: true,
    originalPrice: 3299,
  },
  {
    id: 42,
    name: "Face Mask (Pack)",
    price: 1599,
    category: "beauty",
    image: "🎭",
    sale: true,
  },
  {
    id: 43,
    name: "Body Lotion",
    price: 899,
    category: "beauty",
    image: "🧴",
    sale: true,
    originalPrice: 1199,
  },
  {
    id: 44,
    name: "Perfume (100ml)",
    price: 3499,
    category: "beauty",
    image: "�",
    sale: false,
  },
];

// Application state
let currentUser = JSON.parse(localStorage.getItem("currentUser")) || null;
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let users = JSON.parse(localStorage.getItem("users")) || [];
let currentSlideIndex = 0;

// Initialize the application
document.addEventListener("DOMContentLoaded", function () {
  initializeApp();
  loadFeaturedProducts();
  loadDeals();
  updateCartDisplay();
  startSlider();
});

function initializeApp() {
  // Set up event listeners
  document
    .getElementById("search-input")
    .addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        searchProducts(this.value);
      }
    });

  document
    .getElementById("login-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      handleLogin();
    });

  document
    .getElementById("register-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      handleRegister();
    });
}

// Product loading functions
function loadFeaturedProducts() {
  const productsGrid = document.getElementById("products-grid");
  productsGrid.innerHTML = "";

  const featuredProducts = products.slice(0, 8); 

  featuredProducts.forEach((product) => {
    productsGrid.appendChild(createProductCard(product));
  });
}

function loadDeals() {
  const dealsGrid = document.getElementById("deals-grid");
  dealsGrid.innerHTML = "";

  const dealProducts = products.filter((product) => product.sale).slice(0, 8);

  dealProducts.forEach((product) => {
    dealsGrid.appendChild(createProductCard(product));
  });
}

function createProductCard(product) {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
        ${product.sale ? '<div class="sale-badge">SALE</div>' : ""}
        <div class="product-image" style="font-size: 4rem;">${
          product.image
        }</div>
        <h3 class="product-title">${product.name}</h3>
        <div class="product-price">
            KES ${product.price.toFixed(0)}
            ${
              product.sale && product.originalPrice
                ? `<span class="original-price">KES ${product.originalPrice.toFixed(
                    0
                  )}</span>`
                : ""
            }
        </div>
        <button class="btn btn-red" onclick="addToCart(${
          product.id
        })">Add to Cart</button>
    `;
  return card;
}

// Category filtering
function showCategory(category) {
  if (category === "all") {
    loadFeaturedProducts();
    return;
  }

  if (category === "deals") {
    loadDeals();
    return;
  }

  const filteredProducts = products.filter(
    (product) => product.category === category
  );
  const productsGrid = document.getElementById("products-grid");
  productsGrid.innerHTML = "";

  if (filteredProducts.length === 0) {
    productsGrid.innerHTML = "<p>No products found in this category.</p>";
    return;
  }

  filteredProducts.forEach((product) => {
    productsGrid.appendChild(createProductCard(product));
  });
}

// Search functionality
function searchProducts(query) {
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  const productsGrid = document.getElementById("products-grid");
  productsGrid.innerHTML = "";

  if (filteredProducts.length === 0) {
    productsGrid.innerHTML = "<p>No products found matching your search.</p>";
    return;
  }

  filteredProducts.forEach((product) => {
    productsGrid.appendChild(createProductCard(product));
  });
}

// Cart functionality
function addToCart(productId) {
  if (!currentUser) {
    showModal("account-modal");
    return;
  }

  const product = products.find((p) => p.id === productId);
  const existingItem = cart.find(
    (item) => item.productId === productId && item.userId === currentUser.id
  );

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: Date.now(),
      productId: productId,
      userId: currentUser.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
    });
  }

  saveCart();
  updateCartDisplay();
  showToast(`${product.name} added to cart!`);
}

function removeFromCart(itemId) {
  cart = cart.filter((item) => item.id !== itemId);
  saveCart();
  updateCartDisplay();
  showToast("Item removed from cart");
}

function updateQuantity(itemId, change) {
  const item = cart.find((item) => item.id === itemId);
  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    saveCart();
    updateCartDisplay();
  }
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function updateCartDisplay() {
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  const cartCount = document.querySelector(".cart-count");

  const userCart = cart.filter(
    (item) => item.userId === (currentUser?.id || -1)
  );
  const total = userCart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  cartCount.textContent = userCart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  if (userCart.length === 0) {
    cartItems.innerHTML =
      '<p style="text-align: center; color: #666; padding: 40px 0;">Your cart is empty</p>';
  } else {
    cartItems.innerHTML = userCart
      .map(
        (item) => `
            <div class="cart-item">
                <div class="cart-item-image" style="font-size: 2rem;">${
                  item.image
                }</div>
                <div class="cart-item-details">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">KES ${item.price.toFixed(
                      0
                    )}</div>
                    <div class="cart-item-controls">
                        <button class="quantity-btn" onclick="updateQuantity(${
                          item.id
                        }, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${
                          item.id
                        }, 1)">+</button>
                        <button class="btn" style="margin-left: 10px; padding: 5px 10px; font-size: 0.8rem;" onclick="removeFromCart(${
                          item.id
                        })">Remove</button>
                    </div>
                </div>
            </div>
        `
      )
      .join("");
  }

  cartTotal.textContent = total.toFixed(2);
}

function toggleCart() {
  const cartSidebar = document.getElementById("cart-sidebar");
  cartSidebar.classList.toggle("active");
}

// Authentication
function handleLogin() {
  const email = document.querySelector('#login-form input[type="email"]').value;
  const password = document.querySelector(
    '#login-form input[type="password"]'
  ).value;

  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    currentUser = user;
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    closeModal("account-modal");
    showToast(`Welcome back, ${user.name}!`);
    updateCartDisplay();
  } else {
    showToast("Invalid email or password", "error");
  }
}

function handleRegister() {
  const name = document.querySelector(
    '#register-form input[type="text"]'
  ).value;
  const email = document.querySelector(
    '#register-form input[type="email"]'
  ).value;
  const password = document.querySelector(
    '#register-form input[type="password"]'
  ).value;
  const phone = document.querySelector(
    '#register-form input[type="tel"]'
  ).value;

  if (users.find((u) => u.email === email)) {
    showToast("User with this email already exists", "error");
    return;
  }

  const newUser = {
    id: Date.now(),
    name: name,
    email: email,
    password: password,
    phone: phone,
    createdAt: new Date().toISOString(),
  };

  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  currentUser = newUser;
  localStorage.setItem("currentUser", JSON.stringify(currentUser));

  closeModal("account-modal");
  showToast("Account created successfully!");
  updateCartDisplay();
}

// Modal and UI functions
function showModal(modalId) {
  document.getElementById(modalId).classList.add("active");
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.remove("active");
}

function openTab(tabName) {
  document.querySelectorAll(".tab-content").forEach((tab) => {
    tab.classList.remove("active");
  });

  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.classList.remove("active");
  });

  document.getElementById(tabName).classList.add("active");

  event.target.classList.add("active");
}

function showSection(section) {
  showToast(`Navigating to ${section} section`);
}

// Hero Slider
function startSlider() {
  setInterval(() => {
    nextSlide();
  }, 5000);
}

function nextSlide() {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  slides[currentSlideIndex].classList.remove("active");
  dots[currentSlideIndex].classList.remove("active");

  currentSlideIndex = (currentSlideIndex + 1) % slides.length;

  slides[currentSlideIndex].classList.add("active");
  dots[currentSlideIndex].classList.add("active");
}

function currentSlide(n) {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  slides[currentSlideIndex].classList.remove("active");
  dots[currentSlideIndex].classList.remove("active");

  currentSlideIndex = n;

  slides[currentSlideIndex].classList.add("active");
  dots[currentSlideIndex].classList.add("active");
}

// Checkout
function checkout() {
  if (!currentUser) {
    showModal("account-modal");
    return;
  }

  const userCart = cart.filter((item) => item.userId === currentUser.id);
  if (userCart.length === 0) {
    showToast("Your cart is empty", "error");
    return;
  }

  const total = userCart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  showToast(`Order placed successfully! Total: KES ${total.toFixed(0)}`);

  cart = cart.filter((item) => item.userId !== currentUser.id);
  saveCart();
  updateCartDisplay();
  toggleCart();
}

// Utility functions
function showToast(message, type = "success") {
  // Create toast element
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.textContent = message;
  toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === "error" ? "#dc3545" : "#28a745"};
        color: white;
        padding: 15px 25px;
        border-radius: 5px;
        z-index: 4000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

// Export functions for global access
window.showCategory = showCategory;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.toggleCart = toggleCart;
window.showModal = showModal;
window.closeModal = closeModal;
window.openTab = openTab;
window.showSection = showSection;
window.currentSlide = currentSlide;
window.checkout = checkout;
