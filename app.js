// Narindra Techno Tools - E-Commerce Application & Interactive Engine (Black-White-Orange Theme)

// --- PRODUCT CATALOG DATABASE ---
const PRODUCTS_DATA = [
  {
    id: "ntt-001",
    name: "Bosch GSB 500W Professional Impact Drill Machine",
    category: "power-tools",
    categoryName: "Power Tools",
    brand: "BOSCH",
    originalPrice: 3850,
    discountedPrice: 2890,
    rating: 4.9,
    reviewsCount: 128,
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=600&q=80",
    description: "Heavy-duty 500W motor drill for concrete, masonry, wood, and metal drilling. Ergonomic soft-grip handle with variable speed control switch.",
    specs: { Power: "500 Watts", "No-Load Speed": "0 - 2600 RPM", "Chuck Capacity": "10 mm", Weight: "1.5 kg" },
    inStock: true
  },
  {
    id: "ntt-002",
    name: "Makita 9557HN 840W 115mm Heavy Duty Angle Grinder",
    category: "power-tools",
    categoryName: "Power Tools",
    brand: "MAKITA",
    originalPrice: 4900,
    discountedPrice: 3750,
    rating: 4.8,
    reviewsCount: 94,
    image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=600&q=80",
    description: "Compact angle grinder with powerful 840W motor for grinding, cutting, and deburring industrial metals and masonry.",
    specs: { Power: "840 Watts", "Wheel Diameter": "115 mm", "No-Load Speed": "11000 RPM", Weight: "2.1 kg" },
    inStock: true
  },
  {
    id: "ntt-003",
    name: "DeWalt DCD771C2 18V Cordless Drill/Driver Kit",
    category: "power-tools",
    categoryName: "Power Tools",
    brand: "DEWALT",
    originalPrice: 12500,
    discountedPrice: 9490,
    rating: 5.0,
    reviewsCount: 215,
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
    description: "High performance cordless drill driver with 2x 18V XR Li-Ion battery packs, 16 position torque control, and LED work light.",
    specs: { Voltage: "18V Lithium-Ion", Torque: "42 Nm", "Battery Capacity": "1.3 Ah", Speed: "0-450 / 0-1500 RPM" },
    inStock: true
  },
  {
    id: "ntt-004",
    name: "Milwaukee Fuel M18 165mm Heavy Duty Circular Saw",
    category: "power-tools",
    categoryName: "Power Tools",
    brand: "MILWAUKEE",
    originalPrice: 24000,
    discountedPrice: 18900,
    rating: 4.9,
    reviewsCount: 76,
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80",
    description: "POWERSTATE brushless motor delivers faster cutting speeds and maximum durability for professional carpenters and framers.",
    specs: { Voltage: "18V", "Blade Diameter": "165 mm", "Max Cut Depth": "57 mm", Speed: "5000 RPM" },
    inStock: true
  },
  {
    id: "ntt-005",
    name: "Hilti TE 30-AVR Heavy Duty SDS-Plus Rotary Hammer",
    category: "power-tools",
    categoryName: "Power Tools",
    brand: "HILTI",
    originalPrice: 34500,
    discountedPrice: 28990,
    rating: 5.0,
    reviewsCount: 62,
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80",
    description: "Versatile 3-mode SDS Plus rotary hammer with Active Vibration Reduction (AVR) for heavy chiseling and concrete drilling.",
    specs: { Power: "850 Watts", "Single Impact Energy": "3.6 J", "Hammering Frequency": "4500 bpm", Weight: "4.2 kg" },
    inStock: true
  },
  {
    id: "ntt-006",
    name: "iWELD 200A Single Phase Inverter ARC Welding Machine",
    category: "welding",
    categoryName: "Welding Equipment",
    brand: "IWELD",
    originalPrice: 9500,
    discountedPrice: 6990,
    rating: 4.8,
    reviewsCount: 110,
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600&q=80",
    description: "IGBT inverter technology ARC welder with digital current display, thermal overload protection, and anti-stick function.",
    specs: { "Current Range": "20-200 Amps", "Duty Cycle": "60%", Voltage: "220V Single Phase", Weight: "4.8 kg" },
    inStock: true
  },
  {
    id: "ntt-007",
    name: "ESAB Sentinel A50 Auto-Darkening Welding Helmet",
    category: "welding",
    categoryName: "Welding Equipment",
    brand: "ESAB",
    originalPrice: 16800,
    discountedPrice: 13900,
    rating: 4.9,
    reviewsCount: 48,
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600&q=80",
    description: "Revolutionary halo design welding shield with high optical clarity 1/1/1/2 lens, external grind button, and color touch screen control panel.",
    specs: { Shade: "5-13", "Switching Time": "1/25000 sec", "Sensors": "4 Arc Sensors", Weight: "640 g" },
    inStock: true
  },
  {
    id: "ntt-008",
    name: "Taparia 1272 Professional Mechanical Tool Set (72 Pcs)",
    category: "hand-tools",
    categoryName: "Hand Tools",
    brand: "TAPARIA",
    originalPrice: 7500,
    discountedPrice: 5850,
    rating: 4.9,
    reviewsCount: 310,
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=600&q=80",
    description: "Comprehensive 72-piece chrome vanadium steel socket and bit set housed in a blow-molded heavy-duty carrying case.",
    specs: { "Piece Count": "72 Pieces", Material: "Chrome Vanadium Steel", Finish: "Mirror Chrome", Drive: "1/4\" & 1/2\"" },
    inStock: true
  },
  {
    id: "ntt-009",
    name: "Stanley Heavy Duty 6-Way Bench Vice 150mm",
    category: "hand-tools",
    categoryName: "Hand Tools",
    brand: "STANLEY",
    originalPrice: 8900,
    discountedPrice: 6990,
    rating: 4.7,
    reviewsCount: 83,
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80",
    description: "Forged iron swiveling bench vice designed for high clamping forces on steel fabrications, pipe cutting, and heavy assembly.",
    specs: { "Jaw Width": "150 mm", "Clamping Force": "30 kN", Material: "Cast Iron", Swivel: "360 Degrees" },
    inStock: true
  },
  {
    id: "ntt-010",
    name: "Mitutoyo 500-196-30 Absolute Digimatic Vernier Caliper 150mm",
    category: "measuring",
    categoryName: "Measuring & Precision",
    brand: "MITUTOYO",
    originalPrice: 11200,
    discountedPrice: 8950,
    rating: 5.0,
    reviewsCount: 175,
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
    description: "Industry standard Japanese electronic digital caliper for high-precision metric and inch dimensions with origin-set feature.",
    specs: { Range: "0-150 mm", Accuracy: "±0.02 mm", Resolution: "0.01 mm", Display: "LCD Digimatic" },
    inStock: true
  },
  {
    id: "ntt-011",
    name: "Bosch GLM 50-27 CG Professional Green Laser Measure",
    category: "measuring",
    categoryName: "Measuring & Precision",
    brand: "BOSCH",
    originalPrice: 14500,
    discountedPrice: 11800,
    rating: 4.9,
    reviewsCount: 92,
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=600&q=80",
    description: "Rugged laser distance meter with green laser technology for maximum visibility on rough construction job sites.",
    specs: { "Measuring Range": "0.05 - 50 m", Accuracy: "±1.5 mm", "Protection Rating": "IP65 Waterproof", Connectivity: "Bluetooth 4.2" },
    inStock: true
  },
  {
    id: "ntt-012",
    name: "Makita 100mm Diamond Cutting Wheel Discs (Pack of 10)",
    category: "abrasives",
    categoryName: "Cutting & Abrasives",
    brand: "MAKITA",
    originalPrice: 1950,
    discountedPrice: 1390,
    rating: 4.8,
    reviewsCount: 140,
    image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=600&q=80",
    description: "Segmented diamond cutting blade set for high-speed cutting of granite, marble, reinforced concrete, and ceramic tiles.",
    specs: { Diameter: "100 mm", "Bore Diameter": "20/16 mm", "Max RPM": "15300", Pack: "10 Discs" },
    inStock: true
  }
];

