const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  passwordHash: { type: String, required: true },
  phone: { type: String, trim: true },
  address: { type: String, trim: true },
  role: { type: String, enum: ['student', 'admin'], default: 'student' },
  shortlistedColleges: [{ type: mongoose.Schema.Types.ObjectId, ref: 'College' }],
  createdAt: { type: Date, default: Date.now },
});

// Method to compare password with hash
userSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.passwordHash);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
