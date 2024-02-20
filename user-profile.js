// user-profile.js
document.addEventListener('DOMContentLoaded', function() {
    // Mock cart items and order history data
    const mockCartItems = [
      { name: 'Snack 1', price: 5.99 },
      { name: 'Snack 2', price: 4.99 }
    ];
  
    const mockOrderHistory = [
      { id: '123', items: [{ name: 'Snack 3', price: 6.99 }], total: 6.99 },
      { id: '124', items: [{ name: 'Snack 4', price: 3.99 }], total: 3.99 }
    ];
  
    const cartItemsContainer = document.getElementById('cart-items');
    const orderList = document.getElementById('order-list');
  
    // Function to display cart items
    function displayCartItems(items) {
      cartItemsContainer.innerHTML = '';
      items.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.textContent = `${item.name}: $${item.price}`;
        cartItemsContainer.appendChild(cartItem);
      });
    }
  
    // Function to display order history
    function displayOrderHistory(orders) {
      orderList.innerHTML = '';
      orders.forEach(order => {
        const orderItem = document.createElement('li');
        orderItem.textContent = `Order ID: ${order.id}, Total: $${order.total}`;
        orderList.appendChild(orderItem);
      });
    }
  
    // Mock function to fetch cart items and order history (replace with actual fetch requests)
    function fetchUserProfileData() {
      // Simulate fetching cart items and order history data
      setTimeout(() => {
        displayCartItems(mockCartItems);
        displayOrderHistory(mockOrderHistory);
      }, 1000); // Simulate delay for fetching data
    }
  
    fetchUserProfileData(); // Fetch and display user profile data
  });
  