// --- GLOBAL APPLICATION STATE ---
const state = {
  products: [...PRODUCTS_DATA],
  filteredProducts: [...PRODUCTS_DATA],
  cart: [],
  categoryFilter: "all",
  brandFilter: "all",
  searchQuery: "",
  selectedProductForCall: null,
  selectedProductForView: null
};

// --- INITIALIZATION ENGINE ---
document.addEventListener("DOMContentLoaded", () => {
  loadSavedCart();
  setupEventListeners();
  renderProducts();
  updateCartBadge();

  // Dismiss Opening Splash Screen smoothly after initial load
  setTimeout(() => {
    const splash = document.getElementById("opening-splash");
    if (splash) {
      splash.classList.add("fade-out");
    }
  }, 1100);
});

// Load cart from localStorage
function loadSavedCart() {
  const saved = localStorage.getItem("ntt_cart");
  if (saved) {
    try {
      state.cart = JSON.parse(saved);
    } catch (e) {
      state.cart = [];
    }
  }
}

// --- EVENT LISTENERS ---
function setupEventListeners() {
  // Category Pill Buttons
  const categoryButtons = document.querySelectorAll(".cat-filter-btn");
  categoryButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      const category = e.target.getAttribute("data-category");
      state.categoryFilter = category;
      
      categoryButtons.forEach(b => b.classList.remove("active"));
      e.target.classList.add("active");

      applyFilters();
    });
  });

  // Search Bar input
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value.toLowerCase().trim();
      applyFilters();
    });
  }

  // Brand selector
  const brandSelect = document.getElementById("brand-select");
  if (brandSelect) {
    brandSelect.addEventListener("change", (e) => {
      state.brandFilter = e.target.value;
      applyFilters();
    });
  }

  // Cart Drawer open/close
  document.getElementById("btn-open-cart")?.addEventListener("click", openCartDrawer);
  document.getElementById("btn-close-cart")?.addEventListener("click", closeCartDrawer);
  document.getElementById("cart-backdrop")?.addEventListener("click", closeCartDrawer);

  // Call Modal backdrop close
  document.getElementById("call-modal-backdrop")?.addEventListener("click", closeCallModal);
  document.getElementById("btn-close-call-modal")?.addEventListener("click", closeCallModal);

  // Quick View Modal backdrop close
  document.getElementById("view-modal-backdrop")?.addEventListener("click", closeViewModal);
  document.getElementById("btn-close-view-modal")?.addEventListener("click", closeViewModal);

  // Callback form submission
  document.getElementById("callback-form")?.addEventListener("submit", handleCallbackSubmit);

  // Checkout button
  document.getElementById("btn-checkout")?.addEventListener("click", handleCheckout);
}

