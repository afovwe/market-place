import Order from '../models/order.js';
import User from '../models/user.js';

export const createOrder = async (req, res) => {
  try {
    const { userId, cartItems, totalPrice, shippingAddress, paymentMethod } = req.body;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const products = cartItems.map(item => ({
      name: item?.title,
      quantity: item.quantity,
      price: item.price,
      image: item?.image,
    }));

    const order = new Order({ user: userId, products, totalPrice, shippingAddress, paymentMethod });
    await order.save();

    res.status(200).json({ message: 'Order created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating order' });
  }
};

export const getOrders = async (req, res) => {
  try {
    const userId = req.params.userId;
    const orders = await Order.find({ user: userId }).populate('user');
    if (!orders || orders.length === 0) {
      return res.status(404).json({ message: 'No orders found' });
    }

    res.status(200).json({ orders });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving orders' });
  }
};
