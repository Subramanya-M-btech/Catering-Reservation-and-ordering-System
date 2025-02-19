    // Sample food data - Adding 20 menu items

    const products = [
        {
          id: 1,
          name: "Butter Chicken",
          description:
            "A rich, flavorful chicken dish cooked in a creamy tomato sauce.",
          price: 259,
          image: "images/Butter Chicken.jpg",
        },
        {
          id: 2,
          name: "Paneer Tikka",
          description: "Grilled paneer marinated with spices, a vegetarian delight.",
          price: 238,
          image: "images/paneer-tikka.jpg",
        },
        {
          id: 3,
          name: "Biryani",
          description:
            "A fragrant rice dish with spices and marinated chicken or mutton.",
          price: 302,
          image: "images/biryani.jpg",
        },
        {
          id: 4,
          name: "Samosa",
          description: "Crispy pastry filled with spicy potatoes and peas.",
          price: 89,
          image: "images/samosa.jpg",
        },
        {
          id: 5,
          name: "Tandoori Chicken",
          description:
            "Juicy chicken cooked in a traditional clay oven with aromatic spices.",
          price: 289,
          image: "images/Tandoori Chicken.jpg",
        },
        {
          id: 6,
          name: "Aloo Paratha",
          description: "A stuffed flatbread served with yogurt and pickle.",
          price: 103,
          image: "images/Aloo Paratha.jpg",
        },
        {
          id: 7,
          name: "Chole Bhature",
          description: "Spicy chickpeas served with deep-fried bread.",
          price: 110,
          image: "images/Chole Bhature.jpg",
        },
        {
          id: 8,
          name: "Dosa",
          description: "Crispy rice pancakes served with chutney and sambar.",
          price: 101,
          image: "images/dosa.jpg",
        },
        {
          id: 9,
          name: "Vada Pav",
          description:
            "A spicy potato fritter sandwich, a Mumbai street food classic.",
          price: 75,
          image: "images/vada-pav.jpg",
        },
        {
          id: 10,
          name: "Pav Bhaji",
          description: "A spiced vegetable mash served with buttered pav buns.",
          price: 98,
          image: "images/pav-bhaji.jpg",
        },
        {
          id: 11,
          name: "Lassi",
          description: "A refreshing yogurt-based drink, sweet or salty.",
          price: 43,
          image: "images/lassi.jpg",
        },
        {
          id: 12,
          name: "Momos",
          description: "Steamed dumplings filled with spicy vegetables or meat.",
          price: 130,
          image: "images/momos.jpg",
        },
        {
          id: 13,
          name: "Pani Puri",
          description:
            "Crispy puris filled with spicy tamarind water, a popular snack.",
          price: 110,
          image: "images/pani-puri.jpg",
        },
        {
          id: 14,
          name: "Gulab Jamun",
          description:
            "Deep-fried dough balls soaked in sugary syrup, a sweet treat.",
          price: 99,
          image: "images/gulab-jamun.jpg",
        },
        {
          id: 15,
          name: "Rogan Josh",
          description: "Tender lamb cooked in a rich, aromatic gravy.",
          price: 258,
          image: "images/rogan-josh.jpg",
        },
        {
          id: 16,
          name: "Baingan Bharta",
          description: "Smoky eggplant mashed and cooked with spices.",
          price: 150,
          image: "images/baingan-bharta.jpg",
        },
        {
          id: 17,
          name: "Mutter Paneer",
          description: "Cottage cheese cooked with peas in a spicy gravy.",
          price: 230,
          image: "images/mutter-paneer.jpg",
        },
        {
          id: 18,
          name: "Tandoori Roti",
          description: "Traditional flatbread cooked in a tandoor.",
          price: 30,
          image: "images/tandoori-roti.jpg",
        },
        {
          id: 19,
          name: "Kebabs",
          description: "Grilled skewers of marinated meat or vegetables.",
          price: 310,
          image: "images/kebabs.jpg",
        },
        {
          id: 20,
          name: "Naan",
          description: "Soft, leavened flatbread, a perfect side dish for curries.",
          price: 45,
          image: "images/naan.jpg",
        },
      ];
  
      // Function to load menu items dynamically
      function loadMenu() {
        const menuItemsContainer = document.getElementById("menu-items");
  
        // Check if the container exists
        if (!menuItemsContainer) {
          console.log('menu-items container not found');
          return;
        }
  
        // Proceed if the container exists
        products.forEach((product) => {
          const productElement = document.createElement("div");
          productElement.classList.add("menu-item");
          productElement.innerHTML = `
              <img src="${product.image}" alt="${product.name}">
              <h3>${product.name}</h3>
              <p>${product.description}</p>
              <p>Rs${product.price}</p>
              <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
          `;
          menuItemsContainer.appendChild(productElement);
        });
      }
  
  
      let cart = []; // Global cart array
  
      // Function to add items to the cart
      function addToCart(productId) {
        const product = products.find((p) => p.id === productId);
        cart.push(product);
        alert(`${product.name} added to cart!`);
  
        // Update cart display
        showCart();
      }
  
      // Function to show cart items with images
      function showCart() {
        const cartContainer = document.getElementById("cart-items");
        cartContainer.innerHTML = ""; // Clear previous cart items
  
        // If there are no items in the cart
        if (cart.length === 0) {
          cartContainer.innerHTML = "<p>Your cart is empty!</p>";
          return;
        }
  
        // Loop through the cart and display each item
        cart.forEach((item) => {
          const cartItem = document.createElement("div");
          cartItem.classList.add("cart-item");
  
          cartItem.innerHTML = `
            <div class="cart-item-details">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>$${item.price}</p>
                </div>
            </div>
            <button class="remove-from-cart" onclick="removeFromCart(${item.id})">Remove</button>
          `;
          cartContainer.appendChild(cartItem);
        });
      }
  
      // Function to remove item from cart
      function removeFromCart(productId) {
        // Find the index of the product in the cart array
        const productIndex = cart.findIndex((item) => item.id === productId);
  
        if (productIndex !== -1) {
          // Remove the item from the cart
          cart.splice(productIndex, 1);
          showCart(); // Update the cart display after removal
        } else {
          console.log("Product not found in cart");
        }
      }
  
      // Function to handle order placement
      document.addEventListener("DOMContentLoaded", function () {
        const placeOrderButton = document.getElementById("place-order");
  
        if (placeOrderButton) {
          placeOrderButton.addEventListener("click", function () {
            const orderAnimation = document.getElementById("order-animation");
  
            if (orderAnimation) {
              orderAnimation.classList.remove("hidden");
  
              setTimeout(function () {
                orderAnimation.classList.add("hidden");
                alert("Thank you for your order!");
              }, 3000); // Hides the animation after 3 seconds
            } else {
              console.log("Element with ID 'order-animation' not found.");
            }
          });
        } else {
          console.log("Element with ID 'place-order' not found.");
        }
      });
  
      // Load menu on page load
      window.onload = loadMenu;
  
  
      //register form
  
      // Handle form submission