const cart = [];

document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", (event) => {
    const product = event.target.closest(".product-item");
    const productName = product.querySelector(".product-name").textContent;
    const productHarga = parseFloat(product.querySelector(".product-harga").textContent.replace(/[^0-9.-]+/g, ""));

     // Cek apakah produk sudah ada di keranjang
     const existingProduct = cart.find((item) => item.name === productName);

     if (existingProduct) {
       // Jika produk sudah ada, tambahkan quantity
       existingProduct.quantity += 1;
     } else {
       // Jika produk belum ada, tambahkan ke keranjang
       cart.push({ name: productName, harga: productHarga, quantity: 1 });
     }
 
     // Perbarui modal keranjang
     updateCartModal();
     updateCartBadge();
  });
});

document.getElementById("buy-button").addEventListener("click", () => {
    if (cart.length === 0) {
      alert("Keranjang Anda kosong!");
      return;
    }
  
    // Buat pesan terima kasih dengan daftar produk
    let message = "Terima kasih sudah berbelanja! Berikut barang yang Anda beli:\n\n";
    cart.forEach((item) => {
      message += `- ${item.name} (${item.quantity} x ${item.harga.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })})\n`;
    });
  
    // Tampilkan alert
    alert(message);
  
    // Kosongkan keranjang
    cart.length = 0;
    updateCartModal(); // Perbarui tampilan modal
    window.location.href = "index.html";
  });

// Fungsi untuk memperbarui isi modal keranjang
function updateCartModal() {
    const cartItems = document.getElementById("cartItems");
    cartItems.innerHTML = ""; // Kosongkan daftar sebelumnya
    let totalHarga = 0; // Variabel untuk menghitung total harga
  
    // Tambahkan item dari keranjang ke modal
    cart.forEach((item, index) => {
      totalHarga += item.harga * item.quantity; // Hitung total harga
  
      const listItem = document.createElement("li");
      listItem.className = "list-group-item d-flex justify-content-between align-items-center";
      listItem.innerHTML = `
        <div>
          <strong>${item.name}</strong> - ${item.quantity} x ${item.harga.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}
        </div>
        <div>
          <button class="btn btn-danger btn-sm me-2" onclick="removeFromCart(${index})">Hapus</button>
          <button class="btn btn-secondary btn-sm" onclick="updateQuantity(${index}, -1)">-</button>
          <button class="btn btn-secondary btn-sm" onclick="updateQuantity(${index}, 1)">+</button>
        </div>
      `;
      cartItems.appendChild(listItem);
    });
    // Tampilkan total harga
  const totalHargaElement = document.createElement("li");
  totalHargaElement.className = "list-group-item d-flex justify-content-between align-items-center";
  totalHargaElement.innerHTML = `
    <strong>Total Harga:</strong>
    <strong>${totalHarga.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</strong>
  `;
  cartItems.appendChild(totalHargaElement);
}

// Fungsi untuk memperbarui quantity produk
function updateQuantity(index, delta) {
    cart[index].quantity += delta;
  
    // Jika quantity kurang dari 1, hapus item
    if (cart[index].quantity < 1) {
      cart.splice(index, 1);
    }
  
    updateCartModal(); // Perbarui modal
  }
  
  // Fungsi untuk menghapus item dari keranjang
  function removeFromCart(index) {
    cart.splice(index, 1); // Hapus item berdasarkan indeks
    updateCartModal(); // Perbarui modal
  }


  // Fungsi untuk memperbarui badge keranjang
function updateCartBadge() {
    const cartBadge = document.getElementById("cart-badge");
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  
    if (totalItems > 0) {
      cartBadge.textContent = totalItems; // Perbarui jumlah item
      cartBadge.style.display = "block"; // Tampilkan badge
    } else {
      cartBadge.style.display = "none"; // Sembunyikan badge jika kosong
    }
  }
  
  // Inisialisasi pertama (kosongkan badge)
  updateCartBadge();





// navbar
// Navbar Fixed






// Carousel
const carousel = document.querySelector(".carousel-product");
const productCards = document.querySelectorAll(".product-card");
const totalCards = productCards.length;
let currentPosition = 0;
let visibleCards = getVisibleCards();

function getVisibleCards() {
  if (window.innerWidth < 600) return 1;
  if (window.innerWidth < 900) return 2;
  return 3;
}

function updateCarousel() {
  const cardWidth = productCards[0].offsetWidth + 20; // Card width + margin
  carousel.style.transform = `translateX(-${currentPosition * cardWidth}px)`;
}

document.getElementById("prevBtn").addEventListener("click", () => {
  if (currentPosition > 0) {
    currentPosition--;
    updateCarousel();
  }
});

document.getElementById("nextBtn").addEventListener("click", () => {
  if (currentPosition < totalCards - visibleCards) {
    currentPosition++;
    updateCarousel();
  }
});

window.addEventListener("resize", () => {
  visibleCards = getVisibleCards();
  currentPosition = Math.min(currentPosition, totalCards - visibleCards);
  updateCarousel();
});