// --- FILTERING ENGINE ---
function applyFilters() {
  state.filteredProducts = state.products.filter(item => {
    const matchesCategory = state.categoryFilter === "all" || item.category === state.categoryFilter;
    const matchesBrand = state.brandFilter === "all" || item.brand === state.brandFilter;
    const matchesSearch = !state.searchQuery || 
                          item.name.toLowerCase().includes(state.searchQuery) ||
                          item.brand.toLowerCase().includes(state.searchQuery) ||
                          item.categoryName.toLowerCase().includes(state.searchQuery);
    return matchesCategory && matchesBrand && matchesSearch;
  });

  renderProducts();
}

// --- RENDER PRODUCTS GRID ---
function renderProducts() {
  const gridContainer = document.getElementById("products-grid");
  const countSpan = document.getElementById("products-count");
  if (!gridContainer) return;

  if (countSpan) {
    countSpan.textContent = `${state.filteredProducts.length} Items Found`;
  }

  if (state.filteredProducts.length === 0) {
    gridContainer.innerHTML = `
      <div class="col-span-full py-16 text-center">
        <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#161616] border border-[#2a2a2a] text-[#ff5500] mb-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        </div>
        <h3 class="text-lg font-extrabold text-white uppercase font-display">No Equipment Found</h3>
        <p class="text-xs text-zinc-400 mt-1 font-medium">Try broadening your search query or clearing selected category filters.</p>
        <button onclick="clearAllFilters()" class="mt-4 px-5 py-2 text-xs font-bold text-[#ff5500] underline uppercase tracking-wider">Reset All Filters</button>
      </div>
    `;
    return;
  }

  gridContainer.innerHTML = state.filteredProducts.map((product, index) => {
    const savings = product.originalPrice - product.discountedPrice;
    const delayClass = index < 8 ? `delay-${((index % 4) + 1) * 100}` : '';
    
    return `
      <div class="product-card rounded-2xl p-4 flex flex-col justify-between relative shadow-lg animate-scale-in ${delayClass}">
        
        <!-- Product Image & Badges -->
        <div>
          <div class="product-card-img-wrapper aspect-4/3 mb-4 p-4 flex items-center justify-center cursor-pointer bg-white rounded-xl" onclick="openViewModal('${product.id}')">
            <img src="${product.image}" alt="${product.name}" class="max-h-full max-w-full object-contain" />
            
            ${savings > 0 ? `
              <span class="absolute top-2 right-2 bg-[#ff5500] text-white text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md shadow-md">
                Save ₹${savings.toLocaleString('en-IN')}
              </span>
            ` : ''}
          </div>

          <!-- Brand & Rating -->
          <div class="flex items-center justify-between mb-2">
            <span class="text-[10px] font-black uppercase tracking-widest text-[#ff5500] font-mono-custom">${product.brand}</span>
            <div class="flex items-center gap-1 bg-[#121212] px-2 py-0.5 rounded-md border border-[#2a2a2a]">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="#ff5500" stroke="#ff5500"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <span class="text-[10px] font-bold text-zinc-300 font-mono-custom">${product.rating}</span>
            </div>
          </div>

          <!-- Product Title -->
          <h3 class="text-sm font-bold text-white leading-snug mb-3 line-clamp-2 cursor-pointer hover:text-[#ff5500] transition-colors" onclick="openViewModal('${product.id}')">
            ${product.name}
          </h3>
        </div>

        <!-- Pricing & Dual Action Buttons (Cart + Call Now) -->
        <div class="pt-3 border-t border-[#2a2a2a]">
          <div class="flex items-baseline gap-2 mb-3">
            <span class="text-lg font-black text-white tracking-tight font-mono-custom">₹${product.discountedPrice.toLocaleString('en-IN')}</span>
            ${product.originalPrice > product.discountedPrice ? `
              <span class="text-xs font-semibold text-zinc-500 line-through font-mono-custom">₹${product.originalPrice.toLocaleString('en-IN')}</span>
            ` : ''}
          </div>

          <!-- DUAL SIDE-BY-SIDE BUTTONS: ADD TO CART & CALL NOW -->
          <div class="action-buttons-group">
            <button class="btn-cart animate-squish" onclick="addToCart('${product.id}')">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
              <span>Cart</span>
            </button>
            
            <button class="btn-call-now animate-squish animate-wiggle" onclick="openCallModal('${product.id}')">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>Call Now</span>
            </button>
          </div>
        </div>

      </div>
    `;
  }).join("");
}

