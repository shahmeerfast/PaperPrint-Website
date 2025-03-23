const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// In-memory data store
const services = [
  {
    id: 1,
    title: "Logo Design",
    description: "Professional logo design services for your brand identity",
    features: [
      "Custom logo creation",
      "Multiple design concepts",
      "Unlimited revisions",
      "Brand guidelines"
    ],
    pricing: [
      { name: "Basic", price: 299, deliveryTime: "3-5 days" },
      { name: "Standard", price: 499, deliveryTime: "2-3 days" },
      { name: "Premium", price: 799, deliveryTime: "1-2 days" }
    ]
  },
  {
    id: 2,
    title: "Marketing Materials",
    description: "High-quality prints for all your marketing needs",
    features: [
      "Business cards",
      "Brochures",
      "Flyers",
      "Banners"
    ],
    pricing: [
      { name: "Starter", price: 199, deliveryTime: "5-7 days" },
      { name: "Business", price: 399, deliveryTime: "3-5 days" },
      { name: "Enterprise", price: 699, deliveryTime: "2-3 days" }
    ]
  },
  {
    id: 3,
    title: "Sustainable Products",
    description: "Eco-friendly printing solutions and materials",
    features: [
      "Recycled paper",
      "Eco-friendly inks",
      "Biodegradable materials",
      "Carbon-neutral printing"
    ],
    pricing: [
      { name: "Basic", price: 249, deliveryTime: "5-7 days" },
      { name: "Pro", price: 449, deliveryTime: "3-5 days" },
      { name: "Premium", price: 749, deliveryTime: "2-3 days" }
    ]
  },
  {
    id: 4,
    title: "Personalized Products",
    description: "Custom designs for your unique requirements",
    features: [
      "Custom stationery",
      "Personalized gifts",
      "Corporate merchandise",
      "Event materials"
    ],
    pricing: [
      { name: "Basic", price: 199, deliveryTime: "5-7 days" },
      { name: "Standard", price: 399, deliveryTime: "3-5 days" },
      { name: "Premium", price: 699, deliveryTime: "2-3 days" }
    ]
  }
];

// In-memory cart store
const carts = new Map(); // Using Map to store carts by userId

// Routes

// Get all services
app.get('/api/services', (req, res) => {
  res.json(services);
});

// Get a specific service by ID
app.get('/api/services/:id', (req, res) => {
  const service = services.find(s => s.id === parseInt(req.params.id));
  if (!service) {
    return res.status(404).json({ message: 'Service not found' });
  }
  res.json(service);
});

// Get pricing for a specific service
app.get('/api/services/:id/pricing', (req, res) => {
  const service = services.find(s => s.id === parseInt(req.params.id));
  if (!service) {
    return res.status(404).json({ message: 'Service not found' });
  }
  res.json(service.pricing);
});

// Create a new service inquiry/order
app.post('/api/services/inquiries', (req, res) => {
  const { name, email, serviceId, message, selectedPackage } = req.body;
  
  // In a real application, you would save this to a database
  // For now, we'll just return a success message
  res.status(201).json({
    message: 'Inquiry received successfully',
    inquiryId: Date.now(),
    status: 'pending'
  });
});

// Cart Routes

// Get cart items for a user
app.get('/api/cart/:userId', (req, res) => {
  const userId = req.params.userId;
  const cart = carts.get(userId) || [];
  res.json(cart);
});

