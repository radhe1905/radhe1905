
    var modal = document.getElementById("authModal");
    var loginForm = document.getElementById("loginForm");
    var signupForm = document.getElementById("signupForm");
    var showSignup = document.getElementById("showSignup");
    var showLogin = document.getElementById("showLogin");

    // Show login modal on page load
    window.onload = function () {
      modal.style.display = "block";
      loginForm.style.display = "block";
      signupForm.style.display = "none";
      document.body.style.overflow = "hidden"; // Disable scrolling
    };

    // Login submission
    loginForm.querySelector("form").onsubmit = function (e) {
      e.preventDefault();
      alert("Login Successful!");
      modal.style.display = "none";
      document.body.style.overflow = "auto"; // Enable scrolling
    };

    // Signup submission
    signupForm.querySelector("form").onsubmit = function (e) {
      e.preventDefault();
      alert("Sign Up Successful!");
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    };

    // Toggle to signup
    showSignup.onclick = function (e) {
      e.preventDefault();
      loginForm.style.display = "none";
      signupForm.style.display = "block";
    };

    // Toggle to login
    showLogin.onclick = function (e) {
      e.preventDefault();
      signupForm.style.display = "none";
      loginForm.style.display = "block";
    };

    // Disable closing modal
    document.querySelector(".close").onclick = function () {
      alert("You must login or sign up to access the site!");
    };
    // Get elements
    const modals = document.querySelectorAll(".modal");
    const closeButtons = document.querySelectorAll(".close");

    const giftBtn = document.getElementById("giftBtn");
    const giftModal = document.getElementById("giftModal");

    const cartBtn = document.getElementById("cartBtn");
    const cartModal = document.getElementById("cartModal");
    const cartItems = document.getElementById("cartItems");
// CART LOGIC
const cartItemsDiv = document.getElementById('cartItems');
let cart = [];

// Function to render cart
function renderCart() {
  cartItemsDiv.innerHTML = '';
  cart.forEach((item, index) => {
    const div = document.createElement('div');
    div.style = "margin-bottom:10px; display:flex; justify-content:space-between; align-items:center;";
    div.innerHTML = `
      <span>${item.title} - ₹${item.price.toLocaleString()}</span>
      <button style="padding:2px 6px; background:#ff6f61; color:white; border:none; border-radius:4px;">Remove</button>
    `;
    div.querySelector('button').addEventListener('click', () => {
      cart.splice(index, 1);
      renderCart();
    });
    cartItemsDiv.appendChild(div);
  });
}

// OPEN CART MODAL
document.getElementById('cartBtn').addEventListener('click', () => {
  document.getElementById('cartModal').style.display = 'block';
  renderCart();
});

// OPEN GIFT MODAL
document.getElementById('giftBtn').addEventListener('click', () => {
  document.getElementById('giftModal').style.display = 'block';
});

// CLOSE MODALS
document.querySelectorAll('.modal .close').forEach(span => {
  span.addEventListener('click', () => {
    span.parentElement.parentElement.style.display = 'none';
  });
});

// ADD TO CART BUTTONS
document.querySelectorAll('.add-cart-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const card = e.target.closest('.card');
    const title = card.querySelector('h2').innerText;
    const priceText = card.querySelector('.price').innerText.replace('₹','').replace(',','');
    const price = parseInt(priceText);
    cart.push({ title, price });
    alert(`${title} added to cart!`);
  });
});

// BUY NOW BUTTONS → open Gift modal
document.querySelectorAll('.buy-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const card = e.target.closest('.card');
    const title = card.querySelector('h2').innerText;
    document.getElementById('giftModal').style.display = 'block';
    const msgInput = document.querySelector('#giftForm textarea');
    msgInput.value = `I want to buy "${title}" as a gift! 🎁`;
  });
});