function clearAllFilters() {
  state.categoryFilter = "all";
  state.brandFilter = "all";
  state.searchQuery = "";
  
  const searchInput = document.getElementById("search-input");
  if (searchInput) searchInput.value = "";
  
  const brandSelect = document.getElementById("brand-select");
  if (brandSelect) brandSelect.value = "all";

  const categoryButtons = document.querySelectorAll(".cat-filter-btn");
  categoryButtons.forEach(b => b.classList.remove("active"));
  if (categoryButtons[0]) {
    categoryButtons[0].classList.add("active");
  }

  applyFilters();
}

// --- CALL NOW MODAL LOGIC (User Request) ---
function openCallModal(productId) {
  const product = state.products.find(p => p.id === productId);
  if (!product) return;

  state.selectedProductForCall = product;

  document.getElementById("modal-product-name").textContent = product.name;
  document.getElementById("modal-product-price").textContent = `₹${product.discountedPrice.toLocaleString('en-IN')}`;
  document.getElementById("modal-product-img").src = product.image;

  // Set direct telephone href
  const phoneBtn = document.getElementById("modal-btn-direct-call");
  if (phoneBtn) {
    phoneBtn.href = `tel:+918283848559`;
  }

  // Set WhatsApp query link
  const waBtn = document.getElementById("modal-btn-whatsapp");
  if (waBtn) {
    const waText = encodeURIComponent(`Hi Narindra Techno Tools, I am interested in purchasing: ${product.name} (Price: ₹${product.discountedPrice}). Please provide availability & wholesale bulk quotation.`);
    waBtn.href = `https://wa.me/918283848559?text=${waText}`;
  }

  const backdrop = document.getElementById("call-modal-backdrop");
  const modal = document.getElementById("call-modal");
  
  if (backdrop && modal) {
    backdrop.classList.add("active");
    modal.classList.add("active");
  }
}