// Add item to cart
app.post('/api/cart/:userId/add', (req, res) => {
  const userId = req.params.userId;
  const { serviceId, packageName, quantity = 1 } = req.body;

  console.log('Add to cart request:', { userId, serviceId, packageName, quantity });

  // Find the service
  const service = services.find(s => s.id === parseInt(serviceId));
  if (!service) {
    console.log('Service not found:', serviceId);
    return res.status(404).json({ message: 'Service not found' });
  }

  // Find the package
  const selectedPackage = service.pricing.find(p => p.name === packageName);
  if (!selectedPackage) {
    console.log('Package not found:', packageName);
    return res.status(404).json({ message: 'Package not found' });
  }

  // Get or create cart for user
  let cart = carts.get(userId) || [];
  console.log('Current cart:', cart);

  // Check if item already exists in cart
  const existingItemIndex = cart.findIndex(
    item => item.serviceId === serviceId && item.packageName === packageName
  );

  if (existingItemIndex !== -1) {
    // Update quantity if item exists
    cart[existingItemIndex].quantity += quantity;
    console.log('Updated existing item quantity');
  } else {
    // Add new item if it doesn't exist
    const newItem = {
      serviceId,
      serviceName: service.title,
      packageName,
      price: selectedPackage.price,
      quantity,
      deliveryTime: selectedPackage.deliveryTime
    };
    cart.push(newItem);
    console.log('Added new item to cart:', newItem);
  }

  // Update cart in storage
  carts.set(userId, cart);
  console.log('Updated cart:', cart);

  res.status(200).json({
    message: 'Item added to cart',
    cart
  });
});

// Update cart item quantity
app.put('/api/cart/:userId/update', (req, res) => {
  const userId = req.params.userId;
  const { serviceId, packageName, quantity } = req.body;

  let cart = carts.get(userId);
  if (!cart) {
    return res.status(404).json({ message: 'Cart not found' });
  }

  const itemIndex = cart.findIndex(
    item => item.serviceId === serviceId && item.packageName === packageName
  );

  if (itemIndex === -1) {
    return res.status(404).json({ message: 'Item not found in cart' });
  }

  if (quantity <= 0) {
    // Remove item if quantity is 0 or negative
    cart.splice(itemIndex, 1);
  } else {
    // Update quantity
    cart[itemIndex].quantity = quantity;
  }

  carts.set(userId, cart);

  res.json({
    message: 'Cart updated',
    cart
  });
});

// Remove item from cart
app.delete('/api/cart/:userId/remove', (req, res) => {
  const userId = req.params.userId;
  const { serviceId, packageName } = req.body;

  let cart = carts.get(userId);
  if (!cart) {
    return res.status(404).json({ message: 'Cart not found' });
  }

  const itemIndex = cart.findIndex(
    item => item.serviceId === serviceId && item.packageName === packageName
  );

  if (itemIndex === -1) {
    return res.status(404).json({ message: 'Item not found in cart' });
  }

  cart.splice(itemIndex, 1);
  carts.set(userId, cart);

  res.json({
    message: 'Item removed from cart',
    cart
  });
});

// Clear cart
app.delete('/api/cart/:userId/clear', (req, res) => {
  const userId = req.params.userId;
  carts.delete(userId);
  
  res.json({
    message: 'Cart cleared'
  });
});

// Get cart summary (total items and price)
app.get('/api/cart/:userId/summary', (req, res) => {
  const userId = req.params.userId;
  const cart = carts.get(userId) || [];

  const summary = {
    totalItems: 0,
    subtotal: 0,
    tax: 0,
    total: 0
  };

  cart.forEach(item => {
    summary.totalItems += item.quantity;
    summary.subtotal += item.price * item.quantity;
  });

  // Calculate tax (assuming 10% tax rate)
  summary.tax = summary.subtotal * 0.1;
  summary.total = summary.subtotal + summary.tax;

  res.json(summary);
});

// Checkout cart
app.post('/api/cart/:userId/checkout', (req, res) => {
  const userId = req.params.userId;
  const { shippingAddress, paymentDetails } = req.body;

  const cart = carts.get(userId);
  if (!cart || cart.length === 0) {
    return res.status(400).json({ message: 'Cart is empty' });
  }

  // In a real application, you would:
  // 1. Validate payment details
  // 2. Process payment
  // 3. Create order in database
  // 4. Send confirmation email
  // 5. Clear cart

  // For now, we'll just simulate a successful checkout
  const orderId = Date.now().toString();
  carts.delete(userId); // Clear the cart after successful checkout

  res.status(200).json({
    message: 'Order placed successfully',
    orderId,
    orderDetails: {
      items: cart,
      shippingAddress,
      orderDate: new Date().toISOString()
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 