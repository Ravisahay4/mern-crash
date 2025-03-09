import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        full_name: {
            type: String,
            required: true, // Fixed typo
        },
        mobile_no: {
            type: Number,
            required: true, // Fixed typo
        },
        email: {
            type: String,
            required: true, // Fixed typo
        },
        massage: {
            type: String,
            required: true, // Fixed typo
        },
    },
    { timestamps: true } // Removed invalid "location" option
);

const User = mongoose.model('User', userSchema);

export default User;