function closeCallModal() {
  const backdrop = document.getElementById("call-modal-backdrop");
  const modal = document.getElementById("call-modal");
  
  if (backdrop && modal) {
    backdrop.classList.remove("active");
    modal.classList.remove("active");
  }
}

function handleCallbackSubmit(e) {
  e.preventDefault();
  const phoneInput = document.getElementById("callback-phone")?.value;
  const nameInput = document.getElementById("callback-name")?.value;

  showToast(`Callback request submitted for ${nameInput || 'Valued Customer'} (${phoneInput})! Our team will call you within 15 minutes.`);
  closeCallModal();
}

// --- PRODUCT QUICK VIEW MODAL ---
function openViewModal(productId) {
  const product = state.products.find(p => p.id === productId);
  if (!product) return;

  state.selectedProductForView = product;

  document.getElementById("view-product-brand").textContent = product.brand;
  document.getElementById("view-product-name").textContent = product.name;
  document.getElementById("view-product-price").textContent = `₹${product.discountedPrice.toLocaleString('en-IN')}`;
  document.getElementById("view-product-mrp").textContent = product.originalPrice > product.discountedPrice ? `₹${product.originalPrice.toLocaleString('en-IN')}` : '';
  document.getElementById("view-product-desc").textContent = product.description;
  document.getElementById("view-product-img").src = product.image;

  // Render specs
  const specsContainer = document.getElementById("view-product-specs");
  if (specsContainer && product.specs) {
    specsContainer.innerHTML = Object.entries(product.specs).map(([key, val]) => `
      <div class="flex justify-between py-1.5 border-b border-[#2a2a2a] text-xs">
        <span class="text-zinc-400 font-medium">${key}</span>
        <span class="text-white font-bold font-mono-custom">${val}</span>
      </div>
    `).join("");
  }

  // Set modal action buttons
  const viewCartBtn = document.getElementById("view-btn-cart");
  if (viewCartBtn) {
    viewCartBtn.onclick = () => {
      addToCart(product.id);
      closeViewModal();
    };
  }

  const viewCallBtn = document.getElementById("view-btn-call");
  if (viewCallBtn) {
    viewCallBtn.onclick = () => {
      closeViewModal();
      openCallModal(product.id);
    };
  }

  const backdrop = document.getElementById("view-modal-backdrop");
  const modal = document.getElementById("view-modal");
  
  if (backdrop && modal) {
    backdrop.classList.add("active");
    modal.classList.add("active");
  }
}

function closeViewModal() {
  const backdrop = document.getElementById("view-modal-backdrop");
  const modal = document.getElementById("view-modal");
  
  if (backdrop && modal) {
    backdrop.classList.remove("active");
    modal.classList.remove("active");
  }
}

// --- CART MANAGEMENT & DRAWER ---
function addToCart(productId) {
  const product = state.products.find(p => p.id === productId);
  if (!product) return;

  const existingItem = state.cart.find(item => item.id === productId);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    state.cart.push({
      id: product.id,
      name: product.name,
      brand: product.brand,
      price: product.discountedPrice,
      image: product.image,
      quantity: 1
    });
  }

  saveCart();
  updateCartBadge();
  renderCartDrawer();
  showToast(`Added "${product.name.slice(0, 25)}..." to cart!`);
}

function updateQuantity(productId, delta) {
  const item = state.cart.find(i => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    state.cart = state.cart.filter(i => i.id !== productId);
  }

  saveCart();
  updateCartBadge();
  renderCartDrawer();
}

function removeFromCart(productId) {
  state.cart = state.cart.filter(i => i.id !== productId);
  saveCart();
  updateCartBadge();
  renderCartDrawer();
}

function saveCart() {
  localStorage.setItem("ntt_cart", JSON.stringify(state.cart));
}

function updateCartBadge() {
  const count = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const badge = document.getElementById("cart-badge");
  if (badge) {
    badge.textContent = count;
    badge.style.display = count > 0 ? "flex" : "none";
  }
}

