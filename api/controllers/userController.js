import User from '../models/user.js';

export const addAddress = async (req, res) => {
  try {
    const { userId, address } = req.body;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.addresses.push(address);
    await user.save();

    res.status(200).json({ message: 'Address added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error adding address' });
  }
};

export const getAddresses = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ addresses: user.addresses });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving addresses' });
  }
};

export const getProfile = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving profile' });
  }
};