function openCartDrawer() {
  renderCartDrawer();
  document.getElementById("cart-backdrop")?.classList.add("active");
  document.getElementById("cart-drawer")?.classList.add("active");
}

function closeCartDrawer() {
  document.getElementById("cart-backdrop")?.classList.remove("active");
  document.getElementById("cart-drawer")?.classList.remove("active");
}

function renderCartDrawer() {
  const container = document.getElementById("cart-items-list");
  const subtotalSpan = document.getElementById("cart-subtotal");
  const gstSpan = document.getElementById("cart-gst");
  const totalSpan = document.getElementById("cart-total");

  if (!container) return;

  if (state.cart.length === 0) {
    container.innerHTML = `
      <div class="py-16 text-center text-zinc-400">
        <svg class="mx-auto mb-3 opacity-40 text-[#ff5500]" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
        <p class="font-bold uppercase text-xs tracking-wider text-white font-display">Your Shopping Cart is Empty</p>
        <p class="text-xs mt-1 text-zinc-400">Add industrial tools to your cart or call our sales desk directly.</p>
      </div>
    `;
    if (subtotalSpan) subtotalSpan.textContent = "₹0";
    if (gstSpan) gstSpan.textContent = "₹0";
    if (totalSpan) totalSpan.textContent = "₹0";
    return;
  }

  let subtotal = 0;

  container.innerHTML = state.cart.map(item => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;

    return `
      <div class="flex items-center gap-3 p-3 bg-[#161616] rounded-xl border border-[#2a2a2a]">
        <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-contain bg-white rounded-lg p-1 border border-[#2a2a2a]" />
        <div class="flex-1 min-w-0">
          <span class="text-[9px] font-black uppercase tracking-widest text-[#ff5500] font-mono-custom">${item.brand}</span>
          <h4 class="text-xs font-bold text-white truncate">${item.name}</h4>
          <span class="text-xs font-black text-white font-mono-custom mt-1 block">₹${item.price.toLocaleString('en-IN')}</span>
        </div>
        <div class="flex flex-col items-end gap-2">
          <button onclick="removeFromCart('${item.id}')" class="text-zinc-400 hover:text-red-500 p-1 transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
          <div class="flex items-center border border-[#2a2a2a] rounded-md bg-[#0a0a0a]">
            <button onclick="updateQuantity('${item.id}', -1)" class="px-2 py-0.5 text-xs font-bold text-zinc-300 hover:bg-[#1e1e1e]">-</button>
            <span class="px-2 text-xs font-bold font-mono-custom text-white">${item.quantity}</span>
            <button onclick="updateQuantity('${item.id}', 1)" class="px-2 py-0.5 text-xs font-bold text-zinc-300 hover:bg-[#1e1e1e]">+</button>
          </div>
        </div>
      </div>
    `;
  }).join("");

  const gst = Math.round(subtotal * 0.18);
  const grandTotal = subtotal + gst;

  if (subtotalSpan) subtotalSpan.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
  if (gstSpan) gstSpan.textContent = `₹${gst.toLocaleString('en-IN')}`;
  if (totalSpan) totalSpan.textContent = `₹${grandTotal.toLocaleString('en-IN')}`;
}

function handleCheckout() {
  if (state.cart.length === 0) {
    showToast("Cart is empty! Please add tools before checking out.");
    return;
  }

  showToast("Order Inquiry Received! Narindra Techno Tools dispatch team will contact you shortly.");
  state.cart = [];
  saveCart();
  updateCartBadge();
  closeCartDrawer();
}

// --- TOAST NOTIFICATIONS ---
function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "fixed bottom-6 right-6 z-150 bg-[#161616] text-white border border-[#ff5500] px-5 py-3.5 rounded-xl shadow-2xl text-xs font-bold uppercase tracking-wider flex items-center gap-3 transition-all duration-300 transform translate-y-10 opacity-0";
  toast.innerHTML = `
    <div class="w-2.5 h-2.5 rounded-full bg-[#ff5500] animate-ping"></div>
    <span>${message}</span>
  `;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.remove("translate-y-10", "opacity-0");
  }, 50);

  setTimeout(() => {
    toast.classList.add("translate-y-10", "opacity-0");
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
